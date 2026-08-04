export const matrixPack16LoadersB = [
  {
    id: 'matrix-neon-pulse-cascade',
    name: 'Neon Pulse Cascade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Neon channels open and close in cascaded timing before stabilizing into a full matrix.',
    markup: `<div class="vl-matrix16-neon-cascade" aria-hidden="true">
      <span class="vl-matrix16-pulse" style="--x:8px;--d:0"></span>
      <span class="vl-matrix16-pulse" style="--x:44px;--d:.13"></span>
      <span class="vl-matrix16-pulse" style="--x:80px;--d:.26"></span>
      <span class="vl-matrix16-pulse" style="--x:116px;--d:.39"></span>
      <span class="vl-matrix16-pulse" style="--x:152px;--d:.52"></span>
      <span class="vl-matrix16-cascade-core"></span>
    </div>`,
    css: `.vl-matrix16-neon-cascade {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #16517a);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-linear-gradient(90deg, #051321 0 12px, #061a2f 12px 13px, #051321 13px 25px),
    radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 10%, transparent), transparent 52%);
}
.vl-matrix16-pulse {
  position: absolute;
  top: 26px;
  left: var(--x);
  width: 8px;
  height: 56px;
  border-radius: 4px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #e5f4ff), transparent);
  transform-origin: center;
  animation: vl-matrix16-neon-pulse calc(var(--loader-speed) * 1.58) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix16-cascade-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  opacity: .86;
  animation: vl-matrix16-neon-core calc(var(--loader-speed) * 1.58) linear infinite;
}
@keyframes vl-matrix16-neon-pulse {
  0%, 100% { transform: scaleY(.34); opacity: .2; }
  50% { transform: scaleY(1); opacity: .96; }
}
@keyframes vl-matrix16-neon-core {
  0%, 100% { transform: scale(.6); opacity: .18; }
  50% { transform: scale(1.22); opacity: 1; }
}`
  },
  {
    id: 'matrix-binary-fabric-bloom',
    name: 'Binary Fabric Bloom',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Binary shards form a woven lattice that blooms then settles into synchronized fabric lines.',
    markup: `<div class="vl-matrix16-binary-bloom" aria-hidden="true">
      <span style="--x:10px;--y:14px;--d:0;--w:24px"></span>
      <span style="--x:40px;--y:14px;--d:.12;--w:28px"></span>
      <span style="--x:74px;--y:28px;--d:.24;--w:22px"></span>
      <span style="--x:104px;--y:14px;--d:.36;--w:28px"></span>
      <span style="--x:138px;--y:28px;--d:.48;--w:24px"></span>
      <span style="--x:168px;--y:14px;--d:.6;--w:16px"></span>
      <span style="--x:10px;--y:72px;--d:.18;--w:32px"></span>
      <span style="--x:46px;--y:86px;--d:.3;--w:22px"></span>
      <span style="--x:76px;--y:72px;--d:.42;--w:30px"></span>
      <span style="--x:114px;--y:86px;--d:.54;--w:24px"></span>
      <span style="--x:150px;--y:72px;--d:.66;--w:32px"></span>
    </div>`,
    css: `.vl-matrix16-binary-bloom {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #153d5d);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 24%, color-mix(in srgb, var(--loader-accent) 18%, transparent), #050f1a 58%);
}
.vl-matrix16-binary-bloom span {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--w);
  height: 3px;
  border-radius: 99px;
  background: color-mix(in srgb, var(--loader-accent) 90%, #e7f4ff);
  opacity: .2;
  animation: vl-matrix16-binary-bloom calc(var(--loader-speed) * 1.48) cubic-bezier(.2, .55, .2, 1) infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix16-binary-bloom {
  0%, 100% { transform: scaleX(.38); opacity: .15; }
  40%, 65% { transform: scaleX(1); opacity: .95; }
}`
  },
  {
    id: 'matrix-spiral-fragment-cascade',
    name: 'Spiral Fragment Cascade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Fragment pieces move along spiral tracks, then converge into a compact checksum shape.',
    markup: `<div class="vl-matrix16-spiral-frag" aria-hidden="true">
      <span class="vl-matrix16-frag" style="--r:14px;--a:0;--d:0"></span>
      <span class="vl-matrix16-frag" style="--r:20px;--a:72deg;--d:.14"></span>
      <span class="vl-matrix16-frag" style="--r:26px;--a:144deg;--d:.28"></span>
      <span class="vl-matrix16-frag" style="--r:32px;--a:216deg;--d:.42"></span>
      <span class="vl-matrix16-frag" style="--r:38px;--a:288deg;--d:.56"></span>
      <span class="vl-matrix16-frag-core"></span>
    </div>`,
    css: `.vl-matrix16-spiral-frag {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #154f7b);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(165deg, #061422, #0a233b 62%, #04111d);
  perspective: 280px;
}
.vl-matrix16-frag {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 88%, #d8f1ff);
  transform: rotate(var(--a)) translate(var(--r)) rotate(calc(-1 * var(--a))) scale(.44);
  transform-origin: center;
  animation: vl-matrix16-frag calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix16-frag-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #f4fbff);
  animation: vl-matrix16-frag-core calc(var(--loader-speed) * 1.5) linear infinite;
}
@keyframes vl-matrix16-frag {
  0%, 100% { transform: rotate(calc(var(--a) + 0deg)) translate(var(--r)) scale(.45); opacity: .22; }
  50% { transform: rotate(calc(var(--a) + 360deg)) translate(calc(var(--r) + 8px)) scale(1.05); opacity: .95; }
}
@keyframes vl-matrix16-frag-core {
  0%, 100% { transform: scale(.8); opacity: .18; }
  50% { transform: scale(1.25); opacity: .92; }
}`
  },
  {
    id: 'matrix-quantum-vortex-ribbon',
    name: 'Quantum Vortex Ribbon',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A braided ribbon enters a vortex channel and unspools into stable lattice chords.',
    markup: `<div class="vl-matrix16-vortex-ribbon" aria-hidden="true">
      <span class="vl-matrix16-ribbon" style="--d:0;--o:11px"></span>
      <span class="vl-matrix16-ribbon" style="--d:.2;--o:43px"></span>
      <span class="vl-matrix16-ribbon" style="--d:.4;--o:75px"></span>
      <span class="vl-matrix16-ribbon" style="--d:.6;--o:107px"></span>
      <span class="vl-matrix16-ribbon" style="--d:.8;--o:139px"></span>
      <span class="vl-matrix16-vortex-core"></span>
    </div>`,
    css: `.vl-matrix16-vortex-ribbon {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #184c74);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(130deg, #061b31 0, #0a2f4e 62%, #04111e);
}
.vl-matrix16-ribbon {
  position: absolute;
  left: var(--o);
  top: 0;
  width: 14px;
  height: 108px;
  border-radius: 999px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 80%, #e7f3fd), transparent);
  transform: perspective(150px) rotateY(38deg);
  transform-origin: center;
  animation: vl-matrix16-ribbon calc(var(--loader-speed) * 1.66) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix16-vortex-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix16-ribbon-core calc(var(--loader-speed) * 1.66) linear infinite;
}
@keyframes vl-matrix16-ribbon {
  0%, 100% { transform: perspective(150px) rotateY(38deg) scaleX(.46); opacity: .15; }
  50% { transform: perspective(150px) rotateY(118deg) scaleX(1.06); opacity: .95; }
}
@keyframes vl-matrix16-ribbon-core {
  0%, 100% { transform: scale(.72); opacity: .22; }
  50% { transform: scale(1.16); opacity: 1; }
}`
  },
  {
    id: 'matrix-voxel-radiance-matrix',
    name: 'Voxel Radiance Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Voxel bars glow through shifting radiance layers that synchronize on each checksum pulse.',
    markup: `<div class="vl-matrix16-voxel-radiance" aria-hidden="true">
      <span style="--x:16px;--h:34px;--d:0;--z:4px"></span>
      <span style="--x:44px;--h:52px;--d:.14;--z:12px"></span>
      <span style="--x:72px;--h:40px;--d:.28;--z:8px"></span>
      <span style="--x:100px;--h:58px;--d:.42;--z:2px"></span>
      <span style="--x:128px;--h:46px;--d:.56;--z:10px"></span>
      <span style="--x:156px;--h:30px;--d:.7;--z:6px"></span>
      <span class="vl-matrix16-voxel-core"></span>
    </div>`,
    css: `.vl-matrix16-voxel-radiance {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f5a82);
  border-radius: 14px;
  overflow: hidden;
  background:
    radial-gradient(circle at 54% 52%, color-mix(in srgb, var(--loader-accent) 16%, transparent), #06101e 66%),
    repeating-linear-gradient(90deg, #061a2d 0 12px, #05111e 12px 13px);
}
.vl-matrix16-voxel-radiance span {
  position: absolute;
  left: var(--x);
  bottom: 10px;
  width: 12px;
  height: var(--h);
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 70%, #e8f6ff);
  opacity: .28;
  transform-style: preserve-3d;
  transform: rotateX(15deg) translateZ(var(--z));
  animation: vl-matrix16-voxel-bar calc(var(--loader-speed) * 1.76) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix16-voxel-core {
  position: absolute;
  left: 50%;
  bottom: 50px;
  width: 8px;
  height: 8px;
  margin-left: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix16-voxel-core calc(var(--loader-speed) * 1.76) linear infinite;
}
@keyframes vl-matrix16-voxel-bar {
  0%, 100% { transform: rotateX(15deg) translateZ(var(--z)) scaleY(.58); opacity: .18; }
  50% { transform: rotateX(15deg) translateZ(var(--z)) scaleY(1); opacity: .96; }
}
@keyframes vl-matrix16-voxel-core {
  0%, 100% { transform: scale(.78); opacity: .2; }
  50% { transform: scale(1.18); opacity: .98; }
}`
  }
];
