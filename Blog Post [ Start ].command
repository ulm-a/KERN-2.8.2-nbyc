#!/bin/zsh
# Werkstattbericht ansehen — Doppelklick im Finder.
# Startet einen lokalen Server (nur dieser Rechner, 127.0.0.1:8058) und öffnet
# "Blog Post/index.html" im Standardbrowser. Beenden: dieses Fenster schließen
# oder ctrl+C.
#
# WARUM ein Server: Die Seite lädt das Design-System aus dem Nachbarordner
# ("../KERN 2.8.2 (nbyc)/system/kern-neu.css"). Safari verweigert bei einem
# Doppelklick auf die Datei (file://) den Zugriff auf Ordner OBERHALB der Seite —
# dann erscheint der Text ohne Gestaltung. Über http:// gibt es die Regel nicht.
# Liegt im Projektordner, direkt über "Blog Post" — echte Datei, kein Alias.
cd "${0:A:h}"
if lsof -nP -iTCP:8058 -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Server läuft schon — öffne nur die Seite."
else
  python3 -m http.server 8058 --bind 127.0.0.1 >/dev/null 2>&1 &
  SERVER=$!
  trap 'kill $SERVER 2>/dev/null' EXIT INT TERM
  sleep 1
fi
open "http://127.0.0.1:8058/Blog%20Post/index.html"
[ -n "$SERVER" ] && wait $SERVER
