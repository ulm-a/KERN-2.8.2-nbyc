#!/usr/bin/env python3
"""
KERN Designer — lokaler Server (nur Python-Standardbibliothek, kein Paket).

Aufgabe (Instruction Designer 2.8.2 (nbyc), Abschnitt 3):
  - liefert den Projektordner aus (OnePager, Designer, System)
  - nimmt Entwürfe des Designers an, schreibt sie als CSS und meldet sie per
    Server-Sent Events an alle offenen Fenster — auch in anderen Browsern
  - reicht Messwerte des OnePagers und Vorschau-Einstellungen weiter

Speichern (Instruction Designer Abschnitt 8, Entscheidung Q3 vom 16.10.2026):
  POST /api/zwischenstand  "Werte speichern": sichert den Stand in thema/zwischenstand.json
                           und committet NUR diese Datei; die Fassung bleibt.
  POST /api/version        "Neue Version": Korrektur, Neben- oder Hauptversion; schreibt
                           Thema (CSS + DTCG-JSON), Fassung, Zwischenstand und einen Eintrag
                           in "Changes Designer" (mit den Zwischenständen seit der letzten
                           Version), committet genau diese Dateien, Tag 2.8.2-nbyc-<Fassung>.

Sicherheit:
  - hört nur auf 127.0.0.1; prüft Host- und Origin-Kopf (gegen DNS-Rebinding)
  - schreibt NUR die Dateien in SCHREIBBAR (feste Liste, keine Pfade von außen)
  - nimmt nur Token-Namen an, die es in token.json gibt, und nur Werte ohne
    Zeichen, die aus einer CSS-Deklaration ausbrechen könnten

Start: python3 "KERN Designer/server/server.py"   (oder Doppelklick auf "KERN Designer [ Start ].command" im Projektordner)
"""
import json
import os
import queue
import re
import subprocess
import sys
import threading
import time
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse

# ---- Variablen (Werte aus Instruction Designer, Abschnitt 0) -----------------
HOST = "127.0.0.1"
PORT = int(os.environ.get("KD_PORT", "8059"))   # anderer Port nur für Proben in einer Kopie
MAX_KOERPER = 1_000_000          # Bytes je Anfrage
HERZSCHLAG = 15                  # Sekunden zwischen Lebenszeichen im SSE-Strom

HIER = os.path.dirname(os.path.abspath(__file__))
PROJEKT = os.path.dirname(os.path.dirname(HIER))          # "2026 KERN 2.8.2 (nbyc)"
SYSTEM = os.path.join(PROJEKT, "KERN 2.8.2 (nbyc)")
THEMA = os.path.join(SYSTEM, "thema")
TOKEN_JSON = os.path.join(SYSTEM, "token.json")
FASSUNG_JSON = os.path.join(THEMA, "fassung.json")
ENTWURF_CSS = os.path.join(THEMA, "entwurf.css")
ENTWURF_JSON = os.path.join(THEMA, "entwurf.json")
THEMA_CSS = os.path.join(THEMA, "kern-thema.css")
THEMA_TOKENS = os.path.join(THEMA, "kern-thema.tokens.json")
ZWISCHENSTAND = os.path.join(THEMA, "zwischenstand.json")
STUFEN = ("korrektur", "neben", "haupt")         # Semver: Korrektur.Neben.Haupt rückwärts
CHANGES = os.path.join(PROJEKT, "_ Instructions", "Changes Designer 2.8.2 (nbyc).txt")
TAG_VORLAGE = "2.8.2-nbyc-{fassung}"            # TAG_JE_FASSUNG (Instruktion, Abschnitt 0)
ERWEITERUNG = "de.kern-nbyc.designer"           # Schlüssel in $extensions (DTCG)

# Einzige Dateien, die der Server schreibt.
SCHREIBBAR = {ENTWURF_CSS, ENTWURF_JSON, THEMA_CSS, THEMA_TOKENS, FASSUNG_JSON, CHANGES, ZWISCHENSTAND}

ERLAUBTE_URSPRUENGE = {f"http://{HOST}:{PORT}", f"http://localhost:{PORT}"}
ERLAUBTE_HOSTS = {f"{HOST}:{PORT}", f"localhost:{PORT}"}

