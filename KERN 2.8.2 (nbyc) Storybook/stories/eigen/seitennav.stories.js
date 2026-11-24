/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Navigation/Seitennavigation",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "seitennav", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Führt links durch einen größeren Bereich. Die Navigation dieses Katalogs ist selbst ein Beispiel.\n\n**Wann nehmen**\n\n- Ab etwa acht Zielen.\n- Wenn die Ziele in Gruppen zerfallen.\n\n**Wann nicht**\n\n- Für weniger als fünf Ziele — dort genügt die Hauptnavigation oben.\n\n**Barrierefreiheit**\n\n- &lt;nav&gt; mit aria-label, damit Hilfsmittel mehrere Navigationen unterscheiden.\n- aria-current=\"page\" am aktuellen Punkt — nicht nur eine Klasse.\n- Der aktuelle Punkt trägt zusätzlich einen Balken links, nicht nur eine Farbe.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab | von Eintrag zu Eintrag |  |\n| Enter | folgt dem Verweis | aktueller Eintrag: „aktuelle Seite“ |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-side-nav` | Hülle |\n| `kn-side-nav__group` | Gruppe |\n| `kn-side-nav__title` | Gruppenüberschrift |\n| `kn-side-nav__item` | ein Ziel |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-side-nav` | Seitennavigation | Side Navigation |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Side navigation\n\nGuides through a larger area on the left. The navigation of this catalogue is itself an example.\n\n**When to use**\n\n- From about eight destinations.\n- When the destinations fall into groups.\n\n**When not to use**\n\n- For fewer than five destinations — the main navigation at the top is enough.\n\n**Accessibility**\n\n- &lt;nav&gt; with aria-label so that assistive technology can tell several navigations apart.\n- aria-current=\"page\" on the current item — not just a class.\n- The current item also carries a bar on the left, not just a colour.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab | from entry to entry |  |\n| Enter | follows the link | current entry: “current page” |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-side-nav` | Wrapper |\n| `kn-side-nav__group` | Group |\n| `kn-side-nav__title` | Group heading |\n| `kn-side-nav__item` | a destination |\n" } }
  }
};

const html01 = "<nav class=\"kn-side-nav\" aria-label=\"Beispiel\">\n  <div class=\"kn-side-nav__group\">\n    <p class=\"kn-side-nav__title\">Vorgang</p>\n    <ul class=\"kn-side-nav__list\">\n      <li><a class=\"kn-side-nav__item\" href=\"#seitennav\" aria-current=\"page\">Übersicht <span class=\"kn-side-nav__count\">9</span></a></li>\n      <li><a class=\"kn-side-nav__item\" href=\"#seitennav\">Nachweise</a></li>\n      <li><a class=\"kn-side-nav__item\" href=\"#seitennav\">Verlauf</a></li>\n    </ul>\n  </div>\n  <div class=\"kn-side-nav__group\">\n    <p class=\"kn-side-nav__title\">Verwaltung</p>\n    <ul class=\"kn-side-nav__list\">\n      <li><a class=\"kn-side-nav__item\" href=\"#seitennav\">Fristen</a></li>\n      <li><a class=\"kn-side-nav__item\" href=\"#seitennav\">Erledigt</a></li>\n    </ul>\n  </div>\n</nav>";
export const Beispiel01 = {
  name: "Mit Gruppen",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
