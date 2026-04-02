/**
 * Node.js ESM example — generate an SVG string on the server side.
 *
 * Run:
 *   npm install @skillpet/circuit
 *   node examples/05-esm-node.mjs
 */
import { renderFromJson } from "@skillpet/circuit";

const svg = renderFromJson({
  elements: [
    { type: "SourceV", d: "up", label: "12V" },
    { type: "ResistorIEEE", label: "R1  10k\u03A9" },
    { type: "Capacitor", d: "down", label: "C1  100nF" },
    { type: "Line", d: "left" },
    { type: "Ground" },
  ],
});

console.log("SVG length:", svg.length);
console.log(svg.slice(0, 120) + " ...");
