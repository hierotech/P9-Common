!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("big.js"),require("react"),require("decimal.js"),require("react-dom")):"function"==typeof define&&define.amd?define(["big.js","react","decimal.js","react-dom"],e):"object"==typeof exports?exports.P9Common=e(require("big.js"),require("react"),require("decimal.js"),require("react-dom")):n.P9Common=e(n["big.js"],n.react,n["decimal.js"],n["react-dom"])}(window,(function(n,e,t,r){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return n[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var u in n)t.d(r,u,function(e){return n[e]}.bind(null,u));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=14)}([function(e,t){e.exports=n},function(n,t){n.exports=e},function(n,e,t){var r=t(8),u=t(9),i=t(6),o=t(10);n.exports=function(n){return r(n)||u(n)||i(n)||o()}},function(n,e,t){var r=t(11),u=t(12),i=t(6),o=t(13);n.exports=function(n,e){return r(n)||u(n,e)||i(n,e)||o()}},function(n,e){n.exports=t},function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}},function(n,e,t){var r=t(5);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}},function(n,e){n.exports=r},function(n,e,t){var r=t(5);n.exports=function(n){if(Array.isArray(n))return r(n)}},function(n,e){n.exports=function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}},function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(n,e){n.exports=function(n){if(Array.isArray(n))return n}},function(n,e){n.exports=function(n,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,u=!1,i=undefined;try{for(var o,c=n[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!e||t.length!==e);r=!0);}catch(a){u=!0,i=a}finally{try{r||null==c["return"]||c["return"]()}finally{if(u)throw i}}return t}}},function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(n,e,t){"use strict";t.r(e),t.d(e,"Assets",(function(){return u})),t.d(e,"Constants",(function(){return r})),t.d(e,"Currency",(function(){return i})),t.d(e,"Frontend",(function(){return o})),t.d(e,"Funds",(function(){return c})),t.d(e,"Helper",(function(){return a})),t.d(e,"Hooks",(function(){return f}));var r={};t.r(r),t.d(r,"CANDLESTICK_INTERVALS",(function(){return g})),t.d(r,"DATA_PROVIDERS",(function(){return y})),t.d(r,"DEAL_TYPES",(function(){return _})),t.d(r,"DEMAND_TYPES",(function(){return w})),t.d(r,"TRANSACTION_TYPES",(function(){return E})),t.d(r,"IDENTITY_CARD_TYPES",(function(){return S})),t.d(r,"UPLOAD_TYPES",(function(){return h})),t.d(r,"FILE_TYPES",(function(){return T})),t.d(r,"USER_LOCK_REASONS",(function(){return b})),t.d(r,"USER_ID_SELF",(function(){return A})),t.d(r,"IMAGE_MIME_TYPES",(function(){return C})),t.d(r,"EXPECTED_SELL_FEE_COEFF",(function(){return O})),t.d(r,"SUCCESS_FEE_DISCOUNT_PROMO",(function(){return D})),t.d(r,"SUCCESS_FEE_DISCOUNT_PROMO_PERIOD",(function(){return U})),t.d(r,"WITHDRAW_FEE_USD_BASE",(function(){return x})),t.d(r,"WITHDRAW_FEE_USD_COEFF",(function(){return P})),t.d(r,"WITHDRAW_FEE_USD_MAX",(function(){return R})),t.d(r,"WITHDRAW_FEE_USD_MIN",(function(){return I})),t.d(r,"RX_BTC_ADDRESS",(function(){return j})),t.d(r,"RX_DATE",(function(){return M})),t.d(r,"RX_DATE_ANY",(function(){return N})),t.d(r,"RX_EMAIL",(function(){return F})),t.d(r,"RX_NUMERIC",(function(){return q})),t.d(r,"RX_NUMERIC_NON_NEGATIVE",(function(){return H})),t.d(r,"RX_UUID",(function(){return W}));var u={};t.r(u),t.d(u,"getSuccessFeeDiscount",(function(){return L})),t.d(u,"getBuyPriceAmountSum",(function(){return z})),t.d(u,"getBuyAmountSum",(function(){return B})),t.d(u,"getAverageBuyPrice",(function(){return Y})),t.d(u,"getUsedBuyingPower",(function(){return k})),t.d(u,"getOpenedUsedBuyingPower",(function(){return X})),t.d(u,"getClosedUsedBuyingPower",(function(){return $})),t.d(u,"getGrossValue",(function(){return V})),t.d(u,"getGrossProfit",(function(){return G})),t.d(u,"getOneMinusStrategyCoefficient",(function(){return K})),t.d(u,"getRealizedSuccessFee",(function(){return Z})),t.d(u,"getSuccessFee",(function(){return Q})),t.d(u,"getRealizedSellFee",(function(){return J})),t.d(u,"getSellFee",(function(){return nn})),t.d(u,"getNetProfit",(function(){return en})),t.d(u,"getRealizedNetProfit",(function(){return tn}));var i={};t.r(i),t.d(i,"CURRENCY_TYPES",(function(){return dn})),t.d(i,"cryptoAtomsToUnit",(function(){return mn})),t.d(i,"unitToCryptoAtoms",(function(){return pn})),t.d(i,"formatCurrency",(function(){return vn})),t.d(i,"isFiatCurrency",(function(){return gn})),t.d(i,"isCryptoCurrency",(function(){return yn})),t.d(i,"ratioPercent",(function(){return _n}));var o={};t.r(o),t.d(o,"createAssetLogoUrl",(function(){return An})),t.d(o,"createAssetPlaceholderUrl",(function(){return Cn})),t.d(o,"createUserAvatarUrl",(function(){return On})),t.d(o,"createWindow",(function(){return Dn})),t.d(o,"copyTextToClipboard",(function(){return Un})),t.d(o,"findElement",(function(){return xn})),t.d(o,"formatDate",(function(){return Pn})),t.d(o,"formatTimerTime",(function(){return Rn})),t.d(o,"getTextWidth",(function(){return In})),t.d(o,"getWindowSize",(function(){return jn})),t.d(o,"init",(function(){return Mn})),t.d(o,"isExternalUrl",(function(){return Nn})),t.d(o,"measureElement",(function(){return Fn}));var c={};t.r(c),t.d(c,"getWithdrawFeeUsd",(function(){return qn}));var a={};t.r(a),t.d(a,"TIMESTAMP_PRECISION",(function(){return Hn})),t.d(a,"createAddressString",(function(){return kn})),t.d(a,"createFullName",(function(){return Xn})),t.d(a,"createTimestamp",(function(){return $n})),t.d(a,"delay",(function(){return Vn})),t.d(a,"extractCount",(function(){return Gn})),t.d(a,"hasOwnProperty",(function(){return Kn})),t.d(a,"excludeFields",(function(){return Zn})),t.d(a,"exposeFields",(function(){return Qn})),t.d(a,"isAgreementAgentSignedOrRequestedStatus",(function(){return Jn})),t.d(a,"isAgreementSignedStatus",(function(){return ne})),t.d(a,"isAgreementSignedOrRequestedStatus",(function(){return ee})),t.d(a,"isVerifiedStatus",(function(){return te})),t.d(a,"isVerifiedOrRequestedStatus",(function(){return re})),t.d(a,"stringifyQuery",(function(){return ue})),t.d(a,"toChunks",(function(){return ie}));var f={};t.r(f),t.d(f,"useCurrentDate",(function(){return fe})),t.d(f,"useElementSize",(function(){return de})),t.d(f,"useWindowSize",(function(){return se}));var d=t(2),s=t.n(d),l=t(0),m=t.n(l),p=t(4),v=t.n(p),g=["1m","5m","15m","1h","4h","1d"],y=["binance","bitmex","coinmarketcap","cryptocompare","deribit","iex"],_=["IPO","PRE_IPO","STARTUP","ETF"],w=["COLD","WARM","HOT"],E=["deposit","withdraw"],S=["passport"],h=["user_avatar","user_passport","user_residence_proof","user_passport_selfie","asset_logo","asset_placeholder"],T=[].concat(h,["user_agreement_signed","user_agreement_agent_signed"]),b=["password_change"],A="self",C=["image/png","image/jpeg"],O=.005,D=.5,U=15552e6,x=20,P=.0015,R=100,I=30,j=/^\w{14,74}$/,M=/^20(1[6-9]|[2-9][0-9])-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])T[0-5][0-9]:[0-5][0-9]:[0-5][0-9].[0-9]{3}Z$/,N=/^[1-2][0-9]{3}-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])T[0-5][0-9]:[0-5][0-9]:[0-5][0-9].[0-9]{3}Z$/,F=/^[^@]+@[^@]+$/,q=/^[0-9]+(\.[0-9]+)?$/,H=/^[0-9]+(\.[0-9]+)?$/,W=/^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/i;function L(n){var e=n.success_fee_discount,t=Date.now()<new Date(n.created_at).getTime()+U,r=n.referrer_id&&t?D:null;return e&&r?Math.max(Number(e),r):e||r}function z(n){return n.filter((function(n){return"buy"===n.type})).reduce((function(n,e){var t=e.quantity,r=e.price;return n.plus(new m.a(r).times(t))}),new m.a(0))}function B(n){return n.filter((function(n){return"buy"===n.type})).reduce((function(n,e){var t=e.quantity;return n.plus(t)}),new m.a(0))}function Y(n){var e=z(n),t=B(n);return t.eq(0)?new m.a(0):e.div(t)}function k(n){var e=z(n),t=B(n);if(t.eq(0))return new m.a(0);var r=e.div(t),u=n.filter((function(n){return"sell"===n.type})).reduce((function(n,e){var t=e.quantity;return n.plus(r.times(t))}),new m.a(0));return e.minus(u)}function X(n){return z(n)}function $(n,e){var t=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null,r=t&&new Date(t),u=r?n.filter((function(n){return new Date(n.timestamp)<r})):n,i=z(u),o=B(u);if(o.eq(0))return new m.a(0);var c=i.div(o);return c.times(e)}function V(n,e){var t=new m.a(n.price_last).times(n.quantity);if("ETF"===n.deal_type)return t;var r=e.filter((function(n){return"sell"===n.type})).reduce((function(n,e){var t=e.quantity,r=e.price;return n.plus(new m.a(r).times(t))}),new m.a(0));return t.plus(r)}function G(n,e){var t=V(n,e);return"ETF"===n.deal_type?t.minus(k(e)):t.minus(z(e))}function K(n){var e=k(n);if(e.eq(0))return new m.a(0);if(e.lte(1e4))return new m.a(.2);if(e.gte(12e5))return new m.a(.04);var t=new v.a(e.toString()).pow(.876);return new m.a(50.75).minus(v.a.log(t,1.3)).div(100)}function Z(n){return n.filter((function(n){return"success_fee"===n.type})).reduce((function(n,e){var t=e.amount;return n.plus(t)}),new m.a(0))}function Q(n,e,t){if("closed"===n.deal_status)return Z(e);var r=Y(e),u=new m.a(n.price_last).minus(r).times(n.quantity),i=e.filter((function(n){return"sell"===n.type})).reduce((function(n,e){var t=e.price,u=e.quantity;return n.plus(new m.a(u).times(new m.a(t).minus(r)))}),new m.a(0)),o=t&&L(t),c=u.plus(i),a=c.gt(0)?c.times(K(e)):new m.a(0);return o?a.times(new m.a(1).minus(o)):a}function J(n){return n.filter((function(n){return"sell_fee"===n.type})).reduce((function(n,e){var t=e.amount;return n.plus(t)}),new m.a(0))}function nn(n,e){return"ETF"===n.deal_type||"closed"===n.deal_status?J(e):V(n,e).times(O)}function en(n,e,t){var r=G(n,e);if("ETF"===n.deal_type)return r;var u=Q(n,e,t),i=nn(n,e);return r.minus(u.plus(i))}function tn(n,e){var t=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null,r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null,u=e.reduce((function(n,e){var t=e.quantity,r=e.price;return n.plus(new m.a(r).times(t))}),new m.a(0)),i=e.reduce((function(n,e){var t=e.quantity;return n.plus(t)}),new m.a(0)),o=new Date(Math.max.apply(Math,s()(e.map((function(n){return n.timestamp}))))),c=u.minus($(n,i,o)),a=t&&new Date(t),f=r&&new Date(r),d=a&&f?n.filter((function(n){var e=new Date(n.timestamp);return e>=a&&e<f})):n,l=Z(d),p=J(d);return c.minus(l.plus(p))}var rn=t(3),un=t.n(rn),on=new Set(["USD"]),cn={USD:2,BTC:8,ETH:8},an={USD:"$",BTC:"₿",ETH:"Ξ"},fn={BTC:new m.a("100000000"),ETH:new m.a("1000000000000000000")},dn=["USD","BTC","ETH"];function sn(n,e){return an[e]+" "+n}function ln(n){var e=n.split("."),t=un()(e,2),r=t[0],u=t[1];return"".concat(r.replace(/\B(?=(\d{3})+(?!\d))/g,","),".").concat(u)}function mn(n,e){return new m.a(n).div(fn[e])}function pn(n,e){return Number(new m.a(n).times(fn[e]).toFixed(0))}function vn(n,e){var t=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},r=t.withSign,u=void 0!==r&&r,i=t.withSeparators,o=void 0===i?u:i,c=cn[e],a=new m.a(n),f=a.toFixed(c);return o&&(f=ln(f)),u&&(f=sn(f,e)),f}function gn(n){return on.has(n.toUpperCase())}function yn(n){return!gn(n)}function _n(n,e){var t=new m.a(n),r=new m.a(e);return t.div(r).times(100)}var wn=t(7),En=null,Sn=null,hn=null,Tn=null;function bn(n,e,t,r){if(!En)throw new Error("bucketUrl is not initialized");return"".concat(En,"/").concat(n,"/").concat(e,"/").concat(t,"/").concat(r)}function An(n){return bn("assets",n.ticker,"logo",n.file_name_logo)}function Cn(n){if(!Sn)throw new Error("defaultAssetPlaceholder is not initialized");return n.file_name_placeholder?bn("assets",n.ticker,"placeholder",n.file_name_placeholder):Sn}function On(n){if(!hn)throw new Error("defaultAvatar is not initialized");var e=n.file_name_avatar;return e?bn("users",n.user_id,"avatar",e):hn}function Dn(n){var e=arguments.length>1&&arguments[1]!==undefined&&arguments[1],t=window.open(n);e&&t&&t.focus()}function Un(n){var e=document.createElement("textarea");e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.opacity="0",e.innerText=n;var t=document.getElementsByTagName("body")[0];t.appendChild(e),e.select(),document.execCommand("copy"),t.removeChild(e)}function xn(n,e){for(var t=n;t;){if(t===e)return!0;t=t.parentNode}return!1}function Pn(n){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},t=e.mode,r=void 0===t?"datetime":t,u=new Date(n),i=u.toLocaleDateString("en",{day:"2-digit",month:"long",year:"numeric"});if("date"===r)return i;var o=u.toLocaleTimeString("en",{hour:"numeric",minute:"2-digit"});return"".concat(i,", ").concat(o)}function Rn(n){var e=Math.floor(n/86400);n%=86400;var t=Math.floor(n/3600);return n%=3600,[e,t,Math.floor(n/60),n%=60].map((function(n){return n.toString().padStart(2,"0")})).join(":")}function In(n,e){Tn||(Tn=document.createElement("canvas"));var t=Tn.getContext("2d");return t.font=e,t.measureText(n).width}function jn(){return{height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}}function Mn(n){En=n.bucketUrl,Sn=n.defaultAssetPlaceholder,hn=n.defaultAvatar}function Nn(n){return/^(https?:)?\/\//.test(n)}function Fn(n){var e=wn.findDOMNode(n);return{width:e.offsetWidth,height:e.offsetHeight}}function qn(n){return function(n){var e=new m.a(n).times(P);return e.lt(I)?new m.a(I):e.gt(R)?new m.a(R):e}(n).plus(x)}var Hn={MILLISECOND:0,SECOND:1,MINUTE:2,HOUR:3,DAY:4,MONTH:5},Wn=["agreement_agent_requested","agreement_agent_signed"],Ln=["agreement_signed"].concat(Wn),zn=["agreement_requested"].concat(s()(Ln)),Bn=["verified"].concat(s()(zn)),Yn=["verification_requested"].concat(s()(Bn));function kn(n){return[n.line_1,n.line_2,n.apartment,n.town,n.area,n.zip,n.country].filter((function(n){return Boolean(n)})).join(", ")}function Xn(n,e){var t=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";return n||e?"".concat(n||"").concat(n&&e?" ":"").concat(e||""):t}function $n(){var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:Hn.HOUR,e=new Date;return n>=Hn.SECOND&&e.setUTCMilliseconds(0),n>=Hn.MINUTE&&e.setUTCSeconds(0),n>=Hn.HOUR&&e.setUTCMinutes(0),n>=Hn.DAY&&e.setUTCHours(0),n>=Hn.MONTH&&e.setUTCDate(1),e}function Vn(n,e){return new Promise((function(t,r){var u=setTimeout(t,n);"function"==typeof e&&e((function(){clearTimeout(u),r()}))}))}function Gn(n){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"count_total";if(n.length<1)return{items:[],countTotal:0};var t=Number(n[0][e]);return n.forEach((function(n){delete n.count_total})),{items:n,countTotal:t}}function Kn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Zn(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return Object.keys(n).filter((function(n){return!t.includes(n)})).reduce((function(e,t){return e[t]=n[t],e}),{})}function Qn(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return t.filter((function(e){return Kn(n,e)})).reduce((function(e,t){return e[t]=n[t],e}),{})}function Jn(n){return Wn.includes(n)}function ne(n){return Ln.includes(n)}function ee(n){return zn.includes(n)}function te(n){return Bn.includes(n)}function re(n){return Yn.includes(n)}function ue(n){return Object.keys(n).map((function(e){var t=n[e];return Array.isArray(t)?t.map((function(n){return"".concat(e,"=").concat(encodeURIComponent(n))})).join("&"):"".concat(e,"=").concat(encodeURIComponent(t))})).join("&")}function ie(n,e){return[].concat.apply([],n.map((function(t,r){return r%e?[]:[n.slice(r,r+e)]})))}var oe=t(1),ce=new Map,ae=new Set;window.addEventListener("resize",(function(){var n=jn();ae.forEach((function(e){e(n)})),ce.forEach((function(n,e){e.current&&n(Fn(e.current))}))}));var fe=function(){var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1e3,e=Object(oe.useState)(new Date),t=un()(e,2),r=t[0],u=t[1];return Object(oe.useEffect)((function(){var e=setInterval((function(){u(new Date)}),n);return function(){return clearInterval(e)}}),[n]),r},de=function(n){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{width:0,height:0},t=Object(oe.useState)(e),r=un()(t,2),u=r[0],i=r[1];return Object(oe.useEffect)((function(){return ce.set(n,i),n.current&&i(Fn(n.current)),function(){ce["delete"](n)}}),[n]),[u]},se=function(){var n=Object(oe.useState)(jn()),e=un()(n,2),t=e[0],r=e[1];return Object(oe.useEffect)((function(){return ae.add(r),function(){ae["delete"](r)}}),[]),[t]}}])}));
//# sourceMappingURL=index.browser.js.map