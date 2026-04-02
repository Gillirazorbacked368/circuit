# @skillpet/circuit

[English](./README.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <strong>电路图绘制库 — 从 JSON 描述渲染电气原理图，支持交互式 SVG、主题切换与 Vue / React 组件。</strong>
</p>

<p align="center">
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
- Vue 3 与 React 组件
- 通过 CDN 加载浏览器 Bundle
- KaTeX 数学公式标签渲染
- 流程图、DSP 模块、实物面包板元件

## 快速上手

添加一个 script 标签即可开始绘图：

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

### 交互模式

挂载到 DOM，支持悬停高亮、工具提示和点击事件：

```html
<div id="container"></div>
<script src="https://unpkg.com/@skillpet/circuit/dist/circuit.bundle.min.js"></script>
<script>
  const ctrl = Circuit.mountFromJson(document.getElementById("container"), {
    elements: [
      { type: "ResistorIEEE", id: "R1", tooltip: "100kΩ 碳膜电阻" },
      { type: "Capacitor", d: "down", id: "C1", tooltip: "0.1μF 瓷片电容" },
    ],
  }, { interactive: true });

  ctrl.on("element:click", (info) => console.log("点击:", info.id));
  ctrl.on("element:hover", (info) => console.log("悬停:", info.tooltip));
</script>
```

## 示例

本仓库包含可直接在浏览器中打开的 HTML 示例：

| 文件 | 说明 |
|------|------|
| [`index.html`](index.html) | 完整演示页面：基础电路、主题切换、交互模式、颜色过渡 |
| [`examples/01-basic.html`](examples/01-basic.html) | 最简 RC 电路 |
| [`examples/02-themes.html`](examples/02-themes.html) | 浅色 / 深色 / 打印主题对比 |
| [`examples/03-interactive.html`](examples/03-interactive.html) | 交互模式与事件日志 |
| [`examples/04-color-transitions.html`](examples/04-color-transitions.html) | 元件间平滑颜色渐变 |

所有示例通过 [unpkg](https://unpkg.com/@skillpet/circuit/) CDN 加载库 — 无需任何构建步骤。

## 主题

三种内置主题：`light`（默认）、`dark` 和 `print`。

```js
const svg = Circuit.renderFromJson(circuit, { theme: "dark" });
```

## 颜色过渡

不同颜色元件之间平滑的渐变过渡：

```js
const svg = Circuit.renderFromJson({
  drawing: { colorTransition: true },
  elements: [
    { type: "SourceV", d: "up", color: "#2ecc71" },
    { type: "ResistorIEEE", color: "#e74c3c" },
  ],
}, { colorTransition: true });
```

## 许可证

本仓库中的示例代码采用 MIT 许可证。

`@skillpet/circuit` 库本身个人和教育用途免费。商业使用需要单独授权。
详见 [circuit.skill.pet/license](https://circuit.skill.pet/license) 或联系 **license@skill.pet**。
