# Schülerkonten ohne persönliche E-Mail-Adresse

1. Den gesamten Inhalt von `supabase/08-schueler-ohne-email.sql` im Supabase SQL Editor ausführen. Das Paket enthält die vorherige Rechtekorrektur und die serverseitige Kategorienprüfung. Bestehende Konten und Buchungen werden nicht gelöscht.
2. In Edge Functions eine neue Funktion **student-accounts** über den Editor anlegen. `index.ts` vollständig mit dem Inhalt der gleichnamigen Datei aus diesem Ordner ersetzen und deployen. **Verify JWT deaktivieren**: Der Wrapper prüft den öffentlichen Projekt-Key; zum Passwortreset wird zusätzlich ein gültiges Admin-Token geprüft. Keine geheimen Keys in Browsercode eintragen. Die Funktion nutzt bereits vorhandene Supabase-Umgebungswerte; zusätzliche Mail-Secrets sind nicht erforderlich.
Die E-Mail-Bestätigung für normale Supabase-Konten (Confirm Email) eingeschaltet lassen. Sie wird für Schüler ausschließlich durch den geschützten Registrierungsweg automatisch erledigt; Admin-E-Mails müssen weiterhin verifiziert werden.

3. Website neu laden. Erst wenn Datenbank und Funktion verfügbar sind, wird die Schüleranmeldung freigeschaltet. Admin-Login bleibt bei fehlender Einrichtung benutzbar.
4. Mit einem fiktiven Anmeldenamen ein Schülerkonto erstellen und erneut anmelden. Eine Testanfrage absenden; sie muss in der Verwaltung nur den Namen, keine Schüler-E-Mail anzeigen.
5. Als Schüler dürfen Verwaltung und Passwortreset für andere Konten nicht erreichbar sein. Als Admin unter Verwaltung → Schülerkonten nach Prüfung der Person ein neues Passwort setzen. Dieses persönlich übermitteln und anschließend vom Schüler über „Passwort ändern“ ändern lassen. Bereits ausgestellte Zugriffstokens gelten bis zum Ablauf; ein Passwortwechsel ist keine sofortige Sperrung jedes vorhandenen Zugriffstokens.

## Konten und Identität
- 3–60 Zeichen im Anmeldenamen, keine Unterscheidung nach Groß-/Kleinschreibung; Leerzeichen werden vereinheitlicht. Ein Name ist nur einmal verwendbar. Bei Namensgleichheit ein Kürzel ergänzen.
- Mindestens 10 Zeichen im neuen Passwort. Passwörter werden nur an Supabase Auth übergeben, nicht in den Profiltabellen gespeichert oder protokolliert.
- Supabase Auth verlangt intern einen E-Mail-/Telefon-Identifier. Hier wird aus dem normalisierten Anmeldenamen eine SHA-256-basierte technische Kennung (auf 192 Bit gekürzt) mit der reservierten Domain students.invalid abgeleitet. Das ist kein persönliches Postfach. Die Kennung ist ein technisches Pseudonym und keine zusätzliche Authentifizierungsprüfung; das Passwort bleibt erforderlich.
- Schüler brauchen weder eigenes E-Mail-Postfach noch Bestätigungslink. Die Registrierung legt ausschließlich ein bestätigtes Schülerkonto an und übernimmt keine vom Browser angeforderten Rollen.
- Namen allein beweisen keine Identität. Admins müssen bei Passwortresets und Freigaben die Zuordnung unabhängig prüfen.
- Schülerkonten werden in einer RLS-geschützten Tabelle mit Supabase-Konto verknüpft. Andere Schüler können diese Tabelle und die Kontenliste nicht lesen. Eigene Buchungen bleiben durch RLS geschützt.
- Nur service_role darf das Registrierungslimit beanspruchen: maximal 500 Versuche pro Stunde insgesamt, 120 pro gehashtem IP-Schlüssel und 5 pro gehashtem Namen. Der globale Grenzwert bleibt auch bei wechselnden oder manipulierten IP-Headern wirksam. Diese Grenzen ersetzen keine Entscheidung darüber, wer zur Schule gehört.
- Bei fehlgeschlagenem Profileintrag wird nur das in diesem Versuch neu angelegte Auth-Konto wieder entfernt.
- Bestehende E-Mail-Konten von Nicht-Admins werden nicht automatisch in Schülerkonten umgewandelt. Neue Schülerkonten erhalten eine neue Konto-ID; ältere Buchungen bleiben ihrem bisherigen Konto zugeordnet. Keine automatische Übertragung anhand gleicher Namen.

## Änderungen am Datenbestand
`requester_email` darf für Schülerbuchungen NULL sein. Der Name wird serverseitig aus dem Schülerkonto übernommen. Nur eingetragene Admins oder angelegte Schülerkonten können nach Installation neue Buchungen erstellen. Bereits vorhandene Konten, Buchungen, Admin-E-Mails, SMTP-Secrets und der Benachrichtigungstrigger bleiben erhalten. Löschfristen und Anbieterfreigaben sind weiterhin offen.
