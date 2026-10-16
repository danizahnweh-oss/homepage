# Admin-Benachrichtigungen aktivieren

1. `04-admin-benachrichtigungen.sql` im SQL Editor ausführen. Die Tabelle `booking_notifications` erhält bei einer Anfrage genau eine Zeile (auch bei einem Wochenabo).
2. In Supabase unter **Edge Functions** die Funktion `notify-admins` mit dem Code aus `index.ts` erstellen und deployen. **Verify JWT** deaktivieren: Der Funktionscode prüft stattdessen einen geheimen Supabase-API-Schlüssel im Header `apikey`.
3. Unter **Edge Functions → Secrets** setzen: `SMV_SMTP_USER=smv.sag@gmx.de` und `SMV_SMTP_PASSWORD` mit dem Passwort, das bereits für Supabase SMTP funktioniert (bei 2FA das GMX-Anwendungspasswort). Das Passwort gehört ausschließlich in Supabase Secrets, niemals in die Website oder den SQL Editor.
4. Unter **Database → Webhooks** einen Webhook auf `public.booking_notifications`, Ereignis **INSERT**, anlegen. URL: `https://auiarthxhtpddfbysfvq.supabase.co/functions/v1/notify-admins`. Header `Content-Type: application/json` und `apikey: <Supabase secret key aus Project Settings → API Keys>` setzen. Den Secret Key nicht als normalen API-Schlüssel in die Website eintragen oder weitergeben.
5. Nach einer Testanfrage prüfen, ob an alle Adressen in `public.smv_admins` eine E-Mail geht. In `public.booking_notifications` steht danach `status = 'sent'`. Bei `pending` die Webhook- und Function-Logs prüfen. Bei `sending` nach einem Versandfehler ebenfalls die Function-Logs prüfen und erst nach Klärung des Zustellstatus erneut auslösen, damit keine zweite Mail verschickt wird.

Die Funktion verschickt nur Benachrichtigungen für offene Buchungsanfragen. Von Admins sofort bestätigte Termine erzeugen keine Mail. Die erste Buchung eines Wochenabos erzeugt genau eine Benachrichtigung.

## Datenschutzversion vom 13.10.2026

Bei einer bereits installierten Funktion index.ts vollständig ersetzen und erneut deployen. Diese Version verschickt nur einen generischen Hinweis mit Link; Buchungsdetails werden nicht abgefragt oder versendet. Alle Admins erhalten die Mail über BCC. Die bestehenden Secrets und der direkte pg_net-Trigger können weiterverwendet werden. Der Wechsel auf dienstlich freigegebene Postfächer und die Löschung alter Mailkopien sind separate Maßnahmen.
