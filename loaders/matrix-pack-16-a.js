export const matrixPack16LoadersA = [
  {
    id: 'matrix-cosmic-lens-orbit',
    name: 'Cosmic Lens Orbit',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Orbiting lens segments pulse in radial depth and collapse into one luminous center.',
    markup: `<div class="vl-matrix16-cosmic-lens" aria-hidden="true">
      <span class="vl-matrix16-lens-ring" style="--d:0;--r:6px;--c:52%;--o:-18px"></span>
      <span class="vl-matrix16-lens-ring" style="--d:.16;--r:10px;--c:24%;--o:-8px"></span>
      <span class="vl-matrix16-lens-ring" style="--d:.32;--r:14px;--c:76%;--o:6px"></span>
      <span class="vl-matrix16-lens-ring" style="--d:.48;--r:18px;--c:37%;--o:16px"></span>
      <span class="vl-matrix16-lens-core"></span>
    </div>`,
    css: `.vl-matrix16-cosmic-lens {
  position: relative;
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #12335a);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 58%, color-mix(in srgb, var(--loader-accent) 22%, transparent), #04111f 68%);
}
.vl-matrix16-lens-ring {
  position: absolute;
  left: calc(95px + var(--o));
  top: 54px;
  width: var(--r);
  height: var(--r);
  border-radius: 50%;
  border: 1.5px solid color-mix(in srgb, var(--loader-accent) 82%, #e9f5ff 18%);
  opacity: .3;
  transform: translate(-50%, -50%);
  animation: vl-matrix16-lens-ring calc(var(--loader-speed) * 1.74) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix16-lens-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  opacity: .8;
  transform: translateX(-50%);
  animation: vl-matrix16-lens-core calc(var(--loader-speed) * 1.74) ease-in-out infinite;
}
@keyframes vl-matrix16-lens-ring {
  0%, 100% { transform: rotate(0deg) scale(.62); opacity: .24; }
  50% { transform: rotate(360deg) scale(1.08); opacity: .94; }
}
@keyframes vl-matrix16-lens-core {
  0%, 100% { transform: translateX(-50%) scale(.9); opacity: .25; }
  50% { transform: translateX(-50%) scale(1.15); opacity: 1; }
}`
  },
  {
    id: 'matrix-mirror-pulse-grid',
    name: 'Mirror Pulse Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Paired mirror lanes mirror pulses in opposite phase across a mirrored matrix.',
    markup: `<div class="vl-matrix16-mirror-grid" aria-hidden="true">
      <span style="--x:14px;--d:0;--h:0.6"></span>
      <span style="--x:42px;--d:.13;--h:0.8"></span>
      <span style="--x:70px;--d:.26;--h:1.0"></span>
      <span style="--x:98px;--d:.39;--h:1.2"></span>
      <span style="--x:126px;--d:.52;--h:1.0"></span>
      <span style="--x:154px;--d:.65;--h:0.8"></span>
      <span class="vl-matrix16-mirror-center"></span>
    </div>`,
    css: `.vl-matrix16-mirror-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #15385a);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(140deg, #061226, #0a243f 52%, #03111f);
}
.vl-matrix16-mirror-grid span {
  position: absolute;
  left: var(--x);
  top: 10px;
  width: 8px;
  height: 86px;
  border-radius: 9px;
  background: color-mix(in srgb, var(--loader-accent) 84%, transparent);
  transform-origin: center;
  transform: scaleY(calc(0.6 + var(--h)));
  opacity: .2;
  animation: vl-matrix16-mirror-bar calc(var(--loader-speed) * 1.58) cubic-bezier(.2, .65, .2, 1) infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix16-mirror-grid span:nth-child(even) {
  left: calc(var(--x) * -1 + 204px);
  animation-delay: calc(1s - (var(--d) * 1s));
}
.vl-matrix16-mirror-center {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix16-mirror-core calc(var(--loader-speed) * 1.58) linear infinite;
}
@keyframes vl-matrix16-mirror-bar {
  0%, 100% { transform: scaleY(calc(0.38 + var(--h))); opacity: .18; }
  50% { transform: scaleY(calc(1.25 + var(--h))); opacity: .96; }
}
@keyframes vl-matrix16-mirror-core {
  0%, 100% { transform: scale(.82); opacity: .2; }
  50% { transform: scale(1.2); opacity: .9; }
}`
  },
  {
    id: 'matrix-gate-tunnel-mesh',
    name: 'Gate Tunnel Mesh',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A layered gate mesh breathes through a tunnel field and remaps itself continuously.',
    markup: `<div class="vl-matrix16-gate-tunnel" aria-hidden="true">
      <span class="vl-matrix16-gate" style="--d:0;--w:34px;--z:0px"></span>
      <span class="vl-matrix16-gate" style="--d:.18;--w:56px;--z:-10px"></span>
      <span class="vl-matrix16-gate" style="--d:.36;--w:78px;--z:-20px"></span>
      <span class="vl-matrix16-gate" style="--d:.54;--w:58px;--z:-12px"></span>
      <span class="vl-matrix16-gate" style="--d:.72;--w:40px;--z:-2px"></span>
    </div>`,
    css: `.vl-matrix16-gate-tunnel {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #19466a);
  border-radius: 14px;
  overflow: hidden;
  background:
    linear-gradient(180deg, #061525 0%, #0a2036 65%, #04111f 100%),
    repeating-linear-gradient(90deg, transparent 0 17px, color-mix(in srgb, var(--loader-accent) 16%, transparent) 17px 18px);
  display: grid;
  place-items: center;
  perspective: 340px;
}
.vl-matrix16-gate {
  position: absolute;
  left: 50%;
  top: 54px;
  width: var(--w);
  height: 2px;
  margin-left: calc(var(--w) / -2);
  border-radius: 99px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 82%, #d8f1ff);
  background: color-mix(in srgb, var(--loader-accent) 46%, transparent);
  transform: translateZ(var(--z)) rotateX(42deg);
  box-shadow: 0 0 18px color-mix(in srgb, var(--loader-accent) 28%, transparent);
  animation: vl-matrix16-gate-mesh calc(var(--loader-speed) * 1.7) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix16-gate:nth-child(even) { animation-name: vl-matrix16-gate-mesh-rev; }
@keyframes vl-matrix16-gate-mesh {
  0%, 100% { transform: translateZ(var(--z)) rotateX(42deg) scaleX(.54); opacity: .22; }
  50% { transform: translateZ(calc(var(--z) + 8px)) rotateX(42deg) scaleX(1.07); opacity: .96; }
}
@keyframes vl-matrix16-gate-mesh-rev {
  0%, 100% { transform: translateZ(var(--z)) rotateX(42deg) scaleX(1.08); opacity: .96; }
  50% { transform: translateZ(calc(var(--z) - 8px)) rotateX(42deg) scaleX(.56); opacity: .22; }
}`
  },
  {
    id: 'matrix-scanline-memory-rings',
    name: 'Scanline Memory Rings',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Concentric memory rings advance scanlines, then rewind into a stable checksum heartbeat.',
    markup: `<div class="vl-matrix16-memory-rings" aria-hidden="true">
      <span style="--d:0;--s:42px"></span>
      <span style="--d:.2;--s:52px"></span>
      <span style="--d:.4;--s:62px"></span>
      <span style="--d:.6;--s:72px"></span>
      <span style="--d:.8;--s:82px"></span>
    </div>`,
    css: `.vl-matrix16-memory-rings {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #13456a);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 58%, #071a2f 0 36%, #040d16 100%);
}
.vl-matrix16-memory-rings span {
  --s: 46px;
  position: absolute;
  left: 50%;
  top: 54px;
  width: var(--s);
  height: var(--s);
  margin-left: calc(var(--s) / -2);
  margin-top: calc(var(--s) / -2);
  border-radius: 50%;
  border: 1px dashed color-mix(in srgb, var(--loader-accent) 84%, #d9f0ff);
  box-shadow: inset 0 0 12px color-mix(in srgb, var(--loader-accent) 36%, transparent);
  animation: vl-matrix16-memory-ring calc(var(--loader-speed) * 1.68) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix16-memory-ring {
  0%, 100% { transform: scale(.45) rotate(0deg); opacity: .18; }
  50% { transform: scale(1.06) rotate(180deg); opacity: .94; }
}`
  },
  {
    id: 'matrix-hologram-axon-net',
    name: 'Hologram Axon Net',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A neural net of axon links flickers in and out while packet markers sweep across.',
    markup: `<div class="vl-matrix16-axon-net" aria-hidden="true">
      <span class="vl-matrix16-axon-line" style="--x:12px;--y:26px;--d:0"></span>
      <span class="vl-matrix16-axon-line" style="--x:62px;--y:26px;--d:.17"></span>
      <span class="vl-matrix16-axon-line" style="--x:112px;--y:26px;--d:.34"></span>
      <span class="vl-matrix16-axon-line" style="--x:12px;--y:54px;--d:.1"></span>
      <span class="vl-matrix16-axon-line" style="--x:62px;--y:54px;--d:.27"></span>
      <span class="vl-matrix16-axon-line" style="--x:112px;--y:54px;--d:.44"></span>
      <span class="vl-matrix16-axon-line" style="--x:12px;--y:82px;--d:.18"></span>
      <span class="vl-matrix16-axon-line" style="--x:62px;--y:82px;--d:.35"></span>
      <span class="vl-matrix16-axon-line" style="--x:112px;--y:82px;--d:.52"></span>
      <span class="vl-matrix16-axon-core"></span>
    </div>`,
    css: `.vl-matrix16-axon-net {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1a4568);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(155deg, #061423 0%, #071c35 58%, #04111f);
}
.vl-matrix16-axon-line {
  --w: 52px;
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 52px;
  height: 4px;
  border-radius: 99px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 82%, #ecf7ff), transparent);
  opacity: .2;
  animation: vl-matrix16-axon-line calc(var(--loader-speed) * 1.6) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix16-axon-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix16-axon-core calc(var(--loader-speed) * 1.6) linear infinite;
}
@keyframes vl-matrix16-axon-line {
  0%, 100% { transform: scaleX(.42); opacity: .12; }
  50% { transform: scaleX(1.14); opacity: .94; }
}
@keyframes vl-matrix16-axon-core {
  0%, 100% { transform: scale(.8); opacity: .2; }
  50% { transform: scale(1.22); opacity: .95; }
}`
  }
];
