/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Daten/Leerzustand und Platzhalter",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "leer", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "„Nichts gefunden“ ist ein Zustand, kein Versehen. Der Ladeplatzhalter zeigt die Form, bevor der Inhalt da ist.\n\n**Wann nehmen**\n\n- Immer, wenn eine Liste leer sein kann.\n- Immer, wenn Daten nachgeladen werden.\n\n**Wann nicht**\n\n- Nie eine leere Fläche ohne Erklärung.\n\n**Barrierefreiheit**\n\n- Der Leerzustand nennt den GRUND und einen nächsten Schritt.\n- Der Platzhalter bekommt aria-hidden — er hat keinen Inhalt zum Vorlesen.\n- Bei ruhiger Bewegung steht das Wandern still, die Fläche bleibt sichtbar.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-empty-state` | Leerzustand |\n| `kn-skeleton` | Ladeplatzhalter |\n| `--titel, --kurz, --rund` | Formen |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-empty-state` | Leerzustand | Empty State |\n| `kn-skeleton` | Platzhalter | Skeleton |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Empty state and skeleton\n\n“Nothing found” is a state, not an oversight. The loading skeleton shows the shape before the content arrives.\n\n**When to use**\n\n- Whenever a list can be empty.\n- Whenever data is loaded later.\n\n**When not to use**\n\n- Never an empty area without an explanation.\n\n**Accessibility**\n\n- The empty state names the REASON and a next step.\n- The skeleton gets aria-hidden — it has no content to read out.\n- With reduced motion the shimmer stops, the area stays visible.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-empty-state` | Empty state |\n| `kn-skeleton` | Loading skeleton |\n| `--titel, --kurz, --rund` | Shapes |\n" } }
  }
};

const html01 = "<div class=\"kn-empty-state\">\n  <p class=\"kn-empty-state__title\">Kein Vorgang gefunden</p>\n  <p class=\"kern-body\">Zu „Aktenzeichen 99999“ gibt es keinen Treffer. Prüfen Sie die Schreibweise.</p>\n</div>\n<div class=\"kern-stack-sm\" style=\"margin-block-start:1.5rem\">\n  <span class=\"kn-skeleton kn-skeleton--title\"></span>\n  <span class=\"kn-skeleton\"></span>\n  <span class=\"kn-skeleton kn-skeleton--short\"></span>\n</div>";
export const Beispiel01 = {
  name: "Beides",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
