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
# Liegt in "Blog Post" neben der Seite — echte Datei, kein Alias.
#
# WICHTIG: Der Server wird eine Ebene HÖHER gestartet, im Projektordner
# ("${0:A:h}/.."), nicht hier. Sonst liegt das Design-System außerhalb seines
# Wurzelordners und wäre über http:// nicht erreichbar — die Seite käme wieder
# ohne Gestaltung. Deshalb steht "Blog%20Post/" auch in der Adresse unten.
cd "${0:A:h}/.."
if lsof -nP -iTCP:8058 -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Server läuft schon — öffne nur die Seite."
else
  python3 -m http.server 8058 --bind 127.0.0.1 >/dev/null 2>&1 &
  SERVER=$!
  trap 'kill $SERVER 2>/dev/null' EXIT INT TERM
  sleep 1
fi

# Jedes Mal eine FRISCHE Adresse (?frisch=Zeitstempel). Zwei Gründe:
# 1. "open" holt eine schon offene Registerkarte mit derselben Adresse nur nach
#    vorn, ohne sie neu zu laden — dann sieht man die alte Seite weiter.
# 2. Safari hält die Seite im Zwischenspeicher. Eine neue Adresse umgeht beides.
ADRESSE="http://127.0.0.1:8058/Blog%20Post/index.html?frisch=$(date +%s)"

# Prüfen, dass auf 8058 WIRKLICH dieser Projektordner liegt (es könnte ein
# Server aus einem anderen Ordner laufen) — sonst sieht man eine fremde Seite.
if ! curl -sf "$ADRESSE" | grep -q "KERN 2.8.2 (nbyc)"; then
  echo "ACHTUNG: Auf 127.0.0.1:8058 antwortet nicht dieser Projektordner."
  echo "Den anderen Server beenden und diese Datei noch einmal starten."
fi

open "$ADRESSE"
[ -n "$SERVER" ] && wait $SERVER
