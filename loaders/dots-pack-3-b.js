export const dotsPack3LoadersB = [
  {
    id: 'dot-ping-pong-trail',
    name: 'Ping-Pong Trail Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'A leading dot travels between two ends while a short trail pulses behind it for request and transfer states.',
    markup: `<div class="vl-dot-ping-pong-trail" aria-hidden="true"><span></span><i></i><i></i><i></i><i></i></div>`,
    css: `.vl-dot-ping-pong-trail {
  position: relative;
  width: 132px;
  height: 28px;
}
.vl-dot-ping-pong-trail span {
  position: absolute;
  left: 0;
  top: 8px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-ping-pong-trail calc(var(--loader-speed) * 1.45) ease-in-out infinite alternate;
}
.vl-dot-ping-pong-trail i {
  position: absolute;
  top: 10px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 46%, transparent);
  animation: vl-dot-ping-pong-trail-pulse calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-dot-ping-pong-trail i:nth-child(2) { left: 29px; }
.vl-dot-ping-pong-trail i:nth-child(3) { left: 57px; animation-delay: .12s; }
.vl-dot-ping-pong-trail i:nth-child(4) { left: 85px; animation-delay: .24s; }
.vl-dot-ping-pong-trail i:nth-child(5) { left: 113px; animation-delay: .36s; }
@keyframes vl-dot-ping-pong-trail {
  0% { transform: translateX(0) scale(.78); }
  100% { transform: translateX(120px) scale(1.08); }
}
@keyframes vl-dot-ping-pong-trail-pulse {
  0%, 100% { opacity: .18; transform: scale(.6); }
  50% { opacity: .85; transform: scale(1); }
}`
  },
  {
    id: 'dot-diamond-pulse',
    name: 'Diamond Pulse Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Five dots pulse through a diamond pattern for focused calculations, matching, and validation states.',
    markup: `<div class="vl-dot-diamond-pulse" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-diamond-pulse {
  position: relative;
  width: 62px;
  height: 62px;
}
.vl-dot-diamond-pulse span {
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-diamond-pulse calc(var(--loader-speed) * 1.18) ease-in-out infinite;
}
.vl-dot-diamond-pulse span:nth-child(1) { left: 25px; top: 1px; }
.vl-dot-diamond-pulse span:nth-child(2) { right: 1px; top: 25px; animation-delay: .14s; }
.vl-dot-diamond-pulse span:nth-child(3) { left: 25px; bottom: 1px; animation-delay: .28s; }
.vl-dot-diamond-pulse span:nth-child(4) { left: 1px; top: 25px; animation-delay: .42s; }
.vl-dot-diamond-pulse span:nth-child(5) { left: 25px; top: 25px; animation-delay: .56s; }
@keyframes vl-dot-diamond-pulse {
  0%, 100% { opacity: .18; transform: scale(.55); }
  45% { opacity: 1; transform: scale(1.25); }
}`
  },
  {
    id: 'dot-staggered-grid',
    name: 'Staggered Grid Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'A 4×4 matrix lights diagonally in staggered waves for data, table, and dashboard loading states.',
    markup: `<div class="vl-dot-staggered-grid" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-staggered-grid {
  display: grid;
  grid-template-columns: repeat(4, 8px);
  gap: 6px;
}
.vl-dot-staggered-grid span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-staggered-grid calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-dot-staggered-grid span:nth-child(2), .vl-dot-staggered-grid span:nth-child(5) { animation-delay: .08s; }
.vl-dot-staggered-grid span:nth-child(3), .vl-dot-staggered-grid span:nth-child(6), .vl-dot-staggered-grid span:nth-child(9) { animation-delay: .16s; }
.vl-dot-staggered-grid span:nth-child(4), .vl-dot-staggered-grid span:nth-child(7), .vl-dot-staggered-grid span:nth-child(10), .vl-dot-staggered-grid span:nth-child(13) { animation-delay: .24s; }
.vl-dot-staggered-grid span:nth-child(8), .vl-dot-staggered-grid span:nth-child(11), .vl-dot-staggered-grid span:nth-child(14) { animation-delay: .32s; }
.vl-dot-staggered-grid span:nth-child(12), .vl-dot-staggered-grid span:nth-child(15) { animation-delay: .4s; }
.vl-dot-staggered-grid span:nth-child(16) { animation-delay: .48s; }
@keyframes vl-dot-staggered-grid {
  0%, 100% { opacity: .16; transform: scale(.5); }
  50% { opacity: 1; transform: scale(1.1); }
}`
  },
  {
    id: 'dot-satellite-orbit',
    name: 'Satellite Orbit Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Three satellite dots rotate around a stable center for distributed tasks, connectivity, and network activity.',
    markup: `<div class="vl-dot-satellite-orbit" aria-hidden="true"><i></i><span></span><span></span><span></span></div>`,
    css: `.vl-dot-satellite-orbit {
  position: relative;
  width: 66px;
  height: 66px;
  animation: vl-dot-satellite-orbit calc(var(--loader-speed) * 1.7) linear infinite;
}
.vl-dot-satellite-orbit i {
  position: absolute;
  left: 27px;
  top: 27px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--loader-accent) 12%, transparent);
}
.vl-dot-satellite-orbit span {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-satellite-pulse calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-dot-satellite-orbit span:nth-child(2) { left: 29px; top: 1px; }
.vl-dot-satellite-orbit span:nth-child(3) { right: 4px; bottom: 9px; animation-delay: .18s; }
.vl-dot-satellite-orbit span:nth-child(4) { left: 4px; bottom: 9px; animation-delay: .36s; }
@keyframes vl-dot-satellite-orbit { to { transform: rotate(360deg); } }
@keyframes vl-dot-satellite-pulse {
  0%, 100% { opacity: .3; transform: scale(.7); }
  50% { opacity: 1; transform: scale(1.15); }
}`
  },
  {
    id: 'dot-signal-burst',
    name: 'Signal Burst Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Eight dots burst outward from a central point for notifications, signal detection, and event processing.',
    markup: `<div class="vl-dot-signal-burst" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-signal-burst {
  position: relative;
  width: 70px;
  height: 70px;
}
.vl-dot-signal-burst span {
  position: absolute;
  left: 31px;
  top: 31px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-signal-burst calc(var(--loader-speed) * 1.25) ease-out infinite;
}
.vl-dot-signal-burst span:nth-child(1) { --vl-burst-x: 0px; --vl-burst-y: -25px; }
.vl-dot-signal-burst span:nth-child(2) { --vl-burst-x: 18px; --vl-burst-y: -18px; animation-delay: .08s; }
.vl-dot-signal-burst span:nth-child(3) { --vl-burst-x: 25px; --vl-burst-y: 0px; animation-delay: .16s; }
.vl-dot-signal-burst span:nth-child(4) { --vl-burst-x: 18px; --vl-burst-y: 18px; animation-delay: .24s; }
.vl-dot-signal-burst span:nth-child(5) { --vl-burst-x: 0px; --vl-burst-y: 25px; animation-delay: .32s; }
.vl-dot-signal-burst span:nth-child(6) { --vl-burst-x: -18px; --vl-burst-y: 18px; animation-delay: .4s; }
.vl-dot-signal-burst span:nth-child(7) { --vl-burst-x: -25px; --vl-burst-y: 0px; animation-delay: .48s; }
.vl-dot-signal-burst span:nth-child(8) { --vl-burst-x: -18px; --vl-burst-y: -18px; animation-delay: .56s; }
@keyframes vl-dot-signal-burst {
  0% { opacity: 0; transform: translate(0, 0) scale(.4); }
  35% { opacity: 1; }
  100% { opacity: 0; transform: translate(var(--vl-burst-x), var(--vl-burst-y)) scale(1); }
}`
  }
];
