/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Aktion/Zähler-Marke",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "zaehler-marke", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Zeigt an einem Symbolknopf, wie viele neue Einträge es gibt.\n\n**Wann nehmen**\n\n- An Nachrichten, Wiedervorlagen, Aufgaben — wenn die Zahl zum Handeln führt.\n\n**Wann nicht**\n\n- Nicht für Zahlen ohne Handlungsbezug — dann eine Kennzahl.\n- Nicht über 99: dann „99+“.\n\n**Barrierefreiheit**\n\n- Die Zahl ist aria-hidden; der Knopfname nennt sie vollständig („Nachrichten, 3 neu“).\n- Ändert sich die Zahl, die Änderung über die zentrale Ansage melden (M61).\n- Weiße Zahl auf Gefahrfarbe: Kontrast wie der Gefahr-Knopf (6,01 hell / 6,99 dunkel).\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab | erreicht den Knopf |  |\n| Enter, Leertaste | löst aus | Name samt Zahl („Nachrichten, 3 neu“) — die sichtbare Zahl ist für Hilfsmittel verborgen |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-count-badge` | die Zahl am Knopf |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-count-badge` | Zähler-Marke | Count Badge |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Count badge\n\nShows on an icon button how many new entries there are.\n\n**When to use**\n\n- On messages, follow-ups, tasks — when the number leads to action.\n\n**When not to use**\n\n- Not for numbers without a link to action — use a metric.\n- Not above 99: use “99+”.\n\n**Accessibility**\n\n- The number is aria-hidden; the button name states it in full (“Messages, 3 new”).\n- When the number changes, announce the change via the central announcement (M61).\n- White number on the danger colour: contrast as for the danger button (6.01 light / 6.99 dark).\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab | reaches the button |  |\n| Enter, Space | triggers | name including the number (“Messages, 3 new”) — the visible number is hidden from assistive technology |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-count-badge` | the number on the button |\n" } }
  }
};

const html01 = "<button class=\"kern-btn kern-btn--tertiary\" type=\"button\">\n  <span class=\"kern-icon kern-icon--mail\" aria-hidden=\"true\"></span>\n  <span class=\"kern-sr-only\">Nachrichten, 3 neu</span>\n  <span class=\"kn-count-badge\" aria-hidden=\"true\">3</span>\n</button>";
export const Beispiel01 = {
  name: "Nachrichten mit Zahl",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