# Modus → Selektoren, genau wie kern.css sie setzt (gleiche Spezifität,
# das Thema steht später in der Kaskade und gewinnt). Reihenfolge zählt:
# zuerst die Medienabfragen, dann die ausdrücklichen Themen-Attribute.
MODI = {
    "grund":  [":root"],
    "hell":   ["@media (prefers-color-scheme: light) { :root:not([data-kern-theme=dark]):not(.kern-dark)",
               "[data-kern-theme=light], .kern-light"],
    "dunkel": ["@media (prefers-color-scheme: dark) { :root:not([data-kern-theme=light]):not(.kern-light)",
               "[data-kern-theme=dark], .kern-dark"],
    "ab-md":  ["@media (min-width: 768px) { :root"],
    "ebene-0": [":is(body, .kern-light, .kern-dark, [data-kern-theme=light], [data-kern-theme=dark])"
                ":not([class*=kern-level-]), .kern-layer.kern-level-0"],
    "ebene-1": [".kern-level-1"],
    "ebene-2": [".kern-level-2"],
}
MODUS_REIHENFOLGE = ["grund", "ab-md", "hell", "dunkel", "ebene-0", "ebene-1", "ebene-2"]

NAME_MUSTER = re.compile(r"^--(kern|kn)-[a-z0-9-]+$")
# Werte: Zahlen, Einheiten, Farben (oklch/rgb/hex), var(), calc(), Schriftnamen.
# Verboten sind Zeichen, mit denen man aus der Deklaration ausbrechen kann.
WERT_VERBOTEN = re.compile(r"[;{}<>\\]|/\*|\*/|@")


