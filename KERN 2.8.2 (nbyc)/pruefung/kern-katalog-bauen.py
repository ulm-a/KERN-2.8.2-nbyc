#!/usr/bin/env python3
"""
ERZEUGT "katalog/kern-inhalt.js" — die KERN-Bausteine im Katalog (Stufe 4).

    python3 pruefung/kern-katalog-bauen.py

Quellen (eine Quelle je Angabe, Guiding §3):
    _ Resources/kern/userdoc/*.json              Titel, Beschreibung, Synonyme,
                                                 ähnliche Bausteine, Adresse
    _ Resources/kern/userdoccomponents/*.html    Original-Beispiele (derselbe
                                                 Leser wie der Prüfstand)
    katalog/kern-texte.json                      Wann / Wann nicht / Barriere-
                                                 freiheit (aus 0.5.7, auf KERN
                                                 berichtigt; von Hand gepflegt)
    PFLICHTEN / TASTEN unten                     aus "_ Recherche/KERN Vorgaben
                                                 Auswertung.txt", Teil 3 — die
                                                 "implementierungsabhängigen"
                                                 Punkte der KERN-Seiten, je mit
                                                 Stand in KERN 2.8.2 (nbyc)

Stand je Pflicht:
    nativ        das Browser-Element leistet es (details, dialog, fieldset …)
    KERN         steckt im KERN-Markup oder -CSS (z. B. role="alert")
    kern-neu.js  von KERN 2.8.2 (nbyc) gebaut
    Anwendung    Inhalt oder Zusammenhang — kann kein Design-System leisten
    offen        noch nicht erfüllt

Klassen werden aus den Beispielen gelesen, nicht abgetippt.
"""
import importlib.util
import json
import os
import re
import sys

WURZEL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJEKT = os.path.dirname(WURZEL)


def _projekt_mit(*teile):
    """Ordner über dem System, der die gemeinsamen Eingaben trägt.

    "_ Resources" liegt EINMAL im Projekt (Core Rules §3). Seit Fassung 0.2.0
    liegt das System eine Ebene tiefer, in einem eigenen Ablageordner
    ("KERN 2.8.2a (nbyc)") — deshalb wird aufwärts gesucht statt fest auf den
    Elternordner gezeigt.
    Gefunden wird nichts still: fehlt der Ordner, nennt der Abbruch jeden
    geprüften Pfad (Core Rules §2).
    """
    gesucht, d = [], WURZEL
    for _ in range(4):
        d = os.path.dirname(d)
        if not d or d == os.path.dirname(d):
            break
        kandidat = os.path.join(d, *teile)
        gesucht.append(kandidat)
        if os.path.exists(kandidat):
            return d
    sys.exit("%s: nicht gefunden. Geprüft:\n  %s" % (os.path.join(*teile), "\n  ".join(gesucht)))


PROJEKT = _projekt_mit("_ Resources", "kern", "userdoccomponents")
STECKBRIEFE = os.path.join(PROJEKT, "_ Resources", "kern", "userdoc")
ZIEL = os.path.join(WURZEL, "katalog", "kern-inhalt.js")
TEXTE = os.path.join(WURZEL, "katalog", "kern-texte.json")

GRUPPEN = [
    ("KERN · Text", ["text-heading", "text-title", "text-preline", "text-subline",
                     "text-body", "text-label"]),
    ("KERN · Aktion", ["button", "link"]),
    ("KERN · Formular", ["input-text-text", "input-text-email", "input-text-tel",
                         "input-text-url", "input-text-number", "input-text-date",
                         "input-text-password", "input-textarea", "input-select",
                         "input-checkboxes", "input-radios", "input-file", "fieldset",
                         "search"]),
    ("KERN · Inhalt", ["accordion", "card", "description-list", "table", "summary",
                       "tasklist", "badge", "icon", "divider"]),
    ("KERN · Rückmeldung", ["alert", "dialog", "loader", "progress"]),
    ("KERN · Layout", ["grid", "hilfsklassen", "kopfzeile"]),
]

