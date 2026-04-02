# @skillpet/circuit

[English](./README.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <strong>Biblioteca de diagramas de circuitos — renderiza esquemas eléctricos desde JSON, con SVG interactivo, temas y componentes Vue / React.</strong>
</p>

<p align="center">
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
- Componentes Vue 3 y React
- Bundle para navegador vía CDN
- Renderizado de etiquetas matemáticas con KaTeX
- Diagramas de flujo, bloques DSP, componentes de protoboard

## Inicio rápido

Añade una etiqueta script y comienza a dibujar:

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

## Ejemplos

Este repositorio contiene ejemplos HTML que se pueden abrir directamente en el navegador:

| Archivo | Descripción |
|---------|-------------|
| [`index.html`](index.html) | Demo completa: circuitos básicos, temas, interactivo, transiciones de color |
| [`examples/01-basic.html`](examples/01-basic.html) | Circuito RC mínimo |
| [`examples/02-themes.html`](examples/02-themes.html) | Comparación de temas claro / oscuro / impresión |
| [`examples/03-interactive.html`](examples/03-interactive.html) | Modo interactivo con registro de eventos |
| [`examples/04-color-transitions.html`](examples/04-color-transitions.html) | Gradiente de color suave entre elementos |

Todos los ejemplos cargan la biblioteca desde el CDN [unpkg](https://unpkg.com/@skillpet/circuit/) — sin necesidad de compilación.

## Licencia

El código de ejemplo en este repositorio tiene licencia MIT.

La biblioteca `@skillpet/circuit` es gratuita para uso personal y educativo. El uso comercial requiere una licencia separada.
Para más detalles, visite [circuit.skill.pet/license](https://circuit.skill.pet/license) o contacte **license@skill.pet**.
