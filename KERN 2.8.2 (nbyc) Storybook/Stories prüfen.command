#!/bin/zsh
# KERN 2.8.2 (nbyc) — Storybook-Stories ohne Node prüfen (E12, M103). Doppelklick im Finder.
# "nbyc" = "New by Claude"; interne Adaption von KERN 2.8.2, nicht das offizielle KERN.
# Startet den Prüfserver im Projektordner (nur dieser Rechner, 127.0.0.1:8058) und öffnet die
# Prüfseite im Standardbrowser. Beenden: dieses Fenster schließen oder ctrl+C.
cd "${0:A:h:h}" || { echo "Projektordner nicht gefunden"; exit 1; }
SEITE="http://127.0.0.1:8058/KERN%202.8.2%20(nbyc)%20Storybook/pruefung/stories-pruefen.html"
if lsof -nP -iTCP:8058 -sTCP:LISTEN >/dev/null 2>&1; then
  if curl -fsS -o /dev/null "$SEITE" 2>/dev/null; then
    echo "Prüfserver läuft schon — öffne nur die Seite."; open "$SEITE"; exit 0
  fi
  echo "Port 8058 ist von einem anderen Programm belegt, das die Prüfseite nicht ausliefert."
  echo "Dieses Programm beenden und noch einmal starten."; exit 1
fi
python3 -m http.server 8058 --bind 127.0.0.1 >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null' EXIT INT TERM
for i in {1..50}; do curl -fsS -o /dev/null "$SEITE" 2>/dev/null && break; sleep 0.1; done
open "$SEITE"
echo "Prüfserver läuft (127.0.0.1:8058). Beenden: dieses Fenster schließen oder ctrl+C."
wait $SERVER