def lies_json(pfad, ersatz=None):
    try:
        with open(pfad, encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        if ersatz is not None:
            return ersatz
        raise


def schreibe(pfad, text):
    """Schreibt atomar — und nur Dateien aus SCHREIBBAR."""
    if pfad not in SCHREIBBAR:
        raise PermissionError(f"Server darf {pfad} nicht schreiben")
    tmp = pfad + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        f.write(text)
    os.replace(tmp, pfad)


def lade_tokens():
    """KERN-Tokens + eigene --kn-Tokens (Einträge zu KERN-Namen in "erweiterung" sind
    Werte für den Kontrastmodus und hier nicht bearbeitbar)."""
    d = lies_json(TOKEN_JSON)
    tokens = dict(d.get("kern", {}))
    for n, e in d.get("erweiterung", {}).items():
        tokens.setdefault(n, e)
    return tokens


def bekannte_tokens():
    return set(lade_tokens())


def lade_thema():
    """Werte der gespeicherten Fassung (Abweichungen von KERN je Modus)."""
    d = lies_json(THEMA_TOKENS, {})
    return d.get("$extensions", {}).get(ERWEITERUNG, {}).get("werte", {})


def mit_ruecksetzungen(stand, thema, tokens):
    """Entwurf-CSS muss auch Tokens enthalten, die im Thema abweichen, im Entwurf aber
    wieder KERN sind — sonst bliebe der Themenwert stehen."""
    werte = json.loads(json.dumps(stand))
    for modus, t in thema.items():
        for name in t:
            if name not in werte.get(modus, {}):
                kern = tokens.get(name, {}).get("werte", {}).get(modus)
                if kern is not None:
                    werte.setdefault(modus, {})[name] = kern
    return werte


def css_aus_werten(werte, titel):
    """werte = {modus: {token: wert}} → CSS-Text (nur gesetzte Modi)."""
    zeilen = [f"/* {titel} — erzeugt vom KERN Designer, nicht von Hand ändern */"]
    for modus in MODUS_REIHENFOLGE:
        tokens = werte.get(modus) or {}
        if not tokens:
            continue
        rumpf = "".join(f"  {name}: {wert};\n" for name, wert in sorted(tokens.items()))
        for sel in MODI[modus]:
            if sel.startswith("@media"):
                zeilen.append(f"{sel} {{\n{rumpf}}} }}")
            else:
                zeilen.append(f"{sel} {{\n{rumpf}}}")
    return "\n".join(zeilen) + "\n"


def pruefe_werte(werte, erlaubt):
    """Gibt (bereinigt, fehler) zurück; fehler = Liste lesbarer Gründe."""
    fehler, sauber = [], {}
    if not isinstance(werte, dict):
        return {}, ["werte ist kein Objekt"]
    for modus, tokens in werte.items():
        if modus not in MODI:
            fehler.append(f"unbekannter Modus: {modus}")
            continue
        if not isinstance(tokens, dict):
            fehler.append(f"{modus}: kein Objekt")
            continue
        for name, wert in tokens.items():
            if not NAME_MUSTER.match(str(name)) or name not in erlaubt:
                fehler.append(f"unbekannter Token: {name}")
            elif not isinstance(wert, str) or not wert.strip() or len(wert) > 200 or WERT_VERBOTEN.search(wert):
                fehler.append(f"ungültiger Wert für {name}")
            else:
                sauber.setdefault(modus, {})[name] = wert.strip()
    return sauber, fehler


# ---- Speichern: Fassung, Thema, Changes, Git -------------------------------
def naechste_fassung(f, stufe="korrektur"):
    """0.1.0 → Korrektur 0.1.1 · Neben 0.2.0 · Haupt 1.0.0 (Q3, geändert 16.10.2026)."""
    haupt, neben, korrektur = [int(x) for x in f.split(".")]
    if stufe == "haupt":
        return f"{haupt + 1}.0.0"
    if stufe == "neben":
        return f"{haupt}.{neben + 1}.0"
    return f"{haupt}.{neben}.{korrektur + 1}"


def lade_zwischenstand():
    """Zuletzt mit "Werte speichern" gesicherter Stand; ohne Datei gilt die Fassung."""
    d = lies_json(ZWISCHENSTAND, {})
    return d["werte"] if "werte" in d else lade_thema()


def anzahl_werte(werte):
    return sum(len(t) for t in werte.values())


def loese_auf(wert, modus, stand, tokens, tiefe=0):
    """var(--x) durch Werte ersetzen (Entwurf vor KERN; hell/dunkel fallen auf grund
    zurück). Für das DTCG-Format: dort zählen Werte, keine CSS-Verweise."""
    if tiefe > 12:
        return wert

    def ersetze(m):
        name = m.group(1)
        for quelle in (stand.get(modus, {}), stand.get("grund", {})):
            if name in quelle:
                return loese_auf(quelle[name], modus, stand, tokens, tiefe + 1)
        w = tokens.get(name, {}).get("werte", {})
        roh = w.get(modus, w.get("grund"))
        return loese_auf(roh, modus, stand, tokens, tiefe + 1) if roh is not None else m.group(0)
    return re.sub(r"var\((--[a-z0-9-]+)\)", ersetze, wert)


def dtcg_token(name, wert, modus, stand, tokens):
    """Ein Token im Format DTCG 2025.10; nicht eindeutig typisierbar → None."""
    aufgeloest = loese_auf(wert, modus, stand, tokens).strip()
    gruppe = tokens.get(name, {}).get("gruppe")
    erw = {"$extensions": {ERWEITERUNG: {"css": wert, "aufgeloest": aufgeloest}}}
    m = re.fullmatch(r"oklch\(\s*([\d.]+)%\s+([\d.]+)\s+([\d.]+)\s*\)", aufgeloest)
    if gruppe == "farbe" and m:
        return dict({"$type": "color", "$value": {"colorSpace": "oklch",
                     "components": [round(float(m.group(1)) / 100, 5), float(m.group(2)), float(m.group(3))]}}, **erw)
    m = re.fullmatch(r"(-?[\d.]+)(rem|px)", aufgeloest)
    if m:
        return dict({"$type": "dimension", "$value": {"value": float(m.group(1)), "unit": m.group(2)}}, **erw)
    if re.fullmatch(r"\d{3}", aufgeloest) and "weight" in name:
        return dict({"$type": "fontWeight", "$value": int(aufgeloest)}, **erw)
    return None


def dtcg_datei(stand, fassung, tokens, a11y):
    datei = {
        "$description": f"KERN 2.8.2 (nbyc) — Thema, Fassung {fassung}. Nur Abweichungen von KERN. "
                        "Format: Design Tokens Format Module 2025.10 (DTCG); Modi als Gruppen. "
                        "Erzeugt vom KERN Designer, nicht von Hand ändern.",
        "$extensions": {ERWEITERUNG: {"fassung": fassung, "werte": stand, "a11y": a11y, "nur_css": {}}},
    }
    for modus in MODUS_REIHENFOLGE:
        for name, wert in sorted(stand.get(modus, {}).items()):
            tok = dtcg_token(name, wert, modus, stand, tokens)
            if tok:
                datei.setdefault(modus, {})[name.lstrip("-")] = tok
            else:                                   # z. B. calc(), Schriftfamilien, Schatten
                datei["$extensions"][ERWEITERUNG]["nur_css"].setdefault(modus, {})[name] = wert
    return datei


def changes_eintrag(fassung_alt, fassung_neu, alt, neu, tokens, a11y, bestaetigt, stufe="korrektur", zwischen=()):
    """Neue Zwischenüberschrift je Fassung (GI §11) mit Kennung, WAS/WARUM/BELEG.
    Gibt (Kennungsnummer, neuer Text) zurück und SCHREIBT NICHTS — der Aufrufer schreibt
    erst, wenn alle Dateien der Fassung fehlerfrei erzeugt sind (D31)."""
    text = open(CHANGES, encoding="utf-8").read()
    m = re.search(r"NÄCHSTE FREIE KENNUNG: D(\d+)", text)
    if not m:
        raise ValueError(f"{CHANGES}: Zeile 'NÄCHSTE FREIE KENNUNG: D<n>' fehlt")
    nr = int(m.group(1))
    zeilen = []
    for modus in MODUS_REIHENFOLGE:
        namen = sorted(set(alt.get(modus, {})) | set(neu.get(modus, {})))
        for n in namen:
            a, b = alt.get(modus, {}).get(n), neu.get(modus, {}).get(n)
            if a == b:
                continue
            kern = tokens.get(n, {}).get("werte", {}).get(modus, "?")
            zeilen.append(f"              {modus:7} {n}: {a or 'KERN ' + kern} → {b or 'KERN ' + kern}")
    datum = time.strftime("%d.%m.%Y %H:%M")
    vermerk = "  —  MIT A11y-VERSTÖSSEN (bestätigt)" if bestaetigt and a11y.get("rot") else ""
    stufe_text = {"korrektur": "Korrektur", "neben": "Nebenversion", "haupt": "Hauptversion"}[stufe]
    eintrag = (f"FASSUNG {fassung_neu}  —  angelegt {datum} im KERN Designer ({stufe_text}){vermerk}\n" + "-" * 80 + "\n\n"
               f"D{nr}  FASSUNG {fassung_neu} ({stufe_text.upper()})  {datum[:10]}\n"
               f"     WAS    {len(zeilen)} Änderung{'' if len(zeilen) == 1 else 'en'} gegenüber Fassung {fassung_alt}:\n" + "\n".join(zeilen) + "\n")
    if zwischen:
        eintrag += f"            Zwischenstände seit Fassung {fassung_alt} (Git):\n" + "".join(
            "              " + re.sub(r"\s+", " ", z)[:150] + "\n" for z in zwischen[:30])
    eintrag += (f"     WARUM  \"Neue Version\" ({stufe_text}) im KERN Designer (Nutzerin).\n"
               f"     BELEG  A11y beim Anlegen: {a11y.get('rot', '?')} verletzt · {a11y.get('gelb', '?')} unter KERN-"
               f"Anspruch · {a11y.get('gruen', '?')} erfüllt · {a11y.get('grau', '?')} nicht geprüft.\n")
    for v in (a11y.get("verletzt") or [])[:20]:
        eintrag += "              verletzt: " + re.sub(r"\s+", " ", str(v))[:160] + "\n"
    eintrag += f"            Git-Tag {TAG_VORLAGE.format(fassung=fassung_neu)}.\n\n"
    pos = text.find("FASSUNG ")                     # über der bisher neuesten Fassung
    if pos < 0:
        raise ValueError(f"{CHANGES}: keine Überschrift 'FASSUNG …' gefunden")
    text = text[:pos] + eintrag + text[pos:]
    text = text.replace(m.group(0), f"NÄCHSTE FREIE KENNUNG: D{nr + 1}", 1)
    return nr, text


def git(*argumente):
    r = subprocess.run(["git", "-C", PROJEKT, *argumente], capture_output=True, text=True, timeout=30)
    if r.returncode != 0:
        raise RuntimeError(f"git {argumente[0]}: {(r.stderr or r.stdout).strip()[:300]}")
    return r.stdout.strip()


# ---- Ereignisse (SSE) -------------------------------------------------------
class Verteiler:
    def __init__(self):
        self.lock = threading.Lock()
        self.hoerer = set()

    def anmelden(self):
        q = queue.Queue(maxsize=200)
        with self.lock:
            self.hoerer.add(q)
        return q

    def abmelden(self, q):
        with self.lock:
            self.hoerer.discard(q)

    def senden(self, art, daten):
        nachricht = f"event: {art}\ndata: {json.dumps(daten, ensure_ascii=False)}\n\n"
        with self.lock:
            for q in list(self.hoerer):
                try:
                    q.put_nowait(nachricht)
                except queue.Full:          # Fenster hängt — nicht alle aufhalten
                    self.hoerer.discard(q)

    def anzahl(self):
        with self.lock:
            return len(self.hoerer)


VERTEILER = Verteiler()
ZUSTAND_LOCK = threading.Lock()
# nummer: laufende Nummer (GI §8, späte Rückmeldung). Beginnt bei der Startzeit in ms, nicht bei 0 (D30):
# sonst verwarfen offene Fenster nach einem Neustart des Servers jedes Ereignis als "veraltet"
# (ihre letzte Nummer war größer). Ein Lauf zählt höchstens ein Ereignis je Eingabe hoch — weit
# weniger als die Millisekunden bis zum nächsten Start.
ZUSTAND = {"entwurf": {}, "nummer": int(time.time() * 1000), "inspektor": None}   # inspektor: aus/zeigen/alt (D21), nur im Speicher


def lade_entwurf():
    """Ohne Entwurf gilt die gespeicherte Fassung als Stand."""
    gespeichert = lies_json(ENTWURF_JSON, {})
    ZUSTAND["entwurf"] = gespeichert["werte"] if "werte" in gespeichert else lade_thema()


def entwurf_css():
    if not os.path.exists(ENTWURF_CSS):
        return ""
    with open(ENTWURF_CSS, encoding="utf-8") as f:
        return f.read()


# ---- HTTP -------------------------------------------------------------------
class Anfrage(SimpleHTTPRequestHandler):
    server_version = "KERNDesigner/0.1"

    def __init__(self, *a, **k):
        super().__init__(*a, directory=PROJEKT, **k)

    def log_message(self, fmt, *args):     # leise; nur Fehler zeigen
        if args and str(args[1])[:1] in "45":
            sys.stderr.write("%s  %s\n" % (self.address_string(), fmt % args))

    # -- Schutz --
    def _host_ok(self):
        return self.headers.get("Host", "") in ERLAUBTE_HOSTS

    def _ursprung_ok(self):
        o = self.headers.get("Origin")
        return o is None or o in ERLAUBTE_URSPRUENGE

    def _antwort(self, code, daten):
        roh = json.dumps(daten, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(roh)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(roh)

    def _koerper(self):
        n = int(self.headers.get("Content-Length", "0") or 0)
        if n > MAX_KOERPER:
            raise ValueError("Anfrage zu groß")
        return json.loads(self.rfile.read(n) or b"{}")

    def end_headers(self):
        # Entwicklungsserver: nie zwischenspeichern (GI §2, Zwischenspeicher)
        if not self.path.startswith("/api/"):
            self.send_header("Cache-Control", "no-store")
        super().end_headers()

    # -- GET --
    def do_GET(self):
        if not self._host_ok():
            return self.send_error(403, "Host nicht erlaubt")
        pfad = urlparse(self.path).path
        if any(teil.startswith(".") for teil in pfad.split("/") if teil):
            return self.send_error(404)
        if pfad == "/api/ereignisse":
            return self._ereignisse()
        if pfad == "/api/zustand":
            with ZUSTAND_LOCK:
                return self._antwort(200, {
                    "fassung": lies_json(FASSUNG_JSON),
                    "thema": lade_thema(),
                    "zwischenstand": lade_zwischenstand(),
                    "entwurf": ZUSTAND["entwurf"],
                    "entwurfCss": entwurf_css(),
                    "nummer": ZUSTAND["nummer"],
                    "fenster": VERTEILER.anzahl(),
                    "inspektor": ZUSTAND["inspektor"],
                })
        if pfad == "/":
            self.send_response(302)
            self.send_header("Location", "/KERN%20Designer/")
            return self.end_headers()
        return super().do_GET()

    def _ereignisse(self):
        q = VERTEILER.anmelden()
        try:
            self.send_response(200)
            self.send_header("Content-Type", "text/event-stream; charset=utf-8")
            self.send_header("Cache-Control", "no-store")
            self.send_header("X-Accel-Buffering", "no")
            self.end_headers()
            self.wfile.write(b"retry: 1000\n\n")
            self.wfile.flush()
            VERTEILER.senden("fenster", {"anzahl": VERTEILER.anzahl()})
            while True:
                try:
                    nachricht = q.get(timeout=HERZSCHLAG)
                except queue.Empty:
                    nachricht = ": lebt\n\n"
                self.wfile.write(nachricht.encode("utf-8"))
                self.wfile.flush()
        except (BrokenPipeError, ConnectionResetError, OSError):
            pass
        finally:
            VERTEILER.abmelden(q)
            VERTEILER.senden("fenster", {"anzahl": VERTEILER.anzahl()})

    # -- Werte speichern = Zwischenstand (Fassung bleibt) --
    def _zwischenstand(self, daten):
        sauber, fehler = pruefe_werte(daten.get("werte", {}), bekannte_tokens())
        if fehler:
            return self._antwort(400, {"ok": False, "fehler": fehler})
        with ZUSTAND_LOCK:
            if sauber == lade_zwischenstand():
                return self._antwort(400, {"ok": False, "fehler": ["nichts zu speichern"]})
            f = lies_json(FASSUNG_JSON)["fassung"]
            zeit = time.strftime("%Y-%m-%d %H:%M:%S")
            n = anzahl_werte(sauber)
            schreibe(ZWISCHENSTAND, json.dumps({
                "hinweis": "Zwischenstand aus \"Werte speichern\" im KERN Designer. Fassung bleibt; eine neue "
                           "Fassung entsteht nur mit \"Neue Version\". Nicht von Hand ändern.",
                "fassung": f, "zeit": zeit, "abweichungen_von_kern": n, "werte": sauber}, ensure_ascii=False, indent=1) + "\n")
            commit, git_fehler = "", None
            try:
                datei = os.path.relpath(ZWISCHENSTAND, PROJEKT)
                git("add", "--", datei)
                git("commit", "-q", "-m", f"Zwischenstand auf Fassung {f} (KERN Designer, Abweichungen von KERN: {n})", "--", datei)
                commit = git("rev-parse", "--short", "HEAD")
            except (RuntimeError, OSError, subprocess.TimeoutExpired) as e:
                git_fehler = str(e)
        VERTEILER.senden("zwischenstand", {"werte": sauber, "zeit": zeit, "commit": commit})
        return self._antwort(200, {"ok": True, "zeit": zeit, "commit": commit, "fassung": f, "git_fehler": git_fehler})

    # -- Neue Version --
    def _version(self, daten):
        tokens = lade_tokens()
        sauber, fehler = pruefe_werte(daten.get("werte", {}), set(tokens))
        if fehler:
            return self._antwort(400, {"ok": False, "fehler": fehler})
        a11y = daten.get("a11y") or {}
        bestaetigt = bool(daten.get("bestaetigt"))
        stufe = daten.get("stufe", "korrektur")
        if stufe not in STUFEN:
            return self._antwort(400, {"ok": False, "fehler": [f"unbekannte Stufe: {stufe}"]})
        if not isinstance(a11y, dict):
            a11y = {}
        if a11y.get("rot") and not bestaetigt:          # Q4: nur nach Rückfrage
            return self._antwort(409, {"ok": False, "fehler": ["A11y-Verstöße — Bestätigung fehlt"]})
        with ZUSTAND_LOCK:
            alt = lade_thema()
            if alt == sauber:
                return self._antwort(400, {"ok": False, "fehler": ["nichts zu speichern"]})
            f_alt = lies_json(FASSUNG_JSON)
            f_neu_nr = naechste_fassung(f_alt["fassung"], stufe)
            try:                                        # Zwischenstände seit der letzten Fassung
                rel = lambda x: os.path.relpath(x, PROJEKT)
                seit = git("log", "-1", "--format=%H", "--", rel(FASSUNG_JSON))
                zwischen = git("log", "--format=%h %ad %s", "--date=format:%d.%m.%Y %H:%M",
                               f"{seit}..HEAD", "--", rel(ZWISCHENSTAND)).splitlines() if seit else []
            except (RuntimeError, OSError, subprocess.TimeoutExpired):
                zwischen = []
            a11y_kurz = {k: a11y.get(k) for k in ("rot", "gelb", "gruen", "grau")}
            vermerk = "mit A11y-Verstößen (bestätigt)" if a11y.get("rot") else "ohne A11y-Verstoß"
            f_neu = dict(f_alt, fassung=f_neu_nr, datum=time.strftime("%Y-%m-%d"), a11y=vermerk,
                         hinweis=f_alt.get("hinweis", ""))
            kopf = (f"/* KERN 2.8.2 (nbyc) — Thema, Fassung {f_neu_nr} ({f_neu['datum']}, {vermerk})\n"
                    "   Erzeugt vom KERN Designer (\"Neue Version\"), nicht von Hand ändern.\n"
                    "   Steht NACH kern-neu.css; kern.css bleibt unverändert (E8, E11). */\n"
                    f":root {{ --kd-thema-fassung: \"{f_neu_nr}\"; }}\n")
            # D31: ERST alles erzeugen, DANN schreiben. Vorher wurden Thema und fassung.json
            # geschrieben, bevor der Changes-Eintrag scheitern konnte — dann war die Fassung
            # hochgezählt, ohne Eintrag, ohne Commit, und der Browser bekam keine Antwort.
            try:
                zu_schreiben = [
                    (THEMA_CSS, kopf + css_aus_werten(sauber, f"Thema {f_neu_nr}").split("\n", 1)[1]),
                    (THEMA_TOKENS, json.dumps(dtcg_datei(sauber, f_neu_nr, tokens, a11y_kurz), ensure_ascii=False, indent=1) + "\n"),
                    (FASSUNG_JSON, json.dumps(f_neu, ensure_ascii=False, indent=1) + "\n"),
                ]
                # Ohne Changes-Datei (Paket ohne "_ Instructions") entsteht die Fassung trotzdem, nur ohne Eintrag (D28)
                nr = None
                if os.path.exists(CHANGES):
                    nr, changes_neu = changes_eintrag(f_alt["fassung"], f_neu_nr, alt, sauber, tokens, a11y, bestaetigt, stufe, zwischen)
                    zu_schreiben.append((CHANGES, changes_neu))
                zu_schreiben += [
                    (ZWISCHENSTAND, json.dumps({
                        "hinweis": "Zwischenstand = Fassung (\"Neue Version\"). Nicht von Hand ändern.",
                        "fassung": f_neu_nr, "zeit": time.strftime("%Y-%m-%d %H:%M:%S"),
                        "abweichungen_von_kern": anzahl_werte(sauber), "werte": sauber}, ensure_ascii=False, indent=1) + "\n"),
                    (ENTWURF_CSS, f"/* Entwurf = Fassung {f_neu_nr} (gespeichert) */\n"),
                    (ENTWURF_JSON, json.dumps({"werte": sauber, "zeit": time.strftime("%Y-%m-%d %H:%M:%S")}, ensure_ascii=False, indent=1)),
                ]
            except (ValueError, OSError) as e:
                return self._antwort(500, {"ok": False, "fehler": [f"Fassung nicht angelegt, nichts geschrieben: {e}"]})
            try:
                for pfad, text in zu_schreiben:
                    schreibe(pfad, text)
            except OSError as e:
                return self._antwort(500, {"ok": False, "fehler": [f"Fassung nur teilweise geschrieben: {e}"]})
            ZUSTAND["entwurf"] = sauber
            ZUSTAND["nummer"] += 1
            nummer = ZUSTAND["nummer"]
            commit, tag, git_fehler = "", TAG_VORLAGE.format(fassung=f_neu_nr), None
            try:
                dateien = [os.path.relpath(x, PROJEKT) for x in (THEMA_CSS, THEMA_TOKENS, FASSUNG_JSON, CHANGES, ZWISCHENSTAND) if os.path.exists(x)]
                git("add", "--", *dateien)
                git("commit", "-q", "-m", (f"D{nr} " if nr else "") + f"Fassung {f_neu_nr} ({stufe}, KERN Designer, {vermerk})", "--", *dateien)
                git("tag", tag)
                commit = git("rev-parse", "--short", "HEAD")
            except (RuntimeError, OSError, subprocess.TimeoutExpired) as e:
                git_fehler = str(e)
        VERTEILER.senden("gespeichert", {"fassung": f_neu, "thema": sauber, "zwischenstand": sauber, "nummer": nummer})
        return self._antwort(200, {"ok": True, "fassung": f_neu, "thema": sauber, "commit": commit,
                                   "tag": tag if not git_fehler else "", "kennung": f"D{nr}" if nr else "",
                                   "git_fehler": git_fehler})

    # -- POST --
    def do_POST(self):
        if not self._host_ok() or not self._ursprung_ok():
            return self.send_error(403, "Ursprung nicht erlaubt")
        pfad = urlparse(self.path).path
        try:
            daten = self._koerper()
        except (ValueError, json.JSONDecodeError) as e:
            return self._antwort(400, {"ok": False, "fehler": [str(e)]})

        if pfad == "/api/entwurf":
            sauber, fehler = pruefe_werte(daten.get("werte", {}), bekannte_tokens())
            if fehler:
                return self._antwort(400, {"ok": False, "fehler": fehler})
            with ZUSTAND_LOCK:
                ZUSTAND["nummer"] += 1
                nummer = ZUSTAND["nummer"]
                ZUSTAND["entwurf"] = sauber
                fassung = lies_json(FASSUNG_JSON)
                css = css_aus_werten(mit_ruecksetzungen(sauber, lade_thema(), lade_tokens()),
                                     f"Entwurf auf Fassung {fassung['fassung']}")
                schreibe(ENTWURF_CSS, css)
                schreibe(ENTWURF_JSON, json.dumps({"werte": sauber, "zeit": time.strftime("%Y-%m-%d %H:%M:%S")},
                                                  ensure_ascii=False, indent=1))
            VERTEILER.senden("entwurf", {"css": css, "werte": sauber, "nummer": nummer,
                                         "quelle": daten.get("quelle", "")})
            return self._antwort(200, {"ok": True, "nummer": nummer})

        if pfad == "/api/zwischenstand":
            return self._zwischenstand(daten)

        if pfad == "/api/version":
            return self._version(daten)

        if pfad == "/api/vorschau":
            # Modus, Sprache, Hervorheben — nur weiterreichen, nichts schreiben
            erlaubt = {k: daten[k] for k in ("modus", "sprache", "hervorheben", "quelle") if k in daten}
            # Inspektor im OnePager → Token im Designer zeigen (nur bekannte Namen und Modi)
            if NAME_MUSTER.match(str(daten.get("zeige_token", ""))) and daten["zeige_token"] in bekannte_tokens():
                erlaubt["zeige_token"] = daten["zeige_token"]
                if daten.get("token_modus") in MODI:
                    erlaubt["token_modus"] = daten["token_modus"]
            # Inspektor-Modus (D21): eine Einstellung für Designer und alle OnePager
            if daten.get("inspektor") in ("aus", "zeigen", "alt"):
                with ZUSTAND_LOCK:
                    ZUSTAND["inspektor"] = daten["inspektor"]
                erlaubt["inspektor"] = daten["inspektor"]
            VERTEILER.senden("vorschau", erlaubt)
            return self._antwort(200, {"ok": True})

        if pfad == "/api/messung":
            VERTEILER.senden("messung", daten)
            return self._antwort(200, {"ok": True})

        return self._antwort(404, {"ok": False, "fehler": ["unbekannte Adresse"]})


def main():
    os.makedirs(THEMA, exist_ok=True)
    lies_json(FASSUNG_JSON)                  # fehlt sie, bricht der Start laut ab (GI §8)
    lade_entwurf()
    server = ThreadingHTTPServer((HOST, PORT), Anfrage)
    server.daemon_threads = True
    print(f"KERN Designer läuft:  http://{HOST}:{PORT}/KERN%20Designer/")
    print(f"KERN OnePager:        http://{HOST}:{PORT}/KERN%20OnePager/")
    print("Beenden mit ctrl+C.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
