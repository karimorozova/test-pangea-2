(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{235:function(t,e,r){"use strict";r.r(e);var c={name:"ProductCard",props:["product","buyOrSellProduct","buttonName"]},n=r(43),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"border-1 border-solid border-success rounded-sm"},[r("div",{staticClass:"w-screen flex justify-between items-center bg-lightsuccess px-1"},[r("p",{staticClass:"text-green"},[t._v(t._s(t.product.name))]),t._v(" "),"Buy"==t.buttonName?r("div",{staticClass:"flex items-center"},[r("div",{on:{click:function(e){return t.$emit("openProductForm",t.product)}}},[r("span",{staticClass:"iconify cursor-pointer",attrs:{"data-icon":"ci:edit"}})]),t._v(" "),r("div",{on:{click:function(e){return t.$emit("deleteProduct",t.product.id)}}},[r("span",{staticClass:"iconify ml-xs cursor-pointer",attrs:{"data-icon":"bxs:trash-alt"}})])]):t._e()]),t._v(" "),r("div",{staticClass:"px-1 py-1"},[r("div",{staticClass:"w-screen flex justify-between items-center"},[r("p",[t._v("Price: "+t._s(t.product.price))]),t._v(" "),r("div",{staticClass:"\n          p-xs\n          text-white\n          bg-success\n          border-xs border-solid border-success\n          rounded-sm\n          cursor-pointer\n        ",on:{click:function(e){return t.buyOrSellProduct(t.product)}}},[t._v("\n        "+t._s(t.buttonName)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);