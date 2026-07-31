export const buttonsPack3LoadersB = [
  {
    id: 'button-pixel-stream',
    name: 'Pixel Stream Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A short stream of square pixels travels toward the label for compact data actions.',
    markup: `<button class="vl-button-pixel-stream" type="button" disabled aria-busy="true"><span class="vl-button-pixel-stream-track" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span>Compiling</span></button>`,
    css: `.vl-button-pixel-stream {
  min-width: 154px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 17px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 46%, transparent);
  border-radius: 10px;
  background: color-mix(in srgb, var(--loader-accent) 6%, #fff);
  color: var(--loader-accent);
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-pixel-stream-track {
  position: relative;
  width: 35px;
  height: 14px;
}
.vl-button-pixel-stream-track i {
  position: absolute;
  top: 4px;
  left: 0;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  background: currentColor;
  animation: vl-button-pixel-stream-run calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-button-pixel-stream-track i:nth-child(2) { animation-delay: .12s; }
.vl-button-pixel-stream-track i:nth-child(3) { animation-delay: .24s; }
.vl-button-pixel-stream-track i:nth-child(4) { animation-delay: .36s; }
@keyframes vl-button-pixel-stream-run {
  0% { transform: translateX(0) scale(.55); opacity: 0; }
  35% { opacity: 1; }
  100% { transform: translateX(29px) scale(1); opacity: 0; }
}`
  },
  {
    id: 'button-folding-chevron',
    name: 'Folding Chevron Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'Two chevrons fold inward and reopen to communicate queued navigation or submission.',
    markup: `<button class="vl-button-folding-chevron" type="button" disabled aria-busy="true"><span class="vl-button-folding-chevron-icon" aria-hidden="true"><i></i><i></i></span><span>Forwarding</span></button>`,
    css: `.vl-button-folding-chevron {
  min-width: 154px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 17px;
  border: 0;
  border-radius: 10px;
  background: var(--loader-accent);
  color: #fff;
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-folding-chevron-icon {
  position: relative;
  width: 28px;
  height: 18px;
}
.vl-button-folding-chevron-icon i {
  position: absolute;
  top: 3px;
  width: 11px;
  height: 11px;
  border-top: 3px solid #fff;
  border-right: 3px solid #fff;
  transform: rotate(45deg);
  animation: vl-button-folding-chevron-fold calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-button-folding-chevron-icon i:first-child { left: 1px; }
.vl-button-folding-chevron-icon i:last-child { right: 1px; animation-delay: .18s; }
@keyframes vl-button-folding-chevron-fold {
  0%, 100% { transform: translateX(-2px) rotate(45deg) scale(.72); opacity: .45; }
  50% { transform: translateX(3px) rotate(45deg) scale(1); opacity: 1; }
}`
  },
  {
    id: 'button-rail-shuttle',
    name: 'Rail Shuttle Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A small shuttle moves back and forth along a track before the action label.',
    markup: `<button class="vl-button-rail-shuttle" type="button" disabled aria-busy="true"><span class="vl-button-rail-shuttle-track" aria-hidden="true"><i></i></span><span>Transferring</span></button>`,
    css: `.vl-button-rail-shuttle {
  min-width: 160px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 17px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 42%, transparent);
  border-radius: 10px;
  background: #fff;
  color: var(--loader-accent);
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-rail-shuttle-track {
  position: relative;
  width: 36px;
  height: 5px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 22%, transparent);
}
.vl-button-rail-shuttle-track i {
  position: absolute;
  left: 0;
  top: -4px;
  width: 13px;
  height: 13px;
  border-radius: 4px;
  background: var(--loader-accent);
  animation: vl-button-rail-shuttle-move calc(var(--loader-speed) * 1.1) ease-in-out infinite alternate;
}
@keyframes vl-button-rail-shuttle-move {
  to { transform: translateX(23px) rotate(90deg); }
}`
  },
  {
    id: 'button-stacked-cards',
    name: 'Stacked Cards Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'Three tiny cards lift and settle in sequence for document, export, and batch actions.',
    markup: `<button class="vl-button-stacked-cards" type="button" disabled aria-busy="true"><span class="vl-button-stacked-cards-icon" aria-hidden="true"><i></i><i></i><i></i></span><span>Packaging</span></button>`,
    css: `.vl-button-stacked-cards {
  min-width: 154px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 17px;
  border: 0;
  border-radius: 10px;
  background: var(--loader-accent);
  color: #fff;
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-stacked-cards-icon {
  position: relative;
  width: 31px;
  height: 21px;
}
.vl-button-stacked-cards-icon i {
  position: absolute;
  left: 5px;
  width: 22px;
  height: 12px;
  border: 2px solid #fff;
  border-radius: 3px;
  background: color-mix(in srgb, var(--loader-accent) 72%, white);
  animation: vl-button-stacked-cards-lift calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-button-stacked-cards-icon i:nth-child(1) { top: 7px; }
.vl-button-stacked-cards-icon i:nth-child(2) { top: 4px; animation-delay: .16s; }
.vl-button-stacked-cards-icon i:nth-child(3) { top: 1px; animation-delay: .32s; }
@keyframes vl-button-stacked-cards-lift {
  0%, 100% { transform: translateY(3px); opacity: .42; }
  50% { transform: translateY(-3px); opacity: 1; }
}`
  },
  {
    id: 'button-spark-route',
    name: 'Spark Route Button',
    category: 'Buttons',
    tech: 'CSS',
    description: 'A small spark follows a curved route inside the button for smart or automated actions.',
    markup: `<button class="vl-button-spark-route" type="button" disabled aria-busy="true"><span class="vl-button-spark-route-stage" aria-hidden="true"><i></i></span><span>Automating</span></button>`,
    css: `.vl-button-spark-route {
  min-width: 156px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 17px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 44%, transparent);
  border-radius: 10px;
  background: color-mix(in srgb, var(--loader-accent) 6%, #fff);
  color: var(--loader-accent);
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-button-spark-route-stage {
  position: relative;
  width: 34px;
  height: 22px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 30%, transparent);
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  transform: rotate(18deg);
}
.vl-button-spark-route-stage i {
  position: absolute;
  left: 2px;
  top: -5px;
  width: 9px;
  height: 9px;
  background: var(--loader-accent);
  clip-path: polygon(50% 0, 63% 36%, 100% 50%, 63% 64%, 50% 100%, 37% 64%, 0 50%, 37% 36%);
  transform-origin: 14px 15px;
  animation: vl-button-spark-route-run calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-button-spark-route-run {
  0%, 100% { transform: rotate(-18deg) scale(.65); opacity: .35; }
  50% { transform: rotate(165deg) scale(1); opacity: 1; }
}`
  }
];
