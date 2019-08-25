(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3f51e3e"],{"01e6":function(t,e,s){"use strict";var n=s("2f88"),i=s("780f"),r=function(t,e,s,n){var i,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(r<3?i(o):r>3?i(e,s,o):i(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},o=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let a=class extends n["a"]{constructor(){super(...arguments),this.elevation=1,this.disabled=!1}static get styles(){return n["b"]`
    :host {
      display: inline-block;
      font-family: inherit;
      cursor: pointer;
      padding: 8px 10px;
      position: relative;
      text-align: center;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      display: inline-flex;
      outline: none;
      letter-spacing: 1.25px;
      font-size: 14px;
      text-transform: uppercase;
      opacity: 0;
    }

    :host(.wired-rendered) {
      opacity: 1;
    }

    :host(:active) path {
      transform: scale(0.97) translate(1.5%, 1.5%);
    }

    :host(.wired-disabled) {
      opacity: 0.6 !important;
      background: rgba(0, 0, 0, 0.07);
      cursor: default;
      pointer-events: none;
    }

    :host(:focus) path {
      stroke-width: 1.5;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }

    svg {
      display: block;
    }

    path {
      stroke: currentColor;
      stroke-width: 0.7;
      fill: transparent;
      transition: transform 0.05s ease;
    }
    `}render(){return n["d"]`
    <slot></slot>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.addEventListener("keydown",t=>{13!==t.keyCode&&32!==t.keyCode||(t.preventDefault(),this.click())}),this.setAttribute("role","button"),this.setAttribute("aria-label",this.textContent||this.innerText),setTimeout(()=>this.requestUpdate())}updated(t){t.has("disabled")&&this.refreshDisabledState();const e=this.shadowRoot.getElementById("svg");while(e.hasChildNodes())e.removeChild(e.lastChild);const s=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),r=s.width+2*(n-1),o=s.height+2*(n-1);e.setAttribute("width",`${r}`),e.setAttribute("height",`${o}`),Object(i["d"])(e,0,0,s.width,s.height);for(let a=1;a<n;a++)Object(i["c"])(e,2*a,s.height+2*a,s.width+2*a,s.height+2*a).style.opacity=`${(75-10*a)/100}`,Object(i["c"])(e,s.width+2*a,s.height+2*a,s.width+2*a,2*a).style.opacity=`${(75-10*a)/100}`,Object(i["c"])(e,2*a,s.height+2*a,s.width+2*a,s.height+2*a).style.opacity=`${(75-10*a)/100}`,Object(i["c"])(e,s.width+2*a,s.height+2*a,s.width+2*a,2*a).style.opacity=`${(75-10*a)/100}`;this.classList.add("wired-rendered")}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}};r([Object(n["e"])({type:Number}),o("design:type",Object)],a.prototype,"elevation",void 0),r([Object(n["e"])({type:Boolean,reflect:!0}),o("design:type",Object)],a.prototype,"disabled",void 0),a=r([Object(n["c"])("wired-button")],a)},"21bb":function(t,e,s){"use strict";var n=s("b6fa"),i=s.n(n);i.a},"2f88":function(t,e,s){"use strict";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const n=new WeakMap,i=t=>{return"function"===typeof t&&n.has(t)},r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,s=null)=>{while(e!==s){const s=e.nextSibling;t.removeChild(e),e=s}},a={},c={},l=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${l}--\x3e`,d=new RegExp(`${l}|${h}`),u="$lit$";class p{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let r=0,o=-1,a=0;const{strings:c,values:{length:h}}=t;while(a<h){const t=i.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)f(e[t].name,u)&&n++;while(n-- >0){const e=c[a],s=y.exec(e)[2],n=s.toLowerCase()+u,i=t.getAttribute(n);t.removeAttribute(n);const r=i.split(d);this.parts.push({type:"attribute",index:o,name:s,strings:r}),a+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(l)>=0){const n=t.parentNode,i=e.split(d),r=i.length-1;for(let e=0;e<r;e++){let s,r=i[e];if(""===r)s=v();else{const t=y.exec(r);null!==t&&f(t[2],u)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-u.length)+t[3]),s=document.createTextNode(r)}n.insertBefore(s,t),this.parts.push({type:"node",index:++o})}""===i[r]?(n.insertBefore(v(),t),s.push(t)):t.data=i[r],a+=r}}else if(8===t.nodeType)if(t.data===l){const e=t.parentNode;null!==t.previousSibling&&o!==r||(o++,e.insertBefore(v(),t)),r=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(s.push(t),o--),a++}else{let e=-1;while(-1!==(e=t.data.indexOf(l,e+1)))this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const l of s)l.parentNode.removeChild(l)}}const f=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},m=t=>-1!==t.index,v=()=>document.createComment(""),y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const s of this.__parts)void 0!==s&&s.commit()}_clone(){const t=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,o=0,a=0,c=n.nextNode();while(o<s.length)if(i=s[o],m(i)){while(a<i.index)a++,"TEMPLATE"===c.nodeName&&(e.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=e.pop(),c=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return r&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class b{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const r=y.exec(t);e+=null===r?t+(s?l:h):t.substr(0,r.index)+r[1]+r[2]+u+r[3]+l}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _=t=>{return null===t||!("object"===typeof t||"function"===typeof t)},w=t=>{return Array.isArray(t)||!(!t||!t[Symbol.iterator])};class S{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let n=0;n<s.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(_(t)||!w(t))s+="string"===typeof t?t:String(t);else for(const e of t)s+="string"===typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||_(t)&&t===this.value||(this.value=t,i(t)||(this.committer.dirty=!0))}commit(){while(i(this.value)){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class x{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(v()),this.endNode=t.appendChild(v())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=v()),t.__insert(this.endNode=v())}insertAfterPart(t){t.__insert(this.startNode=v()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){while(i(this.__pendingValue)){const t=this.__pendingValue;this.__pendingValue=a,t(this)}const t=this.__pendingValue;t!==a&&(_(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):w(t)?this.__commitIterable(t):t===c?(this.value=c,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t;const s="string"===typeof t?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof g&&this.value.template===e)this.value.update(t.values);else{const s=new g(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new x(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class N{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){while(i(this.__pendingValue)){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=a}}class k extends S{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends C{}let M=!1;try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(Pt){}class O{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){while(i(this.__pendingValue)){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=T(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=a}handleEvent(t){"function"===typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class R{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){const n=new k(t,e.slice(1),s);return n.parts}if("@"===i)return[new O(t,e.slice(1),n.eventContext)];if("?"===i)return[new N(t,e.slice(1),s)];const r=new S(t,e,s);return r.parts}handleTextExpression(t){return new x(t)}}const $=new R;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function A(t){let e=j.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},j.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(l);return s=e.keyString.get(n),void 0===s&&(s=new p(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const j=new Map,E=new WeakMap,L=(t,e,s)=>{let n=E.get(e);void 0===n&&(o(e,e.firstChild),E.set(e,n=new x(Object.assign({templateFactory:A},s))),n.appendInto(e)),n.setValue(t),n.commit()};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window["litHtmlVersions"]||(window["litHtmlVersions"]=[])).push("1.1.1");const V=(t,...e)=>new b(t,e,"html",$),I=133;function B(t,e){const{element:{content:s},parts:n}=t,i=document.createTreeWalker(s,I,null,!1);let r=z(n),o=n[r],a=-1,c=0;const l=[];let h=null;while(i.nextNode()){a++;const t=i.currentNode;t.previousSibling===h&&(h=null),e.has(t)&&(l.push(t),null===h&&(h=t)),null!==h&&c++;while(void 0!==o&&o.index===a)o.index=null!==h?-1:o.index-c,r=z(n,r),o=n[r]}l.forEach(t=>t.parentNode.removeChild(t))}const U=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,I,null,!1);while(s.nextNode())e++;return e},z=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(m(e))return s}return-1};function q(t,e,s=null){const{element:{content:n},parts:i}=t;if(null===s||void 0===s)return void n.appendChild(e);const r=document.createTreeWalker(n,I,null,!1);let o=z(i),a=0,c=-1;while(r.nextNode()){c++;const t=r.currentNode;t===s&&(a=U(e),s.parentNode.insertBefore(e,s));while(-1!==o&&i[o].index===c){if(a>0){while(-1!==o)i[o].index+=a,o=z(i,o);return}o=z(i,o)}}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const W=(t,e)=>`${t}--${e}`;let H=!0;"undefined"===typeof window.ShadyCSS?H=!1:"undefined"===typeof window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const F=t=>e=>{const s=W(e.type,t);let n=j.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},j.set(s,n));let i=n.stringsArray.get(e.strings);if(void 0!==i)return i;const r=e.strings.join(l);if(i=n.keyString.get(r),void 0===i){const s=e.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(s,t),i=new p(e,s),n.keyString.set(r,i)}return n.stringsArray.set(e.strings,i),i},G=["html","svg"],D=t=>{G.forEach(e=>{const s=j.get(W(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),B(t,s)})})},J=new Set,Y=(t,e,s)=>{J.add(t);const n=s?s.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:r}=i;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,t);const o=document.createElement("style");for(let l=0;l<r;l++){const t=i[l];t.parentNode.removeChild(t),o.textContent+=t.textContent}D(t);const a=n.content;s?q(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),B(s,t)}},Z=(t,e,s)=>{if(!s||"object"!==typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,i=E.has(e),r=H&&11===e.nodeType&&!!e.host,a=r&&!J.has(n),c=a?document.createDocumentFragment():e;if(L(t,c,Object.assign({templateFactory:F(n)},s)),a){const t=E.get(c);E.delete(c);const s=t.value instanceof g?t.value.template:void 0;Y(n,c,s),o(e,e.firstChild),e.appendChild(c),E.set(e,t)}!i&&r&&window.ShadyCSS.styleElement(e.host)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var K;window.JSCompiler_renameProperty=(t,e)=>t;const Q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},X=(t,e)=>{return e!==t&&(e===e||t===t)},tt={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:X},et=Promise.resolve(!0),st=1,nt=4,it=8,rt=16,ot=32,at="finalized";class ct extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=et,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const n=this._attributeNameForProperty(s,e);void 0!==n&&(this._attributeToPropertyMap.set(n,s),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=tt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"===typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const n=this[t];this[s]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(at)||t.finalize(),this[at]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"===typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"===typeof s?s:"string"===typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=X){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,n=e.converter||Q,i="function"===typeof n?n:n.fromAttribute;return i?i(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,n=e.converter,i=n&&n.toAttribute||Q.toAttribute;return i(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|ot,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=tt){const n=this.constructor,i=n._attributeNameForProperty(t,s);if(void 0!==i){const t=n._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|it,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=this._updateState&~it}}_attributeToProperty(t,e){if(this._updateState&it)return;const s=this.constructor,n=s._attributeToPropertyMap.get(t);if(void 0!==n){const t=s._classProperties.get(n)||tt;this._updateState=this._updateState|rt,this[n]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~rt}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const n=this.constructor,i=n._classProperties.get(t)||tt;n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||this._updateState&rt||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|nt;const s=this._updatePromise;this._updatePromise=new Promise((s,n)=>{t=s,e=n});try{await s}catch(n){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(n){e(n)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&ot}get _hasRequestedUpdate(){return this._updateState&nt}get hasUpdated(){return this._updateState&st}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(s){throw t=!1,s}finally{this._markUpdated()}t&&(this._updateState&st||(this._updateState=this._updateState|st,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~nt}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}K=at,ct[K]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const lt=(t,e)=>{return window.customElements.define(t,e),e},ht=(t,e)=>{const{kind:s,elements:n}=e;return{kind:s,elements:n,finisher(e){window.customElements.define(t,e)}}},dt=t=>e=>"function"===typeof e?lt(t,e):ht(t,e),ut=(t,e)=>{return"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"===typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}}:Object.assign({},e,{finisher(s){s.createProperty(e.key,t)}})},pt=(t,e,s)=>{e.constructor.createProperty(s,t)};function ft(t){return(e,s)=>void 0!==s?pt(t,e,s):ut(t,e)}function mt(t){return(e,s)=>{const n={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==s?vt(n,e,s):yt(n,e)}}const vt=(t,e,s)=>{Object.defineProperty(e,s,t)},yt=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t}),gt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bt=Symbol();class _t{constructor(t,e){if(e!==bt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(gt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const wt=t=>{if(t instanceof _t)return t.cssText;if("number"===typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)},St=(t,...e)=>{const s=e.reduce((e,s,n)=>e+wt(s)+t[n+1],t[0]);return new _t(s,bt)};function Ct(t,e=[]){for(let s=0,n=t.length;s<n;s++){const n=t[s];Array.isArray(n)?Ct(n,e):e.push(n)}return e}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window["litElementVersions"]||(window["litElementVersions"]=[])).push("2.2.1");const xt=t=>t.flat?t.flat(1/0):Ct(t);class Nt extends ct{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){const s=xt(t),n=s.reduceRight((t,e)=>{return t.add(e),t},new Set);n.forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?gt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof b&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}Nt["finalized"]=!0,Nt.render=Z,s.d(e,"a",function(){return kt}),s.d(e,"d",function(){return V}),s.d(e,"c",function(){return dt}),s.d(e,"e",function(){return ft}),s.d(e,"f",function(){return mt}),s.d(e,"b",function(){return St});class kt extends Nt{fireEvent(t,e,s=!0,n=!0){if(t){const i={bubbles:"boolean"!==typeof s||s,composed:"boolean"!==typeof n||n};e&&(i.detail=e);const r=window.SlickCustomEvent||CustomEvent;this.dispatchEvent(new r(t,i))}}}},"5dca":function(t,e,s){"use strict";var n=s("2f88"),i=s("780f"),r=function(t,e,s,n){var i,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(r<3?i(o):r>3?i(e,s,o):i(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},o=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let a=class extends n["a"]{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return n["b"]`
    :host {
      display: inline-block;
      position: relative;
      opacity: 0;
    }

    :host(.wired-rendered) {
      opacity: 1;
    }

    #svg {
      display: block;
      width: 76px;
      height: 76px;
    }

    path {
      stroke: currentColor;
      stroke-opacity: 0.5;
      stroke-width: 1.5;
      fill: none;
    }
    .knob path {
      stroke-width: 2.8 !important;
      stroke-opacity: 1;
    }
    `}render(){return n["d"]`
    <svg id="svg"></svg>
    `}firstUpdated(){this.svg&&(Object(i["a"])(this.svg,38,38,60,60),this.knob=Object(i["b"])(0,0,20,20),this.knob.classList.add("knob"),this.svg.appendChild(this.knob)),this.updateCursor(),this.classList.add("wired-rendered")}updated(){this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(t=>this.tick(t))}tick(t){this.spinning?(this.timerstart||(this.timerstart=t),this.value=Math.min(1,(t-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}updateCursor(){if(this.knob){const t=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${t[0]}px, ${t[1]}px, 0) rotateZ(${Math.round(360*this.value*2)}deg)`}}};r([Object(n["e"])({type:Boolean}),o("design:type",Object)],a.prototype,"spinning",void 0),r([Object(n["e"])({type:Number}),o("design:type",Object)],a.prototype,"duration",void 0),r([Object(n["f"])("svg"),o("design:type",SVGSVGElement)],a.prototype,"svg",void 0),a=r([Object(n["c"])("wired-spinner")],a)},"780f":function(t,e,s){"use strict";function n(t,e,s,n,i,r,o){const a=-s*r-n*i+s,c=o*(s*i-n*r)+n,l=r,h=i,d=-o*i,u=o*r;return[a+l*t+h*e,c+d*t+u*e]}function i(t,e,s,i,r,o){const a=[];let c=Math.abs(i/2),l=Math.abs(r/2);c+=t.randOffset(.05*c,o),l+=t.randOffset(.05*l,o);const h=o.hachureAngle;let d=o.hachureGap;d<=0&&(d=4*o.strokeWidth);let u=o.fillWeight;u<0&&(u=o.strokeWidth/2);const p=Math.PI/180,f=h%180*p,m=Math.tan(f),v=l/c,y=Math.sqrt(v*m*v*m+1),g=v*m/y,b=1/y,_=d/(c*l/Math.sqrt(l*b*(l*b)+c*g*(c*g))/c);let w=Math.sqrt(c*c-(e-c+_)*(e-c+_));for(let S=e-c+_;S<e+c;S+=_){w=Math.sqrt(c*c-(e-S)*(e-S));const t=n(S,s-w,e,s,g,b,v),i=n(S,s+w,e,s,g,b,v);a.push([t,i])}return a}s.d(e,"c",function(){return v}),s.d(e,"d",function(){return y}),s.d(e,"a",function(){return g}),s.d(e,"b",function(){return w});const r=2,o=1,a=.85,c=0,l=9;class h{constructor(){this.p=""}get value(){return this.p.trim()}moveTo(t,e){this.p=`${this.p}M ${t} ${e} `}bcurveTo(t,e,s,n,i,r){this.p=`${this.p}C ${t} ${e}, ${s} ${n}, ${i} ${r} `}}function d(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg",t);if(e)for(const n in e)s.setAttributeNS(null,n,e[n]);return s}function u(t,e){return o*(Math.random()*(e-t)+t)}function p(t,e,s,n,i){const o=Math.pow(t-s,2)+Math.pow(e-n,2);let c=r||0;c*c*100>o&&(c=Math.sqrt(o)/10);const l=c/2,d=.2+.2*Math.random();let p=a*r*(n-e)/200,f=a*r*(t-s)/200;p=u(-p,p),f=u(-f,f);const m=i||new h;return m.moveTo(t+u(-c,c),e+u(-c,c)),m.bcurveTo(p+t+(s-t)*d+u(-c,c),f+e+(n-e)*d+u(-c,c),p+t+2*(s-t)*d+u(-c,c),f+e+2*(n-e)*d+u(-c,c),s+u(-c,c),n+u(-c,c)),m.moveTo(t+u(-l,l),e+u(-l,l)),m.bcurveTo(p+t+(s-t)*d+u(-l,l),f+e+(n-e)*d+u(-l,l),p+t+2*(s-t)*d+u(-l,l),f+e+2*(n-e)*d+u(-l,l),s+u(-l,l),n+u(-l,l)),m}function f(t,e){const s=t.length;let n=e||new h;if(s>3){const e=[],i=1-c;n.moveTo(t[1][0],t[1][1]);for(let r=1;r+2<s;r++){const s=t[r];e[0]=[s[0],s[1]],e[1]=[s[0]+(i*t[r+1][0]-i*t[r-1][0])/6,s[1]+(i*t[r+1][1]-i*t[r-1][1])/6],e[2]=[t[r+1][0]+(i*t[r][0]-i*t[r+2][0])/6,t[r+1][1]+(i*t[r][1]-i*t[r+2][1])/6],e[3]=[t[r+1][0],t[r+1][1]],n.bcurveTo(e[1][0],e[1][1],e[2][0],e[2][1],e[3][0],e[3][1])}}else 3===s?(n.moveTo(t[0][0],t[0][1]),n.bcurveTo(t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1])):2===s&&(n=p(t[0][0],t[0][1],t[1][0],t[1][1],n));return n}function m(t,e,s,n,i,r,o,a){const c=u(-.5,.5)-Math.PI/2,l=[];l.push([u(-r,r)+e+.9*n*Math.cos(c-t),u(-r,r)+s+.9*i*Math.sin(c-t)]);for(let h=c;h<2*Math.PI+c-.01;h+=t)l.push([u(-r,r)+e+n*Math.cos(h),u(-r,r)+s+i*Math.sin(h)]);return l.push([u(-r,r)+e+n*Math.cos(c+2*Math.PI+.5*o),u(-r,r)+s+i*Math.sin(c+2*Math.PI+.5*o)]),l.push([u(-r,r)+e+.98*n*Math.cos(c+o),u(-r,r)+s+.98*i*Math.sin(c+o)]),l.push([u(-r,r)+e+.9*n*Math.cos(c+.5*o),u(-r,r)+s+.9*i*Math.sin(c+.5*o)]),f(l,a)}function v(t,e,s,n,i){const r=p(e,s,n,i),o=d("path",{d:r.value});return t.appendChild(o),o}function y(t,e,s,n,i){e+=2,s+=2,n-=4,i-=4;let r=p(e,s,e+n,s);r=p(e+n,s,e+n,s+i,r),r=p(e+n,s+i,e,s+i,r),r=p(e,s+i,e,s,r);const o=d("path",{d:r.value});return t.appendChild(o),o}function g(t,e,s,n,i){n=Math.max(n>10?n-4:n-1,1),i=Math.max(i>10?i-4:i-1,1);const r=2*Math.PI/l;let o=Math.abs(n/2),a=Math.abs(i/2);o+=u(.05*-o,.05*o),a+=u(.05*-a,.05*a);let c=m(r,e,s,o,a,1,r*u(.1,u(.4,1)));c=m(r,e,s,o,a,1.5,0,c);const h=d("path",{d:c.value});return t.appendChild(h),h}function b(t){const e=d("g");let s=null;return t.forEach(t=>{v(e,t[0][0],t[0][1],t[1][0],t[1][1]),s&&v(e,s[0],s[1],t[0][0],t[0][1]),s=t[1]}),e}const _={bowing:a,curveStepCount:l,curveTightness:c,dashGap:0,dashOffset:0,fill:"#000",fillStyle:"hachure",fillWeight:1,hachureAngle:-41,hachureGap:5,maxRandomnessOffset:r,roughness:o,simplification:1,stroke:"#000",strokeWidth:2,zigzagOffset:0};function w(t,e,s,n){const r={randOffset(t,e){return u(-t,t)}},o=i(r,t,e,s,n,_);return b(o)}},"9cae":function(t,e,s){"use strict";(function(t){var n=s("2f62"),i=s("b794"),r=s("e5f2"),o=s("01e6"),a=s("5dca"),c=s("e968");e["a"]={name:"home",components:{WiredCard:r["default"],WiredButton:o["default"],WiredSpinner:a["default"]},data:function(){return{bgmJSON:{},isTask:!1,smNavBtn:!0,smContent:c["a"].smContent,currentNum:0,totalNum:0,currentConent:{},typedObj:null,isLoading:!0,noticeList:["这里没有彩蛋了，放弃吧！","你点这个心干什么呢？","好玩吗？","别点了，真的没啥了！","好了好了，别皮了！","好吧，你赢了，真没啥了！0.0"],noticeItem:"这里是占位符",touchStartLoop:null,typeSpeed:c["a"].typeSpeed}},computed:Object(n["b"])(["hasBGM"]),methods:{loveFun:function(){var t=this;t.$nextTick(function(){t.$refs.smNoticeRef.classList.add("animated","slideInDown"),t.$refs.love.classList.add("sm-pointer-events-none"),t.$refs.smNoticeRef.classList.remove("sm-hidden"),setTimeout(function(){t.$refs.smNoticeRef.classList.remove("slideInDown"),t.$refs.smNoticeRef.classList.add("slideOutUp")},3e3),setTimeout(function(){t.$refs.smNoticeRef.classList.remove("animated","slideInDown","slideOutUp"),t.$refs.smNoticeRef.classList.add("sm-hidden"),t.$refs.love.classList.remove("sm-pointer-events-none")},3500)})},mathNotice:function(){var t=this;t.noticeItem=t.noticeList[Math.floor(6*Math.random())]},showNitice:function(){var t=this;t.mathNotice(),t.loveFun()},closeBGM:function(){var t=this;t.$store.commit("changeBGM"),t.hasBGM?t.$refs.bgmRef.play():t.$refs.bgmRef.pause()},taskGo:function(){var t=this;t.isTask=!0,t.initSMContent(),t.$nextTick(function(){t.$refs.smContentRef.classList.add("animated","bounceInLeft")})},initSMContent:function(){var e=this,s=t;e.currentNum=0,e.totalNum=e.smContent.length,e.currentConent=e.smContent[e.currentNum],e.$nextTick(function(){e.typedObj=new s("#typed",{strings:[e.smContent[e.currentNum].content],typeSpeed:e.typeSpeed,loop:!1,showCursor:!1,onComplete:function(){e.smNavBtn=!1}})})},smPrev:function(){var e=this,s=t;e.smNavBtn=!0,e.currentNum--,e.typedObj=null,e.$refs.typedRef.innerText="",e.currentConent=e.smContent[e.currentNum],e.$nextTick(function(){e.$refs.smCardRef.classList.add("animated","fadeInRight"),e.$refs.smCardRef.addEventListener("animationend",function(){e.$refs.smCardRef.classList.remove("animated","fadeInRight")}),e.typedObj=new s("#typed",{strings:[e.smContent[e.currentNum].content],typeSpeed:e.typeSpeed,loop:!1,showCursor:!1,startDelay:1e3,onComplete:function(){e.smNavBtn=!1}})})},smNext:function(){var e=this,s=t;e.smNavBtn=!0,e.currentNum++,e.typedObj=null,e.$refs.typedRef.innerText="",e.currentConent=e.smContent[e.currentNum],e.$nextTick(function(){e.$refs.smCardRef.classList.add("animated","fadeInLeft"),e.$refs.smCardRef.addEventListener("animationend",function(){e.$refs.smCardRef.classList.remove("animated","fadeInLeft")}),e.typedObj=new s("#typed",{strings:[e.smContent[e.currentNum].content],typeSpeed:e.typeSpeed,loop:!1,showCursor:!1,startDelay:1e3,onComplete:function(){e.smNavBtn=!1}})})},touchStart:function(){var t=this;clearInterval(t.touchStartLoop),t.touchStartLoop=setTimeout(function(){t.noticeItem="我喜欢你！",t.loveFun()},3e3)},clearLoop:function(){var t=this;clearInterval(t.touchStartLoop)}},created:function(){var t=this;t.bgmJSON=c["a"].bgmJSON},mounted:function(){var t=this;t.$nextTick(function(){Object(i["a"])(t,t.$refs.canvas.offsetWidth,t.$refs.canvas.offsetHeight),window.onresize=function(){Object(i["a"])(t.$refs.canvas.offsetWidth,t.$refs.canvas.offsetHeight)},Object(i["b"])(t),Object(i["c"])(t)}),window.onload=function(){t.isLoading=!1}}}}).call(this,s("2b7c"))},b6fa:function(t,e,s){},b794:function(t,e,s){"use strict";(function(t){s.d(e,"a",function(){return n}),s.d(e,"b",function(){return i}),s.d(e,"c",function(){return r});var n=function(e,s,n){var i=t,r=function(t){for(var e=arguments.length,s=new Array(e>1?e-1:0),n=1;n<e;n++)s[n-1]=arguments[n];return Object.assign.apply(Object,[{},t].concat(s))},o=function(t){var e=t.h,s=t.s,n=t.l,i=t.a;return"hsla(".concat(e,",").concat(s,"%,").concat(n,"%,").concat(i,")")},a=r.bind(null,{h:0,s:100,l:100,a:1}),c=r.bind(null,{x:0,y:0}),l=r.bind(null,{pos:c(),vel:c(),angle:0,speed:0,radius:0,rotation:0,color:a()}),h=[a({h:20,s:100,l:50}),a({h:200,l:50}),a({h:300,l:50}),a({h:100,l:40})],d=function t(e){e.animation&&e.animation(t.bind(null,e));var s=e.ctx,n=s.canvas,r=i.canvas(n);s.clearRect(0,0,n.width,n.height),e.particles.map(function(t,e){t.pos.y-=t.speed,t.pos.x=e%2?t.pos.x+.2*Math.sin(t.angle):t.pos.x-.2*Math.cos(t.angle),t.angle+=.01,r.circle(t.pos.x,t.pos.y,t.radius,{fill:o(t.color),roughness:1.5*Math.random(),hachureGap:t.hachureGap,hachureAngle:t.hachureAngle}),r.line(t.pos.x,t.pos.y+1.2*t.radius,t.pos.x,t.pos.y+t.radius/2,{bowing:3*Math.random()}),t.pos.y+3*t.radius<0&&(t.pos.y=n.height+3*t.radius,t.pos.x=Math.random()*(n.width-t.radius))})},u={animation:requestAnimationFrame.bind(null),ctx:document.createElement("canvas").getContext("2d"),rotation:0,particles:[]};!function(t){var i=t.ctx.canvas;i.width=s,i.height=n,e.$refs.canvas.appendChild(i);var r=30;while(r--)t.particles.push(l({pos:{x:Math.random()*i.width,y:Math.random()*i.height},speed:Math.random()+.2,radius:60*Math.random()+20,color:h[Math.floor(Math.random()*h.length)],hachureAngle:90*Math.random(),hachureGap:8*Math.random()}));d(t)}(u)},i=function(e){var s=t,n=s.canvas(e.$refs.love);n.path("M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543  c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503  c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z",{fill:"red",fillStyle:"solid",roughness:0,hachureAngle:60,hachureGap:8,fillWeight:3})},r=function(e){var s=t,n=s.canvas(e.$refs.mail);n.rectangle(0,30,e.$refs.mail.clientWidth/1.01,e.$refs.mail.clientHeight/1.25,{roughness:3,fill:"rgba(255, 0, 0, 0.5)",hachureAngle:30,hachureGap:5,fillWeight:1.5})}}).call(this,s("93fd"))},bb51:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{ref:"smNoticeRef",staticClass:"sm-notice sm-hidden"},[s("wired-card",{attrs:{elevation:"3"}},[t._v("\n      "+t._s(t.noticeItem)+"\n    ")])],1),t.isLoading?s("div",{staticClass:"sm-spinner"},[s("div",{staticClass:"spinner-title"},[t._v("正在加载数据中...")]),s("wired-spinner",{attrs:{spinning:""}})],1):t._e(),s("div",{staticClass:"container"},[s("div",{staticClass:"setting"},[s("wired-button",{staticClass:"sm-btn text-center",attrs:{elevation:"3"},on:{click:t.closeBGM}},[t._v(t._s(t.hasBGM?"关闭音乐":"开启音乐"))])],1),t.isTask?s("div",{ref:"smContentRef",staticClass:"sm-content"},[s("wired-card",{ref:"smCardRef",staticClass:"sm-card",attrs:{elevation:"3"}},[s("div",{staticClass:"title"},[t._v(t._s(t.currentConent.title))]),s("div",{staticClass:"hideContent content",attrs:{id:"typed-strings"}},[t._v(t._s(t.currentConent.content))]),s("div",{ref:"typedRef",staticClass:"showContent content",attrs:{id:"typed"}})]),s("div",{staticClass:"sm-nav text-center"},[0!==t.currentNum?s("wired-button",{staticClass:"sm-btn text-center",attrs:{elevation:"3",disabled:t.smNavBtn},on:{click:t.smPrev}},[t._v("上一封")]):t._e(),t.currentNum!==t.totalNum-1?s("wired-button",{staticClass:"sm-btn text-center",attrs:{elevation:"3",disabled:t.smNavBtn},on:{click:t.smNext}},[t._v("下一封")]):t._e()],1)],1):s("div",{staticClass:"sm-init animated infinite pulse delay-2s",on:{click:t.taskGo}},[s("canvas",{ref:"mail",attrs:{id:"mail"}}),t._m(0)])]),s("div",{ref:"canvas",staticClass:"sm-canvas",attrs:{id:"canvas"}}),s("canvas",{directives:[{name:"show",rawName:"v-show",value:t.isTask,expression:"isTask"}],ref:"love",attrs:{id:"love"},on:{click:t.showNitice,touchstart:t.touchStart,touchend:t.clearLoop}}),s("audio",{ref:"bgmRef",attrs:{src:t.bgmJSON.url,autoplay:"",loop:"",type:"audio/"+t.bgmJSON.type}},[t._v("\n    Your browser does not support the "),s("code",[t._v("audio")]),t._v(" element.\n  ")]),s("div",{staticClass:"sm-footer"})])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("h3",{staticClass:"text-center"},[t._v("致乐乐的一封信")]),s("h4",{staticClass:"text-center"},[t._v("轻启")])])}],r=s("9cae"),o=r["a"],a=(s("21bb"),s("2877")),c=Object(a["a"])(o,n,i,!1,null,null,null);e["default"]=c.exports},e5f2:function(t,e,s){"use strict";var n=s("2f88"),i=s("780f"),r=function(t,e,s,n){var i,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(r<3?i(o):r>3?i(e,s,o):i(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},o=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let a=class extends n["a"]{constructor(){super(...arguments),this.elevation=1}static get styles(){return n["b"]`
    :host {
      display: inline-block;
      position: relative;
      padding: 10px;
      opacity: 0;
    }

    :host(.wired-rendered) {
      opacity: 1;
    }
  
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }
  
    svg {
      display: block;
    }
  
    path {
      stroke: currentColor;
      stroke-width: 0.7;
      fill: transparent;
    }
    `}render(){return n["d"]`
    <div>
      <slot @slotchange="${()=>this.requestUpdate()}"></slot>
    </div>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}connectedCallback(){super.connectedCallback(),this.resizeHandler||(this.resizeHandler=this.debounce(this.updated.bind(this),200,!1,this),window.addEventListener("resize",this.resizeHandler)),setTimeout(()=>this.updated())}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),delete this.resizeHandler)}debounce(t,e,s,n){let i=0;return()=>{const r=arguments,o=()=>{i=0,s||t.apply(n,r)},a=s&&!i;clearTimeout(i),i=window.setTimeout(o,e),a&&t.apply(n,r)}}updated(){const t=this.shadowRoot.getElementById("svg");while(t.hasChildNodes())t.removeChild(t.lastChild);const e=this.getBoundingClientRect(),s=Math.min(Math.max(1,this.elevation),5),n=e.width+2*(s-1),r=e.height+2*(s-1);t.setAttribute("width",`${n}`),t.setAttribute("height",`${r}`),Object(i["d"])(t,2,2,e.width-4,e.height-4);for(let o=1;o<s;o++)Object(i["c"])(t,2*o,e.height-4+2*o,e.width-4+2*o,e.height-4+2*o).style.opacity=`${(85-10*o)/100}`,Object(i["c"])(t,e.width-4+2*o,e.height-4+2*o,e.width-4+2*o,2*o).style.opacity=`${(85-10*o)/100}`,Object(i["c"])(t,2*o,e.height-4+2*o,e.width-4+2*o,e.height-4+2*o).style.opacity=`${(85-10*o)/100}`,Object(i["c"])(t,e.width-4+2*o,e.height-4+2*o,e.width-4+2*o,2*o).style.opacity=`${(85-10*o)/100}`;this.classList.add("wired-rendered")}};r([Object(n["e"])({type:Number}),o("design:type",Object)],a.prototype,"elevation",void 0),a=r([Object(n["c"])("wired-card")],a)},e968:function(t,e,s){"use strict";e["a"]={typeSpeed:200,bgmJSON:{url:"./assets/Richard Sanderson - Reality.mp3",type:"mp3"},smContent:[{title:"前言",content:"乐乐，我上午还在想要是拿word写情书是不是太直男了哈哈哈，后来我想到可以发挥我的专业技能啊！你也知道，我语文特别次，我也不想去复制粘贴什么甜言蜜语，凑合看吧哈哈哈"},{title:"回忆录",content:"今天是我们相识的第55天，时间过得好快，好像刚刚认识你，又好像我们在一起很久了，在北京的这段日子真的像在做梦一样，从第一眼看见你，我就爱上了你（没错，就是这么肤浅），相处起来发现你是个有想法、活泼、积极又没什么架子的女孩子，我对你的爱越来越深，以至于做了太多不理智的事情，有时候会觉得这段经历很美好，有的时候又觉得自己做的太过分，总之开心就好了，对吗"},{title:"现在",content:"你可能发现我回哈尔滨之后，就不怎么爱理你，但是我一直惦记你，每天都会想你的模样，想你吃没吃饭，在公司开心吗，睡的好吗，有没有想我，就像你说的，爱一个人的表现就是想起她会笑，我每天都是这样，这段时间压力很大，不知道自己的未来在哪里，不管怎么样，你只要知道我爱你就够了"},{title:"未来",content:"乐乐，我现在不敢跟你保证未来会怎么样，还有太多的不确定因素，希望你能理解，我也不知道自己还会给你写多少封情书，希望可以一直写下去吧。不知道你想过我们的未来是什么样子嘛，我想的是下班之后，我给你做好吃的，你躺在我怀里看电视，我搂着你睡觉，想想就觉得很幸福，一起努力吧！"}]}}}]);