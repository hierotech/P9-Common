!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("big.js"),require("decimal.js"),require("amqplib"),require("lodash.merge"),require("axios"),require("http-terminator")):"function"==typeof define&&define.amd?define(["big.js","decimal.js","amqplib","lodash.merge","axios","http-terminator"],t):"object"==typeof exports?exports.P9Common=t(require("big.js"),require("decimal.js"),require("amqplib"),require("lodash.merge"),require("axios"),require("http-terminator")):e.P9Common=t(e["big.js"],e["decimal.js"],e.amqplib,e["lodash.merge"],e.axios,e["http-terminator"])}(global,(function(e,t,n,r,i,u){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=22)}([function(e,t,n){e.exports=n(14)},function(t,n){t.exports=e},function(e,t){function n(e,t,n,r,i,u,a){try{var o=e[u](a),c=o.value}catch(s){return void n(s)}o.done?t(c):Promise.resolve(c).then(r,i)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,u){var a=e.apply(t,r);function o(e){n(a,i,u,o,c,"next",e)}function c(e){n(a,i,u,o,c,"throw",e)}o(undefined)}))}}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){var r=n(18),i=n(19),u=n(10),a=n(20);e.exports=function(e,t){return r(e)||i(e,t)||u(e,t)||a()}},function(e,t,n){var r=n(15),i=n(16),u=n(10),a=n(17);e.exports=function(e){return r(e)||i(e)||u(e)||a()}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,n){e.exports=t},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t,n){var r=n(9);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=i},function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",o=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,u=Object.create(i.prototype),a=new O(r||[]);return u._invoke=function(e,t,n){var r=l;return function(i,u){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw u;return k()}for(n.method=i,n.arg=u;;){var a=n.delegate;if(a){var o=E(a,n);if(o){if(o===m)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=f(e,t,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,a),u}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=s;var l="suspendedStart",p="suspendedYield",d="executing",h="completed",m={};function y(){}function v(){}function _(){}var g={};g[u]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(A([])));b&&b!==n&&r.call(b,u)&&(g=b);var x=_.prototype=y.prototype=Object.create(g);function S(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(i,u,a,o){var c=f(e[i],e,u);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,o)}),(function(e){n("throw",e,a,o)})):t.resolve(l).then((function(e){s.value=e,a(s)}),(function(e){return n("throw",e,a,o)}))}o(c.arg)}var i;this._invoke=function(e,r){function u(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(u,u):u()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=f(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var u=i.arg;return u?u.done?(n[e.resultName]=u.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function A(e){if(e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:k}}function k(){return{value:t,done:!0}}return v.prototype=x.constructor=_,_.constructor=v,v.displayName=c(_,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,c(e,o,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},S(C.prototype),C.prototype[a]=function(){return this},e.AsyncIterator=C,e.async=function(t,n,r,i,u){void 0===u&&(u=Promise);var a=new C(s(t,n,r,i),u);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(x),c(x,o,"Generator"),x[u]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=A,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return o.type="throw",o.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var u=this.tryEntries.length-1;u>=0;--u){var a=this.tryEntries[u],o=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var u=i;break}}u&&("break"===e||"continue"===e)&&u.tryLoc<=t&&t<=u.finallyLoc&&(u=null);var a=u?u.completion:{};return a.type=e,a.arg=t,u?(this.method="next",this.next=u.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),m}},"catch":function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;I(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},function(e,t,n){var r=n(9);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,u=undefined;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,u=c}finally{try{r||null==o["return"]||o["return"]()}finally{if(i)throw u}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){e.exports=u},function(e,t,n){"use strict";n.r(t),n.d(t,"AmqpClient",(function(){return E})),n.d(t,"Assets",(function(){return i})),n.d(t,"BtcClient",(function(){return a})),n.d(t,"Constants",(function(){return r})),n.d(t,"Currency",(function(){return o})),n.d(t,"Funds",(function(){return c})),n.d(t,"Helper",(function(){return u})),n.d(t,"Storage",(function(){return f})),n.d(t,"TerminationHandler",(function(){return gt}));var r={};n.r(r),n.d(r,"CANDLESTICK_INTERVALS",(function(){return D})),n.d(r,"ASSET_COMPONENT_MODES",(function(){return q})),n.d(r,"DATA_PROVIDERS",(function(){return j})),n.d(r,"DEAL_TYPES",(function(){return R})),n.d(r,"DEMAND_TYPES",(function(){return N})),n.d(r,"TRANSACTION_TYPES",(function(){return U})),n.d(r,"IDENTITY_CARD_TYPES",(function(){return F})),n.d(r,"UPLOAD_TYPES",(function(){return L})),n.d(r,"FILE_TYPES",(function(){return M})),n.d(r,"USER_LOCK_REASONS",(function(){return H})),n.d(r,"USER_ID_SELF",(function(){return G})),n.d(r,"IMAGE_MIME_TYPES",(function(){return Y})),n.d(r,"EXPECTED_SELL_FEE_COEFF",(function(){return B})),n.d(r,"SUCCESS_FEE_DISCOUNT_PROMO",(function(){return W})),n.d(r,"SUCCESS_FEE_DISCOUNT_PROMO_PERIOD",(function(){return z})),n.d(r,"DEPOSIT_FEE_USD",(function(){return X})),n.d(r,"WITHDRAW_FEE_USD_BASE",(function(){return $})),n.d(r,"WITHDRAW_FEE_USD_COEFF",(function(){return Q})),n.d(r,"WITHDRAW_FEE_USD_MAX",(function(){return V})),n.d(r,"WITHDRAW_FEE_USD_MIN",(function(){return K})),n.d(r,"RX_BTC_ADDRESS",(function(){return J})),n.d(r,"RX_DATE",(function(){return Z})),n.d(r,"RX_DATE_ANY",(function(){return ee})),n.d(r,"RX_EMAIL",(function(){return te})),n.d(r,"RX_NUMERIC",(function(){return ne})),n.d(r,"RX_NUMERIC_NON_NEGATIVE",(function(){return re})),n.d(r,"RX_NUMERIC_POSITIVE",(function(){return ie})),n.d(r,"RX_UUID",(function(){return ue}));var i={};n.r(i),n.d(i,"getSuccessFeeDiscount",(function(){return ae})),n.d(i,"getBuyPriceAmountSum",(function(){return oe})),n.d(i,"getBuyAmountSum",(function(){return ce})),n.d(i,"getAverageBuyPrice",(function(){return se})),n.d(i,"getUsedBuyingPower",(function(){return fe})),n.d(i,"getOpenedUsedBuyingPower",(function(){return le})),n.d(i,"getClosedUsedBuyingPower",(function(){return pe})),n.d(i,"getGrossValue",(function(){return de})),n.d(i,"getGrossProfit",(function(){return he})),n.d(i,"getOneMinusStrategyCoefficient",(function(){return me})),n.d(i,"getRealizedSuccessFee",(function(){return ye})),n.d(i,"getSuccessFee",(function(){return ve})),n.d(i,"getRealizedSellFee",(function(){return _e})),n.d(i,"getSellFee",(function(){return ge})),n.d(i,"getNetProfit",(function(){return we})),n.d(i,"getRealizedNetProfit",(function(){return be}));var u={};n.r(u),n.d(u,"TIMESTAMP_PRECISION",(function(){return Ce})),n.d(u,"createAddressString",(function(){return ke})),n.d(u,"createFullName",(function(){return Pe})),n.d(u,"createTimestamp",(function(){return De})),n.d(u,"delay",(function(){return qe})),n.d(u,"extractCount",(function(){return je})),n.d(u,"hasOwnProperty",(function(){return Re})),n.d(u,"excludeFields",(function(){return Ne})),n.d(u,"exposeFields",(function(){return Ue})),n.d(u,"isAgreementAgentSignedOrRequestedStatus",(function(){return Fe})),n.d(u,"isAgreementSignedStatus",(function(){return Le})),n.d(u,"isAgreementSignedOrRequestedStatus",(function(){return Me})),n.d(u,"isVerifiedStatus",(function(){return He})),n.d(u,"isVerifiedOrRequestedStatus",(function(){return Ge})),n.d(u,"stringifyQuery",(function(){return Ye})),n.d(u,"toChunks",(function(){return Be}));var a={};n.r(a),n.d(a,"createClient",(function(){return We}));var o={};n.r(o),n.d(o,"DECIMAL_DIGIT_COUNT",(function(){return Qe})),n.d(o,"CURRENCY_SIGN",(function(){return Ve})),n.d(o,"CRYPTO_UNIT_ATOM_COUNT",(function(){return Ke})),n.d(o,"CURRENCY_TYPES",(function(){return Je})),n.d(o,"cryptoAtomsToUnit",(function(){return tt})),n.d(o,"unitToCryptoAtoms",(function(){return nt})),n.d(o,"formatCurrency",(function(){return rt})),n.d(o,"isFiatCurrency",(function(){return it})),n.d(o,"isCryptoCurrency",(function(){return ut})),n.d(o,"ratioPercent",(function(){return at}));var c={};n.r(c),n.d(c,"getWithdrawFeeUsd",(function(){return ot}));var s={};n.r(s),n.d(s,"createUserOperationAsset",(function(){return lt})),n.d(s,"createUserOperationWallet",(function(){return dt})),n.d(s,"init",(function(){return mt}));var f={};n.r(f),n.d(f,"UserOperations",(function(){return s})),n.d(f,"init",(function(){return yt}));var l=n(0),p=n.n(l),d=n(2),h=n.n(d),m=n(7),y=n.n(m),v=n(6),_=n.n(v),g=n(3),w=n.n(g),b=n(11),x=n.n(b),S=n(12),C=n.n(S),E=function(){function e(t){var n=this;y()(this,e),w()(this,"_handleMessage",(function(e){return function(){var t=h()(p.a.mark((function r(t){var i,u,a,o;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.ack(t);case 3:if(t&&t.content){r.next=6;break}return console.warn("[AmqpClient._handleMessage]","Invalid message from queue",t),r.abrupt("return");case 6:if(i=JSON.parse(t.content.toString()),u=i.type,a=i.data,o=n._handlers.get(u)){r.next=11;break}return console.warn("[AmqpClient._handleMessage]",'No handler for type: "'.concat(u,'", data:'),a),r.abrupt("return");case 11:return r.next=13,o(a,u);case 13:r.next=18;break;case 15:r.prev=15,r.t0=r["catch"](0),console.warn(r.t0);case 18:case"end":return r.stop()}}),r,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}()})),w()(this,"_handleClose",(function(){n._connection=null,n._isClosing||n._isHandlingClose||(n._isHandlingClose=!0,n._consumeChannel=null,n._publishChannel=null,console.error("[AmqpClient._handleClose]","Connection failed or lost. Reconnecting in ".concat(n._config.reconnectionDelay," msecs...")),setTimeout(h()(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n._init();case 3:n._isHandlingClose=!1,e.next=11;break;case 6:e.prev=6,e.t0=e["catch"](0),console.error("[AmqpClient._handleClose::setTimeout]",e.t0),n._isHandlingClose=!1,n._handleClose();case 11:case"end":return e.stop()}}),e,null,[[0,6]])}))),n._config.reconnectionDelay))})),this._config=C()({},e.DEFAULT_CONFIG,t),this._temporaryQueue=[],this._consumeChannel=null,this._publishChannel=null,this._isHandlingClose=!1,this._handlers=new Map,this._isClosing=!1,this._connection=null}var t,n,r,i,u,a,o,c;return _()(e,null,[{key:"DEFAULT_CONFIG",get:function(){return{exchange:{consume:{type:"fanout"},publish:{type:"fanout"}},reconnectionDelay:1e4,sendToConsumeChannel:!1}}}]),_()(e,[{key:"init",value:(c=h()(p.a.mark((function s(){var e,t,n,r=arguments;return p.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&r[0]!==undefined?r[0]:{},t=e.throwOnError,n=void 0!==t&&t,i.prev=1,i.next=4,this._init();case 4:i.next=12;break;case 6:if(i.prev=6,i.t0=i["catch"](1),!n){i.next=10;break}throw i.t0;case 10:console.error("[AmqpClient.init]",i.t0),this._handleClose();case 12:case"end":return i.stop()}}),s,this,[[1,6]])}))),function(){return c.apply(this,arguments)})},{key:"close",value:(o=h()(p.a.mark((function f(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._isClosing){e.next=2;break}return e.abrupt("return");case 2:if(this._connection){e.next=4;break}return e.abrupt("return");case 4:return this._isClosing=!0,e.prev=5,e.next=8,this._connection.close();case 8:return e.prev=8,this._isClosing=!1,e.finish(8);case 11:case"end":return e.stop()}}),f,this,[[5,,8,11]])}))),function(){return o.apply(this,arguments)})},{key:"installHandler",value:function(e,t){this._handlers.set(e,t)}},{key:"publish",value:(a=h()(p.a.mark((function l(e){var t,n,r,i=arguments;return p.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:if(t=i.length>1&&i[1]!==undefined&&i[1],this._config){u.next=3;break}throw new Error("[AmqpClient.publish] Client is not initialized");case 3:if(n=t?this._consumeChannel:this._publishChannel){u.next=7;break}return this._temporaryQueue.push({message:e,toConsumeChannel:t}),u.abrupt("return");case 7:return r=this._config.exchange[t?"consume":"publish"].name,u.next=10,n.publish(r,"",Buffer.from(JSON.stringify(e)));case 10:case"end":return u.stop()}}),l,this)}))),function(e){return a.apply(this,arguments)})},{key:"broadcast",value:(u=h()(p.a.mark((function d(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.publish({data:{type:"broadcast",data:{data:e}},type:"notification"},this._config.sendToConsumeChannel);case 2:case"end":return t.stop()}}),d,this)}))),function(e){return u.apply(this,arguments)})},{key:"send",value:(i=h()(p.a.mark((function m(e,t){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.publish({data:{type:"send",data:{receiverId:e,data:t}},type:"notification"},this._config.sendToConsumeChannel);case 2:case"end":return n.stop()}}),m,this)}))),function(e,t){return i.apply(this,arguments)})},{key:"_initConsume",value:(r=h()(p.a.mark((function v(e){var t,n,r,i,u,a;return p.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.createChannel();case 2:return t=o.sent,o.next=5,t.assertQueue(null,{autoDelete:!0});case 5:return n=o.sent,r=n.queue,i=this._config.exchange.consume,u=i.name,a=i.type,o.next=10,t.assertExchange(u,a);case 10:return o.next=12,t.bindQueue(r,u);case 12:return o.next=14,t.consume(r,this._handleMessage(t));case 14:return o.abrupt("return",t);case 15:case"end":return o.stop()}}),v,this)}))),function(e){return r.apply(this,arguments)})},{key:"_initPublish",value:(n=h()(p.a.mark((function g(e){var t,n,r,i;return p.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.createChannel();case 2:return t=u.sent,n=this._config.exchange.publish,r=n.name,i=n.type,u.next=6,t.assertExchange(r,i);case 6:return u.abrupt("return",t);case 7:case"end":return u.stop()}}),g,this)}))),function(e){return n.apply(this,arguments)})},{key:"_init",value:(t=h()(p.a.mark((function b(){var e,t,n,r;return p.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,x.a.connect(this._config.connection.url);case 2:return e=i.sent,i.next=5,this._initConsume(e);case 5:return this._consumeChannel=i.sent,i.next=8,this._initPublish(e);case 8:this._publishChannel=i.sent,this._connection=e,e.on("close",this._handleClose),e.on("error",(function(e){return console.error("[AmqpClient._init::connection.on('error')]",e)})),this._temporaryQueue.length>0&&console.log("[AmqpClient._init]","Flushing temporary queue...");case 13:if(!(this._temporaryQueue.length>0)){i.next=19;break}return t=this._temporaryQueue.shift(),n=t.message,r=t.toConsumeChannel,i.next=17,this.publish(n,r);case 17:i.next=13;break;case 19:console.log("[AmqpClient._init]","Connection established");case 20:case"end":return i.stop()}}),b,this)}))),function(){return t.apply(this,arguments)})}]),e}(),T=n(5),I=n.n(T),O=n(1),A=n.n(O),k=n(8),P=n.n(k),D=["1m","5m","15m","1h","4h","1d"],q=["addition","subtraction"],j=["binance","bitmex","coinmarketcap","cryptocompare","deribit","iex"],R=["IPO","PRE_IPO","STARTUP","ETF"],N=["COLD","WARM","HOT"],U=["deposit","withdraw"],F=["passport"],L=["user_avatar","user_passport","user_residence_proof","user_passport_selfie","asset_logo","asset_placeholder"],M=[].concat(L,["user_agreement_signed","user_agreement_agent_signed","user_invoice_pdf"]),H=["password_change"],G="self",Y=["image/png","image/jpeg"],B=.005,W=.5,z=15552e6,X=10,$=20,Q=.0015,V=100,K=30,J=/^\w{14,74}$/,Z=/^20(1[6-9]|[2-9][0-9])-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])T[0-5][0-9]:[0-5][0-9]:[0-5][0-9].[0-9]{3}Z$/,ee=/^[1-2][0-9]{3}-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])T[0-5][0-9]:[0-5][0-9]:[0-5][0-9].[0-9]{3}Z$/,te=/^[^@]+@[^@]+$/,ne=/^[0-9]+(\.[0-9]+)?$/,re=/^[0-9]+(\.[0-9]+)?$/,ie=/^([0-9]+\.0*[1-9][0-9]*|0*[1-9][0-9]*(\.[0-9]+)?)$/,ue=/^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/i;function ae(e){var t=e.success_fee_discount,n=Date.now()<new Date(e.created_at).getTime()+z,r=e.referrer_id&&n?W:null;return t&&r?Math.max(Number(t),r):t||r}function oe(e){return e.filter((function(e){return"buy"===e.type})).reduce((function(e,t){var n=t.quantity,r=t.price;return e.plus(new A.a(r).times(n))}),new A.a(0))}function ce(e){return e.filter((function(e){return"buy"===e.type})).reduce((function(e,t){var n=t.quantity;return e.plus(n)}),new A.a(0))}function se(e){var t=oe(e),n=ce(e);return n.eq(0)?new A.a(0):t.div(n)}function fe(e){var t=oe(e),n=ce(e);if(n.eq(0))return new A.a(0);var r=t.div(n),i=e.filter((function(e){return"sell"===e.type})).reduce((function(e,t){var n=t.quantity;return e.plus(r.times(n))}),new A.a(0));return t.minus(i)}function le(e){return oe(e)}function pe(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null,r=n&&new Date(n),i=r?e.filter((function(e){return new Date(e.timestamp)<r})):e,u=oe(i),a=ce(i);if(a.eq(0))return new A.a(0);var o=u.div(a);return o.times(t)}function de(e,t){var n=new A.a(e.price_last).times(e.quantity);if("ETF"===e.deal_type)return n;var r=t.filter((function(e){return"sell"===e.type})).reduce((function(e,t){var n=t.quantity,r=t.price;return e.plus(new A.a(r).times(n))}),new A.a(0));return n.plus(r)}function he(e,t){var n=de(e,t);return"ETF"===e.deal_type?n.minus(fe(t)):n.minus(oe(t))}function me(e){var t=fe(e);if(t.eq(0))return new A.a(0);if(t.lte(1e4))return new A.a(.2);if(t.gte(12e5))return new A.a(.04);var n=new P.a(t.toString()).pow(.876);return new A.a(50.75).minus(P.a.log(n,1.3)).div(100)}function ye(e){return e.filter((function(e){return"success_fee"===e.type})).reduce((function(e,t){var n=t.amount;return e.plus(n)}),new A.a(0))}function ve(e,t,n){if("closed"===e.deal_status)return ye(t);var r=se(t),i=new A.a(e.price_last).minus(r).times(e.quantity),u=t.filter((function(e){return"sell"===e.type})).reduce((function(e,t){var n=t.price,i=t.quantity;return e.plus(new A.a(i).times(new A.a(n).minus(r)))}),new A.a(0)),a=n&&ae(n),o=i.plus(u),c=o.gt(0)?o.times(me(t)):new A.a(0);return a?c.times(new A.a(1).minus(a)):c}function _e(e){return e.filter((function(e){return"sell_fee"===e.type})).reduce((function(e,t){var n=t.amount;return e.plus(n)}),new A.a(0))}function ge(e,t){return"ETF"===e.deal_type||"closed"===e.deal_status?_e(t):de(e,t).times(B)}function we(e,t,n){var r=he(e,t);if("ETF"===e.deal_type)return r;var i=ve(e,t,n),u=ge(e,t);return r.minus(i.plus(u))}function be(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null,r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null,i=t.reduce((function(e,t){var n=t.quantity,r=t.price;return e.plus(new A.a(r).times(n))}),new A.a(0)),u=t.reduce((function(e,t){var n=t.quantity;return e.plus(n)}),new A.a(0)),a=new Date(Math.max.apply(Math,I()(t.map((function(e){return e.timestamp}))))),o=i.minus(pe(e,u,a)),c=n&&new Date(n),s=r&&new Date(r),f=c&&s?e.filter((function(e){var t=new Date(e.timestamp);return t>=c&&t<s})):e,l=ye(f),p=_e(f);return o.minus(l.plus(p))}var xe=n(13),Se=n.n(xe),Ce={MILLISECOND:0,SECOND:1,MINUTE:2,HOUR:3,DAY:4,MONTH:5},Ee=["agreement_agent_requested","agreement_agent_signed"],Te=["agreement_signed"].concat(Ee),Ie=["agreement_requested"].concat(I()(Te)),Oe=["verified"].concat(I()(Ie)),Ae=["verification_requested"].concat(I()(Oe));function ke(e){return[e.line_1,e.line_2,e.apartment,e.town,e.area,e.zip,e.country].filter((function(e){return Boolean(e)})).join(", ")}function Pe(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";return e||t?"".concat(e||"").concat(e&&t?" ":"").concat(t||""):n}function De(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:Ce.HOUR,t=new Date;return e>=Ce.SECOND&&t.setUTCMilliseconds(0),e>=Ce.MINUTE&&t.setUTCSeconds(0),e>=Ce.HOUR&&t.setUTCMinutes(0),e>=Ce.DAY&&t.setUTCHours(0),e>=Ce.MONTH&&t.setUTCDate(1),t}function qe(e,t){return new Promise((function(n,r){var i=setTimeout(n,e);"function"==typeof t&&t((function(){clearTimeout(i),r()}))}))}function je(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"count_total";if(e.length<1)return{items:[],countTotal:0};var n=Number(e[0][t]);return e.forEach((function(e){delete e.count_total})),{items:e,countTotal:n}}function Re(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ne(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Object.keys(e).filter((function(e){return!n.includes(e)})).reduce((function(t,n){return t[n]=e[n],t}),{})}function Ue(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.filter((function(t){return Re(e,t)})).reduce((function(t,n){return t[n]=e[n],t}),{})}function Fe(e){return Ee.includes(e)}function Le(e){return Te.includes(e)}function Me(e){return Ie.includes(e)}function He(e){return Oe.includes(e)}function Ge(e){return Ae.includes(e)}function Ye(e){return Object.keys(e).map((function(t){var n=e[t];return Array.isArray(n)?n.map((function(e){return"".concat(t,"=").concat(encodeURIComponent(e))})).join("&"):"".concat(t,"=").concat(encodeURIComponent(n))})).join("&")}function Be(e,t){return[].concat.apply([],e.map((function(n,r){return r%t?[]:[e.slice(r,r+t)]})))}function We(e){var t=e.isTestnet,n=e.rpm,r="https://".concat(t?"tchain":"chain",".").concat("api.btc.com","/v").concat(3),i=Math.floor(6e4/n*1.25),u=0,a=!1,o=Promise.resolve(),c=function(){var e=h()(p.a.mark((function t(e,n){var o,c,s,f;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o="".concat(r,"/").concat(e),n&&(c=Ye(n),o+=c&&"?".concat(c)),!((s=u+(a?6e4:i)-Date.now())>0)){t.next=6;break}return t.next=6,qe(s);case 6:return a=!1,t.prev=7,t.next=10,Se.a.get(o);case 10:return f=t.sent,t.abrupt("return",f.data);case 14:throw t.prev=14,t.t0=t["catch"](7),t.t0.response&&429===t.t0.response.status&&(a=!0),t.t0;case 18:return t.prev=18,u=Date.now(),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[7,14,18,21]])})));return function(t,n){return e.apply(this,arguments)}}(),s=function(){var e=h()(p.a.mark((function t(e,n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o;case 3:t.next=7;break;case 5:t.prev=5,t.t0=t["catch"](0);case 7:return o=c(e,n),t.abrupt("return",o);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}();return{getAddressTransactions:function(){var e=h()(p.a.mark((function t(e){var n,r,i,u,a,o,c,f,l=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=l.length>1&&l[1]!==undefined?l[1]:{},r=n.page,i=void 0===r?1:r,u=n.pagesize,a=void 0===u?50:u,o=n.verbose,c=void 0===o?1:o,t.next=4,s("address/".concat(e,"/tx"),{page:i,pagesize:a,verbose:c});case 4:return f=t.sent,t.abrupt("return",f.data&&f.data.list||[]);case 6:case"end":return t.stop()}}),t)})));return function(t){return e.apply(this,arguments)}}(),request:s}}var ze=n(4),Xe=n.n(ze),$e=new Set(["USD"]),Qe={USD:2,BTC:8},Ve={USD:"$",BTC:"₿"},Ke={BTC:new A.a("100000000")},Je=["USD","BTC"];function Ze(e,t){return Ve[t]+" "+e}function et(e){var t=e.split("."),n=Xe()(t,2),r=n[0],i=n[1];return"".concat(r.replace(/\B(?=(\d{3})+(?!\d))/g,","),".").concat(i)}function tt(e,t){return new A.a(e).div(Ke[t])}function nt(e,t){return Number(new A.a(e).times(Ke[t]).toFixed(0))}function rt(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},r=n.withSign,i=void 0!==r&&r,u=n.withSeparators,a=void 0===u?i:u,o=Qe[t],c=new A.a(e),s=c.toFixed(o);return a&&(s=et(s)),i&&(s=Ze(s,t)),s}function it(e){return $e.has(e.toUpperCase())}function ut(e){return!it(e)}function at(e,t){var n=new A.a(e),r=new A.a(t);return n.div(r).times(100)}function ot(e){return function(e){var t=new A.a(e).times(Q);return t.lt(K)?new A.a(K):t.gt(V)?new A.a(V):t}(e).plus($)}function ct(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function st(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ct(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ct(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ft=null;function lt(e){return pt.apply(this,arguments)}function pt(){return(pt=h()(p.a.mark((function e(t){var n,r,i,u,a,o,c,s,f,l,d,h,m,y,v,_,g;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.type,r=t.userWalletId,i=t.assetTicker,u=t.price,a=t.quantity,o=t.balance,c=t.nominal,s=void 0===c?null:c,f=t.tx,l=void 0===f?ft:f,e.next=3,l("user_wallets").where({id:r}).first("user_id","currency");case 3:return d=e.sent,s||(s=d.currency),e.next=7,l("user_operations").insert({type:n,balance:rt(o,s),user_id:d.user_id,user_wallet_id:r}).returning("*");case 7:return h=e.sent,m=Xe()(h,1),y=m[0],e.next=12,l("user_operations_asset").insert({quantity:a,user_operation_id:y.id,asset_ticker:i,price:rt(u,s)}).returning("*");case 12:return v=e.sent,_=Xe()(v,1),g=_[0],e.abrupt("return",Ne(st(st(st({},y),g),{},{currency:d.currency}),"internal_id"));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function dt(e){return ht.apply(this,arguments)}function ht(){return(ht=h()(p.a.mark((function e(t){var n,r,i,u,a,o,c,s,f,l,d,h,m,y,v,_,g,w,b;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.type,r=t.userWalletId,i=t.amount,u=t.assetTicker,a=t.transactionId,o=t.balance,c=t.referralId,s=t.comment,f=t.tx,l=void 0===f?ft:f,e.next=3,l("user_wallets").where({id:r}).first("user_id","currency");case 3:return d=e.sent,h={type:n,balance:rt(o,d.currency),user_id:d.user_id,user_wallet_id:r},c&&(h.referral_id=c),s&&(h.comment=s),e.next=9,l("user_operations").insert(h).returning("*");case 9:return m=e.sent,y=Xe()(m,1),v=y[0],_={user_operation_id:v.id,amount:rt(i,d.currency)},u&&(_.asset_ticker=u),a&&(_.user_wallet_transaction_id=a),e.next=17,l("user_operations_wallet").insert(_).returning("*");case 17:return g=e.sent,w=Xe()(g,1),b=w[0],e.abrupt("return",Ne(st(st(st({},v),b),{},{currency:d.currency}),"internal_id"));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function mt(e){ft=e}function yt(e){mt(e)}function vt(e){return _t.apply(this,arguments)}function _t(){return(_t=h()(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){t.close(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var gt=function(){function e(){var t=this,n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};y()(this,e),w()(this,"_handleTermination",(function(){Promise.all([t._terminateHttpServerInstances(),t._terminateWsServerInstances()]).then((function(){return Promise.all([t._terminateAmqpInstances(),t._terminateFirebaseAdminAppInstances(),t._terminateFirestoreInstances(),t._terminateKnexInstances(),t._terminateRedisInstances()])})).then((function(){process.exit(0)})),setTimeout((function(){process.exit(1)}),t._forcedTerminationTimeout)}));var r=n.forcedTerminationTimeout,i=void 0===r?14e3:r,u=n.gracefulTerminationTimeout,a=void 0===u?1e4:u,o=n.terminationSignals,c=void 0===o?["SIGTERM","SIGINT"]:o;this._forcedTerminationTimeout=i,this._gracefulTerminationTimeout=a,this._amqpInstances=new Set,this._firebaseAdminAppInstances=new Set,this._firestoreInstances=new Set,this._httpServerInstances=new Map,this._knexInstances=new Set,this._redisInstances=new Set,this._wsServerInstances=new Set,c.forEach((function(e){process.on(e,t._handleTermination)}))}var t,r,i,u,a,o,c;return _()(e,[{key:"attachAmqpInstance",value:function(e){this._amqpInstances.add(e)}},{key:"attachFirebaseAdminAppInstance",value:function(e){this._firebaseAdminAppInstances.add(e)}},{key:"attachFirestoreInstance",value:function(e){this._firestoreInstances.add(e)}},{key:"attachHttpServer",value:function(e){var t=n(21).createHttpTerminator;this._httpServerInstances.set(e,t({server:e,gracefulTerminationTimeout:this._gracefulTerminationTimeout}))}},{key:"attachKnexInstance",value:function(e){this._knexInstances.add(e)}},{key:"attachRedisInstance",value:function(e){this._redisInstances.add(e)}},{key:"attachWsServer",value:function(e){this._wsServerInstances.add(e)}},{key:"_terminateAmqpInstances",value:(c=h()(p.a.mark((function s(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.allSettled(Array.from(this._amqpInstances).map((function(e){return e.close()}))));case 1:case"end":return e.stop()}}),s,this)}))),function(){return c.apply(this,arguments)})},{key:"_terminateFirebaseAdminAppInstances",value:(o=h()(p.a.mark((function f(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.allSettled(Array.from(this._firebaseAdminAppInstances).map((function(e){return e["delete"]()}))));case 1:case"end":return e.stop()}}),f,this)}))),function(){return o.apply(this,arguments)})},{key:"_terminateFirestoreInstances",value:(a=h()(p.a.mark((function l(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.allSettled(Array.from(this._firestoreInstances).map((function(e){return e.terminate()}))));case 1:case"end":return e.stop()}}),l,this)}))),function(){return a.apply(this,arguments)})},{key:"_terminateHttpServerInstances",value:(u=h()(p.a.mark((function d(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Array.from(this._httpServerInstances.values()),t.abrupt("return",Promise.allSettled(e.map((function(e){return e.terminate()}))));case 2:case"end":return t.stop()}}),d,this)}))),function(){return u.apply(this,arguments)})},{key:"_terminateKnexInstances",value:(i=h()(p.a.mark((function m(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.allSettled(Array.from(this._knexInstances).map((function(e){return e.destroy()}))));case 1:case"end":return e.stop()}}),m,this)}))),function(){return i.apply(this,arguments)})},{key:"_terminateRedisInstances",value:(r=h()(p.a.mark((function v(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.allSettled(Array.from(this._redisInstances).map((function(e){return e.quit()}))));case 1:case"end":return e.stop()}}),v,this)}))),function(){return r.apply(this,arguments)})},{key:"_terminateWsServerInstances",value:(t=h()(p.a.mark((function g(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(Array.from(this._wsServerInstances).map(vt)));case 1:case"end":return e.stop()}}),g,this)}))),function(){return t.apply(this,arguments)})}]),e}()}])}));
//# sourceMappingURL=index.node.js.map