#!/usr/bin/env python3
"""
FASSUNG SETZEN — schreibt die Fassung an ALLE sichtbaren Stellen (EINE Quelle, Guiding §3).

Einzige Quelle ist "thema/fassung.json". Von Hand wird die Fassung NIRGENDS
geschrieben — wie beim Versionsstempel (stempel.py). Prüfung 27 in pruefe.py
wacht darüber.

    python3 pruefung/fassung-setzen.py            schreibt die Fassung aus fassung.json
    python3 pruefung/fassung-setzen.py --zeigen   nennt sie und jede Stelle, ändert nichts

Fünf Arten von Stellen, je mit eigenem Muster — kein blindes Suchen und
Ersetzen: In AENDERUNGEN.txt stehen frühere Fassungen ABSICHTLICH (Geschichte),
die dürfen nicht mitwandern (Core Rules §5).

    span      <!--kn-fassung-->0.2.0<!--/kn-fassung-->    sichtbar in HTML
    titel     <title>… · Fassung 0.2.0</title>            Fenstertitel
    konstante var FASSUNG = "0.2.0"; /* kn-fassung */      für die Texttabelle
    kopf      "Fassung: 0.2.0 · 16.11.2026" als Kopfzeile  Textunterlagen
    json      "version": "0.2.0"                           Storybook-package.json

Erzeugte Dateien stehen NICHT in dieser Liste: kern-beispiele.html, die
Story-Dateien und das Heft lesen die Fassung beim Erzeugen selbst.

Alle Muster werden geprüft, BEVOR die erste Datei geschrieben wird — sonst
bliebe bei einem Fehlschlag die Hälfte geändert zurück (Core Rules §2).
"""
import io
import json
import os
import re
import sys

WURZEL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJEKT = os.path.dirname(WURZEL)
QUELLE = os.path.join(WURZEL, "thema", "fassung.json")

ZAHL = r"[0-9]+\.[0-9]+\.[0-9]+"

# (Art, Pfad relativ zu WURZEL bzw. ab PROJEKT mit "../")
STELLEN = [
    ("span",      "index.html"),
    ("titel",     "index.html"),
    ("span",      "katalog.html"),
    ("titel",     "katalog.html"),
    ("konstante", "katalog.html"),
    ("span",      "pruefung/verhalten.html"),
    ("titel",     "pruefung/verhalten.html"),
    ("kopf",      "LIESMICH.txt"),
    ("kopf",      "METHODE.txt"),
    ("kopf",      "ABWEICHUNGEN.txt"),
    ("kopf",      "AENDERUNGEN.txt"),
    ("kopf",      "UMSTIEG.txt"),
    ("kopf",      "VERGLEICH.txt"),
    ("json",      "../KERN 2.8.2 (nbyc) Storybook/package.json"),
]

# "Fassung <Zahl>", das NICHT unmittelbar von der Marke eingeleitet wird.
# Der Fenstertitel ist ausgenommen: er hat sein eigenes Muster (titel).
UNGESCHUETZT = re.compile(r"(?<!kn-fassung-->)(?<!<title>)Fassung\s+(" + ZAHL + r")(?![^<]*</title>)")

MUSTER = {
    "span":      re.compile(r"(<!--kn-fassung-->)" + ZAHL + r"(<!--/kn-fassung-->)"),
    "titel":     re.compile(r"(<title>[^<]*?·\s*Fassung\s+)" + ZAHL),
    "konstante": re.compile(r'(var FASSUNG = ")' + ZAHL + r'(";\s*/\* kn-fassung)'),
    "kopf":      re.compile(r"(?m)^(Fassung:\s+)" + ZAHL + r"(\s+·\s+)\S+\s*$"),
    "json":      re.compile(r'("version":\s*")' + ZAHL + r'(")'),
}


def pfad(rel):
    return os.path.normpath(os.path.join(WURZEL, rel))


def fassung():
    d = json.load(io.open(QUELLE, encoding="utf-8"))
    for schluessel in ("fassung", "datum"):
        if schluessel not in d:
            sys.exit("%s: \"%s\" fehlt." % (QUELLE, schluessel))
    if not re.fullmatch(ZAHL, d["fassung"]):
        sys.exit("%s: \"fassung\" ist \"%s\", erwartet x.y.z." % (QUELLE, d["fassung"]))
    return d["fassung"], d["datum"]


