(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2],{234:function(e,t,r){"use strict";r.r(t);r(45),r(28),r(44),r(15),r(76),r(38),r(77);var n=r(29),o=r(60);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={name:"Header",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)("profile",["money"]))},f=l,O=r(43),component=Object(O.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"\n    flex\n    justify-between\n    items-center\n    w-screen\n    px-3\n    bg-lightgrey\n    border-1 border-solid border-grey\n    rounded-sm\n  "},[r("div",{staticClass:"flex"},[r("nuxt-link",{staticClass:"text-decoration-none",attrs:{to:"/"}},[e._v("Profile")]),e._v(" "),r("nuxt-link",{staticClass:"ml-sm text-decoration-none",attrs:{to:"/shop"}},[e._v("Products")]),e._v(" "),r("nuxt-link",{staticClass:"ml-sm text-decoration-none",attrs:{to:"/purchases"}},[e._v("Purchases")])],1),e._v(" "),r("p",{staticClass:"font-bold"},[e._v("Money: $"+e._s(e.money))])])}),[],!1,null,null,null);t.default=component.exports},239:function(e,t,r){"use strict";r.r(t);r(45),r(28),r(44),r(15),r(76),r(38),r(77);var n=r(29),o=r(60);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={name:"profile",components:{Header:r(234).default},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)("profile",["fullName"]))},f=l,O=r(43),component=Object(O.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("Header"),e._v(" "),r("p",[e._v("Welcome "+e._s(e.fullName))])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:r(234).default})}}]);