# Gemeinsame Pflichten aller Textfelder (KERN: jede Feldart, "implementierungsabhängig").
FELD = [
    ["Beschriftung sichtbar und eindeutig (3.3.2)", "KERN", "kern-label mit for/id im Beispiel"],
    ["Fehler klar benannt, mit Lösung (3.3.1, 3.3.3)", "Anwendung", "Text der Fehlermeldung"],
    ["Fehlerzusammenfassung als Statusmeldung (4.1.3)", "kern-neu.js", "form[data-kn-validate]: Liste mit role=alert und Fokus, Verweise ins Feld (M58)"],
    ["Pflicht über aria-required, optional mit \"- Optional\"", "Anwendung", "Prüfung 16 meldet natives required"],
]

PFLICHTEN = {
    "accordion": [["Bedienung mit Enter/Leertaste", "nativ", "details/summary"],
                  ["Kopfzeile eindeutig beschriften (3.3.2)", "Anwendung", ""],
                  ["Nicht verschachteln, nicht automatisch schließen", "Anwendung", ""]],
    "alert": [["Rolle programmatisch erkennbar", "KERN", "role=\"alert\" im Beispiel"],
              ["Titel als echtes Überschriftenelement", "KERN", "h2.kern-title im Beispiel"],
              ["Schließbare Meldung per Tastatur bedienbar", "offen", "KERN-Markup hat keinen Schließen-Knopf; erst mit eigenem Baustein"],
              ["Lösung oder nächste Handlung nennen", "Anwendung", ""]],
    "badge": [["Nicht interaktiv", "KERN", "kein Bedienelement im Markup"],
              ["Dynamische Marke wird angesagt", "Anwendung", "über die zentrale Ansage (M61)"],
              ["Bedeutung nicht nur über Farbe", "KERN", "Text in der Marke, Symbol aria-hidden"]],
    "button": [["Nur-Symbol-Knopf mit verborgenem Text", "KERN", "kern-sr-only"],
               ["Gesperrt für Hilfsmittel zugänglich", "kern-neu.js", "aria-disabled + Sperre (E4, M25)"],
               ["Zustand programmatisch (aria-pressed/-expanded)", "Anwendung", "je nach Zweck des Knopfs"],
               ["Ein Hauptknopf je Seite", "Anwendung", ""]],
    "card": [["Passende Überschriftenebene", "Anwendung", "hgroup/h* im Beispiel, Ebene je Seite"],
             ["Bildalternative", "Anwendung", ""],
             ["Bedienelemente mind. 44 × 44 px", "KERN", ""]],
    "description-list": [["Begriff und Beschreibung zuordenbar", "nativ", "dl/dt/dd"]],
    "dialog": [["Esc schließt, Fokus bleibt im Dialog", "nativ", "showModal()"],
               ["Öffnen per Knopf (data-dialog-target)", "kern-neu.js", "wie in KERNs Doku"],
               ["X-Knopf schließt", "kern-neu.js", "Doku-Skript von KERN tut es nicht (F20)"],
               ["Fokus nach dem Schließen zurück zum Auslöser", "kern-neu.js", ""],
               ["Außen unzugänglich, Scrollen gesperrt", "nativ", "modal; Scrollsperre per KERN-CSS"],
               ["Hintergrund-Klick schließt nur Infodialoge", "kern-neu.js", "nur mit data-kn-close-on-backdrop"],
               ["Titel über aria-labelledby", "KERN", "im Beispiel; fehlt er, ergänzt kern-neu.js ihn aus der Überschrift; Prüfung 13"],
               ["Erstfokus: erstes Feld oder Titel, nie Schließen", "kern-neu.js", "autofocus geht vor (M60)"],
               ["Ohne Auslöser: Fokus danach an den Hauptinhalt", "kern-neu.js", "KERN-Regel (M60)"]],
    "divider": [["Rein schmückend, für Hilfsmittel verborgen", "KERN", "aria-hidden im Beispiel"]],
    "fieldset": [["Aussagekräftige Legende", "KERN", "legend im Beispiel"],
                 ["Nicht verschachteln, nicht für ein einzelnes Feld", "Anwendung", ""]],
    "input-checkboxes": [["Gruppe in fieldset/legend", "KERN", ""],
                         ["Zustand nicht nur über Farbe", "KERN", "Häkchen"],
                         ["Fehlerzusammenfassung als Statusmeldung (4.1.3)", "kern-neu.js", "data-kn-validate, Gruppen mit data-kn-required (M58)"]],
    "input-radios": [["Gruppe in fieldset/legend", "KERN", ""],
                     ["Vorauswahl nur bei Einstellungen", "Anwendung", ""],
                     ["Fehlerzusammenfassung als Statusmeldung (4.1.3)", "kern-neu.js", "data-kn-validate, Gruppen mit data-kn-required (M58)"]],
    "input-select": [["5 bis 15 Optionen, sonst andere Form", "Anwendung", ""],
                     ["Fehlerzusammenfassung als Statusmeldung (4.1.3)", "kern-neu.js", "data-kn-validate, Gruppen mit data-kn-required (M58)"]],
    "input-file": [["Erlaubte Formate und Größe im Hinweis", "Anwendung", ""],
                   ["Hochladestatus programmatisch melden (4.1.3)", "Anwendung", "über KN.melde bzw. KN.lade (M57, M61)"]],
    "input-text-date": [["Drei Felder in fieldset, inputmode numeric", "KERN", "im Beispiel"],
                        ["autocomplete (z. B. bday-day)", "Anwendung", "im Beispiel nicht gesetzt"]],
    "input-text-email": [["autocomplete=\"email\"", "KERN", "im Beispiel"]],
    "input-text-tel": [["autocomplete=\"tel\"", "KERN", "im Beispiel"]],
    "input-text-number": [["inputmode=\"numeric\"", "KERN", "im Beispiel"],
                          ["Wertebereich per Attribut", "Anwendung", ""]],
    "input-text-password": [["Anzeigen-Knopf mit aria-pressed schaltet", "kern-neu.js", "Beschriftung bleibt gleich (ARIA)"],
                            ["autocomplete current-/new-password", "KERN", "im Beispiel"],
                            ["Neutrale Anmeldefehler", "Anwendung", ""]],
    "input-text-text": [["autocomplete passend (1.3.5)", "Anwendung", ""]],
    "input-text-url": [["autocomplete passend (1.3.5)", "Anwendung", ""]],
    "input-textarea": [["Größe veränderbar", "KERN", ""]],
    "search": [["Bereich als <search> mit Namen", "KERN", "search mit aria-label im Beispiel"],
               ["Suchbegriff bleibt nach dem Absenden stehen", "Anwendung", ""]],
    "link": [["Linkzweck aus dem Zusammenhang", "Anwendung", ""],
             ["Externe Links gekennzeichnet", "Anwendung", "Symbol im Beispiel möglich"],
             ["Nie nur ein Symbol", "Anwendung", ""]],
    "loader": [["Statusänderung für Hilfsmittel", "KERN", "role=\"status\" im Beispiel"],
               ["Bewegung abschaltbar (2.2.2, 2.3.3)", "kern-neu.js", "Erweiterung \"ruhige Bewegung\" (AB03)"],
               ["Erst ab 1 s Wartezeit, nie mehrere", "kern-neu.js", "KN.lade(bereich, an): aria-busy, Lader nach 1 s, einer je Bereich (M57)"]],
    "progress": [["Schrittfortschritt, nicht für Laden", "Anwendung", ""],
                 ["Änderung angesagt (4.1.3)", "Anwendung", "über die zentrale Ansage (M61)"]],
    "summary": [["Gleiche Begriffe und Reihenfolge wie die Aufgabenliste", "Anwendung", ""]],
    "table": [["Beschriftung (caption)", "KERN", "im Beispiel"],
              ["Breite Tabelle per Tastatur scrollbar", "KERN", "tabindex=\"0\" am Bereich"],
              ["Zahlen rechtsbündig", "KERN", "Zellenklasse numeric"]],
    "tasklist": [["Höchstens 7 Aufgaben, durchgehend nummeriert", "Anwendung", ""]],
    "icon": [["Schmückend: aria-hidden; bedeutungstragend: Name", "Anwendung", ""],
             ["In Links mind. 24 px, bedienbar mind. 44 × 44 px", "Anwendung", ""]],
    "kopfzeile": [["Nur für öffentliche Stellen, unverändert, nie sticky", "Anwendung", "KERN-Vorgabe"]],
    "grid": [["Umbruch bei 320 px und 200 % ohne Verlust (1.4.10)", "KERN", ""]],
    "hilfsklassen": [["kern-sr-only nur für zusätzliche Hinweise", "Anwendung", ""]],
}
for s in ["input-text-text", "input-text-email", "input-text-tel", "input-text-url",
          "input-text-number", "input-text-date", "input-text-password", "input-textarea"]:
    PFLICHTEN[s] = PFLICHTEN.get(s, []) + FELD
