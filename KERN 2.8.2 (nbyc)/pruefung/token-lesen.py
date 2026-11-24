#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ERZEUGT "token.json" AUS DEN TOKEN-DATEIEN VON KERN 2.8.2 (nbyc)  (M21)

Warum erzeugt und nicht gepflegt: Eine zweite, von Hand gepflegte
Tokenliste läuft mit Sicherheit irgendwann auseinander. Diese hier kann
das nicht — sie wird bei jedem Lauf neu aus dem CSS gelesen.

    python3 pruefung/token-lesen.py             schreibt token.json
    python3 pruefung/token-lesen.py --pruefen   schreibt nichts; Rückgabe 1,
                                                wenn token.json veraltet ist
                                                (Prüfung 12 in pruefe.py)

Quellen (in dieser Reihenfolge eingebunden, kern-neu.css):
    system/kern.css             KERN 2.8.2, unverändert   → Teil "kern"
    system/01b-erweiterung.css  was KERN nicht hat        → Teil "erweiterung"

Aufbau je Token:
    schicht   primitiv | semantik | kontextuell | komponente   (nur "kern")
    gruppe    farbe, raum, mass, form, schrift, schatten, bewegung, sonstiges
    werte     {modus: Wert, wie er im CSS steht, unaufgelöst}
    verweis   {modus: Token, auf das der Wert zeigt}, falls var(...)

Modi:
    grund · hell · dunkel · ab-md (Breite ≥ 768 px) · ebene-0/1/2
    kontrast-hell · kontrast-dunkel · erzwungene-farben · bewegung-reduziert
    dichte-kompakt · dichte-weit (Dichte-Stufen, E2)

Abbruch mit Datei:Zeile (Guiding §2), wenn
    · ein Verweis auf ein Token zeigt, das es in keiner Quelle gibt,
    · ein Modus zweimal mit verschiedenen Werten gesetzt wird (z. B. dunkel
      über die Systemwahl und über data-kern-theme),
    · ein Zusammenhang (Selektor/@media) keinem Modus zugeordnet werden kann.
