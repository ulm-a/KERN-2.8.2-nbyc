/* KERN 2.8.2 (nbyc) — Storybook-Vorschau (E12, M102).
   "nbyc" = "New by Claude"; interne Adaption von KERN 2.8.2, nicht das offizielle KERN.

   Reines ES-Modul ohne Storybook-Import — so prüft es auch
   pruefung/stories-pruefen.html ohne Node (dieselben Dekoratoren, dieselbe Bühne).
   kern-neu.css und kern-neu.js lädt preview-head.html (staticDirs: /kern). */

/* Werkzeugleiste: dieselben Modi wie Katalog und Seiten (data-kern-theme, data-kn-contrast)
   und die Sprache, nach der kern-neu.js seine Systemtexte wählt (lang des Vorfahren, E10). */
export const globalTypes = {
  kernTheme: {
    description: "Modus / Theme",
    toolbar: { title: "Modus", icon: "mirror", dynamicTitle: true, items: [
      { value: "system", title: "System" }, { value: "light", title: "hell / light" }, { value: "dark", title: "dunkel / dark" }] }
  },
  kernKontrast: {
    description: "Kontrast / Contrast",
    toolbar: { title: "Kontrast", icon: "contrast", dynamicTitle: true, items: [
      { value: "system", title: "System" }, { value: "normal", title: "normal" }, { value: "high", title: "erhöht / high" }] }
  },
  kernSprache: {
    description: "Sprache der Systemtexte / Language of system texts",
    toolbar: { title: "Sprache", icon: "globe", dynamicTitle: true, items: [
      { value: "de", title: "Deutsch" }, { value: "en", title: "English" }] }
  }
};

export const initialGlobals = { kernTheme: "system", kernKontrast: "system", kernSprache: "de" };

function setzeAttribut(name, wert) {
  if (!wert || wert === "system") document.documentElement.removeAttribute(name);
  else document.documentElement.setAttribute(name, wert);
}

/* KERNs Beispiele verweisen auf "/img/kern-img-media.png" — einen absoluten Pfad,
   der nur von einer Serverwurzel aus auflöst. Hier liegt der Systemordner aber unter
   "kern/" (staticDirs) bzw. daneben (Prüfseite), darum blieben neun Bilder der
   Card-Beispiele leer (gemessen 25.11.2026: naturalWidth 0). Der Katalog löst das
   seit Befund B1 des Assessments vom 16.11.2026 mit "bildPfad"; hier dieselbe Lehre:
   Das MARKUP bleibt KERNs Original (E6, Instruktion §8) — aufgelöst wird erst beim
   Rendern, und der angezeigte Quelltext kommt ohnehin aus der Story, nicht aus dem DOM.
   Die Wurzel kommt aus der eingebundenen Stildatei, nicht aus einem festen Pfad: so
   trägt sie Storybook, den statischen Bau und die Prüfseite gleichermaßen. */
function systemWurzel() {
  const l = document.querySelector('link[rel="stylesheet"][href*="kern-neu.css"]');
  return l ? l.href.replace(/system\/kern-neu\.css(\?.*)?$/, "") : "";
}

/* Am TEXT, nicht am fertigen Element: ein <img> aus innerHTML lädt schon beim
   Zerlegen, also noch bevor eine Korrektur am DOM liefe — die 404-Anfrage wäre
   trotz richtigem Bild jedes Mal im Protokoll. Darum derselbe Weg wie im Katalog. */
export function bildPfad(markup) {
  const wurzel = systemWurzel();
  return wurzel ? markup.replace(/(\ssrc=")\/img\//g, "$1" + wurzel + "img/") : markup;
}

/* Für Stories, die ein fertiges Element liefern statt Text. */
export function bildPfadeAufloesen(flaeche) {
  const wurzel = systemWurzel();
  if (!wurzel) return;
  flaeche.querySelectorAll('img[src^="/img/"]').forEach((bild) => {
    bild.setAttribute("src", wurzel + bild.getAttribute("src").slice(1));
  });
}

/* Bühne wie im Katalog: Story-Markup in eine eigene Fläche, danach KN.start(fläche) —
   erst wenn sie im Dokument hängt (Storybook hängt das Ergebnis nach dem Dekorator ein). */
export function kernBuehne(story, context) {
  const g = (context && context.globals) || {};
  setzeAttribut("data-kern-theme", g.kernTheme);
  setzeAttribut("data-kn-contrast", g.kernKontrast);
  const buehne = document.createElement("div");
  buehne.className = "kn-sb-buehne";
  buehne.lang = g.kernSprache || "de";
  const inhalt = story();
  if (typeof inhalt === "string") buehne.innerHTML = bildPfad(inhalt);
  else if (inhalt) { buehne.appendChild(inhalt); bildPfadeAufloesen(buehne); }
  /* setTimeout statt requestAnimationFrame: läuft auch in verdeckten Fenstern (Prüfseite, Docs im Hintergrund) */
  let versuche = 0;
  const verdrahte = () => {
    if (!buehne.isConnected) { if (++versuche < 200) setTimeout(verdrahte, 10); return; }
    if (window.KN) window.KN.start(buehne);
    else console.error("KERN 2.8.2 (nbyc): kern-neu.js nicht geladen — preview-head.html und staticDirs prüfen.");
  };
  setTimeout(verdrahte, 0);
  return buehne;
}

export const decorators = [kernBuehne];

export const parameters = {
  layout: "padded",
  controls: { disable: true },
  docs: { source: { language: "html" } },   /* Quelltext je Story: Katalog-Markup wörtlich (stories-bauen.py) */
  options: { storySort: { order: ["Einführung", "KERN-Bausteine", "Erweiterungen (kn-)"] } }
};