for s in ["text-heading", "text-title"]:
    PFLICHTEN[s] = [["Immer mit h1–h6, Ebenen ohne Sprung", "Anwendung", "KERN: Textrollen"]]
for s in ["text-preline", "text-subline", "text-body", "text-label"]:
    PFLICHTEN[s] = [["Nur gleiche Größenstufe kombinieren", "Anwendung", "KERN: Textrollen"]]

TASTEN = {
    "button": [["Tab", "erreicht den Knopf"], ["Enter, Leertaste", "löst aus (nativ)"]],
    "link": [["Tab", "erreicht den Verweis"], ["Enter", "folgt dem Verweis (nativ)"]],
    "accordion": [["Tab", "erreicht die Kopfzeile"], ["Enter, Leertaste", "öffnet und schließt (nativ)"]],
    "dialog": [["Tab, Umschalt+Tab", "bleibt im Dialog (nativ)"], ["Esc", "schließt (nativ)"],
               ["Enter, Leertaste auf X", "schließt (kern-neu.js)"],
               ["beim Öffnen", "Fokus auf das erste Feld, sonst den Titel — nie auf Schließen (kern-neu.js, M60)"],
               ["nach dem Schließen", "Fokus auf dem Auslöser; ohne Auslöser auf dem Hauptinhalt (kern-neu.js, M60)"]],
    "input-checkboxes": [["Leertaste", "schaltet (nativ)"]],
    "input-radios": [["Pfeiltasten", "wählen in der Gruppe (nativ)"], ["Tab", "verlässt die Gruppe"]],
    "input-select": [["Pfeiltasten", "wählen (nativ)"], ["Alt+Pfeil runter", "öffnet die Liste (nativ, je System)"]],
    "input-file": [["Enter, Leertaste", "öffnet die Dateiauswahl (nativ)"]],
    "input-text-password": [["Tab", "vom Feld zum Anzeigen-Knopf"],
                            ["Enter, Leertaste", "zeigt oder verbirgt das Passwort (kern-neu.js)"]],
    "table": [["Tab", "erreicht den Tabellenbereich"], ["Pfeiltasten", "scrollen eine breite Tabelle"]],
    "search": [["Enter", "sendet die Suche (nativ)"]],
}

