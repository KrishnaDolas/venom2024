"use strict";(self.webpackChunkvenomwebsite=self.webpackChunkvenomwebsite||[]).push([[3089],{3089:(e,t,n)=>{n.d(t,{LifeUpdater:()=>c});var i=n(4409);class s extends i.PV{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),void 0!==e.sync&&(this.sync=e.sync))}}class a extends i.PV{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),void 0!==e.sync&&(this.sync=e.sync))}}class o{constructor(){this.count=0,this.delay=new s,this.duration=new a}load(e){e&&(void 0!==e.count&&(this.count=e.count),this.delay.load(e.delay),this.duration.load(e.duration))}}class c{constructor(e){this.container=e}async init(e){const t=this.container,n=e.options.life;n&&(e.life={delay:t.retina.reduceFactor?(0,i.VG)(n.delay.value)*(n.delay.sync?1:(0,i.G0)())/t.retina.reduceFactor*i.Xu:0,delayTime:0,duration:t.retina.reduceFactor?(0,i.VG)(n.duration.value)*(n.duration.sync?1:(0,i.G0)())/t.retina.reduceFactor*i.Xu:0,time:0,count:n.count},e.life.duration<=0&&(e.life.duration=-1),e.life.count<=0&&(e.life.count=-1),e.life&&(e.spawning=e.life.delay>0),await Promise.resolve())}isEnabled(e){return!e.destroyed}loadOptions(e){e.life||(e.life=new o);for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];for(const s of n)e.life.load(null===s||void 0===s?void 0:s.life)}async update(e,t){if(!this.isEnabled(e)||!e.life)return;const{updateLife:i}=await n.e(6058).then(n.bind(n,6058));i(e,t,this.container.canvas.size)}}}}]);
//# sourceMappingURL=3089.4fc1bff7.chunk.js.map