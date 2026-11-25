#!/usr/bin/env python3
"""
KERN NEU — PRÜFUNG

Findet die Fehlerarten, die beim Bauen tatsächlich aufgetreten sind:

  1  ROHE WERTE      Farbe oder Abstand direkt geschrieben statt Token.
  2  DECKKRAFT       auf Text — drückt den Kontrast unter das Maß.
  3  ZUSTÄNDE        bedienbarer Baustein ohne hover/focus/aria.
  4  DATASET         Schlüssel mit Bindestrich. Wirft einen SyntaxError
                     und legt das ganze Skript lahm. Genau das ist beim
                     Bauen passiert und war von außen unsichtbar.
  5  VENDOR-MASSE    logische Maße (inline-size, block-size) in
                     ::-webkit-slider-* oder ::-moz-range-*. Werden dort
                     nicht angewendet — der Grund für den fehlerhaften
                     Schieberegler der Vorgängerfassung.
  6  MERKER-KOLLISION  Der Merker "schon verdrahtet" darf nicht so
                     heißen wie ein Attribut, das im Markup vorkommt.
                     "data-kn-modus" liest sich als dataset.knModus —
                     hieße der Merker genauso, wäre er von Anfang an
                     gesetzt und die Komponente bliebe tot. Ohne
                     Fehlermeldung. Genau das ist passiert.
  7  KATALOG         Jede Komponente im Katalog belegt, jede belegte
                     Komponente im Katalog.
  8  RÜCKFALLWERT    Token gleichzeitig als frei setzbarer Rückfallwert.
  9  ROHE MASSE      Maß oder Dauer direkt geschrieben statt Token — jede
                     Zahl mit px/rem/ms/s, auch in calc() und Pseudo-
                     elementen; Ausnahmen nur mit /* roh: Grund */.
 10  KERN-TREUE      system/kern.css ist Byte für Byte KERN 2.8.2 und wird
                     als erste Datei eingebunden (M81, M65).
 11  KEIN CARBON     keine entfernten Carbon-Namen, jedes benutzte --kn-Token
                     definiert (M20). Die Brücke 01-token.css ist seit 5d
                     entfernt; kommt sie zurück, gilt dort die Rohwert-
                     Regel. Rohe Maße in Bausteinen findet Prüfung 9.
 12  TOKEN.JSON      ist aktuell — ein Lauf von token-lesen.py änderte nichts.
 15  DICHTE-STUFEN   die Stufen in 01b (Abschnitt 7) setzen nur Maß-Tokens
                     und nur Werte aus KERNs Skala — nie Farben (E2, M80).
 18  CSS-SYNTAX      jede eigene CSS-Datei ist einlesbar: Klammern
                     ausgeglichen, jeder Selektor mit geschlossenen ( ) [ ].
                     Ein kaputter Selektor lässt den Browser den REST der
                     Datei verwerfen — ohne Fehlermeldung (13.10.2026,
                     Stufe 5b: 02-basis.css lud nur 3 von 30 Regeln).
 16  FELDER          kein natives required (KERN: aria-required), kein
                     disabled ohne benannte Ausnahme (E4: aria-disabled +
                     Sperre). Nummern 13–15 folgen mit M65/M80.
 13  DIALOG-TITEL    jeder <dialog> in Katalog, Muster und Seiten hat einen
     UND HOOKS       Namen (aria-labelledby oder aria-label, M60); jedes
                     data-kn-Attribut im Markup kommt in kern-neu.js oder im
                     CSS vor — sonst hat es kein Verhalten (M65).
 14  KERN-KLASSEN    jede kern-Klasse in Katalog, Muster, Seiten und Skript
                     existiert in kern.css (Tippfehler bleiben sonst still
                     ungestaltet); KERNs eigene Beispiele nur als Befund (M65).
 22  STEMPEL         überall derselbe Versionsstempel ?v=…, auch an jeder
                     @import-Zeile und jeder eingebundenen eigenen Datei
                     (pruefung/stempel.py setzt ihn).
 21  FOKUS-TOKEN     Fokusringe im eigenen CSS nur in KERNs Fokuston, in der
                     Textfarbe einer invertierten Fläche oder in Systemfarben
                     (Windows-Kontrastmodus) (M65, Plan-Nr. 12).
 20  TASTENTABELLE   jeder Katalogeintrag (Erweiterung), dessen Beispiel etwas
                     Bedienbares enthält, hat eine Tastentabelle (M50).
 17  ZWEISPRACHIG    jeder Katalogeintrag (eigene und KERN) hat Englisch in
                     katalog/inhalt-en.js: Name, Zweck, je Liste gleich viele
                     Zeilen (wann, nicht, Barrierefreiheit, Beispiele, Tasten,
                     Pflichten, Klassen), nichts leer, nichts unübersetzt
                     kopiert; jede Gruppe und Herkunft hat ein englisches Wort;
                     begriffe.json hat je Baustein Deutsch und Englisch; kein
                     englischer Name doppelt (M85, E10).
 24  KEIN SCHATTEN   eigene Bausteine benutzen keine Schatten (KERN setzt
                     seine Schatten-Tokens nirgends sichtbar ein); Abgrenzung
                     über Ränder. Erlaubt: box-shadow als Linie (inset, ohne
                     Unschärfe) und das Abschalten in 01b (13.10.2026).
 23  ZUORDNUNG UND   jeder Katalogeintrag (außer Grundlagen) hat Namen in
     ERZEUGTES       begriffe.json (Feld "katalog"), jede dort genannte ID
                     gibt es; katalog/meta.js und UMSTIEG.txt sind aktuell
                     (M70, M72).
 19  SYSTEMTEXTE     kern-neu.js: jeder Text-Schlüssel in TEXTE.de UND
                     TEXTE.en (M86); außerhalb von TEXTE kein deutsches
                     Systemwort in einer Zeichenkette (sonst ist ein Text
                     an der Übersetzung vorbei geschrieben).

Der Kontrast wird NICHT hier geprüft, sondern im Browser: die Werte
stehen erst fest, wenn ein Modus angewendet ist. Siehe METHODE.txt.

Aufruf:   python3 pruefung/pruefe.py
Rückgabe: 0 sauber, 1 Beanstandungen.
"""

import re
import io
import os
import sys
import glob
import hashlib
import importlib.util

WURZEL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# KERN 2.8.2, dist/kern.css (npm @kern-ux/native 2.8.2) — Referenz M03.
KERN_SHA256 = "516fe93d218b483c08cebdd366190bd67b4f49e204a20c0b4187fcfd21fcd79e"
KERN_REFERENZ = os.path.join(os.path.dirname(WURZEL), "_ Resources",
                             "kern-ux-native-2.8.2", "dist", "kern.css")
# Ausnahmen zu Prüfung 16: (Datei, Textstück, Grund) — jede mit Grund (E4).
FELD_AUSNAHMEN = []


def lies(p):
    return io.open(p, encoding="utf-8", errors="ignore").read()


def eigene_css():
    """Alle CSS des Systems ausser kern.css — KERNs Code wird nicht nach
    unseren Regeln geprüft, sondern nur auf Gleichheit (M81, E6)."""
    return [d for d in sorted(glob.glob(os.path.join(WURZEL, "system", "*.css")))
            if os.path.basename(d) != "kern.css"]


def komponenten_css():
    """Alle CSS ausser den Tokendateien — dort dürfen Rohwerte stehen.
    kern.css ist KERN 2.8.2 unverändert (M81) — wird nicht geprüft, sondern
    nur auf Gleichheit mit der Referenz (Prüfung 10). 00-kern-token.css war
    der alte Auszug (gelöscht 13.10.2026; der Name bleibt hier, damit eine
    zurückgeholte Fassung nicht geprüft wird), 01b ist die Erweiterung (M19)."""
    return [d for d in sorted(glob.glob(os.path.join(WURZEL, "system", "*.css")))
            if os.path.basename(d) not in ("kern.css", "00-kern-token.css", "01-token.css",
                                           "01b-erweiterung.css", "kern-neu.css")]


def pruefe_rohwerte():
    treffer = []
    for d in komponenten_css():
        for nr, z in enumerate(lies(d).split("\n"), 1):
            n = z.strip()
            if n.startswith(("/*", "*", "//")):
                continue
            if re.search(r":\s*#[0-9a-fA-F]{3,8}\b", z) or \
               re.search(r":\s*(rgb|hsl|oklch)\(", z):
                treffer.append((os.path.relpath(d, WURZEL), nr, n[:70]))
    print("\n1  ROHE FARBWERTE IN KOMPONENTEN")
    if not treffer:
        print("   ok — kein einziger. Jede Farbe kommt aus einem Token.")
        return 0
    for d, nr, z in treffer:
        print("   %s:%d  %s" % (d, nr, z))
    return len(treffer)


