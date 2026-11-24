#!/usr/bin/env python3
"""
Erzeugt "KERN Designer/daten/verwendung.js": welcher Baustein welche Tokens
direkt benutzt, und in welche Atomic-Design-Stufe er gehört.
(Instruction Designer 2.8.2 (nbyc), Abschnitt 5 "Nach Atomic Design".)

Quelle: alle CSS-Dateien des Systems ("KERN 2.8.2 (nbyc)/system/kern.css" und
die eigenen 0*.css). Eine Regel zählt, wenn ihr Rumpf var(--…) enthält; der
Baustein ergibt sich aus der ersten passenden Klasse im Selektor (Tabelle
ALIAS, sonst Code-Name aus katalog/begriffe.json).

Aufruf: python3 "KERN Designer/werkzeug/verwendung-bauen.py"
Bricht mit Datei:Grund ab, wenn eine Klasse keinem Baustein zugeordnet ist
(GI §8: Fehler in eigenen Daten sind laut).
"""
import glob
import json
import os
import re
import sys

HIER = os.path.dirname(os.path.abspath(__file__))
DESIGNER = os.path.dirname(HIER)
SYSTEM = os.path.join(os.path.dirname(DESIGNER), "KERN 2.8.2 (nbyc)", "system")
ZIEL = os.path.join(DESIGNER, "daten", "verwendung.js")

BEGRIFFE = os.path.join(os.path.dirname(SYSTEM), "katalog", "begriffe.json")

# Baustein-ID = Code-Name aus der Begriffsliste des Systems (EINE Quelle der Namen,
# E10). Klassen, die dort nicht stehen, gehören zu einem anderen Baustein:
ALIAS = [
    (r"^kern-(m|mt|mb|ml|mr|mx|my|p|pt|pb|pl|pr|px|py|gap|stack)(-|$)", "kern-flex"),
    (r"^kern-(col|row)", "kern-row"),
    (r"^kern-container", "kern-container"),
    (r"^kern-(hint|error)$", "kern-form-input"),
    (r"^kern-input-group", "kern-input-group"),
    (r"^kern-details$", "kern-dropdown"),
    (r"^kern-number$", "kern-task-list"),
    (r"^kern-(layer|level-1|level-2|light|dark)$", "ebenen"),
    (r"^kn-table-(toolbar|batch|columns|expand)$|^kn-table$", "kern-table"),
    (r"^kn-(popover|toggletip)$", "kn-tooltip"),
    (r"^kn-(date-picker|multiselect|input)$", "kern-form-input"),
    (r"^kn-icon$", "kern-icon"),
    (r"^kn-(count-badge|ai-label|swatch)$", "kern-badge"),
    (r"^kn-(nav-rail|tree)$", "kn-side-nav"),
    (r"^kn-code(-block)?$", "kern-body"),
    (r"^kn-fab$", "kern-btn"),
    (r"^kn-page$", "kern-container"),
    (r"^kn-is-active$", None),            # Zustandsklasse, kein Baustein
]

# Atomic-Design-Stufe je Baustein (Brad Frost; Tokens selbst liegen darunter)
STUFE = {
    "atom": "kern-btn kern-link kern-badge kern-icon kern-divider kern-loader kern-form-check kern-heading kern-body "
            "kern-preline kern-subline kern-title kern-label kern-list kn-switch kn-filter-tag kn-avatar kn-skeleton "
            "kn-char-count kn-skip-link kn-phase-banner",
    "molekuel": "kern-form-input kern-fieldset kern-input-group kern-dropdown kern-progress kern-alert "
                "kern-description-list kn-segmented kn-split-button kn-slider kn-combobox kn-number-stepper kn-tooltip "
                "kn-breadcrumb kn-pagination kn-step kn-steps kn-inset-text kn-warning-text kn-confirmation kn-metric "
                "kn-progress-bar kn-menu kn-file-list kn-toolbar kn-error-summary kn-tabs",
    "organismus": "kern-table kern-summary kern-task-list kern-card kern-accordion kern-dialog kern-kopfzeile kn-header "
                  "kn-main-nav kn-footer kn-side-nav kn-drawer kn-timeline kn-empty-state kn-banner kn-toast "
                  "kn-toast-region kn-table-frame kn-table-sort kn-table-select-col",
    "layout": "kern-container kern-row kern-flex kern-sr-only kn-auto-grid kn-cq ebenen",
}
STUFE_VON = {code: s for s, codes in STUFE.items() for code in codes.split()}


def lade_codes():
    b = json.load(open(BEGRIFFE, encoding="utf-8"))
    return sorted((e["code"] for e in b["kern"] + b["erweiterungen"]), key=len, reverse=True)


def baustein_von(klasse, codes):
    for muster, ziel in ALIAS:
        if re.search(muster, klasse):
            return ziel or ""
    for c in codes:                          # längster Code-Name, der passt
        if klasse == c or klasse.startswith(c + "-"):
            return c
    return None


def main():
    codes = lade_codes()
    dateien = [os.path.join(SYSTEM, "kern.css")] + sorted(glob.glob(os.path.join(SYSTEM, "0*.css")))
    verwendung, bausteine, unbekannt = {}, {}, set()
    for pfad in dateien:
        css = re.sub(r"/\*.*?\*/", "", open(pfad, encoding="utf-8").read(), flags=re.S)
        for selektor, rumpf in re.findall(r"([^{}]+)\{([^{}]*)\}", css):
            tokens = set(re.findall(r"var\((--(?:kern|kn)-[a-z0-9-]+)", rumpf))
            if not tokens:
                continue
            klassen = re.findall(r"\.((?:kern|kn)-[a-z0-9-]+?)(?:__|--|[^a-z0-9-]|$)", selektor)
            if not klassen:
                continue                      # :root, body … = Token-Definitionen, kein Baustein
            bid = baustein_von(klassen[0], codes)
            if bid is None:
                unbekannt.add(f"{os.path.basename(pfad)}: .{klassen[0]}")
                continue
            if bid == "":
                continue
            if bid not in STUFE_VON:
                unbekannt.add(f"{os.path.basename(pfad)}: {bid} ohne Atomic-Stufe (Tabelle STUFE)")
                continue
            bausteine[bid] = {"stufe": STUFE_VON[bid], "zeigen": "body" if bid == "ebenen" else "." + bid}
            for t in tokens:
                verwendung.setdefault(t, set()).add(bid)
    if unbekannt:
        sys.exit("Klasse ohne Baustein (ALIAS oder STUFE ergänzen):\n  " + "\n  ".join(sorted(unbekannt)))
    daten = {
        "hinweis": "Erzeugt von werkzeug/verwendung-bauen.py — nicht von Hand ändern.",
        "bausteine": dict(sorted(bausteine.items())),
        "tokens": {t: sorted(b) for t, b in sorted(verwendung.items())},
    }
    with open(ZIEL, "w", encoding="utf-8") as f:
        f.write("/* " + daten["hinweis"] + " */\nwindow.KD_VERWENDUNG = ")
        json.dump(daten, f, ensure_ascii=False, indent=1)
        f.write(";\n")
    print(f"{ZIEL}: {len(bausteine)} Bausteine, {len(verwendung)} Tokens mit Verwendung")


if __name__ == "__main__":
    main()
