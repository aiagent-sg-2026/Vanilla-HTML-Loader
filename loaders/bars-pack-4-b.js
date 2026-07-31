export const barsPack4LoadersB = [
  {
    id: 'bar-block-meter',
    name: 'Block Meter Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'A ten-block meter for resource checks, upload preparation, and bounded processing feedback.',
    markup: `<div class="vl-bar-block-meter" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-bar-block-meter {
  width: 148px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 3px;
}
.vl-bar-block-meter span {
  height: 12px;
  border-radius: 3px;
  background: var(--loader-accent);
  animation: vl-bar-block-meter calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-bar-block-meter span:nth-child(2) { animation-delay: .07s; }
.vl-bar-block-meter span:nth-child(3) { animation-delay: .14s; }
.vl-bar-block-meter span:nth-child(4) { animation-delay: .21s; }
.vl-bar-block-meter span:nth-child(5) { animation-delay: .28s; }
.vl-bar-block-meter span:nth-child(6) { animation-delay: .35s; }
.vl-bar-block-meter span:nth-child(7) { animation-delay: .42s; }
.vl-bar-block-meter span:nth-child(8) { animation-delay: .49s; }
.vl-bar-block-meter span:nth-child(9) { animation-delay: .56s; }
.vl-bar-block-meter span:nth-child(10) { animation-delay: .63s; }
@keyframes vl-bar-block-meter {
  0%, 70%, 100% { opacity: .18; transform: scaleY(.72); }
  35% { opacity: 1; transform: scaleY(1); }
}`
  },
  {
    id: 'bar-ribbon-chase',
    name: 'Ribbon Chase Bars',
    category: 'Bars',
    tech: 'CSS',
    description: 'Three layered ribbons chase through a compact rail for workflow and transaction loading.',
    markup: `<div class="vl-bar-ribbon-chase" aria-hidden="true"><span></span><span></span><span></span></div>`,
    css: `.vl-bar-ribbon-chase {
  width: 148px;
  display: grid;
  gap: 5px;
}
.vl-bar-ribbon-chase span {
  height: 5px;
  border-radius: 999px;
  background: linear-gradient(90deg,
    transparent 0 18%,
    var(--loader-accent) 38% 62%,
    transparent 82% 100%);
  background-size: 220% 100%;
  animation: vl-bar-ribbon-chase calc(var(--loader-speed) * 1.2) linear infinite;
}
.vl-bar-ribbon-chase span:nth-child(2) { animation-delay: -.25s; opacity: .72; }
.vl-bar-ribbon-chase span:nth-child(3) { animation-delay: -.5s; opacity: .45; }
@keyframes vl-bar-ribbon-chase {
  to { background-position: -220% 0; }
}`
  },
  {
    id: 'bar-sync-tracks',
    name: 'Sync Tracks Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'Three parallel tracks that synchronize in sequence for replication, caching, and data refresh states.',
    markup: `<div class="vl-bar-sync-tracks" aria-hidden="true"><span></span><span></span><span></span></div>`,
    css: `.vl-bar-sync-tracks {
  width: 148px;
  display: grid;
  gap: 7px;
}
.vl-bar-sync-tracks span {
  height: 6px;
  border-radius: 999px;
  background:
    repeating-linear-gradient(90deg,
      color-mix(in srgb, var(--loader-accent) 18%, transparent) 0 12px,
      var(--loader-accent) 12px 24px);
  background-size: 48px 100%;
  animation: vl-bar-sync-tracks calc(var(--loader-speed) * 1.25) linear infinite;
}
.vl-bar-sync-tracks span:nth-child(2) { animation-direction: reverse; opacity: .72; }
.vl-bar-sync-tracks span:nth-child(3) { animation-delay: -.35s; opacity: .5; }
@keyframes vl-bar-sync-tracks {
  to { background-position: 48px 0; }
}`
  },
  {
    id: 'bar-peak-hold',
    name: 'Peak Hold Bars',
    category: 'Bars',
    tech: 'CSS',
    description: 'Animated level bars with peak markers for audio, telemetry, and live performance feedback.',
    markup: `<div class="vl-bar-peak-hold" aria-hidden="true"><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span></div>`,
    css: `.vl-bar-peak-hold {
  height: 50px;
  display: flex;
  align-items: flex-end;
  gap: 6px;
}
.vl-bar-peak-hold > span {
  position: relative;
  width: 8px;
  height: 38px;
  display: flex;
  align-items: flex-end;
  border-radius: 4px 4px 2px 2px;
  background: color-mix(in srgb, var(--loader-accent) 14%, transparent);
  overflow: hidden;
}
.vl-bar-peak-hold > span::before {
  content: '';
  width: 100%;
  height: 45%;
  background: var(--loader-accent);
  animation: vl-bar-peak-hold-level calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-bar-peak-hold i {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 48%;
  height: 2px;
  background: var(--loader-accent);
  animation: vl-bar-peak-hold-cap calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-bar-peak-hold > span:nth-child(2)::before,
.vl-bar-peak-hold > span:nth-child(2) i { animation-delay: -.18s; }
.vl-bar-peak-hold > span:nth-child(3)::before,
.vl-bar-peak-hold > span:nth-child(3) i { animation-delay: -.36s; }
.vl-bar-peak-hold > span:nth-child(4)::before,
.vl-bar-peak-hold > span:nth-child(4) i { animation-delay: -.54s; }
.vl-bar-peak-hold > span:nth-child(5)::before,
.vl-bar-peak-hold > span:nth-child(5) i { animation-delay: -.72s; }
.vl-bar-peak-hold > span:nth-child(6)::before,
.vl-bar-peak-hold > span:nth-child(6) i { animation-delay: -.9s; }
@keyframes vl-bar-peak-hold-level {
  0%, 100% { height: 28%; }
  50% { height: 88%; }
}
@keyframes vl-bar-peak-hold-cap {
  0%, 100% { bottom: 31%; }
  50% { bottom: 90%; }
}`
  },
  {
    id: 'bar-pixel-march',
    name: 'Pixel March Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'A marching row of square pixels for compact console, terminal, and data-processing loaders.',
    markup: `<div class="vl-bar-pixel-march" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-bar-pixel-march {
  width: 148px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 3px;
}
.vl-bar-pixel-march span {
  aspect-ratio: 1;
  border-radius: 2px;
  background: var(--loader-accent);
  animation: vl-bar-pixel-march calc(var(--loader-speed) * 1.05) steps(1) infinite;
}
.vl-bar-pixel-march span:nth-child(2) { animation-delay: .08s; }
.vl-bar-pixel-march span:nth-child(3) { animation-delay: .16s; }
.vl-bar-pixel-march span:nth-child(4) { animation-delay: .24s; }
.vl-bar-pixel-march span:nth-child(5) { animation-delay: .32s; }
.vl-bar-pixel-march span:nth-child(6) { animation-delay: .4s; }
.vl-bar-pixel-march span:nth-child(7) { animation-delay: .48s; }
.vl-bar-pixel-march span:nth-child(8) { animation-delay: .56s; }
.vl-bar-pixel-march span:nth-child(9) { animation-delay: .64s; }
.vl-bar-pixel-march span:nth-child(10) { animation-delay: .72s; }
.vl-bar-pixel-march span:nth-child(11) { animation-delay: .8s; }
.vl-bar-pixel-march span:nth-child(12) { animation-delay: .88s; }
@keyframes vl-bar-pixel-march {
  0%, 65%, 100% { opacity: .18; transform: translateY(0); }
  30% { opacity: 1; transform: translateY(-5px); }
}`
  }
];
