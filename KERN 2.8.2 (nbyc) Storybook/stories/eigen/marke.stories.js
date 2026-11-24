/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Rückmeldung/Marke und Filtermarke",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "marke", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Die Marke etikettiert einen Zustand. Die Filtermarke ist anklickbar und schaltet um.\n\n**Wann nehmen**\n\n- Marke: Stand eines Vorgangs.\n- Filtermarke: schnelles Ein- und Ausblenden.\n\n**Wann nicht**\n\n- Die Marke ist kein Knopf. Wenn man darauf klicken soll, ist es eine Filtermarke.\n\n**Barrierefreiheit**\n\n- Die Filtermarke ist ein &lt;button&gt; mit aria-pressed.\n- Der gewählte Zustand trägt zusätzlich ein Häkchen — nicht nur Farbe.\n- Die Marke braucht keinen Zustand, weil sie nicht bedienbar ist.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab | erreicht jede Filtermarke |  |\n| Enter, Leertaste | schaltet den Filter | „gedrückt“ / „nicht gedrückt“ |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-badge` | Etikett (KERN) |\n| `kern-badge--success/-warning/-danger/-info` | Art (KERN) |\n| `kn-badge--outline` | nur Rand (Erweiterung) |\n| `kn-filter-tag` | anklickbar |\n| `aria-pressed` | Zustand |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-filter-tag` | Filtermarke | Filter Tag |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Badge and filter tag\n\nThe badge labels a state. The filter tag is clickable and toggles.\n\n**When to use**\n\n- Badge: status of a case.\n- Filter tag: quickly showing and hiding.\n\n**When not to use**\n\n- The badge is not a button. If it is meant to be clicked, it is a filter tag.\n\n**Accessibility**\n\n- The filter tag is a &lt;button&gt; with aria-pressed.\n- The selected state also carries a tick — not just colour.\n- The badge needs no state because it is not operable.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab | reaches each filter tag |  |\n| Enter, Space | toggles the filter | “pressed” / “not pressed” |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-badge` | Label (KERN) |\n| `kern-badge--success/-warning/-danger/-info` | Type (KERN) |\n| `kn-badge--outline` | outline only (extension) |\n| `kn-filter-tag` | clickable |\n| `aria-pressed` | State |\n" } }
  }
};

const html01 = "<div class=\"kern-flex kern-flex-wrap kern-align-items-center kern-gap-sm\" style=\"margin-block-end:1rem\">\n  <span class=\"kern-badge\"><span class=\"kern-label\">Neu</span></span>\n  <span class=\"kern-badge kern-badge--success\"><span class=\"kern-label\">Vollständig</span></span>\n  <span class=\"kern-badge kern-badge--warning\"><span class=\"kern-label\">Rückfrage nötig</span></span>\n  <span class=\"kern-badge kern-badge--danger\"><span class=\"kern-label\">Frist abgelaufen</span></span>\n  <span class=\"kern-badge kn-badge--outline\"><span class=\"kern-label\">Nur intern</span></span>\n</div>\n<div class=\"kern-flex kern-flex-wrap kern-align-items-center kern-gap-sm\">\n  <button class=\"kn-filter-tag\" aria-pressed=\"true\">Offen</button>\n  <button class=\"kn-filter-tag\" aria-pressed=\"false\">Fristen</button>\n  <button class=\"kn-filter-tag\" aria-pressed=\"false\">Nachweise</button>\n</div>";
export const Beispiel01 = {
  name: "Beide",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
