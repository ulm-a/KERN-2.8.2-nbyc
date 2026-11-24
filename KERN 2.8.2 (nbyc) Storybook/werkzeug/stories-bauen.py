#!/usr/bin/env python3
"""
STORYBOOK-STORIES AUS DEM KATALOG — KERN 2.8.2 (nbyc) (E12, M102)

"nbyc" steht für "New by Claude" — neu gebaut mit Claude, dem KI-Assistenten von
Anthropic. Nicht das offizielle KERN.

Einzige Quelle ist der Katalog (katalog/inhalt.js, kern-inhalt.js, inhalt-en.js,
meta.js). Dieses Skript schreibt daraus je Katalogeintrag eine Story-Datei im
Format von KERNs eigenem Storybook (@storybook/html-vite, Component Story Format):
jedes Katalogbeispiel wird eine Story, die Katalogtexte (Zweck, Wann, Nicht,
Barrierefreiheit, Tastaturvertrag, Klassen, Pflichten) werden die Doku-Seite —
Deutsch und Englisch. Stories NIE von Hand ändern: Katalog ändern, neu erzeugen.

    python3 "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py"            erzeugt stories/ neu
    python3 "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" --pruefen  ändert nichts; Rückgabe 1,
                                                                 wenn stories/ nicht zum Katalog passt

Kein npm, kein Node nötig: gelesen wird mit pruefung/katalog_lesen.py
(JavaScriptCore über osascript, sonst node). Fehlt beides: Abbruch mit Meldung.
"""
import io
import json
import os
import re
import sys
from html import escape as html_escape

HIER = os.path.dirname(os.path.abspath(__file__))
STORYBOOK = os.path.dirname(HIER)                                   # "KERN 2.8.2 (nbyc) Storybook"
PROJEKT = os.path.dirname(STORYBOOK)
SYSTEM = os.path.join(PROJEKT, "KERN 2.8.2 (nbyc)")
STORIES = os.path.join(STORYBOOK, "stories")
LISTE = os.path.join(STORYBOOK, "pruefung", "stories-liste.js")

sys.path.insert(0, os.path.join(SYSTEM, "pruefung"))
from katalog_lesen import lies  # noqa: E402

NAME = "KERN 2.8.2 (nbyc)"

# Fassung: EINE Quelle ist "KERN 2.8.2 (nbyc)/thema/fassung.json" (Guiding §3).
# Sie wird hier gelesen, nie abgetippt — die Stories sind erzeugt.
with io.open(os.path.join(SYSTEM, "thema", "fassung.json"), encoding="utf-8") as _f:
    _fassung = json.load(_f)
FASSUNG = _fassung["fassung"]
FASSUNG_DATUM = "%s.%s.%s" % tuple(reversed(_fassung["datum"].split("-")))
KOPF = ("/* ERZEUGT von \"KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py\" aus dem Katalog\n"
        "   KERN 2.8.2 (nbyc) — Fassung " + FASSUNG + " (" + FASSUNG_DATUM + ")\n"
        "   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).\n"
        "   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;\n"
        "   \"nbyc\" = \"New by Claude\". */\n")
OBERGRUPPE = {"kern": "KERN-Bausteine", "eigen": "Erweiterungen (kn-)"}


def md(text):
    """Text für die Markdown-Beschreibung: nichts darf als HTML oder Formatierung wirken."""
    text = str(text).replace("\\", "\\\\").replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return re.sub(r"([`*_|\[\]#])", r"\\\1", text)


def code(text):
    return "`" + str(text).replace("`", "'") + "`"


def liste(titel, punkte):
    return [f"**{titel}**", ""] + [f"- {md(p)}" for p in punkte] + [""] if punkte else []


def tabelle(kopf, zeilen):
    if not zeilen:
        return []
    aus = ["| " + " | ".join(kopf) + " |", "|" + "---|" * len(kopf)]
    for z in zeilen:
        aus.append("| " + " | ".join(z) + " |")
    return aus + [""]


