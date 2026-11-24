#!/bin/zsh
# KERN 2.8.2 (nbyc) Storybook starten — Doppelklick im Finder.
# "nbyc" = "New by Claude"; interne Adaption von KERN 2.8.2, nicht das offizielle KERN.
# Startet Storybook (nur dieser Rechner, 127.0.0.1:6006) und öffnet es im Standardbrowser.
# Beenden: dieses Fenster schließen oder ctrl+C. Braucht Node.js 20 oder neuer
# (siehe "KERN 2.8.2 (nbyc) Storybook/LIESMICH.txt"); beim ersten Start läuft npm install.
# Liegt im Projektordner, direkt über "KERN 2.8.2 (nbyc) Storybook" — echte Datei, kein Alias,
# damit sie auch in Kopien, im ZIP und in Git funktioniert.
cd "${0:A:h}/KERN 2.8.2 (nbyc) Storybook" || { echo "Ordner \"KERN 2.8.2 (nbyc) Storybook\" nicht gefunden"; exit 1; }
# Node auch finden, wenn das Terminal ~/.zshrc nicht gelesen hat
export PATH="$HOME/.local/node/bin:/opt/homebrew/bin:/usr/local/bin:$PATH"
SEITE="http://127.0.0.1:6006/"
if lsof -nP -iTCP:6006 -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Storybook läuft schon — öffne nur die Seite."; open "$SEITE"; exit 0
fi
if ! command -v npm >/dev/null 2>&1; then
  echo "npm nicht gefunden: zuerst Node.js installieren (LTS von nodejs.org)."; exit 1
fi
if [ ! -d node_modules ]; then
  echo "Erster Start: npm install …"; npm install || exit 1
fi
npm run storybook -- --no-open &
SERVER=$!
trap 'kill $SERVER 2>/dev/null' EXIT INT TERM
echo "Storybook startet …"
for i in {1..300}; do curl -fsS -o /dev/null "$SEITE" 2>/dev/null && break; sleep 0.2; done
open "$SEITE"
echo "Storybook läuft (127.0.0.1:6006). Beenden: dieses Fenster schließen oder ctrl+C."
wait $SERVER
