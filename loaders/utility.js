export const utilityLoaders = [
  {
    "id": "skeleton",
    "name": "Skeleton Card",
    "category": "Skeletons",
    "description": "A content placeholder for list rows, cards, user records, and dashboard panels.",
    "markup": "<div class=\"vl-skeleton\" aria-hidden=\"true\"><span class=\"avatar\"></span><span class=\"line-lg\"></span><span class=\"line-md\"></span><span class=\"line-sm\"></span></div>",
    "css": ".vl-skeleton {\n  width: 172px;\n  display: grid;\n  grid-template-columns: 42px 1fr;\n  gap: 10px;\n}\n.vl-skeleton span {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  height: 11px;\n  border-radius: 6px;\n  background: #e8edf5;\n}\n.vl-skeleton span::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  transform: translateX(-100%);\n  background: linear-gradient(90deg, transparent, rgba(255,255,255,.8), transparent);\n  animation: vl-skeleton calc(var(--loader-speed) * 1.5) infinite;\n}\n.vl-skeleton .avatar { grid-row: 1 / span 3; width: 42px; height: 42px; border-radius: 50%; }\n.vl-skeleton .line-lg { width: 92%; }\n.vl-skeleton .line-md { width: 72%; }\n.vl-skeleton .line-sm { width: 48%; }\n@keyframes vl-skeleton { to { transform: translateX(100%); } }"
  },
  {
    "id": "button",
    "name": "Loading Button",
    "category": "Buttons",
    "description": "A practical inline loader for save, submit, import, and export buttons.",
    "markup": "<button class=\"vl-button\" type=\"button\" disabled><span aria-hidden=\"true\"></span>Processing…</button>",
    "css": ".vl-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  min-height: 44px;\n  padding: 9px 14px;\n  border: 0;\n  border-radius: 9px;\n  background: var(--loader-accent);\n  color: #fff;\n  font: 800 14px/1.2 system-ui, sans-serif;\n  box-shadow: 0 8px 18px color-mix(in srgb, var(--loader-accent) 26%, transparent);\n}\n.vl-button span {\n  width: 16px; height: 16px;\n  border: 2px solid rgba(255,255,255,.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: vl-spin calc(var(--loader-speed) * .75) linear infinite;\n}"
  },
  {
    "id": "cube",
    "name": "Four Cubes",
    "category": "Shapes",
    "description": "A geometric loader for technical tools, admin systems, and data products.",
    "markup": "<div class=\"vl-cube\" aria-hidden=\"true\"><span></span><span></span><span></span><span></span></div>",
    "css": ".vl-cube { position: relative; width: 48px; height: 48px; transform: rotate(45deg); }\n.vl-cube span {\n  position: absolute;\n  width: 21px; height: 21px;\n  border-radius: 4px;\n  background: var(--loader-accent);\n  animation: vl-cube calc(var(--loader-speed) * 1.5) ease-in-out infinite;\n}\n.vl-cube span:nth-child(1) { top: 0; left: 0; }\n.vl-cube span:nth-child(2) { top: 0; right: 0; animation-delay: .18s; }\n.vl-cube span:nth-child(3) { bottom: 0; right: 0; animation-delay: .36s; }\n.vl-cube span:nth-child(4) { bottom: 0; left: 0; animation-delay: .54s; }\n@keyframes vl-cube {\n  0%, 100% { transform: scale(.55); opacity: .4; }\n  50% { transform: scale(1); opacity: 1; }\n}"
  }
];
