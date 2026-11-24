#!/usr/bin/env python3
"""
Liest die Katalogdaten (katalog/inhalt.js, kern-inhalt.js, inhalt-en.js) als Python-Daten.

inhalt.js ist ein JavaScript-Literal, kein JSON. Ausgewertet wird es mit einem
vorhandenen Interpreter: node, sonst JavaScriptCore über "osascript -l JavaScript"
(in macOS eingebaut). Fehlt beides, gibt lies() None zurück — der Aufrufer meldet
das; nie ein stilles "ok".

Der Quelltext geht als DATEI an den Interpreter, nicht als Argument (B3,
Assessment 16.11.2026): die drei Katalogdateien sind zusammen rund 406 000
Zeichen, Windows begrenzt die Kommandozeile auf 32 767. Mit "node -e <text>"
scheitert die Prüfung dort, ohne dass es an den Daten liegt.

    from katalog_lesen import lies
    daten = lies()   # {"KATALOG": [...], "KERN_BAUSTEINE": [...], "KATALOG_EN": {...}} oder None
"""
import io
import json
import os
import shutil
import subprocess
import tempfile

WURZEL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATEIEN = ["katalog/inhalt.js", "katalog/kern-inhalt.js", "katalog/inhalt-en.js"]


def _quelltext():
    teile = ["var window = {}; var KERN_BAUSTEINE;"]
    for d in DATEIEN:
        pfad = os.path.join(WURZEL, d)
        if os.path.exists(pfad):
            teile.append(open(pfad, encoding="utf-8").read())
    teile.append("var __erg = JSON.stringify({KATALOG: window.KATALOG || [], "
                 "KERN_BAUSTEINE: window.KERN_BAUSTEINE || KERN_BAUSTEINE || [], "
                 "KATALOG_EN: window.KATALOG_EN || {}});")
    return "\n".join(teile)


def _lauf(befehl, js, endung):
    """Schreibt den Quelltext in eine temporäre Datei und ruft den Interpreter
    damit auf — nie über die Kommandozeile (B3)."""
    ordner = tempfile.mkdtemp(prefix="kern-katalog-")
    try:
        pfad = os.path.join(ordner, "lesen" + endung)
        with io.open(pfad, "w", encoding="utf-8") as f:
            f.write(js)
        r = subprocess.run(befehl + [pfad], capture_output=True, text=True)
        if r.returncode == 0 and r.stdout.strip():
            return json.loads(r.stdout)
        return None
    finally:
        shutil.rmtree(ordner, ignore_errors=True)


def lies():
    js = _quelltext()
    if shutil.which("node"):
        d = _lauf(["node"], js + "\nprocess.stdout.write(__erg);", ".js")
        if d is not None:
            return d
    if shutil.which("osascript"):
        d = _lauf(["osascript", "-l", "JavaScript"], js + "\n__erg;", ".js")
        if d is not None:
            return d
    return None


if __name__ == "__main__":
    d = lies()
    print("kein JavaScript-Interpreter (node, osascript)" if d is None else
          "%d eigene, %d KERN-Einträge, %d englisch" % (len(d["KATALOG"]), len(d["KERN_BAUSTEINE"]), len(d["KATALOG_EN"])))
