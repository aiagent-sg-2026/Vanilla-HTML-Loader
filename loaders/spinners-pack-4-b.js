export const spinnersPack4LoadersB = [
  {
    id: 'spinner-prism-rotor',
    name: 'Prism Rotor Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Three translucent triangular blades rotate as a compact prism for rendering and transformation states.',
    markup: `<div class="vl-spinner-prism-rotor" aria-hidden="true"><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-spinner-prism-rotor {
  position: relative;
  width: 70px;
  height: 70px;
  animation: vl-spinner-prism-rotor-turn calc(var(--loader-speed) * 1.2) cubic-bezier(.5, 0, .5, 1) infinite;
}
.vl-spinner-prism-rotor span {
  position: absolute;
  left: 25px;
  top: 4px;
  width: 20px;
  height: 31px;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: color-mix(in srgb, var(--loader-accent) 78%, transparent);
  transform-origin: 10px 31px;
}
.vl-spinner-prism-rotor span:nth-child(2) { transform: rotate(120deg); opacity: .72; }
.vl-spinner-prism-rotor span:nth-child(3) { transform: rotate(240deg); opacity: .46; }
.vl-spinner-prism-rotor i {
  position: absolute;
  left: 29px;
  top: 29px;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: var(--loader-accent);
  transform: rotate(45deg);
}
@keyframes vl-spinner-prism-rotor-turn {
  0% { transform: rotate(0deg) scale(.92); }
  50% { transform: rotate(180deg) scale(1.04); }
  100% { transform: rotate(360deg) scale(.92); }
}`
  },
  {
    id: 'spinner-nested-arcs',
    name: 'Nested Arcs Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Three nested arcs rotate at different speeds for layered background operations and multi-stage loading.',
    markup: `<div class="vl-spinner-nested-arcs" aria-hidden="true"><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-nested-arcs {
  position: relative;
  width: 70px;
  height: 70px;
}
.vl-spinner-nested-arcs span {
  position: absolute;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: var(--loader-accent);
  border-left-color: color-mix(in srgb, var(--loader-accent) 42%, transparent);
  animation: vl-spinner-nested-arcs-turn var(--loader-speed) linear infinite;
}
.vl-spinner-nested-arcs span:nth-child(1) { inset: 2px; }
.vl-spinner-nested-arcs span:nth-child(2) {
  inset: 13px;
  animation-direction: reverse;
  animation-duration: calc(var(--loader-speed) * .72);
  opacity: .8;
}
.vl-spinner-nested-arcs span:nth-child(3) {
  inset: 24px;
  animation-duration: calc(var(--loader-speed) * .48);
  opacity: .62;
}
@keyframes vl-spinner-nested-arcs-turn { to { transform: rotate(360deg); } }`
  },
  {
    id: 'spinner-magnetic-ring',
    name: 'Magnetic Ring Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Two luminous particles travel in opposite directions around a magnetic ring for connection and pairing states.',
    markup: `<div class="vl-spinner-magnetic-ring" aria-hidden="true"><span></span><span></span><i></i></div>`,
    css: `.vl-spinner-magnetic-ring {
  position: relative;
  width: 68px;
  height: 68px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 24%, transparent);
  border-radius: 50%;
}
.vl-spinner-magnetic-ring span {
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  animation: vl-spinner-magnetic-ring-turn calc(var(--loader-speed) * 1.2) linear infinite;
}
.vl-spinner-magnetic-ring span::after {
  content: '';
  position: absolute;
  left: 28px;
  top: -3px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 70%, transparent);
}
.vl-spinner-magnetic-ring span:nth-child(2) {
  animation-direction: reverse;
  animation-duration: calc(var(--loader-speed) * .86);
}
.vl-spinner-magnetic-ring span:nth-child(2)::after {
  width: 9px;
  height: 9px;
  left: 29.5px;
  top: 59px;
  opacity: .62;
}
.vl-spinner-magnetic-ring i {
  position: absolute;
  left: 25px;
  top: 25px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 14%, transparent);
}
@keyframes vl-spinner-magnetic-ring-turn { to { transform: rotate(360deg); } }`
  },
  {
    id: 'spinner-blade-tunnel',
    name: 'Blade Tunnel Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Nested rotating diamond blades create a tunnel-like depth effect while staying within a compact CSS stage.',
    markup: `<div class="vl-spinner-blade-tunnel" aria-hidden="true"><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-blade-tunnel {
  position: relative;
  width: 72px;
  height: 72px;
  perspective: 220px;
  animation: vl-spinner-blade-tunnel-turn calc(var(--loader-speed) * 1.45) linear infinite;
}
.vl-spinner-blade-tunnel span {
  position: absolute;
  left: 50%;
  top: 50%;
  border: 3px solid var(--loader-accent);
  border-radius: 7px;
  transform: translate(-50%, -50%) rotate(45deg);
  animation: vl-spinner-blade-tunnel-depth calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-spinner-blade-tunnel span:nth-child(1) { width: 52px; height: 52px; opacity: .32; }
.vl-spinner-blade-tunnel span:nth-child(2) { width: 40px; height: 40px; opacity: .5; animation-delay: .1s; }
.vl-spinner-blade-tunnel span:nth-child(3) { width: 28px; height: 28px; opacity: .72; animation-delay: .2s; }
.vl-spinner-blade-tunnel span:nth-child(4) { width: 16px; height: 16px; opacity: 1; animation-delay: .3s; }
@keyframes vl-spinner-blade-tunnel-turn { to { transform: rotate(360deg); } }
@keyframes vl-spinner-blade-tunnel-depth {
  0%, 100% { filter: brightness(.72); }
  50% { filter: brightness(1.28); box-shadow: 0 0 9px color-mix(in srgb, var(--loader-accent) 38%, transparent); }
}`
  },
  {
    id: 'spinner-solar-flare',
    name: 'Solar Flare Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A rotating field of flare segments surrounds a pulsing core for energetic processing and generation states.',
    markup: `<div class="vl-spinner-solar-flare" aria-hidden="true"><span></span></div>`,
    css: `.vl-spinner-solar-flare {
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: repeating-conic-gradient(from 0deg, var(--loader-accent) 0 8deg, transparent 8deg 26deg);
  animation: vl-spinner-solar-flare-turn calc(var(--loader-speed) * 1.35) linear infinite;
}
.vl-spinner-solar-flare::before {
  content: '';
  position: absolute;
  inset: 10px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 16%, transparent);
  box-shadow: inset 0 0 0 3px color-mix(in srgb, var(--loader-accent) 48%, transparent);
}
.vl-spinner-solar-flare span {
  position: absolute;
  left: 24px;
  top: 24px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 14px color-mix(in srgb, var(--loader-accent) 62%, transparent);
  animation: vl-spinner-solar-flare-pulse calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
@keyframes vl-spinner-solar-flare-turn { to { transform: rotate(360deg); } }
@keyframes vl-spinner-solar-flare-pulse {
  0%, 100% { transform: scale(.68); opacity: .68; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  }
];
