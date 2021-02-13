!function(){"use strict";var s=/^sect(\d)$/,n=document.querySelector(".nav-container"),i=document.querySelector(".nav-toggle");i.addEventListener("click",function(e){if(i.classList.contains("is-active"))return r(e);var t=document.documentElement;t.classList.add("is-clipped--nav"),i.classList.add("is-active"),n.classList.add("is-active"),t.addEventListener("click",r),v(e)}),n.addEventListener("click",v);var c,o,l,d=n.querySelector("[data-panel=menu]");function e(){var e,t,n=window.location.hash;if(n&&(n.indexOf("%")&&(n=decodeURIComponent(n)),!(e=d.querySelector('.nav-link[href="'+n+'"]')))){var i=document.getElementById(n.slice(1));if(i)for(var a=i,c=document.querySelector("article.doc");(a=a.parentNode)&&a!==c;){var r=a.id;if(!r&&(r=a.className.match(s))&&(r=(a.firstElementChild||{}).id),r&&(e=d.querySelector('.nav-link[href="#'+r+'"]')))break}}if(e)t=e.parentNode;else{if(!l)return;e=(t=l).querySelector(".nav-link")}t!==o&&(f(d,".nav-item.is-active").forEach(function(e){e.classList.remove("is-active","is-current-path","is-current-page")}),t.classList.add("is-current-page"),u(o=t),m(d,e))}function u(e){for(var t,n=e.parentNode;!(t=n.classList).contains("nav-menu");)"LI"===n.tagName&&t.contains("nav-item")&&t.add("is-active","is-current-path"),n=n.parentNode;e.classList.add("is-active")}function a(){this.classList.toggle("is-active")}function r(e){var t=document.documentElement;t.classList.remove("is-clipped--nav"),i.classList.remove("is-active"),n.classList.remove("is-active"),t.removeEventListener("click",r),v(e)}function v(e){e.stopPropagation()}function m(e,t){var n=e.getBoundingClientRect(),i=n.height,a=window.getComputedStyle(c);"sticky"===a.position&&(i-=n.top-parseFloat(a.top)),e.scrollTop=Math.max(0,.5*(t.getBoundingClientRect().height-i)+t.offsetTop)}function f(e,t){return[].slice.call(e.querySelectorAll(t))}d&&(c=n.querySelector(".nav"),o=d.querySelector(".is-current-page"),(l=o)?(u(o),m(d,o.querySelector(".nav-link"))):d.scrollTop=0,f(d,".nav-item-toggle").forEach(function(e){var t=e.parentElement;e.addEventListener("click",a.bind(t));var n=function(e,t){var n=e.nextElementSibling;if(!n)return;return(!t||n[n.matches?"matches":"msMatchesSelector"](t))&&n}(e,".nav-text");n&&(n.style.cursor="pointer",n.addEventListener("click",a.bind(t)))}),c.querySelector(".context").addEventListener("click",function(){var e=c.querySelector(".is-active[data-panel]"),t="menu"===e.dataset.panel?"explore":"menu";e.classList.toggle("is-active"),c.querySelector("[data-panel="+t+"]").classList.toggle("is-active")}),d.addEventListener("mousedown",function(e){1<e.detail&&e.preventDefault()}),d.querySelector('.nav-link[href^="#"]')&&(window.location.hash&&e(),window.addEventListener("hashchange",e)))}();
!function(){"use strict";var e=document.querySelector("aside.toc.sidebar");if(e){if(document.querySelector("body.-toc"))return e.parentNode.removeChild(e);var t=parseInt(e.dataset.levels||2);if(!(t<0)){for(var a,n,o,c,s=document.querySelector("article.doc"),i=[],r=0;r<=t;r++)i.push(r?".sect"+r+">h"+(r+1)+"[id]":"h1[id].sect0");if(n=i.join(","),o=s,!(a=[].slice.call((o||document).querySelectorAll(n))).length)return e.parentNode.removeChild(e);var l={},u=a.reduce(function(e,t){var n=document.createElement("a");n.textContent=t.textContent,l[n.href="#"+t.id]=n;var o=document.createElement("li");return o.dataset.level=parseInt(t.nodeName.slice(1))-1,o.appendChild(n),e.appendChild(o),e},document.createElement("ul")),d=e.querySelector(".toc-menu");d||((d=document.createElement("div")).className="toc-menu");var f=document.createElement("h3");f.textContent=e.dataset.title||"Contents",d.appendChild(f),d.appendChild(u);var m,v=!document.getElementById("toc")&&s.querySelector("h1.page ~ :not(.is-before-toc)");v&&((m=document.createElement("aside")).className="toc embedded",m.appendChild(d.cloneNode(!0)),v.parentNode.insertBefore(m,v)),window.addEventListener("load",function(){p(),window.addEventListener("scroll",p)})}}function p(){var t,e=window.pageYOffset,n=1.15*h(document.documentElement,"fontSize"),o=s.offsetTop;if(e&&window.innerHeight+e+2>=document.documentElement.scrollHeight){c=Array.isArray(c)?c:Array(c||0);var i=[],r=a.length-1;return a.forEach(function(e,t){var n="#"+e.id;t===r||e.getBoundingClientRect().top+h(e,"paddingTop")>o?(i.push(n),c.indexOf(n)<0&&l[n].classList.add("is-active")):~c.indexOf(n)&&l[c.shift()].classList.remove("is-active")}),u.scrollTop=u.scrollHeight-u.offsetHeight,void(c=1<i.length?i:i[0])}if(Array.isArray(c)&&(c.forEach(function(e){l[e].classList.remove("is-active")}),c=void 0),a.some(function(e){return e.getBoundingClientRect().top+h(e,"paddingTop")-n>o||void(t="#"+e.id)}),t){if(t===c)return;c&&l[c].classList.remove("is-active");var d=l[t];d.classList.add("is-active"),u.scrollHeight>u.offsetHeight&&(u.scrollTop=Math.max(0,d.offsetTop+d.offsetHeight-u.offsetHeight)),c=t}else c&&(l[c].classList.remove("is-active"),c=void 0)}function h(e,t){return parseFloat(window.getComputedStyle(e)[t])}}();
!function(){"use strict";var o=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function i(e){return e&&(~e.indexOf("%")?decodeURIComponent(e):e).slice(1)}function c(e){e&&(window.location.hash="#"+this.id,e.preventDefault()),window.scrollTo(0,function e(t,n){return o.contains(t)?e(t.offsetParent,t.offsetTop+n):n}(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",function e(t){var n,o;(n=i(window.location.hash))&&(o=document.getElementById(n))&&(c.bind(o)(),setTimeout(c.bind(o),0)),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t,n;(t=i(e.hash))&&(n=document.getElementById(t))&&e.addEventListener("click",c.bind(n))})}();
!function(){"use strict";var t,e=document.querySelector(".page-versions .version-menu-toggle");e&&(t=document.querySelector(".page-versions"),e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),document.documentElement.addEventListener("click",function(){t.classList.remove("is-active")}))}();
document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==t.length&&t.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("is-active"),document.getElementById(e.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")})})});
!function(){"use strict";var l=window.location.hash;function o(t,a){return Array.prototype.slice.call((a||document).querySelectorAll(t))}o(".tabset").forEach(function(c){var n,r,t=c.querySelector(".tabs");t&&(o("li",t).forEach(function(t,a){var e,i,s=(t.querySelector("a[id]")||t).id;s&&(i=s,e=o(".tab-pane",c).find(function(t){return t.getAttribute("aria-labelledby")===i}),a||(r={tab:t,pane:e}),!n&&l==="#"+s&&(n=!0)?(t.classList.add("is-active"),e&&e.classList.add("is-active")):a||(t.classList.remove("is-active"),e&&e.classList.remove("is-active")),t.addEventListener("click",function(t){var a=this.tab,e=this.pane;o(".tabs li, .tab-pane",this.tabset).forEach(function(t){t===a||t===e?t.classList.add("is-active"):t.classList.remove("is-active")}),t.preventDefault()}.bind({tabset:c,tab:t,pane:e})))}),!n&&r&&(r.tab.classList.add("is-active"),r.pane&&r.pane.classList.add("is-active"))),c.classList.remove("is-loading")})}();
!function(){"use strict";var o=new ClipboardJS(".copybtn");o.on("success",function(o){}),o.on("error",function(o){console.error("Action:",o.action),console.error("Trigger:",o.trigger)})}();