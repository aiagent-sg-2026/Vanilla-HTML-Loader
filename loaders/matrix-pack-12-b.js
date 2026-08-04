export const matrixPack12LoadersB = [
  {
    id: 'matrix-nebula-rift-grid',
    name: 'Nebula Rift Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A nebula rift sweeps diagonals while grid markers snap into a recurring cadence.',
    markup: `<div class="vl-matrix12-nebula-rift" aria-hidden="true">
      <span class="vl-matrix12-rift-line" style="--d:0;--x:16px;--y:18px"></span>
      <span class="vl-matrix12-rift-line" style="--d:.12;--x:48px;--y:30px"></span>
      <span class="vl-matrix12-rift-line" style="--d:.24;--x:80px;--y:18px"></span>
      <span class="vl-matrix12-rift-line" style="--d:.36;--x:112px;--y:30px"></span>
      <span class="vl-matrix12-rift-line" style="--d:.48;--x:144px;--y:18px"></span>
      <span class="vl-matrix12-nebula-core"></span>
    </div>`,
    css: `.vl-matrix12-nebula-rift {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f69a0);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-linear-gradient(130deg, #04121d 0 11px, #082c4b 11px 12px, #04121d 12px 23px);
}
.vl-matrix12-rift-line {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 6px;
  height: 68px;
  border-radius: 999px;
  transform-origin: center;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #e7f4ff), transparent);
  transform: rotate(24deg);
  animation: vl-matrix12-nebula-rift calc(var(--loader-speed) * 1.46) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix12-nebula-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix12-nebula-rift-core calc(var(--loader-speed) * 1.04) cubic-bezier(.2, 0, .35, 1) infinite;
}
@keyframes vl-matrix12-nebula-rift {
  0%, 100% { transform: rotate(24deg) translateY(-6px) scaleY(.42); opacity: .2; }
  50% { transform: rotate(24deg) translateY(12px) scaleY(1); opacity: .96; }
}
@keyframes vl-matrix12-nebula-rift-core {
  0%, 100% { transform: scale(.56); opacity: .24; }
  50% { transform: scale(1.07); opacity: 1; }
}`
  },
  {
    id: 'matrix-cascade-node-orbit',
    name: 'Cascade Node Orbit',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Small nodes cascade in nested arcs, then settle into a synchronized orbit.',
    markup: `<div class="vl-matrix12-cascade-node" aria-hidden="true">
      <span class="vl-matrix12-node" style="--d:0;--o:34px;--s:10px"></span>
      <span class="vl-matrix12-node" style="--d:.14;--o:52px;--s:8px"></span>
      <span class="vl-matrix12-node" style="--d:.28;--o:70px;--s:12px"></span>
      <span class="vl-matrix12-node-core"></span>
    </div>`,
    css: `.vl-matrix12-cascade-node {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1e6792);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 20%, transparent), #051524 58%);
}
.vl-matrix12-node {
  --half: calc(var(--s) / -2);
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--s);
  height: var(--s);
  margin-left: var(--half);
  margin-top: var(--half);
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 86%, #dff3fb);
  animation: vl-matrix12-cascade-node calc(var(--loader-speed) * 1.7) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
  transform-origin: calc(95px - var(--s) / 2) calc(54px - var(--s) / 2);
}
.vl-matrix12-node-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix12-node-core calc(var(--loader-speed) * 1.06) linear infinite;
}
@keyframes vl-matrix12-cascade-node {
  0%, 100% { transform: rotate(0deg) translateX(calc(var(--o) / -2)) scale(.5); opacity: .2; }
  50% { transform: rotate(210deg) translateX(calc(var(--o) / -2)) scale(1.06); opacity: .95; }
}
@keyframes vl-matrix12-node-core {
  0%, 100% { transform: scale(.56); opacity: .2; }
  50% { transform: scale(1.07); opacity: 1; }
}`
  },
  {
    id: 'matrix-orbital-spark-grid',
    name: 'Orbital Spark Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Orbiting sparks sweep through a circular gird and converge into the core on beat.',
    markup: `<div class="vl-matrix12-orbital-spark" aria-hidden="true">
      <span class="vl-matrix12-spark" style="--d:0;--a:36deg"></span>
      <span class="vl-matrix12-spark" style="--d:.18;--a:108deg"></span>
      <span class="vl-matrix12-spark" style="--d:.36;--a:180deg"></span>
      <span class="vl-matrix12-spark" style="--d:.54;--a:252deg"></span>
      <span class="vl-matrix12-spark" style="--d:.72;--a:324deg"></span>
      <span class="vl-matrix12-spark-core"></span>
    </div>`,
    css: `.vl-matrix12-orbital-spark {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1e6994);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(170deg, #041320, #082e4f 59%, #04101d);
}
.vl-matrix12-spark {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 86%, #e6f4fc);
  animation: vl-matrix12-orbital-spark calc(var(--loader-speed) * 1.65) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix12-spark-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix12-spark-core calc(var(--loader-speed) * 1.1) cubic-bezier(.2, 0, .35, 1) infinite;
}
@keyframes vl-matrix12-orbital-spark {
  0%, 100% { transform: translate(-50%, -50%) rotate(var(--a)) translateX(52px) scale(.36); opacity: .2; }
  50% { transform: translate(-50%, -50%) rotate(calc(var(--a) + 200deg)) translateX(52px) scale(1.06); opacity: .95; }
}
@keyframes vl-matrix12-spark-core {
  0%, 100% { transform: scale(.52); opacity: .22; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-halo-gate-river',
    name: 'Halo Gate River',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A halo gate ripples across the frame while thin river lines drift between markers.',
    markup: `<div class="vl-matrix12-halo-river" aria-hidden="true">
      <span class="vl-matrix12-halo" style="--d:0"></span>
      <span class="vl-matrix12-halo" style="--d:.18"></span>
      <span class="vl-matrix12-river" style="--d:0;--y:26px"></span>
      <span class="vl-matrix12-river" style="--d:.25;--y:52px"></span>
      <span class="vl-matrix12-river" style="--d:.5;--y:78px"></span>
      <span class="vl-matrix12-halo-core"></span>
    </div>`,
    css: `.vl-matrix12-halo-river {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1e6ea1);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 48%, color-mix(in srgb, var(--loader-accent) 22%, transparent), #04111f 60%);
}
.vl-matrix12-halo {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 82px;
  height: 82px;
  margin: -41px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 78%, #dff4fe);
  border-radius: 50%;
  border-right-color: transparent;
  border-left-color: transparent;
  animation: vl-matrix12-halo-ring calc(var(--loader-speed) * 1.8) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix12-river {
  position: absolute;
  left: 14px;
  top: var(--y);
  width: 160px;
  height: 6px;
  border-radius: 99px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 88%, #e7f4fb), transparent);
  animation: vl-matrix12-river-line calc(var(--loader-speed) * 1.56) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix12-halo-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix12-halo-core calc(var(--loader-speed) * 1.05) cubic-bezier(.2, 0, .35, 1) infinite;
}
@keyframes vl-matrix12-halo-ring {
  0%, 100% { transform: translate(-50%, -50%) scale(.52); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1); opacity: .95; }
}
@keyframes vl-matrix12-river-line {
  0%, 100% { transform: scaleX(.26); opacity: .2; }
  50% { transform: scaleX(1); opacity: .95; }
}
@keyframes vl-matrix12-halo-core {
  0%, 100% { transform: scale(.56); opacity: .22; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-fractal-pulse-portal',
    name: 'Fractal Pulse Portal',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Nested pulses burst outward and fold back into a portal node in repeating intervals.',
    markup: `<div class="vl-matrix12-fractal-portal" aria-hidden="true">
      <span class="vl-matrix12-fractal-ring" style="--d:0;--s:36px"></span>
      <span class="vl-matrix12-fractal-ring" style="--d:.14;--s:48px"></span>
      <span class="vl-matrix12-fractal-ring" style="--d:.28;--s:60px"></span>
      <span class="vl-matrix12-fractal-ring" style="--d:.42;--s:72px"></span>
      <span class="vl-matrix12-fractal-core"></span>
    </div>`,
    css: `.vl-matrix12-fractal-portal {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1e658f);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(140deg, #051325, #0a3352 58%, #04111f);
}
.vl-matrix12-fractal-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2);
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 82%, #e0f3fe);
  animation: vl-matrix12-fractal-pulse calc(var(--loader-speed) * 1.68) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix12-fractal-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix12-fractal-core calc(var(--loader-speed) * 1.06) ease-in-out infinite;
}
@keyframes vl-matrix12-fractal-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(.35); opacity: .16; }
  50% { transform: translate(-50%, -50%) scale(1.02); opacity: .95; }
}
@keyframes vl-matrix12-fractal-core {
  0%, 100% { transform: scale(.54); opacity: .24; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  }
];
