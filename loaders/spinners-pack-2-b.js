export const spinnersPack2LoadersB = [
  {
    id: 'spinner-compass-needle',
    name: 'Compass Needle Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A rotating compass needle with a subtle dial for search, navigation, and discovery states.',
    markup: `<div class="vl-spinner-compass-needle" aria-hidden="true"><span></span><i></i></div>`,
    css: `.vl-spinner-compass-needle {
  position: relative;
  width: 62px;
  height: 62px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 28%, transparent);
  border-radius: 50%;
  box-shadow: inset 0 0 0 9px color-mix(in srgb, var(--loader-accent) 5%, transparent);
}
.vl-spinner-compass-needle::before,
.vl-spinner-compass-needle::after {
  content: '';
  position: absolute;
  background: color-mix(in srgb, var(--loader-accent) 24%, transparent);
}
.vl-spinner-compass-needle::before { left: 29px; top: 4px; width: 2px; height: 52px; }
.vl-spinner-compass-needle::after { left: 4px; top: 29px; width: 52px; height: 2px; }
.vl-spinner-compass-needle span {
  position: absolute;
  left: 28px;
  top: 8px;
  width: 6px;
  height: 46px;
  border-radius: 999px;
  background: linear-gradient(to bottom, var(--loader-accent) 0 50%, color-mix(in srgb, var(--loader-accent) 28%, transparent) 50% 100%);
  transform-origin: 3px 23px;
  animation: vl-spinner-compass-needle calc(var(--loader-speed) * 1.35) cubic-bezier(.55,.08,.45,.92) infinite;
}
.vl-spinner-compass-needle i {
  position: absolute;
  left: 25px;
  top: 25px;
  width: 10px;
  height: 10px;
  border: 2px solid var(--loader-accent);
  border-radius: 50%;
  background: var(--loader-surface, #fff);
}
@keyframes vl-spinner-compass-needle {
  0% { transform: rotate(0deg); }
  55% { transform: rotate(250deg); }
  100% { transform: rotate(360deg); }
}`
  },
  {
    id: 'spinner-gear-halo',
    name: 'Gear Halo Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Eight gear teeth rotate around a ring hub for setup, calculation, and system-processing states.',
    markup: `<div class="vl-spinner-gear-halo" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-spinner-gear-halo {
  position: relative;
  width: 64px;
  height: 64px;
  animation: vl-spinner-gear-halo calc(var(--loader-speed) * 1.4) linear infinite;
}
.vl-spinner-gear-halo span {
  position: absolute;
  left: 27px;
  top: 0;
  width: 10px;
  height: 18px;
  border-radius: 4px;
  background: var(--loader-accent);
  transform-origin: 5px 32px;
  transform: rotate(var(--r));
}
.vl-spinner-gear-halo span:nth-child(1) { --r: 0deg; }
.vl-spinner-gear-halo span:nth-child(2) { --r: 45deg; }
.vl-spinner-gear-halo span:nth-child(3) { --r: 90deg; }
.vl-spinner-gear-halo span:nth-child(4) { --r: 135deg; }
.vl-spinner-gear-halo span:nth-child(5) { --r: 180deg; }
.vl-spinner-gear-halo span:nth-child(6) { --r: 225deg; }
.vl-spinner-gear-halo span:nth-child(7) { --r: 270deg; }
.vl-spinner-gear-halo span:nth-child(8) { --r: 315deg; }
.vl-spinner-gear-halo i {
  position: absolute;
  inset: 17px;
  border: 7px solid color-mix(in srgb, var(--loader-accent) 70%, transparent);
  border-radius: 50%;
  background: var(--loader-surface, #fff);
}
@keyframes vl-spinner-gear-halo { to { transform: rotate(360deg); } }`
  },
  {
    id: 'spinner-flip-disc',
    name: 'Flip Disc Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A perspective disc flips through two faces for compact confirmation and handoff states.',
    markup: `<div class="vl-spinner-flip-disc" aria-hidden="true"><span></span></div>`,
    css: `.vl-spinner-flip-disc {
  width: 66px;
  height: 66px;
  display: grid;
  place-items: center;
  perspective: 180px;
}
.vl-spinner-flip-disc span {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--loader-accent), color-mix(in srgb, var(--loader-accent) 36%, white));
  box-shadow: inset -8px -6px 0 color-mix(in srgb, var(--loader-accent) 24%, transparent), 0 7px 16px color-mix(in srgb, var(--loader-accent) 18%, transparent);
  animation: vl-spinner-flip-disc calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
@keyframes vl-spinner-flip-disc {
  0% { transform: rotateY(0deg) rotateX(0deg); }
  50% { transform: rotateY(180deg) rotateX(18deg); }
  100% { transform: rotateY(360deg) rotateX(0deg); }
}`
  },
  {
    id: 'spinner-spiral-segments',
    name: 'Spiral Segments Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Five nested arc segments rotate at different speeds to create a compact spiral motion.',
    markup: `<div class="vl-spinner-spiral-segments" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-spiral-segments {
  position: relative;
  width: 66px;
  height: 66px;
}
.vl-spinner-spiral-segments span {
  position: absolute;
  border: 3px solid transparent;
  border-top-color: var(--loader-accent);
  border-right-color: color-mix(in srgb, var(--loader-accent) 42%, transparent);
  border-radius: 50%;
  animation: vl-spinner-spiral-segments var(--duration) linear infinite;
}
.vl-spinner-spiral-segments span:nth-child(1) { inset: 1px; --duration: calc(var(--loader-speed) * 1.45); }
.vl-spinner-spiral-segments span:nth-child(2) { inset: 8px; --duration: calc(var(--loader-speed) * 1.2); animation-direction: reverse; }
.vl-spinner-spiral-segments span:nth-child(3) { inset: 15px; --duration: calc(var(--loader-speed) * .95); }
.vl-spinner-spiral-segments span:nth-child(4) { inset: 22px; --duration: calc(var(--loader-speed) * .75); animation-direction: reverse; }
.vl-spinner-spiral-segments span:nth-child(5) { inset: 28px; --duration: calc(var(--loader-speed) * .55); }
@keyframes vl-spinner-spiral-segments { to { transform: rotate(360deg); } }`
  },
  {
    id: 'spinner-eclipse-halo',
    name: 'Eclipse Halo Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Two tilted halos orbit a glowing centre for polished hero, assistant, and premium loading states.',
    markup: `<div class="vl-spinner-eclipse-halo" aria-hidden="true"><span></span><span></span><i></i></div>`,
    css: `.vl-spinner-eclipse-halo {
  position: relative;
  width: 70px;
  height: 70px;
  display: grid;
  place-items: center;
}
.vl-spinner-eclipse-halo span {
  position: absolute;
  width: 62px;
  height: 28px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 56%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-spinner-eclipse-halo-a calc(var(--loader-speed) * 1.35) linear infinite;
}
.vl-spinner-eclipse-halo span:nth-child(2) {
  width: 28px;
  height: 62px;
  border-top-color: color-mix(in srgb, var(--loader-accent) 46%, transparent);
  border-right-color: var(--loader-accent);
  animation-name: vl-spinner-eclipse-halo-b;
  animation-direction: reverse;
}
.vl-spinner-eclipse-halo i {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 8px color-mix(in srgb, var(--loader-accent) 12%, transparent), 0 0 18px color-mix(in srgb, var(--loader-accent) 48%, transparent);
  animation: vl-spinner-eclipse-core calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-spinner-eclipse-halo-a { to { transform: rotate(360deg); } }
@keyframes vl-spinner-eclipse-halo-b { to { transform: rotate(-360deg); } }
@keyframes vl-spinner-eclipse-core {
  0%, 100% { transform: scale(.78); opacity: .65; }
  50% { transform: scale(1.12); opacity: 1; }
}`
  }
];
