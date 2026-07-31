export const barsPack3LoadersB = [
  {
    id: 'bar-heartbeat',
    name: 'Heartbeat Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'A center pulse expands through a thin status rail for health checks, live services, and monitoring screens.',
    markup: `<div class="vl-bar-heartbeat" aria-hidden="true"><span></span><i></i></div>`,
    css: `.vl-bar-heartbeat {
  position: relative;
  width: 156px;
  height: 28px;
  display: grid;
  place-items: center;
}
.vl-bar-heartbeat::before {
  content: '';
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 18%, transparent);
}
.vl-bar-heartbeat span,
.vl-bar-heartbeat i {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 999px;
  background: var(--loader-accent);
  transform: translate(-50%, -50%);
}
.vl-bar-heartbeat span {
  width: 18px;
  height: 18px;
  animation: vl-bar-heartbeat-dot calc(var(--loader-speed) * 1.25) ease-out infinite;
}
.vl-bar-heartbeat i {
  width: 12px;
  height: 4px;
  animation: vl-bar-heartbeat-line calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
@keyframes vl-bar-heartbeat-dot {
  0%, 100% { transform: translate(-50%, -50%) scale(.45); opacity: .25; }
  40% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  70% { transform: translate(-50%, -50%) scale(1.7); opacity: 0; }
}
@keyframes vl-bar-heartbeat-line {
  0%, 100% { width: 10px; opacity: .25; }
  45% { width: 118px; opacity: 1; }
}`
  },
  {
    id: 'bar-crossfade',
    name: 'Crossfade Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'Two translucent fills trade places for media processing, theme changes, and transition loading states.',
    markup: `<div class="vl-bar-crossfade" aria-hidden="true"><span></span><i></i></div>`,
    css: `.vl-bar-crossfade {
  position: relative;
  width: 156px;
  height: 10px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 12%, transparent);
}
.vl-bar-crossfade span,
.vl-bar-crossfade i {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--loader-accent);
}
.vl-bar-crossfade span {
  transform-origin: left;
  animation: vl-bar-crossfade-left calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
.vl-bar-crossfade i {
  transform-origin: right;
  opacity: .45;
  animation: vl-bar-crossfade-right calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
@keyframes vl-bar-crossfade-left {
  0%, 100% { transform: scaleX(.12); opacity: .25; }
  50% { transform: scaleX(1); opacity: 1; }
}
@keyframes vl-bar-crossfade-right {
  0%, 100% { transform: scaleX(1); opacity: .65; }
  50% { transform: scaleX(.12); opacity: .15; }
}`
  },
  {
    id: 'bar-folding-segments',
    name: 'Folding Segments',
    category: 'Bars',
    tech: 'CSS',
    description: 'A row of slim panels folds in sequence for staged workflows, imports, and document preparation.',
    markup: `<div class="vl-bar-folding-segments" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-bar-folding-segments {
  height: 36px;
  display: flex;
  align-items: center;
  gap: 5px;
  perspective: 120px;
}
.vl-bar-folding-segments span {
  width: 18px;
  height: 10px;
  border-radius: 3px;
  background: var(--loader-accent);
  transform-origin: center;
  animation: vl-bar-folding-segments calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-bar-folding-segments span:nth-child(2) { animation-delay: .1s; }
.vl-bar-folding-segments span:nth-child(3) { animation-delay: .2s; }
.vl-bar-folding-segments span:nth-child(4) { animation-delay: .3s; }
.vl-bar-folding-segments span:nth-child(5) { animation-delay: .4s; }
.vl-bar-folding-segments span:nth-child(6) { animation-delay: .5s; }
@keyframes vl-bar-folding-segments {
  0%, 100% { transform: rotateX(0deg) scaleY(.65); opacity: .3; }
  50% { transform: rotateX(180deg) scaleY(1.35); opacity: 1; }
}`
  },
  {
    id: 'bar-traffic-lanes',
    name: 'Traffic Lanes Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'Three lanes carry packets in alternating directions for concurrent requests and multi-source loading.',
    markup: `<div class="vl-bar-traffic-lanes" aria-hidden="true"><span></span><span></span><span></span></div>`,
    css: `.vl-bar-traffic-lanes {
  width: 158px;
  display: grid;
  gap: 6px;
}
.vl-bar-traffic-lanes span {
  position: relative;
  height: 5px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 14%, transparent);
}
.vl-bar-traffic-lanes span::after {
  content: '';
  position: absolute;
  top: 0;
  left: -28%;
  width: 28%;
  height: 100%;
  border-radius: inherit;
  background: var(--loader-accent);
  animation: vl-bar-traffic-lanes-forward calc(var(--loader-speed) * 1.2) linear infinite;
}
.vl-bar-traffic-lanes span:nth-child(2)::after {
  left: auto;
  right: -28%;
  animation-name: vl-bar-traffic-lanes-reverse;
  animation-delay: -.35s;
}
.vl-bar-traffic-lanes span:nth-child(3)::after { animation-delay: -.7s; }
@keyframes vl-bar-traffic-lanes-forward {
  to { transform: translateX(460%); }
}
@keyframes vl-bar-traffic-lanes-reverse {
  to { transform: translateX(-460%); }
}`
  },
  {
    id: 'bar-spectrum-trail',
    name: 'Spectrum Trail Bars',
    category: 'Bars',
    tech: 'CSS',
    description: 'A bright equalizer peak travels across fading columns for streaming, rendering, and signal processing.',
    markup: `<div class="vl-bar-spectrum-trail" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-bar-spectrum-trail {
  height: 48px;
  display: flex;
  align-items: flex-end;
  gap: 4px;
}
.vl-bar-spectrum-trail span {
  width: 7px;
  height: 14px;
  border-radius: 5px 5px 2px 2px;
  background: var(--loader-accent);
  animation: vl-bar-spectrum-trail calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-bar-spectrum-trail span:nth-child(2) { animation-delay: .09s; }
.vl-bar-spectrum-trail span:nth-child(3) { animation-delay: .18s; }
.vl-bar-spectrum-trail span:nth-child(4) { animation-delay: .27s; }
.vl-bar-spectrum-trail span:nth-child(5) { animation-delay: .36s; }
.vl-bar-spectrum-trail span:nth-child(6) { animation-delay: .45s; }
.vl-bar-spectrum-trail span:nth-child(7) { animation-delay: .54s; }
.vl-bar-spectrum-trail span:nth-child(8) { animation-delay: .63s; }
@keyframes vl-bar-spectrum-trail {
  0%, 100% { height: 10px; opacity: .18; }
  45% { height: 42px; opacity: 1; }
  70% { height: 22px; opacity: .5; }
}`
  }
];
