/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "KERN-Bausteine/Rückmeldung/Loader",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "kern-loader", "herkunft": "KERN 2.8.2", "quelle": "https://www.kern-ux.de/komponenten/loader", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Ist ein animiertes, sich drehendes Symbol, das die Nutzenden darauf hinweist, dass ein Inhalt geladen wird.\n\n**Wann nehmen**\n\n- Beim Abruf aus einem Fachverfahren, dessen Antwortzeit niemand kennt — KERN: erst ab 1 s Wartezeit.\n- Immer mit einem Satz daneben, was gerade passiert.\n\n**Wann nicht**\n\n- Länger als etwa zehn Sekunden ohne weitere Erklärung.\n- Nicht, wenn der Fortschritt bezifferbar ist — dann den Fortschrittsbalken (kn-progress-bar).\n\n**Barrierefreiheit**\n\n- Die Ansage trägt role=\"status\" (im KERN-Beispiel vorhanden).\n- Bei „Bewegung reduzieren“ hört die Drehung auf (Erweiterung AB03).\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kern-loader` | Baustein |\n| `kern-loader--visible` | Variante |\n| `kern-sr-only` | Baustein |\n\n**Pflichten aus KERN (implementierungsabhängig)**\n\n| Pflicht | Anmerkung |\n|---|---|\n| Statusänderung für Hilfsmittel | KERN |\n| Bewegung abschaltbar (2.2.2, 2.3.3) | kern-neu.js |\n| Erst ab 1 s Wartezeit, nie mehrere | kern-neu.js |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kern-loader` | Ladeanzeige | Loader |\n\nHerkunft / Origin: KERN 2.8.2 · Quelle: <https://www.kern-ux.de/komponenten/loader>\n\n---\n\n### English — Loader\n\nAn animated, spinning symbol that tells users content is loading.\n\n**When to use**\n\n- When fetching from a specialist system whose response time nobody knows — KERN: only from 1 s of waiting.\n- Always with a sentence next to it saying what is happening.\n\n**When not to use**\n\n- Longer than about ten seconds without further explanation.\n- Not when the progress can be quantified — use the progress bar (kn-progress-bar).\n\n**Accessibility**\n\n- The announcement carries role=\"status\" (present in KERN’s example).\n- With “reduce motion” the spinning stops (extension AB03).\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kern-loader` | Baustein |\n| `kern-loader--visible` | Variante |\n| `kern-sr-only` | Baustein |\n\n**Duties from KERN (implementation-dependent)**\n\n| Duty | Note |\n|---|---|\n| Status change for assistive technology | role=\"status\" in the example |\n| Motion can be switched off (2.2.2, 2.3.3) | extension “reduced motion” (AB03) |\n| Only from 1 s of waiting, never several | KN.lade(area, on): aria-busy, loader after 1 s, one per area (M57) |\n" } }
  }
};

const html01 = "<div class=\"kern-loader kern-loader--visible\" role=\"status\">\n    <span class=\"kern-sr-only\">Wird geladen...</span>\n  </div>";
export const Beispiel01 = {
  name: "Beispiel",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
