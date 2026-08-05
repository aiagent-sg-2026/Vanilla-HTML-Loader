import { matrixPack2Loaders } from './matrix-pack-2.js';
import { matrixPack3LoadersA } from './matrix-pack-3-a.js';
import { matrixPack3LoadersB } from './matrix-pack-3-b.js';
import { matrixPack4LoadersA } from './matrix-pack-4-a.js';
import { matrixPack4LoadersB } from './matrix-pack-4-b.js';
import { matrixPack5LoadersA } from './matrix-pack-5-a.js';
import { matrixPack5LoadersB } from './matrix-pack-5-b.js';
import { matrixPack6LoadersA } from './matrix-pack-6-a.js';
import { matrixPack6LoadersB } from './matrix-pack-6-b.js';
import { matrixPack7LoadersA } from './matrix-pack-7-a.js';
import { matrixPack7LoadersB } from './matrix-pack-7-b.js';
import { matrixPack8LoadersA } from './matrix-pack-8-a.js';
import { matrixPack8LoadersB } from './matrix-pack-8-b.js';
import { matrixPack9LoadersA } from './matrix-pack-9-a.js';
import { matrixPack9LoadersB } from './matrix-pack-9-b.js';
import { matrixPack10LoadersA } from './matrix-pack-10-a.js';
import { matrixPack10LoadersB } from './matrix-pack-10-b.js';
import { matrixPack11LoadersA } from './matrix-pack-11-a.js';
import { matrixPack11LoadersB } from './matrix-pack-11-b.js';
import { matrixPack12LoadersA } from './matrix-pack-12-a.js';
import { matrixPack12LoadersB } from './matrix-pack-12-b.js';
import { matrixPack13LoadersA } from './matrix-pack-13-a.js';
import { matrixPack13LoadersB } from './matrix-pack-13-b.js';
import { matrixPack14LoadersA } from './matrix-pack-14-a.js';
import { matrixPack14LoadersB } from './matrix-pack-14-b.js';
import { matrixPack15LoadersA } from './matrix-pack-15-a.js';
import { matrixPack15LoadersB } from './matrix-pack-15-b.js';
import { matrixPack16LoadersA } from './matrix-pack-16-a.js';
import { matrixPack16LoadersB } from './matrix-pack-16-b.js';
import { matrixPack17LoadersA } from './matrix-pack-17-a.js';
import { matrixPack17LoadersB } from './matrix-pack-17-b.js';
import { matrixPack17LoadersC } from './matrix-pack-17-c.js';
import { matrixPack17LoadersD } from './matrix-pack-17-d.js';
import { matrixPack17LoadersE } from './matrix-pack-17-e.js';
import { matrixPack17LoadersF } from './matrix-pack-17-f.js';
import { matrixPack17LoadersG } from './matrix-pack-17-g.js';
import { matrixPack17LoadersH } from './matrix-pack-17-h.js';
import { matrixPack17LoadersI } from './matrix-pack-17-i.js';
import { matrixPack17LoadersJ } from './matrix-pack-17-j.js';
import { matrixPack17LoadersK } from './matrix-pack-17-k.js';
import { matrixPack17LoadersL } from './matrix-pack-17-l.js';
import { matrixPack17LoadersM } from './matrix-pack-17-m.js';

