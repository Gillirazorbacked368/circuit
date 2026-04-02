# @skillpet/circuit

[English](./README.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <strong>Biblioteca de diagramas de circuitos — renderiza esquemas eléctricos desde JSON, con SVG interactivo, temas y componentes Vue / React.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@skillpet/circuit"><img src="https://img.shields.io/npm/v/@skillpet/circuit.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@skillpet/circuit"><img src="https://img.shields.io/npm/l/@skillpet/circuit.svg" alt="license"></a>
  <a href="https://circuit.skill.pet"><img src="https://img.shields.io/badge/docs-circuit.skill.pet-blue" alt="docs"></a>
</p>

---

**Sitio web y documentación:** [circuit.skill.pet](https://circuit.skill.pet)

## Características

- Renderiza diagramas de circuitos desde una descripción JSON simple
- Más de 200 componentes eléctricos integrados (resistencias, condensadores, diodos, transistores, ICs, puertas lógicas, etc.)
- SVG interactivo: resaltado al pasar el ratón, tooltips, eventos de clic
- 3 temas integrados (claro, oscuro, impresión) + temas personalizados
- Transiciones de color suaves entre elementos
- Componentes Vue 3 y React listos para usar
- Bundle para navegador (etiqueta script) y soporte ESM / CJS
- Renderizado de etiquetas matemáticas con KaTeX
- Diagramas de flujo, bloques DSP, componentes de protoboard
- Sin dependencias en tiempo de ejecución (KaTeX es opcional)

## Instalación

```bash
npm install @skillpet/circuit
```

## Inicio rápido

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

### Navegador (etiqueta Script)

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

## Ejemplos

Este repositorio contiene ejemplos ejecutables:

| Archivo | Descripción |
|---------|-------------|
| [`examples/01-basic.html`](examples/01-basic.html) | Circuito mínimo con CDN |
| [`examples/02-themes.html`](examples/02-themes.html) | Comparación de temas claro / oscuro / impresión |
| [`examples/03-interactive.html`](examples/03-interactive.html) | Modo interactivo con registro de eventos |
| [`examples/04-color-transitions.html`](examples/04-color-transitions.html) | Gradiente de color suave entre elementos |
| [`examples/05-esm-node.mjs`](examples/05-esm-node.mjs) | Renderizado del lado del servidor con Node.js |
| [`index.html`](index.html) + [`src/main.js`](src/main.js) | Demo completa basada en Vite |

Ejecutar localmente:

```bash
git clone https://github.com/skillpet/circuit.git
cd circuit
npm install
npm run dev
```

## Licencia

El código de ejemplo en este repositorio tiene licencia MIT.

La biblioteca `@skillpet/circuit` es gratuita para uso personal y educativo. El uso comercial requiere una licencia separada.
Para más detalles, visite [circuit.skill.pet/license](https://circuit.skill.pet/license) o contacte **license@skill.pet**.
