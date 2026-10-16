import { env } from "cloudflare:workers";
export function GET() {
  const settings = env as unknown as Record<string, string | undefined>;
  return Response.json({url:settings.SUPABASE_URL || "",key:settings.SUPABASE_PUBLISHABLE_KEY || ""},{headers:{"Cache-Control":"no-store"}});
}
