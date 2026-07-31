export const spinnerLoaders = [
  {
    "id": "orbit",
    "name": "Orbit Spinner",
    "category": "Spinners",
    "description": "A dual-motion spinner with a rotating arc and pulsing centre point.",
    "markup": "<div class=\"vl-orbit\" aria-hidden=\"true\"></div>",
    "css": ".vl-orbit {\n  position: relative;\n  width: 58px;\n  height: 58px;\n  border: 3px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);\n  border-radius: 50%;\n}\n.vl-orbit::before {\n  content: '';\n  position: absolute;\n  inset: -3px;\n  border: 3px solid transparent;\n  border-top-color: var(--loader-accent);\n  border-right-color: color-mix(in srgb, var(--loader-accent) 55%, transparent);\n  border-radius: 50%;\n  animation: vl-spin var(--loader-speed) linear infinite;\n}\n.vl-orbit::after {\n  content: '';\n  position: absolute;\n  left: 50%; top: 50%;\n  width: 12px; height: 12px;\n  border-radius: 50%;\n  background: var(--loader-accent);\n  box-shadow: 0 0 0 8px color-mix(in srgb, var(--loader-accent) 13%, transparent);\n  transform: translate(-50%, -50%);\n  animation: vl-core-pulse calc(var(--loader-speed) * 1.25) ease-in-out infinite;\n}\n@keyframes vl-core-pulse {\n  0%, 100% { transform: translate(-50%, -50%) scale(.82); opacity: .7; }\n  50% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }\n}"
  },
  {
    "id": "ring",
    "name": "Classic Ring",
    "category": "Spinners",
    "description": "A familiar circular spinner that works well for general page loading.",
    "markup": "<div class=\"vl-ring\" aria-hidden=\"true\"></div>",
    "css": ".vl-ring {\n  width: 54px;\n  height: 54px;\n  border: 5px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);\n  border-top-color: var(--loader-accent);\n  border-radius: 50%;\n  animation: vl-spin var(--loader-speed) linear infinite;\n}"
  },
  {
    "id": "dual",
    "name": "Dual Arc",
    "category": "Spinners",
    "description": "Two counter-rotating arcs create a precise technical loading state.",
    "markup": "<div class=\"vl-dual\" aria-hidden=\"true\"></div>",
    "css": ".vl-dual { position: relative; width: 58px; height: 58px; }\n.vl-dual::before,\n.vl-dual::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  border: 4px solid transparent;\n  border-top-color: var(--loader-accent);\n  border-radius: 50%;\n  animation: vl-spin var(--loader-speed) linear infinite;\n}\n.vl-dual::after {\n  inset: 9px;\n  border-top-color: transparent;\n  border-bottom-color: color-mix(in srgb, var(--loader-accent) 58%, white);\n  animation-direction: reverse;\n  animation-duration: calc(var(--loader-speed) * .72);\n}"
  },
  {
    "id": "radar",
    "name": "Radar Sweep",
    "category": "Spinners",
    "description": "A scanning radar animation suitable for search, sync, or discovery states.",
    "markup": "<div class=\"vl-radar\" aria-hidden=\"true\"></div>",
    "css": ".vl-radar {\n  position: relative;\n  width: 58px; height: 58px;\n  overflow: hidden;\n  border: 2px solid color-mix(in srgb, var(--loader-accent) 30%, transparent);\n  border-radius: 50%;\n}\n.vl-radar::before {\n  content: '';\n  position: absolute;\n  left: 50%; bottom: 50%;\n  width: 50%; height: 50%;\n  background: linear-gradient(135deg, transparent, color-mix(in srgb, var(--loader-accent) 68%, transparent));\n  transform-origin: left bottom;\n  animation: vl-spin calc(var(--loader-speed) * 1.2) linear infinite;\n}\n.vl-radar::after {\n  content: '';\n  position: absolute;\n  inset: 15px;\n  border: 2px solid color-mix(in srgb, var(--loader-accent) 35%, transparent);\n  border-radius: 50%;\n}"
  }
];
