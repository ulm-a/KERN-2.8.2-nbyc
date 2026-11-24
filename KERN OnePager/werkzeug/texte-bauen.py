#!/usr/bin/env python3
"""
Vergibt im OnePager jedem sichtbaren Text einen Schlüssel und erzeugt die deutsche
Vorlage für die Übersetzungen (Instruction Designer 2.8.2 (nbyc), Abschnitt 9).

  - Element mit eigenem Text  → data-t="<abschnitt>.<n>"
  - aria-label / title / alt   → data-t-aria / data-t-title / data-t-alt
  - Deutsch bleibt im HTML (Quelle); texte/de-vorlage.json wird daraus erzeugt
    (nur zum Lesen, nie von Hand ändern).
  - Vorhandene Schlüssel bleiben; neue Texte bekommen die nächste freie Nummer.
  - translate="no" (HTML-Standard) an Daten, Namen, Beträgen: kein Schlüssel.

Aufruf: python3 "KERN OnePager/werkzeug/texte-bauen.py"
Bricht mit Zeile ab, wenn ein Element zwei getrennte Textstücke hat — dann das
HTML so umbauen, dass jedes Textstück ein eigenes Element hat (GI §8, §9).
"""
import json
import os
import re
import sys
from html.parser import HTMLParser

HIER = os.path.dirname(os.path.abspath(__file__))
SEITE = os.path.join(os.path.dirname(HIER), "index.html")
VORLAGE = os.path.join(os.path.dirname(HIER), "texte", "de-vorlage.json")
LEER = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}
OHNE_TEXT = {"script", "style", "svg", "path", "title"}


class Leser(HTMLParser):
    def __init__(self, quelle):
        super().__init__(convert_charrefs=True)
        self.quelle = quelle
        self.zeilenanfang = [0]
        for m in re.finditer("\n", quelle):
            self.zeilenanfang.append(m.end())
        self.stapel = []        # [tag, attrs, startpos, textstuecke, abschnitt, translate=no]
        self.elemente = []

    def pos(self):
        z, s = self.getpos()
        return self.zeilenanfang[z - 1] + s

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        abschnitt = a.get("data-abschnitt") or (self.stapel[-1][4] if self.stapel else "seite")
        if tag in ("header",) and "kn-header" in (a.get("class") or ""):
            abschnitt = "kopf"
        if tag == "footer" and "kn-footer" in (a.get("class") or ""):
            abschnitt = "fuss"
        if tag == "nav" and "op-nav" in (a.get("class") or ""):
            abschnitt = "navigation"
        if "op-status" in (a.get("class") or ""):
            abschnitt = "status"
        if "kern-kopfzeile" in (a.get("class") or "").split():
            abschnitt = "kopf"
        fest = a.get("translate") == "no" or bool(self.stapel and self.stapel[-1][5])
        eintrag = [tag, a, self.pos(), [], abschnitt, fest]
        self.elemente.append(eintrag)
        if tag not in LEER:
            self.stapel.append(eintrag)

    def handle_endtag(self, tag):
        if not any(e[0] == tag for e in self.stapel):   # z. B. "<hr />": nichts offen
            return
        while self.stapel:
            e = self.stapel.pop()
            if e[0] == tag:
                break

    def handle_data(self, data):
        if self.stapel and data.strip() and self.stapel[-1][0] not in OHNE_TEXT:
            self.stapel[-1][3].append((data.strip(), self.getpos()[0]))


def main():
    quelle = open(SEITE, encoding="utf-8").read()
    leser = Leser(quelle)
    leser.feed(quelle)

    vergeben = set(re.findall(r'data-t(?:-aria|-title|-alt)?="([^"]+)"', quelle))
    zaehler = {}
    # Auch Schlüssel aus der bisherigen Vorlage zählen: eine gelöschte Nummer wird nie
    # wiederverwendet — sonst hinge eine alte Übersetzung an einem neuen Text (D12).
    if os.path.exists(VORLAGE):
        vergeben |= set(json.load(open(VORLAGE, encoding="utf-8")).get("texte", {}))
    for k in vergeben:
        a, _, n = k.rpartition(".")
        if n.isdigit():
            zaehler[a] = max(zaehler.get(a, 0), int(n))

    def neuer(abschnitt):
        zaehler[abschnitt] = zaehler.get(abschnitt, 0) + 1
        return f"{abschnitt}.{zaehler[abschnitt]}"

    einfuegen, vorlage, fehler = [], {}, []
    for tag, a, start, stuecke, abschnitt, fest in leser.elemente:
        if tag in OHNE_TEXT or fest:            # translate="no": Daten, Namen, Beträge
            continue
        zusatz = []
        if stuecke:
            if len(stuecke) > 1:
                fehler.append(f"index.html:{stuecke[0][1]}: <{tag}> hat {len(stuecke)} Textstücke: "
                              + " | ".join(s for s, _ in stuecke))
                continue
            k = a.get("data-t") or neuer(abschnitt)
            if "data-t" not in a:
                zusatz.append(f'data-t="{k}"')
            vorlage[k] = re.sub(r"\s+", " ", stuecke[0][0])
        for attr, merkmal in (("aria-label", "data-t-aria"), ("title", "data-t-title"), ("alt", "data-t-alt")):
            if a.get(attr):
                k = a.get(merkmal) or neuer(abschnitt)
                if merkmal not in a:
                    zusatz.append(f'{merkmal}="{k}"')
                vorlage[k] = a[attr]
        if zusatz:
            ende = start + 1 + len(tag)                 # direkt hinter "<tag"
            einfuegen.append((ende, " " + " ".join(zusatz)))
    if fehler:
        sys.exit("\n".join(fehler))
    for pos, text in sorted(einfuegen, reverse=True):
        quelle = quelle[:pos] + text + quelle[pos:]
    with open(SEITE, "w", encoding="utf-8") as f:
        f.write(quelle)
    os.makedirs(os.path.dirname(VORLAGE), exist_ok=True)
    with open(VORLAGE, "w", encoding="utf-8") as f:
        json.dump({"hinweis": "Erzeugt von werkzeug/texte-bauen.py aus index.html — nur lesen.",
                   "texte": dict(sorted(vorlage.items(), key=lambda kv: (kv[0].rsplit(".", 1)[0], int(kv[0].rsplit(".", 1)[1]))))},
                  f, ensure_ascii=False, indent=1)
    print(f"{len(einfuegen)} Elemente neu verschlüsselt, {len(vorlage)} Texte in {VORLAGE}")


if __name__ == "__main__":
    main()
