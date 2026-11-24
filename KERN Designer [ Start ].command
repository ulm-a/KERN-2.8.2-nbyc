#!/bin/zsh
# KERN Designer starten — Doppelklick im Finder.
# Startet den lokalen Server (nur dieser Rechner, 127.0.0.1:8059) und öffnet
# Designer und OnePager im Standardbrowser. Beenden: dieses Fenster schließen
# oder ctrl+C. Die Fenster nebeneinander stellen: je eine Bildschirmhälfte.
# Liegt im Projektordner, direkt über "KERN Designer" (D23) — echte Datei, kein Alias,
# damit sie auch in Kopien, im ZIP und in Git funktioniert.
cd "${0:A:h}/KERN Designer"
if lsof -nP -iTCP:8059 -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Server läuft schon — öffne nur die Seiten."
else
  python3 server/server.py &
  SERVER=$!
  trap 'kill $SERVER 2>/dev/null' EXIT INT TERM
  sleep 1
fi
open "http://127.0.0.1:8059/KERN%20OnePager/"
open "http://127.0.0.1:8059/KERN%20Designer/"
[ -n "$SERVER" ] && wait $SERVER
