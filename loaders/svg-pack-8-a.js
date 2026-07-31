export const svgPack8LoadersA = [
  {
    id: 'svg-metronome-swing',
    name: 'SVG Metronome Swing',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A weighted pendulum arm ticks between two extremes while its scale marks light up in turn.',
    markup: `<svg class="vl-svg-metronome-swing" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-metronome-swing-case" d="M40 60H56L52 18H44Z" />
      <g class="vl-svg-metronome-swing-marks">
        <line x1="34" y1="46" x2="40" y2="46" />
        <line x1="34" y1="38" x2="40" y2="38" />
        <line x1="34" y1="30" x2="40" y2="30" />
      </g>
      <g class="vl-svg-metronome-swing-arm">
        <line x1="48" y1="58" x2="48" y2="16" />
        <rect class="vl-svg-metronome-swing-weight" x="43" y="30" width="10" height="7" rx="2" />
      </g>
      <line class="vl-svg-metronome-swing-base" x1="34" y1="60" x2="62" y2="60" />
    </svg>`,
    css: `.vl-svg-metronome-swing { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-metronome-swing line, .vl-svg-metronome-swing path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-metronome-swing-case { stroke-width: 2.2; opacity: .3; }
    .vl-svg-metronome-swing-base { stroke-width: 2.8; opacity: .55; }
    .vl-svg-metronome-swing-marks line { stroke-width: 1.8; opacity: .25; animation: vl-svg-metronome-swing-mark calc(var(--loader-speed) * 1.8) ease-in-out infinite; }
    .vl-svg-metronome-swing-marks line:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.3); }
    .vl-svg-metronome-swing-marks line:nth-child(3) { animation-delay: calc(var(--loader-speed) * -.6); }
    .vl-svg-metronome-swing-arm { transform-origin: 48px 58px; animation: vl-svg-metronome-swing-tick calc(var(--loader-speed) * 1.8) ease-in-out infinite; }
    .vl-svg-metronome-swing-arm line { stroke-width: 2.6; }
    .vl-svg-metronome-swing-weight { fill: currentColor; stroke: none; }
    @keyframes vl-svg-metronome-swing-tick { 0%, 100% { transform: rotate(-24deg); } 50% { transform: rotate(24deg); } }
    @keyframes vl-svg-metronome-swing-mark { 0%, 100% { opacity: .2; } 45% { opacity: .9; } }`
  },
  {
    id: 'svg-sonar-ping',
    name: 'SVG Sonar Ping',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Concentric pings expand from a submerged emitter and fade as they reach the outer range.',
    markup: `<svg class="vl-svg-sonar-ping" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-sonar-ping-floor" d="M8 62Q26 54 40 60T72 56T90 62" />
      <g class="vl-svg-sonar-ping-waves">
        <circle cx="48" cy="40" r="10" />
        <circle cx="48" cy="40" r="10" />
        <circle cx="48" cy="40" r="10" />
      </g>
      <circle class="vl-svg-sonar-ping-core" cx="48" cy="40" r="4.5" />
    </svg>`,
    css: `.vl-svg-sonar-ping { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-sonar-ping path, .vl-svg-sonar-ping circle { fill: none; stroke: currentColor; }
    .vl-svg-sonar-ping-floor { stroke-width: 2; opacity: .2; stroke-linecap: round; }
    .vl-svg-sonar-ping-waves circle { stroke-width: 2.4; transform-origin: 48px 40px; animation: vl-svg-sonar-ping-out calc(var(--loader-speed) * 2.4) ease-out infinite; }
    .vl-svg-sonar-ping-waves circle:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.8); }
    .vl-svg-sonar-ping-waves circle:nth-child(3) { animation-delay: calc(var(--loader-speed) * -1.6); }
    .vl-svg-sonar-ping-core { fill: currentColor; stroke: none; transform-origin: 48px 40px; animation: vl-svg-sonar-ping-emit calc(var(--loader-speed) * 2.4) ease-out infinite; }
    @keyframes vl-svg-sonar-ping-out { 0% { transform: scale(.3); opacity: .95; } 100% { transform: scale(2.6); opacity: 0; } }
    @keyframes vl-svg-sonar-ping-emit { 0%, 100% { transform: scale(1); opacity: .9; } 12% { transform: scale(1.35); opacity: 1; } }`
  },
  {
    id: 'svg-typewriter-carriage',
    name: 'SVG Typewriter Carriage',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A carriage steps across the page laying down characters, then returns for the next line.',
    markup: `<svg class="vl-svg-typewriter-carriage" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <rect class="vl-svg-typewriter-carriage-page" x="14" y="14" width="68" height="44" rx="3" />
      <g class="vl-svg-typewriter-carriage-text">
        <line x1="22" y1="26" x2="46" y2="26" />
        <line x1="22" y1="36" x2="58" y2="36" />
        <line x1="22" y1="46" x2="38" y2="46" />
      </g>
      <g class="vl-svg-typewriter-carriage-head">
        <line class="vl-svg-typewriter-carriage-bar" x1="0" y1="18" x2="0" y2="54" />
        <circle class="vl-svg-typewriter-carriage-knob" cx="0" cy="18" r="3" />
      </g>
    </svg>`,
    css: `.vl-svg-typewriter-carriage { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-typewriter-carriage rect, .vl-svg-typewriter-carriage line { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-typewriter-carriage-page { stroke-width: 2.2; opacity: .28; }
    .vl-svg-typewriter-carriage-text line { stroke-width: 3.2; stroke-dasharray: 40; stroke-dashoffset: 40; animation: vl-svg-typewriter-carriage-type calc(var(--loader-speed) * 3) steps(12, end) infinite; }
    .vl-svg-typewriter-carriage-text line:nth-child(2) { animation-delay: calc(var(--loader-speed) * -2); }
    .vl-svg-typewriter-carriage-text line:nth-child(3) { animation-delay: calc(var(--loader-speed) * -1); }
    .vl-svg-typewriter-carriage-bar { stroke-width: 2; opacity: .7; }
    .vl-svg-typewriter-carriage-knob { fill: currentColor; stroke: none; }
    .vl-svg-typewriter-carriage-head { animation: vl-svg-typewriter-carriage-travel calc(var(--loader-speed) * 3) steps(12, end) infinite; }
    @keyframes vl-svg-typewriter-carriage-type { 0% { stroke-dashoffset: 40; } 70%, 100% { stroke-dashoffset: 0; } }
    @keyframes vl-svg-typewriter-carriage-travel { 0% { transform: translateX(22px); } 70%, 100% { transform: translateX(70px); } }`
  },
  {
    id: 'svg-origami-fold',
    name: 'SVG Origami Fold',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Paper panels crease inward along their fold lines and spring back to a flat sheet.',
    markup: `<svg class="vl-svg-origami-fold" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-origami-fold-left">
        <polygon points="48,10 26,36 48,62" />
      </g>
      <g class="vl-svg-origami-fold-right">
        <polygon points="48,10 70,36 48,62" />
      </g>
      <line class="vl-svg-origami-fold-crease" x1="48" y1="10" x2="48" y2="62" />
    </svg>`,
    css: `.vl-svg-origami-fold { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-origami-fold polygon { fill: currentColor; stroke: currentColor; stroke-width: 1.6; stroke-linejoin: round; }
    .vl-svg-origami-fold-crease { stroke: currentColor; stroke-width: 1.8; opacity: .8; }
    .vl-svg-origami-fold-left { transform-origin: 48px 36px; opacity: .28; animation: vl-svg-origami-fold-in calc(var(--loader-speed) * 2.2) ease-in-out infinite; }
    .vl-svg-origami-fold-right { transform-origin: 48px 36px; opacity: .55; animation: vl-svg-origami-fold-in calc(var(--loader-speed) * 2.2) ease-in-out infinite; animation-delay: calc(var(--loader-speed) * -1.1); }
    @keyframes vl-svg-origami-fold-in { 0%, 100% { transform: scaleX(1); } 50% { transform: scaleX(.12); } }`
  },
  {
    id: 'svg-funnel-drip',
    name: 'SVG Funnel Drip',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Droplets fall through a funnel one after another and collect as a rising pool below.',
    markup: `<svg class="vl-svg-funnel-drip" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-funnel-drip-cone" d="M28 12H68L52 36V50" />
      <g class="vl-svg-funnel-drip-drops">
        <circle cx="48" cy="0" r="3.2" />
        <circle cx="48" cy="0" r="3.2" />
        <circle cx="48" cy="0" r="3.2" />
      </g>
      <path class="vl-svg-funnel-drip-pool" d="M30 62H66" />
    </svg>`,
    css: `.vl-svg-funnel-drip { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-funnel-drip path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-funnel-drip-cone { stroke-width: 2.6; opacity: .45; }
    .vl-svg-funnel-drip-pool { stroke-width: 4; opacity: .35; animation: vl-svg-funnel-drip-fill calc(var(--loader-speed) * 1.6) ease-in-out infinite; }
    .vl-svg-funnel-drip-drops circle { fill: currentColor; animation: vl-svg-funnel-drip-fall calc(var(--loader-speed) * 1.6) cubic-bezier(.5, 0, .8, 1) infinite; }
    .vl-svg-funnel-drip-drops circle:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.53); }
    .vl-svg-funnel-drip-drops circle:nth-child(3) { animation-delay: calc(var(--loader-speed) * -1.06); }
    @keyframes vl-svg-funnel-drip-fall { 0% { transform: translate(0, 20px) scale(.7); opacity: 0; } 20% { opacity: 1; } 85% { transform: translate(4px, 60px) scale(1); opacity: 1; } 100% { transform: translate(4px, 62px) scale(1.3); opacity: 0; } }
    @keyframes vl-svg-funnel-drip-fill { 0%, 70% { opacity: .3; stroke-width: 3.4; } 88% { opacity: .75; stroke-width: 5; } 100% { opacity: .3; stroke-width: 3.4; } }`
  }
];
