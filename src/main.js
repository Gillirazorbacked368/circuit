import { renderFromJson, mountFromJson } from "@skillpet/circuit";

// ── 1. RC Circuit ──────────────────────────────────────────────────
document.getElementById("rc-circuit").innerHTML = renderFromJson({
  elements: [
    { type: "SourceV", d: "up", label: "12V" },
    { type: "ResistorIEEE", label: "R1  10k\\u03A9" },
    { type: "Capacitor", d: "down", label: "C1  100nF" },
    { type: "Line", d: "left" },
    { type: "Ground" },
  ],
});

// ── 2. Battery + LED ───────────────────────────────────────────────
document.getElementById("battery-led").innerHTML = renderFromJson({
  elements: [
    { type: "Battery", label: "3V" },
    { type: "ResistorIEEE", label: "220\\u03A9" },
    { type: "LED" },
    { type: "Line", d: "left", l: 1.5 },
    { type: "Line", d: "down", l: 1.5 },
    { type: "Line", d: "right", l: 1.5 },
  ],
});

// ── 3. Voltage Divider ─────────────────────────────────────────────
document.getElementById("voltage-divider").innerHTML = renderFromJson({
  elements: [
    { type: "SourceV", d: "up", label: "Vin" },
    { type: "ResistorIEEE", label: "R1" },
    { type: "Dot" },
    { type: "ResistorIEEE", d: "down", label: "R2" },
    { type: "Ground" },
    { type: "Line", d: "left" },
  ],
});

// ── 4. Op-Amp Inverting Amplifier ──────────────────────────────────
document.getElementById("opamp-inverting").innerHTML = renderFromJson({
  elements: [
    { type: "Opamp", anchor: "in1" },
    { type: "ResistorIEEE", at: "in1", d: "left", flip: true, label: "Ri" },
  ],
});

// ── 5. Themes ──────────────────────────────────────────────────────
const themeCircuit = {
  elements: [
    { type: "SourceV", d: "up", label: "Vs" },
    { type: "ResistorIEEE", label: "R1" },
    { type: "Capacitor", d: "down", label: "C1" },
    { type: "Line", d: "left" },
    { type: "Ground" },
  ],
};

function renderTheme(theme) {
  document.getElementById("theme-demo").innerHTML =
    renderFromJson(themeCircuit, { theme });
  if (theme === "dark") {
    document.getElementById("theme-demo").style.background = "#1a1a2e";
  } else {
    document.getElementById("theme-demo").style.background = "#fafafa";
  }
}

renderTheme("light");

document.querySelectorAll("#theme-toolbar button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#theme-toolbar button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderTheme(btn.dataset.theme);
  });
});

// ── 6. Interactive Mode ────────────────────────────────────────────
const log = document.getElementById("event-log");
function appendLog(msg) {
  log.textContent += "\n" + msg;
  log.scrollTop = log.scrollHeight;
}

const ctrl = mountFromJson(document.getElementById("interactive-output"), {
  elements: [
    { type: "SourceV", d: "up", label: "12V", id: "V1", tooltip: "DC Voltage Source, 12V" },
    { type: "ResistorIEEE", label: "R1  10k\u03A9", id: "R1", tooltip: "Resistor, 10k\u03A9 \u00B1 5%" },
    { type: "Capacitor", d: "down", label: "C1  100nF", id: "C1", tooltip: "Ceramic Capacitor, 100nF" },
    { type: "Line", d: "left", id: "W1" },
    { type: "Ground", id: "GND" },
  ],
}, { interactive: true });

ctrl.on("element:click", (info) => appendLog(`click  → ${info.id || info.type}`));
ctrl.on("element:hover", (info) => appendLog(`hover  → ${info.id || info.type}  ${info.tooltip || ""}`));

// ── 7. Color Transitions ──────────────────────────────────────────
document.getElementById("color-transition").innerHTML = renderFromJson({
  drawing: { colorTransition: true },
  elements: [
    { type: "SourceV", d: "up", label: "Vs", color: "#2ecc71" },
    { type: "ResistorIEEE", label: "R1", color: "#e74c3c" },
    { type: "Capacitor", d: "down", label: "C1", color: "#3498db" },
    { type: "Line", d: "left", color: "#f39c12" },
    { type: "Ground", color: "#9b59b6" },
  ],
}, { colorTransition: true });
