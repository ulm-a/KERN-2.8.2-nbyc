/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Rückmeldung/Fortschrittsbalken",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "fortschritt", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Zeigt, wie weit etwas gediehen ist, wenn man es beziffern kann.\n\n**Wann nehmen**\n\n- Beim Hochladen, beim Erzeugen eines Bescheids, bei Massenläufen.\n- Auch für Anteile: wie viele Nachweise von wie vielen liegen vor.\n\n**Wann nicht**\n\n- Wenn die Dauer unbekannt ist. Dann die Ladeanzeige nehmen — ein Balken, der bei 90 Prozent steht und sich nicht rührt, ist schlimmer als gar keiner.\n\n**Barrierefreiheit**\n\n- role=\"progressbar\" mit aria-valuenow, -valuemin und -valuemax.\n- Der Wert gehört ZUSÄTZLICH als Text daneben — nicht jeder hört die Ansage.\n- Der Balken hat 8 Pixel Höhe; die Farbe allein trägt die Information nicht, deshalb der Text.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-progress-bar` | die Schiene |\n| `kn-progress-bar__bar` | der gefüllte Teil |\n| `inline-size` | der Anteil, in Prozent |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-progress-bar` | Fortschrittsbalken | Progress Bar |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Progress bar\n\nShows how far something has got when it can be quantified.\n\n**When to use**\n\n- When uploading, generating a notice, in bulk runs.\n- Also for shares: how many documents out of how many are there.\n\n**When not to use**\n\n- When the duration is unknown. Use the loader then — a bar stuck at 90 percent is worse than none at all.\n\n**Accessibility**\n\n- role=\"progressbar\" with aria-valuenow, -valuemin and -valuemax.\n- The value ALSO belongs next to it as text — not everyone hears the announcement.\n- The bar is 8 pixels high; colour alone does not carry the information, hence the text.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-progress-bar` | the track |\n| `kn-progress-bar__bar` | the filled part |\n| `inline-size` | the share, in percent |\n" } }
  }
};

const html01 = "<div>\n  <p class=\"kern-body kern-body--small\">Nachweise vollständig: 7 von 10</p>\n  <div class=\"kn-progress-bar\" role=\"progressbar\" aria-valuenow=\"70\"\n       aria-valuemin=\"0\" aria-valuemax=\"100\" aria-label=\"Nachweise vollständig\">\n    <div class=\"kn-progress-bar__bar\" style=\"inline-size:70%\"></div>\n  </div>\n</div>";
export const Beispiel01 = {
  name: "Sieben von zehn Nachweisen",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