def pruefe_deckkraft():
    treffer = []
    for d in eigene_css():
        for regel in re.finditer(r"([^{}]+)\{([^}]*)\}", lies(d)):
            wahl, koerper = regel.group(1).strip(), regel.group(2)
            m = re.search(r"(?<![-\w])opacity\s*:\s*([0-9.]+)", koerper)
            if not m:
                continue
            v = float(m.group(1))
            if v in (0.0, 1.0) or "::after" in wahl or "::before" in wahl:
                continue
            treffer.append((os.path.relpath(d, WURZEL), wahl.split("\n")[-1][:50], v))
    print("\n2  DECKKRAFT AUF TEXT")
    if not treffer:
        print("   ok — keine. Zurückgenommenes bekommt eine eigene Farbe.")
        return 0
    for d, w, v in treffer:
        print("   %s  %s  opacity: %s" % (d, w, v))
    return len(treffer)


def pruefe_zustaende():
    quelle = "\n".join(lies(d) for d in komponenten_css())
    wurzeln = sorted({re.split(r"__|--", k[3:])[0]
                      for k in re.findall(r"\.(kn-[a-z0-9_-]+)", quelle)})
    ohne = []
    for w in wurzeln:
        regeln = re.findall(r"[^{}]*kn-" + re.escape(w) + r"(?![a-z])[^{}]*\{[^}]*\}", quelle)
        wahl = "\n".join(r.split("{")[0] for r in regeln)
        if re.search(r"cursor:\s*pointer", "\n".join(regeln)) and \
           not re.search(r":hover|:focus|:checked|aria-|\[data-kn-|:disabled", wahl):
            ohne.append(w)
    print("\n3  BEDIENBARE BAUSTEINE OHNE ZUSTAND")
    if not ohne:
        print("   ok — jeder bedienbare Baustein hat mindestens einen Zustand.")
        return 0
    for w in ohne:
        print("   kn-%s" % w)
    return len(ohne)


def pruefe_dataset():
    """dataset verlangt camelCase. Ein Bindestrich wirft."""
    treffer = []
    for d in glob.glob(os.path.join(WURZEL, "system", "*.js")) + \
             glob.glob(os.path.join(WURZEL, "katalog", "*.js")):
        for nr, z in enumerate(lies(d).split("\n"), 1):
            for m in re.finditer(r"dataset\[\s*[\"']([^\"']+)[\"']\s*\]", z):
                if "-" in m.group(1):
                    treffer.append((os.path.relpath(d, WURZEL), nr, m.group(1)))
            for m in re.finditer(r"dataset\.([A-Za-z0-9_]*-[A-Za-z0-9_-]*)", z):
                treffer.append((os.path.relpath(d, WURZEL), nr, m.group(1)))
    print("\n4  DATASET-SCHLÜSSEL MIT BINDESTRICH")
    if not treffer:
        print("   ok — keiner. (Ein solcher Schlüssel wirft einen SyntaxError")
        print("        und legt das ganze Skript still lahm.)")
        return 0
    for d, nr, s in treffer:
        print("   %s:%d  dataset[\"%s\"]" % (d, nr, s))
    return len(treffer)


def pruefe_vendormasse():
    """Logische Maße wirken in Vendor-Pseudoelementen nicht."""
    treffer = []
    for d in eigene_css():
        for regel in re.finditer(r"([^{}]*::-(?:webkit|moz)-[a-z-]+)\s*\{([^}]*)\}", lies(d)):
            wahl, koerper = regel.group(1).strip(), regel.group(2)
            for eig in ("inline-size", "block-size", "margin-block-start",
                        "margin-inline-start", "padding-inline", "padding-block"):
                if re.search(r"(?<![-\w])" + eig + r"\s*:", koerper):
                    treffer.append((os.path.relpath(d, WURZEL), wahl[-46:], eig))
    print("\n5  LOGISCHE MASSE IN VENDOR-PSEUDOELEMENTEN")
    if not treffer:
        print("   ok — keine. Dort stehen physische Maße (width, height).")
        return 0
    for d, w, e in treffer:
        print("   %s  %s  %s" % (d, w, e))
    return len(treffer)


def pruefe_merker():
    """6 — Kollidiert ein Merker mit einem echten data-Attribut?"""
    js = lies(os.path.join(WURZEL, "system", "kern-neu.js"))
    m = re.search(r'var schluessel = "([A-Za-z]+)"', js)
    praefix = m.group(1) if m else ""
    zwecke = re.findall(r'neu\([a-zA-Z]+,\s*"([a-zA-Z]+)"\)', js)

    # Alle data-Attribute, die im Markup wirklich vorkommen.
    markup = "\n".join(lies(d) for d in
                       glob.glob(os.path.join(WURZEL, "*.html")) +
                       glob.glob(os.path.join(WURZEL, "muster", "*.html")) +
                       glob.glob(os.path.join(WURZEL, "katalog", "*.js")))
    attribute = set()
    for a in re.findall(r"data-(kn-[a-z-]+)", markup):
        teile = a.split("-")
        attribute.add(teile[0] + "".join(t.capitalize() for t in teile[1:]))

    treffer = []
    for z in set(zwecke):
        schluessel = praefix + z[0].upper() + z[1:]
        if schluessel in attribute:
            treffer.append(schluessel)
        # Auch ohne Präfix prüfen — falls der Präfix je entfällt.
        ohne = "kn" + z[0].upper() + z[1:]
        if ohne in attribute and not praefix.startswith("knFertig"):
            treffer.append(ohne)

    print("\n6  MERKER-KOLLISION")
    if not praefix:
        print("   Merker nicht gefunden — Prüfung übersprungen.")
        return 0
    if not treffer:
        print("   ok — Präfix \"%s\", %d Zwecke, keine Kollision mit den"
              % (praefix, len(set(zwecke))))
        print("        %d data-Attributen im Markup." % len(attribute))
        return 0
    for t in treffer:
        print("   KOLLISION  %s" % t)
    return len(treffer)


def pruefe_katalog():
    """Jede Komponente im Katalog — und keine erfundene Klasse darin."""
    inhalt = lies(os.path.join(WURZEL, "katalog", "inhalt.js"))
    quelle = "\n".join(lies(d) for d in glob.glob(os.path.join(WURZEL, "system", "*.css")))
    da = {k for k in re.findall(r"\.(kn-[a-zA-Z0-9_-]+)", quelle)}
    # seit Stufe 7a (M65): Katalog, Seiten, Muster und Skript — nicht nur der Katalog
    fehlend = set()
    for d, text in eigenes_markup().items():
        for m in re.finditer(r"class(?:Name)?\s*=\s*[\"']([^\"']*)[\"']", text):
            for k in m.group(1).split():
                if k.startswith("kn-") and k not in da:
                    fehlend.add("%s (%s)" % (k, os.path.relpath(d, WURZEL)))
    ids = re.findall(r'id:\s*"([^"]+)"', inhalt)
    print("\n7  KATALOG")
    print("   %d Komponenten beschrieben." % len(ids))
    if not fehlend:
        print("   ok — jede benutzte kn-Klasse gibt es auch im System.")
        return 0
    for k in sorted(fehlend):
        print("   ERFUNDEN  %s" % k)
    return len(fehlend)


def pruefe_rueckfall():
    """Ein Token, das gleichzeitig als Rückfallwert benutzt wird.

    Gefunden am 12.08.2026 beim Umstieg auf Carbons Maße:
    ".kn-tabellenrahmen" hatte "max-block-size: var(--kn-tabelle-hoehe, none)".
    Solange es KEIN Token dieses Namens gab, griff der Rückfall "none".
    Mit 0.5.7 kam "--kn-tabelle-hoehe: 3rem" als ZEILENhöhe dazu — und
    plötzlich war jede gerahmte Tabelle 48 Pixel hoch.

    Regel: Wer "var(--x, rückfall)" schreibt, meint einen Wert, den das
    Markup setzen darf. Dieser Name darf dann NICHT auch ein Token sein.
    """
    # Eigene Tokens: seit Stufe 5d nur noch in der Erweiterungsdatei (die
    # Brücke 01-token.css ist entfernt).
    token = set(re.findall(r"^\s*(--kn-[a-z0-9-]+)\s*:",
                           lies(os.path.join(WURZEL, "system", "01b-erweiterung.css")), re.M))
    treffer = []
    for d in komponenten_css():
        for nr, z in enumerate(lies(d).split("\n"), 1):
            for name in re.findall(r"var\(\s*(--kn-[a-z0-9-]+)\s*,", z):
                if name in token:
                    treffer.append((os.path.relpath(d, WURZEL), nr, name, z.strip()[:56]))
    print("\n8  TOKEN ALS RÜCKFALLWERT")
    if not treffer:
        print("   ok — kein Name ist gleichzeitig Token und frei setzbarer")
        print("        Rückfallwert. (Diese Kollision ist unsichtbar: die")
        print("        Seite bleibt heil und zeigt nur falsche Maße.)")
        return 0
    for d, nr, name, z in treffer:
        print("   %s:%d  %s  in  %s" % (d, nr, name, z))
    return len(treffer)


