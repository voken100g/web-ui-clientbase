(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{421:function(t,n,e){"use strict";e.r(n);e(45);var r=e(5),o=e(54),c=e.n(o).a.create({timeout:5e3});var m,d={name:"transactions",data:function(){return{mountains:[]}},mounted:(m=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchSomething();case 2:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)}),methods:{fetchSomething:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c({url:"https://api.nuxtjs.dev/mountains",method:"get"}).then((function(n){var data=n.data;t.mountains=data}));case 2:return n.next=4,c({url:"/404",method:"get"}).then((function(t){var data=t.data;console.log("data",data)})).catch((function(t){console.error(t)}));case 4:case"end":return n.stop()}}),n)})))()}}},h=e(13),component=Object(h.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container mx-auto px-4 sm:px-6 lg:px-8 py-6"},[e("h1",{staticClass:"text-2xl text-gray-500"},[t._v("Get mountains via axios:")]),t._v(" "),e("div",{staticClass:"mt-4"},t._l(t.mountains,(function(n){return e("div",[t._v("\n      "+t._s(n.title)+"\n    ")])})),0)])}),[],!1,null,"18bdd1dc",null);n.default=component.exports}}]);