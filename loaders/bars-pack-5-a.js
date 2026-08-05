export const barsPack5LoadersA = [
  {
    id: 'bar-wave-rift',
    name: 'Wave Rift Bars',
    category: 'Bars',
    tech: 'CSS',
    description: 'Bars rise, split and phase-lock into a repeating wave rift.',
    markup: `<div class="vl-cat-bar-wave-rift" role="img" aria-label="Wave rift bars">
  <span style="--i:0; --delay:0s"></span>
  <span style="--i:1; --delay:-0.15s"></span>
  <span style="--i:2; --delay:-0.3s"></span>
  <span style="--i:3; --delay:-0.45s"></span>
  <span style="--i:4; --delay:-0.6s"></span>
  <span style="--i:5; --delay:-0.75s"></span>
</div>`,
    css: `.vl-cat-bar-wave-rift {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #1f5883);
  border-radius: 14px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  box-sizing: border-box;
}
.vl-cat-bar-wave-rift span {
  width: 15px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 85%, #eff6ff);
  animation: vl-cat-bar-wave-rift-rise calc(var(--loader-speed) * 1.12) ease-in-out infinite;
  animation-delay: var(--delay);
  transform-origin: bottom;
  height: calc(12px + var(--i) * 11px);
}
@keyframes vl-cat-bar-wave-rift-rise {
  0%,100% { transform: scaleY(.42); opacity: .3; }
  50% { transform: scaleY(1); opacity: 1; }
}`
  },
];
