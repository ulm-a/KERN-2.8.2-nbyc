#!/usr/bin/env python3
"""
TESTET UMSTIEG.txt (M72) an echtem 0.5.7-Material: Jeder Name, der in
0.5.7 vorkam (Klassen, data-Attribute, Tokens), muss in katalog/begriffe.json
eine Zuordnung haben — umbenannt (Teil B/C/E), durch KERN-Markup ersetzt
(Teil A) oder ausdrücklich entfallen. Ein umbenannter Name muss im heutigen
System vorkommen.

Quelle ist der Git-Tag 0.5.7 (Muster, Katalog, Skript, Bausteindateien).

    python3 pruefung/umstieg-testen.py          Rückgabe 1 bei einer Lücke
    python3 pruefung/umstieg-testen.py <begriffe.json>   Gegenprobe mit einer Kopie

Gefunden 13.10.2026 (Stufe 8a): Tokens fehlten ganz, Zeitleisten-Varianten
standen am Block statt am Punkt, sechs Attribute und drei Klassen fehlten.
"""
import glob
import json
import os
import re
import subprocess
import sys

WURZEL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ALT = "KERN 0.5.7/"
QUELLEN = ["muster/fallbearbeitung.html", "katalog/inhalt.js", "system/kern-neu.js", "index.html",
           "system/02-basis.css", "system/03-aktion.css", "system/04-eingabe.css",
           "system/05-navigation.css", "system/06-inhalt.css"]
NAME = re.compile(r"(?<![\w-])(?:data-kn-[a-z-]+|--kn-[a-z0-9-]+|kn-[a-z]+(?:-[a-z]+)*(?:__[a-z-]+)?(?:--[a-z0-9-]+)?)")


def zuordnung(b):
    neu, kern = {}, {}
    for k in b["kern"]:
        for a in k["ersetzt"]:
            kern[a] = k["code"]
        neu.update(k["erweiterungen"])
    for e in b["erweiterungen"]:
        neu[e["alt"]] = e["code"]
        for a, n in e["teile"].items():
            neu[e["alt"] + a] = e["code"] + n
        neu.update(e["attribute"])
    for a, n in list(b["zusatz_attribute"].items()) + list(b["schalter"].items()):
        if isinstance(n, str):
            neu[a.split(" ")[0].split("=")[0]] = n.split(" ")[0].split("=")[0]
    neu.update(b["eigene_tokens_5c"])
    neu.update(b["werte"]["Speicher"])
    for a, n in b["tokens_057"].items():
        neu[a] = n.split("   /*")[0]
    for a in b["entfallen"]:
        for x in a.split(", "):
            neu[x] = None
    return neu, kern


def main():
    quelle = sys.argv[1] if len(sys.argv) > 1 else os.path.join(WURZEL, "katalog", "begriffe.json")
    b = json.load(open(quelle, encoding="utf-8"))
    neu, kern = zuordnung(b)
    heute = "".join(open(f, encoding="utf-8").read() for f in glob.glob(os.path.join(WURZEL, "system", "*.css")))
    heute += open(os.path.join(WURZEL, "system", "kern-neu.js"), encoding="utf-8").read()
    oben = subprocess.run(["git", "rev-parse", "--show-toplevel"], cwd=WURZEL, capture_output=True, text=True).stdout.strip()
    luecken, zahl = [], {"umbenannt": 0, "KERN-Markup": 0, "entfallen": 0}
    for q in QUELLEN:
        text = subprocess.run(["git", "show", "0.5.7:" + ALT + q], cwd=oben, capture_output=True, text=True).stdout
        if not text:
            print("FEHLT im Tag 0.5.7: " + q)
            return 1
        for n in sorted(set(NAME.findall(text))):
            if n in neu:
                ziel = neu[n]
                if ziel is None or ziel == "entfällt":
                    zahl["entfallen"] += 1
                    continue
                camel = "kn" + "".join(w.title() for w in ziel[8:].split("-")) if ziel.startswith("data-kn-") else ""
                bekannt = (ziel in heute or ziel == n or "var(--kern" in ziel or ziel.startswith("data-dialog")
                           or ziel.startswith("data-kern") or (camel and camel in heute))
                if not bekannt:
                    luecken.append("%-36s → %s (heute unbekannt)  [%s]" % (n, ziel, q))
                zahl["umbenannt"] += 1
                continue
            if "--" in n and not n.startswith("--"):
                basis, mod = n.split("--", 1)
                if basis in neu and ("--" + mod) in b["modifier_allgemein"]:
                    zahl["umbenannt"] += 1
                    continue
            if n.split("__")[0].split("--")[0] in kern:
                zahl["KERN-Markup"] += 1
                continue
            luecken.append("%-36s ohne Zuordnung  [%s]" % (n, q))
    print("UMSTIEG gegen 0.5.7: %(umbenannt)d umbenannt, %(KERN-Markup)d durch KERN-Markup, %(entfallen)d entfallen" % zahl)
    for z in sorted(set(luecken)):
        print("   " + z)
    return 1 if luecken else 0


if __name__ == "__main__":
    sys.exit(main())
