/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Rückmeldung/KI-Kennzeichnung",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "ki-kennzeichnung", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Macht erkennbar, dass ein Inhalt mit KI erzeugt oder unterstützt wurde — mit einer Erklärung auf Klick.\n\n**Wann nehmen**\n\n- An jedem Text, Vorschlag oder Bild, das ganz oder teilweise von einem KI-System stammt.\n- Bei Entscheidungsvorschlägen in der Fallbearbeitung: wer hat vorgeschlagen, wer entscheidet.\n\n**Wann nicht**\n\n- Nicht als Haftungsausschluss in Kleindruck — die Kennzeichnung steht direkt am Inhalt.\n- Nicht für reine Rechtschreibhilfe ohne inhaltliche Wirkung.\n\n**Barrierefreiheit**\n\n- Die Kennzeichnung ist Text („KI-gestützt“), nicht nur ein Symbol oder eine Farbe.\n- Die Erklärung kommt über den Hinweis auf Klick und wird angesagt.\n- Inhaltlich: wer erstellt hat (KI) und wer entscheidet (Mensch) — in einfacher Sprache.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Enter, Leertaste am Info-Knopf | zeigt die Erklärung | der Text |\n| Esc | blendet sie aus |  |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-ai-label` | Hülle: Marke + Hinweis auf Klick |\n| `kern-badge--info` | die Marke (KERN) |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-ai-label` | KI-Kennzeichnung | AI Label |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — AI label\n\nMakes it recognisable that content was generated or supported by AI — with an explanation on click.\n\n**When to use**\n\n- On every text, proposal or image that comes wholly or partly from an AI system.\n- For decision proposals in case management: who proposed, who decides.\n\n**When not to use**\n\n- Not as a disclaimer in small print — the label sits right at the content.\n- Not for mere spelling help without an effect on content.\n\n**Accessibility**\n\n- The label is text (“AI-assisted”), not just an icon or a colour.\n- The explanation comes via the toggletip and is announced.\n- In content: who created it (AI) and who decides (a person) — in plain language.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Enter, Space on the info button | shows the explanation | the text |\n| Esc | hides it |  |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-ai-label` | Wrapper: badge + toggletip |\n| `kern-badge--info` | the badge (KERN) |\n" } }
  }
};

const html01 = "<p class=\"kern-body\"><span class=\"kn-ai-label\">\n  <span class=\"kern-badge kern-badge--info\"><span class=\"kern-label\">KI-gestützt</span></span>\n  <span class=\"kn-toggletip\">\n    <button class=\"kern-btn kern-btn--tertiary kern-btn--small\" type=\"button\" data-kn-toggletip=\"Dieser Vorschlag wurde von einem KI-System aus den Nachweisen erstellt. Die Entscheidung trifft die Sachbearbeitung.\">\n      <span class=\"kern-icon kern-icon--info\" aria-hidden=\"true\"></span><span class=\"kern-sr-only\">Was heißt KI-gestützt?</span></button>\n    <span class=\"kn-toggletip__bubble\"></span>\n  </span>\n</span></p>\n<p class=\"kern-body\">Empfehlung: Freistellung bis 31.03.2028.</p>";
export const Beispiel01 = {
  name: "Vorschlag mit Kennzeichnung",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
