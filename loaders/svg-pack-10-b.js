export const svgPack10LoadersB = [
  {
    id: 'svg-semaphore-flags',
    name: 'SVG Semaphore Flags',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Two signal arms step through a sequence of positions, spelling out a message one letter at a time.',
    markup: `<svg class="vl-svg-semaphore-flags" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <circle class="vl-svg-semaphore-flags-head" cx="48" cy="18" r="5" />
      <line class="vl-svg-semaphore-flags-body" x1="48" y1="23" x2="48" y2="50" />
      <line class="vl-svg-semaphore-flags-legs" x1="40" y1="64" x2="48" y2="50" />
      <line class="vl-svg-semaphore-flags-legs" x1="56" y1="64" x2="48" y2="50" />
      <g class="vl-svg-semaphore-flags-left">
        <line x1="48" y1="30" x2="26" y2="30" />
        <path d="M26 30L18 26V34Z" />
      </g>
      <g class="vl-svg-semaphore-flags-right">
        <line x1="48" y1="30" x2="70" y2="30" />
        <path d="M70 30L78 26V34Z" />
      </g>
    </svg>`,
    css: `.vl-svg-semaphore-flags { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-semaphore-flags circle, .vl-svg-semaphore-flags line, .vl-svg-semaphore-flags path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-semaphore-flags-head { stroke-width: 2.4; opacity: .6; }
    .vl-svg-semaphore-flags-body { stroke-width: 2.8; opacity: .6; }
    .vl-svg-semaphore-flags-legs { stroke-width: 2.4; opacity: .4; }
    .vl-svg-semaphore-flags-left line, .vl-svg-semaphore-flags-right line { stroke-width: 2.6; }
    .vl-svg-semaphore-flags-left path, .vl-svg-semaphore-flags-right path { fill: currentColor; stroke: none; }
    .vl-svg-semaphore-flags-left { transform-origin: 48px 30px; animation: vl-svg-semaphore-flags-signal-l calc(var(--loader-speed) * 3.2) steps(1, end) infinite; }
    .vl-svg-semaphore-flags-right { transform-origin: 48px 30px; animation: vl-svg-semaphore-flags-signal-r calc(var(--loader-speed) * 3.2) steps(1, end) infinite; }
    @keyframes vl-svg-semaphore-flags-signal-l { 0% { transform: rotate(0deg); } 25% { transform: rotate(45deg); } 50% { transform: rotate(-45deg); } 75% { transform: rotate(-90deg); } 100% { transform: rotate(0deg); } }
    @keyframes vl-svg-semaphore-flags-signal-r { 0% { transform: rotate(0deg); } 25% { transform: rotate(-45deg); } 50% { transform: rotate(45deg); } 75% { transform: rotate(90deg); } 100% { transform: rotate(0deg); } }`
  },
  {
    id: 'svg-bellows-breath',
    name: 'SVG Bellows Breath',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Accordion pleats compress and expand, puffing a stream of air out of the nozzle.',
    markup: `<svg class="vl-svg-bellows-breath" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-bellows-breath-body">
        <path class="vl-svg-bellows-breath-pleats" d="M22 24L34 32L22 40L34 48L22 56" />
        <path class="vl-svg-bellows-breath-shell" d="M22 22V58L58 50V30Z" />
        <path class="vl-svg-bellows-breath-nozzle" d="M58 36H72" />
      </g>
      <g class="vl-svg-bellows-breath-puff">
        <circle cx="78" cy="36" r="2.6" />
        <circle cx="78" cy="36" r="2.6" />
      </g>
    </svg>`,
    css: `.vl-svg-bellows-breath { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-bellows-breath path, .vl-svg-bellows-breath circle { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-bellows-breath-shell { stroke-width: 2.6; fill: currentColor; fill-opacity: .12; }
    .vl-svg-bellows-breath-pleats { stroke-width: 1.8; opacity: .45; }
    .vl-svg-bellows-breath-nozzle { stroke-width: 3; opacity: .7; }
    .vl-svg-bellows-breath-body { transform-box: fill-box; transform-origin: right center; animation: vl-svg-bellows-breath-squeeze calc(var(--loader-speed) * 1.8) ease-in-out infinite; }
    .vl-svg-bellows-breath-puff circle { fill: currentColor; stroke: none; animation: vl-svg-bellows-breath-blow calc(var(--loader-speed) * 1.8) ease-out infinite; }
    .vl-svg-bellows-breath-puff circle:nth-child(2) { animation-delay: calc(var(--loader-speed) * .28); }
    @keyframes vl-svg-bellows-breath-squeeze { 0%, 100% { transform: scaleX(1); } 45% { transform: scaleX(.62); } }
    @keyframes vl-svg-bellows-breath-blow { 0%, 30% { transform: translateX(0) scale(.5); opacity: 0; } 50% { opacity: .9; } 100% { transform: translateX(16px) scale(1.4); opacity: 0; } }`
  },
  {
    id: 'svg-snowflake-grow',
    name: 'SVG Snowflake Grow',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Six arms crystallise outward from the centre, sprouting branches as the flake completes.',
    markup: `<svg class="vl-svg-snowflake-grow" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-snowflake-grow-turn">
        <g class="vl-svg-snowflake-grow-arm"><path d="M48 36V12M48 20L42 15M48 20L54 15M48 27L43 23M48 27L53 23" /></g>
        <g class="vl-svg-snowflake-grow-arm" transform="rotate(60 48 36)"><path d="M48 36V12M48 20L42 15M48 20L54 15M48 27L43 23M48 27L53 23" /></g>
        <g class="vl-svg-snowflake-grow-arm" transform="rotate(120 48 36)"><path d="M48 36V12M48 20L42 15M48 20L54 15M48 27L43 23M48 27L53 23" /></g>
        <g class="vl-svg-snowflake-grow-arm" transform="rotate(180 48 36)"><path d="M48 36V12M48 20L42 15M48 20L54 15M48 27L43 23M48 27L53 23" /></g>
        <g class="vl-svg-snowflake-grow-arm" transform="rotate(240 48 36)"><path d="M48 36V12M48 20L42 15M48 20L54 15M48 27L43 23M48 27L53 23" /></g>
        <g class="vl-svg-snowflake-grow-arm" transform="rotate(300 48 36)"><path d="M48 36V12M48 20L42 15M48 20L54 15M48 27L43 23M48 27L53 23" /></g>
      </g>
      <circle class="vl-svg-snowflake-grow-core" cx="48" cy="36" r="3" />
    </svg>`,
    css: `.vl-svg-snowflake-grow { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-snowflake-grow path { fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; }
    .vl-svg-snowflake-grow-core { fill: currentColor; stroke: none; }
    .vl-svg-snowflake-grow-arm path { stroke-dasharray: 46; stroke-dashoffset: 46; animation: vl-svg-snowflake-grow-form calc(var(--loader-speed) * 3) ease-in-out infinite; }
    .vl-svg-snowflake-grow-arm:nth-child(2) path { animation-delay: calc(var(--loader-speed) * .12); }
    .vl-svg-snowflake-grow-arm:nth-child(3) path { animation-delay: calc(var(--loader-speed) * .24); }
    .vl-svg-snowflake-grow-arm:nth-child(4) path { animation-delay: calc(var(--loader-speed) * .36); }
    .vl-svg-snowflake-grow-arm:nth-child(5) path { animation-delay: calc(var(--loader-speed) * .48); }
    .vl-svg-snowflake-grow-arm:nth-child(6) path { animation-delay: calc(var(--loader-speed) * .6); }
    .vl-svg-snowflake-grow-turn { transform-origin: 48px 36px; animation: vl-svg-snowflake-grow-drift calc(var(--loader-speed) * 6) linear infinite; }
    @keyframes vl-svg-snowflake-grow-form { 0% { stroke-dashoffset: 46; opacity: .2; } 45%, 78% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 46; opacity: .2; } }
    @keyframes vl-svg-snowflake-grow-drift { to { transform: rotate(360deg); } }`
  },
  {
    id: 'svg-paper-plane',
    name: 'SVG Paper Plane',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A paper plane glides along a dashed flight path, banking as it follows the curve.',
    markup: `<svg class="vl-svg-paper-plane" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-paper-plane-route" d="M8 56Q30 14 48 36T88 18" />
      <g class="vl-svg-paper-plane-craft">
        <path class="vl-svg-paper-plane-wing" d="M0 0L16 7L0 14L4 7Z" />
        <path class="vl-svg-paper-plane-fold" d="M0 0L4 7L0 14" />
      </g>
    </svg>`,
    css: `.vl-svg-paper-plane { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-paper-plane path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-paper-plane-route { stroke-width: 2; opacity: .22; stroke-dasharray: 6 6; animation: vl-svg-paper-plane-trail calc(var(--loader-speed) * 1.2) linear infinite; }
    .vl-svg-paper-plane-wing { fill: currentColor; fill-opacity: .85; stroke-width: 1.4; }
    .vl-svg-paper-plane-fold { stroke-width: 1.4; opacity: .5; }
    .vl-svg-paper-plane-craft { animation: vl-svg-paper-plane-fly calc(var(--loader-speed) * 3) ease-in-out infinite; }
    @keyframes vl-svg-paper-plane-trail { to { stroke-dashoffset: -12; } }
    @keyframes vl-svg-paper-plane-fly {
      0%   { transform: translate(4px, 50px) rotate(-32deg); opacity: 0; }
      12%  { opacity: 1; }
      35%  { transform: translate(30px, 22px) rotate(6deg); }
      60%  { transform: translate(50px, 34px) rotate(-14deg); }
      88%  { transform: translate(80px, 14px) rotate(-24deg); opacity: 1; }
      100% { transform: translate(88px, 10px) rotate(-24deg); opacity: 0; }
    }`
  },
  {
    id: 'svg-thermometer-rise',
    name: 'SVG Thermometer Rise',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'The column climbs the tube and each scale mark brightens as the reading passes it.',
    markup: `<svg class="vl-svg-thermometer-rise" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-thermometer-rise-tube" d="M42 14A6 6 0 0 1 54 14V46A9 9 0 1 1 42 46Z" />
      <rect class="vl-svg-thermometer-rise-column" x="45" y="18" width="6" height="34" rx="3" />
      <circle class="vl-svg-thermometer-rise-bulb" cx="48" cy="52" r="6.5" />
      <g class="vl-svg-thermometer-rise-scale">
        <line x1="58" y1="40" x2="66" y2="40" />
        <line x1="58" y1="32" x2="66" y2="32" />
        <line x1="58" y1="24" x2="66" y2="24" />
        <line x1="58" y1="16" x2="66" y2="16" />
      </g>
    </svg>`,
    css: `.vl-svg-thermometer-rise { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-thermometer-rise path, .vl-svg-thermometer-rise line { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-thermometer-rise-tube { stroke-width: 2.4; opacity: .45; }
    .vl-svg-thermometer-rise-bulb { fill: currentColor; stroke: none; }
    .vl-svg-thermometer-rise-column { fill: currentColor; stroke: none; transform-box: fill-box; transform-origin: bottom center; animation: vl-svg-thermometer-rise-climb calc(var(--loader-speed) * 2.8) ease-in-out infinite; }
    .vl-svg-thermometer-rise-scale line { stroke-width: 2; opacity: .18; animation: vl-svg-thermometer-rise-mark calc(var(--loader-speed) * 2.8) ease-in-out infinite; }
    .vl-svg-thermometer-rise-scale line:nth-child(2) { animation-delay: calc(var(--loader-speed) * .18); }
    .vl-svg-thermometer-rise-scale line:nth-child(3) { animation-delay: calc(var(--loader-speed) * .36); }
    .vl-svg-thermometer-rise-scale line:nth-child(4) { animation-delay: calc(var(--loader-speed) * .54); }
    @keyframes vl-svg-thermometer-rise-climb { 0%, 100% { transform: scaleY(.12); } 55%, 75% { transform: scaleY(1); } }
    @keyframes vl-svg-thermometer-rise-mark { 0%, 100% { opacity: .15; } 30%, 70% { opacity: .95; } }`
  }
];
