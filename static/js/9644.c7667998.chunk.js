"use strict";(self.webpackChunkvenomwebsite=self.webpackChunkvenomwebsite||[]).push([[9644],{9644:(o,i,t)=>{t.d(i,{OpacityUpdater:()=>e});var a=t(4409);class e{constructor(o){this.container=o}async init(o){const i=o.options.opacity;o.opacity=(0,a.Xs)(i,1);const t=i.animation;t.enable&&(o.opacity.velocity=(0,a.VG)(t.speed)/a.a5*this.container.retina.reduceFactor,t.sync||(o.opacity.velocity*=(0,a.G0)())),await Promise.resolve()}isEnabled(o){var i,t,a,e;return!o.destroyed&&!o.spawning&&!!o.opacity&&o.opacity.enable&&((null!==(i=o.opacity.maxLoops)&&void 0!==i?i:0)<=0||(null!==(t=o.opacity.maxLoops)&&void 0!==t?t:0)>0&&(null!==(a=o.opacity.loops)&&void 0!==a?a:0)<(null!==(e=o.opacity.maxLoops)&&void 0!==e?e:0))}reset(o){o.opacity&&(o.opacity.time=0,o.opacity.loops=0)}async update(o,i){this.isEnabled(o)&&o.opacity&&((0,a.UC)(o,o.opacity,!0,o.options.opacity.animation.destroy,i),await Promise.resolve())}}}}]);
//# sourceMappingURL=9644.c7667998.chunk.js.map