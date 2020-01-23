!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("big.js"),require("decimal.js")):"function"==typeof define&&define.amd?define(["big.js","decimal.js"],e):"object"==typeof exports?exports.P9Common=e(require("big.js"),require("decimal.js")):n.P9Common=e(n["big.js"],n["decimal.js"])}(window,(function(n,e){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return n[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var u in n)t.d(r,u,function(e){return n[e]}.bind(null,u));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=10)}([function(e,t){e.exports=n},function(n,t){n.exports=e},function(n,e,t){var r=t(4),u=t(5),i=t(6);n.exports=function(n){return r(n)||u(n)||i()}},function(n,e,t){var r=t(7),u=t(8),i=t(9);n.exports=function(n,e){return r(n)||u(n,e)||i()}},function(n,e){n.exports=function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}},function(n,e){n.exports=function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}},function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(n,e){n.exports=function(n){if(Array.isArray(n))return n}},function(n,e){n.exports=function(n,e){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],r=!0,u=!1,i=undefined;try{for(var o,c=n[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!e||t.length!==e);r=!0);}catch(a){u=!0,i=a}finally{try{r||null==c["return"]||c["return"]()}finally{if(u)throw i}}return t}}},function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"CANDLESTICK_INTERVALS",(function(){return p})),t.d(r,"PORTFOLIO_PERFORMANCE_INTERVALS",(function(){return y})),t.d(r,"DEAL_TYPES",(function(){return m})),t.d(r,"EXPECTED_SELL_FEE_COEFF",(function(){return v}));var u={};t.r(u),t.d(u,"getSuccessFeeDiscount",(function(){return w})),t.d(u,"getBuyPriceAmountSum",(function(){return g})),t.d(u,"getBuyAmountSum",(function(){return T})),t.d(u,"getAverageBuyPrice",(function(){return S})),t.d(u,"getUsedBuyingPower",(function(){return b})),t.d(u,"getOpenedUsedBuyingPower",(function(){return E})),t.d(u,"getClosedUsedBuyingPower",(function(){return C})),t.d(u,"getGrossValue",(function(){return O})),t.d(u,"getGrossProfit",(function(){return P})),t.d(u,"getOneMinusStrategyCoefficient",(function(){return _})),t.d(u,"getRealizedSuccessFee",(function(){return j})),t.d(u,"getSuccessFee",(function(){return h})),t.d(u,"getRealizedSellFee",(function(){return A})),t.d(u,"getSellFee",(function(){return x})),t.d(u,"getNetProfit",(function(){return D})),t.d(u,"getRealizedNetProfit",(function(){return U}));var i={};t.r(i),t.d(i,"CURRENCY_TYPES",(function(){return B})),t.d(i,"cryptoAtomsToUnit",(function(){return Y})),t.d(i,"formatCurrency",(function(){return z})),t.d(i,"isFiatCurrency",(function(){return V})),t.d(i,"isCryptoCurrency",(function(){return k})),t.d(i,"ratioPercent",(function(){return G}));var o={};t.r(o),t.d(o,"TIMESTAMP_PRECISION",(function(){return K})),t.d(o,"createTimestamp",(function(){return Q})),t.d(o,"delay",(function(){return X})),t.d(o,"hasOwnProperty",(function(){return $})),t.d(o,"stringifyQuery",(function(){return J})),t.d(o,"toChunks",(function(){return W}));var c=t(2),a=t.n(c),f=t(0),s=t.n(f),d=t(1),l=t.n(d),p=["1m","5m","15m","1h","4h","1d"],y=["1h","1d","1w"],m=["IPO","PRE_IPO","STARTUP","ETF"],v=.005;function w(n){var e=n.success_fee_discount,t=Date.now()<new Date(n.created_at).getTime()+15552e6,r=n.referrer_id&&t?.5:null;return e&&r?Math.max(Number(e),r):e||r}function g(n){return n.filter((function(n){return"buy"===n.type})).reduce((function(n,e){var t=e.quantity,r=e.price;return n.plus(new s.a(r).times(t))}),new s.a(0))}function T(n){return n.filter((function(n){return"buy"===n.type})).reduce((function(n,e){var t=e.quantity;return n.plus(t)}),new s.a(0))}function S(n){var e=g(n),t=T(n);return t.eq(0)?new s.a(0):e.div(t)}function b(n){var e=g(n),t=T(n);if(t.eq(0))return new s.a(0);var r=e.div(t),u=n.filter((function(n){return"sell"===n.type})).reduce((function(n,e){var t=e.quantity;return n.plus(r.times(t))}),new s.a(0));return e.minus(u)}function E(n){return g(n)}function C(n,e){var t=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null,r=t&&new Date(t),u=r?n.filter((function(n){return new Date(n.timestamp)<r})):n,i=g(u),o=T(u);if(o.eq(0))return new s.a(0);var c=i.div(o);return c.times(e)}function O(n,e){var t=new s.a(n.price_last).times(n.quantity);if("ETF"===n.deal_type)return t;var r=e.filter((function(n){return"sell"===n.type})).reduce((function(n,e){var t=e.quantity,r=e.price;return n.plus(new s.a(r).times(t))}),new s.a(0));return t.plus(r)}function P(n,e){var t=O(n,e);return"ETF"===n.deal_type?t.minus(b(e)):t.minus(g(e))}function _(n){var e=b(n);if(e.eq(0))return new s.a(0);if(e.lte(1e4))return new s.a(.2);if(e.gte(12e5))return new s.a(.04);var t=new l.a(e.toString()).pow(.876);return new s.a(50.75).minus(l.a.log(t,1.3)).div(100)}function j(n){return n.filter((function(n){return"success_fee"===n.type})).reduce((function(n,e){var t=e.amount;return n.plus(t)}),new s.a(0))}function h(n,e,t){if("closed"===n.deal_status)return j(e);var r=S(e),u=new s.a(n.price_last).minus(r).times(n.quantity),i=e.filter((function(n){return"sell"===n.type})).reduce((function(n,e){var t=e.price,u=e.quantity;return n.plus(new s.a(u).times(new s.a(t).minus(r)))}),new s.a(0)),o=t&&w(t),c=u.plus(i).times(_(e));return o?c.times(new s.a(1).minus(o)):c}function A(n){return n.filter((function(n){return"sell_fee"===n.type})).reduce((function(n,e){var t=e.amount;return n.plus(t)}),new s.a(0))}function x(n,e){return"ETF"===n.deal_type||"closed"===n.deal_status?A(e):O(n,e).times(v)}function D(n,e,t){var r=P(n,e);if("ETF"===n.deal_type)return r;var u=h(n,e,t),i=x(n,e);return r.minus(u.plus(i))}function U(n,e){var t=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null,r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null,u=e.reduce((function(n,e){var t=e.quantity,r=e.price;return n.plus(new s.a(r).times(t))}),new s.a(0)),i=e.reduce((function(n,e){var t=e.quantity;return n.plus(t)}),new s.a(0)),o=new Date(Math.max.apply(Math,a()(e.map((function(n){return n.timestamp}))))),c=u.minus(C(n,i,o)),f=t&&new Date(t),d=r&&new Date(r),l=f&&d?n.filter((function(n){var e=new Date(n.timestamp);return e>=f&&e<d})):n,p=j(l),y=A(l);return c.minus(p.plus(y))}var M=t(3),R=t.n(M),q=new Set(["USD"]),F={USD:2,BTC:8,ETH:8},I={USD:"$",BTC:"₿",ETH:"Ξ"},N={BTC:new s.a("100000000"),ETH:new s.a("1000000000000000000")},B=["USD","BTC","ETH"];function H(n,e){return I[e]+" "+n}function L(n){var e=n.split("."),t=R()(e,2),r=t[0],u=t[1];return"".concat(r.replace(/\B(?=(\d{3})+(?!\d))/g,","),".").concat(u)}function Y(n,e){return new s.a(n).div(N[e])}function z(n,e){var t=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},r=t.withSign,u=void 0!==r&&r,i=t.withSeparators,o=void 0===i?u:i,c=F[e],a=new s.a(n),f=a.toFixed(c);return o&&(f=L(f)),u&&(f=H(f,e)),f}function V(n){return q.has(n.toUpperCase())}function k(n){return!V(n)}function G(n,e){var t=new s.a(n),r=new s.a(e);return t.div(r).times(100)}var K={MILLISECOND:0,SECOND:1,MINUTE:2,HOUR:3,DAY:4,MONTH:5};function Q(){var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:K.HOUR,e=new Date;return n>=K.SECOND&&e.setUTCMilliseconds(0),n>=K.MINUTE&&e.setUTCSeconds(0),n>=K.HOUR&&e.setUTCMinutes(0),n>=K.DAY&&e.setUTCHours(0),n>=K.MONTH&&e.setUTCDate(1),e}function X(n){return new Promise((function(e){return setTimeout(e,n)}))}function $(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function J(n){return Object.keys(n).map((function(e){var t=n[e];return Array.isArray(t)?t.map((function(n){return"".concat(e,"=").concat(encodeURIComponent(n))})).join("&"):"".concat(e,"=").concat(encodeURIComponent(t))})).join("&")}function W(n,e){return[].concat.apply([],n.map((function(t,r){return r%e?[]:[n.slice(r,r+e)]})))}t.d(e,"Assets",(function(){return u})),t.d(e,"Constants",(function(){return r})),t.d(e,"Currency",(function(){return i})),t.d(e,"Helper",(function(){return o}))}])}));
//# sourceMappingURL=index.browser.js.map