def deutsch(iso):
    j, m, t = iso.split("-")
    return "%s.%s.%s" % (t, m, j)


def ersatz(art, f, datum):
    if art == "kopf":
        return lambda m: m.group(1) + f + m.group(2) + deutsch(datum)
    if art == "titel":
        return lambda m: m.group(1) + f
    return lambda m: m.group(1) + f + m.group(2)


def pruefung():
    """Für Prüfung 27 in pruefe.py: (Fassung, Datum, fehlend, abweichend).

    fehlend     Stellen ohne Markierung — dort kann die Fassung nie ankommen.
    abweichend  Stellen, die eine ANDERE Fassung tragen als fassung.json.
    Dieselben Muster wie beim Setzen: EINE Quelle für die Regel (Guiding §3).
    """
    f, datum = fassung()
    fehlend, abweichend = [], []
    for art, rel in STELLEN:
        q = pfad(rel)
        if not os.path.isfile(q):
            fehlend.append("%s (%s): Datei fehlt" % (rel, art))
            continue
        text = io.open(q, encoding="utf-8").read()
        if not MUSTER[art].search(text):
            fehlend.append("%s (%s): Markierung fehlt" % (rel, art))
            continue
        if MUSTER[art].sub(ersatz(art, f, datum), text) != text:
            abweichend.append("%s (%s): trägt nicht %s" % (rel, art, f))

    # Eine EINZELNE entfernte Markierung in einer Datei, die weitere trägt,
    # fiele oben nicht auf (Gegenprobe C, 16.11.2026). Deshalb zusätzlich:
    # jede Fassungsangabe in den HTML-Seiten muss in einer Marke stehen.
    for rel in sorted({r for art, r in STELLEN if r.endswith(".html")}):
        q = pfad(rel)
        if not os.path.isfile(q):
            continue
        text = io.open(q, encoding="utf-8").read()
        ohne = UNGESCHUETZT.findall(text)
        for z in ohne:
            abweichend.append("%s: \"Fassung %s\" ohne Markierung — von Hand geschrieben?" % (rel, z))

    return f, datum, fehlend, abweichend


def lauf(zeigen):
    f, datum = fassung()
    # 1. Durchgang: ALLE Muster prüfen, nichts schreiben
    geplant, fehlt = [], []
    for art, rel in STELLEN:
        p = pfad(rel)
        if not os.path.isfile(p):
            fehlt.append("%s (%s): Datei fehlt" % (rel, art))
            continue
        text = io.open(p, encoding="utf-8").read()
        treffer = MUSTER[art].findall(text)
        if not treffer:
            fehlt.append("%s (%s): Markierung fehlt" % (rel, art))
            continue
        neu = MUSTER[art].sub(ersatz(art, f, datum), text)
        geplant.append((rel, art, p, text, neu, len(treffer)))
    if fehlt:
        print("Fassung %s — nichts geschrieben, %d Stelle(n) ohne Markierung:" % (f, len(fehlt)))
        for z in fehlt:
            print("   " + z)
        return 1

    if zeigen:
        print("Fassung %s (%s), Quelle %s" % (f, deutsch(datum), os.path.relpath(QUELLE, WURZEL)))
        for rel, art, _, text, neu, n in geplant:
            print("   %-9s %-28s %d Stelle(n)%s" % (art, rel, n, "" if text == neu else "  — weicht ab"))
        return 0

    # 2. Durchgang: schreiben
    geaendert = 0
    for rel, art, p, text, neu, n in geplant:
        if text != neu:
            io.open(p, "w", encoding="utf-8").write(neu)
            geaendert += 1
    print("Fassung %s (%s) an %d Stellen in %d Dateien gesetzt (%d geändert)." %
          (f, deutsch(datum), sum(g[5] for g in geplant), len({g[0] for g in geplant}), geaendert))
    return 0


if __name__ == "__main__":
    sys.exit(lauf("--zeigen" in sys.argv))
