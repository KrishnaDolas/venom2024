"use strict";(self.webpackChunkvenomwebsite=self.webpackChunkvenomwebsite||[]).push([[231],{231:(o,e,i)=>{i.d(e,{StrokeColorUpdater:()=>n});var t=i(4409);class n{constructor(o){this.container=o}async init(o){var e,i,n;const s=this.container,l=o.options,r=(0,t.TA)(l.stroke,o.id,l.reduceDuplicates);o.strokeWidth=(0,t.VG)(r.width)*s.retina.pixelRatio,o.strokeOpacity=(0,t.VG)(null!==(e=r.opacity)&&void 0!==e?e:1),o.strokeAnimation=null===(i=r.color)||void 0===i?void 0:i.animation;const a=null!==(n=(0,t.R5)(r.color))&&void 0!==n?n:o.getFillColor();a&&(o.strokeColor=(0,t.pz)(a,o.strokeAnimation,s.retina.reduceFactor)),await Promise.resolve()}isEnabled(o){const e=o.strokeAnimation,{strokeColor:i}=o;return!o.destroyed&&!o.spawning&&!!e&&(void 0!==(null===i||void 0===i?void 0:i.h.value)&&i.h.enable||void 0!==(null===i||void 0===i?void 0:i.s.value)&&i.s.enable||void 0!==(null===i||void 0===i?void 0:i.l.value)&&i.l.enable)}async update(o,e){this.isEnabled(o)&&((0,t.Jv)(o.strokeColor,e),await Promise.resolve())}}}}]);
//# sourceMappingURL=231.861a06cb.chunk.js.map