# @skillpet/circuit

[English](./README.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <strong>Schaltplan-Bibliothek — elektrische Schaltpläne aus JSON rendern, mit interaktivem SVG, Themes und Vue / React-Komponenten.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@skillpet/circuit"><img src="https://img.shields.io/npm/v/@skillpet/circuit.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@skillpet/circuit"><img src="https://img.shields.io/npm/l/@skillpet/circuit.svg" alt="license"></a>
  <a href="https://circuit.skill.pet"><img src="https://img.shields.io/badge/docs-circuit.skill.pet-blue" alt="docs"></a>
</p>

---

**Website & Dokumentation:** [circuit.skill.pet](https://circuit.skill.pet)

## Funktionen

- Schaltpläne aus einer einfachen JSON-Beschreibung rendern
- Über 200 integrierte elektrische Bauteile (Widerstände, Kondensatoren, Dioden, Transistoren, ICs, Logikgatter usw.)
- Interaktives SVG: Hover-Hervorhebung, Tooltips, Klick-Events
- 3 integrierte Themes (Hell, Dunkel, Druck) + benutzerdefinierte Themes
- Sanfte Farbübergänge zwischen Elementen
- Vue 3 & React-Komponenten sofort einsatzbereit
- Browser-Bundle (Script-Tag) & ESM / CJS-Unterstützung
- KaTeX-Mathematik-Label-Rendering
- Flussdiagramme, DSP-Blöcke, Breadboard-Bauteile
- Keine Laufzeit-Abhängigkeiten (KaTeX ist optional)

## Installation

```bash
npm install @skillpet/circuit
```

## Schnellstart

### ESM / TypeScript

```ts
import { renderFromJson } from "@skillpet/circuit";

const svg = renderFromJson({
  elements: [
    { type: "SourceV", d: "up", label: "12V" },
    { type: "ResistorIEEE", label: "R1 10kΩ" },
    { type: "Capacitor", d: "down", label: "C1 100nF" },
    { type: "Line", d: "left" },
    { type: "Ground" },
  ],
});
```

### Browser (Script-Tag)

```html
<script src="https://unpkg.com/@skillpet/circuit/dist/circuit.bundle.min.js"></script>
<script>
  const svg = Circuit.renderFromJson({
    elements: [
      { type: "ResistorIEEE", label: "R1" },
      { type: "Capacitor", d: "down", label: "C1" },
    ],
  });
  document.getElementById("output").innerHTML = svg;
</script>
```

## Beispiele

Dieses Repository enthält ausführbare Beispiele:

| Datei | Beschreibung |
|-------|-------------|
| [`examples/01-basic.html`](examples/01-basic.html) | Minimale Schaltung via CDN |
| [`examples/02-themes.html`](examples/02-themes.html) | Hell / Dunkel / Druck-Theme Vergleich |
| [`examples/03-interactive.html`](examples/03-interactive.html) | Interaktiver Modus mit Event-Logging |
| [`examples/04-color-transitions.html`](examples/04-color-transitions.html) | Sanfter Farbgradient zwischen Elementen |
| [`examples/05-esm-node.mjs`](examples/05-esm-node.mjs) | Serverseitiges Rendering mit Node.js |
| [`index.html`](index.html) + [`src/main.js`](src/main.js) | Vollständige Vite-basierte Demo |

Lokal ausführen:

```bash
git clone https://github.com/skillpet/circuit.git
cd circuit
npm install
npm run dev
```

## Lizenz

Der Beispielcode in diesem Repository steht unter der MIT-Lizenz.

Die `@skillpet/circuit`-Bibliothek selbst ist für den persönlichen und Bildungsgebrauch kostenlos. Für die kommerzielle Nutzung ist eine separate Lizenz erforderlich.
Weitere Informationen unter [circuit.skill.pet/license](https://circuit.skill.pet/license) oder per E-Mail an **license@skill.pet**.
