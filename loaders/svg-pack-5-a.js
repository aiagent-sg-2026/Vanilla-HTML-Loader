export const svgPack5LoadersA = [
  {
    id: 'svg-magnetic-field',
    name: 'SVG Magnetic Field',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Layered magnetic field lines stream around three softly pulsing energy nodes.',
    markup: `<svg class="vl-svg-magnetic-field" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-magnetic-ghost" d="M8 36C24 8 72 8 88 36C72 64 24 64 8 36Z" />
      <path class="vl-svg-magnetic-ghost" d="M17 36C30 17 66 17 79 36C66 55 30 55 17 36Z" />
      <path class="vl-svg-magnetic-live vl-svg-magnetic-live-a" d="M8 36C24 8 72 8 88 36C72 64 24 64 8 36Z" />
      <path class="vl-svg-magnetic-live vl-svg-magnetic-live-b" d="M17 36C30 17 66 17 79 36C66 55 30 55 17 36Z" />
      <circle class="vl-svg-magnetic-node" cx="29" cy="36" r="4" />
      <circle class="vl-svg-magnetic-node" cx="48" cy="36" r="5" />
      <circle class="vl-svg-magnetic-node" cx="67" cy="36" r="4" />
    </svg>`,
    css: `.vl-svg-magnetic-field { width: 88px; height: 66px; color: var(--loader-accent); overflow: visible; }
      .vl-svg-magnetic-field path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
      .vl-svg-magnetic-ghost { stroke-width: 2; opacity: .14; }
      .vl-svg-magnetic-live { stroke-width: 3; stroke-dasharray: 12 18; animation: vl-svg-magnetic-flow calc(var(--loader-speed) * 1.8) linear infinite; }
      .vl-svg-magnetic-live-b { animation-direction: reverse; opacity: .72; }
      .vl-svg-magnetic-node { fill: currentColor; transform-box: fill-box; transform-origin: center; animation: vl-svg-magnetic-node calc(var(--loader-speed) * 1.25) ease-in-out infinite; }
      .vl-svg-magnetic-node:nth-of-type(2) { animation-delay: calc(var(--loader-speed) * -.22); }
      .vl-svg-magnetic-node:nth-of-type(3) { animation-delay: calc(var(--loader-speed) * -.44); }
      @keyframes vl-svg-magnetic-flow { to { stroke-dashoffset: -60; } }
      @keyframes vl-svg-magnetic-node { 0%, 100% { transform: scale(.72); opacity: .35; } 50% { transform: scale(1.25); opacity: 1; } }`
  },
  {
    id: 'svg-eclipse-orbit',
    name: 'SVG Eclipse Orbit',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A moon circles a glowing core while a moving shadow creates a repeating eclipse.',
    markup: `<svg class="vl-svg-eclipse-orbit" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <circle class="vl-svg-eclipse-track" cx="48" cy="36" r="27" />
      <circle class="vl-svg-eclipse-core" cx="48" cy="36" r="11" />
      <circle class="vl-svg-eclipse-shadow" cx="48" cy="36" r="9" />
      <g class="vl-svg-eclipse-moon-orbit"><circle class="vl-svg-eclipse-moon" cx="48" cy="9" r="5" /></g>
    </svg>`,
    css: `.vl-svg-eclipse-orbit { width: 84px; height: 64px; color: var(--loader-accent); overflow: visible; }
      .vl-svg-eclipse-track { fill: none; stroke: currentColor; stroke-width: 2; stroke-dasharray: 4 7; opacity: .28; }
      .vl-svg-eclipse-core { fill: currentColor; opacity: .82; transform-box: fill-box; transform-origin: center; animation: vl-svg-eclipse-core calc(var(--loader-speed) * 1.45) ease-in-out infinite; }
      .vl-svg-eclipse-shadow { fill: var(--surface, #111827); opacity: .76; transform-box: fill-box; transform-origin: center; animation: vl-svg-eclipse-shadow calc(var(--loader-speed) * 2.25) ease-in-out infinite; }
      .vl-svg-eclipse-moon-orbit { transform-origin: 48px 36px; animation: vl-svg-eclipse-orbit calc(var(--loader-speed) * 2.25) linear infinite; }
      .vl-svg-eclipse-moon { fill: currentColor; }
      @keyframes vl-svg-eclipse-orbit { to { transform: rotate(360deg); } }
      @keyframes vl-svg-eclipse-core { 0%, 100% { opacity: .55; } 50% { opacity: 1; } }
      @keyframes vl-svg-eclipse-shadow { 0%, 100% { transform: translateX(-14px); opacity: .12; } 50% { transform: translateX(14px); opacity: .88; } }`
  },
  {
    id: 'svg-pendulum-trace',
    name: 'SVG Pendulum Trace',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A suspended SVG pendulum sweeps across a luminous traced arc.',
    markup: `<svg class="vl-svg-pendulum-trace" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-pendulum-arc" d="M20 52A34 34 0 0 0 76 52" />
      <circle class="vl-svg-pendulum-pivot" cx="48" cy="10" r="3" />
      <g class="vl-svg-pendulum-arm">
        <line x1="48" y1="10" x2="48" y2="48" />
        <circle cx="48" cy="52" r="7" />
      </g>
    </svg>`,
    css: `.vl-svg-pendulum-trace { width: 84px; height: 64px; color: var(--loader-accent); overflow: visible; }
      .vl-svg-pendulum-arc { fill: none; stroke: currentColor; stroke-width: 3; stroke-linecap: round; stroke-dasharray: 12 8; opacity: .38; animation: vl-svg-pendulum-arc calc(var(--loader-speed) * 1.4) linear infinite; }
      .vl-svg-pendulum-pivot { fill: currentColor; }
      .vl-svg-pendulum-arm { transform-origin: 48px 10px; animation: vl-svg-pendulum-swing calc(var(--loader-speed) * 1.7) ease-in-out infinite; }
      .vl-svg-pendulum-arm line { stroke: currentColor; stroke-width: 3; stroke-linecap: round; opacity: .75; }
      .vl-svg-pendulum-arm circle { fill: currentColor; }
      @keyframes vl-svg-pendulum-arc { to { stroke-dashoffset: -40; } }
      @keyframes vl-svg-pendulum-swing { 0%, 100% { transform: rotate(-36deg); } 50% { transform: rotate(36deg); } }`
  },
  {
    id: 'svg-sine-ladder',
    name: 'SVG Sine Ladder',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Stacked sine-wave rails travel at staggered speeds like a compact signal ladder.',
    markup: `<svg class="vl-svg-sine-ladder" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path d="M8 15C18 5 28 25 38 15S58 5 68 15 88 25 92 15" />
      <path d="M8 29C18 19 28 39 38 29S58 19 68 29 88 39 92 29" />
      <path d="M8 43C18 33 28 53 38 43S58 33 68 43 88 53 92 43" />
      <path d="M8 57C18 47 28 67 38 57S58 47 68 57 88 67 92 57" />
    </svg>`,
    css: `.vl-svg-sine-ladder { width: 88px; height: 66px; color: var(--loader-accent); overflow: visible; }
      .vl-svg-sine-ladder path { fill: none; stroke: currentColor; stroke-width: 3; stroke-linecap: round; stroke-dasharray: 18 12; animation: vl-svg-sine-ladder-flow calc(var(--loader-speed) * 1.6) linear infinite; }
      .vl-svg-sine-ladder path:nth-child(2) { opacity: .78; animation-delay: calc(var(--loader-speed) * -.2); }
      .vl-svg-sine-ladder path:nth-child(3) { opacity: .56; animation-delay: calc(var(--loader-speed) * -.4); }
      .vl-svg-sine-ladder path:nth-child(4) { opacity: .34; animation-delay: calc(var(--loader-speed) * -.6); }
      @keyframes vl-svg-sine-ladder-flow { to { stroke-dashoffset: -60; } }`
  },
  {
    id: 'svg-triangle-relay',
    name: 'SVG Triangle Relay',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Three SVG nodes relay energy around a triangular circuit in sequence.',
    markup: `<svg class="vl-svg-triangle-relay" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-triangle-track" d="M48 8L84 60H12Z" />
      <path class="vl-svg-triangle-live" d="M48 8L84 60H12Z" />
      <circle cx="48" cy="8" r="5" />
      <circle cx="84" cy="60" r="5" />
      <circle cx="12" cy="60" r="5" />
    </svg>`,
    css: `.vl-svg-triangle-relay { width: 82px; height: 62px; color: var(--loader-accent); overflow: visible; }
      .vl-svg-triangle-relay path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
      .vl-svg-triangle-track { stroke-width: 2; opacity: .16; }
      .vl-svg-triangle-live { stroke-width: 4; stroke-dasharray: 20 120; animation: vl-svg-triangle-relay calc(var(--loader-speed) * 2) linear infinite; }
      .vl-svg-triangle-relay circle { fill: currentColor; transform-box: fill-box; transform-origin: center; animation: vl-svg-triangle-node calc(var(--loader-speed) * 1.5) ease-in-out infinite; }
      .vl-svg-triangle-relay circle:nth-of-type(2) { animation-delay: calc(var(--loader-speed) * -.5); }
      .vl-svg-triangle-relay circle:nth-of-type(3) { animation-delay: calc(var(--loader-speed) * -1); }
      @keyframes vl-svg-triangle-relay { to { stroke-dashoffset: -140; } }
      @keyframes vl-svg-triangle-node { 0%, 100% { transform: scale(.72); opacity: .35; } 35% { transform: scale(1.28); opacity: 1; } }`
  }
];