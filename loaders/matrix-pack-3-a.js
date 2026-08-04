export const matrixPack3LoadersA = [
  {
    id: 'matrix-signal-spiral',
    name: 'Signal Spiral',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A rotating signal loop maps scan checkpoints while packets spiral toward the center.',
    markup: `<div class="vl-matrix-signal-spiral" aria-hidden="true">
      <span style="--i:0"></span><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span>
      <span style="--i:4"></span><span style="--i:5"></span><span style="--i:6"></span><span style="--i:7"></span>
      <span style="--i:8"></span><span style="--i:9"></span><span style="--i:10"></span><span style="--i:11"></span>
    </div>`,
    css: `.vl-matrix-signal-spiral {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #173251);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 14%, transparent), transparent 56%), #050f1a;
}
.vl-matrix-signal-spiral span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 11px;
  height: 11px;
  margin: -5px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--loader-accent) 88%, #fff 12%);
  transform: rotate(calc(var(--i) * 30deg)) translate(20px) scale(0.62);
  animation: vl-matrix3-signal-spiral calc(var(--loader-speed) * 2.3) cubic-bezier(.35, 0, .26, 1) infinite;
  animation-delay: calc(var(--i) * 0.11s);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 45%, transparent);
}
.vl-matrix-signal-spiral span:nth-child(even) {
  background: color-mix(in srgb, var(--loader-accent) 64%, #d8ebff);
}
@keyframes vl-matrix3-signal-spiral {
  0%, 100% { transform: rotate(calc(var(--i) * 30deg)) translate(20px) scale(.62); opacity: .16; }
  36%, 74% { transform: rotate(calc(var(--i) * 30deg + 180deg)) translate(42px) scale(1.1); opacity: 1; }
}`
  },
  {
    id: 'matrix-channel-matrix-grid',
    name: 'Channel Matrix Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Four data lanes pulse independently across a compact matrix to expose routing parity.',
    markup: `<div class="vl-matrix-channel-grid" aria-hidden="true">
      <span class="vl-matrix-channel-line" style="--y:18px;--d:0"></span>
      <span class="vl-matrix-channel-line" style="--y:38px;--d:0.15"></span>
      <span class="vl-matrix-channel-line" style="--y:58px;--d:0.3"></span>
      <span class="vl-matrix-channel-line" style="--y:78px;--d:0.45"></span>
      <span class="vl-matrix-channel-dot" style="--x:24px;--y:28px;--d:0"></span>
      <span class="vl-matrix-channel-dot" style="--x:72px;--y:46px;--d:0.18"></span>
      <span class="vl-matrix-channel-dot" style="--x:120px;--y:34px;--d:0.36"></span>
      <span class="vl-matrix-channel-dot" style="--x:168px;--y:52px;--d:0.54"></span>
    </div>`,
    css: `.vl-matrix-channel-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #183353);
  border-radius: 14px;
  background: linear-gradient(150deg, #04121f, #09172a 64%, #040a14);
  overflow: hidden;
}
.vl-matrix-channel-line,
.vl-matrix-channel-dot {
  position: absolute;
  left: 8px;
  width: 174px;
  height: 8px;
}
.vl-matrix-channel-line {
  top: var(--y);
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 22%, transparent);
  opacity: .42;
  animation: vl-matrix3-channel-line calc(var(--loader-speed) * 1.95) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-channel-dot {
  top: var(--y);
  left: var(--x);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: scale(.5);
  animation: vl-matrix3-channel-dot calc(var(--loader-speed) * 1.95) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix3-channel-line {
  0%, 100% { opacity: .22; }
  52% { opacity: .95; }
}
@keyframes vl-matrix3-channel-dot {
  0%, 100% { transform: translateX(-16px) scale(.55); opacity: .1; }
  44%, 72% { transform: translateX(0) scale(1); opacity: 1; }
}`
  },
  {
    id: 'matrix-radiant-cascade',
    name: 'Radiant Cascade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Stacked columns cascade in timed bursts, like staged decode stages of a matrix burst.',
    markup: `<div class="vl-matrix-radiant-cascade" aria-hidden="true">
      <span style="--h:46px;--x:22px;--d:0"></span>
      <span style="--h:30px;--x:52px;--d:.15"></span>
      <span style="--h:62px;--x:82px;--d:.3"></span>
      <span style="--h:38px;--x:112px;--d:.45"></span>
      <span style="--h:56px;--x:142px;--d:.6"></span>
    </div>`,
    css: `.vl-matrix-radiant-cascade {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #132a44);
  border-radius: 13px;
  background: linear-gradient(180deg, #050e18, #091524);
}
.vl-matrix-radiant-cascade span {
  position: absolute;
  left: var(--x);
  bottom: 8px;
  width: 18px;
  border-radius: 9px;
  height: var(--h);
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 16%, transparent), color-mix(in srgb, var(--loader-accent) 80%, white 12%));
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 45%, transparent);
  animation: vl-matrix3-radiant-rise calc(var(--loader-speed) * 2.05) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1.1s);
  transform-origin: bottom center;
}
@keyframes vl-matrix3-radiant-rise {
  0%, 100% { transform: scaleY(.25); opacity: .18; }
  40%, 72% { transform: scaleY(1); opacity: .94; }
}`
  },
  {
    id: 'matrix-routed-glyph-core',
    name: 'Routed Glyph Core',
    category: 'Matrix',
    tech: 'CSS Text + 3D',
    description: 'Glyph tokens orbit a compact processor core and return to checksum nodes.',
    markup: `<div class="vl-matrix-glyph-core" aria-hidden="true">
      <span class="vl-matrix-glyph">A1</span>
      <span class="vl-matrix-glyph">B7</span>
      <span class="vl-matrix-glyph">C3</span>
      <span class="vl-matrix-glyph">D4</span>
      <span class="vl-matrix-glyph">F9</span>
      <span class="vl-matrix-glyph-core-pulse"></span>
    </div>`,
    css: `.vl-matrix-glyph-core {
  width: 190px;
  height: 108px;
  position: relative;
  perspective: 320px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #112947);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 16%, transparent), #050d16 48%);
}
.vl-matrix-glyph {
  position: absolute;
  width: 18px;
  height: 14px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: var(--loader-accent);
  font: 800 7px/1 ui-monospace, SFMono-Regular, Consolas, monospace;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 64%, #d9e7ff);
  border-radius: 3px;
  background: color-mix(in srgb, var(--loader-accent) 14%, transparent);
  opacity: .28;
  transform-style: preserve-3d;
  animation: vl-matrix3-glyph-hop calc(var(--loader-speed) * 2.2) cubic-bezier(.36, .04, .2, 1) infinite;
}
.vl-matrix-glyph:nth-child(1) { left: 24px; top: 16px; animation-delay: .02s; }
.vl-matrix-glyph:nth-child(2) { left: 82px; top: 62px; animation-delay: .24s; }
.vl-matrix-glyph:nth-child(3) { left: 124px; top: 28px; animation-delay: .38s; }
.vl-matrix-glyph:nth-child(4) { left: 42px; top: 68px; animation-delay: .54s; }
.vl-matrix-glyph:nth-child(5) { left: 154px; top: 14px; animation-delay: .7s; }
.vl-matrix-glyph-core-pulse {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 16px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 72%, transparent);
  animation: vl-matrix3-glyph-core calc(var(--loader-speed) * 2.2) ease-in-out infinite;
}
@keyframes vl-matrix3-glyph-hop {
  0%, 100% { transform: translateZ(0) scale(.75); opacity: .22; }
  42%, 68% { transform: translateZ(18px) scale(1.08); opacity: .98; }
}
@keyframes vl-matrix3-glyph-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.75); opacity: .3; }
  50% { transform: translate(-50%, -50%) scale(1.18); opacity: .9; }
}
@media (prefers-reduced-motion: reduce) {
  .vl-matrix-glyph-core { perspective: none; }
}`
  },
  {
    id: 'matrix-cascade-entropy-wave',
    name: 'Cascade Entropy Wave',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Entropy wavebands collapse into a stable matrix plane in synchronized cycles.',
    markup: `<div class="vl-matrix-entropy-wave" aria-hidden="true">
      <span style="--x:2%;--d:0"></span>
      <span style="--x:18%;--d:.14"></span>
      <span style="--x:34%;--d:.28"></span>
      <span style="--x:50%;--d:.42"></span>
      <span style="--x:66%;--d:.56"></span>
      <span style="--x:82%;--d:.7"></span>
    </div>`,
    css: `.vl-matrix-entropy-wave {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #173552);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(160deg, #050d17, #0b1a2f 63%, #040a12);
}
.vl-matrix-entropy-wave span {
  position: absolute;
  left: var(--x);
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  border-radius: 2px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 80%, #fff), transparent);
  transform: translateY(-118px);
  animation: vl-matrix3-entropy-wave calc(var(--loader-speed) * 1.7) linear infinite;
  animation-delay: calc(var(--d) * 1s);
  opacity: .18;
}
.vl-matrix-entropy-wave span:nth-child(even) { width: 2px; opacity: .11; }
@keyframes vl-matrix3-entropy-wave {
  0% { transform: translateY(-118px); opacity: .1; }
  45% { opacity: .88; }
  100% { transform: translateY(118px); opacity: .1; }
}`
  }
];
