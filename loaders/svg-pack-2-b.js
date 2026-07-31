export const svgPack2LoadersB = [
  {
    id: 'svg-triple-arc',
    name: 'SVG Triple Arc',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Three independently rotating arc rings create a clean multi-stage processing indicator.',
    markup: `<svg class="vl-svg-triple-arc" viewBox="0 0 72 72" aria-hidden="true" focusable="false">
  <circle class="vl-svg-arc arc-a" cx="36" cy="36" r="27"></circle>
  <circle class="vl-svg-arc arc-b" cx="36" cy="36" r="19"></circle>
  <circle class="vl-svg-arc arc-c" cx="36" cy="36" r="11"></circle>
</svg>`,
    css: `.vl-svg-triple-arc {
  width: 72px;
  height: 72px;
  color: var(--loader-accent);
}
.vl-svg-arc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  transform-origin: 36px 36px;
}
.vl-svg-arc.arc-a {
  stroke-width: 3;
  stroke-dasharray: 38 132;
  animation: vl-svg-arc-a calc(var(--loader-speed) * 1.55) linear infinite;
}
.vl-svg-arc.arc-b {
  stroke-width: 4;
  stroke-dasharray: 24 96;
  opacity: .62;
  animation: vl-svg-arc-b calc(var(--loader-speed) * 1.2) linear infinite reverse;
}
.vl-svg-arc.arc-c {
  stroke-width: 5;
  stroke-dasharray: 16 54;
  opacity: .35;
  animation: vl-svg-arc-a calc(var(--loader-speed) * .9) linear infinite;
}
@keyframes vl-svg-arc-a { to { transform: rotate(360deg); } }
@keyframes vl-svg-arc-b { to { transform: rotate(360deg); } }`
  },
  {
    id: 'svg-logo-trace',
    name: 'SVG Logo Trace',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'An abstract monogram draws and fades in a repeating loop for branded launch and initialization states.',
    markup: `<svg class="vl-svg-logo-trace" viewBox="0 0 72 72" aria-hidden="true" focusable="false">
  <path class="vl-svg-logo-path path-a" d="M15 51 29 15h14l14 36"></path>
  <path class="vl-svg-logo-path path-b" d="M22 38h28"></path>
  <path class="vl-svg-logo-path path-c" d="M19 56h34"></path>
</svg>`,
    css: `.vl-svg-logo-trace {
  width: 72px;
  height: 72px;
  color: var(--loader-accent);
}
.vl-svg-logo-path {
  fill: none;
  stroke: currentColor;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 120;
  stroke-dashoffset: 120;
  animation: vl-svg-logo-trace calc(var(--loader-speed) * 2.1) ease-in-out infinite;
}
.vl-svg-logo-path.path-b { animation-delay: .16s; opacity: .72; }
.vl-svg-logo-path.path-c { animation-delay: .32s; opacity: .42; }
@keyframes vl-svg-logo-trace {
  0%, 12% { stroke-dashoffset: 120; opacity: .15; }
  48%, 72% { stroke-dashoffset: 0; opacity: 1; }
  100% { stroke-dashoffset: -120; opacity: .15; }
}`
  },
  {
    id: 'svg-data-stream',
    name: 'SVG Data Stream',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Parallel data lanes move at different speeds for imports, exports, telemetry, and API streaming.',
    markup: `<svg class="vl-svg-data-stream" viewBox="0 0 72 72" aria-hidden="true" focusable="false">
  <path class="vl-svg-stream stream-a" d="M8 18h56"></path>
  <path class="vl-svg-stream stream-b" d="M8 30h56"></path>
  <path class="vl-svg-stream stream-c" d="M8 42h56"></path>
  <path class="vl-svg-stream stream-d" d="M8 54h56"></path>
  <circle class="vl-svg-stream-node node-a" cx="16" cy="18" r="3"></circle>
  <circle class="vl-svg-stream-node node-b" cx="54" cy="42" r="3"></circle>
</svg>`,
    css: `.vl-svg-data-stream {
  width: 72px;
  height: 72px;
  color: var(--loader-accent);
}
.vl-svg-stream {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: 3;
  stroke-dasharray: 10 8;
  animation: vl-svg-stream calc(var(--loader-speed) * 1.1) linear infinite;
}
.vl-svg-stream.stream-b { opacity: .72; animation-duration: calc(var(--loader-speed) * 1.35); animation-direction: reverse; }
.vl-svg-stream.stream-c { opacity: .48; animation-duration: calc(var(--loader-speed) * .9); }
.vl-svg-stream.stream-d { opacity: .28; animation-duration: calc(var(--loader-speed) * 1.6); animation-direction: reverse; }
.vl-svg-stream-node {
  fill: currentColor;
  transform-box: fill-box;
  transform-origin: center;
  animation: vl-svg-stream-node calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-svg-stream-node.node-b { animation-delay: .35s; }
@keyframes vl-svg-stream { to { stroke-dashoffset: -36; } }
@keyframes vl-svg-stream-node { 50% { transform: scale(1.7); opacity: .35; } }`
  },
  {
    id: 'svg-knot-spinner',
    name: 'SVG Knot Spinner',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Crossing figure-eight paths animate in opposite directions to form a continuous knot spinner.',
    markup: `<svg class="vl-svg-knot-spinner" viewBox="0 0 72 72" aria-hidden="true" focusable="false">
  <path class="vl-svg-knot knot-a" d="M13 36C13 20 29 20 36 36s23 16 23 0S43 20 36 36 13 52 13 36Z"></path>
  <path class="vl-svg-knot knot-b" d="M13 36C13 52 29 52 36 36s23-16 23 0-16 16-23 0S13 20 13 36Z"></path>
  <circle class="vl-svg-knot-core" cx="36" cy="36" r="4"></circle>
</svg>`,
    css: `.vl-svg-knot-spinner {
  width: 72px;
  height: 72px;
  color: var(--loader-accent);
}
.vl-svg-knot {
  fill: none;
  stroke: currentColor;
  stroke-width: 3.5;
  stroke-linecap: round;
  stroke-dasharray: 26 78;
}
.vl-svg-knot.knot-a { animation: vl-svg-knot-a calc(var(--loader-speed) * 1.65) linear infinite; }
.vl-svg-knot.knot-b { opacity: .45; animation: vl-svg-knot-b calc(var(--loader-speed) * 1.65) linear infinite; }
.vl-svg-knot-core {
  fill: currentColor;
  transform-box: fill-box;
  transform-origin: center;
  animation: vl-svg-knot-core calc(var(--loader-speed) * .9) ease-in-out infinite;
}
@keyframes vl-svg-knot-a { to { stroke-dashoffset: -104; } }
@keyframes vl-svg-knot-b { to { stroke-dashoffset: 104; } }
@keyframes vl-svg-knot-core { 50% { transform: scale(1.8); opacity: .25; } }`
  },
  {
    id: 'svg-ripple-grid',
    name: 'SVG Ripple Grid',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A nine-node SVG grid ripples outward from the center for loading tables, dashboards, and data blocks.',
    markup: `<svg class="vl-svg-ripple-grid" viewBox="0 0 72 72" aria-hidden="true" focusable="false">
  <circle class="r1" cx="20" cy="20" r="4"></circle><circle class="r2" cx="36" cy="20" r="4"></circle><circle class="r1" cx="52" cy="20" r="4"></circle>
  <circle class="r2" cx="20" cy="36" r="4"></circle><circle class="r0" cx="36" cy="36" r="5"></circle><circle class="r2" cx="52" cy="36" r="4"></circle>
  <circle class="r1" cx="20" cy="52" r="4"></circle><circle class="r2" cx="36" cy="52" r="4"></circle><circle class="r1" cx="52" cy="52" r="4"></circle>
</svg>`,
    css: `.vl-svg-ripple-grid {
  width: 72px;
  height: 72px;
  color: var(--loader-accent);
}
.vl-svg-ripple-grid circle {
  fill: currentColor;
  transform-box: fill-box;
  transform-origin: center;
  animation: vl-svg-ripple-grid calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-svg-ripple-grid .r0 { animation-delay: 0s; }
.vl-svg-ripple-grid .r2 { animation-delay: .14s; opacity: .72; }
.vl-svg-ripple-grid .r1 { animation-delay: .28s; opacity: .42; }
@keyframes vl-svg-ripple-grid {
  0%, 100% { transform: scale(.45); opacity: .18; }
  45% { transform: scale(1.35); opacity: 1; }
}`
  }
];
