export const shapesPack3LoadersB = [
  {
    id: 'shape-arc-gate',
    name: 'Arc Gate',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Two opposing arc gates rotate and open around a pulsing center for secure transition states.',
    markup: `<div class="vl-shape-arc-gate" aria-hidden="true"><span></span><span></span><i></i></div>`,
    css: `.vl-shape-arc-gate {
  position: relative;
  width: 72px;
  height: 72px;
}
.vl-shape-arc-gate span {
  position: absolute;
  inset: 5px;
  border: 7px solid transparent;
  border-radius: 50%;
  animation: vl-shape-arc-gate-spin calc(var(--loader-speed) * 1.55) ease-in-out infinite;
}
.vl-shape-arc-gate span:first-child {
  border-top-color: var(--loader-accent);
  border-left-color: var(--loader-accent);
}
.vl-shape-arc-gate span:nth-child(2) {
  border-right-color: color-mix(in srgb, var(--loader-accent) 66%, white);
  border-bottom-color: color-mix(in srgb, var(--loader-accent) 66%, white);
  animation-direction: reverse;
  animation-delay: -.28s;
}
.vl-shape-arc-gate i {
  position: absolute;
  left: 28px;
  top: 28px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 7px color-mix(in srgb, var(--loader-accent) 13%, transparent);
  animation: vl-shape-arc-gate-core calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
@keyframes vl-shape-arc-gate-spin {
  0%, 100% { transform: rotate(0deg) scale(.86); opacity: .45; }
  50% { transform: rotate(180deg) scale(1.03); opacity: 1; }
}
@keyframes vl-shape-arc-gate-core {
  0%, 100% { transform: scale(.58); opacity: .35; }
  50% { transform: scale(1.12); opacity: 1; }
}`
  },
  {
    id: 'shape-bowtie-pulse',
    name: 'Bowtie Pulse',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Three bowtie shapes compress and expand in sequence for compact staged loading feedback.',
    markup: `<div class="vl-shape-bowtie-pulse" aria-hidden="true"><span></span><span></span><span></span></div>`,
    css: `.vl-shape-bowtie-pulse {
  position: relative;
  width: 94px;
  height: 48px;
}
.vl-shape-bowtie-pulse span {
  position: absolute;
  top: 9px;
  width: 26px;
  height: 30px;
  background: var(--loader-accent);
  clip-path: polygon(0 0, 50% 38%, 100% 0, 100% 100%, 50% 62%, 0 100%);
  animation: vl-shape-bowtie-pulse-fold calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-shape-bowtie-pulse span:nth-child(1) { left: 2px; }
.vl-shape-bowtie-pulse span:nth-child(2) { left: 34px; animation-delay: .15s; }
.vl-shape-bowtie-pulse span:nth-child(3) { left: 66px; animation-delay: .3s; }
@keyframes vl-shape-bowtie-pulse-fold {
  0%, 100% { transform: scaleX(.55) rotate(0deg); opacity: .25; }
  50% { transform: scaleX(1.05) rotate(180deg); opacity: 1; }
}`
  },
  {
    id: 'shape-pinwheel-tiles',
    name: 'Pinwheel Tiles',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Four triangular tiles form a rotating pinwheel with alternating depth and emphasis.',
    markup: `<div class="vl-shape-pinwheel-tiles" aria-hidden="true"><span></span><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-shape-pinwheel-tiles {
  position: relative;
  width: 72px;
  height: 72px;
  animation: vl-shape-pinwheel-tiles-spin calc(var(--loader-speed) * 1.75) linear infinite;
}
.vl-shape-pinwheel-tiles span {
  position: absolute;
  left: 27px;
  top: 3px;
  width: 18px;
  height: 31px;
  background: var(--loader-accent);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 46% 72%);
  transform-origin: 9px 33px;
  animation: vl-shape-pinwheel-tiles-blade calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-shape-pinwheel-tiles span:nth-child(1) { --angle: 0deg; }
.vl-shape-pinwheel-tiles span:nth-child(2) { --angle: 90deg; animation-delay: .12s; }
.vl-shape-pinwheel-tiles span:nth-child(3) { --angle: 180deg; animation-delay: .24s; }
.vl-shape-pinwheel-tiles span:nth-child(4) { --angle: 270deg; animation-delay: .36s; }
.vl-shape-pinwheel-tiles i {
  position: absolute;
  left: 28px;
  top: 28px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--surface, #fff);
  box-shadow: inset 0 0 0 3px color-mix(in srgb, var(--loader-accent) 48%, transparent);
}
@keyframes vl-shape-pinwheel-tiles-spin { to { transform: rotate(360deg); } }
@keyframes vl-shape-pinwheel-tiles-blade {
  0%, 100% { transform: rotate(var(--angle)) scaleY(.62); opacity: .3; }
  50% { transform: rotate(var(--angle)) scaleY(1.04); opacity: 1; }
}`
  },
  {
    id: 'shape-brick-weave',
    name: 'Brick Weave',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Six rounded bricks weave between two rows to suggest assembly, caching, or structured processing.',
    markup: `<div class="vl-shape-brick-weave" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-shape-brick-weave {
  position: relative;
  width: 98px;
  height: 54px;
}
.vl-shape-brick-weave span {
  position: absolute;
  width: 25px;
  height: 14px;
  border-radius: 5px;
  background: var(--loader-accent);
  animation: vl-shape-brick-weave-shift calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-shape-brick-weave span:nth-child(1) { left: 10px; top: 8px; --tx: 6px; }
.vl-shape-brick-weave span:nth-child(2) { left: 36px; top: 8px; --tx: -6px; animation-delay: .1s; }
.vl-shape-brick-weave span:nth-child(3) { left: 62px; top: 8px; --tx: 6px; animation-delay: .2s; }
.vl-shape-brick-weave span:nth-child(4) { left: 10px; top: 32px; --tx: -6px; animation-delay: .3s; }
.vl-shape-brick-weave span:nth-child(5) { left: 36px; top: 32px; --tx: 6px; animation-delay: .4s; }
.vl-shape-brick-weave span:nth-child(6) { left: 62px; top: 32px; --tx: -6px; animation-delay: .5s; }
@keyframes vl-shape-brick-weave-shift {
  0%, 100% { transform: translateX(0) scale(.74); opacity: .24; }
  50% { transform: translateX(var(--tx)) scale(1.03); opacity: 1; }
}`
  },
  {
    id: 'shape-infinity-loop',
    name: 'Infinity Loop',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Twin outlined loops exchange a bright square node in a continuous figure-eight cycle.',
    markup: `<div class="vl-shape-infinity-loop" aria-hidden="true"><span></span><span></span><i></i></div>`,
    css: `.vl-shape-infinity-loop {
  position: relative;
  width: 96px;
  height: 54px;
}
.vl-shape-infinity-loop span {
  position: absolute;
  top: 8px;
  width: 38px;
  height: 38px;
  border: 4px solid color-mix(in srgb, var(--loader-accent) 38%, transparent);
  border-radius: 50%;
}
.vl-shape-infinity-loop span:first-child { left: 10px; }
.vl-shape-infinity-loop span:nth-child(2) { right: 10px; }
.vl-shape-infinity-loop i {
  position: absolute;
  left: 13px;
  top: 20px;
  width: 14px;
  height: 14px;
  border-radius: 3px;
  background: var(--loader-accent);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--loader-accent) 13%, transparent);
  animation: vl-shape-infinity-loop-travel calc(var(--loader-speed) * 1.65) ease-in-out infinite;
}
@keyframes vl-shape-infinity-loop-travel {
  0% { transform: translate(0, 0) rotate(0deg) scale(.72); opacity: .4; }
  25% { transform: translate(22px, -10px) rotate(90deg) scale(1.05); opacity: 1; }
  50% { transform: translate(45px, 0) rotate(180deg) scale(.72); opacity: .5; }
  75% { transform: translate(67px, 10px) rotate(270deg) scale(1.05); opacity: 1; }
  100% { transform: translate(0, 0) rotate(360deg) scale(.72); opacity: .4; }
}`
  }
];
