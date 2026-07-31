export const svgPack7LoadersA = [
  {
    id: 'svg-gear-mesh',
    name: 'SVG Gear Mesh',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Two toothed gears turn against each other in opposite directions like a driven transmission.',
    markup: `<svg class="vl-svg-gear-mesh" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-gear-mesh-a">
        <circle class="vl-svg-gear-mesh-teeth" cx="36" cy="34" r="16" />
        <circle class="vl-svg-gear-mesh-rim" cx="36" cy="34" r="9" />
      </g>
      <g class="vl-svg-gear-mesh-b">
        <circle class="vl-svg-gear-mesh-teeth" cx="69" cy="46" r="11" />
        <circle class="vl-svg-gear-mesh-rim" cx="69" cy="46" r="6" />
      </g>
    </svg>`,
    css: `.vl-svg-gear-mesh { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-gear-mesh circle { fill: none; stroke: currentColor; }
    .vl-svg-gear-mesh-teeth { stroke-width: 6; stroke-dasharray: 5 5.05; }
    .vl-svg-gear-mesh-rim { stroke-width: 2.4; opacity: .55; }
    .vl-svg-gear-mesh-b .vl-svg-gear-mesh-teeth { stroke-width: 5; stroke-dasharray: 4.9 4.97; }
    .vl-svg-gear-mesh-a { transform-origin: 36px 34px; animation: vl-svg-gear-mesh-cw calc(var(--loader-speed) * 2.6) linear infinite; }
    .vl-svg-gear-mesh-b { transform-origin: 69px 46px; animation: vl-svg-gear-mesh-ccw calc(var(--loader-speed) * 1.79) linear infinite; }
    @keyframes vl-svg-gear-mesh-cw { to { transform: rotate(360deg); } }
    @keyframes vl-svg-gear-mesh-ccw { to { transform: rotate(-360deg); } }`
  },
  {
    id: 'svg-ecg-trace',
    name: 'SVG ECG Trace',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A heartbeat waveform draws itself left to right while a bright marker rides the leading edge.',
    markup: `<svg class="vl-svg-ecg-trace" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <line class="vl-svg-ecg-trace-base" x1="6" y1="36" x2="90" y2="36" />
      <path class="vl-svg-ecg-trace-line" d="M6 36H24L28 36L32 22L37 52L42 30L46 36H58L62 28L66 36H90" />
      <circle class="vl-svg-ecg-trace-dot" cx="0" cy="0" r="3.2" />
    </svg>`,
    css: `.vl-svg-ecg-trace { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-ecg-trace line, .vl-svg-ecg-trace path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-ecg-trace-base { stroke-width: 1.6; opacity: .2; }
    .vl-svg-ecg-trace-line { stroke-width: 3; stroke-dasharray: 150; stroke-dashoffset: 150; animation: vl-svg-ecg-trace-draw calc(var(--loader-speed) * 2.2) ease-in-out infinite; }
    .vl-svg-ecg-trace-dot { fill: currentColor; stroke: none; animation: vl-svg-ecg-trace-ride calc(var(--loader-speed) * 2.2) ease-in-out infinite; }
    @keyframes vl-svg-ecg-trace-draw { 0% { stroke-dashoffset: 150; } 70% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -150; } }
    @keyframes vl-svg-ecg-trace-ride { 0% { transform: translate(6px, 36px); opacity: 0; } 12% { opacity: 1; } 35% { transform: translate(37px, 52px); } 70% { transform: translate(90px, 36px); opacity: 1; } 78%, 100% { transform: translate(90px, 36px); opacity: 0; } }`
  },
  {
    id: 'svg-shutter-iris',
    name: 'SVG Shutter Iris',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A six-blade camera aperture contracts and reopens around a steady focal point.',
    markup: `<svg class="vl-svg-shutter-iris" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <circle class="vl-svg-shutter-iris-body" cx="48" cy="36" r="25" />
      <g class="vl-svg-shutter-iris-blades">
        <polygon points="48,11 69,23 48,36" />
        <polygon points="69,23 69,49 48,36" />
        <polygon points="69,49 48,61 48,36" />
        <polygon points="48,61 27,49 48,36" />
        <polygon points="27,49 27,23 48,36" />
        <polygon points="27,23 48,11 48,36" />
      </g>
      <circle class="vl-svg-shutter-iris-core" cx="48" cy="36" r="4" />
    </svg>`,
    css: `.vl-svg-shutter-iris { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-shutter-iris-body { fill: none; stroke: currentColor; stroke-width: 2.6; opacity: .35; }
    .vl-svg-shutter-iris-blades polygon { fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linejoin: round; opacity: .55; }
    .vl-svg-shutter-iris-blades { transform-origin: 48px 36px; animation: vl-svg-shutter-iris-close calc(var(--loader-speed) * 2.1) ease-in-out infinite; }
    .vl-svg-shutter-iris-core { fill: currentColor; stroke: none; transform-origin: 48px 36px; animation: vl-svg-shutter-iris-focus calc(var(--loader-speed) * 2.1) ease-in-out infinite; }
    @keyframes vl-svg-shutter-iris-close { 0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; } 50% { transform: scale(.42) rotate(30deg); opacity: .8; } }
    @keyframes vl-svg-shutter-iris-focus { 0%, 100% { transform: scale(1); opacity: .9; } 50% { transform: scale(.4); opacity: .35; } }`
  },
  {
    id: 'svg-barcode-scan',
    name: 'SVG Barcode Scan',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Uneven barcode strips flicker under a red-line style scanner that sweeps top to bottom.',
    markup: `<svg class="vl-svg-barcode-scan" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-barcode-scan-bars">
        <line x1="14" y1="16" x2="14" y2="56" stroke-width="4" />
        <line x1="22" y1="16" x2="22" y2="56" stroke-width="2" />
        <line x1="28" y1="16" x2="28" y2="56" stroke-width="5" />
        <line x1="37" y1="16" x2="37" y2="56" stroke-width="2" />
        <line x1="43" y1="16" x2="43" y2="56" stroke-width="3" />
        <line x1="51" y1="16" x2="51" y2="56" stroke-width="5" />
        <line x1="60" y1="16" x2="60" y2="56" stroke-width="2" />
        <line x1="66" y1="16" x2="66" y2="56" stroke-width="4" />
        <line x1="74" y1="16" x2="74" y2="56" stroke-width="2" />
        <line x1="81" y1="16" x2="81" y2="56" stroke-width="3" />
      </g>
      <line class="vl-svg-barcode-scan-beam" x1="8" y1="0" x2="88" y2="0" />
    </svg>`,
    css: `.vl-svg-barcode-scan { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-barcode-scan line { stroke: currentColor; stroke-linecap: round; }
    .vl-svg-barcode-scan-bars line { opacity: .3; animation: vl-svg-barcode-scan-lit calc(var(--loader-speed) * 2) ease-in-out infinite; }
    .vl-svg-barcode-scan-bars line:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.16); }
    .vl-svg-barcode-scan-bars line:nth-child(3) { animation-delay: calc(var(--loader-speed) * -.32); }
    .vl-svg-barcode-scan-bars line:nth-child(4) { animation-delay: calc(var(--loader-speed) * -.48); }
    .vl-svg-barcode-scan-bars line:nth-child(5) { animation-delay: calc(var(--loader-speed) * -.64); }
    .vl-svg-barcode-scan-bars line:nth-child(6) { animation-delay: calc(var(--loader-speed) * -.8); }
    .vl-svg-barcode-scan-bars line:nth-child(7) { animation-delay: calc(var(--loader-speed) * -.96); }
    .vl-svg-barcode-scan-bars line:nth-child(8) { animation-delay: calc(var(--loader-speed) * -1.12); }
    .vl-svg-barcode-scan-bars line:nth-child(9) { animation-delay: calc(var(--loader-speed) * -1.28); }
    .vl-svg-barcode-scan-bars line:nth-child(10) { animation-delay: calc(var(--loader-speed) * -1.44); }
    .vl-svg-barcode-scan-beam { stroke-width: 2.4; opacity: .9; animation: vl-svg-barcode-scan-sweep calc(var(--loader-speed) * 2) ease-in-out infinite; }
    @keyframes vl-svg-barcode-scan-lit { 0%, 100% { opacity: .25; } 40% { opacity: 1; } }
    @keyframes vl-svg-barcode-scan-sweep { 0%, 100% { transform: translateY(14px); opacity: .25; } 50% { transform: translateY(58px); opacity: 1; } }`
  },
  {
    id: 'svg-loom-weave',
    name: 'SVG Loom Weave',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Warp and weft threads slide across a faint lattice, weaving the grid tighter on every pass.',
    markup: `<svg class="vl-svg-loom-weave" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-loom-weave-grid">
        <line x1="24" y1="12" x2="24" y2="60" />
        <line x1="36" y1="12" x2="36" y2="60" />
        <line x1="48" y1="12" x2="48" y2="60" />
        <line x1="60" y1="12" x2="60" y2="60" />
        <line x1="72" y1="12" x2="72" y2="60" />
        <line x1="16" y1="21" x2="80" y2="21" />
        <line x1="16" y1="30" x2="80" y2="30" />
        <line x1="16" y1="39" x2="80" y2="39" />
        <line x1="16" y1="48" x2="80" y2="48" />
      </g>
      <g class="vl-svg-loom-weave-warp">
        <line x1="24" y1="12" x2="24" y2="60" />
        <line x1="36" y1="12" x2="36" y2="60" />
        <line x1="48" y1="12" x2="48" y2="60" />
        <line x1="60" y1="12" x2="60" y2="60" />
        <line x1="72" y1="12" x2="72" y2="60" />
      </g>
      <g class="vl-svg-loom-weave-weft">
        <line x1="16" y1="21" x2="80" y2="21" />
        <line x1="16" y1="30" x2="80" y2="30" />
        <line x1="16" y1="39" x2="80" y2="39" />
        <line x1="16" y1="48" x2="80" y2="48" />
      </g>
    </svg>`,
    css: `.vl-svg-loom-weave { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-loom-weave line { stroke: currentColor; stroke-width: 2.6; stroke-linecap: round; }
    .vl-svg-loom-weave-grid line { stroke-width: 2; opacity: .16; }
    .vl-svg-loom-weave-warp line { stroke-dasharray: 30 18; opacity: .5; animation: vl-svg-loom-weave-down calc(var(--loader-speed) * 1.9) linear infinite; }
    .vl-svg-loom-weave-warp line:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.38); }
    .vl-svg-loom-weave-warp line:nth-child(3) { animation-delay: calc(var(--loader-speed) * -.76); }
    .vl-svg-loom-weave-warp line:nth-child(4) { animation-delay: calc(var(--loader-speed) * -1.14); }
    .vl-svg-loom-weave-warp line:nth-child(5) { animation-delay: calc(var(--loader-speed) * -1.52); }
    .vl-svg-loom-weave-weft line { stroke-dasharray: 38 22; animation: vl-svg-loom-weave-across calc(var(--loader-speed) * 1.5) linear infinite; }
    .vl-svg-loom-weave-weft line:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.375); opacity: .82; }
    .vl-svg-loom-weave-weft line:nth-child(3) { animation-delay: calc(var(--loader-speed) * -.75); opacity: .68; }
    .vl-svg-loom-weave-weft line:nth-child(4) { animation-delay: calc(var(--loader-speed) * -1.125); opacity: .54; }
    @keyframes vl-svg-loom-weave-down { to { stroke-dashoffset: -48; } }
    @keyframes vl-svg-loom-weave-across { to { stroke-dashoffset: -60; } }`
  }
];
