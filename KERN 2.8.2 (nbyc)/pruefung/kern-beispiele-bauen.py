#!/usr/bin/env python3
"""
KERN 2.8.2 (nbyc) — Prüfstand "KERN-Beispiele" erzeugen (Maßnahme M04)

Liest die offiziellen Beispiele des KERN-Teams aus
  <Projekt>/_ Resources/kern/userdoccomponents/*.examples.html
und schreibt
  pruefung/kern-beispiele.html

Die Seite rendert jedes Beispiel zweimal:
  SOLL  mit dem offiziellen KERN 2.8.2 (_ Resources/kern-ux-native-2.8.2/dist/kern.css)
  IST   mit KERN 2.8.2 (nbyc) (system/kern-neu.css + kern-neu.js)
und misst je Element Lage, Größe und wichtige Stilwerte.

Aufruf:   python3 pruefung/kern-beispiele-bauen.py
Ergebnis: kern-beispiele.html — ERZEUGT, nicht von Hand ändern.
Bricht mit Datei:Zeile ab, wenn ein Beispiel nicht gelesen werden kann
(Guiding §8: Fehler in eigenen Daten sind laut).
"""

import glob
import json
import os
import re
import sys

WURZEL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJEKT = os.path.dirname(WURZEL)


def _projekt_mit(*teile):
    """Ordner über dem System, der die gemeinsamen Eingaben trägt.

    "_ Resources" liegt EINMAL im Projekt (Core Rules §3). Seit Fassung 0.2.0
    liegt das System eine Ebene tiefer, in einem eigenen Ablageordner
    ("KERN 2.8.2a (nbyc)") — deshalb wird aufwärts gesucht statt fest auf den
    Elternordner gezeigt.
    Gefunden wird nichts still: fehlt der Ordner, nennt der Abbruch jeden
    geprüften Pfad (Core Rules §2).
    """
    gesucht, d = [], WURZEL
    for _ in range(4):
        d = os.path.dirname(d)
        if not d or d == os.path.dirname(d):
            break
        kandidat = os.path.join(d, *teile)
        gesucht.append(kandidat)
        if os.path.exists(kandidat):
            return d
    sys.exit("%s: nicht gefunden. Geprüft:\n  %s" % (os.path.join(*teile), "\n  ".join(gesucht)))


PROJEKT = _projekt_mit("_ Resources", "kern", "userdoccomponents")
QUELLE = os.path.join(PROJEKT, "_ Resources", "kern", "userdoccomponents")
STECKBRIEFE = os.path.join(PROJEKT, "_ Resources", "kern", "userdoc")
REFERENZ_CSS = os.path.join(PROJEKT, "_ Resources", "kern-ux-native-2.8.2", "dist", "kern.css")
ZIEL = os.path.join(WURZEL, "pruefung", "kern-beispiele.html")

BEISPIEL = re.compile(r"<!--\s*Example\s+(\d+):\s*(.*?)\s*-->\s*<code\b[^>]*>(.*?)</code\s*>", re.S)
MARKE = re.compile(r"<!--\s*Example")


def zeile(text, pos):
    return text.count("\n", 0, pos) + 1


def lies():
    if not os.path.isdir(QUELLE):
        sys.exit(f"{QUELLE}: Ordner fehlt")
    if not os.path.isfile(REFERENZ_CSS):
        sys.exit(f"{REFERENZ_CSS}: Referenz KERN 2.8.2 fehlt (Maßnahme M03)")
    namen = {}
    for f in glob.glob(os.path.join(STECKBRIEFE, "*.json")):
        try:
            d = json.load(open(f, encoding="utf-8"))
        except ValueError as e:
            sys.exit(f"{f}:{e.lineno}: kein gültiges JSON")
        if "slug" in d:
            namen[d["slug"]] = d.get("displayName", d["slug"])
    gruppen = []
    for f in sorted(glob.glob(os.path.join(QUELLE, "*.examples.html"))):
        text = open(f, encoding="utf-8").read()
        slug = os.path.basename(f).replace(".examples.html", "")
        gefunden = list(BEISPIEL.finditer(text))
        marken = list(MARKE.finditer(text))
        if len(gefunden) != len(marken):
            erste = marken[len(gefunden)] if len(marken) > len(gefunden) else marken[0]
            sys.exit(f"{f}:{zeile(text, erste.start())}: Beispiel ohne lesbaren <code>-Block")
        gruppen.append({
            "slug": slug,
            "name": namen.get(slug, slug),
            "beispiele": [{"nr": int(m.group(1)), "titel": m.group(2), "html": m.group(3).strip()}
                          for m in gefunden],
        })
    return gruppen


