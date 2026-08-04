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
  },
  {
    id: 'spinner-arc-signal',
    name: 'Arc Signal Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A segmented arc ring rotates while an inner core alternates glow pulses.',
    markup: `<div class="vl-cat-spinner-arc-signal" role="img" aria-label="Arc signal spinner">
  <span class="ring"></span>
  <span class="core" style="--i:0"></span>
  <span class="core" style="--i:1"></span>
  <span class="core" style="--i:2"></span>
  <span class="core" style="--i:3"></span>
</div>`,
    css: `.vl-cat-spinner-arc-signal {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #215b87);
  border-radius: 14px;
  background: linear-gradient(188deg, #061d31, #0c2a45 62%, #040a14);
  display: grid;
  place-items: center;
}
.vl-cat-spinner-arc-signal .ring {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 4px solid color-mix(in srgb, var(--loader-accent) 46%, transparent);
  border-bottom-color: transparent;
  animation: vl-cat-spinner-arc-signal-ring calc(var(--loader-speed) * 1.2) linear infinite;
}
.vl-cat-spinner-arc-signal .core {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  left: 50%;
  top: 50%;
  margin: -6px;
  transform: rotate(calc(var(--i) * 90deg)) translateX(24px);
  animation: vl-cat-spinner-arc-signal-core calc(var(--loader-speed) * 1.1) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.2s);
}
.vl-cat-spinner-arc-signal .core:nth-child(3) { animation-delay: -0.15s; }
.vl-cat-spinner-arc-signal .core:nth-child(4) { animation-delay: -0.1s; }
.vl-cat-spinner-arc-signal .core:nth-child(5) { animation-delay: -0.05s; }
@keyframes vl-cat-spinner-arc-signal-ring { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes vl-cat-spinner-arc-signal-core {
  0%, 100% { opacity: .24; transform: rotate(calc(var(--i) * 90deg)) translateX(24px) scale(.6); }
  50% { opacity: 1; transform: rotate(calc(var(--i) * 90deg)) translateX(24px) scale(1.1); }
}`
  },
  {
    id: 'dot-constellation-burst',
    name: 'Constellation Burst Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Scattered dots burst outward in timed arcs, then recede in a mirrored loop.',
    markup: `<div class="vl-cat-dot-constellation-burst" role="img" aria-label="Constellation burst dots">
  <span style="--x:38px;--y:28px;--d:0"></span>
  <span style="--x:146px;--y:20px;--d:1"></span>
  <span style="--x:164px;--y:74px;--d:2"></span>
  <span style="--x:30px;--y:78px;--d:3"></span>
  <span style="--x:86px;--y:44px;--d:4"></span>
  <span style="--x:112px;--y:58px;--d:5"></span>
</div>`,
    css: `.vl-cat-dot-constellation-burst {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d5f8a);
  border-radius: 14px;
  background: linear-gradient(180deg, #061d31, #0c2b44 66%, #040a14);
}
.vl-cat-dot-constellation-burst span {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  left: var(--x);
  top: var(--y);
  margin: -4px;
  background: color-mix(in srgb, var(--loader-accent) 93%, #fff 7%);
  box-shadow: 0 0 8px var(--loader-accent);
  animation: vl-cat-dot-constellation-burst-pulse calc(var(--loader-speed) * 1.3) ease-in-out infinite;
  animation-delay: calc(var(--d) * -0.12s);
}
@keyframes vl-cat-dot-constellation-burst-pulse {
  0%, 100% { transform: scale(.35); opacity: .22; }
  50% { transform: scale(1.2); opacity: 1; }
}`
  },
  {
    id: 'bar-radiant-ribbon',
    name: 'Radiant Ribbon Bars',
    category: 'Bars',
    tech: 'CSS',
    description: 'Two ribbon bands traverse opposing directions with a glowing center beat.',
    markup: `<div class="vl-cat-bar-radiant-ribbon" role="img" aria-label="Radiant ribbon bars">
  <span class="row"></span>
  <span class="row rev"></span>
  <span class="row"></span>
</div>`,
    css: `.vl-cat-bar-radiant-ribbon {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #1c5f8c);
  border-radius: 14px;
  padding: 14px;
  display: grid;
  gap: 10px;
  align-content: center;
  background: linear-gradient(180deg, #061b2f, #0a2a43 64%, #040a14);
}
.vl-cat-bar-radiant-ribbon .row {
  position: relative;
  overflow: hidden;
  width: 156px;
  height: 12px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 18%, #dfe7ef);
}
.vl-cat-bar-radiant-ribbon .row::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 80%, white), transparent);
  animation: vl-cat-bar-radiant-ribbon-wave calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-cat-bar-radiant-ribbon .rev::after { animation-name: vl-cat-bar-radiant-ribbon-wave-rev; }
@keyframes vl-cat-bar-radiant-ribbon-wave { 0% { transform: translateX(-110%); opacity: .2; } 50% { transform: translateX(110%); opacity: 1; } 100% { transform: translateX(110%); opacity: .2; } }
@keyframes vl-cat-bar-radiant-ribbon-wave-rev { 0% { transform: translateX(110%); opacity: .2; } 50% { transform: translateX(-110%); opacity: 1; } 100% { transform: translateX(-110%); opacity: .2; } }`
  },
  {
    id: 'shape-kite-lattice',
    name: 'Kite Lattice Shape',
    category: 'Shapes',
    tech: 'CSS',
    description: 'A trio of shape layers rotates around a central axis with staggered depth.',
    markup: `<div class="vl-cat-shape-kite-lattice" role="img" aria-label="Kite lattice shape">
  <span class="layer one"></span>
  <span class="layer two"></span>
  <span class="layer three"></span>
  <span class="core"></span>
</div>`,
    css: `.vl-cat-shape-kite-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #1d5f8a);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 17%, transparent), transparent 47%), linear-gradient(150deg, #081f36, #0f2e4b 61%, #040a14);
}
.vl-cat-shape-kite-lattice .layer {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 44px;
  height: 44px;
  margin: -22px;
  transform-style: preserve-3d;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 66%, transparent);
}
.vl-cat-shape-kite-lattice .one { clip-path: polygon(50% 2%, 2% 94%, 98% 94%); animation: vl-cat-shape-kite-lattice-spin calc(var(--loader-speed) * 1.6) linear infinite; }
.vl-cat-shape-kite-lattice .two { width: 60px; height: 60px; margin: -30px; border-radius: 50%; transform: scale(.64); animation: vl-cat-shape-kite-lattice-spin2 calc(var(--loader-speed) * 1.2) linear infinite reverse; border-style: dashed; }
.vl-cat-shape-kite-lattice .three { width: 26px; height: 26px; margin: -13px; border-radius: 8px; animation: vl-cat-shape-kite-lattice-twitch calc(var(--loader-speed) * 1.3) ease-in-out infinite; }
.vl-cat-shape-kite-lattice .core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-shape-kite-lattice-core calc(var(--loader-speed) * 1.05) linear infinite;
}
@keyframes vl-cat-shape-kite-lattice-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes vl-cat-shape-kite-lattice-spin2 { 0% { transform: scale(.64) rotate(360deg); } 100% { transform: scale(.64) rotate(0deg); } }
@keyframes vl-cat-shape-kite-lattice-twitch { 0%, 100% { transform: scale(.6); opacity: .3; } 50% { transform: scale(1.1); opacity: 1; } }
@keyframes vl-cat-shape-kite-lattice-core { 0%, 100% { transform: scale(.4); opacity: .35; } 50% { transform: scale(1); opacity: 1; } }`
  },
  {
    id: 'button-grid-pulse',
    name: 'Grid Pulse Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A button shell lights adjacent nodes in a controlled pulse sequence.',
    markup: `<div class="vl-cat-button-grid-pulse" role="img" aria-label="Grid pulse button">
  <span class="surface"></span>
  <span class="node" style="--x:14px"></span>
  <span class="node" style="--x:42px"></span>
  <span class="node" style="--x:72px"></span>
  <span class="node" style="--x:100px"></span>
  <span class="node" style="--x:128px"></span>
  <span class="node" style="--x:156px"></span>
</div>`,
    css: `.vl-cat-button-grid-pulse {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1e5d89);
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #071b2f, #0a2c43 63%, #040a14);
}
.vl-cat-button-grid-pulse .surface {
  width: 130px;
  height: 34px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 44%, transparent);
  border-radius: 9px;
}
.vl-cat-button-grid-pulse .node {
  position: absolute;
  top: 50%;
  left: var(--x);
  width: 7px;
  height: 7px;
  margin-top: -3px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 95%, #fff);
  animation: vl-cat-button-grid-pulse-led calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-cat-button-grid-pulse .node:nth-child(2) { animation-delay: -.08s; }
.vl-cat-button-grid-pulse .node:nth-child(3) { animation-delay: -.16s; }
.vl-cat-button-grid-pulse .node:nth-child(4) { animation-delay: -.24s; }
.vl-cat-button-grid-pulse .node:nth-child(5) { animation-delay: -.32s; }
.vl-cat-button-grid-pulse .node:nth-child(6) { animation-delay: -.4s; }
.vl-cat-button-grid-pulse .node:nth-child(7) { animation-delay: -.48s; }
@keyframes vl-cat-button-grid-pulse-led { 0%, 100% { opacity: .2; transform: translateY(-50%) scale(.5); } 50% { opacity: 1; transform: translateY(-50%) scale(1.2); } }`
  },
  {
    id: 'text-holo-ticker',
    name: 'Holo Ticker Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A label ticker cycles through a luminous split-shadow reveal.',
    markup: `<div class="vl-cat-text-holo-ticker" role="img" aria-label="Holo ticker text">
  <span>PROCESSING</span>
  <span class="stripe"></span>
</div>`,
    css: `.vl-cat-text-holo-ticker {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #205f89);
  border-radius: 14px;
  background: linear-gradient(180deg, #061b31, #0a2a45 66%, #040a13);
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  color: color-mix(in srgb, var(--loader-accent) 80%, white 10%);
  font: 900 12px/1.2 system-ui, sans-serif;
  letter-spacing: .18em;
}
.vl-cat-text-holo-ticker span {
  position: relative;
  z-index: 1;
}
.vl-cat-text-holo-ticker .stripe {
  position: absolute;
  inset: 45px 0;
  height: 14px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 45%, transparent), transparent);
  animation: vl-cat-text-holo-ticker-run calc(var(--loader-speed) * 1.6) linear infinite;
}
@keyframes vl-cat-text-holo-ticker-run { 0% { transform: translateX(-190px); opacity: .25; } 50% { opacity: 1; } 100% { transform: translateX(190px); opacity: .25; } }`
  },
  {
    id: 'css3d-torus-twist',
    name: 'Torus Twist 3D',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'A torus-like ring twists in 3D against a second rotating phase.',
    markup: `<div class="vl-cat-css3d-torus-twist" role="img" aria-label="Torus twist 3D">
  <span></span>
  <span class="mesh"></span>
</div>`,
    css: `.vl-cat-css3d-torus-twist {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1f5f8b);
  border-radius: 14px;
  perspective: 700px;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: radial-gradient(circle at 50% 54%, color-mix(in srgb, var(--loader-accent) 14%, transparent), transparent 46%), linear-gradient(170deg, #081e35, #10314c 61%, #050c14);
}
.vl-cat-css3d-torus-twist span {
  position: absolute;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 72%, transparent);
  transform-style: preserve-3d;
  animation: vl-cat-css3d-torus-twist-ring calc(var(--loader-speed) * 1.3) linear infinite;
}
.vl-cat-css3d-torus-twist .mesh {
  width: 44px;
  height: 44px;
  margin: 0;
  border-radius: 50%;
  border-style: dashed;
  animation: vl-cat-css3d-torus-twist-ring2 calc(var(--loader-speed) * 1.3) linear infinite reverse;
}
@keyframes vl-cat-css3d-torus-twist-ring {
  0% { transform: rotateX(16deg) rotateZ(0deg); }
  100% { transform: rotateX(88deg) rotateZ(360deg); }
}
@keyframes vl-cat-css3d-torus-twist-ring2 {
  0% { transform: rotateY(0deg) rotateZ(0deg); }
  100% { transform: rotateY(360deg) rotateZ(90deg); }
}`
  },
  {
    id: 'svg-pulse-sigils',
    name: 'Pulse Sigils SVG',
    category: 'SVG',
    tech: 'SVG',
    description: 'Six abstract bars pulse with offset intensity to mimic stylized SVG symbol rows.',
    markup: `<div class="vl-cat-svg-pulse-sigils" role="img" aria-label="Pulse sigils SVG">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>`,
    css: `.vl-cat-svg-pulse-sigils {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1e5f88);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(180deg, #071c33, #0b2c44 64%, #040a13);
}
.vl-cat-svg-pulse-sigils span {
  width: 13px;
  height: 34px;
  border-radius: 7px;
  background: color-mix(in srgb, var(--loader-accent) 84%, #fff 12%);
  animation: vl-cat-svg-pulse-sigils-tap calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
.vl-cat-svg-pulse-sigils span:nth-child(2) { animation-delay: -.1s; }
.vl-cat-svg-pulse-sigils span:nth-child(3) { animation-delay: -.2s; }
.vl-cat-svg-pulse-sigils span:nth-child(4) { animation-delay: -.3s; }
.vl-cat-svg-pulse-sigils span:nth-child(5) { animation-delay: -.4s; }
.vl-cat-svg-pulse-sigils span:nth-child(6) { animation-delay: -.5s; }
@keyframes vl-cat-svg-pulse-sigils-tap { 0%, 100% { transform: scaleY(.35); opacity: .2; } 50% { transform: scaleY(1); opacity: 1; } }`
  },
  {
    id: 'progress-radial-beat',
    name: 'Radial Beat Progress',
    category: 'Progress',
    tech: 'CSS',
    description: 'Concentric rings beat in sync to imply progress completion checkpoints.',
    markup: `<div class="vl-cat-progress-radial-beat" role="img" aria-label="Radial beat progress">
  <span class="ring one"></span>
  <span class="ring two"></span>
  <span class="ring three"></span>
  <span class="dot"></span>
</div>`,
    css: `.vl-cat-progress-radial-beat {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1e5f89);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(180deg, #061c31, #0b2d47 65%, #040a13);
  display: grid;
  place-items: center;
}
.vl-cat-progress-radial-beat .ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 72%, transparent);
  animation: vl-cat-progress-radial-beat-ring calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
.vl-cat-progress-radial-beat .one { width: 72px; height: 72px; animation-delay: .0s; }
.vl-cat-progress-radial-beat .two { width: 48px; height: 48px; animation-delay: -.5s; border-style: dashed; }
.vl-cat-progress-radial-beat .three { width: 96px; height: 96px; animation-delay: -1s; }
.vl-cat-progress-radial-beat .dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-progress-radial-beat-dot calc(var(--loader-speed) * 1.5) linear infinite;
}
@keyframes vl-cat-progress-radial-beat-ring { 0%, 100% { opacity: .22; transform: scale(.65); } 50% { opacity: 1; transform: scale(1); } }
@keyframes vl-cat-progress-radial-beat-dot { 0%, 100% { transform: scale(.6); opacity: .2; } 50% { transform: scale(1); opacity: 1; } }`
  },
  {
    id: 'chart-grid-pulse',
    name: 'Grid Pulse Chart',
    category: 'Charts',
    tech: 'CSS',
    description: 'A minimal chart frame with pulses along horizontal segments and diagonal accents.',
    markup: `<div class="vl-cat-chart-grid-pulse" role="img" aria-label="Grid pulse chart">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>`,
    css: `.vl-cat-chart-grid-pulse {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1e618a);
  border-radius: 14px;
  display: grid;
  gap: 8px;
  padding: 14px 16px;
  align-content: center;
  background: linear-gradient(176deg, #071d33, #0a2944 60%, #040a14);
}
.vl-cat-chart-grid-pulse span {
  width: 100%;
  height: 9px;
  border-radius: 999px;
  position: relative;
  overflow: hidden;
  background: color-mix(in srgb, var(--loader-accent) 16%, #dbe3ed);
}
.vl-cat-chart-grid-pulse span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, var(--loader-accent), transparent);
  animation: vl-cat-chart-grid-pulse-fill calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
.vl-cat-chart-grid-pulse span:nth-child(2)::after { animation-delay: -.2s; }
.vl-cat-chart-grid-pulse span:nth-child(3)::after { animation-delay: -.4s; }
.vl-cat-chart-grid-pulse span:nth-child(4)::after { animation-delay: -.6s; }
.vl-cat-chart-grid-pulse span:nth-child(5)::after { animation-delay: -.8s; }
@keyframes vl-cat-chart-grid-pulse-fill { 0% { transform: translateX(-110%); opacity: .2; } 50% { transform: translateX(110%); opacity: 1; } 100% { transform: translateX(110%); opacity: .2; } }`
  },
  {
    id: 'map-grid-rail',
    name: 'Grid Rail Map',
    category: 'Maps',
    tech: 'CSS',
    description: 'A map-like rail grid pulses with traveling nodes and crossing lanes.',
    markup: `<div class="vl-cat-map-grid-rail" role="img" aria-label="Grid rail map">
  <span class="lane a"></span>
  <span class="lane b"></span>
  <span class="pin" style="--x:34px;--y:16px"></span>
  <span class="pin" style="--x:90px;--y:36px"></span>
  <span class="pin" style="--x:150px;--y:58px"></span>
</div>`,
    css: `.vl-cat-map-grid-rail {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5f8a);
  border-radius: 14px;
  background: linear-gradient(150deg, #061a2e, #0b2c44 62%, #040a14);
  display: grid;
  align-content: center;
  padding: 14px 12px;
}
.vl-cat-map-grid-rail .lane {
  width: 166px;
  height: 12px;
  border-radius: 8px;
  margin: 0 auto;
  background: color-mix(in srgb, var(--loader-accent) 18%, #dfe8ef);
}
.vl-cat-map-grid-rail .a {
  margin-bottom: 34px;
  animation: vl-cat-map-grid-rail-shift calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-cat-map-grid-rail .b { animation: vl-cat-map-grid-rail-shift calc(var(--loader-speed) * 1.2) ease-in-out infinite reverse; }
.vl-cat-map-grid-rail .pin {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-map-grid-rail-pin calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
@keyframes vl-cat-map-grid-rail-shift { 0%, 100% { opacity: .24; } 50% { opacity: 1; } }
@keyframes vl-cat-map-grid-rail-pin { 0%, 100% { transform: scale(.55); opacity: .3; } 50% { transform: scale(1.3); opacity: 1; } }`
  },
  {
    id: 'skeleton-card-ripple',
    name: 'Card Ripple Skeleton',
    category: 'Skeletons',
    tech: 'Vanilla CSS',
    description: 'A card-like placeholder set pulses with short and long shimmer tracks.',
    markup: `<div class="vl-cat-skeleton-card-ripple" role="img" aria-label="Card ripple skeleton">
  <span class="line a"></span>
  <span class="line b"></span>
  <span class="line c"></span>
  <span class="line b"></span>
</div>`,
    css: `.vl-cat-skeleton-card-ripple {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #dbe6ef);
  border-radius: 14px;
  padding: 14px;
  display: grid;
  gap: 8px;
  align-content: center;
  background: #fff;
}
.vl-cat-skeleton-card-ripple .line {
  position: relative;
  overflow: hidden;
  height: 10px;
  border-radius: 999px;
  background: #e8edf5;
}
.vl-cat-skeleton-card-ripple .a { width: 70%; }
.vl-cat-skeleton-card-ripple .b { width: 100%; }
.vl-cat-skeleton-card-ripple .c { width: 58%; }
.vl-cat-skeleton-card-ripple .line::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.9), transparent);
  animation: vl-cat-skeleton-card-ripple-shine calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
@keyframes vl-cat-skeleton-card-ripple-shine { 0% { transform: translateX(-110%); } 50% { transform: translateX(110%); } 100% { transform: translateX(110%); } }`
  },
  {
    id: 'operation-signal-lattice',
    name: 'Signal Lattice Operations',
    category: 'Operations',
    tech: 'CSS',
    description: 'A compact operational lattice with node pulses and diagonal link shimmer.',
    markup: `<div class="vl-cat-operation-signal-lattice" role="img" aria-label="Signal lattice operations">
  <span class="node" style="--i:0"></span>
  <span class="node" style="--i:1"></span>
  <span class="node" style="--i:2"></span>
  <span class="link"></span>
  <span class="link two"></span>
</div>`,
    css: `.vl-cat-operation-signal-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f5e89);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(160deg, #071a30, #0b2c45 64%, #040a13);
}
.vl-cat-operation-signal-lattice .node {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  left: calc(40px + var(--i) * 40px);
  top: calc(16px + var(--i) * 24px);
  animation: vl-cat-operation-signal-lattice-node calc(var(--loader-speed) * 1.3) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.2s);
}
.vl-cat-operation-signal-lattice .link {
  position: absolute;
  left: 27px;
  top: 33px;
  width: 130px;
  height: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 24%, #e9edf3);
  animation: vl-cat-operation-signal-lattice-link calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
.vl-cat-operation-signal-lattice .two { top: 56px; animation-direction: reverse; }
@keyframes vl-cat-operation-signal-lattice-node { 0%, 100% { opacity: .2; transform: scale(.55); } 50% { opacity: 1; transform: scale(1.15); } }
@keyframes vl-cat-operation-signal-lattice-link { 0%, 100% { transform: scaleX(.48); } 50% { transform: scaleX(1); } }`
  },
  {
    id: 'matrix-sine-gate-spiral',
    name: 'Sine Gate Spiral Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A matrix lattice loops through sine-gated radial nodes and orbiting centers.',
    markup: `<div class="vl-cat-matrix-sine-gate-spiral" role="img" aria-label="Sine gate spiral matrix">
  <span style="--i:0"></span>
  <span style="--i:1"></span>
  <span style="--i:2"></span>
  <span style="--i:3"></span>
  <span style="--i:4"></span>
  <span class="core"></span>
</div>`,
    css: `.vl-cat-matrix-sine-gate-spiral {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6089);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 16%, transparent), transparent 44%), linear-gradient(174deg, #061c33, #0b2942 63%, #040a14);
  overflow: hidden;
}
.vl-cat-matrix-sine-gate-spiral span {
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  margin: -4px;
  background: var(--loader-accent);
  transform: rotate(calc(var(--i) * 72deg)) translateY(-24px);
  animation: vl-cat-matrix-sine-gate-spiral-node calc(var(--loader-speed) * 1.3) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.16s);
}
.vl-cat-matrix-sine-gate-spiral .core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 11px;
  height: 11px;
  margin: -5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, white 10%);
  animation: vl-cat-matrix-sine-gate-spiral-core calc(var(--loader-speed) * 1.2) linear infinite;
}
@keyframes vl-cat-matrix-sine-gate-spiral-node { 0%, 100% { transform: rotate(calc(var(--i) * 72deg)) translateY(-24px) scale(.42); opacity: .2; } 50% { transform: rotate(calc(var(--i) * 72deg + 180deg)) translateY(-18px) scale(1); opacity: 1; } }
@keyframes vl-cat-matrix-sine-gate-spiral-core { 0%, 100% { transform: translate(-50%, -50%) scale(.6); opacity: .4; } 50% { transform: translate(-50%, -50%) scale(1.08); opacity: 1; } }`
  },
  {
    id: 'common-ui-shell-rings',
    name: 'Common Shell Rings',
    category: 'Common UI',
    tech: 'CSS',
    description: 'A reusable UI shell with concentric ring pulses suitable for neutral states.',
    markup: `<div class="vl-cat-common-ui-shell-rings" role="img" aria-label="Common shell rings">
  <span class="frame"></span>
  <span class="ring one"></span>
  <span class="ring two"></span>
  <span class="ring three"></span>
</div>`,
    css: `.vl-cat-common-ui-shell-rings {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #dce6ef);
  border-radius: 14px;
  position: relative;
  background: #fff;
  overflow: hidden;
}
.vl-cat-common-ui-shell-rings .frame {
  position: absolute;
  inset: 11px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #d9e4ef);
  border-radius: 9px;
}
.vl-cat-common-ui-shell-rings .ring {
  position: absolute;
  width: 30px;
  height: 30px;
  left: 50%;
  top: 50%;
  margin: -15px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 70%, transparent);
  animation: vl-cat-common-ui-shell-rings-spin calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
.vl-cat-common-ui-shell-rings .one { animation-delay: -.2s; }
.vl-cat-common-ui-shell-rings .two { width: 52px; height: 52px; margin: -26px; animation-delay: -.4s; border-style: dashed; }
.vl-cat-common-ui-shell-rings .three { width: 16px; height: 16px; margin: -8px; animation-delay: -.6s; }
@keyframes vl-cat-common-ui-shell-rings-spin { 0%, 100% { transform: translate(-50%, -50%) scale(.4) rotate(0deg); opacity: .28; } 50% { transform: translate(-50%, -50%) scale(.98) rotate(180deg); opacity: 1; } }`
  },
  {
    id: 'application-ribbon-telemetry',
    name: 'Ribbon Telemetry Application',
    category: 'Application',
    tech: 'CSS',
    description: 'A small app-like telemetry panel with a scrolling ribbon and status dots.',
    markup: `<div class="vl-cat-application-ribbon-telemetry" role="img" aria-label="Ribbon telemetry application">
  <span class="top"></span>
  <span class="status" style="--x:32px;--d:0"></span>
  <span class="status" style="--x:70px;--d:1"></span>
  <span class="status" style="--x:108px;--d:2"></span>
  <span class="status" style="--x:146px;--d:3"></span>
</div>`,
    css: `.vl-cat-application-ribbon-telemetry {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f5e8c);
  border-radius: 14px;
  background: #fff;
  position: relative;
  overflow: hidden;
}
.vl-cat-application-ribbon-telemetry .top {
  position: absolute;
  left: 14px;
  top: 46px;
  right: 14px;
  height: 12px;
  border-radius: 999px;
  background: linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 16%, #e9eef4), color-mix(in srgb, var(--loader-accent) 32%, #ccd9e9), color-mix(in srgb, var(--loader-accent) 16%, #e9eef4));
  animation: vl-cat-application-ribbon-telemetry-wave calc(var(--loader-speed) * 1.5) linear infinite;
}
.vl-cat-application-ribbon-telemetry .status {
  position: absolute;
  top: 50px;
  left: var(--x);
  width: 8px;
  height: 8px;
  margin-top: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-application-ribbon-telemetry-dot calc(var(--loader-speed) * 1.2) ease-in-out infinite;
  animation-delay: calc(var(--d) * -0.15s);
}
@keyframes vl-cat-application-ribbon-telemetry-wave { 0% { opacity: .22; transform: scaleX(.65); } 50% { opacity: 1; transform: scaleX(1); } 100% { opacity: .22; transform: scaleX(.65); } }
@keyframes vl-cat-application-ribbon-telemetry-dot { 0%, 100% { transform: scale(.55); opacity: .2; } 50% { transform: scale(1.2); opacity: 1; } }`
  },
  {
    id: 'holographic-depth-veil',
    name: 'Depth Veil Holographic',
    category: 'Holographic',
    tech: 'CSS',
    description: 'Layered veils and a pulse ring create a translucent holographic depth effect.',
    markup: `<div class="vl-cat-holographic-depth-veil" role="img" aria-label="Depth veil holographic">
  <span class="veil a"></span>
  <span class="veil b"></span>
  <span class="veil c"></span>
  <span class="nucleus"></span>
</div>`,
    css: `.vl-cat-holographic-depth-veil {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1f5f87);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 16%, transparent), transparent 45%), linear-gradient(168deg, #081d37, #0f2f4c 61%, #050d14);
  overflow: hidden;
  display: grid;
  place-items: center;
}
.vl-cat-holographic-depth-veil .veil {
  position: absolute;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, transparent);
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.vl-cat-holographic-depth-veil .a { width: 56px; height: 56px; animation: vl-cat-holographic-depth-veil-veil calc(var(--loader-speed) * 1.8) linear infinite; }
.vl-cat-holographic-depth-veil .b { width: 80px; height: 80px; animation: vl-cat-holographic-depth-veil-veil calc(var(--loader-speed) * 1.3) linear infinite reverse; border-style: dashed; }
.vl-cat-holographic-depth-veil .c { width: 98px; height: 98px; animation: vl-cat-holographic-depth-veil-veil calc(var(--loader-speed) * 2.1) linear infinite; opacity: .6; }
.vl-cat-holographic-depth-veil .nucleus {
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 14px var(--loader-accent);
  animation: vl-cat-holographic-depth-veil-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-cat-holographic-depth-veil-veil { 0% { transform: translate(-50%, -50%) scale(.6) rotate(0deg); } 50% { transform: translate(-50%, -50%) scale(1) rotate(180deg); } 100% { transform: translate(-50%, -50%) scale(.6) rotate(360deg); } }
@keyframes vl-cat-holographic-depth-veil-core { 0%, 100% { transform: scale(.6); opacity: .3; } 50% { transform: scale(1.2); opacity: 1; } }`
  },
  {
    id: 'spinner-photon-drift',
    name: 'Photon Drift Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A photon-style arc and rotating dust drift implies continuous spinner motion.',
    markup: `<div class="vl-cat-spinner-photon-drift" role="img" aria-label="Photon drift spinner">
  <span class="arc"></span>
  <span class="dust" style="--i:0"></span>
  <span class="dust" style="--i:1"></span>
  <span class="dust" style="--i:2"></span>
  <span class="dust" style="--i:3"></span>
</div>`,
    css: `.vl-cat-spinner-photon-drift {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #215b89);
  border-radius: 14px;
  background: linear-gradient(180deg, #061b2f, #0c2c47 64%, #040a14);
  position: relative;
  overflow: hidden;
}
.vl-cat-spinner-photon-drift .arc {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50px;
  height: 50px;
  margin: -25px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: var(--loader-accent);
  border-right-color: color-mix(in srgb, var(--loader-accent) 58%, transparent);
  animation: vl-cat-spinner-photon-drift-arc calc(var(--loader-speed) * 1.1) linear infinite;
}
.vl-cat-spinner-photon-drift .dust {
  position: absolute;
  width: 6px;
  height: 6px;
  left: 50%;
  top: 50%;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 10px var(--loader-accent);
  transform: rotate(calc(var(--i) * 90deg)) translateX(28px);
  animation: vl-cat-spinner-photon-drift-dust calc(var(--loader-speed) * 1.2) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.2s);
}
@keyframes vl-cat-spinner-photon-drift-arc { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes vl-cat-spinner-photon-drift-dust { 0%, 100% { opacity: .2; transform: rotate(calc(var(--i) * 90deg)) translateX(28px) scale(.5); } 50% { opacity: 1; transform: rotate(calc(var(--i) * 90deg)) translateX(18px) scale(1.2); } }`
  },
  {
    id: 'dot-satellite-arc',
    name: 'Satellite Arc Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Orbiting dots lock into radial arcs with soft trailing pulses.',
    markup: `<div class="vl-cat-dot-satellite-arc" role="img" aria-label="Satellite arc dots">
  <span style="--i:0"></span>
  <span style="--i:1"></span>
  <span style="--i:2"></span>
  <span style="--i:3"></span>
  <span style="--i:4"></span>
  <span style="--i:5"></span>
</div>`,
    css: `.vl-cat-dot-satellite-arc {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1d608b);
  border-radius: 14px;
  background: linear-gradient(162deg, #061b2f, #0b2a45 63%, #040a14);
  position: relative;
}
.vl-cat-dot-satellite-arc span {
  position: absolute;
  width: 9px;
  height: 9px;
  left: 50%;
  top: 50%;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 92%, white 8%);
  transform: rotate(calc(var(--i) * 60deg)) translateY(-24px);
  animation: vl-cat-dot-satellite-arc-twinkle calc(var(--loader-speed) * 1.1) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.12s);
}
@keyframes vl-cat-dot-satellite-arc-twinkle {
  0%, 100% { opacity: .2; transform: rotate(calc(var(--i) * 60deg)) translateY(-24px) scale(.45); }
  50% { opacity: 1; transform: rotate(calc(var(--i) * 60deg)) translateY(-24px) scale(1.1); }
}`
  },
  {
    id: 'bar-cascade-radar',
    name: 'Cascade Radar Bars',
    category: 'Bars',
    tech: 'CSS',
    description: 'Layered bars cascade across a staggered grid with directional glow.',
    markup: `<div class="vl-cat-bar-cascade-radar" role="img" aria-label="Cascade radar bars">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>`,
    css: `.vl-cat-bar-cascade-radar {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 29%, #1b5e89);
  border-radius: 14px;
  background: linear-gradient(180deg, #061d31, #0a2b44 65%, #040a14);
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(6, 1fr);
  align-items: end;
  padding: 14px 12px;
}
.vl-cat-bar-cascade-radar span {
  justify-self: center;
  width: 10px;
  height: 100%;
  border-radius: 6px;
  background: color-mix(in srgb, var(--loader-accent) 20%, #e6ecf4);
  animation: vl-cat-bar-cascade-radar-step calc(var(--loader-speed) * 1.2) ease-in-out infinite;
  animation-delay: calc((var(--i, 0) * -0.1s));
}
.vl-cat-bar-cascade-radar span:nth-child(even) { animation-name: vl-cat-bar-cascade-radar-step2; }
.vl-cat-bar-cascade-radar span:nth-child(1) { --i: 0; }
.vl-cat-bar-cascade-radar span:nth-child(2) { --i: 1; }
.vl-cat-bar-cascade-radar span:nth-child(3) { --i: 2; }
.vl-cat-bar-cascade-radar span:nth-child(4) { --i: 3; }
.vl-cat-bar-cascade-radar span:nth-child(5) { --i: 4; }
.vl-cat-bar-cascade-radar span:nth-child(6) { --i: 5; }
@keyframes vl-cat-bar-cascade-radar-step { 0%, 100% { transform: scaleY(.2); opacity: .24; } 50% { transform: scaleY(1); opacity: 1; } }
@keyframes vl-cat-bar-cascade-radar-step2 { 0%, 100% { transform: scaleY(.8); opacity: .2; } 50% { transform: scaleY(.3); opacity: 1; } }`
  },
  {
    id: 'shape-helix-edges',
    name: 'Helix Edges Shape',
    category: 'Shapes',
    tech: 'CSS',
    description: 'A compact helix-like polygon alternates among rotating edges.',
    markup: `<div class="vl-cat-shape-helix-edges" role="img" aria-label="Helix edges shape">
  <span class="edge one"></span>
  <span class="edge two"></span>
  <span class="edge three"></span>
  <span class="dot"></span>
</div>`,
    css: `.vl-cat-shape-helix-edges {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 27%, #1f5e8a);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 55%, color-mix(in srgb, var(--loader-accent) 18%, transparent), transparent 48%), linear-gradient(150deg, #081f37, #0f2e4c 62%, #050c14);
  position: relative;
  overflow: hidden;
}
.vl-cat-shape-helix-edges .edge {
  position: absolute;
  width: 52px;
  height: 32px;
  left: 50%;
  top: 50%;
  margin-left: -26px;
  margin-top: -16px;
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
  border: 2px solid color-mix(in srgb, var(--loader-accent) 70%, transparent);
}
.vl-cat-shape-helix-edges .one { animation: vl-cat-shape-helix-edges-spin calc(var(--loader-speed) * 1.4) linear infinite; }
.vl-cat-shape-helix-edges .two { width: 68px; margin-left: -34px; animation: vl-cat-shape-helix-edges-spin2 calc(var(--loader-speed) * 1.4) linear infinite reverse; }
.vl-cat-shape-helix-edges .three { width: 38px; margin-left: -19px; animation: vl-cat-shape-helix-edges-spin3 calc(var(--loader-speed) * 1.4) linear infinite; }
.vl-cat-shape-helix-edges .dot {
  position: absolute;
  width: 8px;
  height: 8px;
  left: 50%;
  top: 50%;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-shape-helix-edges-dot calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
@keyframes vl-cat-shape-helix-edges-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes vl-cat-shape-helix-edges-spin2 { 0% { transform: rotate(120deg); opacity: .9; } 50% { transform: rotate(360deg); opacity: .5; } 100% { transform: rotate(600deg); opacity: .9; } }
@keyframes vl-cat-shape-helix-edges-spin3 { 0% { transform: rotate(0deg) scale(.78); } 50% { transform: rotate(-180deg) scale(1); } 100% { transform: rotate(-360deg) scale(.78); } }
@keyframes vl-cat-shape-helix-edges-dot { 0%, 100% { opacity: .2; transform: scale(.5); } 50% { opacity: 1; transform: scale(1.2); } }`
  },
  {
    id: 'button-ring-trace',
    name: 'Ring Trace Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A button-shaped shell with a ring trace and trailing pulse nodes.',
    markup: `<div class="vl-cat-button-ring-trace" role="img" aria-label="Ring trace button">
  <span class="edge"></span>
  <span class="node" style="--x:38px"></span>
  <span class="node" style="--x:76px"></span>
  <span class="node" style="--x:114px"></span>
  <span class="node" style="--x:152px"></span>
</div>`,
    css: `.vl-cat-button-ring-trace {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 21%, #1f5f89);
  border-radius: 14px;
  background: linear-gradient(180deg, #061c31, #0b2b44 64%, #040a14);
  position: relative;
  overflow: hidden;
}
.vl-cat-button-ring-trace .edge {
  position: absolute;
  inset: 36px 28px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 42%, transparent);
  border-radius: 10px;
  animation: vl-cat-button-ring-trace-edge calc(var(--loader-speed) * 1.2) linear infinite;
}
.vl-cat-button-ring-trace .node {
  position: absolute;
  top: 50%;
  left: var(--x);
  width: 7px;
  height: 7px;
  margin-top: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-button-ring-trace-node calc(var(--loader-speed) * 1.2) ease-in-out infinite;
  animation-delay: calc((var(--x) / 32) * -0.08s);
}
@keyframes vl-cat-button-ring-trace-edge { 0%, 100% { border-color: color-mix(in srgb, var(--loader-accent) 28%, transparent); } 50% { border-color: color-mix(in srgb, var(--loader-accent) 84%, transparent); } }
@keyframes vl-cat-button-ring-trace-node { 0%, 100% { opacity: .2; transform: scale(.6); } 50% { opacity: 1; transform: scale(1.3); } }`
  },
  {
    id: 'text-signal-caption',
    name: 'Signal Caption Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A caption text cycles with a moving signal accent and soft glow.',
    markup: `<div class="vl-cat-text-signal-caption" role="img" aria-label="Signal caption text">
  <span>SYNCING</span>
  <span class="stripe"></span>
</div>`,
    css: `.vl-cat-text-signal-caption {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f618b);
  border-radius: 14px;
  background: linear-gradient(180deg, #061d32, #0a2a45 65%, #040a13);
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  color: color-mix(in srgb, var(--loader-accent) 82%, white 12%);
  font: 900 13px/1.2 system-ui, sans-serif;
  letter-spacing: .12em;
}
.vl-cat-text-signal-caption span {
  position: relative;
  z-index: 1;
}
.vl-cat-text-signal-caption .stripe {
  position: absolute;
  height: 14px;
  inset: 47px -40px;
  width: 72px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 45%, transparent), transparent);
  animation: vl-cat-text-signal-caption-move calc(var(--loader-speed) * 1.5) linear infinite;
}
@keyframes vl-cat-text-signal-caption-move { 0% { transform: translateX(-190px); opacity: .24; } 50% { opacity: 1; } 100% { transform: translateX(190px); opacity: .24; } }`
  },
  {
    id: 'css3d-mesh-warp',
    name: 'Mesh Warp 3D',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'A mesh sheet distorts and warps with alternating perspective layers.',
    markup: `<div class="vl-cat-css3d-mesh-warp" role="img" aria-label="Mesh warp 3D">
  <span></span>
  <span class="mesh"></span>
  <span class="core"></span>
</div>`,
    css: `.vl-cat-css3d-mesh-warp {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f628d);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 13%, transparent), transparent 47%), linear-gradient(168deg, #081f36, #0f2f4a 61%, #050b14);
  position: relative;
  perspective: 680px;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.vl-cat-css3d-mesh-warp span {
  position: absolute;
  width: 74px;
  height: 74px;
  border-radius: 15px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 70%, transparent);
  transform-style: preserve-3d;
  animation: vl-cat-css3d-mesh-warp-shell calc(var(--loader-speed) * 1.4) linear infinite;
}
.vl-cat-css3d-mesh-warp .mesh { width: 52px; height: 52px; border-style: dashed; animation-name: vl-cat-css3d-mesh-warp-shell2; }
.vl-cat-css3d-mesh-warp .core {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-css3d-mesh-warp-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-cat-css3d-mesh-warp-shell { 0% { transform: rotateX(16deg) rotateZ(0deg) scale(.6); } 50% { transform: rotateX(82deg) rotateZ(180deg) scale(.95); } 100% { transform: rotateX(16deg) rotateZ(360deg) scale(.6); } }
@keyframes vl-cat-css3d-mesh-warp-shell2 { 0% { transform: rotateY(0deg) rotateZ(0deg); } 50% { transform: rotateY(180deg) rotateZ(90deg); } 100% { transform: rotateY(360deg) rotateZ(180deg); } }
@keyframes vl-cat-css3d-mesh-warp-core { 0%, 100% { transform: scale(.6); opacity: .3; } 50% { transform: scale(1.2); opacity: 1; } }`
  },
  {
    id: 'svg-glyph-pulse',
    name: 'Glyph Pulse SVG',
    category: 'SVG',
    tech: 'SVG',
    description: 'A compact glyph row pulses in stepped rhythm, suggestive of SVG stroke timing.',
    markup: `<div class="vl-cat-svg-glyph-pulse" role="img" aria-label="Glyph pulse SVG">
  <span></span><span></span><span></span><span></span><span></span><span></span>
</div>`,
    css: `.vl-cat-svg-glyph-pulse {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1f608a);
  border-radius: 14px;
  background: linear-gradient(178deg, #071b31, #0a2d46 61%, #040a13);
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
}
.vl-cat-svg-glyph-pulse span {
  width: 12px;
  height: 32px;
  border-radius: 5px;
  background: color-mix(in srgb, var(--loader-accent) 82%, #fff 10%);
  animation: vl-cat-svg-glyph-pulse-wave calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-cat-svg-glyph-pulse span:nth-child(2) { animation-delay: -.13s; }
.vl-cat-svg-glyph-pulse span:nth-child(3) { animation-delay: -.26s; }
.vl-cat-svg-glyph-pulse span:nth-child(4) { animation-delay: -.39s; }
.vl-cat-svg-glyph-pulse span:nth-child(5) { animation-delay: -.52s; }
.vl-cat-svg-glyph-pulse span:nth-child(6) { animation-delay: -.65s; }
@keyframes vl-cat-svg-glyph-pulse-wave { 0%, 100% { transform: scaleY(.35); opacity: .2; } 50% { transform: scaleY(1); opacity: 1; } }`
  },
  {
    id: 'progress-rippling-step',
    name: 'Rippling Step Progress',
    category: 'Progress',
    tech: 'CSS',
    description: 'Step chips ripple in sequence across a small progress scaffold.',
    markup: `<div class="vl-cat-progress-rippling-step" role="img" aria-label="Rippling step progress">
  <span class="chip"></span>
  <span class="chip"></span>
  <span class="chip"></span>
  <span class="chip"></span>
  <span class="chip"></span>
</div>`,
    css: `.vl-cat-progress-rippling-step {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1f5e8b);
  border-radius: 14px;
  display: grid;
  gap: 7px;
  padding: 14px 16px;
  align-content: center;
  background: linear-gradient(178deg, #071d33, #0a2b47 61%, #040a14);
}
.vl-cat-progress-rippling-step .chip {
  justify-self: stretch;
  height: 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 16%, #dfe8ef);
  position: relative;
  overflow: hidden;
}
.vl-cat-progress-rippling-step .chip::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, var(--loader-accent), transparent);
  animation: vl-cat-progress-rippling-step-sweep calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-cat-progress-rippling-step .chip:nth-child(2)::after { animation-delay: -.2s; }
.vl-cat-progress-rippling-step .chip:nth-child(3)::after { animation-delay: -.4s; }
.vl-cat-progress-rippling-step .chip:nth-child(4)::after { animation-delay: -.6s; }
.vl-cat-progress-rippling-step .chip:nth-child(5)::after { animation-delay: -.8s; }
@keyframes vl-cat-progress-rippling-step-sweep { 0% { transform: translateX(-110%); opacity: .2; } 50% { transform: translateX(110%); opacity: 1; } 100% { transform: translateX(110%); opacity: .2; } }`
  },
  {
    id: 'chart-angle-grid',
    name: 'Angle Grid Chart',
    category: 'Charts',
    tech: 'CSS',
    description: 'Stacked grid bars pop at angled positions like an angle-tracked chart.',
    markup: `<div class="vl-cat-chart-angle-grid" role="img" aria-label="Angle grid chart">
  <span></span><span></span><span></span><span></span><span></span><span></span>
</div>`,
    css: `.vl-cat-chart-angle-grid {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5e8b);
  border-radius: 14px;
  background: linear-gradient(176deg, #071d33, #0a2943 60%, #040a14);
  display: grid;
  align-content: center;
  padding: 16px 14px;
  gap: 7px;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
}
.vl-cat-chart-angle-grid span {
  display: block;
  width: 100%;
  border-radius: 4px;
  background: color-mix(in srgb, var(--loader-accent) 18%, #dfe7f0);
  height: 8px;
  animation: vl-cat-chart-angle-grid-wave calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
.vl-cat-chart-angle-grid span:nth-child(1) { transform: rotate(2deg); animation-delay: .0s; }
.vl-cat-chart-angle-grid span:nth-child(2) { transform: rotate(-2deg); animation-delay: -.11s; }
.vl-cat-chart-angle-grid span:nth-child(3) { transform: rotate(4deg); animation-delay: -.22s; }
.vl-cat-chart-angle-grid span:nth-child(4) { transform: rotate(-3deg); animation-delay: -.33s; }
.vl-cat-chart-angle-grid span:nth-child(5) { transform: rotate(1deg); animation-delay: -.44s; }
.vl-cat-chart-angle-grid span:nth-child(6) { transform: rotate(-4deg); animation-delay: -.55s; }
@keyframes vl-cat-chart-angle-grid-wave { 0%, 100% { height: 7px; opacity: .22; } 50% { height: 18px; opacity: 1; } }`
  },
  {
    id: 'map-pulse-rings',
    name: 'Pulse Rings Map',
    category: 'Maps',
    tech: 'CSS',
    description: 'Map rings pulse outward in coordinated bursts across dual tracks.',
    markup: `<div class="vl-cat-map-pulse-rings" role="img" aria-label="Pulse rings map">
  <span class="ring a"></span>
  <span class="ring b"></span>
  <span class="dot" style="--x:56px;--y:33px"></span>
  <span class="dot" style="--x:133px;--y:33px"></span>
</div>`,
    css: `.vl-cat-map-pulse-rings {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1e6088);
  border-radius: 14px;
  position: relative;
  background: linear-gradient(150deg, #061b2f, #0a2a45 61%, #040a14);
  overflow: hidden;
  display: grid;
  place-items: center;
}
.vl-cat-map-pulse-rings .ring {
  position: absolute;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, transparent);
  border-radius: 50%;
  width: 34px;
  height: 34px;
  animation: vl-cat-map-pulse-rings-wave calc(var(--loader-speed) * 1.4) linear infinite;
}
.vl-cat-map-pulse-rings .b {
  width: 62px;
  height: 62px;
  animation-duration: calc(var(--loader-speed) * 1.8);
  animation-direction: reverse;
  opacity: .7;
}
.vl-cat-map-pulse-rings .dot {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-map-pulse-rings-dot calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-cat-map-pulse-rings-wave {
  0% { transform: scale(.38); opacity: .18; }
  50% { transform: scale(1.25); opacity: 1; }
  100% { transform: scale(.38); opacity: .18; }
}
@keyframes vl-cat-map-pulse-rings-dot { 0%, 100% { transform: scale(.45); opacity: .25; } 50% { transform: scale(1.25); opacity: 1; } }`
  },
  {
    id: 'skeleton-tile-ping',
    name: 'Tile Ping Skeleton',
    category: 'Skeletons',
    tech: 'Vanilla CSS',
    description: 'Tile-like placeholders with pinging shimmer pulses and short delays.',
    markup: `<div class="vl-cat-skeleton-tile-ping" role="img" aria-label="Tile ping skeleton">
  <span class="tile a"></span>
  <span class="tile b"></span>
  <span class="tile c"></span>
  <span class="tile b"></span>
</div>`,
    css: `.vl-cat-skeleton-tile-ping {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #dce6ef);
  border-radius: 14px;
  padding: 14px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  background: #fff;
}
.vl-cat-skeleton-tile-ping .tile {
  height: 16px;
  border-radius: 8px;
  background: #e8edf6;
  position: relative;
  overflow: hidden;
}
.vl-cat-skeleton-tile-ping .a { grid-column: span 2; }
.vl-cat-skeleton-tile-ping .b { height: 10px; }
.vl-cat-skeleton-tile-ping .c { height: 18px; }
.vl-cat-skeleton-tile-ping .tile::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.9), transparent);
  animation: vl-cat-skeleton-tile-ping-shine calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
.vl-cat-skeleton-tile-ping .tile:nth-child(2) { animation-delay: -.15s; }
.vl-cat-skeleton-tile-ping .tile:nth-child(3) { animation-delay: -.3s; }
@keyframes vl-cat-skeleton-tile-ping-shine { 0% { transform: translateX(-110%); } 50% { transform: translateX(110%); } 100% { transform: translateX(110%); } }`
  },
  {
    id: 'operation-node-fusion',
    name: 'Node Fusion Operations',
    category: 'Operations',
    tech: 'CSS',
    description: 'Three operation nodes fuse and split while links cross and resolve.',
    markup: `<div class="vl-cat-operation-node-fusion" role="img" aria-label="Node fusion operations">
  <span class="n" style="--x:40px;--y:30px"></span>
  <span class="n" style="--x:90px;--y:46px"></span>
  <span class="n" style="--x:140px;--y:62px"></span>
  <span class="line"></span>
</div>`,
    css: `.vl-cat-operation-node-fusion {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f5e8a);
  border-radius: 14px;
  background: linear-gradient(165deg, #071a30, #0b2c45 64%, #040a13);
  position: relative;
  overflow: hidden;
}
.vl-cat-operation-node-fusion .n {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-operation-node-fusion-dot calc(var(--loader-speed) * 1.15) ease-in-out infinite;
  animation-delay: calc((var(--x) / 50) * -0.12s);
}
.vl-cat-operation-node-fusion .line {
  position: absolute;
  left: 44px;
  top: 60px;
  width: 102px;
  height: 2px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 30%, #d8e3ee);
  transform-origin: center;
  animation: vl-cat-operation-node-fusion-line calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
@keyframes vl-cat-operation-node-fusion-dot { 0%, 100% { transform: scale(.5); opacity: .2; } 50% { transform: scale(1.2); opacity: 1; } }
@keyframes vl-cat-operation-node-fusion-line { 0%, 100% { transform: scaleX(.4); opacity: .2; } 50% { transform: scaleX(1); opacity: 1; } }`
  },
  {
    id: 'matrix-wave-lattice-ring',
    name: 'Wave Lattice Ring Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A ring lattice undulates in progressive wave steps across the matrix plane.',
    markup: `<div class="vl-cat-matrix-wave-lattice-ring" role="img" aria-label="Wave lattice ring matrix">
  <span class="ring" style="--i:0"></span>
  <span class="ring" style="--i:1"></span>
  <span class="ring" style="--i:2"></span>
  <span class="core"></span>
</div>`,
    css: `.vl-cat-matrix-wave-lattice-ring {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6188);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 18%, transparent), transparent 43%), linear-gradient(172deg, #061c33, #0b2942 63%, #040a14);
  position: relative;
  overflow: hidden;
}
.vl-cat-matrix-wave-lattice-ring .ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 18px;
  height: 18px;
  margin: -9px;
  border-radius: 50%;
  border: 1.5px solid color-mix(in srgb, var(--loader-accent) 74%, transparent);
  animation: vl-cat-matrix-wave-lattice-ring-spin calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.2s);
}
.vl-cat-matrix-wave-lattice-ring .ring:nth-child(2) { border-style: dashed; transform: scale(2.6); }
.vl-cat-matrix-wave-lattice-ring .ring:nth-child(3) { width: 32px; height: 32px; margin: -16px; }
.vl-cat-matrix-wave-lattice-ring .core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 11px;
  height: 11px;
  margin: -5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 92%, white 8%);
  animation: vl-cat-matrix-wave-lattice-ring-core calc(var(--loader-speed) * 1.1) linear infinite;
}
@keyframes vl-cat-matrix-wave-lattice-ring-spin { 0% { transform: rotate(0deg) scale(.7); } 50% { transform: rotate(180deg) scale(1); } 100% { transform: rotate(360deg) scale(.7); } }
@keyframes vl-cat-matrix-wave-lattice-ring-core { 0%, 100% { transform: scale(.6); opacity: .35; } 50% { transform: scale(1.1); opacity: 1; } }`
  },
  {
    id: 'common-ui-shell-pulse-grid',
    name: 'Common Shell Pulse Grid',
    category: 'Common UI',
    tech: 'CSS',
    description: 'A compact shell with a pulsing status grid for repeated UI state cycles.',
    markup: `<div class="vl-cat-common-ui-shell-pulse-grid" role="img" aria-label="Common shell pulse grid">
  <span class="panel"></span>
  <span class="point" style="--x:22px;--y:24px"></span>
  <span class="point" style="--x:72px;--y:24px"></span>
  <span class="point" style="--x:122px;--y:24px"></span>
  <span class="point" style="--x:22px;--y:72px"></span>
  <span class="point" style="--x:122px;--y:72px"></span>
</div>`,
    css: `.vl-cat-common-ui-shell-pulse-grid {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #dae3ee);
  border-radius: 14px;
  background: #fff;
  position: relative;
  overflow: hidden;
}
.vl-cat-common-ui-shell-pulse-grid .panel {
  position: absolute;
  inset: 12px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 27%, #d8e3ef);
  border-radius: 10px;
}
.vl-cat-common-ui-shell-pulse-grid .point {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
  margin: -4px;
  animation: vl-cat-common-ui-shell-pulse-grid-dot calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-cat-common-ui-shell-pulse-grid .point:nth-child(3) { animation-delay: -.14s; }
.vl-cat-common-ui-shell-pulse-grid .point:nth-child(4) { animation-delay: -.28s; }
.vl-cat-common-ui-shell-pulse-grid .point:nth-child(5) { animation-delay: -.42s; }
.vl-cat-common-ui-shell-pulse-grid .point:nth-child(6) { animation-delay: -.56s; }
@keyframes vl-cat-common-ui-shell-pulse-grid-dot { 0%, 100% { opacity: .2; transform: scale(.55); } 50% { opacity: 1; transform: scale(1.2); } }`
  },
  {
    id: 'application-orbit-stream',
    name: 'Orbit Stream Application',
    category: 'Application',
    tech: 'CSS',
    description: 'A tiny app frame with two orbiting status streams and a central heartbeat.',
    markup: `<div class="vl-cat-application-orbit-stream" role="img" aria-label="Orbit stream application">
  <span class="shell"></span>
  <span class="orb a"></span>
  <span class="orb b"></span>
  <span class="heart"></span>
</div>`,
    css: `.vl-cat-application-orbit-stream {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 21%, #1f5f88);
  border-radius: 14px;
  background: #fff;
  position: relative;
  overflow: hidden;
}
.vl-cat-application-orbit-stream .shell {
  position: absolute;
  left: 13px;
  right: 13px;
  top: 28px;
  height: 32px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #dce6f0);
  border-radius: 10px;
}
.vl-cat-application-orbit-stream .orb {
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  margin: -4px;
  background: var(--loader-accent);
  animation: vl-cat-application-orbit-stream-orb calc(var(--loader-speed) * 1.4) linear infinite;
}
.vl-cat-application-orbit-stream .a { animation-delay: -.2s; animation-direction: normal; }
.vl-cat-application-orbit-stream .b { animation-delay: -.7s; animation-direction: reverse; }
.vl-cat-application-orbit-stream .heart {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, white 10%);
  animation: vl-cat-application-orbit-stream-heart calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
@keyframes vl-cat-application-orbit-stream-orb { 0% { transform: rotate(0deg) translateX(26px); } 100% { transform: rotate(360deg) translateX(26px); } }
@keyframes vl-cat-application-orbit-stream-heart { 0%, 100% { transform: scale(.55); opacity: .3; } 50% { transform: scale(1.2); opacity: 1; } }`
  },
  {
    id: 'holographic-lens-flares',
    name: 'Lens Flares Holographic',
    category: 'Holographic',
    tech: 'CSS',
    description: 'Holographic flares orbit around a lens shell with layered blur-like sheen.',
    markup: `<div class="vl-cat-holographic-lens-flares" role="img" aria-label="Lens flares holographic">
  <span class="flare a"></span>
  <span class="flare b"></span>
  <span class="flare c"></span>
  <span class="flare d"></span>
  <span class="center"></span>
</div>`,
    css: `.vl-cat-holographic-lens-flares {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5d88);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 16%, transparent), transparent 44%), linear-gradient(168deg, #081d36, #0f314e 60%, #050d14);
  position: relative;
  overflow: hidden;
}
.vl-cat-holographic-lens-flares .flare {
  position: absolute;
  width: 34px;
  height: 8px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 44%, transparent);
  left: 50%;
  top: 50%;
  margin-left: -17px;
  margin-top: -4px;
  animation: vl-cat-holographic-lens-flares-spin calc(var(--loader-speed) * 1.6) linear infinite;
}
.vl-cat-holographic-lens-flares .a { animation-delay: -.2s; }
.vl-cat-holographic-lens-flares .b { transform: rotate(72deg) translateY(-26px) rotate(90deg); }
.vl-cat-holographic-lens-flares .c { transform: rotate(144deg) translateY(-26px) rotate(90deg); animation-delay: -.4s; }
.vl-cat-holographic-lens-flares .d { transform: rotate(216deg) translateY(-26px) rotate(90deg); animation-delay: -.6s; }
.vl-cat-holographic-lens-flares .center {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  margin: -6px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 16px var(--loader-accent);
  animation: vl-cat-holographic-lens-flares-center calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-cat-holographic-lens-flares-spin { 0% { transform: rotate(0deg) translateY(-26px) rotate(90deg); } 100% { transform: rotate(360deg) translateY(-26px) rotate(90deg); } }
@keyframes vl-cat-holographic-lens-flares-center { 0%, 100% { transform: scale(.6); opacity: .3; } 50% { transform: scale(1.15); opacity: 1; } }`
  },
  {
    id: 'spinner-helix-gate',
    name: 'Helix Gate Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A helix-like gate rotates around a compact central nucleus with synchronized pulses.',
    markup: `<div class="vl-cat-spinner-helix-gate" role="img" aria-label="Helix gate spinner">
  <span class="ring"></span>
  <span class="ring b"></span>
  <span class="dot" style="--i:0"></span>
  <span class="dot" style="--i:1"></span>
  <span class="dot" style="--i:2"></span>
</div>`,
    css: `.vl-cat-spinner-helix-gate {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #215b8a);
  border-radius: 14px;
  background: linear-gradient(176deg, #061d31, #0b2d48 64%, #040a13);
  position: relative;
  display: grid;
  place-items: center;
}
.vl-cat-spinner-helix-gate .ring {
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 68%, transparent);
  animation: vl-cat-spinner-helix-gate-ring calc(var(--loader-speed) * 1.25) linear infinite;
}
.vl-cat-spinner-helix-gate .b { width: 36px; height: 36px; border-style: dashed; animation-direction: reverse; }
.vl-cat-spinner-helix-gate .dot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: rotate(calc(var(--i) * 120deg)) translateX(26px);
  animation: vl-cat-spinner-helix-gate-dot calc(var(--loader-speed) * 1.1) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.14s);
}
@keyframes vl-cat-spinner-helix-gate-ring { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes vl-cat-spinner-helix-gate-dot { 0%, 100% { opacity: .2; transform: rotate(calc(var(--i) * 120deg)) translateX(26px) scale(.6); } 50% { opacity: 1; transform: rotate(calc(var(--i) * 120deg)) translateX(18px) scale(1.15); } }`
  },
  {
    id: 'dot-asteroid-field',
    name: 'Asteroid Field Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Small particles orbit and fade in a short asteroid-field rhythm.',
    markup: `<div class="vl-cat-dot-asteroid-field" role="img" aria-label="Asteroid field dots">
  <span style="--x:50%;--y:50%;--r:0;--d:0"></span>
  <span style="--x:50%;--y:50%;--r:22px;--d:1"></span>
  <span style="--x:50%;--y:50%;--r:34px;--d:2"></span>
  <span style="--x:50%;--y:50%;--r:46px;--d:3"></span>
</div>`,
    css: `.vl-cat-dot-asteroid-field {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1f5f89);
  border-radius: 14px;
  background: linear-gradient(164deg, #061d31, #0b2c44 64%, #040a14);
  position: relative;
}
.vl-cat-dot-asteroid-field span {
  position: absolute;
  width: 7px;
  height: 7px;
  left: var(--x);
  top: var(--y);
  margin: -3px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 95%, #fff 5%);
  transform: rotate(calc(var(--d) * 90deg)) translateX(var(--r));
  animation: vl-cat-dot-asteroid-field-hop calc(var(--loader-speed) * 1.2) ease-in-out infinite;
  animation-delay: calc(var(--d) * -0.15s);
}
@keyframes vl-cat-dot-asteroid-field-hop { 0%, 100% { opacity: .22; transform: rotate(calc(var(--d) * 90deg)) translateX(var(--r)) scale(.55); } 50% { opacity: 1; transform: rotate(calc(var(--d) * 90deg + 180deg)) translateX(calc(var(--r) - 10px)) scale(1.2); } }`
  },
  {
    id: 'bar-lattice-flicker',
    name: 'Lattice Flicker Bars',
    category: 'Bars',
    tech: 'CSS',
    description: 'A micro lattice of bars flickers in rhythmic pairs and fades.',
    markup: `<div class="vl-cat-bar-lattice-flicker" role="img" aria-label="Lattice flicker bars">
  <span class="p" style="--h:22px;--d:0"></span>
  <span class="p" style="--h:46px;--d:1"></span>
  <span class="p" style="--h:62px;--d:2"></span>
  <span class="p" style="--h:36px;--d:3"></span>
  <span class="p" style="--h:58px;--d:4"></span>
  <span class="p" style="--h:42px;--d:5"></span>
</div>`,
    css: `.vl-cat-bar-lattice-flicker {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 27%, #1d5e87);
  border-radius: 14px;
  display: grid;
  gap: 7px;
  padding: 15px;
  grid-template-columns: repeat(6, 1fr);
  align-items: end;
  background: linear-gradient(186deg, #071c31, #0a2a42 64%, #040a14);
}
.vl-cat-bar-lattice-flicker .p {
  width: 10px;
  margin: 0 auto;
  border-radius: 6px;
  height: var(--h);
  background: color-mix(in srgb, var(--loader-accent) 26%, #dde5ee);
  animation: vl-cat-bar-lattice-flicker-wave calc(var(--loader-speed) * 1.15) ease-in-out infinite;
  animation-delay: calc(var(--d) * -0.09s);
}
@keyframes vl-cat-bar-lattice-flicker-wave { 0%, 100% { opacity: .2; transform: scaleY(.4); } 50% { opacity: 1; transform: scaleY(1); } }`
  },
  {
    id: 'shape-shard-ring',
    name: 'Shard Ring Shape',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Interlocked shards rotate around shared points in a geometric loop.',
    markup: `<div class="vl-cat-shape-shard-ring" role="img" aria-label="Shard ring shape">
  <span class="shard a"></span>
  <span class="shard b"></span>
  <span class="shard c"></span>
</div>`,
    css: `.vl-cat-shape-shard-ring {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #1d5e8a);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 17%, transparent), transparent 47%), linear-gradient(148deg, #081f36, #0e2f4b 61%, #050c14);
  overflow: hidden;
  position: relative;
}
.vl-cat-shape-shard-ring .shard {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 46px;
  height: 46px;
  margin: -23px;
  clip-path: polygon(50% 2%, 95% 43%, 95% 97%, 50% 60%, 5% 97%, 5% 43%);
  border: 2px solid color-mix(in srgb, var(--loader-accent) 72%, transparent);
}
.vl-cat-shape-shard-ring .a { animation: vl-cat-shape-shard-ring-rot calc(var(--loader-speed) * 1.5) linear infinite; }
.vl-cat-shape-shard-ring .b { animation: vl-cat-shape-shard-ring-rot2 calc(var(--loader-speed) * 1.5) linear infinite; border-style: dashed; }
.vl-cat-shape-shard-ring .c { width: 30px; height: 30px; margin: -15px; animation: vl-cat-shape-shard-ring-rot3 calc(var(--loader-speed) * 1.5) linear infinite; }
@keyframes vl-cat-shape-shard-ring-rot { 0% { transform: rotate(0deg) scale(1); } 50% { transform: rotate(180deg) scale(.65); } 100% { transform: rotate(360deg) scale(1); } }
@keyframes vl-cat-shape-shard-ring-rot2 { 0% { transform: rotate(360deg) scale(.8); } 50% { transform: rotate(180deg) scale(.65); } 100% { transform: rotate(0deg) scale(.8); } }
@keyframes vl-cat-shape-shard-ring-rot3 { 0% { transform: rotate(0deg); } 50% { transform: rotate(-180deg); } 100% { transform: rotate(-360deg); } }`
  },
  {
    id: 'button-flow-pulse',
    name: 'Flow Pulse Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A compact button shell with directional flow pulses and trailing nodes.',
    markup: `<div class="vl-cat-button-flow-pulse" role="img" aria-label="Flow pulse button">
  <span class="frame"></span>
  <span class="mark" style="--i:0"></span>
  <span class="mark" style="--i:1"></span>
  <span class="mark" style="--i:2"></span>
  <span class="mark" style="--i:3"></span>
</div>`,
    css: `.vl-cat-button-flow-pulse {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1e5f89);
  border-radius: 14px;
  background: linear-gradient(182deg, #071b2f, #0a2c44 63%, #040a14);
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
}
.vl-cat-button-flow-pulse .frame {
  width: 130px;
  height: 34px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 42%, transparent);
  border-radius: 10px;
  animation: vl-cat-button-flow-pulse-frame calc(var(--loader-speed) * 1.3) linear infinite;
}
.vl-cat-button-flow-pulse .mark {
  position: absolute;
  top: 50%;
  left: 28px;
  width: 8px;
  height: 8px;
  margin-top: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translateX(calc(var(--i) * 26px));
  animation: vl-cat-button-flow-pulse-node calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-cat-button-flow-pulse .mark:nth-child(3) { animation-delay: -.15s; }
.vl-cat-button-flow-pulse .mark:nth-child(4) { animation-delay: -.3s; }
.vl-cat-button-flow-pulse .mark:nth-child(5) { animation-delay: -.45s; }
@keyframes vl-cat-button-flow-pulse-frame { 0%, 100% { box-shadow: 0 0 0 transparent; opacity: .22; } 50% { box-shadow: 0 0 14px color-mix(in srgb, var(--loader-accent) 40%, transparent); opacity: 1; } }
@keyframes vl-cat-button-flow-pulse-node { 0%, 100% { transform: translateX(calc(var(--i) * 26px)) scale(.55); opacity: .2; } 50% { transform: translateX(calc(var(--i) * 26px)) scale(1.2); opacity: 1; } }`
  },
  {
    id: 'text-neon-banner',
    name: 'Neon Banner Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A banner wordmark with repeated neon streaks passing along its edge.',
    markup: `<div class="vl-cat-text-neon-banner" role="img" aria-label="Neon banner text">
  <span>SYNC STATE</span>
  <span class="band"></span>
</div>`,
    css: `.vl-cat-text-neon-banner {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #205f89);
  border-radius: 14px;
  background: linear-gradient(179deg, #061d34, #0a2b45 65%, #040a13);
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  color: color-mix(in srgb, var(--loader-accent) 82%, white 12%);
  font: 900 11px/1.2 system-ui, sans-serif;
  letter-spacing: .14em;
}
.vl-cat-text-neon-banner span { position: relative; z-index: 1; }
.vl-cat-text-neon-banner .band {
  position: absolute;
  height: 13px;
  left: -30px;
  right: -30px;
  top: 47px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 50%, transparent), transparent);
  animation: vl-cat-text-neon-banner-surge calc(var(--loader-speed) * 1.4) linear infinite;
}
@keyframes vl-cat-text-neon-banner-surge { 0% { transform: translateX(-220px); opacity: .2; } 50% { opacity: 1; } 100% { transform: translateX(220px); opacity: .2; } }`
  },
  {
    id: 'css3d-tetra-spin',
    name: 'Tetra Spin 3D',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'A three-sided tetra prism shifts along two axes with a central beat.',
    markup: `<div class="vl-cat-css3d-tetra-spin" role="img" aria-label="Tetra spin 3D">
  <span class="one"></span>
  <span class="two"></span>
  <span class="core"></span>
</div>`,
    css: `.vl-cat-css3d-tetra-spin {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f638a);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 54%, color-mix(in srgb, var(--loader-accent) 14%, transparent), transparent 47%), linear-gradient(166deg, #081f36, #0f304f 61%, #050c14);
  position: relative;
  perspective: 690px;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.vl-cat-css3d-tetra-spin span {
  position: absolute;
  width: 58px;
  height: 58px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 72%, transparent);
  transform-style: preserve-3d;
  animation: vl-cat-css3d-tetra-spin-face calc(var(--loader-speed) * 1.3) linear infinite;
}
.vl-cat-css3d-tetra-spin .two { width: 44px; height: 44px; border-style: dashed; animation-direction: reverse; }
.vl-cat-css3d-tetra-spin .core {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-css3d-tetra-spin-core calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-cat-css3d-tetra-spin-face { 0% { transform: rotateX(20deg) rotateZ(0deg); } 50% { transform: rotateX(80deg) rotateZ(180deg); } 100% { transform: rotateX(140deg) rotateZ(360deg); } }
@keyframes vl-cat-css3d-tetra-spin-core { 0%, 100% { transform: scale(.55); opacity: .3; } 50% { transform: scale(1.15); opacity: 1; } }`
  },
  {
    id: 'svg-twist-segment',
    name: 'Twist Segment SVG',
    category: 'SVG',
    tech: 'SVG',
    description: 'A segmented twist motif pulses in a narrow wave with offset delays.',
    markup: `<div class="vl-cat-svg-twist-segment" role="img" aria-label="Twist segment SVG">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>`,
    css: `.vl-cat-svg-twist-segment {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1e5f8a);
  border-radius: 14px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(178deg, #071c33, #0a2d46 61%, #040a13);
}
.vl-cat-svg-twist-segment span {
  width: 15px;
  height: 30px;
  border-radius: 6px;
  transform: skewX(-16deg);
  background: color-mix(in srgb, var(--loader-accent) 83%, #fff 10%);
  animation: vl-cat-svg-twist-segment-flow calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-cat-svg-twist-segment span:nth-child(2) { animation-delay: -.1s; }
.vl-cat-svg-twist-segment span:nth-child(3) { animation-delay: -.2s; }
.vl-cat-svg-twist-segment span:nth-child(4) { animation-delay: -.3s; }
@keyframes vl-cat-svg-twist-segment-flow { 0%, 100% { transform: skewX(-16deg) scaleY(.4); opacity: .2; } 50% { transform: skewX(-16deg) scaleY(1); opacity: 1; } }`
  },
  {
    id: 'progress-pulse-pinnacle',
    name: 'Pulse Pinnacle Progress',
    category: 'Progress',
    tech: 'CSS',
    description: 'A pinnacle shape moves through stacked bars to express advancing checkpoints.',
    markup: `<div class="vl-cat-progress-pulse-pinnacle" role="img" aria-label="Pulse pinnacle progress">
  <span></span><span></span><span></span><span></span>
</div>`,
    css: `.vl-cat-progress-pulse-pinnacle {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5f8a);
  border-radius: 14px;
  background: linear-gradient(176deg, #071d33, #0a2b46 61%, #040a14);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  padding: 16px;
  align-items: end;
}
.vl-cat-progress-pulse-pinnacle span {
  height: 100%;
  border-radius: 7px;
  background: color-mix(in srgb, var(--loader-accent) 17%, #dce5ee);
  position: relative;
  overflow: hidden;
}
.vl-cat-progress-pulse-pinnacle span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateY(120%);
  background: linear-gradient(180deg, transparent, var(--loader-accent), transparent);
  animation: vl-cat-progress-pulse-pinnacle-surge calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-cat-progress-pulse-pinnacle span:nth-child(2)::after { animation-delay: -.2s; }
.vl-cat-progress-pulse-pinnacle span:nth-child(3)::after { animation-delay: -.4s; }
.vl-cat-progress-pulse-pinnacle span:nth-child(4)::after { animation-delay: -.6s; }
@keyframes vl-cat-progress-pulse-pinnacle-surge { 0% { transform: translateY(120%); } 50% { transform: translateY(-120%); } 100% { transform: translateY(120%); } }`
  },
  {
    id: 'chart-helix-lattice',
    name: 'Helix Lattice Chart',
    category: 'Charts',
    tech: 'CSS',
    description: 'Vertical columns pulse as a helix-like lattice to imply layered chart states.',
    markup: `<div class="vl-cat-chart-helix-lattice" role="img" aria-label="Helix lattice chart">
  <span></span><span></span><span></span><span></span>
</div>`,
    css: `.vl-cat-chart-helix-lattice {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1e5e8b);
  border-radius: 14px;
  background: linear-gradient(177deg, #071d34, #0a2943 61%, #040a13);
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 9px;
  padding: 16px;
}
.vl-cat-chart-helix-lattice span {
  height: 40px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--loader-accent) 18%, #dce6f0);
  position: relative;
  overflow: hidden;
}
.vl-cat-chart-helix-lattice span::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 80%, #fff 10%), transparent);
  animation: vl-cat-chart-helix-lattice-lift calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
.vl-cat-chart-helix-lattice span:nth-child(2)::after { animation-delay: -.16s; }
.vl-cat-chart-helix-lattice span:nth-child(3)::after { animation-delay: -.32s; }
.vl-cat-chart-helix-lattice span:nth-child(4)::after { animation-delay: -.48s; }
@keyframes vl-cat-chart-helix-lattice-lift { 0%, 100% { transform: translateY(110%); } 50% { transform: translateY(-110%); } }`
  },
  {
    id: 'map-quad-grid-wave',
    name: 'Quad Grid Wave Map',
    category: 'Maps',
    tech: 'CSS',
    description: 'A map-like quad grid pulses in layered wave shifts.',
    markup: `<div class="vl-cat-map-quad-grid-wave" role="img" aria-label="Quad grid wave map">
  <span class="row r1"></span>
  <span class="row r2"></span>
  <span class="row r3"></span>
  <span class="row r4"></span>
</div>`,
    css: `.vl-cat-map-quad-grid-wave {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1e6189);
  border-radius: 14px;
  background: linear-gradient(152deg, #061b2f, #0a2a45 61%, #040a14);
  padding: 13px;
  display: grid;
  gap: 9px;
  align-content: center;
}
.vl-cat-map-quad-grid-wave .row {
  height: 8px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 18%, #dbe7ef);
  position: relative;
  overflow: hidden;
}
.vl-cat-map-quad-grid-wave .row::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, var(--loader-accent), transparent);
  animation: vl-cat-map-quad-grid-wave-ride calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
.vl-cat-map-quad-grid-wave .r2::after { animation-delay: -.18s; }
.vl-cat-map-quad-grid-wave .r3::after { animation-delay: -.36s; }
.vl-cat-map-quad-grid-wave .r4::after { animation-delay: -.54s; }
@keyframes vl-cat-map-quad-grid-wave-ride { 0% { transform: translateX(-110%); opacity: .2; } 50% { transform: translateX(110%); opacity: 1; } 100% { transform: translateX(110%); opacity: .2; } }`
  },
  {
    id: 'skeleton-panel-wave',
    name: 'Panel Wave Skeleton',
    category: 'Skeletons',
    tech: 'Vanilla CSS',
    description: 'Panel blocks fade and pulse in alternating waves across a lightweight layout.',
    markup: `<div class="vl-cat-skeleton-panel-wave" role="img" aria-label="Panel wave skeleton">
  <span class="panel a"></span>
  <span class="panel b"></span>
  <span class="panel c"></span>
  <span class="panel b"></span>
</div>`,
    css: `.vl-cat-skeleton-panel-wave {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #d9e5ef);
  border-radius: 14px;
  padding: 13px;
  display: grid;
  gap: 8px;
  background: #fff;
}
.vl-cat-skeleton-panel-wave .panel {
  height: 12px;
  border-radius: 7px;
  position: relative;
  overflow: hidden;
  background: #e8edf6;
}
.vl-cat-skeleton-panel-wave .a { width: 85%; }
.vl-cat-skeleton-panel-wave .b { width: 100%; }
.vl-cat-skeleton-panel-wave .c { width: 62%; }
.vl-cat-skeleton-panel-wave .panel::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.9), transparent);
  animation: vl-cat-skeleton-panel-wave-shimmer calc(var(--loader-speed) * 1.25) linear infinite;
}
.vl-cat-skeleton-panel-wave .panel:nth-child(2)::after { animation-delay: -.2s; }
.vl-cat-skeleton-panel-wave .panel:nth-child(3)::after { animation-delay: -.4s; }
.vl-cat-skeleton-panel-wave .panel:nth-child(4)::after { animation-delay: -.6s; }
@keyframes vl-cat-skeleton-panel-wave-shimmer { 0% { transform: translateX(-110%); } 50% { transform: translateX(110%); } 100% { transform: translateX(110%); } }`
  },
  {
    id: 'operation-stream-lattice',
    name: 'Stream Lattice Operations',
    category: 'Operations',
    tech: 'CSS',
    description: 'Streaming lattice nodes pulse as a central bar alternates energy.',
    markup: `<div class="vl-cat-operation-stream-lattice" role="img" aria-label="Stream lattice operations">
  <span class="stream"></span>
  <span class="p" style="--x:38px;--d:0"></span>
  <span class="p" style="--x:88px;--d:1"></span>
  <span class="p" style="--x:138px;--d:2"></span>
</div>`,
    css: `.vl-cat-operation-stream-lattice {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f5e8a);
  border-radius: 14px;
  background: linear-gradient(164deg, #071a30, #0b2d45 64%, #040a13);
  position: relative;
  overflow: hidden;
}
.vl-cat-operation-stream-lattice .stream {
  position: absolute;
  left: 26px;
  right: 26px;
  top: 50%;
  height: 7px;
  margin-top: -3px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 28%, #dce5ef);
  animation: vl-cat-operation-stream-lattice-bar calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-cat-operation-stream-lattice .p {
  position: absolute;
  top: 50%;
  left: var(--x);
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-operation-stream-lattice-node calc(var(--loader-speed) * 1.2) ease-in-out infinite;
  animation-delay: calc(var(--d) * -0.2s);
}
@keyframes vl-cat-operation-stream-lattice-bar { 0%, 100% { opacity: .24; } 50% { opacity: 1; } }
@keyframes vl-cat-operation-stream-lattice-node { 0%, 100% { transform: scale(.5); opacity: .2; } 50% { transform: scale(1.25); opacity: 1; } }`
  },
  {
    id: 'matrix-cascade-omega-loop',
    name: 'Cascade Omega Loop Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A looping omega arc drives a cascade of radial matrix nodes.',
    markup: `<div class="vl-cat-matrix-cascade-omega-loop" role="img" aria-label="Cascade omega loop matrix">
  <span class="core"></span>
  <span class="ring" style="--i:0"></span>
  <span class="ring" style="--i:1"></span>
  <span class="ring" style="--i:2"></span>
  <span class="ring" style="--i:3"></span>
</div>`,
    css: `.vl-cat-matrix-cascade-omega-loop {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6288);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 16%, transparent), transparent 44%), linear-gradient(172deg, #061c33, #0b2942 63%, #040a14);
  position: relative;
  overflow: hidden;
}
.vl-cat-matrix-cascade-omega-loop .core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 11px;
  height: 11px;
  margin: -5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, white 10%);
  animation: vl-cat-matrix-cascade-omega-loop-core calc(var(--loader-speed) * 1.2) linear infinite;
}
.vl-cat-matrix-cascade-omega-loop .ring {
  position: absolute;
  width: 12px;
  height: 12px;
  left: 50%;
  top: 50%;
  margin: -6px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 70%, transparent);
  transform: rotate(calc(var(--i) * 90deg)) translateY(-22px);
  animation: vl-cat-matrix-cascade-omega-loop-node calc(var(--loader-speed) * 1.15) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.2s);
}
.vl-cat-matrix-cascade-omega-loop .ring:nth-child(3) { border-style: dashed; transform: rotate(40deg) translateY(-31px); }
.vl-cat-matrix-cascade-omega-loop .ring:nth-child(4) { transform: rotate(80deg) translateY(-22px); animation-duration: calc(var(--loader-speed) * 0.85); }
.vl-cat-matrix-cascade-omega-loop .ring:nth-child(5) { transform: rotate(120deg) translateY(-34px); animation-direction: reverse; }
@keyframes vl-cat-matrix-cascade-omega-loop-core { 0%, 100% { transform: scale(.65); opacity: .35; } 50% { transform: scale(1.1); opacity: 1; } }
@keyframes vl-cat-matrix-cascade-omega-loop-node { 0%, 100% { transform: rotate(calc(var(--i) * 90deg)) translateY(-22px) scale(.5); opacity: .2; } 50% { transform: rotate(calc(var(--i) * 90deg + 180deg)) translateY(-16px) scale(1); opacity: 1; } }`
  },
  {
    id: 'common-ui-shell-drift',
    name: 'Common Shell Drift',
    category: 'Common UI',
    tech: 'CSS',
    description: 'A compact shell drifts with node pulses for generic UI loading states.',
    markup: `<div class="vl-cat-common-ui-shell-drift" role="img" aria-label="Common shell drift">
  <span class="board"></span>
  <span class="spark" style="--x:28px;--y:26px"></span>
  <span class="spark" style="--x:72px;--y:45px"></span>
  <span class="spark" style="--x:116px;--y:34px"></span>
  <span class="spark" style="--x:160px;--y:58px"></span>
</div>`,
    css: `.vl-cat-common-ui-shell-drift {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #dce5ef);
  border-radius: 14px;
  background: #fff;
  position: relative;
  overflow: hidden;
}
.vl-cat-common-ui-shell-drift .board {
  position: absolute;
  inset: 12px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #d9e3ee);
  border-radius: 10px;
}
.vl-cat-common-ui-shell-drift .spark {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-common-ui-shell-drift-spark calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-cat-common-ui-shell-drift .spark:nth-child(3) { animation-delay: -.18s; }
.vl-cat-common-ui-shell-drift .spark:nth-child(4) { animation-delay: -.36s; }
.vl-cat-common-ui-shell-drift .spark:nth-child(5) { animation-delay: -.54s; }
.vl-cat-common-ui-shell-drift .spark:nth-child(6) { animation-delay: -.72s; }
@keyframes vl-cat-common-ui-shell-drift-spark { 0%, 100% { opacity: .2; transform: scale(.55); } 50% { opacity: 1; transform: scale(1.25); } }`
  },
  {
    id: 'application-fiber-stream',
    name: 'Fiber Stream Application',
    category: 'Application',
    tech: 'CSS',
    description: 'An application shell with two fiber streams and a central sync pulse.',
    markup: `<div class="vl-cat-application-fiber-stream" role="img" aria-label="Fiber stream application">
  <span class="frame"></span>
  <span class="fiber a"></span>
  <span class="fiber b"></span>
  <span class="node"></span>
</div>`,
    css: `.vl-cat-application-fiber-stream {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 21%, #1e5f88);
  border-radius: 14px;
  background: #fff;
  position: relative;
  overflow: hidden;
}
.vl-cat-application-fiber-stream .frame {
  position: absolute;
  left: 15px;
  right: 15px;
  top: 30px;
  height: 30px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #dbe6f2);
  border-radius: 9px;
}
.vl-cat-application-fiber-stream .fiber {
  position: absolute;
  width: 8px;
  height: 8px;
  top: 50%;
  border-radius: 50%;
  margin-top: -4px;
  left: 50%;
  animation: vl-cat-application-fiber-stream-fiber calc(var(--loader-speed) * 1.5) linear infinite;
}
.vl-cat-application-fiber-stream .a { animation-delay: -.3s; }
.vl-cat-application-fiber-stream .b { animation-delay: -.6s; }
.vl-cat-application-fiber-stream .node {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, white 10%);
  animation: vl-cat-application-fiber-stream-node calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
@keyframes vl-cat-application-fiber-stream-fiber { 0% { transform: rotate(0deg) translateX(28px); } 50% { transform: rotate(180deg) translateX(18px); } 100% { transform: rotate(360deg) translateX(28px); } }
@keyframes vl-cat-application-fiber-stream-node { 0%, 100% { transform: scale(.55); opacity: .3; } 50% { transform: scale(1.2); opacity: 1; } }`
  },
  {
    id: 'holographic-prism-halo',
    name: 'Prism Halo Holographic',
    category: 'Holographic',
    tech: 'CSS',
    description: 'A prism halo rotates with layered glow facets in a compact holographic field.',
    markup: `<div class="vl-cat-holographic-prism-halo" role="img" aria-label="Prism halo holographic">
  <span class="facet a"></span>
  <span class="facet b"></span>
  <span class="facet c"></span>
  <span class="core"></span>
</div>`,
    css: `.vl-cat-holographic-prism-halo {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5e87);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 16%, transparent), transparent 45%), linear-gradient(166deg, #081d37, #0f324c 60%, #050d14);
  position: relative;
  overflow: hidden;
}
.vl-cat-holographic-prism-halo .facet {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70px;
  height: 10px;
  margin: -5px 0 0 -35px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 34%, transparent);
  transform-origin: center;
  animation: vl-cat-holographic-prism-halo-facet calc(var(--loader-speed) * 1.5) linear infinite;
}
.vl-cat-holographic-prism-halo .b { animation-delay: -.3s; width: 58px; margin-left: -29px; }
.vl-cat-holographic-prism-halo .c { animation-delay: -.6s; width: 46px; margin-left: -23px; }
.vl-cat-holographic-prism-halo .core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 11px;
  height: 11px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 16px var(--loader-accent);
  animation: vl-cat-holographic-prism-halo-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-cat-holographic-prism-halo-facet { 0% { transform: translate(-50%, -50%) rotate(0deg) scale(.6); } 50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.05); } 100% { transform: translate(-50%, -50%) rotate(360deg) scale(.6); } }
@keyframes vl-cat-holographic-prism-halo-core { 0%, 100% { transform: scale(.6); opacity: .35; } 50% { transform: scale(1.15); opacity: 1; } }`
  }  ,
  {
    id: 'spinner-quantum-gyration',
    name: 'Quantum Gyration Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Concentric spinner rings orbit with phase-shifted speeds to evoke a quantum lockstep.',
    markup: `<div class="vl-cat-spinner-quantum-gyration" role="img" aria-label="Quantum gyration spinner">
  <span class="ring a"></span>
  <span class="ring b"></span>
  <span class="ring c"></span>
</div>`,
    css: `.vl-cat-spinner-quantum-gyration {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #215b8a);
  border-radius: 14px;
  background: linear-gradient(172deg, #071f35, #0c2e4a 62%, #040a14);
  position: relative;
  overflow: hidden;
}
.vl-cat-spinner-quantum-gyration .ring {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 60%, transparent);
  transform: translate(-50%, -50%);
  animation: vl-cat-spinner-quantum-gyration-spin calc(var(--loader-speed) * 1.2) linear infinite;
}
.vl-cat-spinner-quantum-gyration .a { width: 58px; height: 58px; animation-duration: calc(var(--loader-speed) * 1.1); }
.vl-cat-spinner-quantum-gyration .b { width: 44px; height: 44px; border-style: dashed; animation-duration: calc(var(--loader-speed) * 0.9); animation-direction: reverse; }
.vl-cat-spinner-quantum-gyration .c { width: 30px; height: 30px; border-style: solid; animation-duration: calc(var(--loader-speed) * 1.35); border-width: 1.5px; }
@keyframes vl-cat-spinner-quantum-gyration-spin {
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(0.82); opacity: .3; }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1); opacity: 1; }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(0.82); opacity: .3; }
}`
  },
  {
    id: 'dot-trochoid-lattice',
    name: 'Trochoid Dot Lattice',
    category: 'Dots',
    tech: 'CSS',
    description: 'Dots phase through a looping trochoid lattice with subtle trailing scale pulses.',
    markup: `<div class="vl-cat-dot-trochoid-lattice" role="img" aria-label="Trochoid dot lattice">
  <span style="--i:0"></span>
  <span style="--i:1"></span>
  <span style="--i:2"></span>
  <span style="--i:3"></span>
  <span style="--i:4"></span>
</div>`,
    css: `.vl-cat-dot-trochoid-lattice {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1f5b8a);
  border-radius: 14px;
  background: linear-gradient(166deg, #061b2d, #0b2843 64%, #040a13);
  position: relative;
  display: grid;
  place-items: center;
}
.vl-cat-dot-trochoid-lattice span {
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  margin: -4px;
  background: color-mix(in srgb, var(--loader-accent) 95%, #fff 5%);
  animation: vl-cat-dot-trochoid-lattice-pulse calc(var(--loader-speed) * 1.25) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.13s);
  transform: rotate(calc(var(--i) * 72deg)) translateX(24px);
}
@keyframes vl-cat-dot-trochoid-lattice-pulse {
  0%, 100% { transform: rotate(calc(var(--i) * 72deg)) translateX(24px) scale(.44); opacity: .18; }
  50% { transform: rotate(calc(var(--i) * 72deg)) translateX(18px) scale(1.05); opacity: 1; }
}`
  },
  {
    id: 'bar-helix-wave-lattice',
    name: 'Helix Wave Lattice Bars',
    category: 'Bars',
    tech: 'CSS',
    description: 'Bars rise and phase across a compact helical waveform.',
    markup: `<div class="vl-cat-bar-helix-wave-lattice" role="img" aria-label="Helix wave bars">
  <span style="--d:0"></span>
  <span style="--d:1"></span>
  <span style="--d:2"></span>
  <span style="--d:3"></span>
  <span style="--d:4"></span>
  <span style="--d:5"></span>
</div>`,
    css: `.vl-cat-bar-helix-wave-lattice {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 27%, #1d5e87);
  border-radius: 14px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: end;
  padding: 14px;
  gap: 8px;
  background: linear-gradient(186deg, #071c31, #0a2a42 64%, #040a14);
}
.vl-cat-bar-helix-wave-lattice span {
  display: block;
  width: 10px;
  border-radius: 6px;
  margin: 0 auto;
  height: calc(14px + var(--d) * 5px);
  background: color-mix(in srgb, var(--loader-accent) 25%, #dce8f8);
  animation: vl-cat-bar-helix-wave-lattice-wave calc(var(--loader-speed) * 1.1) ease-in-out infinite;
  animation-delay: calc(var(--d) * -0.11s);
}
@keyframes vl-cat-bar-helix-wave-lattice-wave {
  0%, 100% { transform: scaleY(.45); opacity: .24; }
  50% { transform: scaleY(1); opacity: 1; }
}`
  },
  {
    id: 'shape-lenticular-ring',
    name: 'Lenticular Ring Shape',
    category: 'Shapes',
    tech: 'CSS',
    description: 'A lens-like ring compresses and expands around stacked arcs.',
    markup: `<div class="vl-cat-shape-lenticular-ring" role="img" aria-label="Lenticular ring shape">
  <span class="orbit"></span>
  <span class="orbit b"></span>
  <span class="dot"></span>
</div>`,
    css: `.vl-cat-shape-lenticular-ring {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #1d5e8a);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 18%, transparent), transparent 46%), linear-gradient(148deg, #081f36, #0e2f4b 61%, #050c14);
  position: relative;
  overflow: hidden;
}
.vl-cat-shape-lenticular-ring .orbit {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 66px;
  height: 42px;
  margin: -21px;
  border-radius: 45%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 68%, transparent);
  transform: translate(-50%, -50%) rotate(0deg);
  animation: vl-cat-shape-lenticular-ring-orbit calc(var(--loader-speed) * 1.2) linear infinite;
}
.vl-cat-shape-lenticular-ring .b { width: 50px; height: 50px; border-style: dashed; animation-direction: reverse; animation-duration: calc(var(--loader-speed) * 1.45); }
.vl-cat-shape-lenticular-ring .dot {
  position: absolute;
  width: 10px;
  height: 10px;
  left: 50%;
  top: 50%;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translate(-50%, -50%);
  animation: vl-cat-shape-lenticular-ring-dot calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
@keyframes vl-cat-shape-lenticular-ring-orbit {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(0.84); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes vl-cat-shape-lenticular-ring-dot {
  0%, 100% { opacity: .3; transform: translate(-50%, -50%) scale(.6); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
}`
  },
  {
    id: 'button-ribbon-pulse',
    name: 'Ribbon Pulse Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A ribbon button edge pulses from center in two mirrored arcs.',
    markup: `<div class="vl-cat-button-ribbon-pulse" role="img" aria-label="Ribbon pulse button">
  <span class="plate"></span>
  <span class="line a"></span>
  <span class="line b"></span>
</div>`,
    css: `.vl-cat-button-ribbon-pulse {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1e5f89);
  border-radius: 14px;
  background: linear-gradient(182deg, #071b2f, #0a2c44 63%, #040a14);
  position: relative;
  display: grid;
  place-items: center;
}
.vl-cat-button-ribbon-pulse .plate {
  width: 132px;
  height: 36px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 42%, transparent);
  border-radius: 11px;
}
.vl-cat-button-ribbon-pulse .line {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 82px;
  height: 6px;
  margin-left: -41px;
  margin-top: -3px;
  border-radius: 5px;
  background: color-mix(in srgb, var(--loader-accent) 25%, white 65%);
  animation: vl-cat-button-ribbon-pulse-rail calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
.vl-cat-button-ribbon-pulse .a { transform: translateY(-7px); }
.vl-cat-button-ribbon-pulse .b { transform: translateY(7px); animation-delay: -.35s; }
@keyframes vl-cat-button-ribbon-pulse-rail {
  0%, 100% { opacity: .2; transform: translateY(var(--y, -7px)) scaleX(.6); }
  50% { opacity: 1; transform: translateY(var(--y, -7px)) scaleX(1.1); }
}
  }`,
  },
  {
    id: 'common-ui-shell-orbit',
    name: 'Shell Orbit Common UI',
    category: 'Common UI',
    tech: 'CSS',
    description: 'A control-shell border carries rotating markers around four anchor points.',
    markup: `<div class="vl-cat-common-ui-shell-orbit" role="img" aria-label="Shell orbit control panel">
  <span class="ring"></span>
  <span class="marker" style="--i:0"></span>
  <span class="marker" style="--i:1"></span>
  <span class="marker" style="--i:2"></span>
</div>`,
    css: `.vl-cat-common-ui-shell-orbit {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 21%, #204f7e);
  border-radius: 14px;
  background: linear-gradient(174deg, #081a2e, #0b2f49 63%, #040a13);
  position: relative;
  overflow: hidden;
}
.vl-cat-common-ui-shell-orbit .ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 72px;
  height: 72px;
  margin: -36px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 46%, transparent);
  animation: vl-cat-common-ui-shell-orbit-spin calc(var(--loader-speed) * 1.4) linear infinite;
}
.vl-cat-common-ui-shell-orbit .marker {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: rotate(calc(var(--i) * 120deg)) translateY(-32px);
  animation: vl-cat-common-ui-shell-orbit-mark calc(var(--loader-speed) * 1.2) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.15s);
}
@keyframes vl-cat-common-ui-shell-orbit-spin { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
@keyframes vl-cat-common-ui-shell-orbit-mark { 0%, 100% { transform: rotate(calc(var(--i) * 120deg)) translateY(-32px) scale(.6); opacity: .2; } 50% { transform: rotate(calc(var(--i) * 120deg)) translateY(-24px) scale(1.15); opacity: 1; } }`
  },
  {
    id: 'text-wave-cursor-track',
    name: 'Wave Cursor Text',
    category: 'Text',
    tech: 'CSS',
    description: 'A single word marker travels on a sine wave with trailing ghost copies.',
    markup: `<div class="vl-cat-text-wave-cursor-track" role="img" aria-label="Wave cursor text loader">
  <span class="track a">Loading</span>
  <span class="track b">Loading</span>
  <span class="track c">Loading</span>
</div>`,
    css: `.vl-cat-text-wave-cursor-track {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #20557f);
  border-radius: 14px;
  background: linear-gradient(160deg, #071a2d, #0a2b45 63%, #040a14);
  display: grid;
  place-items: center;
  font-size: 14px;
  letter-spacing: 1px;
  color: color-mix(in srgb, var(--loader-accent) 70%, #dbe8f7);
  text-transform: uppercase;
}
.vl-cat-text-wave-cursor-track .track {
  position: absolute;
  left: 16px;
  animation: vl-cat-text-wave-cursor-track-wave calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
.vl-cat-text-wave-cursor-track .a { animation-delay: 0s; }
.vl-cat-text-wave-cursor-track .b { animation-delay: -.4s; opacity: .75; }
.vl-cat-text-wave-cursor-track .c { animation-delay: -.8s; opacity: .55; }
@keyframes vl-cat-text-wave-cursor-track-wave {
  0%, 100% { transform: translateX(-58px); opacity: .2; }
  50% { transform: translateX(58px); opacity: 1; }
}`
  },
  {
    id: 'css3d-twist-prism',
    name: 'Twist Prism CSS3D',
    category: 'CSS 3D',
    tech: 'CSS',
    description: 'A slim prism stack twists in depth with alternating rotational directions.',
    markup: `<div class="vl-cat-css3d-twist-prism" role="img" aria-label="Twist prism css 3d">
  <span class="layer l1"></span>
  <span class="layer l2"></span>
  <span class="layer l3"></span>
</div>`,
    css: `.vl-cat-css3d-twist-prism {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5b89);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 16%, transparent), transparent 46%), linear-gradient(168deg, #071b30, #0b2b45 63%, #040a14);
  position: relative;
  perspective: 220px;
  transform-style: preserve-3d;
  overflow: hidden;
}
.vl-cat-css3d-twist-prism .layer {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 90px;
  height: 16px;
  margin: -8px 0 0 -45px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--loader-accent) 70%, transparent);
  box-shadow: 0 0 14px color-mix(in srgb, var(--loader-accent) 60%, transparent);
  transform-origin: center;
  animation: vl-cat-css3d-twist-prism-twist calc(var(--loader-speed) * 1.2) linear infinite;
}
.vl-cat-css3d-twist-prism .l1 { animation-duration: calc(var(--loader-speed) * 1.1); }
.vl-cat-css3d-twist-prism .l2 { width: 70px; margin-left: -35px; animation-direction: reverse; animation-duration: calc(var(--loader-speed) * 0.9); }
.vl-cat-css3d-twist-prism .l3 { width: 50px; margin-left: -25px; animation-duration: calc(var(--loader-speed) * 1.3); }
@keyframes vl-cat-css3d-twist-prism-twist {
  0% { transform: translate(-50%, -50%) rotateX(60deg) rotateZ(0deg) scaleX(1); }
  50% { transform: translate(-50%, -50%) rotateX(-30deg) rotateZ(180deg) scaleX(0.68); }
  100% { transform: translate(-50%, -50%) rotateX(60deg) rotateZ(360deg) scaleX(1); }
}`
  },
  {
    id: 'svg-orbit-stitcher',
    name: 'Orbit Stitcher SVG',
    category: 'SVG',
    tech: 'SVG',
    description: 'An inline SVG knot stitches in and out with synchronized orbit circles.',
    markup: `<div class="vl-cat-svg-orbit-stitcher" role="img" aria-label="Orbit stitcher svg">
  <svg viewBox="0 0 120 65" xmlns="http://www.w3.org/2000/svg">
    <circle class="ring" cx="60" cy="32.5" r="22"></circle>
    <circle class="sat" cx="60" cy="18" r="3.5"></circle>
    <circle class="sat" cx="60" cy="50" r="3.5"></circle>
    <circle class="sat" cx="46" cy="32.5" r="3.5"></circle>
    <circle class="sat" cx="74" cy="32.5" r="3.5"></circle>
    <path class="stitch" d="M60 10C78 18 78 47 60 55C42 47 42 18 60 10Z"></path>
  </svg>
</div>`,
    css: `.vl-cat-svg-orbit-stitcher {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1e5f89);
  border-radius: 14px;
  background: linear-gradient(180deg, #071c32, #0b2e4b 63%, #040a14);
  display: grid;
  place-items: center;
}
.vl-cat-svg-orbit-stitcher svg { width: 112px; height: 64px; overflow: visible; }
.vl-cat-svg-orbit-stitcher .ring {
  fill: none;
  stroke: color-mix(in srgb, var(--loader-accent) 26%, #dee8f3);
  stroke-width: 2px;
  opacity: .35;
}
.vl-cat-svg-orbit-stitcher .sat {
  fill: var(--loader-accent);
  animation: vl-cat-svg-orbit-stitcher-sat calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-cat-svg-orbit-stitcher .stitch {
  fill: none;
  stroke: color-mix(in srgb, var(--loader-accent) 62%, #fff 10%);
  stroke-width: 1.6px;
  stroke-linecap: round;
  animation: vl-cat-svg-orbit-stitcher-stitch calc(var(--loader-speed) * 1.1) linear infinite;
}
@keyframes vl-cat-svg-orbit-stitcher-sat { 0%,100% { transform: scale(0.7); opacity:.3; } 50% { transform: scale(1.2); opacity:1; } }
@keyframes vl-cat-svg-orbit-stitcher-stitch { 0% { stroke-dashoffset: 130; } 50% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -130; } }`
  },
  {
    id: 'progress-scan-cascade',
    name: 'Scan Cascade Progress',
    category: 'Progress',
    tech: 'CSS',
    description: 'A progress bar fills and drains in cascading scan segments.',
    markup: `<div class="vl-cat-progress-scan-cascade" role="img" aria-label="Scan cascade progress">
  <span class="bar"></span>
  <span class="bar b"></span>
  <span class="bar c"></span>
</div>`,
    css: `.vl-cat-progress-scan-cascade {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1c5c8b);
  border-radius: 14px;
  background: linear-gradient(190deg, #071b2e, #0a2d45 62%, #040a14);
  display: grid;
  align-items: center;
  padding: 0 16px;
  gap: 10px;
}
.vl-cat-progress-scan-cascade .bar {
  display: block;
  height: 9px;
  border-radius: 8px;
  width: 100%;
  margin-top: 0;
  background: color-mix(in srgb, var(--loader-accent) 14%, transparent);
  position: relative;
  overflow: hidden;
}
.vl-cat-progress-scan-cascade .bar::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--loader-accent);
  width: 34%;
  border-radius: 8px;
  transform: translateX(-120%);
  animation: vl-cat-progress-scan-cascade-fill calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-cat-progress-scan-cascade .b::after { animation-delay: -.2s; }
.vl-cat-progress-scan-cascade .c::after { animation-delay: -.4s; }
@keyframes vl-cat-progress-scan-cascade-fill {
  0%, 100% { transform: translateX(-120%); }
  50% { transform: translateX(260%); }
}`
  },
  {
    id: 'chart-wave-grid',
    name: 'Wave Grid Chart',
    category: 'Charts',
    tech: 'CSS',
    description: 'A tiny chart grid with two wavelike data strokes in motion.',
    markup: `<div class="vl-cat-chart-wave-grid" role="img" aria-label="Wave grid chart">
  <span class="axis x"></span>
  <span class="axis y"></span>
  <span class="dot a"></span>
  <span class="dot b"></span>
  <span class="line"></span>
</div>`,
    css: `.vl-cat-chart-wave-grid {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 20%, #1f5f89);
  border-radius: 14px;
  background: linear-gradient(155deg, #061e33, #0b2f48 63%, #040a14);
  position: relative;
  overflow: hidden;
}
.vl-cat-chart-wave-grid .axis {
  position: absolute;
  background: color-mix(in srgb, var(--loader-accent) 28%, transparent);
}
.vl-cat-chart-wave-grid .x { left: 12px; right: 12px; bottom: 19px; height: 1px; }
.vl-cat-chart-wave-grid .y { left: 16px; top: 18px; bottom: 18px; width: 1px; }
.vl-cat-chart-wave-grid .line {
  position: absolute;
  left: 16px;
  top: 46px;
  right: 16px;
  height: 2px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 62%, white 10%);
  transform-origin: left center;
  animation: vl-cat-chart-wave-grid-line calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-cat-chart-wave-grid .dot {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--loader-accent);
  top: 46px;
  animation: vl-cat-chart-wave-grid-dot calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-cat-chart-wave-grid .a { left: 34px; }
.vl-cat-chart-wave-grid .b { left: 138px; animation-delay: -.3s; }
@keyframes vl-cat-chart-wave-grid-line { 0%,100% { transform: scaleX(.35); opacity:.3; } 50% { transform: scaleX(1); opacity:1; } }
@keyframes vl-cat-chart-wave-grid-dot { 0%,100% { transform: translateY(0); opacity:.2; } 50% { transform: translateY(-18px); opacity:1; } }`
  },
  {
    id: 'map-neural-route',
    name: 'Neural Route Map',
    category: 'Maps',
    tech: 'CSS',
    description: 'A route path pulses like a scanning network route overlay.',
    markup: `<div class="vl-cat-map-neural-route" role="img" aria-label="Neural route map">
  <span class="dot d1"></span>
  <span class="dot d2"></span>
  <span class="dot d3"></span>
  <span class="trace"></span>
</div>`,
    css: `.vl-cat-map-neural-route {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d5d8c);
  border-radius: 14px;
  background: radial-gradient(circle at 52% 52%, color-mix(in srgb, var(--loader-accent) 12%, transparent), transparent 58%), linear-gradient(170deg, #071b2f, #0a2f4a 62%, #040a14);
  position: relative;
  overflow: hidden;
}
.vl-cat-map-neural-route .trace {
  position: absolute;
  left: 22px;
  top: 24px;
  width: 118px;
  height: 60px;
  border-radius: 34px;
  border: 1px dashed color-mix(in srgb, var(--loader-accent) 36%, transparent);
  animation: vl-cat-map-neural-route-trace calc(var(--loader-speed) * 1.4) linear infinite;
}
.vl-cat-map-neural-route .dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
  top: 50%;
  animation: vl-cat-map-neural-route-dot calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-cat-map-neural-route .d1 { left: 38px; animation-delay: 0s; }
.vl-cat-map-neural-route .d2 { left: 88px; animation-delay: -.25s; }
.vl-cat-map-neural-route .d3 { left: 138px; animation-delay: -.5s; }
@keyframes vl-cat-map-neural-route-trace { 0% { border-color: color-mix(in srgb, var(--loader-accent) 26%, transparent); } 50% { border-color: color-mix(in srgb, var(--loader-accent) 72%, transparent); } 100% { border-color: color-mix(in srgb, var(--loader-accent) 26%, transparent); } }
@keyframes vl-cat-map-neural-route-dot { 0%,100% { transform: translateY(-12px) scale(.55); opacity:.2; } 50% { transform: translateY(14px) scale(1.1); opacity:1; } }`
  },
  {
    id: 'skeleton-quantum-strip',
    name: 'Quantum Strip Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'Three shimmer strips cycle across a skeleton card scaffold.',
    markup: `<div class="vl-cat-skeleton-quantum-strip" role="img" aria-label="Quantum strip skeleton">
  <span class="line a"></span>
  <span class="line b"></span>
  <span class="line c"></span>
</div>`,
    css: `.vl-cat-skeleton-quantum-strip {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1e5f87);
  border-radius: 14px;
  background: linear-gradient(176deg, #081d34, #0b2f4b 63%, #040a14);
  padding: 15px;
  display: grid;
  gap: 10px;
  align-content: center;
}
.vl-cat-skeleton-quantum-strip .line {
  display: block;
  border-radius: 8px;
  height: 9px;
  background: color-mix(in srgb, var(--loader-accent) 18%, #d8e3ef);
  position: relative;
  overflow: hidden;
}
.vl-cat-skeleton-quantum-strip .line::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 50%, #fff 20%), transparent);
  transform: translateX(-130%);
  animation: vl-cat-skeleton-quantum-strip-shine calc(var(--loader-speed) * 1.3) infinite;
}
.vl-cat-skeleton-quantum-strip .a { width: 58%; }
.vl-cat-skeleton-quantum-strip .b { width: 84%; }
.vl-cat-skeleton-quantum-strip .c { width: 72%; }
.vl-cat-skeleton-quantum-strip .b::after { animation-delay: -.35s; }
.vl-cat-skeleton-quantum-strip .c::after { animation-delay: -.7s; }
@keyframes vl-cat-skeleton-quantum-strip-shine { 0%,100% { transform: translateX(-130%); } 50% { transform: translateX(130%); } }`
  },
  {
    id: 'operation-sync-radar',
    name: 'Sync Radar Operations',
    category: 'Operations',
    tech: 'CSS',
    description: 'Two operation rings track each other on opposite sweep phases.',
    markup: `<div class="vl-cat-operation-sync-radar" role="img" aria-label="Sync radar operations">
  <span class="arc outer"></span>
  <span class="arc inner"></span>
  <span class="pulse"></span>
</div>`,
    css: `.vl-cat-operation-sync-radar {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #205a86);
  border-radius: 14px;
  background: linear-gradient(178deg, #071d33, #0a2c47 63%, #040a14);
  position: relative;
  overflow: hidden;
}
.vl-cat-operation-sync-radar .arc {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  border: 2px dashed color-mix(in srgb, var(--loader-accent) 48%, transparent);
  transform: translate(-50%, -50%);
  animation: vl-cat-operation-sync-radar-spin calc(var(--loader-speed) * 1.2) linear infinite;
}
.vl-cat-operation-sync-radar .outer { width: 68px; height: 68px; }
.vl-cat-operation-sync-radar .inner { width: 42px; height: 42px; animation-duration: calc(var(--loader-speed) * 0.9); animation-direction: reverse; }
.vl-cat-operation-sync-radar .pulse {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-operation-sync-radar-pulse calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-cat-operation-sync-radar-spin { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
@keyframes vl-cat-operation-sync-radar-pulse { 0%,100% { transform: scale(.55); opacity:.2; } 50% { transform: scale(1.2); opacity:1; } }`
  },
  {
    id: 'matrix-cascade-radiance',
    name: 'Cascade Radiance Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A matrix of nodes cascades in radial bursts across a tiled field.',
    markup: `<div class="vl-cat-matrix-cascade-radiance" role="img" aria-label="Cascade radiance matrix">
  <span class="cell" style="--x:0;--y:0"></span>
  <span class="cell" style="--x:1;--y:1"></span>
  <span class="cell" style="--x:2;--y:0"></span>
  <span class="cell" style="--x:3;--y:1"></span>
  <span class="cell" style="--x:0;--y:2"></span>
  <span class="cell" style="--x:1;--y:3"></span>
</div>`,
    css: `.vl-cat-matrix-cascade-radiance {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5b88);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 18%, transparent), transparent 50%), linear-gradient(171deg, #061d33, #0b2c49 64%, #040a14);
  position: relative;
  overflow: hidden;
}
.vl-cat-matrix-cascade-radiance .cell {
  position: absolute;
  width: 10px;
  height: 10px;
  left: calc(25px + var(--x) * 42px);
  top: calc(16px + var(--y) * 24px);
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 88%, #f4f8fb);
  animation: vl-cat-matrix-cascade-radiance-blip calc(var(--loader-speed) * 1.2) ease-in-out infinite;
  animation-delay: calc((var(--x) + var(--y)) * -0.11s);
}
@keyframes vl-cat-matrix-cascade-radiance-blip {
  0%,100% { transform: scale(.45); opacity:.2; }
  50% { transform: scale(1.25); opacity:1; }
}`
  },
  {
    id: 'application-queue-wave',
    name: 'Queue Wave Application',
    category: 'Application',
    tech: 'CSS',
    description: 'Queue nodes move through a compact application workflow arc.',
    markup: `<div class="vl-cat-application-queue-wave" role="img" aria-label="Queue wave application">
  <span class="node n1"></span>
  <span class="node n2"></span>
  <span class="node n3"></span>
</div>`,
    css: `.vl-cat-application-queue-wave {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1d5e87);
  border-radius: 14px;
  background: #fff;
  position: relative;
  display: grid;
  place-items: center;
}
.vl-cat-application-queue-wave .node {
  position: absolute;
  left: 42px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 56%, transparent);
  background: color-mix(in srgb, var(--loader-accent) 12%, white 88%);
  animation: vl-cat-application-queue-wave-step calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
.vl-cat-application-queue-wave .n1 { animation-delay: 0s; }
.vl-cat-application-queue-wave .n2 { animation-delay: -.45s; }
.vl-cat-application-queue-wave .n3 { animation-delay: -.9s; }
@keyframes vl-cat-application-queue-wave-step {
  0%,100% { transform: translateX(0) scale(.6); opacity:.2; }
  33% { transform: translateX(52px) scale(1); opacity:1; }
  66% { transform: translateX(98px) scale(.8); opacity:.55; }
}`
  },
  {
    id: 'holographic-prism-lattice',
    name: 'Prism Lattice Holographic',
    category: 'Holographic',
    tech: 'CSS',
    description: 'A lattice of prism prisms pulses and rotates inside a compact holographic frame.',
    markup: `<div class="vl-cat-holographic-prism-lattice" role="img" aria-label="Prism lattice holographic">
  <span class="lens l1"></span>
  <span class="lens l2"></span>
  <span class="lens l3"></span>
</div>`,
    css: `.vl-cat-holographic-prism-lattice {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5e87);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 20%, transparent), transparent 52%), linear-gradient(168deg, #081d37, #0f324c 60%, #050d14);
  position: relative;
  overflow: hidden;
}
.vl-cat-holographic-prism-lattice .lens {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 64px;
  height: 10px;
  border-radius: 99px;
  margin: -5px;
  background: color-mix(in srgb, var(--loader-accent) 40%, transparent);
  transform-origin: center;
  animation: vl-cat-holographic-prism-lattice-spin calc(var(--loader-speed) * 1.4) linear infinite;
}
.vl-cat-holographic-prism-lattice .l1 { transform: rotate(0deg); }
.vl-cat-holographic-prism-lattice .l2 { width: 48px; animation-direction: reverse; animation-duration: calc(var(--loader-speed) * 1.05); }
.vl-cat-holographic-prism-lattice .l3 { width: 36px; animation-duration: calc(var(--loader-speed) * 0.9); opacity: .7; }
.vl-cat-holographic-prism-lattice .l3 { animation-duration: calc(var(--loader-speed) * 1.3); }
@keyframes vl-cat-holographic-prism-lattice-spin { 0% { transform: translate(-50%, -50%) rotate(0deg) scale(.72); opacity:.22; } 50% { transform: translate(-50%, -50%) rotate(180deg) scale(1); opacity:1; } 100% { transform: translate(-50%, -50%) rotate(360deg) scale(.72); opacity:.22; } }` 
  },
  {
    id: 'application-flow-beacon',
    name: 'Flow Beacon Application',
    category: 'Application',
    tech: 'CSS',
    description: 'Small app-like steps chase each other through an onboarding-inspired workflow.',
    markup: `<div class="vl-cat-application-flow-beacon" role="img" aria-label="Flow beacon application">
  <span class="step one"></span>
  <span class="step two"></span>
  <span class="step three"></span>
</div>`,
    css: `.vl-cat-application-flow-beacon {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1e6088);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(174deg, #081d35, #0e304a 64%, #040a14);
  display: grid;
  place-items: center;
}
.vl-cat-application-flow-beacon .step {
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 72%, transparent);
  background: color-mix(in srgb, var(--loader-accent) 16%, #fff 8%);
  animation: vl-cat-application-flow-beacon-pulse calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-cat-application-flow-beacon .one { left: 34px; animation-delay: 0s; }
.vl-cat-application-flow-beacon .two { left: 84px; animation-delay: -.2s; }
.vl-cat-application-flow-beacon .three { left: 134px; animation-delay: -.4s; }
@keyframes vl-cat-application-flow-beacon-pulse {
  0%,100% { transform: translateY(0) scale(.55); opacity:.2; }
  25% { transform: translateY(12px) scale(.92); opacity:1; }
  50% { transform: translateY(0) scale(.8); opacity:.62; }
  75% { transform: translateY(-12px) scale(.92); opacity:1; }
}`
  },
  {
    id: 'bars-arc-stack',
    name: 'Arc Stack Bars',
    category: 'Bars',
    tech: 'CSS',
    description: 'Stacked bars rise and fall in a smooth arc pattern.',
    markup: `<div class="vl-cat-bars-arc-stack" role="img" aria-label="Arc stack bars">
  <span class="bar b1"></span>
  <span class="bar b2"></span>
  <span class="bar b3"></span>
  <span class="bar b4"></span>
</div>`,
    css: `.vl-cat-bars-arc-stack {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1f5f8a);
  border-radius: 14px;
  display: flex;
  align-items: end;
  gap: 10px;
  padding: 14px;
  background: linear-gradient(180deg, #071e35, #0a2d4a 64%, #040a14);
}
.vl-cat-bars-arc-stack .bar {
  width: 18px;
  border-radius: 9px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 22%, transparent), color-mix(in srgb, var(--loader-accent) 88%, #fff));
  animation: vl-cat-bars-arc-stack-wave calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-cat-bars-arc-stack .b1 { height: 36px; animation-delay: -.0s; }
.vl-cat-bars-arc-stack .b2 { height: 56px; animation-delay: -.15s; }
.vl-cat-bars-arc-stack .b3 { height: 52px; animation-delay: -.3s; }
.vl-cat-bars-arc-stack .b4 { height: 40px; animation-delay: -.45s; }
@keyframes vl-cat-bars-arc-stack-wave {
  0%,100% { transform: scaleY(.44); opacity:.25; }
  50% { transform: scaleY(1); opacity:1; }
}`
  },
  {
    id: 'button-wave-ribbon',
    name: 'Wave Ribbon Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'Ribbon-like button accents pulse across three zones.',
    markup: `<div class="vl-cat-button-wave-ribbon" role="img" aria-label="Wave ribbon button">
  <span class="frame"></span>
  <span class="band b1"></span>
  <span class="band b2"></span>
</div>`,
    css: `.vl-cat-button-wave-ribbon {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #205f8a);
  border-radius: 14px;
  position: relative;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #071b32, #0b2b45 66%, #040a14);
  overflow: hidden;
}
.vl-cat-button-wave-ribbon .frame {
  width: 118px;
  height: 34px;
  border-radius: 12px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 40%, transparent);
}
.vl-cat-button-wave-ribbon .band {
  position: absolute;
  left: 22px;
  width: 146px;
  height: 4px;
  border-radius: 99px;
  background: color-mix(in srgb, var(--loader-accent) 82%, #fff 8%);
  animation: vl-cat-button-wave-ribbon-flow calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-cat-button-wave-ribbon .b1 { top: 38px; animation-delay: 0s; }
.vl-cat-button-wave-ribbon .b2 { top: 52px; animation-delay: -.2s; }
@keyframes vl-cat-button-wave-ribbon-flow {
  0%,100% { opacity:.22; transform: translateX(-24px) scaleX(.72); }
  50% { opacity:1; transform: translateX(24px) scaleX(1); }
}`
  },
  {
    id: 'css3d-orbit-prism',
    name: 'Orbit Prism CSS 3D',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Interlaced prism panels rotate on opposite 3D trajectories.',
    markup: `<div class="vl-cat-css3d-orbit-prism" role="img" aria-label="Orbit prism CSS 3D">
  <span class="pane p1"></span>
  <span class="pane p2"></span>
  <span class="pane p3"></span>
</div>`,
    css: `.vl-cat-css3d-orbit-prism {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 27%, #1f5b8a);
  border-radius: 14px;
  position: relative;
  perspective: 700px;
  overflow: hidden;
  background: linear-gradient(170deg, #081f37, #14324b 63%, #040a14);
}
.vl-cat-css3d-orbit-prism .pane {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 76px;
  height: 24px;
  margin: -12px;
  border-radius: 8px;
  transform-style: preserve-3d;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 68%, transparent);
  animation: vl-cat-css3d-orbit-prism-spin calc(var(--loader-speed) * 1.4) linear infinite;
}
.vl-cat-css3d-orbit-prism .p1 { transform: rotateX(16deg) rotateZ(0deg); animation-delay: 0s; }
.vl-cat-css3d-orbit-prism .p2 { transform: rotateY(32deg) rotateZ(60deg); animation-delay: -.28s; }
.vl-cat-css3d-orbit-prism .p3 { transform: rotateX(16deg) rotateZ(120deg); animation-delay: -.56s; }
@keyframes vl-cat-css3d-orbit-prism-spin {
  0% { transform: translate(-50%, -50%) rotateX(18deg) rotateZ(0deg) scale(.82); }
  50% { transform: translate(-50%, -50%) rotateX(74deg) rotateZ(180deg) scale(1); }
  100% { transform: translate(-50%, -50%) rotateX(18deg) rotateZ(360deg) scale(.82); }
}`
  },
  {
    id: 'charts-curve-throb',
    name: 'Curve Throb Charts',
    category: 'Charts',
    tech: 'CSS',
    description: 'A pair of chart lines throb in synchronized, offset motion.',
    markup: `<div class="vl-cat-charts-curve-throb" role="img" aria-label="Curve throb charts">
  <span class="axis"></span>
  <span class="line one"></span>
  <span class="line two"></span>
  <span class="line three"></span>
</div>`,
    css: `.vl-cat-charts-curve-throb {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1e5f88);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #071d35, #0f2e4c 66%, #040a14);
}
.vl-cat-charts-curve-throb .axis {
  position: absolute;
  inset: 14px 0 14px 0;
  border-left: 1px solid color-mix(in srgb, var(--loader-accent) 34%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--loader-accent) 34%, transparent);
}
.vl-cat-charts-curve-throb .line {
  position: absolute;
  height: 2px;
  left: 18px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 88%, #fff 10%);
  animation: vl-cat-charts-curve-throb-wave calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-cat-charts-curve-throb .one { width: 150px; top: 42px; animation-delay: 0s; }
.vl-cat-charts-curve-throb .two { width: 124px; top: 58px; animation-delay: -.2s; }
.vl-cat-charts-curve-throb .three { width: 102px; top: 72px; animation-delay: -.4s; }
@keyframes vl-cat-charts-curve-throb-wave {
  0%,100% { opacity:.3; transform: scaleX(.56); transform-origin: left; }
  50% { opacity:1; transform: scaleX(1); }
}`
  },
  {
    id: 'common-ui-shell-wave',
    name: 'Shell Wave Common UI',
    category: 'Common UI',
    tech: 'CSS',
    description: 'A utility-shell shell indicator ripples softly with card-like timing.',
    markup: `<div class="vl-cat-common-ui-shell-wave" role="img" aria-label="Shell wave common UI">
  <span class="shell s1"></span>
  <span class="shell s2"></span>
</div>`,
    css: `.vl-cat-common-ui-shell-wave {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1e5d86);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #061d33, #0d2b45 64%, #040a14);
  display: grid;
  place-items: center;
}
.vl-cat-common-ui-shell-wave .shell {
  position: absolute;
  width: 102px;
  height: 46px;
  border-radius: 12px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 48%, transparent);
  opacity: .22;
  animation: vl-cat-common-ui-shell-wave-beat calc(var(--loader-speed) * 1.18) ease-in-out infinite;
}
.vl-cat-common-ui-shell-wave .s1 { animation-delay: 0s; }
.vl-cat-common-ui-shell-wave .s2 { animation-delay: -.4s; width: 128px; }
@keyframes vl-cat-common-ui-shell-wave-beat {
  0%,100% { transform: scale(.58); opacity:.22; }
  50% { transform: scale(1); opacity:1; }
}`
  },
  {
    id: 'dot-scan-grid',
    name: 'Scan Grid Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Dot clusters scan through a compact grid with soft staggered pops.',
    markup: `<div class="vl-cat-dot-scan-grid" role="img" aria-label="Scan grid dots">
  <span class="dot d1"></span>
  <span class="dot d2"></span>
  <span class="dot d3"></span>
  <span class="dot d4"></span>
</div>`,
    css: `.vl-cat-dot-scan-grid {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 27%, #1f5d87);
  border-radius: 14px;
  background: linear-gradient(180deg, #061b2f, #0a2944 63%, #040a14);
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  padding: 17px;
}
.vl-cat-dot-scan-grid .dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #fff 10%);
  animation: vl-cat-dot-scan-grid-pop calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-cat-dot-scan-grid .d1 { animation-delay: 0s; }
.vl-cat-dot-scan-grid .d2 { animation-delay: -.2s; }
.vl-cat-dot-scan-grid .d3 { animation-delay: -.4s; }
.vl-cat-dot-scan-grid .d4 { animation-delay: -.6s; }
@keyframes vl-cat-dot-scan-grid-pop {
  0%,100% { transform: scale(.42); opacity:.24; }
  50% { transform: scale(1.1); opacity:1; }
}`
  },
  {
    id: 'holographic-wave-field',
    name: 'Wave Field Holographic',
    category: 'Holographic',
    tech: 'CSS',
    description: 'Overlapping waves sweep across a holographic field in alternating directions.',
    markup: `<div class="vl-cat-holographic-wave-field" role="img" aria-label="Wave field holographic">
  <span class="wave w1"></span>
  <span class="wave w2"></span>
</div>`,
    css: `.vl-cat-holographic-wave-field {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1d5f88);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 18%, transparent), transparent 52%), linear-gradient(175deg, #081c34, #0f3049 60%, #050c14);
}
.vl-cat-holographic-wave-field .wave {
  position: absolute;
  left: -30px;
  right: -30px;
  top: 50%;
  height: 8px;
  border-radius: 99px;
  background: color-mix(in srgb, var(--loader-accent) 52%, transparent);
  transform-origin: center;
  animation: vl-cat-holographic-wave-field-roll calc(var(--loader-speed) * 1.4) linear infinite;
}
.vl-cat-holographic-wave-field .w1 { animation-delay: 0s; }
.vl-cat-holographic-wave-field .w2 { animation-delay: -.6s; opacity: .68; }
@keyframes vl-cat-holographic-wave-field-roll {
  0% { transform: translateY(-34px) scaleX(.44); opacity:.2; }
  50% { transform: translateY(34px) scaleX(1); opacity:1; }
  100% { transform: translateY(-34px) scaleX(.44); opacity:.2; }
}`
  },
  {
    id: 'maps-grid-latency',
    name: 'Latency Grid Maps',
    category: 'Maps',
    tech: 'CSS',
    description: 'A route grid breathes in two-color latency pulses.',
    markup: `<div class="vl-cat-maps-grid-latency" role="img" aria-label="Latency grid maps">
  <span class="node n1"></span>
  <span class="node n2"></span>
  <span class="path"></span>
</div>`,
    css: `.vl-cat-maps-grid-latency {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d5f86);
  border-radius: 14px;
  background: linear-gradient(170deg, #061d34, #0f2f4a 63%, #040a14);
  position: relative;
  overflow: hidden;
}
.vl-cat-maps-grid-latency .path {
  position: absolute;
  left: 24px;
  right: 24px;
  top: 50%;
  height: 3px;
  background: color-mix(in srgb, var(--loader-accent) 64%, #fff 10%);
  transform-origin: left;
  animation: vl-cat-maps-grid-latency-line calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
.vl-cat-maps-grid-latency .node {
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 80%, transparent);
}
.vl-cat-maps-grid-latency .n1 { left: 47px; top: 46px; animation: vl-cat-maps-grid-latency-node calc(var(--loader-speed) * 1.25) linear infinite; }
.vl-cat-maps-grid-latency .n2 { left: 128px; top: 60px; animation: vl-cat-maps-grid-latency-node calc(var(--loader-speed) * 1.25) linear infinite reverse; }
@keyframes vl-cat-maps-grid-latency-line { 0%,100% { transform: scaleX(.2); opacity:.2; } 50% { transform: scaleX(1); opacity:1; } }
@keyframes vl-cat-maps-grid-latency-node { 0%,100% { transform: scale(.52); opacity:.2; } 50% { transform: scale(1.2); opacity:1; } }`
  },
  {
    id: 'matrix-luminous-glyph-array',
    name: 'Luminous Glyph Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Glyph cells burst sequentially from a compact luminous matrix.',
    markup: `<div class="vl-cat-matrix-luminous-glyph-array" role="img" aria-label="Luminous glyph matrix">
  <span class="glyph g1"></span>
  <span class="glyph g2"></span>
  <span class="glyph g3"></span>
  <span class="glyph g4"></span>
  <span class="glyph g5"></span>
</div>`,
    css: `.vl-cat-matrix-luminous-glyph-array {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1d5b88);
  border-radius: 14px;
  background: linear-gradient(180deg, #071b34, #0a2a45 64%, #040a14);
  display: grid;
  place-items: center;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  gap: 8px;
  padding: 0 18px;
}
.vl-cat-matrix-luminous-glyph-array .glyph {
  width: 14px;
  height: 14px;
  border-radius: 2px;
  transform: translateZ(0);
  background: color-mix(in srgb, var(--loader-accent) 84%, #fff 8%);
  animation: vl-cat-matrix-luminous-glyph-array-pulse calc(var(--loader-speed) * 1.08) ease-in-out infinite;
}
.vl-cat-matrix-luminous-glyph-array .g1 { animation-delay: 0s; }
.vl-cat-matrix-luminous-glyph-array .g2 { animation-delay: -.18s; }
.vl-cat-matrix-luminous-glyph-array .g3 { animation-delay: -.36s; }
.vl-cat-matrix-luminous-glyph-array .g4 { animation-delay: -.54s; }
.vl-cat-matrix-luminous-glyph-array .g5 { animation-delay: -.72s; }
@keyframes vl-cat-matrix-luminous-glyph-array-pulse {
  0%,100% { opacity:.22; transform: scale(.5) rotate(0deg); }
  50% { opacity:1; transform: scale(1.25) rotate(45deg); }
}`
  },
  {
    id: 'operation-signal-beacon',
    name: 'Signal Beacon Operations',
    category: 'Operations',
    tech: 'CSS',
    description: 'Two concentric beacons rotate in and out as operations sync.',
    markup: `<div class="vl-cat-operation-signal-beacon" role="img" aria-label="Signal beacon operations">
  <span class="orbit outer"></span>
  <span class="orbit inner"></span>
</div>`,
    css: `.vl-cat-operation-signal-beacon {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #235b88);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 24%, transparent), transparent 56%), linear-gradient(176deg, #071b34, #0c2d49 62%, #040a14);
  position: relative;
}
.vl-cat-operation-signal-beacon .orbit {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  border: 1.5px dashed color-mix(in srgb, var(--loader-accent) 56%, transparent);
  transform: translate(-50%, -50%);
  animation: vl-cat-operation-signal-beacon-spin calc(var(--loader-speed) * 1.28) linear infinite;
}
.vl-cat-operation-signal-beacon .outer { width: 74px; height: 74px; }
.vl-cat-operation-signal-beacon .inner { width: 46px; height: 46px; animation-direction: reverse; animation-duration: calc(var(--loader-speed) * .94); }
@keyframes vl-cat-operation-signal-beacon-spin {
  0% { transform: translate(-50%, -50%) rotate(0deg); opacity:.22; }
  50% { transform: translate(-50%, -50%) rotate(180deg); opacity:1; }
  100% { transform: translate(-50%, -50%) rotate(360deg); opacity:.22; }
}`
  },
  {
    id: 'progress-wave-kick',
    name: 'Kickoff Wave Progress',
    category: 'Progress',
    tech: 'CSS',
    description: 'A segmented progress strip advances in wave form with a clean pulse.',
    markup: `<div class="vl-cat-progress-wave-kick" role="img" aria-label="Kickoff wave progress">
  <span class="seg one"></span>
  <span class="seg two"></span>
  <span class="seg three"></span>
  <span class="seg four"></span>
</div>`,
    css: `.vl-cat-progress-wave-kick {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1f5f87);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #071f36, #0b2c46 66%, #040a14);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 10px;
  padding: 0 14px;
}
.vl-cat-progress-wave-kick .seg {
  width: 34px;
  height: 16px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--loader-accent) 58%, #fff 8%);
  opacity: .28;
  animation: vl-cat-progress-wave-kick-wave calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-cat-progress-wave-kick .one { animation-delay: 0s; }
.vl-cat-progress-wave-kick .two { animation-delay: -.2s; }
.vl-cat-progress-wave-kick .three { animation-delay: -.4s; }
.vl-cat-progress-wave-kick .four { animation-delay: -.6s; }
@keyframes vl-cat-progress-wave-kick-wave {
  0%,100% { transform: translateY(9px); opacity:.22; }
  50% { transform: translateY(-9px); opacity:1; }
}`
  },
  {
    id: 'svg-digital-orbit',
    name: 'Digital Orbit SVG',
    category: 'SVG',
    tech: 'SVG',
    description: 'A small SVG token orbits over a concentric shell and pulses stroke alpha.',
    markup: `<div class="vl-cat-svg-digital-orbit" role="img" aria-label="Digital orbit SVG">
  <svg viewBox="0 0 96 96" width="76" height="76" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <circle class="track" cx="48" cy="48" r="24"></circle>
    <circle class="token" cx="48" cy="24" r="7"></circle>
  </svg>
</div>`,
    css: `.vl-cat-svg-digital-orbit {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1e5d89);
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #061c35, #0b2844 66%, #040a14);
}
.vl-cat-svg-digital-orbit svg {
  overflow: visible;
  animation: vl-cat-svg-digital-orbit-spin calc(var(--loader-speed) * 1.1) linear infinite;
}
.vl-cat-svg-digital-orbit .track {
  stroke: color-mix(in srgb, var(--loader-accent) 36%, transparent);
  stroke-width: 4px;
}
.vl-cat-svg-digital-orbit .token {
  fill: color-mix(in srgb, var(--loader-accent) 90%, #fff 10%);
  animation: vl-cat-svg-digital-orbit-token calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-cat-svg-digital-orbit-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes vl-cat-svg-digital-orbit-token { 0%,100% { opacity:.2; } 50% { opacity:1; } }`
  },
  {
    id: 'shape-ribbon-ring',
    name: 'Ribbon Ring Shape',
    category: 'Shapes',
    tech: 'CSS',
    description: 'A ring of ribbon shapes expands and contracts in linked rhythm.',
    markup: `<div class="vl-cat-shape-ribbon-ring" role="img" aria-label="Ribbon ring shape">
  <span class="tile t1"></span>
  <span class="tile t2"></span>
  <span class="tile t3"></span>
</div>`,
    css: `.vl-cat-shape-ribbon-ring {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 27%, #1e5c89);
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 18%, transparent), transparent 48%), linear-gradient(164deg, #071d35, #0d2d47 63%, #040a14);
  position: relative;
}
.vl-cat-shape-ribbon-ring .tile {
  position: absolute;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 72%, transparent);
  border-radius: 8px;
  width: 70px;
  height: 32px;
  transform-origin: center;
  animation: vl-cat-shape-ribbon-ring-flow calc(var(--loader-speed) * 1.22) ease-in-out infinite;
}
.vl-cat-shape-ribbon-ring .t1 { transform: rotate(0deg); animation-delay: 0s; }
.vl-cat-shape-ribbon-ring .t2 { transform: rotate(90deg); animation-delay: -.22s; }
.vl-cat-shape-ribbon-ring .t3 { transform: rotate(180deg); animation-delay: -.44s; }
@keyframes vl-cat-shape-ribbon-ring-flow {
  0%,100% { transform: scale(.68) rotate(var(--spin-angle, 0deg)); opacity:.28; }
  50% { transform: scale(1) rotate(calc(var(--spin-angle, 0deg) + 180deg)); opacity:1; }
}`
  },
  {
    id: 'skeleton-scan-trace',
    name: 'Scan Trace Skeletons',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'Skeleton traces fade in a scanning pass across card-shaped bars.',
    markup: `<div class="vl-cat-skeleton-scan-trace" role="img" aria-label="Scan trace skeletons">
  <span class="bar b1"></span>
  <span class="bar b2"></span>
  <span class="bar b3"></span>
</div>`,
    css: `.vl-cat-skeleton-scan-trace {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5b87);
  border-radius: 14px;
  background: linear-gradient(180deg, #071b2f, #0a2f47 64%, #040a14);
  display: grid;
  place-items: center;
}
.vl-cat-skeleton-scan-trace .bar {
  width: 120px;
  height: 18px;
  margin: 5px 0;
  border-radius: 8px;
  background: linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 16%, transparent), color-mix(in srgb, var(--loader-accent) 82%, white 12%), color-mix(in srgb, var(--loader-accent) 16%, transparent));
  background-size: 220% 100%;
  animation: vl-cat-skeleton-scan-trace-shine calc(var(--loader-speed) * 1.1) linear infinite;
}
.vl-cat-skeleton-scan-trace .b1 { animation-delay: 0s; }
.vl-cat-skeleton-scan-trace .b2 { animation-delay: -.36s; width: 146px; }
.vl-cat-skeleton-scan-trace .b3 { animation-delay: -.72s; width: 110px; }
@keyframes vl-cat-skeleton-scan-trace-shine { 0% { background-position: 220% 0; opacity:.22; } 100% { background-position: -220% 0; opacity:1; } }`
  },
  {
    id: 'spinner-galactic-loop',
    name: 'Galactic Loop Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Interlocked arcs sweep in alternating directions and nested radii.',
    markup: `<div class="vl-cat-spinner-galactic-loop" role="img" aria-label="Galactic loop spinner">
  <span class="arc a1"></span>
  <span class="arc a2"></span>
</div>`,
    css: `.vl-cat-spinner-galactic-loop {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1f5b89);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 50% 55%, color-mix(in srgb, var(--loader-accent) 16%, transparent), transparent 52%), linear-gradient(174deg, #081f35, #15314b 61%, #040a14);
}
.vl-cat-spinner-galactic-loop .arc {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 54px;
  height: 54px;
  margin: -27px;
  border: 5px solid transparent;
  border-top-color: color-mix(in srgb, var(--loader-accent) 84%, #fff 10%);
  border-radius: 50%;
  animation: vl-cat-spinner-galactic-loop-spin calc(var(--loader-speed) * 1.3) linear infinite;
}
.vl-cat-spinner-galactic-loop .a1 { animation-duration: calc(var(--loader-speed) * 1.3); }
.vl-cat-spinner-galactic-loop .a2 { width: 34px; height: 34px; margin: -17px; animation-direction: reverse; animation-duration: calc(var(--loader-speed) * .92); border-top-color: color-mix(in srgb, var(--loader-accent) 62%, #fff 12%); }
@keyframes vl-cat-spinner-galactic-loop-spin { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }`
  },
  {
    id: 'text-wave-marker',
    name: 'Wave Marker Text',
    category: 'Text',
    tech: 'CSS Text',
    description: 'A compact loading phrase moves in a soft wave, then settles and rebounds.',
    markup: `<div class="vl-cat-text-wave-marker" role="img" aria-label="Wave marker text">
  <span>LOADING</span>
</div>`,
    css: `.vl-cat-text-wave-marker {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #205d8a);
  border-radius: 14px;
  background: linear-gradient(180deg, #061c31, #0a2c45 64%, #040a13);
  display: grid;
  place-items: center;
  color: color-mix(in srgb, var(--loader-accent) 84%, #fff 10%);
  font: 700 12px/1.2 'SFMono-Regular', Menlo, Consolas, monospace;
  letter-spacing: .24em;
  overflow: hidden;
}
.vl-cat-text-wave-marker span {
  animation: vl-cat-text-wave-marker-ripple calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-cat-text-wave-marker-ripple {
  0%,100% { transform: translateY(0); opacity:.2; }
  50% { transform: translateY(-9px); opacity:1; }
}`
  },
];
