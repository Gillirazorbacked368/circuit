# @skillpet/circuit

[English](./README.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <strong>Circuit diagram library — render electrical schematics from JSON, with interactive SVG, themes, and Vue / React components.</strong>
</p>

<p align="center">
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
- Vue 3 & React components
- Browser bundle via CDN
- KaTeX math label rendering
- Flow charts, DSP blocks, pictorial breadboard components

## Quick Start

Add one script tag and start drawing:

```html
<script src="https://unpkg.com/@skillpet/circuit/dist/circuit.bundle.min.js"></script>
<script>
  const svg = Circuit.renderFromJson({
    elements: [
      { type: "SourceV", d: "up", label: "12V" },
      { type: "ResistorIEEE", label: "R1 10kΩ" },
      { type: "Capacitor", d: "down", label: "C1 100nF" },
      { type: "Line", d: "left" },
      { type: "Ground" },
    ],
  });
  document.getElementById("output").innerHTML = svg;
</script>
```

### Interactive Mode

Mount into the DOM with hover highlights, tooltips, and click events:

```html
<div id="container"></div>
<script src="https://unpkg.com/@skillpet/circuit/dist/circuit.bundle.min.js"></script>
<script>
  const ctrl = Circuit.mountFromJson(document.getElementById("container"), {
    elements: [
      { type: "ResistorIEEE", id: "R1", tooltip: "100kΩ Carbon Film" },
      { type: "Capacitor", d: "down", id: "C1", tooltip: "0.1μF Ceramic" },
    ],
  }, { interactive: true });

  ctrl.on("element:click", (info) => console.log("Clicked:", info.id));
  ctrl.on("element:hover", (info) => console.log("Hover:", info.tooltip));
</script>
```

## Examples

This repo contains runnable HTML examples — just open them in any browser:

| File | Description |
|------|-------------|
| [`index.html`](index.html) | Full demo page: basic circuits, themes, interactive, color transitions |
| [`examples/01-basic.html`](examples/01-basic.html) | Minimal RC circuit |
| [`examples/02-themes.html`](examples/02-themes.html) | Light / Dark / Print theme comparison |
| [`examples/03-interactive.html`](examples/03-interactive.html) | Interactive mode with event logging |
| [`examples/04-color-transitions.html`](examples/04-color-transitions.html) | Smooth color gradient between elements |

All examples load the library from the [unpkg](https://unpkg.com/@skillpet/circuit/) CDN — no build step required.

## Themes

Three built-in themes: `light` (default), `dark`, and `print`.

```js
const svg = Circuit.renderFromJson(circuit, { theme: "dark" });
```

## Color Transitions

Smooth gradient transitions between differently colored elements:

```js
const svg = Circuit.renderFromJson({
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
