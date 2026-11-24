/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Rückmeldung/Kurzhinweis",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kurzhinweis", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Eine kurze Erklärung, die beim Zeigen oder Fokussieren erscheint.\n\n**Wann nehmen**\n\n- Für Abkürzungen und Fachbegriffe, die im Fließtext stören würden.\n- Für die Bedeutung eines Symbols.\n\n**Wann nicht**\n\n- NIE für etwas, das man zum Arbeiten braucht — dafür einen Aufklapper (kern-accordion) oder den Hinweis auf Klick. Auf Berührungsbildschirmen erscheint er nur per Antippen.\n- Nicht für lange Texte. Was mehr als zwei Zeilen braucht, gehört in einen Aufklapper.\n\n**Barrierefreiheit**\n\n- tabindex=\"0\" am Anker, sonst ist der Hinweis mit der Tastatur nicht zu erreichen.\n- aria-describedby verbindet Anker und Blase, role=\"tooltip\" an der Blase.\n- WCAG 1.4.13: Esc blendet aus (ohne Fokuswechsel), die Blase ist überfahrbar (Brücke über die Lücke) und bleibt, solange Zeiger oder Fokus darauf sind.\n- Weil er leicht übersehen wird, darf er nie die einzige Quelle einer Information sein.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab | Fokus auf den Anker zeigt den Hinweis | Hinweis über aria-describedby |\n| Esc | blendet aus, Fokus bleibt |  |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-tooltip` | der Anker |\n| `kn-tooltip__bubble` | der Text |\n| `aria-describedby` | verbindet beide |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-tooltip` | Kurzhinweis | Tooltip |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Tooltip\n\nA short explanation that appears on hover or focus.\n\n**When to use**\n\n- For abbreviations and technical terms that would disrupt the running text.\n- For the meaning of an icon.\n\n**When not to use**\n\n- NEVER for something needed to get work done — use an accordion (kern-accordion) or the toggletip instead. On touch screens it only appears on tap.\n- Not for long texts. Anything that needs more than two lines belongs in an accordion.\n\n**Accessibility**\n\n- tabindex=\"0\" on the anchor, otherwise the hint cannot be reached with the keyboard.\n- aria-describedby connects anchor and bubble, role=\"tooltip\" on the bubble.\n- WCAG 1.4.13: Esc hides it (without moving focus), the bubble can be hovered (bridge across the gap) and stays while pointer or focus is on it.\n- Because it is easily overlooked, it must never be the only source of information.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab | focus on the anchor shows the hint | hint via aria-describedby |\n| Esc | hides it, focus stays |  |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-tooltip` | the anchor |\n| `kn-tooltip__bubble` | the text |\n| `aria-describedby` | connects both |\n" } }
  }
};

const html01 = "<p class=\"kern-body\">Der Vorgang liegt bei der\n  <span class=\"kn-tooltip\" tabindex=\"0\" aria-describedby=\"kh-1\">FRB\n    <span class=\"kn-tooltip__bubble\" role=\"tooltip\" id=\"kh-1\">Feststellungs- und Rückzahlungsbescheid</span>\n  </span>.\n</p>";
export const Beispiel01 = {
  name: "Erklärung zu einer Abkürzung",
  render: () => html01,
  parameters: { docs: { source: { code: html01 }, description: { story: "Zeigen, mit dem Tabulator hineinspringen oder antippen. Esc blendet aus, ohne den Fokus zu bewegen.\n\nHover, tab into it or tap it. Esc hides it without moving the focus." } } }
};
