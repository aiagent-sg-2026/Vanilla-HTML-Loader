export const spinnersPack6LoadersC = [
  {
    id: 'spinner-nebula-rail',
    name: 'Nebula Rail Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Interlinked rail arcs orbit and slide in a luminous nebula rhythm.',
    markup: `<div class="vl-cat-spinner-nebula-rail" role="img" aria-label="Nebula rail spinner">
  <span style="--i:0; --d:0s"></span>
  <span style="--i:1; --d:-0.25s"></span>
  <span style="--i:2; --d:-0.5s"></span>
  <span style="--i:3; --d:-0.75s"></span>
  <span style="--i:4; --d:-1s"></span>
  <span style="--i:5; --d:-1.25s"></span>
</div>`,
    css: `.vl-cat-spinner-nebula-rail {
  width: 190px;
  height: 108px;
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #1f628c);
  background: linear-gradient(175deg, #061a2b, #0a2841 62%, #040a14);
}
.vl-cat-spinner-nebula-rail span {
  position: absolute;
  inset: 24px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 60%, transparent);
  border-radius: 50%;
  opacity: .28;
  transform: rotate(calc(var(--i) * 60deg));
  animation: vl-cat-spinner-nebula-rail-spin calc(var(--loader-speed) * 1.08) linear infinite;
  animation-delay: var(--d);
}
.vl-cat-spinner-nebula-rail span:nth-child(odd) {
  border-style: dashed;
  border-color: color-mix(in srgb, var(--loader-accent) 82%, white 8%);
}
@keyframes vl-cat-spinner-nebula-rail-spin {
  to { transform: rotate(calc(360deg + (var(--i) * 60deg))); opacity: 1; }
}`
  },
];
