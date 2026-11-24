/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Eingabe/Schieberegler",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "regler", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Wählt einen Wert aus einem Bereich, wenn die ungefähre Lage wichtiger ist als die genaue Zahl.\n\n**Wann nehmen**\n\n- Zeit, Menge, Anteil — wenn man den Bereich sehen soll.\n\n**Wann nicht**\n\n- Wenn ein genauer Wert nötig ist. Dann ein Zahlenfeld.\n- Nie ohne die Zahl daneben.\n\n**Barrierefreiheit**\n\n- Natives &lt;input type=range&gt;: Pfeiltasten, Pos1, Ende und Bild auf/ab funktionieren ohne Zutun.\n- Der Wert steht als Zahl daneben und wird über &lt;output&gt; verbunden.\n- Griff 32 Pixel (wie KERNs Optionsfeld), Bedienfläche so hoch wie KERNs Felder (48, in der kompakten Dichte 40).\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| ← → ↑ ↓ | ein Schritt (nativ) | neuer Wert |\n| Bild↑ / Bild↓ | großer Schritt (nativ) | neuer Wert |\n| Pos1 / Ende | Anfang / Ende (nativ) | neuer Wert |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-slider` | das native Feld |\n| `kn-slider__header` | Beschriftung und Wert |\n| `kn-slider__value` | die Zahl |\n| `kn-slider__ends` | Anfang und Ende |\n| `data-kn-value-target` | Kennung des Ausgabefelds |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-slider` | Schieberegler | Slider |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Slider\n\nSelects a value from a range when the approximate position matters more than the exact number.\n\n**When to use**\n\n- Time, quantity, share — when the range should be visible.\n\n**When not to use**\n\n- When an exact value is needed. Use a number field.\n- Never without the number next to it.\n\n**Accessibility**\n\n- Native &lt;input type=range&gt;: arrow keys, Home, End and Page Up/Down work without extra effort.\n- The value is shown as a number next to it and connected via &lt;output&gt;.\n- Thumb 32 pixels (like KERN’s radio button), target area as tall as KERN’s fields (48, 40 in compact density).\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| ← → ↑ ↓ | one step (native) | new value |\n| Page Up / Page Down | large step (native) | new value |\n| Home / End | start / end (native) | new value |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-slider` | the native field |\n| `kn-slider__header` | Label and value |\n| `kn-slider__value` | the number |\n| `kn-slider__ends` | Start and end |\n| `data-kn-value-target` | ID of the output field |\n" } }
  }
};

const html01 = "<div class=\"kern-form-input\">\n  <div class=\"kn-slider__header\">\n    <label class=\"kern-label\" for=\"r-zeit\">Zeit für den Arbeitsvorrat heute</label>\n    <output class=\"kn-slider__value\" id=\"r-zeit-wert\" for=\"r-zeit\"></output>\n  </div>\n  <input class=\"kn-slider\" id=\"r-zeit\" type=\"range\" min=\"30\" max=\"480\" step=\"30\" value=\"150\"\n         data-kn-value-target=\"r-zeit-wert\" data-kn-unit=\"Minuten\">\n  <div class=\"kn-slider__ends\"><span>30 min</span><span>8 h</span></div>\n</div>\n<div class=\"kern-form-input\">\n  <label class=\"kern-label\" for=\"r-aus\">Gesperrt</label>\n  <input class=\"kn-slider\" id=\"r-aus\" type=\"range\" min=\"0\" max=\"100\" value=\"40\" aria-disabled=\"true\">\n</div>";
export const Beispiel01 = {
  name: "Mit Wertanzeige",
  render: () => html01,
  parameters: { docs: { source: { code: html01 }, description: { story: "Pfeiltasten ändern den Wert in Schritten, Pos1/Ende springen an die Enden. Griff wie KERNs Optionsfeld (32 px), Spur 4 px — nur KERN-Tokens.\n\nArrow keys change the value step by step, Home/End jump to the ends. Thumb like KERN’s radio button (32 px), track 4 px — KERN tokens only." } } }
};
