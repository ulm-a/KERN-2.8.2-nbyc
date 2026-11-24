/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Eingabe/Zahlenfeld",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "zahlfeld", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Zahl eingeben, mit Knöpfen zum Schrittweisen.\n\n**Wann nehmen**\n\n- Für kleine, überschaubare Mengen: Anzahl Kinder, Anzahl Raten.\n- Wenn plausible Werte nah beieinander liegen.\n\n**Wann nicht**\n\n- Für Beträge und Jahreszahlen. Wer 24 000 Euro eintippen will, klickt sich nicht dorthin — dafür ein normales Feld.\n- Für Aktenzeichen. Das ist keine Zahl, sondern eine Kennung.\n\n**Barrierefreiheit**\n\n- Beide Knöpfe brauchen aria-label — „+“ und „−“ allein sind für einen Screenreader stumm.\n- min und max gehören ans Feld, nicht nur in die Prüfung.\n- Das Feld muss auch ohne die Knöpfe zu tippen sein.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab | −, Feld, + der Reihe nach |  |\n| Enter, Leertaste auf − / + | ein Schritt; an der Grenze gesperrt | „Anzahl der Kinder: 3“ |\n| ↑ / ↓ im Feld | ein Schritt (nativ) | neuer Wert |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-number-stepper` | Feld mit zwei Knöpfen |\n| `kn-number-stepper__button` | mehr oder weniger |\n| `kern-form-input__input` | das Zahlenfeld nach KERN (Ziffern gleich breit: KERN seitenweit) |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-number-stepper` | Zahlenfeld mit Knöpfen | Number Stepper |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Number stepper\n\nEnter a number, with buttons to step it.\n\n**When to use**\n\n- For small, manageable quantities: number of children, number of instalments.\n- When plausible values are close together.\n\n**When not to use**\n\n- For amounts and years. Nobody who wants to type 24,000 euros clicks their way there — use a normal field.\n- For file numbers. That is not a number but an identifier.\n\n**Accessibility**\n\n- Both buttons need an aria-label — “+” and “−” alone are silent for a screen reader.\n- min and max belong on the field, not only in the validation.\n- The field must also be typeable without the buttons.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab | −, field, + in order |  |\n| Enter, Space on − / + | one step; disabled at the limit | “Number of children: 3” |\n| ↑ / ↓ in the field | one step (native) | new value |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-number-stepper` | Field with two buttons |\n| `kn-number-stepper__button` | more or less |\n| `kern-form-input__input` | the number field as in KERN (tabular figures: KERN page-wide) |\n" } }
  }
};

const html01 = "<div class=\"kern-form-input\" style=\"max-inline-size:16rem\">\n  <label class=\"kern-label\" for=\"zf-1\">Anzahl der Kinder</label>\n  <p class=\"kern-hint\" id=\"zf-1-hinweis\">Nur Kinder, für die Freibetrag geltend gemacht wird.</p>\n  <div class=\"kn-number-stepper\">\n    <button class=\"kn-number-stepper__button\" type=\"button\" aria-label=\"Weniger\">−</button>\n    <input class=\"kern-form-input__input\" id=\"zf-1\" type=\"number\"\n           value=\"2\" min=\"0\" max=\"12\" aria-describedby=\"zf-1-hinweis\">\n    <button class=\"kn-number-stepper__button\" type=\"button\" aria-label=\"Mehr\">+</button>\n  </div>\n</div>";
export const Beispiel01 = {
  name: "Anzahl der Kinder",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};
