# Herkunft und Lizenzen

Was hier woher kommt und unter welchen Bedingungen es benutzt werden darf.
Nach bestem Wissen zusammengestellt, Stand 24.11.2026 — **ersetzt keine rechtliche
Prüfung.** Die ausführliche Fassung mit allen Prüfdaten steht in
[`KERN 2.8.2 (nbyc)/LIZENZ.txt`](KERN%202.8.2%20(nbyc)/LIZENZ.txt).

## 1 Eigener Code

Alles in diesem Repository außer `KERN 2.8.2 (nbyc)/system/kern.css`: die
Erweiterungen (`system/01b`, `02`–`06`), `kern-neu.css`, `kern-neu.js`, der Katalog,
die Muster-Seiten, die Prüfskripte, der Storybook-Generator, der KERN Designer, der
OnePager und alle `.txt`-Dateien.

* **Rechteinhaber:** Capgemini
* **Lizenz:** EUPL-1.2 — dieselbe Lizenz wie KERN. Text: [`LICENSE`](LICENSE)
* Hinweis im Sinne der EUPL: *Lizenziert unter der EUPL*

## 2 KERN 2.8.2 — eingebunden, unverändert

* **Quelle:** KERN Design System, `@kern-ux/native` 2.8.2 (23.09.2026), Datei `dist/kern.css`
* **Datei hier:** `KERN 2.8.2 (nbyc)/system/kern.css`, Byte für Byte gleich
  (SHA-256 `516fe93d218b483c08cebdd366190bd67b4f49e204a20c0b4187fcfd21fcd79e`;
  Prüfung 10 in `pruefung/pruefe.py` vergleicht bei jedem Lauf)
* **Lizenz:** EUPL-1.2, Text liegt bei: [`LICENSES/EUPL-1.2.md`](LICENSES/EUPL-1.2.md)
  und `KERN 2.8.2 (nbyc)/system/kern-LICENSE.md`
* **Name:** Dieses System ist **nicht** das offizielle KERN und darf nicht als solches
  ausgegeben werden. Weil die Nummer der des offiziellen KERN gleicht, steht der Zusatz
  „(nbyc)" immer dabei. KERN verlangt „nicht KERN ohne Absprache" — die Absprache über
  den Namen ist offen; vor jeder Weitergabe nach außen wird er neu entschieden.
* **Nicht enthalten:** KERNs eigene Dokumentation, Steckbriefe und Beispieldateien
  (`_ Resources/kern/userdoc*`) sowie das npm-Paket selbst. Sie gehören KERN und liegen
  hier nicht bei. Die Katalog-Generatoren und `pruefe-designer.py` brauchen sie; ohne
  sie laufen die bereits erzeugten Dateien unverändert weiter.

## 3 Symbole — Material Symbols, über KERN

* **Quelle:** Die Symbole (`kern-icon--…`) stecken als SVG-Masken in `kern.css`. Laut
  KERN-Dokumentation sind es Google Material Symbols (rounded, fill, weight 400,
  grade 0, optical size 24).
* **Lizenz:** Apache-2.0, geprüft an der Quelle `github.com/google/material-design-icons`.
  Text liegt bei: [`LICENSES/Apache-2.0.txt`](LICENSES/Apache-2.0.txt)
  (11 358 Bytes, geladen am 24.11.2026 von `www.apache.org/licenses/LICENSE-2.0.txt`).
  Derselbe Text liegt ein zweites Mal im System selbst
  (`KERN 2.8.2 (nbyc)/system/material-symbols-LICENSE.txt`), damit er auch dann dabei
  ist, wenn nur der Systemordner weitergegeben wird.
* **Lücke im Original:** Das KERN-Paket nennt Herkunft und Lizenz der Symbole selbst
  nicht — als Befund an das KERN-Team gemeldet.
* **Eigenes Symbol:** `kn-icon--filter-list` (Katalogfilter) in KERNs Bauart als Maske,
  Form nachgezeichnet, nicht aus der Originaldatei kopiert.

## 4 Fira Sans — die Schrift

* **Quelle:** Fira Sans von Erik Spiekermann und Ralph du Carrois für Mozilla;
  Rechte: The Mozilla Foundation und Telefónica S.A.
* **Lizenz:** SIL Open Font License 1.1, Text liegt bei:
  [`LICENSES/OFL-1.1.txt`](LICENSES/OFL-1.1.txt) (4 479 Bytes, unverändert)
* **Dateien:** `KERN 2.8.2 (nbyc)/schrift/fira-sans/*.woff2` — die 10 eingebundenen
  Schnitte (300–700, normal und kursiv)
* Die Bedingungen der OFL sind eingehalten: die Schrift wird nicht verkauft, die
  Dateien sind unverändert, und der Name „Fira Sans" wird nicht für eine geänderte
  Fassung benutzt.

## 5 IBM Carbon — ein Zahlenwert

Eine frühere Fassung übernahm Carbons Maßskalen. In 2.8.2 (nbyc) sind alle Carbon-Maße
entfernt; Prüfung 11 sucht die entfallenen Namen, Prüfung 9 jedes rohe Maß. Geblieben
ist ein einzelner Wert: die Bewegungskurve `--kn-easing: cubic-bezier(0.2, 0, 0.38, 0.9)`
(Carbons „productive standard"; KERN hat keine Bewegungstokens). Die Herkunft steht an
der Stelle im Code. Carbon selbst steht unter Apache-2.0.

## 6 Storybook und npm

Nur `KERN 2.8.2 (nbyc) Storybook` benutzt npm-Pakete — `@storybook/html-vite` 9 und
Vite, mit festgeschriebenen Versionen und Lockfile (`npm ci`). Das Design-System selbst
hat **keine** npm-Abhängigkeit. `node_modules` liegt nicht im Repository; die Lizenzen
der Entwicklungswerkzeuge stehen in ihren Paketen.

## 7 Was nicht enthalten ist

Dieses System lädt nichts aus dem Netz: keine Google Fonts, kein CDN, keine Analyse,
keine Tracker, keine Schriftabfrage. Auch `kern.css` lädt nichts nach (kein `@import`,
keine externen Schriftdateien, nur eingebettete SVG-Grafiken).
