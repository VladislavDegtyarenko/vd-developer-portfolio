function Cv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function kv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $i={},Tv={get exports(){return $i},set exports(e){$i=e}},na={},T={},Ev={get exports(){return T},set exports(e){T=e}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fs=Symbol.for("react.element"),Pv=Symbol.for("react.portal"),bv=Symbol.for("react.fragment"),Mv=Symbol.for("react.strict_mode"),Av=Symbol.for("react.profiler"),Lv=Symbol.for("react.provider"),_v=Symbol.for("react.context"),Ov=Symbol.for("react.forward_ref"),Rv=Symbol.for("react.suspense"),Iv=Symbol.for("react.memo"),Nv=Symbol.for("react.lazy"),af=Symbol.iterator;function zv(e){return e===null||typeof e!="object"?null:(e=af&&e[af]||e["@@iterator"],typeof e=="function"?e:null)}var Kh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qh=Object.assign,Zh={};function Qr(e,t,n){this.props=e,this.context=t,this.refs=Zh,this.updater=n||Kh}Qr.prototype.isReactComponent={};Qr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qh(){}qh.prototype=Qr.prototype;function Cc(e,t,n){this.props=e,this.context=t,this.refs=Zh,this.updater=n||Kh}var kc=Cc.prototype=new qh;kc.constructor=Cc;Qh(kc,Qr.prototype);kc.isPureReactComponent=!0;var lf=Array.isArray,Jh=Object.prototype.hasOwnProperty,Tc={current:null},em={key:!0,ref:!0,__self:!0,__source:!0};function tm(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Jh.call(t,r)&&!em.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fs,type:e,key:s,ref:o,props:i,_owner:Tc.current}}function Vv(e,t){return{$$typeof:fs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ec(e){return typeof e=="object"&&e!==null&&e.$$typeof===fs}function $v(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uf=/\/+/g;function Ja(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$v(""+e.key):t.toString(36)}function Zs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case fs:case Pv:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ja(o,0):r,lf(i)?(n="",e!=null&&(n=e.replace(uf,"$&/")+"/"),Zs(i,t,n,"",function(u){return u})):i!=null&&(Ec(i)&&(i=Vv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(uf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",lf(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Ja(s,a);o+=Zs(s,t,n,l,i)}else if(l=zv(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Ja(s,a++),o+=Zs(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ts(e,t,n){if(e==null)return e;var r=[],i=0;return Zs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Dv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},qs={transition:null},Fv={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:qs,ReactCurrentOwner:Tc};Q.Children={map:Ts,forEach:function(e,t,n){Ts(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ts(e,function(){t++}),t},toArray:function(e){return Ts(e,function(t){return t})||[]},only:function(e){if(!Ec(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Qr;Q.Fragment=bv;Q.Profiler=Av;Q.PureComponent=Cc;Q.StrictMode=Mv;Q.Suspense=Rv;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fv;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qh({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Tc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Jh.call(t,l)&&!em.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fs,type:e.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(e){return e={$$typeof:_v,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Lv,_context:e},e.Consumer=e};Q.createElement=tm;Q.createFactory=function(e){var t=tm.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Ov,render:e}};Q.isValidElement=Ec;Q.lazy=function(e){return{$$typeof:Nv,_payload:{_status:-1,_result:e},_init:Dv}};Q.memo=function(e,t){return{$$typeof:Iv,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=qs.transition;qs.transition={};try{e()}finally{qs.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return qe.current.useCallback(e,t)};Q.useContext=function(e){return qe.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};Q.useEffect=function(e,t){return qe.current.useEffect(e,t)};Q.useId=function(){return qe.current.useId()};Q.useImperativeHandle=function(e,t,n){return qe.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return qe.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return qe.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return qe.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return qe.current.useReducer(e,t,n)};Q.useRef=function(e){return qe.current.useRef(e)};Q.useState=function(e){return qe.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return qe.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return qe.current.useTransition()};Q.version="18.2.0";(function(e){e.exports=Q})(Ev);const de=kv(T),cf=Cv({__proto__:null,default:de},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv=T,Bv=Symbol.for("react.element"),Hv=Symbol.for("react.fragment"),Uv=Object.prototype.hasOwnProperty,Gv=jv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wv={key:!0,ref:!0,__self:!0,__source:!0};function nm(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Uv.call(t,r)&&!Wv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Bv,type:e,key:s,ref:o,props:i,_owner:Gv.current}}na.Fragment=Hv;na.jsx=nm;na.jsxs=nm;(function(e){e.exports=na})(Tv);const Zr=$i.Fragment,S=$i.jsx,H=$i.jsxs;var Xl={},Kl={},Yv={get exports(){return Kl},set exports(e){Kl=e}},gt={},Ql={},Xv={get exports(){return Ql},set exports(e){Ql=e}},rm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,V){var B=R.length;R.push(V);e:for(;0<B;){var ne=B-1>>>1,I=R[ne];if(0<i(I,V))R[ne]=V,R[B]=I,B=ne;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var V=R[0],B=R.pop();if(B!==V){R[0]=B;e:for(var ne=0,I=R.length,z=I>>>1;ne<z;){var D=2*(ne+1)-1,G=R[D],P=D+1,Z=R[P];if(0>i(G,B))P<I&&0>i(Z,G)?(R[ne]=Z,R[P]=B,ne=P):(R[ne]=G,R[D]=B,ne=D);else if(P<I&&0>i(Z,B))R[ne]=Z,R[P]=B,ne=P;else break e}}return V}function i(R,V){var B=R.sortIndex-V.sortIndex;return B!==0?B:R.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,p=3,g=!1,v=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=R)r(u),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(u)}}function w(R){if(y=!1,m(R),!v)if(n(l)!==null)v=!0,oe(C);else{var V=n(u);V!==null&&fe(w,V.startTime-R)}}function C(R,V){v=!1,y&&(y=!1,f(b),b=-1),g=!0;var B=p;try{for(m(V),d=n(l);d!==null&&(!(d.expirationTime>V)||R&&!M());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,p=d.priorityLevel;var I=ne(d.expirationTime<=V);V=e.unstable_now(),typeof I=="function"?d.callback=I:d===n(l)&&r(l),m(V)}else r(l);d=n(l)}if(d!==null)var z=!0;else{var D=n(u);D!==null&&fe(w,D.startTime-V),z=!1}return z}finally{d=null,p=B,g=!1}}var k=!1,E=null,b=-1,_=5,$=-1;function M(){return!(e.unstable_now()-$<_)}function L(){if(E!==null){var R=e.unstable_now();$=R;var V=!0;try{V=E(!0,R)}finally{V?j():(k=!1,E=null)}}else k=!1}var j;if(typeof h=="function")j=function(){h(L)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,X=Y.port2;Y.port1.onmessage=L,j=function(){X.postMessage(null)}}else j=function(){x(L,0)};function oe(R){E=R,k||(k=!0,j())}function fe(R,V){b=x(function(){R(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,oe(C))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var V=3;break;default:V=p}var B=p;p=V;try{return R()}finally{p=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,V){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var B=p;p=R;try{return V()}finally{p=B}},e.unstable_scheduleCallback=function(R,V,B){var ne=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ne+B:ne):B=ne,R){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=B+I,R={id:c++,callback:V,priorityLevel:R,startTime:B,expirationTime:I,sortIndex:-1},B>ne?(R.sortIndex=B,t(u,R),n(l)===null&&R===n(u)&&(y?(f(b),b=-1):y=!0,fe(w,B-ne))):(R.sortIndex=I,t(l,R),v||g||(v=!0,oe(C))),R},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(R){var V=p;return function(){var B=p;p=V;try{return R.apply(this,arguments)}finally{p=B}}}})(rm);(function(e){e.exports=rm})(Xv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im=T,pt=Ql;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sm=new Set,Di={};function ar(e,t){zr(e,t),zr(e+"Capture",t)}function zr(e,t){for(Di[e]=t,e=0;e<t.length;e++)sm.add(t[e])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,Kv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,df={},ff={};function Qv(e){return Zl.call(ff,e)?!0:Zl.call(df,e)?!1:Kv.test(e)?ff[e]=!0:(df[e]=!0,!1)}function Zv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qv(e,t,n,r){if(t===null||typeof t>"u"||Zv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pc=/[\-:]([a-z])/g;function bc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pc,bc);je[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pc,bc);je[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pc,bc);je[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Mc(e,t,n,r){var i=je.hasOwnProperty(t)?je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qv(t,n,i,r)&&(n=null),r||i===null?Qv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var fn=im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Es=Symbol.for("react.element"),pr=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),Ac=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),om=Symbol.for("react.provider"),am=Symbol.for("react.context"),Lc=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),eu=Symbol.for("react.suspense_list"),_c=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),lm=Symbol.for("react.offscreen"),pf=Symbol.iterator;function ii(e){return e===null||typeof e!="object"?null:(e=pf&&e[pf]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,el;function gi(e){if(el===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);el=t&&t[1]||""}return`
`+el+e}var tl=!1;function nl(e,t){if(!e||tl)return"";tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gi(e):""}function Jv(e){switch(e.tag){case 5:return gi(e.type);case 16:return gi("Lazy");case 13:return gi("Suspense");case 19:return gi("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function tu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hr:return"Fragment";case pr:return"Portal";case ql:return"Profiler";case Ac:return"StrictMode";case Jl:return"Suspense";case eu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case am:return(e.displayName||"Context")+".Consumer";case om:return(e._context.displayName||"Context")+".Provider";case Lc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _c:return t=e.displayName||null,t!==null?t:tu(e.type)||"Memo";case gn:t=e._payload,e=e._init;try{return tu(e(t))}catch{}}return null}function ey(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tu(t);case 8:return t===Ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function um(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ty(e){var t=um(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ps(e){e._valueTracker||(e._valueTracker=ty(e))}function cm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=um(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nu(e,t){var n=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dm(e,t){t=t.checked,t!=null&&Mc(e,"checked",t,!1)}function ru(e,t){dm(e,t);var n=Nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?iu(e,t.type,n):t.hasOwnProperty("defaultValue")&&iu(e,t.type,Nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function iu(e,t,n){(t!=="number"||vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vi=Array.isArray;function Ar(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function su(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(vi(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nn(n)}}function fm(e,t){var n=Nn(t.value),r=Nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ou(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bs,hm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bs=bs||document.createElement("div"),bs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ny=["Webkit","ms","Moz","O"];Object.keys(Si).forEach(function(e){ny.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Si[t]=Si[e]})});function mm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Si.hasOwnProperty(e)&&Si[e]?(""+t).trim():t+"px"}function gm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ry=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function au(e,t){if(t){if(ry[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function lu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uu=null;function Oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cu=null,Lr=null,_r=null;function yf(e){if(e=ms(e)){if(typeof cu!="function")throw Error(A(280));var t=e.stateNode;t&&(t=aa(t),cu(e.stateNode,e.type,t))}}function vm(e){Lr?_r?_r.push(e):_r=[e]:Lr=e}function ym(){if(Lr){var e=Lr,t=_r;if(_r=Lr=null,yf(e),t)for(e=0;e<t.length;e++)yf(t[e])}}function wm(e,t){return e(t)}function xm(){}var rl=!1;function Sm(e,t,n){if(rl)return e(t,n);rl=!0;try{return wm(e,t,n)}finally{rl=!1,(Lr!==null||_r!==null)&&(xm(),ym())}}function ji(e,t){var n=e.stateNode;if(n===null)return null;var r=aa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var du=!1;if(an)try{var si={};Object.defineProperty(si,"passive",{get:function(){du=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{du=!1}function iy(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ci=!1,yo=null,wo=!1,fu=null,sy={onError:function(e){Ci=!0,yo=e}};function oy(e,t,n,r,i,s,o,a,l){Ci=!1,yo=null,iy.apply(sy,arguments)}function ay(e,t,n,r,i,s,o,a,l){if(oy.apply(this,arguments),Ci){if(Ci){var u=yo;Ci=!1,yo=null}else throw Error(A(198));wo||(wo=!0,fu=u)}}function lr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wf(e){if(lr(e)!==e)throw Error(A(188))}function ly(e){var t=e.alternate;if(!t){if(t=lr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return wf(i),e;if(s===r)return wf(i),t;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function km(e){return e=ly(e),e!==null?Tm(e):null}function Tm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tm(e);if(t!==null)return t;e=e.sibling}return null}var Em=pt.unstable_scheduleCallback,xf=pt.unstable_cancelCallback,uy=pt.unstable_shouldYield,cy=pt.unstable_requestPaint,Ee=pt.unstable_now,dy=pt.unstable_getCurrentPriorityLevel,Rc=pt.unstable_ImmediatePriority,Pm=pt.unstable_UserBlockingPriority,xo=pt.unstable_NormalPriority,fy=pt.unstable_LowPriority,bm=pt.unstable_IdlePriority,ra=null,Gt=null;function py(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(ra,e,void 0,(e.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:gy,hy=Math.log,my=Math.LN2;function gy(e){return e>>>=0,e===0?32:31-(hy(e)/my|0)|0}var Ms=64,As=4194304;function yi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function So(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=yi(a):(s&=o,s!==0&&(r=yi(s)))}else o=n&~i,o!==0?r=yi(o):s!==0&&(r=yi(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-It(t),i=1<<n,r|=e[n],t&=~i;return r}function vy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-It(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=vy(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function pu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mm(){var e=Ms;return Ms<<=1,!(Ms&4194240)&&(Ms=64),e}function il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ps(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-It(t),e[t]=n}function wy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-It(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Ic(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-It(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var le=0;function Am(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lm,Nc,_m,Om,Rm,hu=!1,Ls=[],En=null,Pn=null,bn=null,Bi=new Map,Hi=new Map,wn=[],xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sf(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":Bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hi.delete(t.pointerId)}}function oi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ms(t),t!==null&&Nc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Sy(e,t,n,r,i){switch(t){case"focusin":return En=oi(En,e,t,n,r,i),!0;case"dragenter":return Pn=oi(Pn,e,t,n,r,i),!0;case"mouseover":return bn=oi(bn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Bi.set(s,oi(Bi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Hi.set(s,oi(Hi.get(s)||null,e,t,n,r,i)),!0}return!1}function Im(e){var t=Xn(e.target);if(t!==null){var n=lr(t);if(n!==null){if(t=n.tag,t===13){if(t=Cm(n),t!==null){e.blockedOn=t,Rm(e.priority,function(){_m(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Js(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);uu=r,n.target.dispatchEvent(r),uu=null}else return t=ms(n),t!==null&&Nc(t),e.blockedOn=n,!1;t.shift()}return!0}function Cf(e,t,n){Js(e)&&n.delete(t)}function Cy(){hu=!1,En!==null&&Js(En)&&(En=null),Pn!==null&&Js(Pn)&&(Pn=null),bn!==null&&Js(bn)&&(bn=null),Bi.forEach(Cf),Hi.forEach(Cf)}function ai(e,t){e.blockedOn===t&&(e.blockedOn=null,hu||(hu=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,Cy)))}function Ui(e){function t(i){return ai(i,e)}if(0<Ls.length){ai(Ls[0],e);for(var n=1;n<Ls.length;n++){var r=Ls[n];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&ai(En,e),Pn!==null&&ai(Pn,e),bn!==null&&ai(bn,e),Bi.forEach(t),Hi.forEach(t),n=0;n<wn.length;n++)r=wn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wn.length&&(n=wn[0],n.blockedOn===null);)Im(n),n.blockedOn===null&&wn.shift()}var Or=fn.ReactCurrentBatchConfig,Co=!0;function ky(e,t,n,r){var i=le,s=Or.transition;Or.transition=null;try{le=1,zc(e,t,n,r)}finally{le=i,Or.transition=s}}function Ty(e,t,n,r){var i=le,s=Or.transition;Or.transition=null;try{le=4,zc(e,t,n,r)}finally{le=i,Or.transition=s}}function zc(e,t,n,r){if(Co){var i=mu(e,t,n,r);if(i===null)hl(e,t,r,ko,n),Sf(e,r);else if(Sy(i,e,t,n,r))r.stopPropagation();else if(Sf(e,r),t&4&&-1<xy.indexOf(e)){for(;i!==null;){var s=ms(i);if(s!==null&&Lm(s),s=mu(e,t,n,r),s===null&&hl(e,t,r,ko,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else hl(e,t,r,null,n)}}var ko=null;function mu(e,t,n,r){if(ko=null,e=Oc(r),e=Xn(e),e!==null)if(t=lr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Cm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ko=e,null}function Nm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dy()){case Rc:return 1;case Pm:return 4;case xo:case fy:return 16;case bm:return 536870912;default:return 16}default:return 16}}var Sn=null,Vc=null,eo=null;function zm(){if(eo)return eo;var e,t=Vc,n=t.length,r,i="value"in Sn?Sn.value:Sn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return eo=i.slice(e,1<r?1-r:void 0)}function to(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _s(){return!0}function kf(){return!1}function vt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_s:kf,this.isPropagationStopped=kf,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_s)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_s)},persist:function(){},isPersistent:_s}),t}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$c=vt(qr),hs=xe({},qr,{view:0,detail:0}),Ey=vt(hs),sl,ol,li,ia=xe({},hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==li&&(li&&e.type==="mousemove"?(sl=e.screenX-li.screenX,ol=e.screenY-li.screenY):ol=sl=0,li=e),sl)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),Tf=vt(ia),Py=xe({},ia,{dataTransfer:0}),by=vt(Py),My=xe({},hs,{relatedTarget:0}),al=vt(My),Ay=xe({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ly=vt(Ay),_y=xe({},qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Oy=vt(_y),Ry=xe({},qr,{data:0}),Ef=vt(Ry),Iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zy[e])?!!t[e]:!1}function Dc(){return Vy}var $y=xe({},hs,{key:function(e){if(e.key){var t=Iy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ny[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dy=vt($y),Fy=xe({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pf=vt(Fy),jy=xe({},hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),By=vt(jy),Hy=xe({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uy=vt(Hy),Gy=xe({},ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wy=vt(Gy),Yy=[9,13,27,32],Fc=an&&"CompositionEvent"in window,ki=null;an&&"documentMode"in document&&(ki=document.documentMode);var Xy=an&&"TextEvent"in window&&!ki,Vm=an&&(!Fc||ki&&8<ki&&11>=ki),bf=String.fromCharCode(32),Mf=!1;function $m(e,t){switch(e){case"keyup":return Yy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function Ky(e,t){switch(e){case"compositionend":return Dm(t);case"keypress":return t.which!==32?null:(Mf=!0,bf);case"textInput":return e=t.data,e===bf&&Mf?null:e;default:return null}}function Qy(e,t){if(mr)return e==="compositionend"||!Fc&&$m(e,t)?(e=zm(),eo=Vc=Sn=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vm&&t.locale!=="ko"?null:t.data;default:return null}}var Zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Af(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zy[e.type]:t==="textarea"}function Fm(e,t,n,r){vm(r),t=To(t,"onChange"),0<t.length&&(n=new $c("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ti=null,Gi=null;function qy(e){Zm(e,0)}function sa(e){var t=yr(e);if(cm(t))return e}function Jy(e,t){if(e==="change")return t}var jm=!1;if(an){var ll;if(an){var ul="oninput"in document;if(!ul){var Lf=document.createElement("div");Lf.setAttribute("oninput","return;"),ul=typeof Lf.oninput=="function"}ll=ul}else ll=!1;jm=ll&&(!document.documentMode||9<document.documentMode)}function _f(){Ti&&(Ti.detachEvent("onpropertychange",Bm),Gi=Ti=null)}function Bm(e){if(e.propertyName==="value"&&sa(Gi)){var t=[];Fm(t,Gi,e,Oc(e)),Sm(qy,t)}}function e2(e,t,n){e==="focusin"?(_f(),Ti=t,Gi=n,Ti.attachEvent("onpropertychange",Bm)):e==="focusout"&&_f()}function t2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sa(Gi)}function n2(e,t){if(e==="click")return sa(t)}function r2(e,t){if(e==="input"||e==="change")return sa(t)}function i2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:i2;function Wi(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zl.call(t,i)||!Vt(e[i],t[i]))return!1}return!0}function Of(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rf(e,t){var n=Of(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Of(n)}}function Hm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Um(){for(var e=window,t=vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vo(e.document)}return t}function jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function s2(e){var t=Um(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hm(n.ownerDocument.documentElement,n)){if(r!==null&&jc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Rf(n,s);var o=Rf(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var o2=an&&"documentMode"in document&&11>=document.documentMode,gr=null,gu=null,Ei=null,vu=!1;function If(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vu||gr==null||gr!==vo(r)||(r=gr,"selectionStart"in r&&jc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ei&&Wi(Ei,r)||(Ei=r,r=To(gu,"onSelect"),0<r.length&&(t=new $c("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function Os(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vr={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionend:Os("Transition","TransitionEnd")},cl={},Gm={};an&&(Gm=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function oa(e){if(cl[e])return cl[e];if(!vr[e])return e;var t=vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gm)return cl[e]=t[n];return e}var Wm=oa("animationend"),Ym=oa("animationiteration"),Xm=oa("animationstart"),Km=oa("transitionend"),Qm=new Map,Nf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,t){Qm.set(e,t),ar(t,[e])}for(var dl=0;dl<Nf.length;dl++){var fl=Nf[dl],a2=fl.toLowerCase(),l2=fl[0].toUpperCase()+fl.slice(1);Dn(a2,"on"+l2)}Dn(Wm,"onAnimationEnd");Dn(Ym,"onAnimationIteration");Dn(Xm,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(Km,"onTransitionEnd");zr("onMouseEnter",["mouseout","mouseover"]);zr("onMouseLeave",["mouseout","mouseover"]);zr("onPointerEnter",["pointerout","pointerover"]);zr("onPointerLeave",["pointerout","pointerover"]);ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u2=new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));function zf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ay(r,t,void 0,e),e.currentTarget=null}function Zm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;zf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;zf(i,a,u),s=l}}}if(wo)throw e=fu,wo=!1,fu=null,e}function me(e,t){var n=t[Cu];n===void 0&&(n=t[Cu]=new Set);var r=e+"__bubble";n.has(r)||(qm(t,e,2,!1),n.add(r))}function pl(e,t,n){var r=0;t&&(r|=4),qm(n,e,r,t)}var Rs="_reactListening"+Math.random().toString(36).slice(2);function Yi(e){if(!e[Rs]){e[Rs]=!0,sm.forEach(function(n){n!=="selectionchange"&&(u2.has(n)||pl(n,!1,e),pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rs]||(t[Rs]=!0,pl("selectionchange",!1,t))}}function qm(e,t,n,r){switch(Nm(t)){case 1:var i=ky;break;case 4:i=Ty;break;default:i=zc}n=i.bind(null,t,n,e),i=void 0,!du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function hl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Sm(function(){var u=s,c=Oc(n),d=[];e:{var p=Qm.get(e);if(p!==void 0){var g=$c,v=e;switch(e){case"keypress":if(to(n)===0)break e;case"keydown":case"keyup":g=Dy;break;case"focusin":v="focus",g=al;break;case"focusout":v="blur",g=al;break;case"beforeblur":case"afterblur":g=al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=by;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=By;break;case Wm:case Ym:case Xm:g=Ly;break;case Km:g=Uy;break;case"scroll":g=Ey;break;case"wheel":g=Wy;break;case"copy":case"cut":case"paste":g=Oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Pf}var y=(t&4)!==0,x=!y&&e==="scroll",f=y?p!==null?p+"Capture":null:p;y=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,f!==null&&(w=ji(h,f),w!=null&&y.push(Xi(h,w,m)))),x)break;h=h.return}0<y.length&&(p=new g(p,v,null,n,c),d.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==uu&&(v=n.relatedTarget||n.fromElement)&&(Xn(v)||v[ln]))break e;if((g||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Xn(v):null,v!==null&&(x=lr(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Tf,w="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Pf,w="onPointerLeave",f="onPointerEnter",h="pointer"),x=g==null?p:yr(g),m=v==null?p:yr(v),p=new y(w,h+"leave",g,n,c),p.target=x,p.relatedTarget=m,w=null,Xn(c)===u&&(y=new y(f,h+"enter",v,n,c),y.target=m,y.relatedTarget=x,w=y),x=w,g&&v)t:{for(y=g,f=v,h=0,m=y;m;m=dr(m))h++;for(m=0,w=f;w;w=dr(w))m++;for(;0<h-m;)y=dr(y),h--;for(;0<m-h;)f=dr(f),m--;for(;h--;){if(y===f||f!==null&&y===f.alternate)break t;y=dr(y),f=dr(f)}y=null}else y=null;g!==null&&Vf(d,p,g,y,!1),v!==null&&x!==null&&Vf(d,x,v,y,!0)}}e:{if(p=u?yr(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var C=Jy;else if(Af(p))if(jm)C=r2;else{C=t2;var k=e2}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=n2);if(C&&(C=C(e,u))){Fm(d,C,n,c);break e}k&&k(e,p,u),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&iu(p,"number",p.value)}switch(k=u?yr(u):window,e){case"focusin":(Af(k)||k.contentEditable==="true")&&(gr=k,gu=u,Ei=null);break;case"focusout":Ei=gu=gr=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,If(d,n,c);break;case"selectionchange":if(o2)break;case"keydown":case"keyup":If(d,n,c)}var E;if(Fc)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else mr?$m(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Vm&&n.locale!=="ko"&&(mr||b!=="onCompositionStart"?b==="onCompositionEnd"&&mr&&(E=zm()):(Sn=c,Vc="value"in Sn?Sn.value:Sn.textContent,mr=!0)),k=To(u,b),0<k.length&&(b=new Ef(b,e,null,n,c),d.push({event:b,listeners:k}),E?b.data=E:(E=Dm(n),E!==null&&(b.data=E)))),(E=Xy?Ky(e,n):Qy(e,n))&&(u=To(u,"onBeforeInput"),0<u.length&&(c=new Ef("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}Zm(d,t)})}function Xi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function To(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ji(e,n),s!=null&&r.unshift(Xi(e,s,i)),s=ji(e,t),s!=null&&r.push(Xi(e,s,i))),e=e.return}return r}function dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vf(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ji(n,s),l!=null&&o.unshift(Xi(n,l,a))):i||(l=ji(n,s),l!=null&&o.push(Xi(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var c2=/\r\n?/g,d2=/\u0000|\uFFFD/g;function $f(e){return(typeof e=="string"?e:""+e).replace(c2,`
`).replace(d2,"")}function Is(e,t,n){if(t=$f(t),$f(e)!==t&&n)throw Error(A(425))}function Eo(){}var yu=null,wu=null;function xu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Su=typeof setTimeout=="function"?setTimeout:void 0,f2=typeof clearTimeout=="function"?clearTimeout:void 0,Df=typeof Promise=="function"?Promise:void 0,p2=typeof queueMicrotask=="function"?queueMicrotask:typeof Df<"u"?function(e){return Df.resolve(null).then(e).catch(h2)}:Su;function h2(e){setTimeout(function(){throw e})}function ml(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ui(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ui(t)}function Mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Jr,Ki="__reactProps$"+Jr,ln="__reactContainer$"+Jr,Cu="__reactEvents$"+Jr,m2="__reactListeners$"+Jr,g2="__reactHandles$"+Jr;function Xn(e){var t=e[Ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ln]||n[Ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ff(e);e!==null;){if(n=e[Ht])return n;e=Ff(e)}return t}e=n,n=e.parentNode}return null}function ms(e){return e=e[Ht]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function aa(e){return e[Ki]||null}var ku=[],wr=-1;function Fn(e){return{current:e}}function ge(e){0>wr||(e.current=ku[wr],ku[wr]=null,wr--)}function he(e,t){wr++,ku[wr]=e.current,e.current=t}var zn={},Xe=Fn(zn),rt=Fn(!1),er=zn;function Vr(e,t){var n=e.type.contextTypes;if(!n)return zn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function it(e){return e=e.childContextTypes,e!=null}function Po(){ge(rt),ge(Xe)}function jf(e,t,n){if(Xe.current!==zn)throw Error(A(168));he(Xe,t),he(rt,n)}function Jm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,ey(e)||"Unknown",i));return xe({},n,r)}function bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zn,er=Xe.current,he(Xe,e),he(rt,rt.current),!0}function Bf(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Jm(e,t,er),r.__reactInternalMemoizedMergedChildContext=e,ge(rt),ge(Xe),he(Xe,e)):ge(rt),he(rt,n)}var qt=null,la=!1,gl=!1;function e0(e){qt===null?qt=[e]:qt.push(e)}function v2(e){la=!0,e0(e)}function jn(){if(!gl&&qt!==null){gl=!0;var e=0,t=le;try{var n=qt;for(le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qt=null,la=!1}catch(i){throw qt!==null&&(qt=qt.slice(e+1)),Em(Rc,jn),i}finally{le=t,gl=!1}}return null}var xr=[],Sr=0,Mo=null,Ao=0,xt=[],St=0,tr=null,Jt=1,en="";function Gn(e,t){xr[Sr++]=Ao,xr[Sr++]=Mo,Mo=e,Ao=t}function t0(e,t,n){xt[St++]=Jt,xt[St++]=en,xt[St++]=tr,tr=e;var r=Jt;e=en;var i=32-It(r)-1;r&=~(1<<i),n+=1;var s=32-It(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Jt=1<<32-It(t)+i|n<<i|r,en=s+e}else Jt=1<<s|n<<i|r,en=e}function Bc(e){e.return!==null&&(Gn(e,1),t0(e,1,0))}function Hc(e){for(;e===Mo;)Mo=xr[--Sr],xr[Sr]=null,Ao=xr[--Sr],xr[Sr]=null;for(;e===tr;)tr=xt[--St],xt[St]=null,en=xt[--St],xt[St]=null,Jt=xt[--St],xt[St]=null}var dt=null,ct=null,ve=!1,Ot=null;function n0(e,t){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ct=Mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tr!==null?{id:Jt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,ct=null,!0):!1;default:return!1}}function Tu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Eu(e){if(ve){var t=ct;if(t){var n=t;if(!Hf(e,t)){if(Tu(e))throw Error(A(418));t=Mn(n.nextSibling);var r=dt;t&&Hf(e,t)?n0(r,n):(e.flags=e.flags&-4097|2,ve=!1,dt=e)}}else{if(Tu(e))throw Error(A(418));e.flags=e.flags&-4097|2,ve=!1,dt=e}}}function Uf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Ns(e){if(e!==dt)return!1;if(!ve)return Uf(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xu(e.type,e.memoizedProps)),t&&(t=ct)){if(Tu(e))throw r0(),Error(A(418));for(;t;)n0(e,t),t=Mn(t.nextSibling)}if(Uf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=Mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=dt?Mn(e.stateNode.nextSibling):null;return!0}function r0(){for(var e=ct;e;)e=Mn(e.nextSibling)}function $r(){ct=dt=null,ve=!1}function Uc(e){Ot===null?Ot=[e]:Ot.push(e)}var y2=fn.ReactCurrentBatchConfig;function Lt(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Lo=Fn(null),_o=null,Cr=null,Gc=null;function Wc(){Gc=Cr=_o=null}function Yc(e){var t=Lo.current;ge(Lo),e._currentValue=t}function Pu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rr(e,t){_o=e,Gc=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(Gc!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(_o===null)throw Error(A(308));Cr=e,_o.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var Kn=null;function Xc(e){Kn===null?Kn=[e]:Kn.push(e)}function i0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Xc(t)):(n.next=i.next,i.next=n),t.interleaved=n,un(e,r)}function un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vn=!1;function Kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,un(e,n)}return i=r.interleaved,i===null?(t.next=t,Xc(r)):(t.next=i.next,i.next=t),r.interleaved=t,un(e,n)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ic(e,n)}}function Gf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Oo(e,t,n,r){var i=e.updateQueue;vn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(p=t,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(g,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,p=typeof v=="function"?v.call(g,d,p):v,p==null)break e;d=xe({},d,p);break e;case 2:vn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);rr|=o,e.lanes=o,e.memoizedState=d}}function Wf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var o0=new im.Component().refs;function bu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ua={isMounted:function(e){return(e=e._reactInternals)?lr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=_n(e),s=nn(r,i);s.payload=t,n!=null&&(s.callback=n),t=An(e,s,i),t!==null&&(Nt(t,e,i,r),no(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=_n(e),s=nn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=An(e,s,i),t!==null&&(Nt(t,e,i,r),no(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=_n(e),i=nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=An(e,i,r),t!==null&&(Nt(t,e,r,n),no(t,e,r))}};function Yf(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Wi(n,r)||!Wi(i,s):!0}function a0(e,t,n){var r=!1,i=zn,s=t.contextType;return typeof s=="object"&&s!==null?s=Tt(s):(i=it(t)?er:Xe.current,r=t.contextTypes,s=(r=r!=null)?Vr(e,i):zn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ua,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Xf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ua.enqueueReplaceState(t,t.state,null)}function Mu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=o0,Kc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Tt(s):(s=it(t)?er:Xe.current,i.context=Vr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(bu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ua.enqueueReplaceState(i,i.state,null),Oo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ui(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===o0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function zs(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kf(e){var t=e._init;return t(e._payload)}function l0(e){function t(f,h){if(e){var m=f.deletions;m===null?(f.deletions=[h],f.flags|=16):m.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(f,h){return f=On(f,h),f.index=0,f.sibling=null,f}function s(f,h,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<h?(f.flags|=2,h):m):(f.flags|=2,h)):(f.flags|=1048576,h)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,h,m,w){return h===null||h.tag!==6?(h=kl(m,f.mode,w),h.return=f,h):(h=i(h,m),h.return=f,h)}function l(f,h,m,w){var C=m.type;return C===hr?c(f,h,m.props.children,w,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gn&&Kf(C)===h.type)?(w=i(h,m.props),w.ref=ui(f,h,m),w.return=f,w):(w=lo(m.type,m.key,m.props,null,f.mode,w),w.ref=ui(f,h,m),w.return=f,w)}function u(f,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Tl(m,f.mode,w),h.return=f,h):(h=i(h,m.children||[]),h.return=f,h)}function c(f,h,m,w,C){return h===null||h.tag!==7?(h=Jn(m,f.mode,w,C),h.return=f,h):(h=i(h,m),h.return=f,h)}function d(f,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=kl(""+h,f.mode,m),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Es:return m=lo(h.type,h.key,h.props,null,f.mode,m),m.ref=ui(f,null,h),m.return=f,m;case pr:return h=Tl(h,f.mode,m),h.return=f,h;case gn:var w=h._init;return d(f,w(h._payload),m)}if(vi(h)||ii(h))return h=Jn(h,f.mode,m,null),h.return=f,h;zs(f,h)}return null}function p(f,h,m,w){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(f,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Es:return m.key===C?l(f,h,m,w):null;case pr:return m.key===C?u(f,h,m,w):null;case gn:return C=m._init,p(f,h,C(m._payload),w)}if(vi(m)||ii(m))return C!==null?null:c(f,h,m,w,null);zs(f,m)}return null}function g(f,h,m,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(m)||null,a(h,f,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Es:return f=f.get(w.key===null?m:w.key)||null,l(h,f,w,C);case pr:return f=f.get(w.key===null?m:w.key)||null,u(h,f,w,C);case gn:var k=w._init;return g(f,h,m,k(w._payload),C)}if(vi(w)||ii(w))return f=f.get(m)||null,c(h,f,w,C,null);zs(h,w)}return null}function v(f,h,m,w){for(var C=null,k=null,E=h,b=h=0,_=null;E!==null&&b<m.length;b++){E.index>b?(_=E,E=null):_=E.sibling;var $=p(f,E,m[b],w);if($===null){E===null&&(E=_);break}e&&E&&$.alternate===null&&t(f,E),h=s($,h,b),k===null?C=$:k.sibling=$,k=$,E=_}if(b===m.length)return n(f,E),ve&&Gn(f,b),C;if(E===null){for(;b<m.length;b++)E=d(f,m[b],w),E!==null&&(h=s(E,h,b),k===null?C=E:k.sibling=E,k=E);return ve&&Gn(f,b),C}for(E=r(f,E);b<m.length;b++)_=g(E,f,b,m[b],w),_!==null&&(e&&_.alternate!==null&&E.delete(_.key===null?b:_.key),h=s(_,h,b),k===null?C=_:k.sibling=_,k=_);return e&&E.forEach(function(M){return t(f,M)}),ve&&Gn(f,b),C}function y(f,h,m,w){var C=ii(m);if(typeof C!="function")throw Error(A(150));if(m=C.call(m),m==null)throw Error(A(151));for(var k=C=null,E=h,b=h=0,_=null,$=m.next();E!==null&&!$.done;b++,$=m.next()){E.index>b?(_=E,E=null):_=E.sibling;var M=p(f,E,$.value,w);if(M===null){E===null&&(E=_);break}e&&E&&M.alternate===null&&t(f,E),h=s(M,h,b),k===null?C=M:k.sibling=M,k=M,E=_}if($.done)return n(f,E),ve&&Gn(f,b),C;if(E===null){for(;!$.done;b++,$=m.next())$=d(f,$.value,w),$!==null&&(h=s($,h,b),k===null?C=$:k.sibling=$,k=$);return ve&&Gn(f,b),C}for(E=r(f,E);!$.done;b++,$=m.next())$=g(E,f,b,$.value,w),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?b:$.key),h=s($,h,b),k===null?C=$:k.sibling=$,k=$);return e&&E.forEach(function(L){return t(f,L)}),ve&&Gn(f,b),C}function x(f,h,m,w){if(typeof m=="object"&&m!==null&&m.type===hr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Es:e:{for(var C=m.key,k=h;k!==null;){if(k.key===C){if(C=m.type,C===hr){if(k.tag===7){n(f,k.sibling),h=i(k,m.props.children),h.return=f,f=h;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gn&&Kf(C)===k.type){n(f,k.sibling),h=i(k,m.props),h.ref=ui(f,k,m),h.return=f,f=h;break e}n(f,k);break}else t(f,k);k=k.sibling}m.type===hr?(h=Jn(m.props.children,f.mode,w,m.key),h.return=f,f=h):(w=lo(m.type,m.key,m.props,null,f.mode,w),w.ref=ui(f,h,m),w.return=f,f=w)}return o(f);case pr:e:{for(k=m.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(f,h.sibling),h=i(h,m.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=Tl(m,f.mode,w),h.return=f,f=h}return o(f);case gn:return k=m._init,x(f,h,k(m._payload),w)}if(vi(m))return v(f,h,m,w);if(ii(m))return y(f,h,m,w);zs(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(f,h.sibling),h=i(h,m),h.return=f,f=h):(n(f,h),h=kl(m,f.mode,w),h.return=f,f=h),o(f)):n(f,h)}return x}var Dr=l0(!0),u0=l0(!1),gs={},Wt=Fn(gs),Qi=Fn(gs),Zi=Fn(gs);function Qn(e){if(e===gs)throw Error(A(174));return e}function Qc(e,t){switch(he(Zi,t),he(Qi,e),he(Wt,gs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ou(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ou(t,e)}ge(Wt),he(Wt,t)}function Fr(){ge(Wt),ge(Qi),ge(Zi)}function c0(e){Qn(Zi.current);var t=Qn(Wt.current),n=ou(t,e.type);t!==n&&(he(Qi,e),he(Wt,n))}function Zc(e){Qi.current===e&&(ge(Wt),ge(Qi))}var ye=Fn(0);function Ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function qc(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var ro=fn.ReactCurrentDispatcher,yl=fn.ReactCurrentBatchConfig,nr=0,we=null,Ae=null,Oe=null,Io=!1,Pi=!1,qi=0,w2=0;function He(){throw Error(A(321))}function Jc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vt(e[n],t[n]))return!1;return!0}function ed(e,t,n,r,i,s){if(nr=s,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=e===null||e.memoizedState===null?k2:T2,e=n(r,i),Pi){s=0;do{if(Pi=!1,qi=0,25<=s)throw Error(A(301));s+=1,Oe=Ae=null,t.updateQueue=null,ro.current=E2,e=n(r,i)}while(Pi)}if(ro.current=No,t=Ae!==null&&Ae.next!==null,nr=0,Oe=Ae=we=null,Io=!1,t)throw Error(A(300));return e}function td(){var e=qi!==0;return qi=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?we.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Et(){if(Ae===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Oe===null?we.memoizedState:Oe.next;if(t!==null)Oe=t,Ae=e;else{if(e===null)throw Error(A(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Oe===null?we.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Ji(e,t){return typeof t=="function"?t(e):t}function wl(e){var t=Et(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((nr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,we.lanes|=c,rr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Vt(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,we.lanes|=s,rr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xl(e){var t=Et(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Vt(s,t.memoizedState)||(nt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function d0(){}function f0(e,t){var n=we,r=Et(),i=t(),s=!Vt(r.memoizedState,i);if(s&&(r.memoizedState=i,nt=!0),r=r.queue,nd(m0.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,es(9,h0.bind(null,n,r,i,t),void 0,null),Re===null)throw Error(A(349));nr&30||p0(n,t,i)}return i}function p0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function h0(e,t,n,r){t.value=n,t.getSnapshot=r,g0(t)&&v0(e)}function m0(e,t,n){return n(function(){g0(t)&&v0(e)})}function g0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vt(e,n)}catch{return!0}}function v0(e){var t=un(e,1);t!==null&&Nt(t,e,1,-1)}function Qf(e){var t=Dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},t.queue=e,e=e.dispatch=C2.bind(null,we,e),[t.memoizedState,e]}function es(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function y0(){return Et().memoizedState}function io(e,t,n,r){var i=Dt();we.flags|=e,i.memoizedState=es(1|t,n,void 0,r===void 0?null:r)}function ca(e,t,n,r){var i=Et();r=r===void 0?null:r;var s=void 0;if(Ae!==null){var o=Ae.memoizedState;if(s=o.destroy,r!==null&&Jc(r,o.deps)){i.memoizedState=es(t,n,s,r);return}}we.flags|=e,i.memoizedState=es(1|t,n,s,r)}function Zf(e,t){return io(8390656,8,e,t)}function nd(e,t){return ca(2048,8,e,t)}function w0(e,t){return ca(4,2,e,t)}function x0(e,t){return ca(4,4,e,t)}function S0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function C0(e,t,n){return n=n!=null?n.concat([e]):null,ca(4,4,S0.bind(null,t,e),n)}function rd(){}function k0(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Jc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function T0(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Jc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function E0(e,t,n){return nr&21?(Vt(n,t)||(n=Mm(),we.lanes|=n,rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n)}function x2(e,t){var n=le;le=n!==0&&4>n?n:4,e(!0);var r=yl.transition;yl.transition={};try{e(!1),t()}finally{le=n,yl.transition=r}}function P0(){return Et().memoizedState}function S2(e,t,n){var r=_n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},b0(e))M0(t,n);else if(n=i0(e,t,n,r),n!==null){var i=Ze();Nt(n,e,r,i),A0(n,t,r)}}function C2(e,t,n){var r=_n(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(b0(e))M0(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Vt(a,o)){var l=t.interleaved;l===null?(i.next=i,Xc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=i0(e,t,i,r),n!==null&&(i=Ze(),Nt(n,e,r,i),A0(n,t,r))}}function b0(e){var t=e.alternate;return e===we||t!==null&&t===we}function M0(e,t){Pi=Io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function A0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ic(e,n)}}var No={readContext:Tt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},k2={readContext:Tt,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:Zf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,io(4194308,4,S0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){return io(4,2,e,t)},useMemo:function(e,t){var n=Dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=S2.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:Qf,useDebugValue:rd,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=Qf(!1),t=e[0];return e=x2.bind(null,e[1]),Dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,i=Dt();if(ve){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Re===null)throw Error(A(349));nr&30||p0(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Zf(m0.bind(null,r,s,e),[e]),r.flags|=2048,es(9,h0.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Dt(),t=Re.identifierPrefix;if(ve){var n=en,r=Jt;n=(r&~(1<<32-It(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=w2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},T2={readContext:Tt,useCallback:k0,useContext:Tt,useEffect:nd,useImperativeHandle:C0,useInsertionEffect:w0,useLayoutEffect:x0,useMemo:T0,useReducer:wl,useRef:y0,useState:function(){return wl(Ji)},useDebugValue:rd,useDeferredValue:function(e){var t=Et();return E0(t,Ae.memoizedState,e)},useTransition:function(){var e=wl(Ji)[0],t=Et().memoizedState;return[e,t]},useMutableSource:d0,useSyncExternalStore:f0,useId:P0,unstable_isNewReconciler:!1},E2={readContext:Tt,useCallback:k0,useContext:Tt,useEffect:nd,useImperativeHandle:C0,useInsertionEffect:w0,useLayoutEffect:x0,useMemo:T0,useReducer:xl,useRef:y0,useState:function(){return xl(Ji)},useDebugValue:rd,useDeferredValue:function(e){var t=Et();return Ae===null?t.memoizedState=e:E0(t,Ae.memoizedState,e)},useTransition:function(){var e=xl(Ji)[0],t=Et().memoizedState;return[e,t]},useMutableSource:d0,useSyncExternalStore:f0,useId:P0,unstable_isNewReconciler:!1};function jr(e,t){try{var n="",r=t;do n+=Jv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Sl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Au(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var P2=typeof WeakMap=="function"?WeakMap:Map;function L0(e,t,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vo||(Vo=!0,Du=r),Au(e,t)},n}function _0(e,t,n){n=nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Au(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Au(e,t),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function qf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new P2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=F2.bind(null,e,t,n),t.then(e,e))}function Jf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ep(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nn(-1,1),t.tag=2,An(n,t,1))),n.lanes|=1),e)}var b2=fn.ReactCurrentOwner,nt=!1;function Qe(e,t,n,r){t.child=e===null?u0(t,null,n,r):Dr(t,e.child,n,r)}function tp(e,t,n,r,i){n=n.render;var s=t.ref;return Rr(t,i),r=ed(e,t,n,r,s,i),n=td(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cn(e,t,i)):(ve&&n&&Bc(t),t.flags|=1,Qe(e,t,r,i),t.child)}function np(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!dd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,O0(e,t,s,r,i)):(e=lo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wi,n(o,r)&&e.ref===t.ref)return cn(e,t,i)}return t.flags|=1,e=On(s,r),e.ref=t.ref,e.return=t,t.child=e}function O0(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Wi(s,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,cn(e,t,i)}return Lu(e,t,n,r,i)}function R0(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Tr,lt),lt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(Tr,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(Tr,lt),lt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,he(Tr,lt),lt|=r;return Qe(e,t,i,n),t.child}function I0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Lu(e,t,n,r,i){var s=it(n)?er:Xe.current;return s=Vr(t,s),Rr(t,i),n=ed(e,t,n,r,s,i),r=td(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cn(e,t,i)):(ve&&r&&Bc(t),t.flags|=1,Qe(e,t,n,i),t.child)}function rp(e,t,n,r,i){if(it(n)){var s=!0;bo(t)}else s=!1;if(Rr(t,i),t.stateNode===null)so(e,t),a0(t,n,r),Mu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Tt(u):(u=it(n)?er:Xe.current,u=Vr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Xf(t,o,r,u),vn=!1;var p=t.memoizedState;o.state=p,Oo(t,r,o,i),l=t.memoizedState,a!==r||p!==l||rt.current||vn?(typeof c=="function"&&(bu(t,n,c,r),l=t.memoizedState),(a=vn||Yf(t,n,a,r,p,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,s0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Lt(t.type,a),o.props=u,d=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tt(l):(l=it(n)?er:Xe.current,l=Vr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&Xf(t,o,r,l),vn=!1,p=t.memoizedState,o.state=p,Oo(t,r,o,i);var v=t.memoizedState;a!==d||p!==v||rt.current||vn?(typeof g=="function"&&(bu(t,n,g,r),v=t.memoizedState),(u=vn||Yf(t,n,u,r,p,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return _u(e,t,n,r,s,i)}function _u(e,t,n,r,i,s){I0(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Bf(t,n,!1),cn(e,t,s);r=t.stateNode,b2.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Dr(t,e.child,null,s),t.child=Dr(t,null,a,s)):Qe(e,t,a,s),t.memoizedState=r.state,i&&Bf(t,n,!0),t.child}function N0(e){var t=e.stateNode;t.pendingContext?jf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jf(e,t.context,!1),Qc(e,t.containerInfo)}function ip(e,t,n,r,i){return $r(),Uc(i),t.flags|=256,Qe(e,t,n,r),t.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function Ru(e){return{baseLanes:e,cachePool:null,transitions:null}}function z0(e,t,n){var r=t.pendingProps,i=ye.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(ye,i&1),e===null)return Eu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pa(o,r,0,null),e=Jn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ru(n),t.memoizedState=Ou,e):id(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return M2(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=On(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=On(a,s):(s=Jn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Ru(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Ou,r}return s=e.child,e=s.sibling,r=On(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function id(e,t){return t=pa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vs(e,t,n,r){return r!==null&&Uc(r),Dr(t,e.child,null,n),e=id(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function M2(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Sl(Error(A(422))),Vs(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=pa({mode:"visible",children:r.children},i,0,null),s=Jn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Dr(t,e.child,null,o),t.child.memoizedState=Ru(o),t.memoizedState=Ou,s);if(!(t.mode&1))return Vs(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=Sl(s,r,void 0),Vs(e,t,o,r)}if(a=(o&e.childLanes)!==0,nt||a){if(r=Re,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,un(e,i),Nt(r,e,i,-1))}return cd(),r=Sl(Error(A(421))),Vs(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=j2.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ct=Mn(i.nextSibling),dt=t,ve=!0,Ot=null,e!==null&&(xt[St++]=Jt,xt[St++]=en,xt[St++]=tr,Jt=e.id,en=e.overflow,tr=t),t=id(t,r.children),t.flags|=4096,t)}function sp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pu(e.return,t,n)}function Cl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function V0(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Qe(e,t,r.children,n),r=ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sp(e,n,t);else if(e.tag===19)sp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(ye,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ro(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Cl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ro(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Cl(t,!0,n,null,s);break;case"together":Cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function so(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=On(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=On(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function A2(e,t,n){switch(t.tag){case 3:N0(t),$r();break;case 5:c0(t);break;case 1:it(t.type)&&bo(t);break;case 4:Qc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(Lo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(ye,ye.current&1),t.flags|=128,null):n&t.child.childLanes?z0(e,t,n):(he(ye,ye.current&1),e=cn(e,t,n),e!==null?e.sibling:null);he(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return V0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,R0(e,t,n)}return cn(e,t,n)}var $0,Iu,D0,F0;$0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Iu=function(){};D0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qn(Wt.current);var s=null;switch(n){case"input":i=nu(e,i),r=nu(e,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=su(e,i),r=su(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Eo)}au(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Di.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Di.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&me("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};F0=function(e,t,n,r){n!==r&&(t.flags|=4)};function ci(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function L2(e,t,n){var r=t.pendingProps;switch(Hc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return it(t.type)&&Po(),Ue(t),null;case 3:return r=t.stateNode,Fr(),ge(rt),ge(Xe),qc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ns(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ot!==null&&(Bu(Ot),Ot=null))),Iu(e,t),Ue(t),null;case 5:Zc(t);var i=Qn(Zi.current);if(n=t.type,e!==null&&t.stateNode!=null)D0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Ue(t),null}if(e=Qn(Wt.current),Ns(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ht]=t,r[Ki]=s,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<wi.length;i++)me(wi[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":hf(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":gf(r,s),me("invalid",r)}au(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Is(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Is(r.textContent,a,e),i=["children",""+a]):Di.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Ps(r),mf(r,s,!0);break;case"textarea":Ps(r),vf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Eo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ht]=t,e[Ki]=r,$0(e,t,!1,!1),t.stateNode=e;e:{switch(o=lu(n,r),n){case"dialog":me("cancel",e),me("close",e),i=r;break;case"iframe":case"object":case"embed":me("load",e),i=r;break;case"video":case"audio":for(i=0;i<wi.length;i++)me(wi[i],e);i=r;break;case"source":me("error",e),i=r;break;case"img":case"image":case"link":me("error",e),me("load",e),i=r;break;case"details":me("toggle",e),i=r;break;case"input":hf(e,r),i=nu(e,r),me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),me("invalid",e);break;case"textarea":gf(e,r),i=su(e,r),me("invalid",e);break;default:i=r}au(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?gm(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hm(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fi(e,l):typeof l=="number"&&Fi(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Di.hasOwnProperty(s)?l!=null&&s==="onScroll"&&me("scroll",e):l!=null&&Mc(e,s,l,o))}switch(n){case"input":Ps(e),mf(e,r,!1);break;case"textarea":Ps(e),vf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ar(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)F0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=Qn(Zi.current),Qn(Wt.current),Ns(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ht]=t,(s=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:Is(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Is(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=t,t.stateNode=r}return Ue(t),null;case 13:if(ge(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&ct!==null&&t.mode&1&&!(t.flags&128))r0(),$r(),t.flags|=98560,s=!1;else if(s=Ns(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(A(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Ht]=t}else $r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),s=!1}else Ot!==null&&(Bu(Ot),Ot=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?Le===0&&(Le=3):cd())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return Fr(),Iu(e,t),e===null&&Yi(t.stateNode.containerInfo),Ue(t),null;case 10:return Yc(t.type._context),Ue(t),null;case 17:return it(t.type)&&Po(),Ue(t),null;case 19:if(ge(ye),s=t.memoizedState,s===null)return Ue(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)ci(s,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ro(e),o!==null){for(t.flags|=128,ci(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(ye,ye.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ee()>Br&&(t.flags|=128,r=!0,ci(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ro(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ci(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Ue(t),null}else 2*Ee()-s.renderingStartTime>Br&&n!==1073741824&&(t.flags|=128,r=!0,ci(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ee(),t.sibling=null,n=ye.current,he(ye,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return ud(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?lt&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function _2(e,t){switch(Hc(t),t.tag){case 1:return it(t.type)&&Po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fr(),ge(rt),ge(Xe),qc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Zc(t),null;case 13:if(ge(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(ye),null;case 4:return Fr(),null;case 10:return Yc(t.type._context),null;case 22:case 23:return ud(),null;case 24:return null;default:return null}}var $s=!1,We=!1,O2=typeof WeakSet=="function"?WeakSet:Set,F=null;function kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function Nu(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var op=!1;function R2(e,t){if(yu=Co,e=Um(),jc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break t;if(p===n&&++u===i&&(a=o),p===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wu={focusedElem:e,selectionRange:n},Co=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,x=v.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Lt(t.type,y),x);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){Ce(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return v=op,op=!1,v}function bi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Nu(t,n,s)}i=i.next}while(i!==r)}}function da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function j0(e){var t=e.alternate;t!==null&&(e.alternate=null,j0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[Ki],delete t[Cu],delete t[m2],delete t[g2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function B0(e){return e.tag===5||e.tag===3||e.tag===4}function ap(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||B0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Eo));else if(r!==4&&(e=e.child,e!==null))for(Vu(e,t,n),e=e.sibling;e!==null;)Vu(e,t,n),e=e.sibling}function $u(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($u(e,t,n),e=e.sibling;e!==null;)$u(e,t,n),e=e.sibling}var $e=null,_t=!1;function hn(e,t,n){for(n=n.child;n!==null;)H0(e,t,n),n=n.sibling}function H0(e,t,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(ra,n)}catch{}switch(n.tag){case 5:We||kr(n,t);case 6:var r=$e,i=_t;$e=null,hn(e,t,n),$e=r,_t=i,$e!==null&&(_t?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(_t?(e=$e,n=n.stateNode,e.nodeType===8?ml(e.parentNode,n):e.nodeType===1&&ml(e,n),Ui(e)):ml($e,n.stateNode));break;case 4:r=$e,i=_t,$e=n.stateNode.containerInfo,_t=!0,hn(e,t,n),$e=r,_t=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nu(n,t,o),i=i.next}while(i!==r)}hn(e,t,n);break;case 1:if(!We&&(kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ce(n,t,a)}hn(e,t,n);break;case 21:hn(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,hn(e,t,n),We=r):hn(e,t,n);break;default:hn(e,t,n)}}function lp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new O2),t.forEach(function(r){var i=B2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:$e=a.stateNode,_t=!1;break e;case 3:$e=a.stateNode.containerInfo,_t=!0;break e;case 4:$e=a.stateNode.containerInfo,_t=!0;break e}a=a.return}if($e===null)throw Error(A(160));H0(s,o,i),$e=null,_t=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ce(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)U0(t,e),t=t.sibling}function U0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),$t(e),r&4){try{bi(3,e,e.return),da(3,e)}catch(y){Ce(e,e.return,y)}try{bi(5,e,e.return)}catch(y){Ce(e,e.return,y)}}break;case 1:Mt(t,e),$t(e),r&512&&n!==null&&kr(n,n.return);break;case 5:if(Mt(t,e),$t(e),r&512&&n!==null&&kr(n,n.return),e.flags&32){var i=e.stateNode;try{Fi(i,"")}catch(y){Ce(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&dm(i,s),lu(a,o);var u=lu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?gm(i,d):c==="dangerouslySetInnerHTML"?hm(i,d):c==="children"?Fi(i,d):Mc(i,c,d,u)}switch(a){case"input":ru(i,s);break;case"textarea":fm(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ar(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ar(i,!!s.multiple,s.defaultValue,!0):Ar(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ki]=s}catch(y){Ce(e,e.return,y)}}break;case 6:if(Mt(t,e),$t(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){Ce(e,e.return,y)}}break;case 3:if(Mt(t,e),$t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ui(t.containerInfo)}catch(y){Ce(e,e.return,y)}break;case 4:Mt(t,e),$t(e);break;case 13:Mt(t,e),$t(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ad=Ee())),r&4&&lp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(We=(u=We)||c,Mt(t,e),We=u):Mt(t,e),$t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(F=e,c=e.child;c!==null;){for(d=F=c;F!==null;){switch(p=F,g=p.child,p.tag){case 0:case 11:case 14:case 15:bi(4,p,p.return);break;case 1:kr(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){Ce(r,n,y)}}break;case 5:kr(p,p.return);break;case 22:if(p.memoizedState!==null){cp(d);continue}}g!==null?(g.return=p,F=g):cp(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=mm("display",o))}catch(y){Ce(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Ce(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Mt(t,e),$t(e),r&4&&lp(e);break;case 21:break;default:Mt(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(B0(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fi(i,""),r.flags&=-33);var s=ap(e);$u(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ap(e);Vu(e,a,o);break;default:throw Error(A(161))}}catch(l){Ce(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function I2(e,t,n){F=e,G0(e)}function G0(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$s;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||We;a=$s;var u=We;if($s=o,(We=l)&&!u)for(F=i;F!==null;)o=F,l=o.child,o.tag===22&&o.memoizedState!==null?dp(i):l!==null?(l.return=o,F=l):dp(i);for(;s!==null;)F=s,G0(s),s=s.sibling;F=i,$s=a,We=u}up(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,F=s):up(e)}}function up(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||da(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Wf(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wf(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ui(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}We||t.flags&512&&zu(t)}catch(p){Ce(t,t.return,p)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function cp(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function dp(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{da(4,t)}catch(l){Ce(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ce(t,i,l)}}var s=t.return;try{zu(t)}catch(l){Ce(t,s,l)}break;case 5:var o=t.return;try{zu(t)}catch(l){Ce(t,o,l)}}}catch(l){Ce(t,t.return,l)}if(t===e){F=null;break}var a=t.sibling;if(a!==null){a.return=t.return,F=a;break}F=t.return}}var N2=Math.ceil,zo=fn.ReactCurrentDispatcher,sd=fn.ReactCurrentOwner,kt=fn.ReactCurrentBatchConfig,q=0,Re=null,be=null,Fe=0,lt=0,Tr=Fn(0),Le=0,ts=null,rr=0,fa=0,od=0,Mi=null,tt=null,ad=0,Br=1/0,Zt=null,Vo=!1,Du=null,Ln=null,Ds=!1,Cn=null,$o=0,Ai=0,Fu=null,oo=-1,ao=0;function Ze(){return q&6?Ee():oo!==-1?oo:oo=Ee()}function _n(e){return e.mode&1?q&2&&Fe!==0?Fe&-Fe:y2.transition!==null?(ao===0&&(ao=Mm()),ao):(e=le,e!==0||(e=window.event,e=e===void 0?16:Nm(e.type)),e):1}function Nt(e,t,n,r){if(50<Ai)throw Ai=0,Fu=null,Error(A(185));ps(e,n,r),(!(q&2)||e!==Re)&&(e===Re&&(!(q&2)&&(fa|=n),Le===4&&xn(e,Fe)),st(e,r),n===1&&q===0&&!(t.mode&1)&&(Br=Ee()+500,la&&jn()))}function st(e,t){var n=e.callbackNode;yy(e,t);var r=So(e,e===Re?Fe:0);if(r===0)n!==null&&xf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xf(n),t===1)e.tag===0?v2(fp.bind(null,e)):e0(fp.bind(null,e)),p2(function(){!(q&6)&&jn()}),n=null;else{switch(Am(r)){case 1:n=Rc;break;case 4:n=Pm;break;case 16:n=xo;break;case 536870912:n=bm;break;default:n=xo}n=J0(n,W0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function W0(e,t){if(oo=-1,ao=0,q&6)throw Error(A(327));var n=e.callbackNode;if(Ir()&&e.callbackNode!==n)return null;var r=So(e,e===Re?Fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Do(e,r);else{t=r;var i=q;q|=2;var s=X0();(Re!==e||Fe!==t)&&(Zt=null,Br=Ee()+500,qn(e,t));do try{$2();break}catch(a){Y0(e,a)}while(1);Wc(),zo.current=s,q=i,be!==null?t=0:(Re=null,Fe=0,t=Le)}if(t!==0){if(t===2&&(i=pu(e),i!==0&&(r=i,t=ju(e,i))),t===1)throw n=ts,qn(e,0),xn(e,r),st(e,Ee()),n;if(t===6)xn(e,r);else{if(i=e.current.alternate,!(r&30)&&!z2(i)&&(t=Do(e,r),t===2&&(s=pu(e),s!==0&&(r=s,t=ju(e,s))),t===1))throw n=ts,qn(e,0),xn(e,r),st(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:Wn(e,tt,Zt);break;case 3:if(xn(e,r),(r&130023424)===r&&(t=ad+500-Ee(),10<t)){if(So(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Su(Wn.bind(null,e,tt,Zt),t);break}Wn(e,tt,Zt);break;case 4:if(xn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-It(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*N2(r/1960))-r,10<r){e.timeoutHandle=Su(Wn.bind(null,e,tt,Zt),r);break}Wn(e,tt,Zt);break;case 5:Wn(e,tt,Zt);break;default:throw Error(A(329))}}}return st(e,Ee()),e.callbackNode===n?W0.bind(null,e):null}function ju(e,t){var n=Mi;return e.current.memoizedState.isDehydrated&&(qn(e,t).flags|=256),e=Do(e,t),e!==2&&(t=tt,tt=n,t!==null&&Bu(t)),e}function Bu(e){tt===null?tt=e:tt.push.apply(tt,e)}function z2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Vt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xn(e,t){for(t&=~od,t&=~fa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-It(t),r=1<<n;e[n]=-1,t&=~r}}function fp(e){if(q&6)throw Error(A(327));Ir();var t=So(e,0);if(!(t&1))return st(e,Ee()),null;var n=Do(e,t);if(e.tag!==0&&n===2){var r=pu(e);r!==0&&(t=r,n=ju(e,r))}if(n===1)throw n=ts,qn(e,0),xn(e,t),st(e,Ee()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wn(e,tt,Zt),st(e,Ee()),null}function ld(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Br=Ee()+500,la&&jn())}}function ir(e){Cn!==null&&Cn.tag===0&&!(q&6)&&Ir();var t=q;q|=1;var n=kt.transition,r=le;try{if(kt.transition=null,le=1,e)return e()}finally{le=r,kt.transition=n,q=t,!(q&6)&&jn()}}function ud(){lt=Tr.current,ge(Tr)}function qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,f2(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Hc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Po();break;case 3:Fr(),ge(rt),ge(Xe),qc();break;case 5:Zc(r);break;case 4:Fr();break;case 13:ge(ye);break;case 19:ge(ye);break;case 10:Yc(r.type._context);break;case 22:case 23:ud()}n=n.return}if(Re=e,be=e=On(e.current,null),Fe=lt=t,Le=0,ts=null,od=fa=rr=0,tt=Mi=null,Kn!==null){for(t=0;t<Kn.length;t++)if(n=Kn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Kn=null}return e}function Y0(e,t){do{var n=be;try{if(Wc(),ro.current=No,Io){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Io=!1}if(nr=0,Oe=Ae=we=null,Pi=!1,qi=0,sd.current=null,n===null||n.return===null){Le=1,ts=t,be=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Jf(o);if(g!==null){g.flags&=-257,ep(g,o,a,s,t),g.mode&1&&qf(s,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if(!(t&1)){qf(s,u,t),cd();break e}l=Error(A(426))}}else if(ve&&a.mode&1){var x=Jf(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),ep(x,o,a,s,t),Uc(jr(l,a));break e}}s=l=jr(l,a),Le!==4&&(Le=2),Mi===null?Mi=[s]:Mi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=L0(s,l,t);Gf(s,f);break e;case 1:a=l;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ln===null||!Ln.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=_0(s,a,t);Gf(s,w);break e}}s=s.return}while(s!==null)}Q0(n)}catch(C){t=C,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function X0(){var e=zo.current;return zo.current=No,e===null?No:e}function cd(){(Le===0||Le===3||Le===2)&&(Le=4),Re===null||!(rr&268435455)&&!(fa&268435455)||xn(Re,Fe)}function Do(e,t){var n=q;q|=2;var r=X0();(Re!==e||Fe!==t)&&(Zt=null,qn(e,t));do try{V2();break}catch(i){Y0(e,i)}while(1);if(Wc(),q=n,zo.current=r,be!==null)throw Error(A(261));return Re=null,Fe=0,Le}function V2(){for(;be!==null;)K0(be)}function $2(){for(;be!==null&&!uy();)K0(be)}function K0(e){var t=q0(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?Q0(e):be=t,sd.current=null}function Q0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_2(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,be=null;return}}else if(n=L2(n,t,lt),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Le===0&&(Le=5)}function Wn(e,t,n){var r=le,i=kt.transition;try{kt.transition=null,le=1,D2(e,t,n,r)}finally{kt.transition=i,le=r}return null}function D2(e,t,n,r){do Ir();while(Cn!==null);if(q&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(wy(e,s),e===Re&&(be=Re=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ds||(Ds=!0,J0(xo,function(){return Ir(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kt.transition,kt.transition=null;var o=le;le=1;var a=q;q|=4,sd.current=null,R2(e,n),U0(n,e),s2(wu),Co=!!yu,wu=yu=null,e.current=n,I2(n),cy(),q=a,le=o,kt.transition=s}else e.current=n;if(Ds&&(Ds=!1,Cn=e,$o=i),s=e.pendingLanes,s===0&&(Ln=null),py(n.stateNode),st(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vo)throw Vo=!1,e=Du,Du=null,e;return $o&1&&e.tag!==0&&Ir(),s=e.pendingLanes,s&1?e===Fu?Ai++:(Ai=0,Fu=e):Ai=0,jn(),null}function Ir(){if(Cn!==null){var e=Am($o),t=kt.transition,n=le;try{if(kt.transition=null,le=16>e?16:e,Cn===null)var r=!1;else{if(e=Cn,Cn=null,$o=0,q&6)throw Error(A(331));var i=q;for(q|=4,F=e.current;F!==null;){var s=F,o=s.child;if(F.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(F=u;F!==null;){var c=F;switch(c.tag){case 0:case 11:case 15:bi(8,c,s)}var d=c.child;if(d!==null)d.return=c,F=d;else for(;F!==null;){c=F;var p=c.sibling,g=c.return;if(j0(c),c===u){F=null;break}if(p!==null){p.return=g,F=p;break}F=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}F=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,F=o;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bi(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,F=f;break e}F=s.return}}var h=e.current;for(F=h;F!==null;){o=F;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,F=m;else e:for(o=h;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:da(9,a)}}catch(C){Ce(a,a.return,C)}if(a===o){F=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,F=w;break e}F=a.return}}if(q=i,jn(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(ra,e)}catch{}r=!0}return r}finally{le=n,kt.transition=t}}return!1}function pp(e,t,n){t=jr(n,t),t=L0(e,t,1),e=An(e,t,1),t=Ze(),e!==null&&(ps(e,1,t),st(e,t))}function Ce(e,t,n){if(e.tag===3)pp(e,e,n);else for(;t!==null;){if(t.tag===3){pp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ln===null||!Ln.has(r))){e=jr(n,e),e=_0(t,e,1),t=An(t,e,1),e=Ze(),t!==null&&(ps(t,1,e),st(t,e));break}}t=t.return}}function F2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Fe&n)===n&&(Le===4||Le===3&&(Fe&130023424)===Fe&&500>Ee()-ad?qn(e,0):od|=n),st(e,t)}function Z0(e,t){t===0&&(e.mode&1?(t=As,As<<=1,!(As&130023424)&&(As=4194304)):t=1);var n=Ze();e=un(e,t),e!==null&&(ps(e,t,n),st(e,n))}function j2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Z0(e,n)}function B2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Z0(e,n)}var q0;q0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return nt=!1,A2(e,t,n);nt=!!(e.flags&131072)}else nt=!1,ve&&t.flags&1048576&&t0(t,Ao,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;so(e,t),e=t.pendingProps;var i=Vr(t,Xe.current);Rr(t,n),i=ed(null,t,r,e,i,n);var s=td();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(s=!0,bo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kc(t),i.updater=ua,t.stateNode=i,i._reactInternals=t,Mu(t,r,e,n),t=_u(null,t,r,!0,s,n)):(t.tag=0,ve&&s&&Bc(t),Qe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(so(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=U2(r),e=Lt(r,e),i){case 0:t=Lu(null,t,r,e,n);break e;case 1:t=rp(null,t,r,e,n);break e;case 11:t=tp(null,t,r,e,n);break e;case 14:t=np(null,t,r,Lt(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),Lu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),rp(e,t,r,i,n);case 3:e:{if(N0(t),e===null)throw Error(A(387));r=t.pendingProps,s=t.memoizedState,i=s.element,s0(e,t),Oo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=jr(Error(A(423)),t),t=ip(e,t,r,n,i);break e}else if(r!==i){i=jr(Error(A(424)),t),t=ip(e,t,r,n,i);break e}else for(ct=Mn(t.stateNode.containerInfo.firstChild),dt=t,ve=!0,Ot=null,n=u0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),r===i){t=cn(e,t,n);break e}Qe(e,t,r,n)}t=t.child}return t;case 5:return c0(t),e===null&&Eu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,xu(r,i)?o=null:s!==null&&xu(r,s)&&(t.flags|=32),I0(e,t),Qe(e,t,o,n),t.child;case 6:return e===null&&Eu(t),null;case 13:return z0(e,t,n);case 4:return Qc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dr(t,null,r,n):Qe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),tp(e,t,r,i,n);case 7:return Qe(e,t,t.pendingProps,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,he(Lo,r._currentValue),r._currentValue=o,s!==null)if(Vt(s.value,o)){if(s.children===i.children&&!rt.current){t=cn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=nn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pu(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Pu(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Rr(t,n),i=Tt(i),r=r(i),t.flags|=1,Qe(e,t,r,n),t.child;case 14:return r=t.type,i=Lt(r,t.pendingProps),i=Lt(r.type,i),np(e,t,r,i,n);case 15:return O0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),so(e,t),t.tag=1,it(r)?(e=!0,bo(t)):e=!1,Rr(t,n),a0(t,r,i),Mu(t,r,i,n),_u(null,t,r,!0,e,n);case 19:return V0(e,t,n);case 22:return R0(e,t,n)}throw Error(A(156,t.tag))};function J0(e,t){return Em(e,t)}function H2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,r){return new H2(e,t,n,r)}function dd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function U2(e){if(typeof e=="function")return dd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Lc)return 11;if(e===_c)return 14}return 2}function On(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lo(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")dd(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case hr:return Jn(n.children,i,s,t);case Ac:o=8,i|=8;break;case ql:return e=Ct(12,n,t,i|2),e.elementType=ql,e.lanes=s,e;case Jl:return e=Ct(13,n,t,i),e.elementType=Jl,e.lanes=s,e;case eu:return e=Ct(19,n,t,i),e.elementType=eu,e.lanes=s,e;case lm:return pa(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case om:o=10;break e;case am:o=9;break e;case Lc:o=11;break e;case _c:o=14;break e;case gn:o=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Ct(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Jn(e,t,n,r){return e=Ct(7,e,r,t),e.lanes=n,e}function pa(e,t,n,r){return e=Ct(22,e,r,t),e.elementType=lm,e.lanes=n,e.stateNode={isHidden:!1},e}function kl(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function Tl(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function G2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=il(0),this.expirationTimes=il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fd(e,t,n,r,i,s,o,a,l){return e=new G2(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ct(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kc(s),e}function W2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function eg(e){if(!e)return zn;e=e._reactInternals;e:{if(lr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(it(n))return Jm(e,n,t)}return t}function tg(e,t,n,r,i,s,o,a,l){return e=fd(n,r,!0,e,i,s,o,a,l),e.context=eg(null),n=e.current,r=Ze(),i=_n(n),s=nn(r,i),s.callback=t??null,An(n,s,i),e.current.lanes=i,ps(e,i,r),st(e,r),e}function ha(e,t,n,r){var i=t.current,s=Ze(),o=_n(i);return n=eg(n),t.context===null?t.context=n:t.pendingContext=n,t=nn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=An(i,t,o),e!==null&&(Nt(e,i,o,s),no(e,i,o)),o}function Fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pd(e,t){hp(e,t),(e=e.alternate)&&hp(e,t)}function Y2(){return null}var ng=typeof reportError=="function"?reportError:function(e){console.error(e)};function hd(e){this._internalRoot=e}ma.prototype.render=hd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));ha(e,t,null,null)};ma.prototype.unmount=hd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ir(function(){ha(null,e,null,null)}),t[ln]=null}};function ma(e){this._internalRoot=e}ma.prototype.unstable_scheduleHydration=function(e){if(e){var t=Om();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wn.length&&t!==0&&t<wn[n].priority;n++);wn.splice(n,0,e),n===0&&Im(e)}};function md(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mp(){}function X2(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Fo(o);s.call(u)}}var o=tg(t,r,e,0,null,!1,!1,"",mp);return e._reactRootContainer=o,e[ln]=o.current,Yi(e.nodeType===8?e.parentNode:e),ir(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Fo(l);a.call(u)}}var l=fd(e,0,!1,null,null,!1,!1,"",mp);return e._reactRootContainer=l,e[ln]=l.current,Yi(e.nodeType===8?e.parentNode:e),ir(function(){ha(t,l,n,r)}),l}function va(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Fo(o);a.call(l)}}ha(t,o,e,i)}else o=X2(n,t,e,i,r);return Fo(o)}Lm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yi(t.pendingLanes);n!==0&&(Ic(t,n|1),st(t,Ee()),!(q&6)&&(Br=Ee()+500,jn()))}break;case 13:ir(function(){var r=un(e,1);if(r!==null){var i=Ze();Nt(r,e,1,i)}}),pd(e,1)}};Nc=function(e){if(e.tag===13){var t=un(e,134217728);if(t!==null){var n=Ze();Nt(t,e,134217728,n)}pd(e,134217728)}};_m=function(e){if(e.tag===13){var t=_n(e),n=un(e,t);if(n!==null){var r=Ze();Nt(n,e,t,r)}pd(e,t)}};Om=function(){return le};Rm=function(e,t){var n=le;try{return le=e,t()}finally{le=n}};cu=function(e,t,n){switch(t){case"input":if(ru(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=aa(r);if(!i)throw Error(A(90));cm(r),ru(r,i)}}}break;case"textarea":fm(e,n);break;case"select":t=n.value,t!=null&&Ar(e,!!n.multiple,t,!1)}};wm=ld;xm=ir;var K2={usingClientEntryPoint:!1,Events:[ms,yr,aa,vm,ym,ld]},di={findFiberByHostInstance:Xn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Q2={bundleType:di.bundleType,version:di.version,rendererPackageName:di.rendererPackageName,rendererConfig:di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=km(e),e===null?null:e.stateNode},findFiberByHostInstance:di.findFiberByHostInstance||Y2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fs.isDisabled&&Fs.supportsFiber)try{ra=Fs.inject(Q2),Gt=Fs}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K2;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!md(t))throw Error(A(200));return W2(e,t,null,n)};gt.createRoot=function(e,t){if(!md(e))throw Error(A(299));var n=!1,r="",i=ng;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=fd(e,1,!1,null,null,n,!1,r,i),e[ln]=t.current,Yi(e.nodeType===8?e.parentNode:e),new hd(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=km(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return ir(e)};gt.hydrate=function(e,t,n){if(!ga(t))throw Error(A(200));return va(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!md(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ng;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=tg(t,null,e,1,n??null,i,!1,s,o),e[ln]=t.current,Yi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ma(t)};gt.render=function(e,t,n){if(!ga(t))throw Error(A(200));return va(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!ga(e))throw Error(A(40));return e._reactRootContainer?(ir(function(){va(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1};gt.unstable_batchedUpdates=ld;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ga(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return va(e,t,n,!1,r)};gt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=gt})(Yv);var gp=Kl;Xl.createRoot=gp.createRoot,Xl.hydrateRoot=gp.hydrateRoot;var ns={},Z2={get exports(){return ns},set exports(e){ns=e}},ue={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=Symbol.for("react.element"),vd=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),wa=Symbol.for("react.strict_mode"),xa=Symbol.for("react.profiler"),Sa=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),q2=Symbol.for("react.server_context"),ka=Symbol.for("react.forward_ref"),Ta=Symbol.for("react.suspense"),Ea=Symbol.for("react.suspense_list"),Pa=Symbol.for("react.memo"),ba=Symbol.for("react.lazy"),J2=Symbol.for("react.offscreen"),rg;rg=Symbol.for("react.module.reference");function Pt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case gd:switch(e=e.type,e){case ya:case xa:case wa:case Ta:case Ea:return e;default:switch(e=e&&e.$$typeof,e){case q2:case Ca:case ka:case ba:case Pa:case Sa:return e;default:return t}}case vd:return t}}}ue.ContextConsumer=Ca;ue.ContextProvider=Sa;ue.Element=gd;ue.ForwardRef=ka;ue.Fragment=ya;ue.Lazy=ba;ue.Memo=Pa;ue.Portal=vd;ue.Profiler=xa;ue.StrictMode=wa;ue.Suspense=Ta;ue.SuspenseList=Ea;ue.isAsyncMode=function(){return!1};ue.isConcurrentMode=function(){return!1};ue.isContextConsumer=function(e){return Pt(e)===Ca};ue.isContextProvider=function(e){return Pt(e)===Sa};ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===gd};ue.isForwardRef=function(e){return Pt(e)===ka};ue.isFragment=function(e){return Pt(e)===ya};ue.isLazy=function(e){return Pt(e)===ba};ue.isMemo=function(e){return Pt(e)===Pa};ue.isPortal=function(e){return Pt(e)===vd};ue.isProfiler=function(e){return Pt(e)===xa};ue.isStrictMode=function(e){return Pt(e)===wa};ue.isSuspense=function(e){return Pt(e)===Ta};ue.isSuspenseList=function(e){return Pt(e)===Ea};ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ya||e===xa||e===wa||e===Ta||e===Ea||e===J2||typeof e=="object"&&e!==null&&(e.$$typeof===ba||e.$$typeof===Pa||e.$$typeof===Sa||e.$$typeof===Ca||e.$$typeof===ka||e.$$typeof===rg||e.getModuleId!==void 0)};ue.typeOf=Pt;(function(e){e.exports=ue})(Z2);function ew(e){function t(I,z,D,G,P){for(var Z=0,N=0,Se=0,re=0,ae,K,Ne=0,et=0,J,Be=J=ae=0,ie=0,ze=0,ni=0,Ve=0,ks=D.length,ri=ks-1,bt,W="",Te="",Za="",qa="",pn;ie<ks;){if(K=D.charCodeAt(ie),ie===ri&&N+re+Se+Z!==0&&(N!==0&&(K=N===47?10:47),re=Se=Z=0,ks++,ri++),N+re+Se+Z===0){if(ie===ri&&(0<ze&&(W=W.replace(p,"")),0<W.trim().length)){switch(K){case 32:case 9:case 59:case 13:case 10:break;default:W+=D.charAt(ie)}K=59}switch(K){case 123:for(W=W.trim(),ae=W.charCodeAt(0),J=1,Ve=++ie;ie<ks;){switch(K=D.charCodeAt(ie)){case 123:J++;break;case 125:J--;break;case 47:switch(K=D.charCodeAt(ie+1)){case 42:case 47:e:{for(Be=ie+1;Be<ri;++Be)switch(D.charCodeAt(Be)){case 47:if(K===42&&D.charCodeAt(Be-1)===42&&ie+2!==Be){ie=Be+1;break e}break;case 10:if(K===47){ie=Be+1;break e}}ie=Be}}break;case 91:K++;case 40:K++;case 34:case 39:for(;ie++<ri&&D.charCodeAt(ie)!==K;);}if(J===0)break;ie++}switch(J=D.substring(Ve,ie),ae===0&&(ae=(W=W.replace(d,"").trim()).charCodeAt(0)),ae){case 64:switch(0<ze&&(W=W.replace(p,"")),K=W.charCodeAt(1),K){case 100:case 109:case 115:case 45:ze=z;break;default:ze=oe}if(J=t(z,ze,J,K,P+1),Ve=J.length,0<R&&(ze=n(oe,W,ni),pn=a(3,J,ze,z,j,L,Ve,K,P,G),W=ze.join(""),pn!==void 0&&(Ve=(J=pn.trim()).length)===0&&(K=0,J="")),0<Ve)switch(K){case 115:W=W.replace(k,o);case 100:case 109:case 45:J=W+"{"+J+"}";break;case 107:W=W.replace(h,"$1 $2"),J=W+"{"+J+"}",J=X===1||X===2&&s("@"+J,3)?"@-webkit-"+J+"@"+J:"@"+J;break;default:J=W+J,G===112&&(J=(Te+=J,""))}else J="";break;default:J=t(z,n(z,W,ni),J,G,P+1)}Za+=J,J=ni=ze=Be=ae=0,W="",K=D.charCodeAt(++ie);break;case 125:case 59:if(W=(0<ze?W.replace(p,""):W).trim(),1<(Ve=W.length))switch(Be===0&&(ae=W.charCodeAt(0),ae===45||96<ae&&123>ae)&&(Ve=(W=W.replace(" ",":")).length),0<R&&(pn=a(1,W,z,I,j,L,Te.length,G,P,G))!==void 0&&(Ve=(W=pn.trim()).length)===0&&(W="\0\0"),ae=W.charCodeAt(0),K=W.charCodeAt(1),ae){case 0:break;case 64:if(K===105||K===99){qa+=W+D.charAt(ie);break}default:W.charCodeAt(Ve-1)!==58&&(Te+=i(W,ae,K,W.charCodeAt(2)))}ni=ze=Be=ae=0,W="",K=D.charCodeAt(++ie)}}switch(K){case 13:case 10:N===47?N=0:1+ae===0&&G!==107&&0<W.length&&(ze=1,W+="\0"),0<R*B&&a(0,W,z,I,j,L,Te.length,G,P,G),L=1,j++;break;case 59:case 125:if(N+re+Se+Z===0){L++;break}default:switch(L++,bt=D.charAt(ie),K){case 9:case 32:if(re+Z+N===0)switch(Ne){case 44:case 58:case 9:case 32:bt="";break;default:K!==32&&(bt=" ")}break;case 0:bt="\\0";break;case 12:bt="\\f";break;case 11:bt="\\v";break;case 38:re+N+Z===0&&(ze=ni=1,bt="\f"+bt);break;case 108:if(re+N+Z+Y===0&&0<Be)switch(ie-Be){case 2:Ne===112&&D.charCodeAt(ie-3)===58&&(Y=Ne);case 8:et===111&&(Y=et)}break;case 58:re+N+Z===0&&(Be=ie);break;case 44:N+Se+re+Z===0&&(ze=1,bt+="\r");break;case 34:case 39:N===0&&(re=re===K?0:re===0?K:re);break;case 91:re+N+Se===0&&Z++;break;case 93:re+N+Se===0&&Z--;break;case 41:re+N+Z===0&&Se--;break;case 40:if(re+N+Z===0){if(ae===0)switch(2*Ne+3*et){case 533:break;default:ae=1}Se++}break;case 64:N+Se+re+Z+Be+J===0&&(J=1);break;case 42:case 47:if(!(0<re+Z+Se))switch(N){case 0:switch(2*K+3*D.charCodeAt(ie+1)){case 235:N=47;break;case 220:Ve=ie,N=42}break;case 42:K===47&&Ne===42&&Ve+2!==ie&&(D.charCodeAt(Ve+2)===33&&(Te+=D.substring(Ve,ie+1)),bt="",N=0)}}N===0&&(W+=bt)}et=Ne,Ne=K,ie++}if(Ve=Te.length,0<Ve){if(ze=z,0<R&&(pn=a(2,Te,ze,I,j,L,Ve,G,P,G),pn!==void 0&&(Te=pn).length===0))return qa+Te+Za;if(Te=ze.join(",")+"{"+Te+"}",X*Y!==0){switch(X!==2||s(Te,2)||(Y=0),Y){case 111:Te=Te.replace(w,":-moz-$1")+Te;break;case 112:Te=Te.replace(m,"::-webkit-input-$1")+Te.replace(m,"::-moz-$1")+Te.replace(m,":-ms-input-$1")+Te}Y=0}}return qa+Te+Za}function n(I,z,D){var G=z.trim().split(x);z=G;var P=G.length,Z=I.length;switch(Z){case 0:case 1:var N=0;for(I=Z===0?"":I[0]+" ";N<P;++N)z[N]=r(I,z[N],D).trim();break;default:var Se=N=0;for(z=[];N<P;++N)for(var re=0;re<Z;++re)z[Se++]=r(I[re]+" ",G[N],D).trim()}return z}function r(I,z,D){var G=z.charCodeAt(0);switch(33>G&&(G=(z=z.trim()).charCodeAt(0)),G){case 38:return z.replace(f,"$1"+I.trim());case 58:return I.trim()+z.replace(f,"$1"+I.trim());default:if(0<1*D&&0<z.indexOf("\f"))return z.replace(f,(I.charCodeAt(0)===58?"":"$1")+I.trim())}return I+z}function i(I,z,D,G){var P=I+";",Z=2*z+3*D+4*G;if(Z===944){I=P.indexOf(":",9)+1;var N=P.substring(I,P.length-1).trim();return N=P.substring(0,I).trim()+N+";",X===1||X===2&&s(N,1)?"-webkit-"+N+N:N}if(X===0||X===2&&!s(P,1))return P;switch(Z){case 1015:return P.charCodeAt(10)===97?"-webkit-"+P+P:P;case 951:return P.charCodeAt(3)===116?"-webkit-"+P+P:P;case 963:return P.charCodeAt(5)===110?"-webkit-"+P+P:P;case 1009:if(P.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+P+P;case 978:return"-webkit-"+P+"-moz-"+P+P;case 1019:case 983:return"-webkit-"+P+"-moz-"+P+"-ms-"+P+P;case 883:if(P.charCodeAt(8)===45)return"-webkit-"+P+P;if(0<P.indexOf("image-set(",11))return P.replace(M,"$1-webkit-$2")+P;break;case 932:if(P.charCodeAt(4)===45)switch(P.charCodeAt(5)){case 103:return"-webkit-box-"+P.replace("-grow","")+"-webkit-"+P+"-ms-"+P.replace("grow","positive")+P;case 115:return"-webkit-"+P+"-ms-"+P.replace("shrink","negative")+P;case 98:return"-webkit-"+P+"-ms-"+P.replace("basis","preferred-size")+P}return"-webkit-"+P+"-ms-"+P+P;case 964:return"-webkit-"+P+"-ms-flex-"+P+P;case 1023:if(P.charCodeAt(8)!==99)break;return N=P.substring(P.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+P+"-ms-flex-pack"+N+P;case 1005:return v.test(P)?P.replace(g,":-webkit-")+P.replace(g,":-moz-")+P:P;case 1e3:switch(N=P.substring(13).trim(),z=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(z)){case 226:N=P.replace(C,"tb");break;case 232:N=P.replace(C,"tb-rl");break;case 220:N=P.replace(C,"lr");break;default:return P}return"-webkit-"+P+"-ms-"+N+P;case 1017:if(P.indexOf("sticky",9)===-1)break;case 975:switch(z=(P=I).length-10,N=(P.charCodeAt(z)===33?P.substring(0,z):P).substring(I.indexOf(":",7)+1).trim(),Z=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:P=P.replace(N,"-webkit-"+N)+";"+P;break;case 207:case 102:P=P.replace(N,"-webkit-"+(102<Z?"inline-":"")+"box")+";"+P.replace(N,"-webkit-"+N)+";"+P.replace(N,"-ms-"+N+"box")+";"+P}return P+";";case 938:if(P.charCodeAt(5)===45)switch(P.charCodeAt(6)){case 105:return N=P.replace("-items",""),"-webkit-"+P+"-webkit-box-"+N+"-ms-flex-"+N+P;case 115:return"-webkit-"+P+"-ms-flex-item-"+P.replace(b,"")+P;default:return"-webkit-"+P+"-ms-flex-line-pack"+P.replace("align-content","").replace(b,"")+P}break;case 973:case 989:if(P.charCodeAt(3)!==45||P.charCodeAt(4)===122)break;case 931:case 953:if($.test(I)===!0)return(N=I.substring(I.indexOf(":")+1)).charCodeAt(0)===115?i(I.replace("stretch","fill-available"),z,D,G).replace(":fill-available",":stretch"):P.replace(N,"-webkit-"+N)+P.replace(N,"-moz-"+N.replace("fill-",""))+P;break;case 962:if(P="-webkit-"+P+(P.charCodeAt(5)===102?"-ms-"+P:"")+P,D+G===211&&P.charCodeAt(13)===105&&0<P.indexOf("transform",10))return P.substring(0,P.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+P}return P}function s(I,z){var D=I.indexOf(z===1?":":"{"),G=I.substring(0,z!==3?D:10);return D=I.substring(D+1,I.length-1),V(z!==2?G:G.replace(_,"$1"),D,z)}function o(I,z){var D=i(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return D!==z+";"?D.replace(E," or ($1)").substring(4):"("+z+")"}function a(I,z,D,G,P,Z,N,Se,re,ae){for(var K=0,Ne=z,et;K<R;++K)switch(et=fe[K].call(c,I,Ne,D,G,P,Z,N,Se,re,ae)){case void 0:case!1:case!0:case null:break;default:Ne=et}if(Ne!==z)return Ne}function l(I){switch(I){case void 0:case null:R=fe.length=0;break;default:if(typeof I=="function")fe[R++]=I;else if(typeof I=="object")for(var z=0,D=I.length;z<D;++z)l(I[z]);else B=!!I|0}return l}function u(I){return I=I.prefix,I!==void 0&&(V=null,I?typeof I!="function"?X=1:(X=2,V=I):X=0),u}function c(I,z){var D=I;if(33>D.charCodeAt(0)&&(D=D.trim()),ne=D,D=[ne],0<R){var G=a(-1,z,D,D,j,L,0,0,0,0);G!==void 0&&typeof G=="string"&&(z=G)}var P=t(oe,D,z,0,0);return 0<R&&(G=a(-2,P,D,D,j,L,P.length,0,0,0),G!==void 0&&(P=G)),ne="",Y=0,L=j=1,P}var d=/^\0+/g,p=/[\0\r\f]/g,g=/: */g,v=/zoo|gra/,y=/([,: ])(transform)/g,x=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,w=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,b=/-self|flex-/g,_=/[^]*?(:[rp][el]a[\w-]+)[^]*/,$=/stretch|:\s*\w+\-(?:conte|avail)/,M=/([^-])(image-set\()/,L=1,j=1,Y=0,X=1,oe=[],fe=[],R=0,V=null,B=0,ne="";return c.use=l,c.set=u,e!==void 0&&u(e),c}var tw={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ig(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var nw=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,vp=ig(function(e){return nw.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Hu={},rw={get exports(){return Hu},set exports(e){Hu=e}},ce={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=typeof Symbol=="function"&&Symbol.for,yd=Ie?Symbol.for("react.element"):60103,wd=Ie?Symbol.for("react.portal"):60106,Ma=Ie?Symbol.for("react.fragment"):60107,Aa=Ie?Symbol.for("react.strict_mode"):60108,La=Ie?Symbol.for("react.profiler"):60114,_a=Ie?Symbol.for("react.provider"):60109,Oa=Ie?Symbol.for("react.context"):60110,xd=Ie?Symbol.for("react.async_mode"):60111,Ra=Ie?Symbol.for("react.concurrent_mode"):60111,Ia=Ie?Symbol.for("react.forward_ref"):60112,Na=Ie?Symbol.for("react.suspense"):60113,iw=Ie?Symbol.for("react.suspense_list"):60120,za=Ie?Symbol.for("react.memo"):60115,Va=Ie?Symbol.for("react.lazy"):60116,sw=Ie?Symbol.for("react.block"):60121,ow=Ie?Symbol.for("react.fundamental"):60117,aw=Ie?Symbol.for("react.responder"):60118,lw=Ie?Symbol.for("react.scope"):60119;function yt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case yd:switch(e=e.type,e){case xd:case Ra:case Ma:case La:case Aa:case Na:return e;default:switch(e=e&&e.$$typeof,e){case Oa:case Ia:case Va:case za:case _a:return e;default:return t}}case wd:return t}}}function sg(e){return yt(e)===Ra}ce.AsyncMode=xd;ce.ConcurrentMode=Ra;ce.ContextConsumer=Oa;ce.ContextProvider=_a;ce.Element=yd;ce.ForwardRef=Ia;ce.Fragment=Ma;ce.Lazy=Va;ce.Memo=za;ce.Portal=wd;ce.Profiler=La;ce.StrictMode=Aa;ce.Suspense=Na;ce.isAsyncMode=function(e){return sg(e)||yt(e)===xd};ce.isConcurrentMode=sg;ce.isContextConsumer=function(e){return yt(e)===Oa};ce.isContextProvider=function(e){return yt(e)===_a};ce.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===yd};ce.isForwardRef=function(e){return yt(e)===Ia};ce.isFragment=function(e){return yt(e)===Ma};ce.isLazy=function(e){return yt(e)===Va};ce.isMemo=function(e){return yt(e)===za};ce.isPortal=function(e){return yt(e)===wd};ce.isProfiler=function(e){return yt(e)===La};ce.isStrictMode=function(e){return yt(e)===Aa};ce.isSuspense=function(e){return yt(e)===Na};ce.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ma||e===Ra||e===La||e===Aa||e===Na||e===iw||typeof e=="object"&&e!==null&&(e.$$typeof===Va||e.$$typeof===za||e.$$typeof===_a||e.$$typeof===Oa||e.$$typeof===Ia||e.$$typeof===ow||e.$$typeof===aw||e.$$typeof===lw||e.$$typeof===sw)};ce.typeOf=yt;(function(e){e.exports=ce})(rw);var Sd=Hu,uw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},og={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Cd={};Cd[Sd.ForwardRef]=dw;Cd[Sd.Memo]=og;function yp(e){return Sd.isMemo(e)?og:Cd[e.$$typeof]||uw}var fw=Object.defineProperty,pw=Object.getOwnPropertyNames,wp=Object.getOwnPropertySymbols,hw=Object.getOwnPropertyDescriptor,mw=Object.getPrototypeOf,xp=Object.prototype;function ag(e,t,n){if(typeof t!="string"){if(xp){var r=mw(t);r&&r!==xp&&ag(e,r,n)}var i=pw(t);wp&&(i=i.concat(wp(t)));for(var s=yp(e),o=yp(t),a=0;a<i.length;++a){var l=i[a];if(!cw[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=hw(t,l);try{fw(e,l,u)}catch{}}}}return e}var gw=ag;function Ut(){return(Ut=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Sp=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Uu=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ns.typeOf(e)},jo=Object.freeze([]),Rn=Object.freeze({});function Hr(e){return typeof e=="function"}function Cp(e){return e.displayName||e.name||"Component"}function kd(e){return e&&typeof e.styledComponentId=="string"}var Ur=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Td=typeof window<"u"&&"HTMLElement"in window,vw=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1);function sr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var yw=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&sr(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),uo=new Map,Bo=new Map,Li=1,js=function(e){if(uo.has(e))return uo.get(e);for(;Bo.has(Li);)Li++;var t=Li++;return uo.set(e,t),Bo.set(t,e),t},ww=function(e){return Bo.get(e)},xw=function(e,t){t>=Li&&(Li=t+1),uo.set(e,t),Bo.set(t,e)},Sw="style["+Ur+'][data-styled-version="5.3.6"]',Cw=new RegExp("^"+Ur+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),kw=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},Tw=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(Cw);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(xw(u,l),kw(e,u,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},Ew=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},lg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Ur))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ur,"active"),r.setAttribute("data-styled-version","5.3.6");var o=Ew();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Pw=function(){function e(n){var r=this.element=lg(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}sr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),bw=function(){function e(n){var r=this.element=lg(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Mw=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),kp=Td,Aw={isServer:!Td,useCSSOMInjection:!vw},ug=function(){function e(n,r,i){n===void 0&&(n=Rn),r===void 0&&(r={}),this.options=Ut({},Aw,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Td&&kp&&(kp=!1,function(s){for(var o=document.querySelectorAll(Sw),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ur)!=="active"&&(Tw(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return js(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ut({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new Mw(o):s?new Pw(o):new bw(o),new yw(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(js(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(js(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(js(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=ww(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Ur+".g"+o+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(p){p.length>0&&(d+=p+",")}),s+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},e}(),Lw=/(a)(d)/gi,Tp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Gu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Tp(t%52)+n;return(Tp(t%52)+n).replace(Lw,"$1-$2")}var Er=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},cg=function(e){return Er(5381,e)};function _w(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Hr(n)&&!kd(n))return!1}return!0}var Ow=cg("5.3.6"),Rw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&_w(t),this.componentId=n,this.baseHash=Er(Ow,n),this.baseStyle=r,ug.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Gr(this.rules,t,n,r).join(""),a=Gu(Er(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Er(this.baseHash,r.hash),d="",p=0;p<u;p++){var g=this.rules[p];if(typeof g=="string")d+=g;else if(g){var v=Gr(g,t,n,r),y=Array.isArray(v)?v.join(""):v;c=Er(c,y+p),d+=y}}if(d){var x=Gu(c>>>0);if(!n.hasNameForId(i,x)){var f=r(d,"."+x,void 0,i);n.insertRules(i,x,f)}s.push(x)}}return s.join(" ")},e}(),Iw=/^\s*\/\/.*$/gm,Nw=[":","[",".","#"];function zw(e){var t,n,r,i,s=e===void 0?Rn:e,o=s.options,a=o===void 0?Rn:o,l=s.plugins,u=l===void 0?jo:l,c=new ew(a),d=[],p=function(y){function x(f){if(f)try{y(f+"}")}catch{}}return function(f,h,m,w,C,k,E,b,_,$){switch(f){case 1:if(_===0&&h.charCodeAt(0)===64)return y(h+";"),"";break;case 2:if(b===0)return h+"/*|*/";break;case 3:switch(b){case 102:case 112:return y(m[0]+h),"";default:return h+($===0?"/*|*/":"")}case-2:h.split("/*|*/}").forEach(x)}}}(function(y){d.push(y)}),g=function(y,x,f){return x===0&&Nw.indexOf(f[n.length])!==-1||f.match(i)?y:"."+t};function v(y,x,f,h){h===void 0&&(h="&");var m=y.replace(Iw,""),w=x&&f?f+" "+x+" { "+m+" }":m;return t=h,n=x,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(f||!x?"":x,w)}return c.use([].concat(u,[function(y,x,f){y===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,g))},p,function(y){if(y===-2){var x=d;return d=[],x}}])),v.hash=u.length?u.reduce(function(y,x){return x.name||sr(15),Er(y,x.name)},5381).toString():"",v}var dg=de.createContext();dg.Consumer;var fg=de.createContext(),Vw=(fg.Consumer,new ug),Wu=zw();function $w(){return T.useContext(dg)||Vw}function Dw(){return T.useContext(fg)||Wu}var Fw=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Wu);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return sr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Wu),this.name+t.hash},e}(),jw=/([A-Z])/,Bw=/([A-Z])/g,Hw=/^ms-/,Uw=function(e){return"-"+e.toLowerCase()};function Ep(e){return jw.test(e)?e.replace(Bw,Uw).replace(Hw,"-ms-"):e}var Pp=function(e){return e==null||e===!1||e===""};function Gr(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,a=e.length;o<a;o+=1)(i=Gr(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Pp(e))return"";if(kd(e))return"."+e.styledComponentId;if(Hr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return Gr(l,t,n,r)}var u;return e instanceof Fw?n?(e.inject(n,r),e.getName(r)):e:Uu(e)?function c(d,p){var g,v,y=[];for(var x in d)d.hasOwnProperty(x)&&!Pp(d[x])&&(Array.isArray(d[x])&&d[x].isCss||Hr(d[x])?y.push(Ep(x)+":",d[x],";"):Uu(d[x])?y.push.apply(y,c(d[x],x)):y.push(Ep(x)+": "+(g=x,(v=d[x])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||g in tw?String(v).trim():v+"px")+";"));return p?[p+" {"].concat(y,["}"]):y}(e):e.toString()}var bp=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Gw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Hr(e)||Uu(e)?bp(Gr(Sp(jo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:bp(Gr(Sp(e,n)))}var Ww=function(e,t,n){return n===void 0&&(n=Rn),e.theme!==n.theme&&e.theme||t||n.theme},Yw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xw=/(^-|-$)/g;function El(e){return e.replace(Yw,"-").replace(Xw,"")}var Kw=function(e){return Gu(cg(e)>>>0)};function Bs(e){return typeof e=="string"&&!0}var Yu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Qw=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Zw(e,t,n){var r=e[n];Yu(t)&&Yu(r)?pg(r,t):e[n]=t}function pg(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Yu(o))for(var a in o)Qw(a)&&Zw(e,o[a],a)}return e}var Ho=de.createContext();Ho.Consumer;function qw(e){var t=T.useContext(Ho),n=T.useMemo(function(){return function(r,i){if(!r)return sr(14);if(Hr(r)){var s=r(i);return s}return Array.isArray(r)||typeof r!="object"?sr(8):i?Ut({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?de.createElement(Ho.Provider,{value:n},e.children):null}var Pl={};function hg(e,t,n){var r=kd(e),i=!Bs(e),s=t.attrs,o=s===void 0?jo:s,a=t.componentId,l=a===void 0?function(h,m){var w=typeof h!="string"?"sc":El(h);Pl[w]=(Pl[w]||0)+1;var C=w+"-"+Kw("5.3.6"+w+Pl[w]);return m?m+"-"+C:C}(t.displayName,t.parentComponentId):a,u=t.displayName,c=u===void 0?function(h){return Bs(h)?"styled."+h:"Styled("+Cp(h)+")"}(e):u,d=t.displayName&&t.componentId?El(t.displayName)+"-"+t.componentId:t.componentId||l,p=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,g=t.shouldForwardProp;r&&e.shouldForwardProp&&(g=t.shouldForwardProp?function(h,m,w){return e.shouldForwardProp(h,m,w)&&t.shouldForwardProp(h,m,w)}:e.shouldForwardProp);var v,y=new Rw(n,d,r?e.componentStyle:void 0),x=y.isStatic&&o.length===0,f=function(h,m){return function(w,C,k,E){var b=w.attrs,_=w.componentStyle,$=w.defaultProps,M=w.foldedComponentIds,L=w.shouldForwardProp,j=w.styledComponentId,Y=w.target,X=function(G,P,Z){G===void 0&&(G=Rn);var N=Ut({},P,{theme:G}),Se={};return Z.forEach(function(re){var ae,K,Ne,et=re;for(ae in Hr(et)&&(et=et(N)),et)N[ae]=Se[ae]=ae==="className"?(K=Se[ae],Ne=et[ae],K&&Ne?K+" "+Ne:K||Ne):et[ae]}),[N,Se]}(Ww(C,T.useContext(Ho),$)||Rn,C,b),oe=X[0],fe=X[1],R=function(G,P,Z,N){var Se=$w(),re=Dw(),ae=P?G.generateAndInjectStyles(Rn,Se,re):G.generateAndInjectStyles(Z,Se,re);return ae}(_,E,oe),V=k,B=fe.$as||C.$as||fe.as||C.as||Y,ne=Bs(B),I=fe!==C?Ut({},C,{},fe):C,z={};for(var D in I)D[0]!=="$"&&D!=="as"&&(D==="forwardedAs"?z.as=I[D]:(L?L(D,vp,B):!ne||vp(D))&&(z[D]=I[D]));return C.style&&fe.style!==C.style&&(z.style=Ut({},C.style,{},fe.style)),z.className=Array.prototype.concat(M,j,R!==j?R:null,C.className,fe.className).filter(Boolean).join(" "),z.ref=V,T.createElement(B,z)}(v,h,m,x)};return f.displayName=c,(v=de.forwardRef(f)).attrs=p,v.componentStyle=y,v.displayName=c,v.shouldForwardProp=g,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):jo,v.styledComponentId=d,v.target=r?e.target:e,v.withComponent=function(h){var m=t.componentId,w=function(k,E){if(k==null)return{};var b,_,$={},M=Object.keys(k);for(_=0;_<M.length;_++)b=M[_],E.indexOf(b)>=0||($[b]=k[b]);return $}(t,["componentId"]),C=m&&m+"-"+(Bs(h)?h:El(Cp(h)));return hg(h,Ut({},w,{attrs:p,componentId:C}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?pg({},e.defaultProps,h):h}}),v.toString=function(){return"."+v.styledComponentId},i&&gw(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Xu=function(e){return function t(n,r,i){if(i===void 0&&(i=Rn),!ns.isValidElementType(r))return sr(1,String(r));var s=function(){return n(r,i,Gw.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,Ut({},i,{},o))},s.attrs=function(o){return t(n,r,Ut({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(hg,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Xu[e]=Xu(e)});const te=Xu,Jw={bg:"#050505",cardBg:"#242424",cyan:"#1B9AAA",grey:"#B1B1B1",fg:"#F8F8F8"},ex={bg:"#f6f6f6",cardBg:"#e4e4e4",cyan:"#1B9AAA",grey:"#5d5c5c",fg:"#353535"};function tx({children:e,isDarkMode:t}){return S(qw,{theme:t?Jw:ex,children:e})}const ht=te.div`
  margin: 0 auto;
  width: 1320px;

  @media screen and (max-width: 1399.98px) {
    width: 1140px;
  }

  @media screen and (max-width: 1199.98px) {
    width: 960px;
  }

  @media screen and (max-width: 991.98px) {
    width: 720px;
  }

  @media screen and (max-width: 767.98px) {
    width: 540px;
  }

  @media screen and (max-width: 575.98px) {
    width: calc(100% - 32px);
  }
`,nx=()=>H("svg",{width:"90",height:"36",viewBox:"0 0 90 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"logo",children:[S("mask",{id:"mask0_68_511",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"90",height:"36",children:S("rect",{width:"90",height:"36",fill:"#D9D9D9"})}),H("g",{mask:"url(#mask0_68_511)",children:[S("path",{d:"M51.0828 5.07007L41.8854 31H33.9808L24.7834 5.07007H31.506L37.9331 24.6468L44.3971 5.07007H51.0828Z",fill:"#1B9AAA"}),S("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M75.0882 1L71.0001 4.67931L82.8444 17.8397L71.0001 31L75.0882 34.6793L90.2439 17.8397L75.0882 1Z",fill:"currentColor"}),S("path",{d:"M66.894 -4L57.0923 37.5842H51.0576L60.8593 -4H66.894Z",fill:"#1B9AAA"}),S("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.456 1.1604L19.5441 4.83971L7.69979 18.0001L19.5441 31.1604L15.456 34.8397L0.300293 18.0001L15.456 1.1604Z",fill:"currentColor"})]})]}),rx=te.span`
  position: relative;
  width: 100%;
  height: 100%;
  display: inline-block;

  span {
    --span-height: 3.5px;
    width: 100%;
    left: 0;
    height: var(--span-height);
    position: absolute;
    display: inline-block;
    background-color: ${({theme:e})=>e.cyan};
    transition: all 0.5s;

    &:nth-child(1) {
      top: 0;
      transform-origin: 1.75px 0;
    }
    &:nth-child(2) {
      top: calc(50% - var(--span-height) / 2);
      transform: rotate(0deg) scaleY(1);
    }
    &:nth-child(3) {
      bottom: 0;
      transform-origin: var(--span-height) 0;
    }
  }

  &.isOpen {
    span {
      &:nth-child(1) {
        transform: rotate(45deg) scaleX(1.5);
      }
      &:nth-child(2) {
        transform: rotate(45deg);
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) scaleX(1.5);
      }
    }
  }
`,ix=({isOpen:e})=>H(rx,{isOpen:e,className:e?"isOpen":null,children:[S("span",{}),S("span",{}),S("span",{})]}),sx=te.button`
  color: ${({theme:e})=>e.cyan};
  background-color: transparent;
  border: none;
  transition: color var(--duration);
  cursor: pointer;
  display: none;
  width: 2em;
  height: 2em;

  @media screen and (max-width: 991.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 575.98px) {
    width: 32px;
    height: 32px;
  }

  @media (hover: hover) {
    &:hover {
      color: ${({theme:e})=>e.fg};
    }
  }
`,ox=({isOpen:e,toggleMenu:t})=>S(sx,{className:"burger",onClick:t,children:S(ix,{isOpen:e})}),ax=te.h1`
  font-weight: 700;
  font-size: 88px;
  line-height: 96px;

  /* @media screen and (max-width: 991.98px) {
    font-size: 56px;
    line-height: 64px;
  }

  @media screen and (max-width: 575.98px) {
    font-size: 48px;
    line-height: 54px;
  } */
`,mg=te.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
`,Ku=te.h3`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
`,Ed=te.h4`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
`,Rt=te.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`,Wr=te.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`,lx=te.ul`
  display: grid;
  grid-auto-flow: ${({isMobile:e})=>e?"row":"column"};
  align-items: ${({isMobile:e})=>e?"center":"stretch"};
  gap: ${({isMobile:e})=>e?"5vh":"3em"};
  justify-content: center;
  height: 100%;

  li {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  a {
    color: ${({theme:e})=>e.fg};
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: center;
    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0%;
      height: 0.1em;
      background-color: ${({theme:e})=>e.cyan};
      pointer-events: none;
      user-select: none;
      transition: width var(--duration);
    }
    &:hover:after {
      width: 100%;
    }
  }
`,gg=({isMobile:e,toggleMenu:t})=>{const n=e?Ku:Rt,r=()=>{e&&t()};return H(lx,{isMobile:e,children:[S("li",{children:S(n,{as:"a",href:"#home",onClick:r,children:"Home"})}),S("li",{children:S(n,{as:"a",href:"#about",onClick:r,children:"About"})}),S("li",{children:S(n,{as:"a",href:"#projects",onClick:r,children:"Projects"})}),S("li",{children:S(n,{as:"a",href:"#reviews",onClick:r,children:"Reviews"})}),S("li",{children:S(n,{as:"a",href:"#contact",onClick:r,children:"Contact"})})]})},ux=()=>S("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"50.000000pt",height:"50.000000pt",viewBox:"0 0 50.000000 50.000000",preserveAspectRatio:"xMidYMid meet",className:"sun",children:S("g",{transform:"translate(0.000000,50.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none",children:S("path",{d:`M213 455 c-30 -49 -32 -50 -122 -28 -21 5 -23 3 -18 -18 22 -90 21
-92 -28 -122 -25 -16 -45 -32 -45 -37 0 -4 21 -20 46 -35 49 -29 50 -30 27
-124 -5 -21 -3 -23 18 -18 90 22 92 21 122 -28 16 -25 33 -45 37 -45 4 0 21
20 37 45 30 49 32 50 122 28 21 -5 23 -3 18 18 -22 90 -21 92 28 122 25 16 45
33 45 37 0 4 -20 21 -45 37 -49 30 -50 32 -28 122 5 21 3 23 -18 18 -90 -22
-92 -21 -122 28 -16 25 -33 45 -37 45 -4 0 -21 -20 -37 -45z m121 -124 c26
-27 31 -39 31 -81 0 -43 -5 -54 -33 -82 -47 -48 -117 -48 -164 0 -28 28 -33
39 -33 81 0 52 25 92 70 112 37 16 96 3 129 -30z`})})}),cx=()=>S("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"48.000000pt",height:"48.000000pt",viewBox:"0 0 48.000000 48.000000",preserveAspectRatio:"xMidYMid meet",className:"moon",children:S("g",{transform:"translate(0.000000,48.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none",children:S("path",{d:`M182 429 c-47 -14 -109 -80 -123 -131 -54 -201 186 -343 332 -197 46
46 49 64 12 72 -81 16 -148 106 -140 187 2 25 6 52 8 60 5 19 -41 23 -89 9z`})})}),dx=te.label`
  position: relative;
  display: inline-block;
  width: 4em;
  height: 2em;
  /* border: solid 1px #35353533; */
  background-color: ${({theme:e})=>e.cardBg};
  border-radius: 1em;
  --size: 1.25em;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow var(--duration);
  box-sizing: content-box;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  @media screen and (hover: hover) {
    &:hover {
      box-shadow: 0 0 4px #05050533;
    }
  }

  .slider {
    box-shadow: 0 0 4px #05050533;
    background-color: ${({theme:e})=>e.bg};

    width: var(--size);
    height: var(--size);
    top: 0.375em;
    left: 0.375em;
    position: relative;
    border-radius: 50%;
    display: inline-block;
    transition: all var(--duration-long);
    z-index: 1;
  }

  input:checked ~ .slider {
    transform: translateX(2em);
    background-color: ${({theme:e})=>e.fg};
  }

  input:checked ~ .moon {
    opacity: 1;
    left: 0.375em;
  }

  input:checked ~ .sun {
    opacity: 0;
    right: -1em;
  }

  svg {
    width: var(--size);
    height: var(--size);
    position: absolute;
    top: 0.375em;
    color: ${({theme:e})=>e.cyan};
    transition: all var(--duration-long);
  }

  .sun {
    right: 0.375em;
    opacity: 1;
  }
  .moon {
    left: -1em;
    opacity: 0;
  }
`;function fx({isDarkMode:e,toggleDarkMode:t}){return H(dx,{children:[S("input",{type:"checkbox",checked:e,onChange:t,name:"",id:""}),S("span",{className:"slider"}),S(cx,{}),S(ux,{})]})}const px=te.header`
  padding: 1.5em 0;
  position: fixed;
  width: 100%;
  z-index: 2;
  box-shadow: 0 0 8px #35353555;
  /* background-color: #050505bb; */
  backdrop-filter: blur(8px);
  top: 0;
  transition: top 0.3s;

  &:after {
    content: "";
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${({theme:e})=>e.bg};
    transition: background-color var(--duration);
    backdrop-filter: blur(8px);

    opacity: 0.8;
    z-index: -1;
  }

  @media screen and (max-width: 575.98px) {
    padding: 0.75em 0;
  }

  @media screen and (max-width: 991.98px) {
    padding: 1.25em 0;
    &.header-collapse {
      top: -150px;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: stretch;
  }

  .logo {
    width: 80px;
    height: auto;
    /* margin-right: 3em; */
    transition: width var(--duration);
    color: ${({theme:e})=>e.fg};
  }

  .logo img {
    width: 100%;
    height: auto;
  }

  ul {
    @media screen and (max-width: 991.98px) {
      display: none;
    }
  }

  > div {
    position: relative;
  }
`,hx=({menuIsOpen:e,toggleMenu:t,scrollbarWidth:n,isDarkMode:r,toggleDarkMode:i})=>{const[s,o]=T.useState(!1),[a,l]=T.useState(0),u=5,c=T.useRef(),d=T.useRef();T.useEffect(()=>{document.body.onscroll=()=>{o(!0)}},[]),T.useEffect(()=>{if(s)return d.current=setInterval(()=>{p(),o(!1)},250),()=>clearInterval(d.current)},[s]);const p=()=>{const g=Math.round(window.scrollY),v=c.current.clientHeight;Math.abs(a-g)<=u||(g>a&&g>v?c.current.classList.add("header-collapse"):g<a&&c.current.classList.remove("header-collapse"),l(g))};return S(px,{ref:c,scrollbarWidth:n,style:{width:e?`calc(100% - ${n}px)`:""},children:S(ht,{children:H("nav",{children:[S("a",{className:"logo",href:"#home",onClick:()=>{e&&t()},children:S(nx,{})}),S(gg,{}),S(fx,{isDarkMode:r,toggleDarkMode:i}),S(ox,{isOpen:e,toggleMenu:t})]})})})},vs=te.section`
  padding: 60px 0;
  scroll-margin-top: 50px;
`,ys=te.hr`
  width: calc(100% - 160px);
  margin: 0 auto;
  border: none;
  height: 2px;
  background-color: ${({theme:e})=>e.cardBg};
`,mx="/vd-developer-portfolio/assets/photo-64c19123.png",gx="/vd-developer-portfolio/assets/Scroll Down-33a304fa.svg";function vx(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function yx(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var wx=function(){function e(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(yx(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=vx(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ge="-ms-",Uo="-moz-",ee="-webkit-",vg="comm",Pd="rule",bd="decl",xx="@import",yg="@keyframes",Sx=Math.abs,$a=String.fromCharCode,Cx=Object.assign;function kx(e,t){return De(e,0)^45?(((t<<2^De(e,0))<<2^De(e,1))<<2^De(e,2))<<2^De(e,3):0}function wg(e){return e.trim()}function Tx(e,t){return(e=t.exec(e))?e[0]:e}function se(e,t,n){return e.replace(t,n)}function Qu(e,t){return e.indexOf(t)}function De(e,t){return e.charCodeAt(t)|0}function rs(e,t,n){return e.slice(t,n)}function jt(e){return e.length}function Md(e){return e.length}function Hs(e,t){return t.push(e),e}function Ex(e,t){return e.map(t).join("")}var Da=1,Yr=1,xg=0,ot=0,Pe=0,ei="";function Fa(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Da,column:Yr,length:o,return:""}}function fi(e,t){return Cx(Fa("",null,null,"",null,null,0),e,{length:-e.length},t)}function Px(){return Pe}function bx(){return Pe=ot>0?De(ei,--ot):0,Yr--,Pe===10&&(Yr=1,Da--),Pe}function ft(){return Pe=ot<xg?De(ei,ot++):0,Yr++,Pe===10&&(Yr=1,Da++),Pe}function Yt(){return De(ei,ot)}function co(){return ot}function ws(e,t){return rs(ei,e,t)}function is(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Sg(e){return Da=Yr=1,xg=jt(ei=e),ot=0,[]}function Cg(e){return ei="",e}function fo(e){return wg(ws(ot-1,Zu(e===91?e+2:e===40?e+1:e)))}function Mx(e){for(;(Pe=Yt())&&Pe<33;)ft();return is(e)>2||is(Pe)>3?"":" "}function Ax(e,t){for(;--t&&ft()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return ws(e,co()+(t<6&&Yt()==32&&ft()==32))}function Zu(e){for(;ft();)switch(Pe){case e:return ot;case 34:case 39:e!==34&&e!==39&&Zu(Pe);break;case 40:e===41&&Zu(e);break;case 92:ft();break}return ot}function Lx(e,t){for(;ft()&&e+Pe!==47+10;)if(e+Pe===42+42&&Yt()===47)break;return"/*"+ws(t,ot-1)+"*"+$a(e===47?e:ft())}function _x(e){for(;!is(Yt());)ft();return ws(e,ot)}function Ox(e){return Cg(po("",null,null,null,[""],e=Sg(e),0,[0],e))}function po(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,p=0,g=0,v=0,y=1,x=1,f=1,h=0,m="",w=i,C=s,k=r,E=m;x;)switch(v=h,h=ft()){case 40:if(v!=108&&De(E,d-1)==58){Qu(E+=se(fo(h),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:E+=fo(h);break;case 9:case 10:case 13:case 32:E+=Mx(v);break;case 92:E+=Ax(co()-1,7);continue;case 47:switch(Yt()){case 42:case 47:Hs(Rx(Lx(ft(),co()),t,n),l);break;default:E+="/"}break;case 123*y:a[u++]=jt(E)*f;case 125*y:case 59:case 0:switch(h){case 0:case 125:x=0;case 59+c:g>0&&jt(E)-d&&Hs(g>32?Ap(E+";",r,n,d-1):Ap(se(E," ","")+";",r,n,d-2),l);break;case 59:E+=";";default:if(Hs(k=Mp(E,t,n,u,c,i,a,m,w=[],C=[],d),s),h===123)if(c===0)po(E,t,k,k,w,s,d,a,C);else switch(p===99&&De(E,3)===110?100:p){case 100:case 109:case 115:po(e,k,k,r&&Hs(Mp(e,k,k,0,0,i,a,m,i,w=[],d),C),i,C,d,a,r?w:C);break;default:po(E,k,k,k,[""],C,0,a,C)}}u=c=g=0,y=f=1,m=E="",d=o;break;case 58:d=1+jt(E),g=v;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&bx()==125)continue}switch(E+=$a(h),h*y){case 38:f=c>0?1:(E+="\f",-1);break;case 44:a[u++]=(jt(E)-1)*f,f=1;break;case 64:Yt()===45&&(E+=fo(ft())),p=Yt(),c=d=jt(m=E+=_x(co())),h++;break;case 45:v===45&&jt(E)==2&&(y=0)}}return s}function Mp(e,t,n,r,i,s,o,a,l,u,c){for(var d=i-1,p=i===0?s:[""],g=Md(p),v=0,y=0,x=0;v<r;++v)for(var f=0,h=rs(e,d+1,d=Sx(y=o[v])),m=e;f<g;++f)(m=wg(y>0?p[f]+" "+h:se(h,/&\f/g,p[f])))&&(l[x++]=m);return Fa(e,t,n,i===0?Pd:a,l,u,c)}function Rx(e,t,n){return Fa(e,t,n,vg,$a(Px()),rs(e,2,-2),0)}function Ap(e,t,n,r){return Fa(e,t,n,bd,rs(e,0,r),rs(e,r+1,-1),r)}function Nr(e,t){for(var n="",r=Md(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Ix(e,t,n,r){switch(e.type){case xx:case bd:return e.return=e.return||e.value;case vg:return"";case yg:return e.return=e.value+"{"+Nr(e.children,r)+"}";case Pd:e.value=e.props.join(",")}return jt(n=Nr(e.children,r))?e.return=e.value+"{"+n+"}":""}function Nx(e){var t=Md(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function zx(e){return function(t){t.root||(t=t.return)&&e(t)}}var Vx=function(t,n,r){for(var i=0,s=0;i=s,s=Yt(),i===38&&s===12&&(n[r]=1),!is(s);)ft();return ws(t,ot)},$x=function(t,n){var r=-1,i=44;do switch(is(i)){case 0:i===38&&Yt()===12&&(n[r]=1),t[r]+=Vx(ot-1,n,r);break;case 2:t[r]+=fo(i);break;case 4:if(i===44){t[++r]=Yt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=$a(i)}while(i=ft());return t},Dx=function(t,n){return Cg($x(Sg(t),n))},Lp=new WeakMap,Fx=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Lp.get(r))&&!i){Lp.set(t,!0);for(var s=[],o=Dx(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)t.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},jx=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function kg(e,t){switch(kx(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+Uo+e+Ge+e+e;case 6828:case 4268:return ee+e+Ge+e+e;case 6165:return ee+e+Ge+"flex-"+e+e;case 5187:return ee+e+se(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+Ge+"flex-$1$2")+e;case 5443:return ee+e+Ge+"flex-item-"+se(e,/flex-|-self/,"")+e;case 4675:return ee+e+Ge+"flex-line-pack"+se(e,/align-content|flex-|-self/,"")+e;case 5548:return ee+e+Ge+se(e,"shrink","negative")+e;case 5292:return ee+e+Ge+se(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+se(e,"-grow","")+ee+e+Ge+se(e,"grow","positive")+e;case 4554:return ee+se(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return se(se(se(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return se(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return se(se(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+Ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4095:case 3583:case 4068:case 2532:return se(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jt(e)-1-t>6)switch(De(e,t+1)){case 109:if(De(e,t+4)!==45)break;case 102:return se(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Uo+(De(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Qu(e,"stretch")?kg(se(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(De(e,t+1)!==115)break;case 6444:switch(De(e,jt(e)-3-(~Qu(e,"!important")&&10))){case 107:return se(e,":",":"+ee)+e;case 101:return se(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ee+(De(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+Ge+"$2box$3")+e}break;case 5936:switch(De(e,t+11)){case 114:return ee+e+Ge+se(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+Ge+se(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+Ge+se(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ee+e+Ge+e+e}return e}var Bx=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case bd:t.return=kg(t.value,t.length);break;case yg:return Nr([fi(t,{value:se(t.value,"@","@"+ee)})],i);case Pd:if(t.length)return Ex(t.props,function(s){switch(Tx(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Nr([fi(t,{props:[se(s,/:(read-\w+)/,":"+Uo+"$1")]})],i);case"::placeholder":return Nr([fi(t,{props:[se(s,/:(plac\w+)/,":"+ee+"input-$1")]}),fi(t,{props:[se(s,/:(plac\w+)/,":"+Uo+"$1")]}),fi(t,{props:[se(s,/:(plac\w+)/,Ge+"input-$1")]})],i)}return""})}},Hx=[Bx],Ux=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var x=y.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||Hx,s={},o,a=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var x=y.getAttribute("data-emotion").split(" "),f=1;f<x.length;f++)s[x[f]]=!0;a.push(y)});var l,u=[Fx,jx];{var c,d=[Ix,zx(function(y){c.insert(y)})],p=Nx(u.concat(i,d)),g=function(x){return Nr(Ox(x),p)};l=function(x,f,h,m){c=h,g(x?x+"{"+f.styles+"}":f.styles),m&&(v.inserted[f.name]=!0)}}var v={key:n,sheet:new wx({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:l};return v.sheet.hydrate(a),v},Gx=!0;function Tg(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Ad=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Gx===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Eg=function(t,n,r){Ad(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var s=n;do t.insert(n===s?"."+i:"",s,t.sheet,!0),s=s.next;while(s!==void 0)}};function Wx(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Yx={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xx=/[A-Z]|^ms/g,Kx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Pg=function(t){return t.charCodeAt(1)===45},_p=function(t){return t!=null&&typeof t!="boolean"},bl=ig(function(e){return Pg(e)?e:e.replace(Xx,"-$&").toLowerCase()}),Op=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Kx,function(r,i,s){return Bt={name:i,styles:s,next:Bt},i})}return Yx[t]!==1&&!Pg(t)&&typeof n=="number"&&n!==0?n+"px":n};function ss(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Bt={name:n.name,styles:n.styles,next:Bt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Bt={name:r.name,styles:r.styles,next:Bt},r=r.next;var i=n.styles+";";return i}return Qx(e,t,n)}case"function":{if(e!==void 0){var s=Bt,o=n(e);return Bt=s,ss(e,t,o)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Qx(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ss(e,t,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=s+"{"+t[o]+"}":_p(o)&&(r+=bl(s)+":"+Op(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var a=0;a<o.length;a++)_p(o[a])&&(r+=bl(s)+":"+Op(s,o[a])+";");else{var l=ss(e,t,o);switch(s){case"animation":case"animationName":{r+=bl(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var Rp=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Bt,Ld=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,s="";Bt=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,s+=ss(r,n,o)):s+=o[0];for(var a=1;a<t.length;a++)s+=ss(r,n,t[a]),i&&(s+=o[a]);Rp.lastIndex=0;for(var l="",u;(u=Rp.exec(s))!==null;)l+="-"+u[1];var c=Wx(s)+l;return{name:c,styles:s,next:Bt}},Zx=function(t){return t()},qx=cf["useInsertionEffect"]?cf["useInsertionEffect"]:!1,bg=qx||Zx,_d={}.hasOwnProperty,Mg=T.createContext(typeof HTMLElement<"u"?Ux({key:"css"}):null);Mg.Provider;var Ag=function(t){return T.forwardRef(function(n,r){var i=T.useContext(Mg);return t(n,i,r)})},Lg=T.createContext({}),qu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Jx=function(t,n){var r={};for(var i in n)_d.call(n,i)&&(r[i]=n[i]);return r[qu]=t,r},eS=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Ad(n,r,i),bg(function(){return Eg(n,r,i)}),null},tS=Ag(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[qu],s=[r],o="";typeof e.className=="string"?o=Tg(t.registered,s,e.className):e.className!=null&&(o=e.className+" ");var a=Ld(s,void 0,T.useContext(Lg));o+=t.key+"-"+a.name;var l={};for(var u in e)_d.call(e,u)&&u!=="css"&&u!==qu&&(l[u]=e[u]);return l.ref=n,l.className=o,T.createElement(T.Fragment,null,T.createElement(eS,{cache:t,serialized:a,isStringTag:typeof i=="string"}),T.createElement(i,l))});function _g(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ld(t)}var O=function(){var t=_g.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},nS=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var s=t[r];if(s!=null){var o=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))o=e(s);else{o="";for(var a in s)s[a]&&a&&(o&&(o+=" "),o+=a)}break}default:o=s}o&&(i&&(i+=" "),i+=o)}}return i};function rS(e,t,n){var r=[],i=Tg(e,r,n);return r.length<2?n:i+t(r)}var iS=function(t){var n=t.cache,r=t.serializedArr;return bg(function(){for(var i=0;i<r.length;i++)Eg(n,r[i],!1)}),null},Ml=Ag(function(e,t){var n=!1,r=[],i=function(){for(var u=arguments.length,c=new Array(u),d=0;d<u;d++)c[d]=arguments[d];var p=Ld(c,t.registered);return r.push(p),Ad(t,p,!1),t.key+"-"+p.name},s=function(){for(var u=arguments.length,c=new Array(u),d=0;d<u;d++)c[d]=arguments[d];return rS(t.registered,i,nS(c))},o={css:i,cx:s,theme:T.useContext(Lg)},a=e.children(o);return n=!0,T.createElement(T.Fragment,null,T.createElement(iS,{cache:t,serializedArr:r}),a)});function Ju(){return Ju=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ju.apply(this,arguments)}function sS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const ec=new Map,Us=new WeakMap;let Ip=0,oS;function aS(e){return e?(Us.has(e)||(Ip+=1,Us.set(e,Ip.toString())),Us.get(e)):"0"}function lS(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?aS(e.root):e[t]}`).toString()}function uS(e){let t=lS(e),n=ec.get(t);if(!n){const r=new Map;let i;const s=new IntersectionObserver(o=>{o.forEach(a=>{var l;const u=a.isIntersecting&&i.some(c=>a.intersectionRatio>=c);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(l=r.get(a.target))==null||l.forEach(c=>{c(u,a)})})},e);i=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:r},ec.set(t,n)}return n}function Og(e,t,n={},r=oS){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:i,observer:s,elements:o}=uS(n);let a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(t),s.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(o.delete(e),s.unobserve(e)),o.size===0&&(s.disconnect(),ec.delete(i))}}const cS=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Np(e){return typeof e.children!="function"}class zp extends T.Component{constructor(t){super(t),this.node=null,this._unobserveCb=null,this.handleNode=n=>{this.node&&(this.unobserve(),!n&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=n||null,this.observeNode()},this.handleChange=(n,r)=>{n&&this.props.triggerOnce&&this.unobserve(),Np(this.props)||this.setState({inView:n,entry:r}),this.props.onChange&&this.props.onChange(n,r)},this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:s,fallbackInView:o}=this.props;this._unobserveCb=Og(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:s},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!Np(this.props)){const{inView:s,entry:o}=this.state;return this.props.children({inView:s,entry:o,ref:this.handleNode})}const t=this.props,{children:n,as:r}=t,i=sS(t,cS);return T.createElement(r||"div",Ju({ref:this.handleNode},i),n)}}function Rg({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:s,skip:o,initialInView:a,fallbackInView:l,onChange:u}={}){var c;const[d,p]=T.useState(null),g=T.useRef(),[v,y]=T.useState({inView:!!a,entry:void 0});g.current=u,T.useEffect(()=>{if(o||!d)return;let m;return m=Og(d,(w,C)=>{y({inView:w,entry:C}),g.current&&g.current(w,C),C.isIntersecting&&s&&m&&(m(),m=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{m&&m()}},[Array.isArray(e)?e.toString():e,d,i,r,s,o,n,l,t]);const x=(c=v.entry)==null?void 0:c.target,f=T.useRef();!d&&x&&!s&&!o&&f.current!==x&&(f.current=x,y({inView:!!a,entry:void 0}));const h=[p,v.inView,v.entry];return h.ref=h[0],h.inView=h[1],h.entry=h[2],h}var dS=Zr;function _e(e,t,n){return _d.call(t,"css")?S(tS,Jx(e,t),n):S(e,t,n)}O`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;O`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;O`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;O`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;O`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;O`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;O`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;O`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;O`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;O`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;O`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;O`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;O`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var fS=O`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,pS=O`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,hS=O`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,mS=O`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gS=O`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Od=O`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vS=O`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,yS=O`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wS=O`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xS=O`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,SS=O`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,CS=O`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,kS=O`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function TS({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Od,iterationCount:i=1}){return _g`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function ES(e){return e==null}function PS(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Ig(e,t){return n=>n?e():t()}function Go(e){return Ig(e,()=>null)}var Ng=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:s=0,keyframes:o=Od,triggerOnce:a=!1,className:l,style:u,childClassName:c,childStyle:d,children:p,onVisibilityChange:g}=e,v=T.useMemo(()=>TS({keyframes:o,duration:i}),[i,o]);return ES(p)?null:PS(p)?_e(MS,{...e,animationStyles:v,children:String(p)}):ns.isFragment(p)?_e(zg,{...e,animationStyles:v}):_e(dS,{children:T.Children.map(p,(y,x)=>{if(!T.isValidElement(y))return null;const f=r+(t?x*i*n:0);switch(y.type){case"ol":case"ul":return _e(Ml,{children:({cx:h})=>_e(y.type,{...y.props,className:h(l,y.props.className),style:Object.assign({},u,y.props.style),children:_e(Ng,{...e,children:y.props.children})})});case"li":return _e(zp,{threshold:s,triggerOnce:a,onChange:g,children:({inView:h,ref:m})=>_e(Ml,{children:({cx:w})=>_e(y.type,{...y.props,ref:m,className:w(c,y.props.className),css:Go(()=>v)(h),style:Object.assign({},d,y.props.style,{animationDelay:f+"ms"})})})});default:return _e(zp,{threshold:s,triggerOnce:a,onChange:g,children:({inView:h,ref:m})=>_e("div",{ref:m,className:l,css:Go(()=>v)(h),style:Object.assign({},u,{animationDelay:f+"ms"}),children:_e(Ml,{children:({cx:w})=>_e(y.type,{...y.props,className:w(c,y.props.className),style:Object.assign({},d,y.props.style)})})})})}})})},bS={display:"inline-block",whiteSpace:"pre"},MS=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:s=1e3,fraction:o=0,triggerOnce:a=!1,className:l,style:u,children:c,onVisibilityChange:d}=e,{ref:p,inView:g}=Rg({triggerOnce:a,threshold:o,onChange:d});return Ig(()=>_e("div",{ref:p,className:l,style:Object.assign({},u,bS),children:c.split("").map((v,y)=>_e("span",{css:Go(()=>t)(g),style:{animationDelay:i+y*s*r+"ms"},children:v},y))}),()=>_e(zg,{...e,children:c}))(n)},zg=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:s,children:o,onVisibilityChange:a}=e,{ref:l,inView:u}=Rg({triggerOnce:r,threshold:n,onChange:a});return _e("div",{ref:l,className:i,css:Go(()=>t)(u),style:s,children:o})};O`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;O`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;O`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;O`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;O`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;O`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;O`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;O`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;O`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;O`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var AS=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,LS=O`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,_S=O`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,OS=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,RS=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,IS=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,NS=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,zS=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,VS=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,$S=O`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,DS=O`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,FS=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,jS=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function BS(e,t,n){switch(n){case"bottom-left":return t?LS:pS;case"bottom-right":return t?_S:hS;case"down":return e?t?RS:gS:t?OS:mS;case"left":return e?t?NS:vS:t?IS:Od;case"right":return e?t?VS:wS:t?zS:yS;case"top-left":return t?$S:xS;case"top-right":return t?DS:SS;case"up":return e?t?jS:kS:t?FS:CS;default:return t?AS:fS}}var zt=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,s=T.useMemo(()=>BS(t,r,n),[t,n,r]);return _e(Ng,{keyframes:s,...i})};O`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;O`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;O`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;O`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;O`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;O`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;O`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;O`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;O`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;O`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;O`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;O`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;O`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;O`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;O`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;O`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;O`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;O`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;O`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;O`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;O`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;O`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;O`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;O`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;O`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;O`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;O`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;O`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;O`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;O`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;O`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;O`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;O`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;O`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;O`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;O`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const HS=te(vs)`
  /* scroll-margin-top: 200px; */

  padding: 160px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .main {
    &__inner {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 991.98px) {
        flex-direction: column-reverse;
        align-items: center;
        text-align: center;
      }
    }

    &__info {
      margin-right: 16px;
    }

    &__photo {
      position: relative;
      margin-right: calc(20px + var(--strokeWidth) * 2);
      margin-top: 10px;
      --photo-size: 320px;
      @media screen and (max-width: 991.98px) {
        --photo-size: 240px;
        margin-bottom: 32px;
      }

      &_inner {
        width: var(--photo-size);
        height: var(--photo-size);
        border-radius: var(--borderRadiusNormal);
        border: solid var(--strokeWidth) ${({theme:e})=>e.cyan};
        flex-shrink: 0;
        position: relative;
        background-color: ${({theme:e})=>e.bg};
        img {
          width: 100%;
          height: 100%;
        }
      }

      &::before {
        content: "";
        display: block;
        width: var(--photo-size);
        height: var(--photo-size);
        border-radius: var(--borderRadiusNormal);
        border: solid var(--strokeWidth) ${({theme:e})=>e.cyan};
        border-color: ${({theme:e})=>e.grey};
        position: absolute;
        top: calc(var(--photo-size) / 12);
        left: calc(var(--photo-size) / 12);
        box-sizing: border-box;
      }
    }

    &__scroll {
      margin: 64px auto 0;
      display: block;
      position: absolute;
      left: 50%;
      bottom: 40px;
      transform: translate(-50%, -50%);
    }
  }

  .accent {
    color: ${({theme:e})=>e.cyan};
  }

  .description {
    margin-top: 16px;
    color: ${({theme:e})=>e.grey};
    span {
      font-weight: 700;
    }
  }
`,US=()=>H(Zr,{children:[S(HS,{id:"home",children:S(ht,{children:H("div",{className:"main",children:[H("div",{className:" main__inner",children:[S("div",{className:"main__info",children:H(zt,{triggerOnce:!0,cascade:!0,damping:"0.5",children:[S(ax,{children:"Hello,"}),H(mg,{children:["I am ",S("span",{className:"accent",children:"Vladyslav"}),", ",S("br",{}),"Frontend Developer"]}),H(Rt,{className:"description",children:["Based in ",S("span",{children:"Kyiv, Ukraine"}),", I'm passionate about creating engaging, digital experiences on the web."]})]})}),S(zt,{triggerOnce:!0,delay:500,children:S("div",{className:"main__photo",children:S("div",{className:"main__photo_inner",children:S("img",{src:mx,alt:""})})})})]}),S(zt,{triggerOnce:!0,delay:1500,children:S("img",{className:"main__scroll",src:gx,alt:""})})]})})}),S(ht,{children:S(ys,{})})]}),GS=te(mg)`
  display: flex;
  justify-content: center;
  position: relative;
  span {
    padding-bottom: 14px;
    position: relative;

    &:after {
      content: "";
      background-color: ${({theme:e})=>e.cyan};
      height: var(--strokeWidth);
      width: calc(100% - 32px);
      position: absolute;
      bottom: 0;
      left: 16px;
    }
  }
`,ja=({children:e,id:t})=>S(zt,{triggerOnce:!0,children:S(GS,{id:t,children:S("span",{children:e})})}),WS=te.div`
  display: grid;
  align-self: start;
  justify-content: start;
  gap: 1em;
  padding: 8px 0;

  .icon {
    width: 48px;
    height: 48px;
  }

  .text {
    &__descr {
      margin-top: 8px;
      color: ${({theme:e})=>e.grey};
    }
  }

  @media screen and (max-width: 767.98px) {
    grid-auto-flow: column;
    align-items: center;
    font-weight: 400;

    .text {
      &__title {
        font-size: 24px;
        line-height: 32px;
        font-weight: 400;
      }

      &__descr {
        display: none;
      }
    }
  }

  @media screen and (max-width: 575.98px) {
    justify-content: center;
    .text {
      display: none;
    }
  }
`,YS=({icon:e,title:t,description:n})=>H(WS,{children:[S("img",{className:"icon",src:e,alt:""}),H("div",{className:"text",children:[S(Ed,{className:"text__title",children:t}),S(Wr,{className:"text__descr",children:n})]})]}),XS=te.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 16px;
  padding: 24px;
  border-radius: var(--borderRadiusNormal);
  border: solid var(--strokeWidth) ${({theme:e})=>e.cardBg};

  .info {
    display: grid;
    gap: 8px;
  }

  .time-range {
    * {
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: ${({theme:e})=>e.cyan};
    }
  }
  .position {
    color: ${({theme:e})=>e.cyan};
  }
  .descr {
    color: ${({theme:e})=>e.grey};
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .icons {
    display: flex;
    *:not(:last-child) {
      margin-right: 16px;
    }
  }
`,KS=te(Wr)`
  display: inline-block;
  border-radius: 16px;
  padding: 4px 8px;
  background-color: ${({theme:e})=>e.cardBg};
  color: ${({theme:e})=>e.grey};
`,QS=te.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`,ZS=({experience:{timerange:e,position:t,company:n,chips:r,description:i,icons:s}})=>H(XS,{children:[H("div",{className:"info",children:[S("div",{className:"time-range",children:S(Wr,{children:e})}),S(Ed,{className:"position",children:t}),S(Rt,{children:n}),r&&r.length>0?S("div",{className:"chips",children:r.map(o=>S(KS,{children:o},`${n} ${o}`))}):null,S(Wr,{className:"descr",children:i})]}),s&&s.length>0?S("div",{className:"icons",children:s.map(o=>S(QS,{src:o},`${n} ${o}`))}):null]}),Vg="/vd-developer-portfolio/assets/HTML-95ed0938.svg",$g="/vd-developer-portfolio/assets/CSS-5b2e736b.svg",Dg="/vd-developer-portfolio/assets/JS-51e57f59.svg",Fg="/vd-developer-portfolio/assets/React-c8eee73a.svg",jg="/vd-developer-portfolio/assets/Next-b11f2149.svg",Bg="/vd-developer-portfolio/assets/TS-2999ec04.svg",Hg="/vd-developer-portfolio/assets/Jest-9a6a8238.svg",qS="/vd-developer-portfolio/assets/Git-363439a6.svg",JS="/vd-developer-portfolio/assets/Figma-dfb679d3.svg",e3="/vd-developer-portfolio/assets/Salesforce-cfd1e0bb.svg",t3="/vd-developer-portfolio/assets/Tailwind-f747957b.svg",n3="/vd-developer-portfolio/assets/Bootstrap-1088558a.svg",r3=[{icon:Vg,title:"HTML",description:"Expert HTML skills, with a focus on semantic coding, accessibility and W3C validation."},{icon:$g,title:"CSS",description:"Highly skilled in CSS, Sass, Bootstrap, and Tailwind for exceptional designs."},{icon:Dg,title:"Javascript",description:"Proficient in JavaScript, familiar with object/array methods, and APIs."},{icon:Fg,title:"React",description:"Skilled in React, delivering fast, dynamic, and interactive user interfaces."},{icon:jg,title:"Next.js",description:"Experienced in Next.js, delivering fast and scalable websites, including server-side rendering."},{icon:Bg,title:"Typescript",description:"Expertise in TypeScript, providing scalable and maintainable code for complex projects."},{icon:Hg,title:"Jest",description:"Competent in Unit Testing for reliable and efficient testing."},{icon:qS,title:"Git",description:"Familiar with Git, able to effectively manage code changes and collaborate with teams."},{icon:JS,title:"Graphic Design",description:"Knowledgeable in graphic design using Figma, Photoshop, and Illustrator to bring ideas to life."}],i3=[{timerange:"Oct 21 — Feb 23",position:"Frontend Developer",company:"Astound Commerce",chips:["Ukraine","Remote","Full-time"],description:"At Astound Commerce, I collaborated with experienced managers and developers on a large project, utilizing technologies such as TypeScript, SFCC, React, and Next.js, and got competence in unit testing.",icons:[Bg,Fg,jg,e3,t3,Hg]},{timerange:"nov 20 — sep 21",position:"Frontend Developer",company:"While Web Production",chips:["Ukraine","Remote","Part-time"],description:"Provided top-notch frontend development in a range of projects, from landing pages to multi-page websites, resulting in happy clients.",icons:[Vg,$g,Dg,n3]},{timerange:"feb 20 — sep 21",position:"Music Producer",company:"Fiverr",chips:["Worldwide","Remote","Project-based"],description:"Worked as a freelancer providing professional Music Production, Mixing and Mastering Services to independent musicians, video creators, and businesses globally."},{timerange:"Feb 16 — Feb 20",position:"Music Producer",company:"Envato Audio",chips:["Worldwide","Remote","Part-time"],description:"Produced high-quality music for video creators and commercials worldwide to enhance the visual storytelling experience."},{timerange:"jul 17 - jul 18",position:"PR Manager",company:"BEST Zaporizhzhya",chips:["Zaporizhia, Ukraine","Volounteering","Part-time"],description:"PR work plan, strategy dev., monthly PR meetings, task delegation, FB & IG page management, recruitment campaigns, print & social media design"},{timerange:"aug 18 — dec 18",position:"PR Manager",company:"BEST LikeIT 2018 (IT Hackathon)",chips:["Zaporizhia, Ukraine","Volounteering","Project-based"],description:"Finding event participants. PR strategy, goal setting & monitoring work. Designing posts & materials. Facebook & Instagram posts, promo videos & targeted advertising."}],s3=te(vs)`
  .about {
    &__subsection {
      margin-top: 48px;
      &_title {
        @media screen and (max-width: 991.98px) {
          text-align: center;
        }
      }
    }
    &__skills-wrapper {
      margin-top: 42px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;

      @media screen and (max-width: 991.98px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (max-width: 991.98px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    &__experience-wrapper {
      margin-top: 42px;
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(2, 1fr);

      @media screen and (max-width: 991.98px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`,o3=()=>H(Zr,{children:[S(s3,{id:"about",children:H(ht,{children:[S(ja,{children:"About"}),H(zt,{triggerOnce:!0,cascade:!0,damping:"1",children:[H("div",{className:"about__subsection",children:[S(Ku,{className:"about__subsection_title",children:"Skills"}),S("div",{className:"about__skills-wrapper",children:S(zt,{triggerOnce:!0,cascade:!0,damping:"0.1",children:r3.map(({icon:e,title:t,description:n})=>S(YS,{icon:e,title:t,description:n},t))})})]}),H("div",{className:"about__subsection",children:[S(Ku,{className:"about__subsection_title",children:"Working Experience"}),S("div",{className:"about__experience-wrapper",children:S(zt,{triggerOnce:!0,cascade:!0,damping:"0.1",children:i3.map(e=>S(ZS,{experience:e},e.company))})})]})]})]})}),S(ht,{children:S(ys,{})})]}),a3=te(Rt)`
  text-align: center;
  padding: 0 80px;
  color: ${({theme:e})=>e.grey};
  margin-top: 40px;

  @media screen and (max-width: 991.98px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 767.98px) {
    padding: 0;
  }
`,Rd=({children:e})=>S(zt,{triggerOnce:!0,children:S(a3,{children:e})}),Vp=()=>S("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:S("path",{d:"M11.191 16L24.5923 2.59873L21.9935 0L5.99352 16L21.9935 32.0001L24.5923 29.4013L11.191 16Z",fill:"currentColor"})}),l3=te.div`
  padding: 24px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 991.98px) {
    flex-direction: column;
    text-align: center;
  }

  .slide {
    &__img {
      width: 320px;
      height: 320px;
      margin-right: 16px;
      flex-shrink: 0;
      border-radius: var(--borderRadiusNormal);
      overflow: hidden;
      box-shadow: 0 0 8px #35353533;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @media screen and (max-width: 991.98px) {
        width: 240px;
        height: 240px;
        margin-bottom: 16px;
        margin-right: 0;
      }
    }
    &__descr {
      margin-top: 16px;
      color: ${({theme:e})=>e.grey};
    }
    &__buttons {
      margin-top: 16px;
      display: flex;
      @media screen and (max-width: 991.98px) {
        justify-content: center;
      }
    }
    &__btn {
      text-decoration: none;
      font-weight: 700;
      padding: 12px 24px;
      border-radius: var(--borderRadiusNormal);
      color: ${({theme:e})=>e.grey};
      cursor: pointer;
      transition: background-color var(--duration), color var(--duration);

      &:hover {
        color: #dddcdc;
      }
      &-primary {
        background-color: ${({theme:e})=>e.cyan};
        color: ${({theme:e})=>e.fg};
        &:hover {
          background-color: #178695;
          color: ${({theme:e})=>e.fg};
        }
      }
      p {
        font-weight: 700;
      }

      &-disabled {
        color: #686868;
      }
    }
  }
`,u3=({img:e,title:t,description:n,previewLink:r,codeLink:i,previewProject:s})=>H(l3,{children:[S("div",{className:"slide__img",children:S("img",{src:e,alt:"",loading:"lazy"})}),H("div",{className:"slide__main",children:[S(Ed,{children:t}),S(Rt,{className:"slide__descr",children:n}),H("div",{className:"slide__buttons",children:[r&&r.length>0?S(Rt,{as:"button",onClick:()=>s(r),target:"_blank",className:"slide__btn slide__btn-primary",children:"Preview"}):null,i&&i.length>0?S(Rt,{as:"a",href:i,target:"_blank",className:"slide__btn",children:"Code"}):null]})]})]}),c3="/vd-developer-portfolio/assets/1-todo-54de5b83.jpg",d3="/vd-developer-portfolio/assets/2-snake-2270bcd5.jpg",f3="/vd-developer-portfolio/assets/3-ocular-28333ce2.jpg",p3="/vd-developer-portfolio/assets/4-his-53374a27.jpg",h3="/vd-developer-portfolio/assets/5-pasgen-e2de36c0.jpg",m3="/vd-developer-portfolio/assets/6-clock-e0f18f80.jpg",g3="/vd-developer-portfolio/assets/7-tenzies-03eb22b2.jpg";function $p(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Id(e={},t={}){Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:$p(t[n])&&$p(e[n])&&Object.keys(t[n]).length>0&&Id(e[n],t[n])})}const Ug={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ur(){const e=typeof document<"u"?document:{};return Id(e,Ug),e}const v3={document:Ug,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function wt(){const e=typeof window<"u"?window:{};return Id(e,v3),e}function y3(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function tc(e,t=0){return setTimeout(e,t)}function os(){return Date.now()}function w3(e){const t=wt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function x3(e,t="x"){const n=wt();let r,i,s;const o=w3(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),s=new n.WebKitCSSMatrix(i==="none"?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Gs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function S3(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function ut(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let r=1;r<e.length;r+=1){const i=e[r];if(i!=null&&!S3(i)){const s=Object.keys(Object(i)).filter(o=>n.indexOf(o)<0);for(let o=0,a=s.length;o<a;o+=1){const l=s[o],u=Object.getOwnPropertyDescriptor(i,l);u!==void 0&&u.enumerable&&(Gs(t[l])&&Gs(i[l])?i[l].__swiper__?t[l]=i[l]:ut(t[l],i[l]):!Gs(t[l])&&Gs(i[l])?(t[l]={},i[l].__swiper__?t[l]=i[l]:ut(t[l],i[l])):t[l]=i[l])}}}return t}function Ws(e,t,n){e.style.setProperty(t,n)}function Gg({swiper:e,targetPosition:t,side:n}){const r=wt(),i=-e.translate;let s=null,o;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const l=t>i?"next":"prev",u=(d,p)=>l==="next"&&d>=p||l==="prev"&&d<=p,c=()=>{o=new Date().getTime(),s===null&&(s=o);const d=Math.max(Math.min((o-s)/a,1),0),p=.5-Math.cos(d*Math.PI)/2;let g=i+p*(t-i);if(u(g,t)&&(g=t),e.wrapperEl.scrollTo({[n]:g}),u(g,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:g})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(c)};c()}function Wg(e){return e.querySelector(".swiper-slide-transform")||e.shadowEl&&e.shadowEl.querySelector(".swiper-slide-transform")||e}function rn(e,t=""){return[...e.children].filter(n=>n.matches(t))}function Yg(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function C3(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function k3(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function kn(e,t){return wt().getComputedStyle(e,null).getPropertyValue(t)}function dn(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Xg(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function T3(e,t){function n(r){r.target===e&&(t.call(e,r),e.removeEventListener("transitionend",n))}t&&e.addEventListener("transitionend",n)}function nc(e,t,n){const r=wt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}let Al;function E3(){const e=wt(),t=ur();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Kg(){return Al||(Al=E3()),Al}let Ll;function P3({userAgent:e}={}){const t=Kg(),n=wt(),r=n.navigator.platform,i=e||n.navigator.userAgent,s={ios:!1,android:!1},o=n.screen.width,a=n.screen.height,l=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=r==="Win32";let g=r==="MacIntel";const v=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&g&&t.touch&&v.indexOf(`${o}x${a}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),g=!1),l&&!p&&(s.os="android",s.android=!0),(u||d||c)&&(s.os="ios",s.ios=!0),s}function b3(e={}){return Ll||(Ll=P3(e)),Ll}let _l;function M3(){const e=wt();let t=!1;function n(){const r=e.navigator.userAgent.toLowerCase();return r.indexOf("safari")>=0&&r.indexOf("chrome")<0&&r.indexOf("android")<0}if(n()){const r=String(e.navigator.userAgent);if(r.includes("Version/")){const[i,s]=r.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));t=i<16||i===16&&s<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function A3(){return _l||(_l=M3()),_l}function L3({swiper:e,on:t,emit:n}){const r=wt();let i=null,s=null;const o=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},a=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(c=>{s=r.requestAnimationFrame(()=>{const{width:d,height:p}=e;let g=d,v=p;c.forEach(({contentBoxSize:y,contentRect:x,target:f})=>{f&&f!==e.el||(g=x?x.width:(y[0]||y).inlineSize,v=x?x.height:(y[0]||y).blockSize)}),(g!==d||v!==p)&&o()})}),i.observe(e.el))},l=()=>{s&&r.cancelAnimationFrame(s),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){a();return}r.addEventListener("resize",o),r.addEventListener("orientationchange",u)}),t("destroy",()=>{l(),r.removeEventListener("resize",o),r.removeEventListener("orientationchange",u)})}function _3({swiper:e,extendParams:t,on:n,emit:r}){const i=[],s=wt(),o=(u,c={})=>{const d=s.MutationObserver||s.WebkitMutationObserver,p=new d(g=>{if(g.length===1){r("observerUpdate",g[0]);return}const v=function(){r("observerUpdate",g[0])};s.requestAnimationFrame?s.requestAnimationFrame(v):s.setTimeout(v,0)});p.observe(u,{attributes:typeof c.attributes>"u"?!0:c.attributes,childList:typeof c.childList>"u"?!0:c.childList,characterData:typeof c.characterData>"u"?!0:c.characterData}),i.push(p)},a=()=>{if(e.params.observer){if(e.params.observeParents){const u=Xg(e.el);for(let c=0;c<u.length;c+=1)o(u[c])}o(e.el,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},l=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",a),n("destroy",l)}const O3={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...s){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,s)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,s)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(s,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(o=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(a=>{a.apply(i,[o,...r])}),t.eventsListeners&&t.eventsListeners[o]&&t.eventsListeners[o].forEach(a=>{a.apply(i,r)})}),t}};function R3(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(kn(r,"padding-left")||0,10)-parseInt(kn(r,"padding-right")||0,10),n=n-parseInt(kn(r,"padding-top")||0,10)-parseInt(kn(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function I3(){const e=this;function t(M){return e.isHorizontal()?M:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[M]}function n(M,L){return parseFloat(M.getPropertyValue(t(L))||0)}const r=e.params,{wrapperEl:i,slidesEl:s,size:o,rtlTranslate:a,wrongRTL:l}=e,u=e.virtual&&r.virtual.enabled,c=u?e.virtual.slides.length:e.slides.length,d=rn(s,`.${e.params.slideClass}, swiper-slide`),p=u?e.virtual.slides.length:d.length;let g=[];const v=[],y=[];let x=r.slidesOffsetBefore;typeof x=="function"&&(x=r.slidesOffsetBefore.call(e));let f=r.slidesOffsetAfter;typeof f=="function"&&(f=r.slidesOffsetAfter.call(e));const h=e.snapGrid.length,m=e.slidesGrid.length;let w=r.spaceBetween,C=-x,k=0,E=0;if(typeof o>"u")return;typeof w=="string"&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*o),e.virtualSize=-w,d.forEach(M=>{a?M.style.marginLeft="":M.style.marginRight="",M.style.marginBottom="",M.style.marginTop=""}),r.centeredSlides&&r.cssMode&&(Ws(i,"--swiper-centered-offset-before",""),Ws(i,"--swiper-centered-offset-after",""));const b=r.grid&&r.grid.rows>1&&e.grid;b&&e.grid.initSlides(p);let _;const $=r.slidesPerView==="auto"&&r.breakpoints&&Object.keys(r.breakpoints).filter(M=>typeof r.breakpoints[M].slidesPerView<"u").length>0;for(let M=0;M<p;M+=1){_=0;let L;if(d[M]&&(L=d[M]),b&&e.grid.updateSlide(M,L,p,t),!(d[M]&&kn(L,"display")==="none")){if(r.slidesPerView==="auto"){$&&(d[M].style[t("width")]="");const j=getComputedStyle(L),Y=L.style.transform,X=L.style.webkitTransform;if(Y&&(L.style.transform="none"),X&&(L.style.webkitTransform="none"),r.roundLengths)_=e.isHorizontal()?nc(L,"width",!0):nc(L,"height",!0);else{const oe=n(j,"width"),fe=n(j,"padding-left"),R=n(j,"padding-right"),V=n(j,"margin-left"),B=n(j,"margin-right"),ne=j.getPropertyValue("box-sizing");if(ne&&ne==="border-box")_=oe+V+B;else{const{clientWidth:I,offsetWidth:z}=L;_=oe+fe+R+V+B+(z-I)}}Y&&(L.style.transform=Y),X&&(L.style.webkitTransform=X),r.roundLengths&&(_=Math.floor(_))}else _=(o-(r.slidesPerView-1)*w)/r.slidesPerView,r.roundLengths&&(_=Math.floor(_)),d[M]&&(d[M].style[t("width")]=`${_}px`);d[M]&&(d[M].swiperSlideSize=_),y.push(_),r.centeredSlides?(C=C+_/2+k/2+w,k===0&&M!==0&&(C=C-o/2-w),M===0&&(C=C-o/2-w),Math.abs(C)<1/1e3&&(C=0),r.roundLengths&&(C=Math.floor(C)),E%r.slidesPerGroup===0&&g.push(C),v.push(C)):(r.roundLengths&&(C=Math.floor(C)),(E-Math.min(e.params.slidesPerGroupSkip,E))%e.params.slidesPerGroup===0&&g.push(C),v.push(C),C=C+_+w),e.virtualSize+=_+w,k=_,E+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+f,a&&l&&(r.effect==="slide"||r.effect==="coverflow")&&(i.style.width=`${e.virtualSize+r.spaceBetween}px`),r.setWrapperSize&&(i.style[t("width")]=`${e.virtualSize+r.spaceBetween}px`),b&&e.grid.updateWrapperSize(_,g,t),!r.centeredSlides){const M=[];for(let L=0;L<g.length;L+=1){let j=g[L];r.roundLengths&&(j=Math.floor(j)),g[L]<=e.virtualSize-o&&M.push(j)}g=M,Math.floor(e.virtualSize-o)-Math.floor(g[g.length-1])>1&&g.push(e.virtualSize-o)}if(u&&r.loop){const M=y[0]+w;if(r.slidesPerGroup>1){const L=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/r.slidesPerGroup),j=M*r.slidesPerGroup;for(let Y=0;Y<L;Y+=1)g.push(g[g.length-1]+j)}for(let L=0;L<e.virtual.slidesBefore+e.virtual.slidesAfter;L+=1)r.slidesPerGroup===1&&g.push(g[g.length-1]+M),v.push(v[v.length-1]+M),e.virtualSize+=M}if(g.length===0&&(g=[0]),r.spaceBetween!==0){const M=e.isHorizontal()&&a?"marginLeft":t("marginRight");d.filter((L,j)=>!r.cssMode||r.loop?!0:j!==d.length-1).forEach(L=>{L.style[M]=`${w}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let M=0;y.forEach(j=>{M+=j+(r.spaceBetween?r.spaceBetween:0)}),M-=r.spaceBetween;const L=M-o;g=g.map(j=>j<0?-x:j>L?L+f:j)}if(r.centerInsufficientSlides){let M=0;if(y.forEach(L=>{M+=L+(r.spaceBetween?r.spaceBetween:0)}),M-=r.spaceBetween,M<o){const L=(o-M)/2;g.forEach((j,Y)=>{g[Y]=j-L}),v.forEach((j,Y)=>{v[Y]=j+L})}}if(Object.assign(e,{slides:d,snapGrid:g,slidesGrid:v,slidesSizesGrid:y}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){Ws(i,"--swiper-centered-offset-before",`${-g[0]}px`),Ws(i,"--swiper-centered-offset-after",`${e.size/2-y[y.length-1]/2}px`);const M=-e.snapGrid[0],L=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(j=>j+M),e.slidesGrid=e.slidesGrid.map(j=>j+L)}if(p!==c&&e.emit("slidesLengthChange"),g.length!==h&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==m&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!u&&!r.cssMode&&(r.effect==="slide"||r.effect==="fade")){const M=`${r.containerModifierClass}backface-hidden`,L=e.el.classList.contains(M);p<=r.maxBackfaceHiddenSlides?L||e.el.classList.add(M):L&&e.el.classList.remove(M)}}function N3(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,s;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=a=>r?t.slides.filter(l=>parseInt(l.getAttribute("data-swiper-slide-index"),10)===a)[0]:t.slides[a];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(a=>{n.push(a)});else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const a=t.activeIndex+s;if(a>t.slides.length&&!r)break;n.push(o(a))}else n.push(o(t.activeIndex));for(s=0;s<n.length;s+=1)if(typeof n[s]<"u"){const a=n[s].offsetHeight;i=a>i?a:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function z3(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n}function V3(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:s}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;i&&(o=e),r.forEach(a=>{a.classList.remove(n.slideVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let a=0;a<r.length;a+=1){const l=r[a];let u=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const c=(o+(n.centeredSlides?t.minTranslate():0)-u)/(l.swiperSlideSize+n.spaceBetween),d=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-u)/(l.swiperSlideSize+n.spaceBetween),p=-(o-u),g=p+t.slidesSizesGrid[a];(p>=0&&p<t.size-1||g>1&&g<=t.size||p<=0&&g>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(a),r[a].classList.add(n.slideVisibleClass)),l.progress=i?-c:c,l.originalProgress=i?-d:d}}function $3(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:s,isEnd:o,progressLoop:a}=t;const l=s,u=o;if(r===0)i=0,s=!0,o=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;s=c||i<=0,o=d||i>=1,c&&(i=0),d&&(i=1)}if(n.loop){const c=dn(t.slides.filter(x=>x.getAttribute("data-swiper-slide-index")==="0")[0]),d=dn(t.slides.filter(x=>x.getAttribute("data-swiper-slide-index")*1===t.slides.length-1)[0]),p=t.slidesGrid[c],g=t.slidesGrid[d],v=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=p?a=(y-p)/v:a=(y+v-g)/v,a>1&&(a-=1)}Object.assign(t,{progress:i,progressLoop:a,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!u&&t.emit("reachEnd toEdge"),(l&&!s||u&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}function D3(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,s=e.virtual&&n.virtual.enabled,o=l=>rn(r,`.${n.slideClass}${l}, swiper-slide${l}`)[0];t.forEach(l=>{l.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let a;if(s)if(n.loop){let l=i-e.virtual.slidesBefore;l<0&&(l=e.virtual.slides.length+l),l>=e.virtual.slides.length&&(l-=e.virtual.slides.length),a=o(`[data-swiper-slide-index="${l}"]`)}else a=o(`[data-swiper-slide-index="${i}"]`);else a=t[i];if(a){a.classList.add(n.slideActiveClass);let l=k3(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!l&&(l=t[0]),l&&l.classList.add(n.slideNextClass);let u=C3(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!u===0&&(u=t[t.length-1]),u&&u.classList.add(n.slidePrevClass)}e.emitSlidesClasses()}function F3(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let s=0;s<t.length;s+=1)typeof t[s+1]<"u"?r>=t[s]&&r<t[s+1]-(t[s+1]-t[s])/2?i=s:r>=t[s]&&r<t[s+1]&&(i=s+1):r>=t[s]&&(i=s);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function j3(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:o,snapIndex:a}=t;let l=e,u;const c=p=>{let g=p-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof l>"u"&&(l=F3(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const p=Math.min(i.slidesPerGroupSkip,l);u=p+Math.floor((l-p)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),l===s){u!==a&&(t.snapIndex=u,t.emit("snapIndexChange")),t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=c(l));return}let d;t.virtual&&i.virtual.enabled&&i.loop?d=c(l):t.slides[l]?d=parseInt(t.slides[l].getAttribute("data-swiper-slide-index")||l,10):d=l,Object.assign(t,{snapIndex:u,realIndex:d,previousIndex:s,activeIndex:l}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==d&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function B3(e){const t=this,n=t.params,r=e.closest(`.${n.slideClass}, swiper-slide`);let i=!1,s;if(r){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===r){i=!0,s=o;break}}if(r&&i)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=s;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}const H3={updateSize:R3,updateSlides:I3,updateAutoHeight:N3,updateSlidesOffset:z3,updateSlidesProgress:V3,updateProgress:$3,updateSlidesClasses:D3,updateActiveIndex:j3,updateClickedSlide:B3};function U3(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:s}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=x3(s,e);return r&&(o=-o),o||0}function G3(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:o}=n;let a=0,l=0;const u=0;n.isHorizontal()?a=r?-e:e:l=e,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:i.virtualTranslate||(s.style.transform=`translate3d(${a}px, ${l}px, ${u}px)`),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l;let c;const d=n.maxTranslate()-n.minTranslate();d===0?c=0:c=(e-n.minTranslate())/d,c!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function W3(){return-this.snapGrid[0]}function Y3(){return-this.snapGrid[this.snapGrid.length-1]}function X3(e=0,t=this.params.speed,n=!0,r=!0,i){const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),u=s.maxTranslate();let c;if(r&&e>l?c=l:r&&e<u?c=u:c=e,s.updateProgress(c),o.cssMode){const d=s.isHorizontal();if(t===0)a[d?"scrollLeft":"scrollTop"]=-c;else{if(!s.support.smoothScroll)return Gg({swiper:s,targetPosition:-c,side:d?"left":"top"}),!0;a.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(s.setTransition(0),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(p){!s||s.destroyed||p.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}const K3={getTranslate:U3,setTranslate:G3,minTranslate:W3,maxTranslate:Y3,translateTo:X3};function Q3(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)}function Qg({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:s}=e;let o=n;if(o||(i>s?o="next":i<s?o="prev":o="reset"),e.emit(`transition${r}`),t&&i!==s){if(o==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),o==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function Z3(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Qg({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function q3(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Qg({swiper:n,runCallbacks:e,direction:t,step:"End"}))}const J3={setTransition:Q3,transitionStart:Z3,transitionEnd:q3};function eC(e=0,t=this.params.speed,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const s=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:p,wrapperEl:g,enabled:v}=s;if(s.animating&&a.preventInteractionOnTransition||!v&&!r&&!i)return!1;const y=Math.min(s.params.slidesPerGroupSkip,o);let x=y+Math.floor((o-y)/s.params.slidesPerGroup);x>=l.length&&(x=l.length-1);const f=-l[x];if(a.normalizeSlideIndex)for(let m=0;m<u.length;m+=1){const w=-Math.floor(f*100),C=Math.floor(u[m]*100),k=Math.floor(u[m+1]*100);typeof u[m+1]<"u"?w>=C&&w<k-(k-C)/2?o=m:w>=C&&w<k&&(o=m+1):w>=C&&(o=m)}if(s.initialized&&o!==d&&(!s.allowSlideNext&&f<s.translate&&f<s.minTranslate()||!s.allowSlidePrev&&f>s.translate&&f>s.maxTranslate()&&(d||0)!==o))return!1;o!==(c||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(f);let h;if(o>d?h="next":o<d?h="prev":h="reset",p&&-f===s.translate||!p&&f===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(f),h!=="reset"&&(s.transitionStart(n,h),s.transitionEnd(n,h)),!1;if(a.cssMode){const m=s.isHorizontal(),w=p?f:-f;if(t===0){const C=s.virtual&&s.params.virtual.enabled;C&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),C&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[m?"scrollLeft":"scrollTop"]=w})):g[m?"scrollLeft":"scrollTop"]=w,C&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return Gg({swiper:s,targetPosition:w,side:m?"left":"top"}),!0;g.scrollTo({[m?"left":"top"]:w,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(f),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(n,h),t===0?s.transitionEnd(n,h):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(w){!s||s.destroyed||w.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,h))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function tC(e=0,t=this.params.speed,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;let s=e;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?s=s+i.virtual.slidesBefore:s=dn(i.slides.filter(o=>o.getAttribute("data-swiper-slide-index")*1===s)[0])),i.slideTo(s,t,n,r)}function nC(e=this.params.speed,t=!0,n){const r=this,{enabled:i,params:s,animating:o}=r;if(!i)return r;let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<s.slidesPerGroupSkip?1:a,u=r.virtual&&s.virtual.enabled;if(s.loop){if(o&&!u&&s.loopPreventsSliding)return!1;r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft}return s.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function rC(e=this.params.speed,t=!0,n){const r=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:u}=r;if(!l)return r;const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=a?r.translate:-r.translate;function p(f){return f<0?-Math.floor(Math.abs(f)):Math.floor(f)}const g=p(d),v=s.map(f=>p(f));let y=s[v.indexOf(g)-1];if(typeof y>"u"&&i.cssMode){let f;s.forEach((h,m)=>{g>=h&&(f=m)}),typeof f<"u"&&(y=s[f>0?f-1:f])}let x=0;if(typeof y<"u"&&(x=o.indexOf(y),x<0&&(x=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(x=x-r.slidesPerViewDynamic("previous",!0)+1,x=Math.max(x,0))),i.rewind&&r.isBeginning){const f=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(f,e,t,n)}return r.slideTo(x,e,t,n)}function iC(e=this.params.speed,t=!0,n){const r=this;return r.slideTo(r.activeIndex,e,t,n)}function sC(e=this.params.speed,t=!0,n,r=.5){const i=this;let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const u=i.snapGrid[a],c=i.snapGrid[a+1];l-u>(c-u)*r&&(s+=i.params.slidesPerGroup)}else{const u=i.snapGrid[a-1],c=i.snapGrid[a];l-u<=(c-u)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,e,t,n)}function oC(){const e=this,{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,s;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;s=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=dn(rn(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),tc(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=dn(rn(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),tc(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}const aC={slideTo:eC,slideToLoop:tC,slideNext:nC,slidePrev:rC,slideReset:iC,slideToClosest:sC,slideToClickedSlide:oC};function lC(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;rn(r,`.${n.slideClass}, swiper-slide`).forEach((s,o)=>{s.setAttribute("data-swiper-slide-index",o)}),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function uC({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,byController:s,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:l,allowSlidePrev:u,allowSlideNext:c,slidesEl:d,params:p}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&p.virtual.enabled){t&&(!p.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):p.centeredSlides&&a.snapIndex<p.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=u,a.allowSlideNext=c,a.emit("loopFix");return}const g=p.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(p.slidesPerView,10));let v=p.loopedSlides||g;v%p.slidesPerGroup!==0&&(v+=p.slidesPerGroup-v%p.slidesPerGroup),a.loopedSlides=v;const y=[],x=[];let f=a.activeIndex;typeof i>"u"?i=dn(a.slides.filter(k=>k.classList.contains("swiper-slide-active"))[0]):f=i;const h=n==="next"||!n,m=n==="prev"||!n;let w=0,C=0;if(i<v){w=v-i;for(let k=0;k<v-i;k+=1){const E=k-Math.floor(k/l.length)*l.length;y.push(l.length-E-1)}}else if(i>a.slides.length-v*2){C=i-(a.slides.length-v*2);for(let k=0;k<C;k+=1){const E=k-Math.floor(k/l.length)*l.length;x.push(E)}}if(m&&y.forEach(k=>{d.prepend(a.slides[k])}),h&&x.forEach(k=>{d.append(a.slides[k])}),a.recalcSlides(),p.watchSlidesProgress&&a.updateSlidesOffset(),t){if(y.length>0&&m)if(typeof e>"u"){const k=a.slidesGrid[f],b=a.slidesGrid[f+w]-k;o?a.setTranslate(a.translate-b):(a.slideTo(f+w,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=b))}else r&&a.slideToLoop(e,0,!1,!0);else if(x.length>0&&h)if(typeof e>"u"){const k=a.slidesGrid[f],b=a.slidesGrid[f-C]-k;o?a.setTranslate(a.translate-b):(a.slideTo(f-C,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=b))}else a.slideToLoop(e,0,!1,!0)}if(a.allowSlidePrev=u,a.allowSlideNext=c,a.controller&&a.controller.control&&!s){const k={slideRealIndex:e,slideTo:!1,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(E=>{E.params.loop&&E.loopFix(k)}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(k)}a.emit("loopFix")}function cC(){const e=this,{slides:t,params:n,slidesEl:r}=e;if(!n.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];t.forEach(s=>{const o=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;i[o]=s}),t.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),i.forEach(s=>{r.append(s)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}const dC={loopCreate:lC,loopFix:uC,loopDestroy:cC};function fC(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;n.style.cursor="move",n.style.cursor=e?"grabbing":"grab"}function pC(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="")}const hC={setGrabCursor:fC,unsetGrabCursor:pC};function mC(e,t=this){function n(r){if(!r||r===ur()||r===wt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function gC(e){const t=this,n=ur(),r=wt(),i=t.touchEventsData;i.evCache.push(e);const{params:s,touches:o,enabled:a}=t;if(!a||!s.simulateTouch&&e.pointerType==="mouse"||t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let l=e;l.originalEvent&&(l=l.originalEvent);let u=l.target;if(s.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(u)||"which"in l&&l.which===3||"button"in l&&l.button>0||i.isTouched&&i.isMoved)return;const c=!!s.noSwipingClass&&s.noSwipingClass!=="",d=e.composedPath?e.composedPath():e.path;c&&l.target&&l.target.shadowRoot&&d&&(u=d[0]);const p=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,g=!!(l.target&&l.target.shadowRoot);if(s.noSwiping&&(g?mC(p,u):u.closest(p))){t.allowClick=!0;return}if(s.swipeHandler&&!u.closest(s.swipeHandler))return;o.currentX=l.pageX,o.currentY=l.pageY;const v=o.currentX,y=o.currentY,x=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,f=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(x&&(v<=f||v>=r.innerWidth-f))if(x==="prevent")e.preventDefault();else return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=v,o.startY=y,i.touchStartTime=os(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let h=!0;u.matches(i.focusableElements)&&(h=!1,u.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==u&&n.activeElement.blur();const m=h&&t.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||m)&&!u.isContentEditable&&l.preventDefault(),t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function vC(e){const t=ur(),n=this,r=n.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:a}=n;if(!a||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const u=r.evCache.findIndex(k=>k.pointerId===l.pointerId);u>=0&&(r.evCache[u]=l);const c=r.evCache.length>1?r.evCache[0]:l,d=c.pageX,p=c.pageY;if(l.preventedByNestedSwiper){s.startX=d,s.startY=p;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:d,startY:p,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:d,currentY:p}),r.touchStartTime=os());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<s.startY&&n.translate<=n.maxTranslate()||p>s.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(d<s.startX&&n.translate<=n.maxTranslate()||d>s.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}if(r.allowTouchCallbacks&&n.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;s.currentX=d,s.currentY=p;const g=s.currentX-s.startX,v=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(g**2+v**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let k;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:g*g+v*v>=25&&(k=Math.atan2(Math.abs(v),Math.abs(g))*180/Math.PI,r.isScrolling=n.isHorizontal()?k>i.touchAngle:90-k>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&r.evCache.length>1){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let y=n.isHorizontal()?g:v,x=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(y=Math.abs(y)*(o?1:-1),x=Math.abs(x)*(o?1:-1)),s.diff=y,y*=i.touchRatio,o&&(y=-y,x=-x);const f=n.touchesDirection;n.swipeDirection=y>0?"prev":"next",n.touchesDirection=x>0?"prev":"next";const h=n.params.loop&&!i.cssMode;if(!r.isMoved){if(h&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(k)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let m;r.isMoved&&f!==n.touchesDirection&&h&&Math.abs(y)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),m=!0),n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=y+r.startTranslate;let w=!0,C=i.resistanceRatio;if(i.touchReleaseOnEdges&&(C=0),y>0?(h&&!m&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+y)**C))):y<0&&(h&&!m&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-y)**C))),w&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(y)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function yC(e){const t=this,n=t.touchEventsData,r=n.evCache.findIndex(m=>m.pointerId===e.pointerId);if(r>=0&&n.evCache.splice(r,1),["pointercancel","pointerout","pointerleave"].includes(e.type))return;const{params:i,touches:s,rtlTranslate:o,slidesGrid:a,enabled:l}=t;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let u=e;if(u.originalEvent&&(u=u.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",u),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&i.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}i.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const c=os(),d=c-n.touchStartTime;if(t.allowClick){const m=u.path||u.composedPath&&u.composedPath();t.updateClickedSlide(m&&m[0]||u.target),t.emit("tap click",u),d<300&&c-n.lastClickTime<300&&t.emit("doubleTap doubleClick",u)}if(n.lastClickTime=os(),tc(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||s.diff===0||n.currentTranslate===n.startTranslate){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(i.followFinger?p=o?t.translate:-t.translate:p=-n.currentTranslate,i.cssMode)return;if(t.params.freeMode&&i.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:p});return}let g=0,v=t.slidesSizesGrid[0];for(let m=0;m<a.length;m+=m<i.slidesPerGroupSkip?1:i.slidesPerGroup){const w=m<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof a[m+w]<"u"?p>=a[m]&&p<a[m+w]&&(g=m,v=a[m+w]-a[m]):p>=a[m]&&(g=m,v=a[a.length-1]-a[a.length-2])}let y=null,x=null;i.rewind&&(t.isBeginning?x=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(y=0));const f=(p-a[g])/v,h=g<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(d>i.longSwipesMs){if(!i.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(f>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?y:g+h):t.slideTo(g)),t.swipeDirection==="prev"&&(f>1-i.longSwipesRatio?t.slideTo(g+h):x!==null&&f<0&&Math.abs(f)>i.longSwipesRatio?t.slideTo(x):t.slideTo(g))}else{if(!i.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(u.target===t.navigation.nextEl||u.target===t.navigation.prevEl)?u.target===t.navigation.nextEl?t.slideTo(g+h):t.slideTo(g):(t.swipeDirection==="next"&&t.slideTo(y!==null?y:g+h),t.swipeDirection==="prev"&&t.slideTo(x!==null?x:g))}}let Dp;function Fp(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!a?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(Dp),Dp=setTimeout(()=>{e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function wC(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function xC(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const s=e.maxTranslate()-e.minTranslate();s===0?i=0:i=(e.translate-e.minTranslate())/s,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}const ho=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){const i=r.querySelector(`.${e.params.lazyPreloaderClass}`);i&&i.remove()}};function SC(e){const t=this;ho(t,e.target),t.update()}let jp=!1;function CC(){}const Zg=(e,t)=>{const n=ur(),{params:r,el:i,wrapperEl:s,device:o}=e,a=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",u=t;i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&s[l]("scroll",e.onScroll),r.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Fp,!0):e[u]("observerUpdate",Fp,!0),i[l]("load",e.onLoad,{capture:!0})};function kC(){const e=this,t=ur(),{params:n}=e;e.onTouchStart=gC.bind(e),e.onTouchMove=vC.bind(e),e.onTouchEnd=yC.bind(e),n.cssMode&&(e.onScroll=xC.bind(e)),e.onClick=wC.bind(e),e.onLoad=SC.bind(e),jp||(t.addEventListener("touchstart",CC),jp=!0),Zg(e,"on")}function TC(){Zg(this,"off")}const EC={attachEvents:kC,detachEvents:TC},Bp=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function PC(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=e.getBreakpoint(s,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const l=(o in s?s[o]:void 0)||e.originalParams,u=Bp(e,r),c=Bp(e,l),d=r.enabled;u&&!c?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&c&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(y=>{const x=r[y]&&r[y].enabled,f=l[y]&&l[y].enabled;x&&!f&&e[y].disable(),!x&&f&&e[y].enable()});const p=l.direction&&l.direction!==r.direction,g=r.loop&&(l.slidesPerView!==r.slidesPerView||p);p&&n&&e.changeDirection(),ut(e.params,l);const v=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),d&&!v?e.disable():!d&&v&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",l),g&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",l)}function bC(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=wt(),s=t==="window"?i.innerHeight:n.clientHeight,o=Object.keys(e).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:s*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:u}=o[a];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=l):u<=n.clientWidth&&(r=l)}return r||"max"}const MC={setBreakpoint:PC,getBreakpoint:bC};function AC(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function LC(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:s}=e,o=AC(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function _C(){const e=this,{el:t,classNames:n}=e;t.classList.remove(...n),e.emitContainerClasses()}const OC={addClasses:LC,removeClasses:_C};function RC(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,s=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>s}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}const IC={checkOverflow:RC},Hp={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",runCallbacksOnInit:!0,_emitClasses:!1};function NC(e,t){return function(r={}){const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){ut(t,r);return}if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&e[i]===!0&&(e[i]={auto:!0}),!(i in e&&"enabled"in s)){ut(t,r);return}e[i]===!0&&(e[i]={enabled:!0}),typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),ut(t,r)}}const Ol={eventsEmitter:O3,update:H3,translate:K3,transition:J3,slide:aC,loop:dC,grabCursor:hC,events:EC,breakpoints:MC,checkOverflow:IC,classes:OC},Rl={};let as=class Qt{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=ut({},r),n&&!r.el&&(r.el=n);const i=ur();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const l=[];return i.querySelectorAll(r.el).forEach(u=>{const c=ut({},r,{el:u});l.push(new Qt(c))}),l}const s=this;s.__swiper__=!0,s.support=Kg(),s.device=b3({userAgent:r.userAgent}),s.browser=A3(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],r.modules&&Array.isArray(r.modules)&&s.modules.push(...r.modules);const o={};s.modules.forEach(l=>{l({params:r,swiper:s,extendParams:NC(r,o),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const a=ut({},Hp,o);return s.params=ut({},a,Rl,r),s.originalParams=ut({},s.params),s.passedParams=ut({},r),s.params&&s.params.on&&Object.keys(s.params.on).forEach(l=>{s.on(l,s.params.on[l])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:os(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=rn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*t+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:s,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:u}=r;let c=1;if(i.centeredSlides){let d=s[u].swiperSlideSize,p;for(let g=u+1;g<s.length;g+=1)s[g]&&!p&&(d+=s[g].swiperSlideSize,c+=1,d>l&&(p=!0));for(let g=u-1;g>=0;g-=1)s[g]&&!p&&(d+=s[g].swiperSlideSize,c+=1,d>l&&(p=!0))}else if(t==="current")for(let d=u+1;d<s.length;d+=1)(n?o[d]+a[d]-o[u]<l:o[d]-o[u]<l)&&(c+=1);else for(let d=u-1;d>=0;d-=1)o[u]-o[d]<l&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&ho(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const o=t.rtlTranslate?t.translate*-1:t.translate,a=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}let s;t.params.freeMode&&t.params.freeMode.enabled?(i(),t.params.autoHeight&&t.updateAutoHeight()):((t.params.slidesPerView==="auto"||t.params.slidesPerView>1)&&t.isEnd&&!t.params.centeredSlides?s=t.slideTo(t.slides.length-1,0,!1,!0):s=t.slideTo(t.activeIndex,0,!1,!0),s||i()),r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(s=>{t==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.shadowEl&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):rn(r,i())[0])();return!o&&n.params.createElements&&(o=Yg("div",n.params.wrapperClass),r.append(o),rn(r,`.${n.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement?r:o,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||kn(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||kn(r,"direction")==="rtl"),wrongRTL:kn(o,"display")==="-webkit-box"}),!0}init(t){const n=this;return n.initialized||n.mount(t)===!1||(n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents(),[...n.el.querySelectorAll('[loading="lazy"]')].forEach(i=>{i.complete?ho(n,i):i.addEventListener("load",s=>{ho(n,s.target)})}),n.initialized=!0,n.emit("init"),n.emit("afterInit")),n}destroy(t=!0,n=!0){const r=this,{params:i,el:s,wrapperEl:o,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),s.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el.swiper=null,y3(r)),r.destroyed=!0),null}static extendDefaults(t){ut(Rl,t)}static get extendedDefaults(){return Rl}static get defaults(){return Hp}static installModule(t){Qt.prototype.__modules__||(Qt.prototype.__modules__=[]);const n=Qt.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Qt.installModule(n)),Qt):(Qt.installModule(t),Qt)}};Object.keys(Ol).forEach(e=>{Object.keys(Ol[e]).forEach(t=>{as.prototype[t]=Ol[e][t]})});as.use([L3,_3]);function zC(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let s=rn(e.el,`.${r[i]}`)[0];s||(s=Yg("div",r[i]),s.className=r[i],e.el.append(s)),n[i]=s,t[i]=s}}),n}function pi(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function VC({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let s,o=0;const a=f=>(Array.isArray(f)||(f=[f].filter(h=>!!h)),f);function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function u(f,h){const{bulletActiveClass:m}=e.params.pagination;f&&(f=f[`${h==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${m}-${h}`),f=f[`${h==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${m}-${h}-${h}`)))}function c(f){const h=f.target.closest(pi(e.params.pagination.bulletClass));if(!h)return;f.preventDefault();const m=dn(h)*e.params.slidesPerGroup;e.params.loop?e.slideToLoop(m):e.slideTo(m)}function d(){const f=e.rtl,h=e.params.pagination;if(l())return;let m=e.pagination.el;m=a(m);let w;const C=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,k=e.params.loop?Math.ceil(C/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?w=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex:typeof e.snapIndex<"u"?w=e.snapIndex:w=e.activeIndex||0,h.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const E=e.pagination.bullets;let b,_,$;if(h.dynamicBullets&&(s=nc(E[0],e.isHorizontal()?"width":"height",!0),m.forEach(M=>{M.style[e.isHorizontal()?"width":"height"]=`${s*(h.dynamicMainBullets+4)}px`}),h.dynamicMainBullets>1&&e.previousIndex!==void 0&&(o+=w-(e.previousIndex||0),o>h.dynamicMainBullets-1?o=h.dynamicMainBullets-1:o<0&&(o=0)),b=Math.max(w-o,0),_=b+(Math.min(E.length,h.dynamicMainBullets)-1),$=(_+b)/2),E.forEach(M=>{M.classList.remove(...["","-next","-next-next","-prev","-prev-prev","-main"].map(L=>`${h.bulletActiveClass}${L}`))}),m.length>1)E.forEach(M=>{const L=dn(M);L===w&&M.classList.add(h.bulletActiveClass),h.dynamicBullets&&(L>=b&&L<=_&&M.classList.add(`${h.bulletActiveClass}-main`),L===b&&u(M,"prev"),L===_&&u(M,"next"))});else{const M=E[w];if(M&&M.classList.add(h.bulletActiveClass),h.dynamicBullets){const L=E[b],j=E[_];for(let Y=b;Y<=_;Y+=1)E[Y].classList.add(`${h.bulletActiveClass}-main`);u(L,"prev"),u(j,"next")}}if(h.dynamicBullets){const M=Math.min(E.length,h.dynamicMainBullets+4),L=(s*M-s)/2-$*s,j=f?"right":"left";E.forEach(Y=>{Y.style[e.isHorizontal()?j:"top"]=`${L}px`})}}m.forEach((E,b)=>{if(h.type==="fraction"&&(E.querySelectorAll(pi(h.currentClass)).forEach(_=>{_.textContent=h.formatFractionCurrent(w+1)}),E.querySelectorAll(pi(h.totalClass)).forEach(_=>{_.textContent=h.formatFractionTotal(k)})),h.type==="progressbar"){let _;h.progressbarOpposite?_=e.isHorizontal()?"vertical":"horizontal":_=e.isHorizontal()?"horizontal":"vertical";const $=(w+1)/k;let M=1,L=1;_==="horizontal"?M=$:L=$,E.querySelectorAll(pi(h.progressbarFillClass)).forEach(j=>{j.style.transform=`translate3d(0,0,0) scaleX(${M}) scaleY(${L})`,j.style.transitionDuration=`${e.params.speed}ms`})}h.type==="custom"&&h.renderCustom?(E.innerHTML=h.renderCustom(e,w+1,k),b===0&&r("paginationRender",E)):(b===0&&r("paginationRender",E),r("paginationUpdate",E)),e.params.watchOverflow&&e.enabled&&E.classList[e.isLocked?"add":"remove"](h.lockClass)})}function p(){const f=e.params.pagination;if(l())return;const h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let m=e.pagination.el;m=a(m);let w="";if(f.type==="bullets"){let C=e.params.loop?Math.ceil(h/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&C>h&&(C=h);for(let k=0;k<C;k+=1)f.renderBullet?w+=f.renderBullet.call(e,k,f.bulletClass):w+=`<${f.bulletElement} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?w=f.renderFraction.call(e,f.currentClass,f.totalClass):w=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?w=f.renderProgressbar.call(e,f.progressbarFillClass):w=`<span class="${f.progressbarFillClass}"></span>`),m.forEach(C=>{f.type!=="custom"&&(C.innerHTML=w||""),f.type==="bullets"&&(e.pagination.bullets=[...C.querySelectorAll(pi(f.bulletClass))])}),f.type!=="custom"&&r("paginationRender",m[0])}function g(){e.params.pagination=zC(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let h;typeof f.el=="string"&&e.isElement&&(h=e.el.shadowRoot.querySelector(f.el)),!h&&typeof f.el=="string"&&(h=[...document.querySelectorAll(f.el)]),h||(h=f.el),!(!h||h.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(h)&&h.length>1&&(h=[...e.el.querySelectorAll(f.el)],h.length>1&&(h=h.filter(m=>Xg(m,".swiper")[0]===e.el)[0])),Array.isArray(h)&&h.length===1&&(h=h[0]),Object.assign(e.pagination,{el:h}),h=a(h),h.forEach(m=>{f.type==="bullets"&&f.clickable&&m.classList.add(f.clickableClass),m.classList.add(f.modifierClass+f.type),m.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(m.classList.add(`${f.modifierClass}${f.type}-dynamic`),o=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&m.classList.add(f.progressbarOppositeClass),f.clickable&&m.addEventListener("click",c),e.enabled||m.classList.add(f.lockClass)}))}function v(){const f=e.params.pagination;if(l())return;let h=e.pagination.el;h&&(h=a(h),h.forEach(m=>{m.classList.remove(f.hiddenClass),m.classList.remove(f.modifierClass+f.type),m.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&m.removeEventListener("click",c)})),e.pagination.bullets&&e.pagination.bullets.forEach(m=>m.classList.remove(f.bulletActiveClass))}n("init",()=>{e.params.pagination.enabled===!1?x():(g(),p(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{p(),d()}),n("destroy",()=>{v()}),n("enable disable",()=>{let{el:f}=e.pagination;f&&(f=a(f),f.forEach(h=>h.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(f,h)=>{const m=h.target;let{el:w}=e.pagination;if(Array.isArray(w)||(w=[w].filter(C=>!!C)),e.params.pagination.el&&e.params.pagination.hideOnClick&&w&&w.length>0&&!m.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&m===e.navigation.nextEl||e.navigation.prevEl&&m===e.navigation.prevEl))return;const C=w[0].classList.contains(e.params.pagination.hiddenClass);r(C===!0?"paginationShow":"paginationHide"),w.forEach(k=>k.classList.toggle(e.params.pagination.hiddenClass))}});const y=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=a(f),f.forEach(h=>h.classList.remove(e.params.pagination.paginationDisabledClass))),g(),p(),d()},x=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=a(f),f.forEach(h=>h.classList.add(e.params.pagination.paginationDisabledClass))),v()};Object.assign(e.pagination,{enable:y,disable:x,render:p,update:d,init:g,destroy:v})}function $C(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:s,overwriteParams:o,perspective:a,recreateShadows:l,getEffectParams:u}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),a&&a()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const d=o?o():{};Object.assign(n.params,d),Object.assign(n.originalParams,d)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(d,p)=>{n.params.effect===t&&s(p)}),r("transitionEnd",()=>{if(n.params.effect===t&&l){if(!u||!u().slideShadows)return;n.slides.forEach(d=>{d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p=>p.remove())}),l()}});let c;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(c=!0),requestAnimationFrame(()=>{c&&n.slides&&n.slides.length&&(i(),c=!1)}))})}function DC(e,t){const n=Wg(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function FC({swiper:e,duration:t,transformElements:n,allSlides:r}){const{activeIndex:i}=e,s=o=>o.parentElement?o.parentElement:e.slides.filter(l=>l.shadowEl&&l.shadowEl===o.parentNode)[0];if(e.params.virtualTranslate&&t!==0){let o=!1,a;r?a=n:a=n.filter(l=>{const u=l.classList.contains("swiper-slide-transform")?s(l):l;return dn(u)===i}),a.forEach(l=>{T3(l,()=>{if(o||!e||e.destroyed)return;o=!0,e.animating=!1;const u=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(u)})})}}function jC({swiper:e,extendParams:t,on:n}){t({fadeEffect:{crossFade:!1}}),$C({effect:"fade",swiper:e,on:n,setTranslate:()=>{const{slides:s}=e,o=e.params.fadeEffect;for(let a=0;a<s.length;a+=1){const l=e.slides[a];let c=-l.swiperSlideOffset;e.params.virtualTranslate||(c-=e.translate);let d=0;e.isHorizontal()||(d=c,c=0);const p=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(l.progress),0):1+Math.min(Math.max(l.progress,-1),0),g=DC(o,l);g.style.opacity=p,g.style.transform=`translate3d(${c}px, ${d}px, 0px)`}},setTransition:s=>{const o=e.slides.map(a=>Wg(a));o.forEach(a=>{a.style.transitionDuration=`${s}ms`}),FC({swiper:e,duration:s,transformElements:o,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function or(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Tn(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:or(t[r])&&or(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Tn(e[r],t[r]):e[r]=t[r]})}function qg(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Jg(e={}){return e.pagination&&typeof e.pagination.el>"u"}function e1(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function t1(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function BC(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}const n1=["modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control","injectStyles","injectStylesUrls"];function HC(e={},t=!0){const n={on:{}},r={},i={};Tn(n,as.defaults),Tn(n,as.extendedDefaults),n._emitClasses=!0,n.init=!1;const s={},o=n1.map(l=>l.replace(/_/,"")),a=Object.assign({},e);return Object.keys(a).forEach(l=>{typeof e[l]>"u"||(o.indexOf(l)>=0?or(e[l])?(n[l]={},i[l]={},Tn(n[l],e[l]),Tn(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:s[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:s,events:r}}function UC({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:s},o){qg(o)&&t&&n&&(s.params.navigation.nextEl=t,s.originalParams.navigation.nextEl=t,s.params.navigation.prevEl=n,s.originalParams.navigation.prevEl=n),Jg(o)&&r&&(s.params.pagination.el=r,s.originalParams.pagination.el=r),e1(o)&&i&&(s.params.scrollbar.el=i,s.originalParams.scrollbar.el=i),s.init(e)}function GC(e,t,n,r,i){const s=[];if(!t)return s;const o=l=>{s.indexOf(l)<0&&s.push(l)};if(n&&r){const l=r.map(i),u=n.map(i);l.join("")!==u.join("")&&o("children"),r.length!==n.length&&o("children")}return n1.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(or(e[l])&&or(t[l])){const u=Object.keys(e[l]),c=Object.keys(t[l]);u.length!==c.length?o(l):(u.forEach(d=>{e[l][d]!==t[l][d]&&o(l)}),c.forEach(d=>{e[l][d]!==t[l][d]&&o(l)}))}else e[l]!==t[l]&&o(l)}),s}function r1(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function i1(e){const t=[];return de.Children.toArray(e).forEach(n=>{r1(n)?t.push(n):n.props&&n.props.children&&i1(n.props.children).forEach(r=>t.push(r))}),t}function WC(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return de.Children.toArray(e).forEach(r=>{if(r1(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=i1(r.props.children);i.length>0?i.forEach(s=>t.push(s)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function YC({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:s,scrollbarEl:o,paginationEl:a}){const l=r.filter(b=>b!=="children"&&b!=="direction"&&b!=="wrapperClass"),{params:u,pagination:c,navigation:d,scrollbar:p,virtual:g,thumbs:v}=e;let y,x,f,h,m,w,C,k;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&u.thumbs&&!u.thumbs.swiper&&(y=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(x=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||a)&&(u.pagination||u.pagination===!1)&&c&&!c.el&&(f=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||o)&&(u.scrollbar||u.scrollbar===!1)&&p&&!p.el&&(h=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||s)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(m=!0);const E=b=>{e[b]&&(e[b].destroy(),b==="navigation"?(e.isElement&&(e[b].prevEl.remove(),e[b].nextEl.remove()),u[b].prevEl=void 0,u[b].nextEl=void 0,e[b].prevEl=void 0,e[b].nextEl=void 0):(e.isElement&&e[b].el.remove(),u[b].el=void 0,e[b].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?w=!0:!u.loop&&n.loop?C=!0:k=!0),l.forEach(b=>{if(or(u[b])&&or(n[b]))Tn(u[b],n[b]);else{const _=n[b];(_===!0||_===!1)&&(b==="navigation"||b==="pagination"||b==="scrollbar")?_===!1&&E(b):u[b]=n[b]}}),l.includes("controller")&&!x&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&g&&u.virtual.enabled&&(g.slides=t,g.update(!0)),r.includes("children")&&t&&u.loop&&(k=!0),y&&v.init()&&v.update(!0),x&&(e.controller.control=u.controller.control),f&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),e.el.shadowEl.appendChild(a)),a&&(u.pagination.el=a),c.init(),c.render(),c.update()),h&&(e.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-scrollbar"),e.el.shadowEl.appendChild(o)),o&&(u.scrollbar.el=o),p.init(),p.updateSize(),p.setTranslate()),m&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),e.el.shadowEl.appendChild(i)),(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-prev"),e.el.shadowEl.appendChild(s))),i&&(u.navigation.nextEl=i),s&&(u.navigation.prevEl=s),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(w||k)&&e.loopDestroy(),(C||k)&&e.loopCreate(),e.update()}function XC(e,t,n){if(!n)return null;const r=c=>{let d=c;return c<0?d=t.length+c:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:s,to:o}=n,a=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,u=[];for(let c=a;c<l;c+=1)c>=s&&c<=o&&u.push(t[r(c)]);return u.map(c=>de.cloneElement(c,{swiper:e,style:i}))}const KC=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function _i(e,t){return typeof window>"u"?T.useEffect(e,t):T.useLayoutEffect(e,t)}const Up=T.createContext(null),QC=T.createContext(null);function rc(){return rc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rc.apply(this,arguments)}const s1=T.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:s,onSwiper:o,...a}=e===void 0?{}:e,l=!1;const[u,c]=T.useState("swiper"),[d,p]=T.useState(null),[g,v]=T.useState(!1),y=T.useRef(!1),x=T.useRef(null),f=T.useRef(null),h=T.useRef(null),m=T.useRef(null),w=T.useRef(null),C=T.useRef(null),k=T.useRef(null),E=T.useRef(null),{params:b,passedParams:_,rest:$,events:M}=HC(a),{slides:L,slots:j}=WC(s),Y=()=>{v(!g)};Object.assign(b.on,{_containerClasses(V,B){c(B)}});const X=()=>{Object.assign(b.on,M),l=!0;const V={...b};if(delete V.wrapperClass,f.current=new as(V),f.current.virtual&&f.current.params.virtual.enabled){f.current.virtual.slides=L;const B={cache:!1,slides:L,renderExternal:p,renderExternalUpdate:!1};Tn(f.current.params.virtual,B),Tn(f.current.originalParams.virtual,B)}};x.current||X(),f.current&&f.current.on("_beforeBreakpoint",Y);const oe=()=>{l||!M||!f.current||Object.keys(M).forEach(V=>{f.current.on(V,M[V])})},fe=()=>{!M||!f.current||Object.keys(M).forEach(V=>{f.current.off(V,M[V])})};T.useEffect(()=>()=>{f.current&&f.current.off("_beforeBreakpoint",Y)}),T.useEffect(()=>{!y.current&&f.current&&(f.current.emitSlidesClasses(),y.current=!0)}),_i(()=>{if(t&&(t.current=x.current),!!x.current)return f.current.destroyed&&X(),UC({el:x.current,nextEl:w.current,prevEl:C.current,paginationEl:k.current,scrollbarEl:E.current,swiper:f.current},b),o&&o(f.current),()=>{f.current&&!f.current.destroyed&&f.current.destroy(!0,!1)}},[]),_i(()=>{oe();const V=GC(_,h.current,L,m.current,B=>B.key);return h.current=_,m.current=L,V.length&&f.current&&!f.current.destroyed&&YC({swiper:f.current,slides:L,passedParams:_,changedParams:V,nextEl:w.current,prevEl:C.current,scrollbarEl:E.current,paginationEl:k.current}),()=>{fe()}}),_i(()=>{KC(f.current)},[d]);function R(){return b.virtual?XC(f.current,L,d):L.map((V,B)=>de.cloneElement(V,{swiper:f.current,swiperSlideIndex:B}))}return de.createElement(r,rc({ref:x,className:t1(`${u}${n?` ${n}`:""}`)},$),de.createElement(QC.Provider,{value:f.current},j["container-start"],de.createElement(i,{className:BC(b.wrapperClass)},j["wrapper-start"],R(),j["wrapper-end"]),qg(b)&&de.createElement(de.Fragment,null,de.createElement("div",{ref:C,className:"swiper-button-prev"}),de.createElement("div",{ref:w,className:"swiper-button-next"})),e1(b)&&de.createElement("div",{ref:E,className:"swiper-scrollbar"}),Jg(b)&&de.createElement("div",{ref:k,className:"swiper-pagination"}),j["container-end"]))});s1.displayName="Swiper";function ic(){return ic=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ic.apply(this,arguments)}const o1=T.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:s,zoom:o,lazy:a,virtualIndex:l,swiperSlideIndex:u,...c}=e===void 0?{}:e;const d=T.useRef(null),[p,g]=T.useState("swiper-slide"),[v,y]=T.useState(!1);function x(w,C,k){C===d.current&&g(k)}_i(()=>{if(typeof u<"u"&&(d.current.swiperSlideIndex=u),t&&(t.current=d.current),!(!d.current||!s)){if(s.destroyed){p!=="swiper-slide"&&g("swiper-slide");return}return s.on("_slideClass",x),()=>{s&&s.off("_slideClass",x)}}}),_i(()=>{s&&d.current&&!s.destroyed&&g(s.getSlideClasses(d.current))},[s]);const f={isActive:p.indexOf("swiper-slide-active")>=0,isVisible:p.indexOf("swiper-slide-visible")>=0,isPrev:p.indexOf("swiper-slide-prev")>=0,isNext:p.indexOf("swiper-slide-next")>=0},h=()=>typeof r=="function"?r(f):r,m=()=>{y(!0)};return de.createElement(n,ic({ref:d,className:t1(`${p}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:m},c),o&&de.createElement(Up.Provider,{value:f},de.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},h(),a&&!v&&de.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&de.createElement(Up.Provider,{value:f},h(),a&&!v&&de.createElement("div",{className:"swiper-lazy-preloader"})))});o1.displayName="SwiperSlide";const ZC=[{img:c3,title:"Todo App",description:"Todo List app built with ReactJS. Features: easy-to-use interface, fast and responsive, sleek UI, saved in localStorage.",previewLink:"https://vladislavdegtyarenko.github.io/react-todo-app/",codeLink:"https://github.com/VladislavDegtyarenko/react-todo-app"},{img:d3,title:"Snake Game",description:"A classic Snake Game clone, built using pure (Vanilla) JavaScript, with a nostalgic and classic gameplay experience.",previewLink:"https://vladislavdegtyarenko.github.io/snake-game-js/",codeLink:"https://github.com/VladislavDegtyarenko/snake-game-js"},{img:f3,title:"Ocular",description:'Delivered front-end for "Ocular" medical center website, providing a seamless user experience for ophthalmology patients.',previewLink:"https://ocular.com.ua/",codeLink:"https://github.com/VladislavDegtyarenko/Ocular"},{img:p3,title:"His.ua",description:'Developed front-end for "His," a Ukrainian brand for exclusive furniture.',previewLink:"https://his.ua/"},{img:m3,title:"Alarms & Clock Clone",description:'Windows 10 "Alarms & Clock" app clone created with ReactJS, Framer Motion, and FluentUI library',previewLink:"https://vladislavdegtyarenko.github.io/react-windows-clock-clone/",codeLink:"https://github.com/VladislavDegtyarenko/react-windows-clock-clone"},{img:h3,title:"Password Generator",description:"A fast and secure Password Generator built using Preact and Web Crypto API for strong random password generation.",previewLink:"https://vladislavdegtyarenko.github.io/preact-password-generator/",codeLink:"https://github.com/VladislavDegtyarenko/preact-password-generator"},{img:g3,title:"Tenzies Game",description:"A simple tenzies game built using React",previewLink:"https://vladislavdegtyarenko.github.io/react-tenzies/",codeLink:"https://github.com/VladislavDegtyarenko/react-tenzies"}],qC=te(vs)`
  .projects {
    &__descr {
      margin-top: 48px;
    }
  }

  .slider {
    display: flex;
    align-items: center;
    margin-top: 48px;
    &__main {
      width: calc(100% - (32px + 16px) * 2);

      @media screen and (max-width: 991.98px) {
        width: 100%;
      }
    }
    &__arrow {
      background-color: transparent;
      border: none;
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      position: relative;
      cursor: pointer;
      z-index: 1;
      color: ${({theme:e})=>e.cyan};

      &-right {
        transform: rotate(180deg);
      }
      &-disabled {
        opacity: 0.5;
        pointer-events: none;
        color: ${({theme:e})=>e.grey};
        transition: color 0s;
      }
      > * {
        width: 100%;
        height: 100%;
        transition: color var(--duration);
        color: currentColor;
      }
      &:hover {
        color: #178695;
      }

      @media screen and (max-width: 991.98px) {
        display: none;
      }
    }

    &__main {
      margin: 0 16px;
    }

    .swiper-pagination {
      position: relative;
      margin-top: 16px;
      &-bullet {
        opacity: 0.5;
        background-color: ${({theme:e})=>e.cyan};
        &-active {
          opacity: 1;
        }
      }
    }
  }
`,JC=({previewProject:e})=>{const[t,n]=T.useState(!0),[r,i]=T.useState(!1),s=T.useRef(),o=a=>{n(a.activeIndex===0),i(a.activeIndex===a.slides.length-1)};return H(Zr,{children:[S(qC,{id:"projects",children:S(ht,{children:H("div",{className:"projects",children:[S(ja,{children:"Projects"}),H(Rd,{className:"projects__descr",children:["A concise overview of selected frontend development projects, showcasing skills and capabilities.",S("br",{})," ",S("br",{})," If you want to check my actual frontend skills, let’s get a call"]}),H("div",{className:"slider",children:[S("button",{onClick:()=>s.current.slidePrev(),className:`slider__arrow ${t?"slider__arrow-disabled":""}`,children:S(Vp,{})}),S(s1,{className:"slider__main",modules:[VC,jC],pagination:{dynamicBullets:!0},spaceBetween:50,slidesPerView:1,effect:"fade",fadeEffect:{crossFade:!0},onBeforeInit:a=>{s.current=a},onRealIndexChange:a=>o(a),children:ZC.map(({img:a,title:l,description:u,previewLink:c,codeLink:d})=>S(o1,{children:S(u3,{img:a,title:l,description:u,previewLink:c,previewProject:e,codeLink:d})},l))}),S("button",{onClick:()=>s.current.slideNext(),className:`slider__arrow slider__arrow-right ${r?"slider__arrow-disabled":""}`,children:S(Vp,{})})]})]})})}),S(ht,{children:S(ys,{})})]})},e5="/vd-developer-portfolio/assets/o-vasin-22044422.jpg",t5=te(vs)`
  .reviews {
    &__descr {
      margin-top: 48px;
    }
    &__card {
      margin-top: 48px;
      padding: 32px;
      background: ${({theme:e})=>e.cardBg};
      border: 4px solid rgba(27, 154, 170, 0.2);
      border-radius: var(--borderRadiusNormal);

      @media screen and (max-width: 991.98px) {
        padding: 24px;
      }

      &_text {
        & > *:not(:first-child) {
          margin-top: 16px;
        }
        .bold-white {
          font-weight: 700;
          color: ${({theme:e})=>e.fg};
        }

        .bold-cyan {
          font-weight: 700;
          color: ${({theme:e})=>e.cyan};
        }
        * {
          @media screen and (max-width: 991.98px) {
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
      &_sign {
        display: flex;
        align-items: center;
        margin-top: 16px;
      }
      &_avatar {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        margin-right: 16px;
      }
      &_name {
        color: ${({theme:e})=>e.cyan};
        font-weight: 700;
      }
      &_position {
        color: ${({theme:e})=>e.grey};
      }
    }
  }
`,n5=()=>H(Zr,{children:[S(t5,{id:"reviews",children:H(ht,{children:[S(ja,{children:"Reviews"}),S(Rd,{className:"reviews__descr",children:"See what my past colleagues, managers and clients have to say about my frontend development skills."}),S(zt,{triggerOnce:!0,children:H("div",{className:"reviews__card",children:[H("div",{className:"reviews__card_text",children:[H(Rt,{children:["I had the pleasure of working with"," ",S("span",{className:"bold-white",children:"Vladislav"})," on a headless project that utilized ",S("span",{className:"bold-cyan",children:"React"})," and"," ",S("span",{className:"bold-cyan",children:"Salesforce Commerce Cloud"}),". His exceptional skills as a frontend developer were evident from the start, as he quickly learned and adapted to new technologies, workflow, and platforms. He consistently produced high-quality work, and his attention to detail was unparalleled."]}),H(Rt,{children:["Not only was ",S("span",{className:"bold-white",children:"Vladislav"})," a talented developer, but he was also an incredibly responsible and reliable team player. His dedication to the project was unwavering, and he always went above and beyond to ensure the success of the project."]}),H(Rt,{children:["I am confident that ",S("span",{className:"bold-white",children:"Vladislav"})," will make a valuable contribution to any frontend development role he takes on, and ",S("span",{className:"bold-cyan",children:"recommend him"})," without hesitation."]})]}),H("div",{className:"reviews__card_sign",children:[S("img",{src:e5,alt:"",className:"reviews__card_avatar"}),H("div",{children:[S(Rt,{className:"reviews__card_name",children:"Oleksiy Vasin"}),S(Wr,{className:"reviews__card_position",children:"Frontend Development Lead, Astound Commerce"})]})]})]})})]})}),S(ht,{children:S(ys,{})})]}),r5=()=>H("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[S("g",{clipPath:"url(#clip0_61_524)",children:S("path",{d:"M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V4C32 1.79086 30.2091 0 28 0H4ZM20.4369 13.8155L19.941 17.0485H17.335V24.8641C16.7655 24.9535 16.1819 25 15.5874 25C14.9929 25 14.4092 24.9535 13.8398 24.8641V17.0485H11V13.8155H13.8398V11.3515C13.8398 8.54835 15.5096 7 18.0643 7C19.288 7 20.568 7.21845 20.568 7.21845V9.97087H19.1576C17.7682 9.97087 17.335 10.833 17.335 11.7175V13.8155H20.4369Z",fill:"currentColor"})}),S("defs",{children:S("clipPath",{id:"clip0_61_524",children:S("rect",{width:"32",height:"32",fill:"white"})})})]}),i5=()=>H("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[S("g",{clipPath:"url(#clip0_61_469)",children:S("path",{d:"M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V4C32 1.79086 30.2091 0 28 0H4ZM14.6547 25.0111L14.6545 25.0111L14.6544 25.0111C13.5514 24.9871 12.4484 24.963 11.3461 24.9211C10.4636 24.8874 9.61226 24.6916 8.86839 24.1798C7.90401 23.5165 7.38492 22.5619 7.27871 21.4278C7.1644 20.2062 7.12857 18.9744 7.11493 17.7464C7.09573 15.9912 7.10938 14.2348 7.14692 12.4796C7.16227 11.7515 7.21089 11.0119 7.35677 10.3005C7.69458 8.65279 8.83086 7.60268 10.4871 7.31178C11.4835 7.13689 12.4907 7.13469 13.4962 7.13248H13.4962L13.7607 7.13179C15.6656 7.12539 17.5709 7.11942 19.4753 7.15141C20.2465 7.1642 21.0296 7.20899 21.7833 7.3587C23.5112 7.70249 24.6231 8.89208 24.8244 10.646C24.9554 11.7861 24.9844 12.9424 24.9946 14.0919C25.0101 15.8401 24.9892 17.5886 24.9684 19.3371V19.3372L24.9618 19.8919C24.9528 20.6451 24.9149 21.3996 24.6909 22.1273C24.2026 23.7136 23.0979 24.6268 21.4847 24.8238C20.5744 24.9349 19.6528 24.9572 18.7319 24.9794C18.4158 24.9871 18.0997 24.9947 17.7841 25.0059C17.3888 25.02 16.9927 25.0164 16.5967 25.0127C16.4168 25.011 16.2369 25.0094 16.0571 25.0094C16.0563 25.0209 16.0558 25.032 16.0558 25.0431C15.5888 25.0315 15.1218 25.0213 14.6547 25.0111ZM16.061 21.6662C19.1631 21.6543 21.6788 19.1245 21.6566 16.0386C21.6344 12.9326 19.1414 10.4472 16.0477 10.4485C12.9494 10.4498 10.4265 12.9744 10.438 16.062C10.45 19.1646 12.9716 21.6777 16.061 21.6662ZM23.1857 10.219C23.1827 9.48538 22.6001 8.91212 21.8652 8.91938C21.1443 8.92663 20.5711 9.50756 20.5732 10.2292C20.5754 10.9543 21.1691 11.5387 21.8972 11.5323C22.615 11.5259 23.1887 10.942 23.1857 10.219ZM12.4145 16.0509C12.4179 14.0372 14.0366 12.4207 16.0485 12.4207C18.0707 12.4211 19.6924 14.0496 19.6838 16.0709C19.6753 18.0846 18.0532 19.6947 16.0391 19.69C14.0268 19.6853 12.4111 18.0628 12.4145 16.0509Z",fill:"currentColor"})}),S("defs",{children:S("clipPath",{id:"clip0_61_469",children:S("rect",{width:"32",height:"32",fill:"white"})})})]}),s5=()=>H("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[H("g",{clipPath:"url(#clip0_61_468)",children:[S("rect",{x:"3",y:"3",width:"26",height:"26",stroke:"currentColor",strokeWidth:"6"}),S("path",{d:"M26.2 4H5.8C5.32261 4 4.86477 4.18964 4.52721 4.52721C4.18964 4.86477 4 5.32261 4 5.8V26.2C4 26.6774 4.18964 27.1352 4.52721 27.4728C4.86477 27.8104 5.32261 28 5.8 28H26.2C26.6774 28 27.1352 27.8104 27.4728 27.4728C27.8104 27.1352 28 26.6774 28 26.2V5.8C28 5.32261 27.8104 4.86477 27.4728 4.52721C27.1352 4.18964 26.6774 4 26.2 4ZM11.2 24.4H7.6V13.6H11.2V24.4ZM9.4 11.5C8.98742 11.4882 8.58746 11.3551 8.2501 11.1173C7.91274 10.8795 7.65294 10.5475 7.50315 10.1629C7.35337 9.77832 7.32025 9.35809 7.40793 8.95476C7.49561 8.55144 7.7002 8.18289 7.99614 7.89517C8.29207 7.60745 8.66624 7.41332 9.07188 7.33704C9.47752 7.26075 9.89664 7.30569 10.2769 7.46625C10.6571 7.62681 10.9816 7.89586 11.2098 8.23978C11.438 8.5837 11.5598 8.98725 11.56 9.4C11.5505 9.96442 11.318 10.5021 10.9133 10.8956C10.5085 11.2891 9.96446 11.5064 9.4 11.5ZM24.4 24.4H20.8V18.712C20.8 17.008 20.08 16.396 19.144 16.396C18.8696 16.4143 18.6015 16.4866 18.3551 16.6088C18.1087 16.731 17.8888 16.9006 17.7082 17.108C17.5275 17.3154 17.3897 17.5565 17.3025 17.8173C17.2152 18.0782 17.1804 18.3537 17.2 18.628C17.194 18.6838 17.194 18.7402 17.2 18.796V24.4H13.6V13.6H17.08V15.16C17.431 14.626 17.9133 14.1911 18.4806 13.8969C19.0479 13.6028 19.6813 13.4592 20.32 13.48C22.18 13.48 24.352 14.512 24.352 17.872L24.4 24.4Z",fill:"currentColor"})]}),S("defs",{children:S("clipPath",{id:"clip0_61_468",children:S("rect",{width:"32",height:"32",rx:"4",fill:"white"})})})]}),o5=()=>H("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[S("g",{clipPath:"url(#clip0_61_500)",children:S("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V4C32 1.79086 30.2091 0 28 0H4ZM7 16.2276C7 11.1294 11.0275 7 16 7C20.9725 7 25 11.1294 25 16.2276C24.9995 18.1611 24.4077 20.0457 23.3078 21.6162C22.2079 23.1866 20.6554 24.364 18.8687 24.9824C18.4188 25.0746 18.25 24.7863 18.25 24.5441C18.25 24.4399 18.2513 24.2597 18.2529 24.0198C18.2563 23.5422 18.2612 22.828 18.2612 22.0065C18.2612 21.1414 17.98 20.5877 17.6537 20.2993C19.6562 20.0687 21.76 19.2843 21.76 15.7432C21.76 14.7282 21.4113 13.9092 20.8375 13.2633C20.9275 13.0326 21.2425 12.0867 20.7475 10.8179C20.7475 10.8179 19.9937 10.5642 18.2725 11.7638C17.5525 11.5561 16.7875 11.4523 16.0225 11.4523C15.2575 11.4523 14.4925 11.5561 13.7725 11.7638C12.0513 10.5757 11.2975 10.8179 11.2975 10.8179C10.8025 12.0867 11.1175 13.0326 11.2075 13.2633C10.6337 13.9092 10.285 14.7397 10.285 15.7432C10.285 19.2728 12.3775 20.0687 14.38 20.2993C14.1213 20.53 13.885 20.9337 13.8063 21.5335C13.2888 21.7758 11.995 22.1679 11.185 20.7723C11.0162 20.4954 10.51 19.8149 9.80125 19.8264C9.0475 19.838 9.4975 20.2647 9.8125 20.4378C10.195 20.6569 10.6337 21.4759 10.735 21.7412C10.915 22.2602 11.5 23.2522 13.7613 22.8254C13.7613 23.3297 13.766 23.8143 13.7694 24.1511C13.7711 24.3305 13.7725 24.4679 13.7725 24.5441C13.7725 24.7863 13.6038 25.0631 13.1537 24.9824C9.57625 23.7597 7 20.3109 7 16.2276Z",fill:"currentColor"})}),S("defs",{children:S("clipPath",{id:"clip0_61_500",children:S("rect",{width:"32",height:"32",fill:"white"})})})]}),a5=()=>H("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[S("g",{clipPath:"url(#clip0_61_510)",children:S("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V4C32 1.79086 30.2091 0 28 0H4ZM17.9033 11.2582C16.2912 11.9287 13.0692 13.3166 8.23741 15.4217C7.45279 15.7337 7.04178 16.039 7.00436 16.3374C6.94113 16.8419 7.57279 17.0405 8.43296 17.311C8.54996 17.3477 8.67119 17.3859 8.79548 17.4263C9.64175 17.7014 10.7801 18.0232 11.3719 18.036C11.9087 18.0476 12.5079 17.8263 13.1694 17.372C17.6839 14.3246 20.0143 12.7843 20.1606 12.7511C20.2639 12.7276 20.4069 12.6982 20.5038 12.7843C20.6007 12.8705 20.5912 13.0336 20.5809 13.0774C20.5183 13.3441 18.0388 15.6493 16.7557 16.8423C16.3556 17.2142 16.0719 17.4779 16.0139 17.5382C15.884 17.6731 15.7515 17.8008 15.6243 17.9235C14.8381 18.6814 14.2485 19.2498 15.6569 20.1779C16.3337 20.6239 16.8753 20.9927 17.4156 21.3607C18.0057 21.7625 18.5943 22.1634 19.3558 22.6625C19.5498 22.7897 19.7351 22.9218 19.9156 23.0505C20.6023 23.54 21.2192 23.9799 21.9815 23.9097C22.4244 23.869 22.8818 23.4525 23.1142 22.2105C23.6633 19.2751 24.7426 12.915 24.992 10.2942C25.0139 10.0645 24.9864 9.77068 24.9643 9.64168C24.9422 9.51268 24.8961 9.32888 24.7284 9.19282C24.5298 9.03168 24.2232 8.9977 24.0861 9.00012C23.4627 9.0111 22.5063 9.34367 17.9033 11.2582Z",fill:"currentColor"})}),S("defs",{children:S("clipPath",{id:"clip0_61_510",children:S("rect",{width:"32",height:"32",fill:"white"})})})]}),l5=()=>H("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[S("g",{clipPath:"url(#clip0_61_536)",children:S("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V4C32 1.79086 30.2091 0 28 0H4ZM7.85937 10H24.1375C24.1186 10.0205 24.1023 10.0385 24.0877 10.0547L24.0876 10.0548L24.0874 10.0551C24.0612 10.084 24.0402 10.1073 24.0182 10.1293C21.7904 12.3461 19.5626 14.5629 17.3338 16.7787C16.7805 17.3286 16.1283 17.5248 15.3857 17.2502C15.1385 17.1588 14.8943 17.0015 14.7065 16.8162C12.8302 14.963 10.9615 13.1027 9.09258 11.2423L9.09241 11.2421L9.09224 11.2419L9.09171 11.2414L7.9183 10.0734C7.90878 10.0642 7.90077 10.0537 7.88691 10.0356C7.87967 10.0261 7.87084 10.0146 7.85937 10ZM12.9911 16.7867C13.0905 16.8883 13.1855 16.9866 13.2779 17.0823C13.474 17.2852 13.6585 17.4761 13.8486 17.6611C14.9807 18.7627 16.5927 18.8796 17.8192 17.9422C18.0049 17.8004 18.1721 17.633 18.3386 17.4663L18.3386 17.4663C18.379 17.4259 18.4194 17.3855 18.46 17.3455C18.5758 17.2317 18.6865 17.1128 18.8202 16.9694L18.8203 16.9692C18.8831 16.9018 18.951 16.829 19.0268 16.7487L21.4753 19.2798L24.0481 21.9394H7.9373L12.9911 16.7867ZM7 21.1244L12.0239 16.0062C10.3654 14.3217 8.67895 12.6083 7 10.9019V21.1244ZM25 10.8919V21.1055L21.4744 17.602L19.8817 16.0192L24.9565 10.8635L25 10.8919Z",fill:"currentColor"})}),S("defs",{children:S("clipPath",{id:"clip0_61_536",children:S("rect",{width:"32",height:"32",fill:"white"})})})]}),u5=te(vs)`
  .contact {
    &__descr {
      margin-top: 48px;
      color: ${({theme:e})=>e.fg};
    }
    &__wrapper {
      margin-top: 48px;
      display: grid;
      grid-auto-flow: column;
      align-content: center;
      gap: 1.5em;
      justify-content: center;

      @media screen and (max-width: 479.98px) {
        grid-auto-flow: unset;
        grid-template-columns: repeat(3, auto);
      }
    }
    &__link {
      border-radius: var(--borderRadiusSmall);
      width: 48px;
      height: 48px;
      text-decoration: none;
      color: ${({theme:e})=>e.cyan};
      transition: all var(--duration);
      display: inline-block;
      /* align-self: center; */

      &:hover {
        color: #178695;
      }
      > * {
        width: 100%;
        height: 100%;
      }
    }
  }
`,c5=()=>H(Zr,{children:[S(u5,{id:"contact",children:H(ht,{children:[S(ja,{children:"Get in Touch"}),H(Rd,{className:"contact__descr",children:["Interested in working with me or hiring me for your next project? Drop me a line and let's make it happen. ",S("br",{})," ",S("br",{})," Get in touch today and let's bring your ideas to life."]}),S("div",{className:"contact__wrapper",children:H(zt,{triggerOnce:!0,cascade:!0,damping:.1,children:[S("a",{href:"https://www.facebook.com/vladislav.degtyarenko.1996",className:"contact__link",target:"_blank",children:S(r5,{})}),S("a",{href:"https://www.instagram.com/vladislavdegtyarenko/",className:"contact__link",target:"_blank",children:S(i5,{})}),S("a",{href:"https://www.linkedin.com/in/vladislavdegtyarenko/",className:"contact__link",target:"_blank",children:S(s5,{})}),S("a",{href:"https://github.com/VladislavDegtyarenko/",className:"contact__link",target:"_blank",children:S(o5,{})}),S("a",{href:"https://t.me/Vladislav_Degtyarenko",className:"contact__link",target:"_blank",children:S(a5,{})}),S("a",{href:"mailto:vladislavdegtyarenko@gmail.com",className:"contact__link",target:"_blank",children:S(l5,{})})]})})]})}),S(ht,{children:S(ys,{})})]}),d5=te.div`
  text-align: center;
  color: ${({theme:e})=>e.grey};
  padding: 60px 0;
`,f5=()=>S(d5,{children:S(ht,{children:S(zt,{triggerOnce:!0,children:S(Wr,{children:"© Copyright 2023 | Vladyslav Dihtiarenko | All Rights Reserved"})})})}),a1=T.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ba=T.createContext({});function p5(){return T.useContext(Ba).visualElement}const Ha=T.createContext(null),Ua=typeof document<"u",Wo=Ua?T.useLayoutEffect:T.useEffect,l1=T.createContext({strict:!1});function h5(e,t,n,r){const i=p5(),s=T.useContext(l1),o=T.useContext(Ha),a=T.useContext(a1).reducedMotion,l=T.useRef();r=r||s.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;return T.useInsertionEffect(()=>{u&&u.update(n,o)}),Wo(()=>{u&&u.render()}),T.useEffect(()=>{u&&u.updateFeatures()}),(window.HandoffAppearAnimations?Wo:T.useEffect)(()=>{u&&u.animationState&&u.animationState.animateChanges()}),u}function Pr(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function m5(e,t,n){return T.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Pr(n)&&(n.current=r))},[t])}function ls(e){return typeof e=="string"||Array.isArray(e)}function Ga(e){return typeof e=="object"&&typeof e.start=="function"}const g5=["initial","animate","exit","whileHover","whileDrag","whileTap","whileFocus","whileInView"];function Wa(e){return Ga(e.animate)||g5.some(t=>ls(e[t]))}function u1(e){return Boolean(Wa(e)||e.variants)}function v5(e,t){if(Wa(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ls(n)?n:void 0,animate:ls(r)?r:void 0}}return e.inherit!==!1?t:{}}function y5(e){const{initial:t,animate:n}=v5(e,T.useContext(Ba));return T.useMemo(()=>({initial:t,animate:n}),[Gp(t),Gp(n)])}function Gp(e){return Array.isArray(e)?e.join(" "):e}const Wp={animation:["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},us={};for(const e in Wp)us[e]={isEnabled:t=>Wp[e].some(n=>!!t[n])};function w5(e){for(const t in e)us[t]={...us[t],...e[t]}}function Nd(e){const t=T.useRef(null);return t.current===null&&(t.current=e()),t.current}const Oi={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let x5=1;function S5(){return Nd(()=>{if(Oi.hasEverUpdated)return x5++})}const zd=T.createContext({}),c1=T.createContext({}),C5=Symbol.for("motionComponentSymbol");function k5({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&w5(e);function s(a,l){let u;const c={...T.useContext(a1),...a,layoutId:T5(a)},{isStatic:d}=c,p=y5(a),g=d?void 0:S5(),v=r(a,d);if(!d&&Ua){p.visualElement=h5(i,v,c,t);const y=T.useContext(c1),x=T.useContext(l1).strict;p.visualElement&&(u=p.visualElement.loadFeatures(c,x,e,g,y))}return T.createElement(Ba.Provider,{value:p},u&&p.visualElement?T.createElement(u,{visualElement:p.visualElement,...c}):null,n(i,a,g,m5(v,p.visualElement,l),v,d,p.visualElement))}const o=T.forwardRef(s);return o[C5]=i,o}function T5({layoutId:e}){const t=T.useContext(zd).id;return t&&e!==void 0?t+"-"+e:e}function E5(e){function t(r,i={}){return k5(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const P5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Vd(e){return typeof e!="string"||e.includes("-")?!1:!!(P5.indexOf(e)>-1||/[A-Z]/.test(e))}const Yo={};function b5(e){Object.assign(Yo,e)}const Ya=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ti=new Set(Ya);function d1(e,{layout:t,layoutId:n}){return ti.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Yo[e]||e==="opacity")}const at=e=>Boolean(e&&e.getVelocity),M5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},A5=Ya.length;function L5(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let s="";for(let o=0;o<A5;o++){const a=Ya[o];if(e[a]!==void 0){const l=M5[a]||a;s+=`${l}(${e[a]}) `}}return t&&!e.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(e,r?"":s):n&&r&&(s="none"),s}function f1(e){return e.startsWith("--")}const _5=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Xr=(e,t,n)=>Math.min(Math.max(n,e),t),cr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ri={...cr,transform:e=>Xr(0,1,e)},Ys={...cr,default:1},Ii=e=>Math.round(e*1e5)/1e5,cs=/(-)?([\d]*\.?[\d])+/g,sc=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,O5=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function xs(e){return typeof e=="string"}const Ss=e=>({test:t=>xs(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),mn=Ss("deg"),Xt=Ss("%"),U=Ss("px"),R5=Ss("vh"),I5=Ss("vw"),Yp={...Xt,parse:e=>Xt.parse(e)/100,transform:e=>Xt.transform(e*100)},Xp={...cr,transform:Math.round},p1={borderWidth:U,borderTopWidth:U,borderRightWidth:U,borderBottomWidth:U,borderLeftWidth:U,borderRadius:U,radius:U,borderTopLeftRadius:U,borderTopRightRadius:U,borderBottomRightRadius:U,borderBottomLeftRadius:U,width:U,maxWidth:U,height:U,maxHeight:U,size:U,top:U,right:U,bottom:U,left:U,padding:U,paddingTop:U,paddingRight:U,paddingBottom:U,paddingLeft:U,margin:U,marginTop:U,marginRight:U,marginBottom:U,marginLeft:U,rotate:mn,rotateX:mn,rotateY:mn,rotateZ:mn,scale:Ys,scaleX:Ys,scaleY:Ys,scaleZ:Ys,skew:mn,skewX:mn,skewY:mn,distance:U,translateX:U,translateY:U,translateZ:U,x:U,y:U,z:U,perspective:U,transformPerspective:U,opacity:Ri,originX:Yp,originY:Yp,originZ:U,zIndex:Xp,fillOpacity:Ri,strokeOpacity:Ri,numOctaves:Xp};function $d(e,t,n,r){const{style:i,vars:s,transform:o,transformOrigin:a}=e;let l=!1,u=!1,c=!0;for(const d in t){const p=t[d];if(f1(d)){s[d]=p;continue}const g=p1[d],v=_5(p,g);if(ti.has(d)){if(l=!0,o[d]=v,!c)continue;p!==(g.default||0)&&(c=!1)}else d.startsWith("origin")?(u=!0,a[d]=v):i[d]=v}if(t.transform||(l||r?i.transform=L5(e.transform,n,c,r):i.transform&&(i.transform="none")),u){const{originX:d="50%",originY:p="50%",originZ:g=0}=a;i.transformOrigin=`${d} ${p} ${g}`}}const Dd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function h1(e,t,n){for(const r in t)!at(t[r])&&!d1(r,n)&&(e[r]=t[r])}function N5({transformTemplate:e},t,n){return T.useMemo(()=>{const r=Dd();return $d(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function z5(e,t,n){const r=e.style||{},i={};return h1(i,r,e),Object.assign(i,N5(e,t,n)),e.transformValues?e.transformValues(i):i}function V5(e,t,n){const r={},i=z5(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const $5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function Xo(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||$5.has(e)}let m1=e=>!Xo(e);function D5(e){e&&(m1=t=>t.startsWith("on")?!Xo(t):e(t))}try{D5(require("@emotion/is-prop-valid").default)}catch{}function F5(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(m1(i)||n===!0&&Xo(i)||!t&&!Xo(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Kp(e,t,n){return typeof e=="string"?e:U.transform(t+n*e)}function j5(e,t,n){const r=Kp(t,e.x,e.width),i=Kp(n,e.y,e.height);return`${r} ${i}`}const B5={offset:"stroke-dashoffset",array:"stroke-dasharray"},H5={offset:"strokeDashoffset",array:"strokeDasharray"};function U5(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?B5:H5;e[s.offset]=U.transform(-r);const o=U.transform(t),a=U.transform(n);e[s.array]=`${o} ${a}`}function Fd(e,{attrX:t,attrY:n,originX:r,originY:i,pathLength:s,pathSpacing:o=1,pathOffset:a=0,...l},u,c,d){if($d(e,l,u,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:g,dimensions:v}=e;p.transform&&(v&&(g.transform=p.transform),delete p.transform),v&&(r!==void 0||i!==void 0||g.transform)&&(g.transformOrigin=j5(v,r!==void 0?r:.5,i!==void 0?i:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),s!==void 0&&U5(p,s,o,a,!1)}const g1=()=>({...Dd(),attrs:{}}),jd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function G5(e,t,n,r){const i=T.useMemo(()=>{const s=g1();return Fd(s,t,{enableHardwareAcceleration:!1},jd(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};h1(s,e.style,e),i.style={...s,...i.style}}return i}function W5(e=!1){return(n,r,i,s,{latestValues:o},a)=>{const u=(Vd(n)?G5:V5)(r,o,a,n),d={...F5(r,typeof n=="string",e),...u,ref:s},{children:p}=r,g=T.useMemo(()=>at(p)?p.get():p,[p]);return i&&(d["data-projection-id"]=i),T.createElement(n,{...d,children:g})}}const Bd=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function v1(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const y1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function w1(e,t,n,r){v1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(y1.has(i)?i:Bd(i),t.attrs[i])}function Hd(e,t){const{style:n}=e,r={};for(const i in n)(at(n[i])||t.style&&at(t.style[i])||d1(i,e))&&(r[i]=n[i]);return r}function x1(e,t){const n=Hd(e,t);for(const r in e)if(at(e[r])||at(t[r])){const i=r==="x"||r==="y"?"attr"+r.toUpperCase():r;n[i]=e[r]}return n}function Ud(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}const Ko=e=>Array.isArray(e),Y5=e=>Boolean(e&&typeof e=="object"&&e.mix&&e.toValue),X5=e=>Ko(e)?e[e.length-1]||0:e;function mo(e){const t=at(e)?e.get():e;return Y5(t)?t.toValue():t}function K5({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,s){const o={latestValues:Q5(r,i,s,e),renderState:t()};return n&&(o.mount=a=>n(r,a,o)),o}const S1=e=>(t,n)=>{const r=T.useContext(Ba),i=T.useContext(Ha),s=()=>K5(e,t,r,i);return n?s():Nd(s)};function Q5(e,t,n,r){const i={},s=r(e,{});for(const p in s)i[p]=mo(s[p]);let{initial:o,animate:a}=e;const l=Wa(e),u=u1(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const d=c?a:o;return d&&typeof d!="boolean"&&!Ga(d)&&(Array.isArray(d)?d:[d]).forEach(g=>{const v=Ud(e,g);if(!v)return;const{transitionEnd:y,transition:x,...f}=v;for(const h in f){let m=f[h];if(Array.isArray(m)){const w=c?m.length-1:0;m=m[w]}m!==null&&(i[h]=m)}for(const h in y)i[h]=y[h]}),i}const Z5={useVisualState:S1({scrapeMotionValuesFromProps:x1,createRenderState:g1,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}Fd(n,r,{enableHardwareAcceleration:!1},jd(t.tagName),e.transformTemplate),w1(t,n)}})},q5={useVisualState:S1({scrapeMotionValuesFromProps:Hd,createRenderState:Dd})};function J5(e,{forwardMotionProps:t=!1},n,r){return{...Vd(e)?Z5:q5,preloadedFeatures:n,useRender:W5(t),createVisualElement:r,Component:e}}function tn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const C1=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Xa(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const e4=e=>t=>C1(t)&&e(t,Xa(t));function sn(e,t,n,r){return tn(e,t,e4(n),r)}var pe;(function(e){e.Animate="animate",e.Hover="whileHover",e.Tap="whileTap",e.Drag="whileDrag",e.Focus="whileFocus",e.InView="whileInView",e.Exit="exit"})(pe||(pe={}));const t4=(e,t)=>n=>t(e(n)),In=(...e)=>e.reduce(t4);function k1(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Qp=k1("dragHorizontal"),Zp=k1("dragVertical");function T1(e){let t=!1;if(e==="y")t=Zp();else if(e==="x")t=Qp();else{const n=Qp(),r=Zp();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function E1(){const e=T1(!0);return e?(e(),!1):!0}class Bn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function qp(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(s,o)=>{if(s.type==="touch"||E1())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive(pe.Hover,t),a[r]&&a[r](s,o)};return sn(e.current,n,i,{passive:!e.getProps()[r]})}class n4 extends Bn{mount(){this.unmount=In(qp(this.node,!0),qp(this.node,!1))}unmount(){}}class r4 extends Bn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive(pe.Focus,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(pe.Focus,!1),this.isActive=!1)}mount(){this.unmount=In(tn(this.node.current,"focus",()=>this.onFocus()),tn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const P1=(e,t)=>t?e===t?!0:P1(e,t.parentElement):!1,Kt=e=>e;function Il(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Xa(n))}class i4 extends Bn{constructor(){super(...arguments),this.removeStartListeners=Kt,this.removeEndListeners=Kt,this.removeAccessibleListeners=Kt,this.startPointerPress=(t,n)=>{if(this.removeEndListeners(),this.isPressing)return;const r=this.node.getProps(),s=sn(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c}=this.node.getProps();P1(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)},{passive:!(r.onTap||r.onPointerUp)}),o=sn(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=In(s,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Il("up",this.node.getProps().onTap)};this.removeEndListeners(),this.removeEndListeners=tn(this.node.current,"keyup",o),Il("down",(a,l)=>{this.startPress(a,l)})},n=tn(this.node.current,"keydown",t),r=()=>{this.isPressing&&Il("cancel",(s,o)=>this.cancelPress(s,o))},i=tn(this.node.current,"blur",r);this.removeAccessibleListeners=In(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive(pe.Tap,!0),r&&r(t,n)}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive(pe.Tap,!1),!E1()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&r(t,n)}mount(){const t=this.node.getProps(),n=sn(this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=tn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=In(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const oc=new WeakMap,Nl=new WeakMap,s4=e=>{const t=oc.get(e.target);t&&t(e)},o4=e=>{e.forEach(s4)};function a4({root:e,...t}){const n=e||document;Nl.has(n)||Nl.set(n,{});const r=Nl.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(o4,{root:e,...t})),r[i]}function l4(e,t,n){const r=a4(t);return oc.set(e,n),r.observe(e),()=>{oc.delete(e),r.unobserve(e)}}const u4={some:0,all:1};class c4 extends Bn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}viewportFallback(){requestAnimationFrame(()=>{this.hasEnteredView=!0;const{onViewportEnter:t}=this.node.getProps();t&&t(null),this.node.animationState&&this.node.animationState.setActive(pe.InView,!0)})}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s,fallback:o=!0}=t;if(typeof IntersectionObserver>"u"){o&&this.viewportFallback();return}const a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:u4[i]},l=u=>{const{isIntersecting:c}=u;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(pe.InView,c);const{onViewportEnter:d,onViewportLeave:p}=this.node.getProps(),g=c?d:p;g&&g(u)};return l4(this.node.current,a,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(d4(t,n))&&this.startObserver()}unmount(){}}function d4({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const f4={inView:{Feature:c4},tap:{Feature:i4},focus:{Feature:r4},hover:{Feature:n4}};function b1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const p4=e=>/^\-?\d*\.?\d+$/.test(e),h4=e=>/^0[^.\s]+$/.test(e),on={delta:0,timestamp:0},M1=1/60*1e3,m4=typeof performance<"u"?()=>performance.now():()=>Date.now(),A1=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(m4()),M1);function g4(e){let t=[],n=[],r=0,i=!1,s=!1;const o=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const d=c&&i,p=d?t:n;return u&&o.add(l),p.indexOf(l)===-1&&(p.push(l),d&&i&&(r=t.length)),l},cancel:l=>{const u=n.indexOf(l);u!==-1&&n.splice(u,1),o.delete(l)},process:l=>{if(i){s=!0;return}if(i=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let u=0;u<r;u++){const c=t[u];c(l),o.has(c)&&(a.schedule(c),e())}i=!1,s&&(s=!1,a.process(l))}};return a}const v4=40;let ac=!0,ds=!1,lc=!1;const Cs=["read","update","preRender","render","postRender"],Ka=Cs.reduce((e,t)=>(e[t]=g4(()=>ds=!0),e),{}),Ye=Cs.reduce((e,t)=>{const n=Ka[t];return e[t]=(r,i=!1,s=!1)=>(ds||w4(),n.schedule(r,i,s)),e},{}),Vn=Cs.reduce((e,t)=>(e[t]=Ka[t].cancel,e),{}),zl=Cs.reduce((e,t)=>(e[t]=()=>Ka[t].process(on),e),{}),y4=e=>Ka[e].process(on),L1=e=>{ds=!1,on.delta=ac?M1:Math.max(Math.min(e-on.timestamp,v4),1),on.timestamp=e,lc=!0,Cs.forEach(y4),lc=!1,ds&&(ac=!1,A1(L1))},w4=()=>{ds=!0,ac=!0,lc||A1(L1)};function Gd(e,t){e.indexOf(t)===-1&&e.push(t)}function Wd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Yd{constructor(){this.subscriptions=[]}add(t){return Gd(this.subscriptions,t),()=>Wd(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Xd(e,t){return t?e*(1e3/t):0}const x4=e=>!isNaN(parseFloat(e));class S4{constructor(t,n={}){this.version="9.0.4",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:s,timestamp:o}=on;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,Ye.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Ye.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=x4(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Yd);const r=this.events[t].add(n);return t==="change"?()=>{r(),Ye.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Xd(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n)||null,this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){this.animation=null}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Kr(e,t){return new S4(e,t)}const Kd=(e,t)=>n=>Boolean(xs(n)&&O5.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),_1=(e,t,n)=>r=>{if(!xs(r))return r;const[i,s,o,a]=r.match(cs);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},C4=e=>Xr(0,255,e),Vl={...cr,transform:e=>Math.round(C4(e))},Zn={test:Kd("rgb","red"),parse:_1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Vl.transform(e)+", "+Vl.transform(t)+", "+Vl.transform(n)+", "+Ii(Ri.transform(r))+")"};function k4(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const uc={test:Kd("#"),parse:k4,transform:Zn.transform},br={test:Kd("hsl","hue"),parse:_1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Xt.transform(Ii(t))+", "+Xt.transform(Ii(n))+", "+Ii(Ri.transform(r))+")"},Ke={test:e=>Zn.test(e)||uc.test(e)||br.test(e),parse:e=>Zn.test(e)?Zn.parse(e):br.test(e)?br.parse(e):uc.parse(e),transform:e=>xs(e)?e:e.hasOwnProperty("red")?Zn.transform(e):br.transform(e)},O1="${c}",R1="${n}";function T4(e){var t,n;return isNaN(e)&&xs(e)&&(((t=e.match(cs))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(sc))===null||n===void 0?void 0:n.length)||0)>0}function Qo(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0,r=0;const i=e.match(sc);i&&(n=i.length,e=e.replace(sc,O1),t.push(...i.map(Ke.parse)));const s=e.match(cs);return s&&(r=s.length,e=e.replace(cs,R1),t.push(...s.map(cr.parse))),{values:t,numColors:n,numNumbers:r,tokenised:e}}function I1(e){return Qo(e).values}function N1(e){const{values:t,numColors:n,tokenised:r}=Qo(e),i=t.length;return s=>{let o=r;for(let a=0;a<i;a++)o=o.replace(a<n?O1:R1,a<n?Ke.transform(s[a]):Ii(s[a]));return o}}const E4=e=>typeof e=="number"?0:e;function P4(e){const t=I1(e);return N1(e)(t.map(E4))}const $n={test:T4,parse:I1,createTransformer:N1,getAnimatableNone:P4},b4=new Set(["brightness","contrast","saturate","opacity"]);function M4(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(cs)||[];if(!r)return e;const i=n.replace(r,"");let s=b4.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const A4=/([a-z-]*)\(.*?\)/g,cc={...$n,getAnimatableNone:e=>{const t=e.match(A4);return t?t.map(M4).join(" "):e}},L4={...p1,color:Ke,backgroundColor:Ke,outlineColor:Ke,fill:Ke,stroke:Ke,borderColor:Ke,borderTopColor:Ke,borderRightColor:Ke,borderBottomColor:Ke,borderLeftColor:Ke,filter:cc,WebkitFilter:cc},Qd=e=>L4[e];function Zd(e,t){let n=Qd(e);return n!==cc&&(n=$n),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const z1=e=>t=>t.test(e),_4={test:e=>e==="auto",parse:e=>e},V1=[cr,U,Xt,mn,I5,R5,_4],hi=e=>V1.find(z1(e)),O4=[...V1,Ke,$n],R4=e=>O4.find(z1(e));function I4(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function N4(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Qa(e,t,n){const r=e.getProps();return Ud(r,t,n!==void 0?n:r.custom,I4(e),N4(e))}function z4(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Kr(n))}function V4(e,t){const n=Qa(e,t);let{transitionEnd:r={},transition:i={},...s}=n?e.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const o in s){const a=X5(s[o]);z4(e,o,a)}}function $4(e,t,n){var r,i;const s=Object.keys(t).filter(a=>!e.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),c!=null&&(typeof c=="string"&&(p4(c)||h4(c))?c=parseFloat(c):!R4(c)&&$n.test(u)&&(c=Zd(l,u)),e.addValue(l,Kr(c,{owner:e})),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function D4(e,t){return t?(t[e]||t.default||t).from:void 0}function F4(e,t,n){const r={};for(const i in e){const s=D4(i,t);if(s!==void 0)r[i]=s;else{const o=n.getValue(i);o&&(r[i]=o.get())}}return r}function Zo(e){return Boolean(at(e)&&e.add)}const j4="framerAppearId",B4="data-"+Bd(j4);var H4=function(){},qo=function(){};const go=e=>e*1e3,U4={current:!1},qd=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Jd=e=>t=>1-e(1-t),ef=e=>e*e,G4=Jd(ef),tf=qd(ef),ke=(e,t,n)=>-n*e+n*t+e;function $l(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function W4({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=$l(l,a,e+1/3),s=$l(l,a,e),o=$l(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}const Dl=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},Y4=[uc,Zn,br],X4=e=>Y4.find(t=>t.test(e));function Jp(e){const t=X4(e);let n=t.parse(e);return t===br&&(n=W4(n)),n}const $1=(e,t)=>{const n=Jp(e),r=Jp(t),i={...n};return s=>(i.red=Dl(n.red,r.red,s),i.green=Dl(n.green,r.green,s),i.blue=Dl(n.blue,r.blue,s),i.alpha=ke(n.alpha,r.alpha,s),Zn.transform(i))};function D1(e,t){return typeof e=="number"?n=>ke(e,t,n):Ke.test(e)?$1(e,t):j1(e,t)}const F1=(e,t)=>{const n=[...e],r=n.length,i=e.map((s,o)=>D1(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}},K4=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=D1(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}},j1=(e,t)=>{const n=$n.createTransformer(t),r=Qo(e),i=Qo(t);return r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?In(F1(r.values,i.values),n):o=>`${o>0?t:e}`},Jo=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},eh=(e,t)=>n=>ke(e,t,n);function Q4(e){return typeof e=="number"?eh:typeof e=="string"?Ke.test(e)?$1:j1:Array.isArray(e)?F1:typeof e=="object"?K4:eh}function Z4(e,t,n){const r=[],i=n||Q4(e[0]),s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]:t;a=In(l,a)}r.push(a)}return r}function B1(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;qo(s===t.length),qo(!r||!Array.isArray(r)||r.length===s-1),e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=Z4(t,r,i),a=o.length,l=u=>{let c=0;if(a>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=Jo(e[c],e[c+1],u);return o[c](d)};return n?u=>l(Xr(e[0],e[s-1],u)):l}const H1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,q4=1e-7,J4=12;function ek(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=H1(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>q4&&++a<J4);return o}function U1(e,t,n,r){if(e===t&&n===r)return Kt;const i=s=>ek(s,0,1,e,n);return s=>s===0||s===1?s:H1(i(s),t,r)}const G1=e=>1-Math.sin(Math.acos(e)),nf=Jd(G1),tk=qd(nf),W1=U1(.33,1.53,.69,.99),rf=Jd(W1),nk=qd(rf),rk=e=>(e*=2)<1?.5*rf(e):.5*(2-Math.pow(2,-10*(e-1))),ik={linear:Kt,easeIn:ef,easeInOut:tf,easeOut:G4,circIn:G1,circInOut:tk,circOut:nf,backIn:rf,backInOut:nk,backOut:W1,anticipate:rk},th=e=>{if(Array.isArray(e)){qo(e.length===4);const[t,n,r,i]=e;return U1(t,n,r,i)}else if(typeof e=="string")return ik[e];return e},sk=e=>Array.isArray(e)&&typeof e[0]!="number";function ok(e,t){return e.map(()=>t||tf).splice(0,e.length-1)}function ak(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function lk(e,t){return e.map(n=>n*t)}function dc({keyframes:e,ease:t=tf,times:n,duration:r=300}){e=[...e];const i=sk(t)?t.map(th):th(t),s={done:!1,value:e[0]},o=lk(n&&n.length===e.length?n:ak(e),r);function a(){return B1(o,e,{ease:Array.isArray(i)?i:ok(e,i)})}let l=a();return{next:u=>(s.value=l(u),s.done=u>=r,s),flipTarget:()=>{e.reverse(),l=a()}}}const Fl=.001,uk=.01,nh=10,ck=.05,dk=1;function fk({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,s;H4(e<=nh*1e3);let o=1-t;o=Xr(ck,dk,o),e=Xr(uk,nh,e/1e3),o<1?(i=u=>{const c=u*o,d=c*e,p=c-n,g=fc(u,o),v=Math.exp(-d);return Fl-p/g*v},s=u=>{const d=u*o*e,p=d*n+n,g=Math.pow(o,2)*Math.pow(u,2)*e,v=Math.exp(-d),y=fc(Math.pow(u,2),o);return(-i(u)+Fl>0?-1:1)*((p-g)*v)/y}):(i=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-Fl+c*d},s=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const a=5/e,l=hk(i,s,a);if(e=e*1e3,isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const pk=12;function hk(e,t,n){let r=n;for(let i=1;i<pk;i++)r=r-e(r)/t(r);return r}function fc(e,t){return e*Math.sqrt(1-t*t)}const mk=["duration","bounce"],gk=["stiffness","damping","mass"];function rh(e,t){return t.some(n=>e[n]!==void 0)}function vk(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!rh(e,gk)&&rh(e,mk)){const n=fk(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}const yk=5;function Y1({keyframes:e,restDelta:t,restSpeed:n,...r}){let i=e[0],s=e[e.length-1];const o={done:!1,value:i},{stiffness:a,damping:l,mass:u,velocity:c,duration:d,isResolvedFromDuration:p}=vk(r);let g=wk,v=c?-(c/1e3):0;const y=l/(2*Math.sqrt(a*u));function x(){const f=s-i,h=Math.sqrt(a/u)/1e3,m=Math.abs(f)<5;if(n||(n=m?.01:2),t||(t=m?.005:.5),y<1){const w=fc(h,y);g=C=>{const k=Math.exp(-y*h*C);return s-k*((v+y*h*f)/w*Math.sin(w*C)+f*Math.cos(w*C))}}else if(y===1)g=w=>s-Math.exp(-h*w)*(f+(v+h*f)*w);else{const w=h*Math.sqrt(y*y-1);g=C=>{const k=Math.exp(-y*h*C),E=Math.min(w*C,300);return s-k*((v+y*h*f)*Math.sinh(E)+w*f*Math.cosh(E))/w}}}return x(),{next:f=>{const h=g(f);if(p)o.done=f>=d;else{let m=v;if(f!==0)if(y<1){const k=Math.max(0,f-yk);m=Xd(h-g(k),f-k)}else m=0;const w=Math.abs(m)<=n,C=Math.abs(s-h)<=t;o.done=w&&C}return o.value=o.done?s:h,o},flipTarget:()=>{v=-v,[i,s]=[s,i],x()}}}Y1.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const wk=e=>0;function xk({keyframes:e=[0],velocity:t=0,power:n=.8,timeConstant:r=350,restDelta:i=.5,modifyTarget:s}){const o=e[0],a={done:!1,value:o};let l=n*t;const u=o+l,c=s===void 0?u:s(u);return c!==u&&(l=c-o),{next:d=>{const p=-l*Math.exp(-d/r);return a.done=!(p>i||p<-i),a.value=a.done?c:c+p,a},flipTarget:()=>{}}}const Sk={decay:xk,keyframes:dc,tween:dc,spring:Y1};function X1(e,t,n=0){return e-t-n}function Ck(e,t=0,n=0,r=!0){return r?X1(t+-e,t,n):t-(e-t)+n}function kk(e,t,n,r){return r?e>=t+n:e<=-n}const Tk=e=>{const t=({delta:n})=>e(n);return{start:()=>Ye.update(t,!0),stop:()=>Vn.update(t)}};function ea({duration:e,driver:t=Tk,elapsed:n=0,repeat:r=0,repeatType:i="loop",repeatDelay:s=0,keyframes:o,autoplay:a=!0,onPlay:l,onStop:u,onComplete:c,onRepeat:d,onUpdate:p,type:g="keyframes",...v}){const y=n;let x,f=0,h=e,m=!1,w=!0,C;const k=Sk[o.length>2?"keyframes":g]||dc,E=o[0],b=o[o.length-1];let _={done:!1,value:E};const{needsInterpolation:$}=k;$&&$(E,b)&&(C=B1([0,100],[E,b],{clamp:!1}),o=[0,100]);const M=k({...v,duration:e,keyframes:o});function L(){f++,i==="reverse"?(w=f%2===0,n=Ck(n,h,s,w)):(n=X1(n,h,s),i==="mirror"&&M.flipTarget()),m=!1,d&&d()}function j(){x&&x.stop(),c&&c()}function Y(oe){w||(oe=-oe),n+=oe,m||(_=M.next(Math.max(0,n)),C&&(_.value=C(_.value)),m=w?_.done:n<=0),p&&p(_.value),m&&(f===0&&(h=h!==void 0?h:n),f<r?kk(n,h,s,w)&&L():j())}function X(){l&&l(),x=t(Y),x.start()}return a&&X(),{stop:()=>{u&&u(),x&&x.stop()},set currentTime(oe){n=y,Y(oe)},sample:oe=>{n=y;const fe=e&&typeof e=="number"?Math.max(e*.5,50):50;let R=0;for(Y(0);R<=oe;){const V=oe-R;Y(Math.min(V,fe)),R+=fe}return _}}}function Ek(e){return!e||Array.isArray(e)||typeof e=="string"&&K1[e]}const xi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,K1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:xi([0,.65,.55,1]),circOut:xi([.55,0,1,.45]),backIn:xi([.31,.01,.66,-.59]),backOut:xi([.33,1.53,.69,.99])};function Pk(e){if(e)return Array.isArray(e)?xi(e):K1[e]}function bk(e,t,n,{delay:r=0,duration:i,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){return e.animate({[t]:n,offset:l},{delay:r,duration:i,easing:Pk(a),fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const ih={waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate")},jl={},Q1={};for(const e in ih)Q1[e]=()=>(jl[e]===void 0&&(jl[e]=ih[e]()),jl[e]);function Mk(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const Ak=new Set(["opacity"]),Xs=10;function Lk(e,t,{onUpdate:n,onComplete:r,...i}){if(!(Q1.waapi()&&Ak.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0))return!1;let{keyframes:o,duration:a=300,elapsed:l=0,ease:u}=i;if(i.type==="spring"||!Ek(i.ease)){if(i.repeat===1/0)return;const d=ea({...i,elapsed:0});let p={done:!1,value:o[0]};const g=[];let v=0;for(;!p.done&&v<2e4;)p=d.sample(v),g.push(p.value),v+=Xs;o=g,a=v-Xs,u="linear"}const c=bk(e.owner.current,t,o,{...i,delay:-l,duration:a,ease:u});return c.onfinish=()=>{e.set(Mk(o,i)),Ye.update(()=>c.cancel()),r&&r()},{get currentTime(){return c.currentTime||0},set currentTime(d){c.currentTime=d},stop:()=>{const{currentTime:d}=c;if(d){const p=ea({...i,autoplay:!1});e.setWithVelocity(p.sample(d-Xs).value,p.sample(d).value,Xs)}Ye.update(()=>c.cancel())}}}function Z1(e,t){const n=performance.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Vn.read(r),e(s-t))};return Ye.read(r,!0),()=>Vn.read(r)}function _k({keyframes:e,elapsed:t,onUpdate:n,onComplete:r}){const i=()=>{n&&n(e[e.length-1]),r&&r()};return t?{stop:Z1(i,-t)}:i()}function Ok({keyframes:e,velocity:t=0,min:n,max:r,power:i=.8,timeConstant:s=750,bounceStiffness:o=500,bounceDamping:a=10,restDelta:l=1,modifyTarget:u,driver:c,onUpdate:d,onComplete:p,onStop:g}){const v=e[0];let y;function x(w){return n!==void 0&&w<n||r!==void 0&&w>r}function f(w){return n===void 0?r:r===void 0||Math.abs(n-w)<Math.abs(r-w)?n:r}function h(w){y&&y.stop(),y=ea({keyframes:[0,1],velocity:0,...w,driver:c,onUpdate:C=>{d&&d(C),w.onUpdate&&w.onUpdate(C)},onComplete:p,onStop:g})}function m(w){h({type:"spring",stiffness:o,damping:a,restDelta:l,...w})}if(x(v))m({velocity:t,keyframes:[v,f(v)]});else{let w=i*t+v;typeof u<"u"&&(w=u(w));const C=f(w),k=C===n?-1:1;let E,b;const _=$=>{E=b,b=$,t=Xd($-E,on.delta),(k===1&&$>C||k===-1&&$<C)&&m({keyframes:[$,C],velocity:t})};h({type:"decay",keyframes:[v,0],velocity:t,timeConstant:s,power:i,restDelta:l,modifyTarget:u,onUpdate:x(w)?_:void 0})}return{stop:()=>y&&y.stop()}}const Hn=()=>({type:"spring",stiffness:500,damping:25,restSpeed:10}),Ks=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Bl=()=>({type:"keyframes",ease:"linear",duration:.3}),Rk={type:"keyframes",duration:.8},sh={x:Hn,y:Hn,z:Hn,rotate:Hn,rotateX:Hn,rotateY:Hn,rotateZ:Hn,scaleX:Ks,scaleY:Ks,scale:Ks,opacity:Bl,backgroundColor:Bl,color:Bl,default:Ks},Ik=(e,{keyframes:t})=>t.length>2?Rk:(sh[e]||sh.default)(t[1]),pc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&$n.test(t)&&!t.startsWith("url("));function Nk({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function oh(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function ah(e){return typeof e=="number"?0:Zd("",e)}function q1(e,t){return e[t]||e.default||e}function zk(e,t,n,r){const i=pc(t,n);let s=r.from!==void 0?r.from:e.get();return s==="none"&&i&&typeof n=="string"?s=Zd(t,n):oh(s)&&typeof n=="string"?s=ah(n):!Array.isArray(n)&&oh(n)&&typeof s=="string"&&(n=ah(s)),Array.isArray(n)?(n[0]===null&&(n[0]=s),n):[s,n]}const sf=(e,t,n,r={})=>i=>{const s=q1(r,e)||{},o=s.delay||r.delay||0;let{elapsed:a=0}=r;a=a-go(o);const l=zk(t,e,n,s),u=l[0],c=l[l.length-1],d=pc(e,u),p=pc(e,c);let g={keyframes:l,velocity:t.getVelocity(),...s,elapsed:a,onUpdate:v=>{t.set(v),s.onUpdate&&s.onUpdate(v)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(!d||!p||U4.current||s.type===!1)return _k(g);if(s.type==="inertia")return Ok(g);if(Nk(s)||(g={...g,...Ik(e,g)}),g.duration&&(g.duration=go(g.duration)),g.repeatDelay&&(g.repeatDelay=go(g.repeatDelay)),t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=Lk(t,e,g);if(v)return v}return ea(g)};function Vk(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>hc(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=hc(e,t,n);else{const i=typeof t=="function"?Qa(e,t,n.custom):t;r=J1(e,i,n)}return r.then(()=>e.notify("AnimationComplete",t))}function hc(e,t,n={}){const r=Qa(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>J1(e,r,n):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:d}=i;return $k(e,t,u+l,c,d,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[s,o]:[o,s];return l().then(u)}else return Promise.all([s(),o(n.delay)])}function J1(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:o,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(s=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in a){const p=e.getValue(d),g=a[d];if(!p||g===void 0||c&&Fk(c,d))continue;const v={delay:n,elapsed:0,...s};if(window.HandoffAppearAnimations&&!p.hasAnimated){const x=e.getProps()[B4];x&&(v.elapsed=window.HandoffAppearAnimations(x,d,p,Ye))}let y=p.start(sf(d,p,g,e.shouldReduceMotion&&ti.has(d)?{type:!1}:v));Zo(l)&&(l.add(d),y=y.then(()=>l.remove(d))),u.push(y)}return Promise.all(u).then(()=>{o&&V4(e,o)})}function $k(e,t,n=0,r=0,i=1,s){const o=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(Dk).forEach((u,c)=>{u.notify("AnimationStart",t),o.push(hc(u,t,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function Dk(e,t){return e.sortNodePosition(t)}function Fk({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}const of=[pe.Animate,pe.InView,pe.Focus,pe.Hover,pe.Tap,pe.Drag,pe.Exit],jk=[...of].reverse(),Bk=of.length;function Hk(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Vk(e,n,r)))}function Uk(e){let t=Hk(e);const n=Wk();let r=!0;const i=(l,u)=>{const c=Qa(e,u);if(c){const{transition:d,transitionEnd:p,...g}=c;l={...l,...g,...p}}return l};function s(l){t=l(e)}function o(l,u){const c=e.getProps(),d=e.getVariantContext(!0)||{},p=[],g=new Set;let v={},y=1/0;for(let f=0;f<Bk;f++){const h=jk[f],m=n[h],w=c[h]!==void 0?c[h]:d[h],C=ls(w),k=h===u?m.isActive:null;k===!1&&(y=f);let E=w===d[h]&&w!==c[h]&&C;if(E&&r&&e.manuallyAnimateOnMount&&(E=!1),m.protectedKeys={...v},!m.isActive&&k===null||!w&&!m.prevProp||Ga(w)||typeof w=="boolean")continue;const b=Gk(m.prevProp,w);let _=b||h===u&&m.isActive&&!E&&C||f>y&&C;const $=Array.isArray(w)?w:[w];let M=$.reduce(i,{});k===!1&&(M={});const{prevResolvedValues:L={}}=m,j={...L,...M},Y=X=>{_=!0,g.delete(X),m.needsAnimating[X]=!0};for(const X in j){const oe=M[X],fe=L[X];v.hasOwnProperty(X)||(oe!==fe?Ko(oe)&&Ko(fe)?!b1(oe,fe)||b?Y(X):m.protectedKeys[X]=!0:oe!==void 0?Y(X):g.add(X):oe!==void 0&&g.has(X)?Y(X):m.protectedKeys[X]=!0)}m.prevProp=w,m.prevResolvedValues=M,m.isActive&&(v={...v,...M}),r&&e.blockInitialAnimation&&(_=!1),_&&!E&&p.push(...$.map(X=>({animation:X,options:{type:h,...l}})))}if(g.size){const f={};g.forEach(h=>{const m=e.getBaseTarget(h);m!==void 0&&(f[h]=m)}),p.push({animation:f})}let x=Boolean(p.length);return r&&c.initial===!1&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(p):Promise.resolve()}function a(l,u,c){if(n[l].isActive===u)return Promise.resolve();e.variantChildren&&e.variantChildren.forEach(p=>{p.animationState&&p.animationState.setActive(l,u)}),n[l].isActive=u;const d=o(c,l);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function Gk(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!b1(t,e):!1}function Un(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Wk(){return{[pe.Animate]:Un(!0),[pe.InView]:Un(),[pe.Hover]:Un(),[pe.Tap]:Un(),[pe.Drag]:Un(),[pe.Focus]:Un(),[pe.Exit]:Un()}}class Yk extends Bn{constructor(t){super(t),t.animationState||(t.animationState=Uk(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Ga(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let Xk=0;class Kk extends Bn{constructor(){super(...arguments),this.id=Xk++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive(pe.Exit,!t,{custom:r??this.node.getProps().custom});n&&!t&&s.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Qk={animation:{Feature:Yk},exit:{Feature:Kk}},lh=(e,t)=>Math.abs(e-t);function Zk(e,t){const n=lh(e.x,t.x),r=lh(e.y,t.y);return Math.sqrt(n**2+r**2)}class ev{constructor(t,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=Ul(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,d=Zk(u.offset,{x:0,y:0})>=3;if(!c&&!d)return;const{point:p}=u,{timestamp:g}=on;this.history.push({...p,timestamp:g});const{onStart:v,onMove:y}=this.handlers;c||(v&&v(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,u)},this.handlePointerMove=(u,c)=>{this.lastMoveEvent=u,this.lastMoveEventInfo=Hl(c,this.transformPagePoint),Ye.update(this.updatePoint,!0)},this.handlePointerUp=(u,c)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const{onEnd:d,onSessionEnd:p}=this.handlers,g=Ul(u.type==="pointercancel"?this.lastMoveEventInfo:Hl(c,this.transformPagePoint),this.history);this.startEvent&&d&&d(u,g),p&&p(u,g)},!C1(t))return;this.handlers=n,this.transformPagePoint=r;const i=Xa(t),s=Hl(i,this.transformPagePoint),{point:o}=s,{timestamp:a}=on;this.history=[{...o,timestamp:a}];const{onSessionStart:l}=n;l&&l(t,Ul(s,this.history)),this.removeListeners=In(sn(window,"pointermove",this.handlePointerMove),sn(window,"pointerup",this.handlePointerUp),sn(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Vn.update(this.updatePoint)}}function Hl(e,t){return t?{point:t(e.point)}:e}function uh(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ul({point:e},t){return{point:e,delta:uh(e,tv(t)),offset:uh(e,qk(t)),velocity:Jk(t,.1)}}function qk(e){return e[0]}function tv(e){return e[e.length-1]}function Jk(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=tv(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>go(t)));)n--;if(!r)return{x:0,y:0};const s=(i.timestamp-r.timestamp)/1e3;if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function mt(e){return e.max-e.min}function mc(e,t=0,n=.01){return Math.abs(e-t)<=n}function ch(e,t,n,r=.5){e.origin=r,e.originPoint=ke(t.min,t.max,e.origin),e.scale=mt(n)/mt(t),(mc(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ke(n.min,n.max,e.origin)-e.originPoint,(mc(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Ni(e,t,n,r){ch(e.x,t.x,n.x,r?r.originX:void 0),ch(e.y,t.y,n.y,r?r.originY:void 0)}function dh(e,t,n){e.min=n.min+t.min,e.max=e.min+mt(t)}function eT(e,t,n){dh(e.x,t.x,n.x),dh(e.y,t.y,n.y)}function fh(e,t,n){e.min=t.min-n.min,e.max=e.min+mt(t)}function zi(e,t,n){fh(e.x,t.x,n.x),fh(e.y,t.y,n.y)}function tT(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ke(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ke(n,e,r.max):Math.min(e,n)),e}function ph(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function nT(e,{top:t,left:n,bottom:r,right:i}){return{x:ph(e.x,n,i),y:ph(e.y,t,r)}}function hh(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function rT(e,t){return{x:hh(e.x,t.x),y:hh(e.y,t.y)}}function iT(e,t){let n=.5;const r=mt(e),i=mt(t);return i>r?n=Jo(t.min,t.max-r,e.min):r>i&&(n=Jo(e.min,e.max-i,t.min)),Xr(0,1,n)}function sT(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const gc=.35;function oT(e=gc){return e===!1?e=0:e===!0&&(e=gc),{x:mh(e,"left","right"),y:mh(e,"top","bottom")}}function mh(e,t,n){return{min:gh(e,t),max:gh(e,n)}}function gh(e,t){return typeof e=="number"?e:e[t]||0}const vh=()=>({translate:0,scale:1,origin:0,originPoint:0}),Vi=()=>({x:vh(),y:vh()}),yh=()=>({min:0,max:0}),Me=()=>({x:yh(),y:yh()});function Ft(e){return[e("x"),e("y")]}function nv({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function aT({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function lT(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Gl(e){return e===void 0||e===1}function vc({scale:e,scaleX:t,scaleY:n}){return!Gl(e)||!Gl(t)||!Gl(n)}function Yn(e){return vc(e)||rv(e)||e.z||e.rotate||e.rotateX||e.rotateY}function rv(e){return wh(e.x)||wh(e.y)}function wh(e){return e&&e!=="0%"}function ta(e,t,n){const r=e-n,i=t*r;return n+i}function xh(e,t,n,r,i){return i!==void 0&&(e=ta(e,i,r)),ta(e,n,r)+t}function yc(e,t=0,n=1,r,i){e.min=xh(e.min,t,n,r,i),e.max=xh(e.max,t,n,r,i)}function iv(e,{x:t,y:n}){yc(e.x,t.translate,t.scale,t.originPoint),yc(e.y,n.translate,n.scale,n.originPoint)}function uT(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Mr(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,iv(e,o)),r&&Yn(s.latestValues)&&Mr(e,s.latestValues))}t.x=Sh(t.x),t.y=Sh(t.y)}function Sh(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function yn(e,t){e.min=e.min+t,e.max=e.max+t}function Ch(e,t,[n,r,i]){const s=t[i]!==void 0?t[i]:.5,o=ke(e.min,e.max,s);yc(e,t[n],t[r],o,t.scale)}const cT=["x","scaleX","originX"],dT=["y","scaleY","originY"];function Mr(e,t){Ch(e.x,t,cT),Ch(e.y,t,dT)}function sv(e,t){return nv(lT(e.getBoundingClientRect(),t))}function fT(e,t,n){const r=sv(e,n),{scroll:i}=t;return i&&(yn(r.x,i.offset.x),yn(r.y,i.offset.y)),r}const pT=new WeakMap;class hT{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Me(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=l=>{this.stopAnimation(),n&&this.snapToCursor(Xa(l,"page").point)},s=(l,u)=>{const{drag:c,dragPropagation:d,onDragStart:p}=this.getProps();if(c&&!d&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=T1(c),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ft(v=>{let y=this.getAxisMotionValue(v).get()||0;if(Xt.test(y)){const{projection:x}=this.visualElement;if(x&&x.layout){const f=x.layout.layoutBox[v];f&&(y=mt(f)*(parseFloat(y)/100))}}this.originPoint[v]=y}),p&&p(l,u);const{animationState:g}=this.visualElement;g&&g.setActive(pe.Drag,!0)},o=(l,u)=>{const{dragPropagation:c,dragDirectionLock:d,onDirectionLock:p,onDrag:g}=this.getProps();if(!c&&!this.openGlobalLock)return;const{offset:v}=u;if(d&&this.currentDirection===null){this.currentDirection=mT(v),this.currentDirection!==null&&p&&p(this.currentDirection);return}this.updateAxis("x",u.point,v),this.updateAxis("y",u.point,v),this.visualElement.render(),g&&g(l,u)},a=(l,u)=>this.stop(l,u);this.panSession=new ev(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&s(t,n)}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive(pe.Drag,!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Qs(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=tT(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},i=this.constraints;t&&Pr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=nT(r.layoutBox,t):this.constraints=!1,this.elastic=oT(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Ft(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=sT(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Pr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=fT(r,i.root,this.visualElement.getTransformPagePoint());let o=rT(i.layout.layoutBox,s);if(n){const a=n(aT(o));this.hasMutatedConstraints=!!a,a&&(o=nv(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Ft(c=>{if(!Qs(c,n,this.currentDirection))return;let d=l&&l[c]||{};o&&(d={min:0,max:0});const p=i?200:1e6,g=i?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(sf(t,r,0,n))}stopAnimation(){Ft(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ft(n=>{const{drag:r}=this.getProps();if(!Qs(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(t[n]-ke(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Pr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Ft(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();i[o]=iT({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ft(o=>{if(!Qs(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(ke(l,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;pT.set(this.visualElement,this);const t=this.visualElement.current,n=sn(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Pr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const o=tn(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Ft(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=gc,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Qs(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function mT(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class gT extends Bn{constructor(t){super(t),this.removeGroupControls=Kt,this.removeListeners=Kt,this.controls=new hT(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Kt}unmount(){this.removeGroupControls(),this.removeListeners()}}class vT extends Bn{constructor(){super(...arguments),this.removePointerDownListener=Kt}onPointerDown(t){this.session=new ev(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:t,onStart:n,onMove:r,onEnd:(s,o)=>{delete this.session,i&&i(s,o)}}}mount(){this.removePointerDownListener=sn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function yT(){const e=T.useContext(Ha);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=T.useId();return T.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}function kh(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const mi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(U.test(e))e=parseFloat(e);else return e;const n=kh(e,t.target.x),r=kh(e,t.target.y);return`${n}% ${r}%`}};function wc(e){return typeof e=="string"&&e.startsWith("var(--")}const ov=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function wT(e){const t=ov.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function xc(e,t,n=1){const[r,i]=wT(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);return s?s.trim():wc(i)?xc(i,t,n+1):i}function xT(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const s=i.get();if(!wc(s))return;const o=xc(s,r);o&&i.set(o)});for(const i in t){const s=t[i];if(!wc(s))continue;const o=xc(s,r);o&&(t[i]=o,n&&n[i]===void 0&&(n[i]=s))}return{target:t,transitionEnd:n}}const Th="_$css",ST={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=e.includes("var("),s=[];i&&(e=e.replace(ov,g=>(s.push(g),Th)));const o=$n.parse(e);if(o.length>5)return r;const a=$n.createTransformer(e),l=typeof o[0]!="number"?1:0,u=n.x.scale*t.x,c=n.y.scale*t.y;o[0+l]/=u,o[1+l]/=c;const d=ke(u,c,.5);typeof o[2+l]=="number"&&(o[2+l]/=d),typeof o[3+l]=="number"&&(o[3+l]/=d);let p=a(o);if(i){let g=0;p=p.replace(Th,()=>{const v=s[g];return g++,v})}return p}};class CT extends de.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;b5(kT),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Oi.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||Ye.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function av(e){const[t,n]=yT(),r=T.useContext(zd);return de.createElement(CT,{...e,layoutGroup:r,switchLayoutGroup:T.useContext(c1),isPresent:t,safeToRemove:n})}const kT={borderRadius:{...mi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:mi,borderTopRightRadius:mi,borderBottomLeftRadius:mi,borderBottomRightRadius:mi,boxShadow:ST};function TT(e,t,n={}){const r=at(e)?e:Kr(e);return r.start(sf("",r,t,n)),{stop:()=>r.stop(),isAnimating:()=>r.isAnimating()}}const lv=["TopLeft","TopRight","BottomLeft","BottomRight"],ET=lv.length,Eh=e=>typeof e=="string"?parseFloat(e):e,Ph=e=>typeof e=="number"||U.test(e);function PT(e,t,n,r,i,s){i?(e.opacity=ke(0,n.opacity!==void 0?n.opacity:1,bT(r)),e.opacityExit=ke(t.opacity!==void 0?t.opacity:1,0,MT(r))):s&&(e.opacity=ke(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<ET;o++){const a=`border${lv[o]}Radius`;let l=bh(t,a),u=bh(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Ph(l)===Ph(u)?(e[a]=Math.max(ke(Eh(l),Eh(u),r),0),(Xt.test(u)||Xt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=ke(t.rotate||0,n.rotate||0,r))}function bh(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const bT=uv(0,.5,nf),MT=uv(.5,.95,Kt);function uv(e,t,n){return r=>r<e?0:r>t?1:n(Jo(e,t,r))}function Mh(e,t){e.min=t.min,e.max=t.max}function At(e,t){Mh(e.x,t.x),Mh(e.y,t.y)}function Ah(e,t,n,r,i){return e-=t,e=ta(e,1/n,r),i!==void 0&&(e=ta(e,1/i,r)),e}function AT(e,t=0,n=1,r=.5,i,s=e,o=e){if(Xt.test(t)&&(t=parseFloat(t),t=ke(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=ke(s.min,s.max,r);e===s&&(a-=t),e.min=Ah(e.min,t,n,a,i),e.max=Ah(e.max,t,n,a,i)}function Lh(e,t,[n,r,i],s,o){AT(e,t[n],t[r],t[i],t.scale,s,o)}const LT=["x","scaleX","originX"],_T=["y","scaleY","originY"];function _h(e,t,n,r){Lh(e.x,t,LT,n?n.x:void 0,r?r.x:void 0),Lh(e.y,t,_T,n?n.y:void 0,r?r.y:void 0)}function Oh(e){return e.translate===0&&e.scale===1}function cv(e){return Oh(e.x)&&Oh(e.y)}function dv(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function Rh(e){return mt(e.x)/mt(e.y)}class OT{constructor(){this.members=[]}add(t){Gd(this.members,t),t.scheduleRender()}remove(t){if(Wd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Ih(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y;if((i||s)&&(r=`translate3d(${i}px, ${s}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const o=e.x.scale*t.x,a=e.y.scale*t.y;return(o!==1||a!==1)&&(r+=`scale(${o}, ${a})`),r||"none"}const RT=(e,t)=>e.depth-t.depth;class IT{constructor(){this.children=[],this.isDirty=!1}add(t){Gd(this.children,t),this.isDirty=!0}remove(t){Wd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(RT),this.isDirty=!1,this.children.forEach(t)}}const Nh=["","X","Y","Z"],zh=1e3;let NT=0;function fv({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o,a={},l=t==null?void 0:t()){this.id=NT++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isTransformDirty=!1,this.isProjectionDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.nodes.forEach($T),this.nodes.forEach(jT),this.nodes.forEach(BT)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=o,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0,o&&this.root.registerPotentialNode(o,this);for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new IT)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Yd),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}registerPotentialNode(o,a){this.potentialNodes.set(o,a)}mount(o,a=!1){if(this.instance)return;this.isSVG=o instanceof SVGElement&&o.tagName!=="svg",this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=Z1(p,250),Oi.hasAnimatedSinceResize&&(Oi.hasAnimatedSinceResize=!1,this.nodes.forEach($h))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||c.getDefaultTransition()||YT,{onLayoutAnimationStart:x,onLayoutAnimationComplete:f}=c.getProps(),h=!this.targetLayout||!dv(this.targetLayout,v)||g,m=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,m);const w={...q1(y,"layout"),onPlay:x,onComplete:f};(c.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else!p&&this.animationProgress===0&&$h(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Vn.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(HT),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Vh);return}this.isUpdating&&(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(XT),this.potentialNodes.clear()),this.nodes.forEach(FT),this.nodes.forEach(zT),this.nodes.forEach(VT),this.clearAllSnapshots(),zl.update(),zl.preRender(),zl.render())}clearAllSnapshots(){this.nodes.forEach(DT),this.sharedNodes.forEach(UT)}scheduleUpdateProjection(){Ye.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){Ye.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Me(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!cv(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||Yn(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),KT(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return Me();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(yn(a.x,l.offset.x),yn(a.y,l.offset.y)),a}removeElementScroll(o){const a=Me();At(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){At(a,o);const{scroll:p}=this.root;p&&(yn(a.x,-p.offset.x),yn(a.y,-p.offset.y))}yn(a.x,c.offset.x),yn(a.y,c.offset.y)}}return a}applyTransform(o,a=!1){const l=Me();At(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Mr(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Yn(c.latestValues)&&Mr(l,c.latestValues)}return Yn(this.latestValues)&&Mr(l,this.latestValues),l}removeTransform(o){const a=Me();At(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Yn(u.latestValues))continue;vc(u.latestValues)&&u.updateSnapshot();const c=Me(),d=u.measurePageBox();At(c,d),_h(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Yn(this.latestValues)&&_h(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.isProjectionDirty=!0,this.root.scheduleUpdateProjection()}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(){const o=this.getLead();if(this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),!this.isProjectionDirty&&!this.attemptToResolveRelativeTarget)return;const{layout:a,layoutId:l}=this.options;if(!(!this.layout||!(a||l))){if(!this.targetDelta&&!this.relativeTarget){const u=this.getClosestProjectingParent();u&&u.layout?(this.relativeParent=u,this.relativeTarget=Me(),this.relativeTargetOrigin=Me(),zi(this.relativeTargetOrigin,this.layout.layoutBox,u.layout.layoutBox),At(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Me(),this.targetWithTransforms=Me()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?eT(this.target,this.relativeTarget,this.relativeParent.target):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):At(this.target,this.layout.layoutBox),iv(this.target,this.targetDelta)):At(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const u=this.getClosestProjectingParent();u&&Boolean(u.resumingFrom)===Boolean(this.resumingFrom)&&!u.options.layoutScroll&&u.target?(this.relativeParent=u,this.relativeTarget=Me(),this.relativeTargetOrigin=Me(),zi(this.relativeTargetOrigin,this.target,u.target),At(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||vc(this.parent.latestValues)||rv(this.parent.latestValues)))return(this.parent.relativeTarget||this.parent.targetDelta||this.parent.options.layoutRoot)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()}calcProjection(){const{isProjectionDirty:o,isTransformDirty:a}=this;this.isProjectionDirty=this.isTransformDirty=!1;const l=this.getLead(),u=Boolean(this.resumingFrom)||this!==l;let c=!0;if(o&&(c=!1),u&&a&&(c=!1),c)return;const{layout:d,layoutId:p}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||p))return;At(this.layoutCorrected,this.layout.layoutBox),uT(this.layoutCorrected,this.treeScale,this.path,u);const{target:g}=l;if(!g)return;this.projectionDelta||(this.projectionDelta=Vi(),this.projectionDeltaWithTransform=Vi());const v=this.treeScale.x,y=this.treeScale.y,x=this.projectionTransform;Ni(this.projectionDelta,this.layoutCorrected,g,this.latestValues),this.projectionTransform=Ih(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==v||this.treeScale.y!==y)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=Vi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=Me(),g=l?l.source:void 0,v=this.layout?this.layout.source:void 0,y=g!==v,x=this.getStack(),f=!x||x.members.length<=1,h=Boolean(y&&!f&&this.options.crossfade===!0&&!this.path.some(WT));this.animationProgress=0,this.mixTargetDelta=m=>{const w=m/1e3;Dh(d.x,o.x,w),Dh(d.y,o.y,w),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(zi(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),GT(this.relativeTarget,this.relativeTargetOrigin,p,w)),y&&(this.animationValues=c,PT(c,u,this.latestValues,w,h,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Vn.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ye.update(()=>{Oi.hasAnimatedSinceResize=!0,this.currentAnimation=TT(0,zh,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(zh),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&pv(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Me();const d=mt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const p=mt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}At(a,l),Mr(a,c),Ni(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new OT),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let c=0;c<Nh.length;c++){const d="rotate"+Nh[c];l[d]&&(u[d]=l[d],o.setStaticValue(d,0))}o.render();for(const c in u)o.setStaticValue(c,u[c]);o.scheduleRender()}getProjectionStyles(o={}){var a,l;const u={};if(!this.instance||this.isSVG)return u;if(this.isVisible)u.visibility="";else return{visibility:"hidden"};const c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=mo(o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=mo(o.pointerEvents)||""),this.hasProjected&&!Yn(this.latestValues)&&(y.transform=c?c({},""):"none",this.hasProjected=!1),y}const p=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=Ih(this.projectionDeltaWithTransform,this.treeScale,p),c&&(u.transform=c(p,u.transform));const{x:g,y:v}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${v.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=d===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const y in Yo){if(p[y]===void 0)continue;const{correct:x,applyTo:f}=Yo[y],h=u.transform==="none"?p[y]:x(p[y],d);if(f){const m=f.length;for(let w=0;w<m;w++)u[f[w]]=h}else u[y]=h}return this.options.layoutId&&(u.pointerEvents=d===this?mo(o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Vh),this.root.sharedNodes.clear()}}}function zT(e){e.updateLayout()}function VT(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?Ft(d=>{const p=o?n.measuredBox[d]:n.layoutBox[d],g=mt(p);p.min=r[d].min,p.max=p.min+g}):pv(s,n.layoutBox,r)&&Ft(d=>{const p=o?n.measuredBox[d]:n.layoutBox[d],g=mt(r[d]);p.max=p.min+g});const a=Vi();Ni(a,r,n.layoutBox);const l=Vi();o?Ni(l,e.applyTransform(i,!0),n.measuredBox):Ni(l,r,n.layoutBox);const u=!cv(a);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:p,layout:g}=d;if(p&&g){const v=Me();zi(v,n.layoutBox,p.layoutBox);const y=Me();zi(y,r,g.layoutBox),dv(v,y)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function $T(e){e.isProjectionDirty||(e.isProjectionDirty=Boolean(e.parent&&e.parent.isProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=Boolean(e.parent&&e.parent.isTransformDirty))}function DT(e){e.clearSnapshot()}function Vh(e){e.clearMeasurements()}function FT(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function $h(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function jT(e){e.resolveTargetDelta()}function BT(e){e.calcProjection()}function HT(e){e.resetRotation()}function UT(e){e.removeLeadSnapshot()}function Dh(e,t,n){e.translate=ke(t.translate,0,n),e.scale=ke(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Fh(e,t,n,r){e.min=ke(t.min,n.min,r),e.max=ke(t.max,n.max,r)}function GT(e,t,n,r){Fh(e.x,t.x,n.x,r),Fh(e.y,t.y,n.y,r)}function WT(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const YT={duration:.45,ease:[.4,0,.1,1]};function XT(e,t){let n=e.root;for(let s=e.path.length-1;s>=0;s--)if(Boolean(e.path[s].instance)){n=e.path[s];break}const i=(n&&n!==e.root?n.instance:document).querySelector(`[data-projection-id="${t}"]`);i&&e.mount(i,!0)}function jh(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function KT(e){jh(e.x),jh(e.y)}function pv(e,t,n){return e==="position"||e==="preserve-aspect"&&!mc(Rh(t),Rh(n),.2)}const QT=fv({attachResizeListener:(e,t)=>tn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Wl={current:void 0},hv=fv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Wl.current){const e=new QT(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),Wl.current=e}return Wl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>Boolean(window.getComputedStyle(e).position==="fixed")}),ZT={pan:{Feature:vT},drag:{Feature:gT,ProjectionNode:hv,MeasureLayout:av}},qT=new Set(["width","height","top","left","right","bottom","x","y"]),mv=e=>qT.has(e),JT=e=>Object.keys(e).some(mv),Bh=e=>e===cr||e===U;var Hh;(function(e){e.width="width",e.height="height",e.left="left",e.right="right",e.top="top",e.bottom="bottom"})(Hh||(Hh={}));const Uh=(e,t)=>parseFloat(e.split(", ")[t]),Gh=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return Uh(i[1],t);{const s=r.match(/^matrix\((.+)\)$/);return s?Uh(s[1],e):0}},eE=new Set(["x","y","z"]),tE=Ya.filter(e=>!eE.has(e));function nE(e){const t=[];return tE.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Wh={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Gh(4,13),y:Gh(5,14)},rE=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,s=getComputedStyle(i),{display:o}=s,a={};o==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=Wh[u](r,s)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);c&&c.jump(a[u]),e[u]=Wh[u](l,s)}),e},iE=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(mv);let s=[],o=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=hi(c);const p=t[l];let g;if(Ko(p)){const v=p.length,y=p[0]===null?1:0;c=p[y],d=hi(c);for(let x=y;x<v;x++)g?qo(hi(p[x])===g):g=hi(p[x])}else g=hi(p);if(d!==g)if(Bh(d)&&Bh(g)){const v=u.get();typeof v=="string"&&u.set(parseFloat(v)),typeof p=="string"?t[l]=parseFloat(p):Array.isArray(p)&&g===U&&(t[l]=p.map(parseFloat))}else d!=null&&d.transform&&(g!=null&&g.transform)&&(c===0||p===0)?c===0?u.set(g.transform(c)):t[l]=d.transform(p):(o||(s=nE(e),o=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(p))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=rE(t,e,a);return s.length&&s.forEach(([c,d])=>{e.getValue(c).set(d)}),e.render(),Ua&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function sE(e,t,n,r){return JT(t)?iE(e,t,n,r):{target:t,transitionEnd:r}}const oE=(e,t,n,r)=>{const i=xT(e,t,r);return t=i.target,r=i.transitionEnd,sE(e,t,n,r)},Sc={current:null},gv={current:!1};function aE(){if(gv.current=!0,!!Ua)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Sc.current=e.matches;e.addListener(t),t()}else Sc.current=!1}function lE(e,t,n){const{willChange:r}=t;for(const i in t){const s=t[i],o=n[i];if(at(s))e.addValue(i,s),Zo(r)&&r.add(i);else if(at(o))e.addValue(i,Kr(s,{owner:e})),Zo(r)&&r.remove(i);else if(o!==s)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(s)}else{const a=e.getStaticValue(i);e.addValue(i,Kr(a!==void 0?a:s,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const vv=Object.keys(us),uE=vv.length,Yh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class cE{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Ye.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=Wa(n),this.isVariantNode=u1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const d in c){const p=c[d];a[d]!==void 0&&at(p)&&(p.set(a[d],!1),Zo(u)&&u.add(d))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,this.projection&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),gv.current||aE(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Sc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Vn.update(this.notifyUpdate),Vn.render(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=ti.has(t),i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&Ye.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,s,o){let a,l;for(let u=0;u<uE;u++){const c=vv[u],{isEnabled:d,Feature:p,ProjectionNode:g,MeasureLayout:v}=us[c];g&&(a=g),d(n)&&(!this.features[c]&&p&&(this.features[c]=new p(this)),v&&(l=v))}if(!this.projection&&a){this.projection=new a(s,this.latestValues,this.parent&&this.parent.projection);const{layoutId:u,layout:c,drag:d,dragConstraints:p,layoutScroll:g,layoutRoot:v}=n;this.projection.setOptions({layoutId:u,layout:c,alwaysMeasureLayout:Boolean(d)||p&&Pr(p),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,layoutScroll:g,layoutRoot:v})}return l}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update(this.props,this.prevProps):(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Me()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Yh.length;r++){const i=Yh[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s=t["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=lE(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<dE;r++){const i=yv[r],s=this.props[i];(ls(s)||s===!1)&&(n[i]=s)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Kr(n,{owner:this}),this.addValue(t,r)),r}readValue(t){return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Ud(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!at(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Yd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}const yv=["initial",...of],dE=yv.length;class wv extends cE{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},s){let o=F4(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),o&&(o=i(o))),s){$4(this,r,o);const a=oE(this,r,o,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function fE(e){return window.getComputedStyle(e)}class pE extends wv{readValueFromInstance(t,n){if(ti.has(n)){const r=Qd(n);return r&&r.default||0}else{const r=fE(t),i=(f1(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return sv(t,n)}build(t,n,r,i){$d(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Hd(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;at(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){v1(t,n,r,i)}}class hE extends wv{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ti.has(n)){const r=Qd(n);return r&&r.default||0}return n=y1.has(n)?n:Bd(n),t.getAttribute(n)}measureInstanceViewportBox(){return Me()}scrapeMotionValuesFromProps(t,n){return x1(t,n)}build(t,n,r,i){Fd(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){w1(t,n,r,i)}mount(t){this.isSVGTag=jd(t.tagName),super.mount(t)}}const mE=(e,t)=>Vd(e)?new hE(t,{enableHardwareAcceleration:!1}):new pE(t,{enableHardwareAcceleration:!0}),gE={layout:{ProjectionNode:hv,MeasureLayout:av}},vE={...Qk,...f4,...ZT,...gE},xv=E5((e,t)=>J5(e,t,vE,mE));function Sv(){const e=T.useRef(!1);return Wo(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function yE(){const e=Sv(),[t,n]=T.useState(0),r=T.useCallback(()=>{e.current&&n(t+1)},[t]);return[T.useCallback(()=>Ye.postRender(r),[r]),t]}class wE extends T.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function xE({children:e,isPresent:t}){const n=T.useId(),r=T.useRef(null),i=T.useRef({width:0,height:0,top:0,left:0});return T.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:l}=i.current;if(t||!r.current||!s||!o)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),T.createElement(wE,{isPresent:t,childRef:r,sizeRef:i},T.cloneElement(e,{ref:r}))}const Yl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=Nd(SE),l=T.useId(),u=T.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:c=>{a.set(c,!0);for(const d of a.values())if(!d)return;r&&r()},register:c=>(a.set(c,!1),()=>a.delete(c))}),s?void 0:[n]);return T.useMemo(()=>{a.forEach((c,d)=>a.set(d,!1))},[n]),T.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(e=T.createElement(xE,{isPresent:n},e)),T.createElement(Ha.Provider,{value:u},e)};function SE(){return new Map}function CE(e){return T.useEffect(()=>()=>e(),[])}const fr=e=>e.key||"";function kE(e,t){e.forEach(n=>{const r=fr(n);t.set(r,n)})}function TE(e){const t=[];return T.Children.forEach(e,n=>{T.isValidElement(n)&&t.push(n)}),t}const Xh=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{i&&(o="wait");let[a]=yE();const l=T.useContext(zd).forceRender;l&&(a=l);const u=Sv(),c=TE(e);let d=c;const p=new Set,g=T.useRef(d),v=T.useRef(new Map).current,y=T.useRef(!0);if(Wo(()=>{y.current=!1,kE(c,v),g.current=d}),CE(()=>{y.current=!0,v.clear(),p.clear()}),y.current)return T.createElement(T.Fragment,null,d.map(m=>T.createElement(Yl,{key:fr(m),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},m)));d=[...d];const x=g.current.map(fr),f=c.map(fr),h=x.length;for(let m=0;m<h;m++){const w=x[m];f.indexOf(w)===-1&&p.add(w)}return o==="wait"&&p.size&&(d=[]),p.forEach(m=>{if(f.indexOf(m)!==-1)return;const w=v.get(m);if(!w)return;const C=x.indexOf(m),k=()=>{v.delete(m),p.delete(m);const E=g.current.findIndex(b=>b.key===m);if(g.current.splice(E,1),!p.size){if(g.current=c,u.current===!1)return;a(),r&&r()}};d.splice(C,0,T.createElement(Yl,{key:fr(w),isPresent:!1,onExitComplete:k,custom:t,presenceAffectsLayout:s,mode:o},w))}),d=d.map(m=>{const w=m.key;return p.has(w)?m:T.createElement(Yl,{key:fr(m),isPresent:!0,presenceAffectsLayout:s,mode:o},m)}),T.createElement(T.Fragment,null,p.size?d:d.map(m=>T.cloneElement(m)))},EE=te.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: 100svh;
  z-index: 1;
  backdrop-filter: blur(4px);

  &:after {
    content: "";
    display: inline-block;
    background-color: ${({theme:e})=>e.bg};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    opacity: 0.8;
  }

  > div {
    margin-top: ${({headerHeight:e})=>`${e}px`};
  }

  .overlay {
    margin-top: ${({headerHeight:e})=>`${e}px`};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ul {
    position: relative;
    width: min-content;
    padding: 0 1em;
    margin: 0 auto;
  }
`,PE=({scrollbarWidth:e,toggleMenu:t})=>{const n=Math.round(document.querySelector("header").clientHeight);return S(EE,{style:{width:`calc(100% - ${e}px)`},headerHeight:n,as:xv.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:H(ht,{children:[S("div",{className:"overlay",onClick:t}),S(gg,{isMobile:!0,toggleMenu:t})]})})},bE=te.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  user-select: none;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    opacity: 0.4;
    position: absolute;
    background-color: ${({theme:e})=>e.cardBg};
  }

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    transform: scale(0.75);
    z-index: 1;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${({theme:e})=>e.fg};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({theme:e})=>e.fg} transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,ME=()=>S(bE,{children:H("div",{className:"lds-ring",children:[S("div",{}),S("div",{}),S("div",{}),S("div",{})]})}),AE=te.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  backdrop-filter: blur(4px);

  .overlay {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    position: absolute;
    background-color: ${({theme:e})=>e.cardBg};
  }

  .close {
    position: absolute;
    right: 2%;
    top: 2%;
    width: 2em;
    height: 2em;
    background: transparent;
    border: none;
    cursor: pointer;
    span {
      display: inline-block;
      position: absolute;
      left: 0;
      top: calc(50% - 1px);
      height: 2px;
      width: 100%;
      background-color: ${({theme:e})=>e.cyan};
      &:first-child {
        transform: rotate(-45deg) scale(1.2);
      }
      &:last-child {
        transform: rotate(45deg) scale(1.2);
      }
    }
  }

  .content {
    width: 90%;
    height: 80%;
    background-color: ${({theme:e})=>e.cardBg};
    color: #000;
    border-radius: var(--borderRadiusSmall);
    border: solid var(--strokeWidth) ${({theme:e})=>e.cyan};
    position: relative;

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }

  > a {
    color: ${({theme:e})=>e.fg};
    margin-top: 1em;
    font-size: 1em;
  }
`,LE=({projectSrc:e,closeProjectModal:t})=>{const[n,r]=T.useState(!0),i=T.useRef();return T.useEffect(()=>(i.current.addEventListener("load",()=>{r(!1)}),document.body.addEventListener("keydown",s=>{s.key==="Escape"&&t()}),()=>{var s;(s=i.current)==null||s.removeEventListener("load",()=>{r(!1)}),document.body.removeEventListener("keydown",o=>{o.key==="Escape"&&t()})}),[]),H(AE,{as:xv.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[S("div",{className:"overlay",onClick:t}),H("button",{className:"close",onClick:t,children:[S("span",{}),S("span",{})]}),H("div",{className:"content",children:[S("iframe",{src:e,ref:i}),n?S(ME,{}):null]}),S("a",{href:e,target:"_blank",children:"Open in a new tab"})]})},_E=te.div`
  background-color: ${({theme:e})=>e.bg};
  color: ${({theme:e})=>e.fg};
  position: relative;
  transition: all var(--duration-long);
`,OE=()=>{const[e,t]=T.useState(()=>localStorage.getItem("isDarkMode")?JSON.parse(localStorage.getItem("isDarkMode")):n());function n(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}T.useEffect(()=>{localStorage.setItem("isDarkMode",e)},[e]);const[r,i]=T.useState(!1),s=()=>i(x=>!x),o=a();function a(){let x=document.createElement("div");x.style.cssText="overflow:scroll; visibility:hidden; position:absolute;",document.body.appendChild(x);let f=x.offsetWidth-x.clientWidth;return x.remove(),f}const[l,u]=T.useState(null),c=x=>{u(x)},d=()=>u(null),p=()=>{document.body.style.overflow="hidden",document.body.style.marginRight=o+"px"},g=()=>{document.body.style.overflow="",document.body.style.marginRight=""};T.useEffect(()=>{r||l?p():g()},[r,l]),T.useEffect(()=>{window.onresize=()=>y()},[]);const y=((x,f=300)=>{let h;return(...m)=>{clearTimeout(h),h=setTimeout(()=>{x.apply(void 0,m)},f)}})(()=>i(!1),100);return S(tx,{isDarkMode:e,children:H(_E,{children:[S(hx,{menuIsOpen:r,toggleMenu:s,scrollbarWidth:o,isDarkMode:e,toggleDarkMode:()=>t(x=>!x)}),S(US,{}),S(o3,{}),S(JC,{previewProject:c}),S(n5,{}),S(c5,{}),S(f5,{}),S(Xh,{children:r&&S(PE,{scrollbarWidth:o,toggleMenu:s})}),S(Xh,{children:l&&S(LE,{projectSrc:l,closeProjectModal:d})})]})})};Xl.createRoot(document.getElementById("root")).render(S(OE,{}));