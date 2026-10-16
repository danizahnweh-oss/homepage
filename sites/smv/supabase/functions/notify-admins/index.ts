// Supabase Edge Function: Database Webhook (booking_notifications, INSERT).
// Deploy with verify_jwt=false; the @supabase/server wrapper verifies the apikey secret.
import { withSupabase } from "npm:@supabase/server@^1";
import nodemailer from "npm:nodemailer@^9";

type NotificationEvent = {
  type?: string;
  table?: string;
  schema?: string;
  record?: { id?: string };
};

const idPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const mailUser = Deno.env.get("SMV_SMTP_USER");
const mailPassword = Deno.env.get("SMV_SMTP_PASSWORD");
const transport = mailUser && mailPassword
  ? nodemailer.createTransport({ host: "mail.gmx.net", port: 465, secure: true, auth: { user: mailUser, pass: mailPassword } })
  : null;

export default {
  fetch: withSupabase({ auth: "secret" }, async (request, ctx) => {
    if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });
    const event: NotificationEvent = await request.json().catch(() => ({}));
    if (event.type !== "INSERT" || event.schema !== "public" || event.table !== "booking_notifications" || !idPattern.test(event.record?.id ?? "")) {
      return new Response("Invalid webhook payload", { status: 400 });
    }
    if (!transport || !mailUser) return new Response("SMTP secrets missing", { status: 503 });

    // Claim the event atomically. Duplicate webhook deliveries cannot send a second email.
    const { data: item, error: claimError } = await ctx.supabaseAdmin
      .from("booking_notifications")
      .update({ status: "sending" })
      .eq("id", event.record!.id!)
      .eq("status", "pending")
      .select("id,booking_id")
      .maybeSingle();
    if (claimError) throw claimError;
    if (!item) return Response.json({ status: "already_processed" });

    let mailed = false;
    try {
      const [{ data: booking, error: bookingError }, { data: admins, error: adminError }] = await Promise.all([
        ctx.supabaseAdmin.from("bookings").select("id,status").eq("id", item.booking_id).single(),
        ctx.supabaseAdmin.from("smv_admins").select("email"),
      ]);
      if (bookingError || !booking) throw bookingError ?? new Error("Booking missing");
      if (adminError) throw adminError;
      if (booking.status !== "pending") {
        await ctx.supabaseAdmin.from("booking_notifications").update({ status: "sent", sent_at: new Date().toISOString() }).eq("id", item.id);
        return Response.json({ status: "no_longer_pending" });
      }
      const recipients = [...new Set((admins ?? []).map((a: { email: string }) => a.email.trim().toLowerCase()).filter(Boolean))];
      if (!recipients.length) throw new Error("No administrators configured");
      const text = [
        "Neue Anfrage für das SMV-Zimmer",
        "",
        "In der Verwaltung liegt eine neue Buchungsanfrage zur Prüfung vor.",
        "Bitte melde dich an, um die Details einzusehen:",
        "https://smv.daniel-zahnweh.de/",
      ].join("\n");
      await transport.sendMail({
        from: `SMV-Zimmer <${mailUser}>`,
        bcc: recipients.join(", "),
        subject: "Neue Buchungsanfrage für das SMV-Zimmer",
        text,
      });
      mailed = true;
      const { error: markError } = await ctx.supabaseAdmin.from("booking_notifications")
        .update({ status: "sent", sent_at: new Date().toISOString() }).eq("id", item.id);
      if (markError) throw markError;
      return Response.json({ status: "sent" });
    } catch (error) {
      // The webhook can be retried after fixing the configuration or SMTP service.
      if (!mailed) await ctx.supabaseAdmin.from("booking_notifications").update({ status: "pending" }).eq("id", item.id);
      console.error("Admin notification failed");
      return Response.json({ error: "Could not send notification" }, { status: 503 });
    }
  }),
};