def pruefe_masse():
    """Rohe Maße und Dauern in Komponenten — jedes Maß kommt aus KERNs
    Tokens (--kern-metric-…, Grundskala --kern-NNN) oder einem eigenen
    --kn-Token aus 01b.

    NEU 13.10.2026 (Mangel QK4). Die vorige Fassung prüfte nur eine feste
    Liste von Eigenschaften, ließ calc()/min()/max() als Ganzes durch und
    nahm Browser-Pseudoelemente aus — so blieben Carbons 14/2 px im
    Schieberegler bis Stufe 5f stehen. Jetzt zählt JEDE Zahl mit px, rem,
    ms oder s, wo auch immer sie steht (auch in calc(), Rückfallwerten
    von var() und in @container-/@media-Bedingungen).

    Erlaubt, jeweils mit Grund:
      0 (mit jeder Einheit), 1px, -1px     keine Stufe der Skala; Haarlinie
                                           bzw. der Griff für "nur für
                                           Screenreader"
      %, em, ch, vw, vh, fr, deg           relativ, keine feste Größe
      @media (forced-colors: active)       Windows-Kontrastmodus: dort gelten
                                           Systemfarben und feste Linien
      Zeile mit /* roh: Grund */           begründete Ausnahme, z. B. eine
                                           @container-Bedingung (dort ist
                                           var() nach CSS nicht erlaubt)
    """
    treffer = []
    for d in komponenten_css():
        quelle = lies(d)
        zeilen = quelle.split("\n")
        ohne = re.sub(r"/\*.*?\*/", lambda m: re.sub(r"[^\n]", " ", m.group()), quelle, flags=re.S)
        frei = []
        for m in re.finditer(r"@media\s*\(\s*forced-colors", ohne):
            auf = ohne.index("{", m.end())
            tiefe, k = 0, auf
            while k < len(ohne):
                if ohne[k] == "{":
                    tiefe += 1
                elif ohne[k] == "}":
                    tiefe -= 1
                    if tiefe == 0:
                        break
                k += 1
            frei.append((m.start(), k))
        for m in re.finditer(r"(?<![\w.#-])(-?\d*\.?\d+)(px|rem|ms|s)\b", ohne):
            zahl, einheit = float(m.group(1)), m.group(2)
            if zahl == 0 or (einheit == "px" and abs(zahl) == 1):
                continue
            if any(a <= m.start() <= b for a, b in frei):
                continue
            nr = ohne.count("\n", 0, m.start()) + 1
            if "roh:" in zeilen[nr - 1]:
                continue
            treffer.append((os.path.relpath(d, WURZEL), nr, zeilen[nr - 1].strip()[:70]))
    print("\n9  ROHE MASSE UND DAUERN IN KOMPONENTEN")
    if not treffer:
        print("   ok — jedes Maß und jede Dauer kommt aus einem Token oder")
        print("        ist als Ausnahme begründet (/* roh: … */).")
        return 0
    for d, nr, z in treffer:
        print("   %s:%d  %s" % (d, nr, z))
    return len(treffer)


def pruefe_kern_treue():
    treffer = []
    datei = os.path.join(WURZEL, "system", "kern.css")
    if not os.path.exists(datei):
        treffer.append("system/kern.css fehlt")
    else:
        roh = io.open(datei, "rb").read()
        ist = hashlib.sha256(roh).hexdigest()
        if ist != KERN_SHA256:
            treffer.append("system/kern.css ist verändert (SHA-256 %s…, erwartet %s…)"
                           % (ist[:16], KERN_SHA256[:16]))
        if os.path.exists(KERN_REFERENZ) and io.open(KERN_REFERENZ, "rb").read() != roh:
            treffer.append("system/kern.css weicht von der Referenz in _ Resources ab")
    sammel = re.sub(r"/\*.*?\*/", "", lies(os.path.join(WURZEL, "system", "kern-neu.css")), flags=re.S)
    importe = [i.split("?")[0] for i in re.findall(r'@import\s+"([^"]+)"', sammel)]   # ohne ?v=-Stempel
    eigene = [i for i in importe if not i.startswith("../schrift/")]
    if not eigene or eigene[0] != "kern.css":
        treffer.append("kern-neu.css: kern.css ist nicht die erste eingebundene Datei (%s)"
                       % ", ".join(eigene[:3]))
    if "00-kern-token.css" in importe:
        treffer.append("kern-neu.css bindet noch den alten Auszug 00-kern-token.css ein")
    print("\n10  KERN-TREUE")
    if not treffer:
        print("   ok — system/kern.css ist KERN 2.8.2 Byte für Byte und wird")
        print("        als erste Datei eingebunden; alles Eigene danach.")
        return 0
    for z in treffer:
        print("   " + z)
    return len(treffer)


def ohne_kommentare(text):
    text = re.sub(r"/\*.*?\*/", lambda m: "\n" * m.group().count("\n"), text, flags=re.S)
    text = re.sub(r"<!--.*?-->", lambda m: "\n" * m.group().count("\n"), text, flags=re.S)
    return re.sub(r"(?<![:\\'\"])//[^\n]*", "", text)


def pruefe_carbon():
    """Entfernte Carbon-Namen fallen im Browser nicht auf: var(--kn-raum-04)
    ohne Definition ist einfach ungültig, die Eigenschaft fällt still weg.
    Deshalb: jedes benutzte --kn-Token muss definiert sein (Brücke,
    Erweiterung oder örtlich im Baustein), dazu die ausdrücklich
    entfallenen Namen und Schalter."""
    entfallen = [
        (r"--kn-raum-04\b", "Carbon-Abstand 12 px (entfallen, M20)"),
        (r"--kn-hoehe-04\b", "Carbon-Höhe (entfallen, M20)"),
        (r"--kn-ecke-pille\b", "Pillenradius (entfallen, M20)"),
        (r"data-kn-ziel\b", "Schalter Bedienziel (entfallen, M20)"),
    ]
    dateien = [d for d in eigene_css()
               if not d.endswith(("00-kern-token.css",))] + \
        glob.glob(os.path.join(WURZEL, "system", "*.js")) + \
        glob.glob(os.path.join(WURZEL, "katalog", "*.js")) + \
        glob.glob(os.path.join(WURZEL, "muster", "*.html")) + \
        glob.glob(os.path.join(WURZEL, "*.html"))
    texte = {d: ohne_kommentare(lies(d)) for d in sorted(dateien)}
    definiert = set()
    for text in texte.values():
        definiert |= set(re.findall(r"(--kn-[a-z0-9-]+)\s*:", text))
        definiert |= set(re.findall(r"setProperty\(\s*['\"](--kn-[a-z0-9-]+)", text))
    treffer = []
    for d, text in texte.items():
        for nr, zeile in enumerate(text.splitlines(), 1):
            for muster, grund in entfallen:
                if re.search(muster, zeile):
                    treffer.append((os.path.relpath(d, WURZEL), nr, grund))
            for name in re.findall(r"var\(\s*(--kn-[a-z0-9-]+)\s*\)", zeile):
                if name not in definiert:
                    treffer.append((os.path.relpath(d, WURZEL), nr,
                                    "%s benutzt, aber nirgends definiert" % name))
    # Brücke: nur Verweise auf Tokens, keine Rohwerte (Zahl mit Einheit,
    # Hex, Farbfunktion mit Zahlen). "100%" in KERNs Zustandsformel
    # calc(100% - var(--…-opacity-…)) bzw. calc(var(…) * 100%) ist Formel.
    bruecke = os.path.join(WURZEL, "system", "01-token.css")
    # Seit Stufe 5d gibt es keine Brücke mehr; liegt die Datei wieder da,
    # gilt die Rohwert-Regel weiter.
    quelle = ohne_kommentare(lies(bruecke)) if os.path.exists(bruecke) else ""
    for m in re.finditer(r"(--kn-[a-z0-9-]+)\s*:\s*([^;]+);", quelle):
        rest = re.sub(r"var\(--[a-z0-9-]+\)", "", m.group(2))
        rest = re.sub(r"100%", "", rest)
        if re.search(r"#[0-9a-fA-F]{3,8}\b|\b\d*\.?\d+(px|rem|em|%|ms|s|deg)\b|\b(rgb|hsl|oklch|oklab)\(", rest):
            nr = quelle.count("\n", 0, m.start()) + 1
            treffer.append(("system/01-token.css", nr, "Rohwert in der Brücke: %s" % m.group(1)))
    print("\n11  KEIN CARBON, KEINE ROHWERTE IN DER BRÜCKE")
    if not treffer:
        print("   ok — keine entfernten Carbon-Namen; die Brücke zeigt nur")
        print("        auf KERN-Tokens.")
        return 0
    for d, nr, z in treffer:
        print("   %s:%d  %s" % (d, nr, z))
    return len(treffer)