Kein Zeitstempel in der Ausgabe — sonst wäre token.json nach jedem Lauf
"verändert" und Prüfung 12 sinnlos.
"""

import hashlib
import io
import json
import os
import re
import sys

WURZEL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ZIEL = os.path.join(WURZEL, "token.json")
QUELLEN = [
    ("kern",        "system/kern.css",            r"--kern-[a-z0-9-]+"),
    ("erweiterung", "system/01b-erweiterung.css", r"--(?:kn|kern)-[a-z0-9-]+"),
]
KERN_VERSION = "2.8.2"


class Abbruch(Exception):
    pass


def modus_von(pfad, datei, zeile):
    """Ordnet die Kette der offenen Vorspänne (außen → innen) einem Modus zu."""
    ganz = " ".join(pfad)
    if 'data-kn-density="compact"' in ganz:
        return "dichte-kompakt"
    if 'data-kn-density="spacious"' in ganz:
        return "dichte-weit"
    if "forced-colors" in ganz:
        return "erzwungene-farben"
    if "prefers-reduced-motion" in ganz:
        return "bewegung-reduziert"
    if "prefers-contrast" in ganz or 'data-kn-contrast="high"' in ganz:
        dunkel = ("prefers-color-scheme: dark" in ganz or
                  'data-kern-theme="dark"' in ganz)
        return "kontrast-dunkel" if dunkel else "kontrast-hell"
    if "kern-level-1" in ganz and ":not(" not in ganz:
        return "ebene-1"
    if "kern-level-2" in ganz and ":not(" not in ganz:
        return "ebene-2"
    if ganz.startswith(":is(body"):
        return "ebene-0"
    if "prefers-color-scheme: dark" in ganz or "data-kern-theme=dark" in ganz:
        return "dunkel"
    if "prefers-color-scheme: light" in ganz or "data-kern-theme=light" in ganz:
        return "hell"
    if "min-width: 768px" in ganz:
        return "ab-md"
    if ganz in (":root",):
        return "grund"
    raise Abbruch("%s:%d  Zusammenhang ohne Modus: %s" % (datei, zeile, ganz))


def schicht_von(name):
    if re.match(r"^--kern-\d+$", name) or re.match(r"^--kern-font-size-\d+$", name):
        return "primitiv"
    if re.match(r"^--kern-color-[a-z]+-(\d{3}|white|black)$", name) or \
       name in ("--kern-color-white", "--kern-color-black", "--kern-color-transparent"):
        return "primitiv"
    if name.startswith("--kern-component-"):
        return "komponente"
    if name.endswith("-contextual"):
        return "kontextuell"
    return "semantik"


def gruppe_von(name):
    for muster, gruppe in [
        (r"shadow|erhebung", "schatten"),
        (r"color|farbe|flaeche|linie|text-leise|aktion|fehler|erfolg|warnung|hinweis", "farbe"),
        (r"metric-space|raum|stapel|reihe-abstand", "raum"),
        (r"border-width|border-radius|rand|ecke|fokus", "form"),
        (r"typography|font-size|baseline|schrift|fett|spur|^--kn-text", "schrift"),
        (r"dimension|^--kern-\d+$|ziel|hoehe|knopf|feld|ankreuz|punkt|breite", "mass"),
        (r"dauer|kurve|schleier|opacity", "bewegung"),
    ]:
        if re.search(muster, name):
            return gruppe
    return "sonstiges"


def lies(teil, pfad_rel, namensmuster):
    datei = os.path.join(WURZEL, pfad_rel)
    roh = io.open(datei, encoding="utf-8").read()
    # Kommentare raus, Zeilen bleiben erhalten (für Datei:Zeile).
    t = re.sub(r"/\*.*?\*/", lambda m: "\n" * m.group().count("\n"), roh, flags=re.S)
    token, orte, doppelt = {}, {}, []
    herkunft = {}      # (name, modus) → Block-Nummer, in der der Wert steht
    block = 0
    pfad, puffer, zeile, puffer_start = [], "", 1, 1
    for zeichen in t:
        if zeichen == "{":
            pfad.append(" ".join(puffer.split()))
            puffer, puffer_start = "", zeile
        elif zeichen == "}":
            block += 1
            for m in re.finditer(r"(" + namensmuster + r")\s*:\s*([^;]+)", puffer):
                z = puffer_start + puffer[:m.start()].count("\n")
                modus = modus_von(pfad, pfad_rel, z)
                name, wert = m.group(1), " ".join(m.group(2).split())
                e = token.setdefault(name, {"werte": {}})
                if teil == "kern":
                    e["schicht"] = schicht_von(name)
                e["gruppe"] = gruppe_von(name)
                alt = e["werte"].get(modus)
                if alt is not None and alt != wert:
                    if herkunft.get((name, modus)) == block:
                        # Im selben Block gilt nach CSS der letzte Wert.
                        doppelt.append("%s:%d %s: %s → %s" % (pfad_rel, z, name, alt, wert))
                    else:
                        raise Abbruch("%s:%d  %s im Modus %s zweimal verschieden: %s | %s"
                                      % (pfad_rel, z, name, modus, alt, wert))
                herkunft[(name, modus)] = block
                e["werte"][modus] = wert
                v = re.match(r"^var\(\s*(--[a-z0-9-]+)", wert)
                if v:
                    e.setdefault("verweis", {})[modus] = v.group(1)
                orte.setdefault(name, "%s:%d" % (pfad_rel, z))
            puffer, puffer_start = "", zeile
            if pfad:
                pfad.pop()
        else:
            puffer += zeichen
        if zeichen == "\n":
            zeile += 1
    return token, orte, roh, doppelt


def erzeuge():
    teile, orte, kern_roh, doppelt = {}, {}, None, []
    for teil, pfad_rel, muster in QUELLEN:
        token, o, roh, d = lies(teil, pfad_rel, muster)
        doppelt += d
        teile[teil] = dict(sorted((k, dict(sorted(v.items()))) for k, v in token.items()))
        for k, v in o.items():
            orte.setdefault(k, v)
        if teil == "kern":
            kern_roh = roh

    # Jeder Verweis muss auflösen — auf ein Token irgendeiner Quelle.
    bekannt = set()
    for t in teile.values():
        bekannt |= set(t)
    for teil, t in teile.items():
        for name, e in t.items():
            for modus, ziel in e.get("verweis", {}).items():
                if ziel not in bekannt and teil != "kern":
                    raise Abbruch("%s  %s (%s) verweist auf %s — gibt es nicht"
                                  % (orte[name], name, modus, ziel))

    # Fehler im Original, nur gezählt (KERN wird nicht verändert, E6):
    kern_offen = sorted({ziel for e in teile["kern"].values()
                         for ziel in e.get("verweis", {}).values() if ziel not in bekannt})

    aus = {
        "system": "KERN 2.8.2 (nbyc)",
        "version": "2.8.2 (nbyc)",
        "kernVersion": KERN_VERSION,
        "kernSha256": hashlib.sha256(kern_roh.encode("utf-8")).hexdigest(),
        "erzeugt_aus": [q[1] for q in QUELLEN],
        "hinweis": "Erzeugt von pruefung/token-lesen.py. Nicht von Hand ändern.",
        "anzahl": {teil: len(t) for teil, t in teile.items()},
        "kern_verweise_ohne_ziel": kern_offen,
        "doppelt_im_selben_block": doppelt,
    }
    aus.update(teile)
    return aus, json.dumps(aus, indent=2, ensure_ascii=False) + "\n"


def main():
    pruefen = "--pruefen" in sys.argv[1:]
    try:
        aus, text = erzeuge()
    except Abbruch as f:
        print("ABBRUCH  %s" % f)
        return 1
    if pruefen:
        alt = io.open(ZIEL, encoding="utf-8").read() if os.path.exists(ZIEL) else ""
        return 0 if alt == text else 1
    io.open(ZIEL, "w", encoding="utf-8").write(text)
    print("token.json geschrieben — KERN %s" % aus["kernVersion"])
    for teil in ("kern", "erweiterung"):
        t = aus[teil]
        modi, schichten = {}, {}
        for e in t.values():
            for m in e["werte"]:
                modi[m] = modi.get(m, 0) + 1
            if "schicht" in e:
                schichten[e["schicht"]] = schichten.get(e["schicht"], 0) + 1
        print("  %-12s %4d Token · Werte je Modus: %s" % (
            teil, len(t), ", ".join("%s %d" % (k, modi[k]) for k in sorted(modi))))
        if schichten:
            print("  %-12s      je Schicht: %s" % ("", ", ".join(
                "%s %d" % (k, schichten[k]) for k in sorted(schichten))))
    for d in aus["doppelt_im_selben_block"]:
        print("  doppelt im selben Block (der letzte Wert gilt): " + d)
    if aus["kern_verweise_ohne_ziel"]:
        print("  KERN verweist auf nicht definierte Tokens (Fehler im Original): "
              + ", ".join(aus["kern_verweise_ohne_ziel"]))
    return 0


if __name__ == "__main__":
    sys.exit(main())
