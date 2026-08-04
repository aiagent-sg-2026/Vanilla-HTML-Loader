export const matrixPack17LoadersA = [
  {
    id: 'matrix-strobe-cascade-grid',
    name: 'Strobe Cascade Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Alternating strobes sweep through a strict matrix and rebalance into a soft pulse field.',
    markup: `<div class="vl-matrix17-strobe-grid" role="img" aria-label="Strobe cascade grid">
      <span style="--x:12px;--y:10px;--d:0;--h:32px"></span>
      <span style="--x:47px;--y:10px;--d:.09;--h:40px"></span>
      <span style="--x:82px;--y:10px;--d:.18;--h:28px"></span>
      <span style="--x:117px;--y:10px;--d:.27;--h:44px"></span>
      <span style="--x:152px;--y:10px;--d:.36;--h:36px"></span>
      <span style="--x:12px;--y:56px;--d:.12;--h:44px"></span>
      <span style="--x:47px;--y:56px;--d:.21;--h:30px"></span>
      <span style="--x:82px;--y:56px;--d:.3;--h:36px"></span>
      <span style="--x:117px;--y:56px;--d:.39;--h:28px"></span>
      <span style="--x:152px;--y:56px;--d:.48;--h:40px"></span>
    </div>`,
    css: `.vl-matrix17-strobe-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #163f66);
  border-radius: 14px;
  overflow: hidden;
  background:
    repeating-linear-gradient(90deg, #051724 0 10px, #081f35 10px 11px, #051724 11px 21px),
    radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 12%, transparent), transparent 58%);
}
.vl-matrix17-strobe-grid span {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 8px;
  height: var(--h);
  transform-origin: center;
  border-radius: 99px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 90%, #dff2ff), transparent);
  box-shadow: 0 0 6px color-mix(in srgb, var(--loader-accent) 48%, transparent);
  animation: vl-matrix17-strobe calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17-strobe {
  0%, 100% { transform: scaleY(.24); opacity: .2; }
  16%, 74% { transform: scaleY(1); opacity: .9; }
}`
  },
  {
    id: 'matrix-lattice-rhythm-gates',
    name: 'Lattice Rhythm Gates',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A gated lattice opens and closes in rhythmic bursts, creating a living checksum clock.',
    markup: `<div class="vl-matrix17-lattice-gates" role="img" aria-label="Lattice rhythm gates pattern">
      <span style="--x:18px;--d:0;--o:0"></span>
      <span style="--x:46px;--d:.14;--o:2px"></span>
      <span style="--x:74px;--d:.28;--o:-2px"></span>
      <span style="--x:102px;--d:.42;--o:3px"></span>
      <span style="--x:130px;--d:.56;--o:-3px"></span>
      <span style="--x:158px;--d:.7;--o:1px"></span>
      <span class="vl-matrix17-lattice-core"></span>
    </div>`,
    css: `.vl-matrix17-lattice-gates {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1a4b74);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(165deg, #061723 0%, #0a2d49 58%, #04111f 100%);
}
.vl-matrix17-lattice-gates span {
  position: absolute;
  left: var(--x);
  top: 50%;
  width: 16px;
  height: 36px;
  margin-top: -18px;
  border-radius: 2px;
  transform: rotate(28deg) translateY(var(--o));
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 88%, #d9f3ff), transparent);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 40%, transparent);
  animation: vl-matrix17-gates calc(var(--loader-speed) * 1.55) cubic-bezier(.2, .65, .1, 1) infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17-lattice-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 82%, #ecf9ff);
  animation: vl-matrix17-core-drift calc(var(--loader-speed) * 1.2) linear infinite;
}
@keyframes vl-matrix17-gates {
  0%, 100% { transform: rotate(28deg) translateY(var(--o)) scaleY(.2); opacity: .24; }
  50% { transform: rotate(28deg) translateY(calc(var(--o) * -1)) scaleY(1); opacity: .96; }
}
@keyframes vl-matrix17-core-drift { 50% { transform: scale(1.15); opacity: .35; } }`
  },
  {
    id: 'matrix-photon-loom-grid',
    name: 'Photon Loom Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Diagonal photon threads interlace and fold, then snap to a compact pulse seam.',
    markup: `<div class="vl-matrix17-photon-loo" role="img" aria-label="Photon loom grid">
      <span class="vl-matrix17-photon" style="--x:14px;--y:8px;--d:0;--l:74px"></span>
      <span class="vl-matrix17-photon" style="--x:58px;--y:18px;--d:.13;--l:64px"></span>
      <span class="vl-matrix17-photon" style="--x:102px;--y:8px;--d:.26;--l:70px"></span>
      <span class="vl-matrix17-photon" style="--x:146px;--y:18px;--d:.39;--l:60px"></span>
      <span class="vl-matrix17-photon vl-matrix17-photon-alt" style="--x:14px;--y:64px;--d:.52;--l:52px"></span>
      <span class="vl-matrix17-photon vl-matrix17-photon-alt" style="--x:58px;--y:74px;--d:.65;--l:66px"></span>
      <span class="vl-matrix17-photon vl-matrix17-photon-alt" style="--x:102px;--y:64px;--d:.78;--l:58px"></span>
      <span class="vl-matrix17-photon vl-matrix17-photon-alt" style="--x:146px;--y:74px;--d:.91;--l:62px"></span>
    </div>`,
    css: `.vl-matrix17-photon-loo {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5b87);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 18% 22%, color-mix(in srgb, var(--loader-accent) 18%, transparent), #050f1f 52%),
    radial-gradient(circle at 80% 78%, color-mix(in srgb, var(--loader-accent) 10%, transparent), transparent 54%);
}
.vl-matrix17-photon {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 2px;
  height: var(--l);
  border-radius: 99px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #e7f7ff), transparent);
  transform: rotate(18deg);
  transform-origin: center;
  animation: vl-matrix17-photon calc(var(--loader-speed) * 1.7) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17-photon-alt { transform: rotate(-18deg); }
@keyframes vl-matrix17-photon {
  0%, 100% { transform: rotate(18deg) scaleY(.42); opacity: .17; }
  50% { transform: rotate(18deg) scaleY(1); opacity: .94; }
}`
  },
  {
    id: 'matrix-neon-fragment-radar',
    name: 'Neon Fragment Radar',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Neon fragments orbit a radar sweep then settle into a synchronized lattice pulse.',
    markup: `<div class="vl-matrix17-fragment-radar" role="img" aria-label="Neon fragment radar">
      <span class="vl-matrix17-frag" style="--a:0deg;--r:20px;--d:0"></span>
      <span class="vl-matrix17-frag" style="--a:72deg;--r:30px;--d:.12"></span>
      <span class="vl-matrix17-frag" style="--a:144deg;--r:40px;--d:.24"></span>
      <span class="vl-matrix17-frag" style="--a:216deg;--r:32px;--d:.36"></span>
      <span class="vl-matrix17-frag" style="--a:288deg;--r:24px;--d:.48"></span>
      <span class="vl-matrix17-radar-core"></span>
      <span class="vl-matrix17-radar-ring"></span>
    </div>`,
    css: `.vl-matrix17-fragment-radar {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1c4d73);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(160deg, #061320, #0d2b47 56%, #04101f);
}
.vl-matrix17-frag {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 86%, #edfbff);
  transform: rotate(var(--a)) translate(var(--r)) rotate(calc(-1 * var(--a)));
  animation: vl-matrix17-frag calc(var(--loader-speed) * 1.56) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17-radar-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #f2fcff);
  animation: vl-matrix17-radar-core calc(var(--loader-speed) * 1.2) linear infinite;
}
.vl-matrix17-radar-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 58px;
  height: 58px;
  margin: -29px;
  border-radius: 50%;
  border: 1px dashed color-mix(in srgb, var(--loader-accent) 60%, transparent);
  animation: vl-matrix17-radar-ring calc(var(--loader-speed) * 2.2) linear infinite;
}
@keyframes vl-matrix17-frag {
  0%, 100% { transform: rotate(var(--a)) translate(var(--r)) rotate(calc(-1 * var(--a))) scale(.46); opacity: .22; }
  50% { transform: rotate(calc(var(--a) + 360deg)) translate(calc(var(--r) + 6px)) rotate(calc(-1 * (var(--a) + 360deg))) scale(1.06); opacity: .95; }
}
@keyframes vl-matrix17-radar-core {
  0%, 100% { transform: scale(.76); opacity: .24; }
  50% { transform: scale(1.28); opacity: .95; }
}
@keyframes vl-matrix17-radar-ring {
  to { transform: rotate(360deg); opacity: .2; }
}`
  },
  {
    id: 'matrix-axon-thread-orbit',
    name: 'Axon Thread Orbit',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Axon-like arcs orbit around a dark seam then reverse phase together.',
    markup: `<div class="vl-matrix17-axon-orbit" role="img" aria-label="Axon thread orbit">
      <span style="--o:28px;--d:0"></span>
      <span style="--o:34px;--d:.18"></span>
      <span style="--o:40px;--d:.36"></span>
      <span style="--o:46px;--d:.54"></span>
      <span style="--o:52px;--d:.72"></span>
    </div>`,
    css: `.vl-matrix17-axon-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d4566);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 54%, color-mix(in srgb, var(--loader-accent) 16%, transparent), #050f1d 64%),
    linear-gradient(145deg, #04121f, #0a2031 64%, #040a11);
}
.vl-matrix17-axon-orbit span {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 82px;
  height: 82px;
  margin-left: calc(-1 * var(--o));
  margin-top: -41px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, #dff0ff);
  opacity: .22;
  transform: rotate(0deg);
  animation: vl-matrix17-axon calc(var(--loader-speed) * 1.8) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17-axon-orbit span:nth-child(even) { animation-direction: reverse; }
@keyframes vl-matrix17-axon {
  0% { transform: scale(.56) rotate(0deg); opacity: .18; }
  45% { transform: scale(1.06) rotate(240deg); opacity: .94; }
  100% { transform: scale(.56) rotate(720deg); opacity: .18; }
}`
  }
];
