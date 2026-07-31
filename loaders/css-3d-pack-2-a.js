export const css3dPack2LoadersA = [
  {
    id: 'prism-spin-3d',
    name: '3D Prism Spin',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Three translucent faces form a rotating triangular prism with true CSS perspective.',
    markup: `<div class="vl-prism-spin-3d" aria-hidden="true">
  <div><span></span><span></span><span></span></div>
</div>`,
    css: `.vl-prism-spin-3d {
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  perspective: 520px;
}
.vl-prism-spin-3d > div {
  position: relative;
  width: 38px;
  height: 50px;
  transform-style: preserve-3d;
  animation: vl-prism-spin-scene calc(var(--loader-speed) * 2.15) linear infinite;
}
.vl-prism-spin-3d span {
  position: absolute;
  inset: 0;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, white);
  border-radius: 5px;
  background: color-mix(in srgb, var(--loader-accent) 58%, transparent);
  box-shadow: inset 0 0 14px color-mix(in srgb, var(--loader-accent) 28%, transparent);
  backface-visibility: visible;
}
.vl-prism-spin-3d span:nth-child(1) { transform: rotateY(0deg) translateZ(11px); }
.vl-prism-spin-3d span:nth-child(2) { transform: rotateY(120deg) translateZ(11px); }
.vl-prism-spin-3d span:nth-child(3) { transform: rotateY(240deg) translateZ(11px); }
@keyframes vl-prism-spin-scene {
  0% { transform: rotateX(-18deg) rotateY(0deg) rotateZ(0deg); }
  50% { transform: rotateX(198deg) rotateY(180deg) rotateZ(12deg); }
  100% { transform: rotateX(342deg) rotateY(360deg) rotateZ(0deg); }
}`
  },
  {
    id: 'depth-stack-3d',
    name: '3D Depth Stack',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Layered panels rise through the Z-axis like a compact data stack.',
    markup: `<div class="vl-depth-stack-3d" aria-hidden="true">
  <span style="--i:0"></span><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span><span style="--i:4"></span>
</div>`,
    css: `.vl-depth-stack-3d {
  position: relative;
  width: 82px;
  height: 68px;
  perspective: 560px;
  transform-style: preserve-3d;
  transform: rotateX(58deg) rotateZ(45deg);
}
.vl-depth-stack-3d span {
  position: absolute;
  left: 17px;
  top: 15px;
  width: 46px;
  height: 34px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 62%, white);
  border-radius: 6px;
  background: color-mix(in srgb, var(--loader-accent) calc(20% + var(--i) * 10%), transparent);
  box-shadow: 7px 7px 0 color-mix(in srgb, var(--loader-accent) 18%, transparent);
  transform: translateZ(calc(var(--i) * 8px));
  animation: vl-depth-stack-rise calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--i) * .11s);
}
@keyframes vl-depth-stack-rise {
  0%, 100% { transform: translateZ(calc(var(--i) * 8px)); opacity: .48; }
  50% { transform: translateZ(calc(var(--i) * 8px + 22px)); opacity: 1; }
}`
  },
  {
    id: 'card-carousel-3d',
    name: '3D Card Carousel',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six cards orbit around a central axis to form a lightweight 3D carousel.',
    markup: `<div class="vl-card-carousel-3d" aria-hidden="true">
  <div><span style="--i:0"></span><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span><span style="--i:4"></span><span style="--i:5"></span></div>
</div>`,
    css: `.vl-card-carousel-3d {
  width: 86px;
  height: 70px;
  display: grid;
  place-items: center;
  perspective: 620px;
}
.vl-card-carousel-3d > div {
  position: relative;
  width: 24px;
  height: 42px;
  transform-style: preserve-3d;
  animation: vl-card-carousel-turn calc(var(--loader-speed) * 2.35) linear infinite;
}
.vl-card-carousel-3d span {
  position: absolute;
  inset: 0;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 66%, white);
  border-radius: 5px;
  background: linear-gradient(150deg, color-mix(in srgb, var(--loader-accent) 78%, white), color-mix(in srgb, var(--loader-accent) 48%, transparent));
  box-shadow: 0 5px 12px rgba(15, 23, 42, .12);
  transform: rotateY(calc(var(--i) * 60deg)) translateZ(34px);
  backface-visibility: hidden;
}
@keyframes vl-card-carousel-turn {
  from { transform: rotateX(-8deg) rotateY(0deg); }
  to { transform: rotateX(-8deg) rotateY(360deg); }
}`
  },
  {
    id: 'helix-dots-3d',
    name: '3D Helix Dots',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Eight dots wrap around an invisible cylinder and rotate as a vertical helix.',
    markup: `<div class="vl-helix-dots-3d" aria-hidden="true">
  <span style="--i:0"></span><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span><span style="--i:4"></span><span style="--i:5"></span><span style="--i:6"></span><span style="--i:7"></span>
</div>`,
    css: `.vl-helix-dots-3d {
  position: relative;
  width: 70px;
  height: 76px;
  perspective: 560px;
  transform-style: preserve-3d;
  animation: vl-helix-dots-turn calc(var(--loader-speed) * 2.15) linear infinite;
}
.vl-helix-dots-3d span {
  position: absolute;
  left: calc(50% - 5px);
  top: calc(8px + var(--i) * 8px);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 55%, transparent);
  transform: rotateY(calc(var(--i) * 45deg)) translateZ(24px);
  animation: vl-helix-dot-pulse calc(var(--loader-speed) * 1.1) ease-in-out infinite;
  animation-delay: calc(var(--i) * .08s);
}
@keyframes vl-helix-dots-turn { to { transform: rotateY(360deg); } }
@keyframes vl-helix-dot-pulse { 50% { transform: rotateY(calc(var(--i) * 45deg)) translateZ(33px) scale(1.22); opacity: .55; } }`
  },
  {
    id: 'gyro-rings-3d',
    name: '3D Gyro Rings',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Four independent rings rotate across different axes like a compact gyroscope.',
    markup: `<div class="vl-gyro-rings-3d" aria-hidden="true"><span></span><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-gyro-rings-3d {
  position: relative;
  width: 72px;
  height: 72px;
  transform-style: preserve-3d;
  perspective: 560px;
}
.vl-gyro-rings-3d span {
  position: absolute;
  inset: 8px;
  border: 3px solid var(--loader-accent);
  border-left-color: color-mix(in srgb, var(--loader-accent) 20%, transparent);
  border-radius: 50%;
  transform-style: preserve-3d;
}
.vl-gyro-rings-3d span:nth-child(1) { animation: vl-gyro-ring-x calc(var(--loader-speed) * 1.55) linear infinite; }
.vl-gyro-rings-3d span:nth-child(2) { animation: vl-gyro-ring-y calc(var(--loader-speed) * 1.75) linear infinite reverse; }
.vl-gyro-rings-3d span:nth-child(3) { animation: vl-gyro-ring-d1 calc(var(--loader-speed) * 1.95) linear infinite; }
.vl-gyro-rings-3d span:nth-child(4) { animation: vl-gyro-ring-d2 calc(var(--loader-speed) * 2.15) linear infinite reverse; }
.vl-gyro-rings-3d i {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translate(-50%, -50%);
  box-shadow: 0 0 18px var(--loader-accent);
}
@keyframes vl-gyro-ring-x { from { transform: rotateX(70deg) rotateZ(0); } to { transform: rotateX(70deg) rotateZ(360deg); } }
@keyframes vl-gyro-ring-y { from { transform: rotateY(70deg) rotateZ(0); } to { transform: rotateY(70deg) rotateZ(360deg); } }
@keyframes vl-gyro-ring-d1 { from { transform: rotateX(55deg) rotateY(48deg) rotateZ(0); } to { transform: rotateX(55deg) rotateY(48deg) rotateZ(360deg); } }
@keyframes vl-gyro-ring-d2 { from { transform: rotateX(-55deg) rotateY(48deg) rotateZ(0); } to { transform: rotateX(-55deg) rotateY(48deg) rotateZ(360deg); } }`
  }
];
