export const matrixPack17LoadersD = [
  {
    id: 'matrix-vector-gate-glyph',
    name: 'Vector Gate Glyph',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A gate of glowing vectors opens and closes in interleaving radial glyph strokes.',
    markup: `<div class="vl-matrix17d-glyph-gate" role="img" aria-label="Vector gate glyph">
      <span class="vl-matrix17d-glyph vl-matrix17d-glyph-a" style="--a:0deg;--d:0"></span>
      <span class="vl-matrix17d-glyph vl-matrix17d-glyph-a" style="--a:60deg;--d:.12"></span>
      <span class="vl-matrix17d-glyph vl-matrix17d-glyph-a" style="--a:120deg;--d:.24"></span>
      <span class="vl-matrix17d-glyph vl-matrix17d-glyph-b" style="--a:180deg;--d:.36"></span>
      <span class="vl-matrix17d-glyph vl-matrix17d-glyph-b" style="--a:240deg;--d:.48"></span>
      <span class="vl-matrix17d-glyph vl-matrix17d-glyph-b" style="--a:300deg;--d:.6"></span>
      <span class="vl-matrix17d-gate-core"></span>
    </div>`,
    css: `.vl-matrix17d-glyph-gate {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #204f74);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 16%, transparent), #040d16 66%);
}
.vl-matrix17d-glyph {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 34px;
  height: 34px;
  margin: -17px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 84%, #ddf4ff);
  border-radius: 50% 50% 0 0;
  transform: rotate(var(--a));
  animation: vl-matrix17d-glyph calc(var(--loader-speed) * 1.55) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17d-glyph-b {
  border-radius: 0 0 50% 50%;
  width: 30px;
  height: 30px;
  margin: -15px;
  border-style: dashed;
}
.vl-matrix17d-gate-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4.5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17d-glyph-core calc(var(--loader-speed) * 1.55) ease-in-out infinite;
}
@keyframes vl-matrix17d-glyph {
  0% { transform: rotate(var(--a)) scale(.5); opacity: .2; }
  50% { transform: rotate(calc(var(--a) + 180deg)) scale(1.14); opacity: .95; }
  100% { transform: rotate(calc(var(--a) + 360deg)) scale(.5); opacity: .2; }
}
@keyframes vl-matrix17d-glyph-core {
  0%, 100% { transform: scale(.82); opacity: .18; }
  50% { transform: scale(1.24); opacity: .95; }
}`
  },
  {
    id: 'matrix-halo-rib-lattice',
    name: 'Halo Rib Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Fine halo ribs expand and contract, holding a soft radial matrix in balance.',
    markup: `<div class="vl-matrix17d-halo-lattice" role="img" aria-label="Halo rib lattice">
      <span class="vl-matrix17d-rib" style="--r:16px;--d:0"></span>
      <span class="vl-matrix17d-rib" style="--r:24px;--d:.1"></span>
      <span class="vl-matrix17d-rib" style="--r:32px;--d:.2"></span>
      <span class="vl-matrix17d-rib" style="--r:40px;--d:.3"></span>
      <span class="vl-matrix17d-rib" style="--r:48px;--d:.4"></span>
      <span class="vl-matrix17d-rib" style="--r:56px;--d:.5"></span>
      <span class="vl-matrix17d-rib" style="--r:64px;--d:.6"></span>
      <span class="vl-matrix17d-rib" style="--r:72px;--d:.7"></span>
    </div>`,
    css: `.vl-matrix17d-halo-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #20567d);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(150deg, #041824, #0a2e4f 60%, #040d17);
}
.vl-matrix17d-rib {
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(var(--r) * 2);
  height: calc(var(--r) * 2);
  margin: calc(var(--r) * -1);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 58%, #dff4ff);
  border-radius: 50%;
  border-top-color: transparent;
  border-right-color: transparent;
  animation: vl-matrix17d-rib calc(var(--loader-speed) * 1.6) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17d-rib {
  to { transform: rotate(360deg) scale(1); opacity: .78; }
}`
  },
  {
    id: 'matrix-drift-vector-orbit',
    name: 'Drift Vector Orbit',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A stream of vectors drifts around an orbital path with synchronized glow pulses.',
    markup: `<div class="vl-matrix17d-drift-orbit" role="img" aria-label="Drift vector orbit">
      <span class="vl-matrix17d-orbit-dot" style="--a:0deg;--d:0"></span>
      <span class="vl-matrix17d-orbit-dot" style="--a:72deg;--d:.12"></span>
      <span class="vl-matrix17d-orbit-dot" style="--a:144deg;--d:.24"></span>
      <span class="vl-matrix17d-orbit-dot" style="--a:216deg;--d:.36"></span>
      <span class="vl-matrix17d-orbit-dot" style="--a:288deg;--d:.48"></span>
      <span class="vl-matrix17d-orbit-core"></span>
    </div>`,
    css: `.vl-matrix17d-drift-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #184c72);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, #071926 0 22%, #040c16 64%);
}
.vl-matrix17d-orbit-dot {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 84%, #ebf8ff);
  transform: rotate(var(--a)) translateX(32px);
  animation: vl-matrix17d-orbit calc(var(--loader-speed) * 1.3) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17d-orbit-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17d-orbit-core calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
@keyframes vl-matrix17d-orbit {
  to { transform: rotate(calc(var(--a) + 360deg)) translateX(32px); }
}
@keyframes vl-matrix17d-orbit-core {
  0%, 100% { transform: scale(.74); opacity: .22; }
  50% { transform: scale(1.24); opacity: .96; }
}`
  },
  {
    id: 'matrix-echo-cascade-rings',
    name: 'Echo Cascade Rings',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Cascading echo rings bounce through alternating depths and phase delays.',
    markup: `<div class="vl-matrix17d-echo-rings" role="img" aria-label="Echo cascade rings">
      <span class="vl-matrix17d-echo" style="--s:24px;--x:24px;--y:24px;--d:0"></span>
      <span class="vl-matrix17d-echo" style="--s:36px;--x:66px;--y:16px;--d:.12"></span>
      <span class="vl-matrix17d-echo" style="--s:48px;--x:108px;--y:20px;--d:.24"></span>
      <span class="vl-matrix17d-echo" style="--s:60px;--x:50px;--y:36px;--d:.36"></span>
      <span class="vl-matrix17d-echo" style="--s:72px;--x:98px;--y:40px;--d:.48"></span>
      <span class="vl-matrix17d-echo" style="--s:84px;--x:22px;--y:56px;--d:.6"></span>
    </div>`,
    css: `.vl-matrix17d-echo-rings {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1c587e);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(140deg, #05111d, #0b2d47 64%, #040c16);
}
.vl-matrix17d-echo {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--s);
  height: var(--s);
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 82%, #e0f3ff);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 34%, transparent);
  animation: vl-matrix17d-echo calc(var(--loader-speed) * 1.45) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
  opacity: .24;
}
@keyframes vl-matrix17d-echo {
  0% { transform: scale(.52); opacity: .18; }
  50% { transform: scale(1.08); opacity: .86; }
  100% { transform: scale(.52); opacity: .18; }
}`
  },
  {
    id: 'matrix-prism-braid-grid',
    name: 'Prism Braid Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Diagonal prisms braid into a moving grid with delayed cross-axis pulses.',
    markup: `<div class="vl-matrix17d-prism-grid" role="img" aria-label="Prism braid grid">
      <span style="--x:16px;--d:0"></span>
      <span style="--x:46px;--d:.1"></span>
      <span style="--x:76px;--d:.2"></span>
      <span style="--x:106px;--d:.3"></span>
      <span style="--x:136px;--d:.4"></span>
      <span style="--x:166px;--d:.5"></span>
      <span class="vl-matrix17d-prism-core"></span>
    </div>`,
    css: `.vl-matrix17d-prism-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1a5d80);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, #071c31 0 18%, #040b14 64%);
}
.vl-matrix17d-prism-grid span {
  position: absolute;
  top: 0;
  left: var(--x);
  width: 7px;
  height: 108px;
  border-radius: 4px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 76%, #f0fbff), transparent);
  transform-origin: center;
  animation: vl-matrix17d-prism calc(var(--loader-speed) * 1.3) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17d-prism-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17d-prism-core calc(var(--loader-speed) * 1.3) linear infinite;
}
@keyframes vl-matrix17d-prism {
  0%, 100% { transform: scaleY(.3) skewX(-4deg); opacity: .2; }
  50% { transform: scaleY(1) skewX(4deg); opacity: .94; }
}
@keyframes vl-matrix17d-prism-core {
  0%, 100% { transform: scale(.78); opacity: .2; }
  50% { transform: scale(1.36); opacity: .96; }
}`
  },
  {
    id: 'matrix-photon-ridge-array',
    name: 'Photon Ridge Array',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Sharp photon ridges flicker into stacked ridges that rotate with subtle offsets.',
    markup: `<div class="vl-matrix17d-photon-ridge" role="img" aria-label="Photon ridge array">
      <span class="vl-matrix17d-ridge" style="--y:12px;--d:0"></span>
      <span class="vl-matrix17d-ridge" style="--y:32px;--d:.11"></span>
      <span class="vl-matrix17d-ridge" style="--y:52px;--d:.22"></span>
      <span class="vl-matrix17d-ridge" style="--y:72px;--d:.33"></span>
      <span class="vl-matrix17d-ridge" style="--y:92px;--d:.44"></span>
      <span class="vl-matrix17d-ridge vl-matrix17d-ridge-core"></span>
    </div>`,
    css: `.vl-matrix17d-photon-ridge {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f5d84);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(155deg, #051420, #0a2f4f 62%, #040c17);
}
.vl-matrix17d-ridge {
  position: absolute;
  left: 0;
  top: var(--y);
  width: 190px;
  height: 10px;
  border-radius: 99px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 74%, #dff5ff), transparent);
  animation: vl-matrix17d-ridge calc(var(--loader-speed) * 1.6) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17d-ridge-core {
  top: 49px;
  height: 10px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 94%, #f2fbff), transparent);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 48%, transparent);
  animation-duration: calc(var(--loader-speed) * 1.1);
}
@keyframes vl-matrix17d-ridge {
  0%, 100% { transform: translateX(-28px) scaleX(.32); opacity: .18; }
  50% { transform: translateX(0) scaleX(1); opacity: .94; }
}`
  },
  {
    id: 'matrix-luminous-thread-spiral',
    name: 'Luminous Thread Spiral',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Threaded arcs twist into a luminous spiral with slow phase inversion.',
    markup: `<div class="vl-matrix17d-thread-spiral" role="img" aria-label="Luminous thread spiral">
      <span class="vl-matrix17d-thread" style="--r:20px;--p:0;--d:0"></span>
      <span class="vl-matrix17d-thread" style="--r:28px;--p:28;--d:.14"></span>
      <span class="vl-matrix17d-thread" style="--r:36px;--p:56;--d:.28"></span>
      <span class="vl-matrix17d-thread" style="--r:44px;--p:84;--d:.42"></span>
      <span class="vl-matrix17d-thread" style="--r:52px;--p:112;--d:.56"></span>
      <span class="vl-matrix17d-thread-core"></span>
    </div>`,
    css: `.vl-matrix17d-thread-spiral {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #21597b);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 58%, #071c2f 0 12px, #040c16 68%);
}
.vl-matrix17d-thread {
  position: absolute;
  left: 50%;
  top: 54px;
  width: var(--r);
  height: 2px;
  margin-top: -1px;
  transform-origin: 0 50%;
  border-radius: 99px;
  background: color-mix(in srgb, var(--loader-accent) 84%, #f0fbff);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 48%, transparent);
  transform: translate(-50%, -50%) rotate(var(--p));
  animation: vl-matrix17d-thread calc(var(--loader-speed) * 1.75) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17d-thread-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17d-thread-core calc(var(--loader-speed) * 1.75) ease-in-out infinite;
}
@keyframes vl-matrix17d-thread {
  0%, 100% { transform: translate(-50%, -50%) rotate(var(--p)) scaleX(.38); opacity: .2; }
  50% { transform: translate(-50%, -50%) rotate(calc(var(--p) + 180deg)) scaleX(1); opacity: .94; }
}
@keyframes vl-matrix17d-thread-core {
  0%, 100% { transform: scale(.74); opacity: .24; }
  50% { transform: scale(1.26); opacity: .96; }
}`
  },
  {
    id: 'matrix-cascade-ghost-frame',
    name: 'Cascade Ghost Frame',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Ghost-like frames cascade through opacity and rotation with matrix-like phase resets.',
    markup: `<div class="vl-matrix17d-ghost-frame" role="img" aria-label="Cascade ghost frame">
      <span class="vl-matrix17d-frame" style="--s:130px;--d:0"></span>
      <span class="vl-matrix17d-frame" style="--s:108px;--d:.08"></span>
      <span class="vl-matrix17d-frame" style="--s:86px;--d:.16"></span>
      <span class="vl-matrix17d-frame" style="--s:64px;--d:.24"></span>
      <span class="vl-matrix17d-frame" style="--s:42px;--d:.32"></span>
      <span class="vl-matrix17d-frame-core"></span>
    </div>`,
    css: `.vl-matrix17d-ghost-frame {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 20%, #205d82);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(150deg, #05131d, #0a2f4e 62%, #040d18);
}
.vl-matrix17d-frame {
  position: absolute;
  left: 50%;
  top: 54px;
  width: var(--s);
  height: var(--s);
  margin-left: calc(var(--s) / -2);
  margin-top: calc(var(--s) * -0.55);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, #e4f5ff);
  border-radius: 5px;
  transform: rotate(18deg);
  animation: vl-matrix17d-frame calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
  opacity: .24;
}
.vl-matrix17d-frame-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #f3fbff);
  animation: vl-matrix17d-frame-core calc(var(--loader-speed) * 1.55) linear infinite;
}
@keyframes vl-matrix17d-frame {
  0%, 100% { transform: rotate(18deg) scale(.58); opacity: .13; }
  50% { transform: rotate(200deg) scale(1.12); opacity: .92; }
}
@keyframes vl-matrix17d-frame-core {
  0%, 100% { transform: scale(.74); opacity: .22; }
  50% { transform: scale(1.28); opacity: .94; }
}`
  },
  {
    id: 'matrix-fractional-scan-node',
    name: 'Fractional Scan Node',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Fractional scan lines converge into nodes that blink at periodic matrix intervals.',
    markup: `<div class="vl-matrix17d-scan-node" role="img" aria-label="Fractional scan node">
      <span style="--x:12px;--d:0"></span>
      <span style="--x:44px;--d:.1"></span>
      <span style="--x:76px;--d:.2"></span>
      <span style="--x:108px;--d:.3"></span>
      <span style="--x:140px;--d:.4"></span>
      <span style="--x:172px;--d:.5"></span>
      <span class="vl-matrix17d-scan-core"></span>
    </div>`,
    css: `.vl-matrix17d-scan-node {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1c6184);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, #061625 0 20%, #040c15 72%);
}
.vl-matrix17d-scan-node span {
  position: absolute;
  top: 0;
  left: var(--x);
  width: 6px;
  height: 108px;
  border-radius: 99px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 82%, #eaf8ff), transparent);
  animation: vl-matrix17d-scan calc(var(--loader-speed) * 1.35) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17d-scan-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 64%, transparent);
  animation: vl-matrix17d-scan-core calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
@keyframes vl-matrix17d-scan {
  0%, 100% { transform: scaleY(.26) opacity: .16; }
  50% { transform: scaleY(1); opacity: .92; }
}
@keyframes vl-matrix17d-scan-core {
  0%, 100% { transform: scale(.78); opacity: .22; }
  50% { transform: scale(1.22); opacity: .96; }
}`
  },
  {
    id: 'matrix-cascade-vector-bay',
    name: 'Cascade Vector Bay',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Vector bays cascade through fractional segments with alternating phase and glowing accumulation.',
    markup: `<div class="vl-matrix17d-vector-bay" role="img" aria-label="Cascade vector bay">
      <span style="--x:14px;--d:0"></span>
      <span style="--x:42px;--d:.1"></span>
      <span style="--x:70px;--d:.2"></span>
      <span style="--x:98px;--d:.3"></span>
      <span style="--x:126px;--d:.4"></span>
      <span style="--x:154px;--d:.5"></span>
      <span class="vl-matrix17d-bay-core"></span>
    </div>`,
    css: `.vl-matrix17d-vector-bay {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #23658f);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, #082338 0 18%, #040c17 66%);
}
.vl-matrix17d-vector-bay span {
  position: absolute;
  left: var(--x);
  top: -4px;
  width: 8px;
  height: 118px;
  border-radius: 99px;
  transform-origin: center;
  opacity: .2;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 76%, #e7f5ff), transparent);
  animation: vl-matrix17d-bay calc(var(--loader-speed) * 1.4) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17d-bay-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: var(--loader-accent);
  animation: vl-matrix17d-bay-core calc(var(--loader-speed) * 1.4) linear infinite;
}
@keyframes vl-matrix17d-bay {
  0%, 100% { transform: translateY(0) scaleX(.35); opacity: .15; }
  50% { transform: translateY(4px) scaleX(1); opacity: .92; }
}
@keyframes vl-matrix17d-bay-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.74) rotate(0deg); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.24) rotate(180deg); opacity: .95; }
}
`
  }
];
