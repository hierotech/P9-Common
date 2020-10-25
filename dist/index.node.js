!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("amqplib"),require("lodash.merge"),require("big.js"),require("decimal.js"),require("axios"),require("http-terminator")):"function"==typeof define&&define.amd?define(["amqplib","lodash.merge","big.js","decimal.js","axios","http-terminator"],t):"object"==typeof exports?exports.P9Common=t(require("amqplib"),require("lodash.merge"),require("big.js"),require("decimal.js"),require("axios"),require("http-terminator")):e.P9Common=t(e.amqplib,e["lodash.merge"],e["big.js"],e["decimal.js"],e.axios,e["http-terminator"])}(global,(function(e,t,n,r,i,a){return(()=>{var o={228:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},858:e=>{e.exports=function(e){if(Array.isArray(e))return e}},646:(e,t,n)=>{var r=n(228);e.exports=function(e){if(Array.isArray(e))return r(e)}},926:e=>{function t(e,t,n,r,i,a,o){try{var u=e[a](o),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(r,i)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(i,a){var o=e.apply(n,r);function u(e){t(o,i,a,u,s,"next",e)}function s(e){t(o,i,a,u,s,"throw",e)}u(undefined)}))}}},575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},913:e=>{function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},713:e=>{e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},860:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},884:e=>{e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,a=undefined;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==u["return"]||u["return"]()}finally{if(i)throw a}}return n}}},521:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},38:(e,t,n)=>{var r=n(858),i=n(884),a=n(379),o=n(521);e.exports=function(e,t){return r(e)||i(e,t)||a(e,t)||o()}},319:(e,t,n)=>{var r=n(646),i=n(860),a=n(379),o=n(206);e.exports=function(e){return r(e)||i(e)||a(e)||o()}},379:(e,t,n)=>{var r=n(228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},757:(e,t,n)=>{e.exports=n(666)},693:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AmqpClient:()=>E,Assets:()=>i,BtcClient:()=>o,Constants:()=>r,Currency:()=>u,Funds:()=>s,Helper:()=>a,Storage:()=>l,TerminationHandler:()=>gt});var r={};n.r(r),n.d(r,{ASSET_COMPONENT_MODES:()=>q,CANDLESTICK_INTERVALS:()=>D,DATA_PROVIDERS:()=>R,DEAL_TYPES:()=>N,DEMAND_TYPES:()=>j,DEPOSIT_FEE_USD:()=>X,EXPECTED_SELL_FEE_COEFF:()=>B,FILE_TYPES:()=>M,IDENTITY_CARD_TYPES:()=>F,IMAGE_MIME_TYPES:()=>Y,RX_BTC_ADDRESS:()=>J,RX_DATE:()=>Z,RX_DATE_ANY:()=>ee,RX_EMAIL:()=>te,RX_NUMERIC:()=>ne,RX_NUMERIC_NON_NEGATIVE:()=>re,RX_NUMERIC_POSITIVE:()=>ie,RX_UUID:()=>ae,SUCCESS_FEE_DISCOUNT_PROMO:()=>W,SUCCESS_FEE_DISCOUNT_PROMO_PERIOD:()=>z,TRANSACTION_TYPES:()=>U,UPLOAD_TYPES:()=>L,USER_ID_SELF:()=>G,USER_LOCK_REASONS:()=>H,WITHDRAW_FEE_USD_BASE:()=>$,WITHDRAW_FEE_USD_COEFF:()=>Q,WITHDRAW_FEE_USD_MAX:()=>V,WITHDRAW_FEE_USD_MIN:()=>K});var i={};n.r(i),n.d(i,{getAverageBuyPrice:()=>ce,getBuyAmountSum:()=>se,getBuyPriceAmountSum:()=>ue,getClosedUsedBuyingPower:()=>pe,getGrossProfit:()=>de,getGrossValue:()=>he,getNetProfit:()=>we,getOneMinusStrategyCoefficient:()=>me,getOpenedUsedBuyingPower:()=>fe,getRealizedNetProfit:()=>be,getRealizedSellFee:()=>_e,getRealizedSuccessFee:()=>ye,getSellFee:()=>ge,getSuccessFee:()=>ve,getSuccessFeeDiscount:()=>oe,getUsedBuyingPower:()=>le});var a={};n.r(a),n.d(a,{TIMESTAMP_PRECISION:()=>Ce,createAddressString:()=>ke,createFullName:()=>Pe,createTimestamp:()=>De,delay:()=>qe,excludeFields:()=>je,exposeFields:()=>Ue,extractCount:()=>Re,hasOwnProperty:()=>Ne,isAgreementAgentSignedOrRequestedStatus:()=>Fe,isAgreementSignedOrRequestedStatus:()=>Me,isAgreementSignedStatus:()=>Le,isVerifiedOrRequestedStatus:()=>Ge,isVerifiedStatus:()=>He,stringifyQuery:()=>Ye,toChunks:()=>Be});var o={};n.r(o),n.d(o,{createClient:()=>We});var u={};n.r(u),n.d(u,{CRYPTO_UNIT_ATOM_COUNT:()=>Ke,CURRENCY_SIGN:()=>Ve,CURRENCY_TYPES:()=>Je,DECIMAL_DIGIT_COUNT:()=>Qe,cryptoAtomsToUnit:()=>tt,formatCurrency:()=>rt,isCryptoCurrency:()=>at,isFiatCurrency:()=>it,ratioPercent:()=>ot,unitToCryptoAtoms:()=>nt});var s={};n.r(s),n.d(s,{getWithdrawFeeUsd:()=>ut});var c={};n.r(c),n.d(c,{createUserOperationAsset:()=>ft,createUserOperationWallet:()=>ht,init:()=>mt});var l={};n.r(l),n.d(l,{UserOperations:()=>c,init:()=>yt});var f=n(757),p=n.n(f),h=n(926),d=n.n(h),m=n(575),y=n.n(m),v=n(913),_=n.n(v),g=n(713),w=n.n(g),b=n(310),x=n.n(b),S=n(914),C=n.n(S),E=function(){function e(t){var n=this;y()(this,e),w()(this,"_handleMessage",(function(e){return function(){var t=d()(p().mark((function r(t){var i,a,o,u;return p().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.ack(t);case 3:if(t&&t.content){r.next=6;break}return console.warn("[AmqpClient._handleMessage]","Invalid message from queue",t),r.abrupt("return");case 6:if(i=JSON.parse(t.content.toString()),a=i.type,o=i.data,u=n._handlers.get(a)){r.next=11;break}return console.warn("[AmqpClient._handleMessage]",'No handler for type: "'.concat(a,'", data:'),o),r.abrupt("return");case 11:return r.next=13,u(o,a);case 13:r.next=18;break;case 15:r.prev=15,r.t0=r["catch"](0),console.warn(r.t0);case 18:case"end":return r.stop()}}),r,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}()})),w()(this,"_handleClose",(function(){n._connection=null,n._isClosing||n._isHandlingClose||(n._isHandlingClose=!0,n._consumeChannel=null,n._publishChannel=null,console.error("[AmqpClient._handleClose]","Connection failed or lost. Reconnecting in ".concat(n._config.reconnectionDelay," msecs...")),setTimeout(d()(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n._init();case 3:n._isHandlingClose=!1,e.next=11;break;case 6:e.prev=6,e.t0=e["catch"](0),console.error("[AmqpClient._handleClose::setTimeout]",e.t0),n._isHandlingClose=!1,n._handleClose();case 11:case"end":return e.stop()}}),e,null,[[0,6]])}))),n._config.reconnectionDelay))})),this._config=C()({},e.DEFAULT_CONFIG,t),this._temporaryQueue=[],this._consumeChannel=null,this._publishChannel=null,this._isHandlingClose=!1,this._handlers=new Map,this._isClosing=!1,this._connection=null}var t,n,r,i,a,o,u,s;return _()(e,null,[{key:"DEFAULT_CONFIG",get:function(){return{exchange:{consume:{type:"fanout"},publish:{type:"fanout"}},reconnectionDelay:1e4,sendToConsumeChannel:!1}}}]),_()(e,[{key:"init",value:(s=d()(p().mark((function c(){var e,t,n,r=arguments;return p().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&r[0]!==undefined?r[0]:{},t=e.throwOnError,n=void 0!==t&&t,i.prev=1,i.next=4,this._init();case 4:i.next=12;break;case 6:if(i.prev=6,i.t0=i["catch"](1),!n){i.next=10;break}throw i.t0;case 10:console.error("[AmqpClient.init]",i.t0),this._handleClose();case 12:case"end":return i.stop()}}),c,this,[[1,6]])}))),function(){return s.apply(this,arguments)})},{key:"close",value:(u=d()(p().mark((function l(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._isClosing){e.next=2;break}return e.abrupt("return");case 2:if(this._connection){e.next=4;break}return e.abrupt("return");case 4:return this._isClosing=!0,e.prev=5,e.next=8,this._connection.close();case 8:return e.prev=8,this._isClosing=!1,e.finish(8);case 11:case"end":return e.stop()}}),l,this,[[5,,8,11]])}))),function(){return u.apply(this,arguments)})},{key:"installHandler",value:function(e,t){this._handlers.set(e,t)}},{key:"publish",value:(o=d()(p().mark((function f(e){var t,n,r,i=arguments;return p().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=i.length>1&&i[1]!==undefined&&i[1],this._config){a.next=3;break}throw new Error("[AmqpClient.publish] Client is not initialized");case 3:if(n=t?this._consumeChannel:this._publishChannel){a.next=7;break}return this._temporaryQueue.push({message:e,toConsumeChannel:t}),a.abrupt("return");case 7:return r=this._config.exchange[t?"consume":"publish"].name,a.next=10,n.publish(r,"",Buffer.from(JSON.stringify(e)));case 10:case"end":return a.stop()}}),f,this)}))),function(e){return o.apply(this,arguments)})},{key:"broadcast",value:(a=d()(p().mark((function h(e){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.publish({data:{type:"broadcast",data:{data:e}},type:"notification"},this._config.sendToConsumeChannel);case 2:case"end":return t.stop()}}),h,this)}))),function(e){return a.apply(this,arguments)})},{key:"send",value:(i=d()(p().mark((function m(e,t){return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.publish({data:{type:"send",data:{receiverId:e,data:t}},type:"notification"},this._config.sendToConsumeChannel);case 2:case"end":return n.stop()}}),m,this)}))),function(e,t){return i.apply(this,arguments)})},{key:"_initConsume",value:(r=d()(p().mark((function v(e){var t,n,r,i,a,o;return p().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.createChannel();case 2:return t=u.sent,u.next=5,t.assertQueue(null,{autoDelete:!0});case 5:return n=u.sent,r=n.queue,i=this._config.exchange.consume,a=i.name,o=i.type,u.next=10,t.assertExchange(a,o);case 10:return u.next=12,t.bindQueue(r,a);case 12:return u.next=14,t.consume(r,this._handleMessage(t));case 14:return u.abrupt("return",t);case 15:case"end":return u.stop()}}),v,this)}))),function(e){return r.apply(this,arguments)})},{key:"_initPublish",value:(n=d()(p().mark((function g(e){var t,n,r,i;return p().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.createChannel();case 2:return t=a.sent,n=this._config.exchange.publish,r=n.name,i=n.type,a.next=6,t.assertExchange(r,i);case 6:return a.abrupt("return",t);case 7:case"end":return a.stop()}}),g,this)}))),function(e){return n.apply(this,arguments)})},{key:"_init",value:(t=d()(p().mark((function b(){var e,t,n,r;return p().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,x().connect(this._config.connection.url);case 2:return e=i.sent,i.next=5,this._initConsume(e);case 5:return this._consumeChannel=i.sent,i.next=8,this._initPublish(e);case 8:this._publishChannel=i.sent,this._connection=e,e.on("close",this._handleClose),e.on("error",(function(e){return console.error("[AmqpClient._init::connection.on('error')]",e)})),this._temporaryQueue.length>0&&console.log("[AmqpClient._init]","Flushing temporary queue...");case 13:if(!(this._temporaryQueue.length>0)){i.next=19;break}return t=this._temporaryQueue.shift(),n=t.message,r=t.toConsumeChannel,i.next=17,this.publish(n,r);case 17:i.next=13;break;case 19:console.log("[AmqpClient._init]","Connection established");case 20:case"end":return i.stop()}}),b,this)}))),function(){return t.apply(this,arguments)})}]),e}(),T=n(319),I=n.n(T),O=n(297),A=n.n(O),k=n(815),P=n.n(k),D=["1m","5m","15m","1h","4h","1d"],q=["addition","subtraction"],R=["binance","bitmex","coinmarketcap","cryptocompare","deribit","iex"],N=["IPO","PRE_IPO","STARTUP","ETF"],j=["COLD","WARM","HOT"],U=["deposit","withdraw"],F=["passport"],L=["user_avatar","user_passport","user_residence_proof","user_passport_selfie","asset_logo","asset_placeholder"],M=[].concat(L,["user_agreement_signed","user_agreement_agent_signed","user_invoice_pdf"]),H=["password_change"],G="self",Y=["image/png","image/jpeg"],B=.005,W=.5,z=15552e6,X=10,$=20,Q=.0015,V=100,K=30,J=/^\w{14,74}$/,Z=/^20(1[6-9]|[2-9][0-9])-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])T[0-5][0-9]:[0-5][0-9]:[0-5][0-9].[0-9]{3}Z$/,ee=/^[1-2][0-9]{3}-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])T[0-5][0-9]:[0-5][0-9]:[0-5][0-9].[0-9]{3}Z$/,te=/^[^@]+@[^@]+$/,ne=/^[0-9]+(\.[0-9]+)?$/,re=/^[0-9]+(\.[0-9]+)?$/,ie=/^([0-9]+\.0*[1-9][0-9]*|0*[1-9][0-9]*(\.[0-9]+)?)$/,ae=/^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/i;function oe(e){var t=e.success_fee_discount,n=Date.now()<new Date(e.created_at).getTime()+z,r=e.referrer_id&&n?W:null;return t&&r?Math.max(Number(t),r):t||r}function ue(e){return e.filter((function(e){return"buy"===e.type})).reduce((function(e,t){var n=t.quantity,r=t.price;return e.plus(new(A())(r).times(n))}),new(A())(0))}function se(e){return e.filter((function(e){return"buy"===e.type})).reduce((function(e,t){var n=t.quantity;return e.plus(n)}),new(A())(0))}function ce(e){var t=ue(e),n=se(e);return n.eq(0)?new(A())(0):t.div(n)}function le(e){var t=ue(e),n=se(e);if(n.eq(0))return new(A())(0);var r=t.div(n),i=e.filter((function(e){return"sell"===e.type})).reduce((function(e,t){var n=t.quantity;return e.plus(r.times(n))}),new(A())(0));return t.minus(i)}function fe(e){return ue(e)}function pe(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null,r=n&&new Date(n),i=r?e.filter((function(e){return new Date(e.timestamp)<r})):e,a=ue(i),o=se(i);if(o.eq(0))return new(A())(0);var u=a.div(o);return u.times(t)}function he(e,t){var n=new(A())(e.price_last).times(e.quantity);if("ETF"===e.deal_type)return n;var r=t.filter((function(e){return"sell"===e.type})).reduce((function(e,t){var n=t.quantity,r=t.price;return e.plus(new(A())(r).times(n))}),new(A())(0));return n.plus(r)}function de(e,t){var n=he(e,t);return"ETF"===e.deal_type?n.minus(le(t)):n.minus(ue(t))}function me(e){var t=le(e);if(t.eq(0))return new(A())(0);if(t.lte(1e4))return new(A())(.2);if(t.gte(12e5))return new(A())(.04);var n=new(P())(t.toString()).pow(.876);return new(A())(50.75).minus(P().log(n,1.3)).div(100)}function ye(e){return e.filter((function(e){return"success_fee"===e.type})).reduce((function(e,t){var n=t.amount;return e.plus(n)}),new(A())(0))}function ve(e,t,n){if("closed"===e.deal_status)return ye(t);var r=ce(t),i=new(A())(e.price_last).minus(r).times(e.quantity),a=t.filter((function(e){return"sell"===e.type})).reduce((function(e,t){var n=t.price,i=t.quantity;return e.plus(new(A())(i).times(new(A())(n).minus(r)))}),new(A())(0)),o=n&&oe(n),u=i.plus(a),s=u.gt(0)?u.times(me(t)):new(A())(0);return o?s.times(new(A())(1).minus(o)):s}function _e(e){return e.filter((function(e){return"sell_fee"===e.type})).reduce((function(e,t){var n=t.amount;return e.plus(n)}),new(A())(0))}function ge(e,t){return"ETF"===e.deal_type||"closed"===e.deal_status?_e(t):he(e,t).times(B)}function we(e,t,n){var r=de(e,t);if("ETF"===e.deal_type)return r;var i=ve(e,t,n),a=ge(e,t);return r.minus(i.plus(a))}function be(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null,r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null,i=t.reduce((function(e,t){var n=t.quantity,r=t.price;return e.plus(new(A())(r).times(n))}),new(A())(0)),a=t.reduce((function(e,t){var n=t.quantity;return e.plus(n)}),new(A())(0)),o=new Date(Math.max.apply(Math,I()(t.map((function(e){return e.timestamp}))))),u=i.minus(pe(e,a,o)),s=n&&new Date(n),c=r&&new Date(r),l=s&&c?e.filter((function(e){var t=new Date(e.timestamp);return t>=s&&t<c})):e,f=ye(l),p=_e(l);return u.minus(f.plus(p))}var xe=n(376),Se=n.n(xe),Ce={MILLISECOND:0,SECOND:1,MINUTE:2,HOUR:3,DAY:4,MONTH:5},Ee=["agreement_agent_requested","agreement_agent_signed"],Te=["agreement_signed"].concat(Ee),Ie=["agreement_requested"].concat(I()(Te)),Oe=["verified"].concat(I()(Ie)),Ae=["verification_requested"].concat(I()(Oe));function ke(e){return[e.line_1,e.line_2,e.apartment,e.town,e.area,e.zip,e.country].filter((function(e){return Boolean(e)})).join(", ")}function Pe(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";return e||t?"".concat(e||"").concat(e&&t?" ":"").concat(t||""):n}function De(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:Ce.HOUR,t=new Date;return e>=Ce.SECOND&&t.setUTCMilliseconds(0),e>=Ce.MINUTE&&t.setUTCSeconds(0),e>=Ce.HOUR&&t.setUTCMinutes(0),e>=Ce.DAY&&t.setUTCHours(0),e>=Ce.MONTH&&t.setUTCDate(1),t}function qe(e,t){return new Promise((function(n,r){var i=setTimeout(n,e);"function"==typeof t&&t((function(){clearTimeout(i),r()}))}))}function Re(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"count_total";if(e.length<1)return{items:[],countTotal:0};var n=Number(e[0][t]);return e.forEach((function(e){delete e.count_total})),{items:e,countTotal:n}}function Ne(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function je(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Object.keys(e).filter((function(e){return!n.includes(e)})).reduce((function(t,n){return t[n]=e[n],t}),{})}function Ue(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.filter((function(t){return Ne(e,t)})).reduce((function(t,n){return t[n]=e[n],t}),{})}function Fe(e){return Ee.includes(e)}function Le(e){return Te.includes(e)}function Me(e){return Ie.includes(e)}function He(e){return Oe.includes(e)}function Ge(e){return Ae.includes(e)}function Ye(e){return Object.keys(e).map((function(t){var n=e[t];return Array.isArray(n)?n.map((function(e){return"".concat(t,"=").concat(encodeURIComponent(e))})).join("&"):"".concat(t,"=").concat(encodeURIComponent(n))})).join("&")}function Be(e,t){return[].concat.apply([],e.map((function(n,r){return r%t?[]:[e.slice(r,r+t)]})))}function We(e){var t=e.isTestnet,n=e.rpm,r="https://".concat(t?"tchain":"chain",".").concat("api.btc.com","/v").concat(3),i=Math.floor(6e4/n*1.25),a=0,o=!1,u=Promise.resolve(),s=function(){var e=d()(p().mark((function t(e,n){var u,s,c,l;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u="".concat(r,"/").concat(e),n&&(s=Ye(n),u+=s&&"?".concat(s)),!((c=a+(o?6e4:i)-Date.now())>0)){t.next=6;break}return t.next=6,qe(c);case 6:return o=!1,t.prev=7,t.next=10,Se().get(u);case 10:return l=t.sent,t.abrupt("return",l.data);case 14:throw t.prev=14,t.t0=t["catch"](7),t.t0.response&&429===t.t0.response.status&&(o=!0),t.t0;case 18:return t.prev=18,a=Date.now(),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[7,14,18,21]])})));return function(t,n){return e.apply(this,arguments)}}(),c=function(){var e=d()(p().mark((function t(e,n){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u;case 3:t.next=7;break;case 5:t.prev=5,t.t0=t["catch"](0);case 7:return u=s(e,n),t.abrupt("return",u);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}();return{getAddressTransactions:function(){var e=d()(p().mark((function t(e){var n,r,i,a,o,u,s,l,f=arguments;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=f.length>1&&f[1]!==undefined?f[1]:{},r=n.page,i=void 0===r?1:r,a=n.pagesize,o=void 0===a?50:a,u=n.verbose,s=void 0===u?1:u,t.next=4,c("address/".concat(e,"/tx"),{page:i,pagesize:o,verbose:s});case 4:return l=t.sent,t.abrupt("return",l.data&&l.data.list||[]);case 6:case"end":return t.stop()}}),t)})));return function(t){return e.apply(this,arguments)}}(),request:c}}var ze=n(38),Xe=n.n(ze),$e=new Set(["USD"]),Qe={USD:2,BTC:8},Ve={USD:"$",BTC:"₿"},Ke={BTC:new(A())("100000000")},Je=["USD","BTC"];function Ze(e,t){return Ve[t]+" "+e}function et(e){var t=e.split("."),n=Xe()(t,2),r=n[0],i=n[1];return"".concat(r.replace(/\B(?=(\d{3})+(?!\d))/g,","),".").concat(i)}function tt(e,t){return new(A())(e).div(Ke[t])}function nt(e,t){return Number(new(A())(e).times(Ke[t]).toFixed(0))}function rt(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},r=n.withSign,i=void 0!==r&&r,a=n.withSeparators,o=void 0===a?i:a,u=Qe[t],s=new(A())(e),c=s.toFixed(u);return o&&(c=et(c)),i&&(c=Ze(c,t)),c}function it(e){return $e.has(e.toUpperCase())}function at(e){return!it(e)}function ot(e,t){var n=new(A())(e),r=new(A())(t);return n.div(r).times(100)}function ut(e){return function(e){var t=new(A())(e).times(Q);return t.lt(K)?new(A())(K):t.gt(V)?new(A())(V):t}(e).plus($)}function st(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ct(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?st(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var lt=null;function ft(e){return pt.apply(this,arguments)}function pt(){return(pt=d()(p().mark((function e(t){var n,r,i,a,o,u,s,c,l,f,h,d,m,y,v,_,g;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.type,r=t.userWalletId,i=t.assetTicker,a=t.price,o=t.quantity,u=t.balance,s=t.nominal,c=void 0===s?null:s,l=t.tx,f=void 0===l?lt:l,e.next=3,f("user_wallets").where({id:r}).first("user_id","currency");case 3:return h=e.sent,c||(c=h.currency),e.next=7,f("user_operations").insert({type:n,balance:rt(u,c),user_id:h.user_id,user_wallet_id:r}).returning("*");case 7:return d=e.sent,m=Xe()(d,1),y=m[0],e.next=12,f("user_operations_asset").insert({quantity:o,user_operation_id:y.id,asset_ticker:i,price:rt(a,c)}).returning("*");case 12:return v=e.sent,_=Xe()(v,1),g=_[0],e.abrupt("return",je(ct(ct(ct({},y),g),{},{currency:h.currency}),"internal_id"));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ht(e){return dt.apply(this,arguments)}function dt(){return(dt=d()(p().mark((function e(t){var n,r,i,a,o,u,s,c,l,f,h,d,m,y,v,_,g,w,b;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.type,r=t.userWalletId,i=t.amount,a=t.assetTicker,o=t.transactionId,u=t.balance,s=t.referralId,c=t.comment,l=t.tx,f=void 0===l?lt:l,e.next=3,f("user_wallets").where({id:r}).first("user_id","currency");case 3:return h=e.sent,d={type:n,balance:rt(u,h.currency),user_id:h.user_id,user_wallet_id:r},s&&(d.referral_id=s),c&&(d.comment=c),e.next=9,f("user_operations").insert(d).returning("*");case 9:return m=e.sent,y=Xe()(m,1),v=y[0],_={user_operation_id:v.id,amount:rt(i,h.currency)},a&&(_.asset_ticker=a),o&&(_.user_wallet_transaction_id=o),e.next=17,f("user_operations_wallet").insert(_).returning("*");case 17:return g=e.sent,w=Xe()(g,1),b=w[0],e.abrupt("return",je(ct(ct(ct({},v),b),{},{currency:h.currency}),"internal_id"));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function mt(e){lt=e}function yt(e){mt(e)}function vt(e){return _t.apply(this,arguments)}function _t(){return(_t=d()(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){t.close(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const gt=function(){function e(){var t=this,n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};y()(this,e),w()(this,"_handleTermination",(function(){Promise.all([t._terminateHttpServerInstances(),t._terminateWsServerInstances()]).then((function(){return Promise.all([t._terminateAmqpInstances(),t._terminateFirebaseAdminAppInstances(),t._terminateFirestoreInstances(),t._terminateKnexInstances(),t._terminateRedisInstances()])})).then((function(){process.exit(0)})),setTimeout((function(){process.exit(1)}),t._forcedTerminationTimeout)}));var r=n.forcedTerminationTimeout,i=void 0===r?14e3:r,a=n.gracefulTerminationTimeout,o=void 0===a?1e4:a,u=n.terminationSignals,s=void 0===u?["SIGTERM","SIGINT"]:u;this._forcedTerminationTimeout=i,this._gracefulTerminationTimeout=o,this._amqpInstances=new Set,this._firebaseAdminAppInstances=new Set,this._firestoreInstances=new Set,this._httpServerInstances=new Map,this._knexInstances=new Set,this._redisInstances=new Set,this._wsServerInstances=new Set,s.forEach((function(e){process.on(e,t._handleTermination)}))}var t,r,i,a,o,u,s;return _()(e,[{key:"attachAmqpInstance",value:function(e){this._amqpInstances.add(e)}},{key:"attachFirebaseAdminAppInstance",value:function(e){this._firebaseAdminAppInstances.add(e)}},{key:"attachFirestoreInstance",value:function(e){this._firestoreInstances.add(e)}},{key:"attachHttpServer",value:function(e){var t=n(66).createHttpTerminator;this._httpServerInstances.set(e,t({server:e,gracefulTerminationTimeout:this._gracefulTerminationTimeout}))}},{key:"attachKnexInstance",value:function(e){this._knexInstances.add(e)}},{key:"attachRedisInstance",value:function(e){this._redisInstances.add(e)}},{key:"attachWsServer",value:function(e){this._wsServerInstances.add(e)}},{key:"_terminateAmqpInstances",value:(s=d()(p().mark((function c(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.allSettled(Array.from(this._amqpInstances).map((function(e){return e.close()}))));case 1:case"end":return e.stop()}}),c,this)}))),function(){return s.apply(this,arguments)})},{key:"_terminateFirebaseAdminAppInstances",value:(u=d()(p().mark((function l(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.allSettled(Array.from(this._firebaseAdminAppInstances).map((function(e){return e["delete"]()}))));case 1:case"end":return e.stop()}}),l,this)}))),function(){return u.apply(this,arguments)})},{key:"_terminateFirestoreInstances",value:(o=d()(p().mark((function f(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.allSettled(Array.from(this._firestoreInstances).map((function(e){return e.terminate()}))));case 1:case"end":return e.stop()}}),f,this)}))),function(){return o.apply(this,arguments)})},{key:"_terminateHttpServerInstances",value:(a=d()(p().mark((function h(){var e;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Array.from(this._httpServerInstances.values()),t.abrupt("return",Promise.allSettled(e.map((function(e){return e.terminate()}))));case 2:case"end":return t.stop()}}),h,this)}))),function(){return a.apply(this,arguments)})},{key:"_terminateKnexInstances",value:(i=d()(p().mark((function m(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.allSettled(Array.from(this._knexInstances).map((function(e){return e.destroy()}))));case 1:case"end":return e.stop()}}),m,this)}))),function(){return i.apply(this,arguments)})},{key:"_terminateRedisInstances",value:(r=d()(p().mark((function v(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.allSettled(Array.from(this._redisInstances).map((function(e){return e.quit()}))));case 1:case"end":return e.stop()}}),v,this)}))),function(){return r.apply(this,arguments)})},{key:"_terminateWsServerInstances",value:(t=d()(p().mark((function g(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(Array.from(this._wsServerInstances).map(vt)));case 1:case"end":return e.stop()}}),g,this)}))),function(){return t.apply(this,arguments)})}]),e}()},666:e=>{var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(P){s=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),o=new O(r||[]);return a._invoke=function(e,t,n){var r=f;return function(i,a){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw a;return k()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var u=E(o,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=l(e,t,n);if("normal"===s.type){if(r=n.done?d:p,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=c;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",m={};function y(){}function v(){}function _(){}var g={};g[a]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(A([])));b&&b!==n&&r.call(b,a)&&(g=b);var x=_.prototype=y.prototype=Object.create(g);function S(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(i,a,o,u){var s=l(e[i],e,a);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,o,u)}),(function(e){n("throw",e,o,u)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,u)}))}u(s.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function A(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:k}}function k(){return{value:t,done:!0}}return v.prototype=x.constructor=_,_.constructor=v,v.displayName=s(_,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,s(e,u,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},S(C.prototype),C.prototype[o]=function(){return this},e.AsyncIterator=C,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new C(c(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},S(x),s(x,u,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=A,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return u.type="throw",u.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],u=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),m}},"catch":function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;I(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(n){Function("r","regeneratorRuntime = r")(t)}},310:t=>{"use strict";t.exports=e},376:e=>{"use strict";e.exports=i},297:e=>{"use strict";e.exports=n},815:e=>{"use strict";e.exports=r},66:e=>{"use strict";e.exports=a},914:e=>{"use strict";e.exports=t}},u={};function s(e){if(u[e])return u[e].exports;var t=u[e]={exports:{}};return o[e](t,t.exports,s),t.exports}return s.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s(693)})()}));
//# sourceMappingURL=index.node.js.map