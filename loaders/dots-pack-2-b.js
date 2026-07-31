export const dotsPack2LoadersB = [
  {
    id: 'dot-bouncing-bridge',
    name: 'Bouncing Bridge Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Seven dots bounce across an invisible bridge for queued actions and short background tasks.',
    markup: `<div class="vl-dot-bouncing-bridge" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-bouncing-bridge {
  width: 132px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.vl-dot-bouncing-bridge span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-bouncing-bridge calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-dot-bouncing-bridge span:nth-child(2) { animation-delay: .09s; }
.vl-dot-bouncing-bridge span:nth-child(3) { animation-delay: .18s; }
.vl-dot-bouncing-bridge span:nth-child(4) { animation-delay: .27s; }
.vl-dot-bouncing-bridge span:nth-child(5) { animation-delay: .36s; }
.vl-dot-bouncing-bridge span:nth-child(6) { animation-delay: .45s; }
.vl-dot-bouncing-bridge span:nth-child(7) { animation-delay: .54s; }
@keyframes vl-dot-bouncing-bridge {
  0%, 100% { transform: translateY(10px) scale(.72); opacity: .32; }
  50% { transform: translateY(-11px) scale(1.05); opacity: 1; }
}`
  },
  {
    id: 'dot-clockface',
    name: 'Clockface Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Eight dots pulse around a clockface for timed processing, refresh, and scheduled operations.',
    markup: `<div class="vl-dot-clockface" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-clockface {
  position: relative;
  width: 64px;
  height: 64px;
}
.vl-dot-clockface span {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-clockface calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-dot-clockface span:nth-child(1) { left: 28px; top: 1px; }
.vl-dot-clockface span:nth-child(2) { right: 8px; top: 8px; animation-delay: .1s; }
.vl-dot-clockface span:nth-child(3) { right: 1px; top: 28px; animation-delay: .2s; }
.vl-dot-clockface span:nth-child(4) { right: 8px; bottom: 8px; animation-delay: .3s; }
.vl-dot-clockface span:nth-child(5) { left: 28px; bottom: 1px; animation-delay: .4s; }
.vl-dot-clockface span:nth-child(6) { left: 8px; bottom: 8px; animation-delay: .5s; }
.vl-dot-clockface span:nth-child(7) { left: 1px; top: 28px; animation-delay: .6s; }
.vl-dot-clockface span:nth-child(8) { left: 8px; top: 8px; animation-delay: .7s; }
@keyframes vl-dot-clockface {
  0%, 100% { opacity: .18; transform: scale(.6); }
  45% { opacity: 1; transform: scale(1.3); }
}`
  },
  {
    id: 'dot-magnetic-pair',
    name: 'Magnetic Pair Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Two dots attract and repel around a center point for matching, syncing, and connection states.',
    markup: `<div class="vl-dot-magnetic-pair" aria-hidden="true"><span></span><i></i><span></span></div>`,
    css: `.vl-dot-magnetic-pair {
  width: 116px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.vl-dot-magnetic-pair span {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--loader-accent);
}
.vl-dot-magnetic-pair span:first-child {
  animation: vl-dot-magnetic-pair-left calc(var(--loader-speed) * 1.25) ease-in-out infinite alternate;
}
.vl-dot-magnetic-pair span:last-child {
  animation: vl-dot-magnetic-pair-right calc(var(--loader-speed) * 1.25) ease-in-out infinite alternate;
}
.vl-dot-magnetic-pair i {
  position: absolute;
  left: 53px;
  top: 13px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 22%, transparent);
}
@keyframes vl-dot-magnetic-pair-left {
  0% { transform: translateX(0) scale(.75); opacity: .35; }
  100% { transform: translateX(34px) scale(1.08); opacity: 1; }
}
@keyframes vl-dot-magnetic-pair-right {
  0% { transform: translateX(0) scale(.75); opacity: .35; }
  100% { transform: translateX(-34px) scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'dot-wave-grid',
    name: 'Wave Grid Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'A 4×3 dot grid forms a diagonal wave for data refresh, analytics, and content generation states.',
    markup: `<div class="vl-dot-wave-grid" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-wave-grid {
  display: grid;
  grid-template-columns: repeat(4, 8px);
  gap: 7px;
}
.vl-dot-wave-grid span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-wave-grid calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-dot-wave-grid span:nth-child(2),
.vl-dot-wave-grid span:nth-child(5) { animation-delay: .08s; }
.vl-dot-wave-grid span:nth-child(3),
.vl-dot-wave-grid span:nth-child(6),
.vl-dot-wave-grid span:nth-child(9) { animation-delay: .16s; }
.vl-dot-wave-grid span:nth-child(4),
.vl-dot-wave-grid span:nth-child(7),
.vl-dot-wave-grid span:nth-child(10) { animation-delay: .24s; }
.vl-dot-wave-grid span:nth-child(8),
.vl-dot-wave-grid span:nth-child(11) { animation-delay: .32s; }
.vl-dot-wave-grid span:nth-child(12) { animation-delay: .4s; }
@keyframes vl-dot-wave-grid {
  0%, 100% { opacity: .2; transform: translateY(4px) scale(.62); }
  50% { opacity: 1; transform: translateY(-5px) scale(1.08); }
}`
  },
  {
    id: 'dot-pixel-trail',
    name: 'Pixel Trail Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Square pixel-dots light up in sequence for compact technical, terminal, and data-transfer loaders.',
    markup: `<div class="vl-dot-pixel-trail" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-pixel-trail {
  width: 132px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.vl-dot-pixel-trail span {
  width: 9px;
  height: 9px;
  border-radius: 2px;
  background: var(--loader-accent);
  animation: vl-dot-pixel-trail calc(var(--loader-speed) * 1.15) steps(2, end) infinite;
}
.vl-dot-pixel-trail span:nth-child(2) { animation-delay: .08s; }
.vl-dot-pixel-trail span:nth-child(3) { animation-delay: .16s; }
.vl-dot-pixel-trail span:nth-child(4) { animation-delay: .24s; }
.vl-dot-pixel-trail span:nth-child(5) { animation-delay: .32s; }
.vl-dot-pixel-trail span:nth-child(6) { animation-delay: .4s; }
.vl-dot-pixel-trail span:nth-child(7) { animation-delay: .48s; }
.vl-dot-pixel-trail span:nth-child(8) { animation-delay: .56s; }
@keyframes vl-dot-pixel-trail {
  0%, 70%, 100% { opacity: .16; transform: scale(.62); }
  35% { opacity: 1; transform: scale(1.22); }
}`
  }
];
