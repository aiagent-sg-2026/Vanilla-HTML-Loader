export const mapsPack3LoadersB = [
  {
    id: 'maps-grid-tracker',
    name: 'Grid Tracker Map',
    category: 'Maps',
    tech: 'CSS',
    description: 'A small map grid activates route pins in a sweeping trace.',
    markup: `<div class="vl-cat-maps-grid-tracker" role="img" aria-label="Grid tracker map">
  <span class="cell c1"></span>
  <span class="cell c2"></span>
  <span class="cell c3"></span>
  <span class="pin p1"></span>
  <span class="pin p2"></span>
</div>`,
    css: `.vl-cat-maps-grid-tracker {
  width: 170px;
  height: 108px;
  border-radius: 14px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #dce8f4);
  position: relative;
  padding: 12px;
  background: linear-gradient(180deg, #081f35, #0e2d4a 60%, #050c14);
}
.vl-cat-maps-grid-tracker .cell {
  position: absolute;
  width: 34px;
  height: 22px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--loader-accent) 14%, #dce7f4);
  opacity: .2;
}
.vl-cat-maps-grid-tracker .c1 { left: 18px; top: 16px; }
.vl-cat-maps-grid-tracker .c2 { left: 61px; top: 46px; }
.vl-cat-maps-grid-tracker .c3 { left: 104px; top: 16px; }
.vl-cat-maps-grid-tracker .c1, .vl-cat-maps-grid-tracker .c2, .vl-cat-maps-grid-tracker .c3 {
  animation: vl-cat-maps-grid-tracker-cell calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
.vl-cat-maps-grid-tracker .c1 { animation-delay: 0s; }
.vl-cat-maps-grid-tracker .c2 { animation-delay: -.4s; }
.vl-cat-maps-grid-tracker .c3 { animation-delay: -.8s; }
.vl-cat-maps-grid-tracker .pin {
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-maps-grid-tracker-pin calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-cat-maps-grid-tracker .p1 { left: 52px; top: 72px; }
.vl-cat-maps-grid-tracker .p2 { left: 111px; top: 72px; animation-delay: -.3s; }
@keyframes vl-cat-maps-grid-tracker-cell {
  0%,100% { opacity: .22; transform: scale(.78); }
  50% { opacity: .7; transform: scale(1); }
}
@keyframes vl-cat-maps-grid-tracker-pin {
  0%,100% { transform: scale(.6); opacity: .3; }
  50% { transform: scale(1.2); opacity: 1; }
}`
  },
];
