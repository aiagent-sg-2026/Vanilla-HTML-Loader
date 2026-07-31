export const svgPack9LoadersA = [
  {
    id: 'svg-sundial-shadow',
    name: 'SVG Sundial Shadow',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A gnomon casts a shadow that sweeps across the dial while the hour marks brighten in turn.',
    markup: `<svg class="vl-svg-sundial-shadow" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-sundial-shadow-plate" d="M18 58A30 30 0 0 1 78 58Z" />
      <g class="vl-svg-sundial-shadow-marks">
        <line x1="24" y1="54" x2="29" y2="50" />
        <line x1="33" y1="38" x2="37" y2="42" />
        <line x1="48" y1="30" x2="48" y2="36" />
        <line x1="63" y1="38" x2="59" y2="42" />
        <line x1="72" y1="54" x2="67" y2="50" />
      </g>
      <line class="vl-svg-sundial-shadow-cast" x1="48" y1="58" x2="48" y2="30" />
      <path class="vl-svg-sundial-shadow-gnomon" d="M48 58L44 34H52Z" />
    </svg>`,
    css: `.vl-svg-sundial-shadow { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-sundial-shadow path, .vl-svg-sundial-shadow line { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-sundial-shadow-plate { stroke-width: 2.2; opacity: .28; }
    .vl-svg-sundial-shadow-gnomon { fill: currentColor; stroke: none; opacity: .85; }
    .vl-svg-sundial-shadow-marks line { stroke-width: 2; opacity: .22; animation: vl-svg-sundial-shadow-mark calc(var(--loader-speed) * 3) ease-in-out infinite; }
    .vl-svg-sundial-shadow-marks line:nth-child(2) { animation-delay: calc(var(--loader-speed) * .6); }
    .vl-svg-sundial-shadow-marks line:nth-child(3) { animation-delay: calc(var(--loader-speed) * 1.2); }
    .vl-svg-sundial-shadow-marks line:nth-child(4) { animation-delay: calc(var(--loader-speed) * 1.8); }
    .vl-svg-sundial-shadow-marks line:nth-child(5) { animation-delay: calc(var(--loader-speed) * 2.4); }
    .vl-svg-sundial-shadow-cast { stroke-width: 5; opacity: .32; transform-origin: 48px 58px; animation: vl-svg-sundial-shadow-sweep calc(var(--loader-speed) * 3) linear infinite; }
    @keyframes vl-svg-sundial-shadow-sweep { 0% { transform: rotate(-62deg); } 100% { transform: rotate(62deg); } }
    @keyframes vl-svg-sundial-shadow-mark { 0%, 100% { opacity: .18; } 10% { opacity: 1; } 30% { opacity: .18; } }`
  },
  {
    id: 'svg-suspension-bridge',
    name: 'SVG Suspension Bridge',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Suspension cables tighten one after another as the deck settles into place beneath them.',
    markup: `<svg class="vl-svg-suspension-bridge" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-suspension-bridge-cable" d="M10 22Q48 58 86 22" />
      <g class="vl-svg-suspension-bridge-hangers">
        <line x1="22" y1="33" x2="22" y2="50" />
        <line x1="32" y1="41" x2="32" y2="50" />
        <line x1="42" y1="46" x2="42" y2="50" />
        <line x1="54" y1="46" x2="54" y2="50" />
        <line x1="64" y1="41" x2="64" y2="50" />
        <line x1="74" y1="33" x2="74" y2="50" />
      </g>
      <line class="vl-svg-suspension-bridge-deck" x1="10" y1="50" x2="86" y2="50" />
      <line class="vl-svg-suspension-bridge-tower" x1="10" y1="18" x2="10" y2="56" />
      <line class="vl-svg-suspension-bridge-tower" x1="86" y1="18" x2="86" y2="56" />
    </svg>`,
    css: `.vl-svg-suspension-bridge { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-suspension-bridge path, .vl-svg-suspension-bridge line { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-suspension-bridge-cable { stroke-width: 2.6; stroke-dasharray: 110; stroke-dashoffset: 110; animation: vl-svg-suspension-bridge-draw calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
    .vl-svg-suspension-bridge-tower { stroke-width: 3; opacity: .5; }
    .vl-svg-suspension-bridge-deck { stroke-width: 3.4; opacity: .75; }
    .vl-svg-suspension-bridge-hangers line { stroke-width: 1.8; opacity: .2; animation: vl-svg-suspension-bridge-tighten calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
    .vl-svg-suspension-bridge-hangers line:nth-child(2) { animation-delay: calc(var(--loader-speed) * .18); }
    .vl-svg-suspension-bridge-hangers line:nth-child(3) { animation-delay: calc(var(--loader-speed) * .36); }
    .vl-svg-suspension-bridge-hangers line:nth-child(4) { animation-delay: calc(var(--loader-speed) * .54); }
    .vl-svg-suspension-bridge-hangers line:nth-child(5) { animation-delay: calc(var(--loader-speed) * .72); }
    .vl-svg-suspension-bridge-hangers line:nth-child(6) { animation-delay: calc(var(--loader-speed) * .9); }
    @keyframes vl-svg-suspension-bridge-draw { 0% { stroke-dashoffset: 110; } 55%, 100% { stroke-dashoffset: 0; } }
    @keyframes vl-svg-suspension-bridge-tighten { 0%, 100% { opacity: .18; } 40% { opacity: .95; } }`
  },
  {
    id: 'svg-galaxy-arms',
    name: 'SVG Galaxy Arms',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Two spiral arms wind around a bright core, rotating slowly against a dusting of stars.',
    markup: `<svg class="vl-svg-galaxy-arms" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-galaxy-arms-spin">
        <path d="M48 36Q62 26 70 36T54 56" />
        <path d="M48 36Q34 46 26 36T42 16" />
      </g>
      <g class="vl-svg-galaxy-arms-stars">
        <circle cx="22" cy="20" r="1.6" />
        <circle cx="76" cy="24" r="1.3" />
        <circle cx="70" cy="56" r="1.6" />
        <circle cx="26" cy="54" r="1.3" />
      </g>
      <circle class="vl-svg-galaxy-arms-core" cx="48" cy="36" r="5" />
    </svg>`,
    css: `.vl-svg-galaxy-arms { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-galaxy-arms path { fill: none; stroke: currentColor; stroke-width: 3; stroke-linecap: round; opacity: .7; }
    .vl-svg-galaxy-arms-spin { transform-origin: 48px 36px; animation: vl-svg-galaxy-arms-turn calc(var(--loader-speed) * 3.2) linear infinite; }
    .vl-svg-galaxy-arms-core { fill: currentColor; stroke: none; transform-origin: 48px 36px; animation: vl-svg-galaxy-arms-glow calc(var(--loader-speed) * 1.6) ease-in-out infinite; }
    .vl-svg-galaxy-arms-stars circle { fill: currentColor; opacity: .25; animation: vl-svg-galaxy-arms-twinkle calc(var(--loader-speed) * 2) ease-in-out infinite; }
    .vl-svg-galaxy-arms-stars circle:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.5); }
    .vl-svg-galaxy-arms-stars circle:nth-child(3) { animation-delay: calc(var(--loader-speed) * -1); }
    .vl-svg-galaxy-arms-stars circle:nth-child(4) { animation-delay: calc(var(--loader-speed) * -1.5); }
    @keyframes vl-svg-galaxy-arms-turn { to { transform: rotate(360deg); } }
    @keyframes vl-svg-galaxy-arms-glow { 0%, 100% { transform: scale(1); opacity: .9; } 50% { transform: scale(1.25); opacity: 1; } }
    @keyframes vl-svg-galaxy-arms-twinkle { 0%, 100% { opacity: .2; } 50% { opacity: .9; } }`
  },
  {
    id: 'svg-crane-lift',
    name: 'SVG Crane Lift',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A tower crane lowers its hook, picks up a crate and lifts it back along the jib.',
    markup: `<svg class="vl-svg-crane-lift" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <line class="vl-svg-crane-lift-mast" x1="26" y1="14" x2="26" y2="60" />
      <line class="vl-svg-crane-lift-jib" x1="16" y1="14" x2="80" y2="14" />
      <line class="vl-svg-crane-lift-base" x1="16" y1="60" x2="36" y2="60" />
      <g class="vl-svg-crane-lift-hoist">
        <line class="vl-svg-crane-lift-cable" x1="64" y1="14" x2="64" y2="26" />
        <rect class="vl-svg-crane-lift-crate" x="57" y="26" width="14" height="12" rx="2" />
      </g>
    </svg>`,
    css: `.vl-svg-crane-lift { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-crane-lift line, .vl-svg-crane-lift rect { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-crane-lift-mast, .vl-svg-crane-lift-jib { stroke-width: 3; opacity: .55; }
    .vl-svg-crane-lift-base { stroke-width: 3.4; opacity: .4; }
    .vl-svg-crane-lift-cable { stroke-width: 1.6; opacity: .8; animation: vl-svg-crane-lift-payout calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
    .vl-svg-crane-lift-crate { fill: currentColor; fill-opacity: .8; stroke-width: 1.6; }
    .vl-svg-crane-lift-hoist { animation: vl-svg-crane-lift-travel calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
    @keyframes vl-svg-crane-lift-travel { 0%, 20% { transform: translate(0, 20px); } 45%, 60% { transform: translate(0, 0); } 85%, 100% { transform: translate(-34px, 4px); } }
    @keyframes vl-svg-crane-lift-payout { 0%, 20% { stroke-width: 1.6; opacity: .35; } 45%, 100% { stroke-width: 1.8; opacity: .85; } }`
  },
  {
    id: 'svg-fountain-jets',
    name: 'SVG Fountain Jets',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Three jets rise and fall out of phase, arcing back down into the basin below.',
    markup: `<svg class="vl-svg-fountain-jets" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-fountain-jets-streams">
        <path d="M48 54Q36 34 26 52" />
        <path d="M48 54Q48 26 48 26" />
        <path d="M48 54Q60 34 70 52" />
      </g>
      <path class="vl-svg-fountain-jets-basin" d="M20 56H76L70 64H26Z" />
      <circle class="vl-svg-fountain-jets-nozzle" cx="48" cy="55" r="3" />
    </svg>`,
    css: `.vl-svg-fountain-jets { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-fountain-jets path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-fountain-jets-basin { stroke-width: 2.4; opacity: .35; }
    .vl-svg-fountain-jets-nozzle { fill: currentColor; stroke: none; opacity: .8; }
    .vl-svg-fountain-jets-streams path { stroke-width: 2.8; stroke-dasharray: 46; stroke-dashoffset: 46; animation: vl-svg-fountain-jets-spout calc(var(--loader-speed) * 1.9) ease-in-out infinite; }
    .vl-svg-fountain-jets-streams path:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.63); }
    .vl-svg-fountain-jets-streams path:nth-child(3) { animation-delay: calc(var(--loader-speed) * -1.26); }
    @keyframes vl-svg-fountain-jets-spout { 0% { stroke-dashoffset: 46; opacity: .2; } 45% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: -46; opacity: .2; } }`
  }
];
