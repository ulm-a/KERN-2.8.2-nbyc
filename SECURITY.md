# Sicherheit

## Was dieses System ist

CSS- und JavaScript-Dateien, die eine Seite ausliefert. Es gibt **keinen Server, keine
Datenbank, keine Anmeldung** und keine Laufzeit-Abhängigkeit aus dem Netz: keine CDNs,
keine Google Fonts, keine Analyse, keine Tracker. Alles liegt örtlich.

Zwei Werkzeuge bringen einen lokalen Entwicklungsserver mit:

* **KERN Designer** (`KERN Designer/server/server.py`) — bindet an `127.0.0.1` und
  schreibt nur in eine feste Liste von Dateien des Themas.
* **Storybook** (`npm run storybook`) — Entwicklungsserver, lauscht auf
  `127.0.0.1:6006`.

Beide sind für die Arbeit am System gedacht, **nicht für den Betrieb** und nicht dafür,
im Netz erreichbar zu sein.

## Eine Lücke melden

Bitte **kein öffentliches Issue** für etwas, das ausnutzbar ist. Stattdessen über
GitHubs „Report a vulnerability" (Security Advisories) oder, falls das nicht möglich
ist, über die Person, von der dieses Repository kommt.

Hilfreich sind: betroffene Datei und Fassung, Browser und Betriebssystem, die Schritte
zum Nachstellen und, falls bekannt, was ein Angreifer damit erreichen könnte.

## Bekannte Lage

* Im Storybook meldet `npm audit` eine mittlere Lücke in `@vitest/mocker`, behoben erst
  in Storybook 10. Das Storybook bleibt bewusst auf Fassung 9, weil KERN selbst dort
  steht; der Entwicklungsserver lauscht nur auf `127.0.0.1`. Diese Entscheidung ist
  dokumentiert und wird bei einem KERN-Sprung neu bewertet.
* Das Design-System selbst hat keine npm-Abhängigkeiten, also auch keine, die veralten
  könnten.

## Fassungen

Gepflegt wird jeweils die neueste Fassung (derzeit 0.2.0). Für ältere Fassungen gibt es
keine Rückportierung.