def pruefe_token_json():
    pfad = os.path.join(WURZEL, "pruefung", "token-lesen.py")
    spec = importlib.util.spec_from_file_location("token_lesen", pfad)
    modul = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modul)
    print("\n12  TOKEN.JSON AKTUELL")
    try:
        _, soll = modul.erzeuge()
    except modul.Abbruch as fehler:
        print("   token-lesen.py bricht ab: %s" % fehler)
        return 1
    ziel = os.path.join(WURZEL, "token.json")
    ist = lies(ziel) if os.path.exists(ziel) else ""
    if ist == soll:
        print("   ok — token.json entspricht den Token-Dateien.")
        return 0
    print("   token.json ist veraltet oder von Hand geändert —")
    print("   python3 pruefung/token-lesen.py ausführen.")
    return 1


def pruefe_felder():
    """Prüft UNSEREN Code. Ausgenommen: katalog/kern-inhalt.js — dort stehen
    KERNs Original-Beispiele (erzeugt, unverändert); sie zeigen den von KERN
    dokumentierten Zustand "disabled" (Stufe 4)."""
    dateien = [d for d in glob.glob(os.path.join(WURZEL, "katalog", "*.js"))
               if not d.endswith("kern-inhalt.js")] + \
        glob.glob(os.path.join(WURZEL, "system", "*.js")) + \
        glob.glob(os.path.join(WURZEL, "muster", "*.html")) + \
        glob.glob(os.path.join(WURZEL, "*.html"))
    treffer = []
    for d in sorted(dateien):
        rel = os.path.relpath(d, WURZEL)
        for nr, zeile in enumerate(ohne_kommentare(lies(d)).splitlines(), 1):
            if re.search(r"<(input|select|textarea)\b[^>]*\srequired\b|\.required\s*=\s*true|"
                         r"setAttribute\(\s*['\"]required", zeile):
                treffer.append((rel, nr, "natives required — KERN: aria-required=\"true\""))
            if re.search(r"<(input|select|textarea|button)\b[^>]*\sdisabled\b|\.disabled\s*=\s*true|"
                         r"setAttribute\(\s*['\"]disabled", zeile):
                if not any(rel == a and stueck in zeile for a, stueck, _ in FELD_AUSNAHMEN):
                    treffer.append((rel, nr, "disabled — E4: aria-disabled + Sperre"))
    print("\n16  FELDER: REQUIRED UND DISABLED")
    if not treffer:
        print("   ok — Pflicht über aria-required, kein disabled ohne Ausnahme.")
        return 0
    for d, nr, z in treffer:
        print("   %s:%d  %s" % (d, nr, z))
    return len(treffer)


def pruefe_css_syntax():
    treffer = []
    for d in eigene_css():
        text = re.sub(r"/\*.*?\*/", lambda m: "\n" * m.group().count("\n"), lies(d), flags=re.S)
        tiefe = 0
        for i, z in enumerate(text):
            if z == "{":
                tiefe += 1
            elif z == "}":
                tiefe -= 1
                if tiefe < 0:
                    treffer.append((os.path.relpath(d, WURZEL), text.count("\n", 0, i) + 1, "} ohne {"))
                    tiefe = 0
        if tiefe:
            treffer.append((os.path.relpath(d, WURZEL), text.count("\n") + 1, "%d { ohne }" % tiefe))
        for m in re.finditer(r"([^{};]+)\{", text):
            sel = m.group(1)
            if sel.count("(") != sel.count(")") or sel.count("[") != sel.count("]"):
                treffer.append((os.path.relpath(d, WURZEL), text.count("\n", 0, m.start()) + 1,
                                "Selektor unvollständig: " + " ".join(sel.split())[:50]))
    print("\n18  CSS-SYNTAX")
    if not treffer:
        print("   ok — jede eigene CSS-Datei ist vollständig einlesbar.")
        return 0
    for d, nr, z in treffer:
        print("   %s:%d  %s" % (d, nr, z))
    return len(treffer)


def pruefe_dichte():
    datei = os.path.join(WURZEL, "system", "01b-erweiterung.css")
    text = re.sub(r"/\*.*?\*/", lambda m: "\n" * m.group().count("\n"), lies(datei), flags=re.S)
    name_ok = re.compile(r"^--kern-metric-(dimension|space)-[a-z0-9-]+$|^--kn-(target-size|table-row-space)$")
    wert_ok = re.compile(r"^var\(--kern-[a-z0-9-]+\)$")
    treffer, stufen = [], []
    for m in re.finditer(r'\[data-kn-density="([a-z]+)"\]\s*\{([^}]*)\}', text):
        stufen.append(m.group(1))
        nr0 = text.count("\n", 0, m.start()) + 1
        for d in re.finditer(r"(--[a-z0-9-]+)\s*:\s*([^;]+);", m.group(2)):
            name, wert = d.group(1), " ".join(d.group(2).split())
            nr = nr0 + m.group(2).count("\n", 0, d.start())
            if not name_ok.match(name):
                treffer.append((nr, "%s: nur Maß-Tokens erlaubt (%s)" % (m.group(1), name)))
            if not wert_ok.match(wert):
                treffer.append((nr, "%s: Wert nicht aus KERNs Skala (%s: %s)" % (m.group(1), name, wert)))
    if sorted(stufen) != ["compact", "spacious"]:
        treffer.append((0, "Stufen erwartet: compact, spacious — gefunden: %s" % ", ".join(stufen)))
    print("\n15  DICHTE-STUFEN")
    if not treffer:
        print("   ok — zwei Stufen, nur Maß-Tokens, nur Werte aus KERNs Skala.")
        return 0
    for nr, z in treffer:
        print("   system/01b-erweiterung.css:%d  %s" % (nr, z))
    return len(treffer)


def eigenes_markup():
    """Katalog, Seiten, Muster und Skript — mit entmaskierten Anführungszeichen."""
    dateien = [os.path.join(WURZEL, "katalog", "inhalt.js"), os.path.join(WURZEL, "katalog.html"),
               os.path.join(WURZEL, "index.html"), os.path.join(WURZEL, "system", "kern-neu.js")] + \
        glob.glob(os.path.join(WURZEL, "muster", "*.html"))
    return {d: lies(d).replace('\\"', '"') for d in dateien}


def pruefe_hooks():
    """M65 (13, zweiter Teil): data-kn-Attribut ohne Verhalten."""
    markup = eigenes_markup()
    verhalten = lies(os.path.join(WURZEL, "system", "kern-neu.js")) + \
        "".join(lies(d) for d in eigene_css())
    def camel(a):
        teile = a[len("data-"):].split("-")
        return teile[0] + "".join(x[:1].upper() + x[1:] for x in teile[1:])
    gesehen, treffer = set(), []
    for d, text in markup.items():
        if d.endswith("kern-neu.js"):
            continue
        for a in sorted(set(re.findall(r"\b(data-kn-[a-z0-9-]+)", text))):
            if a in gesehen:
                continue
            gesehen.add(a)
            # das Attribut selbst zählt nicht: es muss AUSSERHALB des Markups vorkommen
            if a not in verhalten and camel(a) not in verhalten:
                treffer.append((os.path.relpath(d, WURZEL), a))
    print("\n13b DATA-ATTRIBUTE OHNE VERHALTEN")
    if not treffer:
        print("   ok — %d data-kn-Attribute, jedes in kern-neu.js oder im CSS." % len(gesehen))
        return 0
    for d, a in treffer:
        print("   %s  %s kommt weder im Skript noch im CSS vor" % (d, a))
    return len(treffer)


