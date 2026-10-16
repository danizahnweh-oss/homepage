# Datenschutzänderungen – privater Testbetrieb

## Direkt in der Website
- Testbetrieb gekennzeichnet; neue Buchungen fragen einen fiktiven Namen ab.
- Freitextzweck durch vier Kategorien ersetzt; bestehende Buchungen bleiben erhalten.
- Sitzung in sessionStorage statt dauerhafter Anmeldung in localStorage; alte lokale Sitzungsdaten werden beim nächsten Besuch entfernt.
- Abmelden ruft Supabase /auth/v1/logout?scope=local auf und leert private Daten aus dem UI. Verbindungsfehler werden mitgeteilt. Zugriffstokens gelten bis zu ihrem Ablauf.
- /datenschutz beschreibt die tatsächlichen Datenflüsse und benennt noch offene rechtliche Angaben.

## Einmalig in Supabase
1. 05-berechtigungen.sql im SQL Editor ausführen: Auth-Prüfung, NULL-sichere Aktionsprüfung, explizite Funktionsrechte. Diese Erweiterung ist vorrangig.
2. 06-buchungskategorien.sql ausführen: Kategorien und Buchungsoptionen serverseitig prüfen.
3. Edge Function notify-admins: vollständigen Inhalt von supabase/functions/notify-admins/index.ts ersetzen und erneut deployen. verify_jwt bleibt false; withSupabase prüft den geheimen apikey. Vorhandene Secrets und Trigger bleiben nutzbar.

Die neue Mail enthält weder Namen noch Konto-E-Mail-Adresse, Zeiten oder Zweck und keinen replyTo-Wert des Buchenden. Empfänger werden ausschließlich als BCC angesprochen. Fehlerprotokolle enthalten keine SMTP-Fehlerobjekte mit möglichen Empfängerangaben. Bereits verschickte E-Mails werden dadurch nicht gelöscht.

Die Änderung der Mailfunktion kann nicht durch die Veröffentlichung der Website aktiviert werden. Nach deren Installation auch die Aussage auf /datenschutz aktualisieren, dass die Mailversion noch nicht bestätigt ist.

## Löschung ist bewusst nicht aktiv
07-loeschung-vorbereiten.sql kann optional zwei Admin-Funktionen installieren. preview_expired_bookings zählt alte Buchungen; purge_expired_bookings löscht erst mit ausdrücklicher Bestätigung. Die Installation löscht nichts und legt keinen Cronjob an. Zukünftige Buchungen und noch laufende Serien bleiben erhalten. Zugehörige booking_notifications werden beim Löschen über den Fremdschlüssel gelöscht. Auth-Konten, Mailkopien, Anbieterprotokolle und Backups sind separat zu behandeln.

## Noch zu entscheiden
- Identität und vollständige Kontaktdaten des Verantwortlichen sowie zuständige Aufsicht für den privaten Testbetrieb.
- Rechtsgrundlage für Testkonten und spätere schulische Nutzung; Zustimmung zu Hinweisen ist kein pauschaler Ersatz.
- Schulische Anbieterfreigabe/Vertragspartner; Verträge für Sites/Hosting, Supabase und SMTP.
- Projektregion, internationale Datenflüsse, Vertragsschutz und Unterauftragnehmer.
- Dienstlich freigegebene Absender- und Admin-Mailadressen; GMX/Gmail wurden nicht eigenmächtig ersetzt.
- Löschfristen für Konten, Buchungen, Logs, Mailkopien und Backups.

Die Schulhomepage nennt für das offizielle Schulangebot die LHM/RBS/Städtisches St.-Anna-Gymnasium und datenschutz.rbs.schulen@muenchen.de. Diese Verantwortlichkeit ist dem privaten Testangebot nicht automatisch zugeordnet.

## Technische Prüfung

Die SQL-Regeln werden in einer isolierten PostgreSQL-Instanz über PGlite geprüft: ursprüngliche NULL-Aktionslücke, verweigerte Fremdzugriffe, erlaubte Admin-/Eigentümeraktionen, RLS, Kategorien, einmalige Benachrichtigung für Abos und Schutz der Löschfunktion. Die Instanz hat keine Verbindung zu echten Nutzerkonten und verschickt keine E-Mails. Zum Wiederholen @electric-sql/pglite außerhalb des Projekts installieren und SMV_PGLITE_MODULE auf dessen dist/index.js setzen; anschließend im Checkout node tests/privacy-sql.mjs ausführen. Für den historischen Vergleich wird der ursprüngliche Commit e506588fbca0034f8fe3092ee56910e37c4f8e11 verwendet.

## Erweiterung vom 16.10.2026: Schüler ohne persönliches E-Mail-Postfach
Siehe supabase/functions/student-accounts/README.md. Die eigene Edge Function und 08-schueler-ohne-email.sql ermöglichen Registrieren und Login mit eindeutigem Namen/Passwort. Nur Admins behalten ihre E-Mail-Anmeldung. Schülerbuchungen speichern requester_email als NULL und übernehmen den kanonischen Kontonamen serverseitig. Die interne Supabase-Kennung unter students.invalid ist kein erreichbares Postfach und wird im UI nicht angezeigt. Konten von bisherigen E-Mail-Nutzern werden nicht automatisch zusammengeführt. Die Prüffälle in tests/student-auth.mjs und tests/student-sql.mjs decken Rollen, Identitätsnormalisierung, Passwortreset, Registrierungslimits, Profile, Buchungen und RLS ab.
