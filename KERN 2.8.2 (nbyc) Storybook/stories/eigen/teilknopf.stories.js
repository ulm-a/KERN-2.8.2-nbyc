/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Aktion/Teilknopf",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "teilknopf", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Eine Hauptaktion und ein Menü mit den selteneren daneben.\n\n**Wann nehmen**\n\n- Wenn es eine offensichtlich häufigste Aktion gibt und zwei bis vier seltenere.\n- Beispiel: „Bewilligen“ als Hauptaktion, daneben „Bewilligen und drucken“, „Bewilligen ohne Bescheid“.\n\n**Wann nicht**\n\n- Wenn alle Aktionen gleich wichtig sind — dann nebeneinanderstellen.\n- Wenn es mehr als fünf sind. Dann ist es ein Überlaufmenü.\n\n**Barrierefreiheit**\n\n- Der zweite Knopf braucht ein aria-label — ein Pfeil allein sagt einem Screenreader nichts.\n- aria-haspopup und aria-expanded gehören an den Menüknopf.\n- Beide Knöpfe müssen einzeln mit der Tastatur erreichbar sein.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab | erst die Haupthandlung, dann der Pfeil |  |\n| Enter, Leertaste auf der Haupthandlung | löst sie aus |  |\n| ↓, Enter, Leertaste auf dem Pfeil | öffnet das Menü; weiter wie Überlaufmenü | „Menü“, erster Eintrag |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-split-button` | die Klammer um beide |\n| `kern-btn` | beide Teile sind echte KERN-Knöpfe |\n| `data-kn-menu` | verdrahtet den Menüteil |\n| `aria-haspopup` | kündigt das Menü an |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-split-button` | Teilknopf | Split Button |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Split button\n\nOne main action with a menu of the rarer ones next to it.\n\n**When to use**\n\n- When there is one obviously most frequent action and two to four rarer ones.\n- Example: “Approve” as the main action, next to it “Approve and print”, “Approve without notice”.\n\n**When not to use**\n\n- When all actions are equally important — then place them side by side.\n- When there are more than five. Then it is an overflow menu.\n\n**Accessibility**\n\n- The second button needs an aria-label — an arrow alone tells a screen reader nothing.\n- aria-haspopup and aria-expanded belong on the menu button.\n- Both buttons must be reachable individually with the keyboard.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab | first the main action, then the arrow |  |\n| Enter, Space on the main action | triggers it |  |\n| ↓, Enter, Space on the arrow | opens the menu; then as the overflow menu | “menu”, first entry |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-split-button` | the bracket around both |\n| `kern-btn` | both parts are real KERN buttons |\n| `data-kn-menu` | wires up the menu part |\n| `aria-haspopup` | announces the menu |\n" } }
  }
};

const html01 = "<div class=\"kn-split-button\">\n  <button class=\"kern-btn kern-btn--primary\" type=\"button\"><span class=\"kern-label\">Bewilligen</span></button>\n  <button class=\"kern-btn kern-btn--primary\" type=\"button\" data-kn-menu\n          aria-controls=\"tk-1\" aria-haspopup=\"menu\" aria-expanded=\"false\">\n    <span class=\"kern-icon kern-icon--arrow-down\" aria-hidden=\"true\"></span>\n    <span class=\"kern-sr-only\">Weitere Bewilligungsarten</span></button>\n  <div class=\"kn-menu\" id=\"tk-1\" role=\"menu\" hidden>\n    <button class=\"kn-menu__item\" role=\"menuitem\" type=\"button\" tabindex=\"-1\">Bewilligen und drucken</button>\n    <button class=\"kn-menu__item\" role=\"menuitem\" type=\"button\" tabindex=\"-1\">Bewilligen ohne Bescheid</button>\n  </div>\n</div>";
export const Beispiel01 = {
  name: "Bewilligen mit Varianten",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