def pruefe_kern_klassen():
    """M65 (14): jede kern-Klasse existiert in kern.css."""
    kern = set(re.findall(r"\.(kern-[a-zA-Z0-9_-]+)", lies(os.path.join(WURZEL, "system", "kern.css"))))
    def klassen(text):
        gefunden = set()
        for m in re.finditer(r"class(?:Name)?\s*=\s*[\"']([^\"']*)[\"']", text):
            gefunden |= set(re.findall(r"(?<![\w-])(kern-[a-zA-Z0-9_-]+)", m.group(1)))
        gefunden |= set(re.findall(r"classList\.(?:add|toggle|remove|contains)\(\s*[\"'](kern-[a-zA-Z0-9_-]+)", text))
        return gefunden
    befund = sorted(klassen(lies(os.path.join(WURZEL, "katalog", "kern-inhalt.js")).replace('\\"', '"')) - kern)
    # Klassen aus KERNs Beispielen sind KERN-Markup (E8) — auch wenn kern.css sie
    # nicht kennt (F24); Beanstandung nur, was weder hier noch dort steht.
    treffer = []
    for d, text in eigenes_markup().items():
        for k in sorted(klassen(text) - kern - set(befund)):
            treffer.append((os.path.relpath(d, WURZEL), k))
    print("\n14  KERN-KLASSEN EXISTIEREN IN kern.css")
    if befund:
        print("   Befund im Original F24 (KERNs Beispiele, zählt nicht): " + ", ".join(befund))
    if not treffer:
        print("   ok — jede kern-Klasse in Katalog, Seiten, Muster und Skript steht in kern.css oder KERNs Beispielen.")
        return 0
    for d, k in treffer:
        print("   %s  %s fehlt in kern.css" % (d, k))
    return len(treffer)


def pruefe_fokus_token():
    """M65 (Plan-Nr. 12): Fokusfarben nur aus erlaubten Quellen."""
    erlaubt = re.compile(r"var\(--kern-color-action-focus-default-contextual\)|var\(--kern-color-layout-text-inverse-contextual\)|"
                         r"\b(Highlight|CanvasText|ButtonText|LinkText|currentColor)\b")
    treffer = []
    for d in eigene_css():
        quelle = ohne_kommentare(lies(d))
        for nr, z in enumerate(quelle.split("\n"), 1):
            for m in re.finditer(r"outline(-color)?\s*:\s*([^;}]+)", z):
                wert = m.group(2).strip()
                if re.match(r"^(none|0|inherit|initial|unset)\b", wert) or "-offset" in z[max(0, m.start() - 1):m.start() + 15]:
                    continue
                if m.group(1) is None and not re.search(r"[a-zA-Z(]", wert.split(None, 2)[-1] if len(wert.split()) > 2 else ""):
                    continue
                if not erlaubt.search(wert):
                    treffer.append((os.path.relpath(d, WURZEL), nr, z.strip()[:70]))
    print("\n21  FOKUS NUR ÜBER FOKUS-TOKEN")
    if not treffer:
        print("   ok — jeder Fokusring in KERNs Fokuston, Inversfarbe oder Systemfarbe.")
        return 0
    for d, nr, z in treffer:
        print("   %s:%d  %s" % (d, nr, z))
    return len(treffer)


def pruefe_stempel():
    """Versionsstempel vollständig und einheitlich."""
    seiten = [os.path.join(WURZEL, d) for d in ["index.html", "katalog.html", "pruefung/verhalten.html",
                                                "pruefung/kern-beispiele.html"]] + \
        glob.glob(os.path.join(WURZEL, "muster", "*.html"))
    treffer, stempel = [], set()
    for d in seiten + [os.path.join(WURZEL, "system", "kern-neu.css")]:
        text = ohne_kommentare(lies(d))
        stempel |= set(re.findall(r"\?v=([0-9a-z.-]+)", text))
        if d.endswith(".css"):
            for imp in re.findall(r'@import\s+"([^"]+)"', text):
                if "?v=" not in imp:
                    treffer.append(("system/kern-neu.css", "@import ohne Stempel: " + imp))
        else:
            for ref in re.findall(r'(?:href|src)="([^"]+)"', text):
                # Referenzdateien in "_ Resources" (KERN-Original für den Prüfstand) ändern sich nie
                if "_%20Resources" in ref or "_ Resources" in ref:
                    continue
                if re.search(r"\.(css|js)(\?|$)", ref) and not ref.startswith(("http", "data:")) and "?v=" not in ref:
                    treffer.append((os.path.relpath(d, WURZEL), "ohne Stempel: " + ref))
    if len(stempel) > 1:
        treffer.append(("—", "mehrere Stempel im Umlauf: " + ", ".join(sorted(stempel))))
    print("\n22  VERSIONSSTEMPEL")
    if not treffer:
        print("   ok — überall %s, auch an allen @import-Zeilen." % (", ".join(stempel) or "—"))
        return 0
    for d, z in treffer:
        print("   %s  %s" % (d, z))
    return len(treffer)


def pruefe_dialogtitel():
    """M60: jeder Dialog im eigenen Markup trägt einen Namen. KERNs eigene
    Beispiele (kern-inhalt.js) werden nicht geprüft — sie sind KERN."""
    dateien = [os.path.join(WURZEL, "katalog", "inhalt.js"), os.path.join(WURZEL, "katalog.html"),
               os.path.join(WURZEL, "index.html")] + glob.glob(os.path.join(WURZEL, "muster", "*.html"))
    treffer = []
    for d in dateien:
        text = lies(d).replace('\\"', '"')
        for m in re.finditer(r"<dialog\b[^>]*>", text):
            if not re.search(r"aria-(labelledby|label)\s*=", m.group(0)):
                treffer.append((os.path.relpath(d, WURZEL), text.count("\n", 0, m.start()) + 1, m.group(0)[:60]))
    print("\n13  DIALOG-TITEL")
    if not treffer:
        print("   ok — jeder Dialog hat einen Namen (aria-labelledby/aria-label).")
        return 0
    for d, nr, z in treffer:
        print("   %s:%d  Dialog ohne Namen: %s" % (d, nr, z))
    return len(treffer)


def pruefe_tastentabelle():
    """M50: Tastaturvertrag je bedienbarem Baustein im Katalog."""
    pfad = os.path.join(WURZEL, "katalog", "inhalt.js")
    quelle = lies(pfad)
    bloecke = re.split(r"\n  id: \"", quelle)[1:]
    # Bedienelemente im Markup ODER Widget-Rollen, die erst das Skript bedienbar macht (Baum)
    bedienbar = re.compile(r"<(button|a\s|input|select|textarea|summary)\b|tabindex=\\?\"0|"
                           r"role=\\?\"(tree|treeitem|tab|tablist|menu|menuitem|combobox|listbox|grid|switch|slider)\\?\"")
    treffer = []
    for b in bloecke:
        name = b.split('"', 1)[0]
        if bedienbar.search(b) and "\n  tasten:" not in b:
            treffer.append(name)
    print("\n20  TASTENTABELLE (M50)")
    if not treffer:
        print("   ok — jeder bedienbare Eintrag hat eine Tastentabelle.")
        return 0
    for n in treffer:
        print("   katalog/inhalt.js  Eintrag %s: bedienbar, aber ohne tasten" % n)
    return len(treffer)


def pruefe_systemtexte():
    """M86: die Texttabelle in kern-neu.js ist in beiden Sprachen
    vollständig, und kein Systemtext steht an ihr vorbei im Code."""
    pfad = os.path.join(WURZEL, "system", "kern-neu.js")
    quelle = lies(pfad)
    treffer = []
    m = re.search(r"var TEXTE = \{\n  de: \{\n(.*?)\n  \},\n  en: \{\n(.*?)\n  \}\n\};", quelle, re.S)
    if not m:
        print("\n19  SYSTEMTEXTE DE/EN")
        print("   system/kern-neu.js  Texttabelle TEXTE nicht gefunden (Aufbau geändert?)")
        return 1
    schluessel = lambda block: set(re.findall(r"(?m)^    (\w+):", block))
    de, en = schluessel(m.group(1)), schluessel(m.group(2))
    for s in sorted(de - en):
        treffer.append("Schlüssel %s fehlt in TEXTE.en" % s)
    for s in sorted(en - de):
        treffer.append("Schlüssel %s fehlt in TEXTE.de" % s)
    # außerhalb der Tabelle: Zeichenketten mit deutschen Systemwörtern
    rest = quelle[:m.start()] + "\n" * m.group(0).count("\n") + quelle[m.end():]
    rest = ohne_kommentare(rest)
    woerter = re.compile(r"ausgewählt|entfernt|entfernen|Zeichen|Monat|Abbrechen|kopiert|Abweichung|"
                         r"Grundstellung|Stufe |Zeile|Treffer|sortiert|Fehler|wird geladen", re.I)
    for nr, zeile in enumerate(rest.splitlines(), 1):
        for s in re.findall(r"\"([^\"\n]*)\"|'([^'\n]*)'", zeile):
            text = s[0] or s[1]
            # Schlüssel der Tabelle und ID-Suffixe ("-fehler") sind kein Text
            if text in de or text.startswith(("data-", "aria-", "kn-", "[", "-")):
                continue
            if woerter.search(text):
                treffer.append("Zeile %d: Text an TEXTE vorbei: \"%s\"" % (nr, text[:50]))
    print("\n19  SYSTEMTEXTE DE/EN")
    if not treffer:
        print("   ok — %d Schlüssel in beiden Sprachen; kein Systemtext an der" % len(de))
        print("        Tabelle vorbei.")
        return 0
    for z in treffer:
        print("   system/kern-neu.js  " + z)
    return len(treffer)


