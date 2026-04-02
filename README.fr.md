# @skillpet/circuit

[English](./README.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <strong>Bibliothèque de schémas de circuits — rendez des schémas électriques à partir de JSON, avec SVG interactif, thèmes et composants Vue / React.</strong>
</p>

<p align="center">
  <a href="https://circuit.skill.pet"><img src="https://img.shields.io/badge/docs-circuit.skill.pet-blue" alt="docs"></a>
</p>

---

**Site web et documentation :** [circuit.skill.pet](https://circuit.skill.pet)

## Fonctionnalités

- Rendu de schémas de circuits à partir d'une simple description JSON
- Plus de 200 composants électriques intégrés (résistances, condensateurs, diodes, transistors, ICs, portes logiques, etc.)
- SVG interactif : surbrillance au survol, infobulles, événements de clic
- 3 thèmes intégrés (clair, sombre, impression) + thèmes personnalisés
- Transitions de couleur fluides entre les éléments
- Composants Vue 3 et React
- Bundle navigateur via CDN
- Rendu d'étiquettes mathématiques avec KaTeX
- Organigrammes, blocs DSP, composants de breadboard

## Démarrage rapide

Ajoutez une balise script et commencez à dessiner :

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

## Exemples

Ce dépôt contient des exemples HTML ouverts directement dans le navigateur :

| Fichier | Description |
|---------|-------------|
| [`index.html`](index.html) | Démo complète : circuits, thèmes, interactif, transitions de couleur |
| [`examples/01-basic.html`](examples/01-basic.html) | Circuit RC minimal |
| [`examples/02-themes.html`](examples/02-themes.html) | Comparaison des thèmes clair / sombre / impression |
| [`examples/03-interactive.html`](examples/03-interactive.html) | Mode interactif avec journal d'événements |
| [`examples/04-color-transitions.html`](examples/04-color-transitions.html) | Gradient de couleur fluide entre éléments |

Tous les exemples chargent la bibliothèque depuis le CDN [unpkg](https://unpkg.com/@skillpet/circuit/) — aucune étape de build requise.

## Licence

Le code d'exemple dans ce dépôt est sous licence MIT.

La bibliothèque `@skillpet/circuit` est gratuite pour un usage personnel et éducatif. L'utilisation commerciale nécessite une licence séparée.
Pour plus de détails, visitez [circuit.skill.pet/license](https://circuit.skill.pet/license) ou contactez **license@skill.pet**.
