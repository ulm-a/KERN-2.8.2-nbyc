# Änderungen

Alle nennenswerten Änderungen dieses Systems, neueste oben. Die Fassungsnummer ist
**unsere** (0.1.1, 0.2.0 …); die 2.8.2 im Namen ist die Version des eingebundenen
offiziellen KERN und wird nie hochgezählt.

Die vollständigen Einträge mit Begründung und Beleg je Kennung stehen in
[`KERN 2.8.2 (nbyc)/AENDERUNGEN.txt`](KERN%202.8.2%20(nbyc)/AENDERUNGEN.txt);
Abweichungen von KERN in `ABWEICHUNGEN.txt`.

## 0.2.0 — 16.11.2026

**Dazu**

* Zwei neue Prüfungen, jetzt 27: „gedrückt schlägt hover" und „Fassung einheitlich".
* `pruefung/fassung-setzen.py`: die Fassung steht an einer Quelle
  (`thema/fassung.json`) und wird daraus an 17 Stellen geschrieben, nie von Hand.
* Startseite mit dem Kasten „Diese Fassung" (Fassung, KERN-Bezugsversion,
  Versionsstempel, Prüfsumme).
* Zwei Zusatzbeispiele am Knopf zeigen `small`, `large` und `x-large` — für KERNs
  eigene Größenklassen gab es kein einziges Beispiel.
* Eigenes Platzhalterbild für Medien-Bausteine statt eines fremden Verweises.

**Behoben** (aus einem externen Prüfbericht, 105 Seiten, Chromium 149 auf Windows)

* Der gedrückte Zustand von Knöpfen war unsichtbar, weil `hover` spezifischer war als
  `active` — ein Fehler im Original KERN, hier mit benanntem Ausweichwert behoben.
* Prüfskript: Dateinamen-Vergleich lief unter Windows nie an (`basename` statt
  Pfadende), die fremde `kern.css` wurde dort fälschlich beanstandet.
* Katalog-Leser übergibt den Katalog als Datei, nicht als Argument — Windows' Grenze
  liegt bei 32 767 Zeichen, der Katalog hat 403 173.

**Geprüft:** 27 Prüfungen ohne Beanstandung · Prüfstand 135 von 135 deckungsgleich ·
Storybook-Prüfseite 10 von 10, 196 Stories · gedrückter Zustand mit echtem Mausdruck
gemessen.

## 0.1.4 — 01.11.2026

* Rückmeldung an das KERN-Team um einen Befund ergänzt (26 Befunde).
* Dokumentation als Heft, 26 Seiten.

## 0.1.3 — 01.11.2026

* **Storybook** neu: die Stories werden aus dem Katalog erzeugt
  (`werkzeug/stories-bauen.py`), nie von Hand geschrieben. Format wie KERNs eigenes
  Storybook (`@storybook/html-vite` 9); Entwicklungsserver nur auf `127.0.0.1`.

## 0.1.2 — 01.11.2026

* Arbeitsstand nach einem vollen Code-Review: sieben Muss-Befunde behoben
  (Punkt-Filter des Designer-Servers, Wertefilter, Rundung der Anzeige u. a.).

## 0.1.1 — 16.10.2026

* **KERN Designer** und **KERN OnePager** dazu: Token-Editor mit Live-Vorschau,
  Kontrastrechnung, Versionierung des Themas; eine Seite mit allen Bausteinen,
  Varianten und Zuständen.
* Ein eigenes Thema darf jeden Token frei ändern — als eigene Datei nach dem
  unveränderten System, je Token markiert „KERN: frei" oder „KERN rät ab", mit
  „auf KERN zurück" in einem Schritt.

## 2.8.2 (nbyc) — 13.10.2026

Erste abgeschlossene Fassung. Aus einer eigenen Vorarbeit wurde eine KERN-Adaption:

* `kern.css` 2.8.2 unverändert als erste Datei, alles Eigene danach.
* Alle Maße und Farben fremder Design-Systeme entfernt; jeder Wert kommt aus
  KERN-Tokens oder ist eine Formel darauf.
* Tastaturvertrag und Rückmeldung für jeden bedienbaren Baustein.
* Katalog zweisprachig (Deutsch/Englisch), 38 KERN-Bausteine mit KERNs
  Original-Beispielen und 44 Erweiterungen.
* Drei Dichte-Stufen, erhöhter Kontrast, hell und dunkel.
* 25 Prüfungen, jede mit Gegenprobe.
