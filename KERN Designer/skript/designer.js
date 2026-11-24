/* KERN Designer — Oberfläche und Logik.
   Quellen: token.json (KERN-Werte), katalog/begriffe.json (Namen der Bausteine de/en),
   daten/verwendung.js (Baustein ↔ Token), daten/regeln.js (Prüfpaare, Freigabe),
   texte/<sprache>.js, /api/zustand (gespeichertes Thema + Entwurf).

   Begriffe im Code:
     stand   = alle Abweichungen von KERN, die gerade gelten (Entwurf), je Modus
     thema   = die letzte Fassung ("Neue Version"; ebenfalls Abweichungen von KERN)
     zwischen = der letzte Zwischenstand ("Werte speichern"; Fassung bleibt)
     "ungespeichert" = stand ≠ zwischen · "seit Fassung" = stand ≠ thema · "Abweichung" = stand ≠ KERN
   Ablauf einer Änderung: Eingabe → POST /api/entwurf → Server schreibt entwurf.css und
   meldet "entwurf" an alle Fenster → OnePager und Messrahmen übernehmen → Messung. */
(function () {
  "use strict";

  /* ---------------- Grundlagen ---------------- */
  const SYSTEM = "../KERN%202.8.2%20(nbyc)/";
  const VERZOEGERUNG = 60;                     // LIVE_VERZOEGERUNG (Instruktion, Abschnitt 0)
  const SCHICHTEN = ["primitiv", "semantik", "kontextuell", "komponente"];
  const GRUPPEN = ["farbe", "mass", "raum", "form", "schrift", "schatten", "sonstiges"];
  const STUFEN = ["atom", "molekuel", "organismus", "layout"];
  const MODI_ZUSATZ = ["ab-md", "ebene-0", "ebene-1", "ebene-2"];
  const SPRACHEN = [["de", "Deutsch"], ["en", "English"], ["fr", "Français"], ["es", "Español"], ["it", "Italiano"], ["uk", "Українська"]];
  const F = window.KD_FARBE;
  /* Kurzbefehle (D19): EINE Liste für die Anzeige in den Einstellungen. "mod" = ⌘ bzw. Strg,
     "alt" = ⌥ bzw. Alt; mehrere Tastenfolgen = gleichwertige Wege. wo: Text "wo es gilt". */
  const KURZBEFEHLE = [
    ["kurz_g_speichern", [
      [[["mod", "S"]], "kurz_speichern"],
      [[["mod", "Z"]], "kurz_rueck", "kurz_wo_nicht_tippen"],
      [[["mod", "⇧", "Z"]], "kurz_vor", "kurz_wo_nicht_tippen"]]],
    ["kurz_g_suchen", [
      [[["/"]], "kurz_suche", "kurz_wo_nicht_tippen"],
      [[["Esc"]], "kurz_suche_leeren", "kurz_wo_suchfeld"]]],
    ["kurz_g_bedienen", [
      [[["?"]], "kurz_hilfe", "kurz_wo_nicht_tippen"],
      [[["Tab"], ["⇧", "Tab"]], "kurz_tab"],
      [[["↩"], ["leer"]], "kurz_ausloesen"],
      [[["←"], ["→"]], "kurz_segmente"],
      [[["←"], ["→"], ["↑"], ["↓"]], "kurz_regler"],
      [[["Esc"]], "kurz_dialog"]]],
    ["kurz_g_onepager", [
      [[["alt", "I"]], "kurz_inspektor"],
      [[["alt"]], "kurz_insp_alt", "kurz_wo_insp_alt"],
      [[["Esc"]], "kurz_insp_zu"],
      [[["Tab"]], "kurz_insp_fokus"],
      [[["↩"]], "kurz_fallliste", "kurz_wo_fallliste"]]]
  ];
  const MAC = /mac|iphone|ipad/i.test(navigator.userAgentData ? navigator.userAgentData.platform : navigator.platform || navigator.userAgent);
  const $ = (s, w) => (w || document).querySelector(s);
  const el = (tag, attrs, ...kinder) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === false || v == null) continue;
      if (k === "text") e.textContent = v;
      else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? "" : v);
    }
    for (const k of kinder.flat(Infinity)) if (k != null && k !== false) e.append(k);
    if (e.type === "range") { fuelle(e); e.addEventListener("input", () => fuelle(e)); }
    return e;
  };
  /* Schieberegler (D18): Anteil für die türkise Spur — WebKit kennt keinen Fortschrittsteil */
  function fuelle(r) {
    const min = +r.min || 0, max = r.max === "" ? 100 : +r.max;
    r.style.setProperty("--kd-anteil", (max > min ? ((+r.value - min) / (max - min)) * 100 : 0) + "%");
  }
  const kopie = (o) => JSON.parse(JSON.stringify(o || {}));
  const speicher = {
    lies(k, ersatz) { try { const v = localStorage.getItem("kd." + k); return v == null ? ersatz : JSON.parse(v); } catch (e) { return ersatz; } },
    schreib(k, v) { try { localStorage.setItem("kd." + k, JSON.stringify(v)); } catch (e) { /* privat: egal */ } }
  };

  const Z = {
    tokens: {}, abhaengige: {}, begriffe: {}, inspektor: "zeigen",
    thema: {}, zwischen: {}, stand: {}, verlauf: [], zukunft: [], letzteMerkung: 0,
    nummer: -1, fassung: null, fenster: 0, verbunden: false, zwischenZeit: "",
    paare: [], messung: null,
    e: {
      darstellung: speicher.lies("darstellung", "system"),
      sprache: speicher.lies("sprache", "de"),
      groesse: speicher.lies("groesse", "klein"),
      bearbeite: speicher.lies("bearbeite", "hell"),
      ordnung: speicher.lies("ordnung", "schicht"),
      auswahl: speicher.lies("auswahl", "s|semantik|farbe"),
      filter: "alle", suche: "", befundeOffen: false
    }
  };

  /* ---------------- Texte ---------------- */
  function T(pfad, werte) {
    const such = (spr) => pfad.split(".").reduce((o, k) => (o && o[k] != null ? o[k] : null), (window.KD_TEXTE || {})[spr]);
    let s = such(Z.e.sprache);
    if (s == null) s = such("de");
    if (s == null) s = pfad;                               // Lücke sichtbar, nie leer
    return String(s).replace(/\{(\w+)\}/g, (_, k) => (werte && werte[k] != null ? werte[k] : ""));
  }
  function anzeigename(name) {
    let m = name.match(/^--kern-(\d+)$/);
    if (m) return T("teile.groesse", { n: m[1], rem: (m[1] / 16) + " rem" });
    m = name.match(/^--kern-font-size-(\d+)$/);
    if (m) return T("teile.schriftgroesse", { n: m[1] });
    return name.replace(/^--(kern|kn)-/, (_, p) => (p === "kn" ? "kn-" : "")).split("-")
      .map((t) => (/^\d+$/.test(t) ? t : T("teile." + t))).join(" · ");
  }
  function bausteinName(id) {
    const eigen = ((window.KD_TEXTE || {})[Z.e.sprache] || {}).bausteine;
    if (eigen && eigen[id]) return eigen[id];
    if (id === "ebenen") return T("ui.ebenen_baustein");
    const b = Z.begriffe[id];
    return b ? (Z.e.sprache === "de" ? b.de : b.en) : id;
  }

  /* ---------------- Modell ---------------- */
  const modiVon = (name) => Object.keys(Z.tokens[name].werte || {});
  function editModi(name) {
    const m = modiVon(name), aus = [];
    if (m.includes("grund")) aus.push("grund");
    if (m.includes("hell") || m.includes("dunkel")) aus.push(Z.e.bearbeite);
    for (const z of MODI_ZUSATZ) if (m.includes(z)) aus.push(z);
    return aus;
  }
  const kernWert = (name, m) => (Z.tokens[name].werte || {})[m];
  const wertIn = (quelle, name, m) => (quelle[m] || {})[name];
  const aktuell = (name, m) => { const s = wertIn(Z.stand, name, m); return s != null ? s : kernWert(name, m); };
  const weicht = (name, m) => { const s = wertIn(Z.stand, name, m); return s != null && s !== kernWert(name, m); };
  const ungespeichert = (name, m) => (wertIn(Z.stand, name, m) || null) !== (wertIn(Z.zwischen, name, m) || null);
  const seitFassung = (name, m) => (wertIn(Z.stand, name, m) || null) !== (wertIn(Z.thema, name, m) || null);
  function zaehle(fn) {
    const paare = new Set();
    for (const q of [Z.stand, Z.thema, Z.zwischen]) for (const [m, t] of Object.entries(q)) for (const n of Object.keys(t)) paare.add(m + "|" + n);
    let k = 0; for (const p of paare) { const [m, n] = p.split("|"); if (Z.tokens[n] && fn(n, m)) k++; } return k;
  }
  const anzahlUngespeichert = () => zaehle(ungespeichert);
  const anzahlSeitFassung = () => zaehle(seitFassung);
  const anzahlAbweichungen = () => zaehle(weicht);
  const tokenWeicht = (name) => Object.keys(Z.stand).some((m) => weicht(name, m));
  const tokenUngespeichert = (name) => [...new Set([...Object.keys(Z.stand), ...Object.keys(Z.zwischen)])].some((m) => ungespeichert(name, m));
  function frei(name) {
    for (const r of KD_REGELN.freigabe) if (new RegExp(r.muster).test(name)) return r.frei;
    return false;
  }
  function wirkung(name) {
    const tokens = new Set(), bausteine = new Set(KD_VERWENDUNG.tokens[name] || []);
    const stapel = [name];
    while (stapel.length) for (const n of (Z.abhaengige[stapel.pop()] || [])) if (!tokens.has(n)) {
      tokens.add(n); stapel.push(n); (KD_VERWENDUNG.tokens[n] || []).forEach((b) => bausteine.add(b));
    }
    return { tokens: tokens.size, bausteine: [...bausteine] };
  }
  function art(name) {
    if (/^--kern-\d+$/.test(name)) return "groesse";
    if (/^--kern-font-size-\d+$/.test(name)) return "schriftgroesse";
    const t = Z.tokens[name];
    return t ? t.schicht + "|" + t.gruppe : "?";
  }
  const kandidaten = (ziel) => Object.keys(Z.tokens).filter((n) => art(n) === art(ziel))
    .sort((x, y) => x.localeCompare(y, "de", { numeric: true }));

  /* ---------------- Verlauf: Rückgängig / Wiederholen ---------------- */
  function merke() {
    const jetzt = Date.now();
    if (jetzt - Z.letzteMerkung > 600) { Z.verlauf.push(kopie(Z.stand)); if (Z.verlauf.length > 200) Z.verlauf.shift(); Z.zukunft = []; }
    Z.letzteMerkung = jetzt;
  }
  function springeVerlauf(von, nach, text) {
    if (!von.length) return;
    nach.push(kopie(Z.stand)); Z.stand = von.pop(); Z.letzteMerkung = 0;
    /* D33: zeichneTokens ersetzt alle Zeilen — den Fokus danach zurückgeben (wie setze()) */
    const f = document.activeElement && document.activeElement.id;
    sendeEntwurf(); zeichneTokens(); zeigeZustand();
    const neu = f && document.getElementById(f); if (neu && neu !== document.activeElement) neu.focus();
    melde(text);
  }
  const rueckgaengig = () => springeVerlauf(Z.verlauf, Z.zukunft, T("ui.rueckgaengig_ansage"));
  const wiederholen = () => springeVerlauf(Z.zukunft, Z.verlauf, T("ui.wiederholen_ansage"));

  /* ---------------- Server ---------------- */
  let sendeUhr = null;
  /* D34: Ohne geladenen Stand des Servers wäre Z.stand leer ("alles KERN") — die erste
     Eingabe hätte entwurf.json mit nur diesem einen Wert überschrieben. Dann nichts senden. */
  function ohneStand() {
    if (!Z.ohneStand) return false;
    if ($("#kd-meldung").hidden) stehend(T("ui.zustand_fehler"));
    return true;
  }
  function sendeEntwurf() {
    clearTimeout(sendeUhr);
    if (ohneStand()) return;
    sendeUhr = setTimeout(() => {
      fetch("/api/entwurf", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ werte: Z.stand, quelle: "designer" }) })
        .then((r) => r.json().then((d) => ({ ok: r.ok, d })))
        .then(({ ok, d }) => { if (!ok) stehend(T("ui.ungueltig", { f: (d.fehler || []).join(", ") })); })
        .catch(() => setzeVerbindung(false));
    }, VERZOEGERUNG);
  }
  function sendeVorschau(daten) {
    fetch("/api/vorschau", { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.assign({ quelle: "designer" }, daten)) }).catch(() => {});
  }
  function verbinde() {
    const q = new EventSource("/api/ereignisse");
    q.addEventListener("open", () => setzeVerbindung(true));
    q.addEventListener("error", () => setzeVerbindung(false));
    q.addEventListener("fenster", (e) => { Z.fenster = JSON.parse(e.data).anzahl; zeigeZustand(); });
    q.addEventListener("entwurf", (e) => {
      const d = JSON.parse(e.data);
      if (d.nummer < Z.nummer) return;                   // späte Rückmeldung (GI §8)
      Z.nummer = d.nummer;
      if (d.quelle !== "designer") { Z.stand = d.werte || {}; zeichneTokens(); zeigeZustand(); }
      messrahmenCss(d.css);
    });
    q.addEventListener("gespeichert", (e) => {
      const d = JSON.parse(e.data);
      Z.fassung = d.fassung; Z.thema = d.thema || {}; Z.zwischen = d.zwischenstand || Z.thema; Z.zwischenZeit = ""; Z.nummer = d.nummer;
      const link = rahmen.contentDocument && rahmen.contentDocument.getElementById("thema");
      if (link) link.href = link.href.split("?")[0] + "?f=" + encodeURIComponent(d.fassung.fassung);
      messrahmenCss("");
      zeigeZustand(); zeichneTokens();
    });
    q.addEventListener("messung", (e) => { Z.messung = JSON.parse(e.data); zeichneA11y(); });
    q.addEventListener("zwischenstand", (e) => { const d = JSON.parse(e.data); Z.zwischen = d.werte || {}; Z.zwischenZeit = uhrzeit(d.zeit); zeigeZustand(); zeichneTokens(); });
    /* Inspektor im OnePager: "Token im Designer öffnen" */
    q.addEventListener("vorschau", (e) => {
      const d = JSON.parse(e.data);
      if (d.inspektor) { Z.inspektor = d.inspektor; setzeRadios(); }          // D21: Modus aus einem OnePager
      if (d.quelle !== "onepager" || !d.zeige_token || !Z.tokens[d.zeige_token]) return;
      springeZuToken(d.zeige_token, d.token_modus);
      const z = document.getElementById("z" + d.zeige_token);
      if (z) { z.setAttribute("data-kd-angesprungen", ""); setTimeout(() => z.removeAttribute("data-kd-angesprungen"), 2500); }
      fluechtig(T("ui.aus_onepager", { name: d.zeige_token }));
      try { window.focus(); } catch (er) { /* Browser darf das Fenster nicht nach vorn holen */ }
    });
  }
  function setzeVerbindung(an) { Z.verbunden = an; zeigeZustand(); }
  /* "2026-10-16 08:16:15" → "08:16" (heute) bzw. "16.10. 08:16" */
  function uhrzeit(zeit) {
    const m = /^(\d{4})-(\d\d)-(\d\d) (\d\d:\d\d)/.exec(zeit || "");
    if (!m) return "";
    const heute = new Date(), gleich = +m[1] === heute.getFullYear() && +m[2] === heute.getMonth() + 1 && +m[3] === heute.getDate();
    return gleich ? m[4] : m[3] + "." + m[2] + ". " + m[4];
  }

  /* "Werte speichern" = Zwischenstand: Commit, die Fassung bleibt (Q3, 16.10.2026) */
  async function speichereZwischenstand() {
    clearTimeout(sendeUhr);
    if (ohneStand()) return;
    const r = await fetch("/api/zwischenstand", { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ werte: Z.stand }) }).catch(() => null);
    if (!r) { stehend(T("ui.offline")); return; }
    const d = await r.json();
    if (!r.ok) { stehend(T("ui.speichern_fehler", { f: (d.fehler || []).join(", ") })); return; }
    Z.zwischen = JSON.parse(JSON.stringify(Z.stand)); Z.zwischenZeit = uhrzeit(d.zeit);
    zeigeZustand(); zeichneTokens();
    /* D32: ohne Commit ist der vorige Zwischenstand überschrieben — das braucht Aufmerksamkeit */
    if (d.git_fehler) { stehend(T("ui.git_fehler", { f: d.git_fehler })); return; }
    fluechtig(T("ui.zwischen_gespeichert", { c: d.commit || "—", f: d.fassung }));
  }
  /* "Neue Version": Korrektur, Neben- oder Hauptversion — Fassung, Tag, Changes */
  async function legeVersionAn(stufe, bestaetigt) {
    clearTimeout(sendeUhr);
    if (ohneStand()) return;
    const a = a11yZahlen();
    const r = await fetch("/api/version", { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ werte: Z.stand, stufe, bestaetigt: !!bestaetigt,
        a11y: { rot: a.rot, gelb: a.gelb, gruen: a.gruen, grau: a.grau, verletzt: a.verletzt } }) }).catch(() => null);
    if (!r) { stehend(T("ui.offline")); return; }
    const d = await r.json();
    if (!r.ok) { stehend(T("ui.speichern_fehler", { f: (d.fehler || []).join(", ") })); return; }
    Z.fassung = d.fassung; Z.thema = d.thema; Z.zwischen = d.thema; Z.zwischenZeit = ""; Z.verlauf = []; Z.zukunft = [];
    zeigeZustand(); zeichneTokens();
    if (d.git_fehler) { stehend(T("ui.git_fehler", { f: d.git_fehler })); return; }   // D32
    fluechtig(T("ui.version_angelegt", { f: d.fassung.fassung, c: d.commit || "—", t: d.tag || "—" }));
  }
  function naechste(f, stufe) {
    const [h, n, k] = f.split(".").map(Number);
    return stufe === "haupt" ? (h + 1) + ".0.0" : stufe === "neben" ? h + "." + (n + 1) + ".0" : h + "." + n + "." + (k + 1);
  }

  /* ---------------- Messrahmen: Tokens auflösen, Paare messen ---------------- */
  const rahmen = $("#kd-messrahmen");
  let messUhr = null;
  function messrahmenCss(css) {
    const doc = rahmen.contentDocument;
    if (!doc || !doc.getElementById("entwurf")) return;
    doc.getElementById("entwurf").textContent = css || "";
    clearTimeout(messUhr); messUhr = setTimeout(messeAlles, 30);
  }
  const setzeRahmenModus = (m) => rahmen.contentDocument.documentElement.setAttribute("data-kern-theme", m === "dunkel" ? "dark" : "light");
  function loese(name, ebene) {
    const doc = rahmen.contentDocument;
    const p = doc.createElement("span");
    p.style.backgroundColor = "var(" + name + ")";
    doc.getElementById("ebene-" + (ebene || 0)).append(p);
    const w = getComputedStyle(p).backgroundColor; p.remove(); return w;
  }
  function stufeFuer(wert, artName) {
    const S = KD_REGELN.schwellen;
    const [rot, gelb] = artName === "text" ? [S.text, S.kernText] : artName === "textGross" ? [S.textGross, S.kernGross]
      : artName === "knopf" ? [S.text, S.kernGross] : [S.nichtText, 0];
    return { stufe: wert < rot ? "rot" : wert < gelb ? "gelb" : "gruen", schwelle: wert < rot ? rot : gelb };
  }
  function messeAlles() {
    const doc = rahmen.contentDocument;
    if (!doc || !doc.body) return;
    const befunde = [];
    for (const modus of KD_REGELN.modi) {
      setzeRahmenModus(modus);
      const grund = modus === "dunkel" ? "#000" : "#fff";
      for (const p of KD_REGELN.paare) {
        const b = { paar: p, modus, wert: null, stufe: "grau" };
        try {
          const hinten = loese(p.hinten, p.ebene), vorne = loese(p.vorne, p.ebene);
          const h = F.zuRgb([grund, hinten]), v = F.zuRgb([grund, hinten, vorne]);
          b.wert = F.kontrast(v, h);
          Object.assign(b, stufeFuer(b.wert, p.art));
          b.vorneHex = F.hex(v); b.hintenHex = F.hex(h);
        } catch (e) { b.stufe = "grau"; }
        befunde.push(b);
      }
      /* Farbfelder der sichtbaren Zeilen und Reihen */
      document.querySelectorAll('[data-kd-feld][data-kd-feld-modus="' + modus + '"]').forEach((f) => {
        try { const rgb = F.zuRgb([grund, loese(f.getAttribute("data-kd-feld"))]); f.style.background = F.hex(rgb); f.title = F.hex(rgb); }
        catch (e) { /* bleibt leer */ }
      });
    }
    setzeRahmenModus(Z.e.bearbeite);
    Z.paare = befunde;
    zeichneA11y();
  }

  /* ---------------- Meldungen und Ansagen ---------------- */
  function melde(text) { const r = $("#kd-ansage"); r.textContent = ""; setTimeout(() => { r.textContent = text; }, 30); }
  let fluechtigUhr = null;
  function fluechtig(text) {                       // E5: Bestätigung, verschwindet selbst, ohne Knopf
    const m = $("#kd-fluechtig"); m.textContent = text; m.hidden = false;
    clearTimeout(fluechtigUhr); fluechtigUhr = setTimeout(() => { m.hidden = true; }, 6000);
  }
  function stehend(text) {                         // braucht Aufmerksamkeit: bleibt, ein Knopf
    $("#kd-meldung-text").textContent = text; $("#kd-meldung").hidden = false; $("#kd-meldung-ok").focus();
  }

  /* ---------------- Kopf und Einstellungen ---------------- */
  function zeigeZustand() {
    const n = anzahlUngespeichert(), nv = anzahlSeitFassung();
    /* Bezug sichtbar machen (D16): Der Zähler zählt gegen den letzten Zwischenstand —
       auch "Alles auf KERN" ist eine Änderung, solange der Zwischenstand noch Testwerte hat. */
    const z = Z.zwischenZeit ? T("ui.z_zwischen", { zeit: Z.zwischenZeit }) : T("ui.z_fassung", { f: Z.fassung ? Z.fassung.fassung : "" });
    $("#kd-zustand-text").textContent = n === 0 ? T("ui.gespeichert", { z }) : n === 1 ? T("ui.aenderungen_1", { z }) : T("ui.aenderungen_n", { n, z });
    $("#kd-speichern").title = n ? T("ui.speichern_titel", { n, z }) : "";
    $("#kd-seit-fassung").textContent = Z.fassung ? T("ui.seit_fassung", { f: Z.fassung.fassung, n: nv }) : "";
    $("#kd-zaehler-version").textContent = nv ? String(nv) : "";
    $("#kd-zaehler-version").hidden = !nv;
    $("#kd-abweichungen").textContent = T("ui.abweichungen_kurz", { n: anzahlAbweichungen() });
    $("#kd-verbindung").textContent = Z.verbunden ? T("ui.live_n", { n: Z.fenster }) : T("ui.offline");
    $("#kd-verbindung").className = "kd-versal " + (Z.verbunden ? "kd-leise" : "kd-marke kd-marke--rot");
    $("#kd-fassung").textContent = Z.fassung ? Z.fassung.system + " " + Z.fassung.fassung : "…";
    $("#kd-zaehler-speichern").textContent = n ? String(n) : "";
    $("#kd-zaehler-speichern").hidden = !n;
    /* D33: aria-disabled statt disabled (E4) — ein gesperrter Knopf behält den Fokus;
       mit disabled fiel er nach dem letzten Rückgängig auf body. Die Sperre selbst
       liegt in springeVerlauf (leerer Verlauf tut nichts). */
    $("#kd-zurueck").setAttribute("aria-disabled", String(!Z.verlauf.length));
    $("#kd-vor").setAttribute("aria-disabled", String(!Z.zukunft.length));
  }
  function wendeEinstellungenAn() {
    const root = document.documentElement;
    const dunkel = Z.e.darstellung === "dunkel" || (Z.e.darstellung === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
    root.setAttribute("data-kd-modus", dunkel ? "dunkel" : "hell");
    root.setAttribute("data-kd-groesse", Z.e.groesse);
    root.lang = Z.e.sprache;
    for (const k of ["darstellung", "sprache", "groesse", "bearbeite", "auswahl", "ordnung"]) speicher.schreib(k, Z.e[k]);
  }
  function zeichneTexte() {
    document.querySelectorAll("[data-t]").forEach((e) => { e.textContent = T(e.getAttribute("data-t")); });
    document.querySelectorAll("[data-t-label]").forEach((e) => { e.setAttribute("aria-label", T(e.getAttribute("data-t-label"))); });
    document.querySelectorAll("[data-t-platzhalter]").forEach((e) => { e.placeholder = T(e.getAttribute("data-t-platzhalter")); });
    $("#kd-inspektor-alt").textContent = T("ui.inspektor_alt", { taste: MAC ? "⌥" : "Alt" });
    zeichneKurzbefehle();
    $("#kd-sprache").replaceChildren(...SPRACHEN.map(([code, name]) => el("option", {
      value: code, lang: code, selected: code === Z.e.sprache, disabled: !(window.KD_TEXTE || {})[code],
      text: name + ((window.KD_TEXTE || {})[code] ? "" : " — " + T("ui.folgt")) })));
  }

  /* ---------------- A11y-Leiste ---------------- */
  function a11yZahlen() {
    const z = { rot: 0, gelb: 0, gruen: 0, grau: 0, verletzt: [] };
    for (const b of Z.paare) { z[b.stufe]++; if (b.stufe === "rot") z.verletzt.push(b.paar.name + " · " + T("modi." + b.modus) + " " + b.wert.toFixed(2) + " : 1"); }
    if (Z.messung) {
      for (const s of ["rot", "gelb", "gruen", "grau"]) z[s] += Z.messung.zahlen[s] || 0;
      for (const b of Z.messung.befunde) if (b.stufe === "rot") z.verletzt.push(b.kriterium + " · „" + b.text + "“");
    }
    return z;
  }
  function zahlenListe(befunde, zahlen) {
    const z = zahlen || { rot: 0, gelb: 0, gruen: 0, grau: 0 };
    if (!zahlen) befunde.forEach((b) => z[b.stufe]++);
    return ["rot", "gelb", "gruen", "grau"].map((s) => el("li", {}, el("span", { class: "kd-marke kd-marke--" + s, text: T("ui.a11y_" + s, { n: z[s] }) })));
  }
  function zeichneA11y() {
    const m = Z.messung;
    const messBefunde = m ? m.befunde : [];
    $("#kd-a11y-zahlen").replaceChildren(el("li", { class: "kd-versal kd-leise", text: T("ui.a11y_paare") }), ...zahlenListe(Z.paare));
    $("#kd-a11y-zahlen-mess").replaceChildren(el("li", { class: "kd-versal kd-leise",
      text: m ? T("ui.a11y_gemessen", { m: T("modi." + m.modus), n: m.anzahl }) : T("ui.a11y_ohne_onepager") }), ...(m ? zahlenListe(messBefunde, m.zahlen) : []),
      /* Messung zu einem älteren Entwurf: OnePager liegt z. B. als Tab im Hintergrund (Browser bremst dort) */
      ...(m && m.nummer != null && m.nummer < Z.nummer ? [el("li", {}, el("span", { class: "kd-marke kd-marke--grau", text: T("ui.a11y_veraltet") }))] : []));
    const reihenfolge = { rot: 0, gelb: 1, grau: 2, gruen: 3 };
    const nachStufe = (a, b) => reihenfolge[a.stufe] - reihenfolge[b.stufe] || (a.wert || 0) - (b.wert || 0);
    const paarZeilen = Z.paare.slice().sort(nachStufe).map((b) => el("li", { class: "kd-befund" },
      el("span", { class: "kd-marke kd-marke--" + b.stufe, text: b.wert ? b.wert.toFixed(2) + " : 1" : "—" }),
      el("span", { class: "kd-befund__was" },
        el("span", { text: b.paar.name + " · " + T("modi." + b.modus) }),
        el("span", { class: "kd-befund__paar", text: b.paar.vorne + " " + (b.vorneHex || "") + "  /  " + b.paar.hinten + " " + (b.hintenHex || "") +
          (b.schwelle ? "  ·  " + T("ui.befund_schwelle", { s: b.schwelle.toFixed(1) }) : "") })),
      el("button", { class: "kd-knopf kd-knopf--klein", type: "button", text: T("ui.befund_zum_token"), onclick: () => springeZuToken(b.paar.vorne, b.modus) })));
    const messZeilen = messBefunde.filter((b) => b.stufe !== "gruen").sort(nachStufe).map((b) => el("li", { class: "kd-befund" },
      el("span", { class: "kd-marke kd-marke--" + b.stufe, text: b.art === "ziel" ? Math.round(b.wert) + " px" : (b.wert ? b.wert.toFixed(2) + " : 1" : "—") }),
      el("span", { class: "kd-befund__was" },
        el("span", { text: "„" + b.text + "“ · " + b.kriterium }),
        el("span", { class: "kd-befund__paar", text: b.selektor + (b.schwelle ? "  ·  " + T(b.art === "ziel" ? "ui.befund_ziel" : "ui.befund_schwelle", { s: b.schwelle }) : "") })),
      el("button", { class: "kd-knopf kd-knopf--klein", type: "button", text: T("ui.im_onepager"), onclick: () => sendeVorschau({ hervorheben: b.selektor }) })));
    const liste = $("#kd-a11y-liste");
    liste.replaceChildren(
      el("li", { class: "kd-a11y__teil kd-versal", text: T("ui.a11y_paare_lang") }), ...paarZeilen,
      el("li", { class: "kd-a11y__teil kd-versal", text: T("ui.a11y_mess_lang") }),
      ...(messZeilen.length ? messZeilen : [el("li", { class: "kd-leise kd-befund", text: m ? T("ui.a11y_mess_alles_gut") : T("ui.a11y_ohne_onepager") })]));
    liste.hidden = !Z.e.befundeOffen;
    const k = $("#kd-a11y-knopf");
    k.textContent = Z.e.befundeOffen ? T("ui.a11y_verbergen") : T("ui.a11y_zeigen");
    k.setAttribute("aria-expanded", String(Z.e.befundeOffen));
  }
  function springeZuToken(name, modus) {
    const t = Z.tokens[name] ? name : name.replace(/-contextual$/, "");
    if (!Z.tokens[t]) return;
    Z.e.ordnung = "schicht"; Z.e.auswahl = "s|" + Z.tokens[t].schicht + "|" + Z.tokens[t].gruppe;
    if (modus === "hell" || modus === "dunkel") Z.e.bearbeite = modus;
    Z.e.suche = t; $("#kd-suche").value = t; Z.e.filter = "alle"; setzeRadios();
    wendeEinstellungenAn(); zeichneNavi(); zeichneTokens();
    const zeile = document.getElementById("z" + t);
    if (zeile) { zeile.scrollIntoView({ block: "center" }); const f = zeile.querySelector("input, select"); if (f) f.focus(); }
  }

  /* ---------------- Navigation ---------------- */
  function navEintrag(schluessel, text, anzahl, nachher) {
    return el("li", {}, el("button", { type: "button", class: "kd-navi__eintrag", "aria-current": Z.e.auswahl === schluessel ? "true" : false,
      onclick: () => { Z.e.auswahl = schluessel; Z.e.suche = ""; $("#kd-suche").value = ""; wendeEinstellungenAn(); klappeNavi(false); zeichneNavi(); zeichneTokens(); $("#kd-tokens-titel").focus(); if (nachher) nachher(); } },
      el("span", { text }), el("span", { class: "kd-leise kd-mono-zahl", text: String(anzahl) })));
  }
  function zeichneNavi() {
    const teile = [];
    if (Z.e.ordnung === "schicht") {
      for (const s of SCHICHTEN) {
        const gr = GRUPPEN.map((g) => [g, Object.values(Z.tokens).filter((t) => t.schicht === s && t.gruppe === g).length]).filter(([, n]) => n);
        if (!gr.length) continue;
        teile.push(el("h3", { class: "kd-versal kd-leise kd-navi__stufe", text: T("stufen." + s) }));
        teile.push(el("ul", { class: "kd-navi__liste" }, gr.map(([g, n]) => navEintrag("s|" + s + "|" + g, T("gruppen." + g), n))));
      }
    } else {
      for (const st of STUFEN) {
        const ids = Object.keys(KD_VERWENDUNG.bausteine).filter((id) => KD_VERWENDUNG.bausteine[id].stufe === st)
          .sort((a, b) => bausteinName(a).localeCompare(bausteinName(b), Z.e.sprache));
        teile.push(el("h3", { class: "kd-versal kd-leise kd-navi__stufe", text: T("atomic." + st) }));
        teile.push(el("ul", { class: "kd-navi__liste" }, ids.map((id) => navEintrag("b|" + id, bausteinName(id),
          Object.values(KD_VERWENDUNG.tokens).filter((l) => l.includes(id)).length,
          () => sendeVorschau({ hervorheben: KD_VERWENDUNG.bausteine[id].zeigen })))));
      }
    }
    $("#kd-navi-inhalt").replaceChildren(...teile);
    $("#kd-navi-auswahl").textContent = titelDerAuswahl();
  }
  /* Schmale Fenster: Navigation auf- und zuklappen (D15) */
  function klappeNavi(auf) {
    const nav = $(".kd-navi");
    if (auf) nav.setAttribute("data-offen", ""); else nav.removeAttribute("data-offen");
    $("#kd-navi-schalter").setAttribute("aria-expanded", String(!!auf));
  }

  /* ---------------- Token-Liste ---------------- */
  function namenDerAuswahl() {
    const such = Z.e.suche.trim().toLowerCase();
    let namen;
    if (such) namen = Object.keys(Z.tokens).filter((n) => n.toLowerCase().includes(such) || anzeigename(n).toLowerCase().includes(such));
    else if (Z.e.auswahl.startsWith("b|")) {
      const id = Z.e.auswahl.slice(2);
      namen = Object.keys(KD_VERWENDUNG.tokens).filter((n) => KD_VERWENDUNG.tokens[n].includes(id) && Z.tokens[n]);
    } else {
      const [, s, g] = Z.e.auswahl.split("|");
      namen = Object.keys(Z.tokens).filter((n) => Z.tokens[n].schicht === s && Z.tokens[n].gruppe === g);
    }
    if (Z.e.filter === "ab") namen = namen.filter(tokenWeicht);
    if (Z.e.filter === "neu") namen = namen.filter(tokenUngespeichert);
    return namen.sort((a, b) => a.localeCompare(b, "de", { numeric: true }));
  }
  function titelDerAuswahl() {
    if (Z.e.suche.trim()) return "„" + Z.e.suche.trim() + "“";
    if (Z.e.auswahl.startsWith("b|")) { const id = Z.e.auswahl.slice(2); return T("atomic." + (KD_VERWENDUNG.bausteine[id] || {}).stufe) + " · " + bausteinName(id); }
    const [, s, g] = Z.e.auswahl.split("|"); return T("stufen." + s) + " · " + T("gruppen." + g);
  }
  function zeichneKurzbefehle() {
    const name = (k) => ({ mod: MAC ? "⌘" : T("ui.taste_strg"), alt: MAC ? "⌥" : "Alt", leer: T("ui.taste_leer") }[k] || k);
    const titel = (k) => ({ mod: MAC ? "Command" : "Control", alt: MAC ? "Option" : "Alt", "⇧": "Shift", "↩": "Enter",
      Esc: "Escape", "←": "←", "→": "→", "↑": "↑", "↓": "↓" }[k]);
    const folge = (f) => el("span", { class: "kd-kurz__folge" }, f.map((k) => el("kbd", { class: "kd-taste", title: titel(k), text: name(k) })));
    $("#kd-kurz-gruppen").replaceChildren(...KURZBEFEHLE.map(([gruppe, zeilen]) =>
      el("table", { class: "kd-kurz__tabelle" },
        el("caption", { text: T("ui." + gruppe) }),
        el("tbody", null, zeilen.map(([folgen, text, wo]) => el("tr", null,
          el("th", { scope: "row" }, folgen.map((f, i) => [i ? el("span", { class: "kd-kurz__oder", text: "/" }) : null, folge(f)])),
          el("td", null, T("ui." + text), wo ? el("span", { class: "kd-kurz__wo", text: T("ui." + wo) }) : null)))))));
  }
  function schalteEinstellungen(offen, zuKurz) {
    const p = $("#kd-einst"); p.hidden = !offen; $("#kd-einst-knopf").setAttribute("aria-expanded", String(offen));
    if (offen && zuKurz) { $("#kd-kurz").scrollIntoView({ block: "nearest" }); $("#kd-kurz").setAttribute("tabindex", "-1"); $("#kd-kurz").focus(); }
  }
  function leereSuche() {
    Z.e.suche = ""; $("#kd-suche").value = ""; zeichneTokens(); $("#kd-suche").focus();
  }
  function zeichneTokens() {
    const namen = namenDerAuswahl();
    const sucht = !!Z.e.suche.trim();
    $("#kd-suche-leeren").hidden = !sucht;
    $("#kd-suche-treffer").textContent = sucht ? T("ui.suche_treffer", { n: namen.length }) : "";
    $("#kd-tokens-titel").textContent = titelDerAuswahl();
    $("#kd-tokens-anzahl").textContent = T("ui.anzahl_tokens", { n: namen.length });
    $("#kd-tokens-hinweis").textContent = Z.e.auswahl.startsWith("b|") && !Z.e.suche.trim() ? T("ui.baustein_hinweis") : "";
    const liste = $("#kd-zeilen");
    if (!namen.length) {
      const gefiltert = Z.e.suche.trim() || Z.e.filter !== "alle";
      liste.replaceChildren(el("li", { class: "kd-leer" },
        el("p", { text: Z.e.filter === "ab" ? T("ui.keine_abweichung") : Z.e.filter === "neu" ? T("ui.nichts_ungespeichert") : T("ui.nichts_gefunden") }),
        gefiltert ? el("button", { type: "button", class: "kd-knopf", text: T("ui.filter_zuruecksetzen"),
          onclick: () => { Z.e.suche = ""; $("#kd-suche").value = ""; Z.e.filter = "alle"; setzeRadios(); zeichneTokens(); $("#kd-suche").focus(); } }) : null));
      return;
    }
    if (Z.e.auswahl === "s|primitiv|farbe" && !Z.e.suche.trim()) {
      const familien = {};
      for (const n of namen) { const f = (n.match(/^--kern-color-([a-z]+)-\d{3}$/) || [])[1] || "basis"; (familien[f] = familien[f] || []).push(n); }
      liste.replaceChildren(...Object.entries(familien).map(([f, ns]) => reihe(f, ns)));
    } else liste.replaceChildren(...namen.map(zeile));
    clearTimeout(messUhr); messUhr = setTimeout(messeAlles, 30);
  }

  /* Farbreihe: Farbton und Buntheit einer ganzen Reihe verschieben, Helligkeit je Stufe
     bleibt — dann bleiben die Kontraste (KERN-Farbsystematik, Recherche 6). */
  function reihe(familie, namen) {
    const zeilen = el("ul", { class: "kd-zeilen" }, namen.map(zeile));
    if (familie === "basis") return el("li", { class: "kd-reihe" }, el("div", { class: "kd-reihe__kopf" }, el("h3", { class: "kd-reihe__titel", text: T("ui.reihe_basis") })), zeilen);
    const bezug = namen.find((n) => /-500$/.test(n)) || namen[0];
    const k = F.liesOklch(kernWert(bezug, "grund")), a = F.liesOklch(aktuell(bezug, "grund"));
    const dh = k && a ? Math.round(((a.h - k.h + 540) % 360) - 180) : 0;
    const fc = k && a && k.c ? Math.round((a.c / k.c) * 100) / 100 : 1;
    const name = T("teile." + familie);
    const idDh = "dh-" + familie, idFc = "fc-" + familie;
    const wende = (neuDh, neuFc) => {
      merke();
      for (const n of namen) {
        const kw = F.liesOklch(kernWert(n, "grund")); if (!kw) continue;
        setzeStill(n, "grund", neuDh === 0 && neuFc === 1 ? kernWert(n, "grund") : F.schreibOklch({ l: kw.l, c: kw.c * neuFc, h: kw.h + neuDh }));
      }
      sendeEntwurf(); zeigeZustand();
      zeilen.replaceChildren(...namen.map(zeile));
      clearTimeout(messUhr); messUhr = setTimeout(messeAlles, 30);
    };
    const regler = (id, beschr, min, max, schritt, wert, wandel) => el("label", { class: "kd-regler" },
      el("span", { class: "kd-versal kd-leise", text: beschr }),
      el("input", { type: "range", id, min, max, step: schritt, value: wert, "aria-valuetext": wandel(wert),
        oninput: (e) => {
          const v = +e.target.value;
          e.target.setAttribute("aria-valuetext", wandel(v)); e.target.nextElementSibling.textContent = wandel(v);
          wende(+document.getElementById(idDh).value, +document.getElementById(idFc).value);
        } }),
      el("output", { class: "kd-mono-zahl", text: wandel(wert) }));
    return el("li", { class: "kd-reihe" },
      el("div", { class: "kd-reihe__kopf" },
        el("h3", { class: "kd-reihe__titel", text: T("ui.reihe", { name }) }),
        el("span", { class: "kd-streifen", "aria-hidden": "true" },
          namen.map((n) => el("span", { class: "kd-musterfeld kd-musterfeld--klein", "data-kd-feld": n, "data-kd-feld-modus": "hell" }))),
        regler(idDh, T("ui.farbton"), -180, 180, 1, dh, (v) => (v > 0 ? "+" : "") + v + "°"),
        regler(idFc, T("ui.buntheit"), 0, 2, 0.05, fc, (v) => "× " + v.toFixed(2)),
        el("button", { type: "button", class: "kd-knopf kd-knopf--klein", text: T("ui.auf_kern"), "aria-label": T("ui.reihe_auf_kern", { name }),
          onclick: () => { wende(0, 1); zeichneTokens(); melde(T("ui.angesagt_zurueck", { name })); } })),
      zeilen);
  }

  function zeile(name) {
    const t = Z.tokens[name];
    const modi = editModi(name);
    const leseModi = modi.length ? modi : modiVon(name);
    const ab = tokenWeicht(name), neu = tokenUngespeichert(name);
    const farbe = t.gruppe === "farbe" && !/opacity/.test(name);
    const w = wirkung(name);
    const feldModus = (m) => (m === "dunkel" ? "dunkel" : m === "hell" ? "hell" : Z.e.bearbeite);
    const werte = leseModi.map((m) => el("span", { class: "kd-zeile__modus" },
      leseModi.length > 1 || m !== "grund" ? el("span", { class: "kd-versal kd-leise kd-zeile__modusname", text: T("modi." + m) }) : null,
      farbe ? el("span", { class: "kd-musterfeld", "data-kd-feld": name, "data-kd-feld-modus": feldModus(m), "aria-hidden": "true" }) : null,
      editor(name, m)));
    const vorher = Z.fassung ? leseModi.filter((m) => seitFassung(name, m)).map((m) => {
      const v = wertIn(Z.thema, name, m); return T("ui.vorher", { f: Z.fassung.fassung, w: v != null ? v : kernWert(name, m) });
    }) : [];
    return el("li", { class: "kd-zeile", id: "z" + name, "data-abweichung": ab ? "ja" : "nein" },
      el("span", { class: "kd-zeile__name" },
        el("strong", { id: "n" + name, text: anzeigename(name) }),
        el("code", { class: "kd-zeile__code", text: name })),
      el("span", { class: "kd-zeile__kern", text: T("ui.kern_wert") + " " + leseModi.map((m) => kernWert(name, m) || "—").join(" · ") }),
      el("span", { class: "kd-zeile__wert" }, werte),
      el("span", { class: "kd-zeile__info" },
        el("span", { class: "kd-etikett " + (frei(name) ? "kd-etikett--frei" : "kd-etikett--abraten"), text: frei(name) ? T("ui.kern_frei") : T("ui.kern_abraten") }),
        ab ? el("span", { class: "kd-etikett kd-etikett--ab", text: T("ui.abweichung") }) : null,
        neu ? el("span", { class: "kd-etikett kd-etikett--neu", text: T("ui.ungespeichert") }) : null,
        el("span", { class: "kd-leise", text: T("ui.wirkt_auf", { n: w.tokens, b: w.bausteine.length }) }),
        ...vorher.map((v) => el("span", { class: "kd-leise", text: v }))),
      el("span", { class: "kd-zeile__aktion" },
        w.bausteine.length ? el("button", { type: "button", class: "kd-knopf kd-knopf--klein kd-knopf--leise", text: T("ui.im_onepager"),
          "aria-label": T("ui.im_onepager_name", { name: anzeigename(name) }),
          onclick: () => sendeVorschau({ hervorheben: (KD_VERWENDUNG.bausteine[w.bausteine[0]] || {}).zeigen }) }) : null,
        ab ? el("button", { type: "button", class: "kd-knopf kd-knopf--klein", text: T("ui.auf_kern"),
          "aria-label": T("ui.auf_kern_name", { name: anzeigename(name) }), onclick: () => zuruecksetzen(name) }) : null));
  }

  function editor(name, m) {
    if (!editModi(name).includes(m)) return el("span", { class: "kd-leise", text: kernWert(name, m) });
    const id = "w" + name + "|" + m;
    const wert = aktuell(name, m);
    const ziel = (wert.match(/^var\((--[a-z0-9-]+)\)$/) || [])[1];
    if (ziel && Z.tokens[ziel]) {
      const opt = kandidaten(ziel).map((n) => el("option", { value: "var(" + n + ")", selected: n === ziel, text: n.replace(/^--kern-/, "") }));
      opt.push(el("option", { value: "*", text: T("ui.eigener_wert") }));
      return el("select", { class: "kd-feld", id, "aria-labelledby": "n" + name,
        onchange: (e) => { if (e.target.value === "*") { wandleZuFeld(name, m, wert); return; } merke(); setze(name, m, e.target.value); } }, opt);
    }
    const ok = F.liesOklch(wert);
    const feld = textfeld(name, m, wert, id);
    if (!ok) return feld;
    /* Grundfarbe in OKLCH: drei Regler (Helligkeit, Buntheit, Farbton) */
    const regler = (k, min, max, schritt) => el("label", { class: "kd-oklch-zeile" },
      el("span", { class: "kd-versal kd-leise", text: T("ui.oklch_" + k) }),
      el("input", { type: "range", class: "kd-oklch", min, max, step: schritt, value: ok[k],
        "aria-label": T("ui.oklch_" + k) + " · " + anzeigename(name),
        oninput: (e) => { const o = F.liesOklch(document.getElementById(id).value) || ok; o[k] = +e.target.value;
          const v = F.schreibOklch(o); document.getElementById(id).value = v; merke(); setze(name, m, v, true); } }));
    return el("span", { class: "kd-oklch-gruppe" }, feld, regler("l", 0, 100, 0.5), regler("c", 0, 0.4, 0.005), regler("h", 0, 360, 1));
  }
  function textfeld(name, m, wert, id) {
    return el("input", { class: "kd-feld", id, value: wert, "aria-labelledby": "n" + name, spellcheck: "false", autocomplete: "off",
      oninput: (e) => {
        const v = e.target.value.trim();
        const farbe = Z.tokens[name].gruppe === "farbe" && !/opacity/.test(name);
        const gueltig = !!v && (/^var\(--[a-z0-9-]+\)$/.test(v) ||
          (farbe ? CSS.supports("color", v) : CSS.supports("width", v) || CSS.supports("opacity", v) || CSS.supports("font-family", v) ||
            CSS.supports("font-weight", v) || CSS.supports("line-height", v) || CSS.supports("box-shadow", v)));
        e.target.setAttribute("aria-invalid", gueltig ? "false" : "true");
        if (gueltig) { merke(); setze(name, m, v, true); }
      } });
  }
  function wandleZuFeld(name, m, wert) {
    const alt = document.getElementById("w" + name + "|" + m);
    const neu = textfeld(name, m, wert, alt.id);
    alt.replaceWith(neu); neu.focus(); neu.select();
  }
  function setzeStill(name, m, wert) {
    Z.stand[m] = Z.stand[m] || {};
    if (wert === kernWert(name, m)) delete Z.stand[m][name]; else Z.stand[m][name] = wert;
    if (!Object.keys(Z.stand[m]).length) delete Z.stand[m];
  }
  function setze(name, m, wert, leise) {
    setzeStill(name, m, wert);
    sendeEntwurf(); zeigeZustand();
    const z = document.getElementById("z" + name);
    if (z) {
      if (leise) z.setAttribute("data-abweichung", tokenWeicht(name) ? "ja" : "nein");
      else { const f = document.activeElement && document.activeElement.id; z.replaceWith(zeile(name)); const neu = f && document.getElementById(f); if (neu) neu.focus(); }
    }
    melde(T("ui.angesagt_wert", { name: anzeigename(name), wert }));
  }
  function zuruecksetzen(name) {
    merke();
    for (const m of Object.keys(Z.stand)) if (wertIn(Z.stand, name, m) != null) setzeStill(name, m, kernWert(name, m));
    sendeEntwurf(); zeigeZustand();
    const z = document.getElementById("z" + name);
    if (z) { z.replaceWith(zeile(name)); const f = document.getElementById("z" + name).querySelector("input, select"); if (f) f.focus(); }
    melde(T("ui.angesagt_zurueck", { name: anzeigename(name) }));
  }

  /* ---------------- Dialoge ---------------- */
  function frage(titel, text, liste, jaText, ja) {
    const d = $("#kd-dialog");
    $("#kd-dialog-titel").textContent = titel; $("#kd-dialog-text").textContent = text;
    $("#kd-dialog-liste").replaceChildren(...liste.map((x) => el("li", { text: x })));
    $("#kd-dialog-liste").hidden = !liste.length;
    const knopf = $("#kd-dialog-ja"); knopf.textContent = jaText;
    knopf.onclick = () => { d.close(); ja(); };
    const vorher = document.activeElement;
    d.addEventListener("close", () => { if (vorher && vorher.focus) vorher.focus(); }, { once: true });
    d.showModal(); $("#kd-dialog-nein").focus();
  }
  function speichernGeklickt() {
    if (!anzahlUngespeichert()) { fluechtig(T("ui.nichts_zu_speichern", { f: Z.fassung ? Z.fassung.fassung : "" })); return; }
    speichereZwischenstand();
  }
  function versionGeklickt() {
    const f = Z.fassung ? Z.fassung.fassung : "0.1.0";
    if (!anzahlSeitFassung()) { fluechtig(T("ui.nichts_neu_version", { f })); return; }
    const d = $("#kd-version-dialog"), a = a11yZahlen();
    $("#kd-version-text").textContent = T("ui.version_text", { f, n: anzahlSeitFassung() });
    for (const s of ["korrektur", "neben", "haupt"]) {
      $("#kd-stufe-" + s + "-text").textContent = T("ui.stufe_" + s, { v: naechste(f, s) });
      $("#kd-stufe-" + s + "-hilfe").textContent = T("ui.stufe_" + s + "_hilfe");
    }
    const knopf = $("#kd-version-ja");
    const beschrifte = () => {
      const s = (d.querySelector("input[name=kd-stufe]:checked") || {}).value || "korrektur";
      knopf.textContent = T(a.rot ? "ui.version_trotzdem" : "ui.version_anlegen", { v: naechste(f, s) });
    };
    d.querySelectorAll("input[name=kd-stufe]").forEach((r) => { r.checked = r.value === "korrektur"; r.onchange = beschrifte; });
    beschrifte();
    $("#kd-version-verstoesse").hidden = !a.rot;
    $("#kd-version-verstoesse-titel").textContent = T("ui.version_verstoesse", { n: a.rot });
    $("#kd-version-liste").replaceChildren(...a.verletzt.slice(0, 12).map((x) => el("li", { text: x })));
    knopf.onclick = () => { const s = d.querySelector("input[name=kd-stufe]:checked").value; d.close(); legeVersionAn(s, a.rot > 0); };
    const vorher = document.activeElement;
    d.addEventListener("close", () => { if (vorher && vorher.focus) vorher.focus(); }, { once: true });
    d.showModal(); d.querySelector("input[name=kd-stufe]:checked").focus();
  }
  function allesAufKern() {
    const n = anzahlAbweichungen();
    if (!n) { fluechtig(T("ui.keine_abweichung")); return; }
    frage(T("ui.dialog_kern_titel", { n }), T("ui.dialog_kern_text"), [], T("ui.alles_auf_kern"), () => {
      merke(); Z.letzteMerkung = 0; Z.stand = {}; sendeEntwurf(); zeigeZustand(); zeichneTokens(); melde(T("ui.alles_auf_kern_ansage"));
    });
  }

  /* ---------------- Feste Bedienelemente ---------------- */
  function setzeRadios() {
    for (const [name, wert] of [["kd-darstellung", Z.e.darstellung], ["kd-groesse", Z.e.groesse], ["kd-bearbeite", Z.e.bearbeite], ["kd-ordnung", Z.e.ordnung], ["kd-filter", Z.e.filter], ["kd-inspektor", Z.inspektor]])
      document.querySelectorAll("input[name=" + name + "]").forEach((r) => { r.checked = r.value === wert; });
  }
  function verdrahte() {
    setzeRadios();
    const radio = (name, fn) => document.querySelectorAll("input[name=" + name + "]").forEach((r) => r.addEventListener("change", () => fn(r.value)));
    radio("kd-darstellung", (v) => { Z.e.darstellung = v; wendeEinstellungenAn(); });
    radio("kd-groesse", (v) => { Z.e.groesse = v; wendeEinstellungenAn(); });
    radio("kd-inspektor", (v) => { Z.inspektor = v; sendeVorschau({ inspektor: v }); });
    radio("kd-bearbeite", (v) => { Z.e.bearbeite = v; wendeEinstellungenAn(); zeichneTokens(); sendeVorschau({ modus: { theme: v === "dunkel" ? "dark" : "light" } }); });
    radio("kd-ordnung", (v) => {
      Z.e.ordnung = v;
      Z.e.auswahl = v === "schicht" ? "s|semantik|farbe" : "b|kern-btn";
      wendeEinstellungenAn(); zeichneNavi(); zeichneTokens();
    });
    radio("kd-filter", (v) => { Z.e.filter = v; zeichneTokens(); });
    $("#kd-navi-schalter").addEventListener("click", () => klappeNavi(!$(".kd-navi").hasAttribute("data-offen")));
    $("#kd-einst-knopf").addEventListener("click", () => schalteEinstellungen($("#kd-einst").hidden));
    $("#kd-sprache").addEventListener("change", (e) => { Z.e.sprache = e.target.value; wendeEinstellungenAn(); alles(); });
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", wendeEinstellungenAn);
    $("#kd-suche").addEventListener("input", (e) => { Z.e.suche = e.target.value; zeichneTokens(); });
    /* Suche: Esc leert, ✕ leert, "/" springt von überall hierher (D17) */
    $("#kd-suche").addEventListener("keydown", (e) => { if (e.key === "Escape" && e.target.value) { e.preventDefault(); leereSuche(); } });
    $("#kd-suche-leeren").addEventListener("click", leereSuche);
    document.addEventListener("keydown", (e) => {
      if ((e.key !== "/" && e.key !== "?") || e.metaKey || e.ctrlKey || e.altKey) return;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) && !/^(range|radio|checkbox)$/.test(e.target.type)) return;
      e.preventDefault();
      if (e.key === "?") { const zu = $("#kd-einst").hidden; schalteEinstellungen(zu, true); if (!zu) $("#kd-einst-knopf").focus(); return; }
      $("#kd-suche").focus(); $("#kd-suche").select();
    });
    $("#kd-a11y-knopf").addEventListener("click", () => { Z.e.befundeOffen = !Z.e.befundeOffen; zeichneA11y(); });
    $("#kd-speichern").addEventListener("click", speichernGeklickt);
    $("#kd-version").addEventListener("click", versionGeklickt);
    $("#kd-version-nein").addEventListener("click", () => $("#kd-version-dialog").close());
    $("#kd-zurueck").addEventListener("click", rueckgaengig);
    $("#kd-vor").addEventListener("click", wiederholen);
    $("#kd-alles-kern").addEventListener("click", allesAufKern);
    $("#kd-meldung-ok").addEventListener("click", () => { $("#kd-meldung").hidden = true; $("#kd-speichern").focus(); });
    $("#kd-dialog-nein").addEventListener("click", () => $("#kd-dialog").close());
    document.addEventListener("keydown", (e) => {
      if (!(e.metaKey || e.ctrlKey)) return;
      const taste = e.key.toLowerCase();
      if (taste === "s") { e.preventDefault(); speichernGeklickt(); return; }
      if (taste !== "z") return;
      const tippt = /^(INPUT|TEXTAREA)$/.test(e.target.tagName) && !/^(range|radio|checkbox)$/.test(e.target.type);
      if (tippt) return;                                   // im Textfeld gilt das Rückgängig des Feldes
      e.preventDefault(); e.shiftKey ? wiederholen() : rueckgaengig();
    });
    /* Höhen von Kopf und A11y-Leiste: für scroll-padding und die Entscheidung, ob sie
       angedockt bleiben (D15: sonst verdecken sie in kleinen Fenstern fast alles) */
    const andocken = () => {
      const root = document.documentElement, k = $(".kd-kopf").offsetHeight, a = $(".kd-a11y").offsetHeight;
      root.style.setProperty("--kd-kopf-hoehe", k + "px"); root.style.setProperty("--kd-a11y-hoehe", a + "px");
      root.toggleAttribute("data-kd-kopf-fest", k <= innerHeight * 0.3);
      root.toggleAttribute("data-kd-a11y-fest", k + a <= innerHeight * 0.45);
    };
    const hoehen = new ResizeObserver(andocken);
    hoehen.observe($(".kd-kopf")); hoehen.observe($(".kd-a11y"));
    window.addEventListener("resize", andocken);
  }

  function alles() { zeichneTexte(); zeigeZustand(); zeichneNavi(); zeichneTokens(); zeichneA11y(); }

  /* ---------------- Start ---------------- */
  async function start() {
    wendeEinstellungenAn();
    const [tj, begriffe, zustand] = await Promise.all([
      fetch(SYSTEM + "token.json", { cache: "no-store" }).then((r) => r.json()),
      fetch(SYSTEM + "katalog/begriffe.json", { cache: "no-store" }).then((r) => r.json()),
      fetch("/api/zustand", { cache: "no-store" }).then((r) => (r.ok ? r.json() : null)).catch(() => null)
    ]);
    Object.assign(Z.tokens, tj.kern);
    /* Erweiterungs-Tokens (--kn-*) dazunehmen; Einträge zu KERN-Namen in "erweiterung"
       sind Werte für den Kontrastmodus (E3) — hier nicht bearbeitbar. */
    for (const [n, t] of Object.entries(tj.erweiterung)) if (!Z.tokens[n]) Z.tokens[n] = Object.assign({ schicht: "semantik" }, t);
    for (const [name, t] of Object.entries(Z.tokens)) for (const ziel of Object.values(t.verweis || {})) (Z.abhaengige[ziel] = Z.abhaengige[ziel] || new Set()).add(name);
    for (const e of [...begriffe.kern, ...begriffe.erweiterungen]) Z.begriffe[e.code] = e;
    /* Zeit des letzten Zwischenstands steht in der Datei; nach einer neuen Fassung gilt die Fassung */
    const zw = await fetch(SYSTEM + "thema/zwischenstand.json", { cache: "no-store" }).then((r) => (r.ok ? r.json() : null)).catch(() => null);
    if (zw && zustand && zw.fassung === (zustand.fassung || {}).fassung && !/Fassung \(/.test(zw.hinweis || "")) Z.zwischenZeit = uhrzeit(zw.zeit);
    Z.ohneStand = !zustand;                                                     // D34
    if (zustand) { Z.thema = zustand.thema || {}; Z.zwischen = zustand.zwischenstand || Z.thema; Z.stand = zustand.entwurf || {}; Z.fassung = zustand.fassung; Z.nummer = zustand.nummer; Z.fenster = zustand.fenster; Z.inspektor = zustand.inspektor || "zeigen"; }
    /* Gemerkte Auswahl prüfen (ältere Fassungen speicherten ein anderes Format) */
    const [art0, a1, a2] = Z.e.auswahl.split("|");
    const gueltig = art0 === "b" ? !!KD_VERWENDUNG.bausteine[a1] : art0 === "s" && Object.values(Z.tokens).some((t) => t.schicht === a1 && t.gruppe === a2);
    if (!gueltig) { Z.e.ordnung = "schicht"; Z.e.auswahl = "s|semantik|farbe"; }
    verdrahte();
    alles();
    if (Z.ohneStand) stehend(T("ui.zustand_fehler"));
    const bereit = () => { messrahmenCss(zustand ? zustand.entwurfCss : ""); setzeRahmenModus(Z.e.bearbeite); };
    if (rahmen.contentDocument && rahmen.contentDocument.readyState === "complete" && rahmen.contentDocument.getElementById("entwurf")) bereit();
    else rahmen.addEventListener("load", bereit);
    verbinde();
    sendeVorschau({ modus: { theme: Z.e.bearbeite === "dunkel" ? "dark" : "light" } });
  }
  start();
})();
