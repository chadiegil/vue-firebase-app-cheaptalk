(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function nu(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function su(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Re(s)?Ny(s):su(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Re(t))return t;if(fe(t))return t}}const Ay=/;(?![^(]*\))/g,Ry=/:([^]+)/,ky=/\/\*.*?\*\//gs;function Ny(t){const e={};return t.replace(ky,"").split(Ay).forEach(n=>{if(n){const s=n.split(Ry);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ru(t){let e="";if(Re(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=ru(t[n]);s&&(e+=s+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Dy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Oy=nu(Dy);function id(t){return!!t||t===""}function Py(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=As(t[s],e[s]);return n}function As(t,e){if(t===e)return!0;let n=Bl(t),s=Bl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Nr(t),s=Nr(e),n||s)return t===e;if(n=q(t),s=q(e),n||s)return n&&s?Py(t,e):!1;if(n=fe(t),s=fe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!As(t[o],e[o]))return!1}}return String(t)===String(e)}function xy(t,e){return t.findIndex(n=>As(n,e))}const My=t=>Re(t)?t:t==null?"":q(t)||fe(t)&&(t.toString===cd||!J(t.toString))?JSON.stringify(t,od,2):String(t),od=(t,e)=>e&&e.__v_isRef?od(t,e.value):ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Lo(e)?{[`Set(${e.size})`]:[...e.values()]}:fe(e)&&!q(e)&&!ud(e)?String(e):e,de={},ms=[],vt=()=>{},Ly=()=>!1,Fy=/^on[^a-z]/,Mo=t=>Fy.test(t),iu=t=>t.startsWith("onUpdate:"),Xe=Object.assign,ou=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Uy=Object.prototype.hasOwnProperty,te=(t,e)=>Uy.call(t,e),q=Array.isArray,ys=t=>ti(t)==="[object Map]",Lo=t=>ti(t)==="[object Set]",Bl=t=>ti(t)==="[object Date]",J=t=>typeof t=="function",Re=t=>typeof t=="string",Nr=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",ad=t=>fe(t)&&J(t.then)&&J(t.catch),cd=Object.prototype.toString,ti=t=>cd.call(t),Vy=t=>ti(t).slice(8,-1),ud=t=>ti(t)==="[object Object]",au=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qi=nu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$y=/-(\w)/g,Ut=Fo(t=>t.replace($y,(e,n)=>n?n.toUpperCase():"")),By=/\B([A-Z])/g,qs=Fo(t=>t.replace(By,"-$1").toLowerCase()),Uo=Fo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ra=Fo(t=>t?`on${Uo(t)}`:""),Dr=(t,e)=>!Object.is(t,e),Hi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},so=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ro=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let jl;const jy=()=>jl||(jl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let gt;class qy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Hy(t,e=gt){e&&e.active&&e.effects.push(t)}function Ky(){return gt}const cu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ld=t=>(t.w&An)>0,hd=t=>(t.n&An)>0,zy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=An},Wy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];ld(r)&&!hd(r)?r.delete(t):e[n++]=r,r.w&=~An,r.n&=~An}e.length=n}},ic=new WeakMap;let hr=0,An=1;const oc=30;let mt;const Kn=Symbol(""),ac=Symbol("");class uu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hy(this,s)}run(){if(!this.active)return this.fn();let e=mt,n=En;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mt,mt=this,En=!0,An=1<<++hr,hr<=oc?zy(this):ql(this),this.fn()}finally{hr<=oc&&Wy(this),An=1<<--hr,mt=this.parent,En=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mt===this?this.deferStop=!0:this.active&&(ql(this),this.onStop&&this.onStop(),this.active=!1)}}function ql(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let En=!0;const fd=[];function Hs(){fd.push(En),En=!1}function Ks(){const t=fd.pop();En=t===void 0?!0:t}function rt(t,e,n){if(En&&mt){let s=ic.get(t);s||ic.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=cu()),dd(r)}}function dd(t,e){let n=!1;hr<=oc?hd(t)||(t.n|=An,n=!ld(t)):n=!t.has(mt),n&&(t.add(mt),mt.deps.push(t))}function Qt(t,e,n,s,r,i){const o=ic.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t)){const c=Number(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?au(n)&&a.push(o.get("length")):(a.push(o.get(Kn)),ys(t)&&a.push(o.get(ac)));break;case"delete":q(t)||(a.push(o.get(Kn)),ys(t)&&a.push(o.get(ac)));break;case"set":ys(t)&&a.push(o.get(Kn));break}if(a.length===1)a[0]&&cc(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);cc(cu(c))}}function cc(t,e){const n=q(t)?t:[...t];for(const s of n)s.computed&&Hl(s);for(const s of n)s.computed||Hl(s)}function Hl(t,e){(t!==mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Gy=nu("__proto__,__v_isRef,__isVue"),pd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nr)),Qy=lu(),Yy=lu(!1,!0),Jy=lu(!0),Kl=Xy();function Xy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let i=0,o=this.length;i<o;i++)rt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(re)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Hs();const s=re(this)[e].apply(this,n);return Ks(),s}}),t}function Zy(t){const e=re(this);return rt(e,"has",t),e.hasOwnProperty(t)}function lu(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?gv:wd:e?vd:yd).get(s))return s;const o=q(s);if(!t){if(o&&te(Kl,r))return Reflect.get(Kl,r,i);if(r==="hasOwnProperty")return Zy}const a=Reflect.get(s,r,i);return(Nr(r)?pd.has(r):Gy(r))||(t||rt(s,"get",r),e)?a:He(a)?o&&au(r)?a:a.value:fe(a)?t?_d(a):ni(a):a}}const ev=gd(),tv=gd(!0);function gd(t=!1){return function(n,s,r,i){let o=n[s];if(Rs(o)&&He(o)&&!He(r))return!1;if(!t&&(!io(r)&&!Rs(r)&&(o=re(o),r=re(r)),!q(n)&&He(o)&&!He(r)))return o.value=r,!0;const a=q(n)&&au(s)?Number(s)<n.length:te(n,s),c=Reflect.set(n,s,r,i);return n===re(i)&&(a?Dr(r,o)&&Qt(n,"set",s,r):Qt(n,"add",s,r)),c}}function nv(t,e){const n=te(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Qt(t,"delete",e,void 0),s}function sv(t,e){const n=Reflect.has(t,e);return(!Nr(e)||!pd.has(e))&&rt(t,"has",e),n}function rv(t){return rt(t,"iterate",q(t)?"length":Kn),Reflect.ownKeys(t)}const md={get:Qy,set:ev,deleteProperty:nv,has:sv,ownKeys:rv},iv={get:Jy,set(t,e){return!0},deleteProperty(t,e){return!0}},ov=Xe({},md,{get:Yy,set:tv}),hu=t=>t,Vo=t=>Reflect.getPrototypeOf(t);function Ai(t,e,n=!1,s=!1){t=t.__v_raw;const r=re(t),i=re(e);n||(e!==i&&rt(r,"get",e),rt(r,"get",i));const{has:o}=Vo(r),a=s?hu:n?pu:Or;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ri(t,e=!1){const n=this.__v_raw,s=re(n),r=re(t);return e||(t!==r&&rt(s,"has",t),rt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ki(t,e=!1){return t=t.__v_raw,!e&&rt(re(t),"iterate",Kn),Reflect.get(t,"size",t)}function zl(t){t=re(t);const e=re(this);return Vo(e).has.call(e,t)||(e.add(t),Qt(e,"add",t,t)),this}function Wl(t,e){e=re(e);const n=re(this),{has:s,get:r}=Vo(n);let i=s.call(n,t);i||(t=re(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Dr(e,o)&&Qt(n,"set",t,e):Qt(n,"add",t,e),this}function Gl(t){const e=re(this),{has:n,get:s}=Vo(e);let r=n.call(e,t);r||(t=re(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Qt(e,"delete",t,void 0),i}function Ql(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Qt(t,"clear",void 0,void 0),n}function Ni(t,e){return function(s,r){const i=this,o=i.__v_raw,a=re(o),c=e?hu:t?pu:Or;return!t&&rt(a,"iterate",Kn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function Di(t,e,n){return function(...s){const r=this.__v_raw,i=re(r),o=ys(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?hu:e?pu:Or;return!e&&rt(i,"iterate",c?ac:Kn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function an(t){return function(...e){return t==="delete"?!1:this}}function av(){const t={get(i){return Ai(this,i)},get size(){return ki(this)},has:Ri,add:zl,set:Wl,delete:Gl,clear:Ql,forEach:Ni(!1,!1)},e={get(i){return Ai(this,i,!1,!0)},get size(){return ki(this)},has:Ri,add:zl,set:Wl,delete:Gl,clear:Ql,forEach:Ni(!1,!0)},n={get(i){return Ai(this,i,!0)},get size(){return ki(this,!0)},has(i){return Ri.call(this,i,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:Ni(!0,!1)},s={get(i){return Ai(this,i,!0,!0)},get size(){return ki(this,!0)},has(i){return Ri.call(this,i,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:Ni(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Di(i,!1,!1),n[i]=Di(i,!0,!1),e[i]=Di(i,!1,!0),s[i]=Di(i,!0,!0)}),[t,n,e,s]}const[cv,uv,lv,hv]=av();function fu(t,e){const n=e?t?hv:lv:t?uv:cv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(te(n,r)&&r in s?n:s,r,i)}const fv={get:fu(!1,!1)},dv={get:fu(!1,!0)},pv={get:fu(!0,!1)},yd=new WeakMap,vd=new WeakMap,wd=new WeakMap,gv=new WeakMap;function mv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yv(t){return t.__v_skip||!Object.isExtensible(t)?0:mv(Vy(t))}function ni(t){return Rs(t)?t:du(t,!1,md,fv,yd)}function vv(t){return du(t,!1,ov,dv,vd)}function _d(t){return du(t,!0,iv,pv,wd)}function du(t,e,n,s,r){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=yv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function vs(t){return Rs(t)?vs(t.__v_raw):!!(t&&t.__v_isReactive)}function Rs(t){return!!(t&&t.__v_isReadonly)}function io(t){return!!(t&&t.__v_isShallow)}function Ed(t){return vs(t)||Rs(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Id(t){return so(t,"__v_skip",!0),t}const Or=t=>fe(t)?ni(t):t,pu=t=>fe(t)?_d(t):t;function Td(t){En&&mt&&(t=re(t),dd(t.dep||(t.dep=cu())))}function Sd(t,e){t=re(t);const n=t.dep;n&&cc(n)}function He(t){return!!(t&&t.__v_isRef===!0)}function uc(t){return bd(t,!1)}function wv(t){return bd(t,!0)}function bd(t,e){return He(t)?t:new _v(t,e)}class _v{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:Or(e)}get value(){return Td(this),this._value}set value(e){const n=this.__v_isShallow||io(e)||Rs(e);e=n?e:re(e),Dr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Or(e),Sd(this))}}function ws(t){return He(t)?t.value:t}const Ev={get:(t,e,n)=>ws(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return He(r)&&!He(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Cd(t){return vs(t)?t:new Proxy(t,Ev)}var Ad;class Iv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ad]=!1,this._dirty=!0,this.effect=new uu(e,()=>{this._dirty||(this._dirty=!0,Sd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=re(this);return Td(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ad="__v_isReadonly";function Tv(t,e,n=!1){let s,r;const i=J(t);return i?(s=t,r=vt):(s=t.get,r=t.set),new Iv(s,r,i||!r,n)}function In(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){$o(i,e,n)}return r}function wt(t,e,n,s){if(J(t)){const i=In(t,e,n,s);return i&&ad(i)&&i.catch(o=>{$o(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(wt(t[i],e,n,s));return r}function $o(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){In(c,null,10,[t,o,a]);return}}Sv(t,n,r,s)}function Sv(t,e,n,s=!0){console.error(t)}let Pr=!1,lc=!1;const je=[];let Ot=0;const _s=[];let qt=null,Vn=0;const Rd=Promise.resolve();let gu=null;function kd(t){const e=gu||Rd;return t?e.then(this?t.bind(this):t):e}function bv(t){let e=Ot+1,n=je.length;for(;e<n;){const s=e+n>>>1;xr(je[s])<t?e=s+1:n=s}return e}function mu(t){(!je.length||!je.includes(t,Pr&&t.allowRecurse?Ot+1:Ot))&&(t.id==null?je.push(t):je.splice(bv(t.id),0,t),Nd())}function Nd(){!Pr&&!lc&&(lc=!0,gu=Rd.then(Od))}function Cv(t){const e=je.indexOf(t);e>Ot&&je.splice(e,1)}function Av(t){q(t)?_s.push(...t):(!qt||!qt.includes(t,t.allowRecurse?Vn+1:Vn))&&_s.push(t),Nd()}function Yl(t,e=Pr?Ot+1:0){for(;e<je.length;e++){const n=je[e];n&&n.pre&&(je.splice(e,1),e--,n())}}function Dd(t){if(_s.length){const e=[...new Set(_s)];if(_s.length=0,qt){qt.push(...e);return}for(qt=e,qt.sort((n,s)=>xr(n)-xr(s)),Vn=0;Vn<qt.length;Vn++)qt[Vn]();qt=null,Vn=0}}const xr=t=>t.id==null?1/0:t.id,Rv=(t,e)=>{const n=xr(t)-xr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Od(t){lc=!1,Pr=!0,je.sort(Rv);const e=vt;try{for(Ot=0;Ot<je.length;Ot++){const n=je[Ot];n&&n.active!==!1&&In(n,null,14)}}finally{Ot=0,je.length=0,Dd(),Pr=!1,gu=null,(je.length||_s.length)&&Od()}}function kv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||de;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[l]||de;f&&(r=n.map(g=>Re(g)?g.trim():g)),h&&(r=n.map(ro))}let a,c=s[a=Ra(e)]||s[a=Ra(Ut(e))];!c&&i&&(c=s[a=Ra(qs(e))]),c&&wt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,wt(u,t,6,r)}}function Pd(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!J(t)){const c=u=>{const l=Pd(u,e,!0);l&&(a=!0,Xe(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(fe(t)&&s.set(t,null),null):(q(i)?i.forEach(c=>o[c]=null):Xe(o,i),fe(t)&&s.set(t,o),o)}function Bo(t,e){return!t||!Mo(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,qs(e))||te(t,e))}let dt=null,jo=null;function oo(t){const e=dt;return dt=t,jo=t&&t.type.__scopeId||null,e}function Nv(t){jo=t}function Dv(){jo=null}function ln(t,e=dt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ih(-1);const i=oo(e);let o;try{o=t(...r)}finally{oo(i),s._d&&ih(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ka(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:g,ctx:v,inheritAttrs:I}=t;let C,R;const L=oo(t);try{if(n.shapeFlag&4){const Q=r||s;C=Dt(l.call(Q,Q,h,i,g,f,v)),R=c}else{const Q=e;C=Dt(Q.length>1?Q(i,{attrs:c,slots:a,emit:u}):Q(i,null)),R=e.props?c:Ov(c)}}catch(Q){Er.length=0,$o(Q,t,1),C=Se(Qn)}let P=C;if(R&&I!==!1){const Q=Object.keys(R),{shapeFlag:me}=P;Q.length&&me&7&&(o&&Q.some(iu)&&(R=Pv(R,o)),P=ks(P,R))}return n.dirs&&(P=ks(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),C=P,oo(L),C}const Ov=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mo(n))&&((e||(e={}))[n]=t[n]);return e},Pv=(t,e)=>{const n={};for(const s in t)(!iu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function xv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Jl(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==s[f]&&!Bo(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Jl(s,o,u):!0:!!o;return!1}function Jl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Bo(n,i))return!0}return!1}function Mv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Lv=t=>t.__isSuspense;function Fv(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):Av(t)}function Ki(t,e){if(be){let n=be.provides;const s=be.parent&&be.parent.provides;s===n&&(n=be.provides=Object.create(s)),n[t]=e}}function _t(t,e,n=!1){const s=be||dt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&J(e)?e.call(s.proxy):e}}const Oi={};function zi(t,e,n){return xd(t,e,n)}function xd(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=de){const a=Ky()===(be==null?void 0:be.scope)?be:null;let c,u=!1,l=!1;if(He(t)?(c=()=>t.value,u=io(t)):vs(t)?(c=()=>t,s=!0):q(t)?(l=!0,u=t.some(P=>vs(P)||io(P)),c=()=>t.map(P=>{if(He(P))return P.value;if(vs(P))return Bn(P);if(J(P))return In(P,a,2)})):J(t)?e?c=()=>In(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),wt(t,a,3,[f])}:c=vt,e&&s){const P=c;c=()=>Bn(P())}let h,f=P=>{h=R.onStop=()=>{In(P,a,4)}},g;if(Lr)if(f=vt,e?n&&wt(e,a,3,[c(),l?[]:void 0,f]):c(),r==="sync"){const P=kw();g=P.__watcherHandles||(P.__watcherHandles=[])}else return vt;let v=l?new Array(t.length).fill(Oi):Oi;const I=()=>{if(R.active)if(e){const P=R.run();(s||u||(l?P.some((Q,me)=>Dr(Q,v[me])):Dr(P,v)))&&(h&&h(),wt(e,a,3,[P,v===Oi?void 0:l&&v[0]===Oi?[]:v,f]),v=P)}else R.run()};I.allowRecurse=!!e;let C;r==="sync"?C=I:r==="post"?C=()=>et(I,a&&a.suspense):(I.pre=!0,a&&(I.id=a.uid),C=()=>mu(I));const R=new uu(c,C);e?n?I():v=R.run():r==="post"?et(R.run.bind(R),a&&a.suspense):R.run();const L=()=>{R.stop(),a&&a.scope&&ou(a.scope.effects,R)};return g&&g.push(L),L}function Uv(t,e,n){const s=this.proxy,r=Re(t)?t.includes(".")?Md(s,t):()=>s[t]:t.bind(s,s);let i;J(e)?i=e:(i=e.handler,n=e);const o=be;Ns(this);const a=xd(r,i.bind(s),n);return o?Ns(o):zn(),a}function Md(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Bn(t,e){if(!fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),He(t))Bn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)Bn(t[n],e);else if(Lo(t)||ys(t))t.forEach(n=>{Bn(n,e)});else if(ud(t))for(const n in t)Bn(t[n],e);return t}function Ld(t){return J(t)?{setup:t,name:t.name}:t}const Wi=t=>!!t.type.__asyncLoader,Fd=t=>t.type.__isKeepAlive;function Vv(t,e){Ud(t,"a",e)}function $v(t,e){Ud(t,"da",e)}function Ud(t,e,n=be){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(qo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Fd(r.parent.vnode)&&Bv(s,e,n,r),r=r.parent}}function Bv(t,e,n,s){const r=qo(e,t,s,!0);$d(()=>{ou(s[e],r)},n)}function qo(t,e,n=be,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Hs(),Ns(n);const a=wt(e,n,t,o);return zn(),Ks(),a});return s?r.unshift(i):r.push(i),i}}const nn=t=>(e,n=be)=>(!Lr||t==="sp")&&qo(t,(...s)=>e(...s),n),jv=nn("bm"),Vd=nn("m"),qv=nn("bu"),Hv=nn("u"),Kv=nn("bum"),$d=nn("um"),zv=nn("sp"),Wv=nn("rtg"),Gv=nn("rtc");function Qv(t,e=be){qo("ec",t,e)}function r1(t,e){const n=dt;if(n===null)return t;const s=zo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=de]=e[i];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&Bn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Mn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Hs(),wt(c,n,8,[t.el,a,t,e]),Ks())}}const Bd="components";function jd(t,e){return Jv(Bd,t,!0,e)||t}const Yv=Symbol();function Jv(t,e,n=!0,s=!1){const r=dt||be;if(r){const i=r.type;if(t===Bd){const a=Cw(i,!1);if(a&&(a===e||a===Ut(e)||a===Uo(Ut(e))))return i}const o=Xl(r[t]||i[t],e)||Xl(r.appContext[t],e);return!o&&s?i:o}}function Xl(t,e){return t&&(t[e]||t[Ut(e)]||t[Uo(Ut(e))])}function i1(t,e,n,s){let r;const i=n&&n[s];if(q(t)||Re(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(fe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const hc=t=>t?Zd(t)?zo(t)||t.proxy:hc(t.parent):null,_r=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hc(t.parent),$root:t=>hc(t.root),$emit:t=>t.emit,$options:t=>yu(t),$forceUpdate:t=>t.f||(t.f=()=>mu(t.update)),$nextTick:t=>t.n||(t.n=kd.bind(t.proxy)),$watch:t=>Uv.bind(t)}),Na=(t,e)=>t!==de&&!t.__isScriptSetup&&te(t,e),Xv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Na(s,e))return o[e]=1,s[e];if(r!==de&&te(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&te(u,e))return o[e]=3,i[e];if(n!==de&&te(n,e))return o[e]=4,n[e];fc&&(o[e]=0)}}const l=_r[e];let h,f;if(l)return e==="$attrs"&&rt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==de&&te(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,te(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Na(r,e)?(r[e]=n,!0):s!==de&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==de&&te(t,o)||Na(e,o)||(a=i[0])&&te(a,o)||te(s,o)||te(_r,o)||te(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let fc=!0;function Zv(t){const e=yu(t),n=t.proxy,s=t.ctx;fc=!1,e.beforeCreate&&Zl(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:g,updated:v,activated:I,deactivated:C,beforeDestroy:R,beforeUnmount:L,destroyed:P,unmounted:Q,render:me,renderTracked:_e,renderTriggered:Fe,errorCaptured:it,serverPrefetch:ot,expose:lt,inheritAttrs:rn,components:xn,directives:Ct,filters:rr}=e;if(u&&ew(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const ie=o[le];J(ie)&&(s[le]=ie.bind(n))}if(r){const le=r.call(n,n);fe(le)&&(t.data=ni(le))}if(fc=!0,i)for(const le in i){const ie=i[le],$t=J(ie)?ie.bind(n,n):J(ie.get)?ie.get.bind(n,n):vt,on=!J(ie)&&J(ie.set)?ie.set.bind(n):vt,At=ht({get:$t,set:on});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>At.value,set:Ze=>At.value=Ze})}if(a)for(const le in a)qd(a[le],s,n,le);if(c){const le=J(c)?c.call(n):c;Reflect.ownKeys(le).forEach(ie=>{Ki(ie,le[ie])})}l&&Zl(l,t,"c");function ke(le,ie){q(ie)?ie.forEach($t=>le($t.bind(n))):ie&&le(ie.bind(n))}if(ke(jv,h),ke(Vd,f),ke(qv,g),ke(Hv,v),ke(Vv,I),ke($v,C),ke(Qv,it),ke(Gv,_e),ke(Wv,Fe),ke(Kv,L),ke($d,Q),ke(zv,ot),q(lt))if(lt.length){const le=t.exposed||(t.exposed={});lt.forEach(ie=>{Object.defineProperty(le,ie,{get:()=>n[ie],set:$t=>n[ie]=$t})})}else t.exposed||(t.exposed={});me&&t.render===vt&&(t.render=me),rn!=null&&(t.inheritAttrs=rn),xn&&(t.components=xn),Ct&&(t.directives=Ct)}function ew(t,e,n=vt,s=!1){q(t)&&(t=dc(t));for(const r in t){const i=t[r];let o;fe(i)?"default"in i?o=_t(i.from||r,i.default,!0):o=_t(i.from||r):o=_t(i),He(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Zl(t,e,n){wt(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function qd(t,e,n,s){const r=s.includes(".")?Md(n,s):()=>n[s];if(Re(t)){const i=e[t];J(i)&&zi(r,i)}else if(J(t))zi(r,t.bind(n));else if(fe(t))if(q(t))t.forEach(i=>qd(i,e,n,s));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&zi(r,i,t)}}function yu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>ao(c,u,o,!0)),ao(c,e,o)),fe(e)&&i.set(e,c),c}function ao(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ao(t,i,n,!0),r&&r.forEach(o=>ao(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=tw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const tw={data:eh,props:Fn,emits:Fn,methods:Fn,computed:Fn,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:Fn,directives:Fn,watch:sw,provide:eh,inject:nw};function eh(t,e){return e?t?function(){return Xe(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function nw(t,e){return Fn(dc(t),dc(e))}function dc(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ye(t,e){return t?[...new Set([].concat(t,e))]:e}function Fn(t,e){return t?Xe(Xe(Object.create(null),t),e):e}function sw(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const s in e)n[s]=Ye(t[s],e[s]);return n}function rw(t,e,n,s=!1){const r={},i={};so(i,Ko,1),t.propsDefaults=Object.create(null),Hd(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:vv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function iw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=re(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(Bo(t.emitsOptions,f))continue;const g=e[f];if(c)if(te(i,f))g!==i[f]&&(i[f]=g,u=!0);else{const v=Ut(f);r[v]=pc(c,a,v,g,t,!1)}else g!==i[f]&&(i[f]=g,u=!0)}}}else{Hd(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!te(e,h)&&((l=qs(h))===h||!te(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=pc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!te(e,h))&&(delete i[h],u=!0)}u&&Qt(t,"set","$attrs")}function Hd(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(qi(c))continue;const u=e[c];let l;r&&te(r,l=Ut(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Bo(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=re(n),u=a||de;for(let l=0;l<i.length;l++){const h=i[l];n[h]=pc(r,c,h,u[h],t,!te(u,h))}}return o}function pc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&J(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Ns(r),s=u[n]=c.call(null,e),zn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===qs(n))&&(s=!0))}return s}function Kd(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const l=h=>{c=!0;const[f,g]=Kd(h,e,!0);Xe(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return fe(t)&&s.set(t,ms),ms;if(q(i))for(let l=0;l<i.length;l++){const h=Ut(i[l]);th(h)&&(o[h]=de)}else if(i)for(const l in i){const h=Ut(l);if(th(h)){const f=i[l],g=o[h]=q(f)||J(f)?{type:f}:Object.assign({},f);if(g){const v=rh(Boolean,g.type),I=rh(String,g.type);g[0]=v>-1,g[1]=I<0||v<I,(v>-1||te(g,"default"))&&a.push(h)}}}const u=[o,a];return fe(t)&&s.set(t,u),u}function th(t){return t[0]!=="$"}function nh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function sh(t,e){return nh(t)===nh(e)}function rh(t,e){return q(e)?e.findIndex(n=>sh(n,t)):J(e)&&sh(e,t)?0:-1}const zd=t=>t[0]==="_"||t==="$stable",vu=t=>q(t)?t.map(Dt):[Dt(t)],ow=(t,e,n)=>{if(e._n)return e;const s=ln((...r)=>vu(e(...r)),n);return s._c=!1,s},Wd=(t,e,n)=>{const s=t._ctx;for(const r in t){if(zd(r))continue;const i=t[r];if(J(i))e[r]=ow(r,i,s);else if(i!=null){const o=vu(i);e[r]=()=>o}}},Gd=(t,e)=>{const n=vu(e);t.slots.default=()=>n},aw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),so(e,"_",n)):Wd(e,t.slots={})}else t.slots={},e&&Gd(t,e);so(t.slots,Ko,1)},cw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=de;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Xe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Wd(e,r)),o=e}else e&&(Gd(t,e),o={default:1});if(i)for(const a in r)!zd(a)&&!(a in o)&&delete r[a]};function Qd(){return{app:null,config:{isNativeTag:Ly,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uw=0;function lw(t,e){return function(s,r=null){J(s)||(s=Object.assign({},s)),r!=null&&!fe(r)&&(r=null);const i=Qd(),o=new Set;let a=!1;const c=i.app={_uid:uw++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Nw,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&J(u.install)?(o.add(u),u.install(c,...l)):J(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=Se(s,r);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,zo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function gc(t,e,n,s,r=!1){if(q(t)){t.forEach((f,g)=>gc(f,e&&(q(e)?e[g]:e),n,s,r));return}if(Wi(s)&&!r)return;const i=s.shapeFlag&4?zo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===de?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Re(u)?(l[u]=null,te(h,u)&&(h[u]=null)):He(u)&&(u.value=null)),J(c))In(c,a,12,[o,l]);else{const f=Re(c),g=He(c);if(f||g){const v=()=>{if(t.f){const I=f?te(h,c)?h[c]:l[c]:c.value;r?q(I)&&ou(I,i):q(I)?I.includes(i)||I.push(i):f?(l[c]=[i],te(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,te(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(v.id=-1,et(v,n)):v()}}}const et=Fv;function hw(t){return fw(t)}function fw(t,e){const n=jy();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:g=vt,insertStaticContent:v}=t,I=(d,p,m,y=null,E=null,T=null,O=!1,A=null,k=!!p.dynamicChildren)=>{if(d===p)return;d&&!or(d,p)&&(y=w(d),Ze(d,E,T,!0),d=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:S,ref:B,shapeFlag:F}=p;switch(S){case Ho:C(d,p,m,y);break;case Qn:R(d,p,m,y);break;case Da:d==null&&L(p,m,y,O);break;case Nt:xn(d,p,m,y,E,T,O,A,k);break;default:F&1?me(d,p,m,y,E,T,O,A,k):F&6?Ct(d,p,m,y,E,T,O,A,k):(F&64||F&128)&&S.process(d,p,m,y,E,T,O,A,k,N)}B!=null&&E&&gc(B,d&&d.ref,T,p||d,!p)},C=(d,p,m,y)=>{if(d==null)s(p.el=a(p.children),m,y);else{const E=p.el=d.el;p.children!==d.children&&u(E,p.children)}},R=(d,p,m,y)=>{d==null?s(p.el=c(p.children||""),m,y):p.el=d.el},L=(d,p,m,y)=>{[d.el,d.anchor]=v(d.children,p,m,y,d.el,d.anchor)},P=({el:d,anchor:p},m,y)=>{let E;for(;d&&d!==p;)E=f(d),s(d,m,y),d=E;s(p,m,y)},Q=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},me=(d,p,m,y,E,T,O,A,k)=>{O=O||p.type==="svg",d==null?_e(p,m,y,E,T,O,A,k):ot(d,p,E,T,O,A,k)},_e=(d,p,m,y,E,T,O,A)=>{let k,S;const{type:B,props:F,shapeFlag:j,transition:W,dirs:X}=d;if(k=d.el=o(d.type,T,F&&F.is,F),j&8?l(k,d.children):j&16&&it(d.children,k,null,y,E,T&&B!=="foreignObject",O,A),X&&Mn(d,null,y,"created"),Fe(k,d,d.scopeId,O,y),F){for(const ue in F)ue!=="value"&&!qi(ue)&&i(k,ue,null,F[ue],T,d.children,y,E,Ue);"value"in F&&i(k,"value",null,F.value),(S=F.onVnodeBeforeMount)&&kt(S,y,d)}X&&Mn(d,null,y,"beforeMount");const he=(!E||E&&!E.pendingBranch)&&W&&!W.persisted;he&&W.beforeEnter(k),s(k,p,m),((S=F&&F.onVnodeMounted)||he||X)&&et(()=>{S&&kt(S,y,d),he&&W.enter(k),X&&Mn(d,null,y,"mounted")},E)},Fe=(d,p,m,y,E)=>{if(m&&g(d,m),y)for(let T=0;T<y.length;T++)g(d,y[T]);if(E){let T=E.subTree;if(p===T){const O=E.vnode;Fe(d,O,O.scopeId,O.slotScopeIds,E.parent)}}},it=(d,p,m,y,E,T,O,A,k=0)=>{for(let S=k;S<d.length;S++){const B=d[S]=A?dn(d[S]):Dt(d[S]);I(null,B,p,m,y,E,T,O,A)}},ot=(d,p,m,y,E,T,O)=>{const A=p.el=d.el;let{patchFlag:k,dynamicChildren:S,dirs:B}=p;k|=d.patchFlag&16;const F=d.props||de,j=p.props||de;let W;m&&Ln(m,!1),(W=j.onVnodeBeforeUpdate)&&kt(W,m,p,d),B&&Mn(p,d,m,"beforeUpdate"),m&&Ln(m,!0);const X=E&&p.type!=="foreignObject";if(S?lt(d.dynamicChildren,S,A,m,y,X,T):O||ie(d,p,A,null,m,y,X,T,!1),k>0){if(k&16)rn(A,p,F,j,m,y,E);else if(k&2&&F.class!==j.class&&i(A,"class",null,j.class,E),k&4&&i(A,"style",F.style,j.style,E),k&8){const he=p.dynamicProps;for(let ue=0;ue<he.length;ue++){const Ee=he[ue],pt=F[Ee],us=j[Ee];(us!==pt||Ee==="value")&&i(A,Ee,pt,us,E,d.children,m,y,Ue)}}k&1&&d.children!==p.children&&l(A,p.children)}else!O&&S==null&&rn(A,p,F,j,m,y,E);((W=j.onVnodeUpdated)||B)&&et(()=>{W&&kt(W,m,p,d),B&&Mn(p,d,m,"updated")},y)},lt=(d,p,m,y,E,T,O)=>{for(let A=0;A<p.length;A++){const k=d[A],S=p[A],B=k.el&&(k.type===Nt||!or(k,S)||k.shapeFlag&70)?h(k.el):m;I(k,S,B,null,y,E,T,O,!0)}},rn=(d,p,m,y,E,T,O)=>{if(m!==y){if(m!==de)for(const A in m)!qi(A)&&!(A in y)&&i(d,A,m[A],null,O,p.children,E,T,Ue);for(const A in y){if(qi(A))continue;const k=y[A],S=m[A];k!==S&&A!=="value"&&i(d,A,S,k,O,p.children,E,T,Ue)}"value"in y&&i(d,"value",m.value,y.value)}},xn=(d,p,m,y,E,T,O,A,k)=>{const S=p.el=d?d.el:a(""),B=p.anchor=d?d.anchor:a("");let{patchFlag:F,dynamicChildren:j,slotScopeIds:W}=p;W&&(A=A?A.concat(W):W),d==null?(s(S,m,y),s(B,m,y),it(p.children,m,B,E,T,O,A,k)):F>0&&F&64&&j&&d.dynamicChildren?(lt(d.dynamicChildren,j,m,E,T,O,A),(p.key!=null||E&&p===E.subTree)&&Yd(d,p,!0)):ie(d,p,m,B,E,T,O,A,k)},Ct=(d,p,m,y,E,T,O,A,k)=>{p.slotScopeIds=A,d==null?p.shapeFlag&512?E.ctx.activate(p,m,y,O,k):rr(p,m,y,E,T,O,k):os(d,p,k)},rr=(d,p,m,y,E,T,O)=>{const A=d.component=Ew(d,y,E);if(Fd(d)&&(A.ctx.renderer=N),Iw(A),A.asyncDep){if(E&&E.registerDep(A,ke),!d.el){const k=A.subTree=Se(Qn);R(null,k,p,m)}return}ke(A,d,p,m,E,T,O)},os=(d,p,m)=>{const y=p.component=d.component;if(xv(d,p,m))if(y.asyncDep&&!y.asyncResolved){le(y,p,m);return}else y.next=p,Cv(y.update),y.update();else p.el=d.el,y.vnode=p},ke=(d,p,m,y,E,T,O)=>{const A=()=>{if(d.isMounted){let{next:B,bu:F,u:j,parent:W,vnode:X}=d,he=B,ue;Ln(d,!1),B?(B.el=X.el,le(d,B,O)):B=X,F&&Hi(F),(ue=B.props&&B.props.onVnodeBeforeUpdate)&&kt(ue,W,B,X),Ln(d,!0);const Ee=ka(d),pt=d.subTree;d.subTree=Ee,I(pt,Ee,h(pt.el),w(pt),d,E,T),B.el=Ee.el,he===null&&Mv(d,Ee.el),j&&et(j,E),(ue=B.props&&B.props.onVnodeUpdated)&&et(()=>kt(ue,W,B,X),E)}else{let B;const{el:F,props:j}=p,{bm:W,m:X,parent:he}=d,ue=Wi(p);if(Ln(d,!1),W&&Hi(W),!ue&&(B=j&&j.onVnodeBeforeMount)&&kt(B,he,p),Ln(d,!0),F&&oe){const Ee=()=>{d.subTree=ka(d),oe(F,d.subTree,d,E,null)};ue?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Ee()):Ee()}else{const Ee=d.subTree=ka(d);I(null,Ee,m,y,d,E,T),p.el=Ee.el}if(X&&et(X,E),!ue&&(B=j&&j.onVnodeMounted)){const Ee=p;et(()=>kt(B,he,Ee),E)}(p.shapeFlag&256||he&&Wi(he.vnode)&&he.vnode.shapeFlag&256)&&d.a&&et(d.a,E),d.isMounted=!0,p=m=y=null}},k=d.effect=new uu(A,()=>mu(S),d.scope),S=d.update=()=>k.run();S.id=d.uid,Ln(d,!0),S()},le=(d,p,m)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,iw(d,p.props,y,m),cw(d,p.children,m),Hs(),Yl(),Ks()},ie=(d,p,m,y,E,T,O,A,k=!1)=>{const S=d&&d.children,B=d?d.shapeFlag:0,F=p.children,{patchFlag:j,shapeFlag:W}=p;if(j>0){if(j&128){on(S,F,m,y,E,T,O,A,k);return}else if(j&256){$t(S,F,m,y,E,T,O,A,k);return}}W&8?(B&16&&Ue(S,E,T),F!==S&&l(m,F)):B&16?W&16?on(S,F,m,y,E,T,O,A,k):Ue(S,E,T,!0):(B&8&&l(m,""),W&16&&it(F,m,y,E,T,O,A,k))},$t=(d,p,m,y,E,T,O,A,k)=>{d=d||ms,p=p||ms;const S=d.length,B=p.length,F=Math.min(S,B);let j;for(j=0;j<F;j++){const W=p[j]=k?dn(p[j]):Dt(p[j]);I(d[j],W,m,null,E,T,O,A,k)}S>B?Ue(d,E,T,!0,!1,F):it(p,m,y,E,T,O,A,k,F)},on=(d,p,m,y,E,T,O,A,k)=>{let S=0;const B=p.length;let F=d.length-1,j=B-1;for(;S<=F&&S<=j;){const W=d[S],X=p[S]=k?dn(p[S]):Dt(p[S]);if(or(W,X))I(W,X,m,null,E,T,O,A,k);else break;S++}for(;S<=F&&S<=j;){const W=d[F],X=p[j]=k?dn(p[j]):Dt(p[j]);if(or(W,X))I(W,X,m,null,E,T,O,A,k);else break;F--,j--}if(S>F){if(S<=j){const W=j+1,X=W<B?p[W].el:y;for(;S<=j;)I(null,p[S]=k?dn(p[S]):Dt(p[S]),m,X,E,T,O,A,k),S++}}else if(S>j)for(;S<=F;)Ze(d[S],E,T,!0),S++;else{const W=S,X=S,he=new Map;for(S=X;S<=j;S++){const at=p[S]=k?dn(p[S]):Dt(p[S]);at.key!=null&&he.set(at.key,S)}let ue,Ee=0;const pt=j-X+1;let us=!1,Ul=0;const ir=new Array(pt);for(S=0;S<pt;S++)ir[S]=0;for(S=W;S<=F;S++){const at=d[S];if(Ee>=pt){Ze(at,E,T,!0);continue}let Rt;if(at.key!=null)Rt=he.get(at.key);else for(ue=X;ue<=j;ue++)if(ir[ue-X]===0&&or(at,p[ue])){Rt=ue;break}Rt===void 0?Ze(at,E,T,!0):(ir[Rt-X]=S+1,Rt>=Ul?Ul=Rt:us=!0,I(at,p[Rt],m,null,E,T,O,A,k),Ee++)}const Vl=us?dw(ir):ms;for(ue=Vl.length-1,S=pt-1;S>=0;S--){const at=X+S,Rt=p[at],$l=at+1<B?p[at+1].el:y;ir[S]===0?I(null,Rt,m,$l,E,T,O,A,k):us&&(ue<0||S!==Vl[ue]?At(Rt,m,$l,2):ue--)}}},At=(d,p,m,y,E=null)=>{const{el:T,type:O,transition:A,children:k,shapeFlag:S}=d;if(S&6){At(d.component.subTree,p,m,y);return}if(S&128){d.suspense.move(p,m,y);return}if(S&64){O.move(d,p,m,N);return}if(O===Nt){s(T,p,m);for(let F=0;F<k.length;F++)At(k[F],p,m,y);s(d.anchor,p,m);return}if(O===Da){P(d,p,m);return}if(y!==2&&S&1&&A)if(y===0)A.beforeEnter(T),s(T,p,m),et(()=>A.enter(T),E);else{const{leave:F,delayLeave:j,afterLeave:W}=A,X=()=>s(T,p,m),he=()=>{F(T,()=>{X(),W&&W()})};j?j(T,X,he):he()}else s(T,p,m)},Ze=(d,p,m,y=!1,E=!1)=>{const{type:T,props:O,ref:A,children:k,dynamicChildren:S,shapeFlag:B,patchFlag:F,dirs:j}=d;if(A!=null&&gc(A,null,m,d,!0),B&256){p.ctx.deactivate(d);return}const W=B&1&&j,X=!Wi(d);let he;if(X&&(he=O&&O.onVnodeBeforeUnmount)&&kt(he,p,d),B&6)Ci(d.component,m,y);else{if(B&128){d.suspense.unmount(m,y);return}W&&Mn(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,m,E,N,y):S&&(T!==Nt||F>0&&F&64)?Ue(S,p,m,!1,!0):(T===Nt&&F&384||!E&&B&16)&&Ue(k,p,m),y&&as(d)}(X&&(he=O&&O.onVnodeUnmounted)||W)&&et(()=>{he&&kt(he,p,d),W&&Mn(d,null,p,"unmounted")},m)},as=d=>{const{type:p,el:m,anchor:y,transition:E}=d;if(p===Nt){cs(m,y);return}if(p===Da){Q(d);return}const T=()=>{r(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:A}=E,k=()=>O(m,T);A?A(d.el,T,k):k()}else T()},cs=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},Ci=(d,p,m)=>{const{bum:y,scope:E,update:T,subTree:O,um:A}=d;y&&Hi(y),E.stop(),T&&(T.active=!1,Ze(O,d,p,m)),A&&et(A,p),et(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ue=(d,p,m,y=!1,E=!1,T=0)=>{for(let O=T;O<d.length;O++)Ze(d[O],p,m,y,E)},w=d=>d.shapeFlag&6?w(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),M=(d,p,m)=>{d==null?p._vnode&&Ze(p._vnode,null,null,!0):I(p._vnode||null,d,p,null,null,null,m),Yl(),Dd(),p._vnode=d},N={p:I,um:Ze,m:At,r:as,mt:rr,mc:it,pc:ie,pbc:lt,n:w,o:t};let V,oe;return e&&([V,oe]=e(N)),{render:M,hydrate:V,createApp:lw(M,V)}}function Ln({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Yd(t,e,n=!1){const s=t.children,r=e.children;if(q(s)&&q(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=dn(r[i]),a.el=o.el),n||Yd(o,a)),a.type===Ho&&(a.el=o.el)}}function dw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const pw=t=>t.__isTeleport,Nt=Symbol(void 0),Ho=Symbol(void 0),Qn=Symbol(void 0),Da=Symbol(void 0),Er=[];let yt=null;function fn(t=!1){Er.push(yt=t?null:[])}function gw(){Er.pop(),yt=Er[Er.length-1]||null}let Mr=1;function ih(t){Mr+=t}function Jd(t){return t.dynamicChildren=Mr>0?yt||ms:null,gw(),Mr>0&&yt&&yt.push(t),t}function fr(t,e,n,s,r,i){return Jd(tt(t,e,n,s,r,i,!0))}function mc(t,e,n,s,r){return Jd(Se(t,e,n,s,r,!0))}function yc(t){return t?t.__v_isVNode===!0:!1}function or(t,e){return t.type===e.type&&t.key===e.key}const Ko="__vInternal",Xd=({key:t})=>t??null,Gi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Re(t)||He(t)||J(t)?{i:dt,r:t,k:e,f:!!n}:t:null;function tt(t,e=null,n=null,s=0,r=null,i=t===Nt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xd(e),ref:e&&Gi(e),scopeId:jo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:dt};return a?(wu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Re(n)?8:16),Mr>0&&!o&&yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&yt.push(c),c}const Se=mw;function mw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Yv)&&(t=Qn),yc(t)){const a=ks(t,e,!0);return n&&wu(a,n),Mr>0&&!i&&yt&&(a.shapeFlag&6?yt[yt.indexOf(t)]=a:yt.push(a)),a.patchFlag|=-2,a}if(Aw(t)&&(t=t.__vccOpts),e){e=yw(e);let{class:a,style:c}=e;a&&!Re(a)&&(e.class=ru(a)),fe(c)&&(Ed(c)&&!q(c)&&(c=Xe({},c)),e.style=su(c))}const o=Re(t)?1:Lv(t)?128:pw(t)?64:fe(t)?4:J(t)?2:0;return tt(t,e,n,s,r,o,i,!0)}function yw(t){return t?Ed(t)||Ko in t?Xe({},t):t:null}function ks(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?vw(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Xd(a),ref:e&&e.ref?n&&r?q(r)?r.concat(Gi(e)):[r,Gi(e)]:Gi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Nt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ks(t.ssContent),ssFallback:t.ssFallback&&ks(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function hn(t=" ",e=0){return Se(Ho,null,t,e)}function ar(t="",e=!1){return e?(fn(),mc(Qn,null,t)):Se(Qn,null,t)}function Dt(t){return t==null||typeof t=="boolean"?Se(Qn):q(t)?Se(Nt,null,t.slice()):typeof t=="object"?dn(t):Se(Ho,null,String(t))}function dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ks(t)}function wu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),wu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ko in e)?e._ctx=dt:r===3&&dt&&(dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:dt},n=32):(e=String(e),s&64?(n=16,e=[hn(e)]):n=8);t.children=e,t.shapeFlag|=n}function vw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ru([e.class,s.class]));else if(r==="style")e.style=su([e.style,s.style]);else if(Mo(r)){const i=e[r],o=s[r];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function kt(t,e,n,s=null){wt(t,e,7,[n,s])}const ww=Qd();let _w=0;function Ew(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||ww,i={uid:_w++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new qy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kd(s,r),emitsOptions:Pd(s,r),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=kv.bind(null,i),t.ce&&t.ce(i),i}let be=null;const Ns=t=>{be=t,t.scope.on()},zn=()=>{be&&be.scope.off(),be=null};function Zd(t){return t.vnode.shapeFlag&4}let Lr=!1;function Iw(t,e=!1){Lr=e;const{props:n,children:s}=t.vnode,r=Zd(t);rw(t,n,r,e),aw(t,s);const i=r?Tw(t,e):void 0;return Lr=!1,i}function Tw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Id(new Proxy(t.ctx,Xv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?bw(t):null;Ns(t),Hs();const i=In(s,t,0,[t.props,r]);if(Ks(),zn(),ad(i)){if(i.then(zn,zn),e)return i.then(o=>{oh(t,o,e)}).catch(o=>{$o(o,t,0)});t.asyncDep=i}else oh(t,i,e)}else ep(t,e)}function oh(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=Cd(e)),ep(t,n)}let ah;function ep(t,e,n){const s=t.type;if(!t.render){if(!e&&ah&&!s.render){const r=s.template||yu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Xe(Xe({isCustomElement:i,delimiters:a},o),c);s.render=ah(r,u)}}t.render=s.render||vt}Ns(t),Hs(),Zv(t),Ks(),zn()}function Sw(t){return new Proxy(t.attrs,{get(e,n){return rt(t,"get","$attrs"),e[n]}})}function bw(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Sw(t))},slots:t.slots,emit:t.emit,expose:e}}function zo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Cd(Id(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _r)return _r[n](t)},has(e,n){return n in e||n in _r}}))}function Cw(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function Aw(t){return J(t)&&"__vccOpts"in t}const ht=(t,e)=>Tv(t,e,Lr);function tp(t,e,n){const s=arguments.length;return s===2?fe(e)&&!q(e)?yc(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&yc(n)&&(n=[n]),Se(t,e,n))}const Rw=Symbol(""),kw=()=>_t(Rw),Nw="3.2.47",Dw="http://www.w3.org/2000/svg",$n=typeof document<"u"?document:null,ch=$n&&$n.createElement("template"),Ow={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?$n.createElementNS(Dw,t):$n.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>$n.createTextNode(t),createComment:t=>$n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ch.innerHTML=s?`<svg>${t}</svg>`:t;const a=ch.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Pw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function xw(t,e,n){const s=t.style,r=Re(n);if(n&&!r){if(e&&!Re(e))for(const i in e)n[i]==null&&vc(s,i,"");for(const i in n)vc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const uh=/\s*!important$/;function vc(t,e,n){if(q(n))n.forEach(s=>vc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Mw(t,e);uh.test(n)?t.setProperty(qs(s),n.replace(uh,""),"important"):t[s]=n}}const lh=["Webkit","Moz","ms"],Oa={};function Mw(t,e){const n=Oa[e];if(n)return n;let s=Ut(e);if(s!=="filter"&&s in t)return Oa[e]=s;s=Uo(s);for(let r=0;r<lh.length;r++){const i=lh[r]+s;if(i in t)return Oa[e]=i}return e}const hh="http://www.w3.org/1999/xlink";function Lw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(hh,e.slice(6,e.length)):t.setAttributeNS(hh,e,n);else{const i=Oy(e);n==null||i&&!id(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Fw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=id(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function gn(t,e,n,s){t.addEventListener(e,n,s)}function Uw(t,e,n,s){t.removeEventListener(e,n,s)}function Vw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=$w(e);if(s){const u=i[e]=qw(s,r);gn(t,a,u,c)}else o&&(Uw(t,a,o,c),i[e]=void 0)}}const fh=/(?:Once|Passive|Capture)$/;function $w(t){let e;if(fh.test(t)){e={};let s;for(;s=t.match(fh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):qs(t.slice(2)),e]}let Pa=0;const Bw=Promise.resolve(),jw=()=>Pa||(Bw.then(()=>Pa=0),Pa=Date.now());function qw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;wt(Hw(s,n.value),e,5,[s])};return n.value=t,n.attached=jw(),n}function Hw(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const dh=/^on[a-z]/,Kw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Pw(t,s,r):e==="style"?xw(t,n,s):Mo(e)?iu(e)||Vw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zw(t,e,s,r))?Fw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Lw(t,e,s,r))};function zw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&dh.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||dh.test(e)&&Re(n)?!1:e in t}const Ds=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>Hi(e,n):e};function Ww(t){t.target.composing=!0}function ph(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const o1={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Ds(r);const i=s||r.props&&r.props.type==="number";gn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ro(a)),t._assign(a)}),n&&gn(t,"change",()=>{t.value=t.value.trim()}),e||(gn(t,"compositionstart",Ww),gn(t,"compositionend",ph),gn(t,"change",ph))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Ds(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&ro(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},a1={created(t,{value:e},n){t.checked=As(e,n.props.value),t._assign=Ds(n),gn(t,"change",()=>{t._assign(Fr(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Ds(s),e!==n&&(t.checked=As(e,s.props.value))}},c1={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Lo(e);gn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ro(Fr(o)):Fr(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Ds(s)},mounted(t,{value:e}){gh(t,e)},beforeUpdate(t,e,n){t._assign=Ds(n)},updated(t,{value:e}){gh(t,e)}};function gh(t,e){const n=t.multiple;if(!(n&&!q(e)&&!Lo(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Fr(i);if(n)q(e)?i.selected=xy(e,o)>-1:i.selected=e.has(o);else if(As(Fr(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Fr(t){return"_value"in t?t._value:t.value}const Gw=["ctrl","shift","alt","meta"],Qw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Gw.some(n=>t[`${n}Key`]&&!e.includes(n))},u1=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Qw[e[r]];if(i&&i(n,e))return}return t(n,...s)},Yw=Xe({patchProp:Kw},Ow);let mh;function Jw(){return mh||(mh=hw(Yw))}const Xw=(...t)=>{const e=Jw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Zw(s);if(!r)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Zw(t){return Re(t)?document.querySelector(t):t}/**
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
 */const np=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},e_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),s.push(n[l],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(np(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):e_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new t_;const f=i<<2|a>>4;if(s.push(f),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const v=u<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class t_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const n_=function(t){const e=np(t);return sp.encodeByteArray(e,!0)},co=function(t){return n_(t).replace(/\./g,"")},rp=function(t){try{return sp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function s_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const r_=()=>s_().__FIREBASE_DEFAULTS__,i_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},o_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rp(t[1]);return e&&JSON.parse(e)},_u=()=>{try{return r_()||i_()||o_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ip=t=>{var e,n;return(n=(e=_u())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},a_=t=>{const e=ip(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},op=()=>{var t;return(t=_u())===null||t===void 0?void 0:t.config},ap=t=>{var e;return(e=_u())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class c_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function u_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[co(JSON.stringify(n)),co(JSON.stringify(o)),a].join(".")}/**
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
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function l_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function h_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function f_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function d_(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function p_(){try{return typeof indexedDB=="object"}catch{return!1}}function g_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const m_="FirebaseError";class sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=m_,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?y_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new sn(r,a,s)}}function y_(t,e){return t.replace(v_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const v_=/\{\$([^}]+)}/g;function w_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(yh(i)&&yh(o)){if(!uo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function yh(t){return t!==null&&typeof t=="object"}/**
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
 */function ri(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function dr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function pr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function __(t,e){const n=new E_(t,e);return n.subscribe.bind(n)}class E_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");I_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=xa),r.error===void 0&&(r.error=xa),r.complete===void 0&&(r.complete=xa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function I_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xa(){}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class Yn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Un="[DEFAULT]";/**
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
 */class T_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new c_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(b_(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:S_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function S_(t){return t===Un?void 0:t}function b_(t){return t.instantiationMode==="EAGER"}/**
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
 */class C_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new T_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const A_={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},R_=ne.INFO,k_={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},N_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=k_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eu{constructor(e){this.name=e,this._logLevel=R_,this._logHandler=N_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?A_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const D_=(t,e)=>e.some(n=>t instanceof n);let vh,wh;function O_(){return vh||(vh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function P_(){return wh||(wh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cp=new WeakMap,wc=new WeakMap,up=new WeakMap,Ma=new WeakMap,Iu=new WeakMap;function x_(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cp.set(n,t)}).catch(()=>{}),Iu.set(e,t),e}function M_(t){if(wc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});wc.set(t,e)}let _c={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||up.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function L_(t){_c=t(_c)}function F_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(La(this),e,...n);return up.set(s,e.sort?e.sort():[e]),Tn(s)}:P_().includes(t)?function(...e){return t.apply(La(this),e),Tn(cp.get(this))}:function(...e){return Tn(t.apply(La(this),e))}}function U_(t){return typeof t=="function"?F_(t):(t instanceof IDBTransaction&&M_(t),D_(t,O_())?new Proxy(t,_c):t)}function Tn(t){if(t instanceof IDBRequest)return x_(t);if(Ma.has(t))return Ma.get(t);const e=U_(t);return e!==t&&(Ma.set(t,e),Iu.set(e,t)),e}const La=t=>Iu.get(t);function V_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Tn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Tn(o.result),c.oldVersion,c.newVersion,Tn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const $_=["get","getKey","getAll","getAllKeys","count"],B_=["put","add","delete","clear"],Fa=new Map;function _h(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fa.get(e))return Fa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=B_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||$_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Fa.set(e,i),i}L_(t=>({...t,get:(e,n,s)=>_h(e,n)||t.get(e,n,s),has:(e,n)=>!!_h(e,n)||t.has(e,n)}));/**
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
 */class j_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(q_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function q_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ec="@firebase/app",Eh="0.9.10";/**
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
 */const Jn=new Eu("@firebase/app"),H_="@firebase/app-compat",K_="@firebase/analytics-compat",z_="@firebase/analytics",W_="@firebase/app-check-compat",G_="@firebase/app-check",Q_="@firebase/auth",Y_="@firebase/auth-compat",J_="@firebase/database",X_="@firebase/database-compat",Z_="@firebase/functions",e0="@firebase/functions-compat",t0="@firebase/installations",n0="@firebase/installations-compat",s0="@firebase/messaging",r0="@firebase/messaging-compat",i0="@firebase/performance",o0="@firebase/performance-compat",a0="@firebase/remote-config",c0="@firebase/remote-config-compat",u0="@firebase/storage",l0="@firebase/storage-compat",h0="@firebase/firestore",f0="@firebase/firestore-compat",d0="firebase",p0="9.22.0";/**
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
 */const Ic="[DEFAULT]",g0={[Ec]:"fire-core",[H_]:"fire-core-compat",[z_]:"fire-analytics",[K_]:"fire-analytics-compat",[G_]:"fire-app-check",[W_]:"fire-app-check-compat",[Q_]:"fire-auth",[Y_]:"fire-auth-compat",[J_]:"fire-rtdb",[X_]:"fire-rtdb-compat",[Z_]:"fire-fn",[e0]:"fire-fn-compat",[t0]:"fire-iid",[n0]:"fire-iid-compat",[s0]:"fire-fcm",[r0]:"fire-fcm-compat",[i0]:"fire-perf",[o0]:"fire-perf-compat",[a0]:"fire-rc",[c0]:"fire-rc-compat",[u0]:"fire-gcs",[l0]:"fire-gcs-compat",[h0]:"fire-fst",[f0]:"fire-fst-compat","fire-js":"fire-js",[d0]:"fire-js-all"};/**
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
 */const lo=new Map,Tc=new Map;function m0(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Os(t){const e=t.name;if(Tc.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;Tc.set(e,t);for(const n of lo.values())m0(n,t);return!0}function Tu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const y0={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Sn=new si("app","Firebase",y0);/**
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
 */class v0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
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
 */const zs=p0;function lp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ic,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Sn.create("bad-app-name",{appName:String(r)});if(n||(n=op()),!n)throw Sn.create("no-options");const i=lo.get(r);if(i){if(uo(n,i.options)&&uo(s,i.config))return i;throw Sn.create("duplicate-app",{appName:r})}const o=new C_(r);for(const c of Tc.values())o.addComponent(c);const a=new v0(n,s,o);return lo.set(r,a),a}function hp(t=Ic){const e=lo.get(t);if(!e&&t===Ic&&op())return lp();if(!e)throw Sn.create("no-app",{appName:t});return e}function bn(t,e,n){var s;let r=(s=g0[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(a.join(" "));return}Os(new Yn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const w0="firebase-heartbeat-database",_0=1,Ur="firebase-heartbeat-store";let Ua=null;function fp(){return Ua||(Ua=V_(w0,_0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ur)}}}).catch(t=>{throw Sn.create("idb-open",{originalErrorMessage:t.message})})),Ua}async function E0(t){try{return await(await fp()).transaction(Ur).objectStore(Ur).get(dp(t))}catch(e){if(e instanceof sn)Jn.warn(e.message);else{const n=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(n.message)}}}async function Ih(t,e){try{const s=(await fp()).transaction(Ur,"readwrite");await s.objectStore(Ur).put(e,dp(t)),await s.done}catch(n){if(n instanceof sn)Jn.warn(n.message);else{const s=Sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jn.warn(s.message)}}}function dp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const I0=1024,T0=30*24*60*60*1e3;class S0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new C0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Th();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=T0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Th(),{heartbeatsToSend:n,unsentEntries:s}=b0(this._heartbeatsCache.heartbeats),r=co(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Th(){return new Date().toISOString().substring(0,10)}function b0(t,e=I0){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Sh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Sh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class C0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return p_()?g_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await E0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ih(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ih(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Sh(t){return co(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function A0(t){Os(new Yn("platform-logger",e=>new j_(e),"PRIVATE")),Os(new Yn("heartbeat",e=>new S0(e),"PRIVATE")),bn(Ec,Eh,t),bn(Ec,Eh,"esm2017"),bn("fire-js","")}A0("");function Su(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function pp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const R0=pp,gp=new si("auth","Firebase",pp());/**
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
 */const ho=new Eu("@firebase/auth");function k0(t,...e){ho.logLevel<=ne.WARN&&ho.warn(`Auth (${zs}): ${t}`,...e)}function Qi(t,...e){ho.logLevel<=ne.ERROR&&ho.error(`Auth (${zs}): ${t}`,...e)}/**
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
 */function It(t,...e){throw bu(t,...e)}function Mt(t,...e){return bu(t,...e)}function N0(t,e,n){const s=Object.assign(Object.assign({},R0()),{[e]:n});return new si("auth","Firebase",s).create(e,{appName:t.name})}function bu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return gp.create(t,...e)}function H(t,e,...n){if(!t)throw bu(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qi(e),new Error(e)}function Yt(t,e){t||Ht(e)}/**
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
 */function Sc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function D0(){return bh()==="http:"||bh()==="https:"}function bh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function O0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(D0()||h_()||"connection"in navigator)?navigator.onLine:!0}function P0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ii{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=l_()||f_()}get(){return O0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cu(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const x0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const M0=new ii(3e4,6e4);function Ws(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gs(t,e,n,s,r={}){return yp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ri(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),mp.fetch()(vp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function yp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},x0),e);try{const r=new L0(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Pi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Pi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Pi(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw N0(t,l,u);It(t,l)}}catch(r){if(r instanceof sn)throw r;It(t,"network-request-failed",{message:String(r)})}}async function oi(t,e,n,s,r={}){const i=await Gs(t,e,n,s,r);return"mfaPendingCredential"in i&&It(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Cu(t.config,r):`${t.config.apiScheme}://${r}`}class L0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Mt(this.auth,"network-request-failed")),M0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Mt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function F0(t,e){return Gs(t,"POST","/v1/accounts:delete",e)}async function U0(t,e){return Gs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ir(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function V0(t,e=!1){const n=De(t),s=await n.getIdToken(e),r=Au(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ir(Va(r.auth_time)),issuedAtTime:Ir(Va(r.iat)),expirationTime:Ir(Va(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Va(t){return Number(t)*1e3}function Au(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Qi("JWT malformed, contained fewer than 3 sections"),null;try{const r=rp(n);return r?JSON.parse(r):(Qi("Failed to decode base64 JWT payload"),null)}catch(r){return Qi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function $0(t){const e=Au(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof sn&&B0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function B0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class j0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ir(this.lastLoginAt),this.creationTime=Ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Vr(t,U0(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?K0(i.providerUserInfo):[],a=H0(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new wp(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function q0(t){const e=De(t);await fo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function H0(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function K0(t){return t.map(e=>{var{providerId:n}=e,s=Su(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function z0(t,e){const n=await yp(t,{},async()=>{const s=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=vp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await z0(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new $r;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
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
 */function cn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Su(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new j0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Vr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return V0(this,e)}reload(){return q0(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await fo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vr(this,F0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:P,emailVerified:Q,isAnonymous:me,providerData:_e,stsTokenManager:Fe}=n;H(P&&Fe,e,"internal-error");const it=$r.fromJSON(this.name,Fe);H(typeof P=="string",e,"internal-error"),cn(h,e.name),cn(f,e.name),H(typeof Q=="boolean",e,"internal-error"),H(typeof me=="boolean",e,"internal-error"),cn(g,e.name),cn(v,e.name),cn(I,e.name),cn(C,e.name),cn(R,e.name),cn(L,e.name);const ot=new Wn({uid:P,auth:e,email:f,emailVerified:Q,displayName:h,isAnonymous:me,photoURL:v,phoneNumber:g,tenantId:I,stsTokenManager:it,createdAt:R,lastLoginAt:L});return _e&&Array.isArray(_e)&&(ot.providerData=_e.map(lt=>Object.assign({},lt))),C&&(ot._redirectEventId=C),ot}static async _fromIdTokenResponse(e,n,s=!1){const r=new $r;r.updateFromServerResponse(n);const i=new Wn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await fo(i),i}}/**
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
 */const Ch=new Map;function Kt(t){Yt(t instanceof Function,"Expected a class definition");let e=Ch.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ch.set(t,e),e)}/**
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
 */class _p{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_p.type="NONE";const Ah=_p;/**
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
 */function Yi(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Yi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Yi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Es(Kt(Ah),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Kt(Ah);const o=Yi(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Wn._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Es(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Es(i,e,s))}}/**
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
 */function Rh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ep(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bp(e))return"Blackberry";if(Cp(e))return"Webos";if(Ru(e))return"Safari";if((e.includes("chrome/")||Ip(e))&&!e.includes("edge/"))return"Chrome";if(Sp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ep(t=Ge()){return/firefox\//i.test(t)}function Ru(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ip(t=Ge()){return/crios\//i.test(t)}function Tp(t=Ge()){return/iemobile/i.test(t)}function Sp(t=Ge()){return/android/i.test(t)}function bp(t=Ge()){return/blackberry/i.test(t)}function Cp(t=Ge()){return/webos/i.test(t)}function Wo(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function W0(t=Ge()){var e;return Wo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function G0(){return d_()&&document.documentMode===10}function Ap(t=Ge()){return Wo(t)||Sp(t)||Cp(t)||bp(t)||/windows phone/i.test(t)||Tp(t)}function Q0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Rp(t,e=[]){let n;switch(t){case"Browser":n=Rh(Ge());break;case"Worker":n=`${Rh(Ge())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zs}/${s}`}async function kp(t,e){return Gs(t,"GET","/v2/recaptchaConfig",Ws(t,e))}function kh(t){return t!==void 0&&t.enterprise!==void 0}class Np{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Y0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Dp(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Mt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Y0().appendChild(s)})}function J0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const X0="https://www.google.com/recaptcha/enterprise.js?render=",Z0="recaptcha-enterprise",eE="NO_RECAPTCHA";class Op{constructor(e){this.type=Z0,this.auth=Qs(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{kp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Np(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;kh(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(eE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&kh(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Dp(X0+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function po(t,e,n,s=!1){const r=new Op(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class tE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class nE{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nh(this),this.idTokenSubscription=new Nh(this),this.beforeStateQueue=new tE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=P0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?De(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}async initializeRecaptchaConfig(){const e=await kp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Np(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Op(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new si("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&k0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qs(t){return De(t)}class Nh{constructor(e){this.auth=e,this.observer=null,this.addObserver=__(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function sE(t,e){const n=Tu(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(uo(i,e??{}))return r;It(r,"already-initialized")}return n.initialize({options:e})}function rE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function iE(t,e,n){const s=Qs(t);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Pp(e),{host:o,port:a}=oE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||aE()}function Pp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oE(t){const e=Pp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Dh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Dh(o)}}}function Dh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ku{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}async function cE(t,e){return Gs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function $a(t,e){return oi(t,"POST","/v1/accounts:signInWithPassword",Ws(t,e))}/**
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
 */async function uE(t,e){return oi(t,"POST","/v1/accounts:signInWithEmailLink",Ws(t,e))}async function lE(t,e){return oi(t,"POST","/v1/accounts:signInWithEmailLink",Ws(t,e))}/**
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
 */class Br extends ku{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Br(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Br(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await po(e,s,"signInWithPassword");return $a(e,r)}else return $a(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await po(e,s,"signInWithPassword");return $a(e,i)}else return Promise.reject(r)});case"emailLink":return uE(e,{email:this._email,oobCode:this._password});default:It(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return cE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lE(e,{idToken:n,email:this._email,oobCode:this._password});default:It(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Is(t,e){return oi(t,"POST","/v1/accounts:signInWithIdp",Ws(t,e))}/**
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
 */const hE="http://localhost";class Xn extends ku{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):It("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Su(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Xn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Is(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Is(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Is(e,n)}buildRequest(){const e={requestUri:hE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ri(n)}return e}}/**
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
 */function fE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dE(t){const e=dr(pr(t)).link,n=e?dr(pr(e)).deep_link_id:null,s=dr(pr(t)).deep_link_id;return(s?dr(pr(s)).link:null)||s||n||e||t}class Nu{constructor(e){var n,s,r,i,o,a;const c=dr(pr(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=fE((r=c.mode)!==null&&r!==void 0?r:null);H(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=dE(e);try{return new Nu(n)}catch{return null}}}/**
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
 */class Ys{constructor(){this.providerId=Ys.PROVIDER_ID}static credential(e,n){return Br._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Nu.parseLink(n);return H(s,"argument-error"),Br._fromEmailAndCode(e,s.code,s.tenantId)}}Ys.PROVIDER_ID="password";Ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ai extends xp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mn extends ai{constructor(){super("facebook.com")}static credential(e){return Xn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
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
 */class yn extends ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return yn.credential(n,s)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
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
 */class vn extends ai{constructor(){super("github.com")}static credential(e){return Xn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
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
 */class wn extends ai{constructor(){super("twitter.com")}static credential(e,n){return Xn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return wn.credential(n,s)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
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
 */async function Ba(t,e){return oi(t,"POST","/v1/accounts:signUp",Ws(t,e))}/**
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
 */class Zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Wn._fromIdTokenResponse(e,s,r),o=Oh(s);return new Zn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Oh(s);return new Zn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Oh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class go extends sn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new go(e,n,s,r)}}function Mp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?go._fromErrorAndOperation(t,i,e,s):i})}async function pE(t,e,n=!1){const s=await Vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zn._forOperation(t,"link",s)}/**
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
 */async function gE(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Vr(t,Mp(s,r,e,t),n);H(i.idToken,s,"internal-error");const o=Au(i.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),Zn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&It(s,"user-mismatch"),i}}/**
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
 */async function Lp(t,e,n=!1){const s="signIn",r=await Mp(t,s,e),i=await Zn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function mE(t,e){return Lp(Qs(t),e)}async function l1(t,e,n){var s;const r=Qs(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const u=await po(r,i,"signUpPassword");o=Ba(r,u)}else o=Ba(r,i).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await po(r,i,"signUpPassword");return Ba(r,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await Zn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function h1(t,e,n){return mE(De(t),Ys.credential(e,n))}function yE(t,e,n,s){return De(t).onIdTokenChanged(e,n,s)}function vE(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function Fp(t,e,n,s){return De(t).onAuthStateChanged(e,n,s)}function wE(t){return De(t).signOut()}const mo="__sak";/**
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
 */class Up{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mo,"1"),this.storage.removeItem(mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _E(){const t=Ge();return Ru(t)||Wo(t)}const EE=1e3,IE=10;class Vp extends Up{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_E()&&Q0(),this.fallbackToPolling=Ap(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);G0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,IE):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},EE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vp.type="LOCAL";const TE=Vp;/**
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
 */class $p extends Up{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$p.type="SESSION";const Bp=$p;/**
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
 */function SE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Go{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Go(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await SE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Go.receivers=[];/**
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
 */function Du(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Du("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Lt(){return window}function CE(t){Lt().location.href=t}/**
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
 */function jp(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function AE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kE(){return jp()?self:null}/**
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
 */const qp="firebaseLocalStorageDb",NE=1,yo="firebaseLocalStorage",Hp="fbase_key";class ci{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qo(t,e){return t.transaction([yo],e?"readwrite":"readonly").objectStore(yo)}function DE(){const t=indexedDB.deleteDatabase(qp);return new ci(t).toPromise()}function bc(){const t=indexedDB.open(qp,NE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(yo,{keyPath:Hp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(yo)?e(s):(s.close(),await DE(),e(await bc()))})})}async function Ph(t,e,n){const s=Qo(t,!0).put({[Hp]:e,value:n});return new ci(s).toPromise()}async function OE(t,e){const n=Qo(t,!1).get(e),s=await new ci(n).toPromise();return s===void 0?null:s.value}function xh(t,e){const n=Qo(t,!0).delete(e);return new ci(n).toPromise()}const PE=800,xE=3;class Kp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>xE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Go._getInstance(kE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AE(),!this.activeServiceWorker)return;this.sender=new bE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bc();return await Ph(e,mo,"1"),await xh(e,mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ph(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>OE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Qo(r,!1).getAll();return new ci(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kp.type="LOCAL";const ME=Kp;new ii(3e4,6e4);/**
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
 */function LE(t,e){return e?Kt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ou extends ku{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FE(t){return Lp(t.auth,new Ou(t),t.bypassAuthState)}function UE(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),gE(n,new Ou(t),t.bypassAuthState)}async function VE(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),pE(n,new Ou(t),t.bypassAuthState)}/**
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
 */class zp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FE;case"linkViaPopup":case"linkViaRedirect":return VE;case"reauthViaPopup":case"reauthViaRedirect":return UE;default:It(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $E=new ii(2e3,1e4);class ps extends zp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=Du();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$E.get())};e()}}ps.currentPopupAction=null;/**
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
 */const BE="pendingRedirect",Ji=new Map;class jE extends zp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ji.get(this.auth._key());if(!e){try{const s=await qE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ji.set(this.auth._key(),e)}return this.bypassAuthState||Ji.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qE(t,e){const n=zE(e),s=KE(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function HE(t,e){Ji.set(t._key(),e)}function KE(t){return Kt(t._redirectPersistence)}function zE(t){return Yi(BE,t.config.apiKey,t.name)}async function WE(t,e,n=!1){const s=Qs(t),r=LE(s,e),o=await new jE(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const GE=10*60*1e3;class QE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Wp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mh(e))}saveEventToCache(e){this.cachedEventUids.add(Mh(e)),this.lastProcessedEventTime=Date.now()}}function Mh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wp(t);default:return!1}}/**
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
 */async function JE(t,e={}){return Gs(t,"GET","/v1/projects",e)}/**
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
 */const XE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZE=/^https?/;async function eI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JE(t);for(const n of e)try{if(tI(n))return}catch{}It(t,"unauthorized-domain")}function tI(t){const e=Sc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ZE.test(n))return!1;if(XE.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const nI=new ii(3e4,6e4);function Lh(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sI(t){return new Promise((e,n)=>{var s,r,i;function o(){Lh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lh(),n(Mt(t,"network-request-failed"))},timeout:nI.get()})}if(!((r=(s=Lt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Lt().gapi)===null||i===void 0)&&i.load)o();else{const a=J0("iframefcb");return Lt()[a]=()=>{gapi.load?o():n(Mt(t,"network-request-failed"))},Dp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Xi=null,e})}let Xi=null;function rI(t){return Xi=Xi||sI(t),Xi}/**
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
 */const iI=new ii(5e3,15e3),oI="__/auth/iframe",aI="emulator/auth/iframe",cI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lI(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cu(e,aI):`https://${t.config.authDomain}/${oI}`,s={apiKey:e.apiKey,appName:t.name,v:zs},r=uI.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ri(s).slice(1)}`}async function hI(t){const e=await rI(t),n=Lt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:lI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Mt(t,"network-request-failed"),a=Lt().setTimeout(()=>{i(o)},iI.get());function c(){Lt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const fI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dI=500,pI=600,gI="_blank",mI="http://localhost";class Fh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yI(t,e,n,s=dI,r=pI){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},fI),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Ge().toLowerCase();n&&(a=Ip(u)?gI:n),Ep(u)&&(e=e||mI,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[g,v])=>`${f}${g}=${v},`,"");if(W0(u)&&a!=="_self")return vI(e||"",a),new Fh(null);const h=window.open(e||"",a,l);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Fh(h)}function vI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const wI="__/auth/handler",_I="emulator/auth/handler",EI=encodeURIComponent("fac");async function Uh(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:zs,eventId:r};if(e instanceof xp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",w_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(i||{}))o[l]=h}if(e instanceof ai){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${EI}=${encodeURIComponent(c)}`:"";return`${II(t)}?${ri(a).slice(1)}${u}`}function II({config:t}){return t.emulator?Cu(t,_I):`https://${t.authDomain}/${wI}`}/**
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
 */const ja="webStorageSupport";class TI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bp,this._completeRedirectFn=WE,this._overrideRedirectResult=HE}async _openPopup(e,n,s,r){var i;Yt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Uh(e,n,s,Sc(),r);return yI(e,o,Du())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Uh(e,n,s,Sc(),r);return CE(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Yt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await hI(e),s=new QE(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ja,{type:ja},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ja];o!==void 0&&n(!!o),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ap()||Ru()||Wo()}}const SI=TI;var Vh="@firebase/auth",$h="0.23.2";/**
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
 */class bI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function AI(t){Os(new Yn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rp(t)},u=new nE(s,r,i,c);return rE(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Os(new Yn("auth-internal",e=>{const n=Qs(e.getProvider("auth").getImmediate());return(s=>new bI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(Vh,$h,CI(t)),bn(Vh,$h,"esm2017")}/**
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
 */const RI=5*60,kI=ap("authIdTokenMaxAge")||RI;let Bh=null;const NI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>kI)return;const r=n==null?void 0:n.token;Bh!==r&&(Bh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Gp(t=hp()){const e=Tu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sE(t,{popupRedirectResolver:SI,persistence:[ME,TE,Bp]}),s=ap("authTokenSyncURL");if(s){const i=NI(s);vE(n,i,()=>i(n.currentUser)),yE(n,o=>i(o))}const r=ip("auth");return r&&iE(n,`http://${r}`),n}AI("Browser");/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const hs=typeof window<"u";function DI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function qa(t,e){const n={};for(const s in e){const r=e[s];n[s]=Tt(r)?r.map(t):t(r)}return n}const Tr=()=>{},Tt=Array.isArray,OI=/\/$/,PI=t=>t.replace(OI,"");function Ha(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=FI(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function xI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function MI(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ps(e.matched[s],n.matched[r])&&Qp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ps(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Qp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!LI(t[n],e[n]))return!1;return!0}function LI(t,e){return Tt(t)?qh(t,e):Tt(e)?qh(e,t):t===e}function qh(t,e){return Tt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function FI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var jr;(function(t){t.pop="pop",t.push="push"})(jr||(jr={}));var Sr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Sr||(Sr={}));function UI(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),PI(t)}const VI=/^[^#]+#/;function $I(t,e){return t.replace(VI,"#")+e}function BI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Yo=()=>({left:window.pageXOffset,top:window.pageYOffset});function jI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=BI(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Hh(t,e){return(history.state?history.state.position-e:-1)+t}const Cc=new Map;function qI(t,e){Cc.set(t,e)}function HI(t){const e=Cc.get(t);return Cc.delete(t),e}let KI=()=>location.protocol+"//"+location.host;function Yp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),jh(c,"")}return jh(n,t)+s+r}function zI(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=Yp(t,location),v=n.value,I=e.value;let C=0;if(f){if(n.value=g,e.value=f,o&&o===v){o=null;return}C=I?f.position-I.position:0}else s(g);r.forEach(R=>{R(n.value,v,{delta:C,type:jr.pop,direction:C?C>0?Sr.forward:Sr.back:Sr.unknown})})};function c(){o=n.value}function u(f){r.push(f);const g=()=>{const v=r.indexOf(f);v>-1&&r.splice(v,1)};return i.push(g),g}function l(){const{history:f}=window;f.state&&f.replaceState(ae({},f.state,{scroll:Yo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:h}}function Kh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Yo():null}}function WI(t){const{history:e,location:n}=window,s={value:Yp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:KI()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](f)}}function o(c,u){const l=ae({},e.state,Kh(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=ae({},r.value,e.state,{forward:c,scroll:Yo()});i(l.current,l,!0);const h=ae({},Kh(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function GI(t){t=UI(t);const e=WI(t),n=zI(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ae({location:"",base:t,go:s,createHref:$I.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function QI(t){return typeof t=="string"||t&&typeof t=="object"}function Jp(t){return typeof t=="string"||typeof t=="symbol"}const un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xp=Symbol("");var zh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zh||(zh={}));function xs(t,e){return ae(new Error,{type:t,[Xp]:!0},e)}function Bt(t,e){return t instanceof Error&&Xp in t&&(e==null||!!(t.type&e))}const Wh="[^/]+?",YI={sensitive:!1,strict:!1,start:!0,end:!0},JI=/[.+*?^${}()[\]/\\]/g;function XI(t,e){const n=ae({},YI,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const f=u[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(JI,"\\$&"),g+=40;else if(f.type===1){const{value:v,repeatable:I,optional:C,regexp:R}=f;i.push({name:v,repeatable:I,optional:C});const L=R||Wh;if(L!==Wh){g+=10;try{new RegExp(`(${L})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${v}" (${L}): `+Q.message)}}let P=I?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(P=C&&u.length<2?`(?:/${P})`:"/"+P),C&&(P+="?"),r+=P,g+=20,C&&(g+=-8),I&&(g+=-20),L===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const g=l[f]||"",v=i[f-1];h[v.name]=g&&v.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of f)if(g.type===0)l+=g.value;else if(g.type===1){const{value:v,repeatable:I,optional:C}=g,R=v in u?u[v]:"";if(Tt(R)&&!I)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const L=Tt(R)?R.join("/"):R;if(!L)if(C)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);l+=L}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function ZI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function eT(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=ZI(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Gh(s))return 1;if(Gh(r))return-1}return r.length-s.length}function Gh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tT={type:0,value:""},nT=/[a-zA-Z0-9_]/;function sT(t){if(!t)return[[]];if(t==="/")return[[tT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:nT.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function rT(t,e,n){const s=XI(sT(t.path),n),r=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function iT(t,e){const n=[],s=new Map;e=Jh({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,f){const g=!f,v=oT(l);v.aliasOf=f&&f.record;const I=Jh(e,l),C=[v];if("alias"in l){const P=typeof l.alias=="string"?[l.alias]:l.alias;for(const Q of P)C.push(ae({},v,{components:f?f.record.components:v.components,path:Q,aliasOf:f?f.record:v}))}let R,L;for(const P of C){const{path:Q}=P;if(h&&Q[0]!=="/"){const me=h.record.path,_e=me[me.length-1]==="/"?"":"/";P.path=h.record.path+(Q&&_e+Q)}if(R=rT(P,h,I),f?f.alias.push(R):(L=L||R,L!==R&&L.alias.push(R),g&&l.name&&!Yh(R)&&o(l.name)),v.children){const me=v.children;for(let _e=0;_e<me.length;_e++)i(me[_e],R,f&&f.children[_e])}f=f||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return L?()=>{o(L)}:Tr}function o(l){if(Jp(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&eT(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Zp(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Yh(l)&&s.set(l.record.name,l)}function u(l,h){let f,g={},v,I;if("name"in l&&l.name){if(f=s.get(l.name),!f)throw xs(1,{location:l});I=f.record.name,g=ae(Qh(h.params,f.keys.filter(L=>!L.optional).map(L=>L.name)),l.params&&Qh(l.params,f.keys.map(L=>L.name))),v=f.stringify(g)}else if("path"in l)v=l.path,f=n.find(L=>L.re.test(v)),f&&(g=f.parse(v),I=f.record.name);else{if(f=h.name?s.get(h.name):n.find(L=>L.re.test(h.path)),!f)throw xs(1,{location:l,currentLocation:h});I=f.record.name,g=ae({},h.params,l.params),v=f.stringify(g)}const C=[];let R=f;for(;R;)C.unshift(R.record),R=R.parent;return{name:I,path:v,params:g,matched:C,meta:cT(C)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Qh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function oT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:aT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function aT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Yh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cT(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function Jh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Zp(t,e){return e.children.some(n=>n===t||Zp(t,n))}const eg=/#/g,uT=/&/g,lT=/\//g,hT=/=/g,fT=/\?/g,tg=/\+/g,dT=/%5B/g,pT=/%5D/g,ng=/%5E/g,gT=/%60/g,sg=/%7B/g,mT=/%7C/g,rg=/%7D/g,yT=/%20/g;function Pu(t){return encodeURI(""+t).replace(mT,"|").replace(dT,"[").replace(pT,"]")}function vT(t){return Pu(t).replace(sg,"{").replace(rg,"}").replace(ng,"^")}function Ac(t){return Pu(t).replace(tg,"%2B").replace(yT,"+").replace(eg,"%23").replace(uT,"%26").replace(gT,"`").replace(sg,"{").replace(rg,"}").replace(ng,"^")}function wT(t){return Ac(t).replace(hT,"%3D")}function _T(t){return Pu(t).replace(eg,"%23").replace(fT,"%3F")}function ET(t){return t==null?"":_T(t).replace(lT,"%2F")}function vo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function IT(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(tg," "),o=i.indexOf("="),a=vo(o<0?i:i.slice(0,o)),c=o<0?null:vo(i.slice(o+1));if(a in e){let u=e[a];Tt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Xh(t){let e="";for(let n in t){const s=t[n];if(n=wT(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Tt(s)?s.map(i=>i&&Ac(i)):[s&&Ac(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function TT(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Tt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const ST=Symbol(""),Zh=Symbol(""),Jo=Symbol(""),xu=Symbol(""),Rc=Symbol("");function cr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function pn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(xs(4,{from:n,to:e})):h instanceof Error?a(h):QI(h)?a(xs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Ka(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(bT(a)){const u=(a.__vccOpts||a)[e];u&&r.push(pn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=DI(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&pn(f,n,s,i,o)()}))}}return r}function bT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ef(t){const e=_t(Jo),n=_t(xu),s=ht(()=>e.resolve(ws(t.to))),r=ht(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(Ps.bind(null,l));if(f>-1)return f;const g=tf(c[u-2]);return u>1&&tf(l)===g&&h[h.length-1].path!==g?h.findIndex(Ps.bind(null,c[u-2])):f}),i=ht(()=>r.value>-1&&kT(n.params,s.value.params)),o=ht(()=>r.value>-1&&r.value===n.matched.length-1&&Qp(n.params,s.value.params));function a(c={}){return RT(c)?e[ws(t.replace)?"replace":"push"](ws(t.to)).catch(Tr):Promise.resolve()}return{route:s,href:ht(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const CT=Ld({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ef,setup(t,{slots:e}){const n=ni(ef(t)),{options:s}=_t(Jo),r=ht(()=>({[nf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[nf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:tp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),AT=CT;function RT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function kT(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Tt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function tf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const nf=(t,e,n)=>t??e??n,NT=Ld({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=_t(Rc),r=ht(()=>t.route||s.value),i=_t(Zh,0),o=ht(()=>{let u=ws(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=ht(()=>r.value.matched[o.value]);Ki(Zh,ht(()=>o.value+1)),Ki(ST,a),Ki(Rc,r);const c=uc();return zi(()=>[c.value,a.value,t.name],([u,l,h],[f,g,v])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===f&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!Ps(l,g)||!f)&&(l.enterCallbacks[h]||[]).forEach(I=>I(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,f=h&&h.components[l];if(!f)return sf(n.default,{Component:f,route:u});const g=h.props[l],v=g?g===!0?u.params:typeof g=="function"?g(u):g:null,C=tp(f,ae({},v,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return sf(n.default,{Component:C,route:u})||C}}});function sf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const DT=NT;function OT(t){const e=iT(t.routes,t),n=t.parseQuery||IT,s=t.stringifyQuery||Xh,r=t.history,i=cr(),o=cr(),a=cr(),c=wv(un);let u=un;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=qa.bind(null,w=>""+w),h=qa.bind(null,ET),f=qa.bind(null,vo);function g(w,M){let N,V;return Jp(w)?(N=e.getRecordMatcher(w),V=M):V=w,e.addRoute(V,N)}function v(w){const M=e.getRecordMatcher(w);M&&e.removeRoute(M)}function I(){return e.getRoutes().map(w=>w.record)}function C(w){return!!e.getRecordMatcher(w)}function R(w,M){if(M=ae({},M||c.value),typeof w=="string"){const m=Ha(n,w,M.path),y=e.resolve({path:m.path},M),E=r.createHref(m.fullPath);return ae(m,y,{params:f(y.params),hash:vo(m.hash),redirectedFrom:void 0,href:E})}let N;if("path"in w)N=ae({},w,{path:Ha(n,w.path,M.path).path});else{const m=ae({},w.params);for(const y in m)m[y]==null&&delete m[y];N=ae({},w,{params:h(m)}),M.params=h(M.params)}const V=e.resolve(N,M),oe=w.hash||"";V.params=l(f(V.params));const d=xI(s,ae({},w,{hash:vT(oe),path:V.path})),p=r.createHref(d);return ae({fullPath:d,hash:oe,query:s===Xh?TT(w.query):w.query||{}},V,{redirectedFrom:void 0,href:p})}function L(w){return typeof w=="string"?Ha(n,w,c.value.path):ae({},w)}function P(w,M){if(u!==w)return xs(8,{from:M,to:w})}function Q(w){return Fe(w)}function me(w){return Q(ae(L(w),{replace:!0}))}function _e(w){const M=w.matched[w.matched.length-1];if(M&&M.redirect){const{redirect:N}=M;let V=typeof N=="function"?N(w):N;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=L(V):{path:V},V.params={}),ae({query:w.query,hash:w.hash,params:"path"in V?{}:w.params},V)}}function Fe(w,M){const N=u=R(w),V=c.value,oe=w.state,d=w.force,p=w.replace===!0,m=_e(N);if(m)return Fe(ae(L(m),{state:typeof m=="object"?ae({},oe,m.state):oe,force:d,replace:p}),M||N);const y=N;y.redirectedFrom=M;let E;return!d&&MI(s,V,N)&&(E=xs(16,{to:y,from:V}),At(V,V,!0,!1)),(E?Promise.resolve(E):lt(y,V)).catch(T=>Bt(T)?Bt(T,2)?T:on(T):ie(T,y,V)).then(T=>{if(T){if(Bt(T,2))return Fe(ae({replace:p},L(T.to),{state:typeof T.to=="object"?ae({},oe,T.to.state):oe,force:d}),M||y)}else T=xn(y,V,!0,p,oe);return rn(y,V,T),T})}function it(w,M){const N=P(w,M);return N?Promise.reject(N):Promise.resolve()}function ot(w){const M=cs.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(w):w()}function lt(w,M){let N;const[V,oe,d]=PT(w,M);N=Ka(V.reverse(),"beforeRouteLeave",w,M);for(const m of V)m.leaveGuards.forEach(y=>{N.push(pn(y,w,M))});const p=it.bind(null,w,M);return N.push(p),Ue(N).then(()=>{N=[];for(const m of i.list())N.push(pn(m,w,M));return N.push(p),Ue(N)}).then(()=>{N=Ka(oe,"beforeRouteUpdate",w,M);for(const m of oe)m.updateGuards.forEach(y=>{N.push(pn(y,w,M))});return N.push(p),Ue(N)}).then(()=>{N=[];for(const m of w.matched)if(m.beforeEnter&&!M.matched.includes(m))if(Tt(m.beforeEnter))for(const y of m.beforeEnter)N.push(pn(y,w,M));else N.push(pn(m.beforeEnter,w,M));return N.push(p),Ue(N)}).then(()=>(w.matched.forEach(m=>m.enterCallbacks={}),N=Ka(d,"beforeRouteEnter",w,M),N.push(p),Ue(N))).then(()=>{N=[];for(const m of o.list())N.push(pn(m,w,M));return N.push(p),Ue(N)}).catch(m=>Bt(m,8)?m:Promise.reject(m))}function rn(w,M,N){for(const V of a.list())ot(()=>V(w,M,N))}function xn(w,M,N,V,oe){const d=P(w,M);if(d)return d;const p=M===un,m=hs?history.state:{};N&&(V||p?r.replace(w.fullPath,ae({scroll:p&&m&&m.scroll},oe)):r.push(w.fullPath,oe)),c.value=w,At(w,M,N,p),on()}let Ct;function rr(){Ct||(Ct=r.listen((w,M,N)=>{if(!Ci.listening)return;const V=R(w),oe=_e(V);if(oe){Fe(ae(oe,{replace:!0}),V).catch(Tr);return}u=V;const d=c.value;hs&&qI(Hh(d.fullPath,N.delta),Yo()),lt(V,d).catch(p=>Bt(p,12)?p:Bt(p,2)?(Fe(p.to,V).then(m=>{Bt(m,20)&&!N.delta&&N.type===jr.pop&&r.go(-1,!1)}).catch(Tr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),ie(p,V,d))).then(p=>{p=p||xn(V,d,!1),p&&(N.delta&&!Bt(p,8)?r.go(-N.delta,!1):N.type===jr.pop&&Bt(p,20)&&r.go(-1,!1)),rn(V,d,p)}).catch(Tr)}))}let os=cr(),ke=cr(),le;function ie(w,M,N){on(w);const V=ke.list();return V.length?V.forEach(oe=>oe(w,M,N)):console.error(w),Promise.reject(w)}function $t(){return le&&c.value!==un?Promise.resolve():new Promise((w,M)=>{os.add([w,M])})}function on(w){return le||(le=!w,rr(),os.list().forEach(([M,N])=>w?N(w):M()),os.reset()),w}function At(w,M,N,V){const{scrollBehavior:oe}=t;if(!hs||!oe)return Promise.resolve();const d=!N&&HI(Hh(w.fullPath,0))||(V||!N)&&history.state&&history.state.scroll||null;return kd().then(()=>oe(w,M,d)).then(p=>p&&jI(p)).catch(p=>ie(p,w,M))}const Ze=w=>r.go(w);let as;const cs=new Set,Ci={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,hasRoute:C,getRoutes:I,resolve:R,options:t,push:Q,replace:me,go:Ze,back:()=>Ze(-1),forward:()=>Ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ke.add,isReady:$t,install(w){const M=this;w.component("RouterLink",AT),w.component("RouterView",DT),w.config.globalProperties.$router=M,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>ws(c)}),hs&&!as&&c.value===un&&(as=!0,Q(r.location).catch(oe=>{}));const N={};for(const oe in un)N[oe]=ht(()=>c.value[oe]);w.provide(Jo,M),w.provide(xu,ni(N)),w.provide(Rc,c);const V=w.unmount;cs.add(w),w.unmount=function(){cs.delete(w),cs.size<1&&(u=un,Ct&&Ct(),Ct=null,c.value=un,as=!1,le=!1),V()}}};function Ue(w){return w.reduce((M,N)=>M.then(()=>ot(N)),Promise.resolve())}return Ci}function PT(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ps(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ps(u,c))||r.push(c))}return[n,s,r]}function xT(){return _t(Jo)}function f1(){return _t(xu)}var MT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Mu=Mu||{},z=MT||self;function wo(){}function Xo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ui(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function LT(t){return Object.prototype.hasOwnProperty.call(t,za)&&t[za]||(t[za]=++FT)}var za="closure_uid_"+(1e9*Math.random()>>>0),FT=0;function UT(t,e,n){return t.call.apply(t.bind,arguments)}function VT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ke(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ke=UT:Ke=VT,Ke.apply(null,arguments)}function xi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Pe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Dn(){this.s=this.s,this.o=this.o}var $T=0;Dn.prototype.s=!1;Dn.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),$T!=0)&&LT(this)};Dn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ig=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Lu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function rf(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Xo(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var BT=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",wo,e),z.removeEventListener("test",wo,e)}catch{}return t}();function _o(t){return/^[\s\xa0]*$/.test(t)}var of=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Wa(t,e){return t<e?-1:t>e?1:0}function Zo(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Pt(t){return Zo().indexOf(t)!=-1}function Fu(t){return Fu[" "](t),t}Fu[" "]=wo;function og(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var jT=Pt("Opera"),Ms=Pt("Trident")||Pt("MSIE"),ag=Pt("Edge"),kc=ag||Ms,cg=Pt("Gecko")&&!(Zo().toLowerCase().indexOf("webkit")!=-1&&!Pt("Edge"))&&!(Pt("Trident")||Pt("MSIE"))&&!Pt("Edge"),qT=Zo().toLowerCase().indexOf("webkit")!=-1&&!Pt("Edge");function ug(){var t=z.document;return t?t.documentMode:void 0}var Eo;e:{var Ga="",Qa=function(){var t=Zo();if(cg)return/rv:([^\);]+)(\)|;)/.exec(t);if(ag)return/Edge\/([\d\.]+)/.exec(t);if(Ms)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(qT)return/WebKit\/(\S+)/.exec(t);if(jT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qa&&(Ga=Qa?Qa[1]:""),Ms){var Ya=ug();if(Ya!=null&&Ya>parseFloat(Ga)){Eo=String(Ya);break e}}Eo=Ga}var HT={};function KT(){return og(HT,9,function(){let t=0;const e=of(String(Eo)).split("."),n=of("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Wa(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Wa(r[2].length==0,i[2].length==0)||Wa(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Nc;if(z.document&&Ms){var af=ug();Nc=af||parseInt(Eo,10)||void 0}else Nc=void 0;var zT=Nc;function qr(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(cg){e:{try{Fu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:WT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&qr.$.h.call(this)}}Pe(qr,ze);var WT={2:"touch",3:"pen",4:"mouse"};qr.prototype.h=function(){qr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var li="closure_listenable_"+(1e6*Math.random()|0),GT=0;function QT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++GT,this.fa=this.ia=!1}function ea(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Uu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function lg(t){const e={};for(const n in t)e[n]=t[n];return e}const cf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<cf.length;i++)n=cf[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ta(t){this.src=t,this.g={},this.h=0}ta.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Oc(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new QT(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Dc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=ig(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ea(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Oc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var Vu="closure_lm_"+(1e6*Math.random()|0),Ja={};function fg(t,e,n,s,r){if(s&&s.once)return pg(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)fg(t,e[i],n,s,r);return null}return n=ju(n),t&&t[li]?t.O(e,n,ui(s)?!!s.capture:!!s,r):dg(t,e,n,!1,s,r)}function dg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ui(r)?!!r.capture:!!r,a=Bu(t);if(a||(t[Vu]=a=new ta(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=YT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)BT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(mg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function YT(){function t(n){return e.call(t.src,t.listener,n)}const e=JT;return t}function pg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)pg(t,e[i],n,s,r);return null}return n=ju(n),t&&t[li]?t.P(e,n,ui(s)?!!s.capture:!!s,r):dg(t,e,n,!0,s,r)}function gg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)gg(t,e[i],n,s,r);else s=ui(s)?!!s.capture:!!s,n=ju(n),t&&t[li]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Oc(i,n,s,r),-1<n&&(ea(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Bu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Oc(e,n,s,r)),(n=-1<t?e[t]:null)&&$u(n))}function $u(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[li])Dc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(mg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Bu(e))?(Dc(n,t),n.h==0&&(n.src=null,e[Vu]=null)):ea(t)}}}function mg(t){return t in Ja?Ja[t]:Ja[t]="on"+t}function JT(t,e){if(t.fa)t=!0;else{e=new qr(e,this);var n=t.listener,s=t.la||t.src;t.ia&&$u(t),t=n.call(s,e)}return t}function Bu(t){return t=t[Vu],t instanceof ta?t:null}var Xa="__closure_events_fn_"+(1e9*Math.random()>>>0);function ju(t){return typeof t=="function"?t:(t[Xa]||(t[Xa]=function(e){return t.handleEvent(e)}),t[Xa])}function Oe(){Dn.call(this),this.i=new ta(this),this.S=this,this.J=null}Pe(Oe,Dn);Oe.prototype[li]=!0;Oe.prototype.removeEventListener=function(t,e,n,s){gg(this,t,e,n,s)};function Le(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var r=e;e=new ze(s,t),hg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Mi(o,s,!0,e)&&r}if(o=e.g=t,r=Mi(o,s,!0,e)&&r,r=Mi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Mi(o,s,!1,e)&&r}Oe.prototype.N=function(){if(Oe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ea(n[s]);delete t.g[e],t.h--}}this.J=null};Oe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Oe.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Mi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Dc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var qu=z.JSON.stringify;function XT(){var t=wg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ZT{constructor(){this.h=this.g=null}add(e,n){const s=yg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var yg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new eS,t=>t.reset());class eS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function tS(t){z.setTimeout(()=>{throw t},0)}function vg(t,e){Pc||nS(),xc||(Pc(),xc=!0),wg.add(t,e)}var Pc;function nS(){var t=z.Promise.resolve(void 0);Pc=function(){t.then(sS)}}var xc=!1,wg=new ZT;function sS(){for(var t;t=XT();){try{t.h.call(t.g)}catch(n){tS(n)}var e=yg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xc=!1}function na(t,e){Oe.call(this),this.h=t||1,this.g=e||z,this.j=Ke(this.qb,this),this.l=Date.now()}Pe(na,Oe);D=na.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Le(this,"tick"),this.ga&&(Hu(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Hu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){na.$.N.call(this),Hu(this),delete this.g};function Ku(t,e,n){if(typeof t=="function")n&&(t=Ke(t,n));else if(t&&typeof t.handleEvent=="function")t=Ke(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function _g(t){t.g=Ku(()=>{t.g=null,t.i&&(t.i=!1,_g(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class rS extends Dn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_g(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hr(t){Dn.call(this),this.h=t,this.g={}}Pe(Hr,Dn);var uf=[];function Eg(t,e,n,s){Array.isArray(n)||(n&&(uf[0]=n.toString()),n=uf);for(var r=0;r<n.length;r++){var i=fg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ig(t){Uu(t.g,function(e,n){this.g.hasOwnProperty(n)&&$u(e)},t),t.g={}}Hr.prototype.N=function(){Hr.$.N.call(this),Ig(this)};Hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sa(){this.g=!0}sa.prototype.Ea=function(){this.g=!1};function iS(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function oS(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function gs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+cS(t,n)+(s?" "+s:"")})}function aS(t,e){t.info(function(){return"TIMEOUT: "+e})}sa.prototype.info=function(){};function cS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return qu(n)}catch{return e}}var ss={},lf=null;function ra(){return lf=lf||new Oe}ss.Ta="serverreachability";function Tg(t){ze.call(this,ss.Ta,t)}Pe(Tg,ze);function Kr(t){const e=ra();Le(e,new Tg(e))}ss.STAT_EVENT="statevent";function Sg(t,e){ze.call(this,ss.STAT_EVENT,t),this.stat=e}Pe(Sg,ze);function Je(t){const e=ra();Le(e,new Sg(e,t))}ss.Ua="timingevent";function bg(t,e){ze.call(this,ss.Ua,t),this.size=e}Pe(bg,ze);function hi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var ia={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Cg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zu(){}zu.prototype.h=null;function hf(t){return t.h||(t.h=t.i())}function Ag(){}var fi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wu(){ze.call(this,"d")}Pe(Wu,ze);function Gu(){ze.call(this,"c")}Pe(Gu,ze);var Mc;function oa(){}Pe(oa,zu);oa.prototype.g=function(){return new XMLHttpRequest};oa.prototype.i=function(){return{}};Mc=new oa;function di(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Hr(this),this.P=uS,t=kc?125:void 0,this.V=new na(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Rg}function Rg(){this.i=null,this.g="",this.h=!1}var uS=45e3,Lc={},Io={};D=di.prototype;D.setTimeout=function(t){this.P=t};function Fc(t,e,n){t.L=1,t.v=ca(Jt(e)),t.s=n,t.S=!0,kg(t,null)}function kg(t,e){t.G=Date.now(),pi(t),t.A=Jt(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Fg(n.i,"t",s),t.C=0,n=t.l.I,t.h=new Rg,t.g=rm(t.l,n?e:null,!t.s),0<t.O&&(t.M=new rS(Ke(t.Pa,t,t.g),t.O)),Eg(t.U,t.g,"readystatechange",t.nb),e=t.I?lg(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Kr(),iS(t.j,t.u,t.A,t.m,t.W,t.s)}D.nb=function(t){t=t.target;const e=this.M;e&&zt(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const l=zt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||kc||this.g&&(this.h.h||this.g.ja()||gf(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Kr(3):Kr(2)),aa(this);var n=this.g.da();this.aa=n;t:if(Ng(this)){var s=gf(this.g);t="";var r=s.length,i=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jn(this),br(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,oS(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_o(a)){var u=a;break t}}u=null}if(n=u)gs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Uc(this,n);else{this.i=!1,this.o=3,Je(12),jn(this),br(this);break e}}this.S?(Dg(this,l,o),kc&&this.i&&l==3&&(Eg(this.U,this.V,"tick",this.mb),this.V.start())):(gs(this.j,this.m,o,null),Uc(this,o)),l==4&&jn(this),this.i&&!this.J&&(l==4?em(this.l,this):(this.i=!1,pi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Je(12)):(this.o=0,Je(13)),jn(this),br(this)}}}catch{}finally{}};function Ng(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Dg(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=lS(t,n),r==Io){e==4&&(t.o=4,Je(14),s=!1),gs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Lc){t.o=4,Je(15),gs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else gs(t.j,t.m,r,null),Uc(t,r);Ng(t)&&r!=Io&&r!=Lc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Je(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),tl(e),e.L=!0,Je(11))):(gs(t.j,t.m,n,"[Invalid Chunked Response]"),jn(t),br(t))}D.mb=function(){if(this.g){var t=zt(this.g),e=this.g.ja();this.C<e.length&&(aa(this),Dg(this,t,e),this.i&&t!=4&&pi(this))}};function lS(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Io:(n=Number(e.substring(n,s)),isNaN(n)?Lc:(s+=1,s+n>e.length?Io:(e=e.substr(s,n),t.C=s+n,e)))}D.cancel=function(){this.J=!0,jn(this)};function pi(t){t.Y=Date.now()+t.P,Og(t,t.P)}function Og(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=hi(Ke(t.lb,t),e)}function aa(t){t.B&&(z.clearTimeout(t.B),t.B=null)}D.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(aS(this.j,this.A),this.L!=2&&(Kr(),Je(17)),jn(this),this.o=2,br(this)):Og(this,this.Y-t)};function br(t){t.l.H==0||t.J||em(t.l,t)}function jn(t){aa(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Hu(t.V),Ig(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Uc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Vc(n.h,t))){if(!t.K&&Vc(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)bo(n),ha(n);else break e;el(n),Je(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=hi(Ke(n.ib,n),6e3));if(1>=$g(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else qn(n,11)}else if((t.K||n.g==t)&&bo(n),!_o(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const l=u[3];l!=null&&(n.qa=l,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.h;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Qu(i,i.h),i.h=null))}if(s.F){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.Da=I,ye(s.G,s.F,I))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=sm(s,s.I?s.oa:null,s.Y),o.K){Bg(s.h,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(aa(a),pi(a)),s.g=o}else Xg(s);0<n.i.length&&fa(n)}else u[0]!="stop"&&u[0]!="close"||qn(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?qn(n,7):Zu(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}Kr(4)}catch{}}function hS(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Xo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function fS(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Xo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Pg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=fS(t),s=hS(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var xg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Gn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gn){this.h=e!==void 0?e:t.h,To(this,t.j),this.s=t.s,this.g=t.g,So(this,t.m),this.l=t.l,e=t.i;var n=new zr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ff(this,n),this.o=t.o}else t&&(n=String(t).match(xg))?(this.h=!!e,To(this,n[1]||"",!0),this.s=gr(n[2]||""),this.g=gr(n[3]||"",!0),So(this,n[4]),this.l=gr(n[5]||"",!0),ff(this,n[6]||"",!0),this.o=gr(n[7]||"")):(this.h=!!e,this.i=new zr(null,this.h))}Gn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(mr(e,df,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(mr(e,df,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(mr(n,n.charAt(0)=="/"?mS:gS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",mr(n,vS)),t.join("")};function Jt(t){return new Gn(t)}function To(t,e,n){t.j=n?gr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function So(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ff(t,e,n){e instanceof zr?(t.i=e,wS(t.i,t.h)):(n||(e=mr(e,yS)),t.i=new zr(e,t.h))}function ye(t,e,n){t.i.set(e,n)}function ca(t){return ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function gr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function mr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,pS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function pS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var df=/[#\/\?@]/g,gS=/[#\?:]/g,mS=/[#\?]/g,yS=/[#\?@]/g,vS=/#/g;function zr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function On(t){t.g||(t.g=new Map,t.h=0,t.i&&dS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=zr.prototype;D.add=function(t,e){On(this),this.i=null,t=Js(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Mg(t,e){On(t),e=Js(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Lg(t,e){return On(t),e=Js(t,e),t.g.has(e)}D.forEach=function(t,e){On(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};D.sa=function(){On(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};D.Z=function(t){On(this);let e=[];if(typeof t=="string")Lg(this,t)&&(e=e.concat(this.g.get(Js(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return On(this),this.i=null,t=Js(this,t),Lg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Fg(t,e,n){Mg(t,e),0<n.length&&(t.i=null,t.g.set(Js(t,e),Lu(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Js(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wS(t,e){e&&!t.j&&(On(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Mg(this,s),Fg(this,r,n))},t)),t.j=e}var _S=class{constructor(t,e){this.h=t,this.g=e}};function Ug(t){this.l=t||ES,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ES=10;function Vg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $g(t){return t.h?1:t.g?t.g.size:0}function Vc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Qu(t,e){t.g?t.g.add(e):t.h=e}function Bg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ug.prototype.cancel=function(){if(this.i=jg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function jg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Lu(t.i)}function Yu(){}Yu.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};Yu.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function IS(){this.g=new Yu}function TS(t,e,n){const s=n||"";try{Pg(t,function(r,i){let o=r;ui(r)&&(o=qu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function SS(t,e){const n=new sa;if(z.Image){const s=new Image;s.onload=xi(Li,n,s,"TestLoadImage: loaded",!0,e),s.onerror=xi(Li,n,s,"TestLoadImage: error",!1,e),s.onabort=xi(Li,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=xi(Li,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Li(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function gi(t){this.l=t.fc||null,this.j=t.ob||!1}Pe(gi,zu);gi.prototype.g=function(){return new ua(this.l,this.j)};gi.prototype.i=function(t){return function(){return t}}({});function ua(t,e){Oe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ju,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pe(ua,Oe);var Ju=0;D=ua.prototype;D.open=function(t,e){if(this.readyState!=Ju)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Wr(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mi(this)),this.readyState=Ju};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Wr(this)),this.g&&(this.readyState=3,Wr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function qg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?mi(this):Wr(this),this.readyState==3&&qg(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,mi(this))};D.Ya=function(t){this.g&&(this.response=t,mi(this))};D.ka=function(){this.g&&mi(this)};function mi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Wr(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Wr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var bS=z.JSON.parse;function we(t){Oe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Hg,this.L=this.M=!1}Pe(we,Oe);var Hg="",CS=/^https?$/i,AS=["POST","PUT"];D=we.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Mc.g(),this.C=this.u?hf(this.u):hf(Mc),this.g.onreadystatechange=Ke(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){pf(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=ig(AS,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Wg(this),0<this.B&&((this.L=RS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ke(this.ua,this)):this.A=Ku(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){pf(this,i)}};function RS(t){return Ms&&KT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof Mu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Le(this,"timeout"),this.abort(8))};function pf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Kg(t),la(t)}function Kg(t){t.F||(t.F=!0,Le(t,"complete"),Le(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Le(this,"complete"),Le(this,"abort"),la(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),la(this,!0)),we.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?zg(this):this.kb())};D.kb=function(){zg(this)};function zg(t){if(t.h&&typeof Mu<"u"&&(!t.C[1]||zt(t)!=4||t.da()!=2)){if(t.v&&zt(t)==4)Ku(t.La,0,t);else if(Le(t,"readystatechange"),zt(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.I).match(xg)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!CS.test(r?r.toLowerCase():"")}n=s}if(n)Le(t,"complete"),Le(t,"success");else{t.m=6;try{var o=2<zt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",Kg(t)}}finally{la(t)}}}}function la(t,e){if(t.g){Wg(t);const n=t.g,s=t.C[0]?wo:null;t.g=null,t.C=null,e||Le(t,"ready");try{n.onreadystatechange=s}catch{}}}function Wg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function zt(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),bS(e)}};function gf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Hg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Gg(t){let e="";return Uu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Xu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Gg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ye(t,e,n))}function ur(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qg(t){this.Ga=0,this.i=[],this.j=new sa,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ur("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ur("baseRetryDelayMs",5e3,t),this.hb=ur("retryDelaySeedMs",1e4,t),this.eb=ur("forwardChannelMaxRetries",2,t),this.xa=ur("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new Ug(t&&t.concurrentRequestLimit),this.Ja=new IS,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}D=Qg.prototype;D.qa=8;D.H=1;function Zu(t){if(Yg(t),t.H==3){var e=t.W++,n=Jt(t.G);ye(n,"SID",t.J),ye(n,"RID",e),ye(n,"TYPE","terminate"),yi(t,n),e=new di(t,t.j,e,void 0),e.L=2,e.v=ca(Jt(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=rm(e.l,null),e.g.ha(e.v)),e.G=Date.now(),pi(e)}nm(t)}function ha(t){t.g&&(tl(t),t.g.cancel(),t.g=null)}function Yg(t){ha(t),t.u&&(z.clearTimeout(t.u),t.u=null),bo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function fa(t){Vg(t.h)||t.m||(t.m=!0,vg(t.Na,t),t.C=0)}function kS(t,e){return $g(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=hi(Ke(t.Na,t,e),tm(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new di(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=lg(i),hg(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Jg(this,r,e),n=Jt(this.G),ye(n,"RID",t),ye(n,"CVER",22),this.F&&ye(n,"X-HTTP-Session-Id",this.F),yi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Gg(i)))+"&"+e:this.o&&Xu(n,this.o,i)),Qu(this.h,r),this.bb&&ye(n,"TYPE","init"),this.P?(ye(n,"$req",e),ye(n,"SID","null"),r.ba=!0,Fc(r,n,null)):Fc(r,n,e),this.H=2}}else this.H==3&&(t?mf(this,t):this.i.length==0||Vg(this.h)||mf(this))};function mf(t,e){var n;e?n=e.m:n=t.W++;const s=Jt(t.G);ye(s,"SID",t.J),ye(s,"RID",n),ye(s,"AID",t.V),yi(t,s),t.o&&t.s&&Xu(s,t.o,t.s),n=new di(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=Jg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Qu(t.h,n),Fc(n,s,e)}function yi(t,e){t.ma&&Uu(t.ma,function(n,s){ye(e,s,n)}),t.l&&Pg({},function(n,s){ye(e,s,n)})}function Jg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ke(t.l.Va,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{TS(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function Xg(t){t.g||t.u||(t.ba=1,vg(t.Ma,t),t.A=0)}function el(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=hi(Ke(t.Ma,t),tm(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,Zg(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=hi(Ke(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Je(10),ha(this),Zg(this))};function tl(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Zg(t){t.g=new di(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Jt(t.wa);ye(e,"RID","rpc"),ye(e,"SID",t.J),ye(e,"CI",t.M?"0":"1"),ye(e,"AID",t.V),ye(e,"TYPE","xmlhttp"),yi(t,e),t.o&&t.s&&Xu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=ca(Jt(e)),n.s=null,n.S=!0,kg(n,t)}D.ib=function(){this.v!=null&&(this.v=null,ha(this),el(this),Je(19))};function bo(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function em(t,e){var n=null;if(t.g==e){bo(t),tl(t),t.g=null;var s=2}else if(Vc(t.h,e))n=e.F,Bg(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=ra(),Le(s,new bg(s,n)),fa(t)}else Xg(t);else if(r=e.o,r==3||r==0&&0<t.ta||!(s==1&&kS(t,e)||s==2&&el(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:qn(t,5);break;case 4:qn(t,10);break;case 3:qn(t,6);break;default:qn(t,2)}}}function tm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function qn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ke(t.pb,t);n||(n=new Gn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||To(n,"https"),ca(n)),SS(n.toString(),s)}else Je(2);t.H=0,t.l&&t.l.za(e),nm(t),Yg(t)}D.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function nm(t){if(t.H=0,t.pa=[],t.l){const e=jg(t.h);(e.length!=0||t.i.length!=0)&&(rf(t.pa,e),rf(t.pa,t.i),t.h.i.length=0,Lu(t.i),t.i.length=0),t.l.ya()}}function sm(t,e,n){var s=n instanceof Gn?Jt(n):new Gn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),So(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Gn(null,void 0);s&&To(i,s),e&&(i.g=e),r&&So(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&ye(s,n,e),ye(s,"VER",t.qa),yi(t,s),s}function rm(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new we(new gi({ob:!0})):new we(t.va),e.Oa(t.I),e}function im(){}D=im.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.Va=function(){};function Co(){if(Ms&&!(10<=Number(zT)))throw Error("Environmental error: no available transport.")}Co.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Oe.call(this),this.g=new Qg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!_o(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_o(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xs(this)}Pe(ut,Oe);ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Je(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=sm(t,null,t.Y),fa(t)};ut.prototype.close=function(){Zu(this.g)};ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=qu(t),t=n);e.i.push(new _S(e.fb++,t)),e.H==3&&fa(e)};ut.prototype.N=function(){this.g.l=null,delete this.j,Zu(this.g),delete this.g,ut.$.N.call(this)};function om(t){Wu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pe(om,Wu);function am(){Gu.call(this),this.status=1}Pe(am,Gu);function Xs(t){this.g=t}Pe(Xs,im);Xs.prototype.Ba=function(){Le(this.g,"a")};Xs.prototype.Aa=function(t){Le(this.g,new om(t))};Xs.prototype.za=function(t){Le(this.g,new am)};Xs.prototype.ya=function(){Le(this.g,"b")};function NS(){this.blockSize=-1}function St(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Pe(St,NS);St.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Za(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}St.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Za(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Za(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Za(this,s),r=0;break}}this.h=r,this.i+=e};St.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function ce(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var DS={};function nl(t){return-128<=t&&128>t?og(DS,t,function(e){return new ce([e|0],0>e?-1:0)}):new ce([t|0],0>t?-1:0)}function xt(t){if(isNaN(t)||!isFinite(t))return Ts;if(0>t)return Me(xt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=$c;return new ce(e,0)}function cm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Me(cm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xt(Math.pow(e,8)),s=Ts,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=xt(Math.pow(e,i)),s=s.R(i).add(xt(o))):(s=s.R(n),s=s.add(xt(o)))}return s}var $c=4294967296,Ts=nl(0),Bc=nl(1),yf=nl(16777216);D=ce.prototype;D.ea=function(){if(ft(this))return-Me(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:$c+s)*e,e*=$c}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Wt(this))return"0";if(ft(this))return"-"+Me(this).toString(t);for(var e=xt(Math.pow(t,6)),n=this,s="";;){var r=Ro(n,e).g;n=Ao(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Wt(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Wt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function ft(t){return t.h==-1}D.X=function(t){return t=Ao(this,t),ft(t)?-1:Wt(t)?0:1};function Me(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ce(n,~t.h).add(Bc)}D.abs=function(){return ft(this)?Me(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new ce(n,n[n.length-1]&-2147483648?-1:0)};function Ao(t,e){return t.add(Me(e))}D.R=function(t){if(Wt(this)||Wt(t))return Ts;if(ft(this))return ft(t)?Me(this).R(Me(t)):Me(Me(this).R(t));if(ft(t))return Me(this.R(Me(t)));if(0>this.X(yf)&&0>t.X(yf))return xt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,Fi(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Fi(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Fi(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Fi(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ce(n,0)};function Fi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function lr(t,e){this.g=t,this.h=e}function Ro(t,e){if(Wt(e))throw Error("division by zero");if(Wt(t))return new lr(Ts,Ts);if(ft(t))return e=Ro(Me(t),e),new lr(Me(e.g),Me(e.h));if(ft(e))return e=Ro(t,Me(e)),new lr(Me(e.g),e.h);if(30<t.g.length){if(ft(t)||ft(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Bc,s=e;0>=s.X(t);)n=vf(n),s=vf(s);var r=ls(n,1),i=ls(s,1);for(s=ls(s,2),n=ls(n,2);!Wt(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=ls(s,1),n=ls(n,1)}return e=Ao(t,r.R(e)),new lr(r,e)}for(r=Ts;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=xt(n),o=i.R(e);ft(o)||0<o.X(t);)n-=s,i=xt(n),o=i.R(e);Wt(i)&&(i=Bc),r=r.add(i),t=Ao(t,o)}return new lr(r,t)}D.gb=function(t){return Ro(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ce(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ce(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ce(n,this.h^t.h)};function vf(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ce(n,t.h)}function ls(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ce(r,t.h)}Co.prototype.createWebChannel=Co.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;ia.NO_ERROR=0;ia.TIMEOUT=8;ia.HTTP_ERROR=6;Cg.COMPLETE="complete";Ag.EventType=fi;fi.OPEN="a";fi.CLOSE="b";fi.ERROR="c";fi.MESSAGE="d";Oe.prototype.listen=Oe.prototype.O;we.prototype.listenOnce=we.prototype.P;we.prototype.getLastError=we.prototype.Sa;we.prototype.getLastErrorCode=we.prototype.Ia;we.prototype.getStatus=we.prototype.da;we.prototype.getResponseJson=we.prototype.Wa;we.prototype.getResponseText=we.prototype.ja;we.prototype.send=we.prototype.ha;we.prototype.setWithCredentials=we.prototype.Oa;St.prototype.digest=St.prototype.l;St.prototype.reset=St.prototype.reset;St.prototype.update=St.prototype.j;ce.prototype.add=ce.prototype.add;ce.prototype.multiply=ce.prototype.R;ce.prototype.modulo=ce.prototype.gb;ce.prototype.compare=ce.prototype.X;ce.prototype.toNumber=ce.prototype.ea;ce.prototype.toString=ce.prototype.toString;ce.prototype.getBits=ce.prototype.D;ce.fromNumber=xt;ce.fromString=cm;var OS=function(){return new Co},PS=function(){return ra()},ec=ia,xS=Cg,MS=ss,wf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},LS=gi,Ui=Ag,FS=we,US=St,Ss=ce;const _f="@firebase/firestore";/**
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
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
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
 */let Zs="9.22.0";/**
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
 */const es=new Eu("@firebase/firestore");function Ef(){return es.logLevel}function U(t,...e){if(es.logLevel<=ne.DEBUG){const n=e.map(sl);es.debug(`Firestore (${Zs}): ${t}`,...n)}}function Xt(t,...e){if(es.logLevel<=ne.ERROR){const n=e.map(sl);es.error(`Firestore (${Zs}): ${t}`,...n)}}function Ls(t,...e){if(es.logLevel<=ne.WARN){const n=e.map(sl);es.warn(`Firestore (${Zs}): ${t}`,...n)}}function sl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Zs}) INTERNAL ASSERTION FAILED: `+t;throw Xt(e),new Error(e)}function ge(t,e){t||K()}function Y(t,e){return t}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class um{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class VS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($e.UNAUTHENTICATED))}shutdown(){}}class $S{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BS{constructor(e){this.t=e,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ge(typeof s.accessToken=="string"),new um(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new $e(e)}}class jS{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class qS{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new jS(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KS{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.T=n.token,new HS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function zS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class lm{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=zS(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function se(t,e){return t<e?-1:t>e?1:0}function Fs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Ae{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ae(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Ae(0,0))}static max(){return new G(new Ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Gr{constructor(e,n,s){n===void 0?n=0:n>e.length&&K(),s===void 0?s=e.length-n:s>e.length-n&&K(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Gr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends Gr{construct(e,n,s){return new pe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new x(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const WS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends Gr{construct(e,n,s){return new qe(e,n,s)}static isValidIdentifier(e){return WS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new x(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new x(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(pe.fromString(e))}static fromName(e){return new $(pe.fromString(e).popFirst(5))}static empty(){return new $(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new pe(e.slice()))}}function GS(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=G.fromTimestamp(s===1e9?new Ae(n+1,0):new Ae(n,s));return new Rn(r,$.empty(),e)}function QS(t){return new Rn(t.readTime,t.key,-1)}class Rn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Rn(G.min(),$.empty(),-1)}static max(){return new Rn(G.max(),$.empty(),-1)}}function YS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
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
 */const JS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function vi(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==JS)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function wi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}rl.ct=-1;function da(t){return t==null}function ko(t){return t===0&&1/t==-1/0}function ZS(t){return typeof t=="number"&&Number.isInteger(t)&&!ko(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function If(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ve{constructor(e,n){this.comparator=e,this.root=n||xe.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vi(this.root,e,this.comparator,!0)}}class Vi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??xe.RED,this.left=r??xe.EMPTY,this.right=i??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new xe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return xe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,s,r){return this}insert(t,e,n){return new xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class We{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tf(this.data.getIterator())}getIteratorFrom(e){return new Tf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class Tf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ct{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new ct([])}unionWith(e){let n=new We(qe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class fm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new fm("Invalid base64 string: "+r):r}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const eb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(t){if(ge(!!t),typeof t=="string"){let e=0;const n=eb.exec(t);if(ge(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
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
 */function il(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ol(t){const e=t.mapValue.fields.__previous_value__;return il(e)?ol(e):e}function Qr(t){const e=kn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
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
 */class tb{constructor(e,n,s,r,i,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Yr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $i={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?il(t)?4:nb(t)?9007199254740991:10:K()}function Vt(t,e){if(t===e)return!0;const n=ns(t);if(n!==ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qr(t).isEqual(Qr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=kn(s.timestampValue),o=kn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ts(s.bytesValue).isEqual(ts(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Te(s.geoPointValue.latitude)===Te(r.geoPointValue.latitude)&&Te(s.geoPointValue.longitude)===Te(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Te(s.integerValue)===Te(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Te(s.doubleValue),o=Te(r.doubleValue);return i===o?ko(i)===ko(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Fs(t.arrayValue.values||[],e.arrayValue.values||[],Vt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(If(i)!==If(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Vt(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function Jr(t,e){return(t.values||[]).find(n=>Vt(n,e))!==void 0}function Us(t,e){if(t===e)return 0;const n=ns(t),s=ns(e);if(n!==s)return se(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Te(r.integerValue||r.doubleValue),a=Te(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Sf(t.timestampValue,e.timestampValue);case 4:return Sf(Qr(t),Qr(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ts(r),a=ts(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=se(o[c],a[c]);if(u!==0)return u}return se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=se(Te(r.latitude),Te(i.latitude));return o!==0?o:se(Te(r.longitude),Te(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Us(o[c],a[c]);if(u)return u}return se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===$i.mapValue&&i===$i.mapValue)return 0;if(r===$i.mapValue)return 1;if(i===$i.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=se(a[l],u[l]);if(h!==0)return h;const f=Us(o[a[l]],c[u[l]]);if(f!==0)return f}return se(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function Sf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=kn(t),s=kn(e),r=se(n.seconds,s.seconds);return r!==0?r:se(n.nanos,s.nanos)}function Vs(t){return jc(t)}function jc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=kn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ts(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=jc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${jc(s.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function bf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qc(t){return!!t&&"integerValue"in t}function al(t){return!!t&&"arrayValue"in t}function Cf(t){return!!t&&"nullValue"in t}function Af(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zi(t){return!!t&&"mapValue"in t}function Cr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Cr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Cr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Zi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cr(n)}setAll(e){let n=qe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Cr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Zi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Zi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){rs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new nt(Cr(this.value))}}function dm(t){const e=[];return rs(t.fields,(n,s)=>{const r=new qe([n]);if(Zi(s)){const i=dm(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new ct(e)}/**
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
 */class Be{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Be(e,0,G.min(),G.min(),G.min(),nt.empty(),0)}static newFoundDocument(e,n,s,r){return new Be(e,1,n,G.min(),s,r,0)}static newNoDocument(e,n){return new Be(e,2,n,G.min(),G.min(),nt.empty(),0)}static newUnknownDocument(e,n){return new Be(e,3,n,G.min(),G.min(),nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class No{constructor(e,n){this.position=e,this.inclusive=n}}function Rf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=$.comparator($.fromName(o.referenceValue),n.key):s=Us(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function kf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ar{constructor(e,n="asc"){this.field=e,this.dir=n}}function sb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class pm{}class Ce extends pm{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new ib(e,n,s):n==="array-contains"?new cb(e,s):n==="in"?new ub(e,s):n==="not-in"?new lb(e,s):n==="array-contains-any"?new hb(e,s):new Ce(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new ob(e,s):new ab(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Us(n,this.value)):n!==null&&ns(this.value)===ns(n)&&this.matchesComparison(Us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class bt extends pm{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new bt(e,n)}matches(e){return gm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function gm(t){return t.op==="and"}function mm(t){return rb(t)&&gm(t)}function rb(t){for(const e of t.filters)if(e instanceof bt)return!1;return!0}function Hc(t){if(t instanceof Ce)return t.field.canonicalString()+t.op.toString()+Vs(t.value);if(mm(t))return t.filters.map(e=>Hc(e)).join(",");{const e=t.filters.map(n=>Hc(n)).join(",");return`${t.op}(${e})`}}function ym(t,e){return t instanceof Ce?function(n,s){return s instanceof Ce&&n.op===s.op&&n.field.isEqual(s.field)&&Vt(n.value,s.value)}(t,e):t instanceof bt?function(n,s){return s instanceof bt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&ym(i,s.filters[o]),!0):!1}(t,e):void K()}function vm(t){return t instanceof Ce?function(e){return`${e.field.canonicalString()} ${e.op} ${Vs(e.value)}`}(t):t instanceof bt?function(e){return e.op.toString()+" {"+e.getFilters().map(vm).join(" ,")+"}"}(t):"Filter"}class ib extends Ce{constructor(e,n,s){super(e,n,s),this.key=$.fromName(s.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class ob extends Ce{constructor(e,n){super(e,"in",n),this.keys=wm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ab extends Ce{constructor(e,n){super(e,"not-in",n),this.keys=wm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>$.fromName(s.referenceValue))}class cb extends Ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return al(n)&&Jr(n.arrayValue,this.value)}}class ub extends Ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jr(this.value.arrayValue,n)}}class lb extends Ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jr(this.value.arrayValue,n)}}class hb extends Ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!al(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Jr(this.value.arrayValue,s))}}/**
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
 */class fb{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Nf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new fb(t,e,n,s,r,i,o)}function cl(t){const e=Y(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Hc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),da(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Vs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Vs(s)).join(",")),e.dt=n}return e.dt}function ul(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ym(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kf(t.startAt,e.startAt)&&kf(t.endAt,e.endAt)}function Kc(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class _i{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function db(t,e,n,s,r,i,o,a){return new _i(t,e,n,s,r,i,o,a)}function ll(t){return new _i(t)}function Df(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _m(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function hl(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Em(t){return t.collectionGroup!==null}function bs(t){const e=Y(t);if(e.wt===null){e.wt=[];const n=hl(e),s=_m(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Ar(n)),e.wt.push(new Ar(qe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Ar(qe.keyField(),i))}}}return e.wt}function Zt(t){const e=Y(t);if(!e._t)if(e.limitType==="F")e._t=Nf(e.path,e.collectionGroup,bs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of bs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ar(i.field,o))}const s=e.endAt?new No(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new No(e.startAt.position,e.startAt.inclusive):null;e._t=Nf(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function zc(t,e){e.getFirstInequalityField(),hl(t);const n=t.filters.concat([e]);return new _i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Wc(t,e,n){return new _i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pa(t,e){return ul(Zt(t),Zt(e))&&t.limitType===e.limitType}function Im(t){return`${cl(Zt(t))}|lt:${t.limitType}`}function Gc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>vm(s)).join(", ")}]`),da(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Vs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Vs(s)).join(",")),`Target(${n})`}(Zt(t))}; limitType=${t.limitType})`}function ga(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):$.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of bs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Rf(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,bs(n),s)||n.endAt&&!function(r,i,o){const a=Rf(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,bs(n),s))}(t,e)}function pb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tm(t){return(e,n)=>{let s=!1;for(const r of bs(t)){const i=gb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function gb(t,e,n){const s=t.field.isKeyField()?$.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Us(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
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
 */class er{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){rs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return hm(this.inner)}size(){return this.innerSize}}/**
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
 */const mb=new ve($.comparator);function en(){return mb}const Sm=new ve($.comparator);function yr(...t){let e=Sm;for(const n of t)e=e.insert(n.key,n);return e}function bm(t){let e=Sm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Hn(){return Rr()}function Cm(){return Rr()}function Rr(){return new er(t=>t.toString(),(t,e)=>t.isEqual(e))}const yb=new ve($.comparator),vb=new We($.comparator);function Z(...t){let e=vb;for(const n of t)e=e.add(n);return e}const wb=new We(se);function _b(){return wb}/**
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
 */function Am(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ko(e)?"-0":e}}function Rm(t){return{integerValue:""+t}}function Eb(t,e){return ZS(e)?Rm(e):Am(t,e)}/**
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
 */class ma{constructor(){this._=void 0}}function Ib(t,e,n){return t instanceof Xr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&il(r)&&(r=ol(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Zr?Nm(t,e):t instanceof ei?Dm(t,e):function(s,r){const i=km(s,r),o=Of(i)+Of(s.gt);return qc(i)&&qc(s.gt)?Rm(o):Am(s.serializer,o)}(t,e)}function Tb(t,e,n){return t instanceof Zr?Nm(t,e):t instanceof ei?Dm(t,e):n}function km(t,e){return t instanceof Do?qc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Xr extends ma{}class Zr extends ma{constructor(e){super(),this.elements=e}}function Nm(t,e){const n=Om(e);for(const s of t.elements)n.some(r=>Vt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ei extends ma{constructor(e){super(),this.elements=e}}function Dm(t,e){let n=Om(e);for(const s of t.elements)n=n.filter(r=>!Vt(r,s));return{arrayValue:{values:n}}}class Do extends ma{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Of(t){return Te(t.integerValue||t.doubleValue)}function Om(t){return al(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Sb{constructor(e,n){this.field=e,this.transform=n}}function bb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Zr&&s instanceof Zr||n instanceof ei&&s instanceof ei?Fs(n.elements,s.elements,Vt):n instanceof Do&&s instanceof Do?Vt(n.gt,s.gt):n instanceof Xr&&s instanceof Xr}(t.transform,e.transform)}class Cb{constructor(e,n){this.version=e,this.transformResults=n}}class Et{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Et}static exists(e){return new Et(void 0,e)}static updateTime(e){return new Et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ya{}function Pm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fl(t.key,Et.none()):new Ei(t.key,t.data,Et.none());{const n=t.data,s=nt.empty();let r=new We(qe.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Pn(t.key,s,new ct(r.toArray()),Et.none())}}function Ab(t,e,n){t instanceof Ei?function(s,r,i){const o=s.value.clone(),a=xf(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Pn?function(s,r,i){if(!eo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=xf(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(xm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function kr(t,e,n,s){return t instanceof Ei?function(r,i,o,a){if(!eo(r.precondition,i))return o;const c=r.value.clone(),u=Mf(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Pn?function(r,i,o,a){if(!eo(r.precondition,i))return o;const c=Mf(r.fieldTransforms,a,i),u=i.data;return u.setAll(xm(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return eo(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Rb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=km(s.transform,r||null);i!=null&&(n===null&&(n=nt.empty()),n.set(s.field,i))}return n||null}function Pf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Fs(n,s,(r,i)=>bb(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ei extends ya{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Pn extends ya{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function xm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function xf(t,e,n){const s=new Map;ge(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Tb(o,a,n[r]))}return s}function Mf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Ib(i,o,e))}return s}class fl extends ya{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kb extends ya{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Nb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Ab(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=kr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=kr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Cm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Pm(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&Fs(this.mutations,e.mutations,(n,s)=>Pf(n,s))&&Fs(this.baseMutations,e.baseMutations,(n,s)=>Pf(n,s))}}class dl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ge(e.mutations.length===s.length);let r=yb;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new dl(e,n,s,r)}}/**
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
 */class Db{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ob{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ie,ee;function Pb(t){switch(t){default:return K();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Mm(t){if(t===void 0)return Xt("GRPC error has no .code"),_.UNKNOWN;switch(t){case Ie.OK:return _.OK;case Ie.CANCELLED:return _.CANCELLED;case Ie.UNKNOWN:return _.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return _.INTERNAL;case Ie.UNAVAILABLE:return _.UNAVAILABLE;case Ie.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Ie.NOT_FOUND:return _.NOT_FOUND;case Ie.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Ie.ABORTED:return _.ABORTED;case Ie.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Ie.DATA_LOSS:return _.DATA_LOSS;default:return K()}}(ee=Ie||(Ie={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class pl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Bi}static getOrCreateInstance(){return Bi===null&&(Bi=new pl),Bi}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Bi=null;/**
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
 */function xb(){return new TextEncoder}/**
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
 */const Mb=new Ss([4294967295,4294967295],0);function Lf(t){const e=xb().encode(t),n=new US;return n.update(e),new Uint8Array(n.digest())}function Ff(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ss([n,s],0),new Ss([r,i],0)]}class gl{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new vr(`Invalid padding: ${n}`);if(s<0)throw new vr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new vr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new vr(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Ss.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(Ss.fromNumber(s)));return r.compare(Mb)===1&&(r=new Ss([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Lf(e),[s,r]=Ff(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new gl(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Lf(e),[s,r]=Ff(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class vr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class va{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ii.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new va(G.min(),r,new ve(se),en(),Z())}}class Ii{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ii(s,n,Z(),Z(),Z())}}/**
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
 */class to{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class Lm{constructor(e,n){this.targetId=e,this.Vt=n}}class Fm{constructor(e,n,s=Qe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Uf{constructor(){this.St=0,this.Dt=$f(),this.Ct=Qe.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Z(),n=Z(),s=Z();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:K()}}),new Ii(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=$f()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Lb{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=en(),this.zt=Vf(),this.Wt=new ve(se)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(Kc(o))if(r===0){const a=new $(o.path);this.Yt(s,a,Be.newNoDocument(a,G.min()))}else ge(r===1);else{const a=this.ie(s);if(a!==r){const c=this.re(e,a);if(c!==0){this.ee(s);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,u)}(n=pl.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,l,h){var f,g,v,I,C,R;const L={localCacheCount:l,existenceFilterCount:h.count},P=h.unchangedNames;return P&&(L.bloomFilter={applied:u===0,hashCount:(f=P==null?void 0:P.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(I=(v=(g=P==null?void 0:P.bits)===null||g===void 0?void 0:g.bitmap)===null||v===void 0?void 0:v.length)!==null&&I!==void 0?I:0,padding:(R=(C=P==null?void 0:P.bits)===null||C===void 0?void 0:C.padding)!==null&&R!==void 0?R:0}),L}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,u;try{c=ts(i).toUint8Array()}catch(l){if(l instanceof fm)return Ls("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new gl(c,o,a)}catch(l){return Ls(l instanceof vr?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:r!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Kc(a.target)){const c=new $(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Be.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=Z();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new va(e,n,this.Wt,this.jt,s);return this.jt=en(),this.zt=Vf(),this.Wt=new ve(se),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Uf,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new We(se),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Uf),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Vf(){return new ve($.comparator)}function $f(){return new ve($.comparator)}const Fb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ub=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Vb=(()=>({and:"AND",or:"OR"}))();class $b{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qc(t,e){return t.useProto3Json||da(e)?e:{value:e}}function Oo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Um(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Bb(t,e){return Oo(t,e.toTimestamp())}function Ft(t){return ge(!!t),G.fromTimestamp(function(e){const n=kn(e);return new Ae(n.seconds,n.nanos)}(t))}function ml(t,e){return function(n){return new pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Vm(t){const e=pe.fromString(t);return ge(qm(e)),e}function Yc(t,e){return ml(t.databaseId,e.path)}function tc(t,e){const n=Vm(e);if(n.get(1)!==t.databaseId.projectId)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $($m(n))}function Jc(t,e){return ml(t.databaseId,e)}function jb(t){const e=Vm(t);return e.length===4?pe.emptyPath():$m(e)}function Xc(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $m(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bf(t,e,n){return{name:Yc(t,e),fields:n.value.mapValue.fields}}function qb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(ge(u===void 0||typeof u=="string"),Qe.fromBase64String(u||"")):(ge(u===void 0||u instanceof Uint8Array),Qe.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:Mm(c.code);return new x(u,c.message||"")}(o);n=new Fm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=tc(t,s.document.name),i=Ft(s.document.updateTime),o=s.document.createTime?Ft(s.document.createTime):G.min(),a=new nt({mapValue:{fields:s.document.fields}}),c=Be.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new to(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=tc(t,s.document),i=s.readTime?Ft(s.readTime):G.min(),o=Be.newNoDocument(r,i),a=s.removedTargetIds||[];n=new to([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=tc(t,s.document),i=s.removedTargetIds||[];n=new to([],i,r,null)}else{if(!("filter"in e))return K();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new Ob(r,i),a=s.targetId;n=new Lm(a,o)}}return n}function Hb(t,e){let n;if(e instanceof Ei)n={update:Bf(t,e.key,e.value)};else if(e instanceof fl)n={delete:Yc(t,e.key)};else if(e instanceof Pn)n={update:Bf(t,e.key,e.data),updateMask:Zb(e.fieldMask)};else{if(!(e instanceof kb))return K();n={verify:Yc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Xr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Zr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ei)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Do)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw K()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Bb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K()}(t,e.precondition)),n}function Kb(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ft(s.updateTime):Ft(r);return i.isEqual(G.min())&&(i=Ft(r)),new Cb(i,s.transformResults||[])}(n,e))):[]}function zb(t,e){return{documents:[Jc(t,e.path)]}}function Wb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Jc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return jm(bt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:fs(l.field),direction:Yb(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Qc(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Gb(t){let e=jb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ge(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=Bm(l);return h instanceof bt&&mm(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Ar(ds(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,da(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new No(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new No(f,h)}(n.endAt)),db(e,r,o,i,a,"F",c,u)}function Qb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ds(e.unaryFilter.field);return Ce.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ds(e.unaryFilter.field);return Ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ds(e.unaryFilter.field);return Ce.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ds(e.unaryFilter.field);return Ce.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return Ce.create(ds(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return bt.create(e.compositeFilter.filters.map(n=>Bm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function Yb(t){return Fb[t]}function Jb(t){return Ub[t]}function Xb(t){return Vb[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ds(t){return qe.fromServerFormat(t.fieldPath)}function jm(t){return t instanceof Ce?function(e){if(e.op==="=="){if(Af(e.value))return{unaryFilter:{field:fs(e.field),op:"IS_NAN"}};if(Cf(e.value))return{unaryFilter:{field:fs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Af(e.value))return{unaryFilter:{field:fs(e.field),op:"IS_NOT_NAN"}};if(Cf(e.value))return{unaryFilter:{field:fs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(e.field),op:Jb(e.op),value:e.value}}}(t):t instanceof bt?function(e){const n=e.getFilters().map(s=>jm(s));return n.length===1?n[0]:{compositeFilter:{op:Xb(e.op),filters:n}}}(t):K()}function Zb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function qm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class _n{constructor(e,n,s,r,i=G.min(),o=G.min(),a=Qe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new _n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class eC{constructor(e){this.fe=e}}function tC(t){const e=Gb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wc(e,e.limit,"L"):e}/**
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
 */class nC{constructor(){this.rn=new sC}addToCollectionParentIndex(e,n){return this.rn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Rn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Rn.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class sC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new We(pe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new We(pe.comparator)).toArray()}}/**
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
 */class $s{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new $s(0)}static Mn(){return new $s(-1)}}/**
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
 */class rC{constructor(){this.changes=new er(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class oC{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&kr(s.mutation,r,ct.empty(),Ae.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Z()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Z()){const r=Hn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=yr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Hn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Z()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=en();const o=Rr(),a=Rr();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Pn)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),kr(l.mutation,u,l.mutation.getFieldMask(),Ae.now())):o.set(u.key,ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new iC(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Rr();let r=new ve((o,a)=>o-a),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||ct.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||Z()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Cm();l.forEach(f=>{if(!i.has(f)){const g=Pm(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Em(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve(Hn());let a=-1,c=i;return o.next(u=>b.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?b.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Z())).next(l=>({batchId:a,changes:bm(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(s=>{let r=yr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=yr();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(u,l){return new _i(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Be.newInvalidDocument(u)))});let o=yr();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&kr(u.mutation,c,ct.empty(),Ae.now()),ga(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class aC{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return b.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:Ft(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:tC(s.bundledQuery),readTime:Ft(s.readTime)}}(n)),b.resolve()}}/**
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
 */class cC{constructor(){this.overlays=new ve($.comparator),this.ls=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Hn();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=Hn(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ve((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Hn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Hn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return b.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Db(n,s));let i=this.ls.get(n);i===void 0&&(i=Z(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
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
 */class yl{constructor(){this.fs=new We(Ne.ds),this.ws=new We(Ne._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new Ne(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new Ne(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new $(new pe([])),s=new Ne(n,e),r=new Ne(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new $(new pe([])),s=new Ne(n,e),r=new Ne(n,e+1);let i=Z();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ne(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ne{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return $.comparator(e.key,n.key)||se(e.As,n.As)}static _s(e,n){return se(e.As,n.As)||$.comparator(e.key,n.key)}}/**
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
 */class uC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new We(Ne.ds)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nb(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Ne(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ne(n,0),r=new Ne(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new We(se);return n.forEach(r=>{const i=new Ne(r,0),o=new Ne(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),b.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;$.isDocumentKey(i)||(i=i.child(""));const o=new Ne(new $(i),0);let a=new We(se);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.As)),!0)},o),b.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ge(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return b.forEach(n.mutations,r=>{const i=new Ne(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new Ne(n,0),r=this.Rs.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class lC{constructor(e){this.Ds=e,this.docs=new ve($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():Be.newInvalidDocument(n))}getEntries(e,n){let s=en();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Be.newInvalidDocument(r))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=en();const o=n.path,a=new $(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||YS(QS(l),s)<=0||(r.has(l.key)||ga(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,s,r){K()}Cs(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new hC(this)}getSize(e){return b.resolve(this.size)}}class hC extends rC{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class fC{constructor(e){this.persistence=e,this.xs=new er(n=>cl(n),ul),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Ns=0,this.ks=new yl,this.targetCount=0,this.Ms=$s.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),b.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new $s(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Fn(n),b.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.ks.containsKey(n))}}/**
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
 */class dC{constructor(e,n){this.$s={},this.overlays={},this.Os=new rl(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new fC(this),this.indexManager=new nC,this.remoteDocumentCache=function(s){return new lC(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new eC(n),this.qs=new aC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new uC(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new pC(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return b.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class pC extends XS{constructor(e){super(),this.currentSequenceNumber=e}}class vl{constructor(e){this.persistence=e,this.Qs=new yl,this.js=null}static zs(e){return new vl(e)}get Ws(){if(this.js)return this.js;throw K()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),b.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ws,s=>{const r=$.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,G.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return b.or([()=>b.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class wl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=Z(),r=Z();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new wl(e,n.fromCache,s,r)}}/**
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
 */class gC{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(Df(n))return b.resolve(null);let s=Zt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Wc(n,null,"F"),s=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Z(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.ji(n,a);return this.zi(n,u,o,c.readTime)?this.Ki(e,Wc(n,null,"F")):this.Wi(e,u,n,c)}))})))}Gi(e,n,s,r){return Df(n)||r.isEqual(G.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(Ef()<=ne.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gc(n)),this.Wi(e,o,n,GS(r,-1)))})}ji(e,n){let s=new We(Tm(e));return n.forEach((r,i)=>{ga(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return Ef()<=ne.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Gc(n)),this.Ui.getDocumentsMatchingQuery(e,n,Rn.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class mC{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new ve(se),this.Yi=new er(i=>cl(i),ul),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oC(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function yC(t,e,n,s){return new mC(t,e,n,s)}async function Hm(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Z();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function vC(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=b.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(v=>{const I=c.docVersions.get(g);ge(I!==null),v.version.compareTo(I)<0&&(l.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Z();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Km(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function wC(t,e){const n=Y(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,l.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Qe.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(v,I,C){return v.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(f,g,l)&&a.push(n.Bs.updateTargetData(i,g))});let c=en(),u=Z();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(_C(i,o,e.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!s.isEqual(G.min())){const l=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ji=r,i))}function _C(t,e,n){let s=Z(),r=Z();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=en();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:r}})}function EC(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function IC(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new _n(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Zc(t,e,n){const s=Y(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!wi(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function jf(t,e,n){const s=Y(t);let r=G.min(),i=Z();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Y(a),h=l.Yi.get(u);return h!==void 0?b.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(s,o,Zt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:G.min(),n?i:Z())).next(a=>(TC(s,pb(e),a),{documents:a,ir:i})))}function TC(t,e,n){let s=t.Xi.get(e)||G.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class qf{constructor(){this.activeTargetIds=_b()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SC{constructor(){this.Hr=new qf,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new qf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bC{Yr(e){}shutdown(){}}/**
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
 */class Hf{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ji=null;function nc(){return ji===null?ji=268435456+Math.round(2147483648*Math.random()):ji++,"0x"+ji.toString(16)}/**
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
 */const CC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class AC{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Ve="WebChannelConnection";class RC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=nc(),a=this.To(e,n);U("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,r,i),this.Ao(e,a,c,s).then(u=>(U("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ls("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=CC[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=nc();return new Promise((o,a)=>{const c=new FS;c.setWithCredentials(!0),c.listenOnce(xS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ec.NO_ERROR:const l=c.getResponseJson();U(Ve,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case ec.TIMEOUT:U(Ve,`RPC '${e}' ${i} timed out`),a(new x(_.DEADLINE_EXCEEDED,"Request time out"));break;case ec.HTTP_ERROR:const h=c.getStatus();if(U(Ve,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const v=function(I){const C=I.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(C)>=0?C:_.UNKNOWN}(g.status);a(new x(v,g.message))}else a(new x(_.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new x(_.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{U(Ve,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);U(Ve,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}Ro(e,n,s){const r=nc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=OS(),a=PS(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new LS({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");U(Ve,`Creating RPC '${e}' stream ${r}: ${l}`,c);const h=o.createWebChannel(l,c);let f=!1,g=!1;const v=new AC({ro:C=>{g?U(Ve,`Not sending because RPC '${e}' stream ${r} is closed:`,C):(f||(U(Ve,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),U(Ve,`RPC '${e}' stream ${r} sending:`,C),h.send(C))},oo:()=>h.close()}),I=(C,R,L)=>{C.listen(R,P=>{try{L(P)}catch(Q){setTimeout(()=>{throw Q},0)}})};return I(h,Ui.EventType.OPEN,()=>{g||U(Ve,`RPC '${e}' stream ${r} transport opened.`)}),I(h,Ui.EventType.CLOSE,()=>{g||(g=!0,U(Ve,`RPC '${e}' stream ${r} transport closed`),v.wo())}),I(h,Ui.EventType.ERROR,C=>{g||(g=!0,Ls(Ve,`RPC '${e}' stream ${r} transport errored:`,C),v.wo(new x(_.UNAVAILABLE,"The operation could not be completed")))}),I(h,Ui.EventType.MESSAGE,C=>{var R;if(!g){const L=C.data[0];ge(!!L);const P=L,Q=P.error||((R=P[0])===null||R===void 0?void 0:R.error);if(Q){U(Ve,`RPC '${e}' stream ${r} received error:`,Q);const me=Q.status;let _e=function(it){const ot=Ie[it];if(ot!==void 0)return Mm(ot)}(me),Fe=Q.message;_e===void 0&&(_e=_.INTERNAL,Fe="Unknown error status: "+me+" with message "+Q.message),g=!0,v.wo(new x(_e,Fe)),h.close()}else U(Ve,`RPC '${e}' stream ${r} received:`,L),v._o(L)}}),I(a,MS.STAT_EVENT,C=>{C.stat===wf.PROXY?U(Ve,`RPC '${e}' stream ${r} detected buffering proxy`):C.stat===wf.NOPROXY&&U(Ve,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function sc(){return typeof document<"u"?document:null}/**
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
 */function wa(t){return new $b(t,!0)}/**
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
 */class zm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Wm{constructor(e,n,s,r,i,o,a,c){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new zm(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Xt(n.toString()),Xt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new x(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kC extends Wm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=qb(this.serializer,e),s=function(r){if(!("targetChange"in r))return G.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?G.min():i.readTime?Ft(i.readTime):G.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=Xc(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=Kc(a)?{documents:zb(r,a)}:{query:Wb(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Um(r,i.resumeToken);const c=Qc(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(G.min())>0){o.readTime=Oo(r,i.snapshotVersion.toTimestamp());const c=Qc(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=Qb(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=Xc(this.serializer),n.removeTarget=e,this.Wo(n)}}class NC extends Wm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=Kb(e.writeResults,e.commitTime),s=Ft(e.commitTime);return this.listener.cu(s,n)}return ge(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Xc(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Hb(this.serializer,s))};this.Wo(n)}}/**
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
 */class DC extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new x(_.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(_.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class OC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Xt(n),this.mu=!1):U("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class PC{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{is(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c.vu.add(4),await Ti(c),c.bu.set("Unknown"),c.vu.delete(4),await _a(c)}(this))})}),this.bu=new OC(s,r)}}async function _a(t){if(is(t))for(const e of t.Ru)await e(!0)}async function Ti(t){for(const e of t.Ru)await e(!1)}function Gm(t,e){const n=Y(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Il(n)?El(n):tr(n).Ko()&&_l(n,e))}function Qm(t,e){const n=Y(t),s=tr(n);n.Au.delete(e),s.Ko()&&Ym(n,e),n.Au.size===0&&(s.Ko()?s.jo():is(n)&&n.bu.set("Unknown"))}function _l(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}tr(t).su(e)}function Ym(t,e){t.Vu.qt(e),tr(t).iu(e)}function El(t){t.Vu=new Lb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),tr(t).start(),t.bu.gu()}function Il(t){return is(t)&&!tr(t).Uo()&&t.Au.size>0}function is(t){return Y(t).vu.size===0}function Jm(t){t.Vu=void 0}async function xC(t){t.Au.forEach((e,n)=>{_l(t,e)})}async function MC(t,e){Jm(t),Il(t)?(t.bu.Iu(e),El(t)):t.bu.set("Unknown")}async function LC(t,e,n){if(t.bu.set("Online"),e instanceof Fm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Po(t,s)}else if(e instanceof to?t.Vu.Ht(e):e instanceof Lm?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(G.min()))try{const s=await Km(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.Au.get(c);u&&r.Au.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const u=r.Au.get(a);if(!u)return;r.Au.set(a,u.withResumeToken(Qe.EMPTY_BYTE_STRING,u.snapshotVersion)),Ym(r,a);const l=new _n(u.target,a,c,u.sequenceNumber);_l(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await Po(t,s)}}async function Po(t,e,n){if(!wi(e))throw e;t.vu.add(1),await Ti(t),t.bu.set("Offline"),n||(n=()=>Km(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await _a(t)})}function Xm(t,e){return e().catch(n=>Po(t,n,e))}async function Ea(t){const e=Y(t),n=Nn(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;FC(e);)try{const r=await EC(e.localStore,s);if(r===null){e.Eu.length===0&&n.jo();break}s=r.batchId,UC(e,r)}catch(r){await Po(e,r)}Zm(e)&&ey(e)}function FC(t){return is(t)&&t.Eu.length<10}function UC(t,e){t.Eu.push(e);const n=Nn(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Zm(t){return is(t)&&!Nn(t).Uo()&&t.Eu.length>0}function ey(t){Nn(t).start()}async function VC(t){Nn(t).hu()}async function $C(t){const e=Nn(t);for(const n of t.Eu)e.uu(n.mutations)}async function BC(t,e,n){const s=t.Eu.shift(),r=dl.from(s,e,n);await Xm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ea(t)}async function jC(t,e){e&&Nn(t).ou&&await async function(n,s){if(r=s.code,Pb(r)&&r!==_.ABORTED){const i=n.Eu.shift();Nn(n).Qo(),await Xm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ea(n)}var r}(t,e),Zm(t)&&ey(t)}async function Kf(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=is(n);n.vu.add(3),await Ti(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await _a(n)}async function qC(t,e){const n=Y(t);e?(n.vu.delete(2),await _a(n)):e||(n.vu.add(2),await Ti(n),n.bu.set("Unknown"))}function tr(t){return t.Su||(t.Su=function(e,n,s){const r=Y(e);return r.fu(),new kC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:xC.bind(null,t),ao:MC.bind(null,t),nu:LC.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Il(t)?El(t):t.bu.set("Unknown")):(await t.Su.stop(),Jm(t))})),t.Su}function Nn(t){return t.Du||(t.Du=function(e,n,s){const r=Y(e);return r.fu(),new NC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:VC.bind(null,t),ao:jC.bind(null,t),au:$C.bind(null,t),cu:BC.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Ea(t)):(await t.Du.stop(),t.Eu.length>0&&(U("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class Tl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Tl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sl(t,e){if(Xt("AsyncQueue",`${e}: ${t}`),wi(t))return new x(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Cs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||$.comparator(n.key,s.key):(n,s)=>$.comparator(n.key,s.key),this.keyedMap=yr(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new Cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Cs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class zf{constructor(){this.Cu=new ve($.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):K():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Bs{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bs(e,n,Cs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class HC{constructor(){this.Nu=void 0,this.listeners=[]}}class KC{constructor(){this.queries=new er(e=>Im(e),pa),this.onlineState="Unknown",this.ku=new Set}}async function ty(t,e){const n=Y(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new HC),r)try{i.Nu=await n.onListen(s)}catch(o){const a=Sl(o,`Initialization of query '${Gc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&bl(n)}async function ny(t,e){const n=Y(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function zC(t,e){const n=Y(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&bl(n)}function WC(t,e,n){const s=Y(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function bl(t){t.ku.forEach(e=>{e.next()})}class sy{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Bs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class ry{constructor(e){this.key=e}}class iy{constructor(e){this.key=e}}class GC{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Z(),this.mutatedKeys=Z(),this.tc=Tm(e),this.ec=new Cs(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new zf,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const f=r.get(l),g=ga(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;f&&g?f.data.isEqual(g.data)?v!==I&&(s.track({type:3,doc:g}),C=!0):this.rc(f,g)||(s.track({type:2,doc:g}),C=!0,(c&&this.tc(g,c)>0||u&&this.tc(g,u)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),C=!0):f&&!g&&(s.track({type:1,doc:f}),C=!0,(c||u)&&(a=!0)),C&&(g?(o=o.add(g),i=I?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((u,l)=>function(h,f){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(h)-g(f)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new Bs(this.query,e.ec,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new zf,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Z(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new iy(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new ry(s))}),n}hc(e){this.Yu=e.ir,this.Zu=Z();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Bs.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class QC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class YC{constructor(e){this.key=e,this.fc=!1}}class JC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new er(a=>Im(a),pa),this._c=new Map,this.mc=new Set,this.gc=new ve($.comparator),this.yc=new Map,this.Ic=new yl,this.Tc={},this.Ec=new Map,this.Ac=$s.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function XC(t,e){const n=cA(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await IC(n.localStore,Zt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await ZC(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Gm(n.remoteStore,o)}return r}async function ZC(t,e,n,s,r){t.Rc=(h,f,g)=>async function(v,I,C,R){let L=I.view.sc(C);L.zi&&(L=await jf(v.localStore,I.query,!1).then(({documents:me})=>I.view.sc(me,L)));const P=R&&R.targetChanges.get(I.targetId),Q=I.view.applyChanges(L,v.isPrimaryClient,P);return Gf(v,I.targetId,Q.cc),Q.snapshot}(t,h,f,g);const i=await jf(t.localStore,e,!0),o=new GC(e,i.ir),a=o.sc(i.documents),c=Ii.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);Gf(t,n,u.cc);const l=new QC(e,n,o);return t.wc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function eA(t,e){const n=Y(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!pa(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Zc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Qm(n.remoteStore,s.targetId),eu(n,s.targetId)}).catch(vi)):(eu(n,s.targetId),await Zc(n.localStore,s.targetId,!0))}async function tA(t,e,n){const s=uA(t);try{const r=await function(i,o){const a=Y(i),c=Ae.now(),u=o.reduce((f,g)=>f.add(g.key),Z());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=en(),v=Z();return a.Zi.getEntries(f,u).next(I=>{g=I,g.forEach((C,R)=>{R.isValidDocument()||(v=v.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(I=>{l=I;const C=[];for(const R of o){const L=Rb(R,l.get(R.key).overlayedDocument);L!=null&&C.push(new Pn(R.key,L,dm(L.value.mapValue),Et.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,C,o)}).next(I=>{h=I;const C=I.applyToLocalDocumentSet(l,v);return a.documentOverlayCache.saveOverlays(f,I.batchId,C)})}).then(()=>({batchId:h.batchId,changes:bm(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new ve(se)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Si(s,r.changes),await Ea(s.remoteStore)}catch(r){const i=Sl(r,"Failed to persist write");n.reject(i)}}async function oy(t,e){const n=Y(t);try{const s=await wC(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(ge(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?ge(o.fc):r.removedDocuments.size>0&&(ge(o.fc),o.fc=!1))}),await Si(n,s,e)}catch(s){await vi(s)}}function Wf(t,e,n){const s=Y(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Y(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&bl(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function nA(t,e,n){const s=Y(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new ve($.comparator);o=o.insert(i,Be.newNoDocument(i,G.min()));const a=Z().add(i),c=new va(G.min(),new Map,new ve(se),o,a);await oy(s,c),s.gc=s.gc.remove(i),s.yc.delete(e),Cl(s)}else await Zc(s.localStore,e,!1).then(()=>eu(s,e,n)).catch(vi)}async function sA(t,e){const n=Y(t),s=e.batch.batchId;try{const r=await vC(n.localStore,e);cy(n,s,null),ay(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Si(n,r)}catch(r){await vi(r)}}async function rA(t,e,n){const s=Y(t);try{const r=await function(i,o){const a=Y(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(ge(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);cy(s,e,n),ay(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Si(s,r)}catch(r){await vi(r)}}function ay(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function cy(t,e,n){const s=Y(t);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function eu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||uy(t,s)})}function uy(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Qm(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Cl(t))}function Gf(t,e,n){for(const s of n)s instanceof ry?(t.Ic.addReference(s.key,e),iA(t,s)):s instanceof iy?(U("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||uy(t,s.key)):K()}function iA(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.mc.add(s),Cl(t))}function Cl(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new $(pe.fromString(e)),s=t.Ac.next();t.yc.set(s,new YC(n)),t.gc=t.gc.insert(n,s),Gm(t.remoteStore,new _n(Zt(ll(n.path)),s,"TargetPurposeLimboResolution",rl.ct))}}async function Si(t,e,n){const s=Y(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=wl.Li(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,c){const u=Y(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>b.forEach(c,h=>b.forEach(h.Fi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>b.forEach(h.Bi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!wi(l))throw l;U("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Ji.get(h),g=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(h,v)}}}(s.localStore,i))}async function oA(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await Hm(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new x(_.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Si(n,s.er)}}function aA(t,e){const n=Y(t),s=n.yc.get(e);if(s&&s.fc)return Z().add(s.key);{let r=Z();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function cA(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nA.bind(null,e),e.dc.nu=zC.bind(null,e.eventManager),e.dc.Pc=WC.bind(null,e.eventManager),e}function uA(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rA.bind(null,e),e}class Qf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=wa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return yC(this.persistence,new gC,e.initialUser,this.serializer)}createPersistence(e){return new dC(vl.zs,this.serializer)}createSharedClientState(e){return new SC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Wf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=oA.bind(null,this.syncEngine),await qC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new KC}createDatastore(e){const n=wa(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new RC(r));var r;return function(i,o,a,c){return new DC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Wf(this.syncEngine,a,0),o=Hf.D()?new Hf:new bC,new PC(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new JC(s,r,i,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);U("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Ti(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class ly{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Xt("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class hA{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=$e.UNAUTHENTICATED,this.clientId=lm.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Sl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function rc(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Hm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Yf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dA(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Kf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Kf(e.remoteStore,i)),t._onlineComponents=e}function fA(t){return t.name==="FirebaseError"?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function dA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await rc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!fA(n))throw n;Ls("Error using user provided cache. Falling back to memory cache: "+n),await rc(t,new Qf)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await rc(t,new Qf);return t._offlineComponents}async function hy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Yf(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Yf(t,new lA))),t._onlineComponents}function pA(t){return hy(t).then(e=>e.syncEngine)}async function fy(t){const e=await hy(t),n=e.eventManager;return n.onListen=XC.bind(null,e.syncEngine),n.onUnlisten=eA.bind(null,e.syncEngine),n}function gA(t,e,n={}){const s=new Gt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new ly({next:h=>{i.enqueueAndForget(()=>ny(r,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new x(_.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new x(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new sy(ll(o.path),u,{includeMetadataChanges:!0,Ku:!0});return ty(r,l)}(await fy(t),t.asyncQueue,e,n,s)),s.promise}function mA(t,e,n={}){const s=new Gt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new ly({next:h=>{i.enqueueAndForget(()=>ny(r,l)),h.fromCache&&a.source==="server"?c.reject(new x(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new sy(o,u,{includeMetadataChanges:!0,Ku:!0});return ty(r,l)}(await fy(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function dy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Jf=new Map;/**
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
 */function py(t,e,n){if(!n)throw new x(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yA(t,e,n,s){if(e===!0&&s===!0)throw new x(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xf(t){if(!$.isDocumentKey(t))throw new x(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zf(t){if($.isDocumentKey(t))throw new x(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ia(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function tn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ia(t);throw new x(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ed{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new x(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dy((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new x(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new x(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new x(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class Ta{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ed({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ed(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new VS;switch(n.type){case"firstParty":return new qS(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Jf.get(e);n&&(U("ComponentProvider","Removing Datastore"),Jf.delete(e),n.terminate())}(this),Promise.resolve()}}function vA(t,e,n,s={}){var r;const i=(t=tn(t,Ta))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ls("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=$e.MOCK_USER;else{o=u_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new x(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new $e(c)}t._authCredentials=new $S(new um(o,a))}}/**
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
 */class st{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}}class nr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new nr(this.firestore,e,this._query)}}class Cn extends nr{constructor(e,n,s){super(e,n,ll(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new $(e))}withConverter(e){return new Cn(this.firestore,e,this._path)}}function d1(t,e,...n){if(t=De(t),py("collection","path",e),t instanceof Ta){const s=pe.fromString(e,...n);return Zf(s),new Cn(t,null,s)}{if(!(t instanceof st||t instanceof Cn))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(pe.fromString(e,...n));return Zf(s),new Cn(t.firestore,null,s)}}function wA(t,e,...n){if(t=De(t),arguments.length===1&&(e=lm.A()),py("doc","path",e),t instanceof Ta){const s=pe.fromString(e,...n);return Xf(s),new st(t,null,new $(s))}{if(!(t instanceof st||t instanceof Cn))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(pe.fromString(e,...n));return Xf(s),new st(t.firestore,t instanceof Cn?t.converter:null,new $(s))}}/**
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
 */class _A{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new zm(this,"async_queue_retry"),this.Xc=()=>{const n=sc();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=sc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Gt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!wi(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Xt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=Tl.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&K()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class sr extends Ta{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new _A,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gy(this),this._firestoreClient.terminate()}}function EA(t,e){const n=typeof t=="object"?t:hp(),s=typeof t=="string"?t:e||"(default)",r=Tu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=a_("firestore");i&&vA(r,...i)}return r}function Al(t){return t._firestoreClient||gy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gy(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,u){return new tb(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,dy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new hA(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new js(Qe.fromBase64String(e))}catch(n){throw new x(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new js(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Sa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ba{constructor(e){this._methodName=e}}/**
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
 */class Rl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
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
 */const IA=/^__.*__$/;class TA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Pn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ei(e,this.data,n,this.fieldTransforms)}}class my{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Pn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function yy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class kl{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new kl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return xo(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(yy(this.ca)&&IA.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class SA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||wa(e)}ya(e,n,s,r=!1){return new kl({ca:e,methodName:n,ga:s,path:qe.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nl(t){const e=t._freezeSettings(),n=wa(t._databaseId);return new SA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bA(t,e,n,s,r,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,r);Ol("Data must be an object, but it was:",o,s);const a=vy(s,o);let c,u;if(i.merge)c=new ct(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=tu(e,h,n);if(!o.contains(f))throw new x(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);_y(l,f)||l.push(f)}c=new ct(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new TA(new nt(a),c,u)}class Ca extends ba{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ca}}class Dl extends ba{_toFieldTransform(e){return new Sb(e.path,new Xr)}isEqual(e){return e instanceof Dl}}function CA(t,e,n,s){const r=t.ya(1,e,n);Ol("Data must be an object, but it was:",r,s);const i=[],o=nt.empty();rs(s,(c,u)=>{const l=Pl(e,c,n);u=De(u);const h=r.da(l);if(u instanceof Ca)i.push(l);else{const f=bi(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new ct(i);return new my(o,a,r.fieldTransforms)}function AA(t,e,n,s,r,i){const o=t.ya(1,e,n),a=[tu(e,s,n)],c=[r];if(i.length%2!=0)throw new x(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(tu(e,i[f])),c.push(i[f+1]);const u=[],l=nt.empty();for(let f=a.length-1;f>=0;--f)if(!_y(u,a[f])){const g=a[f];let v=c[f];v=De(v);const I=o.da(g);if(v instanceof Ca)u.push(g);else{const C=bi(v,I);C!=null&&(u.push(g),l.set(g,C))}}const h=new ct(u);return new my(l,h,o.fieldTransforms)}function RA(t,e,n,s=!1){return bi(n,t.ya(s?4:3,e))}function bi(t,e){if(wy(t=De(t)))return Ol("Unsupported field value:",e,t),vy(t,e);if(t instanceof ba)return function(n,s){if(!yy(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=bi(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=De(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Eb(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ae.fromDate(n);return{timestampValue:Oo(s.serializer,r)}}if(n instanceof Ae){const r=new Ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Oo(s.serializer,r)}}if(n instanceof Rl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof js)return{bytesValue:Um(s.serializer,n._byteString)};if(n instanceof st){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ml(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Ia(n)}`)}(t,e)}function vy(t,e){const n={};return hm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rs(t,(s,r)=>{const i=bi(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function wy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof Rl||t instanceof js||t instanceof st||t instanceof ba)}function Ol(t,e,n){if(!wy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ia(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function tu(t,e,n){if((e=De(e))instanceof Sa)return e._internalPath;if(typeof e=="string")return Pl(t,e);throw xo("Field path arguments must be of type string or ",t,!1,void 0,n)}const kA=new RegExp("[~\\*/\\[\\]]");function Pl(t,e,n){if(e.search(kA)>=0)throw xo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Sa(...e.split("."))._internalPath}catch{throw xo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new x(_.INVALID_ARGUMENT,a+t+c)}function _y(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ey{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NA extends Ey{data(){return super.data()}}function xl(t,e){return typeof e=="string"?Pl(t,e):e instanceof Sa?e._internalPath:e._delegate._internalPath}/**
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
 */function DA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ml{}class OA extends Ml{}function p1(t,e,...n){let s=[];e instanceof Ml&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Ll).length,o=r.filter(a=>a instanceof Aa).length;if(i>1||i>0&&o>0)throw new x(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Aa extends OA{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Aa(e,n,s)}_apply(e){const n=this._parse(e);return Iy(e._query,n),new nr(e.firestore,e.converter,zc(e._query,n))}_parse(e){const n=Nl(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new x(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){nd(l,u);const f=[];for(const g of l)f.push(td(a,r,g));h={arrayValue:{values:f}}}else h=td(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||nd(l,u),h=RA(o,i,l,u==="in"||u==="not-in");return Ce.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function g1(t,e,n){const s=e,r=xl("where",t);return Aa._create(r,s,n)}class Ll extends Ml{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ll(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:bt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Iy(i,a),i=zc(i,a)}(e._query,n),new nr(e.firestore,e.converter,zc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function td(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new x(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Em(e)&&n.indexOf("/")!==-1)throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(pe.fromString(n));if(!$.isDocumentKey(s))throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return bf(t,new $(s))}if(n instanceof st)return bf(t,n._key);throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ia(n)}.`)}function nd(t,e){if(!Array.isArray(t)||t.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Iy(t,e){if(e.isInequality()){const s=hl(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new x(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=_m(t);i!==null&&PA(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function PA(t,e,n){if(!n.isEqual(e))throw new x(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class xA{convertValue(e,n="none"){switch(ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return rs(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Rl(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ol(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Qr(e));default:return null}}convertTimestamp(e){const n=kn(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=pe.fromString(e);ge(qm(s));const r=new Yr(s.get(1),s.get(3)),i=new $(s.popFirst(5));return r.isEqual(n)||Xt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function MA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class wr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ty extends Ey{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new no(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(xl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class no extends Ty{data(e={}){return super.data(e)}}class LA{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new wr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new no(this._firestore,this._userDataWriter,s.key,s,new wr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new no(s._firestore,s._userDataWriter,o.doc.key,o.doc,new wr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new no(s._firestore,s._userDataWriter,o.doc.key,o.doc,new wr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:FA(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function FA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function m1(t){t=tn(t,st);const e=tn(t.firestore,sr);return gA(Al(e),t._key).then(n=>UA(e,t,n))}class Sy extends xA{constructor(e){super(),this.firestore=e}convertBytes(e){return new js(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,n)}}function y1(t){t=tn(t,nr);const e=tn(t.firestore,sr),n=Al(e),s=new Sy(e);return DA(t._query),mA(n,t._query).then(r=>new LA(e,s,t,r))}function v1(t,e,n,...s){t=tn(t,st);const r=tn(t.firestore,sr),i=Nl(r);let o;return o=typeof(e=De(e))=="string"||e instanceof Sa?AA(i,"updateDoc",t._key,e,n,s):CA(i,"updateDoc",t._key,e),Fl(r,[o.toMutation(t._key,Et.exists(!0))])}function w1(t){return Fl(tn(t.firestore,sr),[new fl(t._key,Et.none())])}function _1(t,e){const n=tn(t.firestore,sr),s=wA(t),r=MA(t.converter,e);return Fl(n,[bA(Nl(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Et.exists(!1))]).then(()=>s)}function Fl(t,e){return function(n,s){const r=new Gt;return n.asyncQueue.enqueueAndForget(async()=>tA(await pA(n),s,r)),r.promise}(Al(t),e)}function UA(t,e,n){const s=n.docs.get(e._key),r=new Sy(t);return new Ty(t,r,e._key,s,new wr(n.hasPendingWrites,n.fromCache),e.converter)}function E1(){return new Dl("serverTimestamp")}(function(t,e=!0){(function(n){Zs=n})(zs),Os(new Yn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new sr(new BS(n.getProvider("auth-internal")),new KS(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),bn(_f,"3.12.0",t),bn(_f,"3.12.0","esm2017")})();var VA="firebase",$A="9.22.0";/**
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
 */bn(VA,$A,"app");const BA={apiKey:"AIzaSyDEvhHSl_ncvF13SFpP9xV2aLU1nIoXnzg",authDomain:"vue-cheaptalk-2.firebaseapp.com",projectId:"vue-cheaptalk-2",storageBucket:"vue-cheaptalk-2.appspot.com",messagingSenderId:"335972458365",appId:"1:335972458365:web:c187d96498ca0f7edd7614"},jA=lp(BA),sd=Gp(jA),I1=EA();const qA=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},HA=t=>(Nv("data-v-910b0d27"),t=t(),Dv(),t),KA={class:"navbar"},zA={class:"logo"},WA={class:"menu"},GA={key:0},QA={key:1},YA=HA(()=>tt("svg",{viewBox:"0 0 16 16",class:"bi bi-twitter",fill:"currentColor",height:"18",width:"18",xmlns:"http://www.w3.org/2000/svg"},[tt("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})],-1)),JA={class:"email-style"},XA={__name:"Navbar",setup(t){const e=uc(!1),n=uc(""),s=xT();Vd(()=>{Fp(sd,o=>{o?(e.value=!0,n.value=i(o.email)):e.value=!1})});const r=()=>{confirm("Want to exit?")&&wE(sd).then(()=>{s.push("/")})};function i(o){return o.split("@")[0]}return(o,a)=>{const c=jd("router-link");return fn(),fr("nav",null,[tt("div",KA,[tt("div",zA,[Se(c,{to:"/"},{default:ln(()=>[hn("Cheaptalk.com")]),_:1})]),tt("div",WA,[tt("ul",null,[tt("li",null,[Se(c,{to:"/"},{default:ln(()=>[hn("Home")]),_:1})]),tt("li",null,[e.value?(fn(),mc(c,{key:0,to:"/create-post"},{default:ln(()=>[hn("Create Posts")]),_:1})):ar("",!0)]),tt("li",null,[Se(c,{to:"/authors"},{default:ln(()=>[hn("Authors")]),_:1})]),tt("li",null,[e.value?(fn(),mc(c,{key:0,to:"/feed"},{default:ln(()=>[hn("Feed")]),_:1})):ar("",!0)]),e.value?ar("",!0):(fn(),fr("li",GA,[Se(c,{to:"/register"},{default:ln(()=>[hn("Register")]),_:1})])),e.value?ar("",!0):(fn(),fr("li",QA,[Se(c,{to:"/sign-in"},{default:ln(()=>[hn("Login")]),_:1})])),tt("li",null,[e.value?(fn(),fr("button",{key:0,onClick:r},[YA,tt("span",JA,My(n.value),1)])):ar("",!0)])])])])])}}},ZA=qA(XA,[["__scopeId","data-v-910b0d27"]]),e1={__name:"App",setup(t){return(e,n)=>{const s=jd("router-view");return fn(),fr(Nt,null,[Se(ZA),Se(s)],64)}}},t1="modulepreload",n1=function(t){return"/"+t},rd={},jt=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=n1(i),i in rd)return;rd[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":t1,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},by=OT({history:GI(),routes:[{path:"/",component:()=>jt(()=>import("./Home-3d1e9d5e.js"),["assets/Home-3d1e9d5e.js","assets/Spinner-6b2501ee.js","assets/Spinner-0b971cd4.css","assets/Home-921490ec.css"])},{path:"/register",component:()=>jt(()=>import("./Register-62c9f521.js"),["assets/Register-62c9f521.js","assets/Register-9e078111.css"])},{path:"/sign-in",component:()=>jt(()=>import("./SignIn-aca5fd16.js"),["assets/SignIn-aca5fd16.js","assets/SignIn-dcf0dae3.css"])},{path:"/feed",component:()=>jt(()=>import("./Feed-7e615470.js"),["assets/Feed-7e615470.js","assets/Spinner-6b2501ee.js","assets/Spinner-0b971cd4.css","assets/Feed-54d4608f.css"]),meta:{requiresAuth:!0}},{path:"/all-users",component:()=>jt(()=>import("./User-c328d686.js"),[])},{path:"/create-post",component:()=>jt(()=>import("./Post-060af186.js"),["assets/Post-060af186.js","assets/Spinner-6b2501ee.js","assets/Spinner-0b971cd4.css","assets/Post-905fd093.css"])},{path:"/edit/:id",component:()=>jt(()=>import("./Edit-485eaddc.js"),["assets/Edit-485eaddc.js","assets/Edit-0a794075.css"])},{path:"/delete/:id",component:()=>jt(()=>import("./Delete-37ab17e2.js"),["assets/Delete-37ab17e2.js","assets/Delete-a521b11f.css"])},{path:"/authors",component:()=>jt(()=>import("./Authors-bd829b82.js"),["assets/Authors-bd829b82.js","assets/Spinner-6b2501ee.js","assets/Spinner-0b971cd4.css","assets/Authors-40188586.css"])}]}),s1=()=>new Promise((t,e)=>{const n=Fp(Gp(),s=>{n(),t(s)},e)});by.beforeEach(async(t,e,n)=>{t.matched.some(s=>s.meta.requiresAuth)?await s1()?n():(alert("You dont have access!"),n("/")):n()});const Cy=Xw(e1);Cy.use(by);Cy.mount("#app");export{a1 as A,ar as B,hn as C,ln as D,l1 as E,Nt as F,_1 as G,h1 as H,g1 as I,sd as J,E1 as K,f1 as L,jA as M,wA as N,m1 as O,EA as P,v1 as Q,p1 as R,w1 as S,su as T,qA as _,y1 as a,d1 as b,ht as c,Ld as d,fn as e,fr as f,tt as g,tp as h,i1 as i,Se as j,ws as k,I1 as l,u1 as m,ru as n,Vd as o,Nv as p,Dv as q,uc as r,Gp as s,My as t,xT as u,c1 as v,r1 as w,Fp as x,jd as y,o1 as z};