def beschreibung(k, en, namen, sprache):
    """Doku-Text eines Eintrags in einer Sprache (de: Katalog, en: inhalt-en.js)."""
    de = sprache == "de"
    q = k if de else en
    t = (lambda d, e: d if de else e)
    teile = []
    if not de:
        teile += ["---", "", f"### English — {md(en.get('name', k['name']))}", ""]
    teile += [md(q.get("zweck", "")), ""]
    teile += liste(t("Wann nehmen", "When to use"), q.get("wann", []))
    teile += liste(t("Wann nicht", "When not to use"), q.get("nicht", []))
    teile += liste(t("Barrierefreiheit", "Accessibility"), q.get("barriere", []))
    tasten = q.get("tasten") or []
    if tasten:
        teile += [f"**{t('Tastaturvertrag', 'Keyboard contract')}**", ""]
        teile += tabelle([t("Taste", "Key"), t("Wirkung", "Effect"), t("Ansage", "Announcement")],
                         [[md(x) for x in (z + ["", "", ""])[:3]] for z in tasten])
    klassen = k.get("klassen") or []
    if klassen:
        bedeutungen = [z[1] for z in klassen] if de else (en.get("klassen") or [z[1] for z in klassen])
        teile += [f"**{t('Klassen', 'Classes')}**", ""]
        teile += tabelle([t("Klasse", "Class"), t("Bedeutung", "Meaning")],
                         [[code(z[0]), md(b)] for z, b in zip(klassen, bedeutungen)])
    pflichten = q.get("pflichten") or []
    if pflichten:
        teile += [f"**{t('Pflichten aus KERN (implementierungsabhängig)', 'Duties from KERN (implementation-dependent)')}**", ""]
        teile += tabelle([t("Pflicht", "Duty"), t("Anmerkung", "Note")], [[md(z[0]), md(z[1] if len(z) > 1 else "")] for z in pflichten])
    if de and namen:
        teile += ["**Bezeichnungen / Names**", ""]
        teile += tabelle(["Code", "Deutsch", "English"], [[code(n["code"]), md(n["de"]), md(n["en"])] for n in namen])
    if de:
        herkunft = k.get("herkunft") or "Erweiterung (aus KERN-Tokens)"
        teile += [f"Herkunft / Origin: {md(herkunft)}" + (f" · Quelle: <{k['quelle']}>" if k.get("quelle") else ""), ""]
    return "\n".join(teile).strip() + "\n"


def js(wert):
    return json.dumps(wert, ensure_ascii=False)


def story_datei(k, art, en, namen):
    gruppe = re.sub(r"^KERN · ", "", k["gruppe"])
    titel = f"{OBERGRUPPE[art]}/{gruppe}/{k['name']}"
    text = beschreibung(k, en, namen, "de") + "\n" + beschreibung(k, en, namen, "en")
    # Dieselbe ID in zwei Beispielen eines Eintrags (KERNs Beispiele, z. B. F19): auf der Doku-Seite
    # stünden sie untereinander — dann jedes Beispiel in eigenem Rahmen (iframe), Markup bleibt wie KERN (E6)
    ids = [set(re.findall(r'\bid="([^"]+)"', b["html"])) for b in k["bsp"]]
    doppelt = sorted({x for i, s in enumerate(ids) for x in s if any(x in o for o in ids[i + 1:])})
    rahmen = ", story: { inline: false, iframeHeight: 420 }" if doppelt else ""
    zeilen = [KOPF, "export default {",
              f"  title: {js(titel)},",
              "  tags: [\"autodocs\"],",
              "  parameters: {",
              f"    kern: {js({'id': k['id'], 'herkunft': k.get('herkunft') or 'Erweiterung (aus KERN-Tokens)', 'quelle': k.get('quelle') or '', 'ids_in_mehreren_beispielen': doppelt})},",
              f"    docs: {{ description: {{ component: {js(text)} }}{rahmen} }}",
              "  }",
              "};", ""]
    en_bsp = en.get("bsp") or []
    for i, b in enumerate(k["bsp"]):
        b_en = en_bsp[i] if i < len(en_bsp) else {}
        name = b.get("titel") or f"Beispiel {i + 1}"
        hinweis = "\n\n".join(x for x in (md(b.get("hinweis", "")), md(b_en.get("hinweis", ""))) if x)
        n = f"{i + 1:02d}"
        # Quelltext in der Doku = Katalog-Markup wörtlich (nicht das verdrahtete DOM)
        beschr = f", description: {{ story: {js(hinweis)} }}" if hinweis else ""
        zeilen += [f"const html{n} = {js(b['html'])};",
                   f"export const Beispiel{n} = {{",
                   f"  name: {js(name)},",
                   f"  render: () => html{n},",
                   f"  parameters: {{ docs: {{ source: {{ code: html{n} }}{beschr} }} }}",
                   "};", ""]
    return titel, "\n".join(zeilen)