const matrixBaseLoaders = [
  {
    id: 'matrix-cube-field',
    name: '3D Matrix Cube Field',
    category: 'Matrix',
    tech: 'CSS 3D',
    description: 'A perspective field of luminous data cubes that rises in a diagonal processing wave.',
    markup: `<div class="vl-matrix-field" role="img" aria-label="3D matrix cubes processing">
  <div class="vl-matrix-grid" aria-hidden="true">
    <span class="vl-matrix-cell" style="--d:0"></span><span class="vl-matrix-cell" style="--d:1"></span><span class="vl-matrix-cell" style="--d:2"></span><span class="vl-matrix-cell" style="--d:3"></span>
    <span class="vl-matrix-cell" style="--d:1"></span><span class="vl-matrix-cell" style="--d:2"></span><span class="vl-matrix-cell" style="--d:3"></span><span class="vl-matrix-cell" style="--d:4"></span>
    <span class="vl-matrix-cell" style="--d:2"></span><span class="vl-matrix-cell" style="--d:3"></span><span class="vl-matrix-cell" style="--d:4"></span><span class="vl-matrix-cell" style="--d:5"></span>
    <span class="vl-matrix-cell" style="--d:3"></span><span class="vl-matrix-cell" style="--d:4"></span><span class="vl-matrix-cell" style="--d:5"></span><span class="vl-matrix-cell" style="--d:6"></span>
  </div>
  <span class="vl-matrix-caption">MATRIX ONLINE</span>
</div>`,
    css: `.vl-matrix-field {
  position: relative;
  width: 190px;
  height: 108px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 34%, #14223a);
  border-radius: 14px;
  background:
    radial-gradient(circle at 50% 42%, color-mix(in srgb, var(--loader-accent) 18%, transparent), transparent 48%),
    linear-gradient(145deg, #07101d, #0b1628 58%, #050a12);
  box-shadow: inset 0 0 30px rgba(0, 0, 0, .55), 0 10px 24px rgba(2, 8, 23, .24);
  perspective: 520px;
}
.vl-matrix-field::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: .24;
  background-image:
    linear-gradient(color-mix(in srgb, var(--loader-accent) 22%, transparent) 1px, transparent 1px),
    linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 22%, transparent) 1px, transparent 1px);
  background-size: 18px 18px;
  transform: perspective(160px) rotateX(62deg) scale(1.45) translateY(25px);
  transform-origin: center bottom;
}
.vl-matrix-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, 15px);
  gap: 8px;
  transform-style: preserve-3d;
  transform: rotateX(58deg) rotateZ(45deg) translate3d(-2px, -7px, 0);
  animation: vl-matrix-drift calc(var(--loader-speed) * 2.6) ease-in-out infinite;
}
.vl-matrix-cell {
  position: relative;
  width: 15px;
  height: 15px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 42%, #07111f);
  transform-style: preserve-3d;
  animation: vl-matrix-rise calc(var(--loader-speed) * 1.15) cubic-bezier(.45, 0, .2, 1) infinite;
  animation-delay: calc(var(--d) * -.12s);
}
.vl-matrix-cell::before,
.vl-matrix-cell::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
}
.vl-matrix-cell::before {
  background: color-mix(in srgb, var(--loader-accent) 84%, white 16%);
  transform: translateZ(7px);
  box-shadow: 0 0 11px color-mix(in srgb, var(--loader-accent) 58%, transparent);
}
.vl-matrix-cell::after {
  background: color-mix(in srgb, var(--loader-accent) 46%, #07111f);
  transform: rotateX(90deg) translateZ(-7px);
}
.vl-matrix-caption {
  position: absolute;
  right: 10px;
  bottom: 7px;
  color: color-mix(in srgb, var(--loader-accent) 80%, white 20%);
  font: 800 7px/1 system-ui, sans-serif;
  letter-spacing: .18em;
  opacity: .78;
}
@keyframes vl-matrix-drift {
  0%, 100% { transform: rotateX(56deg) rotateZ(43deg) translate3d(-2px, -5px, 0); }
  50% { transform: rotateX(64deg) rotateZ(49deg) translate3d(-2px, -10px, 8px); }
}
@keyframes vl-matrix-rise {
  0%, 100% { transform: translateZ(-5px) scale(.7); opacity: .3; }
  38%, 62% { transform: translateZ(38px) scale(1.2); opacity: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .vl-matrix-grid, .vl-matrix-cell { animation-play-state: paused; }
}`
  },
  {
    id: 'digital-rain-tunnel',
    name: 'Digital Rain Tunnel',
    category: 'Matrix',
    tech: 'CSS Text + 3D',
    description: 'Palette-aware binary streams fall through a dark perspective tunnel toward a luminous data core.',
    markup: `<div class="vl-rain-tunnel" role="img" aria-label="Digital rain data tunnel">
  <div class="vl-rain-depth" aria-hidden="true">
    <span style="--x:8%;--z:-42px;--d:0s">1<br>0<br>1<br>1<br>0<br>0<br>1<br>0</span>
    <span style="--x:22%;--z:-18px;--d:-.45s">0<br>1<br>0<br>1<br>1<br>0<br>1<br>1</span>
    <span style="--x:36%;--z:8px;--d:-.9s">1<br>1<br>0<br>0<br>1<br>0<br>1<br>0</span>
    <span style="--x:50%;--z:24px;--d:-1.35s">0<br>1<br>1<br>0<br>1<br>1<br>0<br>1</span>
    <span style="--x:64%;--z:8px;--d:-.7s">1<br>0<br>0<br>1<br>0<br>1<br>1<br>0</span>
    <span style="--x:78%;--z:-18px;--d:-1.1s">0<br>0<br>1<br>1<br>0<br>1<br>0<br>1</span>
    <span style="--x:91%;--z:-42px;--d:-.25s">1<br>1<br>0<br>1<br>0<br>0<br>1<br>1</span>
  </div>
  <span class="vl-rain-core" aria-hidden="true"></span>
  <span class="vl-rain-caption">DECRYPTING</span>
</div>`,
    css: `.vl-rain-tunnel {
  position: relative;
  width: 190px;
  height: 108px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 32%, #13233b);
  border-radius: 14px;
  background:
    radial-gradient(circle at 50% 58%, color-mix(in srgb, var(--loader-accent) 26%, transparent), transparent 17%),
    repeating-radial-gradient(ellipse at 50% 58%, color-mix(in srgb, var(--loader-accent) 13%, transparent) 0 1px, transparent 2px 13px),
    linear-gradient(180deg, #040912, #071423 62%, #02050a);
  box-shadow: inset 0 0 32px rgba(0, 0, 0, .72), 0 10px 24px rgba(2, 8, 23, .24);
  perspective: 240px;
}
.vl-rain-depth {
  position: absolute;
  inset: -52px 0 -8px;
  transform-style: preserve-3d;
  transform: rotateX(16deg);
}
.vl-rain-depth span {
  position: absolute;
  left: var(--x);
  top: -30px;
  color: color-mix(in srgb, var(--loader-accent) 82%, white 18%);
  font: 800 8px/9px ui-monospace, SFMono-Regular, Consolas, monospace;
  text-align: center;
  text-shadow: 0 0 8px var(--loader-accent);
  opacity: .78;
  transform: translateZ(var(--z));
  animation: vl-rain-fall calc(var(--loader-speed) * .9) linear infinite;
  animation-delay: var(--d);
}
.vl-rain-tunnel::after {
  content: '';
  position: absolute;
  left: 12px;
  right: 12px;
  top: -8px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--loader-accent), transparent);
  box-shadow: 0 0 10px var(--loader-accent);
  opacity: .8;
  animation: vl-rain-scan calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
.vl-rain-core {
  position: absolute;
  left: 50%;
  top: 59%;
  width: 9px;
  height: 9px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 82%, white 18%);
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 9px var(--loader-accent), 0 0 22px color-mix(in srgb, var(--loader-accent) 70%, transparent);
  transform: translate(-50%, -50%);
  animation: vl-rain-core-pulse calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-rain-caption {
  position: absolute;
  left: 10px;
  bottom: 7px;
  color: color-mix(in srgb, var(--loader-accent) 80%, white 20%);
  font: 800 7px/1 ui-monospace, SFMono-Regular, Consolas, monospace;
  letter-spacing: .17em;
}
@keyframes vl-rain-fall {
  from { transform: translate3d(0, -36px, var(--z)) scale(.72); opacity: 0; }
  10% { opacity: 1; }
  76% { opacity: .9; }
  to { transform: translate3d(0, 176px, var(--z)) scale(1.08); opacity: 0; }
}
@keyframes vl-rain-scan {
  0%, 100% { transform: translateY(0); opacity: 0; }
  12% { opacity: .9; }
  88% { opacity: .7; }
  100% { transform: translateY(116px); }
}
@keyframes vl-rain-core-pulse { 50% { transform: translate(-50%, -50%) scale(1.9); opacity: .5; } }
@media (prefers-reduced-motion: reduce) {
  .vl-rain-depth span, .vl-rain-core, .vl-rain-tunnel::after { animation-play-state: paused; }
}`
  },
  {
    id: 'voxel-assembly-core',
    name: 'Voxel Assembly Core',
    category: 'Matrix',
    tech: 'CSS 3D',
    description: 'Scattered luminous voxels fly inward, lock into a processing core, and release in a seamless loop.',
    markup: `<div class="vl-voxel-scene" role="img" aria-label="Voxels assembling into a data core">
  <div class="vl-voxel-cluster" aria-hidden="true">
    <span style="--sx:-66px;--sy:-34px;--tx:-18px;--ty:-18px;--d:0"></span>
    <span style="--sx:52px;--sy:-46px;--tx:0px;--ty:-18px;--d:1"></span>
    <span style="--sx:72px;--sy:8px;--tx:18px;--ty:-18px;--d:2"></span>
    <span style="--sx:-58px;--sy:30px;--tx:-18px;--ty:0px;--d:3"></span>
    <span style="--sx:0px;--sy:-62px;--tx:0px;--ty:0px;--d:4"></span>
    <span style="--sx:61px;--sy:38px;--tx:18px;--ty:0px;--d:5"></span>
    <span style="--sx:-70px;--sy:-2px;--tx:-18px;--ty:18px;--d:6"></span>
    <span style="--sx:-16px;--sy:58px;--tx:0px;--ty:18px;--d:7"></span>
    <span style="--sx:45px;--sy:56px;--tx:18px;--ty:18px;--d:8"></span>
  </div>
  <span class="vl-voxel-caption">ASSEMBLING CORE</span>
</div>`,
    css: `.vl-voxel-scene {
  position: relative;
  width: 190px;
  height: 108px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 32%, #13233b);
  border-radius: 14px;
  background:
    radial-gradient(circle at 50% 48%, color-mix(in srgb, var(--loader-accent) 22%, transparent), transparent 32%),
    linear-gradient(145deg, #07101d, #0a1729 62%, #040912);
  box-shadow: inset 0 0 30px rgba(0, 0, 0, .64), 0 10px 24px rgba(2, 8, 23, .24);
  perspective: 460px;
}
.vl-voxel-scene::before {
  content: '';
  position: absolute;
  width: 72px;
  height: 72px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-radius: 50%;
  box-shadow: 0 0 24px color-mix(in srgb, var(--loader-accent) 12%, transparent);
  animation: vl-voxel-orbit calc(var(--loader-speed) * 1.8) linear infinite;
}
.vl-voxel-cluster {
  position: relative;
  width: 1px;
  height: 1px;
  transform-style: preserve-3d;
  transform: rotateX(-18deg) rotateY(28deg);
  animation: vl-voxel-cluster-turn calc(var(--loader-speed) * 2.2) ease-in-out infinite;
}
.vl-voxel-cluster span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 14px;
  margin: -7px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 78%, white 22%);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 58%, transparent);
  transform-style: preserve-3d;
  animation: vl-voxel-assemble calc(var(--loader-speed) * 1.85) cubic-bezier(.55, -.18, .25, 1.18) infinite;
  animation-delay: calc(var(--d) * -.045s);
}
.vl-voxel-cluster span::before,
.vl-voxel-cluster span::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
}
.vl-voxel-cluster span::before { background: color-mix(in srgb, var(--loader-accent) 52%, #07111f); transform: rotateY(90deg) translateZ(7px); }
.vl-voxel-cluster span::after { background: color-mix(in srgb, var(--loader-accent) 66%, #dff7ff 14%); transform: rotateX(90deg) translateZ(7px); }
.vl-voxel-caption {
  position: absolute;
  right: 10px;
  bottom: 7px;
  color: color-mix(in srgb, var(--loader-accent) 80%, white 20%);
  font: 800 7px/1 system-ui, sans-serif;
  letter-spacing: .16em;
}
@keyframes vl-voxel-cluster-turn {
  0%, 100% { transform: rotateX(-22deg) rotateY(20deg) scale(.94); }
  50% { transform: rotateX(12deg) rotateY(52deg) scale(1.08); }
}
@keyframes vl-voxel-assemble {
  0%, 100% { transform: translate3d(var(--sx), var(--sy), 58px) rotateX(180deg) rotateY(-160deg) scale(.35); opacity: 0; }
  12% { opacity: 1; }
  30%, 52% { transform: translate3d(var(--tx), var(--ty), 0) rotateX(0) rotateY(0) scale(1.08); opacity: 1; }
  64% { transform: translate3d(var(--tx), var(--ty), 20px) rotateX(26deg) rotateY(38deg) scale(1.22); opacity: 1; }
  84% { transform: translate3d(var(--sx), var(--sy), 42px) rotateX(130deg) rotateY(-100deg) scale(.62); opacity: .3; }
}
@keyframes vl-voxel-orbit { to { transform: rotate(360deg) scale(1.12); } }
@media (prefers-reduced-motion: reduce) {
  .vl-voxel-cluster, .vl-voxel-cluster span, .vl-voxel-scene::before { animation-play-state: paused; }
}`
  }
];

