export const matrixPack4LoadersB = [
  {
    id: 'matrix-neon-lattice-mesh',
    name: 'Neon Lattice Mesh',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A neon mesh scans diagonally while node pulses migrate across intersections.',
    markup: `<div class="vl-matrix-neon-mesh" aria-hidden="true">
      <span style="--x:11px;--y:12px;--d:0"></span><span style="--x:49px;--y:12px;--d:.12"></span><span style="--x:87px;--y:12px;--d:.24"></span>
      <span style="--x:125px;--y:12px;--d:.36"></span><span style="--x:163px;--y:12px;--d:.48"></span>
      <span style="--x:30px;--y:36px;--d:.08"></span><span style="--x:68px;--y:36px;--d:.20"></span><span style="--x:106px;--y:36px;--d:.32"></span>
      <span style="--x:144px;--y:36px;--d:.44"></span>
      <span style="--x:11px;--y:60px;--d:.16"></span><span style="--x:49px;--y:60px;--d:.28"></span><span style="--x:87px;--y:60px;--d:.40"></span>
      <span style="--x:125px;--y:60px;--d:.52"></span><span style="--x:163px;--y:60px;--d:.64"></span>
      <span class="vl-matrix-neon-node"></span>
    </div>`,
    css: `.vl-matrix-neon-mesh {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 29%, #17385b);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-linear-gradient(90deg, #050d15 0 30px, #06101f 30px 31px), #070f1c;
}
.vl-matrix-neon-mesh span {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 76%, #e9f3ff);
  transform: scale(.62);
  opacity: .2;
  animation: vl-matrix4-neon-dot calc(var(--loader-speed) * 1.85) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-neon-mesh span:nth-child(5n) {
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 52%, #fff);
}
.vl-matrix-neon-node {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 14px;
  margin: -7px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 70%, #fff);
  animation: vl-matrix4-neon-core calc(var(--loader-speed) * 1.85) ease-in-out infinite;
}
@keyframes vl-matrix4-neon-dot {
  0%, 100% { transform: scale(.45); opacity: .16; }
  50% { transform: scale(1.08); opacity: .96; }
}
@keyframes vl-matrix4-neon-core {
  0%, 100% { transform: scale(.65); box-shadow: 0 0 9px transparent; }
  50% { transform: scale(1.16); box-shadow: 0 0 15px color-mix(in srgb, var(--loader-accent) 72%, transparent); }
}`
  },
  {
    id: 'matrix-binary-cascade-latch',
    name: 'Binary Cascade Latch',
    category: 'Matrix',
    tech: 'CSS Text',
    description: 'Binary columns latch on and off in controlled bursts across stacked channels.',
    markup: `<div class="vl-matrix-binary-latch" aria-hidden="true">
      <span class="vl-matrix-latch-col" style="--h:56px;--x:14px;--d:0"></span>
      <span class="vl-matrix-latch-col" style="--h:34px;--x:43px;--d:.14"></span>
      <span class="vl-matrix-latch-col" style="--h:74px;--x:72px;--d:.28"></span>
      <span class="vl-matrix-latch-col" style="--h:43px;--x:101px;--d:.42"></span>
      <span class="vl-matrix-latch-col" style="--h:62px;--x:130px;--d:.56"></span>
      <span class="vl-matrix-latch-col" style="--h:52px;--x:159px;--d:.7"></span>
      <span class="vl-matrix-latch-caption">10 11 01 10</span>
    </div>`,
    css: `.vl-matrix-binary-latch {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1a3d67);
  border-radius: 13px;
  overflow: hidden;
  background:
    linear-gradient(180deg, #04101d, #0a2040 60%, #04101c);
}
.vl-matrix-latch-col {
  position: absolute;
  left: var(--x);
  bottom: 10px;
  width: 12px;
  height: var(--h);
  border-radius: 7px;
  transform-origin: bottom center;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 84%, transparent), color-mix(in srgb, var(--loader-accent) 28%, transparent));
  animation: vl-matrix4-latch-col calc(var(--loader-speed) * 2.05) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-latch-caption {
  position: absolute;
  left: 8px;
  bottom: 14px;
  color: color-mix(in srgb, var(--loader-accent) 70%, #f2f7ff);
  font: 700 8px/1 ui-monospace, SFMono-Regular, Consolas, monospace;
  opacity: .46;
  letter-spacing: .15em;
}
@keyframes vl-matrix4-latch-col {
  0%, 100% { transform: scaleY(.26); opacity: .16; }
  38%, 64% { transform: scaleY(1); opacity: .94; }
}`
  },
  {
    id: 'matrix-checkpoint-glyphfield',
    name: 'Checkpoint Glyphfield',
    category: 'Matrix',
    tech: 'CSS Text',
    description: 'Tiny glyph fields flash when checkpoints advance through a rolling frame.',
    markup: `<div class="vl-matrix-glyphfield" aria-hidden="true">
      <span style="--x:16;--y:18;--d:0" data-ch="A"></span>
      <span style="--x:42;--y:28;--d:.15" data-ch="B"></span>
      <span style="--x:68;--y:44;--d:.3" data-ch="C"></span>
      <span style="--x:94;--y:34;--d:.45" data-ch="D"></span>
      <span style="--x:120;--y:20;--d:.6" data-ch="E"></span>
      <span style="--x:146;--y:46;--d:.75" data-ch="F"></span>
      <span style="--x:170;--y:56;--d:.9" data-ch="G"></span>
    </div>`,
    css: `.vl-matrix-glyphfield {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #173d64);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(150deg, #050d18, #0c2542);
}
.vl-matrix-glyphfield span {
  position: absolute;
  left: calc(var(--x) * 1px);
  top: calc(var(--y) * 1px);
  width: 13px;
  height: 14px;
  color: color-mix(in srgb, var(--loader-accent) 76%, #d4e3f2);
  font: 800 9px/14px ui-monospace, Consolas, SFMono-Regular, monospace;
  text-align: center;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 46%, #fff);
  border-radius: 3px;
  opacity: .2;
  animation: vl-matrix4-glyphfield-dot calc(var(--loader-speed) * 1.9) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-glyphfield span::before {
  content: attr(data-ch);
}
@keyframes vl-matrix4-glyphfield-dot {
  0%, 100% { transform: translateY(0) scale(.55); opacity: .12; }
  40%, 70% { transform: translateY(-5px) scale(1); opacity: .94; }
}`
  },
  {
    id: 'matrix-threaded-gridwave',
    name: 'Threaded Gridwave',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Grid threads ripple in opposing phase and wrap around hidden checkpoints.',
    markup: `<div class="vl-matrix-thread-wave" aria-hidden="true">
      <span class="vl-matrix-thread" style="--line:18px;--d:0"></span>
      <span class="vl-matrix-thread" style="--line:40px;--d:.18"></span>
      <span class="vl-matrix-thread" style="--line:62px;--d:.36"></span>
      <span class="vl-matrix-thread" style="--line:84px;--d:.54"></span>
      <span class="vl-matrix-thread" style="--line:106px;--d:.72"></span>
      <span class="vl-matrix-thread-connector"></span>
    </div>`,
    css: `.vl-matrix-thread-wave {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #123e63);
  border-radius: 14px;
  overflow: hidden;
  background: #060f1e;
}
.vl-matrix-thread {
  position: absolute;
  left: 8px;
  right: 8px;
  top: var(--line);
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 14%, transparent), color-mix(in srgb, var(--loader-accent) 72%, #fff), color-mix(in srgb, var(--loader-accent) 14%, transparent));
  animation: vl-matrix4-thread-wave calc(var(--loader-speed) * 1.9) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-thread-connector {
  position: absolute;
  left: 50%;
  top: 12px;
  width: 0;
  height: 80px;
  border-left: 1px dashed color-mix(in srgb, var(--loader-accent) 34%, transparent);
  transform: translateX(-50%);
  animation: vl-matrix4-thread-connector calc(var(--loader-speed) * 1.9) linear infinite;
}
@keyframes vl-matrix4-thread-wave {
  0% { transform: scaleX(.15); opacity: .12; }
  44% { transform: scaleX(1); opacity: .92; }
  100% { transform: scaleX(.15); opacity: .12; }
}
@keyframes vl-matrix4-thread-connector {
  0%, 100% { height: 0; opacity: .12; }
  40%, 60% { height: 84px; opacity: .85; }
}`
  },
  {
    id: 'matrix-segmented-fade-stack',
    name: 'Segmented Fade Stack',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Stacked segments fade and recover with offset cadence, like layered checksum windows.',
    markup: `<div class="vl-matrix-fade-stack" aria-hidden="true">
      <span style="--top:12px;--w:58px;--d:0"></span>
      <span style="--top:34px;--w:98px;--d:.16"></span>
      <span style="--top:56px;--w:72px;--d:.32"></span>
      <span style="--top:78px;--w:118px;--d:.48"></span>
      <span class="vl-matrix-fade-core"></span>
    </div>`,
    css: `.vl-matrix-fade-stack {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 27%, #18456b);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(180deg, #050f1f, #0a2240 64%, #040d19);
}
.vl-matrix-fade-stack span {
  position: absolute;
  left: 12px;
  top: var(--top);
  width: var(--w);
  height: 12px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--loader-accent) 76%, #dce9f7);
  opacity: .22;
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 24%, transparent);
  animation: vl-matrix4-fade-stack calc(var(--loader-speed) * 2.1) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-fade-stack span:nth-child(2) { animation-delay: calc(var(--d) * 1s); }
.vl-matrix-fade-stack span:nth-child(3) { animation-delay: calc(var(--d) * 1s); animation-duration: calc(var(--loader-speed) * 1.86); }
.vl-matrix-fade-stack span:nth-child(4) { animation-delay: calc(var(--d) * 1s); animation-duration: calc(var(--loader-speed) * 2.32); }
.vl-matrix-fade-core {
  position: absolute;
  left: 86px;
  top: 49px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translate(-50%, -50%);
  animation: vl-matrix4-fade-core calc(var(--loader-speed) * 2.1) ease-in-out infinite;
}
@keyframes vl-matrix4-fade-stack {
  0%, 100% { opacity: .16; transform: scale(.62); }
  50% { opacity: .92; transform: scale(1); }
}
@keyframes vl-matrix4-fade-core {
  0%, 100% { opacity: .4; transform: translate(-50%, -50%) scale(.62); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.16); }
}`
  }
];