# Zusatzbeispiele von KERN 2.8.2 (nbyc) — KERN-Markup, aber nicht aus KERNs
# Beispielsammlung; im Titel gekennzeichnet. Zeigen Verhalten, das KERNs
# Beispiele nicht zeigen (dort ist der Dialog fest eingeblendet).
ZUSATZ = {
    "button": [{
        "titel": "Zusatzbeispiel KERN 2.8.2 (nbyc): die Größen, die KERNs Beispiel nicht zeigt",
        "html": (
            '<!-- kern.css 2.8.2 kennt fuenf Knopfgroessen. KERNs "Groessenuebersicht"\n'
            '     zeigt nur x-small und die Grundgroesse; small, large und x-large\n'
            '     blieben ohne Beispiel (Befund B4 des Assessments vom 16.11.2026).\n'
            '     Markup und Klassen sind KERNs eigene, nichts davon ist neu. -->\n'
            '<button class="kern-btn kern-btn--small kern-btn--primary">\n'
            '  <span class="kern-label">Small Button</span>\n'
            '</button>\n'
            '<button class="kern-btn kern-btn--large kern-btn--primary">\n'
            '  <span class="kern-label">Large Button</span>\n'
            '</button>\n'
            '<button class="kern-btn kern-btn--x-large kern-btn--primary">\n'
            '  <span class="kern-label">X-Large Button</span>\n'
            '</button>'),
    }, {
        "titel": "Zusatzbeispiel KERN 2.8.2 (nbyc): dieselben Größen als Secondary und Tertiary",
        "html": (
            '<button class="kern-btn kern-btn--small kern-btn--secondary">\n'
            '  <span class="kern-label">Small Secondary</span>\n'
            '</button>\n'
            '<button class="kern-btn kern-btn--large kern-btn--secondary">\n'
            '  <span class="kern-label">Large Secondary</span>\n'
            '</button>\n'
            '<button class="kern-btn kern-btn--x-large kern-btn--tertiary">\n'
            '  <span class="kern-label">X-Large Tertiary</span>\n'
            '</button>'),
    }],
    "dialog": [{
        "titel": "Zusatzbeispiel KERN 2.8.2 (nbyc): modal öffnen (data-dialog-target, wie in KERNs Doku)",
        "html": (
            '<button class="kern-btn kern-btn--primary" data-dialog-target="kn-dialog-probe">'
            '<span class="kern-label">Dialog öffnen</span></button>\n'
            '<dialog id="kn-dialog-probe" class="kern-dialog" aria-labelledby="kn-dialog-probe-titel">\n'
            '  <header class="kern-dialog__header">\n'
            '    <h2 class="kern-title kern-title--large" id="kn-dialog-probe-titel">Änderungen verwerfen?</h2>\n'
            '    <button class="kern-btn kern-btn--tertiary">\n'
            '      <span class="kern-icon kern-icon--close" aria-hidden="true"></span>\n'
            '      <span class="kern-sr-only">Schließen</span>\n'
            '    </button>\n'
            '  </header>\n'
            '  <section class="kern-dialog__body">\n'
            '    <p class="kern-body">Ihre Eingaben gehen verloren.</p>\n'
            '  </section>\n'
            '  <form method="dialog" class="kern-dialog__footer">\n'
            '    <button class="kern-btn kern-btn--secondary" value="abbrechen"><span class="kern-label">Abbrechen</span></button>\n'
            '    <button class="kern-btn kern-btn--primary" value="verwerfen"><span class="kern-label">Verwerfen</span></button>\n'
            '  </form>\n'
            '</dialog>'),
    }],
}


