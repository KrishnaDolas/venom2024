"use strict";(self.webpackChunkvenomwebsite=self.webpackChunkvenomwebsite||[]).push([[6091],{6091:(e,t,o)=>{o.d(t,{divBounce:()=>l,mouseBounce:()=>p});var i=o(4409);const n=2,s=.5,f=Math.PI*s,c=2,a=10,r=0;function u(e,t,o,s,c){const a=e.particles.quadTree.query(s,c);for(const r of a)s instanceof i.jl?(0,i.pE)((0,i.Tg)(r),{position:t,radius:o,mass:o**n*f,velocity:i.Mi.origin,factor:i.Mi.origin}):s instanceof i.M_&&(0,i.jo)(r,(0,i.AE)(t,o))}function l(e,t,o,n){(0,i.U6)(o,t,((t,o)=>function(e,t,o,n){const f=document.querySelectorAll(t);f.length&&f.forEach((t=>{const f=t,r=e.retina.pixelRatio,u={x:(f.offsetLeft+f.offsetWidth*s)*r,y:(f.offsetTop+f.offsetHeight*s)*r},l=f.offsetWidth*s*r,p=a*r,h="circle"===o.type?new i.jl(u.x,u.y,l+p):new i.M_(f.offsetLeft*r-p,f.offsetTop*r-p,f.offsetWidth*r+p*c,f.offsetHeight*r+p*c);n(u,l,h)}))}(e,t,o,((t,o,i)=>u(e,t,o,i,n)))))}function p(e,t){const o=e.retina.pixelRatio,n=a*o,s=e.interactivity.mouse.position,f=e.retina.bounceModeDistance;!f||f<r||!s||u(e,s,f,new i.jl(s.x,s.y,f+n),t)}}}]);
//# sourceMappingURL=6091.ef71a661.chunk.js.map