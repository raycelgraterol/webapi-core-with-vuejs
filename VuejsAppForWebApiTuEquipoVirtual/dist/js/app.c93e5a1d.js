(function(e){function t(t){for(var o,u,i=t[0],l=t[1],s=t[2],c=0,p=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function u(e){return i.p+"js/"+({"about~login":"about~login",about:"about",login:"login",form:"form"}[e]||e)+"."+{"about~login":"0823f687",about:"390294e0",login:"85924c17",form:"98372b21"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var s=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"danger"}},[n("b-container",[n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-navbar-brand",{attrs:{href:"#"}},[e._v("Menu")]),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:{name:"home"},exact:""}},[e._v("Home")]),n("b-nav-item",{attrs:{to:{name:"login"}}},[e._v("Login")])],1)],1),n("b-navbar-nav",{staticClass:"ml-auto"},[e.loggedIn?n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"text"},on:{click:e.logOut}},[e._v("Sign Out")]):e._e()],1)],1)],1),n("b-container",[n("router-view")],1)],1)},a=[],u={name:"home",data:function(){return{loggedIn:!1}},components:{},methods:{logOut:function(){localStorage.removeItem("user"),this.loggedIn=!1,this.$router.push("/login")},setLoggedIn:function(){var e=localStorage.getItem("user");this.loggedIn=!!e}},updated:function(){this.setLoggedIn()}},i=u,l=n("2877"),s=Object(l["a"])(i,r,a,!1,null,null,null),c=s.exports,f=n("8c4f");o["default"].use(f["a"]);var p=[{path:"/",name:"home",component:function(){return Promise.all([n.e("about~login"),n.e("about")]).then(n.bind(null,"ed81"))}},{path:"/users",name:"users",component:function(){return Promise.all([n.e("about~login"),n.e("about")]).then(n.bind(null,"ed81"))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("about~login"),n.e("login")]).then(n.bind(null,"a55b"))}},{path:"/form",name:"form",component:function(){return n.e("form").then(n.bind(null,"c109"))}}],d=new f["a"]({mode:"history",base:"/",routes:p}),b=d,m=n("2f62");o["default"].use(m["a"]);var g=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}}),v=n("bc3a"),h=n.n(v),y=n("a7fe"),w=n.n(y),O=n("5f5b");n("f9e3"),n("2dd8");o["default"].use(w.a,h.a),o["default"].use(O["a"]),o["default"].config.productionTip=!0,new o["default"]({router:b,store:g,render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=app.c93e5a1d.js.map