def pruefe_zuordnung():
    """M70/M72: Katalog ↔ begriffe.json; erzeugte Dateien aktuell."""
    import json
    import subprocess
    treffer = []
    b = json.load(open(os.path.join(WURZEL, "katalog", "begriffe.json"), encoding="utf-8"))
    inhalt = lies(os.path.join(WURZEL, "katalog", "inhalt.js"))
    eigene = re.findall(r'id: "([^"]+)", name: "[^"]+", gruppe: "([^"]+)"', inhalt)
    kern = lies(os.path.join(WURZEL, "katalog", "kern-inhalt.js"))
    kern_ids = [k["id"] for k in json.loads(kern[kern.index("["):kern.rindex("]") + 1])]
    alle_ids = set(kern_ids) | {i for i, _ in eigene}
    zugeordnet = set()
    for gruppe in ("kern", "erweiterungen", "neu_geplant"):
        for e in b[gruppe]:
            if "katalog" not in e:
                treffer.append(("begriffe.json", e["code"] + " ohne Feld katalog"))
            for i in e.get("katalog", []):
                zugeordnet.add(i)
                if i not in alle_ids:
                    treffer.append(("begriffe.json", e["code"] + ": Katalog-ID " + i + " gibt es nicht"))
    for i in kern_ids + [i for i, g in eigene if g != "Grundlagen"]:
        if i not in zugeordnet:
            treffer.append(("katalog", "Eintrag " + i + " hat keine Namen in begriffe.json"))
    for skript, datei in (("katalog-meta-bauen.py", "katalog/meta.js"), ("umstieg-bauen.py", "UMSTIEG.txt")):
        r = subprocess.run([sys.executable, os.path.join(WURZEL, "pruefung", skript), "--pruefen"],
                           capture_output=True, text=True)
        if r.returncode:
            treffer.append((datei, "veraltet oder fehlerhaft — python3 pruefung/" + skript + " " + r.stdout.strip()))
    print("\n23  ZUORDNUNG UND ERZEUGTES")
    if not treffer:
        print("   ok — %d Katalogeinträge zugeordnet; meta.js und UMSTIEG.txt aktuell." % len(zugeordnet))
        return 0
    for d, z in treffer:
        print("   %s  %s" % (d, z))
    return len(treffer)


def pruefe_schatten():
    """Kein Schatten in eigenen Bausteinen — wie KERN (Wunsch 13.10.2026)."""
    treffer = []
    for d in sorted(glob.glob(os.path.join(WURZEL, "system", "0[2-6]*.css"))):
        text = ohne_kommentare(lies(d))
        for m in re.finditer(r"(?:box|text)-shadow\s*:\s*([^;}]+)", text):
            wert = " ".join(m.group(1).split())
            if wert == "none" or "kern-shadow" in wert:
                if "kern-shadow" in wert:
                    treffer.append((os.path.relpath(d, WURZEL), "Schatten-Token: " + wert))
                continue
            # Linien und Ringe: inset oder ohne Unschärfe (drittes Längenmaß 0) — kein Schatten
            for teil in re.split(r",(?![^()]*\))", wert):
                laengen = re.findall(r"(?<![\w-])-?\d*\.?\d+(?:px|rem|em)?(?![\w%])|var\([^)]*\)|calc\([^)]*\)", teil.replace("inset", ""))
                unschaerfe = laengen[2] if len(laengen) > 2 else "0"
                if "inset" not in teil and unschaerfe not in ("0", "0px"):
                    treffer.append((os.path.relpath(d, WURZEL), "Schatten mit Unschärfe: " + teil.strip()))
    print("\n24  KEIN SCHATTEN")
    if not treffer:
        print("   ok — keine Schatten in system/02- … 06-*.css; Abgrenzung über Ränder.")
        return 0
    for d, z in treffer:
        print("   %s  %s" % (d, z))
    return len(treffer)


def pruefe_zweisprachig():
    """M85: Katalog vollständig Deutsch und Englisch."""
    import json
    sys.path.insert(0, os.path.join(WURZEL, "pruefung"))
    from katalog_lesen import lies as katalog_lesen
    print("\n17  ZWEISPRACHIG")
    d = katalog_lesen()
    if d is None:
        print("   kein JavaScript-Interpreter (node oder osascript) — Prüfung nicht möglich")
        return 1
    seite = lies(os.path.join(WURZEL, "katalog.html"))
    def woerter(name):
        m = re.search(name + r": \{(.*?)\}", seite, re.S)
        return set(re.findall(r'"([^"]+)":', m.group(1))) if m else set()
    gruppen, herkuenfte, arten = woerter("gruppe"), woerter("herkunft"), woerter("art")
    EN = d["KATALOG_EN"]
    treffer = []
    def leer(s):
        return not isinstance(s, str) or not s.strip()
    def kopiert(de, en):
        return isinstance(de, str) and de == en and " " in de and len(de) > 12
    for quelle, eintraege in (("inhalt.js", d["KATALOG"]), ("kern-inhalt.js", d["KERN_BAUSTEINE"])):
        for k in eintraege:
            i, en = k["id"], EN.get(k["id"])
            if en is None:
                treffer.append((quelle, i + ": kein Englisch"))
                continue
            for f in ("name", "zweck"):
                if leer(en.get(f)):
                    treffer.append((quelle, i + ": " + f + " fehlt"))
                elif f == "zweck" and kopiert(k.get(f), en.get(f)):
                    treffer.append((quelle, i + ": zweck unübersetzt"))
            for f in ("wann", "nicht", "barriere"):
                de_l, en_l = k.get(f, []), en.get(f, [])
                if len(de_l) != len(en_l):
                    treffer.append((quelle, "%s: %s %d Deutsch, %d Englisch" % (i, f, len(de_l), len(en_l))))
                for a, b in zip(de_l, en_l):
                    if leer(b) or kopiert(a, b):
                        treffer.append((quelle, "%s: %s leer oder unübersetzt: %s" % (i, f, a[:40])))
            bsp_de, bsp_en = k.get("bsp", []), en.get("bsp", [])
            if len(bsp_de) != len(bsp_en):
                treffer.append((quelle, "%s: Beispiele %d Deutsch, %d Englisch" % (i, len(bsp_de), len(bsp_en))))
            for a, b in zip(bsp_de, bsp_en):
                if leer(b.get("titel")):
                    treffer.append((quelle, i + ": Beispieltitel fehlt: " + a.get("titel", "")[:40]))
                if a.get("hinweis") and leer(b.get("hinweis")):
                    treffer.append((quelle, i + ": Beispielhinweis fehlt: " + a.get("titel", "")[:40]))
            t_de, t_en = k.get("tasten", []), en.get("tasten", [])
            if len(t_de) != len(t_en):
                treffer.append((quelle, "%s: Tasten %d Deutsch, %d Englisch" % (i, len(t_de), len(t_en))))
            for a, b in zip(t_de, t_en):
                for x, y in zip(a, b + [""] * len(a)):
                    if x and leer(y):
                        treffer.append((quelle, i + ": Tastenzeile unvollständig: " + " · ".join(a)[:50]))
                        break
            p_de, p_en = k.get("pflichten", []), en.get("pflichten", [])
            if len(p_de) != len(p_en):
                treffer.append((quelle, "%s: Pflichten %d Deutsch, %d Englisch" % (i, len(p_de), len(p_en))))
            for a, b in zip(p_de, p_en):
                if leer(b[0] if b else "") or (a[2] and (len(b) < 2 or leer(b[1]))):
                    treffer.append((quelle, i + ": Pflicht unvollständig: " + a[0][:40]))
            k_de, k_en = k.get("klassen", []), en.get("klassen")
            if any(z[1] not in arten for z in k_de):
                if not k_en or len(k_en) != len(k_de) or any(leer(x) for x in k_en):
                    treffer.append((quelle, "%s: Klassen %d Deutsch, %d Englisch" % (i, len(k_de), len(k_en or []))))
            if k.get("gruppe") not in gruppen:
                treffer.append((quelle, i + ": Gruppe ohne englisches Wort: " + str(k.get("gruppe"))))
            h = k.get("herkunft") or ("Erweiterung (Grundlage, aus KERN-Tokens)" if k.get("gruppe") == "Grundlagen" else "Erweiterung (aus KERN-Tokens)")
            if h not in herkuenfte and leer(en.get("herkunft")):
                treffer.append((quelle, i + ": Herkunft ohne Englisch: " + h[:40]))
    namen = [EN[x]["name"] for x in EN if not leer(EN[x].get("name"))]
    for n in sorted({n for n in namen if namen.count(n) > 1}):
        treffer.append(("inhalt-en.js", "englischer Name doppelt: " + n))
    alle_ids = {k["id"] for k in d["KATALOG"] + d["KERN_BAUSTEINE"]}
    for x in sorted(set(EN) - alle_ids):
        treffer.append(("inhalt-en.js", "Englisch zu unbekanntem Eintrag: " + x))
    b = json.load(open(os.path.join(WURZEL, "katalog", "begriffe.json"), encoding="utf-8"))
    for gruppe in ("kern", "erweiterungen", "neu_geplant"):
        for e in b[gruppe]:
            if leer(e.get("de")) or leer(e.get("en")):
                treffer.append(("begriffe.json", e["code"] + ": Deutsch oder Englisch fehlt"))
    if not treffer:
        print("   ok — %d Einträge vollständig Deutsch und Englisch; Gruppen, Herkunft, Begriffe zweisprachig." % len(alle_ids))
        return 0
    for q, z in treffer[:40]:
        print("   %s  %s" % (q, z))
    if len(treffer) > 40:
        print("   … und %d weitere" % (len(treffer) - 40))
    return len(treffer)


