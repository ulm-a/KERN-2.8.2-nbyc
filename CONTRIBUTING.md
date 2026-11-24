# Mitwirken

Danke für das Interesse. Dieses Repository ist ein **interner Arbeitsstand** einer
KERN-Adaption; Änderungen folgen ein paar festen Regeln, damit das System nicht
auseinanderläuft.

## Die fünf Grundsätze

1. **KERN zuerst.** Was KERN festlegt — Wert, Name, Markup, Zustand — wird übernommen,
   nicht verbessert und nicht „angeglichen". Abweichen nur mit Grund, sichtbar markiert
   und in `ABWEICHUNGEN.txt` benannt.
2. **Nur Tokens.** Kein roher Farbwert, kein rohes Maß, keine rohe Dauer außerhalb der
   Token-Dateien. Abgeleitete Werte als Formel (`calc`, `color-mix`), nicht als
   ausgerechnete Zahl. Eigene Tokens heißen `--kn-*`.
3. **Keine Deckkraft auf Text.** Zurückgenommenes bekommt eine eigene Farbe; die einzige
   erlaubte Deckkraft auf Text ist die für „deaktiviert".
4. **Tastatur und Rückmeldung sind Teil des Bausteins**, keine Zugabe. Ein Baustein ohne
   vollständigen Tastaturvertrag ist nicht fertig.
5. **`system/kern.css` wird nie verändert** und nicht in Teilen nachgebaut. Angepasst
   wird nur über Tokens in einer eigenen Datei danach.

## Der Weg einer Änderung

1. **Kennung vergeben** (`M<n>` für das System, `D<n>` für Designer und OnePager) und
   in der jeweiligen Änderungsdatei vormerken.
2. **Ändern** — nur das Verlangte. Ideen daneben werden gemeldet, nicht nebenbei gebaut.
3. **Im Browser messen**, nicht im Quelltext ablesen: Ausrichtung, Farbe, Abstände am
   gerenderten Bild. „Gebaut" sagt nichts über den Bildschirm.
4. **Versionsstempel** setzen, wenn sich sichtbar etwas geändert hat:
   `python3 pruefung/stempel.py` — nie von Hand.
5. **Prüfen:**

   ```bash
   cd "KERN 2.8.2 (nbyc)" && python3 pruefung/pruefe.py
   python3 "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" --pruefen
   python3 "KERN Designer/pruefung/pruefe-designer.py"
   ```

   Ohne Beanstandung, sonst ist die Änderung nicht fertig.
6. **Eintrag** in `AENDERUNGEN.txt` (System) bzw. in der Changes-Datei (Designer) mit
   **WAS · WARUM · BELEG**, dann ein Commit je Kennung: `M110 Kurzer Titel`.

## Neue Prüfung, neuer Baustein

* Eine **neue Prüfung** ist erst fertig, wenn ihre **Gegenprobe in einer Kopie rot war** —
  ein Prüfskript, das nichts findet, beweist nichts.
* Vor einem **Zusatzbaustein** prüfen, ob KERN-Bausteine kombiniert schon reichen.
  Sonst: Präfix `kn-`, englischer Name nach KERNs Schema, gebaut wie der nächstverwandte
  KERN-Baustein, nur aus `contextual`-Tokens; Pflicht sind alle Varianten und Größen,
  die Zustände (normal, hover, Fokus, aktiv, ausgewählt, deaktiviert, nur lesen, Fehler,
  besucht, lädt), Windows-Kontrastmodus, Ebenen 0/1/2 und hell/dunkel/erhöhter Kontrast.
* **Stories nie von Hand schreiben.** Nach jeder Katalogänderung:
  `python3 "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py"`.
* **Zweisprachig:** jede Komponente, jeder Bestandteil und jeder Katalogtext auf Deutsch
  und Englisch (Prüfung 17 und 19 wachen darüber).

## Was nicht hineingehört

* npm-Abhängigkeiten im Design-System (nur das Storybook darf welche haben)
* Netzabfragen zur Laufzeit — keine CDNs, keine Schriftabfragen, keine Analyse
* Werte aus anderen Design-Systemen (Carbon, Material, GOV.UK) als Maß oder Farbe
* erzeugte Dateien von Hand bearbeiten (`token.json`, `UMSTIEG.txt`, die Stories,
  `katalog/kern-inhalt.js`) — immer den Generator laufen lassen
* vertrauliche Unterlagen, Kundendaten, Schlüssel oder Tokens

## Fehler melden

Ein Fehler im **offiziellen KERN** gehört an KERN selbst, nicht hierher — hier wird er
nicht nachgebaut und nicht still repariert, sondern mit einem benannten Ausweichwert
umgangen und als Befund geführt. Ein Fehler in **dieser Adaption** gern als Issue, mit
Browser, Betriebssystem, Modus (hell/dunkel/erhöhter Kontrast) und dem, was zu sehen
war statt des Erwarteten.
