/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Aktion/Werkzeugleiste",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "werkzeuge", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Sammelt Suche, Filter und Aktionen über einer Liste oder Tabelle.\n\n**Wann nehmen**\n\n- Über jeder Tabelle, die man durchsuchen, filtern oder als Ganzes bearbeiten kann.\n\n**Wann nicht**\n\n- Nicht als Ablage für alles, was sonst nirgends passt.\n- Nicht mit mehr als sechs Elementen — darüber findet niemand mehr etwas.\n\n**Barrierefreiheit**\n\n- Der Trenner ist rein zeichnerisch und bleibt leer — kein Text darin.\n- Filtermarken sind Knöpfe mit aria-pressed, keine Verweise.\n- Das Suchfeld braucht eine Beschriftung, auch wenn sie unsichtbar ist (kern-sr-only).\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab | Feld, Knopf, Filter der Reihe nach — die Leiste ist eine Gruppe, kein role=toolbar, daher keine Pfeiltasten |  |\n| Enter, Leertaste auf einem Filter | schaltet ihn | „gedrückt“ / „nicht gedrückt“ |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-toolbar` | die Leiste |\n| `kn-toolbar__divider` | senkrechter Strich |\n| `kn-filter-tag` | an- und abschaltbarer Filter |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-toolbar` | Werkzeugleiste | Toolbar |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Toolbar\n\nCollects search, filters and actions above a list or table.\n\n**When to use**\n\n- Above every table that can be searched, filtered or edited as a whole.\n\n**When not to use**\n\n- Not as a dump for everything that fits nowhere else.\n- Not with more than six elements — beyond that nobody finds anything.\n\n**Accessibility**\n\n- The divider is purely visual and stays empty — no text in it.\n- Filter tags are buttons with aria-pressed, not links.\n- The search field needs a label, even if it is invisible (kern-sr-only).\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab | field, button, filters in order — the bar is a group, not role=toolbar, so no arrow keys |  |\n| Enter, Space on a filter | toggles it | “pressed” / “not pressed” |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-toolbar` | the bar |\n| `kn-toolbar__divider` | vertical line |\n| `kn-filter-tag` | filter that can be switched on and off |\n" } }
  }
};

const html01 = "<div class=\"kn-toolbar\">\n  <search style=\"flex:1 1 14rem\">\n    <label class=\"kern-label kern-sr-only\" for=\"wz-suche\">Vorgänge durchsuchen</label>\n    <div class=\"kern-input-group\">\n      <input class=\"kern-form-input__input\" id=\"wz-suche\" type=\"search\" placeholder=\"Aktenzeichen oder Name\">\n      <button class=\"kern-btn kern-btn--primary\" type=\"button\"><span class=\"kern-label\">Suchen</span></button>\n    </div>\n  </search>\n  <span class=\"kn-toolbar__divider\"></span>\n  <button class=\"kn-filter-tag\" type=\"button\" aria-pressed=\"true\">Fristnah</button>\n  <button class=\"kn-filter-tag\" type=\"button\" aria-pressed=\"false\">Vollständig</button>\n</div>";
export const Beispiel01 = {
  name: "Suche, Filter und Aktion",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
