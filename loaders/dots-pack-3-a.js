export const dotsPack3LoadersA = [
  {
    id: 'dot-spiral-chase',
    name: 'Spiral Chase Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Eight dots form a tightening spiral that rotates and pulses for analysis, rendering, and sync states.',
    markup: `<div class="vl-dot-spiral-chase" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-spiral-chase {
  position: relative;
  width: 66px;
  height: 66px;
  animation: vl-dot-spiral-spin calc(var(--loader-speed) * 1.8) linear infinite;
}
.vl-dot-spiral-chase span {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-spiral-pulse calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-dot-spiral-chase span:nth-child(1) { left: 29px; top: 1px; }
.vl-dot-spiral-chase span:nth-child(2) { right: 8px; top: 9px; animation-delay: .08s; }
.vl-dot-spiral-chase span:nth-child(3) { right: 7px; top: 29px; animation-delay: .16s; }
.vl-dot-spiral-chase span:nth-child(4) { right: 17px; bottom: 9px; animation-delay: .24s; }
.vl-dot-spiral-chase span:nth-child(5) { left: 27px; bottom: 13px; animation-delay: .32s; }
.vl-dot-spiral-chase span:nth-child(6) { left: 15px; bottom: 23px; animation-delay: .4s; }
.vl-dot-spiral-chase span:nth-child(7) { left: 18px; top: 21px; animation-delay: .48s; }
.vl-dot-spiral-chase span:nth-child(8) { left: 29px; top: 28px; animation-delay: .56s; }
@keyframes vl-dot-spiral-spin { to { transform: rotate(360deg); } }
@keyframes vl-dot-spiral-pulse {
  0%, 100% { opacity: .2; transform: scale(.55); }
  50% { opacity: 1; transform: scale(1.2); }
}`
  },
  {
    id: 'dot-breathing-cluster',
    name: 'Breathing Cluster Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'A compact cluster expands and contracts like a single breathing unit for AI and background-processing states.',
    markup: `<div class="vl-dot-breathing-cluster" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-breathing-cluster {
  position: relative;
  width: 62px;
  height: 58px;
  animation: vl-dot-breathing-cluster calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
.vl-dot-breathing-cluster span {
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--loader-accent);
}
.vl-dot-breathing-cluster span:nth-child(1) { left: 25px; top: 1px; }
.vl-dot-breathing-cluster span:nth-child(2) { left: 7px; top: 14px; }
.vl-dot-breathing-cluster span:nth-child(3) { right: 7px; top: 14px; }
.vl-dot-breathing-cluster span:nth-child(4) { left: 25px; top: 23px; }
.vl-dot-breathing-cluster span:nth-child(5) { left: 7px; bottom: 3px; }
.vl-dot-breathing-cluster span:nth-child(6) { right: 7px; bottom: 3px; }
.vl-dot-breathing-cluster span:nth-child(7) { left: 25px; bottom: 1px; }
@keyframes vl-dot-breathing-cluster {
  0%, 100% { transform: scale(.72); opacity: .35; filter: saturate(.75); }
  50% { transform: scale(1.08); opacity: 1; filter: saturate(1.25); }
}`
  },
  {
    id: 'dot-corner-relay',
    name: 'Corner Relay Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Four corner dots hand off emphasis around a square for navigation, routing, and workflow transitions.',
    markup: `<div class="vl-dot-corner-relay" aria-hidden="true"><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-corner-relay {
  position: relative;
  width: 58px;
  height: 58px;
}
.vl-dot-corner-relay span {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-corner-relay calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-dot-corner-relay span:nth-child(1) { left: 2px; top: 2px; }
.vl-dot-corner-relay span:nth-child(2) { right: 2px; top: 2px; animation-delay: .18s; }
.vl-dot-corner-relay span:nth-child(3) { right: 2px; bottom: 2px; animation-delay: .36s; }
.vl-dot-corner-relay span:nth-child(4) { left: 2px; bottom: 2px; animation-delay: .54s; }
@keyframes vl-dot-corner-relay {
  0%, 100% { opacity: .18; transform: scale(.55); box-shadow: 0 0 0 0 transparent; }
  45% { opacity: 1; transform: scale(1.18); box-shadow: 0 0 0 5px color-mix(in srgb, var(--loader-accent) 12%, transparent); }
}`
  },
  {
    id: 'dot-orbit-ladder',
    name: 'Orbit Ladder Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Two dot columns weave inward and outward like a ladder for staged loading and comparison states.',
    markup: `<div class="vl-dot-orbit-ladder" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dot-orbit-ladder {
  width: 78px;
  display: grid;
  grid-template-columns: repeat(2, 10px);
  justify-content: space-between;
  row-gap: 6px;
}
.vl-dot-orbit-ladder span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-orbit-ladder-left calc(var(--loader-speed) * 1.25) ease-in-out infinite alternate;
}
.vl-dot-orbit-ladder span:nth-child(even) {
  animation-name: vl-dot-orbit-ladder-right;
}
.vl-dot-orbit-ladder span:nth-child(3), .vl-dot-orbit-ladder span:nth-child(4) { animation-delay: .1s; }
.vl-dot-orbit-ladder span:nth-child(5), .vl-dot-orbit-ladder span:nth-child(6) { animation-delay: .2s; }
.vl-dot-orbit-ladder span:nth-child(7), .vl-dot-orbit-ladder span:nth-child(8) { animation-delay: .3s; }
.vl-dot-orbit-ladder span:nth-child(9), .vl-dot-orbit-ladder span:nth-child(10) { animation-delay: .4s; }
@keyframes vl-dot-orbit-ladder-left {
  0% { transform: translateX(0) scale(.72); opacity: .3; }
  100% { transform: translateX(22px) scale(1.05); opacity: 1; }
}
@keyframes vl-dot-orbit-ladder-right {
  0% { transform: translateX(0) scale(.72); opacity: .3; }
  100% { transform: translateX(-22px) scale(1.05); opacity: 1; }
}`
  },
  {
    id: 'dot-twin-ripple',
    name: 'Twin Ripple Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Two offset dots emit alternating ripples for connection checks, paired tasks, and synchronization.',
    markup: `<div class="vl-dot-twin-ripple" aria-hidden="true"><span></span><span></span></div>`,
    css: `.vl-dot-twin-ripple {
  width: 76px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.vl-dot-twin-ripple span {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-dot-twin-ripple calc(var(--loader-speed) * 1.35) ease-out infinite;
}
.vl-dot-twin-ripple span:nth-child(2) { animation-delay: .45s; }
@keyframes vl-dot-twin-ripple {
  0% { opacity: 1; transform: scale(.72); box-shadow: 0 0 0 0 color-mix(in srgb, var(--loader-accent) 36%, transparent); }
  70% { opacity: .55; transform: scale(1); box-shadow: 0 0 0 14px transparent; }
  100% { opacity: .25; transform: scale(.72); box-shadow: 0 0 0 14px transparent; }
}`
  }
];
