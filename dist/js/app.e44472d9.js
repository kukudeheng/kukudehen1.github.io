(function(){"use strict";var e={716:function(e,n,t){t.d(n,{LP:function(){return i},gy:function(){return u},o4:function(){return o}});const r="token";function o(e){localStorage.setItem(r,e)}function i(){return localStorage.getItem(r)}function u(){localStorage.removeItem(r)}},9589:function(e,n,t){var r=t(8935),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],u=t(1001),a={},c=(0,u.Z)(a,o,i,!1,null,null,null),f=c.exports,l=t(6665);r.Z.config.productionTip=!1,new r.Z({router:l.Z,render:e=>e(f)}).$mount("#app")},6665:function(e,n,t){t(6699);var r=t(8935),o=t(2809),i=t(716);r.Z.use(o.Z);const u=[{path:"/login",name:"login",component:()=>Promise.all([t.e(166),t.e(570)]).then(t.bind(t,5570))},{path:"/",name:"layout",component:()=>t.e(788).then(t.bind(t,4788)),children:[{path:"",redirect:"home"},{path:"home",name:"home",component:()=>t.e(186).then(t.bind(t,3186))},{path:"hero",name:"hero",component:()=>Promise.all([t.e(166),t.e(125)]).then(t.bind(t,4125))},{path:"joke",name:"joke",component:()=>t.e(776).then(t.bind(t,9776))},{path:"HeroDetail/:id?",name:"HeroDetail",component:()=>Promise.all([t.e(166),t.e(539)]).then(t.bind(t,1539))}]},{path:"/notfound",name:"notfound",component:()=>t.e(149).then(t.bind(t,7149))},{path:"*",redirect:"/notfound"},{path:"/login",component:()=>t.e(149).then(t.bind(t,7149))}],a=new o.Z({routes:u}),c=["/login","/notdound"];a.beforeEach(((e,n,t)=>{!0===c.includes(e.path)||(0,i.LP)()?t():(alert("请先登录"),t("/login"))})),n["Z"]=a}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{125:"1617e721",149:"f2f93df7",166:"05a59b63",186:"c3a9a976",539:"3def98fe",570:"47e999fb",776:"c58c7587",788:"221c0a9d"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{125:"e539d52d",149:"b86a04ce",186:"829a559c",539:"9eaa2efb",570:"0699cde7",776:"11e9bbc6",788:"57a6335a"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="changya:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var s=function(n,t){a.onerror=a.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},h=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={125:1,149:1,186:1,539:1,570:1,776:1,788:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var l=c(t)}for(n&&n(r);f<u.length;f++)i=u[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkchangya"]=self["webpackChunkchangya"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(9589)}));r=t.O(r)})();
//# sourceMappingURL=app.e44472d9.js.map