def leser():
    pfad = os.path.join(WURZEL, "pruefung", "kern-beispiele-bauen.py")
    spec = importlib.util.spec_from_file_location("kern_beispiele", pfad)
    modul = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modul)
    return modul.lies()


LEER = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}


def markup_befund(html):
    """F25: prüft ein KERN-Beispiel auf nicht geschlossene und überzählige Elemente.
    Ergebnis z. B. {"offen": {"div": 2}, "zuviel": {}} — leer, wenn das Markup sauber ist.
    Der Katalog zeigt den Befund am Beispiel (das Markup selbst bleibt KERNs, E8)."""
    from html.parser import HTMLParser

    class Leser(HTMLParser):
        def __init__(self):
            super().__init__()
            self.stapel, self.offen, self.zuviel = [], {}, {}

        def handle_starttag(self, tag, attrs):
            if tag not in LEER:
                self.stapel.append(tag)

        def handle_endtag(self, tag):
            if tag in LEER:
                return
            if tag not in self.stapel:
                self.zuviel[tag] = self.zuviel.get(tag, 0) + 1
                return
            while self.stapel[-1] != tag:
                t = self.stapel.pop()
                self.offen[t] = self.offen.get(t, 0) + 1
            self.stapel.pop()

    l = Leser()
    l.feed(html)
    l.close()
    for t in l.stapel:
        l.offen[t] = l.offen.get(t, 0) + 1
    return {"offen": l.offen, "zuviel": l.zuviel} if (l.offen or l.zuviel) else {}


