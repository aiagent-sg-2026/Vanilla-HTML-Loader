export const barsPack3LoadersA = [
  {
    id: 'bar-wave-rail',
    name: 'Wave Rail Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'Three slim rails pass a synchronized highlight for network, queue, and background processing states.',
    markup: `<div class="vl-bar-wave-rail" aria-hidden="true"><span></span><span></span><span></span></div>`,
    css: `.vl-bar-wave-rail {
  width: 150px;
  display: grid;
  gap: 6px;
}
.vl-bar-wave-rail span {
  position: relative;
  height: 5px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 16%, transparent);
}
.vl-bar-wave-rail span::after {
  content: '';
  position: absolute;
  inset: 0 auto 0 -35%;
  width: 34%;
  border-radius: inherit;
  background: var(--loader-accent);
  animation: vl-bar-wave-rail calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
.vl-bar-wave-rail span:nth-child(2)::after { animation-delay: .14s; }
.vl-bar-wave-rail span:nth-child(3)::after { animation-delay: .28s; }
@keyframes vl-bar-wave-rail {
  0% { transform: translateX(0) scaleX(.55); opacity: .25; }
  50% { transform: translateX(250%) scaleX(1.2); opacity: 1; }
  100% { transform: translateX(420%) scaleX(.55); opacity: .25; }
}`
  },
  {
    id: 'bar-pulse-columns',
    name: 'Pulse Columns',
    category: 'Bars',
    tech: 'CSS',
    description: 'A compact bank of columns pulses from the center outward for analytics and data-processing feedback.',
    markup: `<div class="vl-bar-pulse-columns" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-bar-pulse-columns {
  height: 50px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.vl-bar-pulse-columns span {
  width: 6px;
  height: 14px;
  border-radius: 5px;
  background: var(--loader-accent);
  animation: vl-bar-pulse-columns calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-bar-pulse-columns span:nth-child(1),
.vl-bar-pulse-columns span:nth-child(7) { animation-delay: .3s; }
.vl-bar-pulse-columns span:nth-child(2),
.vl-bar-pulse-columns span:nth-child(6) { animation-delay: .2s; }
.vl-bar-pulse-columns span:nth-child(3),
.vl-bar-pulse-columns span:nth-child(5) { animation-delay: .1s; }
@keyframes vl-bar-pulse-columns {
  0%, 100% { height: 12px; opacity: .28; }
  50% { height: 44px; opacity: 1; }
}`
  },
  {
    id: 'bar-metro-track',
    name: 'Metro Track Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'A moving carriage travels through evenly spaced stations for multi-stage loading and workflow navigation.',
    markup: `<div class="vl-bar-metro-track" aria-hidden="true"><i></i><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-bar-metro-track {
  position: relative;
  width: 160px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.vl-bar-metro-track::before {
  content: '';
  position: absolute;
  left: 7px;
  right: 7px;
  top: 50%;
  height: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 18%, transparent);
  transform: translateY(-50%);
}
.vl-bar-metro-track span {
  position: relative;
  z-index: 1;
  width: 9px;
  height: 9px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 48%, #fff);
  border-radius: 50%;
  background: #fff;
}
.vl-bar-metro-track i {
  position: absolute;
  z-index: 2;
  left: 0;
  top: 50%;
  width: 28px;
  height: 10px;
  border-radius: 5px;
  background: var(--loader-accent);
  transform: translateY(-50%);
  animation: vl-bar-metro-track calc(var(--loader-speed) * 1.75) ease-in-out infinite;
}
@keyframes vl-bar-metro-track {
  0%, 100% { left: 0; }
  50% { left: calc(100% - 28px); }
}`
  },
  {
    id: 'bar-loading-marquee',
    name: 'Loading Marquee Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'Diagonal blocks slide continuously across a clipped rail for transfer, upload, and synchronization states.',
    markup: `<div class="vl-bar-loading-marquee" aria-hidden="true"><span></span></div>`,
    css: `.vl-bar-loading-marquee {
  width: 156px;
  height: 12px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 14%, transparent);
}
.vl-bar-loading-marquee span {
  display: block;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    115deg,
    transparent 0 8px,
    var(--loader-accent) 8px 17px,
    transparent 17px 25px
  );
  background-position: 0 0;
  animation: vl-bar-loading-marquee calc(var(--loader-speed) * 1.2) linear infinite;
}
@keyframes vl-bar-loading-marquee {
  to { background-position: -50px 0; }
}`
  },
  {
    id: 'bar-bitstream',
    name: 'Bitstream Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'Small digital packets stream along a rail for API, telemetry, and data-ingestion loading states.',
    markup: `<div class="vl-bar-bitstream" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-bar-bitstream {
  width: 158px;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 7px;
  overflow: hidden;
}
.vl-bar-bitstream span {
  flex: 0 0 auto;
  width: 16px;
  height: 7px;
  border-radius: 3px;
  background: var(--loader-accent);
  animation: vl-bar-bitstream calc(var(--loader-speed) * 1.35) linear infinite;
}
.vl-bar-bitstream span:nth-child(2) { width: 7px; animation-delay: -.18s; }
.vl-bar-bitstream span:nth-child(3) { width: 22px; animation-delay: -.36s; }
.vl-bar-bitstream span:nth-child(4) { width: 10px; animation-delay: -.54s; }
.vl-bar-bitstream span:nth-child(5) { width: 18px; animation-delay: -.72s; }
.vl-bar-bitstream span:nth-child(6) { width: 8px; animation-delay: -.9s; }
@keyframes vl-bar-bitstream {
  0% { transform: translateX(-190px); opacity: .2; }
  25%, 75% { opacity: 1; }
  100% { transform: translateX(190px); opacity: .2; }
}`
  }
];
