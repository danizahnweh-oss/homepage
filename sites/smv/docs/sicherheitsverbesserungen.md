# Sicherheitsverbesserungen vom 21. Oktober 2026

## Buchungen
`supabase/11-buchungslimits.sql` einmalig nach den bisherigen Erweiterungen ausführen. Die Erweiterung verändert keine bestehenden Buchungen. Schülerkonten können höchstens drei Anfragen in einer Stunde, zehn innerhalb von 24 Stunden und fünf gleichzeitig offene Anfragen haben. Ein Wochenabo zählt als eine Anfrage. Abgesagte/abgelehnte Anfragen zählen weiterhin zum Stunden-/Tageslimit. Eigene überlappende offene Anfragen werden abgewiesen. Admins sind ausgenommen. Prüfung und Speichern stehen unter derselben Transaktionssperre. Ein Fehler bei einem Abo verwirft alle neuen Termine dieses Versuchs.

## Browser-Schutz
`security-headers.ts`, `next.config.ts` und die abschließende Worker-Auslieferung setzen CSP, DENY für Einbettung, nosniff, no-referrer, HSTS und eine restriktive Permissions-Policy. Die CSP erlaubt nur eigene Skriptdateien und den Inline-Bootstrap des Frameworks, keine eval-Aufrufe oder Inline-Ereignishandler. Inline-Styles bleiben für React/Radix erlaubt. Verbindungen sind auf die eigene Website und das verwendete Supabase-Projekt beschränkt. Das ist eine kompatible Basispolicy; eine vollständige Nonce-Umstellung der Frameworkskripte ist darin nicht enthalten.

GitHub Pages erlaubt keine eigenen HTTP-Response-Header. Für die statische SMV-Ausgabe wird ergänzend eine Meta-CSP gesetzt; die vollständigen Header werden auf dem bestehenden Sites-/Cloudflare-Hosting geprüft.

## Paketstand
Next.js/ESLint-Konfiguration 16.3.8, Vite 8.1.6 und Sharp 0.35.5 sowie gepatchte kompatible transitive Abhängigkeiten. React/React DOM und React Server Components werden auf 19.2.8 aktualisiert; das bisherige Vinext-Framework bleibt unverändert. Die Sieben-Tage-Schutzregel für neu veröffentlichte Pakete bleibt aktiv. Prüfungen: `pnpm audit --json` im SMV-Projekt und `npm audit --json` im GitHub-Hauptprojekt.

## Prüfung
`SMV_PGLITE_MODULE=/absoluter/pfad/zu/pglite/dist/index.js node tests/booking-limits.mjs` prüft Limits, Serienzählung, Duplikate, Rollbacks und die Admin-Ausnahme in einer isolierten Datenbank. Die übrigen Auth-/SQL-Tests bleiben unverändert ausführbar. Nach Veröffentlichung Header auf Startseite, Datenschutzhinweisen und Konfigurationsroute prüfen sowie Kalender und Anmeldung im Browser öffnen.

## Verbleibender Paketbefund
Die vollständige Paketprüfung meldet noch `braces` (hoch, GHSA-vfj7-8cjw-p6xm) in der Build-/Lint-Werkzeugkette. Der Registry-Hinweis bietet noch keine korrigierte Version. Es verarbeitet hier interne Dateimuster; die Anwendung übergibt keine Schülerangaben an diese Werkzeuge. Keine Warnung wird unterdrückt.