def einfuehrung(meta, zahlen):
    """Erste Seite im Storybook: Name, Gebrauch, Abweichungen von KERN — als Story mit KERN-Markup."""
    h = lambda s: html_escape(str(s))
    zeilen = "".join(
        f'<tr class="kern-table__row"><td class="kern-table__cell">{h(a["nr"])}</td>'
        f'<td class="kern-table__cell">{h(a["titel"])}<br><span lang="en">{h(a.get("titel_en", ""))}</span></td>'
        f'<td class="kern-table__cell">{h(a.get("art", ""))}</td><td class="kern-table__cell">{h(a.get("bausteine", ""))}</td></tr>'
        for a in meta.get("abweichungen", []))
    html = (
        '<div class="kern-container">'
        f'<h1 class="kern-heading-large">{NAME} · Fassung {FASSUNG}</h1>'
        f'<p class="kern-body"><strong>Interne Adaption von KERN 2.8.2, nicht das offizielle KERN.</strong> '
        f'Fassung {FASSUNG} vom {FASSUNG_DATUM}; 2.8.2 ist KERNs Version und wird nie hochgezählt. '
        '„nbyc“ steht für „New by Claude“ — neu gebaut mit Claude, dem KI-Assistenten von Anthropic.</p>'
        '<p class="kern-body" lang="en">Internal adaptation of KERN 2.8.2, not the official KERN. '
        '“nbyc” stands for “New by Claude”.</p>'
        '<h2 class="kern-heading-medium">Einbinden</h2>'
        '<p class="kern-body">Eine Stildatei und ein Skript, in dieser Reihenfolge; kern.css 2.8.2 ist darin unverändert enthalten.</p>'
        '<pre class="kern-body"><code>&lt;link rel="stylesheet" href="system/kern-neu.css"&gt;\n'
        '&lt;script src="system/kern-neu.js"&gt;&lt;/script&gt;</code></pre>'
        '<p class="kern-body">Nach dem Einfügen von Markup: <code>KN.start(container)</code> verdrahtet Tastatur und Ansagen.</p>'
        f'<p class="kern-body">In diesem Storybook: {zahlen["kern"]} KERN-Bausteine und {zahlen["eigen"]} Erweiterungen, '
        f'{zahlen["stories"]} Beispiele — erzeugt aus dem Katalog. Werkzeugleiste oben: Modus (hell/dunkel), Kontrast, Sprache der Systemtexte.</p>'
        '<h2 class="kern-heading-medium">Abweichungen von KERN</h2>'
        '<table class="kern-table"><thead><tr class="kern-table__row">'   # ohne kern-table__head: fehlt in kern.css (F24)
        '<th class="kern-table__header" scope="col">Nr.</th><th class="kern-table__header" scope="col">Abweichung</th>'
        '<th class="kern-table__header" scope="col">Art</th><th class="kern-table__header" scope="col">Bausteine</th></tr></thead>'
        f'<tbody class="kern-table__body">{zeilen}</tbody></table>'
        '<p class="kern-body">Einzelheiten mit Grund und Beleg: ABWEICHUNGEN.txt im Systemordner.</p>'
        '</div>')
    return "\n".join([KOPF, "export default {", "  title: \"Einführung\",", "  parameters: { layout: \"fullscreen\" }", "};", "",
                      "export const Ueberblick = {", "  name: \"Überblick\",", f"  render: () => {js(html)}", "};", ""])


