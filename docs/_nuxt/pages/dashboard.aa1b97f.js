(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{212:function(e,t,r){"use strict";r.r(t);r(33),r(34),r(19),r(202);var n=r(225),o=r(213),c={name:"IdentIcon",props:{value:String,size:{type:Number,default:320}},computed:{buffer:function(){var e=o.createHash("sha256").update(this.value).digest().toString("hex");return n.generateSync({id:e,size:this.size})}}},d=r(13),component=Object(d.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("img",{attrs:{src:this.buffer,alt:"identicon"}})}),[],!1,null,null,null);t.default=component.exports},225:function(e,t,r){(function(e){var n=r(213),o="undefined"!=typeof window&&void 0!==window.document,c=r(o?231:232),d=new Array(0,4,24,20),l=new Array(0,4,20),f=new Array(2,24,20),x=new Array(0,2,20,22),v=new Array(2,14,22,10),m=new Array(0,14,24,22),y=new Array(2,24,22,13,11,22,20),h=new Array(0,14,22),w=new Array(6,8,18,16),C=new Array(4,20,10,12,2),_=new Array(0,2,12,10),E=new Array(10,14,22),k=new Array(20,12,24),D=new Array(10,2,12),S=new Array(0,2,10),R=new Array(d,l,f,x,v,m,y,h,w,C,_,E,k,D,S,d),A=new Array(0,4,8,15);function N(e,t,r,n,o,c,d,l,f){c%=4,15==(o%=R.length)&&(d=!d);var x=R[o],v=n/2,m=n/4;e.save(),e.fillStyle=d?l:f,e.fillRect(t,r,n,n),e.translate(t+v,r+v),e.rotate(c*Math.PI/2),e.beginPath(),e.moveTo(x[0]%5*m-v,Math.floor(x[0]/5)*m-v);for(var i=1;i<x.length;i++)e.lineTo(x[i]%5*m-v,Math.floor(x[i]/5)*m-v);e.closePath(),e.fillStyle=d?f:l,e.fill(),e.restore()}function T(t,r,d){var l=n.createHash("sha1").update(e.from(t,"utf8")).digest("binary"),code=l.charCodeAt(0)<<24|l.charCodeAt(1)<<16|l.charCodeAt(2)<<8|l.charCodeAt(3),canvas=o?new c(r,r):c.createCanvas(r,r),f=canvas.getContext("2d");if(function(e,code,t){var r=t/3,n=code>>3&15,o=0!=(code>>7&1),c=code>>8&3,d=code>>10&15,l=0!=(code>>14&1),f=code>>15&3,x="rgb("+((code>>27&31)<<3)+","+((code>>21&31)<<3)+","+((code>>16&31)<<3)+")",v="rgb(255,255,255)";N(e,r,r,r,A[3&code],0,0!=(code>>2&1),x,v),N(e,r,0,r,d,f++,l,x,v),N(e,2*r,r,r,d,f++,l,x,v),N(e,r,2*r,r,d,f++,l,x,v),N(e,0,r,r,d,f++,l,x,v),N(e,0,0,r,n,c++,o,x,v),N(e,2*r,0,r,n,c++,o,x,v),N(e,2*r,2*r,r,n,c++,o,x,v),N(e,0,2*r,r,n,c++,o,x,v)}(f,code,r),d&&"function"==typeof d){if(!canvas.toBuffer){f.getImageData(0,0,r,r);return void d(null,canvas.toDataURL("image/png"))}return canvas.toBuffer((function(e,t){d(e,t)}))}return canvas.toBuffer?canvas.toBuffer():canvas.toDataURL("image/png")}t.generate=t.gen=function(e,t,r){return"object"==typeof e&&"function"==typeof t?T(e.id,e.size,t):T(e,t,r)},t.generateSync=t.genSync=function(e,t){return"object"==typeof e?T(e.id,e.size):T(e,t)}}).call(this,r(207).Buffer)},231:function(e,t,r){"use strict";(e.exports=function(e,t){var canvas=document.createElement("canvas");return canvas.width=e,canvas.height=t,canvas}).Image=function(){return document.createElement("img")}},232:function(e,t,r){const n=r(233);t.parseFont=n,t.createCanvas=function(e,t){return Object.assign(document.createElement("canvas"),{width:e,height:t})},t.createImageData=function(e,t,r){switch(arguments.length){case 0:return new ImageData;case 1:return new ImageData(e);case 2:return new ImageData(e,t);default:return new ImageData(e,t,r)}},t.loadImage=function(e,t){return new Promise((function(r,n){const image=Object.assign(document.createElement("img"),t);function o(){image.onload=null,image.onerror=null}image.onload=function(){o(),r(image)},image.onerror=function(){o(),n(new Error('Failed to load the image "'+e+'"'))},image.src=e}))}},233:function(e,t,r){"use strict";const n="'([^']+)'|\"([^\"]+)\"|[\\w\\s-]+",o=new RegExp("(bold|bolder|lighter|[1-9]00) +","i"),c=new RegExp("(italic|oblique) +","i"),d=new RegExp("(small-caps) +","i"),l=new RegExp("(ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded) +","i"),f=new RegExp("([\\d\\.]+)(px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q) *((?:"+n+")( *, *(?:"+n+"))*)"),x={};e.exports=function(e){if(x[e])return x[e];const t=f.exec(e);if(!t)return;const r={weight:"normal",style:"normal",stretch:"normal",variant:"normal",size:parseFloat(t[1]),unit:t[2],family:t[3].replace(/["']/g,"").replace(/ *, */g,",")};let n,style,v,m,y=e.substring(0,t.index);switch((n=o.exec(y))&&(r.weight=n[1]),(style=c.exec(y))&&(r.style=style[1]),(v=d.exec(y))&&(r.variant=v[1]),(m=l.exec(y))&&(r.stretch=m[1]),r.unit){case"pt":r.size/=.75;break;case"pc":r.size*=16;break;case"in":r.size*=96;break;case"cm":r.size*=96/2.54;break;case"mm":r.size*=96/25.4;break;case"%":break;case"em":case"rem":r.size*=16/.75;break;case"q":r.size*=96/25.4/4}return x[e]=r}},237:function(e,t){},238:function(e,t){},240:function(e,t){},241:function(e,t){},244:function(e,t){},245:function(e,t){},246:function(e,t){},247:function(e,t){},249:function(e,t){},272:function(e,t,r){var content=r(414);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(32).default)("b9c25d5c",content,!0,{sourceMap:!1})},413:function(e,t,r){"use strict";var n=r(272);r.n(n).a},414:function(e,t,r){(t=r(31)(!1)).push([e.i,".proxy-card[data-v-65a1a7ce]{grid-column:span 1/span 1;display:flex;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));border-radius:.5rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.proxy-card[data-v-65a1a7ce]:nth-child(2n){--bg-opacity:1;background-color:#f0f5ff;background-color:rgba(240,245,255,var(--bg-opacity))}.proxy-card[data-v-65a1a7ce]:nth-child(odd){--bg-opacity:1;background-color:#edfafa;background-color:rgba(237,250,250,var(--bg-opacity))}.proxy-card.connected[data-v-65a1a7ce]{--bg-opacity:1;background-color:#0e9f6e;background-color:rgba(14,159,110,var(--bg-opacity))}.proxy-ident-icon-wrap[data-v-65a1a7ce]{padding-left:1rem;flex-shrink:0;display:flex;align-items:center}.proxy-ident-icon[data-v-65a1a7ce]{width:2.5rem;height:2.5rem;--bg-opacity:1;background-color:#d2d6dc;background-color:rgba(210,214,220,var(--bg-opacity));border-radius:9999px;flex-shrink:0;border-width:2px;--border-opacity:1;border-color:#e5e7eb;border-color:rgba(229,231,235,var(--border-opacity));box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.connected .proxy-ident-icon[data-v-65a1a7ce]{border-width:2px;--border-opacity:1;border-color:#fff;border-color:rgba(255,255,255,var(--border-opacity))}.proxy-wrap[data-v-65a1a7ce]{padding:1rem;flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.proxy-info[data-v-65a1a7ce]{display:flex;align-items:center;justify-content:space-between}.proxy-country[data-v-65a1a7ce]{--text-opacity:1;color:#161e2e;color:rgba(22,30,46,var(--text-opacity));font-size:1rem;line-height:1.25rem;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.connected .proxy-country[data-v-65a1a7ce]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.proxy-multiple[data-v-65a1a7ce]{flex-shrink:0;display:inline-block;padding:0 .5rem;--text-opacity:1;color:#05505c;color:rgba(5,80,92,var(--text-opacity));font-size:.75rem;line-height:1rem;font-weight:500;--bg-opacity:1;background-color:#afecef;background-color:rgba(175,236,239,var(--bg-opacity));border-radius:9999px}.connected .proxy-multiple[data-v-65a1a7ce]{--bg-opacity:1;background-color:#f9fafb;background-color:rgba(249,250,251,var(--bg-opacity));--text-opacity:1;color:#0e9f6e;color:rgba(14,159,110,var(--text-opacity))}.proxy-address[data-v-65a1a7ce]{margin-top:.25rem;--text-opacity:1;color:#6b7280;color:rgba(107,114,128,var(--text-opacity));font-size:.875rem;line-height:1.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.connected .proxy-address[data-v-65a1a7ce]{--text-opacity:1;color:#e5e7eb;color:rgba(229,231,235,var(--text-opacity))}.btn-connect[data-v-65a1a7ce]{padding-left:1rem;padding-right:1rem;border-color:transparent;border-top-right-radius:.5rem;border-bottom-right-radius:.5rem;--bg-opacity:1;background-color:#6875f5;background-color:rgba(104,117,245,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));font-size:1.25rem;@qpply transition duration-150 ease-in-out}.btn-connect[data-v-65a1a7ce]:hover{--bg-opacity:1;background-color:#8da2fb;background-color:rgba(141,162,251,var(--bg-opacity))}.btn-connect[data-v-65a1a7ce]:focus{outline:0;--border-opacity:1;border-color:#5850ec;border-color:rgba(88,80,236,var(--border-opacity))}.btn-connect[data-v-65a1a7ce]:active{--bg-opacity:1;background-color:#5850ec;background-color:rgba(88,80,236,var(--bg-opacity))}.connected .btn-connect[data-v-65a1a7ce]{--bg-opacity:1;background-color:#057a55;background-color:rgba(5,122,85,var(--bg-opacity))}.connected .btn-connect[data-v-65a1a7ce]:hover{--bg-opacity:1;background-color:#f05252;background-color:rgba(240,82,82,var(--bg-opacity))}.connected .btn-connect[data-v-65a1a7ce]:focus{--bg-opacity:1;background-color:#e02424;background-color:rgba(224,36,36,var(--bg-opacity))}.connected .btn-connect[data-v-65a1a7ce]:active{--bg-opacity:1;background-color:#9b1c1c;background-color:rgba(155,28,28,var(--bg-opacity))}.current-connection-grid[data-v-65a1a7ce]{display:flex;flex-direction:column;border-top-width:1px;border-bottom-width:1px;--border-opacity:1;border-color:#f4f5f7;border-color:rgba(244,245,247,var(--border-opacity));padding:1.5rem 1.5rem 1rem;text-align:center}.current-connection-grid dt[data-v-65a1a7ce]{order:2;margin-top:.5rem;font-size:.875rem;line-height:1.5rem;font-weight:500;--text-opacity:1;color:#6b7280;color:rgba(107,114,128,var(--text-opacity))}.current-connection-grid dd[data-v-65a1a7ce]{order:1;font-size:1.5rem;line-height:1;font-weight:800;--text-opacity:1;color:#5850ec;color:rgba(88,80,236,var(--text-opacity))}",""]),e.exports=t},422:function(e,t,r){"use strict";r.r(t);r(45);var n,o=r(5),c={name:"dashboard",components:{IdentIcon:r(212).default},data:function(){return{}},computed:{balance:function(){return(this.$store.state.balance/1e6).toFixed(6)}},watch:{},mounted:(n=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.syncAddress();case 2:return e.next=4,this.syncBalance();case 4:return e.next=6,this.syncProxies();case 6:return e.next=8,this.setProxyConnected(this.randomInt(3));case 8:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)}),methods:{bytesDisplay:function(e){return e<1e3?e+" B":e<1e6?(e/1e3).toFixed(1)+" KB":e<1e9?(e/1e6).toFixed(1)+" MB":(e/1e9).toFixed(1)+"GB"},randomInt:function(e){return Math.floor(Math.random()*(e+1))},syncAddress:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("SET_ADDRESS","vfhs98j2y1W5u1y7Q4ap9A5f6bWu7A5rp");case 2:case"end":return t.stop()}}),t)})))()},syncBalance:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("SET_BALANCE",e.randomInt(2e10));case 2:case"end":return t.stop()}}),t)})))()},syncProxies:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("SET_PROXIES",[{id:0,connected:!1,country:"United States",address:"vQrFr6k03QEC7H063WeP3hQE11DhaRQcR",multiple:1},{id:1,connected:!1,country:"Hong Kong",address:"vxC7BbcSsVMMK8s73891smmgY24qmyVNK",multiple:.2},{id:2,connected:!1,country:"United States",address:"vxvyEU8DNgURkA36cxxTSqfc75f7DDS4S",multiple:30},{id:3,connected:!1,country:"Japan",address:"vn6DEy87mm1wY5458Rj4xKWh4M6tSkbm5",multiple:20}]);case 2:case"end":return t.stop()}}),t)})))()},setProxyConnected:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$store.dispatch("SET_PROXY_CONNECTED",e);case 2:return r.next=4,t.updateConnected();case 4:return r.next=6,t.keepSyncConnected();case 6:case"end":return r.stop()}}),r)})))()},setProxyDisconnected:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("SET_CONNECTED_DOWN_SPEED",0);case 2:return t.next=4,e.$store.dispatch("SET_CONNECTED_UP_SPEED",0);case 4:return t.next=6,e.$store.dispatch("SET_PROXY_DISCONNECTED");case 6:return t.next=8,e.$store.dispatch("CLEAR_CONNECTED_INTERVAL");case 8:case"end":return t.stop()}}),t)})))()},updateConnected:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("SET_CONNECTED_UNPAID_TRAFFIC",e.$store.state.connected.unpaidTraffic+e.$store.state.connected.downSpeed);case 2:return t.next=4,e.$store.dispatch("SET_CONNECTED_DOWN_SPEED",e.randomInt(3e5));case 4:return t.next=6,e.$store.dispatch("SET_CONNECTED_UP_SPEED",e.randomInt(1e5));case 6:case"end":return t.stop()}}),t)})))()},keepSyncConnected:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$store.state.connected.updateInterval){t.next=3;break}return t.next=3,e.$store.dispatch("SET_CONNECTED_INTERVAL",window.setInterval(e.updateConnected,1e3));case 3:case"end":return t.stop()}}),t)})))()}}},d=(r(413),r(13)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container mx-auto px-4 sm:px-6 lg:px-8 py-6"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.address,expression:"$store.state.address"}],staticClass:"flex flex-col lg:flex-row items-center justify-center text-center space-y-2 lg:space-y-0 space-x-8"},[r("div",{staticClass:"flex items-center justify-center space-x-6"},[r("fa",{staticClass:"text-4xl text-gray-500",attrs:{icon:["fas","wallet"]}}),e._v(" "),r("span",{staticClass:"text-lg sm:text-xl lg:text-2xl text-gray-400"},[e._v("\n        "+e._s(e.$store.state.address)+"\n      ")])],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.balance,expression:"$store.state.balance"}],staticClass:"flex items-center justify-center space-x-2"},[r("div",{staticClass:"font-extrabold text-lg lg:text-xl text-indigo-600"},[e._v("\n        "+e._s(e.balance)+"\n      ")]),e._v(" "),r("div",{staticClass:"text-base lg:text-lg text-gray-400"},[e._v("\n        Voken\n      ")])])]),e._v(" "),r("div",{staticClass:"mt-6 flex flex-col md:flex-row"},[r("ul",{staticClass:"md:self-start md:w-1/2 lg:w-1/3 grid grid-cols-1 gap-y-4"},e._l(this.$store.state.proxies,(function(t){return r("li",{staticClass:"proxy-card",class:{connected:t.connected}},[r("div",{staticClass:"proxy-ident-icon-wrap"},[r("ident-icon",{staticClass:"proxy-ident-icon",attrs:{value:t.address}})],1),e._v(" "),r("div",{staticClass:"proxy-wrap"},[r("div",{staticClass:"proxy-info"},[r("h3",{staticClass:"proxy-country"},[e._v("\n              "+e._s(t.country)+"\n            ")]),e._v(" "),r("span",{staticClass:"proxy-multiple"},[e._v("\n              x"+e._s(t.multiple)+"\n            ")])]),e._v(" "),r("p",{staticClass:"proxy-address"},[e._v("\n            "+e._s(t.address)+"\n          ")])]),e._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:t.connected,expression:"proxy.connected"}],staticClass:"btn-connect",on:{click:e.setProxyDisconnected}},[r("fa",{attrs:{icon:["fas","bolt"]}})],1),e._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:!t.connected,expression:"!proxy.connected"}],staticClass:"btn-connect",on:{click:function(r){return e.setProxyConnected(t.id)}}},[r("fa",{attrs:{icon:["fas","bolt"]}})],1)])})),0),e._v(" "),r("div",{staticClass:"mt-6 md:mt-0 md:ml-4 md:self-start md:flex-grow"},[r("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.connected.unpaidTraffic,expression:"this.$store.state.connected.unpaidTraffic"}],staticClass:"bg-gray-50 pt-6 lg:pt-8"},[e._m(0),e._v(" "),r("div",{staticClass:"mt-4 pb-6 bg-white lg:pb-8"},[r("div",{staticClass:"relative"},[r("div",{staticClass:"absolute inset-0 h-1/2 bg-gray-50"}),e._v(" "),r("div",{staticClass:"relative max-w-screen-xl mx-auto px-8 md:px-4 lg:px-8"},[r("div",{staticClass:"max-w-4xl mx-auto"},[r("dl",{staticClass:"rounded-lg bg-white shadow-lg lg:grid lg:grid-cols-3"},[r("div",{staticClass:"current-connection-grid border-b lg:border-0 lg:border-r"},[r("dt",[e._v("\n                      Down speed\n                    ")]),e._v(" "),r("dd",[e._v("\n                      "+e._s(e.bytesDisplay(this.$store.state.connected.downSpeed))+"/s\n                    ")])]),e._v(" "),r("div",{staticClass:"current-connection-grid border-t border-b lg:border-0 lg:border-l lg:border-r"},[r("dt",[e._v("\n                      Up speed\n                    ")]),e._v(" "),r("dd",[e._v("\n                      "+e._s(e.bytesDisplay(this.$store.state.connected.upSpeed))+"/s\n                    ")])]),e._v(" "),r("div",{staticClass:"current-connection-grid border-t lg:border-0 lg:border-l"},[r("dt",[e._v("\n                      UnPaid traffic\n                    ")]),e._v(" "),r("dd",[e._v("\n                      "+e._s(e.bytesDisplay(this.$store.state.connected.unpaidTraffic))+"\n                    ")])])])])])])])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"max-w-screen-xl mx-auto px-2 lg:px-4"},[t("div",{staticClass:"max-w-4xl mx-auto text-center"},[t("h2",{staticClass:"text-2xl leading-5 font-extrabold text-gray-900 lg:text-3xl lg:leading-5"},[this._v("\n              Data board\n            ")]),this._v(" "),t("p",{staticClass:"mt-3 text-lg leading-7 text-gray-500 sm:mt-4"},[this._v("\n              For current connection\n            ")])])])}],!1,null,"65a1a7ce",null);t.default=component.exports;installComponents(component,{IdentIcon:r(212).default})}}]);