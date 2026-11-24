#!/usr/bin/env python3
"""
Prüfungen für KERN OnePager und KERN Designer (Instruction Designer 2.8.2 (nbyc), Abschnitt 11).

  python3 "KERN Designer/pruefung/pruefe-designer.py"              alle Prüfungen
  python3 "KERN Designer/pruefung/pruefe-designer.py" --gegenprobe  jede Prüfung gegen eine
        absichtlich kaputte KOPIE (Zwischenordner) — jede muss dort rot werden (GI §2)

Rückgabewert 1 bei Befund. Das System selbst prüft weiterhin "KERN 2.8.2 (nbyc)/pruefung/pruefe.py".

  PD1  OnePager: alle 38 KERN-Bausteine aus "_ Resources/kern/userdoccomponents" vorhanden, dazu jede
       Variante/jeder Bestandteil der Beispiele (ohne Raster- und Hilfsklassen; PER_SKRIPT gesetzt)
  PD2  ABSCHNITTE.txt = Abschnitte im HTML (gleiche IDs, gleiche Reihenfolge)
  PD3  OnePager-Texte: jeder data-t-Schlüssel in en, fr, es, it, uk; keiner zu viel; de-vorlage aktuell;
       keine Übersetzung zu einem inzwischen geänderten deutschen Text ("quelle")
  PD4  Designer-Texte: gleiche Schlüssel in allen sechs Sprachen; jeder benutzte Schlüssel da;
      Bausteinnamen fr/es/it/uk vollständig
  PD5  Schwellen in daten/regeln.js = Instruktion, Abschnitt 0
  PD6  keine rohen Farbwerte außerhalb von designer-tokens.css (onepager.css, designer.css)
  PD7  Server schreibt nur die feste Liste (SCHREIBBAR) und jeder Schreibaufruf nutzt sie
  PD8  Thema stimmig: kern-thema.css = Werte in kern-thema.tokens.json; Fassung überall gleich
  PD9  daten/verwendung.js ist aktuell (neu erzeugt = gespeichert)
"""
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile

HIER = os.path.dirname(os.path.abspath(__file__))
WURZEL = os.path.dirname(os.path.dirname(HIER))          # Projektordner
SPRACHEN = ["de", "en", "fr", "es", "it", "uk"]
ANDERE = SPRACHEN[1:]

# Je KERN-Baustein (Dateiname in userdoccomponents) ein Merkmal im OnePager-HTML
MERKMAL = {
    "accordion": r'class="kern-accordion"', "alert": r"kern-alert ", "badge": r"kern-badge", "button": r"kern-btn ",
    "card": r'class="kern-card', "description-list": r"kern-description-list[ \"]", "dialog": r"kern-dialog[ \"]", "divider": r"kern-divider",
    "fieldset": r"kern-fieldset", "grid": r"kern-row", "hilfsklassen": r"kern-flex", "icon": r"kern-icon ",
    "input-checkboxes": r"kern-form-check__checkbox", "input-file": r'type="file"', "input-radios": r"kern-form-check__radio",
    "input-select": r"kern-form-input__select[ \"]", "input-text-date": r"kern-form-input__input--width-2", "input-text-email": r'type="email"',
    "input-text-number": r'inputmode="numeric"', "input-text-password": r'type="password"', "input-text-tel": r'type="tel"',
    "input-text-text": r'type="text"', "input-text-url": r'type="url"', "input-textarea": r"<textarea", "kopfzeile": r"kern-kopfzeile[ \"]",
    "link": r"kern-link", "loader": r"kern-loader", "progress": r"kern-progress", "search": r"<search", "summary": r"kern-summary[ \"]",
    "table": r"kern-table\b", "tasklist": r"kern-task-list[ \"]", "text-body": r"kern-body", "text-heading": r"kern-heading-",
    "text-label": r"kern-label", "text-preline": r"kern-preline", "text-subline": r"kern-subline", "text-title": r"kern-title",
}


LAYOUT = re.compile(r"^kern-(col|row|container|grid|gap|stack|align|justify|order|p|pt|pb|pl|pr|px|py|m|mt|mb|ml|mr|mx|my|"
                    r"flex|overflow|aspect|hidden|block|sr-only-mobile)(-|$)")
PER_SKRIPT = {"kern-loader--visible": "onepager.js beim Aktualisieren der Fallliste"}


