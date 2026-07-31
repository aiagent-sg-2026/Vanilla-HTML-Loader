export const barLoaders = [
  {
    "id": "wave",
    "name": "Wave Bars",
    "category": "Bars",
    "description": "Five animated bars for processing, audio, or streaming operations.",
    "markup": "<div class=\"vl-wave\" aria-hidden=\"true\"><span></span><span></span><span></span><span></span><span></span></div>",
    "css": ".vl-wave { height: 52px; display: flex; gap: 5px; align-items: center; }\n.vl-wave span {\n  width: 6px;\n  height: 18px;\n  border-radius: 6px;\n  background: var(--loader-accent);\n  animation: vl-wave calc(var(--loader-speed) * 1.05) ease-in-out infinite;\n}\n.vl-wave span:nth-child(2) { animation-delay: .1s; }\n.vl-wave span:nth-child(3) { animation-delay: .2s; }\n.vl-wave span:nth-child(4) { animation-delay: .3s; }\n.vl-wave span:nth-child(5) { animation-delay: .4s; }\n@keyframes vl-wave {\n  0%, 100% { height: 16px; opacity: .45; }\n  50% { height: 48px; opacity: 1; }\n}"
  },
  {
    "id": "progress",
    "name": "Shimmer Progress",
    "category": "Bars",
    "description": "A polished horizontal shimmer for content areas and background operations.",
    "markup": "<div class=\"vl-progress\" aria-hidden=\"true\"><span></span></div>",
    "css": ".vl-progress {\n  position: relative;\n  width: 142px; height: 8px;\n  overflow: hidden;\n  border-radius: 99px;\n  background: color-mix(in srgb, var(--loader-accent) 16%, transparent);\n}\n.vl-progress span {\n  position: absolute;\n  inset: 0;\n  width: 45%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, transparent, var(--loader-accent), transparent);\n  animation: vl-progress calc(var(--loader-speed) * 1.45) ease-in-out infinite;\n}\n@keyframes vl-progress {\n  0% { transform: translateX(-110%); }\n  100% { transform: translateX(310%); }\n}"
  },
  {
    "id": "indeterminate",
    "name": "Indeterminate Bar",
    "category": "Bars",
    "description": "A Material-style moving bar for operations with unknown completion time.",
    "markup": "<div class=\"vl-indeterminate\" aria-hidden=\"true\"><span></span></div>",
    "css": ".vl-indeterminate {\n  position: relative;\n  width: 142px; height: 8px;\n  overflow: hidden;\n  border-radius: 99px;\n  background: color-mix(in srgb, var(--loader-accent) 16%, transparent);\n}\n.vl-indeterminate span {\n  position: absolute;\n  inset: 0 auto 0 -40%;\n  width: 40%;\n  border-radius: inherit;\n  background: var(--loader-accent);\n  animation: vl-indeterminate calc(var(--loader-speed) * 1.25) cubic-bezier(.65, .05, .36, 1) infinite;\n}\n@keyframes vl-indeterminate {\n  0% { left: -40%; width: 34%; }\n  55% { width: 62%; }\n  100% { left: 110%; width: 34%; }\n}"
  }
];
