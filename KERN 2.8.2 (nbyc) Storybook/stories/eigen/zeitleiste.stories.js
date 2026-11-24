/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Daten/Zeitleiste",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "zeitleiste", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Zeigt den Verlauf eines Vorgangs als einen Strang.\n\n**Wann nehmen**\n\n- Für Verfahrensverläufe: was ist wann passiert, was steht offen.\n\n**Wann nicht**\n\n- Für gleichrangige Listen ohne Zeitbezug.\n\n**Barrierefreiheit**\n\n- &lt;ol&gt;, weil die Reihenfolge Bedeutung hat.\n- Die Zeitangabe steht als Text, nicht nur als Position auf der Achse.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-timeline` | Liste |\n| `kn-timeline__dot` | ein Ereignis |\n| `--offen, --fertig` | Zustand |\n| `kn-cq` | aktiviert Container-Abfragen |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-timeline` | Zeitleiste | Timeline |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Timeline\n\nShows the history of a case as one strand.\n\n**When to use**\n\n- For procedural histories: what happened when, what is still open.\n\n**When not to use**\n\n- For lists of equal items without a time reference.\n\n**Accessibility**\n\n- &lt;ol&gt;, because the order carries meaning.\n- The time is given as text, not only as a position on the axis.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-timeline` | List |\n| `kn-timeline__dot` | an event |\n| `--offen, --fertig` | State |\n| `kn-cq` | enables container queries |\n" } }
  }
};

const html01 = "<div class=\"kn-cq\">\n  <ol class=\"kn-timeline\">\n    <li class=\"kn-timeline__dot kn-timeline__dot--open\">\n      <span class=\"kn-timeline__time\">09:41</span><span class=\"kn-timeline__label\"></span>\n      <div><p class=\"kn-timeline__title\">Empfehlung: Freistellung für zwei Jahre</p>\n      <p class=\"kn-timeline__text\">Einkommen liegt unter der maßgeblichen Grenze.</p></div></li>\n    <li class=\"kn-timeline__dot kn-timeline__dot--done\">\n      <span class=\"kn-timeline__time\">19:11</span><span class=\"kn-timeline__label\"></span>\n      <div><p class=\"kn-timeline__title\">Antrag vollständig eingereicht</p>\n      <p class=\"kn-timeline__text\">Mahnverfahren ausgesetzt.</p></div></li>\n    <li class=\"kn-timeline__dot\">\n      <span class=\"kn-timeline__time\">08:20</span><span class=\"kn-timeline__label\"></span>\n      <div><p class=\"kn-timeline__title\">Bescheid bereitgestellt</p>\n      <p class=\"kn-timeline__text\">Im Bürgerpostfach abgelegt.</p></div></li>\n  </ol>\n</div>";
export const Beispiel01 = {
  name: "Vier Ereignisse",
  render: () => html01,
  parameters: { docs: { source: { code: html01 }, description: { story: "Passt sich über eine Container-Abfrage an IHREN Platz an, nicht an die Fensterbreite. Fenster schmaler ziehen — oder die Schiene einfahren.\n\nAdapts to ITS space via a container query, not to the window width. Make the window narrower — or collapse the rail." } } }
};
