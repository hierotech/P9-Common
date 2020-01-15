!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("big.js"),require("decimal.js")):"function"==typeof define&&define.amd?define(["big.js","decimal.js"],n):"object"==typeof exports?exports.P9Common=n(require("big.js"),require("decimal.js")):e.P9Common=n(e["big.js"],e["decimal.js"])}(window,(function(e,n){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)t.d(r,u,function(n){return e[n]}.bind(null,u));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(n,t){n.exports=e},function(e,t){e.exports=n},function(e,n,t){var r=t(3),u=t(4),i=t(5);e.exports=function(e,n){return r(e)||u(e,n)||i()}},function(e,n){e.exports=function(e){if(Array.isArray(e))return e}},function(e,n){e.exports=function(e,n){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],r=!0,u=!1,i=undefined;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(a){u=!0,i=a}finally{try{r||null==c["return"]||c["return"]()}finally{if(u)throw i}}return t}}},function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"CANDLESTICK_INTERVALS",(function(){return d})),t.d(r,"PORTFOLIO_PERFORMANCE_INTERVALS",(function(){return l})),t.d(r,"DEAL_TYPES",(function(){return p})),t.d(r,"EXPECTED_SELL_FEE_COEFF",(function(){return y}));var u={};t.r(u),t.d(u,"getSuccessFeeDiscount",(function(){return m})),t.d(u,"getBuyPriceAmountSum",(function(){return v})),t.d(u,"getBuyAmountSum",(function(){return w})),t.d(u,"getAverageBuyPrice",(function(){return g})),t.d(u,"getUsedBuyingPower",(function(){return T})),t.d(u,"getOpenedUsedBuyingPower",(function(){return S})),t.d(u,"getClosedUsedBuyingPower",(function(){return E})),t.d(u,"getGrossValue",(function(){return C})),t.d(u,"getGrossProfit",(function(){return _})),t.d(u,"getOneMinusStrategyCoefficient",(function(){return b})),t.d(u,"getSuccessFee",(function(){return O})),t.d(u,"getSellFee",(function(){return P})),t.d(u,"getNetProfit",(function(){return j}));var i={};t.r(i),t.d(i,"CURRENCY_TYPES",(function(){return q})),t.d(i,"cryptoAtomsToUnit",(function(){return I})),t.d(i,"formatCurrency",(function(){return R})),t.d(i,"isFiatCurrency",(function(){return B})),t.d(i,"isCryptoCurrency",(function(){return H})),t.d(i,"ratioPercent",(function(){return L}));var o={};t.r(o),t.d(o,"TIMESTAMP_PRECISION",(function(){return Y})),t.d(o,"createTimestamp",(function(){return V}));var c=t(0),a=t.n(c),f=t(1),s=t.n(f),d=["1m","5m","15m","1h","4h","1d"],l=["1h","1d","1w"],p=["IPO","PRE_IPO","STARTUP","ETF"],y=.005;function m(e){var n=e.success_fee_discount,t=Date.now()<new Date(e.created_at).getTime()+15552e6,r=e.referrer_id&&t?.5:null;return n&&r?Math.max(Number(n),r):n||r}function v(e){return e.filter((function(e){return"buy"===e.type})).reduce((function(e,n){var t=n.quantity,r=n.price;return e.plus(new a.a(r).times(t))}),new a.a(0))}function w(e){return e.filter((function(e){return"buy"===e.type})).reduce((function(e,n){var t=n.quantity;return e.plus(t)}),new a.a(0))}function g(e){var n=v(e),t=w(e);return t.eq(0)?new a.a(0):n.div(t)}function T(e){var n=v(e),t=w(e);if(t.eq(0))return new a.a(0);var r=n.div(t),u=e.filter((function(e){return"sell"===e.type})).reduce((function(e,n){var t=n.quantity;return e.plus(r.times(t))}),new a.a(0));return n.minus(u)}function S(e){return v(e)}function E(e,n){var t=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null,r=t&&new Date(t),u=r?e.filter((function(e){return new Date(e.timestamp)<r})):e,i=v(u),o=w(u);if(o.eq(0))return new a.a(0);var c=i.div(o);return c.times(n)}function C(e,n){var t=new a.a(e.price_last).times(e.quantity);if("ETF"===e.deal_type)return t;var r=n.filter((function(e){return"sell"===e.type})).reduce((function(e,n){var t=n.quantity,r=n.price;return e.plus(new a.a(r).times(t))}),new a.a(0));return t.plus(r)}function _(e,n){var t=C(e,n);return"ETF"===e.deal_type?t.minus(T(n)):t.minus(v(n))}function b(e){var n=T(e);if(n.eq(0))return new a.a(0);if(n.lte(1e4))return new a.a(.2);if(n.gte(12e5))return new a.a(.04);var t=new s.a(n.toString()).pow(.876);return new a.a(50.75).minus(s.a.log(t,1.3)).div(100)}function O(e,n,t){if("closed"===e.deal_status)return n.filter((function(e){return"success_fee"===e.type})).reduce((function(e,n){var t=n.amount;return e.plus(t)}),new a.a(0));var r=g(n),u=new a.a(e.price_last).minus(r).times(e.quantity),i=n.filter((function(e){return"sell"===e.type})).reduce((function(e,n){var t=n.price,u=n.quantity;return e.plus(new a.a(u).times(new a.a(t).minus(r)))}),new a.a(0)),o=t&&m(t),c=u.plus(i).times(b(n));return o?c.times(new a.a(1).minus(o)):c}function P(e,n){return"ETF"===e.deal_type||"closed"===e.deal_status?n.filter((function(e){return"sell_fee"===e.type})).reduce((function(e,n){var t=n.amount;return e.plus(t)}),new a.a(0)):C(e,n).times(y)}function j(e,n,t){var r=_(e,n);if("ETF"===e.deal_type)return r;var u=O(e,n,t),i=P(e,n);return r.minus(u.plus(i))}var U=t(2),D=t.n(U),x=new Set(["USD"]),A={USD:2,BTC:8,ETH:8},h={USD:"$",BTC:"₿",ETH:"Ξ"},M={BTC:new a.a("100000000"),ETH:new a.a("1000000000000000000")},q=["USD","BTC","ETH"];function F(e,n){return h[n]+" "+e}function N(e){var n=e.split("."),t=D()(n,2),r=t[0],u=t[1];return"".concat(r.replace(/\B(?=(\d{3})+(?!\d))/g,","),".").concat(u)}function I(e,n){return new a.a(e).div(M[n])}function R(e,n){var t=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},r=t.withSign,u=void 0!==r&&r,i=t.withSeparators,o=void 0===i?u:i,c=A[n],f=new a.a(e),s=f.toFixed(c);return o&&(s=N(s)),u&&(s=F(s,n)),s}function B(e){return x.has(e.toUpperCase())}function H(e){return!B(e)}function L(e,n){var t=new a.a(e),r=new a.a(n);return t.div(r).times(100)}var Y={MILLISECOND:0,SECOND:1,MINUTE:2,HOUR:3,DAY:4,MONTH:5};function V(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:Y.HOUR,n=new Date;return e>=Y.SECOND&&n.setUTCMilliseconds(0),e>=Y.MINUTE&&n.setUTCSeconds(0),e>=Y.HOUR&&n.setUTCMinutes(0),e>=Y.DAY&&n.setUTCHours(0),e>=Y.MONTH&&n.setUTCDate(1),n}t.d(n,"Assets",(function(){return u})),t.d(n,"Constants",(function(){return r})),t.d(n,"Currency",(function(){return i})),t.d(n,"Helper",(function(){return o}))}])}));
//# sourceMappingURL=index.browser.js.map