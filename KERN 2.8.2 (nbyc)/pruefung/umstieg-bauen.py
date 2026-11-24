#!/usr/bin/env python3
"""
ERZEUGT "UMSTIEG.txt" (M72) aus katalog/begriffe.json — der einen Quelle
aller Namen. Nie von Hand ändern; neue Namen in begriffe.json eintragen.

    python3 pruefung/umstieg-bauen.py            schreibt UMSTIEG.txt
    python3 pruefung/umstieg-bauen.py --pruefen  Rückgabe 1, wenn veraltet
"""
import json
import io
import os
import sys

WURZEL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QUELLE = os.path.join(WURZEL, "katalog", "begriffe.json")
ZIEL = os.path.join(WURZEL, "UMSTIEG.txt")

# Fassung: EINE Quelle ist thema/fassung.json (Guiding §3) — UMSTIEG.txt ist
# erzeugt, die Kopfzeile wird deshalb hier geschrieben, nicht von Hand.
with io.open(os.path.join(WURZEL, "thema", "fassung.json"), encoding="utf-8") as _f:
    _fassung = json.load(_f)
FASSUNG = "Fassung: %s · %s" % (_fassung["fassung"],
                                "%s.%s.%s" % tuple(reversed(_fassung["datum"].split("-"))))

KOPF = """UMSTIEG VON KERN NEU 0.5.7 AUF KERN 2.8.2 (nbyc)
""" + FASSUNG + """
================================================================================
NAME  "KERN 2.8.2 (nbyc)": 2.8.2 ist die Version des eingebundenen offiziellen
      KERN; "nbyc" steht für "New by Claude" — neu gebaut mit Claude, dem
      KI-Assistenten von Anthropic. Nicht das offizielle KERN.

ERZEUGT von pruefung/umstieg-bauen.py aus katalog/begriffe.json — nicht von
Hand ändern. (Die Fassung 0.5.6 → 0.5.7 liegt in Git, Tag 0.5.7.)

DIE KURZE ANTWORT
--------------------------------------------------------------------------------
2.8.2 (nbyc) ist ein BRUCH mit 0.5.7 (Entscheidung E1, angekündigt in AENDERUNGEN):
  1  KERN 2.8.2 ist unverändert eingebunden. Wo KERN einen Baustein hat,
     gilt KERNs Markup — der kn-Baustein aus 0.5.7 ist ENTFERNT (Teil A).
     Vorlage für das neue Markup: die Original-Beispiele im Katalog.
  2  Zusatzbausteine ohne KERN-Vorbild heißen englisch (E9) — Teil B.
     Mechanisch umzustellen: Klasse, Bestandteile, Varianten, data-Attribute.
  3  Schalter und Werte englisch — Teil C.
  4  Carbon-Maße und eigene Farbrollen gibt es nicht mehr. Wer kn-Tokens aus
     0.5.7 in eigenem CSS nutzt: KERN-Ausdruck in Teil E. Seiten setzen
     <body class="kn-page"> für den Seitenrahmen.

GETESTET: python3 pruefung/umstieg-testen.py prüft jeden Namen aus 0.5.7
(Git-Tag: Muster, Katalog, Skript, Bausteindateien) gegen diese Liste.

SUCHEN
--------------------------------------------------------------------------------
  Alle alten Namen eines Projekts finden (im Projektordner):
    grep -rnoE "kn-[a-z]+(__[a-z]+)?(--[a-z0-9-]+)?|data-kn-[a-z-]+" .
  Jede Fundstelle in den Tabellen unten nachschlagen.
"""


def main():
    b = json.load(open(QUELLE, encoding="utf-8"))
    z = [KOPF]
    z.append("\nA  ERSETZT DURCH KERN (Markup nach KERN-Beispiel)\n" + "-" * 80)
    z.append("  %-34s %-28s %s" % ("0.5.7", "2.8.2 (nbyc): KERN-Klasse", "bleibt als Erweiterung"))
    for k in b["kern"]:
        if not k["ersetzt"]:
            continue
        erw = ", ".join("%s → %s" % (a, n) for a, n in k["erweiterungen"].items())
        z.append("  %-34s %-28s %s" % (", ".join(k["ersetzt"]), k["code"], erw or "—"))
    z.append("\nB  ZUSATZBAUSTEINE — UMBENANNT (E9)\n" + "-" * 80)
    for e in sorted(b["erweiterungen"], key=lambda x: x["alt"]):
        z.append("  %-22s → %-24s %s / %s" % (e["alt"], e["code"], e["de"], e["en"]))
        for a, n in e["teile"].items():
            z.append("      %-30s → %s" % (e["alt"] + a, e["code"] + n))
        for a, n in e["attribute"].items():
            z.append("      %-30s → %s" % (a, n))
        for a, n in e.get("werte", {}).items():
            z.append("      Wert %-25s → %s" % (a, n))
    z.append("\n  Varianten allgemein: " + ", ".join("%s → %s" % (a, n) for a, n in b["modifier_allgemein"].items()))
    z.append("\nC  SCHALTER, ATTRIBUTE UND WERTE\n" + "-" * 80)
    for a, n in b["zusatz_attribute"].items():
        z.append("  %-38s → %s" % (a, n))
    for gruppe, paare in b["werte"].items():
        z.append("  %s: %s" % (gruppe, ", ".join("%s → %s" % (a, n) for a, n in paare.items())))
    for a, n in b["eigene_tokens_5c"].items():
        z.append("  Token %-32s → %s" % (a, n))
    z.append("\n  Entfallen ohne Nachfolger:")
    for a, n in b["entfallen"].items():
        z.append("  %-38s %s" % (a, n))
    z.append("\nD  NEU IN 2.8.2 (nbyc) — Vollständigkeit, Vergleich Teil 9\n" + "-" * 80)
    for e in b.get("neu_geplant", []):
        z.append("  %-20s %s / %s  (%s, %s) — %s" % (e["code"], e["de"], e["en"], e["grad"],
                                                     e["massnahme"], e.get("stand", "geplant")))
    z.append("\nE  TOKENS AUS 0.5.7 → KERN (für eigenes CSS)\n" + "-" * 80)
    z.append("  Die kn-Tokens aus 0.5.7 gibt es nicht mehr. Wer sie in eigenem CSS\n"
             "  benutzt, ersetzt sie durch den KERN-Ausdruck rechts (Stand der Brücke\n"
             "  bis Stufe 5d). Die Werte sind KERNs, nicht mehr Carbons — Abstände und\n"
             "  Höhen können sich darum um wenige Pixel ändern; die Anmerkung nennt es.")
    for a, n in sorted(b["tokens_057"].items()):
        z.append("  %-30s → %s" % (a, n))
    text = "\n".join(z) + "\n-/-\n"
    if "--pruefen" in sys.argv[1:]:
        alt = open(ZIEL, encoding="utf-8").read() if os.path.exists(ZIEL) else ""
        return 0 if alt == text else 1
    open(ZIEL, "w", encoding="utf-8").write(text)
    print("UMSTIEG.txt geschrieben — %d Zeilen" % text.count("\n"))
    return 0


if __name__ == "__main__":
    sys.exit(main())
