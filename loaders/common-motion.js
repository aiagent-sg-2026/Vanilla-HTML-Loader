export const commonMotionLoaders = [
  {
    id: 'tail-spinner',
    name: 'Tail Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A familiar circular spinner with a soft fading tail for general page and form loading.',
    markup: `<div class="vl-tail-spinner" role="status" aria-label="Loading"></div>`,
    css: `.vl-tail-spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg 210deg,
    color-mix(in srgb, var(--loader-accent) 25%, transparent) 250deg,
    var(--loader-accent) 360deg
  );
  -webkit-mask: radial-gradient(circle, transparent 56%, #000 58%);
  mask: radial-gradient(circle, transparent 56%, #000 58%);
  animation: vl-tail-spinner calc(var(--loader-speed) * .82) linear infinite;
}
@keyframes vl-tail-spinner { to { transform: rotate(360deg); } }`
  },
  {
    id: 'clock-spinner',
    name: 'Clock Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A simple clock-hand animation for waiting, scheduling, report generation, and queued operations.',
    markup: `<div class="vl-clock-spinner" role="status" aria-label="Waiting"><span></span></div>`,
    css: `.vl-clock-spinner {
  position: relative;
  width: 52px;
  height: 52px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 28%, transparent);
  border-radius: 50%;
}
.vl-clock-spinner::before,
.vl-clock-spinner::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 3px;
  border-radius: 999px;
  background: var(--loader-accent);
  transform-origin: 50% 100%;
}
.vl-clock-spinner::before {
  height: 16px;
  transform: translate(-50%, -100%);
  animation: vl-clock-minute calc(var(--loader-speed) * 1.1) linear infinite;
}
.vl-clock-spinner::after {
  height: 12px;
  opacity: .5;
  transform: translate(-50%, -100%) rotate(65deg);
}
.vl-clock-spinner span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translate(-50%, -50%);
}
@keyframes vl-clock-minute {
  from { transform: translate(-50%, -100%) rotate(0deg); }
  to { transform: translate(-50%, -100%) rotate(360deg); }
}`
  },
  {
    id: 'growing-circle',
    name: 'Growing Circle',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A single circle gently expands and fades for lightweight inline loading feedback.',
    markup: `<div class="vl-growing-circle" role="status" aria-label="Loading"></div>`,
    css: `.vl-growing-circle {
  width: 44px;
  height: 44px;
  border: 3px solid var(--loader-accent);
  border-radius: 50%;
  animation: vl-growing-circle calc(var(--loader-speed) * 1.25) ease-out infinite;
}
@keyframes vl-growing-circle {
  0% { transform: scale(.55); opacity: 1; }
  100% { transform: scale(1.18); opacity: 0; }
}`
  },
  {
    id: 'chasing-dots',
    name: 'Chasing Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Four dots travel across a short track for compact search, sync, and polling states.',
    markup: `<div class="vl-chasing-dots" role="status" aria-label="Loading"><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-chasing-dots {
  position: relative;
  width: 76px;
  height: 18px;
}
.vl-chasing-dots span {
  position: absolute;
  top: 5px;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-chasing-dot calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
.vl-chasing-dots span:nth-child(2) { animation-delay: .12s; }
.vl-chasing-dots span:nth-child(3) { animation-delay: .24s; }
.vl-chasing-dots span:nth-child(4) { animation-delay: .36s; }
@keyframes vl-chasing-dot {
  0% { transform: translateX(0) scale(.7); opacity: .25; }
  50% { transform: translateX(34px) scale(1); opacity: 1; }
  100% { transform: translateX(68px) scale(.7); opacity: .25; }
}`
  },
  {
    id: 'three-bar-pulse',
    name: 'Three Bar Pulse',
    category: 'Bars',
    tech: 'CSS',
    description: 'Three restrained bars pulse in sequence for processing and background-operation states.',
    markup: `<div class="vl-three-bars" role="status" aria-label="Processing"><span></span><span></span><span></span></div>`,
    css: `.vl-three-bars {
  height: 44px;
  display: flex;
  align-items: center;
  gap: 7px;
}
.vl-three-bars span {
  width: 8px;
  height: 18px;
  border-radius: 999px;
  background: var(--loader-accent);
  animation: vl-three-bars calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-three-bars span:nth-child(2) { animation-delay: .14s; }
.vl-three-bars span:nth-child(3) { animation-delay: .28s; }
@keyframes vl-three-bars {
  0%, 100% { transform: scaleY(.55); opacity: .35; }
  50% { transform: scaleY(1.55); opacity: 1; }
}`
  }
];