def erzeuge():
    daten = lies()
    if daten is None:
        sys.exit("Abbruch: kein JavaScript-Interpreter (osascript oder node) — der Katalog lässt sich nicht lesen.")
    meta_js = open(os.path.join(SYSTEM, "katalog", "meta.js"), encoding="utf-8").read()
    meta = json.loads(meta_js[meta_js.index("{"):meta_js.rindex("}") + 1])
    en_alle, namen_alle = daten["KATALOG_EN"], meta.get("namen", {})
    dateien, titel = {}, {}
    for art, eintraege in (("kern", daten["KERN_BAUSTEINE"]), ("eigen", daten["KATALOG"])):
        for k in eintraege:
            if not k.get("bsp"):
                sys.exit(f"Abbruch: Katalogeintrag {k['id']} hat keine Beispiele.")
            en = en_alle.get(k["id"])
            if en is None:
                sys.exit(f"Abbruch: Katalogeintrag {k['id']} fehlt in katalog/inhalt-en.js (E10).")
            t, inhalt = story_datei(k, art, en, namen_alle.get(k["id"], []))
            if t in titel:
                sys.exit(f"Abbruch: Titel doppelt: {t} ({titel[t]} und {k['id']})")
            titel[t] = k["id"]
            dateien[os.path.join(art, k["id"] + ".stories.js")] = inhalt
    zahlen = {"kern": len(daten["KERN_BAUSTEINE"]), "eigen": len(daten["KATALOG"]),
              "stories": sum(len(k["bsp"]) for k in daten["KERN_BAUSTEINE"] + daten["KATALOG"])}
    dateien["einfuehrung.stories.js"] = einfuehrung(meta, zahlen)
    pfade = sorted(dateien)
    liste = (KOPF + "/* Liste für pruefung/stories-pruefen.html (ohne Node). */\n"
             f"window.SB_STORIES = {json.dumps(['../stories/' + p for p in pfade], ensure_ascii=False, indent=1)};\n"
             f"window.SB_ZAHLEN = {json.dumps(zahlen)};\n")
    return dateien, liste, zahlen


def vorhandene():
    gefunden = set()
    for wurzel, _, namen in os.walk(STORIES):
        for n in namen:
            if n.endswith(".stories.js"):
                gefunden.add(os.path.relpath(os.path.join(wurzel, n), STORIES))
    return gefunden


def main():
    pruefen = "--pruefen" in sys.argv[1:]
    dateien, liste, zahlen = erzeuge()
    alt = vorhandene()
    abweichend = [p for p, t in dateien.items()
                  if not os.path.exists(os.path.join(STORIES, p)) or open(os.path.join(STORIES, p), encoding="utf-8").read() != t]
    ueberzaehlig = sorted(alt - set(dateien))
    liste_alt = open(LISTE, encoding="utf-8").read() if os.path.exists(LISTE) else None
    if pruefen:
        fehler = abweichend + [f"überzählig: {p}" for p in ueberzaehlig] + (["pruefung/stories-liste.js"] if liste_alt != liste else [])
        if fehler:
            print("stories/ passt nicht zum Katalog — neu erzeugen mit werkzeug/stories-bauen.py:")
            for f in fehler[:20]:
                print("   " + f)
            sys.exit(1)
        print(f"ok — {len(dateien)} Story-Dateien, {zahlen['stories']} Beispiele, passend zum Katalog.")
        return
    for p, t in dateien.items():
        ziel = os.path.join(STORIES, p)
        os.makedirs(os.path.dirname(ziel), exist_ok=True)
        with open(ziel, "w", encoding="utf-8") as f:
            f.write(t)
    for p in ueberzaehlig:                       # Eintrag aus dem Katalog entfernt: Story-Datei melden, nicht still löschen
        print(f"Achtung: {p} gehört zu keinem Katalogeintrag mehr — von Hand prüfen und entfernen.")
    os.makedirs(os.path.dirname(LISTE), exist_ok=True)
    with open(LISTE, "w", encoding="utf-8") as f:
        f.write(liste)
    print(f"{len(dateien)} Story-Dateien geschrieben ({len(abweichend)} geändert), "
          f"{zahlen['kern']} KERN-Bausteine, {zahlen['eigen']} Erweiterungen, {zahlen['stories']} Beispiele.")


if __name__ == "__main__":
    main()
