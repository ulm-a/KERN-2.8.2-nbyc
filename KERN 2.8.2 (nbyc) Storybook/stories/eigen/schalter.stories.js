/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Eingabe/Schalter",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "schalter", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Schaltet eine Einstellung sofort um.\n\n**Wann nehmen**\n\n- Wenn die Wirkung SOFORT eintritt und nichts abgesendet wird.\n\n**Wann nicht**\n\n- In einem Formular mit Absendeknopf — dort gehört ein Ankreuzfeld hin. Sonst weiß niemand, ob die Einstellung schon gilt.\n\n**Barrierefreiheit**\n\n- Das native Ankreuzfeld bleibt darunter — Tastatur und Hilfsmittel funktionieren ohne Zutun.\n- Der Zustand steht im Feld selbst, nicht nur in der Stellung des Griffs.\n- Gesperrt wie KERN (E4): aria-disabled=\"true\" und KERNs Deckkraft-Token — bleibt erreichbar und vorlesbar; kern-neu.js sperrt die Bedienung.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab | erreicht den Schalter |  |\n| Leertaste | schaltet um (nativ) | „aktiviert“ / „nicht aktiviert“ |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-switch` | Hülle |\n| `kn-switch__input` | das native Feld, unsichtbar |\n| `kn-switch__track` | Bahn |\n| `kn-switch__thumb` | Knauf |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-switch` | Schalter | Switch |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Switch\n\nTurns a setting on or off immediately.\n\n**When to use**\n\n- When the effect is IMMEDIATE and nothing is submitted.\n\n**When not to use**\n\n- In a form with a submit button — a checkbox belongs there. Otherwise nobody knows whether the setting already applies.\n\n**Accessibility**\n\n- The native checkbox stays underneath — keyboard and assistive technology work without extra effort.\n- The state lives in the field itself, not only in the position of the knob.\n- Disabled as in KERN (E4): aria-disabled=\"true\" and KERN’s opacity token — stays reachable and readable; kern-neu.js blocks operation.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab | reaches the switch |  |\n| Space | toggles (native) | “checked” / “not checked” |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-switch` | Wrapper |\n| `kn-switch__input` | the native field, invisible |\n| `kn-switch__track` | Track |\n| `kn-switch__thumb` | Knob |\n" } }
  }
};

const html01 = "<div class=\"kern-stack-sm\">\n  <label class=\"kn-switch\">\n    <input class=\"kn-switch__input\" type=\"checkbox\" checked>\n    <span class=\"kn-switch__track\"><span class=\"kn-switch__thumb\"></span></span>\n    <span class=\"kn-switch__label\">Benachrichtigung bei Fristablauf</span>\n  </label>\n  <label class=\"kn-switch\">\n    <input class=\"kn-switch__input\" type=\"checkbox\">\n    <span class=\"kn-switch__track\"><span class=\"kn-switch__thumb\"></span></span>\n    <span class=\"kn-switch__label\">Erledigte Vorgänge anzeigen</span>\n  </label>\n  <label class=\"kn-switch\">\n    <input class=\"kn-switch__input\" type=\"checkbox\" aria-disabled=\"true\">\n    <span class=\"kn-switch__track\"><span class=\"kn-switch__thumb\"></span></span>\n    <span class=\"kn-switch__label\">Gesperrt</span>\n  </label>\n</div>";
export const Beispiel01 = {
  name: "Ein, aus, gesperrt",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