def lies(w, *teile):
    return open(os.path.join(w, *teile), encoding="utf-8").read()


def lies_js(w, *teile, praefix):
    t = lies(w, *teile)
    rumpf = re.sub(r"/\*.*?\*/", "", t[t.rindex(praefix) + len(praefix):], flags=re.S)   # Kommentare (regeln.js)
    return json.loads(rumpf.rstrip().rstrip(";"))


def flach(d, vorne=""):
    aus = {}
    for k, v in d.items():
        if isinstance(v, dict):
            aus.update(flach(v, vorne + k + "."))
        else:
            aus[vorne + k] = v
    return aus


# ---------------------------------------------------------------- Prüfungen
def d1(w):
    html = lies(w, "KERN OnePager", "index.html")
    dateien = sorted(f[:-len(".examples.html")] for f in os.listdir(os.path.join(w, "_ Resources", "kern", "userdoccomponents"))
                     if f.endswith(".examples.html"))
    b = [f"Baustein ohne Merkmal in der Prüfung (neu bei KERN?): {n}" for n in dateien if n not in MERKMAL]
    b += [f"im OnePager fehlt: {n}" for n in dateien if n in MERKMAL and not re.search(MERKMAL[n], html)]
    # Varianten und Zustände: jede kern-Klasse aus KERNs Beispielen kommt im OnePager vor —
    # außer Raster- und Hilfsklassen (Layout-Werkzeuge) und Klassen, die ein Skript setzt.
    im_op = {k for m in re.findall(r'class="([^"]+)"', html) for k in m.split()}
    varianten = set()
    for n in dateien:
        if n in ("grid", "hilfsklassen"):
            continue
        t = lies(w, "_ Resources", "kern", "userdoccomponents", n + ".examples.html")
        varianten |= {k for m in re.findall(r'class="([^"]+)"', t) for k in m.split() if k.startswith("kern-") and not LAYOUT.match(k)}
    b += [f"Variante fehlt im OnePager: {k}" for k in sorted(varianten - im_op - set(PER_SKRIPT))]
    return b, f"{len(dateien)} KERN-Bausteine, {len(varianten)} Varianten/Bestandteile"


def d2(w):
    html = lies(w, "KERN OnePager", "index.html")
    im_html = re.findall(r'data-abschnitt="([^"]+)"', html)
    liste = re.findall(r"^\s*\d+a?\s+([a-z]+)\s", lies(w, "KERN OnePager", "ABSCHNITTE.txt"), re.M)
    liste = [x for x in liste if x not in ("kopf", "navigation", "fuss")]      # ohne data-abschnitt im HTML
    return ([] if im_html == liste else [f"HTML {im_html} ≠ ABSCHNITTE.txt {liste}"]), f"{len(im_html)} Abschnitte"


def d3(w):
    html = lies(w, "KERN OnePager", "index.html")
    schluessel = set(re.findall(r'data-t(?:-aria|-title|-alt)?="([^"]+)"', html))
    vorlage = set(json.loads(lies(w, "KERN OnePager", "texte", "de-vorlage.json"))["texte"])
    b = [] if vorlage == schluessel else [f"de-vorlage.json veraltet (werkzeug/texte-bauen.py laufen lassen): "
                                          f"{sorted(schluessel ^ vorlage)[:5]}"]
    js = set(re.search(r"var JS_DE = (\{.*?\});", lies(w, "KERN OnePager", "onepager.js"), re.S).group(1).split('"')[1::4])
    for c in ANDERE:
        d = lies_js(w, "KERN OnePager", "texte", c + ".js", praefix=f"KD_OP_TEXTE.{c} = ")
        t = set(d["texte"])
        b += [f"{c}.js fehlt: {k}" for k in sorted(schluessel - t)] + [f"{c}.js zu viel: {k}" for k in sorted(t - schluessel)]
        b += [f"{c}.js leer: {k}" for k, v in d["texte"].items() if not str(v).strip()]
        quelle = d.get("quelle", {})
        b += [f"{c}.js veraltet (deutscher Text geändert): {k}" for k in sorted(t & schluessel)
              if quelle.get(k) != json.loads(lies(w, "KERN OnePager", "texte", "de-vorlage.json"))["texte"].get(k)]
        b += [f"{c}.js js fehlt: {k}" for k in sorted(js - set(d["js"]))]
    return b, f"{len(schluessel)} Texte × 5 Sprachen + {len(js)} Skripttexte"


