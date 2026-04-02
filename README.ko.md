# @skillpet/circuit

[English](./README.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <strong>회로도 라이브러리 — JSON에서 전기 회로도를 렌더링합니다. 인터랙티브 SVG, 테마, Vue / React 컴포넌트를 지원합니다.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@skillpet/circuit"><img src="https://img.shields.io/npm/v/@skillpet/circuit.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@skillpet/circuit"><img src="https://img.shields.io/npm/l/@skillpet/circuit.svg" alt="license"></a>
  <a href="https://circuit.skill.pet"><img src="https://img.shields.io/badge/docs-circuit.skill.pet-blue" alt="docs"></a>
</p>

---

**웹사이트 & 문서:** [circuit.skill.pet](https://circuit.skill.pet)

## 특징

- 간단한 JSON 설명으로 회로도 렌더링
- 200개 이상의 내장 전기 부품 (저항, 커패시터, 다이오드, 트랜지스터, IC, 논리 게이트 등)
- 인터랙티브 SVG: 호버 하이라이트, 툴팁, 클릭 이벤트
- 3가지 내장 테마 (라이트, 다크, 인쇄) + 커스텀 테마
- 부품 간 부드러운 색상 전환
- Vue 3 & React 컴포넌트 기본 제공
- 브라우저 번들 (script 태그) & ESM / CJS 지원
- KaTeX 수학 레이블 렌더링
- 순서도, DSP 블록, 브레드보드 부품
- 런타임 의존성 없음 (KaTeX는 선택사항)

## 설치

```bash
npm install @skillpet/circuit
```

## 빠른 시작

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

### 브라우저 (Script 태그)

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

## 예제

이 리포지토리에는 실행 가능한 예제가 포함되어 있습니다:

| 파일 | 설명 |
|------|------|
| [`examples/01-basic.html`](examples/01-basic.html) | CDN 스크립트 태그로 렌더링하는 최소 회로 |
| [`examples/02-themes.html`](examples/02-themes.html) | 라이트 / 다크 / 인쇄 테마 비교 |
| [`examples/03-interactive.html`](examples/03-interactive.html) | 인터랙티브 모드와 이벤트 로깅 |
| [`examples/04-color-transitions.html`](examples/04-color-transitions.html) | 부품 간 부드러운 색상 그라데이션 |
| [`examples/05-esm-node.mjs`](examples/05-esm-node.mjs) | Node.js 서버 사이드 렌더링 |
| [`index.html`](index.html) + [`src/main.js`](src/main.js) | Vite 기반 전체 데모 |

로컬에서 Vite 데모 실행:

```bash
git clone https://github.com/skillpet/circuit.git
cd circuit
npm install
npm run dev
```

## 라이선스

이 리포지토리의 예제 코드는 MIT 라이선스입니다.

`@skillpet/circuit` 라이브러리 자체는 개인 및 교육 목적으로 무료입니다. 상업적 사용에는 별도의 라이선스가 필요합니다.
자세한 내용은 [circuit.skill.pet/license](https://circuit.skill.pet/license) 또는 **license@skill.pet**으로 문의하세요.
