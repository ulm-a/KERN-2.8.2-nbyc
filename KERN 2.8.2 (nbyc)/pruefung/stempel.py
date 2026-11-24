#!/usr/bin/env python3
"""
VERSIONSSTEMPEL — setzt "?v=…" an ALLEN Stellen auf einmal (EINE Quelle, Guiding §3).

Der Stempel zwingt den Browser, nach einer Änderung neu zu laden. Er muss an
JEDER eingebundenen Datei hängen — auch an den neun @import-Zeilen in
system/kern-neu.css; sonst mischt der Browser alte und neue Bausteindateien
(gefunden 13.10.2026, Stufe 7b). Prüfung 22 in pruefe.py wacht darüber.

    python3 pruefung/stempel.py                  zählt die letzte Stelle hoch (…nbyc.23 → …nbyc.24)
    python3 pruefung/stempel.py 2.8.2-nbyc.30    setzt genau diesen Stempel
    python3 pruefung/stempel.py --zeigen         nennt den Stempel, ändert nichts

Danach den Prüfstand neu erzeugen: python3 pruefung/kern-beispiele-bauen.py
(stempel.py tut das selbst, wenn es etwas geändert hat).
"""
import glob
import os
import re
import subprocess
import sys

WURZEL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MUSTER = re.compile(r"\?v=(2\.8\.2-nbyc\.\d+)")


def dateien():
    """Alle Dateien, die eingebundene Dateien mit Stempel aufrufen (ohne erzeugte)."""
    feste = ["index.html", "katalog.html", "system/kern-neu.css",
             "pruefung/kern-beispiele-bauen.py", "pruefung/verhalten.html"]
    return [os.path.join(WURZEL, d) for d in feste] + sorted(glob.glob(os.path.join(WURZEL, "muster", "*.html")))


def aktuell():
    gefunden = set()
    for d in dateien():
        gefunden |= set(MUSTER.findall(open(d, encoding="utf-8").read()))
    return gefunden


def main():
    stempel = aktuell()
    if "--zeigen" in sys.argv:
        print("Stempel: " + (", ".join(sorted(stempel)) or "keiner"))
        return 0
    if len(stempel) > 1:
        print("ACHTUNG — mehrere Stempel im Umlauf: " + ", ".join(sorted(stempel)) + "; alle werden ersetzt.")
    if len(sys.argv) > 1 and not sys.argv[1].startswith("-"):
        neu = sys.argv[1]
        if not re.fullmatch(r"2\.8\.2-nbyc\.\d+", neu):
            print("Stempel muss so aussehen: 2.8.2-nbyc.<Zahl>")
            return 2
    else:
        hoechster = max((int(s.rsplit(".", 1)[1]) for s in stempel), default=0)
        neu = "2.8.2-nbyc.%d" % (hoechster + 1)
    geaendert = 0
    for d in dateien():
        alt = open(d, encoding="utf-8").read()
        t = MUSTER.sub("?v=" + neu, alt)
        if t != alt:
            open(d, "w", encoding="utf-8").write(t)
            geaendert += 1
    print("Stempel %s in %d Dateien gesetzt." % (neu, geaendert))
    if geaendert:
        subprocess.run([sys.executable, os.path.join(WURZEL, "pruefung", "kern-beispiele-bauen.py")], check=True)
    return 0


if __name__ == "__main__":
    sys.exit(main())