export const matrixLoaders = [
  ...matrixBaseLoaders,
  ...matrixPack2Loaders,
  ...matrixPack3LoadersA,
  ...matrixPack3LoadersB,
  ...matrixPack4LoadersA,
  ...matrixPack4LoadersB,
  ...matrixPack5LoadersA,
  ...matrixPack5LoadersB,
  ...matrixPack6LoadersA,
  ...matrixPack6LoadersB,
  ...matrixPack7LoadersA,
  ...matrixPack7LoadersB,
  ...matrixPack8LoadersA,
  ...matrixPack8LoadersB,
  ...matrixPack9LoadersA,
  ...matrixPack9LoadersB,
  ...matrixPack10LoadersA,
  ...matrixPack10LoadersB,
  ...matrixPack11LoadersA,
  ...matrixPack11LoadersB,
  ...matrixPack12LoadersA,
  ...matrixPack12LoadersB,
  ...matrixPack13LoadersA,
  ...matrixPack13LoadersB,
  ...matrixPack14LoadersA,
  ...matrixPack14LoadersB,
  ...matrixPack15LoadersA,
  ...matrixPack15LoadersB,
  ...matrixPack16LoadersA,
  ...matrixPack16LoadersB,
  ...matrixPack17LoadersA,
  ...matrixPack17LoadersB,
  ...matrixPack17LoadersC,
  ...matrixPack17LoadersD,
  ...matrixPack17LoadersE,
  ...matrixPack17LoadersF,
  ...matrixPack17LoadersG,
  ...matrixPack17LoadersH,
  ...matrixPack17LoadersI,
  ...matrixPack17LoadersJ,
  ...matrixPack17LoadersK,
  ...matrixPack17LoadersL,
  ...matrixPack17LoadersM
];