def url(pfad):
    rel = os.path.relpath(pfad, os.path.join(WURZEL, "pruefung")).replace(os.sep, "/")
    return rel.replace(" ", "%20")


VORLAGE = """<!DOCTYPE html>
<!-- ERZEUGT von pruefung/kern-beispiele-bauen.py — nicht von Hand ändern. -->
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>KERN-Beispiele: Soll und Ist</title>
<link rel="stylesheet" href="../schrift/fira-sans.css?v=2.8.2-nbyc.54">
<link rel="stylesheet" href="__REFERENZ__">
<style>
  /* Rahmen der Prüfseite: offizielles KERN, nur Anordnung hier. */
  body { margin: 0; }
  .pk-kopf { position: sticky; top: 0; z-index: 2; display: flex; flex-wrap: wrap; align-items: end;
             gap: var(--kern-metric-space-default); padding: var(--kern-metric-space-default);
             background: var(--kern-color-layout-background-default);
             border-bottom: var(--kern-metric-border-width-light) solid var(--kern-color-layout-border); }
  .pk-bahn { padding: var(--kern-metric-space-default); }
  .pk-paar { display: flex; flex-wrap: wrap; align-items: start; inline-size: max-content; max-inline-size: 100%;
             gap: var(--kern-metric-space-default); overflow-x: auto; }
  .pk-paar figure { margin: 0; }
  .pk-paar iframe { display: block; inline-size: var(--pk-breite); block-size: var(--kern-metric-dimension-5x-large);
                    border: var(--kern-metric-border-width-light) solid var(--kern-color-layout-border); }
  /* ?rahmen=0: ohne Rahmen um die Beispielflächen — für die Bilder im Heft (13.10.2026) */
  .pk-ohne-rahmen .pk-paar iframe { border: 0; }
  .pk-ergebnis { margin-block: var(--kern-metric-space-small) var(--kern-metric-space-x-large); }
  .pk-tabelle td, .pk-tabelle th { text-align: start; }
  .pk-messfeld { position: absolute; inset-inline-start: -20000px; inset-block-start: 0; }
</style>
</head>
<body>
<header class="pk-kopf">
  <div>
    <h1 class="kern-heading-small">KERN-Beispiele: Soll: KERN 2.8.2 · Ist: KERN 2.8.2 (nbyc)</h1>
    <p class="kern-body kern-body--small kern-body--muted" id="pk-quelle"></p>
  </div>
  <div class="kern-form-input">
    <label class="kern-label kern-label--small" for="pk-baustein">Baustein</label>
    <div class="kern-form-input__select-wrapper">
      <select class="kern-form-input__select" id="pk-baustein"></select>
    </div>
  </div>
  <div class="kern-form-input">
    <label class="kern-label kern-label--small" for="pk-breite">Breite</label>
    <div class="kern-form-input__select-wrapper">
      <select class="kern-form-input__select" id="pk-breite">
        <option value="375">375 px (klein)</option>
        <option value="768">768 px (ab md)</option>
        <option value="1280">1280 px (breit)</option>
      </select>
    </div>
  </div>
  <div class="kern-form-input">
    <label class="kern-label kern-label--small" for="pk-thema">Thema</label>
    <div class="kern-form-input__select-wrapper">
      <select class="kern-form-input__select" id="pk-thema">
        <option value="light">hell</option>
        <option value="dark">dunkel</option>
      </select>
    </div>
  </div>
  <button type="button" class="kern-btn kern-btn--secondary" id="pk-alle">
    <span class="kern-label">Alle messen</span>
  </button>
</header>

<main class="pk-bahn">
  <p class="kern-body" role="status" id="pk-stand"></p>
  <div id="pk-uebersicht"></div>
  <div id="pk-ansicht"></div>
</main>
<div class="pk-messfeld" id="pk-messfeld" aria-hidden="true"></div>

<script>
var DATEN = __DATEN__;
var SOLL_CSS = "__REFERENZ__";
var IST_CSS = ["../system/kern-neu.css?v=2.8.2-nbyc.54"];
var IST_JS = "../system/kern-neu.js?v=2.8.2-nbyc.54";
var SCHRIFT = "../schrift/fira-sans.css?v=2.8.2-nbyc.54";
var STILE = ["color", "backgroundColor", "fontFamily", "fontSize", "fontWeight", "lineHeight",
  "borderTopWidth", "borderBottomWidth", "borderLeftWidth", "borderTopColor", "borderBottomColor",
  "borderTopLeftRadius", "paddingTop", "paddingLeft", "outlineWidth", "opacity", "textDecorationLine"];

function el(id) { return document.getElementById(id); }

/* Wie im Katalog: KERNs absoluter Bildpfad wird erst beim Rendern aufgelöst,
   auf beiden Seiten gleich (B1). Der Prüfstand liegt in pruefung/, das Bild
   eine Ebene darüber. Das Markup der Beispiele bleibt unverändert. */
function bildPfad(h) {
  return h.replace(/(\ssrc=")\/img\//g, "$1../img/");
}

function dokument(beispiel, seite, thema) {
  var dunkel = thema === "dark";
  var kopf = '<meta charset="utf-8"><link rel="stylesheet" href="' + SCHRIFT + '">';
  if (seite === "soll") {
    kopf += '<link rel="stylesheet" href="' + SOLL_CSS + '">';
  } else {
    IST_CSS.forEach(function (h) { kopf += '<link rel="stylesheet" href="' + h + '">'; });
  }
  // Gleicher Seitenrand auf beiden Seiten, damit nur das System den Unterschied macht.
  kopf += "<style>body{margin:0;padding:16px}</style>";
  var fuss = seite === "ist" ? '<script src="' + IST_JS + '"><\\/script>' : "";
  return '<!DOCTYPE html><html lang="de" data-kern-theme="' + thema + '" data-kn-thema="' +
    (dunkel ? "dunkel" : "hell") + '"><head>' + kopf + "</head><body>" + bildPfad(beispiel.html) + fuss + "</body></html>";
}

function rahmen(beispiel, seite, thema, breite) {
  var f = document.createElement("iframe");
  f.title = (seite === "soll" ? "Soll KERN 2.8.2: " : "Ist KERN 2.8.2 (nbyc): ") + beispiel.titel;
  f.style.setProperty("--pk-breite", breite + "px");
  f.style.inlineSize = breite + "px";
  var bereit = new Promise(function (ja) { f.addEventListener("load", ja, { once: true }); });
  f.srcdoc = dokument(beispiel, seite, thema);
  return { el: f, bereit: bereit };
}

function name(e) {
  var k = (e.getAttribute("class") || "").trim().split(/\\s+/)[0];
  return e.tagName.toLowerCase() + (k ? "." + k : "") + (e.id ? "#" + e.id : "");
}

function elemente(doc) {
  return Array.prototype.filter.call(doc.body.querySelectorAll("*"), function (e) {
    return !/^(SCRIPT|STYLE|LINK|META)$/.test(e.tagName);
  });
}

function anhalten(doc) {
  // Laufende Animationen und Übergänge verfälschen Lage und Farbe (METHODE.txt, 07).
  var st = doc.createElement("style");
  st.setAttribute("data-pk-messung", "");
  st.textContent = "*,*::before,*::after{animation:none!important;transition:none!important}";
  doc.head.appendChild(st);
  doc.body.getBoundingClientRect();
}

function vergleiche(soll, ist) {
  anhalten(soll); anhalten(ist);
  var a = elemente(soll), b = elemente(ist);
  var ra = soll.body.getBoundingClientRect(), rb = ist.body.getBoundingClientRect();
  var ws = soll.defaultView, wi = ist.defaultView;
  var r = { anzahl: a.length, anzahlIst: b.length, maxPx: 0, stil: [], lage: [] };
  var n = Math.min(a.length, b.length);
  for (var i = 0; i < n; i++) {
    var x = a[i].getBoundingClientRect(), y = b[i].getBoundingClientRect();
    var d = Math.max(Math.abs((x.left - ra.left) - (y.left - rb.left)), Math.abs((x.top - ra.top) - (y.top - rb.top)),
      Math.abs(x.width - y.width), Math.abs(x.height - y.height));
    d = Math.round(d * 10) / 10;
    if (d > r.maxPx) r.maxPx = d;
    if (d > 1) r.lage.push({ el: name(a[i]), px: d, soll: Math.round(x.width) + "×" + Math.round(x.height),
                              ist: Math.round(y.width) + "×" + Math.round(y.height) });
    var cs = ws.getComputedStyle(a[i]), ci = wi.getComputedStyle(b[i]);
    STILE.forEach(function (p) {
      if (cs[p] !== ci[p]) r.stil.push({ el: name(a[i]), wert: p, soll: cs[p], ist: ci[p] });
    });
  }
  r.gleich = a.length === b.length && r.maxPx <= 1 && r.stil.length === 0;
  return r;
}

function hoehe(f) {
  try { return f.contentDocument.documentElement.scrollHeight; } catch (e) { return 0; }
}

async function miss(beispiel, thema, breite, ziel) {
  var s = rahmen(beispiel, "soll", thema, breite), i = rahmen(beispiel, "ist", thema, breite);
  var fs = document.createElement("figure"), fi = document.createElement("figure");
  fs.innerHTML = '<figcaption class="kern-label kern-label--small">Soll · KERN 2.8.2</figcaption>';
  fi.innerHTML = '<figcaption class="kern-label kern-label--small">Ist · KERN 2.8.2 (nbyc)</figcaption>';
  fs.appendChild(s.el); fi.appendChild(i.el);
  var paar = document.createElement("div");
  paar.className = "pk-paar";
  paar.style.setProperty("--pk-breite", breite + "px");
  paar.appendChild(fs); paar.appendChild(fi);
  ziel.appendChild(paar);
  await Promise.all([s.bereit, i.bereit]);
  await Promise.all([s.el.contentDocument.fonts.ready, i.el.contentDocument.fonts.ready]);
  var h = Math.max(hoehe(s.el), hoehe(i.el));
  s.el.style.blockSize = i.el.style.blockSize = h + "px";
  var r;
  try { r = vergleiche(s.el.contentDocument, i.el.contentDocument); }
  catch (e) { r = { fehler: "konnte nicht messen: " + e.message }; }
  return { paar: paar, ergebnis: r };
}

function text(r) {
  if (r.fehler) return "KONNTE NICHT PRÜFEN — " + r.fehler;
  if (r.gleich) return "deckungsgleich (" + r.anzahl + " Elemente, max. " + r.maxPx + " px)";
  return "ABWEICHUNG — " + (r.anzahl !== r.anzahlIst ? "Elementzahl " + r.anzahl + "/" + r.anzahlIst + " · " : "") +
    "Lage/Größe max. " + r.maxPx + " px (" + r.lage.length + " Elemente > 1 px) · " + r.stil.length + " Stilwerte anders";
}

function details(r) {
  if (r.fehler || r.gleich) return "";
  var zeilen = r.stil.slice(0, 40).map(function (d) {
    return "<tr><td>" + d.el + "</td><td>" + d.wert + "</td><td>" + d.soll + "</td><td>" + d.ist + "</td></tr>";
  }).join("");
  var lage = r.lage.slice(0, 20).map(function (d) {
    return "<tr><td>" + d.el + "</td><td>Lage/Größe " + d.px + " px</td><td>" + d.soll + "</td><td>" + d.ist + "</td></tr>";
  }).join("");
  return '<details class="kern-details"><summary class="kern-details__header"><span class="kern-title kern-title--small">' +
    "Einzelheiten (höchstens 20 Lage- und 40 Stilbefunde)</span></summary><div class=\\"kern-details__body\\">" +
    '<div class="kern-table-responsive"><table class="kern-table kern-table--small pk-tabelle"><thead class="kern-table__head">' +
    '<tr class="kern-table__row"><th class="kern-table__header" scope="col">Element</th><th class="kern-table__header" scope="col">Wert</th>' +
    '<th class="kern-table__header" scope="col">Soll</th><th class="kern-table__header" scope="col">Ist</th></tr></thead><tbody class="kern-table__body">' +
    (lage + zeilen).replace(/<tr>/g, '<tr class="kern-table__row">').replace(/<td>/g, '<td class="kern-table__cell">') +
    "</tbody></table></div></div></details>";
}

async function zeige() {
  var g = DATEN[el("pk-baustein").value], thema = el("pk-thema").value, breite = +el("pk-breite").value;
  var ziel = el("pk-ansicht");
  ziel.innerHTML = "";
  el("pk-stand").textContent = g.name + ": " + g.beispiele.length + " Beispiele werden gemessen …";
  var gleich = 0;
  for (var b of g.beispiele) {
    var h = document.createElement("h2");
    h.className = "kern-heading-medium";
    h.textContent = g.name + " · Beispiel " + b.nr + ": " + b.titel;
    ziel.appendChild(h);
    var m = await miss(b, thema, breite, ziel);
    var p = document.createElement("div");
    p.className = "pk-ergebnis";
    p.innerHTML = '<p class="kern-body kern-body--bold"></p>' + details(m.ergebnis);
    p.firstChild.textContent = text(m.ergebnis);
    ziel.appendChild(p);
    if (m.ergebnis.gleich) gleich++;
  }
  el("pk-stand").textContent = g.name + ": " + gleich + " von " + g.beispiele.length +
    " Beispielen deckungsgleich (" + breite + " px, " + (thema === "dark" ? "dunkel" : "hell") + ").";
}

async function alle() {
  var thema = el("pk-thema").value, breite = +el("pk-breite").value, feld = el("pk-messfeld");
  var zeilen = [], summe = 0, gleich = 0, fehler = 0;
  el("pk-alle").disabled = true;
  for (var gi = 0; gi < DATEN.length; gi++) {
    var g = DATEN[gi], ok = 0, maxPx = 0, stil = 0, unklar = 0;
    for (var b of g.beispiele) {
      el("pk-stand").textContent = "Alle messen: " + g.name + " · Beispiel " + b.nr + " (" + (summe + 1) + " von " + ANZAHL + ") …";
      var m = await miss(b, thema, breite, feld);
      var r = m.ergebnis;
      m.paar.remove();
      summe++;
      if (r.fehler) { unklar++; fehler++; continue; }
      if (r.gleich) { ok++; gleich++; }
      maxPx = Math.max(maxPx, r.maxPx);
      stil += r.stil.length;
    }
    zeilen.push([g.name, g.beispiele.length, ok, maxPx, stil, unklar, gi]);
  }
  var t = '<h2 class="kern-heading-medium">Ergebnis: ' + gleich + " von " + summe + " Beispielen deckungsgleich" +
    (fehler ? " · " + fehler + " konnten nicht geprüft werden" : "") + "</h2>" +
    '<p class="kern-body kern-body--small kern-body--muted">' + breite + " px · " + (thema === "dark" ? "dunkel" : "hell") + " · " +
    new Date().toLocaleString("de-DE") + " · " + navigator.userAgent + "</p>" +
    '<div class="kern-table-responsive"><table class="kern-table kern-table--small kern-table--striped pk-tabelle">' +
    '<thead class="kern-table__head"><tr class="kern-table__row">' +
    ["Baustein", "Beispiele", "deckungsgleich", "max. px", "Stilwerte anders", "nicht geprüft"].map(function (k, i) {
      return '<th class="kern-table__header' + (i ? " kern-table__header--numeric" : "") + '" scope="col">' + k + "</th>";
    }).join("") + '</tr></thead><tbody class="kern-table__body">' +
    zeilen.map(function (z) {
      return '<tr class="kern-table__row"><td class="kern-table__cell"><a class="kern-link" href="#" data-pk-gruppe="' + z[6] + '">' +
        z[0] + "</a></td>" + z.slice(1, 6).map(function (v) {
          return '<td class="kern-table__cell kern-table__cell--numeric">' + v + "</td>";
        }).join("") + "</tr>";
    }).join("") + "</tbody></table></div>";
  el("pk-uebersicht").innerHTML = t;
  el("pk-stand").textContent = "Fertig: " + gleich + " von " + summe + " Beispielen deckungsgleich.";
  el("pk-alle").disabled = false;
}

var ANZAHL = DATEN.reduce(function (s, g) { return s + g.beispiele.length; }, 0);
el("pk-quelle").textContent = DATEN.length + " Bausteine, " + ANZAHL +
  " Beispiele aus _ Resources/kern/userdoccomponents · der absolute Bildpfad (/img/…) wird beim Rendern auf das mitgelieferte img/ aufgelöst (B1) — auf beiden Seiten gleich.";
DATEN.forEach(function (g, i) {
  var o = document.createElement("option");
  o.value = i; o.textContent = g.name + " (" + g.beispiele.length + ")";
  el("pk-baustein").appendChild(o);
});
// Startwerte aus der Adresse, z. B. ?baustein=button&breite=768&thema=dark
var START = new URLSearchParams(location.search);
if (START.has("baustein")) {
  var gi = DATEN.findIndex(function (g) { return g.slug === START.get("baustein"); });
  if (gi >= 0) el("pk-baustein").value = gi;
}
if (START.has("breite")) el("pk-breite").value = START.get("breite");
if (START.has("thema")) el("pk-thema").value = START.get("thema");
if (START.get("rahmen") === "0") document.documentElement.classList.add("pk-ohne-rahmen");
// ?auto=light|dark: alle Beispiele messen und das Ergebnis in window.PK_FERTIG ablegen —
// für Läufe in anderen Engines (pruefung/webkit-pruefen.swift), Stufe 7c
if (START.has("auto")) {
  el("pk-thema").value = START.get("auto") === "dark" ? "dark" : "light";
  window.addEventListener("load", function () {
    alle().then(function () {
      window.PK_FERTIG = { thema: el("pk-thema").value, stand: el("pk-stand").textContent, agent: navigator.userAgent };
      // ?melden=1: Ergebnis als Anfrage an den Prüfserver (erscheint in dessen Protokoll) — für Firefox ohne Fenster
      if (START.get("melden") === "1") fetch("/_ergebnis?pruefstand=" + encodeURIComponent(window.PK_FERTIG.thema + " " + window.PK_FERTIG.stand + " " + navigator.userAgent), { cache: "no-store" }).catch(function () {});
    });
  });
}
["pk-baustein", "pk-breite", "pk-thema"].forEach(function (id) { el(id).addEventListener("change", zeige); });
el("pk-alle").addEventListener("click", alle);
el("pk-uebersicht").addEventListener("click", function (e) {
  var a = e.target.closest("[data-pk-gruppe]");
  if (!a) return;
  e.preventDefault();
  el("pk-baustein").value = a.getAttribute("data-pk-gruppe");
  zeige();
  el("pk-baustein").focus();
});
zeige();
</script>
</body>
</html>
"""


def main():
    gruppen = lies()
    daten = json.dumps(gruppen, ensure_ascii=False).replace("</", "<\\/")
    html = VORLAGE.replace("__DATEN__", daten).replace("__REFERENZ__", url(REFERENZ_CSS))
    with open(ZIEL, "w", encoding="utf-8") as f:
        f.write(html)
    n = sum(len(g["beispiele"]) for g in gruppen)
    print(f"{os.path.relpath(ZIEL, WURZEL)}: {len(gruppen)} Bausteine, {n} Beispiele")


if __name__ == "__main__":
    main()
