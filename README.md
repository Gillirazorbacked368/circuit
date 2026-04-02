# @skillpet/circuit

[English](./README.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <strong>Circuit diagram library — render electrical schematics from JSON, with interactive SVG, themes, and Vue / React components.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@skillpet/circuit"><img src="https://img.shields.io/npm/v/@skillpet/circuit.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@skillpet/circuit"><img src="https://img.shields.io/npm/l/@skillpet/circuit.svg" alt="license"></a>
  <a href="https://circuit.skill.pet"><img src="https://img.shields.io/badge/docs-circuit.skill.pet-blue" alt="docs"></a>
</p>

---

**Website & Docs:** [circuit.skill.pet](https://circuit.skill.pet)

## Features

- Render circuit diagrams from a simple JSON description
- 200+ built-in electrical components (resistors, capacitors, diodes, transistors, ICs, logic gates, etc.)
- Interactive SVG: hover highlights, tooltips, click events
- 3 built-in themes (light, dark, print) + custom themes
- Smooth color transitions between elements
- Vue 3 & React components out of the box
- Browser bundle (script tag) & ESM / CJS support
- KaTeX math label rendering
- Flow charts, DSP blocks, pictorial breadboard components
- Zero runtime dependencies (except optional KaTeX)

## Installation

```bash
npm install @skillpet/circuit
```

## Quick Start

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

### Browser (Script Tag)

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

### Interactive Mode

```ts
import { mountFromJson } from "@skillpet/circuit";

const ctrl = mountFromJson(document.getElementById("container"), {
  elements: [
    { type: "ResistorIEEE", id: "R1", tooltip: "100kΩ Carbon Film" },
    { type: "Capacitor", d: "down", id: "C1", tooltip: "0.1μF Ceramic" },
  ],
}, { interactive: true });

ctrl.on("element:click", (info) => console.log("Clicked:", info.id));
ctrl.on("element:hover", (info) => console.log("Hover:", info.tooltip));
```

### Vue 3

```vue
<script setup>
import { CircuitDiagram } from "@skillpet/circuit/vue";

const circuit = {
  elements: [
    { type: "ResistorIEEE", label: "R1", id: "R1", tooltip: "100kΩ" },
    { type: "Capacitor", d: "down", label: "C1" },
  ],
};
</script>

<template>
  <CircuitDiagram :circuit="circuit" interactive @element-click="console.log" />
</template>
```

### React

```tsx
import { CircuitDiagram } from "@skillpet/circuit/react";

function App() {
  return (
    <CircuitDiagram
      circuit={{ elements: [{ type: "ResistorIEEE", label: "R1" }] }}
      interactive
      onElementClick={(info) => console.log(info)}
    />
  );
}
```

## Examples

This repo contains runnable examples:

| File | Description |
|------|-------------|
| [`examples/01-basic.html`](examples/01-basic.html) | Minimal circuit rendered via CDN script tag |
| [`examples/02-themes.html`](examples/02-themes.html) | Light / Dark / Print theme comparison |
| [`examples/03-interactive.html`](examples/03-interactive.html) | Interactive mode with event logging |
| [`examples/04-color-transitions.html`](examples/04-color-transitions.html) | Smooth color gradient between elements |
| [`examples/05-esm-node.mjs`](examples/05-esm-node.mjs) | Server-side rendering with Node.js |
| [`index.html`](index.html) + [`src/main.js`](src/main.js) | Full Vite-based demo app |

To run the Vite demo locally:

```bash
git clone https://github.com/skillpet/circuit.git
cd circuit
npm install
npm run dev
```

To run standalone HTML examples, just open them in any browser — they load the library from unpkg CDN.

## Themes

Three built-in themes: `light` (default), `dark`, and `print`.

```ts
const svg = renderFromJson(circuit, { theme: "dark" });
```

## Color Transitions

Smooth gradient transitions between differently colored elements:

```ts
const svg = renderFromJson({
  drawing: { colorTransition: true },
  elements: [
    { type: "SourceV", d: "up", color: "#2ecc71" },
    { type: "ResistorIEEE", color: "#e74c3c" },
  ],
}, { colorTransition: true });
```

## License

The example code in this repository is MIT licensed.

The `@skillpet/circuit` library itself is free for personal and educational use. Commercial use requires a separate license.
For details, see [circuit.skill.pet/license](https://circuit.skill.pet/license) or contact **license@skill.pet**.