def d4(w):
    texte = {c: flach({k: v for k, v in lies_js(w, "KERN Designer", "texte", c + ".js", praefix=f"KD_TEXTE.{c} = ").items() if k != "bausteine"})
             for c in SPRACHEN}
    b = []
    for c in ANDERE:
        b += [f"{c}.js fehlt: {k}" for k in sorted(set(texte["de"]) - set(texte[c]))]
        b += [f"{c}.js zu viel: {k}" for k in sorted(set(texte[c]) - set(texte["de"]))]
    code = lies(w, "KERN Designer", "skript", "designer.js") + lies(w, "KERN Designer", "index.html")
    benutzt = {k for k in re.findall(r'T\("([a-z_]+\.[a-z0-9_]+)"', code) if not k.endswith("_")}   # "ui.a11y_" + s: Präfix | set(re.findall(r'data-t(?:-label|-platzhalter)?="([a-z_]+\.[a-z0-9_]+)"', code))
    b += [f"de.js fehlt benutzter Schlüssel: {k}" for k in sorted(benutzt - set(texte["de"]))]
    v = lies_js(w, "KERN Designer", "daten", "verwendung.js", praefix="window.KD_VERWENDUNG = ")
    for c in ["fr", "es", "it", "uk"]:
        bs = lies_js(w, "KERN Designer", "texte", c + ".js", praefix=f"KD_TEXTE.{c} = ").get("bausteine", {})
        b += [f"{c}.js Bausteinname fehlt: {i}" for i in sorted(set(v["bausteine"]) - set(bs))]
    return b, f"{len(texte['de'])} Texte × 6 Sprachen, {len(v['bausteine'])} Bausteinnamen"


def d5(w):
    r = lies_js(w, "KERN Designer", "daten", "regeln.js", praefix="window.KD_REGELN = ")["schwellen"]
    if not os.path.exists(os.path.join(w, "_ Instructions", "Instruction Designer 2.8.2 (nbyc).txt")):
        return [], f"{len(r)} Schwellen in regeln.js · Instruktion nicht beigelegt (Paket), Vergleich entfällt"
    ins = lies(w, "_ Instructions", "Instruction Designer 2.8.2 (nbyc).txt")
    soll = {"text": "KONTRAST_TEXT", "textGross": "KONTRAST_TEXT_GROSS", "nichtText": "KONTRAST_NICHT_TEXT",
            "kernText": "KERN_ANSPRUCH_TEXT", "kernGross": "KERN_ANSPRUCH_GROSS", "ziel": "ZIELGROESSE_MIN"}
    b = []
    for k, name in soll.items():
        m = re.search(name + r" \.+ ([\d.]+)", ins)
        if not m:
            b.append(f"Instruktion: {name} fehlt")
        elif float(m.group(1)) != float(r.get(k, -1)):
            b.append(f"{k}: regeln.js {r.get(k)} ≠ Instruktion {name} {m.group(1)}")
    return b, f"{len(soll)} Schwellen"


def d6(w):
    farbe = re.compile(r"#[0-9a-fA-F]{3,8}\b|\b(?:rgb|rgba|hsl|hsla|oklch|oklab|lab|lch)\(")
    b = []
    for teile in (("KERN OnePager", "onepager.css"), ("KERN OnePager", "inspektor.css"), ("KERN Designer", "stil", "designer.css")):
        for nr, zeile in enumerate(lies(w, *teile).split("\n"), 1):
            ohne = re.sub(r"/\*.*?\*/", "", zeile)
            if farbe.search(ohne):
                b.append(f"{'/'.join(teile)}:{nr}: {zeile.strip()[:70]}")
    return b, "onepager.css, designer.css"


