/* ERZEUGT von "KERN 2.8.2 (nbyc) Storybook/werkzeug/stories-bauen.py" aus dem Katalog
   KERN 2.8.2 (nbyc) — Fassung 0.2.0 (16.11.2026)
   (KERN 2.8.2 (nbyc)/katalog) — nicht von Hand ändern (E12).
   KERN 2.8.2 (nbyc) — interne Adaption von KERN 2.8.2, nicht das offizielle KERN;
   "nbyc" = "New by Claude". */

export default {
  title: "Erweiterungen (kn-)/Rückmeldung/Seitenbanner",
  tags: ["autodocs"],
  parameters: {
    kern: {"id": "banner", "herkunft": "Erweiterung (aus KERN-Tokens)", "quelle": "", "ids_in_mehreren_beispielen": []},
    docs: { description: { component: "Eine Nachricht, die die ganze Seite betrifft — oben, vor dem Inhalt.\n\n**Wann nehmen**\n\n- Nach einer abgeschlossenen Handlung, wenn die Seite danach wechselt: „Antrag gespeichert“ auf der Übersicht.\n- Für eine zeitlich begrenzte Information, die alle Nutzenden der Seite betrifft (Wartung, Fristende).\n\n**Wann nicht**\n\n- Für eine Meldung zu einem Abschnitt oder Feld — dafür kern-alert dort, wo es hingehört.\n- Für Fehler im Formular — dafür die Fehlerzusammenfassung.\n- Mehr als eines je Seite.\n\n**Barrierefreiheit**\n\n- role=\"region\" mit aria-labelledby auf den Kopf: das Banner ist ein Orientierungspunkt und hat einen Namen.\n- Die Art steht im Kopf als Wort (Wichtig, Erfolgreich, Fehler) — die Farbe allein sagt nichts.\n- Erfolg nach Seitenwechsel: Fokus auf das Banner (tabindex=\"-1\"), nicht role=\"alert\" — der Fokus reicht und unterbricht nichts.\n\n**Tastaturvertrag**\n\n| Taste | Wirkung | Ansage |\n|---|---|---|\n| Tab | erreicht den Verweis im Banner |  |\n| Enter | folgt dem Verweis |  |\n\n**Klassen**\n\n| Klasse | Bedeutung |\n|---|---|\n| `kn-banner` | Rahmen in der Farbe der Art |\n| `kn-banner__header` | Kopf als Überschrift, auf getönter Fläche |\n| `kn-banner__body` | Inhalt |\n| `kn-banner--success, --danger` | Art; ohne Zusatz: Information |\n\n**Bezeichnungen / Names**\n\n| Code | Deutsch | English |\n|---|---|---|\n| `kn-banner` | Seitenbanner | Banner |\n\nHerkunft / Origin: Erweiterung (aus KERN-Tokens)\n\n---\n\n### English — Page banner\n\nA message that concerns the whole page — at the top, before the content.\n\n**When to use**\n\n- After a completed action when the page changes afterwards: “Application saved” on the overview.\n- For time-limited information that concerns all users of the page (maintenance, end of a deadline).\n\n**When not to use**\n\n- For a message about a section or field — use kern-alert where it belongs.\n- For form errors — use the error summary.\n- More than one per page.\n\n**Accessibility**\n\n- role=\"region\" with aria-labelledby pointing to the header: the banner is a landmark and has a name.\n- The type is stated as a word in the header (Important, Success, Error) — colour alone says nothing.\n- Success after a page change: focus on the banner (tabindex=\"-1\"), not role=\"alert\" — focus is enough and interrupts nothing.\n\n**Keyboard contract**\n\n| Key | Effect | Announcement |\n|---|---|---|\n| Tab | reaches the link in the banner |  |\n| Enter | follows the link |  |\n\n**Classes**\n\n| Class | Meaning |\n|---|---|\n| `kn-banner` | Frame in the colour of the type |\n| `kn-banner__header` | Header as heading, on the tinted surface |\n| `kn-banner__body` | Content |\n| `kn-banner--success, --danger` | Type; without modifier: information |\n" } }
  }
};

const html01 = "<div class=\"kn-banner\" role=\"region\" aria-labelledby=\"bn-1\">\n  <h2 class=\"kn-banner__header\" id=\"bn-1\">Wichtig</h2>\n  <div class=\"kn-banner__body\">\n    <p class=\"kern-body\">Am 30.10.2026 ist das Bürgerpostfach von 18 bis 20 Uhr nicht erreichbar.</p>\n  </div>\n</div>";
export const Beispiel01 = {
  name: "Information",
  render: () => html01,
  parameters: { docs: { source: { code: html01 } } }
};

const html02 = "<div class=\"kn-banner kn-banner--success\" role=\"region\" aria-labelledby=\"bn-2\" tabindex=\"-1\">\n  <h2 class=\"kn-banner__header\" id=\"bn-2\">Erfolgreich</h2>\n  <div class=\"kn-banner__body\">\n    <p class=\"kern-body\">Der Antrag 2026-BAF-10482 ist gespeichert. <a class=\"kern-link\" href=\"#\">Zum Vorgang</a></p>\n  </div>\n</div>";
export const Beispiel02 = {
  name: "Erfolg nach einer Handlung",
  render: () => html02,
  parameters: { docs: { source: { code: html02 }, description: { story: "Nach dem Seitenwechsel bekommt das Banner den Fokus (tabindex=\"-1\"), damit der Screenreader es zuerst liest.\n\nAfter the page change the banner receives focus (tabindex=\"-1\") so that the screen reader reads it first." } } }
};