def _spezifitaet(sel):
    """(Klassen/Attribute/Pseudoklassen, Elemente) eines einfachen Selektors.

    Reicht für die Knopfselektoren von KERN: Klassen, :hover/:active,
    :not(...) (zählt den Inhalt, wie die Spezifikation es verlangt),
    Attributselektoren und Elementnamen. IDs kommen dort nicht vor und
    würden den Vergleich nur verschieben, nie umkehren.
    """
    rest = sel
    b = 0
    # :not(...) zuerst: Inhalt zaehlt, die Pseudoklasse selbst nicht
    while True:
        i = rest.find(":not(")
        if i < 0:
            break
        tiefe, j = 0, i + 4
        while j < len(rest):
            if rest[j] == "(":
                tiefe += 1
            elif rest[j] == ")":
                tiefe -= 1
                if tiefe == 0:
                    break
            j += 1
        innen = rest[i + 5:j]
        ib, _ = _spezifitaet(innen)
        b += ib
        rest = rest[:i] + " " + rest[j + 1:]
    b += len(re.findall(r"\.[A-Za-z_-][\w-]*", rest))
    b += len(re.findall(r"\[[^\]]*\]", rest))
    b += len(re.findall(r"(?<!:):(?!:)[a-zA-Z-]+", rest))
    c = len(re.findall(r"(?:^|[\s>+~])([a-zA-Z][\w-]*)", rest))
    return b, c


def _regeln(text):
    """(Selektor, Deklarationen, Reihenfolge) je Regel — ohne @media-Inhalte,
    weil die Knopfzustände dort nicht stehen."""
    text = ohne_kommentare(text)
    aus, i = [], 0
    for m in re.finditer(r"([^{}]+)\{([^{}]*)\}", text):
        sel = " ".join(m.group(1).split())
        if sel.startswith("@") or "@media" in sel:
            continue
        aus.append((sel, m.group(2), i))
        i += 1
    return aus


def pruefe_zustand_gedrueckt():
    """26  GEDRÜCKT SCHLÄGT HOVER (F27)

    Ein Knopf, dessen :hover-Regel spezifischer ist als seine :active-Regel,
    zeigt beim Drücken mit Maus oder Finger den hover-Zustand — es gibt keine
    Druckrückmeldung. Geprüft wird die WIRKSAME Kaskade über kern.css UND die
    eigenen Dateien zusammen: gewinnt active bei höherer Spezifität, sonst bei
    gleicher Spezifität und späterer Stelle.
    """
    dateien = [os.path.join(WURZEL, "system", "kern.css")] + eigene_css()
    hover, aktiv = {}, {}
    lfd = 0
    for d in dateien:
        for sel, dekl, _ in _regeln(lies(d)):
            for teil in sel.split(","):
                teil = teil.strip()
                lfd += 1
                if "background" not in dekl:
                    continue
                m = re.match(r"^(\.kern-btn--[a-z-]+)(.*)$", teil)
                if not m:
                    continue
                basis, schwanz = m.group(1), m.group(2)
                if ":active" in schwanz:
                    ziel = aktiv
                elif ":hover" in schwanz:
                    ziel = hover
                else:
                    continue
                b, c = _spezifitaet(teil)
                vorher = ziel.get(basis)
                if vorher is None or (b, c, lfd) > vorher[:3]:
                    ziel[basis] = (b, c, lfd, os.path.relpath(d, WURZEL), teil)

    treffer = []
    for basis, h in sorted(hover.items()):
        a = aktiv.get(basis)
        if a is None:
            treffer.append((basis, "keine :active-Regel — kein gedrückter Zustand"))
            continue
        if (a[0], a[1]) > (h[0], h[1]):
            continue                       # höhere Spezifität gewinnt
        if (a[0], a[1]) == (h[0], h[1]) and a[2] > h[2]:
            continue                       # gleich spezifisch, später — gewinnt
        treffer.append((basis, "hover (%d,%d) aus %s schlägt active (%d,%d) aus %s" %
                        (h[0], h[1], h[3], a[0], a[1], a[3])))

    print("\n26  GEDRÜCKT SCHLÄGT HOVER (F27)")
    if not hover:
        print("   keine Knopf-Zustandsregeln gefunden — Prüfung nicht möglich")
        return 1
    if not treffer:
        print("   ok — bei %d Knopfvarianten gewinnt der gedrückte Zustand über hover." % len(hover))
        return 0
    for b, z in treffer:
        print("   %s  %s" % (b, z))
    return len(treffer)


def pruefe_fassung():
    """27  FASSUNG EINHEITLICH

    Die Fassung steht an EINER Quelle: thema/fassung.json. Jede sichtbare
    Stelle wird daraus gesetzt (pruefung/fassung-setzen.py), nie von Hand.
    Geprüft wird mit DENSELBEN Mustern wie beim Setzen — Regel und Prüfung
    haben eine Quelle (Guiding §3). Vorher stand an sechs Stellen eine von
    Hand gepflegte Zeile "Stand 13.10.2026", die seit einem Monat falsch war;
    genau das soll nicht wiederkommen.
    """
    import importlib.util
    pfad = os.path.join(WURZEL, "pruefung", "fassung-setzen.py")
    spec = importlib.util.spec_from_file_location("fassung_setzen", pfad)
    modul = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modul)
    f, datum, fehlend, abweichend = modul.pruefung()

    print("\n27  FASSUNG EINHEITLICH")
    treffer = fehlend + abweichend
    if not treffer:
        print("   ok — Fassung %s (%s) an allen %d Stellen; eine Quelle: thema/fassung.json."
              % (f, modul.deutsch(datum), len(modul.STELLEN)))
        return 0
    for z in treffer:
        print("   " + z)
    return len(treffer)



# ------------------------------------------------------------------
#  Prüfungen 28–30: die drei Darstellungsfehler vom 25.11.2026.
#  Alle drei sahen im Quelltext richtig aus und waren erst im Bild zu
#  sehen. Deshalb prüft hier die MASCHINE, was das Auge gefunden hat.
# ------------------------------------------------------------------

class _Baum(object):
    """Winziger DOM-Aufbau für die Beispiele des Katalogs. Kein Parser von
    aussen (das System hat keine Abhängigkeiten): html.parser ist in Python
    eingebaut."""

    def __init__(self):
        from html.parser import HTMLParser
        leer = {"area", "base", "br", "col", "embed", "hr", "img", "input",
                "link", "meta", "source", "track", "wbr"}
        wurzeln, stapel = [], []

        class P(HTMLParser):
            def handle_starttag(self, tag, attrs):
                a = dict(attrs)
                k = {"tag": tag, "klassen": set((a.get("class") or "").split()),
                     "kinder": [], "eltern": stapel[-1] if stapel else None}
                (stapel[-1]["kinder"] if stapel else wurzeln).append(k)
                if tag not in leer:
                    stapel.append(k)

            def handle_startendtag(self, tag, attrs):
                self.handle_starttag(tag, attrs)

            def handle_endtag(self, tag):
                for i in range(len(stapel) - 1, -1, -1):
                    if stapel[i]["tag"] == tag:
                        del stapel[i:]
                        return

        self._P, self._wurzeln = P, wurzeln

    def fuettere(self, html):
        p = self._P(convert_charrefs=True)
        p.feed(html)
        p.close()

    def alle(self):
        def gehe(k):
            for x in k:
                yield x
                for y in gehe(x["kinder"]):
                    yield y
        return gehe(self._wurzeln)


