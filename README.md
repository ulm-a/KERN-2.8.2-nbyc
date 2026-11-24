# KERN 2.8.2 (nbyc)

**Interne Adaption von [KERN 2.8.2](https://www.kern-ux.de/) — nicht das offizielle KERN.**

Fassung 0.2.0 (16.11.2026) · eingebundenes KERN: 2.8.2 vom 23.09.2026 · Lizenz: [EUPL-1.2](LICENSE)

> **„nbyc" heißt „New by Claude"** — neu gebaut mit Claude, dem KI-Assistenten von Anthropic.
> „KERN 2.8.2" allein meint immer das offizielle KERN; dieses System heißt stets
> „KERN 2.8.2 (nbyc)". Die Zahl 2.8.2 ist die Version des eingebundenen KERN und wird
> nie hochgezählt; unsere eigene Fassung ist 0.2.0.
>
> Dieses Repository ist ein **Arbeitsstand für den internen Gebrauch**. Wer das
> offizielle KERN braucht, nimmt `@kern-ux/native` bzw. `kern.css` direkt von KERN.

---

## Was hier liegt

| Ordner | Was es ist |
| --- | --- |
| [`KERN 2.8.2 (nbyc)/`](KERN%202.8.2%20(nbyc)) | Das Design-System: `kern.css` 2.8.2 unverändert, davor nichts, danach alles Eigene. Katalog mit 38 KERN-Bausteinen und 44 Erweiterungen, Muster-Seiten, Prüfskripte. |
| [`KERN 2.8.2 (nbyc) Storybook/`](KERN%202.8.2%20(nbyc)%20Storybook) | Storybook 9 für die Entwicklung. Die Stories werden aus dem Katalog **erzeugt**, nie von Hand geschrieben. |
| [`KERN Designer/`](KERN%20Designer) | Token-Editor mit Live-Vorschau, Kontrastrechnung und Versionierung des Themas. |
| [`KERN OnePager/`](KERN%20OnePager) | Eine Seite mit allen Bausteinen, Varianten und Zuständen — zum Vergleichen und Messen. |

## Was es kann

* **KERN zuerst.** `system/kern.css` ist KERN 2.8.2 Byte für Byte
  (SHA-256 `516fe93d218b483c08cebdd366190bd67b4f49e204a20c0b4187fcfd21fcd79e`,
  Prüfung 10 wacht darüber). Alles Eigene steht in eigenen Dateien danach — so
  verlangt es KERNs Dokumentation.
* **Tastatur und Rückmeldung als Teil des Bausteins.** Jeder bedienbare Baustein hat
  einen Tastaturvertrag im Katalog: Taste → Wirkung → was Hilfsmittel ansagen. Esc
  schließt jede Überlagerung und gibt den Fokus zurück, Pos1/Ende wirken in allen
  Listen, jede Zustandsänderung wird angesagt (eine zentrale Live-Region).
* **Nur Tokens.** Kein roher Farbwert, kein rohes Maß, keine rohe Dauer außerhalb der
  Token-Dateien; abgeleitete Werte als Formel. Eigene Tokens heißen `--kn-*`.
* **Zweisprachig.** Katalogtexte, Begriffe und Systemtexte auf Deutsch und Englisch;
  die Sprache folgt `lang` am nächsten Vorfahren.
* **Erweiterungen, die KERN fehlen:** Schublade, Kalender, Datentabelle, Baum,
  Zeitleiste und 39 weitere — gebaut nur aus KERN-Tokens, jede Abweichung in
  [`ABWEICHUNGEN.txt`](KERN%202.8.2%20(nbyc)/ABWEICHUNGEN.txt) benannt.
* **Erhöhter Kontrast, drei Dichte-Stufen, hell und dunkel** über Daten-Attribute.
* **Nichts aus dem Netz.** Keine Google Fonts, kein CDN, keine Analyse, kein Tracker.
  Für eine Behördenanwendung ist das Voraussetzung, nicht Komfort: jede Netzabfrage
  aus dem Browser wäre eine Übermittlung personenbezogener Daten an Dritte.
* **Barrierefreiheit:** WCAG 2.2 AA (BITV 2.0) als Maßstab, Kontrast nach KERNs
  eigenem Anspruch gemessen (Text ≥ 7 : 1, große Texte und Knopftext ≥ 4,5 : 1,
  Bedienelemente, Ränder und Fokus ≥ 3 : 1) — in hell, dunkel und bei erhöhtem Kontrast.

## Loslegen

**Das System ansehen** — kein npm, kein Bauwerkzeug:

```bash
python3 -m http.server 8058 --bind 127.0.0.1
```

Dann `http://localhost:8058/KERN%202.8.2%20(nbyc)/index.html` öffnen. Für einen ersten
Blick genügt auch ein Doppelklick auf `index.html`.

**In die eigene Seite einbinden** — zwei Zeilen, `N` ist der aktuelle Versionsstempel
(`python3 pruefung/stempel.py --zeigen`):

```html
<link rel="stylesheet" href="system/kern-neu.css?v=2.8.2-nbyc.N">
<script src="system/kern-neu.js?v=2.8.2-nbyc.N" defer></script>
```

Am `<html>`-Element die Sprache setzen (`<html lang="de">`): sie steuert, wie
Screenreader vorlesen und in welcher Sprache die Systemtexte kommen.

**Storybook** (das einzige Stück mit Node, Node 22 oder neuer):

```bash
cd "KERN 2.8.2 (nbyc) Storybook" && npm ci && npm run storybook
```

Der Entwicklungsserver lauscht nur auf `127.0.0.1:6006`. Auf macOS geht es auch per
Doppelklick auf `KERN 2.8.2 (nbyc) Storybook [ Start ].command`.

**KERN Designer** (Token-Editor, lokaler Server): Doppelklick auf
`KERN Designer [ Start ].command`, oder siehe
[`KERN Designer/LIESMICH.txt`](KERN%20Designer/LIESMICH.txt).

## Prüfen

```bash
cd "KERN 2.8.2 (nbyc)" && python3 pruefung/pruefe.py
```

27 Prüfungen, Rückgabewert 1 bei jedem Befund — von rohen Farbwerten über
Tastentabellen und Fokus-Token bis zur Prüfsumme von `kern.css` und der Frage, ob die
Fassung an allen Stellen gleich lautet. Jede Prüfung ist erst fertig, wenn ihre
Gegenprobe in einer Kopie rot war.

Dazu:

```bash
python3 "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" --pruefen
python3 "KERN Designer/pruefung/pruefe-designer.py"
```

`pruefe-designer.py` und die Katalog-Generatoren brauchen KERNs eigene Beispiele
(`_ Resources/kern/userdoc*`), die hier **nicht** mitliegen — sie gehören KERN. Ohne sie
bricht `pruefe-designer.py` heute mit einem Fehler ab, statt „nicht prüfbar" zu melden;
das ist ein bekannter Befund und wird behoben. Die bereits erzeugten Dateien (Katalog,
Beispielseite, Stories) laufen ohne KERNs Beispiele unverändert weiter, sie lassen sich
nur nicht neu erzeugen. Was im Browser gemessen wird (Kontrast,
Bedienung, Deckungsgleichheit mit KERNs Beispielen) steht in
[`METHODE.txt`](KERN%202.8.2%20(nbyc)/METHODE.txt).

Die GitHub-Action [`pruefungen.yml`](.github/workflows/pruefungen.yml) fährt `pruefe.py`
und die Storybook-Prüfung bei jedem Push.

## Zum Weiterlesen

* [`LIESMICH.txt`](KERN%202.8.2%20(nbyc)/LIESMICH.txt) — Aufbau, Attribute, Prüfliste
* [`METHODE.txt`](KERN%202.8.2%20(nbyc)/METHODE.txt) — wie geprüft und gemessen wird
* [`ABWEICHUNGEN.txt`](KERN%202.8.2%20(nbyc)/ABWEICHUNGEN.txt) — jede Abweichung von KERN mit Grund
* [`VERGLEICH.txt`](KERN%202.8.2%20(nbyc)/VERGLEICH.txt) — KERN, Carbon, Material, GOV.UK nebeneinander
* [`UMSTIEG.txt`](KERN%202.8.2%20(nbyc)/UMSTIEG.txt) — von einer älteren Fassung herkommen
* [`CHANGELOG.md`](CHANGELOG.md) · [`CONTRIBUTING.md`](CONTRIBUTING.md) · [`THIRD-PARTY.md`](THIRD-PARTY.md)

## Lizenzen und Herkunft

| Teil | Lizenz |
| --- | --- |
| Eigener Code (alles außer `system/kern.css`) | [EUPL-1.2](LICENSE), Rechteinhaber Capgemini |
| `system/kern.css` — KERN 2.8.2, unverändert | [EUPL-1.2](LICENSES/EUPL-1.2.md) |
| Fira Sans (`schrift/fira-sans/*.woff2`) | [OFL-1.1](LICENSES/OFL-1.1.txt) |
| Symbole (Material Symbols, über KERN) | [Apache-2.0](LICENSES/Apache-2.0.txt) |

Einzelheiten, Quellen und Prüfdaten: [`THIRD-PARTY.md`](THIRD-PARTY.md) und
[`LIZENZ.txt`](KERN%202.8.2%20(nbyc)/LIZENZ.txt). Diese Angaben sind nach bestem Wissen
zusammengestellt und ersetzen keine rechtliche Prüfung.

**Zwei Punkte sind offen** und stehen hier, damit niemand sie übersieht: die
Absprache mit dem KERN-Team über den Namen (KERN verlangt „nicht KERN ohne
Absprache") und die rechtliche Prüfung der Lizenzlage. Das Repository ist dennoch
öffentlich — eine bewusste Entscheidung, damit andere Verwaltungen die Arbeit
nachnutzen können, statt sie erneut zu leisten. Kommt vom KERN-Team eine Auflage,
wird der Name geändert.

## English summary

**KERN 2.8.2 (nbyc)** is an internal adaptation of the German public-sector design
system [KERN](https://www.kern-ux.de/) — *not* official KERN. It embeds KERN 2.8.2's
`kern.css` byte for byte and adds what KERN does not ship: full keyboard contracts and
announcements for every interactive component, 44 extensions built purely from KERN
tokens, high-contrast and density modes, and a bilingual (German/English) catalogue.
No build step, no npm, no network requests — plain CSS and ES5 JavaScript. A Storybook
(generated from the catalogue, never written by hand), a token editor with live preview
and contrast checks, and a one-page component sheet come with it. Own code is EUPL-1.2
(same licence as KERN); see the licence table above.
