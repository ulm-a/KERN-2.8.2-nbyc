#!/usr/bin/env python3
"""
ERZEUGT "katalog/meta.js" (M70): je Katalogeintrag die Namen (Klasse,
Deutsch, Englisch, Herkunft, Synonyme) und die Abweichungen von KERN;
dazu die Liste der neuen Einträge für den Filter.

Quellen — nichts wird von Hand abgeschrieben (Guiding §3):
  katalog/begriffe.json   Namen, Synonyme der Erweiterungen, Feld "katalog"
  ABWEICHUNGEN.txt        Teil A, je AB die Zeile "Bausteine:" (alle · keine ·
                          KERN-Klassen)
Die Synonyme der KERN-Bausteine kommen aus KERNs Steckbriefen
(katalog/kern-inhalt.js, erzeugt von kern-katalog-bauen.py).

    python3 pruefung/katalog-meta-bauen.py            schreibt katalog/meta.js
    python3 pruefung/katalog-meta-bauen.py --pruefen  Rückgabe 1, wenn veraltet

Eine JS-Datei statt JSON, weil der Katalog per Doppelklick (file://) läuft
und dort nichts nachladen darf.
"""
import json
import os
import re
import sys

WURZEL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BEGRIFFE = os.path.join(WURZEL, "katalog", "begriffe.json")
ABW = os.path.join(WURZEL, "ABWEICHUNGEN.txt")
ZIEL = os.path.join(WURZEL, "katalog", "meta.js")


def abweichungen():
    text = open(ABW, encoding="utf-8").read()
    teil_a = text.split("\nB  FEHLER IM ORIGINAL")[0]
    liste = []
    for m in re.finditer(r"^(AB\d\d)  (.+?)\s{2,}(\S.*)$", teil_a, re.M):
        block = teil_a[m.end():].split("\nAB", 1)[0]
        b = re.search(r"^      Bausteine: (.+)$", block, re.M)
        if not b:
            sys.exit("ABWEICHUNGEN.txt: %s ohne Zeile \"Bausteine:\"" % m.group(1))
        wert = b.group(1).strip()
        if wert == "alle":
            bausteine = "alle"
        elif wert.startswith("keine"):
            bausteine = "keine"
        else:
            bausteine = wert.split()
            if not all(c.startswith("kern-") for c in bausteine):
                sys.exit("ABWEICHUNGEN.txt: %s, Bausteine nur alle · keine · kern-Klassen" % m.group(1))
        en = re.search(r"^      Englisch:\s+(.+)$", block, re.M)
        if not en:
            sys.exit("ABWEICHUNGEN.txt: %s ohne Zeile \"Englisch:\" (Titel im englischen Katalog)" % m.group(1))
        liste.append({"nr": m.group(1), "titel": m.group(2).strip(), "titel_en": en.group(1).strip(),
                      "art": m.group(3).strip(), "bausteine": bausteine})
    if not liste:
        sys.exit("ABWEICHUNGEN.txt: keine AB-Einträge gefunden")
    return liste


def namen():
    b = json.load(open(BEGRIFFE, encoding="utf-8"))
    je = {}
    for gruppe, herkunft in (("kern", None), ("erweiterungen", "Erweiterung"), ("neu_geplant", "Erweiterung")):
        for e in b[gruppe]:
            for kat in e.get("katalog", []):
                je.setdefault(kat, []).append({
                    "code": e["code"], "de": e["de"], "en": e["en"],
                    "herkunft": herkunft or e.get("herkunft", "KERN 2.8.2"),
                    "synonyme": e.get("synonyme", [])})
    return je


def neu():
    """Katalog-IDs der Bausteine, die in 2.8.2 (nbyc) neu dazukamen (begriffe.json, "neu_geplant") —
    für den Filter "Neu / Bestehend / Alle" im Katalog."""
    b = json.load(open(BEGRIFFE, encoding="utf-8"))
    return sorted({k for e in b["neu_geplant"] for k in e.get("katalog", [])})


def text():
    daten = {"namen": namen(), "abweichungen": abweichungen(), "neu": neu()}
    return ("/* ERZEUGT von pruefung/katalog-meta-bauen.py aus katalog/begriffe.json und\n"
            "   ABWEICHUNGEN.txt (M70) — nicht von Hand ändern. */\n"
            "window.KATALOG_META = " + json.dumps(daten, ensure_ascii=False, indent=1) + ";\n")


def main():
    inhalt = text()
    if "--pruefen" in sys.argv[1:]:
        alt = open(ZIEL, encoding="utf-8").read() if os.path.exists(ZIEL) else ""
        return 0 if alt == inhalt else 1
    open(ZIEL, "w", encoding="utf-8").write(inhalt)
    d = json.loads(inhalt.split("= ", 1)[1].rstrip(";\n"))
    print("katalog/meta.js geschrieben — %d Einträge mit Namen, %d Abweichungen, %d neu"
          % (len(d["namen"]), len(d["abweichungen"]), len(d["neu"])))
    return 0


if __name__ == "__main__":
    sys.exit(main())
