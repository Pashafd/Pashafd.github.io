(()=>{"use strict";var e,t,r,n,o,i,c,d={579:(e,t,r)=>{r(288),document.addEventListener("DOMContentLoaded",(function(){if(document.createElement("video").canPlayType){var e=function(){m.classList.toggle("hoverVideoControls"),w.classList.toggle("hoverVideoControls"),v.paused||v.ended?L.style.display="flex":L.style.display="none"},t=function(e){e=Math.floor(e);var t=Math.floor(e/60),r=Math.floor(e-60*t),n=t,o=r;return t<10&&(n="0"+t),r<10&&(o="0"+r),n+":"+o},r=function(e){var t=0;if(e.offsetParent)do{t+=e.offsetLeft}while(e=e.offsetParent);return t},n=function(){v.paused||v.ended?(v.play(),e()):(v.pause(),e()),y.forEach((function(e){return e.classList.toggle("hidden")})),g.classList.toggle("hidden"),"00:00"==d.innerHTML&&(d.innerHTML=t(v.duration))},o=document.querySelector("body"),i=document.querySelector(".volumeBar"),c=document.querySelector(".videoMute"),d=document.querySelector(".timeVideo"),a=document.querySelector(".timeCur"),u=document.querySelector(".videoSpeed"),l=document.querySelector(".speedBtn"),s=document.querySelector("#videoProgress-bar"),f=document.querySelector(".setingsVideo"),p=document.querySelector(".speedBar"),h=document.querySelector(".video-container"),v=document.querySelector("video"),m=document.querySelector(".options"),y=document.querySelectorAll(".btnPlay"),g=document.querySelector(".btnPause"),E=document.querySelector(".btnPrev"),b=document.querySelector(".btnNext"),w=document.querySelector(".btnFullscreen"),L=document.querySelector(".centerBtnWrapper"),k=0,S=["./assets/video/Supernova.mp4","./assets/video/WhatsBeyond.mp4"];v.src=S[k],v.controls=!1;var x=document.createElement("div"),q=document.createElement("span");q.classList.add("bufferedAmount"),x.appendChild(q),x.classList.add("buffered"),m.appendChild(x);var _=!1;document.fullscreenEnabled||document.createElement("video").webkitRequestFullScreen||(fullscreen.style.display="none");var D=function(){A()?(document.exitFullscreen&&document.exitFullscreen(),T(!1)):(h.requestFullscreen&&h.requestFullscreen(),T(!0))},A=function(){return!!document.fullscreenElement},T=function(e){h.setAttribute("data-fullscreen",!!e)};y.forEach((function(e){e.addEventListener("click",n)})),g.addEventListener("click",n),v.addEventListener("click",n),document.addEventListener("keydown",(function(e){" "==e.key&&n(),function(e){"ArrowRight"===e.key&&v.played?v.currentTime+=10:"ArrowLeft"==e.key&&v.played&&(v.currentTime-=10)}(e)})),E.addEventListener("click",(function(){0!==k&&(k--,v.src=S[k])})),b.addEventListener("click",(function(){k>=S.length-1||(k++,console.log(k),v.src=S[k])})),v.addEventListener("timeupdate",(function(){var e=Math.floor(v.currentTime)/(Math.floor(v.duration)/100);s.value=e,a.innerHTML=t(v.currentTime)})),s.addEventListener("click",(function(e){var t=(e.pageX-r(s)).toFixed(2),n=((v.duration/s.offsetWidth).toFixed(2)*t).toFixed(2);v.currentTime=n})),s.addEventListener("mouseenter",(function(e){var n=e.x,i=document.createElement("span"),c=(o.offsetWidth-h.offsetWidth)/2;i.classList.add("mouseHoverTime");var d=(e.pageX-r(s)).toFixed(2),a=((v.duration/s.offsetWidth).toFixed(2)*d).toFixed(2);document.querySelector(".mouseHoverTime")||(i.style.left=n-c+"px",i.innerText="".concat(t(a)),h.append(i),setTimeout((function(){document.querySelectorAll(".mouseHoverTime").forEach((function(e){return e.remove()}))}),500))})),i.addEventListener("change",(function(){var e=i.value/100;v.volume=e})),f.addEventListener("click",(function(){p.classList.toggle("hidden")})),u.addEventListener("change",(function(){var e=u.value/100;v.playbackRate=e})),l.addEventListener("click",(function(){v.playbackRate=1,u.value=100})),c.addEventListener("click",(function(){v.muted=!v.muted,i.value=0,c.classList.add("false"),v.muted||(c.classList.remove("false"),i.value=100*v.volume)})),w.addEventListener("click",D),v.addEventListener("dblclick",D),h.addEventListener("touchstart",(function(e){var t=e.changedTouches;if(!_)return _=!0,setTimeout((function(){_=!1}),300),!1;e.preventDefault();var r=h.offsetWidth/2,n=(o.offsetWidth-h.offsetWidth)/2;t[0].pageX-n>r?v.currentTime+=10:t[0].pageX-n<r&&(v.currentTime-=10)})),v.addEventListener("progress",(function(){var e=v.buffered.end(0)/v.duration*100;q.style.width=Math.floor(e)+"%"}))}}))},783:(e,t,r)=>{var n=r(618),o=Object.create(null),i="undefined"==typeof document,c=Array.prototype.forEach;function d(){}function a(e,t){if(!t){if(!e.href)return;t=e.href.split("?")[0]}if(l(t)&&!1!==e.isLoaded&&t&&t.indexOf(".css")>-1){e.visited=!0;var r=e.cloneNode();r.isLoaded=!1,r.addEventListener("load",(function(){r.isLoaded||(r.isLoaded=!0,e.parentNode.removeChild(e))})),r.addEventListener("error",(function(){r.isLoaded||(r.isLoaded=!0,e.parentNode.removeChild(e))})),r.href="".concat(t,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(r,e.nextSibling):e.parentNode.appendChild(r)}}function u(){var e=document.querySelectorAll("link");c.call(e,(function(e){!0!==e.visited&&a(e)}))}function l(e){return!!/^https?:/i.test(e)}e.exports=function(e,t){if(i)return console.log("no window.document found, will not HMR CSS"),d;var r,s,f=function(e){var t=o[e];if(!t){if(document.currentScript)t=document.currentScript.src;else{var r=document.getElementsByTagName("script"),i=r[r.length-1];i&&(t=i.src)}o[e]=t}return function(e){if(!t)return null;var r=t.split(/([^\\/]+)\.js$/),o=r&&r[1];return o&&e?e.split(",").map((function(e){var r=new RegExp("".concat(o,"\\.js$"),"g");return n(t.replace(r,"".concat(e.replace(/{fileName}/g,o),".css")))})):[t.replace(".js",".css")]}}(e);return r=function(){var e=f(t.filename),r=function(e){if(!e)return!1;var t=document.querySelectorAll("link"),r=!1;return c.call(t,(function(t){if(t.href){var o=function(e,t){var r;return e=n(e,{stripWWW:!1}),t.some((function(n){e.indexOf(t)>-1&&(r=n)})),r}(t.href,e);l(o)&&!0!==t.visited&&o&&(a(t,o),r=!0)}})),r}(e);if(t.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void u();r?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),u())},50,s=0,function(){var e=this,t=arguments,n=function(){return r.apply(e,t)};clearTimeout(s),s=setTimeout(n,50)}}},618:e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var t=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",r=e.replace(new RegExp(t,"i"),"").split("/"),n=r[0].toLowerCase().replace(/\.$/,"");return r[0]="",t+n+r.reduce((function(e,t){switch(t){case"..":e.pop();break;case".":break;default:e.push(t)}return e}),[]).join("/")}},288:(e,t,r)=>{var n=r(783)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)}},a={};function u(e){if(a[e])return a[e].exports;var t=a[e]={id:e,exports:{}},r={id:e,module:t,factory:d[e],require:u};return u.i.forEach((function(e){e(r)})),t=r.module,r.factory.call(t.exports,t,t.exports,r.require),t.exports}u.m=d,u.c=a,u.i=[],u.hu=e=>e+"."+u.h()+".hot-update.js",u.miniCssF=e=>{},u.hmrF=()=>"main."+u.h()+".hot-update.json",u.h=()=>"bed5e9bd43fd4eb89218",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="videoplayer:",u.l=(r,n,o,i)=>{if(e[r])e[r].push(n);else{var c,d;if(void 0!==o)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var s=a[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+o){c=s;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.setAttribute("data-webpack",t+o),c.src=r),e[r]=[n];var f=(t,n)=>{c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),d&&document.head.appendChild(c)}},(()=>{var e,t,r,n,o={},i=u.c,c=[],d=[],a="idle";function l(e){a=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}function s(e){if(0===t.length)return e();var r=t;return t=[],Promise.all(r).then((function(){return s(e)}))}function f(e){if("idle"!==a)throw new Error("check() is only allowed in idle status");return l("check"),u.hmrM().then((function(n){if(!n)return l(v()?"ready":"idle"),null;l("prepare");var o=[];return t=[],r=[],Promise.all(Object.keys(u.hmrC).reduce((function(e,t){return u.hmrC[t](n.c,n.r,n.m,e,r,o),e}),[])).then((function(){return s((function(){return e?h(e):(l("ready"),o)}))}))}))}function p(e){return"ready"!==a?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},v();var t=r.map((function(t){return t(e)}));r=void 0;var o,i=t.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return l("abort"),Promise.resolve().then((function(){throw i[0]}));l("dispose"),t.forEach((function(e){e.dispose&&e.dispose()})),l("apply");var c=function(e){o||(o=e)},d=[];return t.forEach((function(e){if(e.apply){var t=e.apply(c);if(t)for(var r=0;r<t.length;r++)d.push(t[r])}})),o?(l("fail"),Promise.resolve().then((function(){throw o}))):n?h(e).then((function(e){return d.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):(l("idle"),Promise.resolve(d))}function v(){if(n)return r||(r=[]),Object.keys(u.hmrI).forEach((function(e){n.forEach((function(t){u.hmrI[e](t,r)}))})),n=void 0,!0}u.hmrD=o,u.i.push((function(h){var v,m,y,g=h.module,E=function(r,n){var o=i[n];if(!o)return r;var d=function(t){if(o.hot.active){if(i[t]){var d=i[t].parents;-1===d.indexOf(n)&&d.push(n)}else c=[n],e=t;-1===o.children.indexOf(t)&&o.children.push(t)}else console.warn("[HMR] unexpected require("+t+") from disposed module "+n),c=[];return r(t)},u=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&"e"!==f&&Object.defineProperty(d,f,u(f));return d.e=function(e){return function(e){switch(a){case"ready":return l("prepare"),t.push(e),s((function(){l("ready")})),e;case"prepare":return t.push(e),e;default:return e}}(r.e(e))},d}(h.require,h.id);g.hot=(v=h.id,m=g,y={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==v,_requireSelf:function(){c=m.parents.slice(),e=v,u(v)},active:!0,accept:function(e,t){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)y._acceptedDependencies[e[r]]=t||function(){};else y._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)y._declinedDependencies[e[t]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=y._disposeHandlers.indexOf(e);t>=0&&y._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,a){case"idle":r=[],Object.keys(u.hmrI).forEach((function(e){u.hmrI[e](v,r)})),l("ready");break;case"ready":Object.keys(u.hmrI).forEach((function(e){u.hmrI[e](v,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(v)}},check:f,apply:p,status:function(e){if(!e)return a;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:o[v]},e=void 0,y),g.parents=c,g.children=[],c=[],h.require=E})),u.hmrC={},u.hmrI={}})(),(()=>{var e;u.g.importScripts&&(e=u.g.location+"");var t=u.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e})(),r=(e,t,r,n)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)r();else{var c=i&&("load"===i.type?"missing":i.type),d=i&&i.target&&i.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=c,a.request=d,o.parentNode.removeChild(o),n(a)}},o.href=t,document.head.appendChild(o),o},n=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(c=r[n]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===t))return c}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var c;if((o=(c=i[n]).getAttribute("data-href"))===e||o===t)return c}},o=[],i=[],c=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var t=o[e];t.parentNode&&t.parentNode.removeChild(t)}o.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}),u.hmrC.miniCss=(e,t,d,a,l,s)=>{l.push(c),e.forEach((e=>{var t=u.miniCssF(e),c=u.p+t;const d=n(t,c);d&&a.push(new Promise(((t,n)=>{var a=r(e,c,(()=>{a.as="style",a.rel="preload",t()}),n);o.push(d),i.push(a)})))}))},(()=>{var e,t,r,n,o={179:0},i={};function c(e){return new Promise(((t,r)=>{i[e]=t;var n=u.p+u.hu(e),o=new Error;u.l(n,(t=>{if(i[e]){i[e]=void 0;var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+n+": "+c+")",o.name="ChunkLoadError",o.type=n,o.request=c,r(o)}}))}))}function d(i){function c(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),i=o.id,c=o.chain,a=u.c[i];if(a&&(!a.hot._selfAccepted||a.hot._selfInvalidated)){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var l=0;l<a.parents.length;l++){var s=a.parents[l],f=u.c[s];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(f.hot._acceptedDependencies[i]?(r[s]||(r[s]=[]),d(r[s],[i])):(delete r[s],t.push(s),n.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}u.f&&delete u.f.jsonpHmr,e=void 0;var a={},l=[],s={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in t)if(u.o(t,p)){var h,v=t[p],m=!1,y=!1,g=!1,E="";switch((h=v?c(p):{type:"disposed",moduleId:p}).chain&&(E="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+E));break;case"declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+E));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(h),i.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+E));break;case"accepted":i.onAccepted&&i.onAccepted(h),y=!0;break;case"disposed":i.onDisposed&&i.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in s[p]=v,d(l,h.outdatedModules),h.outdatedDependencies)u.o(h.outdatedDependencies,p)&&(a[p]||(a[p]=[]),d(a[p],h.outdatedDependencies[p]));g&&(d(l,[h.moduleId]),s[p]=f)}t=void 0;for(var b,w=[],L=0;L<l.length;L++){var k=l[L];u.c[k]&&u.c[k].hot._selfAccepted&&s[k]!==f&&!u.c[k].hot._selfInvalidated&&w.push({module:k,require:u.c[k].hot._requireSelf,errorHandler:u.c[k].hot._selfAccepted})}return{dispose:function(){var e;r.forEach((function(e){delete o[e]})),r=void 0;for(var t,n=l.slice();n.length>0;){var i=n.pop(),c=u.c[i];if(c){var d={},s=c.hot._disposeHandlers;for(L=0;L<s.length;L++)s[L].call(null,d);for(u.hmrD[i]=d,c.hot.active=!1,delete u.c[i],delete a[i],L=0;L<c.children.length;L++){var f=u.c[c.children[L]];f&&(e=f.parents.indexOf(i))>=0&&f.parents.splice(e,1)}}}for(var p in a)if(u.o(a,p)&&(c=u.c[p]))for(b=a[p],L=0;L<b.length;L++)t=b[L],(e=c.children.indexOf(t))>=0&&c.children.splice(e,1)},apply:function(e){for(var t in s)u.o(s,t)&&(u.m[t]=s[t]);for(var r=0;r<n.length;r++)n[r](u);for(var o in a)if(u.o(a,o)){var c=u.c[o];if(c){b=a[o];for(var d=[],f=[],p=0;p<b.length;p++){var h=b[p],v=c.hot._acceptedDependencies[h];if(v){if(-1!==d.indexOf(v))continue;d.push(v),f.push(h)}}for(var m=0;m<d.length;m++)try{d[m].call(null,b)}catch(t){i.onErrored&&i.onErrored({type:"accept-errored",moduleId:o,dependencyId:f[m],error:t}),i.ignoreErrored||e(t)}}}for(var y=0;y<w.length;y++){var g=w[y],E=g.module;try{g.require(E)}catch(t){if("function"==typeof g.errorHandler)try{g.errorHandler(t)}catch(r){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:E,error:r,originalError:t}),i.ignoreErrored||e(r),e(t)}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:E,error:t}),i.ignoreErrored||e(t)}}return l}}}self.webpackHotUpdatevideoplayer=(e,r,o)=>{for(var c in r)u.o(r,c)&&(t[c]=r[c]);o&&n.push(o),i[e]&&(i[e](),i[e]=void 0)},u.hmrI.jsonp=function(e,o){t||(t={},n=[],r=[],o.push(d)),u.o(t,e)||(t[e]=u.m[e])},u.hmrC.jsonp=function(i,a,l,s,f,p){f.push(d),e={},r=a,t=l.reduce((function(e,t){return e[t]=!1,e}),{}),n=[],i.forEach((function(t){u.o(o,t)&&void 0!==o[t]&&(s.push(c(t)),e[t]=!0)})),u.f&&(u.f.jsonpHmr=function(t,r){e&&!u.o(e,t)&&u.o(o,t)&&void 0!==o[t]&&(r.push(c(t)),e[t]=!0)})},u.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(u.p+u.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),u(579)})();