def mit_befund(b):
    e = {"titel": b["titel"], "html": b["html"]}
    befund = markup_befund(b["html"])
    if befund:
        e["markup"] = befund
    return e


def klassen_von(beispiele):
    alle = []
    for b in beispiele:
        for wert in re.findall(r'class="([^"]+)"', b["html"]):
            for k in wert.split():
                if k.startswith("kern-") and k not in alle:
                    alle.append(k)
    def art(k):
        if "--" in k:
            return "Variante"
        if "__" in k:
            return "Bestandteil"
        return "Baustein"
    return [[k, art(k)] for k in alle]


def main():
    gruppen = {g["slug"]: g for g in leser()}
    zuordnung = {s: name for name, slugs in GRUPPEN for s in slugs}
    fehlt = sorted(set(gruppen) - set(zuordnung)) + sorted(set(zuordnung) - set(gruppen))
    if fehlt:
        sys.exit("Zuordnung unvollständig: " + ", ".join(fehlt))
    texte = json.load(open(TEXTE, encoding="utf-8"))
    unbekannt = sorted(set(texte) - {"hinweis"} - set(zuordnung))
    if unbekannt:
        sys.exit("kern-texte.json: unbekannte Bausteine " + ", ".join(unbekannt))
    eintraege = []
    for gruppe, slugs in GRUPPEN:
        for s in slugs:
            steck = json.load(open(os.path.join(STECKBRIEFE, s + ".json"), encoding="utf-8"))
            bsp = gruppen[s]["beispiele"]
            eintraege.append({
                "id": "kern-" + s,
                "name": steck.get("displayName") or steck["title"],
                "gruppe": gruppe,
                "herkunft": "KERN 2.8.2",
                "quelle": steck["url"],
                "zweck": steck["description"],
                "synonyme": steck.get("synonyms", []),
                "aehnlich": steck.get("similarComponents", []),
                "wann": texte.get(s, {}).get("wann", []),
                "nicht": texte.get(s, {}).get("nicht", []),
                "bsp": [mit_befund(b) for b in bsp] + ZUSATZ.get(s, []),
                "pflichten": PFLICHTEN.get(s, []),
                "tasten": TASTEN.get(s, []),
                "barriere": texte.get(s, {}).get("barriere", []),
                "klassen": klassen_von(bsp),
            })
    kopf = ("/* ERZEUGT von pruefung/kern-katalog-bauen.py — nicht von Hand ändern.\n"
            "   KERN-Bausteine 2.8.2 für den Katalog: Steckbriefe und Original-Beispiele\n"
            "   aus _ Resources/kern, Pflichten aus der Auswertung (Teil 3). */\n")
    text = kopf + "var KERN_BAUSTEINE = " + json.dumps(eintraege, ensure_ascii=False, indent=1) \
        .replace("</", "<\\/") + ";\n"
    open(ZIEL, "w", encoding="utf-8").write(text)
    n_pfl = sum(len(e["pflichten"]) for e in eintraege)
    stand = {}
    for e in eintraege:
        for p in e["pflichten"]:
            stand[p[1]] = stand.get(p[1], 0) + 1
    print("katalog/kern-inhalt.js: %d KERN-Bausteine, %d Beispiele (davon %d Zusatz), %d Pflichten (%s)" % (
        len(eintraege), sum(len(e["bsp"]) for e in eintraege),
        sum(len(v) for v in ZUSATZ.values()), n_pfl,
        ", ".join("%s %d" % (k, stand[k]) for k in sorted(stand))))


if __name__ == "__main__":
    main()
