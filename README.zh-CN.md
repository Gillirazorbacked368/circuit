# @skillpet/circuit

[English](./README.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <strong>电路图绘制库 — 从 JSON 描述渲染电气原理图，支持交互式 SVG、主题切换与 Vue / React 组件。</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@skillpet/circuit"><img src="https://img.shields.io/npm/v/@skillpet/circuit.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@skillpet/circuit"><img src="https://img.shields.io/npm/l/@skillpet/circuit.svg" alt="license"></a>
  <a href="https://circuit.skill.pet"><img src="https://img.shields.io/badge/docs-circuit.skill.pet-blue" alt="docs"></a>
</p>

---

**官网与文档：** [circuit.skill.pet](https://circuit.skill.pet)

## 特性

- 通过简洁的 JSON 描述渲染电路图
- 200+ 内置电气元件（电阻、电容、二极管、晶体管、集成电路、逻辑门等）
- 交互式 SVG：悬停高亮、工具提示、点击事件
- 3 种内置主题（浅色、深色、打印）+ 自定义主题
- 元件间平滑的颜色过渡
- 开箱即用的 Vue 3 与 React 组件
- 浏览器 Bundle（script 标签）与 ESM / CJS 支持
- KaTeX 数学公式标签渲染
- 流程图、DSP 模块、实物面包板元件
- 零运行时依赖（KaTeX 为可选）

## 安装

```bash
npm install @skillpet/circuit
```

## 快速上手

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

### 浏览器（Script 标签）

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

### 交互模式

```ts
import { mountFromJson } from "@skillpet/circuit";

const ctrl = mountFromJson(document.getElementById("container"), {
  elements: [
    { type: "ResistorIEEE", id: "R1", tooltip: "100kΩ 碳膜电阻" },
    { type: "Capacitor", d: "down", id: "C1", tooltip: "0.1μF 瓷片电容" },
  ],
}, { interactive: true });

ctrl.on("element:click", (info) => console.log("点击:", info.id));
ctrl.on("element:hover", (info) => console.log("悬停:", info.tooltip));
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

## 示例

本仓库包含可运行的示例：

| 文件 | 说明 |
|------|------|
| [`examples/01-basic.html`](examples/01-basic.html) | 最简电路，通过 CDN 脚本标签渲染 |
| [`examples/02-themes.html`](examples/02-themes.html) | 浅色 / 深色 / 打印主题对比 |
| [`examples/03-interactive.html`](examples/03-interactive.html) | 交互模式与事件日志 |
| [`examples/04-color-transitions.html`](examples/04-color-transitions.html) | 元件间平滑颜色渐变 |
| [`examples/05-esm-node.mjs`](examples/05-esm-node.mjs) | Node.js 服务端渲染 |
| [`index.html`](index.html) + [`src/main.js`](src/main.js) | 基于 Vite 的完整演示 |

本地运行 Vite 演示：

```bash
git clone https://github.com/skillpet/circuit.git
cd circuit
npm install
npm run dev
```

独立 HTML 示例可直接用浏览器打开 — 它们通过 unpkg CDN 加载库。

## 许可证

本仓库中的示例代码采用 MIT 许可证。

`@skillpet/circuit` 库本身个人和教育用途免费。商业使用需要单独授权。
详见 [circuit.skill.pet/license](https://circuit.skill.pet/license) 或联系 **license@skill.pet**。
