# @skillpet/circuit

[English](./README.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <strong>Schaltplan-Bibliothek — elektrische Schaltpläne aus JSON rendern, mit interaktivem SVG, Themes und Vue / React-Komponenten.</strong>
</p>

<p align="center">
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
- Vue 3 & React-Komponenten
- Browser-Bundle via CDN
- KaTeX-Mathematik-Label-Rendering
- Flussdiagramme, DSP-Blöcke, Breadboard-Bauteile

## Schnellstart

Fügen Sie ein Script-Tag hinzu und beginnen Sie mit dem Zeichnen:

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

## Beispiele

Dieses Repository enthält HTML-Beispiele, die direkt im Browser geöffnet werden können:

| Datei | Beschreibung |
|-------|-------------|
| [`index.html`](index.html) | Vollständige Demo: Schaltungen, Themes, Interaktiv, Farbübergänge |
| [`examples/01-basic.html`](examples/01-basic.html) | Minimale RC-Schaltung |
| [`examples/02-themes.html`](examples/02-themes.html) | Hell / Dunkel / Druck-Theme Vergleich |
| [`examples/03-interactive.html`](examples/03-interactive.html) | Interaktiver Modus mit Event-Logging |
| [`examples/04-color-transitions.html`](examples/04-color-transitions.html) | Sanfter Farbgradient zwischen Elementen |

Alle Beispiele laden die Bibliothek vom [unpkg](https://unpkg.com/@skillpet/circuit/) CDN — kein Build-Schritt erforderlich.

## Lizenz

Der Beispielcode in diesem Repository steht unter der MIT-Lizenz.

Die `@skillpet/circuit`-Bibliothek selbst ist für den persönlichen und Bildungsgebrauch kostenlos. Für die kommerzielle Nutzung ist eine separate Lizenz erforderlich.
Weitere Informationen unter [circuit.skill.pet/license](https://circuit.skill.pet/license) oder per E-Mail an **license@skill.pet**.
