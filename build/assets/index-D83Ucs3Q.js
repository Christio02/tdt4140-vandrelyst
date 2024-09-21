function QC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Qu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var H1={exports:{}},Yu={},q1={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gl=Symbol.for("react.element"),YC=Symbol.for("react.portal"),XC=Symbol.for("react.fragment"),JC=Symbol.for("react.strict_mode"),ZC=Symbol.for("react.profiler"),ex=Symbol.for("react.provider"),tx=Symbol.for("react.context"),nx=Symbol.for("react.forward_ref"),rx=Symbol.for("react.suspense"),ix=Symbol.for("react.memo"),sx=Symbol.for("react.lazy"),Ev=Symbol.iterator;function ox(t){return t===null||typeof t!="object"?null:(t=Ev&&t[Ev]||t["@@iterator"],typeof t=="function"?t:null)}var G1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K1=Object.assign,Q1={};function Ao(t,e,n){this.props=t,this.context=e,this.refs=Q1,this.updater=n||G1}Ao.prototype.isReactComponent={};Ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Y1(){}Y1.prototype=Ao.prototype;function sm(t,e,n){this.props=t,this.context=e,this.refs=Q1,this.updater=n||G1}var om=sm.prototype=new Y1;om.constructor=sm;K1(om,Ao.prototype);om.isPureReactComponent=!0;var Tv=Array.isArray,X1=Object.prototype.hasOwnProperty,am={current:null},J1={key:!0,ref:!0,__self:!0,__source:!0};function Z1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)X1.call(e,r)&&!J1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:gl,type:t,key:s,ref:o,props:i,_owner:am.current}}function ax(t,e){return{$$typeof:gl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lm(t){return typeof t=="object"&&t!==null&&t.$$typeof===gl}function lx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Iv=/\/+/g;function fh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lx(""+t.key):e.toString(36)}function Nc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case gl:case YC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+fh(o,0):r,Tv(i)?(n="",t!=null&&(n=t.replace(Iv,"$&/")+"/"),Nc(i,e,n,"",function(u){return u})):i!=null&&(lm(i)&&(i=ax(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Iv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Tv(t))for(var a=0;a<t.length;a++){s=t[a];var c=r+fh(s,a);o+=Nc(s,e,n,c,i)}else if(c=ox(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=r+fh(s,a++),o+=Nc(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ic(t,e,n){if(t==null)return t;var r=[],i=0;return Nc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function cx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},bc={transition:null},ux={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:bc,ReactCurrentOwner:am};function ew(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:ic,forEach:function(t,e,n){ic(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ic(t,function(){e++}),e},toArray:function(t){return ic(t,function(e){return e})||[]},only:function(t){if(!lm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};fe.Component=Ao;fe.Fragment=XC;fe.Profiler=ZC;fe.PureComponent=sm;fe.StrictMode=JC;fe.Suspense=rx;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ux;fe.act=ew;fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=K1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=am.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)X1.call(e,c)&&!J1.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:gl,type:t.type,key:i,ref:s,props:r,_owner:o}};fe.createContext=function(t){return t={$$typeof:tx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ex,_context:t},t.Consumer=t};fe.createElement=Z1;fe.createFactory=function(t){var e=Z1.bind(null,t);return e.type=t,e};fe.createRef=function(){return{current:null}};fe.forwardRef=function(t){return{$$typeof:nx,render:t}};fe.isValidElement=lm;fe.lazy=function(t){return{$$typeof:sx,_payload:{_status:-1,_result:t},_init:cx}};fe.memo=function(t,e){return{$$typeof:ix,type:t,compare:e===void 0?null:e}};fe.startTransition=function(t){var e=bc.transition;bc.transition={};try{t()}finally{bc.transition=e}};fe.unstable_act=ew;fe.useCallback=function(t,e){return qt.current.useCallback(t,e)};fe.useContext=function(t){return qt.current.useContext(t)};fe.useDebugValue=function(){};fe.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};fe.useEffect=function(t,e){return qt.current.useEffect(t,e)};fe.useId=function(){return qt.current.useId()};fe.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};fe.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};fe.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};fe.useMemo=function(t,e){return qt.current.useMemo(t,e)};fe.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};fe.useRef=function(t){return qt.current.useRef(t)};fe.useState=function(t){return qt.current.useState(t)};fe.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};fe.useTransition=function(){return qt.current.useTransition()};fe.version="18.3.1";q1.exports=fe;var I=q1.exports;const bn=Qu(I),dx=QC({__proto__:null,default:bn},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx=I,fx=Symbol.for("react.element"),px=Symbol.for("react.fragment"),mx=Object.prototype.hasOwnProperty,gx=hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yx={key:!0,ref:!0,__self:!0,__source:!0};function tw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mx.call(e,r)&&!yx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:fx,type:t,key:s,ref:o,props:i,_owner:gx.current}}Yu.Fragment=px;Yu.jsx=tw;Yu.jsxs=tw;H1.exports=Yu;var d=H1.exports,pf={},nw={exports:{}},pn={},rw={exports:{}},iw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,X){var Z=B.length;B.push(X);e:for(;0<Z;){var de=Z-1>>>1,oe=B[de];if(0<i(oe,X))B[de]=X,B[Z]=oe,Z=de;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var X=B[0],Z=B.pop();if(Z!==X){B[0]=Z;e:for(var de=0,oe=B.length,ce=oe>>>1;de<ce;){var Ue=2*(de+1)-1,et=B[Ue],Q=Ue+1,ue=B[Q];if(0>i(et,Z))Q<oe&&0>i(ue,et)?(B[de]=ue,B[Q]=Z,de=Q):(B[de]=et,B[Ue]=Z,de=Ue);else if(Q<oe&&0>i(ue,Z))B[de]=ue,B[Q]=Z,de=Q;else break e}}return X}function i(B,X){var Z=B.sortIndex-X.sortIndex;return Z!==0?Z:B.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],u=[],f=1,m=null,g=3,E=!1,x=!1,P=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(B){for(var X=n(u);X!==null;){if(X.callback===null)r(u);else if(X.startTime<=B)r(u),X.sortIndex=X.expirationTime,e(c,X);else break;X=n(u)}}function b(B){if(P=!1,T(B),!x)if(n(c)!==null)x=!0,mt(j);else{var X=n(u);X!==null&&ot(b,X.startTime-B)}}function j(B,X){x=!1,P&&(P=!1,v(w),w=-1),E=!0;var Z=g;try{for(T(X),m=n(c);m!==null&&(!(m.expirationTime>X)||B&&!N());){var de=m.callback;if(typeof de=="function"){m.callback=null,g=m.priorityLevel;var oe=de(m.expirationTime<=X);X=t.unstable_now(),typeof oe=="function"?m.callback=oe:m===n(c)&&r(c),T(X)}else r(c);m=n(c)}if(m!==null)var ce=!0;else{var Ue=n(u);Ue!==null&&ot(b,Ue.startTime-X),ce=!1}return ce}finally{m=null,g=Z,E=!1}}var M=!1,S=null,w=-1,C=5,R=-1;function N(){return!(t.unstable_now()-R<C)}function D(){if(S!==null){var B=t.unstable_now();R=B;var X=!0;try{X=S(!0,B)}finally{X?A():(M=!1,S=null)}}else M=!1}var A;if(typeof y=="function")A=function(){y(D)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,st=Ze.port2;Ze.port1.onmessage=D,A=function(){st.postMessage(null)}}else A=function(){k(D,0)};function mt(B){S=B,M||(M=!0,A())}function ot(B,X){w=k(function(){B(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){x||E||(x=!0,mt(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var X=3;break;default:X=g}var Z=g;g=X;try{return B()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=g;g=B;try{return X()}finally{g=Z}},t.unstable_scheduleCallback=function(B,X,Z){var de=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?de+Z:de):Z=de,B){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=Z+oe,B={id:f++,callback:X,priorityLevel:B,startTime:Z,expirationTime:oe,sortIndex:-1},Z>de?(B.sortIndex=Z,e(u,B),n(c)===null&&B===n(u)&&(P?(v(w),w=-1):P=!0,ot(b,Z-de))):(B.sortIndex=oe,e(c,B),x||E||(x=!0,mt(j))),B},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(B){var X=g;return function(){var Z=g;g=X;try{return B.apply(this,arguments)}finally{g=Z}}}})(iw);rw.exports=iw;var vx=rw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x=I,hn=vx;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sw=new Set,Ua={};function fs(t,e){lo(t,e),lo(t+"Capture",e)}function lo(t,e){for(Ua[t]=e,t=0;t<e.length;t++)sw.add(e[t])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mf=Object.prototype.hasOwnProperty,wx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sv={},Cv={};function Ex(t){return mf.call(Cv,t)?!0:mf.call(Sv,t)?!1:wx.test(t)?Cv[t]=!0:(Sv[t]=!0,!1)}function Tx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ix(t,e,n,r){if(e===null||typeof e>"u"||Tx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xt[t]=new Gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xt[e]=new Gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xt[t]=new Gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xt[t]=new Gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xt[t]=new Gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xt[t]=new Gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xt[t]=new Gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xt[t]=new Gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xt[t]=new Gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var cm=/[\-:]([a-z])/g;function um(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cm,um);xt[e]=new Gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cm,um);xt[e]=new Gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cm,um);xt[e]=new Gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xt[t]=new Gt(t,1,!1,t.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xt[t]=new Gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function dm(t,e,n,r){var i=xt.hasOwnProperty(e)?xt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ix(e,n,i,r)&&(n=null),r||i===null?Ex(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pr=_x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sc=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),js=Symbol.for("react.fragment"),hm=Symbol.for("react.strict_mode"),gf=Symbol.for("react.profiler"),ow=Symbol.for("react.provider"),aw=Symbol.for("react.context"),fm=Symbol.for("react.forward_ref"),yf=Symbol.for("react.suspense"),vf=Symbol.for("react.suspense_list"),pm=Symbol.for("react.memo"),Ur=Symbol.for("react.lazy"),lw=Symbol.for("react.offscreen"),xv=Symbol.iterator;function ea(t){return t===null||typeof t!="object"?null:(t=xv&&t[xv]||t["@@iterator"],typeof t=="function"?t:null)}var He=Object.assign,ph;function ua(t){if(ph===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ph=e&&e[1]||""}return`
`+ph+t}var mh=!1;function gh(t,e){if(!t||mh)return"";mh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{mh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ua(t):""}function Sx(t){switch(t.tag){case 5:return ua(t.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 2:case 15:return t=gh(t.type,!1),t;case 11:return t=gh(t.type.render,!1),t;case 1:return t=gh(t.type,!0),t;default:return""}}function _f(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case js:return"Fragment";case Ls:return"Portal";case gf:return"Profiler";case hm:return"StrictMode";case yf:return"Suspense";case vf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case aw:return(t.displayName||"Context")+".Consumer";case ow:return(t._context.displayName||"Context")+".Provider";case fm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pm:return e=t.displayName||null,e!==null?e:_f(t.type)||"Memo";case Ur:e=t._payload,t=t._init;try{return _f(t(e))}catch{}}return null}function Cx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _f(e);case 8:return e===hm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xx(t){var e=cw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oc(t){t._valueTracker||(t._valueTracker=xx(t))}function uw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function eu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wf(t,e){var n=e.checked;return He({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dw(t,e){e=e.checked,e!=null&&dm(t,"checked",e,!1)}function Ef(t,e){dw(t,e);var n=fi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tf(t,e.type,fi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Av(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tf(t,e,n){(e!=="number"||eu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var da=Array.isArray;function Xs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function If(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return He({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(da(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fi(n)}}function hw(t,e){var n=fi(e.value),r=fi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Pv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ac,pw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ac=ac||document.createElement("div"),ac.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ac.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rx=["Webkit","ms","Moz","O"];Object.keys(Ia).forEach(function(t){Rx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ia[e]=Ia[t]})});function mw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ia.hasOwnProperty(t)&&Ia[t]?(""+e).trim():e+"px"}function gw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Ax=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cf(t,e){if(e){if(Ax[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function xf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rf=null;function mm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Af=null,Js=null,Zs=null;function Nv(t){if(t=_l(t)){if(typeof Af!="function")throw Error(U(280));var e=t.stateNode;e&&(e=td(e),Af(t.stateNode,t.type,e))}}function yw(t){Js?Zs?Zs.push(t):Zs=[t]:Js=t}function vw(){if(Js){var t=Js,e=Zs;if(Zs=Js=null,Nv(t),e)for(t=0;t<e.length;t++)Nv(e[t])}}function _w(t,e){return t(e)}function ww(){}var yh=!1;function Ew(t,e,n){if(yh)return t(e,n);yh=!0;try{return _w(t,e,n)}finally{yh=!1,(Js!==null||Zs!==null)&&(ww(),vw())}}function za(t,e){var n=t.stateNode;if(n===null)return null;var r=td(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var kf=!1;if(vr)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){kf=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{kf=!1}function kx(t,e,n,r,i,s,o,a,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Sa=!1,tu=null,nu=!1,Pf=null,Px={onError:function(t){Sa=!0,tu=t}};function Nx(t,e,n,r,i,s,o,a,c){Sa=!1,tu=null,kx.apply(Px,arguments)}function bx(t,e,n,r,i,s,o,a,c){if(Nx.apply(this,arguments),Sa){if(Sa){var u=tu;Sa=!1,tu=null}else throw Error(U(198));nu||(nu=!0,Pf=u)}}function ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bv(t){if(ps(t)!==t)throw Error(U(188))}function Dx(t){var e=t.alternate;if(!e){if(e=ps(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bv(i),t;if(s===r)return bv(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Iw(t){return t=Dx(t),t!==null?Sw(t):null}function Sw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sw(t);if(e!==null)return e;t=t.sibling}return null}var Cw=hn.unstable_scheduleCallback,Dv=hn.unstable_cancelCallback,Ox=hn.unstable_shouldYield,Lx=hn.unstable_requestPaint,it=hn.unstable_now,jx=hn.unstable_getCurrentPriorityLevel,gm=hn.unstable_ImmediatePriority,xw=hn.unstable_UserBlockingPriority,ru=hn.unstable_NormalPriority,Mx=hn.unstable_LowPriority,Rw=hn.unstable_IdlePriority,Xu=null,Qn=null;function Vx(t){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(Xu,t,void 0,(t.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:Bx,Fx=Math.log,Ux=Math.LN2;function Bx(t){return t>>>=0,t===0?32:31-(Fx(t)/Ux|0)|0}var lc=64,cc=4194304;function ha(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function iu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ha(a):(s&=o,s!==0&&(r=ha(s)))}else o=n&~i,o!==0?r=ha(o):s!==0&&(r=ha(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Dn(e),i=1<<n,r|=t[n],e&=~i;return r}function zx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $x(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dn(s),a=1<<o,c=i[o];c===-1?(!(a&n)||a&r)&&(i[o]=zx(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function Nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Aw(){var t=lc;return lc<<=1,!(lc&4194240)&&(lc=64),t}function vh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dn(e),t[e]=n}function Wx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Dn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ym(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Se=0;function kw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Pw,vm,Nw,bw,Dw,bf=!1,uc=[],ti=null,ni=null,ri=null,$a=new Map,Wa=new Map,$r=[],Hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ov(t,e){switch(t){case"focusin":case"focusout":ti=null;break;case"dragenter":case"dragleave":ni=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":$a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(e.pointerId)}}function na(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_l(e),e!==null&&vm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qx(t,e,n,r,i){switch(e){case"focusin":return ti=na(ti,t,e,n,r,i),!0;case"dragenter":return ni=na(ni,t,e,n,r,i),!0;case"mouseover":return ri=na(ri,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return $a.set(s,na($a.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Wa.set(s,na(Wa.get(s)||null,t,e,n,r,i)),!0}return!1}function Ow(t){var e=Bi(t.target);if(e!==null){var n=ps(e);if(n!==null){if(e=n.tag,e===13){if(e=Tw(n),e!==null){t.blockedOn=e,Dw(t.priority,function(){Nw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Df(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rf=r,n.target.dispatchEvent(r),Rf=null}else return e=_l(n),e!==null&&vm(e),t.blockedOn=n,!1;e.shift()}return!0}function Lv(t,e,n){Dc(t)&&n.delete(e)}function Gx(){bf=!1,ti!==null&&Dc(ti)&&(ti=null),ni!==null&&Dc(ni)&&(ni=null),ri!==null&&Dc(ri)&&(ri=null),$a.forEach(Lv),Wa.forEach(Lv)}function ra(t,e){t.blockedOn===e&&(t.blockedOn=null,bf||(bf=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,Gx)))}function Ha(t){function e(i){return ra(i,t)}if(0<uc.length){ra(uc[0],t);for(var n=1;n<uc.length;n++){var r=uc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ti!==null&&ra(ti,t),ni!==null&&ra(ni,t),ri!==null&&ra(ri,t),$a.forEach(e),Wa.forEach(e),n=0;n<$r.length;n++)r=$r[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$r.length&&(n=$r[0],n.blockedOn===null);)Ow(n),n.blockedOn===null&&$r.shift()}var eo=Pr.ReactCurrentBatchConfig,su=!0;function Kx(t,e,n,r){var i=Se,s=eo.transition;eo.transition=null;try{Se=1,_m(t,e,n,r)}finally{Se=i,eo.transition=s}}function Qx(t,e,n,r){var i=Se,s=eo.transition;eo.transition=null;try{Se=4,_m(t,e,n,r)}finally{Se=i,eo.transition=s}}function _m(t,e,n,r){if(su){var i=Df(t,e,n,r);if(i===null)Ah(t,e,r,ou,n),Ov(t,r);else if(qx(i,t,e,n,r))r.stopPropagation();else if(Ov(t,r),e&4&&-1<Hx.indexOf(t)){for(;i!==null;){var s=_l(i);if(s!==null&&Pw(s),s=Df(t,e,n,r),s===null&&Ah(t,e,r,ou,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ah(t,e,r,null,n)}}var ou=null;function Df(t,e,n,r){if(ou=null,t=mm(r),t=Bi(t),t!==null)if(e=ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ou=t,null}function Lw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jx()){case gm:return 1;case xw:return 4;case ru:case Mx:return 16;case Rw:return 536870912;default:return 16}default:return 16}}var Yr=null,wm=null,Oc=null;function jw(){if(Oc)return Oc;var t,e=wm,n=e.length,r,i="value"in Yr?Yr.value:Yr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Oc=i.slice(t,1<r?1-r:void 0)}function Lc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dc(){return!0}function jv(){return!1}function mn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dc:jv,this.isPropagationStopped=jv,this}return He(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dc)},persist:function(){},isPersistent:dc}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Em=mn(ko),vl=He({},ko,{view:0,detail:0}),Yx=mn(vl),_h,wh,ia,Ju=He({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ia&&(ia&&t.type==="mousemove"?(_h=t.screenX-ia.screenX,wh=t.screenY-ia.screenY):wh=_h=0,ia=t),_h)},movementY:function(t){return"movementY"in t?t.movementY:wh}}),Mv=mn(Ju),Xx=He({},Ju,{dataTransfer:0}),Jx=mn(Xx),Zx=He({},vl,{relatedTarget:0}),Eh=mn(Zx),eR=He({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),tR=mn(eR),nR=He({},ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rR=mn(nR),iR=He({},ko,{data:0}),Vv=mn(iR),sR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aR[t])?!!e[t]:!1}function Tm(){return lR}var cR=He({},vl,{key:function(t){if(t.key){var e=sR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Lc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tm,charCode:function(t){return t.type==="keypress"?Lc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Lc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uR=mn(cR),dR=He({},Ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fv=mn(dR),hR=He({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tm}),fR=mn(hR),pR=He({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),mR=mn(pR),gR=He({},Ju,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yR=mn(gR),vR=[9,13,27,32],Im=vr&&"CompositionEvent"in window,Ca=null;vr&&"documentMode"in document&&(Ca=document.documentMode);var _R=vr&&"TextEvent"in window&&!Ca,Mw=vr&&(!Im||Ca&&8<Ca&&11>=Ca),Uv=" ",Bv=!1;function Vw(t,e){switch(t){case"keyup":return vR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function wR(t,e){switch(t){case"compositionend":return Fw(e);case"keypress":return e.which!==32?null:(Bv=!0,Uv);case"textInput":return t=e.data,t===Uv&&Bv?null:t;default:return null}}function ER(t,e){if(Ms)return t==="compositionend"||!Im&&Vw(t,e)?(t=jw(),Oc=wm=Yr=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mw&&e.locale!=="ko"?null:e.data;default:return null}}var TR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TR[t.type]:e==="textarea"}function Uw(t,e,n,r){yw(r),e=au(e,"onChange"),0<e.length&&(n=new Em("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xa=null,qa=null;function IR(t){Xw(t,0)}function Zu(t){var e=Us(t);if(uw(e))return t}function SR(t,e){if(t==="change")return e}var Bw=!1;if(vr){var Th;if(vr){var Ih="oninput"in document;if(!Ih){var $v=document.createElement("div");$v.setAttribute("oninput","return;"),Ih=typeof $v.oninput=="function"}Th=Ih}else Th=!1;Bw=Th&&(!document.documentMode||9<document.documentMode)}function Wv(){xa&&(xa.detachEvent("onpropertychange",zw),qa=xa=null)}function zw(t){if(t.propertyName==="value"&&Zu(qa)){var e=[];Uw(e,qa,t,mm(t)),Ew(IR,e)}}function CR(t,e,n){t==="focusin"?(Wv(),xa=e,qa=n,xa.attachEvent("onpropertychange",zw)):t==="focusout"&&Wv()}function xR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zu(qa)}function RR(t,e){if(t==="click")return Zu(e)}function AR(t,e){if(t==="input"||t==="change")return Zu(e)}function kR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ln=typeof Object.is=="function"?Object.is:kR;function Ga(t,e){if(Ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mf.call(e,i)||!Ln(t[i],e[i]))return!1}return!0}function Hv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qv(t,e){var n=Hv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hv(n)}}function $w(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$w(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ww(){for(var t=window,e=eu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=eu(t.document)}return e}function Sm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PR(t){var e=Ww(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$w(n.ownerDocument.documentElement,n)){if(r!==null&&Sm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qv(n,s);var o=qv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NR=vr&&"documentMode"in document&&11>=document.documentMode,Vs=null,Of=null,Ra=null,Lf=!1;function Gv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lf||Vs==null||Vs!==eu(r)||(r=Vs,"selectionStart"in r&&Sm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ra&&Ga(Ra,r)||(Ra=r,r=au(Of,"onSelect"),0<r.length&&(e=new Em("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vs)))}function hc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fs={animationend:hc("Animation","AnimationEnd"),animationiteration:hc("Animation","AnimationIteration"),animationstart:hc("Animation","AnimationStart"),transitionend:hc("Transition","TransitionEnd")},Sh={},Hw={};vr&&(Hw=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function ed(t){if(Sh[t])return Sh[t];if(!Fs[t])return t;var e=Fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Hw)return Sh[t]=e[n];return t}var qw=ed("animationend"),Gw=ed("animationiteration"),Kw=ed("animationstart"),Qw=ed("transitionend"),Yw=new Map,Kv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ii(t,e){Yw.set(t,e),fs(e,[t])}for(var Ch=0;Ch<Kv.length;Ch++){var xh=Kv[Ch],bR=xh.toLowerCase(),DR=xh[0].toUpperCase()+xh.slice(1);Ii(bR,"on"+DR)}Ii(qw,"onAnimationEnd");Ii(Gw,"onAnimationIteration");Ii(Kw,"onAnimationStart");Ii("dblclick","onDoubleClick");Ii("focusin","onFocus");Ii("focusout","onBlur");Ii(Qw,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OR=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function Qv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bx(r,e,void 0,t),t.currentTarget=null}function Xw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==s&&i.isPropagationStopped())break e;Qv(i,a,u),s=c}else for(o=0;o<r.length;o++){if(a=r[o],c=a.instance,u=a.currentTarget,a=a.listener,c!==s&&i.isPropagationStopped())break e;Qv(i,a,u),s=c}}}if(nu)throw t=Pf,nu=!1,Pf=null,t}function be(t,e){var n=e[Uf];n===void 0&&(n=e[Uf]=new Set);var r=t+"__bubble";n.has(r)||(Jw(e,t,2,!1),n.add(r))}function Rh(t,e,n){var r=0;e&&(r|=4),Jw(n,t,r,e)}var fc="_reactListening"+Math.random().toString(36).slice(2);function Ka(t){if(!t[fc]){t[fc]=!0,sw.forEach(function(n){n!=="selectionchange"&&(OR.has(n)||Rh(n,!1,t),Rh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fc]||(e[fc]=!0,Rh("selectionchange",!1,e))}}function Jw(t,e,n,r){switch(Lw(e)){case 1:var i=Kx;break;case 4:i=Qx;break;default:i=_m}n=i.bind(null,e,n,t),i=void 0,!kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ah(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Bi(a),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ew(function(){var u=s,f=mm(n),m=[];e:{var g=Yw.get(t);if(g!==void 0){var E=Em,x=t;switch(t){case"keypress":if(Lc(n)===0)break e;case"keydown":case"keyup":E=uR;break;case"focusin":x="focus",E=Eh;break;case"focusout":x="blur",E=Eh;break;case"beforeblur":case"afterblur":E=Eh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Mv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=fR;break;case qw:case Gw:case Kw:E=tR;break;case Qw:E=mR;break;case"scroll":E=Yx;break;case"wheel":E=yR;break;case"copy":case"cut":case"paste":E=rR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Fv}var P=(e&4)!==0,k=!P&&t==="scroll",v=P?g!==null?g+"Capture":null:g;P=[];for(var y=u,T;y!==null;){T=y;var b=T.stateNode;if(T.tag===5&&b!==null&&(T=b,v!==null&&(b=za(y,v),b!=null&&P.push(Qa(y,b,T)))),k)break;y=y.return}0<P.length&&(g=new E(g,x,null,n,f),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",g&&n!==Rf&&(x=n.relatedTarget||n.fromElement)&&(Bi(x)||x[_r]))break e;if((E||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,E?(x=n.relatedTarget||n.toElement,E=u,x=x?Bi(x):null,x!==null&&(k=ps(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(E=null,x=u),E!==x)){if(P=Mv,b="onMouseLeave",v="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(P=Fv,b="onPointerLeave",v="onPointerEnter",y="pointer"),k=E==null?g:Us(E),T=x==null?g:Us(x),g=new P(b,y+"leave",E,n,f),g.target=k,g.relatedTarget=T,b=null,Bi(f)===u&&(P=new P(v,y+"enter",x,n,f),P.target=T,P.relatedTarget=k,b=P),k=b,E&&x)t:{for(P=E,v=x,y=0,T=P;T;T=As(T))y++;for(T=0,b=v;b;b=As(b))T++;for(;0<y-T;)P=As(P),y--;for(;0<T-y;)v=As(v),T--;for(;y--;){if(P===v||v!==null&&P===v.alternate)break t;P=As(P),v=As(v)}P=null}else P=null;E!==null&&Yv(m,g,E,P,!1),x!==null&&k!==null&&Yv(m,k,x,P,!0)}}e:{if(g=u?Us(u):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var j=SR;else if(zv(g))if(Bw)j=AR;else{j=xR;var M=CR}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=RR);if(j&&(j=j(t,u))){Uw(m,j,n,f);break e}M&&M(t,g,u),t==="focusout"&&(M=g._wrapperState)&&M.controlled&&g.type==="number"&&Tf(g,"number",g.value)}switch(M=u?Us(u):window,t){case"focusin":(zv(M)||M.contentEditable==="true")&&(Vs=M,Of=u,Ra=null);break;case"focusout":Ra=Of=Vs=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,Gv(m,n,f);break;case"selectionchange":if(NR)break;case"keydown":case"keyup":Gv(m,n,f)}var S;if(Im)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Ms?Vw(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(Mw&&n.locale!=="ko"&&(Ms||w!=="onCompositionStart"?w==="onCompositionEnd"&&Ms&&(S=jw()):(Yr=f,wm="value"in Yr?Yr.value:Yr.textContent,Ms=!0)),M=au(u,w),0<M.length&&(w=new Vv(w,t,null,n,f),m.push({event:w,listeners:M}),S?w.data=S:(S=Fw(n),S!==null&&(w.data=S)))),(S=_R?wR(t,n):ER(t,n))&&(u=au(u,"onBeforeInput"),0<u.length&&(f=new Vv("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=S))}Xw(m,e)})}function Qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function au(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=za(t,n),s!=null&&r.unshift(Qa(t,s,i)),s=za(t,e),s!=null&&r.push(Qa(t,s,i))),t=t.return}return r}function As(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=za(n,s),c!=null&&o.unshift(Qa(n,c,a))):i||(c=za(n,s),c!=null&&o.push(Qa(n,c,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var LR=/\r\n?/g,jR=/\u0000|\uFFFD/g;function Xv(t){return(typeof t=="string"?t:""+t).replace(LR,`
`).replace(jR,"")}function pc(t,e,n){if(e=Xv(e),Xv(t)!==e&&n)throw Error(U(425))}function lu(){}var jf=null,Mf=null;function Vf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,MR=typeof clearTimeout=="function"?clearTimeout:void 0,Jv=typeof Promise=="function"?Promise:void 0,VR=typeof queueMicrotask=="function"?queueMicrotask:typeof Jv<"u"?function(t){return Jv.resolve(null).then(t).catch(FR)}:Ff;function FR(t){setTimeout(function(){throw t})}function kh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ha(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ha(e)}function ii(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Po=Math.random().toString(36).slice(2),Bn="__reactFiber$"+Po,Ya="__reactProps$"+Po,_r="__reactContainer$"+Po,Uf="__reactEvents$"+Po,UR="__reactListeners$"+Po,BR="__reactHandles$"+Po;function Bi(t){var e=t[Bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_r]||n[Bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zv(t);t!==null;){if(n=t[Bn])return n;t=Zv(t)}return e}t=n,n=t.parentNode}return null}function _l(t){return t=t[Bn]||t[_r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function td(t){return t[Ya]||null}var Bf=[],Bs=-1;function Si(t){return{current:t}}function je(t){0>Bs||(t.current=Bf[Bs],Bf[Bs]=null,Bs--)}function ke(t,e){Bs++,Bf[Bs]=t.current,t.current=e}var pi={},Vt=Si(pi),Xt=Si(!1),Ji=pi;function co(t,e){var n=t.type.contextTypes;if(!n)return pi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Jt(t){return t=t.childContextTypes,t!=null}function cu(){je(Xt),je(Vt)}function e_(t,e,n){if(Vt.current!==pi)throw Error(U(168));ke(Vt,e),ke(Xt,n)}function Zw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,Cx(t)||"Unknown",i));return He({},n,r)}function uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pi,Ji=Vt.current,ke(Vt,t),ke(Xt,Xt.current),!0}function t_(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Zw(t,e,Ji),r.__reactInternalMemoizedMergedChildContext=t,je(Xt),je(Vt),ke(Vt,t)):je(Xt),ke(Xt,n)}var cr=null,nd=!1,Ph=!1;function eE(t){cr===null?cr=[t]:cr.push(t)}function zR(t){nd=!0,eE(t)}function Ci(){if(!Ph&&cr!==null){Ph=!0;var t=0,e=Se;try{var n=cr;for(Se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cr=null,nd=!1}catch(i){throw cr!==null&&(cr=cr.slice(t+1)),Cw(gm,Ci),i}finally{Se=e,Ph=!1}}return null}var zs=[],$s=0,du=null,hu=0,yn=[],vn=0,Zi=null,ur=1,dr="";function Li(t,e){zs[$s++]=hu,zs[$s++]=du,du=t,hu=e}function tE(t,e,n){yn[vn++]=ur,yn[vn++]=dr,yn[vn++]=Zi,Zi=t;var r=ur;t=dr;var i=32-Dn(r)-1;r&=~(1<<i),n+=1;var s=32-Dn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ur=1<<32-Dn(e)+i|n<<i|r,dr=s+t}else ur=1<<s|n<<i|r,dr=t}function Cm(t){t.return!==null&&(Li(t,1),tE(t,1,0))}function xm(t){for(;t===du;)du=zs[--$s],zs[$s]=null,hu=zs[--$s],zs[$s]=null;for(;t===Zi;)Zi=yn[--vn],yn[vn]=null,dr=yn[--vn],yn[vn]=null,ur=yn[--vn],yn[vn]=null}var on=null,rn=null,Be=!1,Nn=null;function nE(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function n_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,rn=ii(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zi!==null?{id:ur,overflow:dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,rn=null,!0):!1;default:return!1}}function zf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $f(t){if(Be){var e=rn;if(e){var n=e;if(!n_(t,e)){if(zf(t))throw Error(U(418));e=ii(n.nextSibling);var r=on;e&&n_(t,e)?nE(r,n):(t.flags=t.flags&-4097|2,Be=!1,on=t)}}else{if(zf(t))throw Error(U(418));t.flags=t.flags&-4097|2,Be=!1,on=t}}}function r_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function mc(t){if(t!==on)return!1;if(!Be)return r_(t),Be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vf(t.type,t.memoizedProps)),e&&(e=rn)){if(zf(t))throw rE(),Error(U(418));for(;e;)nE(t,e),e=ii(e.nextSibling)}if(r_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rn=ii(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rn=null}}else rn=on?ii(t.stateNode.nextSibling):null;return!0}function rE(){for(var t=rn;t;)t=ii(t.nextSibling)}function uo(){rn=on=null,Be=!1}function Rm(t){Nn===null?Nn=[t]:Nn.push(t)}var $R=Pr.ReactCurrentBatchConfig;function sa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function gc(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function i_(t){var e=t._init;return e(t._payload)}function iE(t){function e(v,y){if(t){var T=v.deletions;T===null?(v.deletions=[y],v.flags|=16):T.push(y)}}function n(v,y){if(!t)return null;for(;y!==null;)e(v,y),y=y.sibling;return null}function r(v,y){for(v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function i(v,y){return v=li(v,y),v.index=0,v.sibling=null,v}function s(v,y,T){return v.index=T,t?(T=v.alternate,T!==null?(T=T.index,T<y?(v.flags|=2,y):T):(v.flags|=2,y)):(v.flags|=1048576,y)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,y,T,b){return y===null||y.tag!==6?(y=Mh(T,v.mode,b),y.return=v,y):(y=i(y,T),y.return=v,y)}function c(v,y,T,b){var j=T.type;return j===js?f(v,y,T.props.children,b,T.key):y!==null&&(y.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ur&&i_(j)===y.type)?(b=i(y,T.props),b.ref=sa(v,y,T),b.return=v,b):(b=zc(T.type,T.key,T.props,null,v.mode,b),b.ref=sa(v,y,T),b.return=v,b)}function u(v,y,T,b){return y===null||y.tag!==4||y.stateNode.containerInfo!==T.containerInfo||y.stateNode.implementation!==T.implementation?(y=Vh(T,v.mode,b),y.return=v,y):(y=i(y,T.children||[]),y.return=v,y)}function f(v,y,T,b,j){return y===null||y.tag!==7?(y=qi(T,v.mode,b,j),y.return=v,y):(y=i(y,T),y.return=v,y)}function m(v,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Mh(""+y,v.mode,T),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case sc:return T=zc(y.type,y.key,y.props,null,v.mode,T),T.ref=sa(v,null,y),T.return=v,T;case Ls:return y=Vh(y,v.mode,T),y.return=v,y;case Ur:var b=y._init;return m(v,b(y._payload),T)}if(da(y)||ea(y))return y=qi(y,v.mode,T,null),y.return=v,y;gc(v,y)}return null}function g(v,y,T,b){var j=y!==null?y.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return j!==null?null:a(v,y,""+T,b);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case sc:return T.key===j?c(v,y,T,b):null;case Ls:return T.key===j?u(v,y,T,b):null;case Ur:return j=T._init,g(v,y,j(T._payload),b)}if(da(T)||ea(T))return j!==null?null:f(v,y,T,b,null);gc(v,T)}return null}function E(v,y,T,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return v=v.get(T)||null,a(y,v,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case sc:return v=v.get(b.key===null?T:b.key)||null,c(y,v,b,j);case Ls:return v=v.get(b.key===null?T:b.key)||null,u(y,v,b,j);case Ur:var M=b._init;return E(v,y,T,M(b._payload),j)}if(da(b)||ea(b))return v=v.get(T)||null,f(y,v,b,j,null);gc(y,b)}return null}function x(v,y,T,b){for(var j=null,M=null,S=y,w=y=0,C=null;S!==null&&w<T.length;w++){S.index>w?(C=S,S=null):C=S.sibling;var R=g(v,S,T[w],b);if(R===null){S===null&&(S=C);break}t&&S&&R.alternate===null&&e(v,S),y=s(R,y,w),M===null?j=R:M.sibling=R,M=R,S=C}if(w===T.length)return n(v,S),Be&&Li(v,w),j;if(S===null){for(;w<T.length;w++)S=m(v,T[w],b),S!==null&&(y=s(S,y,w),M===null?j=S:M.sibling=S,M=S);return Be&&Li(v,w),j}for(S=r(v,S);w<T.length;w++)C=E(S,v,w,T[w],b),C!==null&&(t&&C.alternate!==null&&S.delete(C.key===null?w:C.key),y=s(C,y,w),M===null?j=C:M.sibling=C,M=C);return t&&S.forEach(function(N){return e(v,N)}),Be&&Li(v,w),j}function P(v,y,T,b){var j=ea(T);if(typeof j!="function")throw Error(U(150));if(T=j.call(T),T==null)throw Error(U(151));for(var M=j=null,S=y,w=y=0,C=null,R=T.next();S!==null&&!R.done;w++,R=T.next()){S.index>w?(C=S,S=null):C=S.sibling;var N=g(v,S,R.value,b);if(N===null){S===null&&(S=C);break}t&&S&&N.alternate===null&&e(v,S),y=s(N,y,w),M===null?j=N:M.sibling=N,M=N,S=C}if(R.done)return n(v,S),Be&&Li(v,w),j;if(S===null){for(;!R.done;w++,R=T.next())R=m(v,R.value,b),R!==null&&(y=s(R,y,w),M===null?j=R:M.sibling=R,M=R);return Be&&Li(v,w),j}for(S=r(v,S);!R.done;w++,R=T.next())R=E(S,v,w,R.value,b),R!==null&&(t&&R.alternate!==null&&S.delete(R.key===null?w:R.key),y=s(R,y,w),M===null?j=R:M.sibling=R,M=R);return t&&S.forEach(function(D){return e(v,D)}),Be&&Li(v,w),j}function k(v,y,T,b){if(typeof T=="object"&&T!==null&&T.type===js&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case sc:e:{for(var j=T.key,M=y;M!==null;){if(M.key===j){if(j=T.type,j===js){if(M.tag===7){n(v,M.sibling),y=i(M,T.props.children),y.return=v,v=y;break e}}else if(M.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ur&&i_(j)===M.type){n(v,M.sibling),y=i(M,T.props),y.ref=sa(v,M,T),y.return=v,v=y;break e}n(v,M);break}else e(v,M);M=M.sibling}T.type===js?(y=qi(T.props.children,v.mode,b,T.key),y.return=v,v=y):(b=zc(T.type,T.key,T.props,null,v.mode,b),b.ref=sa(v,y,T),b.return=v,v=b)}return o(v);case Ls:e:{for(M=T.key;y!==null;){if(y.key===M)if(y.tag===4&&y.stateNode.containerInfo===T.containerInfo&&y.stateNode.implementation===T.implementation){n(v,y.sibling),y=i(y,T.children||[]),y.return=v,v=y;break e}else{n(v,y);break}else e(v,y);y=y.sibling}y=Vh(T,v.mode,b),y.return=v,v=y}return o(v);case Ur:return M=T._init,k(v,y,M(T._payload),b)}if(da(T))return x(v,y,T,b);if(ea(T))return P(v,y,T,b);gc(v,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,y!==null&&y.tag===6?(n(v,y.sibling),y=i(y,T),y.return=v,v=y):(n(v,y),y=Mh(T,v.mode,b),y.return=v,v=y),o(v)):n(v,y)}return k}var ho=iE(!0),sE=iE(!1),fu=Si(null),pu=null,Ws=null,Am=null;function km(){Am=Ws=pu=null}function Pm(t){var e=fu.current;je(fu),t._currentValue=e}function Wf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function to(t,e){pu=t,Am=Ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Yt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(Am!==t)if(t={context:t,memoizedValue:e,next:null},Ws===null){if(pu===null)throw Error(U(308));Ws=t,pu.dependencies={lanes:0,firstContext:t}}else Ws=Ws.next=t;return e}var zi=null;function Nm(t){zi===null?zi=[t]:zi.push(t)}function oE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Nm(e)):(n.next=i.next,i.next=n),e.interleaved=n,wr(t,r)}function wr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Br=!1;function bm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function aE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function si(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wr(t,n)}return i=r.interleaved,i===null?(e.next=e,Nm(r)):(e.next=i.next,i.next=e),r.interleaved=e,wr(t,n)}function jc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ym(t,n)}}function s_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function mu(t,e,n,r){var i=t.updateQueue;Br=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=c))}if(s!==null){var m=i.baseState;o=0,f=u=c=null,a=s;do{var g=a.lane,E=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,P=a;switch(g=e,E=n,P.tag){case 1:if(x=P.payload,typeof x=="function"){m=x.call(E,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=P.payload,g=typeof x=="function"?x.call(E,m,g):x,g==null)break e;m=He({},m,g);break e;case 2:Br=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else E={eventTime:E,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=E,c=m):f=f.next=E,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=m}}function o_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var wl={},Yn=Si(wl),Xa=Si(wl),Ja=Si(wl);function $i(t){if(t===wl)throw Error(U(174));return t}function Dm(t,e){switch(ke(Ja,e),ke(Xa,t),ke(Yn,wl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sf(e,t)}je(Yn),ke(Yn,e)}function fo(){je(Yn),je(Xa),je(Ja)}function lE(t){$i(Ja.current);var e=$i(Yn.current),n=Sf(e,t.type);e!==n&&(ke(Xa,t),ke(Yn,n))}function Om(t){Xa.current===t&&(je(Yn),je(Xa))}var $e=Si(0);function gu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nh=[];function Lm(){for(var t=0;t<Nh.length;t++)Nh[t]._workInProgressVersionPrimary=null;Nh.length=0}var Mc=Pr.ReactCurrentDispatcher,bh=Pr.ReactCurrentBatchConfig,es=0,We=null,ht=null,yt=null,yu=!1,Aa=!1,Za=0,WR=0;function Nt(){throw Error(U(321))}function jm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ln(t[n],e[n]))return!1;return!0}function Mm(t,e,n,r,i,s){if(es=s,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Mc.current=t===null||t.memoizedState===null?KR:QR,t=n(r,i),Aa){s=0;do{if(Aa=!1,Za=0,25<=s)throw Error(U(301));s+=1,yt=ht=null,e.updateQueue=null,Mc.current=YR,t=n(r,i)}while(Aa)}if(Mc.current=vu,e=ht!==null&&ht.next!==null,es=0,yt=ht=We=null,yu=!1,e)throw Error(U(300));return t}function Vm(){var t=Za!==0;return Za=0,t}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?We.memoizedState=yt=t:yt=yt.next=t,yt}function In(){if(ht===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=ht.next;var e=yt===null?We.memoizedState:yt.next;if(e!==null)yt=e,ht=t;else{if(t===null)throw Error(U(310));ht=t,t={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},yt===null?We.memoizedState=yt=t:yt=yt.next=t}return yt}function el(t,e){return typeof e=="function"?e(t):e}function Dh(t){var e=In(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=ht,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,c=null,u=s;do{var f=u.lane;if((es&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=m,o=r):c=c.next=m,We.lanes|=f,ts|=f}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=a,Ln(r,e.memoizedState)||(Yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,We.lanes|=s,ts|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Oh(t){var e=In(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ln(s,e.memoizedState)||(Yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function cE(){}function uE(t,e){var n=We,r=In(),i=e(),s=!Ln(r.memoizedState,i);if(s&&(r.memoizedState=i,Yt=!0),r=r.queue,Fm(fE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,tl(9,hE.bind(null,n,r,i,e),void 0,null),vt===null)throw Error(U(349));es&30||dE(n,e,i)}return i}function dE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hE(t,e,n,r){e.value=n,e.getSnapshot=r,pE(e)&&mE(t)}function fE(t,e,n){return n(function(){pE(e)&&mE(t)})}function pE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ln(t,n)}catch{return!0}}function mE(t){var e=wr(t,1);e!==null&&On(e,t,1,-1)}function a_(t){var e=Fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:t},e.queue=t,t=t.dispatch=GR.bind(null,We,t),[e.memoizedState,t]}function tl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function gE(){return In().memoizedState}function Vc(t,e,n,r){var i=Fn();We.flags|=t,i.memoizedState=tl(1|e,n,void 0,r===void 0?null:r)}function rd(t,e,n,r){var i=In();r=r===void 0?null:r;var s=void 0;if(ht!==null){var o=ht.memoizedState;if(s=o.destroy,r!==null&&jm(r,o.deps)){i.memoizedState=tl(e,n,s,r);return}}We.flags|=t,i.memoizedState=tl(1|e,n,s,r)}function l_(t,e){return Vc(8390656,8,t,e)}function Fm(t,e){return rd(2048,8,t,e)}function yE(t,e){return rd(4,2,t,e)}function vE(t,e){return rd(4,4,t,e)}function _E(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wE(t,e,n){return n=n!=null?n.concat([t]):null,rd(4,4,_E.bind(null,e,t),n)}function Um(){}function EE(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function TE(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function IE(t,e,n){return es&21?(Ln(n,e)||(n=Aw(),We.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Yt=!0),t.memoizedState=n)}function HR(t,e){var n=Se;Se=n!==0&&4>n?n:4,t(!0);var r=bh.transition;bh.transition={};try{t(!1),e()}finally{Se=n,bh.transition=r}}function SE(){return In().memoizedState}function qR(t,e,n){var r=ai(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},CE(t))xE(e,n);else if(n=oE(t,e,n,r),n!==null){var i=Wt();On(n,t,r,i),RE(n,e,r)}}function GR(t,e,n){var r=ai(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(CE(t))xE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ln(a,o)){var c=e.interleaved;c===null?(i.next=i,Nm(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=oE(t,e,i,r),n!==null&&(i=Wt(),On(n,t,r,i),RE(n,e,r))}}function CE(t){var e=t.alternate;return t===We||e!==null&&e===We}function xE(t,e){Aa=yu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function RE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ym(t,n)}}var vu={readContext:Tn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},KR={readContext:Tn,useCallback:function(t,e){return Fn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:l_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vc(4194308,4,_E.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vc(4,2,t,e)},useMemo:function(t,e){var n=Fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qR.bind(null,We,t),[r.memoizedState,t]},useRef:function(t){var e=Fn();return t={current:t},e.memoizedState=t},useState:a_,useDebugValue:Um,useDeferredValue:function(t){return Fn().memoizedState=t},useTransition:function(){var t=a_(!1),e=t[0];return t=HR.bind(null,t[1]),Fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=We,i=Fn();if(Be){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),vt===null)throw Error(U(349));es&30||dE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,l_(fE.bind(null,r,s,t),[t]),r.flags|=2048,tl(9,hE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Fn(),e=vt.identifierPrefix;if(Be){var n=dr,r=ur;n=(r&~(1<<32-Dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Za++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=WR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QR={readContext:Tn,useCallback:EE,useContext:Tn,useEffect:Fm,useImperativeHandle:wE,useInsertionEffect:yE,useLayoutEffect:vE,useMemo:TE,useReducer:Dh,useRef:gE,useState:function(){return Dh(el)},useDebugValue:Um,useDeferredValue:function(t){var e=In();return IE(e,ht.memoizedState,t)},useTransition:function(){var t=Dh(el)[0],e=In().memoizedState;return[t,e]},useMutableSource:cE,useSyncExternalStore:uE,useId:SE,unstable_isNewReconciler:!1},YR={readContext:Tn,useCallback:EE,useContext:Tn,useEffect:Fm,useImperativeHandle:wE,useInsertionEffect:yE,useLayoutEffect:vE,useMemo:TE,useReducer:Oh,useRef:gE,useState:function(){return Oh(el)},useDebugValue:Um,useDeferredValue:function(t){var e=In();return ht===null?e.memoizedState=t:IE(e,ht.memoizedState,t)},useTransition:function(){var t=Oh(el)[0],e=In().memoizedState;return[t,e]},useMutableSource:cE,useSyncExternalStore:uE,useId:SE,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=He({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:He({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var id={isMounted:function(t){return(t=t._reactInternals)?ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Wt(),i=ai(t),s=mr(r,i);s.payload=e,n!=null&&(s.callback=n),e=si(t,s,i),e!==null&&(On(e,t,i,r),jc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Wt(),i=ai(t),s=mr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=si(t,s,i),e!==null&&(On(e,t,i,r),jc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),r=ai(t),i=mr(n,r);i.tag=2,e!=null&&(i.callback=e),e=si(t,i,r),e!==null&&(On(e,t,r,n),jc(e,t,r))}};function c_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ga(n,r)||!Ga(i,s):!0}function AE(t,e,n){var r=!1,i=pi,s=e.contextType;return typeof s=="object"&&s!==null?s=Tn(s):(i=Jt(e)?Ji:Vt.current,r=e.contextTypes,s=(r=r!=null)?co(t,i):pi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=id,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function u_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&id.enqueueReplaceState(e,e.state,null)}function qf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},bm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Tn(s):(s=Jt(e)?Ji:Vt.current,i.context=co(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&id.enqueueReplaceState(i,i.state,null),mu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function po(t,e){try{var n="",r=e;do n+=Sx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Lh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XR=typeof WeakMap=="function"?WeakMap:Map;function kE(t,e,n){n=mr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wu||(wu=!0,rp=r),Gf(t,e)},n}function PE(t,e,n){n=mr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gf(t,e),typeof r!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function d_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new XR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=dA.bind(null,t,e,n),e.then(t,t))}function h_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function f_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mr(-1,1),e.tag=2,si(n,e,1))),n.lanes|=1),t)}var JR=Pr.ReactCurrentOwner,Yt=!1;function zt(t,e,n,r){e.child=t===null?sE(e,null,n,r):ho(e,t.child,n,r)}function p_(t,e,n,r,i){n=n.render;var s=e.ref;return to(e,i),r=Mm(t,e,n,r,s,i),n=Vm(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(Be&&n&&Cm(e),e.flags|=1,zt(t,e,r,i),e.child)}function m_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Km(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,NE(t,e,s,r,i)):(t=zc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ga,n(o,r)&&t.ref===e.ref)return Er(t,e,i)}return e.flags|=1,t=li(s,r),t.ref=e.ref,t.return=e,e.child=t}function NE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ga(s,r)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,Er(t,e,i)}return Kf(t,e,n,r,i)}function bE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(qs,nn),nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(qs,nn),nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ke(qs,nn),nn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ke(qs,nn),nn|=r;return zt(t,e,i,n),e.child}function DE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kf(t,e,n,r,i){var s=Jt(n)?Ji:Vt.current;return s=co(e,s),to(e,i),n=Mm(t,e,n,r,s,i),r=Vm(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(Be&&r&&Cm(e),e.flags|=1,zt(t,e,n,i),e.child)}function g_(t,e,n,r,i){if(Jt(n)){var s=!0;uu(e)}else s=!1;if(to(e,i),e.stateNode===null)Fc(t,e),AE(e,n,r),qf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Tn(u):(u=Jt(n)?Ji:Vt.current,u=co(e,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||c!==u)&&u_(e,o,r,u),Br=!1;var g=e.memoizedState;o.state=g,mu(e,r,o,i),c=e.memoizedState,a!==r||g!==c||Xt.current||Br?(typeof f=="function"&&(Hf(e,n,f,r),c=e.memoizedState),(a=Br||c_(e,n,a,r,g,c,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,aE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:kn(e.type,a),o.props=u,m=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Tn(c):(c=Jt(n)?Ji:Vt.current,c=co(e,c));var E=n.getDerivedStateFromProps;(f=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||g!==c)&&u_(e,o,r,c),Br=!1,g=e.memoizedState,o.state=g,mu(e,r,o,i);var x=e.memoizedState;a!==m||g!==x||Xt.current||Br?(typeof E=="function"&&(Hf(e,n,E,r),x=e.memoizedState),(u=Br||c_(e,n,u,r,g,x,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Qf(t,e,n,r,s,i)}function Qf(t,e,n,r,i,s){DE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&t_(e,n,!1),Er(t,e,s);r=e.stateNode,JR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ho(e,t.child,null,s),e.child=ho(e,null,a,s)):zt(t,e,a,s),e.memoizedState=r.state,i&&t_(e,n,!0),e.child}function OE(t){var e=t.stateNode;e.pendingContext?e_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&e_(t,e.context,!1),Dm(t,e.containerInfo)}function y_(t,e,n,r,i){return uo(),Rm(i),e.flags|=256,zt(t,e,n,r),e.child}var Yf={dehydrated:null,treeContext:null,retryLane:0};function Xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function LE(t,e,n){var r=e.pendingProps,i=$e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ke($e,i&1),t===null)return $f(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ad(o,r,0,null),t=qi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xf(n),e.memoizedState=Yf,t):Bm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ZR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=li(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=li(a,s):(s=qi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yf,r}return s=t.child,t=s.sibling,r=li(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Bm(t,e){return e=ad({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yc(t,e,n,r){return r!==null&&Rm(r),ho(e,t.child,null,n),t=Bm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Lh(Error(U(422))),yc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ad({mode:"visible",children:r.children},i,0,null),s=qi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ho(e,t.child,null,o),e.child.memoizedState=Xf(o),e.memoizedState=Yf,s);if(!(e.mode&1))return yc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=Lh(s,r,void 0),yc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Yt||a){if(r=vt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wr(t,i),On(r,t,i,-1))}return Gm(),r=Lh(Error(U(421))),yc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,rn=ii(i.nextSibling),on=e,Be=!0,Nn=null,t!==null&&(yn[vn++]=ur,yn[vn++]=dr,yn[vn++]=Zi,ur=t.id,dr=t.overflow,Zi=e),e=Bm(e,r.children),e.flags|=4096,e)}function v_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wf(t.return,e,n)}function jh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(zt(t,e,r.children,n),r=$e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&v_(t,n,e);else if(t.tag===19)v_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke($e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&gu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),jh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&gu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}jh(e,!0,n,null,s);break;case"together":jh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=li(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=li(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eA(t,e,n){switch(e.tag){case 3:OE(e),uo();break;case 5:lE(e);break;case 1:Jt(e.type)&&uu(e);break;case 4:Dm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ke(fu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke($e,$e.current&1),e.flags|=128,null):n&e.child.childLanes?LE(t,e,n):(ke($e,$e.current&1),t=Er(t,e,n),t!==null?t.sibling:null);ke($e,$e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return jE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke($e,$e.current),r)break;return null;case 22:case 23:return e.lanes=0,bE(t,e,n)}return Er(t,e,n)}var ME,Jf,VE,FE;ME=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jf=function(){};VE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$i(Yn.current);var s=null;switch(n){case"input":i=wf(t,i),r=wf(t,r),s=[];break;case"select":i=He({},i,{value:void 0}),r=He({},r,{value:void 0}),s=[];break;case"textarea":i=If(t,i),r=If(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=lu)}Cf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&be("scroll",t),s||a===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};FE=function(t,e,n,r){n!==r&&(e.flags|=4)};function oa(t,e){if(!Be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tA(t,e,n){var r=e.pendingProps;switch(xm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(e),null;case 1:return Jt(e.type)&&cu(),bt(e),null;case 3:return r=e.stateNode,fo(),je(Xt),je(Vt),Lm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(mc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(op(Nn),Nn=null))),Jf(t,e),bt(e),null;case 5:Om(e);var i=$i(Ja.current);if(n=e.type,t!==null&&e.stateNode!=null)VE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return bt(e),null}if(t=$i(Yn.current),mc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Bn]=e,r[Ya]=s,t=(e.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<fa.length;i++)be(fa[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":Rv(r,s),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},be("invalid",r);break;case"textarea":kv(r,s),be("invalid",r)}Cf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&pc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&pc(r.textContent,a,t),i=["children",""+a]):Ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":oc(r),Av(r,s,!0);break;case"textarea":oc(r),Pv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=lu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Bn]=e,t[Ya]=r,ME(t,e,!1,!1),e.stateNode=t;e:{switch(o=xf(n,r),n){case"dialog":be("cancel",t),be("close",t),i=r;break;case"iframe":case"object":case"embed":be("load",t),i=r;break;case"video":case"audio":for(i=0;i<fa.length;i++)be(fa[i],t);i=r;break;case"source":be("error",t),i=r;break;case"img":case"image":case"link":be("error",t),be("load",t),i=r;break;case"details":be("toggle",t),i=r;break;case"input":Rv(t,r),i=wf(t,r),be("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=He({},r,{value:void 0}),be("invalid",t);break;case"textarea":kv(t,r),i=If(t,r),be("invalid",t);break;default:i=r}Cf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?gw(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&pw(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ba(t,c):typeof c=="number"&&Ba(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ua.hasOwnProperty(s)?c!=null&&s==="onScroll"&&be("scroll",t):c!=null&&dm(t,s,c,o))}switch(n){case"input":oc(t),Av(t,r,!1);break;case"textarea":oc(t),Pv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Xs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Xs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=lu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return bt(e),null;case 6:if(t&&e.stateNode!=null)FE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=$i(Ja.current),$i(Yn.current),mc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Bn]=e,(s=r.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:pc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bn]=e,e.stateNode=r}return bt(e),null;case 13:if(je($e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Be&&rn!==null&&e.mode&1&&!(e.flags&128))rE(),uo(),e.flags|=98560,s=!1;else if(s=mc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Bn]=e}else uo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;bt(e),s=!1}else Nn!==null&&(op(Nn),Nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||$e.current&1?ft===0&&(ft=3):Gm())),e.updateQueue!==null&&(e.flags|=4),bt(e),null);case 4:return fo(),Jf(t,e),t===null&&Ka(e.stateNode.containerInfo),bt(e),null;case 10:return Pm(e.type._context),bt(e),null;case 17:return Jt(e.type)&&cu(),bt(e),null;case 19:if(je($e),s=e.memoizedState,s===null)return bt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)oa(s,!1);else{if(ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=gu(t),o!==null){for(e.flags|=128,oa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke($e,$e.current&1|2),e.child}t=t.sibling}s.tail!==null&&it()>mo&&(e.flags|=128,r=!0,oa(s,!1),e.lanes=4194304)}else{if(!r)if(t=gu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Be)return bt(e),null}else 2*it()-s.renderingStartTime>mo&&n!==1073741824&&(e.flags|=128,r=!0,oa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=it(),e.sibling=null,n=$e.current,ke($e,r?n&1|2:n&1),e):(bt(e),null);case 22:case 23:return qm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?nn&1073741824&&(bt(e),e.subtreeFlags&6&&(e.flags|=8192)):bt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function nA(t,e){switch(xm(e),e.tag){case 1:return Jt(e.type)&&cu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fo(),je(Xt),je(Vt),Lm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Om(e),null;case 13:if(je($e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));uo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je($e),null;case 4:return fo(),null;case 10:return Pm(e.type._context),null;case 22:case 23:return qm(),null;case 24:return null;default:return null}}var vc=!1,Lt=!1,rA=typeof WeakSet=="function"?WeakSet:Set,W=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Qe(t,e,r)}else n.current=null}function Zf(t,e,n){try{n()}catch(r){Qe(t,e,r)}}var __=!1;function iA(t,e){if(jf=su,t=Ww(),Sm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,u=0,f=0,m=t,g=null;t:for(;;){for(var E;m!==n||i!==0&&m.nodeType!==3||(a=o+i),m!==s||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(E=m.firstChild)!==null;)g=m,m=E;for(;;){if(m===t)break t;if(g===n&&++u===i&&(a=o),g===s&&++f===r&&(c=o),(E=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=E}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mf={focusedElem:t,selectionRange:n},su=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var P=x.memoizedProps,k=x.memoizedState,v=e.stateNode,y=v.getSnapshotBeforeUpdate(e.elementType===e.type?P:kn(e.type,P),k);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(b){Qe(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return x=__,__=!1,x}function ka(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zf(e,n,s)}i=i.next}while(i!==r)}}function sd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ep(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function UE(t){var e=t.alternate;e!==null&&(t.alternate=null,UE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bn],delete e[Ya],delete e[Uf],delete e[UR],delete e[BR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function BE(t){return t.tag===5||t.tag===3||t.tag===4}function w_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||BE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=lu));else if(r!==4&&(t=t.child,t!==null))for(tp(t,e,n),t=t.sibling;t!==null;)tp(t,e,n),t=t.sibling}function np(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(np(t,e,n),t=t.sibling;t!==null;)np(t,e,n),t=t.sibling}var wt=null,Pn=!1;function Mr(t,e,n){for(n=n.child;n!==null;)zE(t,e,n),n=n.sibling}function zE(t,e,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(Xu,n)}catch{}switch(n.tag){case 5:Lt||Hs(n,e);case 6:var r=wt,i=Pn;wt=null,Mr(t,e,n),wt=r,Pn=i,wt!==null&&(Pn?(t=wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):wt.removeChild(n.stateNode));break;case 18:wt!==null&&(Pn?(t=wt,n=n.stateNode,t.nodeType===8?kh(t.parentNode,n):t.nodeType===1&&kh(t,n),Ha(t)):kh(wt,n.stateNode));break;case 4:r=wt,i=Pn,wt=n.stateNode.containerInfo,Pn=!0,Mr(t,e,n),wt=r,Pn=i;break;case 0:case 11:case 14:case 15:if(!Lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zf(n,e,o),i=i.next}while(i!==r)}Mr(t,e,n);break;case 1:if(!Lt&&(Hs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Qe(n,e,a)}Mr(t,e,n);break;case 21:Mr(t,e,n);break;case 22:n.mode&1?(Lt=(r=Lt)||n.memoizedState!==null,Mr(t,e,n),Lt=r):Mr(t,e,n);break;default:Mr(t,e,n)}}function E_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rA),e.forEach(function(r){var i=fA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:wt=a.stateNode,Pn=!1;break e;case 3:wt=a.stateNode.containerInfo,Pn=!0;break e;case 4:wt=a.stateNode.containerInfo,Pn=!0;break e}a=a.return}if(wt===null)throw Error(U(160));zE(s,o,i),wt=null,Pn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Qe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$E(e,t),e=e.sibling}function $E(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),Vn(t),r&4){try{ka(3,t,t.return),sd(3,t)}catch(P){Qe(t,t.return,P)}try{ka(5,t,t.return)}catch(P){Qe(t,t.return,P)}}break;case 1:An(e,t),Vn(t),r&512&&n!==null&&Hs(n,n.return);break;case 5:if(An(e,t),Vn(t),r&512&&n!==null&&Hs(n,n.return),t.flags&32){var i=t.stateNode;try{Ba(i,"")}catch(P){Qe(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&dw(i,s),xf(a,o);var u=xf(a,s);for(o=0;o<c.length;o+=2){var f=c[o],m=c[o+1];f==="style"?gw(i,m):f==="dangerouslySetInnerHTML"?pw(i,m):f==="children"?Ba(i,m):dm(i,f,m,u)}switch(a){case"input":Ef(i,s);break;case"textarea":hw(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Xs(i,!!s.multiple,E,!1):g!==!!s.multiple&&(s.defaultValue!=null?Xs(i,!!s.multiple,s.defaultValue,!0):Xs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ya]=s}catch(P){Qe(t,t.return,P)}}break;case 6:if(An(e,t),Vn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Qe(t,t.return,P)}}break;case 3:if(An(e,t),Vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ha(e.containerInfo)}catch(P){Qe(t,t.return,P)}break;case 4:An(e,t),Vn(t);break;case 13:An(e,t),Vn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wm=it())),r&4&&E_(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Lt=(u=Lt)||f,An(e,t),Lt=u):An(e,t),Vn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(m=W=f;W!==null;){switch(g=W,E=g.child,g.tag){case 0:case 11:case 14:case 15:ka(4,g,g.return);break;case 1:Hs(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(P){Qe(r,n,P)}}break;case 5:Hs(g,g.return);break;case 22:if(g.memoizedState!==null){I_(m);continue}}E!==null?(E.return=g,W=E):I_(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=mw("display",o))}catch(P){Qe(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(P){Qe(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:An(e,t),Vn(t),r&4&&E_(t);break;case 21:break;default:An(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(BE(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ba(i,""),r.flags&=-33);var s=w_(t);np(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=w_(t);tp(t,a,o);break;default:throw Error(U(161))}}catch(c){Qe(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sA(t,e,n){W=t,WE(t)}function WE(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vc;if(!o){var a=i.alternate,c=a!==null&&a.memoizedState!==null||Lt;a=vc;var u=Lt;if(vc=o,(Lt=c)&&!u)for(W=i;W!==null;)o=W,c=o.child,o.tag===22&&o.memoizedState!==null?S_(i):c!==null?(c.return=o,W=c):S_(i);for(;s!==null;)W=s,WE(s),s=s.sibling;W=i,vc=a,Lt=u}T_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):T_(t)}}function T_(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Lt||sd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&o_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}o_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Ha(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Lt||e.flags&512&&ep(e)}catch(g){Qe(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function I_(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function S_(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sd(4,e)}catch(c){Qe(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Qe(e,i,c)}}var s=e.return;try{ep(e)}catch(c){Qe(e,s,c)}break;case 5:var o=e.return;try{ep(e)}catch(c){Qe(e,o,c)}}}catch(c){Qe(e,e.return,c)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var oA=Math.ceil,_u=Pr.ReactCurrentDispatcher,zm=Pr.ReactCurrentOwner,wn=Pr.ReactCurrentBatchConfig,ve=0,vt=null,ct=null,It=0,nn=0,qs=Si(0),ft=0,nl=null,ts=0,od=0,$m=0,Pa=null,Kt=null,Wm=0,mo=1/0,lr=null,wu=!1,rp=null,oi=null,_c=!1,Xr=null,Eu=0,Na=0,ip=null,Uc=-1,Bc=0;function Wt(){return ve&6?it():Uc!==-1?Uc:Uc=it()}function ai(t){return t.mode&1?ve&2&&It!==0?It&-It:$R.transition!==null?(Bc===0&&(Bc=Aw()),Bc):(t=Se,t!==0||(t=window.event,t=t===void 0?16:Lw(t.type)),t):1}function On(t,e,n,r){if(50<Na)throw Na=0,ip=null,Error(U(185));yl(t,n,r),(!(ve&2)||t!==vt)&&(t===vt&&(!(ve&2)&&(od|=n),ft===4&&Wr(t,It)),Zt(t,r),n===1&&ve===0&&!(e.mode&1)&&(mo=it()+500,nd&&Ci()))}function Zt(t,e){var n=t.callbackNode;$x(t,e);var r=iu(t,t===vt?It:0);if(r===0)n!==null&&Dv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Dv(n),e===1)t.tag===0?zR(C_.bind(null,t)):eE(C_.bind(null,t)),VR(function(){!(ve&6)&&Ci()}),n=null;else{switch(kw(r)){case 1:n=gm;break;case 4:n=xw;break;case 16:n=ru;break;case 536870912:n=Rw;break;default:n=ru}n=JE(n,HE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function HE(t,e){if(Uc=-1,Bc=0,ve&6)throw Error(U(327));var n=t.callbackNode;if(no()&&t.callbackNode!==n)return null;var r=iu(t,t===vt?It:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Tu(t,r);else{e=r;var i=ve;ve|=2;var s=GE();(vt!==t||It!==e)&&(lr=null,mo=it()+500,Hi(t,e));do try{cA();break}catch(a){qE(t,a)}while(!0);km(),_u.current=s,ve=i,ct!==null?e=0:(vt=null,It=0,e=ft)}if(e!==0){if(e===2&&(i=Nf(t),i!==0&&(r=i,e=sp(t,i))),e===1)throw n=nl,Hi(t,0),Wr(t,r),Zt(t,it()),n;if(e===6)Wr(t,r);else{if(i=t.current.alternate,!(r&30)&&!aA(i)&&(e=Tu(t,r),e===2&&(s=Nf(t),s!==0&&(r=s,e=sp(t,s))),e===1))throw n=nl,Hi(t,0),Wr(t,r),Zt(t,it()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:ji(t,Kt,lr);break;case 3:if(Wr(t,r),(r&130023424)===r&&(e=Wm+500-it(),10<e)){if(iu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ff(ji.bind(null,t,Kt,lr),e);break}ji(t,Kt,lr);break;case 4:if(Wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Dn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=it()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oA(r/1960))-r,10<r){t.timeoutHandle=Ff(ji.bind(null,t,Kt,lr),r);break}ji(t,Kt,lr);break;case 5:ji(t,Kt,lr);break;default:throw Error(U(329))}}}return Zt(t,it()),t.callbackNode===n?HE.bind(null,t):null}function sp(t,e){var n=Pa;return t.current.memoizedState.isDehydrated&&(Hi(t,e).flags|=256),t=Tu(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&op(e)),t}function op(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function aA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wr(t,e){for(e&=~$m,e&=~od,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dn(e),r=1<<n;t[n]=-1,e&=~r}}function C_(t){if(ve&6)throw Error(U(327));no();var e=iu(t,0);if(!(e&1))return Zt(t,it()),null;var n=Tu(t,e);if(t.tag!==0&&n===2){var r=Nf(t);r!==0&&(e=r,n=sp(t,r))}if(n===1)throw n=nl,Hi(t,0),Wr(t,e),Zt(t,it()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ji(t,Kt,lr),Zt(t,it()),null}function Hm(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(mo=it()+500,nd&&Ci())}}function ns(t){Xr!==null&&Xr.tag===0&&!(ve&6)&&no();var e=ve;ve|=1;var n=wn.transition,r=Se;try{if(wn.transition=null,Se=1,t)return t()}finally{Se=r,wn.transition=n,ve=e,!(ve&6)&&Ci()}}function qm(){nn=qs.current,je(qs)}function Hi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MR(n)),ct!==null)for(n=ct.return;n!==null;){var r=n;switch(xm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cu();break;case 3:fo(),je(Xt),je(Vt),Lm();break;case 5:Om(r);break;case 4:fo();break;case 13:je($e);break;case 19:je($e);break;case 10:Pm(r.type._context);break;case 22:case 23:qm()}n=n.return}if(vt=t,ct=t=li(t.current,null),It=nn=e,ft=0,nl=null,$m=od=ts=0,Kt=Pa=null,zi!==null){for(e=0;e<zi.length;e++)if(n=zi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zi=null}return t}function qE(t,e){do{var n=ct;try{if(km(),Mc.current=vu,yu){for(var r=We.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yu=!1}if(es=0,yt=ht=We=null,Aa=!1,Za=0,zm.current=null,n===null||n.return===null){ft=1,nl=e,ct=null;break}e:{var s=t,o=n.return,a=n,c=e;if(e=It,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var E=h_(o);if(E!==null){E.flags&=-257,f_(E,o,a,s,e),E.mode&1&&d_(s,u,e),e=E,c=u;var x=e.updateQueue;if(x===null){var P=new Set;P.add(c),e.updateQueue=P}else x.add(c);break e}else{if(!(e&1)){d_(s,u,e),Gm();break e}c=Error(U(426))}}else if(Be&&a.mode&1){var k=h_(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),f_(k,o,a,s,e),Rm(po(c,a));break e}}s=c=po(c,a),ft!==4&&(ft=2),Pa===null?Pa=[s]:Pa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=kE(s,c,e);s_(s,v);break e;case 1:a=c;var y=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(oi===null||!oi.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=PE(s,a,e);s_(s,b);break e}}s=s.return}while(s!==null)}QE(n)}catch(j){e=j,ct===n&&n!==null&&(ct=n=n.return);continue}break}while(!0)}function GE(){var t=_u.current;return _u.current=vu,t===null?vu:t}function Gm(){(ft===0||ft===3||ft===2)&&(ft=4),vt===null||!(ts&268435455)&&!(od&268435455)||Wr(vt,It)}function Tu(t,e){var n=ve;ve|=2;var r=GE();(vt!==t||It!==e)&&(lr=null,Hi(t,e));do try{lA();break}catch(i){qE(t,i)}while(!0);if(km(),ve=n,_u.current=r,ct!==null)throw Error(U(261));return vt=null,It=0,ft}function lA(){for(;ct!==null;)KE(ct)}function cA(){for(;ct!==null&&!Ox();)KE(ct)}function KE(t){var e=XE(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?QE(t):ct=e,zm.current=null}function QE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nA(n,e),n!==null){n.flags&=32767,ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ft=6,ct=null;return}}else if(n=tA(n,e,nn),n!==null){ct=n;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);ft===0&&(ft=5)}function ji(t,e,n){var r=Se,i=wn.transition;try{wn.transition=null,Se=1,uA(t,e,n,r)}finally{wn.transition=i,Se=r}return null}function uA(t,e,n,r){do no();while(Xr!==null);if(ve&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Wx(t,s),t===vt&&(ct=vt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_c||(_c=!0,JE(ru,function(){return no(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var o=Se;Se=1;var a=ve;ve|=4,zm.current=null,iA(t,n),$E(n,t),PR(Mf),su=!!jf,Mf=jf=null,t.current=n,sA(n),Lx(),ve=a,Se=o,wn.transition=s}else t.current=n;if(_c&&(_c=!1,Xr=t,Eu=i),s=t.pendingLanes,s===0&&(oi=null),Vx(n.stateNode),Zt(t,it()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wu)throw wu=!1,t=rp,rp=null,t;return Eu&1&&t.tag!==0&&no(),s=t.pendingLanes,s&1?t===ip?Na++:(Na=0,ip=t):Na=0,Ci(),null}function no(){if(Xr!==null){var t=kw(Eu),e=wn.transition,n=Se;try{if(wn.transition=null,Se=16>t?16:t,Xr===null)var r=!1;else{if(t=Xr,Xr=null,Eu=0,ve&6)throw Error(U(331));var i=ve;for(ve|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(W=u;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:ka(8,f,s)}var m=f.child;if(m!==null)m.return=f,W=m;else for(;W!==null;){f=W;var g=f.sibling,E=f.return;if(UE(f),f===u){W=null;break}if(g!==null){g.return=E,W=g;break}W=E}}}var x=s.alternate;if(x!==null){var P=x.child;if(P!==null){x.child=null;do{var k=P.sibling;P.sibling=null,P=k}while(P!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ka(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,W=v;break e}W=s.return}}var y=t.current;for(W=y;W!==null;){o=W;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,W=T;else e:for(o=y;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sd(9,a)}}catch(j){Qe(a,a.return,j)}if(a===o){W=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,W=b;break e}W=a.return}}if(ve=i,Ci(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(Xu,t)}catch{}r=!0}return r}finally{Se=n,wn.transition=e}}return!1}function x_(t,e,n){e=po(n,e),e=kE(t,e,1),t=si(t,e,1),e=Wt(),t!==null&&(yl(t,1,e),Zt(t,e))}function Qe(t,e,n){if(t.tag===3)x_(t,t,n);else for(;e!==null;){if(e.tag===3){x_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(oi===null||!oi.has(r))){t=po(n,t),t=PE(e,t,1),e=si(e,t,1),t=Wt(),e!==null&&(yl(e,1,t),Zt(e,t));break}}e=e.return}}function dA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,vt===t&&(It&n)===n&&(ft===4||ft===3&&(It&130023424)===It&&500>it()-Wm?Hi(t,0):$m|=n),Zt(t,e)}function YE(t,e){e===0&&(t.mode&1?(e=cc,cc<<=1,!(cc&130023424)&&(cc=4194304)):e=1);var n=Wt();t=wr(t,e),t!==null&&(yl(t,e,n),Zt(t,n))}function hA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),YE(t,n)}function fA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),YE(t,n)}var XE;XE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xt.current)Yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Yt=!1,eA(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,Be&&e.flags&1048576&&tE(e,hu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fc(t,e),t=e.pendingProps;var i=co(e,Vt.current);to(e,n),i=Mm(null,e,r,t,i,n);var s=Vm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(r)?(s=!0,uu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bm(e),i.updater=id,e.stateNode=i,i._reactInternals=e,qf(e,r,t,n),e=Qf(null,e,r,!0,s,n)):(e.tag=0,Be&&s&&Cm(e),zt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=mA(r),t=kn(r,t),i){case 0:e=Kf(null,e,r,t,n);break e;case 1:e=g_(null,e,r,t,n);break e;case 11:e=p_(null,e,r,t,n);break e;case 14:e=m_(null,e,r,kn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),Kf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),g_(t,e,r,i,n);case 3:e:{if(OE(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,aE(t,e),mu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=po(Error(U(423)),e),e=y_(t,e,r,n,i);break e}else if(r!==i){i=po(Error(U(424)),e),e=y_(t,e,r,n,i);break e}else for(rn=ii(e.stateNode.containerInfo.firstChild),on=e,Be=!0,Nn=null,n=sE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(uo(),r===i){e=Er(t,e,n);break e}zt(t,e,r,n)}e=e.child}return e;case 5:return lE(e),t===null&&$f(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vf(r,i)?o=null:s!==null&&Vf(r,s)&&(e.flags|=32),DE(t,e),zt(t,e,o,n),e.child;case 6:return t===null&&$f(e),null;case 13:return LE(t,e,n);case 4:return Dm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ho(e,null,r,n):zt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),p_(t,e,r,i,n);case 7:return zt(t,e,e.pendingProps,n),e.child;case 8:return zt(t,e,e.pendingProps.children,n),e.child;case 12:return zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ke(fu,r._currentValue),r._currentValue=o,s!==null)if(Ln(s.value,o)){if(s.children===i.children&&!Xt.current){e=Er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=mr(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Wf(s.return,n,e),a.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,to(e,n),i=Tn(i),r=r(i),e.flags|=1,zt(t,e,r,n),e.child;case 14:return r=e.type,i=kn(r,e.pendingProps),i=kn(r.type,i),m_(t,e,r,i,n);case 15:return NE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),Fc(t,e),e.tag=1,Jt(r)?(t=!0,uu(e)):t=!1,to(e,n),AE(e,r,i),qf(e,r,i,n),Qf(null,e,r,!0,t,n);case 19:return jE(t,e,n);case 22:return bE(t,e,n)}throw Error(U(156,e.tag))};function JE(t,e){return Cw(t,e)}function pA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,r){return new pA(t,e,n,r)}function Km(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mA(t){if(typeof t=="function")return Km(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fm)return 11;if(t===pm)return 14}return 2}function li(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Km(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case js:return qi(n.children,i,s,e);case hm:o=8,i|=8;break;case gf:return t=_n(12,n,e,i|2),t.elementType=gf,t.lanes=s,t;case yf:return t=_n(13,n,e,i),t.elementType=yf,t.lanes=s,t;case vf:return t=_n(19,n,e,i),t.elementType=vf,t.lanes=s,t;case lw:return ad(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ow:o=10;break e;case aw:o=9;break e;case fm:o=11;break e;case pm:o=14;break e;case Ur:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=_n(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qi(t,e,n,r){return t=_n(7,t,r,e),t.lanes=n,t}function ad(t,e,n,r){return t=_n(22,t,r,e),t.elementType=lw,t.lanes=n,t.stateNode={isHidden:!1},t}function Mh(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function Vh(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vh(0),this.expirationTimes=vh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qm(t,e,n,r,i,s,o,a,c){return t=new gA(t,e,n,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bm(s),t}function yA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ZE(t){if(!t)return pi;t=t._reactInternals;e:{if(ps(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Jt(n))return Zw(t,n,e)}return e}function eT(t,e,n,r,i,s,o,a,c){return t=Qm(n,r,!0,t,i,s,o,a,c),t.context=ZE(null),n=t.current,r=Wt(),i=ai(n),s=mr(r,i),s.callback=e??null,si(n,s,i),t.current.lanes=i,yl(t,i,r),Zt(t,r),t}function ld(t,e,n,r){var i=e.current,s=Wt(),o=ai(i);return n=ZE(n),e.context===null?e.context=n:e.pendingContext=n,e=mr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=si(i,e,o),t!==null&&(On(t,i,o,s),jc(t,i,o)),o}function Iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function R_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ym(t,e){R_(t,e),(t=t.alternate)&&R_(t,e)}function vA(){return null}var tT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xm(t){this._internalRoot=t}cd.prototype.render=Xm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));ld(t,e,null,null)};cd.prototype.unmount=Xm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){ld(null,t,null,null)}),e[_r]=null}};function cd(t){this._internalRoot=t}cd.prototype.unstable_scheduleHydration=function(t){if(t){var e=bw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$r.length&&e!==0&&e<$r[n].priority;n++);$r.splice(n,0,t),n===0&&Ow(t)}};function Jm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function A_(){}function _A(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Iu(o);s.call(u)}}var o=eT(e,r,t,0,null,!1,!1,"",A_);return t._reactRootContainer=o,t[_r]=o.current,Ka(t.nodeType===8?t.parentNode:t),ns(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Iu(c);a.call(u)}}var c=Qm(t,0,!1,null,null,!1,!1,"",A_);return t._reactRootContainer=c,t[_r]=c.current,Ka(t.nodeType===8?t.parentNode:t),ns(function(){ld(e,c,n,r)}),c}function dd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var c=Iu(o);a.call(c)}}ld(e,o,t,i)}else o=_A(n,e,t,i,r);return Iu(o)}Pw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ha(e.pendingLanes);n!==0&&(ym(e,n|1),Zt(e,it()),!(ve&6)&&(mo=it()+500,Ci()))}break;case 13:ns(function(){var r=wr(t,1);if(r!==null){var i=Wt();On(r,t,1,i)}}),Ym(t,1)}};vm=function(t){if(t.tag===13){var e=wr(t,134217728);if(e!==null){var n=Wt();On(e,t,134217728,n)}Ym(t,134217728)}};Nw=function(t){if(t.tag===13){var e=ai(t),n=wr(t,e);if(n!==null){var r=Wt();On(n,t,e,r)}Ym(t,e)}};bw=function(){return Se};Dw=function(t,e){var n=Se;try{return Se=t,e()}finally{Se=n}};Af=function(t,e,n){switch(e){case"input":if(Ef(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=td(r);if(!i)throw Error(U(90));uw(r),Ef(r,i)}}}break;case"textarea":hw(t,n);break;case"select":e=n.value,e!=null&&Xs(t,!!n.multiple,e,!1)}};_w=Hm;ww=ns;var wA={usingClientEntryPoint:!1,Events:[_l,Us,td,yw,vw,Hm]},aa={findFiberByHostInstance:Bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},EA={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Iw(t),t===null?null:t.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||vA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{Xu=wc.inject(EA),Qn=wc}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wA;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jm(e))throw Error(U(200));return yA(t,e,null,n)};pn.createRoot=function(t,e){if(!Jm(t))throw Error(U(299));var n=!1,r="",i=tT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Qm(t,1,!1,null,null,n,!1,r,i),t[_r]=e.current,Ka(t.nodeType===8?t.parentNode:t),new Xm(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Iw(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return ns(t)};pn.hydrate=function(t,e,n){if(!ud(e))throw Error(U(200));return dd(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!Jm(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=tT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=eT(e,null,t,1,n??null,i,!1,s,o),t[_r]=e.current,Ka(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new cd(e)};pn.render=function(t,e,n){if(!ud(e))throw Error(U(200));return dd(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!ud(t))throw Error(U(40));return t._reactRootContainer?(ns(function(){dd(null,null,t,!1,function(){t._reactRootContainer=null,t[_r]=null})}),!0):!1};pn.unstable_batchedUpdates=Hm;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ud(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return dd(t,e,n,!1,r)};pn.version="18.3.1-next-f1338f8080-20240426";function nT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nT)}catch(t){console.error(t)}}nT(),nw.exports=pn;var rT=nw.exports;const Gs=Qu(rT);var k_=rT;pf.createRoot=k_.createRoot,pf.hydrateRoot=k_.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rl.apply(this,arguments)}var Jr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Jr||(Jr={}));const P_="popstate";function TA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ap("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Su(i)}return SA(e,n,null,t)}function dt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function iT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function IA(){return Math.random().toString(36).substr(2,8)}function N_(t,e){return{usr:t.state,key:t.key,idx:e}}function ap(t,e,n,r){return n===void 0&&(n=null),rl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?No(e):e,{state:n,key:e&&e.key||r||IA()})}function Su(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function No(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function SA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Jr.Pop,c=null,u=f();u==null&&(u=0,o.replaceState(rl({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function m(){a=Jr.Pop;let k=f(),v=k==null?null:k-u;u=k,c&&c({action:a,location:P.location,delta:v})}function g(k,v){a=Jr.Push;let y=ap(P.location,k,v);u=f()+1;let T=N_(y,u),b=P.createHref(y);try{o.pushState(T,"",b)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(b)}s&&c&&c({action:a,location:P.location,delta:1})}function E(k,v){a=Jr.Replace;let y=ap(P.location,k,v);u=f();let T=N_(y,u),b=P.createHref(y);o.replaceState(T,"",b),s&&c&&c({action:a,location:P.location,delta:0})}function x(k){let v=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof k=="string"?k:Su(k);return y=y.replace(/ $/,"%20"),dt(v,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,v)}let P={get action(){return a},get location(){return t(i,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(P_,m),c=k,()=>{i.removeEventListener(P_,m),c=null}},createHref(k){return e(i,k)},createURL:x,encodeLocation(k){let v=x(k);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:g,replace:E,go(k){return o.go(k)}};return P}var b_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(b_||(b_={}));function CA(t,e,n){return n===void 0&&(n="/"),xA(t,e,n,!1)}function xA(t,e,n,r){let i=typeof e=="string"?No(e):e,s=Zm(i.pathname||"/",n);if(s==null)return null;let o=sT(t);RA(o);let a=null;for(let c=0;a==null&&c<o.length;++c){let u=VA(s);a=jA(o[c],u,r)}return a}function sT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(dt(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=ci([r,c.relativePath]),f=n.concat(c);s.children&&s.children.length>0&&(dt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sT(s.children,e,f,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:OA(u,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let c of oT(s.path))i(s,o,c)}),e}function oT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=oT(r.join("/")),a=[];return a.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function RA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:LA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AA=/^:[\w-]+$/,kA=3,PA=2,NA=1,bA=10,DA=-2,D_=t=>t==="*";function OA(t,e){let n=t.split("/"),r=n.length;return n.some(D_)&&(r+=DA),e&&(r+=PA),n.filter(i=>!D_(i)).reduce((i,s)=>i+(AA.test(s)?kA:s===""?NA:bA),r)}function LA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=O_({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),g=c.route;if(!m&&u&&n&&!r[r.length-1].route.index&&(m=O_({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:ci([s,m.pathname]),pathnameBase:zA(ci([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=ci([s,m.pathnameBase]))}return o}function O_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=MA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,m)=>{let{paramName:g,isOptional:E}=f;if(g==="*"){let P=a[m]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const x=a[m];return E&&!x?u[g]=void 0:u[g]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function MA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),iT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function VA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return iT(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Zm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function FA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?No(t):t;return{pathname:n?n.startsWith("/")?n:UA(n,e):e,search:$A(r),hash:WA(i)}}function UA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Fh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function BA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function aT(t,e){let n=BA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=No(t):(i=rl({},t),dt(!i.pathname||!i.pathname.includes("?"),Fh("?","pathname","search",i)),dt(!i.pathname||!i.pathname.includes("#"),Fh("#","pathname","hash",i)),dt(!i.search||!i.search.includes("#"),Fh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}a=m>=0?e[m]:"/"}let c=FA(i,a),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const ci=t=>t.join("/").replace(/\/\/+/g,"/"),zA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$A=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,WA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function HA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const cT=["post","put","patch","delete"];new Set(cT);const qA=["get",...cT];new Set(qA);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function il(){return il=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},il.apply(this,arguments)}const eg=I.createContext(null),GA=I.createContext(null),ms=I.createContext(null),hd=I.createContext(null),xi=I.createContext({outlet:null,matches:[],isDataRoute:!1}),uT=I.createContext(null);function KA(t,e){let{relative:n}=e===void 0?{}:e;El()||dt(!1);let{basename:r,navigator:i}=I.useContext(ms),{hash:s,pathname:o,search:a}=hT(t,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:ci([r,o])),i.createHref({pathname:c,search:a,hash:s})}function El(){return I.useContext(hd)!=null}function fd(){return El()||dt(!1),I.useContext(hd).location}function dT(t){I.useContext(ms).static||I.useLayoutEffect(t)}function Tl(){let{isDataRoute:t}=I.useContext(xi);return t?lk():QA()}function QA(){El()||dt(!1);let t=I.useContext(eg),{basename:e,future:n,navigator:r}=I.useContext(ms),{matches:i}=I.useContext(xi),{pathname:s}=fd(),o=JSON.stringify(aT(i,n.v7_relativeSplatPath)),a=I.useRef(!1);return dT(()=>{a.current=!0}),I.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let m=lT(u,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:ci([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,s,t])}function YA(){let{matches:t}=I.useContext(xi),e=t[t.length-1];return e?e.params:{}}function hT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=I.useContext(ms),{matches:i}=I.useContext(xi),{pathname:s}=fd(),o=JSON.stringify(aT(i,r.v7_relativeSplatPath));return I.useMemo(()=>lT(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function XA(t,e){return JA(t,e)}function JA(t,e,n,r){El()||dt(!1);let{navigator:i}=I.useContext(ms),{matches:s}=I.useContext(xi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=fd(),f;if(e){var m;let k=typeof e=="string"?No(e):e;c==="/"||(m=k.pathname)!=null&&m.startsWith(c)||dt(!1),f=k}else f=u;let g=f.pathname||"/",E=g;if(c!=="/"){let k=c.replace(/^\//,"").split("/");E="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=CA(t,{pathname:E}),P=rk(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:ci([c,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:ci([c,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return e&&P?I.createElement(hd.Provider,{value:{location:il({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Jr.Pop}},P):P}function ZA(){let t=ak(),e=HA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,null)}const ek=I.createElement(ZA,null);class tk extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?I.createElement(xi.Provider,{value:this.props.routeContext},I.createElement(uT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nk(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(eg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(xi.Provider,{value:e},r)}function rk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=o.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);f>=0||dt(!1),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=f),m.route.id){let{loaderData:g,errors:E}=n,x=m.route.loader&&g[m.route.id]===void 0&&(!E||E[m.route.id]===void 0);if(m.route.lazy||x){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let E,x=!1,P=null,k=null;n&&(E=a&&m.route.id?a[m.route.id]:void 0,P=m.route.errorElement||ek,c&&(u<0&&g===0?(x=!0,k=null):u===g&&(x=!0,k=m.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,g+1)),y=()=>{let T;return E?T=P:x?T=k:m.route.Component?T=I.createElement(m.route.Component,null):m.route.element?T=m.route.element:T=f,I.createElement(nk,{match:m,routeContext:{outlet:f,matches:v,isDataRoute:n!=null},children:T})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?I.createElement(tk,{location:n.location,revalidation:n.revalidation,component:P,error:E,children:y(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):y()},null)}var fT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(fT||{}),Cu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Cu||{});function ik(t){let e=I.useContext(eg);return e||dt(!1),e}function sk(t){let e=I.useContext(GA);return e||dt(!1),e}function ok(t){let e=I.useContext(xi);return e||dt(!1),e}function pT(t){let e=ok(),n=e.matches[e.matches.length-1];return n.route.id||dt(!1),n.route.id}function ak(){var t;let e=I.useContext(uT),n=sk(Cu.UseRouteError),r=pT(Cu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function lk(){let{router:t}=ik(fT.UseNavigateStable),e=pT(Cu.UseNavigateStable),n=I.useRef(!1);return dT(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,il({fromRouteId:e},s)))},[t,e])}function zn(t){dt(!1)}function ck(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Jr.Pop,navigator:s,static:o=!1,future:a}=t;El()&&dt(!1);let c=e.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:c,navigator:s,static:o,future:il({v7_relativeSplatPath:!1},a)}),[c,a,s,o]);typeof r=="string"&&(r=No(r));let{pathname:f="/",search:m="",hash:g="",state:E=null,key:x="default"}=r,P=I.useMemo(()=>{let k=Zm(f,c);return k==null?null:{location:{pathname:k,search:m,hash:g,state:E,key:x},navigationType:i}},[c,f,m,g,E,x,i]);return P==null?null:I.createElement(ms.Provider,{value:u},I.createElement(hd.Provider,{children:n,value:P}))}function mT(t){let{children:e,location:n}=t;return XA(lp(e),n)}new Promise(()=>{});function lp(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,lp(r.props.children,s));return}r.type!==zn&&dt(!1),!r.props.index||!r.props.children||dt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=lp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cp(){return cp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cp.apply(this,arguments)}function uk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function dk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hk(t,e){return t.button===0&&(!e||e==="_self")&&!dk(t)}const fk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],pk="6";try{window.__reactRouterVersion=pk}catch{}const mk="startTransition",L_=dx[mk];function gk(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=TA({window:i,v5Compat:!0}));let o=s.current,[a,c]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=I.useCallback(m=>{u&&L_?L_(()=>c(m)):c(m)},[c,u]);return I.useLayoutEffect(()=>o.listen(f),[o,f]),I.createElement(ck,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const yk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wn=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:c,to:u,preventScrollReset:f,unstable_viewTransition:m}=e,g=uk(e,fk),{basename:E}=I.useContext(ms),x,P=!1;if(typeof u=="string"&&vk.test(u)&&(x=u,yk))try{let T=new URL(window.location.href),b=u.startsWith("//")?new URL(T.protocol+u):new URL(u),j=Zm(b.pathname,E);b.origin===T.origin&&j!=null?u=j+b.search+b.hash:P=!0}catch{}let k=KA(u,{relative:i}),v=_k(u,{replace:o,state:a,target:c,preventScrollReset:f,relative:i,unstable_viewTransition:m});function y(T){r&&r(T),T.defaultPrevented||v(T)}return I.createElement("a",cp({},g,{href:x||k,onClick:P||s?r:y,ref:n,target:c}))});var j_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(j_||(j_={}));var M_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(M_||(M_={}));function _k(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,c=Tl(),u=fd(),f=hT(t,{relative:o});return I.useCallback(m=>{if(hk(m,n)){m.preventDefault();let g=r!==void 0?r:Su(u)===Su(f);c(t,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,c,f,r,i,n,t,s,o,a])}const wk="/assets/annonse-lW1Wm__r.png";var V_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ek=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},yT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,f=s>>2,m=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,E=u&63;c||(E=64,o||(g=64)),r.push(n[f],n[m],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ek(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||m==null)throw new Tk;const g=s<<2|a>>4;if(r.push(g),u!==64){const E=a<<4&240|u>>2;if(r.push(E),m!==64){const x=u<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Tk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ik=function(t){const e=gT(t);return yT.encodeByteArray(e,!0)},xu=function(t){return Ik(t).replace(/\./g,"")},vT=function(t){try{return yT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=()=>Sk().__FIREBASE_DEFAULTS__,xk=()=>{if(typeof process>"u"||typeof V_>"u")return;const t=V_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vT(t[1]);return e&&JSON.parse(e)},pd=()=>{try{return Ck()||xk()||Rk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_T=t=>{var e,n;return(n=(e=pd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wT=t=>{const e=_T(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ET=()=>{var t;return(t=pd())===null||t===void 0?void 0:t.config},TT=t=>{var e;return(e=pd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xu(JSON.stringify(n)),xu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function Pk(){var t;const e=(t=pd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ok(){const t=Ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Lk(){return!Pk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jk(){try{return typeof indexedDB=="object"}catch{return!1}}function Mk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk="FirebaseError";class sr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Vk,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Il.prototype.create)}}class Il{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Fk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sr(i,a,r)}}function Fk(t,e){return t.replace(Uk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Uk=/\{\$([^}]+)}/g;function Bk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function go(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(F_(s)&&F_(o)){if(!go(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ma(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zk(t,e){const n=new $k(t,e);return n.subscribe.bind(n)}class $k{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Wk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Uh),i.error===void 0&&(i.error=Uh),i.complete===void 0&&(i.complete=Uh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}class mi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ak;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gk(e))try{this.getOrInitializeService({instanceIdentifier:Mi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mi){return this.instances.has(e)}getOptions(e=Mi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mi){return this.component?this.component.multipleInstances?e:Mi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qk(t){return t===Mi?void 0:t}function Gk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Qk={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Yk=ge.INFO,Xk={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Jk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Xk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tg{constructor(e){this.name=e,this._logLevel=Yk,this._logHandler=Jk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Zk=(t,e)=>e.some(n=>t instanceof n);let U_,B_;function eP(){return U_||(U_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tP(){return B_||(B_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ST=new WeakMap,up=new WeakMap,CT=new WeakMap,Bh=new WeakMap,ng=new WeakMap;function nP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ui(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ST.set(n,t)}).catch(()=>{}),ng.set(e,t),e}function rP(t){if(up.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});up.set(t,e)}let dp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return up.get(t);if(e==="objectStoreNames")return t.objectStoreNames||CT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ui(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iP(t){dp=t(dp)}function sP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zh(this),e,...n);return CT.set(r,e.sort?e.sort():[e]),ui(r)}:tP().includes(t)?function(...e){return t.apply(zh(this),e),ui(ST.get(this))}:function(...e){return ui(t.apply(zh(this),e))}}function oP(t){return typeof t=="function"?sP(t):(t instanceof IDBTransaction&&rP(t),Zk(t,eP())?new Proxy(t,dp):t)}function ui(t){if(t instanceof IDBRequest)return nP(t);if(Bh.has(t))return Bh.get(t);const e=oP(t);return e!==t&&(Bh.set(t,e),ng.set(e,t)),e}const zh=t=>ng.get(t);function aP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ui(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ui(o.result),c.oldVersion,c.newVersion,ui(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const lP=["get","getKey","getAll","getAllKeys","count"],cP=["put","add","delete","clear"],$h=new Map;function z_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($h.get(e))return $h.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lP.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return $h.set(e,s),s}iP(t=>({...t,get:(e,n,r)=>z_(e,n)||t.get(e,n,r),has:(e,n)=>!!z_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hp="@firebase/app",$_="0.10.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new tg("@firebase/app"),hP="@firebase/app-compat",fP="@firebase/analytics-compat",pP="@firebase/analytics",mP="@firebase/app-check-compat",gP="@firebase/app-check",yP="@firebase/auth",vP="@firebase/auth-compat",_P="@firebase/database",wP="@firebase/database-compat",EP="@firebase/functions",TP="@firebase/functions-compat",IP="@firebase/installations",SP="@firebase/installations-compat",CP="@firebase/messaging",xP="@firebase/messaging-compat",RP="@firebase/performance",AP="@firebase/performance-compat",kP="@firebase/remote-config",PP="@firebase/remote-config-compat",NP="@firebase/storage",bP="@firebase/storage-compat",DP="@firebase/firestore",OP="@firebase/vertexai-preview",LP="@firebase/firestore-compat",jP="firebase",MP="10.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="[DEFAULT]",VP={[hp]:"fire-core",[hP]:"fire-core-compat",[pP]:"fire-analytics",[fP]:"fire-analytics-compat",[gP]:"fire-app-check",[mP]:"fire-app-check-compat",[yP]:"fire-auth",[vP]:"fire-auth-compat",[_P]:"fire-rtdb",[wP]:"fire-rtdb-compat",[EP]:"fire-fn",[TP]:"fire-fn-compat",[IP]:"fire-iid",[SP]:"fire-iid-compat",[CP]:"fire-fcm",[xP]:"fire-fcm-compat",[RP]:"fire-perf",[AP]:"fire-perf-compat",[kP]:"fire-rc",[PP]:"fire-rc-compat",[NP]:"fire-gcs",[bP]:"fire-gcs-compat",[DP]:"fire-fst",[LP]:"fire-fst-compat",[OP]:"fire-vertex","fire-js":"fire-js",[jP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new Map,FP=new Map,pp=new Map;function W_(t,e){try{t.container.addComponent(e)}catch(n){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rs(t){const e=t.name;if(pp.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;pp.set(e,t);for(const n of Ru.values())W_(n,t);for(const n of FP.values())W_(n,t);return!0}function md(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Hn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},di=new Il("app","Firebase",UP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw di.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=MP;function xT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw di.create("bad-app-name",{appName:String(i)});if(n||(n=ET()),!n)throw di.create("no-options");const s=Ru.get(i);if(s){if(go(n,s.options)&&go(r,s.config))return s;throw di.create("duplicate-app",{appName:i})}const o=new Kk(i);for(const c of pp.values())o.addComponent(c);const a=new BP(n,r,o);return Ru.set(i,a),a}function rg(t=fp){const e=Ru.get(t);if(!e&&t===fp&&ET())return xT();if(!e)throw di.create("no-app",{appName:t});return e}function Xn(t,e,n){var r;let i=(r=VP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(a.join(" "));return}rs(new mi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP="firebase-heartbeat-database",$P=1,sl="firebase-heartbeat-store";let Wh=null;function RT(){return Wh||(Wh=aP(zP,$P,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(sl)}catch(n){console.warn(n)}}}}).catch(t=>{throw di.create("idb-open",{originalErrorMessage:t.message})})),Wh}async function WP(t){try{const n=(await RT()).transaction(sl),r=await n.objectStore(sl).get(AT(t));return await n.done,r}catch(e){if(e instanceof sr)Tr.warn(e.message);else{const n=di.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tr.warn(n.message)}}}async function H_(t,e){try{const r=(await RT()).transaction(sl,"readwrite");await r.objectStore(sl).put(e,AT(t)),await r.done}catch(n){if(n instanceof sr)Tr.warn(n.message);else{const r=di.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tr.warn(r.message)}}}function AT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=1024,qP=30*24*60*60*1e3;class GP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new QP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=q_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=qP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Tr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=q_(),{heartbeatsToSend:r,unsentEntries:i}=KP(this._heartbeatsCache.heartbeats),s=xu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Tr.warn(n),""}}}function q_(){return new Date().toISOString().substring(0,10)}function KP(t,e=HP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),G_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),G_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class QP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jk()?Mk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await WP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return H_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return H_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function G_(t){return xu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(t){rs(new mi("platform-logger",e=>new uP(e),"PRIVATE")),rs(new mi("heartbeat",e=>new GP(e),"PRIVATE")),Xn(hp,$_,t),Xn(hp,$_,"esm2017"),Xn("fire-js","")}YP("");var K_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gi,kT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,w){function C(){}C.prototype=w.prototype,S.D=w.prototype,S.prototype=new C,S.prototype.constructor=S,S.C=function(R,N,D){for(var A=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)A[Ze-2]=arguments[Ze];return w.prototype[N].apply(R,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,w,C){C||(C=0);var R=Array(16);if(typeof w=="string")for(var N=0;16>N;++N)R[N]=w.charCodeAt(C++)|w.charCodeAt(C++)<<8|w.charCodeAt(C++)<<16|w.charCodeAt(C++)<<24;else for(N=0;16>N;++N)R[N]=w[C++]|w[C++]<<8|w[C++]<<16|w[C++]<<24;w=S.g[0],C=S.g[1],N=S.g[2];var D=S.g[3],A=w+(D^C&(N^D))+R[0]+3614090360&4294967295;w=C+(A<<7&4294967295|A>>>25),A=D+(N^w&(C^N))+R[1]+3905402710&4294967295,D=w+(A<<12&4294967295|A>>>20),A=N+(C^D&(w^C))+R[2]+606105819&4294967295,N=D+(A<<17&4294967295|A>>>15),A=C+(w^N&(D^w))+R[3]+3250441966&4294967295,C=N+(A<<22&4294967295|A>>>10),A=w+(D^C&(N^D))+R[4]+4118548399&4294967295,w=C+(A<<7&4294967295|A>>>25),A=D+(N^w&(C^N))+R[5]+1200080426&4294967295,D=w+(A<<12&4294967295|A>>>20),A=N+(C^D&(w^C))+R[6]+2821735955&4294967295,N=D+(A<<17&4294967295|A>>>15),A=C+(w^N&(D^w))+R[7]+4249261313&4294967295,C=N+(A<<22&4294967295|A>>>10),A=w+(D^C&(N^D))+R[8]+1770035416&4294967295,w=C+(A<<7&4294967295|A>>>25),A=D+(N^w&(C^N))+R[9]+2336552879&4294967295,D=w+(A<<12&4294967295|A>>>20),A=N+(C^D&(w^C))+R[10]+4294925233&4294967295,N=D+(A<<17&4294967295|A>>>15),A=C+(w^N&(D^w))+R[11]+2304563134&4294967295,C=N+(A<<22&4294967295|A>>>10),A=w+(D^C&(N^D))+R[12]+1804603682&4294967295,w=C+(A<<7&4294967295|A>>>25),A=D+(N^w&(C^N))+R[13]+4254626195&4294967295,D=w+(A<<12&4294967295|A>>>20),A=N+(C^D&(w^C))+R[14]+2792965006&4294967295,N=D+(A<<17&4294967295|A>>>15),A=C+(w^N&(D^w))+R[15]+1236535329&4294967295,C=N+(A<<22&4294967295|A>>>10),A=w+(N^D&(C^N))+R[1]+4129170786&4294967295,w=C+(A<<5&4294967295|A>>>27),A=D+(C^N&(w^C))+R[6]+3225465664&4294967295,D=w+(A<<9&4294967295|A>>>23),A=N+(w^C&(D^w))+R[11]+643717713&4294967295,N=D+(A<<14&4294967295|A>>>18),A=C+(D^w&(N^D))+R[0]+3921069994&4294967295,C=N+(A<<20&4294967295|A>>>12),A=w+(N^D&(C^N))+R[5]+3593408605&4294967295,w=C+(A<<5&4294967295|A>>>27),A=D+(C^N&(w^C))+R[10]+38016083&4294967295,D=w+(A<<9&4294967295|A>>>23),A=N+(w^C&(D^w))+R[15]+3634488961&4294967295,N=D+(A<<14&4294967295|A>>>18),A=C+(D^w&(N^D))+R[4]+3889429448&4294967295,C=N+(A<<20&4294967295|A>>>12),A=w+(N^D&(C^N))+R[9]+568446438&4294967295,w=C+(A<<5&4294967295|A>>>27),A=D+(C^N&(w^C))+R[14]+3275163606&4294967295,D=w+(A<<9&4294967295|A>>>23),A=N+(w^C&(D^w))+R[3]+4107603335&4294967295,N=D+(A<<14&4294967295|A>>>18),A=C+(D^w&(N^D))+R[8]+1163531501&4294967295,C=N+(A<<20&4294967295|A>>>12),A=w+(N^D&(C^N))+R[13]+2850285829&4294967295,w=C+(A<<5&4294967295|A>>>27),A=D+(C^N&(w^C))+R[2]+4243563512&4294967295,D=w+(A<<9&4294967295|A>>>23),A=N+(w^C&(D^w))+R[7]+1735328473&4294967295,N=D+(A<<14&4294967295|A>>>18),A=C+(D^w&(N^D))+R[12]+2368359562&4294967295,C=N+(A<<20&4294967295|A>>>12),A=w+(C^N^D)+R[5]+4294588738&4294967295,w=C+(A<<4&4294967295|A>>>28),A=D+(w^C^N)+R[8]+2272392833&4294967295,D=w+(A<<11&4294967295|A>>>21),A=N+(D^w^C)+R[11]+1839030562&4294967295,N=D+(A<<16&4294967295|A>>>16),A=C+(N^D^w)+R[14]+4259657740&4294967295,C=N+(A<<23&4294967295|A>>>9),A=w+(C^N^D)+R[1]+2763975236&4294967295,w=C+(A<<4&4294967295|A>>>28),A=D+(w^C^N)+R[4]+1272893353&4294967295,D=w+(A<<11&4294967295|A>>>21),A=N+(D^w^C)+R[7]+4139469664&4294967295,N=D+(A<<16&4294967295|A>>>16),A=C+(N^D^w)+R[10]+3200236656&4294967295,C=N+(A<<23&4294967295|A>>>9),A=w+(C^N^D)+R[13]+681279174&4294967295,w=C+(A<<4&4294967295|A>>>28),A=D+(w^C^N)+R[0]+3936430074&4294967295,D=w+(A<<11&4294967295|A>>>21),A=N+(D^w^C)+R[3]+3572445317&4294967295,N=D+(A<<16&4294967295|A>>>16),A=C+(N^D^w)+R[6]+76029189&4294967295,C=N+(A<<23&4294967295|A>>>9),A=w+(C^N^D)+R[9]+3654602809&4294967295,w=C+(A<<4&4294967295|A>>>28),A=D+(w^C^N)+R[12]+3873151461&4294967295,D=w+(A<<11&4294967295|A>>>21),A=N+(D^w^C)+R[15]+530742520&4294967295,N=D+(A<<16&4294967295|A>>>16),A=C+(N^D^w)+R[2]+3299628645&4294967295,C=N+(A<<23&4294967295|A>>>9),A=w+(N^(C|~D))+R[0]+4096336452&4294967295,w=C+(A<<6&4294967295|A>>>26),A=D+(C^(w|~N))+R[7]+1126891415&4294967295,D=w+(A<<10&4294967295|A>>>22),A=N+(w^(D|~C))+R[14]+2878612391&4294967295,N=D+(A<<15&4294967295|A>>>17),A=C+(D^(N|~w))+R[5]+4237533241&4294967295,C=N+(A<<21&4294967295|A>>>11),A=w+(N^(C|~D))+R[12]+1700485571&4294967295,w=C+(A<<6&4294967295|A>>>26),A=D+(C^(w|~N))+R[3]+2399980690&4294967295,D=w+(A<<10&4294967295|A>>>22),A=N+(w^(D|~C))+R[10]+4293915773&4294967295,N=D+(A<<15&4294967295|A>>>17),A=C+(D^(N|~w))+R[1]+2240044497&4294967295,C=N+(A<<21&4294967295|A>>>11),A=w+(N^(C|~D))+R[8]+1873313359&4294967295,w=C+(A<<6&4294967295|A>>>26),A=D+(C^(w|~N))+R[15]+4264355552&4294967295,D=w+(A<<10&4294967295|A>>>22),A=N+(w^(D|~C))+R[6]+2734768916&4294967295,N=D+(A<<15&4294967295|A>>>17),A=C+(D^(N|~w))+R[13]+1309151649&4294967295,C=N+(A<<21&4294967295|A>>>11),A=w+(N^(C|~D))+R[4]+4149444226&4294967295,w=C+(A<<6&4294967295|A>>>26),A=D+(C^(w|~N))+R[11]+3174756917&4294967295,D=w+(A<<10&4294967295|A>>>22),A=N+(w^(D|~C))+R[2]+718787259&4294967295,N=D+(A<<15&4294967295|A>>>17),A=C+(D^(N|~w))+R[9]+3951481745&4294967295,S.g[0]=S.g[0]+w&4294967295,S.g[1]=S.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,S.g[2]=S.g[2]+N&4294967295,S.g[3]=S.g[3]+D&4294967295}r.prototype.u=function(S,w){w===void 0&&(w=S.length);for(var C=w-this.blockSize,R=this.B,N=this.h,D=0;D<w;){if(N==0)for(;D<=C;)i(this,S,D),D+=this.blockSize;if(typeof S=="string"){for(;D<w;)if(R[N++]=S.charCodeAt(D++),N==this.blockSize){i(this,R),N=0;break}}else for(;D<w;)if(R[N++]=S[D++],N==this.blockSize){i(this,R),N=0;break}}this.h=N,this.o+=w},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var w=1;w<S.length-8;++w)S[w]=0;var C=8*this.o;for(w=S.length-8;w<S.length;++w)S[w]=C&255,C/=256;for(this.u(S),S=Array(16),w=C=0;4>w;++w)for(var R=0;32>R;R+=8)S[C++]=this.g[w]>>>R&255;return S};function s(S,w){var C=a;return Object.prototype.hasOwnProperty.call(C,S)?C[S]:C[S]=w(S)}function o(S,w){this.h=w;for(var C=[],R=!0,N=S.length-1;0<=N;N--){var D=S[N]|0;R&&D==w||(C[N]=D,R=!1)}this.g=C}var a={};function c(S){return-128<=S&&128>S?s(S,function(w){return new o([w|0],0>w?-1:0)}):new o([S|0],0>S?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return m;if(0>S)return k(u(-S));for(var w=[],C=1,R=0;S>=C;R++)w[R]=S/C|0,C*=4294967296;return new o(w,0)}function f(S,w){if(S.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S.charAt(0)=="-")return k(f(S.substring(1),w));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=u(Math.pow(w,8)),R=m,N=0;N<S.length;N+=8){var D=Math.min(8,S.length-N),A=parseInt(S.substring(N,N+D),w);8>D?(D=u(Math.pow(w,D)),R=R.j(D).add(u(A))):(R=R.j(C),R=R.add(u(A)))}return R}var m=c(0),g=c(1),E=c(16777216);t=o.prototype,t.m=function(){if(P(this))return-k(this).m();for(var S=0,w=1,C=0;C<this.g.length;C++){var R=this.i(C);S+=(0<=R?R:4294967296+R)*w,w*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x(this))return"0";if(P(this))return"-"+k(this).toString(S);for(var w=u(Math.pow(S,6)),C=this,R="";;){var N=b(C,w).g;C=v(C,N.j(w));var D=((0<C.g.length?C.g[0]:C.h)>>>0).toString(S);if(C=N,x(C))return D+R;for(;6>D.length;)D="0"+D;R=D+R}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function x(S){if(S.h!=0)return!1;for(var w=0;w<S.g.length;w++)if(S.g[w]!=0)return!1;return!0}function P(S){return S.h==-1}t.l=function(S){return S=v(this,S),P(S)?-1:x(S)?0:1};function k(S){for(var w=S.g.length,C=[],R=0;R<w;R++)C[R]=~S.g[R];return new o(C,~S.h).add(g)}t.abs=function(){return P(this)?k(this):this},t.add=function(S){for(var w=Math.max(this.g.length,S.g.length),C=[],R=0,N=0;N<=w;N++){var D=R+(this.i(N)&65535)+(S.i(N)&65535),A=(D>>>16)+(this.i(N)>>>16)+(S.i(N)>>>16);R=A>>>16,D&=65535,A&=65535,C[N]=A<<16|D}return new o(C,C[C.length-1]&-2147483648?-1:0)};function v(S,w){return S.add(k(w))}t.j=function(S){if(x(this)||x(S))return m;if(P(this))return P(S)?k(this).j(k(S)):k(k(this).j(S));if(P(S))return k(this.j(k(S)));if(0>this.l(E)&&0>S.l(E))return u(this.m()*S.m());for(var w=this.g.length+S.g.length,C=[],R=0;R<2*w;R++)C[R]=0;for(R=0;R<this.g.length;R++)for(var N=0;N<S.g.length;N++){var D=this.i(R)>>>16,A=this.i(R)&65535,Ze=S.i(N)>>>16,st=S.i(N)&65535;C[2*R+2*N]+=A*st,y(C,2*R+2*N),C[2*R+2*N+1]+=D*st,y(C,2*R+2*N+1),C[2*R+2*N+1]+=A*Ze,y(C,2*R+2*N+1),C[2*R+2*N+2]+=D*Ze,y(C,2*R+2*N+2)}for(R=0;R<w;R++)C[R]=C[2*R+1]<<16|C[2*R];for(R=w;R<2*w;R++)C[R]=0;return new o(C,0)};function y(S,w){for(;(S[w]&65535)!=S[w];)S[w+1]+=S[w]>>>16,S[w]&=65535,w++}function T(S,w){this.g=S,this.h=w}function b(S,w){if(x(w))throw Error("division by zero");if(x(S))return new T(m,m);if(P(S))return w=b(k(S),w),new T(k(w.g),k(w.h));if(P(w))return w=b(S,k(w)),new T(k(w.g),w.h);if(30<S.g.length){if(P(S)||P(w))throw Error("slowDivide_ only works with positive integers.");for(var C=g,R=w;0>=R.l(S);)C=j(C),R=j(R);var N=M(C,1),D=M(R,1);for(R=M(R,2),C=M(C,2);!x(R);){var A=D.add(R);0>=A.l(S)&&(N=N.add(C),D=A),R=M(R,1),C=M(C,1)}return w=v(S,N.j(w)),new T(N,w)}for(N=m;0<=S.l(w);){for(C=Math.max(1,Math.floor(S.m()/w.m())),R=Math.ceil(Math.log(C)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),D=u(C),A=D.j(w);P(A)||0<A.l(S);)C-=R,D=u(C),A=D.j(w);x(D)&&(D=g),N=N.add(D),S=v(S,A)}return new T(N,S)}t.A=function(S){return b(this,S).h},t.and=function(S){for(var w=Math.max(this.g.length,S.g.length),C=[],R=0;R<w;R++)C[R]=this.i(R)&S.i(R);return new o(C,this.h&S.h)},t.or=function(S){for(var w=Math.max(this.g.length,S.g.length),C=[],R=0;R<w;R++)C[R]=this.i(R)|S.i(R);return new o(C,this.h|S.h)},t.xor=function(S){for(var w=Math.max(this.g.length,S.g.length),C=[],R=0;R<w;R++)C[R]=this.i(R)^S.i(R);return new o(C,this.h^S.h)};function j(S){for(var w=S.g.length+1,C=[],R=0;R<w;R++)C[R]=S.i(R)<<1|S.i(R-1)>>>31;return new o(C,S.h)}function M(S,w){var C=w>>5;w%=32;for(var R=S.g.length-C,N=[],D=0;D<R;D++)N[D]=0<w?S.i(D+C)>>>w|S.i(D+C+1)<<32-w:S.i(D+C);return new o(N,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Gi=o}).apply(typeof K_<"u"?K_:typeof self<"u"?self:typeof window<"u"?window:{});var Ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var PT,NT,ga,bT,$c,mp,DT,OT,LT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ec=="object"&&Ec];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var O=l[_];if(!(O in p))break e;p=p[O]}l=l[l.length-1],_=p[l],h=h(_),h!=_&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,_=!1,O={next:function(){if(!_&&p<l.length){var L=p++;return{value:h(L,l[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function u(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function f(l,h,p){return l.call.apply(l.bind,arguments)}function m(l,h,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,_),l.apply(h,O)}}return function(){return l.apply(h,arguments)}}function g(l,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function E(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function x(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,O,L){for(var $=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)$[Ce-2]=arguments[Ce];return h.prototype[O].apply(_,$)}}function P(l){const h=l.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=l[_];return p}return[]}function k(l,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const O=l.length||0,L=_.length||0;l.length=O+L;for(let $=0;$<L;$++)l[O+$]=_[$]}else l.push(_)}}class v{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(l){return/^[\s\xa0]*$/.test(l)}function T(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function b(l){return b[" "](l),l}b[" "]=function(){};var j=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function M(l,h,p){for(const _ in l)h.call(p,l[_],_,l)}function S(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function w(l){const h={};for(const p in l)h[p]=l[p];return h}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,h){let p,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(p in _)l[p]=_[p];for(let L=0;L<C.length;L++)p=C[L],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function N(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function D(l){a.setTimeout(()=>{throw l},0)}function A(){var l=X;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Ze{constructor(){this.h=this.g=null}add(h,p){const _=st.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var st=new v(()=>new mt,l=>l.reset());class mt{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ot,B=!1,X=new Ze,Z=()=>{const l=a.Promise.resolve(void 0);ot=()=>{l.then(de)}};var de=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(p){D(p)}var h=st;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}B=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Ue=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function et(l,h){if(ce.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(j){e:{try{b(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Q[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&et.aa.h.call(this)}}x(et,ce);var Q={2:"touch",3:"pen",4:"mouse"};et.prototype.h=function(){et.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ue="closure_listenable_"+(1e6*Math.random()|0),Ie=0;function tt(l,h,p,_,O){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=O,this.key=++Ie,this.da=this.fa=!1}function At(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Re(l){this.src=l,this.g={},this.h=0}Re.prototype.add=function(l,h,p,_,O){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var $=me(l,h,_,O);return-1<$?(h=l[$],p||(h.fa=!1)):(h=new tt(h,this.src,L,!!_,O),h.fa=p,l.push(h)),h};function K(l,h){var p=h.type;if(p in l.g){var _=l.g[p],O=Array.prototype.indexOf.call(_,h,void 0),L;(L=0<=O)&&Array.prototype.splice.call(_,O,1),L&&(At(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function me(l,h,p,_){for(var O=0;O<l.length;++O){var L=l[O];if(!L.da&&L.listener==h&&L.capture==!!p&&L.ha==_)return O}return-1}var we="closure_lm_"+(1e6*Math.random()|0),ae={};function Pe(l,h,p,_,O){if(Array.isArray(h)){for(var L=0;L<h.length;L++)Pe(l,h[L],p,_,O);return null}return p=$l(p),l&&l[ue]?l.K(h,p,u(_)?!!_.capture:!!_,O):at(l,h,p,!1,_,O)}function at(l,h,p,_,O,L){if(!h)throw Error("Invalid event type");var $=u(O)?!!O.capture:!!O,Ce=Fo(l);if(Ce||(l[we]=Ce=new Re(l)),p=Ce.add(h,p,_,$,L),p.proxy)return p;if(_=Dr(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)Ue||(O=$),O===void 0&&(O=!1),l.addEventListener(h.toString(),_,O);else if(l.attachEvent)l.attachEvent(xn(h.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Dr(){function l(p){return h.call(l.src,l.listener,p)}const h=Yd;return l}function Ts(l,h,p,_,O){if(Array.isArray(h))for(var L=0;L<h.length;L++)Ts(l,h[L],p,_,O);else _=u(_)?!!_.capture:!!_,p=$l(p),l&&l[ue]?(l=l.i,h=String(h).toString(),h in l.g&&(L=l.g[h],p=me(L,p,_,O),-1<p&&(At(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete l.g[h],l.h--)))):l&&(l=Fo(l))&&(h=l.g[h.toString()],l=-1,h&&(l=me(h,p,_,O)),(p=-1<l?h[l]:null)&&Cn(p))}function Cn(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[ue])K(h.i,l);else{var p=l.type,_=l.proxy;h.removeEventListener?h.removeEventListener(p,_,l.capture):h.detachEvent?h.detachEvent(xn(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=Fo(h))?(K(p,l),p.h==0&&(p.src=null,h[we]=null)):At(l)}}}function xn(l){return l in ae?ae[l]:ae[l]="on"+l}function Yd(l,h){if(l.da)l=!0;else{h=new et(h,this);var p=l.listener,_=l.ha||l.src;l.fa&&Cn(l),l=p.call(_,h)}return l}function Fo(l){return l=l[we],l instanceof Re?l:null}var Is="__closure_events_fn_"+(1e9*Math.random()>>>0);function $l(l){return typeof l=="function"?l:(l[Is]||(l[Is]=function(h){return l.handleEvent(h)}),l[Is])}function ne(){oe.call(this),this.i=new Re(this),this.M=this,this.F=null}x(ne,oe),ne.prototype[ue]=!0,ne.prototype.removeEventListener=function(l,h,p,_){Ts(this,l,h,p,_)};function Ge(l,h){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=h.type||h,typeof h=="string")h=new ce(h,l);else if(h instanceof ce)h.target=h.target||l;else{var O=h;h=new ce(_,l),R(h,O)}if(O=!0,p)for(var L=p.length-1;0<=L;L--){var $=h.g=p[L];O=Pi($,_,!0,h)&&O}if($=h.g=l,O=Pi($,_,!0,h)&&O,O=Pi($,_,!1,h)&&O,p)for(L=0;L<p.length;L++)$=h.g=p[L],O=Pi($,_,!1,h)&&O}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],_=0;_<p.length;_++)At(p[_]);delete l.g[h],l.h--}}this.F=null},ne.prototype.K=function(l,h,p,_){return this.i.add(String(l),h,!1,p,_)},ne.prototype.L=function(l,h,p,_){return this.i.add(String(l),h,!0,p,_)};function Pi(l,h,p,_){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,L=0;L<h.length;++L){var $=h[L];if($&&!$.da&&$.capture==p){var Ce=$.listener,_t=$.ha||$.src;$.fa&&K(l.i,$),O=Ce.call(_t,_)!==!1&&O}}return O&&!_.defaultPrevented}function xy(l,h,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function Ry(l){l.g=xy(()=>{l.g=null,l.i&&(l.i=!1,Ry(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class IC extends oe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ry(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Uo(l){oe.call(this),this.h=l,this.g={}}x(Uo,oe);var Ay=[];function ky(l){M(l.g,function(h,p){this.g.hasOwnProperty(p)&&Cn(h)},l),l.g={}}Uo.prototype.N=function(){Uo.aa.N.call(this),ky(this)},Uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xd=a.JSON.stringify,SC=a.JSON.parse,CC=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Jd(){}Jd.prototype.h=null;function Py(l){return l.h||(l.h=l.i())}function Ny(){}var Bo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zd(){ce.call(this,"d")}x(Zd,ce);function eh(){ce.call(this,"c")}x(eh,ce);var Ni={},by=null;function Wl(){return by=by||new ne}Ni.La="serverreachability";function Dy(l){ce.call(this,Ni.La,l)}x(Dy,ce);function zo(l){const h=Wl();Ge(h,new Dy(h))}Ni.STAT_EVENT="statevent";function Oy(l,h){ce.call(this,Ni.STAT_EVENT,l),this.stat=h}x(Oy,ce);function Ut(l){const h=Wl();Ge(h,new Oy(h,l))}Ni.Ma="timingevent";function Ly(l,h){ce.call(this,Ni.Ma,l),this.size=h}x(Ly,ce);function $o(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Wo(){this.g=!0}Wo.prototype.xa=function(){this.g=!1};function xC(l,h,p,_,O,L){l.info(function(){if(l.g)if(L)for(var $="",Ce=L.split("&"),_t=0;_t<Ce.length;_t++){var Ee=Ce[_t].split("=");if(1<Ee.length){var kt=Ee[0];Ee=Ee[1];var Pt=kt.split("_");$=2<=Pt.length&&Pt[1]=="type"?$+(kt+"="+Ee+"&"):$+(kt+"=redacted&")}}else $=null;else $=L;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+h+`
`+p+`
`+$})}function RC(l,h,p,_,O,L,$){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+h+`
`+p+`
`+L+" "+$})}function Ss(l,h,p,_){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+kC(l,p)+(_?" "+_:"")})}function AC(l,h){l.info(function(){return"TIMEOUT: "+h})}Wo.prototype.info=function(){};function kC(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var O=_[1];if(Array.isArray(O)&&!(1>O.length)){var L=O[0];if(L!="noop"&&L!="stop"&&L!="close")for(var $=1;$<O.length;$++)O[$]=""}}}}return Xd(p)}catch{return h}}var Hl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},th;function ql(){}x(ql,Jd),ql.prototype.g=function(){return new XMLHttpRequest},ql.prototype.i=function(){return{}},th=new ql;function Or(l,h,p,_){this.j=l,this.i=h,this.l=p,this.R=_||1,this.U=new Uo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new My}function My(){this.i=null,this.g="",this.h=!1}var Vy={},nh={};function rh(l,h,p){l.L=1,l.v=Yl(or(h)),l.m=p,l.P=!0,Fy(l,null)}function Fy(l,h){l.F=Date.now(),Gl(l),l.A=or(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),Zy(p.i,"t",_),l.C=0,p=l.j.J,l.h=new My,l.g=yv(l.j,p?h:null,!l.m),0<l.O&&(l.M=new IC(g(l.Y,l,l.g),l.O)),h=l.U,p=l.g,_=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(Ay[0]=O.toString()),O=Ay);for(var L=0;L<O.length;L++){var $=Pe(p,O[L],_||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=l.H?w(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),zo(),xC(l.i,l.u,l.A,l.l,l.R,l.m)}Or.prototype.ca=function(l){l=l.target;const h=this.M;h&&ar(l)==3?h.j():this.Y(l)},Or.prototype.Y=function(l){try{if(l==this.g)e:{const Pt=ar(this.g);var h=this.g.Ba();const Rs=this.g.Z();if(!(3>Pt)&&(Pt!=3||this.g&&(this.h.h||this.g.oa()||ov(this.g)))){this.J||Pt!=4||h==7||(h==8||0>=Rs?zo(3):zo(2)),ih(this);var p=this.g.Z();this.X=p;t:if(Uy(this)){var _=ov(this.g);l="";var O=_.length,L=ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bi(this),Ho(this);var $="";break t}this.h.i=new a.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,l+=this.h.i.decode(_[h],{stream:!(L&&h==O-1)});_.length=0,this.h.g+=l,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,RC(this.i,this.u,this.A,this.l,this.R,Pt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,_t=this.g;if((Ce=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(Ce)){var Ee=Ce;break t}}Ee=null}if(p=Ee)Ss(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sh(this,p);else{this.o=!1,this.s=3,Ut(12),bi(this),Ho(this);break e}}if(this.P){p=!0;let Rn;for(;!this.J&&this.C<$.length;)if(Rn=PC(this,$),Rn==nh){Pt==4&&(this.s=4,Ut(14),p=!1),Ss(this.i,this.l,null,"[Incomplete Response]");break}else if(Rn==Vy){this.s=4,Ut(15),Ss(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else Ss(this.i,this.l,Rn,null),sh(this,Rn);if(Uy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pt!=4||$.length!=0||this.h.h||(this.s=1,Ut(16),p=!1),this.o=this.o&&p,!p)Ss(this.i,this.l,$,"[Invalid Chunked Response]"),bi(this),Ho(this);else if(0<$.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),dh(kt),kt.M=!0,Ut(11))}}else Ss(this.i,this.l,$,null),sh(this,$);Pt==4&&bi(this),this.o&&!this.J&&(Pt==4?fv(this.j,this):(this.o=!1,Gl(this)))}else GC(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,Ut(12)):(this.s=0,Ut(13)),bi(this),Ho(this)}}}catch{}finally{}};function Uy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function PC(l,h){var p=l.C,_=h.indexOf(`
`,p);return _==-1?nh:(p=Number(h.substring(p,_)),isNaN(p)?Vy:(_+=1,_+p>h.length?nh:(h=h.slice(_,_+p),l.C=_+p,h)))}Or.prototype.cancel=function(){this.J=!0,bi(this)};function Gl(l){l.S=Date.now()+l.I,By(l,l.I)}function By(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=$o(g(l.ba,l),h)}function ih(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Or.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(AC(this.i,this.A),this.L!=2&&(zo(),Ut(17)),bi(this),this.s=2,Ho(this)):By(this,this.S-l)};function Ho(l){l.j.G==0||l.J||fv(l.j,l)}function bi(l){ih(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,ky(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function sh(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||oh(p.h,l))){if(!l.K&&oh(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)tc(p),Zl(p);else break e;uh(p),Ut(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=$o(g(p.Za,p),6e3));if(1>=Wy(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Oi(p,11)}else if((l.K||p.g==l)&&tc(p),!y(h))for(O=p.Da.g.parse(h),h=0;h<O.length;h++){let Ee=O[h];if(p.T=Ee[0],Ee=Ee[1],p.G==2)if(Ee[0]=="c"){p.K=Ee[1],p.ia=Ee[2];const kt=Ee[3];kt!=null&&(p.la=kt,p.j.info("VER="+p.la));const Pt=Ee[4];Pt!=null&&(p.Aa=Pt,p.j.info("SVER="+p.Aa));const Rs=Ee[5];Rs!=null&&typeof Rs=="number"&&0<Rs&&(_=1.5*Rs,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Rn=l.g;if(Rn){const rc=Rn.g?Rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rc){var L=_.h;L.g||rc.indexOf("spdy")==-1&&rc.indexOf("quic")==-1&&rc.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(ah(L,L.h),L.h=null))}if(_.D){const hh=Rn.g?Rn.g.getResponseHeader("X-HTTP-Session-Id"):null;hh&&(_.ya=hh,Ne(_.I,_.D,hh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var $=l;if(_.qa=gv(_,_.J?_.ia:null,_.W),$.K){Hy(_.h,$);var Ce=$,_t=_.L;_t&&(Ce.I=_t),Ce.B&&(ih(Ce),Gl(Ce)),_.g=$}else dv(_);0<p.i.length&&ec(p)}else Ee[0]!="stop"&&Ee[0]!="close"||Oi(p,7);else p.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?Oi(p,7):ch(p):Ee[0]!="noop"&&p.l&&p.l.ta(Ee),p.v=0)}}zo(4)}catch{}}var NC=class{constructor(l,h){this.g=l,this.map=h}};function zy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $y(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Wy(l){return l.h?1:l.g?l.g.size:0}function oh(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function ah(l,h){l.g?l.g.add(h):l.h=h}function Hy(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}zy.prototype.cancel=function(){if(this.i=qy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function qy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return P(l.i)}function bC(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var h=[],p=l.length,_=0;_<p;_++)h.push(l[_]);return h}h=[],p=0;for(_ in l)h[p++]=l[_];return h}function DC(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const _ in l)h[p++]=_;return h}}}function Gy(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=DC(l),_=bC(l),O=_.length,L=0;L<O;L++)h.call(void 0,_[L],p&&p[L],l)}var Ky=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OC(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),O=null;if(0<=_){var L=l[p].substring(0,_);O=l[p].substring(_+1)}else L=l[p];h(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Di(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Di){this.h=l.h,Kl(this,l.j),this.o=l.o,this.g=l.g,Ql(this,l.s),this.l=l.l;var h=l.i,p=new Ko;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Qy(this,p),this.m=l.m}else l&&(h=String(l).match(Ky))?(this.h=!1,Kl(this,h[1]||"",!0),this.o=qo(h[2]||""),this.g=qo(h[3]||"",!0),Ql(this,h[4]),this.l=qo(h[5]||"",!0),Qy(this,h[6]||"",!0),this.m=qo(h[7]||"")):(this.h=!1,this.i=new Ko(null,this.h))}Di.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Go(h,Yy,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Go(h,Yy,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Go(p,p.charAt(0)=="/"?MC:jC,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Go(p,FC)),l.join("")};function or(l){return new Di(l)}function Kl(l,h,p){l.j=p?qo(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Ql(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Qy(l,h,p){h instanceof Ko?(l.i=h,UC(l.i,l.h)):(p||(h=Go(h,VC)),l.i=new Ko(h,l.h))}function Ne(l,h,p){l.i.set(h,p)}function Yl(l){return Ne(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function qo(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Go(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,LC),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function LC(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Yy=/[#\/\?@]/g,jC=/[#\?:]/g,MC=/[#\?]/g,VC=/[#\?@]/g,FC=/#/g;function Ko(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function Lr(l){l.g||(l.g=new Map,l.h=0,l.i&&OC(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Ko.prototype,t.add=function(l,h){Lr(this),this.i=null,l=Cs(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function Xy(l,h){Lr(l),h=Cs(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Jy(l,h){return Lr(l),h=Cs(l,h),l.g.has(h)}t.forEach=function(l,h){Lr(this),this.g.forEach(function(p,_){p.forEach(function(O){l.call(h,O,_,this)},this)},this)},t.na=function(){Lr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const O=l[_];for(let L=0;L<O.length;L++)p.push(h[_])}return p},t.V=function(l){Lr(this);let h=[];if(typeof l=="string")Jy(this,l)&&(h=h.concat(this.g.get(Cs(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return Lr(this),this.i=null,l=Cs(this,l),Jy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Zy(l,h,p){Xy(l,h),0<p.length&&(l.i=null,l.g.set(Cs(l,h),P(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const L=encodeURIComponent(String(_)),$=this.V(_);for(_=0;_<$.length;_++){var O=L;$[_]!==""&&(O+="="+encodeURIComponent(String($[_]))),l.push(O)}}return this.i=l.join("&")};function Cs(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function UC(l,h){h&&!l.j&&(Lr(l),l.i=null,l.g.forEach(function(p,_){var O=_.toLowerCase();_!=O&&(Xy(this,_),Zy(this,O,p))},l)),l.j=h}function BC(l,h){const p=new Wo;if(a.Image){const _=new Image;_.onload=E(jr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=E(jr,p,"TestLoadImage: error",!1,h,_),_.onabort=E(jr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=E(jr,p,"TestLoadImage: timeout",!1,h,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else h(!1)}function zC(l,h){const p=new Wo,_=new AbortController,O=setTimeout(()=>{_.abort(),jr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:_.signal}).then(L=>{clearTimeout(O),L.ok?jr(p,"TestPingServer: ok",!0,h):jr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),jr(p,"TestPingServer: error",!1,h)})}function jr(l,h,p,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(p)}catch{}}function $C(){this.g=new CC}function WC(l,h,p){const _=p||"";try{Gy(l,function(O,L){let $=O;u(O)&&($=Xd(O)),h.push(_+L+"="+encodeURIComponent($))})}catch(O){throw h.push(_+"type="+encodeURIComponent("_badmap")),O}}function Qo(l){this.l=l.Ub||null,this.j=l.eb||!1}x(Qo,Jd),Qo.prototype.g=function(){return new Xl(this.l,this.j)},Qo.prototype.i=function(l){return function(){return l}}({});function Xl(l,h){ne.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Xl,ne),t=Xl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,Xo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Xo(this)),this.g&&(this.readyState=3,Xo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ev(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ev(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Yo(this):Xo(this),this.readyState==3&&ev(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Yo(this))},t.Qa=function(l){this.g&&(this.response=l,Yo(this))},t.ga=function(){this.g&&Yo(this)};function Yo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Xo(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function Xo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Xl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function tv(l){let h="";return M(l,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function lh(l,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=tv(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Ne(l,h,p))}function Ke(l){ne.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ke,ne);var HC=/^https?$/i,qC=["POST","PUT"];t=Ke.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():th.g(),this.v=this.o?Py(this.o):Py(th),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(L){nv(this,L);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)p.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())p.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(qC,h,void 0))||_||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of p)this.g.setRequestHeader(L,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sv(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){nv(this,L)}};function nv(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,rv(l),Jl(l)}function rv(l){l.A||(l.A=!0,Ge(l,"complete"),Ge(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Ge(this,"complete"),Ge(this,"abort"),Jl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jl(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?iv(this):this.bb())},t.bb=function(){iv(this)};function iv(l){if(l.h&&typeof o<"u"&&(!l.v[1]||ar(l)!=4||l.Z()!=2)){if(l.u&&ar(l)==4)xy(l.Ea,0,l);else if(Ge(l,"readystatechange"),ar(l)==4){l.h=!1;try{const $=l.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=$===0){var O=String(l.D).match(Ky)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),_=!HC.test(O?O.toLowerCase():"")}p=_}if(p)Ge(l,"complete"),Ge(l,"success");else{l.m=6;try{var L=2<ar(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",rv(l)}}finally{Jl(l)}}}}function Jl(l,h){if(l.g){sv(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Ge(l,"ready");try{p.onreadystatechange=_}catch{}}}function sv(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function ar(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<ar(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),SC(h)}};function ov(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function GC(l){const h={};l=(l.g&&2<=ar(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(y(l[_]))continue;var p=N(l[_]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=h[O]||[];h[O]=L,L.push(p)}S(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jo(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function av(l){this.Aa=0,this.i=[],this.j=new Wo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jo("baseRetryDelayMs",5e3,l),this.cb=Jo("retryDelaySeedMs",1e4,l),this.Wa=Jo("forwardChannelMaxRetries",2,l),this.wa=Jo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new zy(l&&l.concurrentRequestLimit),this.Da=new $C,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=av.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,_){Ut(0),this.W=l,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=gv(this,null,this.W),ec(this)};function ch(l){if(lv(l),l.G==3){var h=l.U++,p=or(l.I);if(Ne(p,"SID",l.K),Ne(p,"RID",h),Ne(p,"TYPE","terminate"),Zo(l,p),h=new Or(l,l.j,h),h.L=2,h.v=Yl(or(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=yv(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Gl(h)}mv(l)}function Zl(l){l.g&&(dh(l),l.g.cancel(),l.g=null)}function lv(l){Zl(l),l.u&&(a.clearTimeout(l.u),l.u=null),tc(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ec(l){if(!$y(l.h)&&!l.s){l.s=!0;var h=l.Ga;ot||Z(),B||(ot(),B=!0),X.add(h,l),l.B=0}}function KC(l,h){return Wy(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=$o(g(l.Ga,l,h),pv(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new Or(this,this.j,l);let L=this.o;if(this.S&&(L?(L=w(L),R(L,this.S)):L=this.S),this.m!==null||this.O||(O.H=L,L=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=uv(this,O,h),p=or(this.I),Ne(p,"RID",l),Ne(p,"CVER",22),this.D&&Ne(p,"X-HTTP-Session-Id",this.D),Zo(this,p),L&&(this.O?h="headers="+encodeURIComponent(String(tv(L)))+"&"+h:this.m&&lh(p,this.m,L)),ah(this.h,O),this.Ua&&Ne(p,"TYPE","init"),this.P?(Ne(p,"$req",h),Ne(p,"SID","null"),O.T=!0,rh(O,p,null)):rh(O,p,h),this.G=2}}else this.G==3&&(l?cv(this,l):this.i.length==0||$y(this.h)||cv(this))};function cv(l,h){var p;h?p=h.l:p=l.U++;const _=or(l.I);Ne(_,"SID",l.K),Ne(_,"RID",p),Ne(_,"AID",l.T),Zo(l,_),l.m&&l.o&&lh(_,l.m,l.o),p=new Or(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=uv(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ah(l.h,p),rh(p,_,h)}function Zo(l,h){l.H&&M(l.H,function(p,_){Ne(h,_,p)}),l.l&&Gy({},function(p,_){Ne(h,_,p)})}function uv(l,h,p){p=Math.min(l.i.length,p);var _=l.l?g(l.l.Na,l.l,l):null;e:{var O=l.i;let L=-1;for(;;){const $=["count="+p];L==-1?0<p?(L=O[0].g,$.push("ofs="+L)):L=0:$.push("ofs="+L);let Ce=!0;for(let _t=0;_t<p;_t++){let Ee=O[_t].g;const kt=O[_t].map;if(Ee-=L,0>Ee)L=Math.max(0,O[_t].g-100),Ce=!1;else try{WC(kt,$,"req"+Ee+"_")}catch{_&&_(kt)}}if(Ce){_=$.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,_}function dv(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;ot||Z(),B||(ot(),B=!0),X.add(h,l),l.v=0}}function uh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=$o(g(l.Fa,l),pv(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,hv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=$o(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ut(10),Zl(this),hv(this))};function dh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function hv(l){l.g=new Or(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=or(l.qa);Ne(h,"RID","rpc"),Ne(h,"SID",l.K),Ne(h,"AID",l.T),Ne(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ne(h,"TO",l.ja),Ne(h,"TYPE","xmlhttp"),Zo(l,h),l.m&&l.o&&lh(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Yl(or(h)),p.m=null,p.P=!0,Fy(p,l)}t.Za=function(){this.C!=null&&(this.C=null,Zl(this),uh(this),Ut(19))};function tc(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function fv(l,h){var p=null;if(l.g==h){tc(l),dh(l),l.g=null;var _=2}else if(oh(l.h,h))p=h.D,Hy(l.h,h),_=1;else return;if(l.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var O=l.B;_=Wl(),Ge(_,new Ly(_,p)),ec(l)}else dv(l);else if(O=h.s,O==3||O==0&&0<h.X||!(_==1&&KC(l,h)||_==2&&uh(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),O){case 1:Oi(l,5);break;case 4:Oi(l,10);break;case 3:Oi(l,6);break;default:Oi(l,2)}}}function pv(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function Oi(l,h){if(l.j.info("Error code "+h),h==2){var p=g(l.fb,l),_=l.Xa;const O=!_;_=new Di(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Kl(_,"https"),Yl(_),O?BC(_.toString(),p):zC(_.toString(),p)}else Ut(2);l.G=0,l.l&&l.l.sa(h),mv(l),lv(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function mv(l){if(l.G=0,l.ka=[],l.l){const h=qy(l.h);(h.length!=0||l.i.length!=0)&&(k(l.ka,h),k(l.ka,l.i),l.h.i.length=0,P(l.i),l.i.length=0),l.l.ra()}}function gv(l,h,p){var _=p instanceof Di?or(p):new Di(p);if(_.g!="")h&&(_.g=h+"."+_.g),Ql(_,_.s);else{var O=a.location;_=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var L=new Di(null);_&&Kl(L,_),h&&(L.g=h),O&&Ql(L,O),p&&(L.l=p),_=L}return p=l.D,h=l.ya,p&&h&&Ne(_,p,h),Ne(_,"VER",l.la),Zo(l,_),_}function yv(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Ke(new Qo({eb:p})):new Ke(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function vv(){}t=vv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function nc(){}nc.prototype.g=function(l,h){return new tn(l,h)};function tn(l,h){ne.call(this),this.g=new av(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!y(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new xs(this)}x(tn,ne),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){ch(this.g)},tn.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Xd(l),l=p);h.i.push(new NC(h.Ya++,l)),h.G==3&&ec(h)},tn.prototype.N=function(){this.g.l=null,delete this.j,ch(this.g),delete this.g,tn.aa.N.call(this)};function _v(l){Zd.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}x(_v,Zd);function wv(){eh.call(this),this.status=1}x(wv,eh);function xs(l){this.g=l}x(xs,vv),xs.prototype.ua=function(){Ge(this.g,"a")},xs.prototype.ta=function(l){Ge(this.g,new _v(l))},xs.prototype.sa=function(l){Ge(this.g,new wv)},xs.prototype.ra=function(){Ge(this.g,"b")},nc.prototype.createWebChannel=nc.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,LT=function(){return new nc},OT=function(){return Wl()},DT=Ni,mp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hl.NO_ERROR=0,Hl.TIMEOUT=8,Hl.HTTP_ERROR=6,$c=Hl,jy.COMPLETE="complete",bT=jy,Ny.EventType=Bo,Bo.OPEN="a",Bo.CLOSE="b",Bo.ERROR="c",Bo.MESSAGE="d",ne.prototype.listen=ne.prototype.K,ga=Ny,NT=Qo,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,PT=Ke}).apply(typeof Ec<"u"?Ec:typeof self<"u"?self:typeof window<"u"?window:{});const Q_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo="10.13.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new tg("@firebase/firestore");function la(){return is.logLevel}function q(t,...e){if(is.logLevel<=ge.DEBUG){const n=e.map(ig);is.debug(`Firestore (${bo}): ${t}`,...n)}}function Ir(t,...e){if(is.logLevel<=ge.ERROR){const n=e.map(ig);is.error(`Firestore (${bo}): ${t}`,...n)}}function yo(t,...e){if(is.logLevel<=ge.WARN){const n=e.map(ig);is.warn(`Firestore (${bo}): ${t}`,...n)}}function ig(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: `+t;throw Ir(e),new Error(e)}function xe(t,e){t||re()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends sr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ot.UNAUTHENTICATED))}shutdown(){}}class JP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ZP{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new jT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new Ot(e)}}class eN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new eN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new nN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=iN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function vo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new pt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new pt(0,0))}static max(){return new ie(new pt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ol.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ol?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends ol{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const sN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends ol{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return sN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new H(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Le.fromString(e))}static fromName(e){return new J(Le.fromString(e).popFirst(5))}static empty(){return new J(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Le(e.slice()))}}function oN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new pt(n+1,0):new pt(n,r));return new gi(i,J.empty(),e)}function aN(t){return new gi(t.readTime,t.key,-1)}class gi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gi(ie.min(),J.empty(),-1)}static max(){return new gi(ie.max(),J.empty(),-1)}}function lN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==cN)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++a,a===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function dN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}sg.oe=-1;function gd(t){return t==null}function Au(t){return t===0&&1/t==-1/0}function hN(t){return typeof t=="number"&&Number.isInteger(t)&&!Au(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function VT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tc(this.root,e,this.comparator,!0)}}class Tc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Et.RED,this.left=i??Et.EMPTY,this.right=s??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new X_(this.data.getIterator())}getIteratorFrom(e){return new X_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new St(this.comparator);return n.data=e,n}}class X_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new sn([])}unionWith(e){let n=new St(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new FT("Invalid base64 string: "+s):s}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const fN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yi(t){if(xe(!!t),typeof t=="string"){let e=0;const n=fN.exec(t);if(xe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rt(t.seconds),nanos:rt(t.nanos)}}function rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ss(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ag(t){const e=t.mapValue.fields.__previous_value__;return og(e)?ag(e):e}function al(t){const e=yi(t.mapValue.fields.__local_write_time__.timestampValue);return new pt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,n,r,i,s,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class ll{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ll("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ll&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?og(t)?4:gN(t)?9007199254740991:mN(t)?10:11:re()}function nr(t,e){if(t===e)return!0;const n=os(t);if(n!==os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return al(t).isEqual(al(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=yi(i.timestampValue),a=yi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ss(i.bytesValue).isEqual(ss(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return rt(i.geoPointValue.latitude)===rt(s.geoPointValue.latitude)&&rt(i.geoPointValue.longitude)===rt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return rt(i.integerValue)===rt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=rt(i.doubleValue),a=rt(s.doubleValue);return o===a?Au(o)===Au(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return vo(t.arrayValue.values||[],e.arrayValue.values||[],nr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Y_(o)!==Y_(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!nr(o[c],a[c])))return!1;return!0}(t,e);default:return re()}}function cl(t,e){return(t.values||[]).find(n=>nr(n,e))!==void 0}function _o(t,e){if(t===e)return 0;const n=os(t),r=os(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=rt(s.integerValue||s.doubleValue),c=rt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return J_(t.timestampValue,e.timestampValue);case 4:return J_(al(t),al(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ss(s),c=ss(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const f=Te(a[u],c[u]);if(f!==0)return f}return Te(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Te(rt(s.latitude),rt(o.latitude));return a!==0?a:Te(rt(s.longitude),rt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Z_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,c,u,f;const m=s.fields||{},g=o.fields||{},E=(a=m.value)===null||a===void 0?void 0:a.arrayValue,x=(c=g.value)===null||c===void 0?void 0:c.arrayValue,P=Te(((u=E==null?void 0:E.values)===null||u===void 0?void 0:u.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:Z_(E,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ic.mapValue&&o===Ic.mapValue)return 0;if(s===Ic.mapValue)return 1;if(o===Ic.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const g=Te(c[m],f[m]);if(g!==0)return g;const E=_o(a[c[m]],u[f[m]]);if(E!==0)return E}return Te(c.length,f.length)}(t.mapValue,e.mapValue);default:throw re()}}function J_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=yi(t),r=yi(e),i=Te(n.seconds,r.seconds);return i!==0?i:Te(n.nanos,r.nanos)}function Z_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=_o(n[i],r[i]);if(s)return s}return Te(n.length,r.length)}function wo(t){return gp(t)}function gp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=yi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ss(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=gp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${gp(n.fields[o])}`;return i+"}"}(t.mapValue):re()}function e0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yp(t){return!!t&&"integerValue"in t}function lg(t){return!!t&&"arrayValue"in t}function t0(t){return!!t&&"nullValue"in t}function n0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wc(t){return!!t&&"mapValue"in t}function mN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ba(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ys(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ba(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ba(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ba(n)}setAll(e){let n=Tt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ba(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ys(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Qt(ba(this.value))}}function UT(t){const e=[];return ys(t.fields,(n,r)=>{const i=new Tt([n]);if(Wc(r)){const s=UT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new jt(e,0,ie.min(),ie.min(),ie.min(),Qt.empty(),0)}static newFoundDocument(e,n,r,i){return new jt(e,1,n,ie.min(),r,i,0)}static newNoDocument(e,n){return new jt(e,2,n,ie.min(),ie.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new jt(e,3,n,ie.min(),ie.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n){this.position=e,this.inclusive=n}}function r0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=_o(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function i0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n="asc"){this.field=e,this.dir=n}}function yN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{}class ut extends BT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _N(e,n,r):n==="array-contains"?new TN(e,r):n==="in"?new IN(e,r):n==="not-in"?new SN(e,r):n==="array-contains-any"?new CN(e,r):new ut(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wN(e,r):new EN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_o(n,this.value)):n!==null&&os(this.value)===os(n)&&this.matchesComparison(_o(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends BT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new jn(e,n)}matches(e){return zT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zT(t){return t.op==="and"}function $T(t){return vN(t)&&zT(t)}function vN(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function vp(t){if(t instanceof ut)return t.field.canonicalString()+t.op.toString()+wo(t.value);if($T(t))return t.filters.map(e=>vp(e)).join(",");{const e=t.filters.map(n=>vp(n)).join(",");return`${t.op}(${e})`}}function WT(t,e){return t instanceof ut?function(r,i){return i instanceof ut&&r.op===i.op&&r.field.isEqual(i.field)&&nr(r.value,i.value)}(t,e):t instanceof jn?function(r,i){return i instanceof jn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&WT(o,i.filters[a]),!0):!1}(t,e):void re()}function HT(t){return t instanceof ut?function(n){return`${n.field.canonicalString()} ${n.op} ${wo(n.value)}`}(t):t instanceof jn?function(n){return n.op.toString()+" {"+n.getFilters().map(HT).join(" ,")+"}"}(t):"Filter"}class _N extends ut{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class wN extends ut{constructor(e,n){super(e,"in",n),this.keys=qT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class EN extends ut{constructor(e,n){super(e,"not-in",n),this.keys=qT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class TN extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lg(n)&&cl(n.arrayValue,this.value)}}class IN extends ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&cl(this.value.arrayValue,n)}}class SN extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!cl(this.value.arrayValue,n)}}class CN extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>cl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function s0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new xN(t,e,n,r,i,s,o)}function cg(t){const e=se(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>wo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>wo(r)).join(",")),e.ue=n}return e.ue}function ug(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!WT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!i0(t.startAt,e.startAt)&&i0(t.endAt,e.endAt)}function _p(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function RN(t,e,n,r,i,s,o,a){return new Rl(t,e,n,r,i,s,o,a)}function yd(t){return new Rl(t)}function o0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function GT(t){return t.collectionGroup!==null}function Da(t){const e=se(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new St(Tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Pu(s,r))}),n.has(Tt.keyField().canonicalString())||e.ce.push(new Pu(Tt.keyField(),r))}return e.ce}function Jn(t){const e=se(t);return e.le||(e.le=AN(e,Da(t))),e.le}function AN(t,e){if(t.limitType==="F")return s0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Pu(i.field,s)});const n=t.endAt?new ku(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ku(t.startAt.position,t.startAt.inclusive):null;return s0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wp(t,e){const n=t.filters.concat([e]);return new Rl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ep(t,e,n){return new Rl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vd(t,e){return ug(Jn(t),Jn(e))&&t.limitType===e.limitType}function KT(t){return`${cg(Jn(t))}|lt:${t.limitType}`}function bs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>HT(i)).join(", ")}]`),gd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>wo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>wo(i)).join(",")),`Target(${r})`}(Jn(t))}; limitType=${t.limitType})`}function _d(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Da(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=r0(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Da(r),i)||r.endAt&&!function(o,a,c){const u=r0(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Da(r),i))}(t,e)}function kN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function QT(t){return(e,n)=>{let r=!1;for(const i of Da(t)){const s=PN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function PN(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?_o(c,u):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return VT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN=new qe(J.comparator);function Sr(){return NN}const YT=new qe(J.comparator);function ya(...t){let e=YT;for(const n of t)e=e.insert(n.key,n);return e}function XT(t){let e=YT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wi(){return Oa()}function JT(){return Oa()}function Oa(){return new Do(t=>t.toString(),(t,e)=>t.isEqual(e))}const bN=new qe(J.comparator),DN=new St(J.comparator);function pe(...t){let e=DN;for(const n of t)e=e.add(n);return e}const ON=new St(Te);function LN(){return ON}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Au(e)?"-0":e}}function ZT(t){return{integerValue:""+t}}function jN(t,e){return hN(e)?ZT(e):dg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this._=void 0}}function MN(t,e,n){return t instanceof Nu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&og(s)&&(s=ag(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Eo?tI(t,e):t instanceof To?nI(t,e):function(i,s){const o=eI(i,s),a=a0(o)+a0(i.Pe);return yp(o)&&yp(i.Pe)?ZT(a):dg(i.serializer,a)}(t,e)}function VN(t,e,n){return t instanceof Eo?tI(t,e):t instanceof To?nI(t,e):n}function eI(t,e){return t instanceof bu?function(r){return yp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Nu extends wd{}class Eo extends wd{constructor(e){super(),this.elements=e}}function tI(t,e){const n=rI(e);for(const r of t.elements)n.some(i=>nr(i,r))||n.push(r);return{arrayValue:{values:n}}}class To extends wd{constructor(e){super(),this.elements=e}}function nI(t,e){let n=rI(e);for(const r of t.elements)n=n.filter(i=>!nr(i,r));return{arrayValue:{values:n}}}class bu extends wd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function a0(t){return rt(t.integerValue||t.doubleValue)}function rI(t){return lg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n){this.field=e,this.transform=n}}function FN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Eo&&i instanceof Eo||r instanceof To&&i instanceof To?vo(r.elements,i.elements,nr):r instanceof bu&&i instanceof bu?nr(r.Pe,i.Pe):r instanceof Nu&&i instanceof Nu}(t.transform,e.transform)}class UN{constructor(e,n){this.version=e,this.transformResults=n}}class En{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ed{}function sI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hg(t.key,En.none()):new Al(t.key,t.data,En.none());{const n=t.data,r=Qt.empty();let i=new St(Tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ri(t.key,r,new sn(i.toArray()),En.none())}}function BN(t,e,n){t instanceof Al?function(i,s,o){const a=i.value.clone(),c=c0(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ri?function(i,s,o){if(!Hc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=c0(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(oI(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function La(t,e,n,r){return t instanceof Al?function(s,o,a,c){if(!Hc(s.precondition,o))return a;const u=s.value.clone(),f=u0(s.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ri?function(s,o,a,c){if(!Hc(s.precondition,o))return a;const u=u0(s.fieldTransforms,c,o),f=o.data;return f.setAll(oI(s)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,a){return Hc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function zN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=eI(r.transform,i||null);s!=null&&(n===null&&(n=Qt.empty()),n.set(r.field,s))}return n||null}function l0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&vo(r,i,(s,o)=>FN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Al extends Ed{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ri extends Ed{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function oI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function c0(t,e,n){const r=new Map;xe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,VN(o,a,n[i]))}return r}function u0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,MN(s,o,e))}return r}class hg extends Ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $N extends Ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&BN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=La(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=La(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=JT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=sI(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),pe())}isEqual(e){return this.batchId===e.batchId&&vo(this.mutations,e.mutations,(n,r)=>l0(n,r))&&vo(this.baseMutations,e.baseMutations,(n,r)=>l0(n,r))}}class fg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){xe(e.mutations.length===r.length);let i=function(){return bN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new fg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,ye;function GN(t){switch(t){default:return re();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function aI(t){if(t===void 0)return Ir("GRPC error has no .code"),V.UNKNOWN;switch(t){case lt.OK:return V.OK;case lt.CANCELLED:return V.CANCELLED;case lt.UNKNOWN:return V.UNKNOWN;case lt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case lt.INTERNAL:return V.INTERNAL;case lt.UNAVAILABLE:return V.UNAVAILABLE;case lt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case lt.NOT_FOUND:return V.NOT_FOUND;case lt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case lt.ABORTED:return V.ABORTED;case lt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case lt.DATA_LOSS:return V.DATA_LOSS;default:return re()}}(ye=lt||(lt={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=new Gi([4294967295,4294967295],0);function d0(t){const e=KN().encode(t),n=new kT;return n.update(e),new Uint8Array(n.digest())}function h0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Gi([n,r],0),new Gi([i,s],0)]}class pg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new va(`Invalid padding: ${n}`);if(r<0)throw new va(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new va(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new va(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Gi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Gi.fromNumber(r)));return i.compare(QN)===1&&(i=new Gi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=d0(e),[r,i]=h0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new pg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=d0(e),[r,i]=h0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,kl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Td(ie.min(),i,new qe(Te),Sr(),pe())}}class kl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new kl(r,n,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class lI{constructor(e,n){this.targetId=e,this.me=n}}class cI{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class f0{constructor(){this.fe=0,this.ge=m0(),this.pe=Rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=pe(),n=pe(),r=pe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new kl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=m0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class YN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Sr(),this.qe=p0(),this.Qe=new qe(Te)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(_p(s))if(r===0){const o=new J(s.path);this.Ue(n,o,jt.newNoDocument(o,ie.min()))}else xe(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ss(r).toUint8Array()}catch(c){if(c instanceof FT)return yo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new pg(o,i,s)}catch(c){return yo(c instanceof va?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&_p(a.target)){const c=new J(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,jt.newNoDocument(c,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=pe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Td(e,n,this.Qe,this.ke,r);return this.ke=Sr(),this.qe=p0(),this.Qe=new qe(Te),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new f0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new St(Te),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new f0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function p0(){return new qe(J.comparator)}function m0(){return new qe(J.comparator)}const XN={asc:"ASCENDING",desc:"DESCENDING"},JN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ZN={and:"AND",or:"OR"};class eb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tp(t,e){return t.useProto3Json||gd(e)?e:{value:e}}function Du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function tb(t,e){return Du(t,e.toTimestamp())}function Zn(t){return xe(!!t),ie.fromTimestamp(function(n){const r=yi(n);return new pt(r.seconds,r.nanos)}(t))}function mg(t,e){return Ip(t,e).canonicalString()}function Ip(t,e){const n=function(i){return new Le(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dI(t){const e=Le.fromString(t);return xe(gI(e)),e}function Sp(t,e){return mg(t.databaseId,e.path)}function Hh(t,e){const n=dI(e);if(n.get(1)!==t.databaseId.projectId)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(fI(n))}function hI(t,e){return mg(t.databaseId,e)}function nb(t){const e=dI(t);return e.length===4?Le.emptyPath():fI(e)}function Cp(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fI(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function g0(t,e,n){return{name:Sp(t,e),fields:n.value.mapValue.fields}}function rb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,f){return u.useProto3Json?(xe(f===void 0||typeof f=="string"),Rt.fromBase64String(f||"")):(xe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const f=u.code===void 0?V.UNKNOWN:aI(u.code);return new H(f,u.message||"")}(o);n=new cI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Hh(t,r.document.name),s=Zn(r.document.updateTime),o=r.document.createTime?Zn(r.document.createTime):ie.min(),a=new Qt({mapValue:{fields:r.document.fields}}),c=jt.newFoundDocument(i,s,o,a),u=r.targetIds||[],f=r.removedTargetIds||[];n=new qc(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Hh(t,r.document),s=r.readTime?Zn(r.readTime):ie.min(),o=jt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new qc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Hh(t,r.document),s=r.removedTargetIds||[];n=new qc([],s,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new qN(i,s),a=r.targetId;n=new lI(a,o)}}return n}function ib(t,e){let n;if(e instanceof Al)n={update:g0(t,e.key,e.value)};else if(e instanceof hg)n={delete:Sp(t,e.key)};else if(e instanceof Ri)n={update:g0(t,e.key,e.data),updateMask:fb(e.fieldMask)};else{if(!(e instanceof $N))return re();n={verify:Sp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Nu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Eo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof To)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof bu)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:tb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re()}(t,e.precondition)),n}function sb(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Zn(i.updateTime):Zn(s);return o.isEqual(ie.min())&&(o=Zn(s)),new UN(o,i.transformResults||[])}(n,e))):[]}function ob(t,e){return{documents:[hI(t,e.path)]}}function ab(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=hI(t,i);const s=function(u){if(u.length!==0)return mI(jn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:Ds(g.field),direction:ub(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Tp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:i}}function lb(t){let e=nb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){xe(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=pI(m);return g instanceof jn&&$T(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(x){return new Pu(Os(x.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(m){let g;return g=typeof m=="object"?m.value:m,gd(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(m){const g=!!m.before,E=m.values||[];return new ku(E,g)}(n.startAt));let u=null;return n.endAt&&(u=function(m){const g=!m.before,E=m.values||[];return new ku(E,g)}(n.endAt)),RN(e,i,o,s,a,"F",c,u)}function cb(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Os(n.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Os(n.unaryFilter.field);return ut.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Os(n.unaryFilter.field);return ut.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Os(n.unaryFilter.field);return ut.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return ut.create(Os(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jn.create(n.compositeFilter.filters.map(r=>pI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function ub(t){return XN[t]}function db(t){return JN[t]}function hb(t){return ZN[t]}function Ds(t){return{fieldPath:t.canonicalString()}}function Os(t){return Tt.fromServerFormat(t.fieldPath)}function mI(t){return t instanceof ut?function(n){if(n.op==="=="){if(n0(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NAN"}};if(t0(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(n0(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NAN"}};if(t0(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ds(n.field),op:db(n.op),value:n.value}}}(t):t instanceof jn?function(n){const r=n.getFilters().map(i=>mI(i));return r.length===1?r[0]:{compositeFilter:{op:hb(n.op),filters:r}}}(t):re()}function fb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,r,i,s=ie.min(),o=ie.min(),a=Rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.ct=e}}function mb(t){const e=lb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ep(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(){this.un=new yb}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(gi.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(gi.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class yb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new St(Le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new St(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Io(0)}static kn(){return new Io(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(){this.changes=new Do(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&La(r.mutation,i,sn.empty(),pt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=pe()){const i=Wi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ya();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,pe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Sr();const o=Oa(),a=function(){return Oa()}();return n.forEach((c,u)=>{const f=r.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof Ri)?s=s.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),La(f.mutation,u,f.mutation.getFieldMask(),pt.now())):o.set(u.key,sn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var m;return a.set(u,new _b(f,(m=o.get(u))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Oa();let i=new qe((o,a)=>o-a),s=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||sn.empty();f=a.applyToLocalView(u,f),r.set(c,f);const m=(i.get(a.batchId)||pe()).add(c);i=i.insert(a.batchId,m)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,f=c.value,m=JT();f.forEach(g=>{if(!s.has(g)){const E=sI(n.get(g),r.get(g));E!==null&&m.set(g,E),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,m))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):GT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Wi());let a=-1,c=s;return o.next(u=>F.forEach(u,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),s.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,pe())).next(f=>({batchId:a,changes:XT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=ya();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ya();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,c=>{const u=function(m,g){return new Rl(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,jt.newInvalidDocument(f)))});let a=ya();return o.forEach((c,u)=>{const f=s.get(c);f!==void 0&&La(f.mutation,u,sn.empty(),pt.now()),_d(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Zn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:mb(i.bundledQuery),readTime:Zn(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(){this.overlays=new qe(J.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wi();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Wi(),s=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new qe((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=s.get(u.largestBatchId);f===null&&(f=Wi(),s=s.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const a=Wi(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>a.set(u,f)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new HN(n,r));let s=this.Ir.get(n);s===void 0&&(s=pe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.Tr=new St(gt.Er),this.dr=new St(gt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new gt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new gt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new J(new Le([])),r=new gt(n,e),i=new gt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new J(new Le([])),r=new gt(n,e),i=new gt(n,e+1);let s=pe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new gt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class gt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return J.comparator(e.key,n.key)||Te(e.wr,n.wr)}static Ar(e,n){return Te(e.wr,n.wr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new St(gt.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new gt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new gt(n,0),i=new gt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new St(Te);return n.forEach(i=>{const s=new gt(i,0),o=new gt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new gt(new J(s),0);let a=new St(Te);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){xe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new gt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new gt(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.Mr=e,this.docs=function(){return new qe(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(e,n){let r=Sr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():jt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Sr();const o=n.path,a=new J(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||lN(aN(f),r)<=0||(i.has(f.key)||_d(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xb(this)}getSize(e){return F.resolve(this.size)}}class xb extends vb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.persistence=e,this.Nr=new Do(n=>cg(n),ug),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Lr=0,this.Br=new gg,this.targetCount=0,this.kr=Io.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Io(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n){this.qr={},this.overlays={},this.Qr=new sg(0),this.Kr=!1,this.Kr=!0,this.$r=new Ib,this.referenceDelegate=e(this),this.Ur=new Rb(this),this.indexManager=new gb,this.remoteDocumentCache=function(i){return new Cb(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new pb(n),this.Gr=new Eb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Tb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Sb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new kb(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class kb extends uN{constructor(e){super(),this.currentSequenceNumber=e}}class yg{constructor(e){this.persistence=e,this.Jr=new gg,this.Yr=null}static Zr(e){return new yg(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=J.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ie.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=pe(),i=pe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new vg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Lk()?8:dN(Ft())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Pb;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(la()<=ge.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",bs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(la()<=ge.DEBUG&&q("QueryEngine","Query:",bs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(la()<=ge.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",bs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jn(n))):F.resolve())}Yi(e,n){if(o0(n))return F.resolve(null);let r=Jn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ep(n,null,"F"),r=Jn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=pe(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(n,a);return this.ns(n,u,o,c.readTime)?this.Yi(e,Ep(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,r,i){return o0(n)||i.isEqual(ie.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(la()<=ge.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),bs(n)),this.rs(e,o,n,oN(i,-1)).next(a=>a))})}ts(e,n){let r=new St(QT(e));return n.forEach((i,s)=>{_d(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return la()<=ge.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",bs(n)),this.Ji.getDocumentsMatchingQuery(e,n,gi.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new qe(Te),this._s=new Do(s=>cg(s),ug),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Db(t,e,n,r){return new bb(t,e,n,r)}async function yI(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=pe();for(const u of i){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of s){a.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function Ob(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,f){const m=u.batch,g=m.keys();let E=F.resolve();return g.forEach(x=>{E=E.next(()=>f.getEntry(c,x)).next(P=>{const k=u.docVersions.get(x);xe(k!==null),P.version.compareTo(k)<0&&(m.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),f.addEntry(P)))})}),E.next(()=>a.mutationQueue.removeMutationBatch(c,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=pe();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function vI(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Lb(t,e){const n=se(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;a.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let E=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?E=E.withResumeToken(Rt.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),i=i.insert(m,E),function(P,k,v){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(g,E,f)&&a.push(n.Ur.updateTargetData(s,E))});let c=Sr(),u=pe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(jb(s,o,e.documentUpdates).next(f=>{c=f.Ps,u=f.Is})),!r.isEqual(ie.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(f)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.os=i,s))}function jb(t,e,n){let r=pe(),i=pe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Sr();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(ie.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function Mb(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Vb(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Zr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function xp(t,e,n){const r=se(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!xl(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function y0(t,e,n){const r=se(t);let i=ie.min(),s=pe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const m=se(c),g=m._s.get(f);return g!==void 0?F.resolve(m.os.get(g)):m.Ur.getTargetData(u,f)}(r,o,Jn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ie.min(),n?s:pe())).next(a=>(Fb(r,kN(e),a),{documents:a,Ts:s})))}function Fb(t,e,n){let r=t.us.get(e)||ie.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class v0{constructor(){this.activeTargetIds=LN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ub{constructor(){this.so=new v0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new v0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc=null;function qh(){return Sc===null?Sc=function(){return 268435456+Math.round(2147483648*Math.random())}():Sc++,"0x"+Sc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="WebChannelConnection";class Wb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=qh(),c=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,s,o),this.No(n,c,u,i).then(f=>(q("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw yo("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",c,"request:",i),f})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=zb[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=qh();return new Promise((o,a)=>{const c=new PT;c.setWithCredentials(!0),c.listenOnce(bT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $c.NO_ERROR:const f=c.getResponseJson();q(Dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case $c.TIMEOUT:q(Dt,`RPC '${e}' ${s} timed out`),a(new H(V.DEADLINE_EXCEEDED,"Request time out"));break;case $c.HTTP_ERROR:const m=c.getStatus();if(q(Dt,`RPC '${e}' ${s} failed with status:`,m,"response text:",c.getResponseText()),m>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const x=function(k){const v=k.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(E.status);a(new H(x,E.message))}else a(new H(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new H(V.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{q(Dt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);q(Dt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}Bo(e,n,r){const i=qh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=LT(),a=OT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new NT({})),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=s.join("");q(Dt,`Creating RPC '${e}' stream ${i}: ${f}`,c);const m=o.createWebChannel(f,c);let g=!1,E=!1;const x=new $b({Io:k=>{E?q(Dt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(g||(q(Dt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),q(Dt,`RPC '${e}' stream ${i} sending:`,k),m.send(k))},To:()=>m.close()}),P=(k,v,y)=>{k.listen(v,T=>{try{y(T)}catch(b){setTimeout(()=>{throw b},0)}})};return P(m,ga.EventType.OPEN,()=>{E||(q(Dt,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),P(m,ga.EventType.CLOSE,()=>{E||(E=!0,q(Dt,`RPC '${e}' stream ${i} transport closed`),x.So())}),P(m,ga.EventType.ERROR,k=>{E||(E=!0,yo(Dt,`RPC '${e}' stream ${i} transport errored:`,k),x.So(new H(V.UNAVAILABLE,"The operation could not be completed")))}),P(m,ga.EventType.MESSAGE,k=>{var v;if(!E){const y=k.data[0];xe(!!y);const T=y,b=T.error||((v=T[0])===null||v===void 0?void 0:v.error);if(b){q(Dt,`RPC '${e}' stream ${i} received error:`,b);const j=b.status;let M=function(C){const R=lt[C];if(R!==void 0)return aI(R)}(j),S=b.message;M===void 0&&(M=V.INTERNAL,S="Unknown error status: "+j+" with message "+b.message),E=!0,x.So(new H(M,S)),m.close()}else q(Dt,`RPC '${e}' stream ${i} received:`,y),x.bo(y)}}),P(a,DT.STAT_EVENT,k=>{k.stat===mp.PROXY?q(Dt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===mp.NOPROXY&&q(Dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function Gh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t){return new eb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n,r,i,s,o,a,c){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new _I(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Ir(n.toString()),Ir("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hb extends wI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=rb(this.serializer,e),r=function(s){if(!("targetChange"in s))return ie.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?Zn(o.readTime):ie.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Cp(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=_p(c)?{documents:ob(s,c)}:{query:ab(s,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=uI(s,o.resumeToken);const u=Tp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ie.min())>0){a.readTime=Du(s,o.snapshotVersion.toTimestamp());const u=Tp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=cb(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Cp(this.serializer),n.removeTarget=e,this.a_(n)}}class qb extends wI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return xe(!!e.streamToken),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=sb(e.writeResults,e.commitTime),r=Zn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Cp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ib(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ip(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Ip(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Kb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ir(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{vs(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=se(c);u.L_.add(4),await Pl(u),u.q_.set("Unknown"),u.L_.delete(4),await Sd(u)}(this))})}),this.q_=new Kb(r,i)}}async function Sd(t){if(vs(t))for(const e of t.B_)await e(!0)}async function Pl(t){for(const e of t.B_)await e(!1)}function EI(t,e){const n=se(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Tg(n)?Eg(n):Oo(n).r_()&&wg(n,e))}function _g(t,e){const n=se(t),r=Oo(n);n.N_.delete(e),r.r_()&&TI(n,e),n.N_.size===0&&(r.r_()?r.o_():vs(n)&&n.q_.set("Unknown"))}function wg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Oo(t).A_(e)}function TI(t,e){t.Q_.xe(e),Oo(t).R_(e)}function Eg(t){t.Q_=new YN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Oo(t).start(),t.q_.v_()}function Tg(t){return vs(t)&&!Oo(t).n_()&&t.N_.size>0}function vs(t){return se(t).L_.size===0}function II(t){t.Q_=void 0}async function Yb(t){t.q_.set("Online")}async function Xb(t){t.N_.forEach((e,n)=>{wg(t,e)})}async function Jb(t,e){II(t),Tg(t)?(t.q_.M_(e),Eg(t)):t.q_.set("Unknown")}async function Zb(t,e,n){if(t.q_.set("Online"),e instanceof cI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ou(t,r)}else if(e instanceof qc?t.Q_.Ke(e):e instanceof lI?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ie.min()))try{const r=await vI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.N_.get(u);f&&s.N_.set(u,f.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const f=s.N_.get(c);if(!f)return;s.N_.set(c,f.withResumeToken(Rt.EMPTY_BYTE_STRING,f.snapshotVersion)),TI(s,c);const m=new Zr(f.target,c,u,f.sequenceNumber);wg(s,m)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Ou(t,r)}}async function Ou(t,e,n){if(!xl(e))throw e;t.L_.add(1),await Pl(t),t.q_.set("Offline"),n||(n=()=>vI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Sd(t)})}function SI(t,e){return e().catch(n=>Ou(t,n,e))}async function Cd(t){const e=se(t),n=vi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;eD(e);)try{const i=await Mb(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,tD(e,i)}catch(i){await Ou(e,i)}CI(e)&&xI(e)}function eD(t){return vs(t)&&t.O_.length<10}function tD(t,e){t.O_.push(e);const n=vi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function CI(t){return vs(t)&&!vi(t).n_()&&t.O_.length>0}function xI(t){vi(t).start()}async function nD(t){vi(t).p_()}async function rD(t){const e=vi(t);for(const n of t.O_)e.m_(n.mutations)}async function iD(t,e,n){const r=t.O_.shift(),i=fg.from(r,e,n);await SI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Cd(t)}async function sD(t,e){e&&vi(t).V_&&await async function(r,i){if(function(o){return GN(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();vi(r).s_(),await SI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Cd(r)}}(t,e),CI(t)&&xI(t)}async function w0(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=vs(n);n.L_.add(3),await Pl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Sd(n)}async function oD(t,e){const n=se(t);e?(n.L_.delete(2),await Sd(n)):e||(n.L_.add(2),await Pl(n),n.q_.set("Unknown"))}function Oo(t){return t.K_||(t.K_=function(n,r,i){const s=se(n);return s.w_(),new Hb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:Yb.bind(null,t),Ro:Xb.bind(null,t),mo:Jb.bind(null,t),d_:Zb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Tg(t)?Eg(t):t.q_.set("Unknown")):(await t.K_.stop(),II(t))})),t.K_}function vi(t){return t.U_||(t.U_=function(n,r,i){const s=se(n);return s.w_(),new qb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:nD.bind(null,t),mo:sD.bind(null,t),f_:rD.bind(null,t),g_:iD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Cd(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ig(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sg(t,e){if(Ir("AsyncQueue",`${e}: ${t}`),xl(t))return new H(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=ya(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new ro(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ro)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ro;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(){this.W_=new qe(J.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class So{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new So(e,n,ro.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class lD{constructor(){this.queries=T0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=se(n),s=i.queries;i.queries=T0(),s.forEach((o,a)=>{for(const c of a.j_)c.onError(r)})})(this,new H(V.ABORTED,"Firestore shutting down"))}}function T0(){return new Do(t=>KT(t),vd)}async function Cg(t,e){const n=se(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new aD,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Sg(o,`Initialization of query '${bs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Rg(n)}async function xg(t,e){const n=se(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function cD(t,e){const n=se(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Rg(n)}function uD(t,e,n){const r=se(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Rg(t){t.Y_.forEach(e=>{e.next()})}var Rp,I0;(I0=Rp||(Rp={})).ea="default",I0.Cache="cache";class Ag{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new So(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=So.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Rp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.key=e}}class AI{constructor(e){this.key=e}}class dD{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=pe(),this.mutatedKeys=pe(),this.Aa=QT(e),this.Ra=new ro(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new E0,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),E=_d(this.query,m)?m:null,x=!!g&&this.mutatedKeys.has(g.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let k=!1;g&&E?g.data.isEqual(E.data)?x!==P&&(r.track({type:3,doc:E}),k=!0):this.ga(g,E)||(r.track({type:2,doc:E}),k=!0,(c&&this.Aa(E,c)>0||u&&this.Aa(E,u)<0)&&(a=!0)):!g&&E?(r.track({type:0,doc:E}),k=!0):g&&!E&&(r.track({type:1,doc:g}),k=!0,(c||u)&&(a=!0)),k&&(E?(o=o.add(E),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(E,x){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return P(E)-P(x)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new So(this.query,e.Ra,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new E0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=pe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new AI(r))}),this.da.forEach(r=>{e.has(r)||n.push(new RI(r))}),n}ba(e){this.Ta=e.Ts,this.da=pe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return So.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class hD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class fD{constructor(e){this.key=e,this.va=!1}}class pD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Do(a=>KT(a),vd),this.Ma=new Map,this.xa=new Set,this.Oa=new qe(J.comparator),this.Na=new Map,this.La=new gg,this.Ba={},this.ka=new Map,this.qa=Io.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function mD(t,e,n=!0){const r=OI(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await kI(r,e,n,!0),i}async function gD(t,e){const n=OI(t);await kI(n,e,!0,!1)}async function kI(t,e,n,r){const i=await Vb(t.localStore,Jn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await yD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&EI(t.remoteStore,i),a}async function yD(t,e,n,r,i){t.Ka=(m,g,E)=>async function(P,k,v,y){let T=k.view.ma(v);T.ns&&(T=await y0(P.localStore,k.query,!1).then(({documents:S})=>k.view.ma(S,T)));const b=y&&y.targetChanges.get(k.targetId),j=y&&y.targetMismatches.get(k.targetId)!=null,M=k.view.applyChanges(T,P.isPrimaryClient,b,j);return C0(P,k.targetId,M.wa),M.snapshot}(t,m,g,E);const s=await y0(t.localStore,e,!0),o=new dD(e,s.Ts),a=o.ma(s.documents),c=kl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);C0(t,n,u.wa);const f=new hD(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function vD(t,e,n){const r=se(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!vd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await xp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&_g(r.remoteStore,i.targetId),Ap(r,i.targetId)}).catch(Cl)):(Ap(r,i.targetId),await xp(r.localStore,i.targetId,!0))}async function _D(t,e){const n=se(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),_g(n.remoteStore,r.targetId))}async function wD(t,e,n){const r=RD(t);try{const i=await function(o,a){const c=se(o),u=pt.now(),f=a.reduce((E,x)=>E.add(x.key),pe());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",E=>{let x=Sr(),P=pe();return c.cs.getEntries(E,f).next(k=>{x=k,x.forEach((v,y)=>{y.isValidDocument()||(P=P.add(v))})}).next(()=>c.localDocuments.getOverlayedDocuments(E,x)).next(k=>{m=k;const v=[];for(const y of a){const T=zN(y,m.get(y.key).overlayedDocument);T!=null&&v.push(new Ri(y.key,T,UT(T.value.mapValue),En.exists(!0)))}return c.mutationQueue.addMutationBatch(E,u,v,a)}).next(k=>{g=k;const v=k.applyToLocalDocumentSet(m,P);return c.documentOverlayCache.saveOverlays(E,k.batchId,v)})}).then(()=>({batchId:g.batchId,changes:XT(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new qe(Te)),u=u.insert(a,c),o.Ba[o.currentUser.toKey()]=u}(r,i.batchId,n),await Nl(r,i.changes),await Cd(r.remoteStore)}catch(i){const s=Sg(i,"Failed to persist write");n.reject(s)}}async function PI(t,e){const n=se(t);try{const r=await Lb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(xe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?xe(o.va):i.removedDocuments.size>0&&(xe(o.va),o.va=!1))}),await Nl(n,r,e)}catch(r){await Cl(r)}}function S0(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=se(o);c.onlineState=a;let u=!1;c.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(a)&&(u=!0)}),u&&Rg(c)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ED(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new qe(J.comparator);o=o.insert(s,jt.newNoDocument(s,ie.min()));const a=pe().add(s),c=new Td(ie.min(),new Map,new qe(Te),o,a);await PI(r,c),r.Oa=r.Oa.remove(s),r.Na.delete(e),kg(r)}else await xp(r.localStore,e,!1).then(()=>Ap(r,e,n)).catch(Cl)}async function TD(t,e){const n=se(t),r=e.batch.batchId;try{const i=await Ob(n.localStore,e);bI(n,r,null),NI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Nl(n,i)}catch(i){await Cl(i)}}async function ID(t,e,n){const r=se(t);try{const i=await function(o,a){const c=se(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,a).next(m=>(xe(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(u,m))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);bI(r,e,n),NI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Nl(r,i)}catch(i){await Cl(i)}}function NI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function bI(t,e,n){const r=se(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Ap(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||DI(t,r)})}function DI(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(_g(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),kg(t))}function C0(t,e,n){for(const r of n)r instanceof RI?(t.La.addReference(r.key,e),SD(t,r)):r instanceof AI?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||DI(t,r.key)):re()}function SD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),kg(t))}function kg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new J(Le.fromString(e)),r=t.qa.next();t.Na.set(r,new fD(n)),t.Oa=t.Oa.insert(n,r),EI(t.remoteStore,new Zr(Jn(yd(n.path)),r,"TargetPurposeLimboResolution",sg.oe))}}async function Nl(t,e,n){const r=se(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,c)=>{o.push(r.Ka(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const m=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(u){i.push(u);const m=vg.Wi(c.targetId,u);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(c,u){const f=se(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(u,g=>F.forEach(g.$i,E=>f.persistence.referenceDelegate.addReference(m,g.targetId,E)).next(()=>F.forEach(g.Ui,E=>f.persistence.referenceDelegate.removeReference(m,g.targetId,E)))))}catch(m){if(!xl(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of u){const g=m.targetId;if(!m.fromCache){const E=f.os.get(g),x=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(g,P)}}}(r.localStore,s))}async function CD(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await yI(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(c=>{c.reject(new H(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Nl(n,r.hs)}}function xD(t,e){const n=se(t),r=n.Na.get(e);if(r&&r.va)return pe().add(r.key);{let i=pe();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function OI(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=PI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ED.bind(null,e),e.Ca.d_=cD.bind(null,e.eventManager),e.Ca.$a=uD.bind(null,e.eventManager),e}function RD(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ID.bind(null,e),e}class x0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Id(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Db(this.persistence,new Nb,e.initialUser,this.serializer)}createPersistence(e){return new Ab(yg.Zr,this.serializer)}createSharedClientState(e){return new Ub}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class AD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>S0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CD.bind(null,this.syncEngine),await oD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lD}()}createDatastore(e){const n=Id(e.databaseInfo.databaseId),r=function(s){return new Wb(s)}(e.databaseInfo);return function(s,o,a,c){return new Gb(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new Qb(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>S0(this.syncEngine,n,0),function(){return _0.D()?new _0:new Bb}())}createSyncEngine(e,n){return function(i,s,o,a,c,u,f){const m=new pD(i,s,o,a,c,u);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=se(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Pl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):Ir("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ot.UNAUTHENTICATED,this.clientId=MT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Sg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kh(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await yI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function R0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ND(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>w0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>w0(e.remoteStore,i)),t._onlineComponents=e}function PD(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ND(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!PD(n))throw n;yo("Error using user provided cache. Falling back to memory cache: "+n),await Kh(t,new x0)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Kh(t,new x0);return t._offlineComponents}async function LI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await R0(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await R0(t,new AD))),t._onlineComponents}function bD(t){return LI(t).then(e=>e.syncEngine)}async function Lu(t){const e=await LI(t),n=e.eventManager;return n.onListen=mD.bind(null,e.syncEngine),n.onUnlisten=vD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=gD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_D.bind(null,e.syncEngine),n}function DD(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const f=new Pg({next:g=>{o.enqueueAndForget(()=>xg(s,m));const E=g.docs.has(a);!E&&g.fromCache?u.reject(new H(V.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&c&&c.source==="server"?u.reject(new H(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new Ag(yd(a.path),f,{includeMetadataChanges:!0,_a:!0});return Cg(s,m)}(await Lu(t),t.asyncQueue,e,n,r)),r.promise}function OD(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const f=new Pg({next:g=>{o.enqueueAndForget(()=>xg(s,m)),g.fromCache&&c.source==="server"?u.reject(new H(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new Ag(a,f,{includeMetadataChanges:!0,_a:!0});return Cg(s,m)}(await Lu(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(t,e,n){if(!n)throw new H(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LD(t,e,n,r){if(e===!0&&r===!0)throw new H(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function k0(t){if(!J.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function P0(t){if(J.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function en(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xd(t);throw new H(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new N0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new N0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XP;switch(r.type){case"firstParty":return new tN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=A0.get(n);r&&(q("ComponentProvider","Removing Datastore"),A0.delete(n),r.terminate())}(this),Promise.resolve()}}function jD(t,e,n,r={}){var i;const s=(t=en(t,Rd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ot.MOCK_USER;else{a=IT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new H(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ot(u)}t._authCredentials=new JP(new jT(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _s(this.firestore,e,this._query)}}class Mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class hi extends _s{constructor(e,n,r){super(e,n,yd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new J(e))}withConverter(e){return new hi(this.firestore,e,this._path)}}function Ct(t,e,...n){if(t=Fe(t),MI("collection","path",e),t instanceof Rd){const r=Le.fromString(e,...n);return P0(r),new hi(t,null,r)}{if(!(t instanceof Mt||t instanceof hi))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return P0(r),new hi(t.firestore,null,r)}}function fn(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=MT.newId()),MI("doc","path",e),t instanceof Rd){const r=Le.fromString(e,...n);return k0(r),new Mt(t,null,new J(r))}{if(!(t instanceof Mt||t instanceof hi))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return k0(r),new Mt(t.firestore,t instanceof hi?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new _I(this,"async_queue_retry"),this.Eu=()=>{const n=Gh();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Gh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Gh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new gr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!xl(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ir("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=Ig.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&re()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}function b0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Cr extends Rd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new MD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||VI(this),this._firestoreClient.terminate()}}function bl(t,e){const n=typeof t=="object"?t:rg(),r=typeof t=="string"?t:"(default)",i=md(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=wT("firestore");s&&jD(i,...s)}return i}function Ad(t){return t._firestoreClient||VI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function VI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,u,f){return new pN(a,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,jI(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new kD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Co(Rt.fromBase64String(e))}catch(n){throw new H(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Co(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD=/^__.*__$/;class FD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new Al(e,this.data,n,this.fieldTransforms)}}class FI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function UI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Pd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Pd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return ju(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(UI(this.wu)&&VD.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class UD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Id(e)}Nu(e,n,r,i=!1){return new Pd({wu:e,methodName:n,Ou:r,path:Tt.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nd(t){const e=t._freezeSettings(),n=Id(t._databaseId);return new UD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BI(t,e,n,r,i,s={}){const o=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);Lg("Data must be an object, but it was:",o,r);const a=$I(r,o);let c,u;if(s.merge)c=new sn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=kp(e,m,n);if(!o.contains(g))throw new H(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);HI(f,g)||f.push(g)}c=new sn(f),u=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,u=o.fieldTransforms;return new FD(new Qt(a),c,u)}class bd extends Dl{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bd}}function zI(t,e,n){return new Pd({wu:3,Ou:e.settings.Ou,methodName:t._methodName,Du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Dg extends Dl{constructor(e,n){super(e),this.Lu=n}_toFieldTransform(e){const n=zI(this,e,!0),r=this.Lu.map(s=>ws(s,n)),i=new Eo(r);return new iI(e.path,i)}isEqual(e){return e instanceof Dg&&go(this.Lu,e.Lu)}}class Og extends Dl{constructor(e,n){super(e),this.Lu=n}_toFieldTransform(e){const n=zI(this,e,!0),r=this.Lu.map(s=>ws(s,n)),i=new To(r);return new iI(e.path,i)}isEqual(e){return e instanceof Og&&go(this.Lu,e.Lu)}}function BD(t,e,n,r){const i=t.Nu(1,e,n);Lg("Data must be an object, but it was:",i,r);const s=[],o=Qt.empty();ys(r,(c,u)=>{const f=jg(e,c,n);u=Fe(u);const m=i.Cu(f);if(u instanceof bd)s.push(f);else{const g=ws(u,m);g!=null&&(s.push(f),o.set(f,g))}});const a=new sn(s);return new FI(o,a,i.fieldTransforms)}function zD(t,e,n,r,i,s){const o=t.Nu(1,e,n),a=[kp(e,r,n)],c=[i];if(s.length%2!=0)throw new H(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(kp(e,s[g])),c.push(s[g+1]);const u=[],f=Qt.empty();for(let g=a.length-1;g>=0;--g)if(!HI(u,a[g])){const E=a[g];let x=c[g];x=Fe(x);const P=o.Cu(E);if(x instanceof bd)u.push(E);else{const k=ws(x,P);k!=null&&(u.push(E),f.set(E,k))}}const m=new sn(u);return new FI(f,m,o.fieldTransforms)}function $D(t,e,n,r=!1){return ws(n,t.Nu(r?4:3,e))}function ws(t,e){if(WI(t=Fe(t)))return Lg("Unsupported field value:",e,t),$I(t,e);if(t instanceof Dl)return function(r,i){if(!UI(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=ws(a,i.Fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pt.fromDate(r);return{timestampValue:Du(i.serializer,s)}}if(r instanceof pt){const s=new pt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Du(i.serializer,s)}}if(r instanceof Ng)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Co)return{bytesValue:uI(i.serializer,r._byteString)};if(r instanceof Mt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:mg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof bg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Mu("VectorValues must only contain numeric values.");return dg(a.serializer,c)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${xd(r)}`)}(t,e)}function $I(t,e){const n={};return VT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(t,(r,i)=>{const s=ws(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function WI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pt||t instanceof Ng||t instanceof Co||t instanceof Mt||t instanceof Dl||t instanceof bg)}function Lg(t,e,n){if(!WI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=xd(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function kp(t,e,n){if((e=Fe(e))instanceof kd)return e._internalPath;if(typeof e=="string")return jg(t,e);throw ju("Field path arguments must be of type string or ",t,!1,void 0,n)}const WD=new RegExp("[~\\*/\\[\\]]");function jg(t,e,n){if(e.search(WD)>=0)throw ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kd(...e.split("."))._internalPath}catch{throw ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ju(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new H(V.INVALID_ARGUMENT,a+t+c)}function HI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Mg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HD extends qI{data(){return super.data()}}function Mg(t,e){return typeof e=="string"?jg(t,e):e instanceof kd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vg{}class qD extends Vg{}function an(t,e,...n){let r=[];e instanceof Vg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof Fg).length,a=s.filter(c=>c instanceof Dd).length;if(o>1||o>0&&a>0)throw new H(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Dd extends qD{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Dd(e,n,r)}_apply(e){const n=this._parse(e);return KI(e._query,n),new _s(e.firestore,e.converter,wp(e._query,n))}_parse(e){const n=Nd(e.firestore);return function(s,o,a,c,u,f,m){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new H(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){O0(m,f);const E=[];for(const x of m)E.push(D0(c,s,x));g={arrayValue:{values:E}}}else g=D0(c,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||O0(m,f),g=$D(a,o,m,f==="in"||f==="not-in");return ut.create(u,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ln(t,e,n){const r=e,i=Mg("where",t);return Dd._create(i,r,n)}class Fg extends Vg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Fg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)KI(o,c),o=wp(o,c)}(e._query,n),new _s(e.firestore,e.converter,wp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function D0(t,e,n){if(typeof(n=Fe(n))=="string"){if(n==="")throw new H(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!GT(e)&&n.indexOf("/")!==-1)throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Le.fromString(n));if(!J.isDocumentKey(r))throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return e0(t,new J(r))}if(n instanceof Mt)return e0(t,n._key);throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xd(n)}.`)}function O0(t,e){if(!Array.isArray(t)||t.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function KI(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class GD{convertValue(e,n="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ys(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>rt(o.doubleValue));return new bg(s)}convertGeoPoint(e){return new Ng(rt(e.latitude),rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ag(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(al(e));default:return null}}convertTimestamp(e){const n=yi(e);return new pt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);xe(gI(r));const i=new ll(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(n)||Ir(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class YI extends qI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Mg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Gc extends YI{data(e={}){return super.data(e)}}class XI{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new _a(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Gc(this._firestore,this._userDataWriter,r.key,r,new _a(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Gc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new _a(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Gc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new _a(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:KD(a.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function KD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t){t=en(t,Mt);const e=en(t.firestore,Cr);return DD(Ad(e),t._key).then(n=>JI(e,t,n))}class Ug extends GD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Co(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function Ht(t){t=en(t,_s);const e=en(t.firestore,Cr),n=Ad(e),r=new Ug(e);return GI(t._query),OD(n,t._query).then(i=>new XI(e,r,t,i))}function Pp(t,e,n){t=en(t,Mt);const r=en(t.firestore,Cr),i=QI(t.converter,e);return Od(r,[BI(Nd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,En.none())])}function Mu(t,e,n,...r){t=en(t,Mt);const i=en(t.firestore,Cr),s=Nd(i);let o;return o=typeof(e=Fe(e))=="string"||e instanceof kd?zD(s,"updateDoc",t._key,e,n,r):BD(s,"updateDoc",t._key,e),Od(i,[o.toMutation(t._key,En.exists(!0))])}function L0(t){return Od(en(t.firestore,Cr),[new hg(t._key,En.none())])}function QD(t,e){const n=en(t.firestore,Cr),r=fn(t),i=QI(t.converter,e);return Od(n,[BI(Nd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,En.exists(!1))]).then(()=>r)}function YD(t,...e){var n,r,i;t=Fe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||b0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(b0(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let c,u,f;if(t instanceof Mt)u=en(t.firestore,Cr),f=yd(t._key.path),c={next:m=>{e[o]&&e[o](JI(u,t,m))},error:e[o+1],complete:e[o+2]};else{const m=en(t,_s);u=en(m.firestore,Cr),f=m._query;const g=new Ug(u);c={next:E=>{e[o]&&e[o](new XI(u,g,m,E))},error:e[o+1],complete:e[o+2]},GI(t._query)}return function(g,E,x,P){const k=new Pg(P),v=new Ag(E,k,x);return g.asyncQueue.enqueueAndForget(async()=>Cg(await Lu(g),v)),()=>{k.za(),g.asyncQueue.enqueueAndForget(async()=>xg(await Lu(g),v))}}(Ad(u),f,a,c)}function Od(t,e){return function(r,i){const s=new gr;return r.asyncQueue.enqueueAndForget(async()=>wD(await bD(r),i,s)),s.promise}(Ad(t),e)}function JI(t,e,n){const r=n.docs.get(e._key),i=new Ug(t);return new YI(t,i,e._key,r,new _a(n.hasPendingWrites,n.fromCache),e.converter)}function XD(...t){return new Dg("arrayUnion",t)}function JD(...t){return new Og("arrayRemove",t)}(function(e,n=!0){(function(i){bo=i})(gs),rs(new mi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Cr(new ZP(r.getProvider("auth-internal")),new rN(r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new H(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ll(u.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Xn(Q_,"4.7.2",e),Xn(Q_,"4.7.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="firebasestorage.googleapis.com",eS="storageBucket",ZD=2*60*1e3,eO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends sr{constructor(e,n,r=0){super(Qh(e),`Firebase Storage: ${n} (${Qh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Xe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Xe||(Xe={}));function Qh(t){return"storage/"+t}function Bg(){const t="An unknown error occurred, please check the error payload for server response.";return new Je(Xe.UNKNOWN,t)}function tO(t){return new Je(Xe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function nO(t){return new Je(Xe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function rO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Je(Xe.UNAUTHENTICATED,t)}function iO(){return new Je(Xe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function sO(t){return new Je(Xe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function oO(){return new Je(Xe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function aO(){return new Je(Xe.CANCELED,"User canceled the upload/download.")}function lO(t){return new Je(Xe.INVALID_URL,"Invalid URL '"+t+"'.")}function cO(t){return new Je(Xe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function uO(){return new Je(Xe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+eS+"' property when initializing the app?")}function dO(){return new Je(Xe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function hO(){return new Je(Xe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function fO(t){return new Je(Xe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Np(t){return new Je(Xe.INVALID_ARGUMENT,t)}function tS(){return new Je(Xe.APP_DELETED,"The Firebase app was deleted.")}function pO(t){return new Je(Xe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ja(t,e){return new Je(Xe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ca(t){throw new Je(Xe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=$t.makeFromUrl(e,n)}catch{return new $t(e,"")}if(r.path==="")return r;throw cO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(b){b.path_=decodeURIComponent(b.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",E=new RegExp(`^https?://${m}/${f}/b/${i}/o${g}`,"i"),x={bucket:1,path:3},P=n===ZI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",v=new RegExp(`^https?://${P}/${i}/${k}`,"i"),T=[{regex:a,indices:c,postModify:s},{regex:E,indices:x,postModify:u},{regex:v,indices:{bucket:1,path:2},postModify:u}];for(let b=0;b<T.length;b++){const j=T[b],M=j.regex.exec(e);if(M){const S=M[j.indices.bucket];let w=M[j.indices.path];w||(w=""),r=new $t(S,w),j.postModify(r);break}}if(r==null)throw lO(e);return r}}class mO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function f(...k){u||(u=!0,e.apply(null,k))}function m(k){i=setTimeout(()=>{i=null,t(E,c())},k)}function g(){s&&clearTimeout(s)}function E(k,...v){if(u){g();return}if(k){g(),f.call(null,k,...v);return}if(c()||o){g(),f.call(null,k,...v);return}r<64&&(r*=2);let T;a===1?(a=2,T=0):T=(r+Math.random())*1e3,m(T)}let x=!1;function P(k){x||(x=!0,g(),!u&&(i!==null?(k||(a=2),clearTimeout(i),m(0)):k||(a=1)))}return m(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function yO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vO(t){return t!==void 0}function _O(t){return typeof t=="object"&&!Array.isArray(t)}function zg(t){return typeof t=="string"||t instanceof String}function j0(t){return $g()&&t instanceof Blob}function $g(){return typeof Blob<"u"}function bp(t,e,n,r){if(r<e)throw Np(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Np(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function nS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Ki;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ki||(Ki={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,n,r,i,s,o,a,c,u,f,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,x)=>{this.resolve_=E,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Cc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ki.NO_ERROR,c=s.getStatus();if(!a||wO(c,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Ki.ABORT;r(!1,new Cc(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Cc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());vO(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Bg();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?tS():aO();o(c)}else{const c=oO();o(c)}};this.canceled_?n(!1,new Cc(!1,null,!0)):this.backoffId_=gO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&yO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Cc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function TO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function IO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function SO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function CO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function xO(t,e,n,r,i,s,o=!0){const a=nS(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return SO(u,e),TO(u,n),IO(u,s),CO(u,r),new EO(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function AO(...t){const e=RO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if($g())return new Blob(t);throw new Je(Xe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function kO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(t){if(typeof atob>"u")throw fO("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yh{constructor(e,n){this.data=e,this.contentType=n||null}}function NO(t,e){switch(t){case qn.RAW:return new Yh(rS(e));case qn.BASE64:case qn.BASE64URL:return new Yh(iS(t,e));case qn.DATA_URL:return new Yh(DO(e),OO(e))}throw Bg()}function rS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function bO(t){let e;try{e=decodeURIComponent(t)}catch{throw ja(qn.DATA_URL,"Malformed data URL.")}return rS(e)}function iS(t,e){switch(t){case qn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ja(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case qn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ja(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=PO(e)}catch(i){throw i.message.includes("polyfill")?i:ja(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class sS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ja(qn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=LO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function DO(t){const e=new sS(t);return e.base64?iS(qn.BASE64,e.rest):bO(e.rest)}function OO(t){return new sS(t).contentType}function LO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n){let r=0,i="";j0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(j0(this.data_)){const r=this.data_,i=kO(r,e,n);return i===null?null:new Hr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Hr(r,!0)}}static getBlob(...e){if($g()){const n=e.map(r=>r instanceof Hr?r.data_:r);return new Hr(AO.apply(null,n))}else{const n=e.map(o=>zg(o)?NO(qn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Hr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){let e;try{e=JSON.parse(t)}catch{return null}return _O(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function MO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function oS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(t,e){return e}class Bt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||VO}}let xc=null;function FO(t){return!zg(t)||t.length<2?t:oS(t)}function aS(){if(xc)return xc;const t=[];t.push(new Bt("bucket")),t.push(new Bt("generation")),t.push(new Bt("metageneration")),t.push(new Bt("name","fullPath",!0));function e(s,o){return FO(o)}const n=new Bt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Bt("size");return i.xform=r,t.push(i),t.push(new Bt("timeCreated")),t.push(new Bt("updated")),t.push(new Bt("md5Hash",null,!0)),t.push(new Bt("cacheControl",null,!0)),t.push(new Bt("contentDisposition",null,!0)),t.push(new Bt("contentEncoding",null,!0)),t.push(new Bt("contentLanguage",null,!0)),t.push(new Bt("contentType",null,!0)),t.push(new Bt("metadata","customMetadata",!0)),xc=t,xc}function UO(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new $t(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function BO(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return UO(r,t),r}function lS(t,e,n){const r=Wg(e);return r===null?null:BO(t,r,n)}function zO(t,e,n,r){const i=Wg(e);if(i===null||!zg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const f=t.bucket,m=t.fullPath,g="/b/"+o(f)+"/o/"+o(m),E=Ol(g,n,r),x=nS({alt:"media",token:u});return E+x})[0]}function $O(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="prefixes",V0="items";function WO(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[M0])for(const i of n[M0]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new $t(e,s));r.prefixes.push(o)}if(n[V0])for(const i of n[V0]){const s=t._makeStorageReference(new $t(e,i.name));r.items.push(s)}return r}function HO(t,e,n){const r=Wg(n);return r===null?null:WO(t,e,r)}class Ld{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t){if(!t)throw Bg()}function qO(t,e){function n(r,i){const s=lS(t,i,e);return Hg(s!==null),s}return n}function GO(t,e){function n(r,i){const s=HO(t,e,i);return Hg(s!==null),s}return n}function KO(t,e){function n(r,i){const s=lS(t,i,e);return Hg(s!==null),zO(s,i,t.host,t._protocol)}return n}function qg(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=iO():i=rO():n.getStatus()===402?i=nO(t.bucket):n.getStatus()===403?i=sO(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function cS(t){const e=qg(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=tO(t.path)),s.serverResponse=i.serverResponse,s}return n}function QO(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Ol(o,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,f=new Ld(a,c,GO(t,e.bucket),u);return f.urlParams=s,f.errorHandler=qg(e),f}function YO(t,e,n){const r=e.fullServerUrl(),i=Ol(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Ld(i,s,KO(t,n),o);return a.errorHandler=cS(e),a}function XO(t,e){const n=e.fullServerUrl(),r=Ol(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(c,u){}const a=new Ld(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=cS(e),a}function JO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ZO(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=JO(null,e)),r}function e4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let b=0;b<2;b++)T=T+Math.random().toString().slice(2);return T}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=ZO(e,r,i),f=$O(u,n),m="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+c+"--",E=Hr.getBlob(m,r,g);if(E===null)throw dO();const x={name:u.fullPath},P=Ol(s,t.host,t._protocol),k="POST",v=t.maxUploadRetryTime,y=new Ld(P,k,qO(t,n),v);return y.urlParams=x,y.headers=o,y.body=E.uploadData(),y.errorHandler=qg(e),y}class t4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ki.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ki.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ki.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ca("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ca("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ca("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ca("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ca("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class n4 extends t4{initXhr(){this.xhr_.responseType="text"}}function jd(){return new n4}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this._service=e,n instanceof $t?this._location=n:this._location=$t.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new as(e,n)}get root(){const e=new $t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return oS(this._location.path)}get storage(){return this._service}get parent(){const e=jO(this._location.path);if(e===null)return null;const n=new $t(this._location.bucket,e);return new as(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw pO(e)}}function r4(t,e,n){t._throwIfRoot("uploadBytes");const r=e4(t.storage,t._location,aS(),new Hr(e,!0),n);return t.storage.makeRequestWithTokens(r,jd).then(i=>({metadata:i,ref:t}))}function i4(t){const e={prefixes:[],items:[]};return uS(t,e).then(()=>e)}async function uS(t,e,n){const i=await s4(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await uS(t,e,i.nextPageToken)}function s4(t,e){e!=null&&typeof e.maxResults=="number"&&bp("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=QO(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,jd)}function o4(t){t._throwIfRoot("getDownloadURL");const e=YO(t.storage,t._location,aS());return t.storage.makeRequestWithTokens(e,jd).then(n=>{if(n===null)throw hO();return n})}function a4(t){t._throwIfRoot("deleteObject");const e=XO(t.storage,t._location);return t.storage.makeRequestWithTokens(e,jd)}function l4(t,e){const n=MO(t._location.path,e),r=new $t(t._location.bucket,n);return new as(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c4(t){return/^[A-Za-z]+:\/\//.test(t)}function u4(t,e){return new as(t,e)}function dS(t,e){if(t instanceof Gg){const n=t;if(n._bucket==null)throw uO();const r=new as(n,n._bucket);return e!=null?dS(r,e):r}else return e!==void 0?l4(t,e):t}function d4(t,e){if(e&&c4(e)){if(t instanceof Gg)return u4(t,e);throw Np("To use ref(service, url), the first argument must be a Storage instance.")}else return dS(t,e)}function F0(t,e){const n=e==null?void 0:e[eS];return n==null?null:$t.makeFromBucketSpec(n,t)}function h4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:IT(i,t.app.options.projectId))}class Gg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ZI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ZD,this._maxUploadRetryTime=eO,this._requests=new Set,i!=null?this._bucket=$t.makeFromBucketSpec(i,this._host):this._bucket=F0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$t.makeFromBucketSpec(this._url,e):this._bucket=F0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){bp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){bp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new as(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new mO(tS());{const o=xO(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const U0="@firebase/storage",B0="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="storage";function dl(t,e,n){return t=Fe(t),r4(t,e,n)}function f4(t){return t=Fe(t),i4(t)}function rr(t){return t=Fe(t),o4(t)}function p4(t){return t=Fe(t),a4(t)}function Sn(t,e){return t=Fe(t),d4(t,e)}function Lo(t=rg(),e){t=Fe(t);const r=md(t,hS).getImmediate({identifier:e}),i=wT("storage");return i&&m4(r,...i),r}function m4(t,e,n,r={}){h4(t,e,n,r)}function g4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Gg(n,r,i,e,gs)}function y4(){rs(new mi(hS,g4,"PUBLIC").setMultipleInstances(!0)),Xn(U0,B0,""),Xn(U0,B0,"esm2017")}y4();var fS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(fS);var v4=fS.exports;const le=Qu(v4),_4=["xxl","xl","lg","md","sm","xs"],w4="xs",Md=I.createContext({prefixes:{},breakpoints:_4,minBreakpoint:w4});function _e(t,e){const{prefixes:n}=I.useContext(Md);return t||n[e]||e}function pS(){const{breakpoints:t}=I.useContext(Md);return t}function mS(){const{minBreakpoint:t}=I.useContext(Md);return t}function E4(){const{dir:t}=I.useContext(Md);return t==="rtl"}const Kg=I.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=_e(e,"card-body"),d.jsx(n,{ref:i,className:le(t,e),...r})));Kg.displayName="CardBody";const gS=I.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=_e(e,"card-footer"),d.jsx(n,{ref:i,className:le(t,e),...r})));gS.displayName="CardFooter";const yS=I.createContext(null);yS.displayName="CardHeaderContext";const vS=I.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=_e(t,"card-header"),o=I.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return d.jsx(yS.Provider,{value:o,children:d.jsx(n,{ref:i,...r,className:le(e,s)})})});vS.displayName="CardHeader";const _S=I.forwardRef(({bsPrefix:t,className:e,variant:n,as:r="img",...i},s)=>{const o=_e(t,"card-img");return d.jsx(r,{ref:s,className:le(n?`${o}-${n}`:o,e),...i})});_S.displayName="CardImg";const wS=I.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=_e(e,"card-img-overlay"),d.jsx(n,{ref:i,className:le(t,e),...r})));wS.displayName="CardImgOverlay";const ES=I.forwardRef(({className:t,bsPrefix:e,as:n="a",...r},i)=>(e=_e(e,"card-link"),d.jsx(n,{ref:i,className:le(t,e),...r})));ES.displayName="CardLink";const Qg=t=>I.forwardRef((e,n)=>d.jsx("div",{...e,ref:n,className:le(e.className,t)})),T4=Qg("h6"),TS=I.forwardRef(({className:t,bsPrefix:e,as:n=T4,...r},i)=>(e=_e(e,"card-subtitle"),d.jsx(n,{ref:i,className:le(t,e),...r})));TS.displayName="CardSubtitle";const IS=I.forwardRef(({className:t,bsPrefix:e,as:n="p",...r},i)=>(e=_e(e,"card-text"),d.jsx(n,{ref:i,className:le(t,e),...r})));IS.displayName="CardText";const I4=Qg("h5"),SS=I.forwardRef(({className:t,bsPrefix:e,as:n=I4,...r},i)=>(e=_e(e,"card-title"),d.jsx(n,{ref:i,className:le(t,e),...r})));SS.displayName="CardTitle";const CS=I.forwardRef(({bsPrefix:t,className:e,bg:n,text:r,border:i,body:s=!1,children:o,as:a="div",...c},u)=>{const f=_e(t,"card");return d.jsx(a,{ref:u,...c,className:le(e,f,n&&`bg-${n}`,r&&`text-${r}`,i&&`border-${i}`),children:s?d.jsx(Kg,{children:o}):o})});CS.displayName="Card";const Ye=Object.assign(CS,{Img:_S,Title:SS,Subtitle:TS,Body:Kg,Link:ES,Text:IS,Header:vS,Footer:gS,ImgOverlay:wS});function S4({destinationsFromSearch:t,currentFilter:e,sortCriterion:n,sortDirection:r}){const[i,s]=I.useState([]);I.useEffect(()=>{(async()=>{const c=bl(),u=Lo(),f=Ct(c,"destinations"),g=(await Ht(f)).docs.map(async y=>{const T=y.data();let b=null;try{b=await rr(Sn(u,T.mainImage))}catch{console.error("Error fetching image from Firebase: ",T.city)}return b===null?(console.log("No main image for this destination: ",T.city),null):{id:y.id,imageURL:b,country:T.country,city:T.city,type:T.type,temperature:T.temperature,price:T.price,rating:T.rating}}),v=(await Promise.all(g)).filter(y=>y!==null).sort((y,T)=>y.city.localeCompare(T.city)).filter(y=>e==="Alle"||y.type===e).sort((y,T)=>{if(!n)return 0;let b=y[n],j=T[n];return b=b??0,j=j??0,typeof b=="number"&&typeof j=="number"?r==="asc"?b-j:j-b:0});s(v)})()},[e,n,r]);const o=t.length>0?t:i;return d.jsxs("div",{className:"container",children:[d.jsx("h3",{className:"title",children:"Alle destinasjoner "}),d.jsx("div",{className:"cards",children:o.map(a=>d.jsxs(Wn,{to:`/destination/${a.id}`,className:"link",style:{textDecoration:"none"},children:[" ",d.jsxs(Ye,{className:"card",children:[d.jsx(Ye.Img,{variant:"top",src:a.imageURL,className:"card-img"}),d.jsxs(Ye.Body,{children:[d.jsx(Ye.Title,{children:a.city}),d.jsx(Ye.Text,{children:a.country})]})]},a.id)]},a.id))})]})}const z0=()=>{};let Yg={},xS={},RS=null,AS={mark:z0,measure:z0};try{typeof window<"u"&&(Yg=window),typeof document<"u"&&(xS=document),typeof MutationObserver<"u"&&(RS=MutationObserver),typeof performance<"u"&&(AS=performance)}catch{}const{userAgent:$0=""}=Yg.navigator||{},_i=Yg,Me=xS,W0=RS,Rc=AS;_i.document;const Nr=!!Me.documentElement&&!!Me.head&&typeof Me.addEventListener=="function"&&typeof Me.createElement=="function",kS=~$0.indexOf("MSIE")||~$0.indexOf("Trident/");var ze="classic",PS="duotone",cn="sharp",un="sharp-duotone",C4=[ze,PS,cn,un],x4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},H0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},R4=["kit"],A4=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,k4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,P4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},N4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},b4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},D4={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},O4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},L4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},NS={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},j4=["solid","regular","light","thin","duotone","brands"],bS=[1,2,3,4,5,6,7,8,9,10],M4=bS.concat([11,12,13,14,15,16,17,18,19,20]),wa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},V4=[...Object.keys(D4),...j4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wa.GROUP,wa.SWAP_OPACITY,wa.PRIMARY,wa.SECONDARY].concat(bS.map(t=>"".concat(t,"x"))).concat(M4.map(t=>"w-".concat(t))),F4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},U4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},B4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},q0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const xr="___FONT_AWESOME___",Dp=16,DS="fa",OS="svg-inline--fa",ls="data-fa-i2svg",Op="data-fa-pseudo-element",z4="data-fa-pseudo-element-pending",Xg="data-prefix",Jg="data-icon",G0="fontawesome-i2svg",$4="async",W4=["HTML","HEAD","STYLE","SCRIPT"],LS=(()=>{try{return!0}catch{return!1}})(),jS=[ze,cn,un];function Ll(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[ze]}})}const MS={...NS};MS[ze]={...NS[ze],...H0.kit,...H0["kit-duotone"]};const Qi=Ll(MS),Lp={...L4};Lp[ze]={...Lp[ze],...q0.kit,...q0["kit-duotone"]};const hl=Ll(Lp),jp={...O4};jp[ze]={...jp[ze],...B4.kit};const Yi=Ll(jp),Mp={...b4};Mp[ze]={...Mp[ze],...U4.kit};const H4=Ll(Mp),q4=A4,VS="fa-layers-text",G4=k4,K4={...x4};Ll(K4);const Q4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xh=wa,xo=new Set;Object.keys(hl[ze]).map(xo.add.bind(xo));Object.keys(hl[cn]).map(xo.add.bind(xo));Object.keys(hl[un]).map(xo.add.bind(xo));const Y4=[...R4,...V4],Ma=_i.FontAwesomeConfig||{};function X4(t){var e=Me.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function J4(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Me&&typeof Me.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=J4(X4(n));i!=null&&(Ma[r]=i)});const FS={styleDefault:"solid",familyDefault:"classic",cssPrefix:DS,replacementClass:OS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ma.familyPrefix&&(Ma.cssPrefix=Ma.familyPrefix);const Ro={...FS,...Ma};Ro.autoReplaceSvg||(Ro.observeMutations=!1);const G={};Object.keys(FS).forEach(t=>{Object.defineProperty(G,t,{enumerable:!0,set:function(e){Ro[t]=e,Va.forEach(n=>n(G))},get:function(){return Ro[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(t){Ro.cssPrefix=t,Va.forEach(e=>e(G))},get:function(){return Ro.cssPrefix}});_i.FontAwesomeConfig=G;const Va=[];function Z4(t){return Va.push(t),()=>{Va.splice(Va.indexOf(t),1)}}const Vr=Dp,Gn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function eL(t){if(!t||!Nr)return;const e=Me.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Me.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Me.head.insertBefore(e,r),t}const tL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fl(){let t=12,e="";for(;t-- >0;)e+=tL[Math.random()*62|0];return e}function jo(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Zg(t){return t.classList?jo(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function US(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function nL(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(US(t[n]),'" '),"").trim()}function Vd(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ey(t){return t.size!==Gn.size||t.x!==Gn.x||t.y!==Gn.y||t.rotate!==Gn.rotate||t.flipX||t.flipY}function rL(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:u}}function iL(t){let{transform:e,width:n=Dp,height:r=Dp,startCentered:i=!1}=t,s="";return i&&kS?s+="translate(".concat(e.x/Vr-n/2,"em, ").concat(e.y/Vr-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/Vr,"em), calc(-50% + ").concat(e.y/Vr,"em)) "):s+="translate(".concat(e.x/Vr,"em, ").concat(e.y/Vr,"em) "),s+="scale(".concat(e.size/Vr*(e.flipX?-1:1),", ").concat(e.size/Vr*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var sL=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function BS(){const t=DS,e=OS,n=G.cssPrefix,r=G.replacementClass;let i=sL;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let K0=!1;function Jh(){G.autoAddCss&&!K0&&(eL(BS()),K0=!0)}var oL={mixout(){return{dom:{css:BS,insertCss:Jh}}},hooks(){return{beforeDOMElementCreation(){Jh()},beforeI2svg(){Jh()}}}};const Rr=_i||{};Rr[xr]||(Rr[xr]={});Rr[xr].styles||(Rr[xr].styles={});Rr[xr].hooks||(Rr[xr].hooks={});Rr[xr].shims||(Rr[xr].shims=[]);var Kn=Rr[xr];const zS=[],$S=function(){Me.removeEventListener("DOMContentLoaded",$S),Vu=1,zS.map(t=>t())};let Vu=!1;Nr&&(Vu=(Me.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Me.readyState),Vu||Me.addEventListener("DOMContentLoaded",$S));function aL(t){Nr&&(Vu?setTimeout(t,0):zS.push(t))}function jl(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?US(t):"<".concat(e," ").concat(nL(n),">").concat(r.map(jl).join(""),"</").concat(e,">")}function Q0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Zh=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,c,u,f;for(r===void 0?(c=1,f=e[s[0]]):(c=0,f=r);c<o;c++)u=s[c],f=a(f,e[u],u,e);return f};function lL(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Vp(t){const e=lL(t);return e.length===1?e[0].toString(16):null}function cL(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Y0(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Fp(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Y0(e);typeof Kn.hooks.addPack=="function"&&!r?Kn.hooks.addPack(t,Y0(e)):Kn.styles[t]={...Kn.styles[t]||{},...i},t==="fas"&&Fp("fa",e)}const{styles:Fi,shims:uL}=Kn,dL={[ze]:Object.values(Yi[ze]),[cn]:Object.values(Yi[cn]),[un]:Object.values(Yi[un])};let ty=null,WS={},HS={},qS={},GS={},KS={};const hL={[ze]:Object.keys(Qi[ze]),[cn]:Object.keys(Qi[cn]),[un]:Object.keys(Qi[un])};function fL(t){return~Y4.indexOf(t)}function pL(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!fL(i)?i:null}const QS=()=>{const t=r=>Zh(Fi,(i,s,o)=>(i[o]=Zh(s,r,{}),i),{});WS=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),HS=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),KS=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in Fi||G.autoFetchSvg,n=Zh(uL,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});qS=n.names,GS=n.unicodes,ty=Fd(G.styleDefault,{family:G.familyDefault})};Z4(t=>{ty=Fd(t.styleDefault,{family:G.familyDefault})});QS();function ny(t,e){return(WS[t]||{})[e]}function mL(t,e){return(HS[t]||{})[e]}function ei(t,e){return(KS[t]||{})[e]}function YS(t){return qS[t]||{prefix:null,iconName:null}}function gL(t){const e=GS[t],n=ny("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function wi(){return ty}const ry=()=>({prefix:null,iconName:null,rest:[]});function Fd(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ze}=e,r=Qi[n][t],i=hl[n][t]||hl[n][r],s=t in Kn.styles?t:null;return i||s||null}const yL={[ze]:Object.keys(Yi[ze]),[cn]:Object.keys(Yi[cn]),[un]:Object.keys(Yi[un])};function Ud(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[ze]:"".concat(G.cssPrefix,"-").concat(ze),[cn]:"".concat(G.cssPrefix,"-").concat(cn),[un]:"".concat(G.cssPrefix,"-").concat(un)};let i=null,s=ze;const o=C4.filter(c=>c!==PS);o.forEach(c=>{(t.includes(r[c])||t.some(u=>yL[c].includes(u)))&&(s=c)});const a=t.reduce((c,u)=>{const f=pL(G.cssPrefix,u);if(Fi[u]?(u=dL[s].includes(u)?H4[s][u]:u,i=u,c.prefix=u):hL[s].indexOf(u)>-1?(i=u,c.prefix=Fd(u,{family:s})):f?c.iconName=f:u!==G.replacementClass&&!o.some(m=>u===r[m])&&c.rest.push(u),!n&&c.prefix&&c.iconName){const m=i==="fa"?YS(c.iconName):{},g=ei(c.prefix,c.iconName);m.prefix&&(i=null),c.iconName=m.iconName||g||c.iconName,c.prefix=m.prefix||c.prefix,c.prefix==="far"&&!Fi.far&&Fi.fas&&!G.autoFetchSvg&&(c.prefix="fas")}return c},ry());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===cn&&(Fi.fass||G.autoFetchSvg)&&(a.prefix="fass",a.iconName=ei(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===un&&(Fi.fasds||G.autoFetchSvg)&&(a.prefix="fasds",a.iconName=ei(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=wi()||"fas"),a}class vL{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},Fp(s,i[s]);const o=Yi[ze][s];o&&Fp(o,i[s]),QS()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],c=a[2];e[s]||(e[s]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(e[s][u]=a)}),e[s][o]=a}),e}}let X0=[],Ks={};const io={},_L=Object.keys(io);function wL(t,e){let{mixoutsTo:n}=e;return X0=t,Ks={},Object.keys(io).forEach(r=>{_L.indexOf(r)===-1&&delete io[r]}),X0.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{Ks[o]||(Ks[o]=[]),Ks[o].push(s[o])})}r.provides&&r.provides(io)}),n}function Up(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(Ks[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function cs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Ks[t]||[]).forEach(s=>{s.apply(null,n)})}function Ei(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return io[t]?io[t].apply(null,e):void 0}function Bp(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||wi();if(e)return e=ei(n,e)||e,Q0(XS.definitions,n,e)||Q0(Kn.styles,n,e)}const XS=new vL,EL=()=>{G.autoReplaceSvg=!1,G.observeMutations=!1,cs("noAuto")},TL={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Nr?(cs("beforeI2svg",t),Ei("pseudoElements2svg",t),Ei("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,aL(()=>{SL({autoReplaceSvgRoot:e}),cs("watch",t)})}},IL={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ei(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Fd(t[0]);return{prefix:n,iconName:ei(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(G.cssPrefix,"-"))>-1||t.match(q4))){const e=Ud(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||wi(),iconName:ei(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=wi();return{prefix:e,iconName:ei(e,t)||t}}}},gn={noAuto:EL,config:G,dom:TL,parse:IL,library:XS,findIconDefinition:Bp,toHtml:jl},SL=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Me}=t;(Object.keys(Kn.styles).length>0||G.autoFetchSvg)&&Nr&&G.autoReplaceSvg&&gn.dom.i2svg({node:e})};function Bd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>jl(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Nr)return;const n=Me.createElement("div");return n.innerHTML=t.html,n.children}}),t}function CL(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(ey(o)&&n.found&&!r.found){const{width:a,height:c}=n,u={x:a/c/2,y:.5};i.style=Vd({...s,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function xL(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function iy(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:c,titleId:u,extra:f,watchable:m=!1}=t,{width:g,height:E}=n.found?n:e,x=r==="fak",P=[G.replacementClass,i?"".concat(G.cssPrefix,"-").concat(i):""].filter(j=>f.classes.indexOf(j)===-1).filter(j=>j!==""||!!j).concat(f.classes).join(" ");let k={children:[],attributes:{...f.attributes,"data-prefix":r,"data-icon":i,class:P,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(E)}};const v=x&&!~f.classes.indexOf("fa-fw")?{width:"".concat(g/E*16*.0625,"em")}:{};m&&(k.attributes[ls]=""),a&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||fl())},children:[a]}),delete k.attributes.title);const y={...k,prefix:r,iconName:i,main:e,mask:n,maskId:c,transform:s,symbol:o,styles:{...v,...f.styles}},{children:T,attributes:b}=n.found&&e.found?Ei("generateAbstractMask",y)||{children:[],attributes:{}}:Ei("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=T,y.attributes=b,o?xL(y):CL(y)}function J0(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,c={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(c[ls]="");const u={...o.styles};ey(i)&&(u.transform=iL({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const f=Vd(u);f.length>0&&(c.style=f);const m=[];return m.push({tag:"span",attributes:c,children:[e]}),s&&m.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),m}function RL(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Vd(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:ef}=Kn;function zp(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(Xh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(Xh.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(Xh.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const AL={found:!1,width:512,height:512};function kL(t,e){!LS&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function $p(t,e){let n=e;return e==="fa"&&G.styleDefault!==null&&(e=wi()),new Promise((r,i)=>{if(n==="fa"){const s=YS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&ef[e]&&ef[e][t]){const s=ef[e][t];return r(zp(s))}kL(t,e),r({...AL,icon:G.showMissingIcons&&t?Ei("missingIconAbstract")||{}:{}})})}const Z0=()=>{},Wp=G.measurePerformance&&Rc&&Rc.mark&&Rc.measure?Rc:{mark:Z0,measure:Z0},Ea='FA "6.6.0"',PL=t=>(Wp.mark("".concat(Ea," ").concat(t," begins")),()=>JS(t)),JS=t=>{Wp.mark("".concat(Ea," ").concat(t," ends")),Wp.measure("".concat(Ea," ").concat(t),"".concat(Ea," ").concat(t," begins"),"".concat(Ea," ").concat(t," ends"))};var sy={begin:PL,end:JS};const Kc=()=>{};function e1(t){return typeof(t.getAttribute?t.getAttribute(ls):null)=="string"}function NL(t){const e=t.getAttribute?t.getAttribute(Xg):null,n=t.getAttribute?t.getAttribute(Jg):null;return e&&n}function bL(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function DL(){return G.autoReplaceSvg===!0?Qc.replace:Qc[G.autoReplaceSvg]||Qc.replace}function OL(t){return Me.createElementNS("http://www.w3.org/2000/svg",t)}function LL(t){return Me.createElement(t)}function ZS(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?OL:LL}=e;if(typeof t=="string")return Me.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(ZS(s,{ceFn:n}))}),r}function jL(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Qc={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(ZS(n),e)}),e.getAttribute(ls)===null&&G.keepOriginalSource){let n=Me.createComment(jL(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Zg(e).indexOf(G.replacementClass))return Qc.replace(t);const r=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===G.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>jl(s)).join(`
`);e.setAttribute(ls,""),e.innerHTML=i}};function t1(t){t()}function e2(t,e){const n=typeof e=="function"?e:Kc;if(t.length===0)n();else{let r=t1;G.mutateApproach===$4&&(r=_i.requestAnimationFrame||t1),r(()=>{const i=DL(),s=sy.begin("mutate");t.map(i),s(),n()})}}let oy=!1;function t2(){oy=!0}function Hp(){oy=!1}let Fu=null;function n1(t){if(!W0||!G.observeMutations)return;const{treeCallback:e=Kc,nodeCallback:n=Kc,pseudoElementsCallback:r=Kc,observeMutationsRoot:i=Me}=t;Fu=new W0(s=>{if(oy)return;const o=wi();jo(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!e1(a.addedNodes[0])&&(G.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&G.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&e1(a.target)&&~Q4.indexOf(a.attributeName))if(a.attributeName==="class"&&NL(a.target)){const{prefix:c,iconName:u}=Ud(Zg(a.target));a.target.setAttribute(Xg,c||o),u&&a.target.setAttribute(Jg,u)}else bL(a.target)&&n(a.target)})}),Nr&&Fu.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ML(){Fu&&Fu.disconnect()}function VL(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function FL(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Ud(Zg(t));return i.prefix||(i.prefix=wi()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=mL(i.prefix,t.innerText)||ny(i.prefix,Vp(t.innerText))),!i.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function UL(t){const e=jo(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(r||fl()):(e["aria-hidden"]="true",e.focusable="false")),e}function BL(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Gn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function r1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=FL(t),s=UL(t),o=Up("parseNodeAttributes",{},t);let a=e.styleParser?VL(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Gn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:zL}=Kn;function n2(t){const e=G.autoReplaceSvg==="nest"?r1(t,{styleParser:!1}):r1(t);return~e.extra.classes.indexOf(VS)?Ei("generateLayersText",t,e):Ei("generateSvgReplacementMutation",t,e)}let ir=new Set;jS.map(t=>{ir.add("fa-".concat(t))});Object.keys(Qi[ze]).map(ir.add.bind(ir));Object.keys(Qi[cn]).map(ir.add.bind(ir));Object.keys(Qi[un]).map(ir.add.bind(ir));ir=[...ir];function i1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Nr)return Promise.resolve();const n=Me.documentElement.classList,r=f=>n.add("".concat(G0,"-").concat(f)),i=f=>n.remove("".concat(G0,"-").concat(f)),s=G.autoFetchSvg?ir:jS.map(f=>"fa-".concat(f)).concat(Object.keys(zL));s.includes("fa")||s.push("fa");const o=[".".concat(VS,":not([").concat(ls,"])")].concat(s.map(f=>".".concat(f,":not([").concat(ls,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=jo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const c=sy.begin("onTree"),u=a.reduce((f,m)=>{try{const g=n2(m);g&&f.push(g)}catch(g){LS||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise((f,m)=>{Promise.all(u).then(g=>{e2(g,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),f()})}).catch(g=>{c(),m(g)})})}function $L(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;n2(t).then(n=>{n&&e2([n],e)})}function WL(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Bp(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Bp(i||{})),t(r,{...n,mask:i})}}const HL=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Gn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:c=[],attributes:u={},styles:f={}}=e;if(!t)return;const{prefix:m,iconName:g,icon:E}=t;return Bd({type:"icon",...t},()=>(cs("beforeDOMElementCreation",{iconDefinition:t,params:e}),G.autoA11y&&(o?u["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(a||fl()):(u["aria-hidden"]="true",u.focusable="false")),iy({icons:{main:zp(E),mask:i?zp(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:g,transform:{...Gn,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:u,styles:f,classes:c}})))};var qL={mixout(){return{icon:WL(HL)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=i1,t.nodeCallback=$L,t}}},provides(t){t.i2svg=function(e){const{node:n=Me,callback:r=()=>{}}=e;return i1(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:c,mask:u,maskId:f,extra:m}=n;return new Promise((g,E)=>{Promise.all([$p(r,o),u.iconName?$p(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[P,k]=x;g([e,iy({icons:{main:P,mask:k},prefix:o,iconName:r,transform:a,symbol:c,maskId:f,title:i,titleId:s,extra:m,watchable:!0})])}).catch(E)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=Vd(o);a.length>0&&(r.style=a);let c;return ey(s)&&(c=Ei("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(c||i.icon),{children:n,attributes:r}}}},GL={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Bd({type:"layer"},()=>{cs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},KL={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Bd({type:"counter",content:t},()=>(cs("beforeDOMElementCreation",{content:t,params:e}),RL({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(G.cssPrefix,"-layers-counter"),...r]}})))}}}},QL={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Gn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Bd({type:"text",content:t},()=>(cs("beforeDOMElementCreation",{content:t,params:e}),J0({content:t,transform:{...Gn,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(G.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(kS){const c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/c,a=u.height/c}return G.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,J0({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const YL=new RegExp('"',"ug"),s1=[1105920,1112319],o1={FontAwesome:{normal:"fas",400:"fas"},...N4,...P4,...F4},qp=Object.keys(o1).reduce((t,e)=>(t[e.toLowerCase()]=o1[e],t),{}),XL=Object.keys(qp).reduce((t,e)=>{const n=qp[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function JL(t){const e=t.replace(YL,""),n=cL(e,0),r=n>=s1[0]&&n<=s1[1],i=e.length===2?e[0]===e[1]:!1;return{value:Vp(i?e[0]:e),isSecondary:r||i}}function ZL(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(qp[n]||{})[i]||XL[n]}function a1(t,e){const n="".concat(z4).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=jo(t.children).filter(g=>g.getAttribute(Op)===e)[0],a=_i.getComputedStyle(t,e),c=a.getPropertyValue("font-family"),u=c.match(G4),f=a.getPropertyValue("font-weight"),m=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&m!=="none"&&m!==""){const g=a.getPropertyValue("content");let E=ZL(c,f);const{value:x,isSecondary:P}=JL(g),k=u[0].startsWith("FontAwesome");let v=ny(E,x),y=v;if(k){const T=gL(x);T.iconName&&T.prefix&&(v=T.iconName,E=T.prefix)}if(v&&!P&&(!o||o.getAttribute(Xg)!==E||o.getAttribute(Jg)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);const T=BL(),{extra:b}=T;b.attributes[Op]=e,$p(v,E).then(j=>{const M=iy({...T,icons:{main:j,mask:ry()},prefix:E,iconName:y,extra:b,watchable:!0}),S=Me.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(S,t.firstChild):t.appendChild(S),S.outerHTML=M.map(w=>jl(w)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function e3(t){return Promise.all([a1(t,"::before"),a1(t,"::after")])}function t3(t){return t.parentNode!==document.head&&!~W4.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Op)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function l1(t){if(Nr)return new Promise((e,n)=>{const r=jo(t.querySelectorAll("*")).filter(t3).map(e3),i=sy.begin("searchPseudoElements");t2(),Promise.all(r).then(()=>{i(),Hp(),e()}).catch(()=>{i(),Hp(),n()})})}var n3={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=l1,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Me}=e;G.searchPseudoElements&&l1(n)}}};let c1=!1;var r3={mixout(){return{dom:{unwatch(){t2(),c1=!0}}}},hooks(){return{bootstrap(){n1(Up("mutationObserverCallbacks",{}))},noAuto(){ML()},watch(t){const{observeMutationsRoot:e}=t;c1?Hp():n1(Up("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const u1=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var i3={mixout(){return{parse:{transform:t=>u1(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=u1(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(a," ").concat(c," ").concat(u)},m={transform:"translate(".concat(s/2*-1," -256)")},g={outer:o,inner:f,path:m};return{tag:"g",attributes:{...g.outer},children:[{tag:"g",attributes:{...g.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...g.path}}]}]}}}};const tf={x:0,y:0,width:"100%",height:"100%"};function d1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function s3(t){return t.tag==="g"?t.children:[t]}var o3={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Ud(n.split(" ").map(i=>i.trim())):ry();return r.prefix||(r.prefix=wi()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:c,icon:u}=i,{width:f,icon:m}=s,g=rL({transform:a,containerWidth:f,iconWidth:c}),E={tag:"rect",attributes:{...tf,fill:"white"}},x=u.children?{children:u.children.map(d1)}:{},P={tag:"g",attributes:{...g.inner},children:[d1({tag:u.tag,attributes:{...u.attributes,...g.path},...x})]},k={tag:"g",attributes:{...g.outer},children:[P]},v="mask-".concat(o||fl()),y="clip-".concat(o||fl()),T={tag:"mask",attributes:{...tf,id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[E,k]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:s3(m)},T]};return n.push(b,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(v,")"),...tf}}),{children:n,attributes:r}}}},a3={provides(t){let e=!1;_i.matchMedia&&(e=_i.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},l3={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},c3=[oL,qL,GL,KL,QL,n3,r3,i3,o3,a3,l3];wL(c3,{mixoutsTo:gn});gn.noAuto;gn.config;gn.library;gn.dom;const Gp=gn.parse;gn.findIconDefinition;gn.toHtml;const u3=gn.icon;gn.layer;gn.text;gn.counter;var r2={exports:{}},d3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",h3=d3,f3=h3;function i2(){}function s2(){}s2.resetWarningCache=i2;var p3=function(){function t(r,i,s,o,a,c){if(c!==f3){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:s2,resetWarningCache:i2};return n.PropTypes=n,n};r2.exports=p3();var m3=r2.exports;const ee=Qu(m3);function h1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Un(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?h1(Object(n),!0).forEach(function(r){Qs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Uu(t){"@babel/helpers - typeof";return Uu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Uu(t)}function Qs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function y3(t,e){if(t==null)return{};var n=g3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Kp(t){return v3(t)||_3(t)||w3(t)||E3()}function v3(t){if(Array.isArray(t))return Qp(t)}function _3(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function w3(t,e){if(t){if(typeof t=="string")return Qp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qp(t,e)}}function Qp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function E3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T3(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,c=t.spin,u=t.spinPulse,f=t.spinReverse,m=t.pulse,g=t.fixedWidth,E=t.inverse,x=t.border,P=t.listItem,k=t.flip,v=t.size,y=t.rotation,T=t.pull,b=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":m,"fa-fw":g,"fa-inverse":E,"fa-border":x,"fa-li":P,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Qs(e,"fa-".concat(v),typeof v<"u"&&v!==null),Qs(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),Qs(e,"fa-pull-".concat(T),typeof T<"u"&&T!==null),Qs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(b).map(function(j){return b[j]?j:null}).filter(function(j){return j})}function I3(t){return t=t-0,t===t}function o2(t){return I3(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var S3=["style"];function C3(t){return t.charAt(0).toUpperCase()+t.slice(1)}function x3(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=o2(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[C3(i)]=s:e[i]=s,e},{})}function a2(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return a2(t,c)}),i=Object.keys(e.attributes||{}).reduce(function(c,u){var f=e.attributes[u];switch(u){case"class":c.attrs.className=f,delete e.attributes.class;break;case"style":c.attrs.style=x3(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?c.attrs[u.toLowerCase()]=f:c.attrs[o2(u)]=f}return c},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=y3(n,S3);return i.attrs.style=Un(Un({},i.attrs.style),o),t.apply(void 0,[e.tag,Un(Un({},i.attrs),a)].concat(Kp(r)))}var l2=!1;try{l2=!0}catch{}function R3(){if(!l2&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function f1(t){if(t&&Uu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Gp.icon)return Gp.icon(t);if(t===null)return null;if(t&&Uu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function nf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Qs({},t,e):{}}var p1={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},nt=bn.forwardRef(function(t,e){var n=Un(Un({},p1),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,c=n.titleId,u=n.maskId,f=f1(r),m=nf("classes",[].concat(Kp(T3(n)),Kp((o||"").split(" ")))),g=nf("transform",typeof n.transform=="string"?Gp.transform(n.transform):n.transform),E=nf("mask",f1(i)),x=u3(f,Un(Un(Un(Un({},m),g),E),{},{symbol:s,title:a,titleId:c,maskId:u}));if(!x)return R3("Could not find icon",f),null;var P=x.abstract,k={ref:e};return Object.keys(n).forEach(function(v){p1.hasOwnProperty(v)||(k[v]=n[v])}),A3(P[0],k)});nt.displayName="FontAwesomeIcon";nt.propTypes={beat:ee.bool,border:ee.bool,beatFade:ee.bool,bounce:ee.bool,className:ee.string,fade:ee.bool,flash:ee.bool,mask:ee.oneOfType([ee.object,ee.array,ee.string]),maskId:ee.string,fixedWidth:ee.bool,inverse:ee.bool,flip:ee.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ee.oneOfType([ee.object,ee.array,ee.string]),listItem:ee.bool,pull:ee.oneOf(["right","left"]),pulse:ee.bool,rotation:ee.oneOf([0,90,180,270]),shake:ee.bool,size:ee.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ee.bool,spinPulse:ee.bool,spinReverse:ee.bool,symbol:ee.oneOfType([ee.bool,ee.string]),title:ee.string,titleId:ee.string,transform:ee.oneOfType([ee.string,ee.object]),swapOpacity:ee.bool};var A3=a2.bind(null,bn.createElement);const k3={prefix:"fas",iconName:"temperature-half",icon:[320,512,[127777,"temperature-2","thermometer-2","thermometer-half"],"f2c9","M160 64c-26.5 0-48 21.5-48 48l0 164.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5L208 112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112l0 164.4c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6L48 112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L144 208c0-8.8 7.2-16 16-16s16 7.2 16 16l0 114.7c18.6 6.6 32 24.4 32 45.3z"]},P3=k3,N3={prefix:"fas",iconName:"umbrella-beach",icon:[576,512,[127958],"f5ca","M346.3 271.8l-60.1-21.9L214 448 32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-261.9 0 64.1-176.2zm121.1-.2l-3.3 9.1 67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4zM462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5l-.2-6zM107.2 112.9c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8 3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z"]},c2={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},b3={prefix:"fas",iconName:"crown",icon:[576,512,[128081],"f521","M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"]},D3={prefix:"fas",iconName:"city",icon:[640,512,[127961],"f64f","M480 48c0-26.5-21.5-48-48-48L336 0c-26.5 0-48 21.5-48 48l0 48-64 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-64 0 0-72c0-13.3-10.7-24-24-24S64 10.7 64 24l0 72L48 96C21.5 96 0 117.5 0 144l0 96L0 464c0 26.5 21.5 48 48 48l256 0 32 0 96 0 160 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-112 0 0-144zm96 320l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM240 416l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32zM560 256c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 176l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 304c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32zM112 320l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16zm304-48l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zm16 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16z"]},O3={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},L3=O3,j3={prefix:"fas",iconName:"person-skiing",icon:[512,512,[9975,"skiing"],"f7c9","M380.7 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM2.7 268.9c6.1-11.8 20.6-16.3 32.4-10.2L232.7 361.3l46.2-69.2-75.1-75.1c-14.6-14.6-20.4-33.9-18.4-52.1l108.8 52 39.3 39.3c16.2 16.2 18.7 41.5 6 60.6L289.8 391l128.7 66.8c13.6 7.1 29.8 7.2 43.6 .3l15.2-7.6c11.9-5.9 26.3-1.1 32.2 10.7s1.1 26.3-10.7 32.2l-15.2 7.6c-27.5 13.7-59.9 13.5-87.2-.7L12.9 301.3C1.2 295.2-3.4 280.7 2.7 268.9zM118.9 65.6L137 74.2l8.7-17.4c4-7.9 13.6-11.1 21.5-7.2s11.1 13.6 7.2 21.5l-8.5 16.9 54.7 26.2c1.5-.7 3.1-1.4 4.7-2.1l83.4-33.4c34.2-13.7 72.8 4.2 84.5 39.2l17.1 51.2 52.1 26.1c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-58.1-29c-11.4-5.7-20-15.7-24.1-27.8l-5.8-17.3-27.3 12.1-6.8 3-6.7-3.2L151.5 116.7l-9.2 18.4c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l9-18-17.6-8.4c-8-3.8-11.3-13.4-7.5-21.3s13.4-11.3 21.3-7.5z"]},M3={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},V3={prefix:"fas",iconName:"tag",icon:[448,512,[127991],"f02b","M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},F3={prefix:"fas",iconName:"person-hiking",icon:[384,512,["hiking"],"f6ec","M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9l0 89.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208l30.9 0 0-24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 55.8c0 .1 0 .2 0 .2s0 .2 0 .2L384 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-216-39.4 0c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59l4.2 0c15.6 0 27.1 14.7 23.3 29.8z"]},U3={prefix:"fas",iconName:"ellipsis",icon:[448,512,["ellipsis-h"],"f141","M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]},rf={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},B3={prefix:"fas",iconName:"earth-americas",icon:[512,512,[127758,"earth","earth-america","globe-americas"],"f57d","M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},z3={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},$3=z3,sf={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},m1={prefix:"fas",iconName:"dollar-sign",icon:[320,512,[128178,61781,"dollar","usd"],"24","M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z"]};function W3({onFilterChange:t,onSortChange:e,activeSort:n,sortDirection:r}){const[i,s]=I.useState(!1),[o,a]=I.useState(null),c=u=>{a(u),t(u)};return d.jsxs("div",{className:"filterContainer",children:[d.jsx("h4",{style:{textAlign:"center"},children:"Utforsk ditt favorittsted"}),d.jsxs("div",{className:"buttons",children:[d.jsxs("div",{className:"button-container",onClick:()=>c("Alle"),children:[d.jsx("button",{className:o==="Alle"?"active":"",children:d.jsx(nt,{icon:B3,className:"icon"})}),d.jsx("p",{children:"Alle"})]}),d.jsxs("div",{className:"button-container",onClick:()=>c("Strand"),children:[d.jsx("button",{className:o==="Strand"?"active":"",children:d.jsx(nt,{icon:N3,className:"icon"})}),d.jsx("p",{children:"Strand"})]}),d.jsxs("div",{className:"button-container",onClick:()=>c("Natur"),children:[d.jsx("button",{className:o==="Natur"?"active":"",children:d.jsx(nt,{icon:F3,className:"icon"})}),d.jsx("p",{children:"Natur"})]}),d.jsxs("div",{className:"button-container",onClick:()=>c("Storby"),children:[d.jsx("button",{className:o==="Storby"?"active":"",children:d.jsx(nt,{icon:D3,className:"icon"})}),d.jsx("p",{children:"Storby"})]}),d.jsxs("div",{className:"button-container",onClick:()=>c("Vinter"),children:[d.jsx("button",{className:o==="Vinter"?"active":"",children:d.jsx(nt,{icon:j3,className:"icon"})}),d.jsx("p",{children:"Vinter"})]}),d.jsxs("div",{className:"button-container",onClick:()=>s(!i),children:[d.jsx("button",{className:"more-options-button",children:d.jsx(nt,{icon:U3,className:"icon"})}),d.jsx("p",{children:"Sortering"})]}),i&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"button-container",onClick:()=>e("Temperature"),children:[d.jsx("button",{className:`${n==="temperature"?"active":""} sorting-button`,children:d.jsx(nt,{icon:P3})}),n==="temperature"&&d.jsx(nt,{icon:r==="asc"?sf:rf,className:"direction-icon"}),d.jsx("p",{children:"Temperatur"})]}),d.jsxs("div",{className:"button-container",onClick:()=>e("Price"),children:[d.jsx("button",{className:`${n==="price"?"active":""} sorting-button`,children:d.jsx(nt,{icon:V3})}),n==="price"&&d.jsx(nt,{icon:r==="asc"?sf:rf,className:"direction-icon"}),d.jsx("p",{children:"Pris"})]}),d.jsxs("div",{className:"button-container",onClick:()=>e("Rating"),children:[d.jsx("button",{className:`${n==="rating"?"active":""} sorting-button`,children:d.jsx(nt,{icon:c2})}),n==="rating"&&d.jsx(nt,{icon:r==="asc"?sf:rf,className:"direction-icon"}),d.jsx("p",{children:"Rating"})]})]})]})]})}function H3(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}function Yp(t,e){return Yp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Yp(t,e)}function q3(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Yp(t,e)}function zd(t){return t&&t.ownerDocument||document}function G3(t){var e=zd(t);return e&&e.defaultView||window}function K3(t,e){return G3(t).getComputedStyle(t,e)}var Q3=/([A-Z])/g;function Y3(t){return t.replace(Q3,"-$1").toLowerCase()}var X3=/^ms-/;function Ac(t){return Y3(t).replace(X3,"-ms-")}var J3=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Z3(t){return!!(t&&J3.test(t))}function Xi(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(Ac(e))||K3(t).getPropertyValue(Ac(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(Ac(i)):Z3(i)?r+=i+"("+s+") ":n+=Ac(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}const g1={disabled:!1},u2=bn.createContext(null);var ej=function(e){return e.scrollTop},Ta="unmounted",Vi="exited",zr="entering",Ui="entered",Xp="exiting",br=function(t){q3(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,c;return s.appearStatus=null,r.in?a?(c=Vi,s.appearStatus=zr):c=Ui:r.unmountOnExit||r.mountOnEnter?c=Ta:c=Vi,s.state={status:c},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Ta?{status:Vi}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==zr&&o!==Ui&&(s=zr):(o===zr||o===Ui)&&(s=Xp)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===zr){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Gs.findDOMNode(this);o&&ej(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Vi&&this.setState({status:Ta})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,c=this.props.nodeRef?[a]:[Gs.findDOMNode(this),a],u=c[0],f=c[1],m=this.getTimeouts(),g=a?m.appear:m.enter;if(!i&&!o||g1.disabled){this.safeSetState({status:Ui},function(){s.props.onEntered(u)});return}this.props.onEnter(u,f),this.safeSetState({status:zr},function(){s.props.onEntering(u,f),s.onTransitionEnd(g,function(){s.safeSetState({status:Ui},function(){s.props.onEntered(u,f)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:Gs.findDOMNode(this);if(!s||g1.disabled){this.safeSetState({status:Vi},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Xp},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Vi},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:Gs.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=c[0],f=c[1];this.props.addEndListener(u,f)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Ta)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=H3(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return bn.createElement(u2.Provider,{value:null},typeof o=="function"?o(i,a):bn.cloneElement(bn.Children.only(o),a))},e}(bn.Component);br.contextType=u2;br.propTypes={};function ks(){}br.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ks,onEntering:ks,onEntered:ks,onExit:ks,onExiting:ks,onExited:ks};br.UNMOUNTED=Ta;br.EXITED=Vi;br.ENTERING=zr;br.ENTERED=Ui;br.EXITING=Xp;const Mo=!!(typeof window<"u"&&window.document&&window.document.createElement);var Jp=!1,Zp=!1;try{var of={get passive(){return Jp=!0},get once(){return Zp=Jp=!0}};Mo&&(window.addEventListener("test",of,of),window.removeEventListener("test",of,!0))}catch{}function d2(t,e,n,r){if(r&&typeof r!="boolean"&&!Zp){var i=r.once,s=r.capture,o=n;!Zp&&i&&(o=n.__once||function a(c){this.removeEventListener(e,a,s),n.call(this,c)},n.__once=o),t.addEventListener(e,o,Jp?r:s)}t.addEventListener(e,n,r)}function em(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Bu(t,e,n,r){return d2(t,e,n,r),function(){em(t,e,n,r)}}function tj(t,e,n,r){if(r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function nj(t){var e=Xi(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function rj(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||tj(t,"transitionend",!0)},e+n),s=Bu(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function h2(t,e,n,r){n==null&&(n=nj(t)||0);var i=rj(t,n,r),s=Bu(t,"transitionend",e);return function(){i(),s()}}function y1(t,e){const n=Xi(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function ij(t,e){const n=y1(t,"transitionDuration"),r=y1(t,"transitionDelay"),i=h2(t,s=>{s.target===t&&(i(),e(s))},n+r)}function sj(t){t.offsetHeight}const v1=t=>!t||typeof t=="function"?t:e=>{t.current=e};function oj(t,e){const n=v1(t),r=v1(e);return i=>{n&&n(i),r&&r(i)}}function Ml(t,e){return I.useMemo(()=>oj(t,e),[t,e])}function aj(t){return t&&"setState"in t?Gs.findDOMNode(t):t??null}const lj=bn.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:c,...u},f)=>{const m=I.useRef(null),g=Ml(m,c),E=M=>{g(aj(M))},x=M=>S=>{M&&m.current&&M(m.current,S)},P=I.useCallback(x(t),[t]),k=I.useCallback(x(e),[e]),v=I.useCallback(x(n),[n]),y=I.useCallback(x(r),[r]),T=I.useCallback(x(i),[i]),b=I.useCallback(x(s),[s]),j=I.useCallback(x(o),[o]);return d.jsx(br,{ref:f,...u,onEnter:P,onEntered:v,onEntering:k,onExit:y,onExited:b,onExiting:T,addEndListener:j,nodeRef:m,children:typeof a=="function"?(M,S)=>a(M,{...S,ref:E}):bn.cloneElement(a,{ref:E})})});function cj(t){const e=I.useRef(t);return I.useEffect(()=>{e.current=t},[t]),e}function $n(t){const e=cj(t);return I.useCallback(function(...n){return e.current&&e.current(...n)},[e])}function uj(){return I.useState(null)}function dj(){const t=I.useRef(!0),e=I.useRef(()=>t.current);return I.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function hj(t){const e=I.useRef(null);return I.useEffect(()=>{e.current=t}),e.current}const fj=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",pj=typeof document<"u",_1=pj||fj?I.useLayoutEffect:I.useEffect,mj=["as","disabled"];function gj(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function yj(t){return!t||t.trim()==="#"}function f2({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:c}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:c||"button",disabled:e},u];const f=g=>{if((e||t==="a"&&yj(n))&&g.preventDefault(),e){g.stopPropagation();return}o==null||o(g)},m=g=>{g.key===" "&&(g.preventDefault(),f(g))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:f,onKeyDown:m},u]}const vj=I.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=gj(t,mj);const[s,{tagName:o}]=f2(Object.assign({tagName:n,disabled:r},i));return d.jsx(o,Object.assign({},i,s,{ref:e}))});vj.displayName="Button";const _j={[zr]:"show",[Ui]:"show"},ay=I.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=I.useCallback((c,u)=>{sj(c),r==null||r(c,u)},[r]);return d.jsx(lj,{ref:s,addEndListener:ij,...o,onEnter:a,childRef:e.ref,children:(c,u)=>I.cloneElement(e,{...u,className:le("fade",t,e.props.className,_j[c],n[c])})})});ay.displayName="Fade";const wj={"aria-label":ee.string,onClick:ee.func,variant:ee.oneOf(["white"])},ly=I.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>d.jsx("button",{ref:i,type:"button",className:le("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));ly.displayName="CloseButton";ly.propTypes=wj;const dn=I.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:r,active:i=!1,disabled:s=!1,className:o,...a},c)=>{const u=_e(e,"btn"),[f,{tagName:m}]=f2({tagName:t,disabled:s,...a}),g=m;return d.jsx(g,{...f,...a,ref:c,disabled:s,className:le(o,u,i&&"active",n&&`${u}-${n}`,r&&`${u}-${r}`,a.href&&s&&"disabled")})});dn.displayName="Button";function Ej(t){const e=I.useRef(t);return e.current=t,e}function p2(t){const e=Ej(t);I.useEffect(()=>()=>e.current(),[])}function Tj(t,e){return I.Children.toArray(t).some(n=>I.isValidElement(n)&&n.type===e)}function Ij({as:t,bsPrefix:e,className:n,...r}){e=_e(e,"col");const i=pS(),s=mS(),o=[],a=[];return i.forEach(c=>{const u=r[c];delete r[c];let f,m,g;typeof u=="object"&&u!=null?{span:f,offset:m,order:g}=u:f=u;const E=c!==s?`-${c}`:"";f&&o.push(f===!0?`${e}${E}`:`${e}${E}-${f}`),g!=null&&a.push(`order${E}-${g}`),m!=null&&a.push(`offset${E}-${m}`)}),[{...r,className:le(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const Y=I.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=Ij(t);return d.jsx(i,{...r,ref:e,className:le(n,!o.length&&s)})});Y.displayName="Col";var Sj=Function.prototype.bind.call(Function.prototype.call,[].slice);function Ps(t,e){return Sj(t.querySelectorAll(e))}function w1(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}const Cj="data-rr-ui-";function xj(t){return`${Cj}${t}`}const m2=I.createContext(Mo?window:void 0);m2.Provider;function cy(){return I.useContext(m2)}const g2=I.createContext(null);g2.displayName="InputGroupContext";ee.string,ee.bool,ee.bool,ee.bool,ee.bool;const y2=I.forwardRef(({bsPrefix:t,className:e,fluid:n=!1,rounded:r=!1,roundedCircle:i=!1,thumbnail:s=!1,...o},a)=>(t=_e(t,"img"),d.jsx("img",{ref:a,...o,className:le(e,n&&`${t}-fluid`,r&&"rounded",i&&"rounded-circle",s&&`${t}-thumbnail`)})));y2.displayName="Image";const Rj={type:ee.string,tooltip:ee.bool,as:ee.elementType},$d=I.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>d.jsx(t,{...i,ref:s,className:le(e,`${n}-${r?"tooltip":"feedback"}`)}));$d.displayName="Feedback";$d.propTypes=Rj;const Ar=I.createContext({}),Vl=I.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},c)=>{const{controlId:u}=I.useContext(Ar);return e=_e(e,"form-check-input"),d.jsx(o,{...a,ref:c,type:r,id:t||u,className:le(n,e,i&&"is-valid",s&&"is-invalid")})});Vl.displayName="FormCheckInput";const zu=I.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=I.useContext(Ar);return t=_e(t,"form-check-label"),d.jsx("label",{...r,ref:i,htmlFor:n||s,className:le(e,t)})});zu.displayName="FormCheckLabel";const v2=I.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:c=!1,feedback:u,feedbackType:f,className:m,style:g,title:E="",type:x="checkbox",label:P,children:k,as:v="input",...y},T)=>{e=_e(e,"form-check"),n=_e(n,"form-switch");const{controlId:b}=I.useContext(Ar),j=I.useMemo(()=>({controlId:t||b}),[b,t]),M=!k&&P!=null&&P!==!1||Tj(k,zu),S=d.jsx(Vl,{...y,type:x==="switch"?"checkbox":x,ref:T,isValid:o,isInvalid:a,disabled:s,as:v});return d.jsx(Ar.Provider,{value:j,children:d.jsx("div",{style:g,className:le(m,M&&e,r&&`${e}-inline`,i&&`${e}-reverse`,x==="switch"&&n),children:k||d.jsxs(d.Fragment,{children:[S,M&&d.jsx(zu,{title:E,children:P}),u&&d.jsx($d,{type:f,tooltip:c,children:u})]})})})});v2.displayName="FormCheck";const $u=Object.assign(v2,{Input:Vl,Label:zu}),_2=I.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:c,readOnly:u,as:f="input",...m},g)=>{const{controlId:E}=I.useContext(Ar);return t=_e(t,"form-control"),d.jsx(f,{...m,type:e,size:r,ref:g,readOnly:u,id:i||E,className:le(s,c?`${t}-plaintext`:t,n&&`${t}-${n}`,e==="color"&&`${t}-color`,o&&"is-valid",a&&"is-invalid")})});_2.displayName="FormControl";const Aj=Object.assign(_2,{Feedback:$d}),w2=I.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=_e(e,"form-floating"),d.jsx(n,{ref:i,className:le(t,e),...r})));w2.displayName="FormFloating";const uy=I.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=I.useMemo(()=>({controlId:t}),[t]);return d.jsx(Ar.Provider,{value:i,children:d.jsx(e,{...n,ref:r})})});uy.displayName="FormGroup";const E2=I.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:r=!1,className:i,htmlFor:s,...o},a)=>{const{controlId:c}=I.useContext(Ar);e=_e(e,"form-label");let u="col-form-label";typeof n=="string"&&(u=`${u} ${u}-${n}`);const f=le(i,e,r&&"visually-hidden",n&&u);return s=s||c,n?d.jsx(Y,{ref:a,as:"label",className:f,htmlFor:s,...o}):d.jsx(t,{ref:a,className:f,htmlFor:s,...o})});E2.displayName="FormLabel";const T2=I.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=I.useContext(Ar);return t=_e(t,"form-range"),d.jsx("input",{...r,type:"range",ref:i,className:le(e,t),id:n||s})});T2.displayName="FormRange";const I2=I.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},c)=>{const{controlId:u}=I.useContext(Ar);return t=_e(t,"form-select"),d.jsx("select",{...a,size:n,ref:c,className:le(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||u})});I2.displayName="FormSelect";const S2=I.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=_e(t,"form-text"),d.jsx(n,{...i,ref:s,className:le(e,t,r&&"text-muted")})));S2.displayName="FormText";const C2=I.forwardRef((t,e)=>d.jsx($u,{...t,ref:e,type:"switch"}));C2.displayName="Switch";const kj=Object.assign(C2,{Input:$u.Input,Label:$u.Label}),x2=I.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=_e(t,"form-floating"),d.jsxs(uy,{ref:o,className:le(e,t),controlId:r,...s,children:[n,d.jsx("label",{htmlFor:r,children:i})]})));x2.displayName="FloatingLabel";const Pj={_ref:ee.any,validated:ee.bool,as:ee.elementType},dy=I.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>d.jsx(n,{...r,ref:i,className:le(t,e&&"was-validated")}));dy.displayName="Form";dy.propTypes=Pj;const z=Object.assign(dy,{Group:uy,Control:Aj,Floating:w2,Check:$u,Switch:kj,Label:E2,Text:S2,Range:T2,Select:I2,FloatingLabel:x2}),Wd=I.forwardRef(({className:t,bsPrefix:e,as:n="span",...r},i)=>(e=_e(e,"input-group-text"),d.jsx(n,{ref:i,className:le(t,e),...r})));Wd.displayName="InputGroupText";const Nj=t=>d.jsx(Wd,{children:d.jsx(Vl,{type:"checkbox",...t})}),bj=t=>d.jsx(Wd,{children:d.jsx(Vl,{type:"radio",...t})}),R2=I.forwardRef(({bsPrefix:t,size:e,hasValidation:n,className:r,as:i="div",...s},o)=>{t=_e(t,"input-group");const a=I.useMemo(()=>({}),[]);return d.jsx(g2.Provider,{value:a,children:d.jsx(i,{ref:o,...s,className:le(r,t,e&&`${t}-${e}`,n&&"has-validation")})})});R2.displayName="InputGroup";const De=Object.assign(R2,{Text:Wd,Radio:bj,Checkbox:Nj});var kc;function E1(t){if((!kc&&kc!==0||t)&&Mo){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),kc=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return kc}function af(t){t===void 0&&(t=zd());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function Dj(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const T1=xj("modal-open");class hy{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return Dj(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(Xi(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(T1,""),Xi(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(T1),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const lf=(t,e)=>Mo?t==null?(e||zd()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function Oj(t,e){const n=cy(),[r,i]=I.useState(()=>lf(t,n==null?void 0:n.document));if(!r){const s=lf(t);s&&i(s)}return I.useEffect(()=>{},[e,r]),I.useEffect(()=>{const s=lf(t);s!==r&&i(s)},[t,r]),r}function Lj({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=I.useRef(null),o=I.useRef(e),a=$n(n);I.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const c=Ml(s,t.ref),u=I.cloneElement(t,{ref:c});return e?u:i||!o.current&&r?null:u}function jj(t){return t.code==="Escape"||t.keyCode===27}function Mj(){const t=I.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}const Vj=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Fj(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Uj(t){let{onEnter:e,onEntering:n,onEntered:r,onExit:i,onExiting:s,onExited:o,addEndListener:a,children:c}=t,u=Fj(t,Vj);const{major:f}=Mj(),m=f>=19?c.props.ref:c.ref,g=I.useRef(null),E=Ml(g,typeof c=="function"?null:m),x=M=>S=>{M&&g.current&&M(g.current,S)},P=I.useCallback(x(e),[e]),k=I.useCallback(x(n),[n]),v=I.useCallback(x(r),[r]),y=I.useCallback(x(i),[i]),T=I.useCallback(x(s),[s]),b=I.useCallback(x(o),[o]),j=I.useCallback(x(a),[a]);return Object.assign({},u,{nodeRef:g},e&&{onEnter:P},n&&{onEntering:k},r&&{onEntered:v},i&&{onExit:y},s&&{onExiting:T},o&&{onExited:b},a&&{addEndListener:j},{children:typeof c=="function"?(M,S)=>c(M,Object.assign({},S,{ref:E})):I.cloneElement(c,{ref:E})})}const Bj=["component"];function zj(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}const $j=I.forwardRef((t,e)=>{let{component:n}=t,r=zj(t,Bj);const i=Uj(r);return d.jsx(n,Object.assign({ref:e},i))});function Wj({in:t,onTransition:e}){const n=I.useRef(null),r=I.useRef(!0),i=$n(e);return _1(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),_1(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function Hj({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=I.useState(!e);e&&s&&o(!1);const a=Wj({in:!!e,onTransition:u=>{const f=()=>{u.isStale()||(u.in?r==null||r(u.element,u.initial):(o(!0),n==null||n(u.element)))};Promise.resolve(i(u)).then(f,m=>{throw u.in||o(!0),m})}}),c=Ml(a,t.ref);return s&&!e?null:I.cloneElement(t,{ref:c})}function I1(t,e,n){return t?d.jsx($j,Object.assign({},n,{component:t})):e?d.jsx(Hj,Object.assign({},n,{transition:e})):d.jsx(Lj,Object.assign({},n))}const qj=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Gj(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}let cf;function Kj(t){return cf||(cf=new hy({ownerDocument:t==null?void 0:t.document})),cf}function Qj(t){const e=cy(),n=t||Kj(e),r=I.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:I.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:I.useCallback(i=>{r.current.backdrop=i},[])})}const A2=I.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:c=!0,onBackdropClick:u,onEscapeKeyDown:f,transition:m,runTransition:g,backdropTransition:E,runBackdropTransition:x,autoFocus:P=!0,enforceFocus:k=!0,restoreFocus:v=!0,restoreFocusOptions:y,renderDialog:T,renderBackdrop:b=ae=>d.jsx("div",Object.assign({},ae)),manager:j,container:M,onShow:S,onHide:w=()=>{},onExit:C,onExited:R,onExiting:N,onEnter:D,onEntering:A,onEntered:Ze}=t,st=Gj(t,qj);const mt=cy(),ot=Oj(M),B=Qj(j),X=dj(),Z=hj(n),[de,oe]=I.useState(!n),ce=I.useRef(null);I.useImperativeHandle(e,()=>B,[B]),Mo&&!Z&&n&&(ce.current=af(mt==null?void 0:mt.document)),n&&de&&oe(!1);const Ue=$n(()=>{if(B.add(),At.current=Bu(document,"keydown",Ie),tt.current=Bu(document,"focus",()=>setTimeout(Q),!0),S&&S(),P){var ae,Pe;const at=af((ae=(Pe=B.dialog)==null?void 0:Pe.ownerDocument)!=null?ae:mt==null?void 0:mt.document);B.dialog&&at&&!w1(B.dialog,at)&&(ce.current=at,B.dialog.focus())}}),et=$n(()=>{if(B.remove(),At.current==null||At.current(),tt.current==null||tt.current(),v){var ae;(ae=ce.current)==null||ae.focus==null||ae.focus(y),ce.current=null}});I.useEffect(()=>{!n||!ot||Ue()},[n,ot,Ue]),I.useEffect(()=>{de&&et()},[de,et]),p2(()=>{et()});const Q=$n(()=>{if(!k||!X()||!B.isTopModal())return;const ae=af(mt==null?void 0:mt.document);B.dialog&&ae&&!w1(B.dialog,ae)&&B.dialog.focus()}),ue=$n(ae=>{ae.target===ae.currentTarget&&(u==null||u(ae),a===!0&&w())}),Ie=$n(ae=>{c&&jj(ae)&&B.isTopModal()&&(f==null||f(ae),ae.defaultPrevented||w())}),tt=I.useRef(),At=I.useRef(),Re=(...ae)=>{oe(!0),R==null||R(...ae)};if(!ot)return null;const K=Object.assign({role:r,ref:B.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},st,{style:s,className:i,tabIndex:-1});let me=T?T(K):d.jsx("div",Object.assign({},K,{children:I.cloneElement(o,{role:"document"})}));me=I1(m,g,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:C,onExiting:N,onExited:Re,onEnter:D,onEntering:A,onEntered:Ze,children:me});let we=null;return a&&(we=b({ref:B.setBackdropRef,onClick:ue}),we=I1(E,x,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:we})),d.jsx(d.Fragment,{children:Gs.createPortal(d.jsxs(d.Fragment,{children:[we,me]}),ot)})});A2.displayName="Modal";const Yj=Object.assign(A2,{Manager:hy});function Xj(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function Jj(t,e){t.classList?t.classList.add(e):Xj(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function S1(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Zj(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=S1(t.className,e):t.setAttribute("class",S1(t.className&&t.className.baseVal||"",e))}const Ns={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class e6 extends hy{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,Xi(n,{[e]:`${parseFloat(Xi(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],Xi(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(Jj(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Ps(n,Ns.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),Ps(n,Ns.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),Ps(n,Ns.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();Zj(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Ps(n,Ns.FIXED_CONTENT).forEach(s=>this.restore(r,s)),Ps(n,Ns.STICKY_CONTENT).forEach(s=>this.restore(i,s)),Ps(n,Ns.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let uf;function t6(t){return uf||(uf=new e6(t)),uf}const k2=I.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=_e(e,"modal-body"),d.jsx(n,{ref:i,className:le(t,e),...r})));k2.displayName="ModalBody";const P2=I.createContext({onHide(){}}),fy=I.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:r,size:i,fullscreen:s,children:o,scrollable:a,...c},u)=>{t=_e(t,"modal");const f=`${t}-dialog`,m=typeof s=="string"?`${t}-fullscreen-${s}`:`${t}-fullscreen`;return d.jsx("div",{...c,ref:u,className:le(f,e,i&&`${t}-${i}`,r&&`${f}-centered`,a&&`${f}-scrollable`,s&&m),children:d.jsx("div",{className:le(`${t}-content`,n),children:o})})});fy.displayName="ModalDialog";const N2=I.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=_e(e,"modal-footer"),d.jsx(n,{ref:i,className:le(t,e),...r})));N2.displayName="ModalFooter";const n6=I.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const a=I.useContext(P2),c=$n(()=>{a==null||a.onHide(),r==null||r()});return d.jsxs("div",{ref:o,...s,children:[i,n&&d.jsx(ly,{"aria-label":t,variant:e,onClick:c})]})}),b2=I.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=_e(t,"modal-header"),d.jsx(n6,{ref:s,...i,className:le(e,t),closeLabel:n,closeButton:r})));b2.displayName="ModalHeader";const r6=Qg("h4"),D2=I.forwardRef(({className:t,bsPrefix:e,as:n=r6,...r},i)=>(e=_e(e,"modal-title"),d.jsx(n,{ref:i,className:le(t,e),...r})));D2.displayName="ModalTitle";function i6(t){return d.jsx(ay,{...t,timeout:null})}function s6(t){return d.jsx(ay,{...t,timeout:null})}const O2=I.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:r,contentClassName:i,children:s,dialogAs:o=fy,"data-bs-theme":a,"aria-labelledby":c,"aria-describedby":u,"aria-label":f,show:m=!1,animation:g=!0,backdrop:E=!0,keyboard:x=!0,onEscapeKeyDown:P,onShow:k,onHide:v,container:y,autoFocus:T=!0,enforceFocus:b=!0,restoreFocus:j=!0,restoreFocusOptions:M,onEntered:S,onExit:w,onExiting:C,onEnter:R,onEntering:N,onExited:D,backdropClassName:A,manager:Ze,...st},mt)=>{const[ot,B]=I.useState({}),[X,Z]=I.useState(!1),de=I.useRef(!1),oe=I.useRef(!1),ce=I.useRef(null),[Ue,et]=uj(),Q=Ml(mt,et),ue=$n(v),Ie=E4();t=_e(t,"modal");const tt=I.useMemo(()=>({onHide:ue}),[ue]);function At(){return Ze||t6({isRTL:Ie})}function Re(ne){if(!Mo)return;const Ge=At().getScrollbarWidth()>0,Pi=ne.scrollHeight>zd(ne).documentElement.clientHeight;B({paddingRight:Ge&&!Pi?E1():void 0,paddingLeft:!Ge&&Pi?E1():void 0})}const K=$n(()=>{Ue&&Re(Ue.dialog)});p2(()=>{em(window,"resize",K),ce.current==null||ce.current()});const me=()=>{de.current=!0},we=ne=>{de.current&&Ue&&ne.target===Ue.dialog&&(oe.current=!0),de.current=!1},ae=()=>{Z(!0),ce.current=h2(Ue.dialog,()=>{Z(!1)})},Pe=ne=>{ne.target===ne.currentTarget&&ae()},at=ne=>{if(E==="static"){Pe(ne);return}if(oe.current||ne.target!==ne.currentTarget){oe.current=!1;return}v==null||v()},Dr=ne=>{x?P==null||P(ne):(ne.preventDefault(),E==="static"&&ae())},Ts=(ne,Ge)=>{ne&&Re(ne),R==null||R(ne,Ge)},Cn=ne=>{ce.current==null||ce.current(),w==null||w(ne)},xn=(ne,Ge)=>{N==null||N(ne,Ge),d2(window,"resize",K)},Yd=ne=>{ne&&(ne.style.display=""),D==null||D(ne),em(window,"resize",K)},Fo=I.useCallback(ne=>d.jsx("div",{...ne,className:le(`${t}-backdrop`,A,!g&&"show")}),[g,A,t]),Is={...n,...ot};Is.display="block";const $l=ne=>d.jsx("div",{role:"dialog",...ne,style:Is,className:le(e,t,X&&`${t}-static`,!g&&"show"),onClick:E?at:void 0,onMouseUp:we,"data-bs-theme":a,"aria-label":f,"aria-labelledby":c,"aria-describedby":u,children:d.jsx(o,{...st,onMouseDown:me,className:r,contentClassName:i,children:s})});return d.jsx(P2.Provider,{value:tt,children:d.jsx(Yj,{show:m,ref:Q,backdrop:E,container:y,keyboard:!0,autoFocus:T,enforceFocus:b,restoreFocus:j,restoreFocusOptions:M,onEscapeKeyDown:Dr,onShow:k,onHide:v,onEnter:Ts,onEntering:xn,onEntered:S,onExit:Cn,onExiting:C,onExited:Yd,manager:At(),transition:g?i6:void 0,backdropTransition:g?s6:void 0,renderBackdrop:Fo,renderDialog:$l})})});O2.displayName="Modal";const Ae=Object.assign(O2,{Body:k2,Header:b2,Title:D2,Footer:N2,Dialog:fy,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),Oe=I.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=_e(t,"row"),o=pS(),a=mS(),c=`${s}-cols`,u=[];return o.forEach(f=>{const m=r[f];delete r[f];let g;m!=null&&typeof m=="object"?{cols:g}=m:g=m;const E=f!==a?`-${f}`:"";g!=null&&u.push(`${c}${E}-${g}`)}),d.jsx(n,{ref:i,...r,className:le(e,s,...u)})});Oe.displayName="Row";const o6="/assets/logo_hele-EwgFBMw1.png",py=()=>{const t=new Date().getFullYear();return d.jsxs("footer",{className:"footer",children:[d.jsx(y2,{src:o6,className:"logo-footer",alt:"logo"}),d.jsx("span",{className:"year-copyright",children:d.jsxs("p",{children:["Vandrelyst Copyright © ",t]})})]})},a6="/assets/logo_navn-DpLyviPO.png";/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),L2=(t,e)=>{const n=I.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:c,...u},f)=>I.createElement("svg",{ref:f,...l6,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${c6(t)}`,a].join(" "),...u},[...e.map(([m,g])=>I.createElement(m,g)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=L2("CircleFadingPlus",[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=L2("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);var d6="firebase",h6="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn(d6,h6,"app");function my(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function j2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f6=j2,M2=new Il("auth","Firebase",j2());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new tg("@firebase/auth");function p6(t,...e){Wu.logLevel<=ge.WARN&&Wu.warn(`Auth (${gs}): ${t}`,...e)}function Yc(t,...e){Wu.logLevel<=ge.ERROR&&Wu.error(`Auth (${gs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,...e){throw gy(t,...e)}function er(t,...e){return gy(t,...e)}function V2(t,e,n){const r=Object.assign(Object.assign({},f6()),{[e]:n});return new Il("auth","Firebase",r).create(e,{appName:t.name})}function yr(t){return V2(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return M2.create(t,...e)}function te(t,e,...n){if(!t)throw gy(e,...n)}function hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yc(e),new Error(e)}function kr(t,e){t||hr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function m6(){return C1()==="http:"||C1()==="https:"}function C1(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g6(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(m6()||bk()||"connection"in navigator)?navigator.onLine:!0}function y6(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n){this.shortDelay=e,this.longDelay=n,kr(n>e,"Short delay should be less than long delay!"),this.isMobile=kk()||Dk()}get(){return g6()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t,e){kr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v6={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _6=new Fl(3e4,6e4);function Ai(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ki(t,e,n,r,i={}){return U2(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Sl(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},s);return Nk()||(u.referrerPolicy="no-referrer"),F2.fetch()(B2(t,t.config.apiHost,n,a),u)})}async function U2(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},v6),e);try{const i=new E6(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Pc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Pc(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Pc(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw V2(t,f,u);Mn(t,f)}}catch(i){if(i instanceof sr)throw i;Mn(t,"network-request-failed",{message:String(i)})}}async function Ul(t,e,n,r,i={}){const s=await ki(t,e,n,r,i);return"mfaPendingCredential"in s&&Mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function B2(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yy(t.config,i):`${t.config.apiScheme}://${i}`}function w6(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class E6{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(er(this.auth,"network-request-failed")),_6.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=er(t,e,r);return i.customData._tokenResponse=n,i}function x1(t){return t!==void 0&&t.enterprise!==void 0}class T6{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return w6(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function I6(t,e){return ki(t,"GET","/v2/recaptchaConfig",Ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S6(t,e){return ki(t,"POST","/v1/accounts:delete",e)}async function z2(t,e){return ki(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function C6(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),i=vy(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fa(hf(i.auth_time)),issuedAtTime:Fa(hf(i.iat)),expirationTime:Fa(hf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hf(t){return Number(t)*1e3}function vy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yc("JWT malformed, contained fewer than 3 sections"),null;try{const i=vT(n);return i?JSON.parse(i):(Yc("Failed to decode base64 JWT payload"),null)}catch(i){return Yc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function R1(t){const e=vy(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sr&&x6(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function x6({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R6{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fa(this.lastLoginAt),this.creationTime=Fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await pl(t,z2(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$2(s.providerUserInfo):[],a=k6(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=c?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new nm(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function A6(t){const e=Fe(t);await Hu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function k6(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $2(t){return t.map(e=>{var{providerId:n}=e,r=my(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P6(t,e){const n=await U2(t,{},async()=>{const r=Sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=B2(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",F2.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function N6(t,e){return ki(t,"POST","/v2/accounts:revokeToken",Ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):R1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=R1(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await P6(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new so;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new so,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=my(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new R6(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pl(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return C6(this,e)}reload(){return A6(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Hn(this.auth.app))return Promise.reject(yr(this.auth));const e=await this.getIdToken();return await pl(this,S6(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,y=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:T,emailVerified:b,isAnonymous:j,providerData:M,stsTokenManager:S}=n;te(T&&S,e,"internal-error");const w=so.fromJSON(this.name,S);te(typeof T=="string",e,"internal-error"),Fr(m,e.name),Fr(g,e.name),te(typeof b=="boolean",e,"internal-error"),te(typeof j=="boolean",e,"internal-error"),Fr(E,e.name),Fr(x,e.name),Fr(P,e.name),Fr(k,e.name),Fr(v,e.name),Fr(y,e.name);const C=new fr({uid:T,auth:e,email:g,emailVerified:b,displayName:m,isAnonymous:j,photoURL:x,phoneNumber:E,tenantId:P,stsTokenManager:w,createdAt:v,lastLoginAt:y});return M&&Array.isArray(M)&&(C.providerData=M.map(R=>Object.assign({},R))),k&&(C._redirectEventId=k),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new so;i.updateFromServerResponse(n);const s=new fr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?$2(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new so;a.updateFromIdToken(r);const c=new fr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new nm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=new Map;function pr(t){kr(t instanceof Function,"Expected a class definition");let e=A1.get(t);return e?(kr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,A1.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}W2.type="NONE";const k1=W2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t,e,n){return`firebase:${t}:${e}:${n}`}class oo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new oo(pr(k1),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||pr(k1);const o=Xc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const m=fr._fromJSON(e,f);u!==s&&(a=m),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new oo(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new oo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(K2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(H2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Y2(e))return"Blackberry";if(X2(e))return"Webos";if(q2(e))return"Safari";if((e.includes("chrome/")||G2(e))&&!e.includes("edge/"))return"Chrome";if(Q2(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function H2(t=Ft()){return/firefox\//i.test(t)}function q2(t=Ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G2(t=Ft()){return/crios\//i.test(t)}function K2(t=Ft()){return/iemobile/i.test(t)}function Q2(t=Ft()){return/android/i.test(t)}function Y2(t=Ft()){return/blackberry/i.test(t)}function X2(t=Ft()){return/webos/i.test(t)}function _y(t=Ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function b6(t=Ft()){var e;return _y(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function D6(){return Ok()&&document.documentMode===10}function J2(t=Ft()){return _y(t)||Q2(t)||X2(t)||Y2(t)||/windows phone/i.test(t)||K2(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(t,e=[]){let n;switch(t){case"Browser":n=P1(Ft());break;case"Worker":n=`${P1(Ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O6{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L6(t,e={}){return ki(t,"GET","/v2/passwordPolicy",Ai(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j6=6;class M6{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:j6,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V6{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new N1(this),this.idTokenSubscription=new N1(this),this.beforeStateQueue=new O6(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=M2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await oo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await z2(this,{idToken:e}),r=await fr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Hn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=y6()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Hn(this.app))return Promise.reject(yr(this));const n=e?Fe(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Hn(this.app)?Promise.reject(yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Hn(this.app)?Promise.reject(yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await L6(this),n=new M6(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Il("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await N6(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pr(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await oo.create(this,[pr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Z2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&p6(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Es(t){return Fe(t)}class N1{constructor(e){this.auth=e,this.observer=null,this.addObserver=zk(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function F6(t){Hd=t}function eC(t){return Hd.loadJS(t)}function U6(){return Hd.recaptchaEnterpriseScript}function B6(){return Hd.gapiScript}function z6(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const $6="recaptcha-enterprise",W6="NO_RECAPTCHA";class H6{constructor(e){this.type=$6,this.auth=Es(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{I6(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new T6(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;x1(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(W6)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&x1(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=U6();c.length!==0&&(c+=a),eC(c).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function b1(t,e,n,r=!1){const i=new H6(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function rm(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await b1(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await b1(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q6(t,e){const n=md(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(go(s,e??{}))return i;Mn(i,"already-initialized")}return n.initialize({options:e})}function G6(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function K6(t,e,n){const r=Es(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=tC(e),{host:o,port:a}=Q6(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Y6()}function tC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Q6(t){const e=tC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:D1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:D1(o)}}}function D1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Y6(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,n){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}async function X6(t,e){return ki(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J6(t,e){return Ul(t,"POST","/v1/accounts:signInWithPassword",Ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z6(t,e){return Ul(t,"POST","/v1/accounts:signInWithEmailLink",Ai(t,e))}async function eM(t,e){return Ul(t,"POST","/v1/accounts:signInWithEmailLink",Ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends wy{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ml(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ml(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rm(e,n,"signInWithPassword",J6);case"emailLink":return Z6(e,{email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rm(e,r,"signUpPassword",X6);case"emailLink":return eM(e,{idToken:n,email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(t,e){return Ul(t,"POST","/v1/accounts:signInWithIdp",Ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM="http://localhost";class us extends wy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=my(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new us(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ao(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ao(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ao(e,n)}buildRequest(){const e={requestUri:tM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Sl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rM(t){const e=pa(ma(t)).link,n=e?pa(ma(e)).deep_link_id:null,r=pa(ma(t)).deep_link_id;return(r?pa(ma(r)).link:null)||r||n||e||t}class Ey{constructor(e){var n,r,i,s,o,a;const c=pa(ma(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,m=nM((i=c.mode)!==null&&i!==void 0?i:null);te(u&&f&&m,"argument-error"),this.apiKey=u,this.operation=m,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=rM(e);try{return new Ey(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.providerId=Vo.PROVIDER_ID}static credential(e,n){return ml._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ey.parseLink(n);return te(r,"argument-error"),ml._fromEmailAndCode(e,r.code,r.tenantId)}}Vo.PROVIDER_ID="password";Vo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends nC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Bl{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";qr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Bl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return us._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gr.credential(n,r)}catch{return null}}}Gr.GOOGLE_SIGN_IN_METHOD="google.com";Gr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends Bl{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.GITHUB_SIGN_IN_METHOD="github.com";Kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Bl{constructor(){super("twitter.com")}static credential(e,n){return us._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qr.credential(n,r)}catch{return null}}}Qr.TWITTER_SIGN_IN_METHOD="twitter.com";Qr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iM(t,e){return Ul(t,"POST","/v1/accounts:signUp",Ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await fr._fromIdTokenResponse(e,r,i),o=O1(r);return new ds({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=O1(r);return new ds({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function O1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends sr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qu(e,n,r,i)}}function rC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qu._fromErrorAndOperation(t,s,e,r):s})}async function sM(t,e,n=!1){const r=await pl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oM(t,e,n=!1){const{auth:r}=t;if(Hn(r.app))return Promise.reject(yr(r));const i="reauthenticate";try{const s=await pl(t,rC(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=vy(s.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(t.uid===a,r,"user-mismatch"),ds._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Mn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iC(t,e,n=!1){if(Hn(t.app))return Promise.reject(yr(t));const r="signIn",i=await rC(t,r,e),s=await ds._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function aM(t,e){return iC(Es(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(t){const e=Es(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oC(t,e,n){if(Hn(t.app))return Promise.reject(yr(t));const r=Es(t),o=await rm(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iM).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&sC(t),c}),a=await ds._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function aC(t,e,n){return Hn(t.app)?Promise.reject(yr(t)):aM(Fe(t),Vo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sC(t),r})}function lM(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function cM(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function qd(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function uM(t){return Fe(t).signOut()}const Gu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gu,"1"),this.storage.removeItem(Gu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM=1e3,hM=10;class cC extends lC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=J2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);D6()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cC.type="LOCAL";const fM=cC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC extends lC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uC.type="SESSION";const dC=uC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Gd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await pM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Ty("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return window}function gM(t){tr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function yM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _M(){return hC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="firebaseLocalStorageDb",wM=1,Ku="firebaseLocalStorage",pC="fbase_key";class zl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kd(t,e){return t.transaction([Ku],e?"readwrite":"readonly").objectStore(Ku)}function EM(){const t=indexedDB.deleteDatabase(fC);return new zl(t).toPromise()}function im(){const t=indexedDB.open(fC,wM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ku,{keyPath:pC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ku)?e(r):(r.close(),await EM(),e(await im()))})})}async function L1(t,e,n){const r=Kd(t,!0).put({[pC]:e,value:n});return new zl(r).toPromise()}async function TM(t,e){const n=Kd(t,!1).get(e),r=await new zl(n).toPromise();return r===void 0?null:r.value}function j1(t,e){const n=Kd(t,!0).delete(e);return new zl(n).toPromise()}const IM=800,SM=3;class mC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await im(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gd._getInstance(_M()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yM(),!this.activeServiceWorker)return;this.sender=new mM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await im();return await L1(e,Gu,"1"),await j1(e,Gu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>L1(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>j1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kd(i,!1).getAll();return new zl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mC.type="LOCAL";const CM=mC;new Fl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(t,e){return e?pr(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy extends wy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ao(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ao(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RM(t){return iC(t.auth,new Iy(t),t.bypassAuthState)}function AM(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),oM(n,new Iy(t),t.bypassAuthState)}async function kM(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),sM(n,new Iy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RM;case"linkViaPopup":case"linkViaRedirect":return kM;case"reauthViaPopup":case"reauthViaRedirect":return AM;default:Mn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PM=new Fl(2e3,1e4);class Ys extends gC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ys.currentPopupAction&&Ys.currentPopupAction.cancel(),Ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=Ty();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PM.get())};e()}}Ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM="pendingRedirect",Jc=new Map;class bM extends gC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jc.get(this.auth._key());if(!e){try{const r=await DM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jc.set(this.auth._key(),e)}return this.bypassAuthState||Jc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DM(t,e){const n=jM(e),r=LM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function OM(t,e){Jc.set(t._key(),e)}function LM(t){return pr(t._redirectPersistence)}function jM(t){return Xc(NM,t.config.apiKey,t.name)}async function MM(t,e,n=!1){if(Hn(t.app))return Promise.reject(yr(t));const r=Es(t),i=xM(r,e),o=await new bM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM=10*60*1e3;class FM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(er(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VM&&this.cachedEventUids.clear(),this.cachedEventUids.has(M1(e))}saveEventToCache(e){this.cachedEventUids.add(M1(e)),this.lastProcessedEventTime=Date.now()}}function M1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BM(t,e={}){return ki(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$M=/^https?/;async function WM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BM(t);for(const n of e)try{if(HM(n))return}catch{}Mn(t,"unauthorized-domain")}function HM(t){const e=tm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$M.test(n))return!1;if(zM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=new Fl(3e4,6e4);function V1(){const t=tr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GM(t){return new Promise((e,n)=>{var r,i,s;function o(){V1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{V1(),n(er(t,"network-request-failed"))},timeout:qM.get()})}if(!((i=(r=tr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tr().gapi)===null||s===void 0)&&s.load)o();else{const a=z6("iframefcb");return tr()[a]=()=>{gapi.load?o():n(er(t,"network-request-failed"))},eC(`${B6()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Zc=null,e})}let Zc=null;function KM(t){return Zc=Zc||GM(t),Zc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QM=new Fl(5e3,15e3),YM="__/auth/iframe",XM="emulator/auth/iframe",JM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eV(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yy(e,XM):`https://${t.config.authDomain}/${YM}`,r={apiKey:e.apiKey,appName:t.name,v:gs},i=ZM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Sl(r).slice(1)}`}async function tV(t){const e=await KM(t),n=tr().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:eV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=er(t,"network-request-failed"),a=tr().setTimeout(()=>{s(o)},QM.get());function c(){tr().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rV=500,iV=600,sV="_blank",oV="http://localhost";class F1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aV(t,e,n,r=rV,i=iV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},nV),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ft().toLowerCase();n&&(a=G2(u)?sV:n),H2(u)&&(e=e||oV,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[E,x])=>`${g}${E}=${x},`,"");if(b6(u)&&a!=="_self")return lV(e||"",a),new F1(null);const m=window.open(e||"",a,f);te(m,t,"popup-blocked");try{m.focus()}catch{}return new F1(m)}function lV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cV="__/auth/handler",uV="emulator/auth/handler",dV=encodeURIComponent("fac");async function U1(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gs,eventId:i};if(e instanceof nC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Bl){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),u=c?`#${dV}=${encodeURIComponent(c)}`:"";return`${hV(t)}?${Sl(a).slice(1)}${u}`}function hV({config:t}){return t.emulator?yy(t,uV):`https://${t.authDomain}/${cV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="webStorageSupport";class fV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dC,this._completeRedirectFn=MM,this._overrideRedirectResult=OM}async _openPopup(e,n,r,i){var s;kr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await U1(e,n,r,tm(),i);return aV(e,o,Ty())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await U1(e,n,r,tm(),i);return gM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tV(e),r=new FM(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ff,{type:ff},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ff];o!==void 0&&n(!!o),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return J2()||q2()||_y()}}const pV=fV;var B1="@firebase/auth",z1="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yV(t){rs(new mi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Z2(t)},u=new V6(r,i,s,c);return G6(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rs(new mi("auth-internal",e=>{const n=Es(e.getProvider("auth").getImmediate());return(r=>new mV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(B1,z1,gV(t)),Xn(B1,z1,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vV=5*60,_V=TT("authIdTokenMaxAge")||vV;let $1=null;const wV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_V)return;const i=n==null?void 0:n.token;$1!==i&&($1=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ti(t=rg()){const e=md(t,"auth");if(e.isInitialized())return e.getImmediate();const n=q6(t,{popupRedirectResolver:pV,persistence:[CM,fM,dC]}),r=TT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=wV(s.toString());cM(n,o,()=>o(n.currentUser)),lM(n,a=>o(a))}}const i=_T("auth");return i&&K6(n,`http://${i}`),n}function EV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}F6({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=er("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",EV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yV("Browser");const TV={apiKey:"AIzaSyBXE-Phv00ZXP07Stl2sanuiPNjO0dDDxc",authDomain:"reiseinspirasjon-b2579.firebaseapp.com",projectId:"reiseinspirasjon-b2579",storageBucket:"reiseinspirasjon-b2579.appspot.com",messagingSenderId:"172470559176",appId:"1:172470559176:web:a56f693d1b58e1050da0fd",measurementId:"G-RT48LKNXCE"},Sy=xT(TV),hs=Lo(Sy);Sn(hs,"gs://reiseinspirasjon-b2579.appspot.com");const Ve=bl(Sy);Ct(Ve,"destinations");Ct(Ve,"users");const he=Ti(Sy);let IV=null;const SV=async(t,e,n,r,i=null,s)=>{const o=fn(Ve,"users",t),a={userEmail:t,userPassword:e,userFullName:n,userPhoneNumber:r,mainImage:i,isAdmin:s};await Pp(o,a),Pp(o,a)},Qd=async()=>{//! Sjekk om logget inn
var n;if(((n=he==null?void 0:he.currentUser)==null?void 0:n.email)===void 0)return!1;//! Vet at logget inn, men typescript klagde
//! Derfor kan checkEmail settes til ''
const t=he.currentUser.email||"";//! Henter ut referanse til document i collection
const e=fn(Ve,"users",t);//! Henter data fra document
try{const r=await ul(e);//! Sjekke om snapshotQuery faktisk finnes
if(r.exists())return r.data().isAdmin;console.log("No such document!")}catch(r){return console.log(r),!1}},CV=()=>{uM(he).then(()=>{}).catch(t=>{console.log("Error: "+t)})},xV=t=>{const[e,n]=I.useState(""),[r,i]=I.useState(""),[s,o]=I.useState(""),[a,c]=I.useState(""),[u,f]=I.useState(null),m=Tl();I.useEffect(()=>{//! Vet hvordan man henter ut email -> SJekker da hvis null return
//! Ellers sjekk email mot document ID
//! OnLogIn
});const g=v=>{v.preventDefault(),aC(he,s,a).then(y=>{y.user;//! Sende tilbake til forsiden
m("/")}).catch(y=>{y.code,y.message,alert("Bruker eksisterer allerede!")})},E=async()=>{if(u!=null){const v=Sn(hs,`profilePic/${s}`);await dl(v,u),await rr(v)}},x=v=>{v.preventDefault(),oC(he,s,a).then(async y=>{y.user,console.log("Registrert bruker"),await E();//! Lage entry
SV(s,a,e,r,IV,!1);//! Logg inn og bli sendt tilbake til forside
g(v)}).catch(y=>{y.code,y.message})},P=v=>{const y=v.target.files;y&&y.length>0&&f(y[0])};let k=[g,x,E];return d.jsxs("div",{className:"wholeDiv",children:[d.jsx("a",{href:"/",children:d.jsx("button",{id:"backToFrontPage",className:"btn btn-primary",children:"Tilbake"})}),d.jsxs("div",{className:"RegisterPanel",children:[d.jsxs("h1",{children:[t.page," her"]}),d.jsxs("form",{onSubmit:k[t.index],children:[d.jsxs("div",{className:"mb-3",children:[d.jsx("label",{htmlFor:"inputName",className:"form-label",children:"Fullt navn"}),d.jsx("input",{type:"text",className:"form-control",id:"inputText","aria-describedby":"emailHelp",onChange:v=>n(v.target.value),required:!0})]}),d.jsxs("div",{className:"mb-3",children:[d.jsx("label",{htmlFor:"inputPhoneNumber",className:"form-label",children:"Telefonnummer"}),d.jsx("input",{type:"text",className:"form-control",id:"inputPhoneNumber","aria-describedby":"emailHelp",onChange:v=>i(v.target.value),required:!0})]}),d.jsxs("div",{className:"mb-3",children:[d.jsx("label",{htmlFor:"inputEmail",className:"form-label",children:"E-post"}),d.jsx("input",{type:"email",className:"form-control",id:"inputEmail","aria-describedby":"emailHelp",onChange:v=>o(v.target.value),required:!0})]}),d.jsxs("div",{className:"mb-3",children:[d.jsx("label",{htmlFor:"inputProfilePic",className:"form-label",children:"Profile Picture"}),d.jsx("input",{type:"file",className:"form-control",id:"inputProfilePic",onChange:P,accept:"image/*"})]}),d.jsxs("div",{className:"mb-3",children:[d.jsx("label",{htmlFor:"inputPassword",className:"form-label",children:"Passord"}),d.jsx("input",{type:"password",className:"form-control",id:"inputPassword",onChange:v=>c(v.target.value),required:!0})]}),d.jsxs("div",{className:"submitAndLink",children:[d.jsx("button",{type:"submit",className:"btn btn-primary",id:"submitButton",children:t.page}),d.jsx("a",{href:t.link,children:d.jsx("button",{type:"button",className:"btn btn-primary",id:"linkButton",children:t.linkToPage})})]})]})]})]})},vC=()=>{const[t,e]=I.useState(!1),n=()=>e(!1),r=()=>e(!0),[i,s]=I.useState(null),[o,a]=I.useState(""),[c,u]=I.useState(""),[f,m]=I.useState(""),[g,E]=I.useState(""),[x,P]=I.useState(""),[k,v]=I.useState(""),[y,T]=I.useState([null,null,null]),[b,j]=I.useState(["","",""]),[M,S]=I.useState(["","",""]),[w,C]=I.useState([null,null,null,null]),[R,N]=I.useState(["","","",""]),D=Q=>{const ue=Q.target.files;ue&&ue.length>0&&s(ue[0])},A=Q=>{u(Q.target.value)},Ze=Q=>{m(Q.target.value)},st=Q=>{E(Q.target.value)},mt=Q=>{P(Q.target.value)},ot=Q=>{a(Q.target.value)},B=Q=>{v(Q.target.value)},X=Q=>ue=>{const Ie=[...y],tt=ue.target.files;tt&&tt.length>0?Ie[Q]=tt[0]:Ie[Q]=null,T(Ie)},Z=Q=>ue=>{const Ie=[...b];Ie[Q]=ue.target.value,j(Ie)},de=Q=>ue=>{const Ie=[...M];Ie[Q]=ue.target.value,S(Ie)},oe=Q=>ue=>{const Ie=[...w],tt=ue.target.files;tt&&tt.length>0?Ie[Q]=tt[0]:Ie[Q]=null,C(Ie)},ce=Q=>ue=>{const Ie=[...R];Ie[Q]=ue.target.value,N(Ie)},Ue=async()=>{var At;let Q=null;if(i!=null){const Re=Sn(hs,`images/${c}_${f}/main.jpg`);await dl(Re,i),Q=await rr(Re)}const ue=async(Re,K)=>{if(Re){const me=Sn(hs,K);return await dl(me,Re),rr(me)}return null},Ie=y.map((Re,K)=>ue(Re,`images/${c}_${f}/thingsToDo_${K}.jpg`)),tt=w.map((Re,K)=>ue(Re,`images/${c}_${f}/extraImages_${K}.jpg`));try{const Re=await Promise.all(Ie),K=await Promise.all(tt),me=Re.map((Pe,at)=>({caption:b[at],description:M[at],imgLink:Pe})),we=K.map((Pe,at)=>({caption:R[at],description:"",imgLink:Pe})),ae=await QD(Ct(Ve,"destinations"),{mainImage:Q,city:c,country:f,type:g,price:x?parseInt(x):0,temperature:o?parseInt(o):0,description:k,thingsToDo:me,extraImages:we,email:(At=he.currentUser)==null?void 0:At.email,date:new Date});alert("Destination added successfully!"),n(),window.location.reload()}catch(Re){console.error("Error: ",Re),alert("An error occurred while adding the destination.")}};function et(Q,ue){return Array(ue-Q+1).fill(0).map((Ie,tt)=>Q+tt)}return d.jsxs(d.Fragment,{children:[d.jsxs(dn,{className:"NewDest",variant:"primary",onClick:r,children:[" ",d.jsx(u6,{size:25,id:"icon"}),"Ny destinasjon"]}),t&&d.jsx("div",{className:"modal-container",children:d.jsxs(Ae,{show:t,onHide:n,size:"xl",children:[d.jsx(Ae.Header,{children:d.jsx(Ae.Title,{className:"w-100 text-center",children:"Skjema for oppretting av destinasjon"})}),d.jsxs(Ae.Body,{as:"div",style:{padding:"1rem"},children:[d.jsx(Oe,{className:"mb-1 justify-content-center",children:d.jsx(Y,{children:d.jsx(Ae.Title,{className:"text-center",children:"Generell informasjon"})})}),d.jsx(Oe,{className:"mb-1",children:d.jsxs(z.Group,{controlId:"formFile",className:"destination-file",children:[d.jsx(z.Label,{children:"Forsidebilde"}),d.jsx(z.Control,{type:"file",size:"lg",onChange:D})]})}),d.jsxs(Oe,{className:"mb-1 justify-content-center",children:[d.jsx(Y,{md:2,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"By",onChange:A,autoFocus:!0})})}),d.jsx(Y,{md:2,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Land",onChange:Ze})})}),d.jsx(Y,{md:2,children:d.jsx(De,{children:d.jsxs(z.Select,{onChange:st,defaultValue:"",children:[d.jsx("option",{value:"",disabled:!0,children:"Type"}),["Vinter","Natur","Storby","Strand"].map(Q=>d.jsx("option",{value:Q,children:Q},Q))]})})}),d.jsx(Y,{md:2,children:d.jsx(De,{children:d.jsxs(z.Select,{onChange:mt,defaultValue:"",children:[d.jsx("option",{value:"",disabled:!0,children:"Pris"}),et(0,5).map(Q=>d.jsx("option",{value:Q,children:Q},Q))]})})}),d.jsx(Y,{md:2,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Temperatur",onChange:ot})})})]}),d.jsx(Oe,{className:"mb-5",children:d.jsx(Y,{children:d.jsxs(z.Group,{controlId:"description",children:[d.jsx(z.Label,{children:"Beskrivelse"}),d.jsx(z.Control,{as:"textarea",rows:3,onChange:B})]})})}),d.jsx(Oe,{className:"mb-1 justify-content-center",children:d.jsx(Y,{children:d.jsx(Ae.Title,{className:"text-center",children:"Ting å gjøre"})})}),d.jsxs(Oe,{className:"mb-1",children:[d.jsx(Y,{md:4,children:d.jsx(z.Group,{controlId:"formFile",className:"destination-file",children:d.jsx(z.Control,{type:"file",onChange:X(0)})})}),d.jsx(Y,{md:4,children:d.jsx(z.Group,{controlId:"formFile",className:"destination-file",children:d.jsx(z.Control,{type:"file",onChange:X(1)})})}),d.jsx(Y,{md:4,children:d.jsx(z.Group,{controlId:"formFile",className:"destination-file",children:d.jsx(z.Control,{type:"file",onChange:X(2)})})})]}),d.jsxs(Oe,{className:"mb-1",children:[d.jsx(Y,{md:4,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Bildetittel 1",onChange:Z(0)})})}),d.jsx(Y,{md:4,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Bildetittel 2",onChange:Z(1)})})}),d.jsx(Y,{md:4,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Bildetittel 3",onChange:Z(2)})})})]}),d.jsxs(Oe,{className:"mb-5",children:[d.jsx(Y,{md:4,children:d.jsxs(z.Group,{controlId:"description",children:[d.jsx(z.Label,{children:"Beskrivelse 1"}),d.jsx(z.Control,{as:"textarea",rows:3,onChange:de(0)})]})}),d.jsx(Y,{md:4,children:d.jsxs(z.Group,{controlId:"description",children:[d.jsx(z.Label,{children:"Beskrivelse 2"}),d.jsx(z.Control,{as:"textarea",rows:3,onChange:de(1)})]})}),d.jsx(Y,{md:4,children:d.jsxs(z.Group,{controlId:"description",children:[d.jsx(z.Label,{children:"Beskrivelse 3"}),d.jsx(z.Control,{as:"textarea",rows:3,onChange:de(2)})]})})]}),d.jsx(Oe,{className:"mb-1 justify-content-center",children:d.jsx(Y,{children:d.jsx(Ae.Title,{className:"text-center",children:"Ekstra bilder"})})}),d.jsxs(Oe,{className:"mb-1",children:[d.jsx(Y,{md:3,children:d.jsx(z.Group,{controlId:"formFile",className:"destination-file",children:d.jsx(z.Control,{type:"file",onChange:oe(0)})})}),d.jsx(Y,{md:3,children:d.jsx(z.Group,{controlId:"formFile",className:"destination-file",children:d.jsx(z.Control,{type:"file",onChange:oe(1)})})}),d.jsx(Y,{md:3,children:d.jsx(z.Group,{controlId:"formFile",className:"destination-file",children:d.jsx(z.Control,{type:"file",onChange:oe(2)})})}),d.jsx(Y,{md:3,children:d.jsx(z.Group,{controlId:"formFile",className:"destination-file",children:d.jsx(z.Control,{type:"file",onChange:oe(3)})})})]}),d.jsxs(Oe,{className:"mb-1",children:[d.jsx(Y,{md:3,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Bildetittel 1",onChange:ce(0)})})}),d.jsx(Y,{md:3,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Bildetittel 2",onChange:ce(1)})})}),d.jsx(Y,{md:3,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Bildetittel 3",onChange:ce(2)})})}),d.jsx(Y,{md:3,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Bildetittel 4",onChange:ce(3)})})})]})]}),d.jsxs(Ae.Footer,{style:{display:"flex",justifyContent:"center",gap:"5rem"},children:[d.jsx(dn,{variant:"danger",onClick:n,children:"Close"}),d.jsx(dn,{variant:"success",onClick:Ue,children:"Save Changes"})]})]})})]})},Cy=()=>{const[t,e]=I.useState(!0),[n,r]=I.useState(!1),[i,s]=I.useState(null);return I.useEffect(()=>{const o=qd(he,a=>{a?(s(a),Qd().then(c=>{r(c),e(!1)})):(s(null),e(!1))});return()=>o()},[]),d.jsxs("div",{id:"topnav",children:[d.jsxs(Wn,{id:"logo",to:"/",children:[" ",d.jsx("img",{src:a6,alt:"Logo i navbar"})," "]}),t?d.jsx("p",{children:"Laster..."}):he!=null&&he.currentUser?n?d.jsxs("a",{href:"/mypage",className:"LogInMyPage",children:[d.jsx(df,{size:25,id:"icon"})," Min side"]}):d.jsxs("a",{href:"/mypage",className:"LogInMyPage",children:[d.jsx(df,{size:25,id:"icon"})," Min side"]}):d.jsxs("a",{href:"/logginn",className:"LogInMyPage",children:[d.jsx(df,{size:25,id:"icon"}),"Logg inn"]}),i&&d.jsx("a",{children:d.jsx("div",{className:"destinationPopupContainer",children:d.jsx(vC,{})})})]})},RV=({setSearchResults:t,placeholder:e,title:n})=>{const[r,i]=I.useState(""),s=a=>{i(a.target.value)},o=async a=>{if(!a)return;const c=Ct(Ve,"destinations"),u=an(c,ln("city","==",a)),f=an(c,ln("country","==",r)),m=await Ht(u),g=await Ht(f);if(m.empty&&g.empty){alert("No destinations found based on your search!");return}const E=[...m.docs,...g.docs],x=await Promise.all(E.map(async P=>{const k=P.data(),v=Sn(hs,k.mainImage);try{const y=await rr(v);return{...k,id:P.id,imageURL:y}}catch(y){console.error("Error getting download URL for image from 'mainImage' field:",y)}}));t(x)};return d.jsxs("div",{className:"searchbar-container",children:[d.jsx("h2",{children:n}),d.jsxs(z,{className:"search",children:[d.jsx(z.Control,{type:"text",placeholder:e,className:"search-bar",value:r,onChange:s}),d.jsx("div",{className:"search-icon",onClick:()=>o(r),children:d.jsx(nt,{icon:$3})})]})]})},AV=async t=>{const e=Ct(Ve,"reviews"),n=an(e,ln("user","==",t));return(await Ht(n)).docs.map(i=>i.data())},kV=async t=>{console.log("Henter anbefalinger for e-post:",t);const e=await AV(t),n=Ct(Ve,"destinations");let i=(await Ht(n)).docs.map(o=>{const a=o.data();return{...a,id:o.id,imageURL:a.mainImage}});const s=e.filter(o=>o.rating>=3);if(s.length>0){let o={};for(const u of s){const f=i.find(m=>m.id===u.id);f!=null&&f.type&&(o[f.type]=Math.max(o[f.type]||0,u.rating))}let a=[],c=Object.entries(o).sort((u,f)=>f[1]-u[1]);for(const[u,f]of c){if(a.length>=3)break;a.push(...i.filter(m=>m.type===u&&!a.includes(m)))}if(a=[...new Set(a)].slice(0,3),a.length<3){const u=i.filter(f=>!a.includes(f)).sort((f,m)=>(m.rating||0)-(f.rating||0)).slice(0,3-a.length);a.push(...u)}return a}else return console.log("Ingen anmeldelser funnet, henter mest likte destinasjoner"),i.sort((o,a)=>(a.rating||0)-(o.rating||0)).slice(0,3)},_C=({destination:t})=>d.jsx(Wn,{to:`/destination/${t.id}`,className:"link",style:{textDecoration:"none"},children:d.jsxs(Ye,{className:"card",children:[d.jsx(Ye.Img,{variant:"top",src:t.imageURL,className:"card-img"}),d.jsxs(Ye.Body,{children:[d.jsx(Ye.Title,{children:t.city}),d.jsx(Ye.Text,{children:t.country})]})]})}),PV=({userEmail:t})=>{const[e,n]=I.useState([]);return I.useEffect(()=>{t&&kV(t).then(r=>{n(r)})},[t]),d.jsxs("div",{className:"container",children:[d.jsx("h3",{className:"title",children:"Anbefalte destinasjoner "}),d.jsx("div",{className:"cards",children:e.map(r=>d.jsx(_C,{destination:r},r.id))})]})};function wC(){const[t,e]=I.useState([]),[n,r]=I.useState("Alle"),[i,s]=I.useState(null),[o,a]=I.useState("asc"),[c,u]=I.useState(null);I.useEffect(()=>{const g=Ti();qd(g,E=>{u(E?E.email:null)})},[]);const f=g=>{r(g)},m=g=>{let E;switch(g){case"Temperature":E="temperature";break;case"Price":E="price";break;case"Rating":E="rating";break;default:console.error("Unknown sort criterion:",g);return}s(E),a(x=>x==="asc"?"desc":"asc")};return d.jsxs("div",{className:"main-container",children:[d.jsx(Cy,{}),d.jsx(RV,{setSearchResults:e,placeholder:"Søk på destinasjon",title:"Finn din destinasjon"}),d.jsx(W3,{onFilterChange:f,onSortChange:m,activeSort:i,sortDirection:o}),c&&d.jsx(PV,{userEmail:c}),d.jsx(S4,{destinationsFromSearch:t,currentFilter:n,sortCriterion:i,sortDirection:o}),d.jsx("div",{className:"annonse",children:d.jsx("img",{src:wk})}),d.jsx(py,{})]})}const NV={prefix:"far",iconName:"star",icon:[576,512,[11088,61446],"f005","M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"]},bV=({id:t,city:e,email:n})=>{var k;const r=Tl(),[i,s]=I.useState(!1),[o,a]=I.useState(),[c,u]=I.useState(!1),f=(k=he==null?void 0:he.currentUser)==null?void 0:k.email,m=()=>s(!0),g=()=>s(!1),E=async v=>{const y=Ct(Ve,"destinations"),T=an(y,ln("city","==",v));return(await Ht(T)).docs},x=I.useCallback(async v=>{const y=await Qd();f==null||f!==v?u(!!y):u(!0)},[f]);I.useEffect(()=>{(async()=>await x(n))(),i&&c&&(async()=>{const T=(await E(e))[0].data();a({id:T.id,city:T.city,country:T.country,email:T.email})})()},[i,e,c,n,x]);const P=async()=>{try{const v=Lo(),y=Sn(v,`images/${o==null?void 0:o.city}_${o==null?void 0:o.country}/`);(await f4(y)).items.forEach(async w=>{await p4(w)});const b=an(Ct(Ve,"reviews"),ln("destination","==",o==null?void 0:o.city));(await Ht(b)).docs.forEach(async w=>{await L0(w.ref)});const M=an(Ct(Ve,"destinations"),ln("city","==",o==null?void 0:o.city)),S=await Ht(M);if(S.empty)alert("Ingen destinasjon med navnet funnet");else{const w=S.docs[0];await L0(fn(Ve,"destinations",w.id)),alert("Destination deleted successfully!"),g(),r("/")}}catch(v){console.log("Error occured",v)}};return d.jsxs(d.Fragment,{children:[c&&d.jsx(dn,{variant:"danger",onClick:m,style:{maxWidth:"200px"},children:"Slett destinasjonen"}),i&&d.jsx("div",{className:"delete-modal",children:d.jsxs(Ae,{show:i,onHide:g,children:[d.jsx(Ae.Header,{children:d.jsx(Ae.Title,{className:"ms-auto",children:"Skjema for sletting av destinasjon"})}),d.jsx(Ae.Body,{as:"div",style:{display:"flex",flexDirection:"column",gap:"0.5rem",alignItems:"center"},children:d.jsxs("p",{children:["Er du sikker på at du vil slette destinasjonen,"," ",(o==null?void 0:o.city)??"","?"]})}),d.jsxs(Ae.Footer,{style:{display:"flex",justifyContent:"center",gap:"5rem"},children:[d.jsx(dn,{variant:"success",onClick:g,children:"Lukk"}),d.jsx(dn,{variant:"danger",onClick:P,children:"Slett destinasjon"})]})]})})]})},DV=t=>{const[e,n]=I.useState(!1),r=()=>n(!1),i=()=>{var v;if(!((v=he==null?void 0:he.currentUser)!=null&&v.email)){alert("Du må logge inn");return}n(!0)},[s,o]=I.useState(""),[a,c]=I.useState(""),u=v=>{o(v.target.value)},f=v=>{c(v.target.value)},m=async()=>{var v;try{//! Lagre reviews i collection på hver destination
//! Hvordan henter man i så fall ut?
//! Hente ut for bruker:
//! Peke på bruker i reviewen
//! Hente ut for destinasjon:
//! Hente ut på samme format er greit
const T=await(async()=>{try{const C=bl(),R=Ct(C,"destinations"),N=an(R,ln("city","==",t.city));return(await Ht(N)).docs[0].id}catch(C){console.error("Error fetching destinations:",C)}})(),b=new Date,j=(v=he==null?void 0:he.currentUser)==null?void 0:v.email,M={rating:s?parseInt(s):0,description:a,destination:t.city,date:b,user:j,id:T},S=t.city+"_"+j,w=fn(Ve,"reviews",S);await Pp(w,M),alert("Review added successfully!"),r(),window.location.reload()}catch(y){console.error("Error: ",y),alert("An error occurred while adding the review.")}};function g(v,y){return Array(y-v+1).fill(0).map((T,b)=>v+b)}const[E,x]=I.useState([]),[P,k]=I.useState(!1);return I.useEffect(()=>{const v={destination:t.city};EC(v).then(y=>{var T,b,j;if(x(y),((T=he==null?void 0:he.currentUser)==null?void 0:T.email)===void 0||((b=he==null?void 0:he.currentUser)==null?void 0:b.email)===null)k(!1);else for(let M=0;M<y.length;M++)y[M].userEmail===((j=he==null?void 0:he.currentUser)==null?void 0:j.email)&&k(!0)})},[t.city]),d.jsxs(d.Fragment,{children:[d.jsx(dn,{className:"createButton",variant:"primary",onClick:i,children:P?"Rediger anmeldelse":"Legg til anmeldelse"}),e&&d.jsx("div",{className:"modal-container",children:d.jsxs(Ae,{show:e,onHide:r,size:"xl",children:[d.jsx(Ae.Header,{children:d.jsx(Ae.Title,{className:"w-100 text-center",children:"Skriv din anmeldelse"})}),d.jsxs(Ae.Body,{as:"div",style:{padding:"1rem"},children:[d.jsx(Oe,{className:"mb-1",children:d.jsx(Y,{md:2,children:d.jsx(De,{children:d.jsxs(z.Select,{onChange:u,defaultValue:"",children:[d.jsx("option",{value:"",disabled:!0,children:"Rating"}),g(0,5).map(v=>d.jsx("option",{value:v,children:v},v))]})})})}),d.jsx(Oe,{className:"mb-5",children:d.jsx(Y,{children:d.jsxs(z.Group,{controlId:"description",children:[d.jsx(z.Label,{children:"Beskrivelse"}),d.jsx(z.Control,{as:"textarea",rows:3,onChange:f})]})})})]}),d.jsxs(Ae.Footer,{style:{display:"flex",justifyContent:"center",gap:"5rem"},children:[d.jsx(dn,{variant:"danger",onClick:r,children:"Close"}),d.jsx(dn,{variant:"success",onClick:m,children:"Add Review"})]})]})})]})},OV=t=>{const[e,n]=I.useState([]);return I.useEffect(()=>{const r={destination:t.city};EC(r).then(i=>{n(i)})},[t.city]),d.jsxs("div",{className:"ReviewsSection",children:[d.jsx(jV,{city:t.city,reviews:e}),d.jsx(VV,{city:t.city,reviews:e})]})},LV=async t=>{const e=Ct(Ve,"users"),n=an(e,ln("userEmail","==",t)),r=await Ht(n);return r.empty?(console.log("No user found!"),""):r.docs[0].data().userFullName},EC=async t=>{const e=[],n=Ct(Ve,"reviews"),r=an(n,ln("destination","==",`${t.destination}`)),i=await Ht(r),s=[];i.forEach(a=>{const c=a.data();s.push(LV(c.user))});const o=await Promise.all(s);return i.docs.forEach((a,c)=>{const u=a.data();let f={userName:o[c],userEmail:u.user,date:u.date.toDate().toString(),rating:u.rating,description:u.description};e.push(f)}),e},jV=t=>{//! Må ha useState for å ha tilstand fra start
//! UseEffect vil så hente ut asynkront og sette ny tilstand når klar
const e=()=>t.reviews.length<1?0:Math.round(t.reviews.reduce((i,s)=>i+s.rating,0)/t.reviews.length*100)/100,n=new Array(5).fill(0);t.reviews.forEach(i=>{n[i.rating-1]++}),I.useEffect(()=>{r(t.city)});const r=async i=>{const s=Ct(Ve,"destinations"),o=an(s,ln("city","==",i)),a=await Ht(o);if(!a.empty){const c=fn(Ve,"destinations",a.docs[0].id);await Mu(c,{rating:e()||0})}};return d.jsxs("div",{className:"review-summary",children:[d.jsx("h2",{children:"Anmeldelser"}),d.jsxs("div",{className:"average-rating",children:[e(),d.jsxs("span",{className:"total-reviews",children:["(",t.reviews.length," omtale",t.reviews.length>1?"r":"",")"]})]}),d.jsx("div",{className:"star-rating-summary",children:[5,4,3,2,1].map(i=>d.jsxs("div",{className:"star-row",children:[d.jsxs("div",{className:"star-label",children:[i," stjerne",i>1?"r":""]}),d.jsx("div",{className:"star-bar",children:d.jsx("div",{className:"star-fill",style:{width:`${n[i-1]/t.reviews.length*100}%`}})}),d.jsx("div",{className:"star-count",children:n[i-1]})]},i))}),d.jsx("div",{className:"reviewButtonDiv",children:d.jsx(DV,{city:""+t.city})})]})},MV=({review:t,index:e,reviewsLength:n})=>d.jsxs("div",{className:`review-item ${n-1===e?"no-border":""}`,children:[d.jsxs("div",{className:"review-user",children:[t.userName," ",d.jsx("span",{className:"review-date",children:t.date})]}),d.jsxs("div",{className:"star-rating",children:["★".repeat(t.rating),d.jsxs("span",{className:"star-count",children:["(",t.rating,")"]})]}),d.jsx("p",{children:t.description})]}),VV=t=>d.jsxs("div",{className:"review-list",children:[t.reviews.map((e,n)=>d.jsx(MV,{review:e,index:n,reviewsLength:t.reviews.length},n)),d.jsx("button",{className:"moreReviews",children:"See more reviews"})]}),FV=({destination:t,id:e})=>{var Re;const[n,r]=I.useState(!1),i=()=>r(!0),s=()=>r(!1),[o,a]=I.useState(null),[c,u]=I.useState(t.temperature),[f,m]=I.useState(t.city),[g,E]=I.useState(t.country),[x,P]=I.useState(t.type),[k,v]=I.useState(t.price),[y,T]=I.useState(t.description),[b,j]=I.useState(!1),M=(Re=he==null?void 0:he.currentUser)==null?void 0:Re.email,[S,w]=I.useState([null,null,null]),[C,R]=I.useState([t.thingsToDo[0].caption,t.thingsToDo[1].caption,t.thingsToDo[2].caption]),[N,D]=I.useState([t.thingsToDo[0].description,t.thingsToDo[1].description,t.thingsToDo[2].description]),[A,Ze]=I.useState([null,null,null,null]),[st,mt]=I.useState([t.extraImages[0].caption,t.extraImages[1].caption,t.extraImages[2].caption,t.extraImages[3].caption]),ot=K=>{const me=K.target.files;me&&me.length>0&&a(me[0])},B=K=>{m(K.target.value)},X=K=>{E(K.target.value)},Z=K=>{P(K.target.value)},de=K=>{v(Number(K.target.value))},oe=K=>{u(Number(K.target.value))},ce=K=>{T(K.target.value)},Ue=K=>me=>{const we=[...S],ae=me.target.files;ae&&ae.length>0?we[K]=ae[0]:we[K]=null,w(we)},et=K=>me=>{const we=[...C];we[K]=me.target.value,R(we)},Q=K=>me=>{const we=[...N];we[K]=me.target.value,D(we)},ue=K=>me=>{const we=[...A],ae=me.target.files;ae&&ae.length>0?we[K]=ae[0]:we[K]=null,Ze(we)},Ie=K=>me=>{const we=[...st];we[K]=me.target.value,mt(we)};I.useEffect(()=>{(async()=>{const me=await Qd();M==null||M!==t.email?j(!!me):j(!0)})()},[M,t.email,b]);const tt=async()=>{let K=t.mainImage;if(o!=null){const Pe=Sn(hs,`images/${f}_${g}/main.jpg`);await dl(Pe,o),K=await rr(Pe)}const me=async(Pe,at)=>{if(Pe){const Dr=Sn(hs,at);return await dl(Dr,Pe),rr(Dr)}return null},we=S.map((Pe,at)=>me(Pe,`images/${f}_${g}/thingsToDo_${at}.jpg`)),ae=A.map((Pe,at)=>me(Pe,`images/${f}_${g}/extraImages_${at}.jpg`));try{const Pe=await Promise.all(we),at=await Promise.all(ae),Dr=Pe.map((Cn,xn)=>({caption:C[xn],description:N[xn],imgLink:Cn!==null?Cn:t.thingsToDo[xn].imgLink})),Ts=at.map((Cn,xn)=>({caption:st[xn],description:"",imgLink:Cn!==null?Cn:t.extraImages[xn].imgLink}));await Mu(fn(Ve,"destinations",e),{mainImage:K,city:f,country:g,type:x,price:k?parseInt(k.toString()):0,temperature:c?parseInt(c.toString()):0,description:y,thingsToDo:Dr,extraImages:Ts}),alert("Destination updated successfully!"),s(),window.location.reload()}catch(Pe){console.error("Error: ",Pe),alert("An error occurred while adding the destination.")}};function At(K,me){return Array(me-K+1).fill(0).map((we,ae)=>K+ae)}return d.jsxs(d.Fragment,{children:[b&&d.jsx(dn,{className:"updateButton",variant:"primary",onClick:i,children:"Oppdater destinasjon"}),n&&d.jsx("div",{className:"modal-container",children:d.jsxs(Ae,{show:n,onHide:s,size:"xl",centered:!0,children:[d.jsx(Ae.Header,{children:d.jsx(Ae.Title,{className:"w-100 text-center",children:"Skjema for oppdatering av destinasjon"})}),d.jsxs(Ae.Body,{as:"div",style:{padding:"1rem"},children:[d.jsx(Oe,{className:"mb-1 justify-content-center",children:d.jsx(Y,{children:d.jsx(Ae.Title,{className:"text-center",children:"Generell informasjon"})})}),d.jsx(Oe,{className:"mb-1",children:d.jsxs(z.Group,{controlId:"formFile",className:"destination-file",children:[d.jsx(z.Label,{children:"Forsidebilde"}),d.jsx(z.Control,{type:"file",size:"lg",onChange:ot})]})}),d.jsxs(Oe,{className:"mb-1 justify-content-center",children:[d.jsx(Y,{md:2,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"By",value:f,onChange:B,autoFocus:!0})})}),d.jsx(Y,{md:2,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Land",value:g,onChange:X})})}),d.jsx(Y,{md:2,children:d.jsx(De,{children:d.jsxs(z.Select,{onChange:Z,children:[d.jsx("option",{value:x,disabled:!0,children:"Type"}),["Vinter","Natur","Storby","Strand"].map(K=>d.jsx("option",{value:K,children:K},K))]})})}),d.jsx(Y,{md:2,children:d.jsx(De,{children:d.jsxs(z.Select,{onChange:de,defaultValue:t.price,children:[d.jsx("option",{value:"",children:"Pris"}),At(0,5).map(K=>d.jsx("option",{value:K,children:K},K))]})})}),d.jsx(Y,{md:2,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Temperatur",onChange:oe,value:c})})})]}),d.jsx(Oe,{className:"mb-5",children:d.jsx(Y,{children:d.jsxs(z.Group,{controlId:"description",children:[d.jsx(z.Label,{children:"Beskrivelse"}),d.jsx(z.Control,{as:"textarea",rows:3,onChange:ce,value:y})]})})}),d.jsx(Oe,{className:"mb-1 justify-content-center",children:d.jsx(Y,{children:d.jsx(Ae.Title,{className:"text-center",children:"Ting å gjøre"})})}),d.jsxs(Oe,{className:"mb-1",children:[d.jsx(Y,{md:4,children:d.jsx(z.Group,{controlId:"formFile",className:"destination-file",children:d.jsx(z.Control,{type:"file",onChange:Ue(0)})})}),d.jsx(Y,{md:4,children:d.jsx(z.Group,{controlId:"formFile",className:"destination-file",children:d.jsx(z.Control,{type:"file",onChange:Ue(1)})})}),d.jsx(Y,{md:4,children:d.jsx(z.Group,{controlId:"formFile",className:"destination-file",children:d.jsx(z.Control,{type:"file",onChange:Ue(2)})})})]}),d.jsxs(Oe,{className:"mb-1",children:[d.jsx(Y,{md:4,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Bildetittel 1",value:C[0],onChange:et(0)})})}),d.jsx(Y,{md:4,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Bildetittel 2",value:C[1],onChange:et(1)})})}),d.jsx(Y,{md:4,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Bildetittel 3",value:C[2],onChange:et(2)})})})]}),d.jsxs(Oe,{className:"mb-5",children:[d.jsx(Y,{md:4,children:d.jsxs(z.Group,{controlId:"description",children:[d.jsx(z.Label,{children:"Beskrivelse 1"}),d.jsx(z.Control,{as:"textarea",rows:3,onChange:Q(0),value:N[0]})]})}),d.jsx(Y,{md:4,children:d.jsxs(z.Group,{controlId:"description",children:[d.jsx(z.Label,{children:"Beskrivelse 2"}),d.jsx(z.Control,{as:"textarea",rows:3,onChange:Q(1),value:N[1]})]})}),d.jsx(Y,{md:4,children:d.jsxs(z.Group,{controlId:"description",children:[d.jsx(z.Label,{children:"Beskrivelse 3"}),d.jsx(z.Control,{as:"textarea",rows:3,onChange:Q(2),value:N[2]})]})})]}),d.jsx(Oe,{className:"mb-1 justify-content-center",children:d.jsx(Y,{children:d.jsx(Ae.Title,{className:"text-center",children:"Ekstra bilder"})})}),d.jsxs(Oe,{className:"mb-1",children:[d.jsx(Y,{md:3,children:d.jsx(z.Group,{controlId:"formFile",className:"destination-file",children:d.jsx(z.Control,{type:"file",onChange:ue(0)})})}),d.jsx(Y,{md:3,children:d.jsx(z.Group,{controlId:"formFile",className:"destination-file",children:d.jsx(z.Control,{type:"file",onChange:ue(1)})})}),d.jsx(Y,{md:3,children:d.jsx(z.Group,{controlId:"formFile",className:"destination-file",children:d.jsx(z.Control,{type:"file",onChange:ue(2)})})}),d.jsx(Y,{md:3,children:d.jsx(z.Group,{controlId:"formFile",className:"destination-file",children:d.jsx(z.Control,{type:"file",onChange:ue(3)})})})]}),d.jsxs(Oe,{className:"mb-1",children:[d.jsx(Y,{md:3,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Bildetittel 1",onChange:Ie(0),value:st[0]})})}),d.jsx(Y,{md:3,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Bildetittel 2",onChange:Ie(1),value:st[1]})})}),d.jsx(Y,{md:3,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Bildetittel 3",onChange:Ie(2),value:st[2]})})}),d.jsx(Y,{md:3,children:d.jsx(De,{children:d.jsx(z.Control,{type:"text",placeholder:"Bildetittel 4",onChange:Ie(3),value:st[3]})})})]})]}),d.jsxs(Ae.Footer,{style:{display:"flex",justifyContent:"center",gap:"5rem"},children:[d.jsx(dn,{variant:"danger",onClick:s,children:"Close"}),d.jsx(dn,{variant:"success",onClick:tt,children:"Save Changes"})]})]})})]})},UV=({destinationId:t})=>{const[e,n]=I.useState(!1);I.useEffect(()=>{(async()=>{const o=Ti().currentUser;if(o&&o.email){const a=fn(Ve,"users",o.email),c=await ul(a);if(c.exists()){const f=c.data().visited||[];n(f.includes(t))}}})()},[t]);const r=async()=>{const s=Ti().currentUser;if(s&&s.email){const o=fn(Ve,"users",s.email);e?await Mu(o,{visited:JD(t)}):await Mu(o,{visited:XD(t)}),n(!e)}};return d.jsxs("button",{className:`mark-as-visited ${e?"visited":""}`,onClick:r,"aria-label":e?"Besøkt":"Ikke besøkt",children:[d.jsx(nt,{icon:e?L3:M3,size:"lg"}),e?" Besøkt":" Ikke besøkt"]})},BV=()=>{const{id:t}=YA(),[e,n]=I.useState(""),[r,i]=I.useState(null);return I.useEffect(()=>{t&&(()=>{if(!t)return;const o=bl(),a=fn(o,"destinations",t),c=YD(a,u=>{if(u.exists()){const f=u.data();i(f)}else console.log("No such document!")});return()=>c()})()},[t]),I.useEffect(()=>{(async()=>{if(r!=null&&r.mainImage)try{const o=await rr(Sn(Lo(),r.mainImage));n(o)}catch(o){console.error("Error fetching image from Firebase: ",o)}})()},[r]),r?r?d.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[d.jsx(Cy,{}),d.jsx(HV,{url:e}),d.jsx(GV,{destination:r}),d.jsx(zV,{destination:r}),t&&d.jsx(UV,{destinationId:t}),d.jsxs("div",{className:"deleteButtonContainer",children:[d.jsx(bV,{id:r.city,city:r.city,country:r.country,email:r.email}),d.jsx(FV,{destination:r,id:t})]}),d.jsxs("div",{className:"AllContentDivs",children:[d.jsx(qV,{destination:r}),d.jsx(W1,{title:"Ting å gjøre",activities:r.thingsToDo}),d.jsx(W1,{title:"Bilder",activities:r.extraImages})]}),d.jsxs("div",{className:"review-container",children:[d.jsx("h2",{className:"reviews-title",children:"Anmeldelser"}),d.jsx("div",{className:"review-section",children:d.jsx(OV,{city:r.city})})]}),d.jsx(py,{})]}):d.jsx("div",{children:"Loading..."}):d.jsx("div",{children:"Loading..."})},zV=({destination:t})=>d.jsx("div",{className:"AllRatings",children:d.jsxs("div",{className:"centerContent",children:[d.jsx(TC,{rating:t.rating?t.rating:0})," ",d.jsx($V,{price:t.price}),d.jsx(WV,{temp:t.temperature})]})}),TC=({rating:t})=>{const n=Math.round(t),r=5-n;return d.jsxs("div",{className:"StarRating",id:"Rating",children:[Array(n).fill(0).map((i,s)=>d.jsx(nt,{icon:c2},`Solid-${s}`)),Array(r).fill(0).map((i,s)=>d.jsx(nt,{icon:NV},`Regular-${s}`))]})},$V=({price:t})=>{const n=Math.round(t),r=5-t;return d.jsxs("div",{className:"PriceRating",id:"Rating",children:[Array(n).fill(0).map((i,s)=>d.jsx(nt,{icon:m1,className:"faDollarSign"},`Dollar-${s}`)),Array(r).fill(0).map((i,s)=>d.jsx(nt,{icon:m1,className:"faDollarSign",color:"grey"},`Dollar-${s}`))]})},WV=({temp:t})=>d.jsx("div",{className:"TempRating",id:"Rating",children:d.jsxs("span",{children:[t,"°C "]})}),HV=({url:t})=>d.jsxs("div",{className:"PhotoOfCity",children:[d.jsx("img",{src:t,alt:"Photo of city"}),";"]}),qV=({destination:t})=>d.jsxs("div",{className:"DescriptionDiv",children:[d.jsx("h3",{children:"Beskrivelse"}),d.jsx("p",{className:"DescriptionText",children:t.description})]}),GV=({destination:t})=>d.jsxs("div",{className:"TitleDiv",children:[d.jsxs("h1",{children:[" ",t.city," "]}),d.jsxs("h2",{children:[" ",t.country," "]})]}),KV=t=>d.jsxs("div",{className:"ActivityBox",children:[d.jsx("img",{src:t.imgLink,alt:t.caption,id:"imgAttraction"}),d.jsx("h4",{children:t.caption}),d.jsx("p",{id:"ImageDescription",children:t.description})]}),W1=t=>d.jsxs("div",{className:"ActivitiesDiv",children:[d.jsx("h3",{style:{textAlign:"center"},children:t.title}),d.jsx("div",{className:"AllActivities",children:t.activities.map((e,n)=>d.jsx(KV,{caption:e.caption,description:e.description,imgLink:e.imgLink},n))})]}),QV=t=>{const[e,n]=I.useState(""),[r,i]=I.useState(""),s=Tl();I.useEffect(()=>{//! Vet hvordan man henter ut email -> SJekker da hvis null return
//! Ellers sjekk email mot document ID
//! OnLogIn
});const o=u=>{u.preventDefault(),aC(he,e,r).then(f=>{f.user,s("/")}).catch(f=>{f.code,f.message,alert("Feil passord, eller bruker eksisterer ikke. Prøv igjen.")})};let c=[o,u=>{u.preventDefault(),oC(he,e,r).then(f=>{f.user,o(u)}).catch(f=>{f.code,f.message})}];return d.jsxs("div",{className:"wholeDiv",children:[d.jsx("a",{href:"/",children:d.jsx("button",{id:"backToFrontPage",className:"btn btn-primary",children:"Tilbake"})}),d.jsxs("div",{className:"UserPanel",children:[d.jsxs("h1",{children:[t.page," her"]}),d.jsxs("form",{onSubmit:c[t.index],children:[d.jsxs("div",{className:"mb-3",children:[d.jsx("label",{htmlFor:"inputEmail",className:"form-label",children:"E-post"}),d.jsx("input",{type:"email",className:"form-control",id:"inputEmail","aria-describedby":"emailHelp",onChange:u=>n(u.target.value)})]}),d.jsxs("div",{className:"mb-3",children:[d.jsx("label",{htmlFor:"inputPassword",className:"form-label",children:"Passord"}),d.jsx("input",{type:"password",className:"form-control",id:"inputPassword",onChange:u=>i(u.target.value)})]}),d.jsxs("div",{className:"submitAndLink",children:[d.jsx("button",{type:"submit",className:"btn btn-primary",id:"submitButton",children:t.page}),d.jsx("a",{href:t.link,children:d.jsx("button",{type:"button",className:"btn btn-primary",id:"linkButton",children:t.linkToPage})})]})]})]})]})},YV=()=>d.jsx("div",{className:"LogInPage",children:d.jsx(QV,{index:0,page:"Logg inn",linkToPage:"Opprett bruker",link:"/registrering"})}),XV=()=>d.jsx("div",{className:"RegisterPage",children:d.jsx(xV,{index:1,page:"Registrer deg",linkToPage:"Tilbake til innlogging",link:"/logginn"})}),JV="/assets/Paris-BM3QEqNZ.jpeg",ZV=()=>{const[t,e]=I.useState([]),n=async()=>{const i=Ti().currentUser;if(i!=null&&i.email){const s=fn(Ve,"users",i.email),o=await ul(s);if(o.exists()){const c=o.data().visited||[],u=await Promise.all(c.map(async f=>{const m=fn(Ve,"destinations",f),g=await ul(m);if(g.exists()){const E=g.data();return{id:f,imageURL:E.mainImage,country:E.country,city:E.city}}return null}));e(u.filter(Boolean))}}};return I.useEffect(()=>{const r=he.onAuthStateChanged(i=>{i?n():console.log("User is not logged in.")});return()=>r()},[]),d.jsx("div",{className:"visited-destinations-list",style:{marginTop:"5vh"},children:d.jsx("div",{className:"cards",style:{margin:"0 auto",width:"80%",gap:"2rem"},children:t.map((r,i)=>d.jsx(Wn,{to:`/destination/${r.id}`,style:{textDecoration:"none"},children:d.jsx("div",{style:{width:"20rem"},children:d.jsx(_C,{destination:r})})},i))})})},e5=()=>{const[t,e]=I.useState([]);return I.useEffect(()=>{const n=async()=>{var g;const i=(g=Ti().currentUser)==null?void 0:g.email,s=Ct(Ve,"reviews"),o=an(s,ln("user","==",i)),c=(await Ht(o)).docs.map(E=>E.data()),m=(await Promise.all(c.map(async E=>{const x=Ct(Ve,"destinations"),P=an(x,ln("city","==",E.destination)),k=await Ht(P);if(!k.empty){const v=k.docs[0],y=v.data();return{...E,country:y.country,mainImage:y.mainImage,destinationId:v.id}}}))).filter(Boolean).sort((E,x)=>x.date.toDate().getTime()-E.date.toDate().getTime());e(m)},r=he.onAuthStateChanged(i=>{i&&n()});return()=>r()},[]),d.jsx("div",{className:"user-container",style:{marginTop:"5vh"},children:d.jsx("div",{className:"cards",children:t.map(n=>d.jsx("div",{children:d.jsx(Wn,{to:`/destination/${n.destinationId}`,style:{textDecoration:"none"},children:d.jsxs(Ye,{className:"card",children:[d.jsx(Ye.Img,{variant:"top",src:n.mainImage,className:"card-img"}),d.jsxs(Ye.Body,{children:[d.jsxs(Ye.Title,{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.destination,d.jsx(TC,{rating:n.rating})]}),d.jsx(Ye.Text,{children:n.date?n.date.toDate().toLocaleDateString("nb-NO",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}):""}),d.jsx(Ye.Footer,{children:n.description})]})]})})},n.destinationId))})})},t5=()=>{const t=Tl(),[e,n]=I.useState(""),[r,i]=I.useState(null),[s,o]=I.useState(!1),[a,c]=I.useState("myDestinations"),u=f=>{c(f)};return I.useEffect(()=>{const f=Ti(),m=qd(f,async g=>{if(g&&g.email)try{const E=fn(Ve,"users",g.email),x=await ul(E);if(x.exists()){const P=x.data();n(P.userFullName);const k=Lo(),v=Sn(k,`profilePic/${g.email}`),y=await rr(v);i(y);const T=await Qd();o(T)}}catch(E){console.error("Error fetching user data:",E)}});return t("myDestinations"),()=>m()},[]),d.jsx(d.Fragment,{children:d.jsxs("div",{className:"user-page",children:[d.jsx(Cy,{}),d.jsx("div",{className:"image-container",children:d.jsx("img",{src:JV,alt:"destination"})}),d.jsxs("div",{id:"topContainer",children:[d.jsx("button",{id:"logUtButton",children:d.jsx(Wn,{to:"/",id:"homeLink",onClick:CV,children:"Logg ut"})}),d.jsxs("div",{id:"nameAndAdmin",children:[d.jsx("h4",{className:"name",children:e}),s&&d.jsxs("span",{className:"admin",children:[d.jsx(nt,{icon:b3,className:"crown"})," Admin"]})]}),d.jsx("div",{className:"profilepicture",children:d.jsx("img",{src:r==null?void 0:r.toString(),alt:"profile"})}),d.jsxs("div",{className:"my-page-link",children:[d.jsx(Wn,{to:"myDestinations",className:`link ${a==="myDestinations"?"active-link":""}`,onClick:()=>u("myDestinations"),children:"Mine destinasjoner"}),d.jsx(Wn,{to:"myReviews",className:`link ${a==="myReviews"?"active-link":""}`,onClick:()=>u("myReviews"),children:"Mine anmeldelser"}),d.jsx(Wn,{to:"visiteddestinations",className:`link ${a==="visiteddestinations"?"active-link":""}`,onClick:()=>u("visiteddestinations"),children:"Besøkte destinasjoner"})]})]}),d.jsxs(mT,{children:[d.jsx(zn,{path:"myDestinations",element:d.jsx(n5,{})}),d.jsx(zn,{path:"myReviews",element:d.jsx(e5,{})}),d.jsx(zn,{path:"visiteddestinations",element:d.jsx(ZV,{})}),d.jsx(zn,{path:"/",element:d.jsx(wC,{})})]}),d.jsx(py,{})]})})},n5=()=>{const[t,e]=I.useState([]),n=async r=>{const i=bl(),s=Ct(i,"destinations"),o=an(s,ln("email","==",r));try{const c=(await Ht(o)).docs.map(async m=>{const g=m.data();let E="";try{E=await rr(Sn(Lo(),g.mainImage))}catch(x){console.error("Error fetching image URL for destination:",g.mainImage,x)}return{...g,id:m.id,imageUrl:E}}),f=(await Promise.all(c)).sort((m,g)=>m.city.localeCompare(g.city));e(f)}catch(a){console.error("Error fetching destinations:",a)}};return I.useEffect(()=>{const r=Ti();return qd(r,s=>{s?n(s.email):console.log("User is not logged in.")})},[]),d.jsx(d.Fragment,{children:d.jsxs("div",{className:"user-container",children:[d.jsx("div",{style:{marginBottom:"2rem"}}),d.jsx("div",{className:"cards",children:t.map(r=>d.jsx("div",{children:d.jsx(Wn,{to:`/destination/${r.id}`,style:{textDecoration:"none"},children:d.jsxs(Ye,{className:"card",children:[d.jsx(Ye.Img,{variant:"top",src:r.imageUrl,className:"card-img"}),d.jsxs(Ye.Body,{children:[d.jsx(Ye.Title,{children:r.city}),d.jsx(Ye.Text,{children:r.country}),d.jsx(Ye.Footer,{children:d.jsxs("p",{children:["Opprettet ",r.date?new Date(r.date.toDate()).toLocaleDateString("nb-NO",{day:"numeric",month:"long",year:"numeric"}):""]})})]})]})})},r.id))}),d.jsx(vC,{})]})})},r5=pf.createRoot(document.getElementById("root"));r5.render(d.jsx(bn.StrictMode,{children:d.jsx(gk,{children:d.jsxs(mT,{children:[d.jsx(zn,{path:"/",element:d.jsx(wC,{})}),d.jsx(zn,{path:"/destination/:id",element:d.jsx(BV,{})}),d.jsx(zn,{path:"/logginn",element:d.jsx(YV,{})}),d.jsx(zn,{path:"/registrering",element:d.jsx(XV,{})}),d.jsx(zn,{path:"/mypage/*",element:d.jsx(t5,{})})]})})}));
