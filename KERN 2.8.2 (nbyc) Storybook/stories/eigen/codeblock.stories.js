/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Daten/Codeblock",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "codeblock", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Zeigt Quelltext oder Kennungen zum Abschreiben — mit Kopieren-Knopf.\n\n**Wann nehmen**\n\n- Für Einbindungs-Code, Konfiguration, lange Kennungen.\n\n**Wann nicht**\n\n- Nicht für Fließtext — Code im Satz ist kn-code.\n\n**Barrierefreiheit**\n\n- Der Knopf trägt Text („Kopieren“), nicht nur ein Symbol.\n- Die Bestätigung kommt als flüchtige Meldung (role=status).\n- Breiter Code scrollt waagerecht im Block, nicht die Seite (WCAG 1.4.10).\n- Der Block ist deshalb per Tastatur erreichbar (tabindex=0, role=region mit Namen) — sonst ließe er sich in Firefox und Safari nicht rollen (WCAG 2.1.1).\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab | erst der Code (rollt mit ← →), dann „Kopieren“ |  |\n| Enter auf „Kopieren“ | kopiert | „In die Zwischenablage kopiert.“ |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-code-block` | Hülle |\n| `kn-code-block__copy` | Kopieren-Knopf |\n| `data-kn-copy` | id des Elements, dessen Text kopiert wird |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-code-block` | Codeblock | Code Block |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Code block\n\nShows source code or identifiers for copying — with a copy button.\n\n**When to use**\n\n- For embed code, configuration, long identifiers.\n\n**When not to use**\n\n- Not for running text — code within a sentence is kn-code.\n\n**Accessibility**\n\n- The button carries text (“Copy”), not just an icon.\n- The confirmation comes as a toast (role=status).\n- Wide code scrolls horizontally inside the block, not the page (WCAG 1.4.10).\n- The block is therefore reachable by keyboard (tabindex=0, role=region with a name) — otherwise it could not be scrolled in Firefox and Safari (WCAG 2.1.1).\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab | first the code (scrolls with ← →), then “Copy” |  |\n| Enter on “Copy” | copies | “Copied to the clipboard.” |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-code-block` | Wrapper |\n| `kn-code-block__copy` | Copy button |\n| `data-kn-copy` | id of the element whose text is copied |\n" } }
  }
};

const html01 = "<div class=\"kn-code-block\">\n  <pre id=\"cb-1\" tabindex=\"0\" role=\"region\" aria-label=\"Code: Einbindung\">&lt;link rel=\"stylesheet\" href=\"system/kern-neu.css\"&gt;</pre>\n  <button class=\"kern-btn kern-btn--tertiary kern-btn--small kn-code-block__copy\" type=\"button\" data-kn-copy=\"cb-1\">\n    <span class=\"kern-icon kern-icon--content-copy\" aria-hidden=\"true\"></span><span class=\"kern-label\">Kopieren</span></button>\n</div>";
export const Beispiel01 = {
  name: "Einbindung kopieren",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
