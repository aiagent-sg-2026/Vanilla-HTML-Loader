export const categoryExpansionLoaders = [
  {
    id: 'spinner-union-orbit',
    name: 'Union Orbit Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A rotating ring of nodes expands and collapses through layered motion arcs.',
    markup: `<div class="vl-cat-spin-union-orbit" role="img" aria-label="Union orbit spinner">
  <span style="--i:0"></span>
  <span style="--i:1"></span>
  <span style="--i:2"></span>
  <span style="--i:3"></span>
  <span style="--i:4"></span>
  <span style="--i:5"></span>
</div>`,
    css: `.vl-cat-spin-union-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 27%, #1f5f89);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 26%, transparent), transparent 46%), linear-gradient(160deg, #061928, #0b2b45 60%, #040a14);
}
.vl-cat-spin-union-orbit span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 44px;
  height: 44px;
  margin: -22px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 56%, transparent);
  transform: rotate(calc(var(--i) * 52deg)) scale(.55);
  animation: vl-cat-spin-union-orbit-rings calc(var(--loader-speed) * 1.32) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.11s);
}
.vl-cat-spin-union-orbit span:nth-child(odd) {
  border-style: dashed;
  transform: rotate(calc(var(--i) * 52deg)) scale(.78);
}
@keyframes vl-cat-spin-union-orbit-rings {
  0%, 100% { transform: rotate(0deg) scale(.55); opacity: .22; }
  48% { transform: rotate(180deg) scale(1); opacity: 1; }
  100% { transform: rotate(360deg) scale(.72); }
}`
  },
  {
    id: 'dot-radar-beacon',
    name: 'Radar Beacon Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Dot clusters pulse in a circular radar rhythm with phase offsets.',
    markup: `<div class="vl-cat-dot-radar-beacon" role="img" aria-label="Radar beacon dots">
  <span style="--i:0"></span>
  <span style="--i:1"></span>
  <span style="--i:2"></span>
  <span style="--i:3"></span>
  <span style="--i:4"></span>
  <span style="--i:5"></span>
  <span style="--i:6"></span>
  <span style="--i:7"></span>
</div>`,
    css: `.vl-cat-dot-radar-beacon {
  width: 190px;
  height: 108px;
  position: relative;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1f5b8a);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 20%, transparent), transparent 48%), linear-gradient(180deg, #061a2c, #0b2740 61%, #040a13);
}
.vl-cat-dot-radar-beacon::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70px;
  height: 70px;
  margin: -35px;
  border-radius: 50%;
  border: 1px dashed color-mix(in srgb, var(--loader-accent) 44%, transparent);
  opacity: .4;
}
.vl-cat-dot-radar-beacon span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, white 10%);
  transform: rotate(calc(var(--i) * 45deg)) translateX(28px);
  animation: vl-cat-dot-radar-beacon-pulse calc(var(--loader-speed) * 1.05) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.12s);
}
@keyframes vl-cat-dot-radar-beacon-pulse {
  0%, 100% { transform: rotate(calc(var(--i) * 45deg)) translateX(28px) scale(0.56); opacity: .2; }
  50% { transform: rotate(calc(var(--i) * 45deg)) translateX(28px) scale(1); opacity: 1; }
}`
  },
  {
    id: 'bar-lane-bridge',
    name: 'Lane Bridge Bars',
    category: 'Bars',
    tech: 'CSS',
    description: 'Parallel bars bridge and release across two synchronized lanes.',
    markup: `<div class="vl-cat-bar-lane-bridge" role="img" aria-label="Lane bridge bars">
  <span style="--i:0"></span>
  <span style="--i:1"></span>
  <span style="--i:2"></span>
  <span style="--i:3"></span>
</div>`,
    css: `.vl-cat-bar-lane-bridge {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #1f5c87);
  border-radius: 14px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  align-items: end;
  padding: 14px;
  background: linear-gradient(180deg, #061b2f, #0b2c45 70%, #040a14);
}
.vl-cat-bar-lane-bridge span {
  display: block;
  width: 20px;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 20%, transparent), var(--loader-accent));
  animation: vl-cat-bar-lane-bridge-wave calc(var(--loader-speed) * 1.2) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.12s);
}
.vl-cat-bar-lane-bridge span:nth-child(odd) {
  transform-origin: bottom;
  animation-name: vl-cat-bar-lane-bridge-wave2;
}
@keyframes vl-cat-bar-lane-bridge-wave {
  0%, 100% { transform: scaleY(.2); }
  50% { transform: scaleY(1); }
}
@keyframes vl-cat-bar-lane-bridge-wave2 {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(.24); }
}`
  },
  {
    id: 'shape-orbit-node',
    name: 'Orbit Node Shape',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Concentric shape nodes orbit on opposing tracks for a structured geometric loop.',
    markup: `<div class="vl-cat-shape-orbit-node" role="img" aria-label="Orbit node shape">
  <span class="a" style="--i:0"></span>
  <span class="a" style="--i:1"></span>
  <span class="b"></span>
  <span class="b" style="--i:1"></span>
  <span class="c"></span>
</div>`,
    css: `.vl-cat-shape-orbit-node {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 29%, #1f5d89);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 55%, color-mix(in srgb, var(--loader-accent) 16%, transparent), transparent 46%), linear-gradient(152deg, #071d35, #102b42 58%, #040a14);
}
.vl-cat-shape-orbit-node span {
  position: absolute;
  left: 50%;
  top: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 75%, transparent);
  border-radius: 50%;
}
.vl-cat-shape-orbit-node .a { width: 52px; height: 52px; margin: -26px; animation: vl-cat-shape-orbit-a calc(var(--loader-speed) * 1.45) linear infinite; }
.vl-cat-shape-orbit-node .a:nth-child(2) { animation-delay: .22s; }
.vl-cat-shape-orbit-node .b { width: 31px; height: 31px; margin: -15px; border-style: dashed; animation: vl-cat-shape-orbit-b calc(var(--loader-speed) * 1.45) linear infinite reverse; }
.vl-cat-shape-orbit-node .b:nth-child(4) { animation-delay: .22s; }
.vl-cat-shape-orbit-node .c { width: 16px; height: 16px; margin: -8px; left: 85px; top: 28px; border-radius: 2px; animation: vl-cat-shape-orbit-c calc(var(--loader-speed) * 1.45) linear infinite; }
@keyframes vl-cat-shape-orbit-a {
  0% { transform: rotate(0deg) translateX(30px); opacity: .2; }
  50% { opacity: 1; transform: rotate(180deg) translateX(17px); }
  100% { transform: rotate(360deg) translateX(30px); opacity: .2; }
}
@keyframes vl-cat-shape-orbit-b { 0% { transform: rotate(0deg) translateX(34px); opacity: .32; } 50% { opacity: 1; transform: rotate(-180deg) translateX(16px); } 100% { transform: rotate(-360deg) translateX(34px); opacity: .32; } }
@keyframes vl-cat-shape-orbit-c { 0%, 100% { transform: translateX(0); opacity: .24; } 50% { transform: translateX(40px); opacity: 1; } }`
  },
  {
    id: 'button-task-pulse',
    name: 'Task Pulse Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A compact control pulse travels through a button-shaped container.',
    markup: `<div class="vl-cat-button-task-pulse" role="img" aria-label="Task pulse button">
  <span class="frame"></span>
  <span class="dot" style="--i:0"></span>
  <span class="dot" style="--i:1"></span>
  <span class="dot" style="--i:2"></span>
</div>`,
    css: `.vl-cat-button-task-pulse {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5c88);
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #071a2d, #0b2a44 66%, #040a14);
}
.vl-cat-button-task-pulse .frame {
  width: 130px;
  height: 34px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 45%, transparent);
  border-radius: 11px;
}
.vl-cat-button-task-pulse .dot {
  position: absolute;
  top: 48px;
  left: 30px;
  width: 12px;
  height: 12px;
  margin-top: -6px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 44%, transparent);
  transform: translateX(calc(var(--i) * 36px));
  animation: vl-cat-button-task-pulse-wave calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-cat-button-task-pulse .dot:nth-child(3) { animation-delay: -.14s; }
.vl-cat-button-task-pulse .dot:nth-child(4) { animation-delay: -.28s; }
@keyframes vl-cat-button-task-pulse-wave {
  0%, 100% { transform: translateX(calc(var(--i) * 36px)) scale(.6); opacity: .24; }
  50% { transform: translateX(calc(var(--i) * 36px)) scale(1.1); opacity: 1; }
}`
  },
  {
    id: 'text-ribbon-reader',
    name: 'Ribbon Reader Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A text label with a soft ribbon marker sweeping in a controlled loop.',
    markup: `<div class="vl-cat-text-ribbon-reader" role="img" aria-label="Ribbon reader text">
  <span class="title">LOADING</span>
  <span class="ribbon"></span>
</div>`,
    css: `.vl-cat-text-ribbon-reader {
  width: 190px;
  height: 108px;
  display: grid;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1e5d87);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #061a2d, #0a2b46 65%, #040a13);
  color: color-mix(in srgb, var(--loader-accent) 72%, white 16%);
  font: 900 13px/1.2 system-ui, sans-serif;
  letter-spacing: .12em;
}
.vl-cat-text-ribbon-reader .title { position: relative; z-index: 1; }
.vl-cat-text-ribbon-reader .ribbon {
  position: absolute;
  inset: 48px 0;
  height: 12px;
  background: linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 30%, transparent), var(--loader-accent), color-mix(in srgb, var(--loader-accent) 30%, transparent));
  animation: vl-cat-text-ribbon-reader-sweep calc(var(--loader-speed) * 1.5) linear infinite;
}
@keyframes vl-cat-text-ribbon-reader-sweep {
  0% { transform: translateX(-190px); opacity: .22; }
  50% { opacity: 1; }
  100% { transform: translateX(190px); opacity: .22; }
}`
  },
  {
    id: 'css3d-core-plate',
    name: '3D Core Plate',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'A compact 3D plate rotates between two axes while a core marker shifts focus.',
    markup: `<div class="vl-cat-css3d-core-plate" role="img" aria-label="3D core plate">
  <span></span>
  <span class="core"></span>
</div>`,
    css: `.vl-cat-css3d-core-plate {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1f5f89);
  border-radius: 14px;
  perspective: 600px;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: radial-gradient(circle at 50% 54%, color-mix(in srgb, var(--loader-accent) 12%, transparent), transparent 44%), linear-gradient(168deg, #071a2f, #0a2943 62%, #040a14);
}
.vl-cat-css3d-core-plate span:first-child {
  position: absolute;
  width: 74px;
  height: 74px;
  border-radius: 16px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 72%, transparent);
  transform-style: preserve-3d;
  animation: vl-cat-css3d-core-plate-plate calc(var(--loader-speed) * 1.45) linear infinite;
}
.vl-cat-css3d-core-plate .core {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 12px var(--loader-accent);
  animation: vl-cat-css3d-core-plate-core calc(var(--loader-speed) * 1.2) linear infinite;
}
@keyframes vl-cat-css3d-core-plate-plate { 0%, 100% { transform: rotateX(18deg) rotateZ(0deg); } 50% { transform: rotateX(54deg) rotateZ(180deg); } }
@keyframes vl-cat-css3d-core-plate-core { 0%, 100% { transform: translateZ(7px); opacity: .4; } 50% { transform: translateZ(18px); opacity: 1; } }`
  },
  {
    id: 'svg-wave-glyph',
    name: 'SVG Wave Glyph',
    category: 'SVG',
    tech: 'CSS',
    description: 'Abstract glyph bars undulate in a wave suitable for SVG-style motion systems.',
    markup: `<div class="vl-cat-svg-wave-glyph" role="img" aria-label="SVG wave glyph">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>`,
    css: `.vl-cat-svg-wave-glyph {
  width: 190px;
  height: 108px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(6, 14px);
  gap: 6px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1e6088);
  border-radius: 14px;
  background: linear-gradient(180deg, #071c33, #0b2b43 66%, #040a13);
}
.vl-cat-svg-wave-glyph span {
  width: 14px;
  height: 34px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--loader-accent) 80%, white 12%);
  animation: vl-cat-svg-wave-glyph-pulse calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
.vl-cat-svg-wave-glyph span:nth-child(1) { animation-delay: .00s; }
.vl-cat-svg-wave-glyph span:nth-child(2) { animation-delay: .1s; }
.vl-cat-svg-wave-glyph span:nth-child(3) { animation-delay: .2s; }
.vl-cat-svg-wave-glyph span:nth-child(4) { animation-delay: .3s; }
.vl-cat-svg-wave-glyph span:nth-child(5) { animation-delay: .4s; }
.vl-cat-svg-wave-glyph span:nth-child(6) { animation-delay: .5s; }
@keyframes vl-cat-svg-wave-glyph-pulse { 0%, 100% { transform: scaleY(.3); opacity: .2; } 50% { transform: scaleY(1); opacity: 1; } }`
  },
  {
    id: 'progress-lane-sequence',
    name: 'Lane Sequence Progress',
    category: 'Progress',
    tech: 'CSS',
    description: 'Stepped lanes progress in sequence with a moving highlight indicator.',
    markup: `<div class="vl-cat-progress-lane-sequence" role="img" aria-label="Lane sequence progress">
  <span class="lane"></span>
  <span class="lane"></span>
  <span class="lane"></span>
  <span class="lane"></span>
</div>`,
    css: `.vl-cat-progress-lane-sequence {
  width: 190px;
  height: 108px;
  display: grid;
  gap: 9px;
  place-content: center;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1e6388);
  border-radius: 14px;
  padding: 15px 16px;
  background: linear-gradient(180deg, #071d33, #0b2c48 61%, #040a13);
}
.vl-cat-progress-lane-sequence .lane {
  display: block;
  width: 154px;
  height: 14px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 16%, #e8edf2);
  overflow: hidden;
  position: relative;
}
.vl-cat-progress-lane-sequence .lane::after {
  content: '';
  position: absolute;
  inset: 0;
  width: 38%;
  border-radius: inherit;
  background: var(--loader-accent);
  transform: translateX(-130px);
  animation: vl-cat-progress-lane-sequence-run calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-cat-progress-lane-sequence .lane:nth-child(2)::after { animation-delay: -.25s; }
.vl-cat-progress-lane-sequence .lane:nth-child(3)::after { animation-delay: -.5s; }
.vl-cat-progress-lane-sequence .lane:nth-child(4)::after { animation-delay: -.75s; }
@keyframes vl-cat-progress-lane-sequence-run { 0% { transform: translateX(-130px); } 50% { transform: translateX(130px); } 100% { transform: translateX(130px); } }`
  },
  {
    id: 'chart-lens-ribbon',
    name: 'Lens Ribbon Chart',
    category: 'Charts',
    tech: 'CSS',
    description: 'A slim ribbon sweeps across layered bars for a chart-like progress cue.',
    markup: `<div class="vl-cat-chart-lens-ribbon" role="img" aria-label="Lens ribbon chart">
  <span></span>
  <span></span>
  <span></span>
</div>`,
    css: `.vl-cat-chart-lens-ribbon {
  width: 190px;
  height: 108px;
  display: grid;
  gap: 8px;
  align-content: center;
  padding: 14px 18px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1f5e88);
  border-radius: 14px;
  background: linear-gradient(175deg, #071d33, #0a2942 60%, #040a13);
}
.vl-cat-chart-lens-ribbon span {
  display: block;
  height: 8px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 16%, #dbe4ed);
  animation: vl-cat-chart-lens-ribbon-move calc(var(--loader-speed) * 1.5) cubic-bezier(.36,.8,.2,1) infinite;
}
.vl-cat-chart-lens-ribbon span:nth-child(1) { width: 112px; }
.vl-cat-chart-lens-ribbon span:nth-child(2) { width: 148px; animation-delay: -.23s; }
.vl-cat-chart-lens-ribbon span:nth-child(3) { width: 90px; animation-delay: -.46s; }
@keyframes vl-cat-chart-lens-ribbon-move { 0%, 100% { width: 30px; opacity: .2; } 50% { width: var(--w, 120px); opacity: 1; } }`
  },
  {
    id: 'map-route-scan',
    name: 'Route Scan Map',
    category: 'Maps',
    tech: 'CSS',
    description: 'Map-like lanes scan and glow in short synchronized bursts.',
    markup: `<div class="vl-cat-map-route-scan" role="img" aria-label="Route scan map">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>`,
    css: `.vl-cat-map-route-scan {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5b8a);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(150deg, #061a2d, #0b2b44 62%, #040a13);
  display: grid;
  align-content: center;
  gap: 8px;
  padding: 13px;
}
.vl-cat-map-route-scan span {
  display: block;
  width: 100%;
  height: 10px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--loader-accent) 14%, #e8edf4);
  animation: vl-cat-map-route-scan-strip calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
.vl-cat-map-route-scan span:nth-child(odd) { animation-direction: reverse; }
.vl-cat-map-route-scan span:nth-child(2) { animation-delay: -.2s; }
.vl-cat-map-route-scan span:nth-child(3) { animation-delay: -.4s; }
.vl-cat-map-route-scan span:nth-child(4) { animation-delay: -.6s; }
@keyframes vl-cat-map-route-scan-strip { 0%, 100% { clip-path: inset(0 82% 0 0); opacity: .22; } 50% { clip-path: inset(0 0 0 20%); opacity: 1; } }`
  },
  {
    id: 'skeleton-horizon-wave',
    name: 'Horizon Wave Skeleton',
    category: 'Skeletons',
    tech: 'Vanilla CSS',
    description: 'A horizon-style skeleton with moving shimmer passes and layered placeholder rows.',
    markup: `<div class="vl-cat-skeleton-horizon-wave" role="img" aria-label="Horizon wave skeleton">
  <span class="row"></span>
  <span class="row short"></span>
  <span class="row"></span>
  <span class="row short"></span>
  <span class="row"></span>
</div>`,
    css: `.vl-cat-skeleton-horizon-wave {
  width: 190px;
  height: 108px;
  display: grid;
  gap: 8px;
  align-content: center;
  padding: 14px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #dbe4ee);
  border-radius: 14px;
  background: #fff;
}
.vl-cat-skeleton-horizon-wave .row {
  height: 11px;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  background: #e8edf5;
}
.vl-cat-skeleton-horizon-wave .row::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.88), transparent);
  animation: vl-cat-skeleton-horizon-wave-shine calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
.vl-cat-skeleton-horizon-wave .short { width: 70%; }
@keyframes vl-cat-skeleton-horizon-wave-shine { 100% { transform: translateX(110%); } }`
  },
  {
    id: 'operation-task-orbit',
    name: 'Task Orbit Operation',
    category: 'Operations',
    tech: 'CSS',
    description: 'Mini operation steps orbit around a central command ring for process visual feedback.',
    markup: `<div class="vl-cat-operation-task-orbit" role="img" aria-label="Task orbit operation">
  <span class="core"></span>
  <span style="--i:0"></span>
  <span style="--i:1"></span>
  <span style="--i:2"></span>
  <span style="--i:3"></span>
</div>`,
    css: `.vl-cat-operation-task-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1d5e87);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(162deg, #071d35, #0a2b44 62%, #040a13);
}
.vl-cat-operation-task-orbit .core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 14px;
  margin: -7px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 14px var(--loader-accent);
}
.vl-cat-operation-task-orbit span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, white 10%);
  transform: rotate(calc(var(--i) * 72deg)) translateX(30px);
  animation: vl-cat-operation-task-orbit-sweep calc(var(--loader-speed) * 1.3) linear infinite;
  animation-delay: calc(var(--i) * -0.2s);
}
@keyframes vl-cat-operation-task-orbit-sweep { 0%, 100% { transform: rotate(calc(var(--i) * 72deg)) translateX(30px) scale(.4); opacity: .3; } 50% { transform: rotate(calc(var(--i) * 72deg)) translateX(30px) scale(1); opacity: 1; } }`
  },
  {
    id: 'matrix-pulse-gateway',
    name: 'Pulse Gateway Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A compact matrix gateway pulses through stacked nodes and a central gate.',
    markup: `<div class="vl-cat-matrix-pulse-gateway" role="img" aria-label="Pulse gateway matrix">
  <span style="--i:0"></span>
  <span style="--i:1"></span>
  <span style="--i:2"></span>
  <span class="core"></span>
</div>`,
    css: `.vl-cat-matrix-pulse-gateway {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6088);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 18%, transparent), transparent 44%), linear-gradient(172deg, #071c34, #0b2b44 60%, #040a14);
}
.vl-cat-matrix-pulse-gateway span {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  left: 50%;
  top: 50%;
  margin: -5px;
  transform: rotate(calc(var(--i) * 90deg)) translateX(28px) rotate(calc(var(--i) * -90deg));
  animation: vl-cat-matrix-pulse-gateway-dot calc(var(--loader-speed) * 1.25) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.18s);
}
.vl-cat-matrix-pulse-gateway .core {
  left: 50%;
  top: 50%;
  margin: -6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 92%, white);
  animation: vl-cat-matrix-pulse-gateway-core calc(var(--loader-speed) * 1.1) linear infinite;
  position: absolute;
}
@keyframes vl-cat-matrix-pulse-gateway-dot { 0%, 100% { transform: rotate(calc(var(--i) * 90deg)) translateX(28px) scale(.5); opacity: .25; } 50% { transform: rotate(calc(var(--i) * 90deg + 180deg)) translateX(18px) scale(1); opacity: 1; } }
@keyframes vl-cat-matrix-pulse-gateway-core { 0%, 100% { transform: translate(-50%, -50%) scale(.82); opacity: .45; } 50% { transform: translate(-50%, -50%) scale(1.16); opacity: 1; } }`
  },
  {
    id: 'common-ui-shell-pulse',
    name: 'Common Shell Pulse',
    category: 'Common UI',
    tech: 'CSS',
    description: 'A shared-shell card with softly shifting border and pulse nodes for neutral UI status.',
    markup: `<div class="vl-cat-common-ui-shell-pulse" role="img" aria-label="Common shell pulse">
  <span class="shell"></span>
  <span class="node" style="--x:22px;--y:18px"></span>
  <span class="node" style="--x:132px;--y:34px"></span>
  <span class="node" style="--x:80px;--y:64px"></span>
</div>`,
    css: `.vl-cat-common-ui-shell-pulse {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1e5f89);
  border-radius: 14px;
  background: #fff;
  overflow: hidden;
}
.vl-cat-common-ui-shell-pulse .shell {
  position: absolute;
  inset: 10px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #d8e1ec);
  border-radius: 8px;
  animation: vl-cat-common-ui-shell-pulse-border calc(var(--loader-speed) * 1.3) linear infinite;
}
.vl-cat-common-ui-shell-pulse .node {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-common-ui-shell-pulse-node calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-cat-common-ui-shell-pulse .node:nth-child(3) { animation-delay: -.2s; }
.vl-cat-common-ui-shell-pulse .node:nth-child(4) { animation-delay: -.4s; }
@keyframes vl-cat-common-ui-shell-pulse-border { 0%, 100% { transform: scale(.88); } 50% { transform: scale(1); } }
@keyframes vl-cat-common-ui-shell-pulse-node { 0%, 100% { opacity: .2; transform: scale(.55); } 50% { opacity: 1; transform: scale(1.2); } }`
  },
  {
    id: 'application-sync-channel',
    name: 'Sync Channel Application',
    category: 'Application',
    tech: 'CSS',
    description: 'A small application shell shows data flowing through connected sync nodes.',
    markup: `<div class="vl-cat-application-sync-channel" role="img" aria-label="Sync channel application">
  <span class="top"></span>
  <span class="bottom"></span>
  <span class="node" style="--y:18px"></span>
  <span class="node" style="--y:44px"></span>
  <span class="node" style="--y:70px"></span>
</div>`,
    css: `.vl-cat-application-sync-channel {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1e5f8d);
  border-radius: 14px;
  background: #fff;
  overflow: hidden;
}
.vl-cat-application-sync-channel .top,
.vl-cat-application-sync-channel .bottom {
  position: absolute;
  left: 16px;
  right: 16px;
  height: 12px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 22%, #e9eef5);
}
.vl-cat-application-sync-channel .top { top: 22px; }
.vl-cat-application-sync-channel .bottom { top: 74px; }
.vl-cat-application-sync-channel .node {
  position: absolute;
  left: 30px;
  width: 10px;
  height: 10px;
  margin-top: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  top: var(--y);
  animation: vl-cat-application-sync-channel-node calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-cat-application-sync-channel .node:nth-child(3) { left: 70px; animation-delay: -.2s; }
.vl-cat-application-sync-channel .node:nth-child(4) { left: 110px; animation-delay: -.4s; }
.vl-cat-application-sync-channel .node:nth-child(5) { left: 150px; animation-delay: -.6s; }
@keyframes vl-cat-application-sync-channel-node { 0%, 100% { transform: translateY(20px); opacity: .22; } 50% { transform: translateY(-12px); opacity: 1; } }`
  },
  {
    id: 'holographic-orbit-rings',
    name: 'Holographic Orbit Rings',
    category: 'Holographic',
    tech: 'CSS',
    description: 'Semi-transparent rings orbit around a holographic center with layered depth.',
    markup: `<div class="vl-cat-holographic-orbit-rings" role="img" aria-label="Holographic orbit rings">
  <span class="a"></span>
  <span class="b"></span>
  <span class="c"></span>
  <span class="core"></span>
</div>`,
    css: `.vl-cat-holographic-orbit-rings {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1f608a);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 16%, transparent), transparent 45%), linear-gradient(165deg, #081f36, #0f304a 60%, #050c14);
  display: grid;
  place-items: center;
}
.vl-cat-holographic-orbit-rings .a,
.vl-cat-holographic-orbit-rings .b,
.vl-cat-holographic-orbit-rings .c {
  position: absolute;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, transparent);
  border-radius: 50%;
}
.vl-cat-holographic-orbit-rings .a { width: 42px; height: 42px; animation: vl-cat-holographic-orbit-rings-rotate calc(var(--loader-speed) * 1.8) linear infinite; }
.vl-cat-holographic-orbit-rings .b { width: 64px; height: 64px; border-style: dashed; animation: vl-cat-holographic-orbit-rings-rotate calc(var(--loader-speed) * 1.2) linear infinite reverse; }
.vl-cat-holographic-orbit-rings .c { width: 86px; height: 86px; animation: vl-cat-holographic-orbit-rings-rotate calc(var(--loader-speed) * 2) linear infinite; }
.vl-cat-holographic-orbit-rings .core {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 16px var(--loader-accent);
}
@keyframes vl-cat-holographic-orbit-rings-rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`
  }
];
