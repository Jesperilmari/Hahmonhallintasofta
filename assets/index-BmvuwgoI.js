(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=globalThis,ge=ee.ShadowRoot&&(ee.ShadyCSS===void 0||ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fe=Symbol(),Se=new WeakMap;let Ve=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ge&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Se.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Se.set(t,e))}return e}toString(){return this.cssText}};const ct=s=>new Ve(typeof s=="string"?s:s+"",void 0,fe),v=(s,...e)=>{const t=s.length===1?s[0]:e.reduce(((i,a,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+s[n+1]),s[0]);return new Ve(t,s,fe)},pt=(s,e)=>{if(ge)s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const i=document.createElement("style"),a=ee.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=t.cssText,s.appendChild(i)}},ke=ge?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ct(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ht,defineProperty:ut,getOwnPropertyDescriptor:gt,getOwnPropertyNames:ft,getOwnPropertySymbols:mt,getPrototypeOf:vt}=Object,le=globalThis,$e=le.trustedTypes,xt=$e?$e.emptyScript:"",bt=le.reactiveElementPolyfillSupport,F=(s,e)=>s,he={toAttribute(s,e){switch(e){case Boolean:s=s?xt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Je=(s,e)=>!ht(s,e),Te={attribute:!0,type:String,converter:he,reflect:!1,useDefault:!1,hasChanged:Je};Symbol.metadata??=Symbol("metadata"),le.litPropertyMetadata??=new WeakMap;let z=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Te){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,t);a!==void 0&&ut(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){const{get:a,set:n}=gt(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:a,set(o){const r=a?.call(this);n?.call(this,o),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Te}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;const e=vt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){const t=this.properties,i=[...ft(t),...mt(t)];for(const a of i)this.createProperty(a,t[a])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,a]of t)this.elementProperties.set(i,a)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const a=this._$Eu(t,i);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const a of i)t.unshift(ke(a))}else e!==void 0&&t.push(ke(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(a!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:he).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,a=i._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const n=i.getPropertyOptions(a),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:he;this._$Em=a;const r=o.fromAttribute(t,n.type);this[a]=r??this._$Ej?.get(a)??r,this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){const a=this.constructor,n=this[e];if(i??=a.getPropertyOptions(e),!((i.hasChanged??Je)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:a,wrapped:n},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),a===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[a,n]of this._$Ep)this[a]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[a,n]of i){const{wrapped:o}=n,r=this[a];o!==!0||this._$AL.has(a)||r===void 0||this.C(a,void 0,n,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};z.elementStyles=[],z.shadowRootOptions={mode:"open"},z[F("elementProperties")]=new Map,z[F("finalized")]=new Map,bt?.({ReactiveElement:z}),(le.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=globalThis,ne=me.trustedTypes,Ae=ne?ne.createPolicy("lit-html",{createHTML:s=>s}):void 0,Fe="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,Ye="?"+N,yt=`<${Ye}>`,U=document,q=()=>U.createComment(""),X=s=>s===null||typeof s!="object"&&typeof s!="function",ve=Array.isArray,wt=s=>ve(s)||typeof s?.[Symbol.iterator]=="function",pe=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ie=/-->/g,Ee=/>/g,P=RegExp(`>|${pe}(?:([^\\s"'>=/]+)(${pe}*=${pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_e=/'/g,Ne=/"/g,qe=/^(?:script|style|textarea|title)$/i,St=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),c=St(1),j=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Re=new WeakMap,L=U.createTreeWalker(U,129);function Xe(s,e){if(!ve(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ae!==void 0?Ae.createHTML(e):e}const kt=(s,e)=>{const t=s.length-1,i=[];let a,n=e===2?"<svg>":e===3?"<math>":"",o=V;for(let r=0;r<t;r++){const l=s[r];let h,p,d=-1,g=0;for(;g<l.length&&(o.lastIndex=g,p=o.exec(l),p!==null);)g=o.lastIndex,o===V?p[1]==="!--"?o=Ie:p[1]!==void 0?o=Ee:p[2]!==void 0?(qe.test(p[2])&&(a=RegExp("</"+p[2],"g")),o=P):p[3]!==void 0&&(o=P):o===P?p[0]===">"?(o=a??V,d=-1):p[1]===void 0?d=-2:(d=o.lastIndex-p[2].length,h=p[1],o=p[3]===void 0?P:p[3]==='"'?Ne:_e):o===Ne||o===_e?o=P:o===Ie||o===Ee?o=V:(o=P,a=void 0);const u=o===P&&s[r+1].startsWith("/>")?" ":"";n+=o===V?l+yt:d>=0?(i.push(h),l.slice(0,d)+Fe+l.slice(d)+N+u):l+N+(d===-2?r:u)}return[Xe(s,n+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class G{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let n=0,o=0;const r=e.length-1,l=this.parts,[h,p]=kt(e,t);if(this.el=G.createElement(h,i),L.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(a=L.nextNode())!==null&&l.length<r;){if(a.nodeType===1){if(a.hasAttributes())for(const d of a.getAttributeNames())if(d.endsWith(Fe)){const g=p[o++],u=a.getAttribute(d).split(N),f=/([.?@])?(.*)/.exec(g);l.push({type:1,index:n,name:f[2],strings:u,ctor:f[1]==="."?Tt:f[1]==="?"?At:f[1]==="@"?It:de}),a.removeAttribute(d)}else d.startsWith(N)&&(l.push({type:6,index:n}),a.removeAttribute(d));if(qe.test(a.tagName)){const d=a.textContent.split(N),g=d.length-1;if(g>0){a.textContent=ne?ne.emptyScript:"";for(let u=0;u<g;u++)a.append(d[u],q()),L.nextNode(),l.push({type:2,index:++n});a.append(d[g],q())}}}else if(a.nodeType===8)if(a.data===Ye)l.push({type:2,index:n});else{let d=-1;for(;(d=a.data.indexOf(N,d+1))!==-1;)l.push({type:7,index:n}),d+=N.length-1}n++}}static createElement(e,t){const i=U.createElement("template");return i.innerHTML=e,i}}function W(s,e,t=s,i){if(e===j)return e;let a=i!==void 0?t._$Co?.[i]:t._$Cl;const n=X(e)?void 0:e._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),n===void 0?a=void 0:(a=new n(s),a._$AT(s,t,i)),i!==void 0?(t._$Co??=[])[i]=a:t._$Cl=a),a!==void 0&&(e=W(s,a._$AS(s,e.values),a,i)),e}class $t{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,a=(e?.creationScope??U).importNode(t,!0);L.currentNode=a;let n=L.nextNode(),o=0,r=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new Z(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new Et(n,this,e)),this._$AV.push(h),l=i[++r]}o!==l?.index&&(n=L.nextNode(),o++)}return L.currentNode=U,a}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,a){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),X(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==j&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):wt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&X(this._$AH)?this._$AA.nextSibling.data=e:this.T(U.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,a=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=G.createElement(Xe(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(t);else{const n=new $t(a,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=Re.get(e.strings);return t===void 0&&Re.set(e.strings,t=new G(e)),t}k(e){ve(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const n of e)a===t.length?t.push(i=new Z(this.O(q()),this.O(q()),this,this.options)):i=t[a],i._$AI(n),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class de{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,n){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}_$AI(e,t=this,i,a){const n=this.strings;let o=!1;if(n===void 0)e=W(this,e,t,0),o=!X(e)||e!==this._$AH&&e!==j,o&&(this._$AH=e);else{const r=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=W(this,r[i+l],t,l),h===j&&(h=this._$AH[l]),o||=!X(h)||h!==this._$AH[l],h===b?e=b:e!==b&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!a&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Tt extends de{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}class At extends de{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}}class It extends de{constructor(e,t,i,a,n){super(e,t,i,a,n),this.type=5}_$AI(e,t=this){if((e=W(this,e,t,0)??b)===j)return;const i=this._$AH,a=e===b&&i!==b||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==b&&(i===b||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Et{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}}const _t=me.litHtmlPolyfillSupport;_t?.(G,Z),(me.litHtmlVersions??=[]).push("3.3.1");const Nt=(s,e,t)=>{const i=t?.renderBefore??e;let a=i._$litPart$;if(a===void 0){const n=t?.renderBefore??null;i._$litPart$=a=new Z(e.insertBefore(q(),n),n,void 0,t??{})}return a._$AI(s),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=globalThis;let m=class extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Nt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}};m._$litElement$=!0,m.finalized=!0,xe.litElementHydrateSupport?.({LitElement:m});const Rt=xe.litElementPolyfillSupport;Rt?.({LitElement:m});(xe.litElementVersions??=[]).push("4.2.1");function Bt(s){for(var e=[],t=0;t<s.length;){var i=s[t];if(i==="*"||i==="+"||i==="?"){e.push({type:"MODIFIER",index:t,value:s[t++]});continue}if(i==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:s[t++]});continue}if(i==="{"){e.push({type:"OPEN",index:t,value:s[t++]});continue}if(i==="}"){e.push({type:"CLOSE",index:t,value:s[t++]});continue}if(i===":"){for(var a="",n=t+1;n<s.length;){var o=s.charCodeAt(n);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){a+=s[n++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:a}),t=n;continue}if(i==="("){var r=1,l="",n=t+1;if(s[n]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(n));for(;n<s.length;){if(s[n]==="\\"){l+=s[n++]+s[n++];continue}if(s[n]===")"){if(r--,r===0){n++;break}}else if(s[n]==="("&&(r++,s[n+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(n));l+=s[n++]}if(r)throw new TypeError("Unbalanced pattern at ".concat(t));if(!l)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:l}),t=n;continue}e.push({type:"CHAR",index:t,value:s[t++]})}return e.push({type:"END",index:t,value:""}),e}function be(s,e){e===void 0&&(e={});for(var t=Bt(s),i=e.prefixes,a=i===void 0?"./":i,n=e.delimiter,o=n===void 0?"/#?":n,r=[],l=0,h=0,p="",d=function(k){if(h<t.length&&t[h].type===k)return t[h++].value},g=function(k){var y=d(k);if(y!==void 0)return y;var I=t[h],ce=I.type,dt=I.index;throw new TypeError("Unexpected ".concat(ce," at ").concat(dt,", expected ").concat(k))},u=function(){for(var k="",y;y=d("CHAR")||d("ESCAPED_CHAR");)k+=y;return k},f=function(k){for(var y=0,I=o;y<I.length;y++){var ce=I[y];if(k.indexOf(ce)>-1)return!0}return!1},A=function(k){var y=r[r.length-1],I=k||(y&&typeof y=="string"?y:"");if(y&&!I)throw new TypeError('Must have text between two parameters, missing text after "'.concat(y.name,'"'));return!I||f(I)?"[^".concat(R(o),"]+?"):"(?:(?!".concat(R(I),")[^").concat(R(o),"])+?")};h<t.length;){var w=d("CHAR"),S=d("NAME"),H=d("PATTERN");if(S||H){var $=w||"";a.indexOf($)===-1&&(p+=$,$=""),p&&(r.push(p),p=""),r.push({name:S||l++,prefix:$,suffix:"",pattern:H||A($),modifier:d("MODIFIER")||""});continue}var x=w||d("ESCAPED_CHAR");if(x){p+=x;continue}p&&(r.push(p),p="");var O=d("OPEN");if(O){var $=u(),_=d("NAME")||"",K=d("PATTERN")||"",M=u();g("CLOSE"),r.push({name:_||(K?l++:""),pattern:_&&!K?A($):K,prefix:$,suffix:M,modifier:d("MODIFIER")||""});continue}g("END")}return r}function Ge(s,e){return Qe(be(s,e),e)}function Qe(s,e){e===void 0&&(e={});var t=ye(e),i=e.encode,a=i===void 0?function(l){return l}:i,n=e.validate,o=n===void 0?!0:n,r=s.map(function(l){if(typeof l=="object")return new RegExp("^(?:".concat(l.pattern,")$"),t)});return function(l){for(var h="",p=0;p<s.length;p++){var d=s[p];if(typeof d=="string"){h+=d;continue}var g=l?l[d.name]:void 0,u=d.modifier==="?"||d.modifier==="*",f=d.modifier==="*"||d.modifier==="+";if(Array.isArray(g)){if(!f)throw new TypeError('Expected "'.concat(d.name,'" to not repeat, but got an array'));if(g.length===0){if(u)continue;throw new TypeError('Expected "'.concat(d.name,'" to not be empty'))}for(var A=0;A<g.length;A++){var w=a(g[A],d);if(o&&!r[p].test(w))throw new TypeError('Expected all "'.concat(d.name,'" to match "').concat(d.pattern,'", but got "').concat(w,'"'));h+=d.prefix+w+d.suffix}continue}if(typeof g=="string"||typeof g=="number"){var w=a(String(g),d);if(o&&!r[p].test(w))throw new TypeError('Expected "'.concat(d.name,'" to match "').concat(d.pattern,'", but got "').concat(w,'"'));h+=d.prefix+w+d.suffix;continue}if(!u){var S=f?"an array":"a string";throw new TypeError('Expected "'.concat(d.name,'" to be ').concat(S))}}return h}}function R(s){return s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ye(s){return s&&s.sensitive?"":"i"}function Ot(s,e){if(!e)return s;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,a=t.exec(s.source);a;)e.push({name:a[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),a=t.exec(s.source);return s}function Pt(s,e,t){var i=s.map(function(a){return Ze(a,e,t).source});return new RegExp("(?:".concat(i.join("|"),")"),ye(t))}function Ct(s,e,t){return Lt(be(s,t),e,t)}function Lt(s,e,t){t===void 0&&(t={});for(var i=t.strict,a=i===void 0?!1:i,n=t.start,o=n===void 0?!0:n,r=t.end,l=r===void 0?!0:r,h=t.encode,p=h===void 0?function(y){return y}:h,d=t.delimiter,g=d===void 0?"/#?":d,u=t.endsWith,f=u===void 0?"":u,A="[".concat(R(f),"]|$"),w="[".concat(R(g),"]"),S=o?"^":"",H=0,$=s;H<$.length;H++){var x=$[H];if(typeof x=="string")S+=R(p(x));else{var O=R(p(x.prefix)),_=R(p(x.suffix));if(x.pattern)if(e&&e.push(x),O||_)if(x.modifier==="+"||x.modifier==="*"){var K=x.modifier==="*"?"?":"";S+="(?:".concat(O,"((?:").concat(x.pattern,")(?:").concat(_).concat(O,"(?:").concat(x.pattern,"))*)").concat(_,")").concat(K)}else S+="(?:".concat(O,"(").concat(x.pattern,")").concat(_,")").concat(x.modifier);else{if(x.modifier==="+"||x.modifier==="*")throw new TypeError('Can not repeat "'.concat(x.name,'" without a prefix and suffix'));S+="(".concat(x.pattern,")").concat(x.modifier)}else S+="(?:".concat(O).concat(_,")").concat(x.modifier)}}if(l)a||(S+="".concat(w,"?")),S+=t.endsWith?"(?=".concat(A,")"):"$";else{var M=s[s.length-1],k=typeof M=="string"?w.indexOf(M[M.length-1])>-1:M===void 0;a||(S+="(?:".concat(w,"(?=").concat(A,"))?")),k||(S+="(?=".concat(w,"|").concat(A,")"))}return new RegExp(S,ye(t))}function Ze(s,e,t){return s instanceof RegExp?Ot(s,e):Array.isArray(s)?Pt(s,e,t):Ct(s,e,t)}function C(s){return typeof s=="object"&&!!s}function Q(s){return typeof s=="function"}function E(s){return typeof s=="string"}function oe(s=[]){return Array.isArray(s)?s:[s]}function B(s){return`[Vaadin.Router] ${s}`}class et extends Error{code;context;constructor(e){super(B(`Page not found (${e.pathname})`)),this.context=e,this.code=404}}const D=Symbol("NotFoundResult");function tt(s){return new et(s)}function it(s){return(Array.isArray(s)?s[0]:s)??""}function re(s){return it(s?.path)}function Dt(s){return Array.isArray(s)&&s.length>0?s:void 0}const ue=new Map;ue.set("|false",{keys:[],pattern:/(?:)/u});function Be(s){try{return decodeURIComponent(s)}catch{return s}}function Ut(s,e,t=!1,i=[],a){const n=`${s}|${String(t)}`,o=it(e);let r=ue.get(n);if(!r){const p=[];r={keys:p,pattern:Ze(s,p,{end:t,strict:s===""})},ue.set(n,r)}const l=r.pattern.exec(o);if(!l)return null;const h={...a};for(let p=1;p<l.length;p++){const d=r.keys[p-1],g=d.name,u=l[p];(u!==void 0||!Object.hasOwn(h,g))&&(d.modifier==="+"||d.modifier==="*"?h[g]=u?u.split(/[/?#]/u).map(Be):[]:h[g]=u&&Be(u))}return{keys:[...i,...r.keys],params:h,path:l[0]}}var jt=Ut;function st(s,e,t,i,a){let n,o,r=0,l=re(s);return l.startsWith("/")&&(t&&(l=l.substring(1)),t=!0),{next(h){if(s===h)return{done:!0,value:void 0};s.__children??=Dt(s.children);const p=s.__children??[],d=!s.__children&&!s.children;if(!n&&(n=jt(l,e,d,i,a),n))return{value:{keys:n.keys,params:n.params,path:n.path,route:s}};if(n&&p.length>0)for(;r<p.length;){if(!o){const u=p[r];u.parent=s;let f=n.path.length;f>0&&e.charAt(f)==="/"&&(f+=1),o=st(u,e.substring(f),t,n.keys,n.params)}const g=o.next(h);if(!g.done)return{done:!1,value:g.value};o=null,r+=1}return{done:!0,value:void 0}}}}var Ht=st;function Mt(s){if(Q(s.route.action))return s.route.action(s)}function zt(s,e){let t=s;for(;t;)if(t=t.parent,t===e)return!0;return!1}function Wt(s){return!!s&&typeof s=="object"&&"next"in s&&"params"in s&&"result"in s&&"route"in s}class Kt extends Error{code;context;constructor(e,t){let i=`Path '${e.pathname}' is not properly resolved due to an error.`;const a=re(e.route);a&&(i+=` Resolution had failed on route: '${a}'`),super(i,t),this.code=t?.code,this.context=e}warn(){console.warn(this.message)}}function Vt(s,e){const{path:t,route:i}=e;if(i&&!i.__synthetic){const a={path:t,route:i};if(i.parent&&s.chain)for(let n=s.chain.length-1;n>=0&&s.chain[n].route!==i.parent;n--)s.chain.pop();s.chain?.push(a)}}class at{baseUrl;#i;errorHandler;resolveRoute;#e;constructor(e,{baseUrl:t="",context:i,errorHandler:a,resolveRoute:n=Mt}={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t,this.errorHandler=a,this.resolveRoute=n,Array.isArray(e)?this.#e={__children:e,__synthetic:!0,action:()=>{},path:""}:this.#e={...e,parent:void 0},this.#i={...i,hash:"",async next(){return D},params:{},pathname:"",resolver:this,route:this.#e,search:"",chain:[]}}get root(){return this.#e}get context(){return this.#i}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#e.__children??[]]}removeRoutes(){this.#e.__children=[]}async resolve(e){const t=this,i={...this.#i,...E(e)?{pathname:e}:e,next:h},a=Ht(this.#e,this.__normalizePathname(i.pathname)??i.pathname,!!this.baseUrl),n=this.resolveRoute;let o=null,r=null,l=i;async function h(p=!1,d=o?.value?.route,g){const u=g===null?o?.value?.route:void 0;if(o=r??a.next(u),r=null,!p&&(o.done||!zt(o.value.route,d)))return r=o,D;if(o.done)throw tt(i);l={...i,params:o.value.params,route:o.value.route,chain:l.chain?.slice()},Vt(l,o.value);const f=await n(l);return f!=null&&f!==D?(l.result=Wt(f)?f.result:f,t.#i=l,l):await h(p,d,f)}try{return await h(!0,this.#e)}catch(p){const d=p instanceof et?p:new Kt(l,{code:500,cause:p});if(this.errorHandler)return l.result=this.errorHandler(d),l;throw p}}setRoutes(e){this.#e.__children=[...oe(e)]}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=e.startsWith("/")?new URL(t).origin+e:`./${e}`,a=new URL(i,t).href;if(a.startsWith(t))return a.slice(t.length)}addRoutes(e){return this.#e.__children=[...this.#e.__children??[],...oe(e)],this.getRoutes()}}function nt(s,e,t,i){const a=e.name??i?.(e);if(a&&(s.has(a)?s.get(a)?.push(e):s.set(a,[e])),Array.isArray(t))for(const n of t)n.parent=e,nt(s,n,n.__children??n.children,i)}function Oe(s,e){const t=s.get(e);if(t){if(t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t[0]}}function Jt(s,e={}){if(!(s instanceof at))throw new TypeError("An instance of Resolver is expected");const t=new Map,i=new Map;return(a,n)=>{let o=Oe(i,a);if(!o&&(i.clear(),nt(i,s.root,s.root.__children,e.cacheKeyProvider),o=Oe(i,a),!o))throw new Error(`Route "${a}" not found`);let r=o.fullPath?t.get(o.fullPath):void 0;if(!r){let p=re(o),d=o.parent;for(;d;){const f=re(d);f&&(p=`${f.replace(/\/$/u,"")}/${p.replace(/^\//u,"")}`),d=d.parent}const g=be(p),u=Object.create(null);for(const f of g)E(f)||(u[f.name]=!0);r={keys:u,tokens:g},t.set(p,r),o.fullPath=p}let h=Qe(r.tokens,{encode:encodeURIComponent,...e})(n)||"/";if(e.stringifyQueryParams&&n){const p={};for(const[g,u]of Object.entries(n))!(g in r.keys)&&u&&(p[g]=u);const d=e.stringifyQueryParams(p);d&&(h+=d.startsWith("?")?d:`?${d}`)}return h}}var Ft=Jt;const Yt=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,te=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function qt(){function s(){return!0}return ot(s)}function Xt(){try{return Gt()?!0:Qt()?te?!Zt():!qt():!1}catch{return!1}}function Gt(){return localStorage.getItem("vaadin.developmentmode.force")}function Qt(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Zt(){return!!(te&&Object.keys(te).map(e=>te[e]).filter(e=>e.productionMode).length>0)}function ot(s,e){if(typeof s!="function")return;const t=Yt.exec(s.toString());if(t)try{s=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return s(e)}window.Vaadin=window.Vaadin||{};const Pe=function(s,e){if(window.Vaadin.developmentMode)return ot(s,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Xt());function ei(){/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}const ti=function(){if(typeof Pe=="function")return Pe(ei)};function ii(s,e=window.Vaadin??={}){e.registrations??=[],e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}ii();ti();const si=s=>{const e=getComputedStyle(s).getPropertyValue("animation-name");return e&&e!=="none"},ai=(s,e)=>{const t=()=>{s.removeEventListener("animationend",t),e()};s.addEventListener("animationend",t)};async function ni(s,e){return s.classList.add(e),await new Promise(t=>{if(si(s)){const i=s.getBoundingClientRect(),a=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;s.setAttribute("style",`position: absolute; ${a}`),ai(s,()=>{s.classList.remove(e),s.removeAttribute("style"),t()})}else s.classList.remove(e),t()})}var Ce=ni;function rt(s){if(!s||!E(s.path))throw new Error(B('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!Q(s.action)&&!Array.isArray(s.children)&&!Q(s.children)&&!E(s.component)&&!E(s.redirect))throw new Error(B(`Expected route config "${s.path}" to include either "component, redirect" or "action" function but none found.`));s.redirect&&["bundle","component"].forEach(e=>{e in s&&console.warn(B(`Route config "${String(s.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))})}function Le(s){oe(s).forEach(e=>rt(e))}function oi({next:s,...e}){return e}function ie(s,e){const t=e.__effectiveBaseUrl;return t?new URL(s.replace(/^\//u,""),t).pathname:s}function lt(s){return s.map(e=>e.path).reduce((e,t)=>t.length?`${e.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`:e,"")}function ri(s){return lt(s.map(e=>e.route))}function T({chain:s=[],hash:e="",params:t={},pathname:i="",redirectFrom:a,resolver:n,search:o=""},r){const l=s.map(h=>h.route);return{baseUrl:n?.baseUrl??"",getUrl:(h={})=>n?ie(Ge(ri(s))({...t,...h}),n):"",hash:e,params:t,pathname:i,redirectFrom:a,route:r??(Array.isArray(l)?l.at(-1):void 0)??null,routes:l,search:o,searchParams:new URLSearchParams(o)}}function De(s,e){const t={...s.params};return{redirect:{from:s.pathname,params:t,pathname:e}}}function li(s,e){if(e.location=T(s),s.chain){const t=s.chain.map(i=>i.route).indexOf(s.route);s.chain[t].element=e}return e}function se(s,e,...t){if(typeof s=="function")return s.apply(e,t)}function Ue(s,e,...t){return i=>i&&C(i)&&("cancel"in i||"redirect"in i)?i:se(e?.[s],e,...t)}function di(s,e){if(!Array.isArray(s)&&!C(s))throw new Error(B(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(s)}`));const t=oe(s);t.forEach(i=>rt(i)),e.__children=t}function Y(s,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${s}`,{cancelable:s==="go",detail:e}))}function ci(s){if(typeof s!="object")return String(s);const[e="Unknown"]=/ (.*)\]$/u.exec(String(s))??[];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(s)}`:e}function pi(s){const{port:e,protocol:t}=s,n=t==="http:"&&e==="80"||t==="https:"&&e==="443"?s.hostname:s.host;return`${t}//${n}`}function je(s){if(s instanceof Element)return s.nodeName.toLowerCase()}function He(s){if(s.defaultPrevented||s.button!==0||s.shiftKey||s.ctrlKey||s.altKey||s.metaKey)return;let e=s.target;const t=s instanceof MouseEvent?s.composedPath():s.path??[];for(let l=0;l<t.length;l++){const h=t[l];if("nodeName"in h&&h.nodeName.toLowerCase()==="a"){e=h;break}}for(;e&&e instanceof Node&&je(e)!=="a";)e=e.parentNode;if(!e||je(e)!=="a")return;const i=e;if(i.target&&i.target.toLowerCase()!=="_self"||i.hasAttribute("download")||i.hasAttribute("router-ignore")||i.pathname===window.location.pathname&&i.hash!==""||(i.origin||pi(i))!==window.location.origin)return;const{hash:n,pathname:o,search:r}=i;Y("go",{hash:n,pathname:o,search:r})&&s instanceof MouseEvent&&(s.preventDefault(),s.type==="click"&&window.scrollTo(0,0))}const hi={activate(){window.document.addEventListener("click",He)},inactivate(){window.document.removeEventListener("click",He)}};var ui=hi;function Me(s){if(s.state==="vaadin-router-ignore")return;const{hash:e,pathname:t,search:i}=window.location;Y("go",{hash:e,pathname:t,search:i})}const gi={activate(){window.addEventListener("popstate",Me)},inactivate(){window.removeEventListener("popstate",Me)}};var fi=gi;let ze=[];const mi={CLICK:ui,POPSTATE:fi};function We(s=[]){ze.forEach(e=>e.inactivate()),s.forEach(e=>e.activate()),ze=s}const vi=256;function J(){return{cancel:!0}}const Ke={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return D}};class ae extends at{location=T({resolver:this});ready=Promise.resolve(this.location);#i=new WeakSet;#e=new WeakSet;#c=this.#x.bind(this);#o=0;#n;__previousContext;#r;#s=null;#t=null;constructor(e,t){const a=document.head.querySelector("base")?.getAttribute("href");super([],{baseUrl:a?new URL(a,document.URL).href.replace(/[^/]*$/u,""):void 0,...t,resolveRoute:async n=>await this.#b(n)}),We(Object.values(mi)),this.setOutlet(e),this.subscribe()}async#b(e){const{route:t}=e;if(Q(t.children)){let a=await t.children(oi(e));Q(t.children)||({children:a}=t),di(a,t)}const i={component:a=>{const n=document.createElement(a);return this.#e.add(n),n},prevent:J,redirect:a=>De(e,a)};return await Promise.resolve().then(async()=>{if(this.#a(e))return await se(t.action,t,e,i)}).then(a=>{if(a!=null&&(typeof a=="object"||typeof a=="symbol")&&(a instanceof HTMLElement||a===D||C(a)&&"redirect"in a))return a;if(E(t.redirect))return i.redirect(t.redirect)}).then(a=>{if(a!=null)return a;if(E(t.component))return i.component(t.component)})}setOutlet(e){e&&this.#m(e),this.#n=e}getOutlet(){return this.#n}async setRoutes(e,t=!1){return this.__previousContext=void 0,this.#r=void 0,Le(e),super.setRoutes(e),t||this.#x(),await this.ready}addRoutes(e){return Le(e),super.addRoutes(e)}async render(e,t=!1){this.#o+=1;const i=this.#o,a={...Ke,...E(e)?{hash:"",search:"",pathname:e}:e,__renderId:i};return this.ready=this.#y(a,t),await this.ready}async#y(e,t){const{__renderId:i}=e;try{const a=await this.resolve(e),n=await this.#l(a);if(!this.#a(n))return this.location;const o=this.__previousContext;if(n===o)return this.#d(o,!0),this.location;if(this.location=T(n),t&&this.#d(n,i===1),Y("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.#v(n,o),this.__previousContext=n,this.location;this.#k(n,o);const r=this.#E(n);if(this.#I(n),this.#A(n,o),await r,this.#a(n))return this.#$(),this.__previousContext=n,this.location}catch(a){if(i===this.#o){t&&this.#d(this.context);for(const n of this.#n?.children??[])n.remove();throw this.location=T(Object.assign(e,{resolver:this})),Y("error",{router:this,error:a,...e}),a}}return this.location}async#l(e,t=e){const i=await this.#p(t),n=i!==t?i:e,r=ie(lt(i.chain??[]),this)===i.pathname,l=async(p,d=p.route,g)=>{const u=await p.next(!1,d,g);return u===null||u===D?r?p:d.parent!=null?await l(p,d.parent,u):u:u},h=await l(i);if(h==null||h===D)throw tt(n);return h!==i?await this.#l(n,h):await this.#w(i)}async#p(e){const{result:t}=e;if(t instanceof HTMLElement)return li(e,t),e;if(t&&"redirect"in t){const i=await this.#f(t.redirect,e.__redirectCount,e.__renderId);return await this.#p(i)}throw t instanceof Error?t:new Error(B(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${ci(t)}". Double check the action return value for the route.`))}async#w(e){return await this.#S(e).then(async t=>t===this.__previousContext||t===e?t:await this.#l(t))}async#S(e){const t=this.__previousContext??{},i=t.chain??[],a=e.chain??[];let n=Promise.resolve(void 0);const o=r=>De(e,r);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let r=0;r<Math.min(i.length,a.length)&&!(i[r].route!==a[r].route||i[r].path!==a[r].path&&i[r].element!==a[r].element||!this.#g(i[r].element,a[r].element));e.__divergedChainIndex++,r++);if(e.__skipAttach=a.length===i.length&&e.__divergedChainIndex===a.length&&this.#g(e.result,t.result),e.__skipAttach){for(let r=a.length-1;r>=0;r--)n=this.#h(n,e,{prevent:J},i[r]);for(let r=0;r<a.length;r++)n=this.#u(n,e,{prevent:J,redirect:o},a[r]),i[r].element.location=T(e,i[r].route)}else for(let r=i.length-1;r>=e.__divergedChainIndex;r--)n=this.#h(n,e,{prevent:J},i[r])}if(!e.__skipAttach)for(let r=0;r<a.length;r++)r<e.__divergedChainIndex?r<i.length&&i[r].element&&(i[r].element.location=T(e,i[r].route)):(n=this.#u(n,e,{prevent:J,redirect:o},a[r]),a[r].element&&(a[r].element.location=T(e,a[r].route)));return await n.then(async r=>{if(r&&C(r)){if("cancel"in r&&this.__previousContext)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if("redirect"in r)return await this.#f(r.redirect,e.__redirectCount,e.__renderId)}return e})}async#h(e,t,i,a){const n=T(t);let o=await e;if(this.#a(t)&&(o=Ue("onBeforeLeave",a.element,n,i,this)(o)),!(C(o)&&"redirect"in o))return o}async#u(e,t,i,a){const n=T(t,a.route),o=await e;if(this.#a(t))return Ue("onBeforeEnter",a.element,n,i,this)(o)}#g(e,t){return e instanceof Element&&t instanceof Element?this.#e.has(e)&&this.#e.has(t)?e.localName===t.localName:e===t:!1}#a(e){return e.__renderId===this.#o}async#f(e,t=0,i=0){if(t>vi)throw new Error(B(`Too many redirects when rendering ${e.from}`));return await this.resolve({...Ke,pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:t+1,__renderId:i})}#m(e=this.#n){if(!(e instanceof Element||e instanceof DocumentFragment))throw new TypeError(B(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${e})`))}#d({pathname:e,search:t="",hash:i=""},a){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==i){const n=a?"replaceState":"pushState";window.history[n](null,document.title,e+t+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#v(e,t){let i=this.#n;for(let a=0;a<(e.__divergedChainIndex??0);a++){const n=t?.chain?.[a].element;if(n)if(n.parentNode===i)e.chain[a].element=n,i=n;else break}return i}#k(e,t){this.#m(),this.#T();const i=this.#v(e,t);this.#s=[],this.#t=Array.from(i?.children??[]).filter(n=>this.#i.has(n)&&n!==e.result);let a=i;for(let n=e.__divergedChainIndex??0;n<(e.chain?.length??0);n++){const o=e.chain[n].element;o&&(a?.appendChild(o),this.#i.add(o),a===i&&this.#s.push(o),a=o)}}#$(){if(this.#t)for(const e of this.#t)e.remove();this.#t=null,this.#s=null}#T(){if(this.#t&&this.#s){for(const e of this.#s)e.remove();this.#t=null,this.#s=null}}#A(e,t){if(!(!t?.chain||e.__divergedChainIndex==null))for(let i=t.chain.length-1;i>=e.__divergedChainIndex&&this.#a(e);i--){const a=t.chain[i].element;if(a)try{const n=T(e);se(a.onAfterLeave,a,n,{},this)}finally{if(this.#t?.includes(a))for(const n of a.children)n.remove()}}}#I(e){if(!(!e.chain||e.__divergedChainIndex==null))for(let t=e.__divergedChainIndex;t<e.chain.length&&this.#a(e);t++){const i=e.chain[t].element;if(i){const a=T(e,e.chain[t].route);se(i.onAfterEnter,i,a,{},this)}}}async#E(e){const t=this.#t?.[0],i=this.#s?.[0],a=[],{chain:n=[]}=e;let o;for(let r=n.length-1;r>=0;r--)if(n[r].route.animate){o=n[r].route.animate;break}if(t&&i&&o){const r=C(o)&&o.leave?o.leave:"leaving",l=C(o)&&o.enter?o.enter:"entering";a.push(Ce(t,r)),a.push(Ce(i,l))}return await Promise.all(a),e}subscribe(){window.addEventListener("vaadin-router-go",this.#c)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#c)}#x(e){const{pathname:t,search:i,hash:a}=e instanceof CustomEvent?e.detail:window.location;E(this.__normalizePathname(t))&&(e?.preventDefault&&e.preventDefault(),this.render({pathname:t,search:i,hash:a},!0))}static setTriggers(...e){We(e)}urlForName(e,t){return this.#r||(this.#r=Ft(this,{cacheKeyProvider(i){return"component"in i&&typeof i.component=="string"?i.component:void 0}})),ie(this.#r(e,t??void 0),this)}urlForPath(e,t){return ie(Ge(e)(t??void 0),this)}static go(e){const{pathname:t,search:i,hash:a}=E(e)?new URL(e,"http://a"):e;return Y("go",{pathname:t,search:i,hash:a})}}class we extends m{static styles=v`
    .attributeWrapper {
      display: flex;
      flex-direction: column;
      justify-content: top;
      align-items: center;
      color: black;
      font-size: 14px;
      border: 3px solid lightblue;
      width: 100px;
      margin: 10px;
      padding: 0px;
      height: 110px;
      border-radius: 10px;
      background-color: white;
      font-family: "Roboto Condensed", sans-serif;
    }
    .value{
      font-size: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid lightgray;
      width: 75px;
      height: 35px;
      border-radius: 10px;
      background-color: white;
      margin:0;
      padding:0;
    }
    .modifier{
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 5px;
      align-items: center;
      width: 60px;
      border-radius: 10px;
      border: 2px solid lightblue;
      background-color: white;
      border-radius: 50px;
    }
    .attributeAddRemove{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    button{
      margin: 3px;
      width:25px;
      height:25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-style: solid;
    }
    .value.highlighted {
      background-color: lightgray
    }
    .name{
      margin: 0;
      padding: 0;
    }
  `;static properties={name:{type:String},value:{type:Number},highlight:{type:Boolean},showButtons:{type:Boolean}};static modifiers={1:"-5",2:"-4",3:"-4",4:"-3",5:"-3",6:"-2",7:"-2",8:"-1",9:"-1",10:"0",11:"0",12:"+1",13:"+1",14:"+2",15:"+2",16:"+3",17:"+3",18:"+4",19:"+4",20:"+5",21:"+5",22:"+6",23:"+6",24:"+7",25:"+7",26:"+8",27:"+8",28:"+9",29:"+9",30:"+10"};constructor(){super(),this.highlight=!1,this.showButtons=!1;const e=localStorage.getItem(`character-attribute-${this.name}`);this.value=e!==null?Number(e):10}firstUpdated(){this.dispatchEvent(new CustomEvent("modifier-changed",{bubbles:!0,composed:!0,detail:{attr:this.id,modifier:this.getModifier()}}))}mouseEnterAtribute(){this.highlight=!0}mouseLeaveAtribute(){this.highlight=!1}toggleButtons(){this.showButtons=!this.showButtons}changeValue(e){const t=this.value+e;t>=1&&t<=30&&(this.value=t,localStorage.setItem(`character-attribute-${this.name}`,String(this.value)),this.dispatchEvent(new CustomEvent("modifier-changed",{bubbles:!0,composed:!0,detail:{attr:this.id,modifier:this.getModifier(),element:this}})))}getModifier(){return we.modifiers[this.value]}willUpdate(e){if(e.has("name")){const t=localStorage.getItem(`character-attribute-${this.name}`);t!==null&&(this.value=Number(t))}}render(){return c`
        <div class="attributeWrapper">
            <p><span class="name">${this.name}</span></p>
            <span class="attributeAddRemove">
              ${this.showButtons?c`<button @click=${()=>this.changeValue(-1)}>-</button>`:""}
              <span
                  class="value ${this.highlight?"highlighted":""}" 
                  @mouseenter="${this.mouseEnterAtribute}" 
                  @mouseleave="${this.mouseLeaveAtribute}" 
                  @click="${this.toggleButtons}"
              >
                ${this.value}
              </span>
              ${this.showButtons?c`<button @click=${()=>this.changeValue(1)}>+</button>`:""}
            </span>
            <span class="modifier">${this.getModifier()}</span>
        </div>
    `}}customElements.define("character-attribute",we);class xi extends m{static styles=v`
    .mainWrapper {
      display: flex;
      flex-direction: row;
      margin-bottom: 10px;
      padding: 0px;
      font-family: "Roboto Condensed", sans-serif;
    }
    .skillwrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100px;
      margin: 0px;
      padding: 0px;
    }
    .toggleproficiency {
      width: 12px;
      height: 12px;
      border: 1px dotted black;
      border-radius: 15px;
      margin-left: 15px;
      margin-right: 15px;
      cursor: pointer;
    }
    .attr {
      font-weight: bold;
      width: 50px;
      margin: 0px;
      padding: 0px;
      font-size: 16px;
      color: #696969;
    }
    .name {
      border-bottom: 1px solid gray;
      width: 125px;
      margin: 0px;
      padding: 0px;
    }
    .modifier {
      width: 50px;
      height: 25px;
      border: 1px solid gray;
      border-radius: 5px;
      margin: 0px;
      margin-left: 15px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 1.25rem;
    }
    .toggleproficiency.highlighted {
      background-color: lightgray;
    }
    .toggleproficiency.toggled {
      background-color: black;
    }
  `;static properties={name:{type:String},attr:{type:String},bonus:{type:Number,state:!0},highlightProficiency:{type:Boolean},toggleProficiency:{type:Boolean},proficiencyBonus:{type:Number},baseModifier:{type:Number,state:!0}};constructor(){super(),this.highlightProficiency=!1,this.toggleProficiency=!1,this.proficiencyBonus=0,this.bonus=0,this.baseModifier=0}connectedCallback(){super.connectedCallback(),window.addEventListener("attributes-ready",this.updateBaseModifier),window.addEventListener("modifier-changed",this.onModifierChanged),window.addEventListener("proficiency-changed",this.onProficiencyChanged)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("attributes-ready",this.updateBaseModifier),window.removeEventListener("modifier-changed",this.onModifierChanged),window.removeEventListener("proficiency-changed",this.onProficiencyChanged)}firstUpdated(){this.updateBaseModifier(),this.toggleProficiency=this.loadProficiencyState(this.name),this.recalculateBonus()}updateBaseModifier=()=>{const e=document.querySelector(`#${this.attr}`);e&&typeof e.getModifier=="function"?(this.baseModifier=e.getModifier(),this.recalculateBonus()):console.warn(`Skill Element: No attribute element found with id ${this.attr}`)};onModifierChanged=e=>{e.detail.attr===this.attr&&(this.baseModifier=e.detail.modifier,this.recalculateBonus())};onProficiencyChanged=e=>{this.proficiencyBonus=e.detail.value,this.recalculateBonus()};recalculateBonus(){const e=Number(this.baseModifier),t=Number(this.proficiencyBonus);this.bonus=e+(this.toggleProficiency?t:0)}mouseEnterProficiencyBtn(){this.highlightProficiency=!0}mouseLeaveProficiencyBtn(){this.highlightProficiency=!1}clickProficiencyBtn(){this.toggleProficiency=!this.toggleProficiency,this.recalculateBonus(),this.saveProficiencyState(this.name,this.toggleProficiency)}saveProficiencyState(e,t){const i=JSON.parse(localStorage.getItem("skills"))||{};i[e]=t,localStorage.setItem("skills",JSON.stringify(i))}loadProficiencyState(e){return(JSON.parse(localStorage.getItem("skills"))||{})[e]??!1}render(){return c`
      <span class="mainWrapper">
        <span class="skillwrapper">
          <div
            class="toggleproficiency ${this.highlightProficiency?"highlighted":""} ${this.toggleProficiency?"toggled":""}"
            @mouseenter="${this.mouseEnterProficiencyBtn}"
            @mouseleave="${this.mouseLeaveProficiencyBtn}"
            title="Toggle prepared"
            @click="${this.clickProficiencyBtn}"
          ></div>
          <p class="attr">${this.attr}</p>
        </span>
        <p class="name">${this.name}</p>
        <p class="modifier">${this.bonus>=0?`+${this.bonus}`:this.bonus}</p>
      </span>
    `}}customElements.define("skill-element",xi);class bi extends m{static styles=v`
    .border{
        border: 3px solid lightblue;
        border-radius: 10px;
        background-color: white;
        font-family: "Roboto Condensed", sans-serif;
        height: 110px;
        padding: 0;
        width: 300px;
    }
    .title{
        display: flex;
        flex-direction: row;
        font-weight: bold;
        justify-content: space-between;
        color: #696969;
        margin: 0;
        padding: 0;
    }
    .healthCounter{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: bold;
        font-size: 40px;
        margin: 0;
        padding: 0;
        border-bottom: 1px solid darkgray;
        margin-left:1px;
        margin-right:5px; 
        width: 290px;
        height: 60px;
    }
    .currentHealth{
        margin: 0;
        padding: 0;
        margin-left: 0px;
        position: absolute;
    }
    .healthBtn{
        margin-left: 60px;
        position: absolute;
    }
    .slash{
        margin: 0;
        padding: 0;
        color: #696969;
        position: absolute;
        margin-left: 92px;
    }
    .maxHealth{
        margin: 0;
        padding: 0;
        margin-left: 100px;
        position: absolute;
    }
    .maxBtn{
        margin-left: 160px;
        position: absolute; 
    }
    .hitpoints{
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 5px;
    }
    .nyk{
        margin: 0;
        padding: 0;
    }
    .max{
        margin: 0;
        padding: 0;
    }
    .temp{
        margin: 0;
        padding: 0;
    }
    .tempNum{
        margin: 0;
        margin-left: 205px;
        padding: 0;
        position: absolute;
    }
    .tempBtn{
        position: absolute;
        margin-left: 265px;
    }
    .button{
        width: 30px;
        border:none;
        margin: 1px;
    }
    .buttonWrapper{
        display:flex;
        flex-direction: column;
    }
  `;static get properties(){return{currentHealth:{type:Number},maxHealth:{type:Number},tempHealth:{type:Number}}}constructor(){super(),this.currentHealth=JSON.parse(localStorage.getItem("currentHealth")||"10"),this.maxHealth=JSON.parse(localStorage.getItem("maxHealth")||"10"),this.tempHealth=JSON.parse(localStorage.getItem("tempHealth")||"0")}incrementHP(){this.currentHealth++,localStorage.setItem("currentHealth",JSON.stringify(this.currentHealth))}decrementHP(){this.currentHealth--,localStorage.setItem("currentHealth",JSON.stringify(this.currentHealth))}incrementMax(){this.maxHealth++,localStorage.setItem("maxHealth",JSON.stringify(this.maxHealth))}decrementMax(){this.maxHealth--,localStorage.setItem("maxHealth",JSON.stringify(this.maxHealth))}incrementTemp(){this.tempHealth++,localStorage.setItem("tempHealth",JSON.stringify(this.tempHealth))}decrementTemp(){this.tempHealth--,localStorage.setItem("tempHealth",JSON.stringify(this.tempHealth))}render(){return c`
    <div class="border">
        <span class="title">
            <p class="nyk">NYKYINEN</p>
            <p class="max">MAKSIMI</p>
            <p class="temp">VÄLIAIKAINEN</p>
        </span>
        <span class="healthCounter">
            <p class="currentHealth">${this.currentHealth}</p>
            <div class="buttonWrapper healthBtn">
                <button class="button" @click="${()=>this.incrementHP()}">+</button>
                <button class="button" @click="${()=>this.decrementHP()}">-</button> 
            </div>
            <p class="maxHealth">${this.maxHealth}</p>
            <div class="buttonWrapper maxBtn">
                <button class="button" @click="${()=>this.incrementMax()}">+</button>
                <button class="button" @click="${()=>this.decrementMax()}">-</button> 
            </div>
            <p class="tempNum">${this.tempHealth}</p>
            <div class="buttonWrapper tempBtn">
                <button class="button" @click="${()=>this.incrementTemp()}">+</button>
                <button class="button" @click="${()=>this.decrementTemp()}">-</button> 
            </div>
        </span>
        <span class="hitpoints">
            OSUMAPISTEET
        </span>
    </div>
    `}}customElements.define("health-element",bi);class yi extends m{static styles=v`
    .wrapper{
      height: 100px;
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
    }
    .heropoint{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .value{
      font-family: "Roboto Condensed", sans-serif;
      font-size: 50px;
      font-weight: bold;
      border: 2px solid lightblue;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 75px;
      height: 60px;
      border-radius: 5px;
    }
    .title{
      font-family: "Roboto Condensed", sans-serif;
      font-weight: bold;
      padding: 0px;
      margin: 0px;
      margin-top: 5px;
      text-shadow: -1px -1px 0 #ffffff, 1px -1px#ffffff, -1px 1px#ffffff, 1px 1px 0 #ffffff;
    }
    .value.highlighted{
      background-color: lightgray;
    }
    button{
      margin: 3px;
      width:25px;
      height:25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-style: solid;
      z-index: 10;
      position: relative;
    }
  `;static properties={heropoint:{type:Number},highlight:{type:Boolean},showButtons:{type:Boolean}};constructor(){super(),this.highlight=!1,this.heropoint=JSON.parse(localStorage.getItem("heropoint")||"1"),this.showButtons=!1}mouseEnter(){this.highlight=!0}mouseLeave(){this.highlight=!1}toggleButtons(){this.showButtons=!this.showButtons}changeValue(e){const t=this.heropoint+e;this.heropoint=t,localStorage.setItem("heropoint",JSON.stringify(this.heropoint))}render(){return c`
    <div class="wrapper">
      <span class="heropoint">
      ${this.showButtons?c`<button @click=${()=>this.changeValue(-1)}>-</button>`:""}
      <div class="value ${this.highlight?"highlighted":""}"
      @mouseenter="${this.mouseEnter}"
      @mouseleave="${this.mouseLeave}"
      @click="${this.toggleButtons}"
      >
        ${this.heropoint}
      </div>
      ${this.showButtons?c`<button @click=${()=>this.changeValue(1)}>+</button>`:""}
      </span>
      <p class="title">SANKARIPISTE</p>
      
  </div>    
    `}}customElements.define("heropoint-element",yi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wi={ATTRIBUTE:1},Si=s=>(...e)=>({_$litDirective$:s,values:e});class ki{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $i=Si(class extends ki{constructor(s){if(super(s),s.type!==wi.ATTRIBUTE||s.name!=="class"||s.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter((e=>s[e])).join(" ")+" "}update(s,[e]){if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const t=s.element.classList;for(const i of this.st)i in e||(t.remove(i),this.st.delete(i));for(const i in e){const a=!!e[i];a===this.st.has(i)||this.nt?.has(i)||(a?(t.add(i),this.st.add(i)):(t.remove(i),this.st.delete(i)))}return j}});class Ti extends m{static styles=v`
  .saveWrapper{
    position: relative;
    border: 1px solid lightblue;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 110px;
    height: 30px;
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 0px;
    border-radius: 25px;
    padding: 0px;
  }
  .toggleproficiency{
    width: 12px;
    height: 12px;
    border: 1px dotted black;
    border-radius: 15px;
    margin-left: 15px;
    margin-right: 15px;
    background-color: white;
    padding:0px;
    flex-shrink: 0;
  }
  .modifier{
    position: absolute;
    right: -17.5px;
    background-color:white;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid lightblue;
    width:35px;
    height:35px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    padding:0px;
    margin-left:10px;
  }
  .ominaisuusTitle{
    margin:0px;
    padding:0px;
    flex-shrink: 0;
    white-space: nowrap;
  }
  .firstRow {
  display: flex;
  flex-direction: row;
  }
  .secondRow{
    margin-top: 10px;
    margin-left: 90px;
    font-weight:bold;
  }
  .toggleproficiency.highlighted {
      background-color: lightgray;
    }
    .toggleproficiency.toggled {
      background-color: black;
    }
  `;static properties={name:{type:String},attr:{type:String},bonus:{type:Number,state:!0},highlightProficiency:{type:Boolean,state:!0},toggleProficiency:{type:Boolean},proficiencyBonus:{type:Number},baseModifier:{type:Number,state:!0}};constructor(){super(),this.highlightProficiency=!1,this.toggleProficiency=!1,this.proficiencyBonus=0,this.bonus=0,this.baseModifier=0}connectedCallback(){super.connectedCallback(),window.addEventListener("attributes-ready",this.updateBaseModifier),window.addEventListener("modifier-changed",this.onModifierChanged),window.addEventListener("proficiency-changed",this.onProficiencyChanged)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("attributes-ready",this.updateBaseModifier),window.removeEventListener("modifier-changed",this.onModifierChanged),window.removeEventListener("proficiency-changed",this.onProficiencyChanged)}firstUpdated(){this.updateBaseModifier(),this.toggleProficiency=this.loadProficiencyState(this.attr),this.recalculateBonus()}updateBaseModifier=()=>{const e=document.querySelector(`#${this.attr}`);e&&typeof e.getModifier=="function"?(this.baseModifier=e.getModifier(),this.recalculateBonus()):console.warn(`Skill Element: No attribute element found with id ${this.attr}`)};onModifierChanged=e=>{e.detail.attr===this.attr&&(this.baseModifier=e.detail.modifier,this.recalculateBonus())};onProficiencyChanged=e=>{this.proficiencyBonus=e.detail.value,this.recalculateBonus()};recalculateBonus(){const e=Number(this.baseModifier),t=Number(this.proficiencyBonus);this.bonus=e+(this.toggleProficiency?t:0)}mouseEnterProficiencyBtn(){this.highlightProficiency=!0}mouseLeaveProficiencyBtn(){this.highlightProficiency=!1}saveProficiencyState(e,t){const i=JSON.parse(localStorage.getItem("savingThrows"))||{};i[e]=t,localStorage.setItem("savingThrows",JSON.stringify(i))}loadProficiencyState(e){return(JSON.parse(localStorage.getItem("savingThrows"))||{})[e]??!1}clickProficiencyBtn(){this.toggleProficiency=!this.toggleProficiency,this.recalculateBonus(),this.saveProficiencyState(this.attr,this.toggleProficiency)}render(){return c`   
    <div class="border">
      <div class="firstRow">
        <div class="firstColumn">
          <div class="saveWrapper">
            <span
              class=${$i({toggleproficiency:!0,highlighted:this.highlightProficiency,toggled:this.toggleProficiency})}
              @mouseenter=${this.mouseEnterProficiencyBtn}
              @mouseleave=${this.mouseLeaveProficiencyBtn}
              @click=${this.clickProficiencyBtn}
            ></span>  
            <p class="ominaisuusTitle">${this.attr}</p>
            <span class="modifier">${this.bonus>=0?`+${this.bonus}`:this.bonus}</span>
          </div>
        </div>
      </div>
    </div>
    `}}customElements.define("savingthrows-element",Ti);class Ai extends m{static styles=v`
    .wrapper {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
    }
    .title {
      font-weight: bold;
      color: #696969;
    }
    .proficiencies {
      border-bottom: 1px solid gray;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .textbox {
      font-family: "Roboto Condensed", sans-serif;
      border: none;
      width: 100%;
      min-height: 1px;
      height: auto;
      resize: none;
      overflow: hidden;
      line-height: 25px;
      box-sizing: border-box;
    }
  `;static get properties(){return{title:{type:String},proficiencies:{type:Object}}}constructor(){super();const e={ASEPÄTEVYYDET:"",HAARNISKAPÄTEVYYDET:"",KIELET:"",TYÖKALUPÄTEVYYDET:""},t=JSON.parse(localStorage.getItem("proficiencies")||"{}");this.proficiencies={...e,...t}}autoResize(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}save(e,t){this.proficiencies={...this.proficiencies,[e]:t},localStorage.setItem("proficiencies",JSON.stringify(this.proficiencies)),this.resizeAllTextareas()}handleInput(e){this.autoResize(e.target)}firstUpdated(){this.resizeAllTextareas()}resizeAllTextareas(){const e=this.renderRoot.querySelectorAll("textarea");for(const t of e)this.resizeTextarea(t)}resizeTextarea(e){e.style.height="auto";const t=parseInt(window.getComputedStyle(e).lineHeight);e.style.height=t+"px",e.scrollHeight>t&&(e.style.height=e.scrollHeight+"px")}render(){return c`
      ${Object.entries(this.proficiencies).map(([e,t])=>c`
          <div class="wrapper">
            <span class="title">${e}</span>
            <div class="proficiencies">
              <textarea
                class="textbox"
                spellcheck="false"
                .value=${t}
                @input=${i=>{this.autoResize(i.target),this.save(e,i.target.value)}}
              ></textarea>
            </div>
          </div>
        `)}
    `}}customElements.define("proficiencies-element",Ai);class Ii extends m{static styles=v`
  .border {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid lightblue;
    border-radius: 10px;
    background-color: white;
    font-family: "Roboto Condensed", sans-serif;
    width: 300px;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    position: relative;
    margin-top: 3px;
    margin-bottom: 3px;
    transform: translateX(+6%);
  }
  .title {
    width: 220px;
    border: 3px solid lightblue;
    background-color: white;
    border-radius: 10px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 20px; 
  }
  .num {
    border: 3px solid #add8e6;
    background-color: white;
    border-radius: 40px;
    width: 60px;
    height: 40px;
    font-size: 20px;
    font-family: "Roboto Condensed", sans-serif;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
    resize: none;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0;
    transform: translateX(-50%);
  }
  `;static get properties(){return{senses:{type:Object}}}constructor(){super(),this.senses=JSON.parse(localStorage.getItem("senses")||"{}")}onBlur(e,t){this.senses={...this.senses,[e]:t},localStorage.setItem("senses",JSON.stringify(this.senses))}render(){return c`
    <div class="border"> 
      <div class="wrapper">
        <div class="title">
        PASSIIVINEN TARKKAAVAISUUS
        </div>
        <textarea id="passiivinenTarkkaavaisuus" class="num" rows="1" @blur="${e=>this.onBlur(e.target.id,e.target.value)}" .value="${this.senses.passiivinenTarkkaavaisuus||""}"></textarea>
      </div>
      <div class="wrapper">
        <div class="title">
        ALOITE
        </div>
        <textarea id="aloite" class="num" rows="1" @blur="${e=>this.onBlur(e.target.id,e.target.value)}" .value="${this.senses.aloite||""}"></textarea>
      </div>
      <div class="wrapper">
        <div class="title">
        PIMEÄNÄKÖ
        </div>
        <textarea id="pimeänäkö" class="num" rows="1" @blur="${e=>this.onBlur(e.target.id,e.target.value)}" .value="${this.senses.pimeänäkö||""}"></textarea>
      </div>
      AISTIT
    </div>

    `}}customElements.define("senses-element",Ii);class Ei extends m{static styles=v`
  .wrapper{
    display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: black;
      font-size: 14px;
      border: 3px solid lightblue;
      width: 100px;
      margin: 10px;
      padding: 0px;
      height: 110px;
      border-radius: 10px;
      background-color: white;
      font-family: "Roboto Condensed", sans-serif;
  }
  .title{
    font-size: 16px;
    font-weight: bold;
  }
  .bonus{
    font-size: 30px;
    border: solid darkgray 1px;
    width: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 10px
  }
  .bonus.highlighted{
      background-color: lightgray;
    }
  button{
      margin: 3px;
      width:25px;
      height:25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-style: solid;
      z-index: 10;
    position: relative;  
  }
  .buttonsRow{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  `;static properties={bonus:{type:Number},highlight:{type:Boolean},showButtons:{type:Boolean}};constructor(){super(),this.highlight=!1,this.bonus=JSON.parse(localStorage.getItem("proficiencyBonus")||"2"),this.showButtons=!1}firstUpdated(){this.dispatchEvent(new CustomEvent("proficiency-changed",{detail:{value:this.bonus},bubbles:!0,composed:!0}))}mouseEnter(){this.highlight=!0}mouseLeave(){this.highlight=!1}toggleButtons(){this.showButtons=!this.showButtons}changeValue(e){this.bonus+=e,this.dispatchEvent(new CustomEvent("proficiency-changed",{detail:{value:this.bonus},bubbles:!0,composed:!0})),localStorage.setItem("proficiencyBonus",JSON.stringify(this.bonus))}getProficiencyBonus(){return this.bonus}render(){return c`
      <div class="wrapper">
        <span class="title">PÄTEVYYS</span>
        <span class="buttonsRow">
        ${this.showButtons?c`<button @click=${()=>this.changeValue(-1)}>-</button>`:""}
        <span class="bonus ${this.highlight?"highlighted":""}" 
        @mouseenter="${this.mouseEnter}"
        @mouseleave="${this.mouseLeave}"
        @click="${this.toggleButtons}"
        >+${this.bonus}</span>
        ${this.showButtons?c`<button @click=${()=>this.changeValue(1)}>+</button>`:""}
        </span>
        <span class="title">BONUS</span>
      </div>
    `}}customElements.define("proficiency-bonus",Ei);class _i extends m{static styles=v`
  .wrapper{
    display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: black;
      font-size: 14px;
      border: 3px solid lightblue;
      width: 100px;
      margin: 10px;
      padding: 0px;
      height: 110px;
      border-radius: 10px;
      background-color: white;
      font-family: "Roboto Condensed", sans-serif;
  }
  .title{
    font-size: 16px;
    font-weight: bold;
  }
  .speed{
    font-size: 30px;
    border: solid darkgray 1px;
    width: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 10px
  }
  button{
    margin: 3px;
    width:25px;
    height:25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      border-style: solid;
      z-index: 10;
    position: relative;
    }
  .speed.highlighted{
    background-color: lightgray;
  }
  .buttonsRow{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  `;static properties={speed:{type:Number},highlight:{type:Boolean},showButtons:{type:Boolean}};constructor(){super(),this.highlight=!1,this.speed=JSON.parse(localStorage.getItem("speed")||"12")}mouseEnter(){this.highlight=!0}mouseLeave(){this.highlight=!1}toggleButtons(){this.showButtons=!this.showButtons}changeValue(e){const t=this.speed+e;this.speed=t,localStorage.setItem("speed",JSON.stringify(this.speed))}render(){return c`
      <div class="wrapper">
        <span class="title">NOPEUS</span>
        <span class="buttonsRow">
          ${this.showButtons?c`<button @click=${()=>this.changeValue(-1)}>-</button>`:""}
          <span class="speed ${this.highlight?"highlighted":""}"
          @mouseenter="${this.mouseEnter}"
          @mouseleave="${this.mouseLeave}"
          @click="${this.toggleButtons}"
          >
          ${this.speed}m</span>
          ${this.showButtons?c`<button @click=${()=>this.changeValue(1)}>+</button>`:""}
        </span>
        <span class="title">KÄVELLEN</span>
      </div>
    `}}customElements.define("speed-element",_i);class Ni extends m{static styles=v`
    .wrapper{
        border: 3px solid lightblue;
        background-color: white;
        font-family: "Roboto Condensed", sans-serif;
        height: 110px;
        padding: 0;
        margin: 10px;
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        position:relative
    }
    .acBorder{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
        width: 260px;
        border-radius: 10px;
    }
    .title{
        font-weight: bold;
        margin-bottom: 10px;
        position: absolute;
        transform: translateY(-200%); 
    }

    button{
    margin: 3px;
    width:25px;
    height:25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      border-style: solid;
      z-index: 10;
    position: relative;
    }
    
    .buttonPos{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
    }
    .ac{
        font-weight: bold;
        font-size: 50px;
        border: 1px solid lightgray;
        width: 90px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .ac.highlighted{
        background-color: lightgray;
    }
    .shield{
        font-weight: bold;
        font-size: 50px;
        border: 1px solid lightgray;
        width: 90px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .shield.highlighted{
        background-color: lightgray;
    }
  `;static properties={ac:{type:Number},shield:{type:Number},highlightAc:{type:Boolean},highlightShield:{type:Boolean},showButtonsAc:{type:Boolean},showButtonsShield:{type:Boolean}};constructor(){super(),this.highlightAc=!1,this.highlightShield=!1,this.ac=JSON.parse(localStorage.getItem("ac")||"10"),this.shield=JSON.parse(localStorage.getItem("shield")||"12"),this.showButtonsAc=!1,this.showButtonsShield=!1}mouseEnterAc(){this.highlightAc=!0}mouseLeaveAc(){this.highlightAc=!1}mouseEnterShield(){this.highlightShield=!0}mouseLeaveShield(){this.highlightShield=!1}toggleButtonsAc(){this.showButtonsAc=!this.showButtonsAc}toggleButtonsShield(){this.showButtonsShield=!this.showButtonsShield}changeAc(e){const t=this.ac+e;this.ac=t,localStorage.setItem("ac",JSON.stringify(this.ac))}changeShield(e){const t=this.shield+e;this.shield=t,localStorage.setItem("shield",JSON.stringify(this.shield))}render(){return c`
    <div class="wrapper">
        <div class="acBorder">
            <span class="title">PUOLUSTUS</span>
            <span class="buttonPos">
            ${this.showButtonsAc?c`<button @click=${()=>this.changeAc(-1)}>-</button>`:""}
            <span class="ac ${this.highlightAc?"highlighted":""}"
            @mouseenter="${this.mouseEnterAc}"
            @mouseleave="${this.mouseLeaveAc}"
            @click="${this.toggleButtonsAc}"
            >
            ${this.ac}</span>
            ${this.showButtonsAc?c`<button @click=${()=>this.changeAc(1)}>+</button>`:""}
            </span>
        </div>
        <div class="acBorder">
            <span class="title">KILVELLÄ</span>
            <span class="buttonPos">
            ${this.showButtonsShield?c`<button @click=${()=>this.changeShield(-1)}>-</button>`:""}
            <span class="shield ${this.highlightShield?"highlighted":""}"
            @mouseenter="${this.mouseEnterShield}"
            @mouseleave="${this.mouseLeaveShield}"
            @click="${this.toggleButtonsShield}"
            >
            ${this.shield}</span>
            ${this.showButtonsShield?c`<button @click=${()=>this.changeShield(1)}>+</button>`:""}
            </span>
        </div>
    </div>
    `}}customElements.define("ac-element",Ni);class Ri extends m{static styles=v`
    .wrapper{
        border: 3px solid lightblue;
        background-color: white;
        font-family: "Roboto Condensed", sans-serif;
        height: 110px;
        margin: 10px;
        margin-top: 20px;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position:relative
    }
    .title{
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 5px;
        width: 95%;
    }
    .hitdice{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .label{
        width: 90px;
        text-align: center;
        font-weight: bold;
        color: gray;
    }
    .field{
        font-family: "Roboto Condensed", sans-serif;
        resize: none;
        margin: 5px;
        height: 40px;
        border: none;
        border: solid 1px gray;
        border-radius: 5px;
        width: 130px;
        text-align: center;
        font-size: 32px;
        font-weight: bold;
    }
    .hitDiceRow{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    `;static get properties(){return{hitDice:{type:Object}}}constructor(){super(),this.hitDice=JSON.parse(localStorage.getItem("hitDice")||"{}")}onCurrentBlur(e,t){this.hitDice={...this.hitDice,[e]:t},localStorage.setItem("hitDice",JSON.stringify(this.hitDice))}onMaxBlur(e,t){this.hitDice={...this.hitDice,[e]:t},localStorage.setItem("hitDice",JSON.stringify(this.hitDice))}render(){return c`
    <div class="wrapper">
        <span class="hitDiceRow">
            <div class="hitdice">
                <label for="currentDice" class="label">NYKYINEN</label>
                <textarea id="currentDice" class="field" spellcheck="false" @blur="${e=>this.onCurrentBlur(e.target.id,e.target.value)}" .value="${this.hitDice.currentDice||""}"></textarea>
            </div>
            <div class="hitdice">
                <label for="maxDice" class="label">MAKSIMI</label>
                <textarea id="maxDice" class="field" spellcheck="false" @blur="${e=>this.onMaxBlur(e.target.id,e.target.value)}" .value="${this.hitDice.maxDice||""}"></textarea>
            </div>
        </span>
        <p class="title">OSUMANOPAT</p>
    </div>
    `}}customElements.define("hitdice-element",Ri);class Bi extends m{static styles=v`
    .wrapper{
        border: 3px solid lightblue;
        background-color: white;
        font-family: "Roboto Condensed", sans-serif;
        height: 110px;
        padding: 0;
        margin-bottom: 10px;
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        position:relative;
        margin-top: 15px;
    }
    .title{
        font-weight: bold;
        margin-bottom: 10px;
    }

    .textbox {
      font-family: "Roboto Condensed", sans-serif;
      border: none;
      width: 100%;
      min-height: 1px;
      height: auto;
      resize: none;
      overflow: hidden;
      line-height: 25px;
      border-bottom: solid 1px lightgray;
      box-sizing: border-box;
    }
  `;render(){return c`
    <div class="wrapper">
        <div class="acBorder">
            <div class="row">
                <div class="olotilat">
                    <div>
                        Olotilat
                    </div>
                </div>
            </div>
        </div>
    </div>
    `}}customElements.define("conditions-element",Bi);class Oi extends m{static styles=v`
    .titlesWrapper{
        display: flex;
        flex-direction: row;
        margin-bottom: 0px;
    }
    .titles{
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 5px;
    }
    .damageWrapper {
        border: solid grey 1px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border-radius: 5px;
        width: 90px;
        flex-shrink: 0;
    }
    .weaponRow {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 10px;
        height: auto;
        gap: 10px;
        background-color: lightgray;
    }
    .vahinkoTitle{
        padding-left: 30px;
    }
    .hbTitle{
        padding-left: 85px;
    }
    .propertiesTitle{
        padding-left: 50px;
    }
    .dmgTypeTextArea{
        font-size: 12px;
        color: #696969;
        font-family: "Roboto Condensed", sans-serif;
        border: none;
        background: none;
        align-items: center;
        justify-content: center;
        resize: none;
        width:100%;
        text-align: center;
        line-height: 15px;
        height:15px;
    }
    .hb {
        font-weight: bold;
        font-size: 20px;
        margin-left: 0px;
        flex-shrink: 0;
        }
    .propertiesTextArea {
        margin-left: 20px;
        flex-grow: 1;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 17px;
        border: none;
        background: none;
        align-items: center;
        justify-content: center;
        resize: none;
        line-height: 20px;
        min-width: 10px;
        }
    .nameTextArea {
        width: 115px;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 17px;
        border: none;
        background: none;
        resize: none;
        overflow: hidden;
        padding: 0;
        line-height: 20px;
    }
    .addBtn{
        border: none;
        border-radius: 20px;
        padding: 0;
        margin: 0;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        padding-bottom: 4px;
        padding-left: 1px;
        margin: 5px;
    }
    .addWpnRow{
        display: flex;
        flex-direction: row;
        margin: 5px;
    }
    .weaponsDropDown{
        font-family: "Roboto Condensed", sans-serif;
        font-size: 15px;
        border: none;
        border-radius: 10px;
        padding: 10px;
    }
    .dropdownOption{
        color: black;
    }
    .weaponRow.even {
    background-color: lightgray;
    }

    .weaponRow.odd {
        background-color: white;
    }
    .desc{
        margin-left: 10px;
        border-left: solid lightgray 5px;
        padding: 5px;
    }
    .actionTitles{
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 5px;
        font-weight: bold;
    }
    .buttonWrapper{
        display:flex;
        flex-direction: column;
    }
    .hbWrapper{
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
    }
    .hbButton{
        width: 30px;
        margin: 1px;
        margin-left: 10px;
        border:none;
    }
    .img{
        height: 20px;
        width: 20px;
    }
    .dmgTextArea{
        flex-wrap: wrap;
        width: 100%;
        flex-shrink: 0;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 17px;
        border: none;
        background: none;
        align-items: center;
        justify-content: center;
        resize: none;
        line-height: 20px;
        height:20px;
        text-align: center;
        overflow: hidden;
        }
    `;staticProperties={addedWeapons:{type:Array},weaponlessHB:{type:Number},hb:{type:Number}};static get properties(){return{weapons:{type:Array},addedWeapons:{type:Array}}}constructor(){super(),this.weapons=[],this.addedWeapons=JSON.parse(localStorage.getItem("weapons")||"[]")}async connectedCallback(){super.connectedCallback(),this._onResize=this.resizeAllTextareas.bind(this),window.addEventListener("resize",this._onResize),await this.loadCSV()}async loadCSV(){const t=await(await fetch("/data/weapons.csv")).text(),i=Papa.parse(t,{header:!0,skipEmptyLines:!0});this.weapons=i.data,console.log(this.weapons)}firstUpdated(){this.resizeAllTextareas(),this.shadowRoot.addEventListener("input",e=>{e.target.tagName==="TEXTAREA"&&this.resizeTextarea(e.target)})}resizeAllTextareas(){const e=this.renderRoot.querySelectorAll("textarea");for(const t of e)this.resizeTextarea(t)}resizeTextarea(e){e.style.height="auto";const t=parseInt(window.getComputedStyle(e).lineHeight);e.style.height=t+"px",e.scrollHeight>t&&(e.style.height=e.scrollHeight+"px")}handleAddWeapon(){const t=this.shadowRoot.getElementById("weapons").value;if(t==="default")return;const i=this.weapons.find(a=>a.Nimi===t);if(i){const a={...i,hbBonus:0};this.addedWeapons=[...this.addedWeapons,a]}localStorage.setItem("weapons",JSON.stringify(this.addedWeapons)),this.resizeAllTextareas()}incrementHB(e){const t=[...this.addedWeapons];t[e].hbBonus+=1,this.addedWeapons=t,localStorage.setItem("weapons",JSON.stringify(this.addedWeapons))}decrementHB(e){const t=[...this.addedWeapons];t[e].hbBonus-=1,this.addedWeapons=t,localStorage.setItem("weapons",JSON.stringify(this.addedWeapons))}onStatBlur(e,t,i){const a=[...this.addedWeapons];a[t]={...a[t],[i]:e.target.value},this.addedWeapons=a,localStorage.setItem("weapons",JSON.stringify(this.addedWeapons))}deleteWeapon(e){const i=[...this.addedWeapons].filter(a=>a.Nimi!==e);this.addedWeapons=i,localStorage.setItem("weapons",JSON.stringify(this.addedWeapons))}render(){return c`
            <div class="titlesWrapper">
                <p class="titles">ASE</p>
                <p class="titles hbTitle">HB</p>
                <p class="titles vahinkoTitle">VAHINKO</p>
                <p class="titles propertiesTitle">OMINAISUUDET</p>
            </div>
            <div>
                ${this.addedWeapons.map((e,t)=>c`
                <div class="weaponRow ${t%2===0?"even":"odd"}">
                    <textarea type="text" class="nameTextArea" spellcheck="false" .value="${e.Nimi}" @blur="${i=>this.onStatBlur(i,t,"Nimi")}"></textarea>
                    <span class="hbWrapper">
                        <span class="hb">${e.hbBonus>=0?"+":""}${e.hbBonus}</span>
                        <span class="buttonWrapper">
                            <button class="hbButton" @click="${()=>this.incrementHB(t)}">+</button>
                            <button class="hbButton" @click="${()=>this.decrementHB(t)}">-</button>
                        </span>
                    </span>
                    <span class="damageWrapper">
                    <textarea type="text" class="dmgTextArea" spellcheck="false" .value="${e.Vahinko}" @blur="${i=>this.onStatBlur(i,t,"Vahinko")}"></textarea>
                    <textarea class="dmgTypeTextArea" spellcheck="false" .value="${e.Vahinkotyyppi}" @blur="${i=>this.onStatBlur(i,t,"Vahinkotyyppi")}"></textarea>
                    </span>
                    <textarea class="propertiesTextArea" spellcheck="false" .value="${e.Ominaisuudet}" @blur="${i=>this.onStatBlur(i,t,"Ominaisuudet")}"></textarea>
                    <span class="options">
                        <img src="/icons/trash.png" class="img" @click="${()=>this.deleteWeapon(e.Nimi)}">
                    </span>
                </div>
                `)}
                </div>  
            <div class="addWpnRow">
                <select class="weaponsDropDown" id="weapons">
                    <option value="default" disabled selected>Lisää ase</option>
                    ${this.weapons.map(e=>c`<option class="dropdownOption" value="${e.Nimi}">${e.Nimi}</option>`)}
                </select>
                <button type="button" @click="${this.handleAddWeapon}" class="addBtn">+</button>
            </div>
            <div>
                <p class="actionTitles">TOIMINNOT TAISTELUSSA</p>
                <p class="desc">Hyökkäys, Loitsiminen, Ryntäys, Irtaudu, Väistä, Auta, Piiloudu, Valmistaudu, Etsi, Käytä esinettä</p>
                <p class="actionTitles">REAKTIO</p>
                <p class="desc">Hahmolla on reaktiona yksi vapaahyökkäys per kierros</p>
            </div>
        `}}customElements.define("weapons-element",Oi);class Pi extends m{static styles=v`
    .wrapper{
        display: flex;
        flex-direction: column;
        font-family: "Roboto Condensed", sans-serif;
        margin-bottom: 10px;
    }
    .label{
        margin: 10px;
    }
    .title{
        margin: 10px;
        margin-bottom: 0px;
        font-weight: bold;
    }
    .secondaryTitle{
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 5px;
    }
    .field{
        margin-left: 5px;
        flex-grow: 1;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 17px;
        border: none;
        background: none;
        align-items: center;
        justify-content: center;
        resize: none;
        min-width: 10px;
        box-sizing: border-box;
        width: 75%;
        border-bottom: solid 1px;
        line-height: 20px;
        padding-left: 5px;
    }
    .addBtn{
        border: none;
        border-radius: 20px;
        padding: 0;
        margin: 0;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        padding-bottom: 4px;
        padding-left: 1px;
        margin: 5px;
        margin-left: 10px;
    }
    .traitFormWrapper{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: white;
        color: black;
        padding: 0.5rem;
        text-align: left;
        z-index: 9999;
        border-top: solid lightblue 2px;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: left;
        box-sizing: border-box
    }
    .textbox{
        font-family: "Roboto Condensed", sans-serif;
        width: 98%;
        height: auto;
        resize: none;
        margin-right: 10px;
    }
    .nimi{
        max-width: 500px;
        min-width: 100px;
    }
    .formTitle{
        font-weight: bold;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
    .formAddBtn{
        font-family: "Roboto Condensed", sans-serif;
        font-size: 15px;
        font-weight: bold;
        color: black;
        margin-top: 5px;
        border: none;
        border-radius: 5px;
        padding: 5px;
        width: 150px;
    }
    .closeBtn{
        border: none;
        border-radius: 20px;
        padding: 0;
        margin: 0;
        font-size: 15px;
        font-weight:bold;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        padding-bottom: 2px;
        padding-left: 1px;
        display: flex;
        justify-self: end;
    }
    .desc{
        margin-left: 10px;
        border-left: solid lightgray 5px;
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        width: 100%;
    }
    .img{
        height: 20px;
        width: 20px;
        justify-self: end;
        padding-right: 10px;
    }
    .traitRow{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    `;constructor(){super(),this.showAddTrait=!1,this.showAddSpeciality=!1,this.traits=JSON.parse(localStorage.getItem("traits")||"[]"),this.specialities=JSON.parse(localStorage.getItem("specialities")||"[]"),this.generalInfo=JSON.parse(localStorage.getItem("generalInfo")||"{}"),this.background=JSON.parse(localStorage.getItem("background")||"{}"),this.appearance=JSON.parse(localStorage.getItem("appearance")||"{}")}static get properties(){return{showAddTrait:{type:Boolean},showAddSpeciality:{type:Boolean},traits:{type:Array},specialities:{type:Array},generalInfo:{type:Object},background:{type:Object},appearance:{type:Object}}}firstUpdated(){this.resizeAllTextareas(),this.shadowRoot.addEventListener("input",e=>{e.target.tagName==="TEXTAREA"&&this.resizeTextarea(e.target)})}handleShowAddTrait(){this.showAddTrait=!0}handleShowAddSpeciality(){this.showAddSpeciality=!0}closeAddTrait(){this.showAddTrait=!1}closeAddSpeciality(){this.showAddSpeciality=!1}addTrait(){const e=this.renderRoot.querySelector("#traitName")?.value??"",t=this.renderRoot.querySelector("#traitDesc")?.value??"";this.traits=[...this.traits,{traitName:e,traitDesc:t}],localStorage.setItem("traits",JSON.stringify(this.traits)),this.showAddTrait=!1}addSpeciality(){const e=this.renderRoot.querySelector("#specialityName")?.value??"",t=this.renderRoot.querySelector("#specialityDesc")?.value??"";this.specialities=[...this.specialities,{specialityName:e,specialityDesc:t}],localStorage.setItem("specialities",JSON.stringify(this.specialities)),this.showAddSpeciality=!1}deleteTrait(e){const i=[...this.traits].filter(a=>a.traitName!==e);this.traits=i,localStorage.setItem("traits",JSON.stringify(this.traits))}deleteSpeciality(e){const i=[...this.specialities].filter(a=>a.specialityName!==e);this.specialities=i,localStorage.setItem("specialities",JSON.stringify(this.specialities))}resizeAllTextareas(){const e=this.renderRoot.querySelectorAll("textarea");for(const t of e)this.resizeTextarea(t)}resizeTextarea(e){e.style.height="auto";const t=parseInt(window.getComputedStyle(e).lineHeight);e.style.height=t+"px",e.scrollHeight>t&&(e.style.height=e.scrollHeight+"px")}onGeneralInfoBlur(e,t){this.generalInfo={...this.generalInfo,[e]:t},localStorage.setItem("generalInfo",JSON.stringify(this.generalInfo))}onBackgroundBlur(e,t){this.background={...this.background,[e]:t},localStorage.setItem("background",JSON.stringify(this.background))}onAppearanceBlur(e,t){this.appearance={...this.appearance,[e]:t},localStorage.setItem("appearance",JSON.stringify(this.appearance))}render(){return c`
            <section class="wrapper">
                <p class="title">YLEISTIETO</p>
                <label for="name" class="label">Nimi</label>
                <textarea id="name" class="field" spellcheck="false" @blur="${e=>this.onGeneralInfoBlur(e.target.id,e.target.value)}" .value="${this.generalInfo.name||""}"></textarea>
                <label for="alignment" class="label">Vakaumus</label>
                <textarea id="alignment" class="field" spellcheck="false" @blur="${e=>this.onGeneralInfoBlur(e.target.id,e.target.value)}" .value="${this.generalInfo.alignment||""}"></textarea>
                <label for="race" class="label">Laji</label>
                <textarea id="race" class="field" spellcheck="false" @blur="${e=>this.onGeneralInfoBlur(e.target.id,e.target.value)}" .value="${this.generalInfo.race||""}"></textarea>
            </section>
            <section>
                <p class="title">LAJIN PIIRTEET</p>
                <div>
                    ${this.traits.map(e=>c`
                        <p class="secondaryTitle">${e.traitName}</p>
                        <div class="traitRow">
                            <p class="desc">${e.traitDesc}</p>
                            <img src="icons/trash.png" class="img" @click="${()=>this.deleteTrait(e.traitName)}">
                        </div>
                    `)}
                </div>
                <button type="button" @click="${this.handleShowAddTrait}" class="addBtn">+</button>
            </section>
            <section class="wrapper">
                <p class="title">TAUSTA</p>
                <textarea id="tausta" class="field" spellcheck="false" @blur="${e=>this.onBackgroundBlur(e.target.id,e.target.value)}" .value="${this.background.tausta||""}"></textarea>
                <p class="title">ERIKOISUUS</p>
                <div>
                    ${this.specialities.map(e=>c`
                        <p class="secondaryTitle">${e.specialityName}</p>
                        <div class="traitRow">
                            <p class="desc">${e.specialityDesc}</p>
                            <img src="icons/trash.png" class="img" @click="${()=>this.deleteSpeciality(e.specialityName)}">
                        </div>
                    `)}
                </div>
                <button type="button" @click="${this.handleShowAddSpeciality}" class="addBtn">+</button>
                <label for="luonne" class="label">Luonteenpiirre</label>
                <textarea id="luonne" class="field" spellcheck="false" @blur="${e=>this.onBackgroundBlur(e.target.id,e.target.value)}" .value="${this.background.luonne||""}"></textarea>
                <label for="ihanne" class="label">Ihanne</label>
                <textarea id="ihanne" class="field" spellcheck="false" @blur="${e=>this.onBackgroundBlur(e.target.id,e.target.value)}" .value="${this.background.ihanne||""}"></textarea>
                <label for="side" class="label">Side</label>
                <textarea id="side" class="field" spellcheck="false" @blur="${e=>this.onBackgroundBlur(e.target.id,e.target.value)}" .value="${this.background.side||""}"></textarea>
                <label for="heikkous" class="label">Heikkous</label>
                <textarea id="heikkous" class="field" spellcheck="false" @blur="${e=>this.onBackgroundBlur(e.target.id,e.target.value)}" .value="${this.background.heikkous||""}"></textarea>
                <label for="muuta" class="label">Muuta</label>
                <textarea id="muuta" class="field" spellcheck="false" @blur="${e=>this.onBackgroundBlur(e.target.id,e.target.value)}" .value="${this.background.muuta||""}"></textarea>
            </section>
            <section class="wrapper">
                <p class="title">ULKONÄKÖ</p>
                <label for="ikä" class="label">Ikä</label>
                <textarea type="text" id="ikä" class="field" spellcheck="false" @blur="${e=>this.onAppearanceBlur(e.target.id,e.target.value)}" .value="${this.appearance.ikä||""}"></textarea>
                <label for="pituus" class="label">Pituus</label>
                <textarea type="text" id="pituus" class="field" spellcheck="false" @blur="${e=>this.onAppearanceBlur(e.target.id,e.target.value)}" .value="${this.appearance.pituus||""}"></textarea>
                <label for="paino" class="label">Paino</label>
                <textarea type="text" id="paino" class="field" spellcheck="false" @blur="${e=>this.onAppearanceBlur(e.target.id,e.target.value)}" .value="${this.appearance.paino||""}"></textarea>
                <label for="silmät" class="label">Silmät</label>
                <textarea type="text" id="silmät" class="field" spellcheck="false" @blur="${e=>this.onAppearanceBlur(e.target.id,e.target.value)}" .value="${this.appearance.silmät||""}"></textarea>
                <label for="hiukset" class="label">Hiukset</label>
                <textarea type="text" id="hiukset" class="field" spellcheck="false" @blur="${e=>this.onAppearanceBlur(e.target.id,e.target.value)}" .value="${this.appearance.hiukset||""}"></textarea>
                <label for="iho" class="label">Iho</label>
                <textarea type="text" id="iho" class="field" spellcheck="false" @blur="${e=>this.onAppearanceBlur(e.target.id,e.target.value)}" .value="${this.appearance.iho||""}"></textarea>
                <label for="tuntomerkit" class="label">Tuntomerkit</label>
                <textarea type="text" id="tuntomerkit" class="field" spellcheck="false" @blur="${e=>this.onAppearanceBlur(e.target.id,e.target.value)}" .value="${this.appearance.tuntomerkit||""}"></textarea>
                <label for="vaatetus" class="label">Vaatetus</label>
                <textarea type="text" id="vaatetus" class="field" spellcheck="false" @blur="${e=>this.onAppearanceBlur(e.target.id,e.target.value)}" .value="${this.appearance.vaatetus||""}"></textarea>
                <label for="muuta" class="label">Muuta</label>
                <textarea type="text" id="muuta" class="field" spellcheck="false" @blur="${e=>this.onAppearanceBlur(e.target.id,e.target.value)}" .value="${this.appearance.muuta||""}"></textarea>
            </section>
            ${this.showAddTrait?c`
            <div class="traitFormWrapper">
                <div class="formTitle">
                <div>LISÄÄ PIIRRE</div>
                <button class="closeBtn" @click="${this.closeAddTrait}">X</button>
                </div>
                <div>PIIRTEEN NIMI</div>
                <div class="nimi"><textarea class="textbox" id="traitName"></textarea></div>
                <div>PIIRTEEN KUVAUS</div>
                <div class="traitDesc"><textarea class="textbox" id="traitDesc"></textarea></div>
                <button type="button" class="formAddBtn" @click="${this.addTrait}">LISÄÄ</button>
            </div>
            `:""}

            ${this.showAddSpeciality?c`
            <div class="traitFormWrapper">
                <div class="formTitle">
                <div>LISÄÄ ERIKOISUUS</div>
                <button class="closeBtn" @click="${this.closeAddSpeciality}">X</button>
                </div>
                <div>ERIKOISUUDEN NIMI</div>
                <div class="nimi"><textarea class="textbox" id="specialityName"></textarea></div>
                <div>ERIKOISUUDEN KUVAUS</div>
                <div class="traitDesc"><textarea class="textbox" id="specialityDesc"></textarea></div>
                <button type="button" class="formAddBtn" @click="${this.addSpeciality}">LISÄÄ</button>
            </div>
            `:""}
        `}}customElements.define("racenbg-element",Pi);class Ci extends m{static styles=v`
    .statsRow {
      display: flex;
      flex-direction: row;
      align-items: last baseline;
      justify-content: center;
      box-sizing: border-box;
      flex-wrap: wrap;
      gap: 10px;
    }
    .stats {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 5px;
      margin-right: 5px;
      flex: 1 1 150px;
      min-width: 150px;
      box-sizing: border-box;
    }
    .title {
      margin-left: 5px;
      margin-right: 5px;
      margin-bottom: 5px;
      margin-top: 10px;
      text-align: center;
      font-size: 17px;
    }
    .statTextarea {
      font-family: "Roboto Condensed", sans-serif;
      width: 100%;
      resize: none;
      border-radius: 5px;
      border: solid 2px lightblue;
      text-align: center;
      font-weight: bold;
      box-sizing: border-box;
      line-height: 25px;
      font-size: 20px;
      margin: 0px;
    }
    .spellSlotRow {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      flex-wrap: wrap;
      border: solid 2px lightblue;
      border-radius: 5px;
      margin: 5px;
    }
    .slot {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border: solid 1px lightgray;
      padding: 2.5px;
    }
    .slotButton {
      width: 30px;
      margin: 1px;
      margin-left: 10px;
      border: none;
    }
    .buttonWrapper {
      display: flex;
      flex-direction: column;
    }
    .slotTitle {
      font-weight: bold;
      font-size: 20px;
    }
    .slotWrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 5px;
    }
    .addSpellRow{
        display: flex;
        flex-direction: row;
        margin: 5px;
    }
    .selectedSpellsWrapper{
      border-bottom: solid 1px lightgray;
    }
    .spellsDropDown{
        font-family: "Roboto Condensed", sans-serif;
        font-size: 15px;
        border: none;
        border-radius: 10px;
        padding: 10px;
    }
    .dropdownOption{
        color: black;
    }
    .addBtn{
        border: none;
        border-radius: 20px;
        padding: 0;
        margin: 0;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        padding-bottom: 4px;
        padding-left: 1px;
        margin: 5px;
    }
    .spellRow{
      display: flex;
      align-items: center;
      padding: 10px;
    }
    .spellTitle{
      width: 150px;
    }
    .spellRow.even {
      background-color: lightgray;
    }
    .spellRow.odd {
      background-color: white;
    }
    .toggleprepared {
      width: 12px;
      height: 12px;
      border: 1px dotted black;
      border-radius: 15px;
      margin-left: 15px;
      margin-right: 15px;
      cursor: pointer;
    }
    .toggleprepared:hover {
      background-color: gray;
    }
    .toggleprepared.toggled {
      background-color: black;
    }
    .options{
      display: flex;
      flex-direction: row;
      margin-left: auto;
    }
    .img{
        height: 20px;
        width: 20px;
        display: flex;
        padding-left: 10px;
    }
    .subTitle{
      display: flex;
      flex-direction: row;
      padding: 5px;
      padding-left: 55px;
    }
    .boldText{
      font-weight: bold;
      padding-right: 5px;
    }
    .spellDesc{
      padding-left: 55px;
      padding-bottom: 5px;
    }
  `;static get properties(){return{castingStats:{type:Object},spellSlots:{type:Object},spells:{type:Object},addedCantrips:{type:Array},addedlvl1Spells:{type:Array},addedlvl2Spells:{type:Array},addedlvl3Spells:{type:Array},addedlvl4Spells:{type:Array},addedlvl5Spells:{type:Array},addedlvl6Spells:{type:Array},addedlvl7Spells:{type:Array},addedlvl8Spells:{type:Array},addedlvl9Spells:{type:Array},openSpellDetails:{state:!0}}}constructor(){super(),this.spells=[],this.castingStats=JSON.parse(localStorage.getItem("castingStats")||"{}"),this.addedCantrips=JSON.parse(localStorage.getItem("addedCantrips")||"[]"),this.addedlvl1Spells=JSON.parse(localStorage.getItem("addedlvl1Spells")||"[]"),this.addedlvl2Spells=JSON.parse(localStorage.getItem("addedlvl2Spells")||"[]"),this.addedlvl3Spells=JSON.parse(localStorage.getItem("addedlvl3Spells")||"[]"),this.addedlvl4Spells=JSON.parse(localStorage.getItem("addedlvl4Spells")||"[]"),this.addedlvl5Spells=JSON.parse(localStorage.getItem("addedlvl5Spells")||"[]"),this.addedlvl6Spells=JSON.parse(localStorage.getItem("addedlvl6Spells")||"[]"),this.addedlvl7Spells=JSON.parse(localStorage.getItem("addedlvl7Spells")||"[]"),this.addedlvl8Spells=JSON.parse(localStorage.getItem("addedlvl8Spells")||"[]"),this.addedlvl9Spells=JSON.parse(localStorage.getItem("addedlvl9Spells")||"[]"),this.openSpellDetails=new Set;const e=JSON.parse(localStorage.getItem("spellSlots")||"{}");this.spellSlots=e&&Object.keys(e).length===9?e:{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}}async connectedCallback(){super.connectedCallback(),await this.loadCSV()}async loadCSV(){const t=await(await fetch("data#/spells.csv")).text(),i=Papa.parse(t,{header:!0,skipEmptyLines:!0});this.spells=i.data,this.spells.sort((a,n)=>a.nimi.localeCompare(n.nimi,"fi",{sensitivity:"base"})),console.log(this.spells)}onSpellStatBlur(e,t){this.castingStats={...this.castingStats,[e]:t},localStorage.setItem("castingStats",JSON.stringify(this.castingStats))}incrementSpellSlot(e){this.spellSlots={...this.spellSlots,[e]:(typeof this.spellSlots[e]=="number"?this.spellSlots[e]:1)+1},localStorage.setItem("spellSlots",JSON.stringify(this.spellSlots))}decrementSpellSlot(e){this.spellSlots={...this.spellSlots,[e]:Math.max(0,(typeof this.spellSlots[e]=="number"?this.spellSlots[e]:1)-1)},localStorage.setItem("spellSlots",JSON.stringify(this.spellSlots))}addSpell(){const t=this.shadowRoot.getElementById("spells").value;if(t==="default")return;const i=this.spells.find(a=>a.nimi===t);i&&i.loitsunPiiri=="Taikakonsti"&&(this.addedCantrips=[...this.addedCantrips,i],localStorage.setItem("addedCantrips",JSON.stringify(this.addedCantrips))),i&&i.loitsunPiiri=="1-piirin"&&(this.addedlvl1Spells=[...this.addedlvl1Spells,i],localStorage.setItem("addedlvl1Spells",JSON.stringify(this.addedlvl1Spells))),i&&i.loitsunPiiri=="2-piirin"&&(this.addedlvl2Spells=[...this.addedlvl2Spells,i],localStorage.setItem("addedlvl2Spells",JSON.stringify(this.addedlvl2Spells))),i&&i.loitsunPiiri=="3-piirin"&&(this.addedlvl3Spells=[...this.addedlvl3Spells,i],localStorage.setItem("addedlvl3Spells",JSON.stringify(this.addedlvl3Spells))),i&&i.loitsunPiiri=="4-piirin"&&(this.addedlvl4Spells=[...this.addedlvl4Spells,i],localStorage.setItem("addedlvl4Spells",JSON.stringify(this.addedlvl4Spells))),i&&i.loitsunPiiri=="5-piirin"&&(this.addedlvl5Spells=[...this.addedlvl5Spells,i],localStorage.setItem("addedlvl5Spells",JSON.stringify(this.addedlvl5Spells))),i&&i.loitsunPiiri=="6-piirin"&&(this.addedlvl6Spells=[...this.addedlvl6Spells,i],localStorage.setItem("addedlvl6Spells",JSON.stringify(this.addedlvl6Spells))),i&&i.loitsunPiiri=="7-piirin"&&(this.addedlvl7Spells=[...this.addedlvl7Spells,i],localStorage.setItem("addedlvl7Spells",JSON.stringify(this.addedlvl7Spells))),i&&i.loitsunPiiri=="8-piirin"&&(this.addedlvl8Spells=[...this.addedlvl8Spells,i],localStorage.setItem("addedlvl8Spells",JSON.stringify(this.addedlvl8Spells))),i&&i.loitsunPiiri=="9-piirin"&&(this.addedlvl9Spells=[...this.addedlvl9Spells,i],localStorage.setItem("addedlvl9Spells",JSON.stringify(this.addedlvl9Spells)))}toggleSpellDetail(e){const t=new Set(this.openSpellDetails);t.has(e)?t.delete(e):t.add(e),this.openSpellDetails=t}deleteSpell(e){const t=[{arr:"addedCantrips",key:"addedCantrips"},{arr:"addedlvl1Spells",key:"addedlvl1Spells"},{arr:"addedlvl2Spells",key:"addedlvl2Spells"},{arr:"addedlvl3Spells",key:"addedlvl3Spells"},{arr:"addedlvl4Spells",key:"addedlvl4Spells"},{arr:"addedlvl5Spells",key:"addedlvl5Spells"},{arr:"addedlvl6Spells",key:"addedlvl6Spells"},{arr:"addedlvl7Spells",key:"addedlvl7Spells"},{arr:"addedlvl8Spells",key:"addedlvl8Spells"},{arr:"addedlvl9Spells",key:"addedlvl9Spells"}];for(let{arr:i,key:a}of t)if(this[i].some(n=>n.nimi===e)){this[i]=this[i].filter(n=>n.nimi!==e),localStorage.setItem(a,JSON.stringify(this[i])),this.selectedSpellName===e&&(this.selectedSpellName=null);break}}render(){return c`
      <div class="wrapper">
        <div class="statsRow">
          <div class="stats">
            <span class="title">LOITSIMISOMINAISUUS</span>
            <textarea
              id="loitsimisominaisuus"
              class="statTextarea"
              rows="1"
              spellcheck="false"
              @blur="${e=>this.onSpellStatBlur(e.target.id,e.target.value)}"
              .value="${this.castingStats.loitsimisominaisuus||""}"
            ></textarea>
          </div>
          <div class="stats">
            <span class="title">LOITSUN PELASTUSHEITON VA</span>
            <textarea
              id="VA"
              class="statTextarea"
              rows="1"
              @blur="${e=>this.onSpellStatBlur(e.target.id,e.target.value)}"
              .value="${this.castingStats.VA||""}"
            ></textarea>
          </div>
          <div class="stats">
            <span class="title">LOUTSUN HYÖKKÄYSMUUTTUJA</span>
            <textarea
              id="hyökkäysmuuttuja"
              class="statTextarea"
              rows="1"
              @blur="${e=>this.onSpellStatBlur(e.target.id,e.target.value)}"
              .value="${this.castingStats.hyökkäysmuuttuja||""}"
            ></textarea>
          </div>
        </div>

        <div class="spellSlotRow">
          ${[1,2,3,4,5,6,7,8,9].map(e=>c`
            <div class="slotWrapper">
              <section class="slotTitle">${e}</section>
              <div class="slot" id="${e}">
                <span class="slotCounter">${this.spellSlots[e]}</span>
                <span class="buttonWrapper">
                  <button class="slotButton" @click="${()=>this.incrementSpellSlot(e)}">+</button>
                  <button class="slotButton" @click="${()=>this.decrementSpellSlot(e)}">-</button>
                </span>
              </div>
            </div>
          `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">TAIKAKONSTIT</div>
            ${this.addedCantrips.map((e,t)=>c`
              <div class="spellRow ${t%2===0?"even":"odd"}">
                <div
                  class="toggleprepared ${this.toggleprepared?"toggled":""}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${e.nimi}</span>
                <div class="options">
                  <img
                    src="/icons/down-arrow.png"
                    class="img"
                    @click="${()=>this.toggleSpellDetail(e.nimi)}"
                    title="Show Details"
                  >
                  <img src="/icons/trash.png" class="img" title="Delete" @click="${()=>this.deleteSpell(e.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(e.nimi)?c`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${e.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${e.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${e.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${e.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${e.kesto}
                  </div>
                  <div class="spellDesc">
                    ${e.kuvaus}
                  </div>
                </div>`:""}
            `)}
        </div>
        
        <div class="selectedSpellsWrapper">
          <div class="title">1. PIIRIN LOITSUT</div>
            ${this.addedlvl1Spells.map((e,t)=>c`
              <div class="spellRow ${t%2===0?"even":"odd"}">
                <div
                  class="toggleprepared ${this.toggleprepared?"toggled":""}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${e.nimi}</span>
                <div class="options">
                  <img
                    src="/icons/down-arrow.png"
                    class="img"
                    @click="${()=>this.toggleSpellDetail(e.nimi)}"
                    title="Show Details"
                  >
                  <img src="/icons/trash.png" class="img" title="Delete" @click="${()=>this.deleteSpell(e.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(e.nimi)?c`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${e.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${e.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${e.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${e.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${e.kesto}
                  </div>
                  <div class="spellDesc">
                    ${e.kuvaus}
                  </div>
                </div>`:""}
            `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">2. PIIRIN LOITSUT</div>
            ${this.addedlvl2Spells.map((e,t)=>c`
              <div class="spellRow ${t%2===0?"even":"odd"}">
                <div
                  class="toggleprepared ${this.toggleprepared?"toggled":""}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${e.nimi}</span>
                <div class="options">
                  <img
                    src="/icons/down-arrow.png"
                    class="img"
                    @click="${()=>this.toggleSpellDetail(e.nimi)}"
                    title="Show Details"
                  >
                  <img src="/icons/trash.png" class="img" title="Delete" @click="${()=>this.deleteSpell(e.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(e.nimi)?c`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${e.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${e.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${e.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${e.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${e.kesto}
                  </div>
                  <div class="spellDesc">
                    ${e.kuvaus}
                  </div>
                </div>`:""}
            `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">3. PIIRIN LOITSUT</div>
            ${this.addedlvl3Spells.map((e,t)=>c`
              <div class="spellRow ${t%2===0?"even":"odd"}">
                <div
                  class="toggleprepared ${this.toggleprepared?"toggled":""}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${e.nimi}</span>
                <div class="options">
                  <img
                    src="/icons/down-arrow.png"
                    class="img"
                    @click="${()=>this.toggleSpellDetail(e.nimi)}"
                    title="Show Details"
                  >
                  <img src="/icons/trash.png" class="img" title="Delete" @click="${()=>this.deleteSpell(e.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(e.nimi)?c`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${e.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${e.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${e.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${e.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${e.kesto}
                  </div>
                  <div class="spellDesc">
                    ${e.kuvaus}
                  </div>
                </div>`:""}
            `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">4. PIIRIN LOITSUT</div>
            ${this.addedlvl4Spells.map((e,t)=>c`
              <div class="spellRow ${t%2===0?"even":"odd"}">
                <div
                  class="toggleprepared ${this.toggleprepared?"toggled":""}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${e.nimi}</span>
                <div class="options">
                  <img
                    src="icons/down-arrow.png"
                    class="img"
                    @click="${()=>this.toggleSpellDetail(e.nimi)}"
                    title="Show Details"
                  >
                  <img src="icons/trash.png" class="img" title="Delete" @click="${()=>this.deleteSpell(e.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(e.nimi)?c`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${e.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${e.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${e.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${e.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${e.kesto}
                  </div>
                  <div class="spellDesc">
                    ${e.kuvaus}
                  </div>
                </div>`:""}
            `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">5. PIIRIN LOITSUT</div>
            ${this.addedlvl5Spells.map((e,t)=>c`
              <div class="spellRow ${t%2===0?"even":"odd"}">
                <div
                  class="toggleprepared ${this.toggleprepared?"toggled":""}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${e.nimi}</span>
                <div class="options">
                  <img
                    src="icons/down-arrow.png"
                    class="img"
                    @click="${()=>this.toggleSpellDetail(e.nimi)}"
                    title="Show Details"
                  >
                  <img src="icons/trash.png" class="img" title="Delete" @click="${()=>this.deleteSpell(e.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(e.nimi)?c`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${e.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${e.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${e.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${e.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${e.kesto}
                  </div>
                  <div class="spellDesc">
                    ${e.kuvaus}
                  </div>
                </div>`:""}
            `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">6. PIIRIN LOITSUT</div>
            ${this.addedlvl6Spells.map((e,t)=>c`
              <div class="spellRow ${t%2===0?"even":"odd"}">
                <div
                  class="toggleprepared ${this.toggleprepared?"toggled":""}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${e.nimi}</span>
                <div class="options">
                  <img
                    src="icons/down-arrow.png"
                    class="img"
                    @click="${()=>this.toggleSpellDetail(e.nimi)}"
                    title="Show Details"
                  >
                  <img src="icons/trash.png" class="img" title="Delete" @click="${()=>this.deleteSpell(e.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(e.nimi)?c`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${e.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${e.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${e.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${e.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${e.kesto}
                  </div>
                  <div class="spellDesc">
                    ${e.kuvaus}
                  </div>
                </div>`:""}
            `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">7. PIIRIN LOITSUT</div>
            ${this.addedlvl7Spells.map((e,t)=>c`
              <div class="spellRow ${t%2===0?"even":"odd"}">
                <div
                  class="toggleprepared ${this.toggleprepared?"toggled":""}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${e.nimi}</span>
                <div class="options">
                  <img
                    src="icons/down-arrow.png"
                    class="img"
                    @click="${()=>this.toggleSpellDetail(e.nimi)}"
                    title="Show Details"
                  >
                  <img src="icons/trash.png" class="img" title="Delete" @click="${()=>this.deleteSpell(e.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(e.nimi)?c`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${e.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${e.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${e.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${e.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${e.kesto}
                  </div>
                  <div class="spellDesc">
                    ${e.kuvaus}
                  </div>
                </div>`:""}
            `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">8. PIIRIN LOITSUT</div>
            ${this.addedlvl8Spells.map((e,t)=>c`
              <div class="spellRow ${t%2===0?"even":"odd"}">
                <div
                  class="toggleprepared ${this.toggleprepared?"toggled":""}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${e.nimi}</span>
                <div class="options">
                  <img
                    src="icons/down-arrow.png"
                    class="img"
                    @click="${()=>this.toggleSpellDetail(e.nimi)}"
                    title="Show Details"
                  >
                  <img src="icons/trash.png" class="img" title="Delete" @click="${()=>this.deleteSpell(e.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(e.nimi)?c`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${e.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${e.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${e.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${e.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${e.kesto}
                  </div>
                  <div class="spellDesc">
                    ${e.kuvaus}
                  </div>
                </div>`:""}
            `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">9. PIIRIN LOITSUT</div>
            ${this.addedlvl9Spells.map((e,t)=>c`
              <div class="spellRow ${t%2===0?"even":"odd"}">
                <div
                  class="toggleprepared ${this.toggleprepared?"toggled":""}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${e.nimi}</span>
                <div class="options">
                  <img
                    src="icons/down-arrow.png"
                    class="img"
                    @click="${()=>this.toggleSpellDetail(e.nimi)}"
                    title="Show Details"
                  >
                  <img src="icons/trash.png" class="img" title="Delete" @click="${()=>this.deleteSpell(e.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(e.nimi)?c`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${e.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${e.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${e.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${e.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${e.kesto}
                  </div>
                  <div class="spellDesc">
                    ${e.kuvaus}
                  </div>
                </div>`:""}
            `)}
        </div>

        <div class="addSpellRow">
          <select class="spellsDropDown" id="spells">
            <option value="default" disabled selected>Lisää loitsu</option>
            ${this.spells.map(e=>c`<option class="dropdownOption" value="${e.nimi}">${e.nimi}</option>`)}
          </select>
          <button type="button" class="addBtn" @click="${this.addSpell}">+</button>
        </div>
      </div>
    `}}customElements.define("casting-element",Ci);class Li extends m{static styles=v`
    .wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }
    .right{
        display: flex;
        flex-direction: row;
        margin-left: auto;
        align-items: center;
        box-sizing: border-box;
    }
    .name{
        padding-left: 5px;
        box-sizing: border-box;
    }
    .value{
        padding-right: 5px;
        width: 40px;
        text-align: right;
        box-sizing: border-box;
    }
    .weight{
        padding-right: 5px;
        width: 40px;
        text-align: right;
        box-sizing: border-box;
    }
    .weaponRow {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 10px;
        height: auto;
        gap: 10px;
        background-color: lightgray;
        width: 100%;
        box-sizing: border-box;
    }
    .weaponRow.even {
        background-color: lightgray;
    }

    .weaponRow.odd {
        background-color: white;
    }
    .buttonWrapper{
        display:flex;
        flex-direction: column;
        box-sizing: border-box;
    }
    .hbButton{
        width: 30px;
        margin: 1px;
        margin-left: 10px;
        margin-right: 5px;
        border:none;
        box-sizing: border-box;
    }
    .hbWrapper{
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        box-sizing: border-box;
    }
    .hb{
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px gray;
        border-radius: 5px;
        width: 40px;
        height: 30px;
        margin-left: 10px;
        box-sizing: border-box;
    }
    .options{
        display: flex;
        flex-direction: row;
        margin-left: auto;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }
    .img{
        height: 20px;
        width: 20px;
        display: flex;
        padding-left: 5px;
        padding-right: 5px;
    }
    .addBtn{
        border: none;
        border-radius: 20px;
        padding: 0;
        margin: 0;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        padding-bottom: 4px;
        padding-left: 1px;
        margin: 5px;
        margin-left: 10px;
        box-sizing: border-box;
    }
    .addItemWrapper{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        padding-left: 5px;
        box-sizing: border-box;
    }
    .title{
        margin-left: 10px;
    }
    .itemFormWrapper{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: white;
        color: black;
        padding: 0.5rem;
        text-align: left;
        z-index: 9999;
        border-top: solid lightblue 2px;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: left;
        box-sizing: border-box
    }
    .formTitle{
        font-weight: bold;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
    .closeBtn{
        border: none;
        border-radius: 20px;
        padding: 0;
        margin: 0;
        font-size: 15px;
        font-weight:bold;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        padding-bottom: 2px;
        padding-left: 1px;
        display: flex;
        justify-self: end;
    }
    .nimi{
        max-width: 500px;
        min-width: 100px;
    }
    .textbox{
        font-family: "Roboto Condensed", sans-serif;
        width: 98%;
        height: auto;
        resize: none;
        margin-right: 10px;
    }
    .formAddBtn{
        font-family: "Roboto Condensed", sans-serif;
        font-size: 15px;
        font-weight: bold;
        color: black;
        margin-top: 5px;
        border: none;
        border-radius: 5px;
        padding: 5px;
        width: 150px;
    }
    .itemWeight{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .weightBox {
        width: 100px;
        height: 30px;
        border-radius: 5px;
        border: solid 1px gray;
        text-align: center;
        padding: 0;
        line-height: 30px;     
        box-sizing: border-box;
        overflow: hidden;
    }
    .fieldBox {
        font-family: "Roboto Condensed", sans-serif;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px gray;
        border-radius: 5px;
        width: 60px;
        height: 30px;
        margin-left: 10px;
        box-sizing: border-box;
        background: none;
        text-align: center;
    }
    .itemDescWrapper{
        width:100%;
    }
    .itemDetails{
        margin-left: auto;
        padding-left: 20px;
    }
    `;staticProperties={};static get properties(){return{addedWeapons:{type:Array},showAddItem:{type:Boolean},addedItems:{type:Array},openItemDetails:{state:!0}}}constructor(){super(),this.showAddItem=!1,this.addedWeapons=JSON.parse(localStorage.getItem("weapons")||"[]"),this.addedItems=JSON.parse(localStorage.getItem("addedItems")||"[]"),this.openItemDetails=new Set}incrementCount(e){const t=[...this.addedWeapons];t[e].count=(t[e].count??0)+1,this.addedWeapons=t,localStorage.setItem("weapons",JSON.stringify(this.addedWeapons))}decrementCount(e){const t=[...this.addedWeapons];t[e].count=(t[e].count??1)-1,this.addedWeapons=t,localStorage.setItem("weapons",JSON.stringify(this.addedWeapons))}handleShowAddItem(){this.showAddItem=!0}closeAddItem(){this.showAddItem=!1}addItem(){const e=this.shadowRoot.getElementById("itemName").value.trim(),t=this.shadowRoot.getElementById("itemDesc").value.trim(),i=this.shadowRoot.getElementById("itemWeight").value.trim(),a=this.shadowRoot.getElementById("itemValue").value.trim();if(!e)return;const n={Nimi:e,Kuvaus:t,Paino:i,Hinta:a,count:1},o=[...this.addedItems||[],n];this.addedItems=o,localStorage.setItem("addedItems",JSON.stringify(this.addedItems)),this.showAddItem=!1}updateWeaponField(e,t,i){const a=[...this.addedWeapons];a[e][t]=i,this.addedWeapons=a,localStorage.setItem("weapons",JSON.stringify(this.addedWeapons))}deleteWeapon(e){console.log(e);const i=[...this.addedWeapons].filter(a=>a.Nimi!==e);this.addedWeapons=i,localStorage.setItem("weapons",JSON.stringify(this.addedWeapons))}updateItemField(e,t,i){const a=[...this.addedItems];a[e][t]=i,this.addedItems=a,localStorage.setItem("addedItems",JSON.stringify(this.addedItems))}incrementItemCount(e){const t=[...this.addedItems];t[e].count=(t[e].count??0)+1,this.addedItems=t,localStorage.setItem("addedItems",JSON.stringify(this.addedItems))}decrementItemCount(e){const t=[...this.addedItems];t[e].count=(t[e].count??1)-1,this.addedItems=t,localStorage.setItem("addedItems",JSON.stringify(this.addedItems))}deleteItem(e){const t=[...this.addedItems];t.splice(e,1),this.addedItems=t,localStorage.setItem("addedItems",JSON.stringify(this.addedItems))}toggleItemDetail(e){const t=new Set(this.openItemDetails);t.has(e)?t.delete(e):t.add(e),this.openItemDetails=t}render(){const t=this.addedWeapons.length%2===0?0:1;return c`
            <div class="wrapper">
                <p>VARUSTELUETTELO</p>
                ${this.addedWeapons.map((i,a)=>c`
                    <div class="weaponRow ${a%2===0?"even":"odd"}">
                    <p class="name">${i.Nimi}</p>
                    <span class="right">
                        <input 
                        class="fieldBox"
                        type="text"
                        .value=${i.Hinta??""}
                        @input=${n=>this.updateWeaponField(a,"Hinta",n.target.value)}
                        >
                        <input 
                        class="fieldBox"
                        type="text"
                        .value=${i.Paino??""}
                        @input=${n=>this.updateWeaponField(a,"Paino",n.target.value)}
                        >

                        <span class="hbWrapper">
                        <span class="hb">${i.count??1}</span>
                        <span class="buttonWrapper">
                            <button class="hbButton" @click="${()=>this.incrementCount(a)}">+</button>
                            <button class="hbButton" @click="${()=>this.decrementCount(a)}">-</button>
                        </span>
                        </span>

                        <div class="options">
                        <img src="icons/trash.png" class="img" title="Delete" @click="${()=>this.deleteWeapon(i.Nimi)}">
                        </div>
                    </span>
                    </div>
                `)}
                ${this.addedItems.map((i,a)=>c`
                    <div class="weaponRow ${(a+t)%2===0?"even":"odd"}">
                        <img src="icons/down-arrow.png" class="img" title="Details" @click="${()=>this.toggleItemDetail(i.Nimi)}">
                        <p class="name">${i.Nimi}</p>
                        <span class="right">
                        <input 
                            class="fieldBox"
                            type="text"
                            .value=${i.Hinta??""}
                            @input=${n=>this.updateItemField(a,"Hinta",n.target.value)}
                        >
                        <input 
                            class="fieldBox"
                            type="text"
                            .value=${i.Paino??""}
                            @input=${n=>this.updateItemField(a,"Paino",n.target.value)}
                        >

                        <span class="hbWrapper">
                            <span class="hb">${i.count??1}</span>
                            <span class="buttonWrapper">
                            <button class="hbButton" @click="${()=>this.incrementItemCount(a)}">+</button>
                            <button class="hbButton" @click="${()=>this.decrementItemCount(a)}">-</button>
                            </span>
                        </span>

                        <div class="options">
                            <img src="icons/trash.png" class="img" title="Delete" @click="${()=>this.deleteItem(a)}">
                        </div>
                        </span>
                    </div>
                    ${this.openItemDetails.has(i.Nimi)?c`
                            <div class="itemDescWrapper">
                                <p class="itemDetails">${i.Kuvaus}</p>
                            </div>
                            `:""}
                    `)}

                    <div class="addItemWrapper">
                        <p class="title">LISÄÄ ESINE</p>
                        <button type="button" @click="${this.handleShowAddItem}" class="addBtn">+</button>
                    </div>
                    </div>
                        ${this.showAddItem?c`
                            <div class="itemFormWrapper">
                                <div class="formTitle">
                                <div>LISÄÄ ESINE</div>
                                <button class="closeBtn" @click="${this.closeAddItem}">X</button>
                                </div>
                                <div>ESINEEN NIMI</div>
                                <span>
                                    <div class="nimi"><textarea class="textbox" id="itemName"></textarea></div>
                                </span>
                                <div>ESINEEN KUVAUS</div>
                                <div class="itemDesc"><textarea class="textbox" id="itemDesc"></textarea></div>
                                <div>ESINEEN PAINO</div>
                                <div class="itemWeight"><textarea class="textbox weightBox" id="itemWeight"></textarea></div>
                                <div>ESINEEN ARVO</div>
                                <div class="itemValue"><textarea class="textbox weightBox" id="itemValue"></textarea></div>
                                <button type="button" class="formAddBtn" @click="${this.addItem}">LISÄÄ</button>
                            </div>
            `:""}
        `}}customElements.define("inventory-element",Li);class Di extends m{static styles=v`
        .wrapper{
            display: flex;
            flex-direction: column;
            font-family: "Roboto Condensed", sans-serif;
            margin-bottom: 10px;
        }
        .title{
            margin: 10px;
            margin-bottom: 0px;
            font-weight: bold;
        }
        .field{
            margin-left: 5px;
            flex-grow: 1;
            font-family: "Roboto Condensed", sans-serif;
            font-size: 17px;
            border: none;
            background: none;
            align-items: center;
            justify-content: center;
            resize: none;
            min-width: 10px;
            box-sizing: border-box;
            width: 75%;
            border-bottom: solid 1px;
            line-height: 20px;
            padding-left: 5px;
            overflow: hidden;
        }
        .statsRow {
            display: flex;
            flex-direction: row;
            align-items: last baseline;
            justify-content: center;
            box-sizing: border-box;
            flex-wrap: wrap;
            gap: 10px;
        }
        .stats {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 5px;
            margin-right: 5px;
            flex: 1 1 150px;
            min-width: 150px;
            box-sizing: border-box;
        }
        .statTextarea {
            font-family: "Roboto Condensed", sans-serif;
            width: 100%;
            resize: none;
            border-radius: 5px;
            border: solid 2px lightblue;
            text-align: center;
            font-weight: bold;
            box-sizing: border-box;
            line-height: 25px;
            font-size: 20px;
            margin: 0px;
            overflow: hidden;
        }
        .label{
            margin: 10px;
        }
        .xptitle {
            margin-left: 5px;
            margin-right: 5px;
            margin-bottom: 5px;
            margin-top: 10px;
            text-align: center;
            font-size: 17px;
        }
        .formTitle{
            font-weight: bold;
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
        }
        .formAddBtn{
            font-family: "Roboto Condensed", sans-serif;
            font-size: 15px;
            font-weight: bold;
            color: black;
            margin-top: 5px;
            border: none;
            border-radius: 5px;
            padding: 5px;
            width: 150px;
        }
        .closeBtn{
            border: none;
            border-radius: 20px;
            padding: 0;
            margin: 0;
            font-size: 15px;
            font-weight:bold;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25px;
            height: 25px;
            vertical-align: middle;
            padding-bottom: 2px;
            padding-left: 1px;
            display: flex;
            justify-self: end;
        }
        .desc{
            margin-left: 10px;
            border-left: solid lightgray 5px;
            padding: 5px;
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            width: 100%;
        }
        .img{
            height: 20px;
            width: 20px;
            justify-self: end;
            padding-right: 10px;
        }
        .traitRow{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .addBtn{
            border: none;
            border-radius: 20px;
            padding: 0;
            margin: 0;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25px;
            height: 25px;
            vertical-align: middle;
            padding-bottom: 4px;
            padding-left: 1px;
            margin: 5px;
            margin-left: 10px;
        }
        .traitFormWrapper{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: white;
            color: black;
            padding: 0.5rem;
            text-align: left;
            z-index: 9999;
            border-top: solid lightblue 2px;
            display: flex;
            flex-direction: column;
            align-items: left;
            justify-content: left;
            box-sizing: border-box
        }
        .textbox{
            font-family: "Roboto Condensed", sans-serif;
            width: 98%;
            height: auto;
            resize: none;
            margin-right: 10px;
        }
        .nimi{
            max-width: 500px;
            min-width: 100px;
        }
        .secondaryTitle{
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 5px;
        }
    `;constructor(){super(),this.showAddTrait=!1,this.classTraits=JSON.parse(localStorage.getItem("classTraits")||"[]"),this.perks=JSON.parse(localStorage.getItem("perks")||"[]"),this.experience=JSON.parse(localStorage.getItem("experience")||"[]"),this.class=JSON.parse(localStorage.getItem("class")||"[]"),this.showAddTrait=!1,this.showAddPerk=!1}static get properties(){return{classTraits:{type:Array},perks:{type:Array},showAddTrait:{type:Boolean},showAddPerk:{type:Boolean},experience:{type:Object},class:{type:Object}}}firstUpdated(){this.resizeAllTextareas(),this.shadowRoot.addEventListener("input",e=>{e.target.tagName==="TEXTAREA"&&this.resizeTextarea(e.target)})}handleShowAddTrait(){this.showAddTrait=!0}handleShowAddPerk(){this.showAddPerk=!0}closeAddTrait(){this.showAddTrait=!1}closeAddPerk(){this.showAddPerk=!1}resizeAllTextareas(){const e=this.renderRoot.querySelectorAll("textarea");for(const t of e)this.resizeTextarea(t)}resizeTextarea(e){e.style.height="auto";const t=parseInt(window.getComputedStyle(e).lineHeight);e.style.height=t+"px",e.scrollHeight>t&&(e.style.height=e.scrollHeight+"px")}addTrait(){const e=this.renderRoot.querySelector("#traitName")?.value??"",t=this.renderRoot.querySelector("#traitDesc")?.value??"";this.classTraits=[...this.classTraits,{traitName:e,traitDesc:t}],localStorage.setItem("classTraits",JSON.stringify(this.classTraits)),this.showAddTrait=!1}deleteTrait(e){const i=[...this.classTraits].filter(a=>a.traitName!==e);this.classTraits=i,localStorage.setItem("traits",JSON.stringify(this.classTraits))}addPerk(){const e=this.renderRoot.querySelector("#perkName")?.value??"",t=this.renderRoot.querySelector("#perkDesc")?.value??"";this.perks=[...this.perks,{perkName:e,perkDesc:t}],localStorage.setItem("perks",JSON.stringify(this.perks)),this.showAddPerk=!1}deletePerk(e){const i=[...this.perks].filter(a=>a.perkName!==e);this.perks=i,localStorage.setItem("perks",JSON.stringify(this.perks))}onExperienceBlur(e,t){this.experience={...this.experience,[e]:t},localStorage.setItem("experience",JSON.stringify(this.experience))}onClassBlur(e,t){this.class={...this.class,[e]:t},localStorage.setItem("class",JSON.stringify(this.class))}render(){return c`
            <section class="wrapper">
                <div class="statsRow">
                    <div class="stats">
                        <span class="xptitle">KOKEMUSTASO</span>
                        <textarea
                        id="kokemustaso"
                        class="statTextarea"
                        rows="1"
                        spellcheck="false"
                        @blur="${e=>this.onExperienceBlur(e.target.id,e.target.value)}" .value="${this.experience.kokemustaso||""}"
                        ></textarea>
                    </div>
                    <div class="stats">
                        <span class="xptitle">KOKEMUSPISTEET</span>
                        <textarea
                        id="kokemuspisteet"
                        class="statTextarea"
                        rows="1"
                        @blur="${e=>this.onExperienceBlur(e.target.id,e.target.value)}" .value="${this.experience.kokemuspisteet||""}"
                        ></textarea>
                    </div>
                    <div class="stats">
                        <span class="xptitle">SEURAAVA KOKEMUSTASO</span>
                        <textarea
                        id="seuraavaKokemustaso"
                        class="statTextarea"
                        rows="1"
                        @blur="${e=>this.onExperienceBlur(e.target.id,e.target.value)}" .value="${this.experience.seuraavaKokemustaso||""}"
                        ></textarea>
                    </div>
                </div>
                <p class="title">HAHMOLUOKKA</p>
                <textarea id="class" class="field" spellcheck="false" @blur="${e=>this.onClassBlur(e.target.id,e.target.value)}" .value="${this.class.class||""}"></textarea>
                <p class="title">POLKU</p>
                <textarea id="path" class="field" spellcheck="false" @blur="${e=>this.onClassBlur(e.target.id,e.target.value)}" .value="${this.class.path||""}"></textarea></textarea>
                <section>
                    <p class="title">HAHMOLUOKAN PIIRTEET</p>
                    <div>
                        ${this.classTraits.map(e=>c`
                            <p class="secondaryTitle">${e.traitName}</p>
                            <div class="traitRow">
                                <p class="desc">${e.traitDesc}</p>
                                <img src="icons/trash.png" class="img" @click="${()=>this.deleteTrait(e.traitName)}">
                            </div>
                        `)}
                    </div>
                    <button type="button" @click="${this.handleShowAddTrait}" class="addBtn">+</button>
                </section>
                <section>
                    <p class="title">VALTIT</p>
                    <div>
                        ${this.perks.map(e=>c`
                            <p class="secondaryTitle">${e.perkName}</p>
                            <div class="traitRow">
                                <p class="desc">${e.perkDesc}</p>
                                <img src="icons/trash.png" class="img" @click="${()=>this.deletePerk(e.perkName)}">
                            </div>
                        `)}
                    </div>
                    <button type="button" @click="${this.handleShowAddPerk}" class="addBtn">+</button>
                </section>
            </section>
            ${this.showAddTrait?c`
            <div class="traitFormWrapper">
                <div class="formTitle">
                <div>LISÄÄ PIIRRE</div>
                <button class="closeBtn" @click="${this.closeAddTrait}">X</button>
                </div>
                <div>PIIRTEEN NIMI</div>
                <div class="nimi"><textarea class="textbox" id="traitName"></textarea></div>
                <div>PIIRTEEN KUVAUS</div>
                <div class="traitDesc"><textarea class="textbox" id="traitDesc"></textarea></div>
                <button type="button" class="formAddBtn" @click="${this.addTrait}">LISÄÄ</button>
            </div>
            `:""}
            ${this.showAddPerk?c`
            <div class="traitFormWrapper">
                <div class="formTitle">
                <div>LISÄÄ VALTTI</div>
                <button class="closeBtn" @click="${this.closeAddPerk}">X</button>
                </div>
                <div>VALTIN NIMI</div>
                <div class="nimi"><textarea class="textbox" id="perkName"></textarea></div>
                <div>VALTIN KUVAUS</div>
                <div class="traitDesc"><textarea class="textbox" id="perkDesc"></textarea></div>
                <button type="button" class="formAddBtn" @click="${this.addPerk}">LISÄÄ</button>
            </div>
            `:""}
        `}}customElements.define("character-class",Di);class Ui extends m{static styles=v`
    .notesBox {
      height: 100%;
      margin: 10px;
      border: solid 1px lightgray;
      padding: 5px;
      outline: none;
      min-height: 100px;
    }
    .title {
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 5px;
      font-weight: bold;
      display: block;
    }
  `;constructor(){super(),this._key="notesContent"}firstUpdated(){const e=localStorage.getItem(this._key);e!==null&&(this.shadowRoot.querySelector(".notesBox").innerHTML=e);const t=this.shadowRoot.querySelector(".notesBox");t.addEventListener("blur",()=>{localStorage.setItem(this._key,t.innerHTML)})}render(){return c`
      <span class="title">MUISTIINPANOT</span>
      <div contenteditable="true" class="notesBox"></div>
    `}}customElements.define("notes-element",Ui);class ji extends m{static styles=v`
    .wrapper{
        border: 3px solid lightblue;
        background-color: white;
        font-family: "Roboto Condensed", sans-serif;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 878px;
        max-width: 1075px;
        display: flex;
        flex-direction: column;
        flex: 1 1 100%;
        justify-items: start;
        overflow-y: auto;
    }
    .navigation{
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .navBtn{
        font-family: "Roboto Condensed", sans-serif;
        font-size: 15px;
        font-weight: bold;
        color: black;
        margin: 5px;
        border: none;
        border-radius: 5px;
        padding: 5px;
    }
    `;static properties={currentView:{type:String}};constructor(){super(),this.currentView="aseet"}setView(e){this.currentView=e}render(){return c`
        <div class="wrapper">
            <div class="navigation">
                <button class="navBtn" @click=${()=>this.setView("aseet")}>ASEET</button>
                <button class="navBtn" @click=${()=>this.setView("casting")}>LOITSIMINEN</button>
                <button class="navBtn" @click=${()=>this.setView("inventory")}>VARUSTELUETTELO</button>
                <button class="navBtn" @click=${()=>this.setView("class")}>HAHMOLUOKKA & POLKU</button>
                <button class="navBtn" @click=${()=>this.setView("racenbg")}>HAHMO, LAJI & TAUSTA</button>
                <button class="navBtn" @click=${()=>this.setView("notes")}>MUISTIINPANOT</button>
            </div>
            ${this.renderView()}
        </div>
        `}renderView(){switch(this.currentView){case"aseet":return c`<weapons-element><#/weapons-element>`;case"racenbg":return c`<racenbg-element></racenbg-element>`;case"casting":return c`<casting-element></casting-element>`;case"inventory":return c`<inventory-element></inventory-element>`;case"class":return c`<character-class></character-class>`;case"notes":return c`<notes-element></notes-element>`;default:return c`<weapons-element><#/weapons-element>`}}}customElements.define("character-tabs",ji);class Hi extends m{static styles=v`
.bioBar {
    width: 100%;
    height: 50px;
    background-color: rgb(63, 63, 63);
    padding: 0;
    margin: 0;
}

.attributes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.skills {
    border: 3px solid #add8e6;
    width: 300px;
    background-color: white;
    font-family: "Roboto Condensed", sans-serif;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    flex: 0 0 300px;
    height: 750px;
}

.skillsWrapper{
    margin-top: 20px;
    margin-bottom: 20px;
}

.firstRow {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
}

.skilltitles {
    display: flex;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 14px;
    padding: 0;
    margin: 0;
    height: 38px;
    font-weight: bold;
}

.pate {
    margin-left: 7px;
    margin-right: 6px;
}

.omi {
    margin-right: 25px;
}

.taito {
    margin-right: 107px;
}

.character-name {
    margin: 0;
}

.characterClassLvl {
    margin: 0;
}
.secondRow{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;
}

.proficienciesWrapper {
    border: 3px solid #add8e6;
    width: 280px;
    height: 390px;
    background-color: white;
    display: flex;
    font-family: "Roboto Condensed", sans-serif;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    overflow-y: scroll;
    margin-left: 10px;
}

.saveWrapper {
    border: 3px solid lightblue;
    border-radius: 10px;
    background-color: white;
    font-family: "Roboto Condensed", sans-serif;
    height: 160px;
    padding: 0px;
    margin: 10px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.secondRowThirdClmn{
    flex: 1 1 300px;
    max-width: 1075px;
    min-width: 440px;
    height: 890px;
    box-sizing: border-box;
    margin-top: 20px;
    padding-right: 10px;
}
character-tabs {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  min-width: 0;
}

.saveRow1{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.saveTitle{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
}
.sensesWrapper{
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}
  `;async firstUpdated(){await this.updateComplete,window.dispatchEvent(new CustomEvent("attributes-ready")),document.title="Hahmolomake"}render(){return c`
      <div class="firstRow">
        <character-attribute name="VOIMAKKUUS" value="10" id="VOIM"></character-attribute>
        <character-attribute name="KETTERYYS" value="10" id="KET"></character-attribute>
        <character-attribute name="SITKEYS" value="10" id="SITK"></character-attribute>
        <character-attribute name="ÄLYKKYYS" value="10" id="ÄLY"></character-attribute>
        <character-attribute name="VIISAUS" value="10" id="VIIS"></character-attribute>
        <character-attribute name="KARISMA" value="10" id="KAR"></character-attribute>
        <proficiency-bonus></proficiency-bonus>
        <speed-element></speed-element>
        <heropoint-element></heropoint-element>
        <health-element></health-element>
        <ac-element></ac-element>
    </div>
    <div class="secondRow">
        <div class="skillsWrapper">
        <div class="skills">
            <div class="skilltitles">
                <p class="pate">PÄTE</p>
                <p class="omi">OMIN</p>
                <p class="taito">TAITO</p>
                <p class="bonus">BONUS</p>
            </div>
            <skill-element name="Urheilu" attr="VOIM"></skill-element>
            <skill-element name="Akrobatia" attr="KET"></skill-element>
            <skill-element name="Hiipiminen" attr="KET"></skill-element>
            <skill-element name="Sorminäppäryys" attr="KET"></skill-element>
            <skill-element name="Historia" attr="ÄLY"></skill-element>
            <skill-element name="Luonto" attr="ÄLY"></skill-element>
            <skill-element name="Salatiede" attr="ÄLY"></skill-element>
            <skill-element name="Tutkimus" attr="ÄLY"></skill-element>
            <skill-element name="Uskonto" attr="ÄLY"></skill-element>
            <skill-element name="Eläinten käsittely" attr="VIIS"></skill-element>
            <skill-element name="Lääketiede" attr="VIIS"></skill-element>
            <skill-element name="Oivallus" attr="VIIS"></skill-element>
            <skill-element name="Selviytyminen" attr="VIIS"></skill-element>
            <skill-element name="Tarkkaavaisuus" attr="VIIS"></skill-element>
            <skill-element name="Tarkkaavaisuus" attr="VIIS"></skill-element>
            <skill-element name="Esiintyminen" attr="KAR"></skill-element>
            <skill-element name="Huijaaminen" attr="KAR"></skill-element>
            <skill-element name="Suostuttelu" attr="KAR"></skill-element>
            <skill-element name="Uhkailu" attr="KAR"></skill-element>
        </div>
        </div>
        <div class="secondRowSecondClmn">
            <hitdice-element></hitdice-element>
            <div class="saveWrapper">
                <div class="saveRow1">
                    <div>
                        <savingthrows-element attr="VOIM" defVal=0></savingthrows-element>
                        <savingthrows-element attr="KET" defVal=0></savingthrows-element>
                        <savingthrows-element attr="SITK" defVal=0></savingthrows-element>
                    </div>
                    <div>
                        <savingthrows-element attr="ÄLY" defVal=0></savingthrows-element>
                        <savingthrows-element attr="VIIS" defVal=0></savingthrows-element>
                        <savingthrows-element attr="KAR" defVal=0></savingthrows-element>
                    </div>
                </div>
                <span class="saveTitle">
                    PELASTUSHEITOT
                </span>
            </div>
            <div class="sensesWrapper">
                <senses-element></senses-element>
            </div>
            <div class="proficienciesWrapper">
                <proficiencies-element></proficiencies-element>
            </div>
        </div>
        <div class="secondRowThirdClmn">
            <character-tabs></character-tabs>
        </div>
    </div>
    `}}customElements.define("character-sheet",Hi);class Mi extends m{static styles=v`
        .card{
            display: flex;
            justify-content: start;
            align-items: start;
            color: black;
            font-size: 14px;
            border: 3px solid lightblue;
            margin: 10px;
            padding: 0px;
            border-radius: 10px;
            background-color: white;
            font-family: "Roboto Condensed", sans-serif; 
            width: 250px;
            padding: 10px;
            height: 350px;
        }
        .wrapper{
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            height: 100%;
        }
        .title{
            font-weight: bold;
            border-bottom: solid 1px;
            font-size: 20px;
        }
        .level{
            font-style: italic;
        }
        .title2{
            font-weight: bold;
        }
        .kuvaus {
            flex-grow: 1;   
            overflow-y: auto;
            padding-right: 5px;
            margin-top: 8px; 
        }
    `;static properties={nimi:{type:String},loitsunPiiri:{type:String},loitsunKoulukunta:{type:String},loitsimisviive:{type:String},kantama:{type:String},komponentit:{type:String},kesto:{type:String},kuvaus:{type:String}};render(){return c`
        <div class="card">
            <div class="wrapper">
                <span class="title">${this.nimi}</span>
                <span class="level">
                    <span>${this.loitsunPiiri},</span>
                    <span>${this.loitsunKoulukunta}</span>
                </span>
                <span class="title2">Loitsimisviive: ${this.loitsimisviive}</span>
                <span class="title2">Kantama: ${this.kantama}</span>
                <span class="title2">Komponentit: ${this.komponentit}</span>
                <span class="title2">Kesto: ${this.kesto}</span>
                <span class="kuvaus">${this.kuvaus}</span>
            </div>
        </div>
    `}}customElements.define("spell-card",Mi);class zi extends m{static styles=v`
    .cards{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .searchWrapper{
      display: flex;
      justify-content: center;
      padding: 10px;
    }
    .search{
      width: 300px;
      border-radius: 10px;
      font-family: "Roboto Condensed", sans-serif;
      font-size: 20px;
      font-weight: bold;
      padding: 5px;
    }
  `;static properties={spells:{type:Array},filteredSpells:{type:Array}};constructor(){super(),this.spells=[],this.filteredSpells=[]}async connectedCallback(){super.connectedCallback(),await this.loadCSV(),document.title="Loitsut"}async loadCSV(){const t=await(await fetch("data/spells.csv")).text(),i=Papa.parse(t,{header:!0,skipEmptyLines:!0});this.spells=i.data,this.filteredSpells=i.data,console.log(this.spells)}handleSearch(e){const t=e.target.value.toLowerCase();this.filteredSpells=this.spells.filter(i=>i.nimi.toLowerCase().includes(t)||i.loitsunPiiri.toLowerCase().includes(t)||i.loitsimisviive.toLowerCase().includes(t))}render(){return c`
    <section class="searchWrapper">
      <input
        class="search"
        type="text"
        placeholder="Etsi loitsuja..."
        @input=${this.handleSearch}
      >
    </section>
    <section class="cards">
      ${this.filteredSpells.map(e=>c`
        <spell-card
        .nimi=${e.nimi}
        .loitsunPiiri=${e.loitsunPiiri}
        .loitsunKoulukunta=${e.loitsunKoulukunta}
        .loitsimisviive=${e.loitsimisviive}
        .kantama=${e.kantama}
        .komponentit=${e.komponentit}
        .kesto=${e.kesto}
        .kuvaus=${e.kuvaus}
        >
        </spell-card>
        `)}
    </section>
    `}}customElements.define("spells-view",zi);class Wi extends m{static styles=v`
        .background{
            width:75%;
            margin-left:12.5%;
            background-color: white;
            font-family: "Roboto Condensed", sans-serif;
        }
        .actionTitles{
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 5px;
            font-weight: bold;
            }
        .titles{
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 5px;
        }
        .desc{
            margin-left: 10px;
            border-left: solid lightgray 5px;
            padding: 5px;
        }
        .weaponRow {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 5px 10px;
            height: auto;
            gap: 10px;
            background-color: lightgray;
        }
        .weaponRow.even {
            background-color: lightgray;
        }

    .weaponRow.odd {
            background-color: white;
        }
    `;staticProperties={simpleMeleeWeapons:{type:Array},addedWeapons:{type:Array},weaponlessHB:{type:Number},hb:{type:Number}};static get properties(){return{weapons:{type:Array}}}constructor(){super(),this.weapons=[]}async connectedCallback(){super.connectedCallback(),await this.loadCSV(),document.title="Aseet"}async loadCSV(){const t=await(await fetch("data/weapons.csv")).text(),i=Papa.parse(t,{header:!0,skipEmptyLines:!0});this.weapons=i.data,console.log(this.weapons)}render(){return c`
            <div class="background">
                <div>
                    <div class="titles">
                        <span>Nimi</span>
                        <span>Hinta</span>
                        <span>Vahinko</span>
                        <span>Nimi</span>
                        <span>Vahinkotyyppi</span>
                        <span>Paino</span>
                        <span>Ominaisuudet</span>
                    </div>
                    ${this.weapons.map((e,t)=>c`
                        <div class="weaponRow ${t%2===0?"even":"odd"}">
                            <span>${e.Nimi}</span>
                            <span>${e.Hinta}</span>
                            <span>${e.Vahinko}</span>
                            <span>${e.Vahinkotyyppi}</span>
                            <span>${e.Paino}</span>
                            <span>${e.Ominaisuudet}</span>
                        </div>    
                    `)}
                </div>
                <p class="actionTitles">ASEIDEN OMINAISUUDET</p>
                <p class="titles">Ammukset</p>
                <p class="desc">Ase, jolla on ominaisuus “ammukset”, kuluttaa sille tarkoitettuja ammuksia (nuolia, vasamia, kiviä) hyökkäyksissä. Et voi hyökätä tällaisella aseella normaalisti, jos ammukset ovat loppuneet. Taistelun lopuksi voit keräillä puolet käytetyistä ammuksista, jos sinulla on vähintään minuutti aikaa tutkia taistelukenttää. Jos käytät tällaista asetta lähitaisteluhyökkäykseen, se toimii improvisoituna aseena (kts. kohta “improvisoidut aseet” myöhemmin). Lingossa täytyy olla lingon kivi paikallaan, jotta se toimii lähitaisteluaseena.</p>
                <p class="titles">Tarkkuus</p>
                <p class="desc">Tällaisella aseella voi osua tarkasti tiettyyn kohteeseen ja aseen käyttäminen voi vaatia tarkkaa taitoa. Kun hyökkäät aseella, jolla on ominaisuus “tarkkuus”, voit valita käytätkö voimakkuus- tai ketteryysmuuttujaasi hyökkäys- ja vahinkoheittoihin.</p>
                <p class="titles">Raskas ase</p>
                <p class="desc">Pienet olennot saavat haitan hyökkäysheittoihin raskailla aseilla.</p>
                <p class="titles">Kevyt ase</p>
                <p class="desc">Kevyet aseet ovat pieniä ja helppoja hallita. Ne ovat ideaaleja kahdella aseella taistelemiseen.</p>
                <p class="titles">Ladattava</p>
                <p class="desc">Voit tehdä ladattavalla aseella vain yhden hyökkäyksen toimintona, bonustoimintona tai reaktiona, vaikka voisitkin muuten hyökätä useammin saman toiminnon aikana.</p>
                <p class="titles">Kantama</p>
                <p class="desc">Aseen kantama ilmoitetaan kahdella luvulla. Ensimmäinen luku on normaalikantama metreinä ja toinen luku on pitkä kantama. Kun hyökkäät aseella normaalikantamaa pidemmälle matkalle, saat haitan hyökkäysheittoon.</p>
                <p class="titles">Ulottuva</p>
                <p class="desc">Voit hyökätä korkeintaan neljän metrin päähän aseella, jolla on ominaisuus ulottuva. Tämä koskee myös vapaahyökkäyksiä. Erikoispiirre. Näiden aseiden ominaisuudet on selitetty niiden omassa osiossaan Erikoispiirteiset aseet.</p>
                <p class="titles">Heitettävä</p>
                <p class="desc">Voit tehdä kantamahyökkäyksen aseella, jolla on ominaisuus heitettävä. Jos kyseessä on lähitaisteluase, käytä samaa ominaisuutta hyökkäys- ja vahinkoheittoihin kuin käyttäisit lähitaisteluhyökkäyksissäkin. Kirveen heittämiseen käytetään siis voimakkuutta ja tikarin heittämiseen joko ketteryyttä tai voimakkuutta, koska kyseessä on ase, jolla on ominaisuus “tarkkuus”.</p>
                <p class="titles">Kahden käden ase</p>
                <p class="desc">Tällaista asetta pitää käyttää hyökätessä kahdella kädellä.</p>
                <p class="titles">Yhden tai kahden käden ase</p>
                <p class="desc">Tätä asetta voi käyttää yhdellä tai kahdella kädellä. Kahdella kädellä käytettäessä vahinkoa tulee tämän ominaisuuden perässä olevan arvon verran.</p>
                <p class="actionTitles">IMPROVISOIDUT ASEET</p>
                <p class="desc">Joskus seikkailuissa tulee tilanne, jolloin hahmoilla ei ole käytössään omia aseitaan ja täytyy käyttää, mitä käteen sattuu sillä hetkellä. Improvisoituja aseita voivat olla pöydänjalat, paistinpannut, rikkoutuneet pullot tai vaikka peikkolaisten ruumiit. Joskus improvisoitu ase on tarpeeksi lähellä oikeaa asetta, että se voidaan laskea vastaavaksi oikeaksi aseeksi (esimerkiksi pöydänjalka on lähellä nuijaa). Pelinjohtajan hyväksynnällä hahmo voi käyttää oikean aseen pätevyysbonusta improvisoidullakin aseella. Esine, joka ei muistuta mitään asetta, tekee 1n4 vahinkoa ja pelinjohtaja voi määrittää vahinkotyypin. Jos hahmo käyttää kantama-asetta lähitaisteluaseena tai jos hahmo heittää lähitaisteluaseen, jolla ei ole ominaisutta heitettävä, tekee ase 1n4 vahinkoa. Improvisoidun heitetyn aseen kantama on (8/24).</p>
                <p class="actionTitles">HOPEOIDUT ASEET</p>
                <p class="desc">Jotkut olennot ovat immuuneja tai sietokykyisiä normaalien aseiden vahinkoa vastaan. Ne saattavat kuitenkin olla alttiita hopeisten aseiden vahingolle. Aseen tai kymmenen ammusta voi päällystää hopealla 100 kultarahan hintaan. Tämä hinta kattaa materiaalien lisäksi sepän työn.</p>
            </div>
        `}}customElements.define("weapons-view",Wi);class Ki extends m{static styles=v`
  .bar{
    width: 100%;
    height: 50px;
    background-color: #13293D;
    border-bottom: 1px solid;
    border-color: white;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .wrapper{
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 8px;
    background-color: transparent;
    border: none;
  }
  .wrapper.highlighted{
    background-color: #1d4062;
    border-radius: 5px;
  }
  .navbutton{
    font-family: "Roboto Condensed", sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: white;
  }
  .icon{
    height:20px;
    color: white;
    margin-right: 2px;
  }
  .options{
    display: flex;
    flex-direction: row;
    margin-left: auto;
  }
  input[type="file"] {
      display: none;
    }
  `;static properties={highlightHome:{type:Boolean},highlightSpells:{type:Boolean},highlightWeapons:{type:Boolean},highlightSave:{type:Boolean},highlightUpload:{type:Boolean}};constructor(){super(),this.highlightHome=!1,this.highlightSpells=!1,this.highlightWeapons=!1,this.highlightSave=!1,this.highlightUpload=!1}firstUpdated(){this.fileInput=this.renderRoot.querySelector("#fileInput"),this.fileInput.addEventListener("change",e=>this.handleFile(e))}handleFile(e){const t=e.target.files[0];if(!t)return;const i=new FileReader;i.onload=a=>{try{const n=JSON.parse(a.target.result);Object.keys(n).forEach(o=>{localStorage.setItem(o,n[o])}),window.location.reload()}catch{alert("Invalid JSON file.")}},i.readAsText(t),e.target.value=""}exportData(){const e={};for(let o=0;o<localStorage.length;o++){const r=localStorage.key(o);e[r]=localStorage.getItem(r)}const t=JSON.stringify(e,null,2),i=new Blob([t],{type:"application/json"}),a=URL.createObjectURL(i),n=document.createElement("a");n.href=a,n.download="Hahmolomake.json",n.click(),URL.revokeObjectURL(a)}openFileDialog(){this.fileInput.click()}render(){return c`
    <div class="bar">
      <button class="wrapper ${this.highlightHome?"highlighted":""}" 
        @click=${()=>ae.go("/")}
        @mouseenter=${()=>this.highlightHome=!0}
        @mouseleave=${()=>this.highlightHome=!1}
      >
        <div class="navbutton">
          <img src="icons/scroll.png" class="icon">
          HAHMOLOMAKE
        </div>
      </button>

      <button class="wrapper ${this.highlightSpells?"highlighted":""}" 
        @click=${()=>ae.go("/spells")}
        @mouseenter=${()=>this.highlightSpells=!0}
        @mouseleave=${()=>this.highlightSpells=!1}
      >
        <div class="navbutton">
          <img src="/icons/spell.png" class="icon">
          LOITSUT
        </div>
      </button>
      <button class="wrapper ${this.highlightWeapons?"highlighted":""}" 
        @click=${()=>ae.go("/weapons")}
        @mouseenter=${()=>this.highlightWeapons=!0}
        @mouseleave=${()=>this.highlightWeapons=!1}
      >
        <div class="navbutton">
          <img src="icons/sword.png" class="icon">
          ASEET
        </div>
      </button>
      <span class="options">
          <input id="fileInput" type="file"/>
          <button class="wrapper ${this.highlightUpload?"highlighted":""}" @click=${this.openFileDialog}
              @mouseenter=${()=>this.highlightUpload=!0}
              @mouseleave=${()=>this.highlightUpload=!1}>
            <div class="navbutton">
              <img src="/icons/uploadfile.png" class="icon">
              AVAA TIEDOSTO
            </div>
          </button>
          <button class="wrapper ${this.highlightSave?"highlighted":""}" @click=${this.exportData}
              @mouseenter=${()=>this.highlightSave=!0}
              @mouseleave=${()=>this.highlightSave=!1}>
            <div class="navbutton">
              <img src="icons/save.png" class="icon">
              TALLENNA NIMELLÄ
            </div>
          </button>
      </span>
    </div>
  `}}customElements.define("nav-element",Ki);class Vi extends m{firstUpdated(){const e=this.shadowRoot.getElementById("outlet"),t=new ae(e,{useHash:!0}),i=window.location.hostname==="localhost"?"/":"/Hahmonhallintasofta/";t.baseUrl=i,t.setRoutes([{path:"/",component:"character-sheet"},{path:"/spells",component:"spells-view"},{path:"/weapons",component:"weapons-view"}])}render(){return c`
            <nav-element></nav-element>
            <div id="outlet"></div>
        `}}customElements.define("app-root",Vi);