def _katalog_baum():
    """Alle lebenden Beispiele des Katalogs und die Musterseiten als Baum.
    Gibt None zurück, wenn der Katalog nicht gelesen werden kann — dann meldet
    die Prüfung das, statt still "ok" zu sagen."""
    sys.path.insert(0, os.path.join(WURZEL, "pruefung"))
    from katalog_lesen import lies as katalog_lesen
    d = katalog_lesen()
    if d is None:
        return None
    baum = _Baum()
    for eintrag in d.get("KATALOG", []) + d.get("KERN_BAUSTEINE", []):
        for b in eintrag.get("bsp", []) or []:
            if b.get("html"):
                baum.fuettere(b["html"])
    for seite in sorted(glob.glob(os.path.join(WURZEL, "muster", "*.html"))):
        baum.fuettere(lies(seite))
    return baum


def _deklarationen(block):
    """{Eigenschaft: Wert} einer Regel, Wert normalisiert."""
    aus = {}
    for teil in block.split(";"):
        if ":" not in teil:
            continue
        name, wert = teil.split(":", 1)
        aus[name.strip().lower()] = " ".join(wert.split()).lower()
    return aus


def pruefe_rundung_quadrat():
    """28  RUNDUNG "circle" NUR AUF QUADRAT

    KERNs Token --kern-metric-border-radius-circle ist 50 %. Auf einer
    quadratischen Fläche ist das ein Kreis, auf jeder anderen eine ELLIPSE.
    Am 25.11.2026 waren so die Bahn des Schalters (56 × 32) eine Ellipse, aus
    der der runde Knauf links herausragte, und der Fortschrittsbalken
    (100 % × 8) eine Linse mit spitzen Enden. Eine Pille braucht die halbe
    Höhe, nicht 50 %."""
    breit = ("inline-size", "width", "min-inline-size", "min-width")
    hoch = ("block-size", "height", "min-block-size", "min-height")
    treffer = []
    for d in komponenten_css():
        for sel, block, _ in _regeln(lies(d)):
            dek = _deklarationen(block)
            r = dek.get("border-radius", "")
            if "50%" not in r and "border-radius-circle" not in r:
                continue
            b = [dek[k] for k in breit if k in dek]
            h = [dek[k] for k in hoch if k in dek]
            if not b or not h:
                continue
            if b[0] != h[0]:
                treffer.append((os.path.relpath(d, WURZEL),
                                "%s — %s neben %s, also eine Ellipse" % (sel, b[0], h[0])))
    print("\n28  RUNDUNG \"circle\" NUR AUF QUADRAT")
    if not treffer:
        print("   ok — 50 % steht nur auf quadratischen Flächen; Pillen rechnen")
        print("        mit der halben Höhe.")
        return 0
    for d, z in treffer:
        print("   %s  %s" % (d, z))
    return len(treffer)


def pruefe_flaeche_auf_flaeche():
    """29  FELD AUF GLEICHFARBIGER FLÄCHE

    KERNs Eingabefelder haben keinen Rahmen, nur einen Strich unten und eine
    getönte Füllung. Legt ein eigener Baustein sie auf eine Fläche mit genau
    dieser Tönung, verschwindet das Feld: am 25.11.2026 in der Werkzeugleiste
    und in der Dateiablage. Eine Fläche nie auf eine gleichfarbige Fläche."""
    getoent = set()
    for d in komponenten_css():
        for sel, block, _ in _regeln(lies(d)):
            dek = _deklarationen(block)
            if "layout-background-hued" not in dek.get("background", dek.get("background-color", "")):
                continue
            for k in re.findall(r"\.(kn-[a-zA-Z0-9_-]+)", sel):
                getoent.add(k)
    baum = _katalog_baum()
    print("\n29  FELD AUF GLEICHFARBIGER FLÄCHE")
    if baum is None:
        print("   KATALOG NICHT LESBAR — node oder osascript fehlt.")
        return 1
    feld = ("kern-form-input__input", "kern-form-input__select", "kern-form-input__textarea")
    treffer = set()
    for k in baum.alle():
        if not (k["klassen"] & getoent):
            continue
        offen = list(k["kinder"])
        while offen:
            x = offen.pop()
            if x["klassen"] & set(feld):
                treffer.add((sorted(k["klassen"] & getoent)[0], sorted(x["klassen"] & set(feld))[0]))
            offen.extend(x["kinder"])
    if not treffer:
        print("   ok — kein KERN-Feld steht auf einer Fläche in seiner eigenen Tönung.")
        return 0
    for huelle, f in sorted(treffer):
        print("   .%s  trägt die getönte Fläche und enthält .%s — das Feld verschwindet darauf." % (huelle, f))
    return len(treffer)


def pruefe_geschwister_regeln():
    """30  :first-child / :last-child GREIFEN

    .kn-split-button > .kern-btn:last-child fasste ins Leere: das letzte Kind
    ist das Menü (div.kn-menu), nicht der Knopf. Die Regel stand richtig da und
    wirkte nie — der Teilknopf zerfiel in zwei Knöpfe (25.11.2026). Jede solche
    Regel muss im Katalog mindestens einen Treffer haben."""
    baum = _katalog_baum()
    print("\n30  :first-child / :last-child GREIFEN")
    if baum is None:
        print("   KATALOG NICHT LESBAR — node oder osascript fehlt.")
        return 1

    def kinder_elemente(k):
        return k["kinder"] if k else []

    def passt(k, klassen):
        return klassen <= k["klassen"]

    treffer = []
    gesehen = set()
    for d in komponenten_css():
        for sel, _block, _ in _regeln(lies(d)):
            for einzel in sel.split(","):
                einzel = einzel.strip()
                if ":first-child" not in einzel and ":last-child" not in einzel:
                    continue
                ende = "first" if ":first-child" in einzel else "last"
                teile = re.split(r"\s*>\s*|\s+", einzel)
                letzte = teile[-1]
                if ":hover" in einzel or ":focus" in einzel or "::" in letzte:
                    continue
                klassen = set(re.findall(r"\.([a-zA-Z0-9_-]+)", letzte))
                vorfahr = set(re.findall(r"\.([a-zA-Z0-9_-]+)", teile[-2])) if len(teile) > 1 else set()
                if not klassen:
                    continue
                schluessel = (tuple(sorted(klassen)), tuple(sorted(vorfahr)), ende)
                if schluessel in gesehen:
                    continue
                gesehen.add(schluessel)
                getroffen = False
                for k in baum.alle():
                    if not passt(k, klassen):
                        continue
                    if vorfahr:
                        v, ok = k["eltern"], False
                        while v is not None:
                            if passt(v, vorfahr):
                                ok = True
                                break
                            v = v["eltern"]
                        if not ok:
                            continue
                    geschwister = kinder_elemente(k["eltern"])
                    if not geschwister:
                        continue
                    if (geschwister[0] is k) if ende == "first" else (geschwister[-1] is k):
                        getroffen = True
                        break
                if not getroffen:
                    treffer.append((os.path.relpath(d, WURZEL),
                                    "%s greift im Katalog nirgends" % einzel))
    if not treffer:
        print("   ok — jede Regel mit :first-child / :last-child trifft im Katalog.")
        return 0
    for d, z in treffer:
        print("   %s  %s" % (d, z))
    return len(treffer)



if __name__ == "__main__":
    print("KERN 2.8.2 (nbyc) — PRÜFUNG")
    print("=" * 64)
    summe = (pruefe_rohwerte() + pruefe_deckkraft() + pruefe_zustaende() +
             pruefe_dataset() + pruefe_vendormasse() + pruefe_merker() +
             pruefe_katalog() + pruefe_rueckfall() + pruefe_masse() +
             pruefe_kern_treue() + pruefe_carbon() + pruefe_token_json() +
             pruefe_felder() + pruefe_dichte() + pruefe_css_syntax() +
             pruefe_stempel() + pruefe_dialogtitel() + pruefe_hooks() + pruefe_kern_klassen() + pruefe_fokus_token() +
             pruefe_tastentabelle() + pruefe_systemtexte() + pruefe_zuordnung() + pruefe_schatten() + pruefe_zweisprachig() +
             pruefe_zustand_gedrueckt() + pruefe_fassung() +
             pruefe_rundung_quadrat() + pruefe_flaeche_auf_flaeche() + pruefe_geschwister_regeln())
    print("\n" + "=" * 64)
    print("%d Beanstandungen." % summe if summe else "Ohne Beanstandung.")
    print("Kontrast und Bedienung werden im Browser gemessen — METHODE.txt, 05.")
    sys.exit(1 if summe else 0)
