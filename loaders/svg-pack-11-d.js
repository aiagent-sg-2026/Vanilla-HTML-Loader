export const svgPack11LoadersD = [
  {
    id: 'svg-ribbon-tide',
    name: 'Ribbon Tide',
    category: 'SVG',
    tech: 'CSS',
    description: 'Ribbon-like bars sweep in a pseudo-SVG lane rhythm using pure CSS.',
    markup: `<div class="vl-cat-svg-ribbon-tide" role="img" aria-label="Ribbon tide svg loader">
  <span class="wave"></span>
  <span class="dot d1"></span>
  <span class="dot d2"></span>
  <span class="dot d3"></span>
</div>`,
    css: `.vl-cat-svg-ribbon-tide {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #205a8b);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(150deg, #061c30, #0b2a45 63%, #040a14);
}
.vl-cat-svg-ribbon-tide .wave {
  position: absolute;
  left: -8px;
  top: 50%;
  width: 206px;
  height: 12px;
  margin-top: -6px;
  border-radius: 8px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 32%, transparent));
  transform-origin: left center;
  animation: vl-cat-svg-ribbon-tide-wave calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
.vl-cat-svg-ribbon-tide .dot {
  position: absolute;
  top: 50%;
  width: 8px;
  height: 8px;
  margin-top: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translateX(var(--x));
  animation: vl-cat-svg-ribbon-tide-dot calc(var(--loader-speed) * 1.1) ease-in-out infinite;
  animation-delay: calc(var(--delay) * -0.2s);
}
.vl-cat-svg-ribbon-tide .d1 { --x: 18px; --delay: 0; }
.vl-cat-svg-ribbon-tide .d2 { --x: 88px; --delay: 1; }
.vl-cat-svg-ribbon-tide .d3 { --x: 158px; --delay: 2; }
@keyframes vl-cat-svg-ribbon-tide-wave {
  0%,100% { transform: translateX(-24px) scaleX(.4); opacity: .24; }
  50% { transform: translateX(12px) scaleX(.88); opacity: 1; }
}
@keyframes vl-cat-svg-ribbon-tide-dot {
  0%,100% { opacity: .3; transform: translateX(var(--x)) scale(.55); }
  50% { opacity: 1; transform: translateX(calc(var(--x) + 8px)) scale(1.2); }
}`
  },
];
