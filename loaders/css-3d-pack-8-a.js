export const css3dPack8LoadersA = [
  {
    id: 'mobius-loop-3d',
    name: '3D Möbius Loop',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Eight luminous tiles twist around a continuous loop while the full form slowly turns in space.',
    markup: `<div class="vl-mobius-loop-3d" aria-hidden="true"><div>${[0,45,90,135,180,225,270,315].map((a,i)=>`<span style="--a:${a}deg;--t:${i%2?28:-28}deg;--i:${i}"></span>`).join('')}</div></div>`,
    css: `.vl-mobius-loop-3d{width:92px;height:92px;display:grid;place-items:center;perspective:620px}.vl-mobius-loop-3d>div{position:relative;width:54px;height:54px;transform-style:preserve-3d;animation:vl-mobius-scene calc(var(--loader-speed)*2.8) linear infinite}.vl-mobius-loop-3d span{position:absolute;left:20px;top:20px;width:14px;height:14px;border-radius:4px;background:linear-gradient(135deg,color-mix(in srgb,var(--loader-accent) 82%,white),var(--loader-accent));border:1px solid color-mix(in srgb,var(--loader-accent) 72%,white);box-shadow:0 0 12px color-mix(in srgb,var(--loader-accent) 34%,transparent);transform:rotateY(var(--a)) translateZ(29px) rotateX(var(--t));animation:vl-mobius-tile calc(var(--loader-speed)*1.4) ease-in-out infinite;animation-delay:calc(var(--loader-speed)*-.12*var(--i))}@keyframes vl-mobius-scene{0%{transform:rotateX(58deg) rotateZ(0)}100%{transform:rotateX(58deg) rotateZ(360deg)}}@keyframes vl-mobius-tile{0%,100%{opacity:.35;filter:brightness(.85)}50%{opacity:1;filter:brightness(1.35)}}`
  },
  {
    id: 'vault-doors-3d',
    name: '3D Vault Doors',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Two beveled doors open from a glowing central seam and close with a heavy mechanical rhythm.',
    markup: `<div class="vl-vault-doors-3d" aria-hidden="true"><div><span class="left"></span><span class="right"></span><i></i></div></div>`,
    css: `.vl-vault-doors-3d{width:92px;height:92px;display:grid;place-items:center;perspective:520px}.vl-vault-doors-3d>div{position:relative;width:60px;height:54px;transform-style:preserve-3d;transform:rotateX(-10deg)}.vl-vault-doors-3d span{position:absolute;top:4px;width:30px;height:46px;background:linear-gradient(145deg,color-mix(in srgb,var(--loader-accent) 34%,#111827),color-mix(in srgb,var(--loader-accent) 78%,#0f172a));border:1px solid color-mix(in srgb,var(--loader-accent) 70%,white);box-shadow:inset 0 0 12px color-mix(in srgb,var(--loader-accent) 24%,transparent),0 8px 16px #0006;backface-visibility:hidden}.vl-vault-doors-3d .left{left:0;transform-origin:0 50%;animation:vl-vault-left calc(var(--loader-speed)*2) ease-in-out infinite}.vl-vault-doors-3d .right{right:0;transform-origin:100% 50%;animation:vl-vault-right calc(var(--loader-speed)*2) ease-in-out infinite}.vl-vault-doors-3d i{position:absolute;left:28px;top:7px;width:4px;height:40px;border-radius:4px;background:var(--loader-accent);box-shadow:0 0 14px var(--loader-accent);animation:vl-vault-seam calc(var(--loader-speed)*2) ease-in-out infinite}@keyframes vl-vault-left{0%,18%,82%,100%{transform:rotateY(0)}45%,55%{transform:rotateY(-76deg)}}@keyframes vl-vault-right{0%,18%,82%,100%{transform:rotateY(0)}45%,55%{transform:rotateY(76deg)}}@keyframes vl-vault-seam{0%,100%{opacity:.35;transform:scaleY(.55)}50%{opacity:1;transform:scaleY(1)}}`
  },
  {
    id: 'echo-columns-3d',
    name: '3D Echo Columns',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Five offset columns rise through depth in a cascading echo, creating a compact architectural pulse.',
    markup: `<div class="vl-echo-columns-3d" aria-hidden="true"><div><span style="--x:-28px;--z:-12px;--i:0"></span><span style="--x:-14px;--z:6px;--i:1"></span><span style="--x:0px;--z:20px;--i:2"></span><span style="--x:14px;--z:6px;--i:3"></span><span style="--x:28px;--z:-12px;--i:4"></span></div></div>`,
    css: `.vl-echo-columns-3d{width:96px;height:92px;display:grid;place-items:center;perspective:640px}.vl-echo-columns-3d>div{position:relative;width:72px;height:58px;transform-style:preserve-3d;transform:rotateX(58deg) rotateZ(-16deg)}.vl-echo-columns-3d span{position:absolute;left:30px;bottom:5px;width:12px;height:30px;border-radius:3px 3px 1px 1px;background:linear-gradient(90deg,color-mix(in srgb,var(--loader-accent) 38%,#111827),var(--loader-accent));border:1px solid color-mix(in srgb,var(--loader-accent) 68%,white);box-shadow:7px 7px 0 color-mix(in srgb,var(--loader-accent) 28%,#020617),0 0 10px color-mix(in srgb,var(--loader-accent) 22%,transparent);transform:translate3d(var(--x),0,var(--z));animation:vl-echo-column calc(var(--loader-speed)*1.5) ease-in-out infinite;animation-delay:calc(var(--loader-speed)*-.16*var(--i))}@keyframes vl-echo-column{0%,100%{height:22px;filter:brightness(.75)}45%,60%{height:48px;filter:brightness(1.35)}}`
  },
  {
    id: 'hex-drum-3d',
    name: '3D Hex Drum',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six translucent faces form a rotating hexagonal drum with a traveling highlight around its shell.',
    markup: `<div class="vl-hex-drum-3d" aria-hidden="true"><div>${[0,60,120,180,240,300].map((a,i)=>`<span style="--a:${a}deg;--i:${i}"></span>`).join('')}<i></i></div></div>`,
    css: `.vl-hex-drum-3d{width:90px;height:90px;display:grid;place-items:center;perspective:620px}.vl-hex-drum-3d>div{position:relative;width:36px;height:44px;transform-style:preserve-3d;animation:vl-hex-drum-spin calc(var(--loader-speed)*2.4) linear infinite}.vl-hex-drum-3d span{position:absolute;inset:0;background:linear-gradient(180deg,color-mix(in srgb,var(--loader-accent) 22%,transparent),color-mix(in srgb,var(--loader-accent) 72%,#0f172a));border:1px solid color-mix(in srgb,var(--loader-accent) 66%,white);transform:rotateY(var(--a)) translateZ(18px);backface-visibility:hidden;animation:vl-hex-drum-face calc(var(--loader-speed)*1.25) ease-in-out infinite;animation-delay:calc(var(--loader-speed)*-.12*var(--i))}.vl-hex-drum-3d i{position:absolute;left:10px;top:14px;width:16px;height:16px;border-radius:50%;background:var(--loader-accent);box-shadow:0 0 14px var(--loader-accent);transform:translateZ(20px)}@keyframes vl-hex-drum-spin{0%{transform:rotateX(-14deg) rotateY(0)}100%{transform:rotateX(-14deg) rotateY(360deg)}}@keyframes vl-hex-drum-face{0%,100%{opacity:.35}50%{opacity:.95}}`
  },
  {
    id: 'radial-steps-3d',
    name: '3D Radial Steps',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Eight steps climb around a circular path while the whole stairway rotates like a miniature kinetic monument.',
    markup: `<div class="vl-radial-steps-3d" aria-hidden="true"><div>${[0,45,90,135,180,225,270,315].map((a,i)=>`<span style="--a:${a}deg;--h:${6+i*2}px;--i:${i}"></span>`).join('')}</div></div>`,
    css: `.vl-radial-steps-3d{width:94px;height:94px;display:grid;place-items:center;perspective:650px}.vl-radial-steps-3d>div{position:relative;width:62px;height:62px;transform-style:preserve-3d;animation:vl-radial-steps-scene calc(var(--loader-speed)*2.8) linear infinite}.vl-radial-steps-3d span{position:absolute;left:25px;top:25px;width:14px;height:14px;border-radius:2px;background:linear-gradient(145deg,color-mix(in srgb,var(--loader-accent) 76%,white),color-mix(in srgb,var(--loader-accent) 42%,#0f172a));border:1px solid color-mix(in srgb,var(--loader-accent) 70%,white);box-shadow:0 var(--h) 0 color-mix(in srgb,var(--loader-accent) 25%,#020617);transform:rotateZ(var(--a)) translateY(-25px) translateZ(var(--h)) rotateX(66deg);animation:vl-radial-step-glow calc(var(--loader-speed)*1.3) ease-in-out infinite;animation-delay:calc(var(--loader-speed)*-.1*var(--i))}@keyframes vl-radial-steps-scene{0%{transform:rotateX(62deg) rotateZ(0)}100%{transform:rotateX(62deg) rotateZ(360deg)}}@keyframes vl-radial-step-glow{0%,100%{opacity:.4}50%{opacity:1;filter:brightness(1.35)}}`
  }
];
