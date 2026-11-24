/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Fläche/Phasenmarke",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "phase", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Sagt am Kopf einer Seite, welchen Reifegrad sie hat.\n\n**Wann nehmen**\n\n- Solange etwas Entwurf, Erprobung oder Arbeitsstand ist.\n- Zusammen mit einem Satz, was das für die Nutzenden bedeutet.\n\n**Wann nicht**\n\n- Auf einer fertigen Anwendung. Eine Marke, die nie verschwindet, liest niemand mehr.\n\n**Barrierefreiheit**\n\n- Die Marke allein reicht nicht — der Satz daneben sagt, was folgt.\n- Ganz oben im Inhalt, vor der Überschrift, damit sie nicht überlesen wird.\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-phase-banner` | die Zeile |\n| `kern-badge` | die Marke darin (KERN) |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-phase-banner` | Phasenmarke | Phase Banner |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Phase banner\n\nSays at the top of a page what stage of maturity it has reached.\n\n**When to use**\n\n- As long as something is a draft, a trial or work in progress.\n- Together with a sentence on what this means for users.\n\n**When not to use**\n\n- On a finished application. A badge that never goes away is no longer read.\n\n**Accessibility**\n\n- The badge alone is not enough — the sentence next to it says what follows.\n- At the very top of the content, before the heading, so that it is not missed.\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-phase-banner` | the line |\n| `kern-badge` | the badge inside it (KERN) |\n" } }
  }
};

const html01 = "<div class=\"kn-phase-banner\">\n  <span class=\"kern-badge kern-badge--info\"><span class=\"kern-label\">Entwurf</span></span>\n  <span>Diese Ansicht ist ein Arbeitsstand. Zahlen sind Beispielwerte.</span>\n</div>";
export const Beispiel01 = {
  name: "Arbeitsstand",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
