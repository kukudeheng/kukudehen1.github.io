"use strict";(self["webpackChunkchangya"]=self["webpackChunkchangya"]||[]).push([[125],{4125:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h1",[t._v("英雄百科")]),e("ul",t._l(t.list,(function(n){return e("li",{key:n.heroId},[e("img",{attrs:{src:n.icon,alt:""}}),e("p",[t._v(t._s(n.name))]),e("button",{on:{click:function(e){return t.tianzhuan(n.heroId)}}},[t._v("跳转")])])})),0)])},a=[],u=e(7906),i=e(6198),c=e(2614),o={name:"HeroView",data:function(){return{list:[]}},methods:{tianzhuan:function(t){this.$router.push({path:"/HeroDetail",query:{id:t}})}},created:function(){var t=this;return(0,i.Z)((0,u.Z)().mark((function n(){var e;return(0,u.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,c.E)();case 2:e=n.sent,console.log("res",e),t.list=e.data.data;case 5:case"end":return n.stop()}}),n)})))()}},s=o,l=e(1001),h=(0,l.Z)(s,r,a,!1,null,"50355214",null),f=h.exports},2614:function(t,n,e){e.d(n,{P:function(){return o},E:function(){return c}});var r=e(6166),a=e.n(r),u=a().create({baseURL:"https://autumnfish.cn/"}),i=u;function c(){return i({url:"/api/lol/search",method:"get"})}function o(t){return i({url:"/api/lol/info",method:"get",params:{id:t}})}}}]);
//# sourceMappingURL=125-legacy.2a4d3f55.js.map