export const matrixPack5LoadersB = [
  {
    id: 'matrix-parallel-matrix-rivers',
    name: 'Parallel Matrix Rivers',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Parallel streams drift in opposing directions, then phase-lock at split points.',
    markup: `<div class="vl-matrix-parallel-rivers" aria-hidden="true">
      <span style="--i:0;--d:0;--x:18px"></span><span style="--i:1;--d:.16;--x:18px"></span><span style="--i:2;--d:.32;--x:18px"></span>
      <span style="--i:0;--d:.08;--x:50px"></span><span style="--i:1;--d:.24;--x:50px"></span><span style="--i:2;--d:.4;--x:50px"></span>
      <span style="--i:0;--d:.16;--x:82px"></span><span style="--i:1;--d:.32;--x:82px"></span><span style="--i:2;--d:.48;--x:82px"></span>
      <span style="--i:0;--d:.24;--x:114px"></span><span style="--i:1;--d:.4;--x:114px"></span><span style="--i:2;--d:.56;--x:114px"></span>
      <span style="--i:0;--d:.32;--x:146px"></span><span style="--i:1;--d:.48;--x:146px"></span><span style="--i:2;--d:.64;--x:146px"></span>
    </div>`,
    css: `.vl-matrix-parallel-rivers {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 31%, #18436a);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(180deg, #050d15, #0a1f3a);
}
.vl-matrix-parallel-rivers span {
  position: absolute;
  left: calc(var(--x));
  top: 12px;
  width: 3px;
  height: 84px;
  border-radius: 2px;
  transform: translateX(0);
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 20%, transparent), color-mix(in srgb, var(--loader-accent) 80%, #fff), color-mix(in srgb, var(--loader-accent) 20%, transparent));
  animation: vl-matrix5-parallel-river calc(var(--loader-speed) * 1.8) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
  animation-direction: calc(var(--i) * -1);
}
.vl-matrix-parallel-rivers span:nth-child(3n) {
  width: 2px;
  opacity: .6;
}
.vl-matrix-parallel-rivers span:nth-child(4n) {
  width: 1px;
}
@keyframes vl-matrix5-parallel-river {
  0% { opacity: .1; transform: translateY(0); }
  42% { opacity: .96; transform: translateY(-24px); }
  100% { opacity: .1; transform: translateY(0); }
}`
  },
  {
    id: 'matrix-cascade-logic-mesh',
    name: 'Cascade Logic Mesh',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A logic mesh cascades in layered packets and rewires to a changing checksum map.',
    markup: `<div class="vl-matrix-logic-mesh" aria-hidden="true">
      <span class="vl-matrix-logic-node" style="--x:12px;--y:16px;--d:0"></span>
      <span class="vl-matrix-logic-node" style="--x:44px;--y:26px;--d:.16"></span>
      <span class="vl-matrix-logic-node" style="--x:74px;--y:16px;--d:.32"></span>
      <span class="vl-matrix-logic-node" style="--x:106px;--y:32px;--d:.48"></span>
      <span class="vl-matrix-logic-node" style="--x:138px;--y:18px;--d:.64"></span>
      <span class="vl-matrix-logic-node" style="--x:166px;--y:28px;--d:.8"></span>
      <span class="vl-matrix-logic-node" style="--x:30px;--y:62px;--d:.2"></span>
      <span class="vl-matrix-logic-node" style="--x:62px;--y:70px;--d:.36"></span>
      <span class="vl-matrix-logic-node" style="--x:98px;--y:58px;--d:.52"></span>
      <span class="vl-matrix-logic-node" style="--x:130px;--y:72px;--d:.68"></span>
      <span class="vl-matrix-logic-node" style="--x:164px;--y:64px;--d:.84"></span>
      <span class="vl-matrix-logic-core"></span>
    </div>`,
    css: `.vl-matrix-logic-mesh {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #16466e);
  border-radius: 14px;
  overflow: hidden;
  background: #071625;
}
.vl-matrix-logic-node {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 10px;
  height: 10px;
  border-radius: 3px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 65%, #e6f0fc);
  background: color-mix(in srgb, var(--loader-accent) 34%, #f2f7ff 22%);
  animation: vl-matrix5-logic-node calc(var(--loader-speed) * 2.15) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-logic-node:nth-child(odd) { border-radius: 50%; }
.vl-matrix-logic-core {
  position: absolute;
  left: 80px;
  top: 46px;
  width: 30px;
  height: 18px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--loader-accent) 16%, #f6fbff);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 64%, #fff);
  opacity: .22;
  animation: vl-matrix5-logic-core calc(var(--loader-speed) * 1.6) ease-in-out infinite;
}
@keyframes vl-matrix5-logic-node {
  0%, 100% { transform: scale(.55); opacity: .24; box-shadow: 0 0 0 transparent; }
  46% { transform: scale(1); opacity: .98; box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 72%, transparent); }
}
@keyframes vl-matrix5-logic-core {
  0%, 100% { opacity: .18; width: 30px; }
  50% { opacity: .8; width: 26px; }
}`
  },
  {
    id: 'matrix-glitch-scan-vector',
    name: 'Glitch Scan Vector',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Vector scanlines stutter, shift, and resolve into a stable checksum frame.',
    markup: `<div class="vl-matrix-glitch-vector" aria-hidden="true">
      <span style="--y:0px;--d:0" class="vl-matrix-gsv-line"></span>
      <span style="--y:12px;--d:.12" class="vl-matrix-gsv-line"></span>
      <span style="--y:24px;--d:.24" class="vl-matrix-gsv-line"></span>
      <span style="--y:36px;--d:.36" class="vl-matrix-gsv-line"></span>
      <span style="--y:48px;--d:.48" class="vl-matrix-gsv-line"></span>
      <span style="--y:60px;--d:.6" class="vl-matrix-gsv-line"></span>
      <span style="--y:72px;--d:.72" class="vl-matrix-gsv-line"></span>
      <span style="--y:84px;--d:.84" class="vl-matrix-gsv-line"></span>
      <span class="vl-matrix-gsv-center"></span>
    </div>`,
    css: `.vl-matrix-glitch-vector {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #1f4a74);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-linear-gradient(0deg, #040e1a 0 4px, #061321 4px 5px, #050f1e 5px 9px);
}
.vl-matrix-gsv-line {
  position: absolute;
  left: 0;
  top: var(--y);
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 82%, #fff), transparent);
  animation: vl-matrix5-glitch-line calc(var(--loader-speed) * 2.1) cubic-bezier(.24, 0, .2, 1) infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-gsv-line:nth-child(odd) { opacity: .45; height: 1px; }
.vl-matrix-gsv-center {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 20px;
  height: 20px;
  margin: -10px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 75%, #fff);
  animation: vl-matrix5-glitch-core calc(var(--loader-speed) * 1.5) steps(2, end) infinite;
}
@keyframes vl-matrix5-glitch-line {
  0% { transform: translateX(0); opacity: .2; }
  28% { transform: translateX(3px); opacity: .96; }
  35% { transform: translateX(-3px); opacity: .72; }
  52%, 100% { transform: translateX(0); opacity: .2; }
}
@keyframes vl-matrix5-glitch-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.62); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.12); opacity: 1; }
}`
  },
  {
    id: 'matrix-hexagonal-halo-field',
    name: 'Hexagonal Halo Field',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Hex tiles rotate around a halo and swap active states at pulse gates.',
    markup: `<div class="vl-matrix-halo-field" aria-hidden="true">
      <span class="vl-matrix-hex-tile" style="--r:18;--x:58px;--y:28px;--d:0"></span>
      <span class="vl-matrix-hex-tile" style="--r:14;--x:110px;--y:22px;--d:.16"></span>
      <span class="vl-matrix-hex-tile" style="--r:16;--x:146px;--y:34px;--d:.32"></span>
      <span class="vl-matrix-hex-tile" style="--r:18;--x:94px;--y:56px;--d:.48"></span>
      <span class="vl-matrix-hex-tile" style="--r:12;--x:34px;--y:64px;--d:.64"></span>
      <span class="vl-matrix-hex-core"></span>
    </div>`,
    css: `.vl-matrix-halo-field {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #224f79);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 48%, color-mix(in srgb, var(--loader-accent) 10%, transparent), #050d18 64%);
}
.vl-matrix-hex-tile {
  --size: calc(var(--r) * 1px);
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: calc(var(--size) * 0.86);
  background: color-mix(in srgb, var(--loader-accent) 18%, transparent);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transform: translate(-50%, -50%);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, #fff 28%);
  animation: vl-matrix5-hex-tile calc(var(--loader-speed) * 1.75) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-hex-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 22px;
  height: 22px;
  margin: -11px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, #f2f8ff);
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 58%, #fff), transparent 64%);
  animation: vl-matrix5-hex-core calc(var(--loader-speed) * 1.8) ease-in-out infinite;
}
@keyframes vl-matrix5-hex-tile {
  0%, 100% { opacity: .2; transform: translate(-50%, -50%) rotate(0deg); }
  50% { opacity: .94; transform: translate(-50%, -50%) rotate(-120deg); }
}
@keyframes vl-matrix5-hex-core {
  0%, 100% { transform: scale(.66); opacity: .38; }
  50% { transform: scale(1.08); opacity: .9; }
}`
  },
  {
    id: 'matrix-binary-shift-orbit',
    name: 'Binary Shift Orbit',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Binary glyphs rotate on two orbits and switch at staggered clock pulses.',
    markup: `<div class="vl-matrix-binary-orbit" aria-hidden="true">
      <span class="vl-matrix-shift-orbit vl-matrix-orbit-outer">
        <i>01</i><i>10</i><i>11</i><i>00</i><i>10</i><i>01</i>
      </span>
      <span class="vl-matrix-shift-orbit vl-matrix-orbit-inner">
        <i>00</i><i>11</i><i>01</i><i>10</i>
      </span>
      <span class="vl-matrix-binary-cap"></span>
    </div>`,
    css: `.vl-matrix-binary-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 27%, #1b4367);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 34% 34%, color-mix(in srgb, var(--loader-accent) 12%, transparent), #050d18 45%);
}
.vl-matrix-shift-orbit {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--d);
  height: var(--d);
  transform: translate(-50%, -50%);
  list-style: none;
  border-radius: 50%;
  display: grid;
  place-items: center;
  animation: vl-matrix5-binary-orbit calc(var(--loader-speed) * 2.1) linear infinite;
}
.vl-matrix-orbit-outer {
  --d: 104px;
  animation-duration: calc(var(--loader-speed) * 2.45);
}
.vl-matrix-orbit-inner {
  --d: 72px;
  animation-direction: reverse;
  animation-duration: calc(var(--loader-speed) * 1.75);
}
.vl-matrix-shift-orbit i {
  position: absolute;
  color: color-mix(in srgb, var(--loader-accent) 76%, #dbe8f4);
  font: 700 8px/1 ui-monospace, SFMono-Regular, Consolas, monospace;
}
.vl-matrix-orbit-outer i { --n: 6; }
.vl-matrix-orbit-outer i:nth-child(1) { transform: rotate(0deg) translateX(48px); }
.vl-matrix-orbit-outer i:nth-child(2) { transform: rotate(60deg) translateX(48px); }
.vl-matrix-orbit-outer i:nth-child(3) { transform: rotate(120deg) translateX(48px); }
.vl-matrix-orbit-outer i:nth-child(4) { transform: rotate(180deg) translateX(48px); }
.vl-matrix-orbit-outer i:nth-child(5) { transform: rotate(240deg) translateX(48px); }
.vl-matrix-orbit-outer i:nth-child(6) { transform: rotate(300deg) translateX(48px); }
.vl-matrix-orbit-inner i:nth-child(1) { transform: rotate(0deg) translateX(32px); }
.vl-matrix-orbit-inner i:nth-child(2) { transform: rotate(90deg) translateX(32px); }
.vl-matrix-orbit-inner i:nth-child(3) { transform: rotate(180deg) translateX(32px); }
.vl-matrix-orbit-inner i:nth-child(4) { transform: rotate(270deg) translateX(32px); }
.vl-matrix-binary-cap {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 14px;
  margin: -7px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix5-binary-cap calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-matrix5-binary-orbit {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes vl-matrix5-binary-cap {
  0%, 100% { transform: scale(.7); opacity: .5; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  }
];