def d7(w):
    s = lies(w, "KERN Designer", "server", "server.py")
    m = re.search(r"SCHREIBBAR = \{([^}]*)\}", s)
    erwartet = {"ENTWURF_CSS", "ENTWURF_JSON", "THEMA_CSS", "THEMA_TOKENS", "FASSUNG_JSON", "CHANGES", "ZWISCHENSTAND"}
    ist = {x.strip() for x in m.group(1).split(",")} if m else set()
    b = [] if ist == erwartet else [f"SCHREIBBAR = {sorted(ist)} statt {sorted(erwartet)}"]
    for aufruf in re.findall(r"\bschreibe\(([^,]+),", s):
        if aufruf.strip() not in erwartet and aufruf.strip() != "pfad":
            b.append(f"schreibe({aufruf.strip()}, …) außerhalb der Liste")
    if re.search(r"open\([^)]*['\"]w['\"]", s.replace('open(tmp, "w"', "")):
        b.append("server.py öffnet eine Datei zum Schreiben an schreibe() vorbei")
    return b, f"{len(erwartet)} schreibbare Dateien"


def css_werte(css):
    """kern-thema.css → {modus: {token: wert}} über die Selektoren aus server.py."""
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    zuordnung = [("@media (min-width: 768px)", "ab-md"), ("prefers-color-scheme: light", "hell"), ("prefers-color-scheme: dark", "dunkel"),
                 ("[data-kern-theme=light]", "hell"), ("[data-kern-theme=dark]", "dunkel"), (".kern-level-1", "ebene-1"),
                 (".kern-level-2", "ebene-2"), (":is(body", "ebene-0"), (":root", "grund")]
    aus = {}
    for sel, rumpf in re.findall(r"([^{}]+(?:\{\s*:root[^{]*)?)\{([^{}]*)\}", css):
        modus = next((m for k, m in zuordnung if k in sel), None)
        for name, wert in re.findall(r"(--(?:kern|kn)-[a-z0-9-]+)\s*:\s*([^;]+);", rumpf):
            aus.setdefault(modus, {})[name] = wert.strip()
    return aus


def d8(w):
    th = os.path.join(w, "KERN 2.8.2 (nbyc)", "thema")
    f = json.load(open(os.path.join(th, "fassung.json"), encoding="utf-8"))["fassung"]
    css = open(os.path.join(th, "kern-thema.css"), encoding="utf-8").read()
    tok = json.load(open(os.path.join(th, "kern-thema.tokens.json"), encoding="utf-8"))
    ext = tok.get("$extensions", {}).get("de.kern-nbyc.designer", {})
    b = []
    m = re.search(r'--kd-thema-fassung:\s*"([^"]+)"', css)
    if not m or m.group(1) != f:
        b.append(f"kern-thema.css Fassung {m.group(1) if m else '—'} ≠ fassung.json {f}")
    if ext.get("fassung") != f:
        b.append(f"tokens.json Fassung {ext.get('fassung')} ≠ fassung.json {f}")
    if css_werte(css) != (ext.get("werte") or {}):
        b.append("kern-thema.css und tokens.json ($extensions werte) haben verschiedene Werte")
    return b, f"Fassung {f}"


def d9(w):
    with tempfile.TemporaryDirectory() as tmp:
        kopie = os.path.join(tmp, "KERN Designer")
        shutil.copytree(os.path.join(w, "KERN Designer", "werkzeug"), os.path.join(kopie, "werkzeug"))
        os.makedirs(os.path.join(kopie, "daten"))
        os.symlink(os.path.join(w, "KERN 2.8.2 (nbyc)"), os.path.join(tmp, "KERN 2.8.2 (nbyc)"))
        r = subprocess.run([sys.executable, "-I", os.path.join(kopie, "werkzeug", "verwendung-bauen.py")], capture_output=True, text=True)
        if r.returncode:
            return [f"verwendung-bauen.py: {r.stderr.strip()[:200]}"], ""
        neu = open(os.path.join(kopie, "daten", "verwendung.js"), encoding="utf-8").read()
    alt = lies(w, "KERN Designer", "daten", "verwendung.js")
    return ([] if neu == alt else ["daten/verwendung.js veraltet — werkzeug/verwendung-bauen.py laufen lassen"]), "neu erzeugt und verglichen"


PRUEFUNGEN = [("PD1", "OnePager: alle KERN-Bausteine", d1), ("PD2", "Abschnitte = ABSCHNITTE.txt", d2),
              ("PD3", "OnePager-Texte in 6 Sprachen", d3), ("PD4", "Designer-Texte in 6 Sprachen", d4),
              ("PD5", "Schwellen = Instruktion", d5), ("PD6", "keine rohen Farbwerte", d6),
              ("PD7", "Server schreibt nur die Liste", d7), ("PD8", "Thema stimmig, Fassung gleich", d8),
              ("PD9", "verwendung.js aktuell", d9)]


