export const spinnersPack3LoadersB = [
  {
    id: 'spinner-hex-orbit',
    name: 'Hex Orbit Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Six orbiting nodes trace a compact hexagonal path for technical and data-processing states.',
    markup: `<div class="vl-spinner-hex-orbit" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-hex-orbit {
  position: relative;
  width: 68px;
  height: 68px;
  animation: vl-spinner-hex-orbit calc(var(--loader-speed) * 1.35) linear infinite;
}
.vl-spinner-hex-orbit::after {
  content: '';
  position: absolute;
  left: 29px;
  top: 29px;
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--loader-accent) 28%, transparent);
  transform: rotate(45deg);
}
.vl-spinner-hex-orbit span {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-spinner-hex-node calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-spinner-hex-orbit span:nth-child(1) { left: 29px; top: 1px; }
.vl-spinner-hex-orbit span:nth-child(2) { right: 6px; top: 15px; animation-delay: .1s; }
.vl-spinner-hex-orbit span:nth-child(3) { right: 6px; bottom: 15px; animation-delay: .2s; }
.vl-spinner-hex-orbit span:nth-child(4) { left: 29px; bottom: 1px; animation-delay: .3s; }
.vl-spinner-hex-orbit span:nth-child(5) { left: 6px; bottom: 15px; animation-delay: .4s; }
.vl-spinner-hex-orbit span:nth-child(6) { left: 6px; top: 15px; animation-delay: .5s; }
@keyframes vl-spinner-hex-orbit { to { transform: rotate(360deg); } }
@keyframes vl-spinner-hex-node {
  0%, 100% { opacity: .3; transform: scale(.65); }
  50% { opacity: 1; transform: scale(1.15); }
}`
  },
  {
    id: 'spinner-ripple-wheel',
    name: 'Ripple Wheel Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Eight spokes ripple around a rotating wheel for continuous background and refresh activity.',
    markup: `<div class="vl-spinner-ripple-wheel" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-ripple-wheel {
  position: relative;
  width: 68px;
  height: 68px;
  animation: vl-spinner-ripple-wheel-rotate calc(var(--loader-speed) * 1.8) linear infinite;
}
.vl-spinner-ripple-wheel span {
  position: absolute;
  left: 29px;
  top: 2px;
  width: 10px;
  height: 21px;
  border-radius: 8px;
  background: var(--loader-accent);
  transform-origin: 5px 32px;
  animation: vl-spinner-ripple-wheel-pulse var(--loader-speed) ease-in-out infinite;
}
.vl-spinner-ripple-wheel span:nth-child(2) { transform: rotate(45deg); animation-delay: .08s; }
.vl-spinner-ripple-wheel span:nth-child(3) { transform: rotate(90deg); animation-delay: .16s; }
.vl-spinner-ripple-wheel span:nth-child(4) { transform: rotate(135deg); animation-delay: .24s; }
.vl-spinner-ripple-wheel span:nth-child(5) { transform: rotate(180deg); animation-delay: .32s; }
.vl-spinner-ripple-wheel span:nth-child(6) { transform: rotate(225deg); animation-delay: .4s; }
.vl-spinner-ripple-wheel span:nth-child(7) { transform: rotate(270deg); animation-delay: .48s; }
.vl-spinner-ripple-wheel span:nth-child(8) { transform: rotate(315deg); animation-delay: .56s; }
@keyframes vl-spinner-ripple-wheel-rotate { to { transform: rotate(360deg); } }
@keyframes vl-spinner-ripple-wheel-pulse {
  0%, 100% { opacity: .18; scale: .72; }
  50% { opacity: 1; scale: 1; }
}`
  },
  {
    id: 'spinner-clockwork',
    name: 'Clockwork Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Two meshed dashed rings counter-rotate like compact clockwork for calculation and processing states.',
    markup: `<div class="vl-spinner-clockwork" aria-hidden="true"><span></span><span></span></div>`,
    css: `.vl-spinner-clockwork {
  position: relative;
  width: 88px;
  height: 62px;
}
.vl-spinner-clockwork span {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 5px dashed var(--loader-accent);
  border-radius: 50%;
  animation: vl-spinner-clockwork-left calc(var(--loader-speed) * 1.3) linear infinite;
}
.vl-spinner-clockwork span:first-child { left: 2px; top: 3px; }
.vl-spinner-clockwork span:last-child {
  right: 2px;
  top: 16px;
  width: 38px;
  height: 38px;
  border-width: 4px;
  opacity: .68;
  animation-name: vl-spinner-clockwork-right;
  animation-duration: calc(var(--loader-speed) * .95);
}
@keyframes vl-spinner-clockwork-left { to { transform: rotate(360deg); } }
@keyframes vl-spinner-clockwork-right { to { transform: rotate(-360deg); } }`
  },
  {
    id: 'spinner-shutter',
    name: 'Shutter Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A rotating shutter alternates bright and muted blades for image, capture, and rendering states.',
    markup: `<div class="vl-spinner-shutter" aria-hidden="true"></div>`,
    css: `.vl-spinner-shutter {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: repeating-conic-gradient(
    from 0deg,
    var(--loader-accent) 0deg 24deg,
    color-mix(in srgb, var(--loader-accent) 14%, transparent) 24deg 45deg
  );
  box-shadow: inset 0 0 0 17px color-mix(in srgb, var(--loader-accent) 8%, transparent);
  animation: vl-spinner-shutter calc(var(--loader-speed) * 1.15) cubic-bezier(.55,.1,.45,.9) infinite;
}
@keyframes vl-spinner-shutter {
  0% { transform: rotate(0deg) scale(.92); }
  50% { transform: rotate(200deg) scale(1); }
  100% { transform: rotate(360deg) scale(.92); }
}`
  },
  {
    id: 'spinner-quantum-loop',
    name: 'Quantum Loop Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Three tilted orbit loops rotate around a glowing core for AI, compute, and simulation activity.',
    markup: `<div class="vl-spinner-quantum-loop" aria-hidden="true"><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-spinner-quantum-loop {
  position: relative;
  width: 72px;
  height: 72px;
  perspective: 180px;
  animation: vl-spinner-quantum-shell calc(var(--loader-speed) * 1.8) linear infinite;
}
.vl-spinner-quantum-loop span {
  --loop-angle: 0deg;
  position: absolute;
  left: 7px;
  top: 23px;
  width: 58px;
  height: 26px;
  border: 3px solid var(--loader-accent);
  border-radius: 50%;
  opacity: .75;
  animation: vl-spinner-quantum-loop var(--loader-speed) linear infinite;
}
.vl-spinner-quantum-loop span:nth-child(2) {
  --loop-angle: 60deg;
  animation-delay: -.22s;
  opacity: .5;
}
.vl-spinner-quantum-loop span:nth-child(3) {
  --loop-angle: -60deg;
  animation-delay: -.44s;
  opacity: .3;
}
.vl-spinner-quantum-loop i {
  position: absolute;
  left: 29px;
  top: 29px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 7px color-mix(in srgb, var(--loader-accent) 14%, transparent);
}
@keyframes vl-spinner-quantum-shell { to { transform: rotate(360deg); } }
@keyframes vl-spinner-quantum-loop {
  0% { border-top-color: transparent; transform: rotate(var(--loop-angle)); }
  100% { border-top-color: transparent; transform: rotate(calc(var(--loop-angle) + 360deg)); }
}`
  }
];
