/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Eingabe/Zeichenzähler",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "zaehler", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Sagt, wie viel Platz noch bleibt.\n\n**Wann nehmen**\n\n- Bei Freitextfeldern mit harter Grenze — Begründungen, Vermerke, Bemerkungen.\n- Nur, wenn die Grenze eine echte ist. Erfundene Grenzen ärgern nur.\n\n**Wann nicht**\n\n- Bei Feldern ohne Begrenzung.\n- Nicht als einziges Zeichen dafür, dass zu viel eingegeben wurde — es braucht auch eine Fehlermeldung beim Absenden.\n\n**Barrierefreiheit**\n\n- Der Zähler wird erst ab 20 verbleibenden Zeichen angesagt und erst, wenn das Tippen kurz ruht (zentrale Ansage, M61). Sonst redet der Screenreader bei jedem Tastendruck.\n- aria-describedby verbindet Feld und Zähler.\n- maxlength am Feld ist die Wahrheit — der Zähler liest sie nur ab.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tippen | zählt mit | ab 20 Zeichen Rest „Noch n Zeichen“, nach kurzer Pause |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-char-count` | die Anzeige |\n| `data-kn-char-count` | verdrahtet das Feld |\n| `data-kn-char-count-target` | id der Anzeige |\n| `data-kn-near-limit` | wird ab 20 Rest gesetzt |\n| `data-kn-over-limit` | wird bei Überschreitung gesetzt |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-char-count` | Zeichenzähler | Character Count |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Character count\n\nSays how much space is left.\n\n**When to use**\n\n- For free-text fields with a hard limit — reasons, notes, remarks.\n- Only if the limit is real. Invented limits only annoy.\n\n**When not to use**\n\n- For fields without a limit.\n- Not as the only sign that too much was entered — an error message on submit is needed as well.\n\n**Accessibility**\n\n- The counter is announced only from 20 remaining characters and only once typing pauses briefly (central announcement, M61). Otherwise the screen reader talks on every keystroke.\n- aria-describedby connects field and counter.\n- maxlength on the field is the truth — the counter only reads it.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Typing | counts along | from 20 characters left “n characters left”, after a short pause |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-char-count` | the display |\n| `data-kn-char-count` | wires up the field |\n| `data-kn-char-count-target` | id of the display |\n| `data-kn-near-limit` | set from 20 left |\n| `data-kn-over-limit` | set when exceeded |\n" } }
  }
};

const html01 = "<div class=\"kern-form-input\">\n  <label class=\"kern-label\" for=\"za-1\">Vermerk zur Entscheidung</label>\n  <textarea class=\"kern-form-input__input\" id=\"za-1\" rows=\"3\" maxlength=\"120\"\n            data-kn-char-count data-kn-char-count-target=\"za-1-stand\"\n            aria-describedby=\"za-1-stand\"></textarea>\n  <p class=\"kn-char-count\" id=\"za-1-stand\"></p>\n</div>";
export const Beispiel01 = {
  name: "Vermerk mit Grenze",
  render: () => html01,
  parameters: { docs: { source: { code: html01 }, description: { story: "Tippen Sie — der Zähler unten rechnet mit. Ab 20 Zeichen Rest wird er auch angesagt.\n\nType — the counter below keeps count. From 20 characters left it is also announced." } } }
};
