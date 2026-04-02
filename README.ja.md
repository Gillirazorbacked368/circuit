# @skillpet/circuit

[English](./README.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <strong>回路図ライブラリ — JSON から電気回路図をレンダリング。インタラクティブ SVG、テーマ、Vue / React コンポーネント対応。</strong>
</p>

<p align="center">
  <a href="https://circuit.skill.pet"><img src="https://img.shields.io/badge/docs-circuit.skill.pet-blue" alt="docs"></a>
</p>

---

**ウェブサイト＆ドキュメント：** [circuit.skill.pet](https://circuit.skill.pet)

## 特徴

- シンプルな JSON 記述から回路図をレンダリング
- 200 以上の内蔵電気部品（抵抗器、コンデンサ、ダイオード、トランジスタ、IC、論理ゲートなど）
- インタラクティブ SVG：ホバーハイライト、ツールチップ、クリックイベント
- 3 つの内蔵テーマ（ライト、ダーク、印刷）＋カスタムテーマ
- 要素間のスムーズなカラートランジション
- Vue 3 & React コンポーネント
- CDN 経由のブラウザバンドル
- KaTeX 数式ラベルレンダリング
- フローチャート、DSP ブロック、ブレッドボード部品

## クイックスタート

script タグを一つ追加するだけで描画開始：

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

## サンプル

このリポジトリにはブラウザで直接開ける HTML サンプルが含まれています：

| ファイル | 説明 |
|----------|------|
| [`index.html`](index.html) | フルデモ：基本回路、テーマ、インタラクティブ、カラートランジション |
| [`examples/01-basic.html`](examples/01-basic.html) | 最小 RC 回路 |
| [`examples/02-themes.html`](examples/02-themes.html) | ライト / ダーク / 印刷テーマ比較 |
| [`examples/03-interactive.html`](examples/03-interactive.html) | インタラクティブモードとイベントログ |
| [`examples/04-color-transitions.html`](examples/04-color-transitions.html) | 要素間のスムーズなカラーグラデーション |

すべてのサンプルは [unpkg](https://unpkg.com/@skillpet/circuit/) CDN からライブラリを読み込みます — ビルド不要。

## ライセンス

このリポジトリのサンプルコードは MIT ライセンスです。

`@skillpet/circuit` ライブラリ本体は個人・教育目的で無料です。商用利用には別途ライセンスが必要です。
詳細は [circuit.skill.pet/license](https://circuit.skill.pet/license) または **license@skill.pet** までお問い合わせください。