def ersetze(w, teile, alt, neu, alle=False):
    p = os.path.join(w, *teile)
    t = open(p, encoding="utf-8").read()
    if alt not in t:
        raise RuntimeError(f"Gegenprobe kann {'/'.join(teile)} nicht verändern ({alt[:30]!r} fehlt)")
    open(p, "w", encoding="utf-8").write(t.replace(alt, neu) if alle else t.replace(alt, neu, 1))


KAPUTT = {
    "PD1": lambda w: ersetze(w, ("KERN OnePager", "index.html"), "kern-accordion", "kaputt-accordion", alle=True),
    "PD2": lambda w: ersetze(w, ("KERN OnePager", "ABSCHNITTE.txt"), " 9  bescheid", " 9  bescheiD"),
    "PD3": lambda w: ersetze(w, ("KERN OnePager", "texte", "fr.js"), '"antrag.1":', '"antrag.1-kaputt":'),
    "PD4": lambda w: ersetze(w, ("KERN Designer", "texte", "uk.js"), '"speichern":', '"speichern-kaputt":'),
    "PD5": lambda w: ersetze(w, ("KERN Designer", "daten", "regeln.js"), '"text": 4.5', '"text": 4.4'),
    "PD6": lambda w: open(os.path.join(w, "KERN OnePager", "onepager.css"), "a", encoding="utf-8").write("\n.kaputt { color: #fff; }\n"),
    "PD7": lambda w: ersetze(w, ("KERN Designer", "server", "server.py"), "SCHREIBBAR = {", 'SCHREIBBAR = {"/etc/passwd", '),
    "PD8": lambda w: ersetze(w, ("KERN 2.8.2 (nbyc)", "thema", "kern-thema.css"), "--kd-thema-fassung: \"", "--kd-thema-fassung: \"9"),
    "PD9": lambda w: ersetze(w, ("KERN Designer", "daten", "verwendung.js"), '"tokens": {', '"tokens": {"--kern-kaputt": ["kern-btn"],'),
}


def kopie_anlegen(ziel):
    for teil in ("KERN OnePager", "KERN Designer", "_ Instructions"):
        shutil.copytree(os.path.join(WURZEL, teil), os.path.join(ziel, teil), ignore=shutil.ignore_patterns(".DS_Store"))
    os.makedirs(os.path.join(ziel, "KERN 2.8.2 (nbyc)"))
    for teil in ("system", "katalog", "thema"):
        shutil.copytree(os.path.join(WURZEL, "KERN 2.8.2 (nbyc)", teil), os.path.join(ziel, "KERN 2.8.2 (nbyc)", teil))
    shutil.copy(os.path.join(WURZEL, "KERN 2.8.2 (nbyc)", "token.json"), os.path.join(ziel, "KERN 2.8.2 (nbyc)"))
    os.makedirs(os.path.join(ziel, "_ Resources", "kern"))
    shutil.copytree(os.path.join(WURZEL, "_ Resources", "kern", "userdoccomponents"), os.path.join(ziel, "_ Resources", "kern", "userdoccomponents"))


def main():
    gegenprobe = "--gegenprobe" in sys.argv
    rot = 0
    for kennung, titel, fn in PRUEFUNGEN:
        if gegenprobe:
            with tempfile.TemporaryDirectory(prefix="kd-gegenprobe-") as tmp:
                kopie_anlegen(tmp)
                vorher, _ = fn(tmp)
                KAPUTT[kennung](tmp)
                nachher, _ = fn(tmp)
            ok = not vorher and bool(nachher)
            rot += not ok
            print(f"{kennung}  {titel:34} Gegenprobe {'rot wie erwartet' if ok else 'NICHT rot'}"
                  + (f" — {nachher[0][:80]}" if nachher else "") + (f" (Kopie vorher schon rot: {vorher[0][:60]})" if vorher else ""))
            continue
        befunde, info = fn(WURZEL)
        rot += bool(befunde)
        print(f"{kennung}  {titel:34} {'ok — ' + info if not befunde else 'BEFUND'}")
        for b in befunde[:15]:
            print("      " + b)
    print("\n" + ("Ohne Beanstandung." if not rot else f"{rot} Prüfung(en) mit Befund."))
    sys.exit(1 if rot else 0)


if __name__ == "__main__":
    main()
