/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Navigation/Sprungmarke",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "sprungmarke", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Lässt Tastaturnutzende die Navigation überspringen.\n\n**Wann nehmen**\n\n- Auf jeder Seite. Als allererstes Element im &lt;body&gt;.\n\n**Wann nicht**\n\n- Niemals weglassen. Ohne sie muss sich jemand, der mit der Tastatur arbeitet, auf jeder Seite erneut durch die ganze Navigation drücken.\n\n**Barrierefreiheit**\n\n- Sie muss das ERSTE fokussierbare Element der Seite sein.\n- Sie darf nicht dauerhaft versteckt werden (kein display:none) — sonst ist sie für die Tastatur nicht erreichbar. KERN 2.8.2 (nbyc) schiebt sie mit transform aus dem Bild.\n- Ihr Farbpaar hängt bewusst NICHT am Fokus-Hilfsring: der ist im Dunkelmodus schwarz. Der Fehler stand bis zum 12.08.2026 im System und ergab 1,31 zu 1.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab (als Erstes auf der Seite) | zeigt die Sprungmarke |  |\n| Enter | springt zum Inhalt |  |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-skip-link` | der Verweis |\n| `href` | zeigt auf die id des Hauptbereichs |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-skip-link` | Sprungmarke | Skip Link |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Skip link\n\nLets keyboard users skip the navigation.\n\n**When to use**\n\n- On every page. As the very first element in &lt;body&gt;.\n\n**When not to use**\n\n- Never leave it out. Without it, anyone working with the keyboard has to tab through the whole navigation again on every page.\n\n**Accessibility**\n\n- It must be the FIRST focusable element of the page.\n- It must not be hidden permanently (no display:none) — otherwise the keyboard cannot reach it. KERN 2.8.2 (nbyc) moves it out of view with transform.\n- Its colour pair deliberately does NOT depend on the focus helper ring: that is black in dark mode. The error was in the system until 12.08.2026 and gave 1.31 to 1.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab (first thing on the page) | shows the skip link |  |\n| Enter | jumps to the content |  |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-skip-link` | the link |\n| `href` | points to the id of the main area |\n" } }
  }
};

const html01 = "<div style=\"position:relative;min-block-size:6rem\">\n  <a class=\"kn-skip-link\" href=\"#kat-inhalt\">Zum Inhalt springen</a>\n  <p class=\"kern-body kern-body--muted\">Mit dem Tabulator in dieses Beispiel springen — die Marke fährt oben ein.</p>\n</div>";
export const Beispiel01 = {
  name: "Sprungmarke",
  render: () => html01,
  parameters: { docs: { source: { code: html01 }, description: { story: "Sie ist sichtbar erst beim Tastaturfokus. Mit der Tabulatortaste hierher springen — dann erscheint sie oben links.\n\nIt becomes visible only with keyboard focus. Tab to it — then it appears at the top left." } } }
};
