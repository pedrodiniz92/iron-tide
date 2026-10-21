const SIL = {
  stinger: { bb:{x:-14,y:-11,w:28,h:22}, path(c){
    c.beginPath(); c.moveTo(0,-11); c.quadraticCurveTo(6,-9,5,-1);
    c.lineTo(14,3); c.lineTo(6,4); c.lineTo(3,10); c.lineTo(0,4);
    c.lineTo(-3,10); c.lineTo(-6,4); c.lineTo(-14,3); c.lineTo(-5,-1);
    c.quadraticCurveTo(-6,-9,0,-11); c.closePath(); } },
  ghost: { bb:{x:-13,y:-14,w:26,h:28}, path(c){
    c.beginPath(); c.moveTo(-12,2); c.quadraticCurveTo(-13,-14,0,-14);
    c.quadraticCurveTo(13,-14,12,2);
    c.lineTo(12,10); c.lineTo(8,6); c.lineTo(5,12); c.lineTo(2,6);
    c.lineTo(-1,12); c.lineTo(-4,6); c.lineTo(-8,12); c.lineTo(-12,6);
    c.closePath(); } },
  banshee: { bb:{x:-11,y:-14,w:22,h:28}, path(c){
    c.beginPath(); c.moveTo(0,-14); c.quadraticCurveTo(9,-10,8,0);
    c.quadraticCurveTo(12,8,5,14); c.lineTo(3,9); c.lineTo(0,14);
    c.lineTo(-2,9); c.lineTo(-6,13); c.quadraticCurveTo(-11,4,-8,0);
    c.quadraticCurveTo(-9,-10,0,-14); c.closePath(); } },
  classic: { bb:{x:-28,y:-11,w:56,h:22}, path(c){
    c.beginPath(); c.moveTo(0,-11); c.lineTo(4,-3); c.lineTo(12,1); c.lineTo(28,7);
    c.lineTo(16,9); c.lineTo(6,6); c.lineTo(-6,6); c.lineTo(-16,9);
    c.lineTo(-28,7); c.lineTo(-12,1); c.lineTo(-4,-3); c.closePath(); } },
  squid: { bb:{x:-13,y:-16,w:26,h:34}, path(c){
    c.beginPath(); c.moveTo(0,-16); c.quadraticCurveTo(13,-13,12,0); c.quadraticCurveTo(11,8,6,9);
    c.lineTo(8,17); c.lineTo(4,10); c.lineTo(2,18); c.lineTo(-1,10);
    c.lineTo(-3,18); c.lineTo(-6,9); c.quadraticCurveTo(-11,8,-12,0);
    c.quadraticCurveTo(-13,-13,0,-16); c.closePath(); } },
  crab: { bb:{x:-18,y:-8,w:36,h:26}, path(c){
    c.beginPath(); c.moveTo(-14,-8); c.lineTo(14,-8); c.quadraticCurveTo(18,2,12,10);
    c.lineTo(16,18); c.lineTo(10,12); c.lineTo(6,18); c.lineTo(0,12);
    c.lineTo(-6,18); c.lineTo(-10,12); c.lineTo(-16,18); c.lineTo(-12,10);
    c.quadraticCurveTo(-18,2,-14,-8); c.closePath(); } },
  octo: { bb:{x:-13,y:-12,w:26,h:30}, path(c){
    c.beginPath(); c.moveTo(-12,-4); c.quadraticCurveTo(-13,-13,0,-13);
    c.quadraticCurveTo(13,-13,12,-4); c.quadraticCurveTo(12,4,8,5);
    c.lineTo(9,17); c.lineTo(5,8); c.lineTo(3,17); c.lineTo(0,8);
    c.lineTo(-3,17); c.lineTo(-5,8); c.lineTo(-9,17); c.lineTo(-8,5);
    c.quadraticCurveTo(-12,4,-12,-4); c.closePath(); } },
  ufo: { bb:{x:-26,y:-12,w:52,h:32}, path(c){
    c.beginPath(); c.moveTo(-26,4); c.quadraticCurveTo(0,-12,26,4);
    c.quadraticCurveTo(0,20,-26,4); c.closePath(); } },
  bullet: { bb:{x:-3,y:-8,w:6,h:16}, path(c){
    c.beginPath(); c.moveTo(0,-8); c.quadraticCurveTo(3,-6,3,0); c.quadraticCurveTo(3,8,0,8);
    c.quadraticCurveTo(-3,8,-3,0); c.quadraticCurveTo(-3,-6,0,-8); c.closePath(); } },
  ebolt: { bb:{x:-4,y:-7,w:8,h:14}, path(c){
    c.beginPath(); c.moveTo(0,-7); c.lineTo(4,0); c.lineTo(0,7); c.lineTo(-4,0); c.closePath(); } },
  bomb: { bb:{x:-9,y:-9,w:18,h:18}, path(c){
    c.beginPath(); c.arc(0,0,9,0,Math.PI*2); c.closePath(); } },
  scrap: { bb:{x:-24,y:-16,w:48,h:40}, path(c){
    c.beginPath();
    c.moveTo(-22,18); c.lineTo(-18,-6); c.lineTo(-6,-14); c.lineTo(14,-14);
    c.lineTo(22,-2); c.lineTo(22,18); c.closePath();
    c.moveTo(-14,18); c.arc(-12,18,5,0,Math.PI*2);
    c.moveTo(-1,18); c.arc(1,18,5,0,Math.PI*2);
    c.moveTo(12,18); c.arc(14,18,5,0,Math.PI*2); } },
  sentry: { bb:{x:-12,y:-20,w:24,h:40}, path(c){
    c.beginPath(); c.moveTo(0,-20); c.lineTo(6,-8); c.lineTo(12,-12); c.lineTo(8,-2);
    c.lineTo(12,10); c.lineTo(5,8); c.lineTo(0,20); c.lineTo(-5,8); c.lineTo(-12,10);
    c.lineTo(-8,-2); c.lineTo(-12,-12); c.lineTo(-6,-8); c.closePath(); } },
  skull: { bb:{x:-24,y:-18,w:48,h:38}, path(c){
    c.beginPath(); c.moveTo(-20,-10); c.quadraticCurveTo(-22,-19,0,-19);
    c.quadraticCurveTo(22,-19,20,-10); c.quadraticCurveTo(14,2,10,4);
    c.lineTo(10,14); c.lineTo(-10,14); c.lineTo(-10,4); c.quadraticCurveTo(-14,2,-20,-10);
    c.closePath(); } },
  viper: { bb:{x:-26,y:-12,w:52,h:26}, path(c){
    c.beginPath(); c.moveTo(0,-12); c.lineTo(8,-4); c.lineTo(26,-9); c.lineTo(16,2);
    c.lineTo(6,6); c.lineTo(0,14); c.lineTo(-6,6); c.lineTo(-16,2); c.lineTo(-26,-9);
    c.lineTo(-8,-4); c.closePath(); } },
  turtle: { bb:{x:-40,y:-28,w:80,h:50}, path(c){
    c.beginPath(); c.moveTo(-38,10); c.quadraticCurveTo(-40,-26,0,-28);
    c.quadraticCurveTo(40,-26,38,10); c.quadraticCurveTo(20,22,0,22);
    c.quadraticCurveTo(-20,22,-38,10); c.closePath(); } },
  mine: { bb:{x:-9,y:-9,w:18,h:18}, path(c){
    c.beginPath();
    for(let i=0;i<8;i+=1){
      const a=i*Math.PI/4;
      c.lineTo(Math.cos(a)*9, Math.sin(a)*9);
      c.lineTo(Math.cos(a+Math.PI/8)*4.5, Math.sin(a+Math.PI/8)*4.5);
    }
    c.closePath(); } },
  star: { bb:{x:-10,y:-10,w:20,h:20}, path(c){
    c.beginPath();
    for(let i=0;i<8;i+=1){
      const a=i*Math.PI/4, ri=i%2?5:10;
      c.lineTo(Math.cos(a)*ri, Math.sin(a)*ri);
    }
    c.closePath(); } },
  box: { bb:{x:-12,y:-12,w:24,h:24}, path(c){
    c.beginPath(); c.moveTo(-12,-8); c.arc(-8,-8,4,Math.PI,Math.PI*1.5);
    c.arc(8,-8,4,Math.PI*1.5,0); c.arc(8,8,4,0,Math.PI*0.5); c.arc(-8,8,4,Math.PI*0.5,Math.PI);
    c.closePath(); } },
};

function neon(name, cx, cy, targetW, color, glow=7) {
  const s = SIL[name];
  const scale = targetW / s.bb.w;
  ctx.save();
  ctx.translate(cx - (s.bb.x + s.bb.w/2) * scale, cy - (s.bb.y + s.bb.h/2) * scale);
  ctx.scale(scale, scale);
  ctx.shadowColor = color;
  ctx.shadowBlur = glow;
  s.path(ctx);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

function neonFlame(cx, cy, height, color="rgba(120,190,255,0.9)") {
  ctx.save();
  const g = ctx.createLinearGradient(cx, cy, cx, cy + height);
  g.addColorStop(0, color);
  g.addColorStop(1, "rgba(120,190,255,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.moveTo(cx - 5, cy);
  ctx.lineTo(cx, cy + height);
  ctx.lineTo(cx + 5, cy);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
