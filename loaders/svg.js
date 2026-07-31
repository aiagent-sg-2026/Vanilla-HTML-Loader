export const svgLoaders = [
  {
    "id": "svg-ring",
    "name": "SVG Dash Ring",
    "category": "SVG",
    "tech": "Inline SVG",
    "description": "A scalable circular stroke loader with animated dash length and rotation.",
    "markup": "<svg class=\"vl-svg-ring\" viewBox=\"0 0 72 72\" aria-hidden=\"true\"><circle cx=\"36\" cy=\"36\" r=\"25\"></circle></svg>",
    "css": ".vl-svg-ring { width: 72px; height: 72px; color: var(--loader-accent); animation: vl-spin calc(var(--loader-speed) * 1.3) linear infinite; }\n.vl-svg-ring circle {\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 6;\n  stroke-linecap: round;\n  stroke-dasharray: 92 46;\n  animation: vl-svg-dash calc(var(--loader-speed) * 1.4) ease-in-out infinite;\n}\n@keyframes vl-svg-dash {\n  0%, 100% { stroke-dasharray: 18 120; stroke-dashoffset: 0; }\n  50% { stroke-dasharray: 96 42; stroke-dashoffset: -38; }\n}"
  },
  {
    "id": "svg-infinity",
    "name": "SVG Infinity Trace",
    "category": "SVG",
    "tech": "Inline SVG",
    "description": "An infinity path continuously draws itself for background operations that have no fixed duration.",
    "markup": "<svg class=\"vl-svg-infinity\" viewBox=\"0 0 120 60\" aria-hidden=\"true\"><path d=\"M16 30c12-25 30-25 44 0s32 25 44 0c-12-25-30-25-44 0S28 55 16 30Z\"></path></svg>",
    "css": ".vl-svg-infinity { width: 104px; height: 58px; color: var(--loader-accent); overflow: visible; }\n.vl-svg-infinity path {\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 178;\n  stroke-dashoffset: 178;\n  animation: vl-infinity-trace calc(var(--loader-speed) * 2) ease-in-out infinite;\n}\n@keyframes vl-infinity-trace { 0% { stroke-dashoffset: 178; opacity: .35; } 52% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: -178; opacity: .35; } }"
  },
  {
    "id": "svg-hex",
    "name": "SVG Hexagon Draw",
    "category": "SVG",
    "tech": "Inline SVG",
    "description": "A geometric hexagon outline draws and erases itself for technical products.",
    "markup": "<svg class=\"vl-svg-hex\" viewBox=\"0 0 72 72\" aria-hidden=\"true\"><polygon points=\"36,7 61,21 61,51 36,65 11,51 11,21\"></polygon></svg>",
    "css": ".vl-svg-hex { width: 72px; height: 72px; color: var(--loader-accent); }\n.vl-svg-hex polygon {\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 230;\n  stroke-dashoffset: 230;\n  animation: vl-hex-trace calc(var(--loader-speed) * 2) ease-in-out infinite;\n}\n@keyframes vl-hex-trace { 0% { stroke-dashoffset: 230; opacity: .35; } 52% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: -230; opacity: .35; } }"
  },
  {
    "id": "svg-wave",
    "name": "SVG Signal Wave",
    "category": "SVG",
    "tech": "Inline SVG",
    "description": "A smooth signal path draws repeatedly for streaming, audio, and synchronisation states.",
    "markup": "<svg class=\"vl-svg-wave\" viewBox=\"0 0 120 60\" aria-hidden=\"true\"><path d=\"M6 31h17l9-19 14 38 14-30 13 21 10-16 9 6h22\"></path></svg>",
    "css": ".vl-svg-wave { width: 112px; height: 60px; color: var(--loader-accent); overflow: visible; }\n.vl-svg-wave path {\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 210;\n  stroke-dashoffset: 210;\n  animation: vl-wave-trace calc(var(--loader-speed) * 2) ease-in-out infinite;\n}\n@keyframes vl-wave-trace { 0% { stroke-dashoffset: 210; opacity: .35; } 52% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: -210; opacity: .35; } }"
  },
  {
    "id": "svg-radar",
    "name": "SVG Radar Scan",
    "category": "SVG",
    "tech": "Inline SVG",
    "description": "A crisp vector radar with concentric rings, rotating beam, and pulsing target.",
    "markup": "<svg class=\"vl-svg-radar\" viewBox=\"0 0 72 72\" aria-hidden=\"true\"><g class=\"rings\"><circle cx=\"36\" cy=\"36\" r=\"29\"></circle><circle cx=\"36\" cy=\"36\" r=\"19\"></circle><circle cx=\"36\" cy=\"36\" r=\"9\"></circle></g><g class=\"beam\"><path d=\"M36 36L36 7A29 29 0 0 1 57 16Z\"></path><line x1=\"36\" y1=\"36\" x2=\"36\" y2=\"7\"></line></g><circle class=\"ping\" cx=\"51\" cy=\"25\" r=\"4\"></circle></svg>",
    "css": ".vl-svg-radar { width: 72px; height: 72px; color: var(--loader-accent); overflow: visible; }\n.vl-svg-radar .rings { fill: none; stroke: currentColor; stroke-width: 2; opacity: .28; }\n.vl-svg-radar .beam { transform-origin: 36px 36px; animation: vl-svg-radar calc(var(--loader-speed) * 1.6) linear infinite; }\n.vl-svg-radar .beam line { stroke: currentColor; stroke-width: 3; stroke-linecap: round; }\n.vl-svg-radar .beam path { fill: color-mix(in srgb, var(--loader-accent) 28%, transparent); }\n.vl-svg-radar .ping { fill: currentColor; transform-box: fill-box; transform-origin: center; animation: vl-svg-ping calc(var(--loader-speed) * 1.4) ease-in-out infinite; }\n@keyframes vl-svg-radar { to { transform: rotate(360deg); } }\n@keyframes vl-svg-ping { 0%, 100% { transform: scale(.55); opacity: .35; } 50% { transform: scale(1.25); opacity: 1; } }"
  }
];
