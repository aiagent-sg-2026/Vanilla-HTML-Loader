export const spinnersPack4LoadersA = [
  {
    id: 'spinner-vortex-core',
    name: 'Vortex Core Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A layered conic vortex rotates around a breathing core for compute-heavy and processing states.',
    markup: `<div class="vl-spinner-vortex-core" aria-hidden="true"><span></span></div>`,
    css: `.vl-spinner-vortex-core {
  position: relative;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background: conic-gradient(from 20deg, var(--loader-accent), transparent 20%, color-mix(in srgb, var(--loader-accent) 58%, transparent) 42%, transparent 62%, var(--loader-accent));
  animation: vl-spinner-vortex-core-spin calc(var(--loader-speed) * 1.15) linear infinite;
}
.vl-spinner-vortex-core::before {
  content: '';
  position: absolute;
  inset: 9px;
  border-radius: 50%;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 26%, transparent);
  border-left-color: var(--loader-accent);
  animation: vl-spinner-vortex-core-spin calc(var(--loader-speed) * .68) linear infinite reverse;
}
.vl-spinner-vortex-core span {
  position: absolute;
  left: 25px;
  top: 25px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 7px color-mix(in srgb, var(--loader-accent) 16%, transparent);
  animation: vl-spinner-vortex-core-pulse calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-spinner-vortex-core-spin { to { transform: rotate(360deg); } }
@keyframes vl-spinner-vortex-core-pulse {
  0%, 100% { transform: scale(.72); opacity: .65; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'spinner-rotor-cage',
    name: 'Rotor Cage Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Three tilted rotor rings form a compact cage for synchronization and orchestration loading states.',
    markup: `<div class="vl-spinner-rotor-cage" aria-hidden="true"><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-spinner-rotor-cage {
  position: relative;
  width: 70px;
  height: 70px;
  animation: vl-spinner-rotor-cage-turn calc(var(--loader-speed) * 1.8) linear infinite;
}
.vl-spinner-rotor-cage span {
  position: absolute;
  left: 8px;
  top: 20px;
  width: 54px;
  height: 30px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 78%, transparent);
  border-radius: 50%;
}
.vl-spinner-rotor-cage span:nth-child(1) { transform: rotate(0deg); }
.vl-spinner-rotor-cage span:nth-child(2) { transform: rotate(60deg); }
.vl-spinner-rotor-cage span:nth-child(3) { transform: rotate(120deg); }
.vl-spinner-rotor-cage i {
  position: absolute;
  left: 29px;
  top: 29px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 62%, transparent);
  animation: vl-spinner-rotor-cage-core calc(var(--loader-speed) * .9) ease-in-out infinite;
}
@keyframes vl-spinner-rotor-cage-turn { to { transform: rotate(360deg); } }
@keyframes vl-spinner-rotor-cage-core {
  0%, 100% { transform: scale(.68); opacity: .55; }
  50% { transform: scale(1.18); opacity: 1; }
}`
  },
  {
    id: 'spinner-pulse-compass',
    name: 'Pulse Compass Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Four directional markers rotate and pulse around a center hub for navigation and discovery states.',
    markup: `<div class="vl-spinner-pulse-compass" aria-hidden="true"><span></span><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-spinner-pulse-compass {
  position: relative;
  width: 66px;
  height: 66px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 22%, transparent);
  border-radius: 50%;
  animation: vl-spinner-pulse-compass-turn calc(var(--loader-speed) * 1.6) cubic-bezier(.45, 0, .55, 1) infinite;
}
.vl-spinner-pulse-compass span {
  position: absolute;
  left: 29px;
  top: 3px;
  width: 8px;
  height: 17px;
  border-radius: 6px;
  background: var(--loader-accent);
  transform-origin: 4px 30px;
  animation: vl-spinner-pulse-compass-mark calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-spinner-pulse-compass span:nth-child(2) { transform: rotate(90deg); animation-delay: .12s; }
.vl-spinner-pulse-compass span:nth-child(3) { transform: rotate(180deg); animation-delay: .24s; }
.vl-spinner-pulse-compass span:nth-child(4) { transform: rotate(270deg); animation-delay: .36s; }
.vl-spinner-pulse-compass i {
  position: absolute;
  left: 27px;
  top: 27px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 72%, white);
}
@keyframes vl-spinner-pulse-compass-turn {
  0%, 18% { transform: rotate(0deg); }
  82%, 100% { transform: rotate(360deg); }
}
@keyframes vl-spinner-pulse-compass-mark {
  0%, 100% { opacity: .32; }
  50% { opacity: 1; box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 50%, transparent); }
}`
  },
  {
    id: 'spinner-orbit-tiles',
    name: 'Orbit Tiles Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Four square tiles orbit a central point while counter-rotating to retain a crisp geometric appearance.',
    markup: `<div class="vl-spinner-orbit-tiles" aria-hidden="true"><span></span><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-spinner-orbit-tiles {
  position: relative;
  width: 68px;
  height: 68px;
  animation: vl-spinner-orbit-tiles-orbit calc(var(--loader-speed) * 1.45) linear infinite;
}
.vl-spinner-orbit-tiles span {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: var(--loader-accent);
  animation: vl-spinner-orbit-tiles-counter calc(var(--loader-speed) * 1.45) linear infinite reverse;
}
.vl-spinner-orbit-tiles span:nth-child(1) { left: 28px; top: 1px; }
.vl-spinner-orbit-tiles span:nth-child(2) { right: 1px; top: 28px; opacity: .78; }
.vl-spinner-orbit-tiles span:nth-child(3) { left: 28px; bottom: 1px; opacity: .56; }
.vl-spinner-orbit-tiles span:nth-child(4) { left: 1px; top: 28px; opacity: .36; }
.vl-spinner-orbit-tiles i {
  position: absolute;
  left: 27px;
  top: 27px;
  width: 14px;
  height: 14px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 60%, transparent);
  border-radius: 4px;
  transform: rotate(45deg);
}
@keyframes vl-spinner-orbit-tiles-orbit { to { transform: rotate(360deg); } }
@keyframes vl-spinner-orbit-tiles-counter { to { transform: rotate(360deg); } }`
  },
  {
    id: 'spinner-crescent-chase',
    name: 'Crescent Chase Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Two offset crescents chase one another around a quiet center for elegant page-level loading states.',
    markup: `<div class="vl-spinner-crescent-chase" aria-hidden="true"><span></span><span></span></div>`,
    css: `.vl-spinner-crescent-chase {
  position: relative;
  width: 68px;
  height: 68px;
}
.vl-spinner-crescent-chase span {
  position: absolute;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: var(--loader-accent);
  border-right-color: color-mix(in srgb, var(--loader-accent) 72%, transparent);
  animation: vl-spinner-crescent-chase-turn var(--loader-speed) linear infinite;
}
.vl-spinner-crescent-chase span:first-child { inset: 3px; }
.vl-spinner-crescent-chase span:last-child {
  inset: 15px;
  border-top-color: color-mix(in srgb, var(--loader-accent) 48%, white);
  border-right-color: transparent;
  border-bottom-color: var(--loader-accent);
  animation-direction: reverse;
  animation-duration: calc(var(--loader-speed) * .72);
}
@keyframes vl-spinner-crescent-chase-turn { to { transform: rotate(360deg); } }`
  }
];
