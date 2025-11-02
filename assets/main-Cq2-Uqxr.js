(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function p(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(s){if(s.ep)return;s.ep=!0;const r=p(s);fetch(s.href,r)}})();function nt(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var X={exports:{}},at=X.exports,et;function it(){return et||(et=1,(function(o,x){(function(p,c){o.exports=c()})(at,function(){return(function(p){function c(r){if(s[r])return s[r].exports;var f=s[r]={exports:{},id:r,loaded:!1};return p[r].call(f.exports,f,f.exports,c),f.loaded=!0,f.exports}var s={};return c.m=p,c.c=s,c.p="dist/",c(0)})([function(p,c,s){function r(_){return _&&_.__esModule?_:{default:_}}var f=Object.assign||function(_){for(var H=1;H<arguments.length;H++){var N=arguments[H];for(var F in N)Object.prototype.hasOwnProperty.call(N,F)&&(_[F]=N[F])}return _},L=s(1),P=(r(L),s(6)),e=r(P),d=s(7),t=r(d),n=s(8),a=r(n),l=s(9),g=r(l),v=s(10),h=r(v),w=s(11),m=r(w),b=s(14),y=r(b),q=[],I=!1,S={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},T=function(){var _=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(_&&(I=!0),I)return q=(0,m.default)(q,S),(0,h.default)(q,S.once),q},C=function(){q=(0,y.default)(),T()},u=function(){q.forEach(function(_,H){_.node.removeAttribute("data-aos"),_.node.removeAttribute("data-aos-easing"),_.node.removeAttribute("data-aos-duration"),_.node.removeAttribute("data-aos-delay")})},i=function(_){return _===!0||_==="mobile"&&g.default.mobile()||_==="phone"&&g.default.phone()||_==="tablet"&&g.default.tablet()||typeof _=="function"&&_()===!0},k=function(_){S=f(S,_),q=(0,y.default)();var H=document.all&&!window.atob;return i(S.disable)||H?u():(S.disableMutationObserver||a.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),S.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",S.easing),document.querySelector("body").setAttribute("data-aos-duration",S.duration),document.querySelector("body").setAttribute("data-aos-delay",S.delay),S.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?T(!0):S.startEvent==="load"?window.addEventListener(S.startEvent,function(){T(!0)}):document.addEventListener(S.startEvent,function(){T(!0)}),window.addEventListener("resize",(0,t.default)(T,S.debounceDelay,!0)),window.addEventListener("orientationchange",(0,t.default)(T,S.debounceDelay,!0)),window.addEventListener("scroll",(0,e.default)(function(){(0,h.default)(q,S.once)},S.throttleDelay)),S.disableMutationObserver||a.default.ready("[data-aos]",C),q)};p.exports={init:k,refresh:T,refreshHard:C}},function(p,c){},,,,,function(p,c){(function(s){function r(i,k,_){function H(A){var M=D,G=W;return D=W=void 0,R=A,O=i.apply(G,M)}function N(A){return R=A,j=setTimeout(V,k),U?H(A):O}function F(A){var M=A-$,G=A-R,tt=k-M;return Y?C(tt,B-G):tt}function K(A){var M=A-$,G=A-R;return $===void 0||M>=k||M<0||Y&&G>=B}function V(){var A=u();return K(A)?Q(A):void(j=setTimeout(V,F(A)))}function Q(A){return j=void 0,E&&D?H(A):(D=W=void 0,O)}function Z(){j!==void 0&&clearTimeout(j),R=0,D=$=W=j=void 0}function J(){return j===void 0?O:Q(u())}function z(){var A=u(),M=K(A);if(D=arguments,W=this,$=A,M){if(j===void 0)return N($);if(Y)return j=setTimeout(V,k),H($)}return j===void 0&&(j=setTimeout(V,k)),O}var D,W,B,O,j,$,R=0,U=!1,Y=!1,E=!0;if(typeof i!="function")throw new TypeError(n);return k=d(k)||0,L(_)&&(U=!!_.leading,Y="maxWait"in _,B=Y?T(d(_.maxWait)||0,k):B,E="trailing"in _?!!_.trailing:E),z.cancel=Z,z.flush=J,z}function f(i,k,_){var H=!0,N=!0;if(typeof i!="function")throw new TypeError(n);return L(_)&&(H="leading"in _?!!_.leading:H,N="trailing"in _?!!_.trailing:N),r(i,k,{leading:H,maxWait:k,trailing:N})}function L(i){var k=typeof i>"u"?"undefined":t(i);return!!i&&(k=="object"||k=="function")}function P(i){return!!i&&(typeof i>"u"?"undefined":t(i))=="object"}function e(i){return(typeof i>"u"?"undefined":t(i))=="symbol"||P(i)&&S.call(i)==l}function d(i){if(typeof i=="number")return i;if(e(i))return a;if(L(i)){var k=typeof i.valueOf=="function"?i.valueOf():i;i=L(k)?k+"":k}if(typeof i!="string")return i===0?i:+i;i=i.replace(g,"");var _=h.test(i);return _||w.test(i)?m(i.slice(2),_?2:8):v.test(i)?a:+i}var t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},n="Expected a function",a=NaN,l="[object Symbol]",g=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,w=/^0o[0-7]+$/i,m=parseInt,b=(typeof s>"u"?"undefined":t(s))=="object"&&s&&s.Object===Object&&s,y=(typeof self>"u"?"undefined":t(self))=="object"&&self&&self.Object===Object&&self,q=b||y||Function("return this")(),I=Object.prototype,S=I.toString,T=Math.max,C=Math.min,u=function(){return q.Date.now()};p.exports=f}).call(c,(function(){return this})())},function(p,c){(function(s){function r(u,i,k){function _(E){var A=z,M=D;return z=D=void 0,$=E,B=u.apply(M,A)}function H(E){return $=E,O=setTimeout(K,i),R?_(E):B}function N(E){var A=E-j,M=E-$,G=i-A;return U?T(G,W-M):G}function F(E){var A=E-j,M=E-$;return j===void 0||A>=i||A<0||U&&M>=W}function K(){var E=C();return F(E)?V(E):void(O=setTimeout(K,N(E)))}function V(E){return O=void 0,Y&&z?_(E):(z=D=void 0,B)}function Q(){O!==void 0&&clearTimeout(O),$=0,z=j=D=O=void 0}function Z(){return O===void 0?B:V(C())}function J(){var E=C(),A=F(E);if(z=arguments,D=this,j=E,A){if(O===void 0)return H(j);if(U)return O=setTimeout(K,i),_(j)}return O===void 0&&(O=setTimeout(K,i)),B}var z,D,W,B,O,j,$=0,R=!1,U=!1,Y=!0;if(typeof u!="function")throw new TypeError(t);return i=e(i)||0,f(k)&&(R=!!k.leading,U="maxWait"in k,W=U?S(e(k.maxWait)||0,i):W,Y="trailing"in k?!!k.trailing:Y),J.cancel=Q,J.flush=Z,J}function f(u){var i=typeof u>"u"?"undefined":d(u);return!!u&&(i=="object"||i=="function")}function L(u){return!!u&&(typeof u>"u"?"undefined":d(u))=="object"}function P(u){return(typeof u>"u"?"undefined":d(u))=="symbol"||L(u)&&I.call(u)==a}function e(u){if(typeof u=="number")return u;if(P(u))return n;if(f(u)){var i=typeof u.valueOf=="function"?u.valueOf():u;u=f(i)?i+"":i}if(typeof u!="string")return u===0?u:+u;u=u.replace(l,"");var k=v.test(u);return k||h.test(u)?w(u.slice(2),k?2:8):g.test(u)?n:+u}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},t="Expected a function",n=NaN,a="[object Symbol]",l=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,h=/^0o[0-7]+$/i,w=parseInt,m=(typeof s>"u"?"undefined":d(s))=="object"&&s&&s.Object===Object&&s,b=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,y=m||b||Function("return this")(),q=Object.prototype,I=q.toString,S=Math.max,T=Math.min,C=function(){return y.Date.now()};p.exports=r}).call(c,(function(){return this})())},function(p,c){function s(d){var t=void 0,n=void 0;for(t=0;t<d.length;t+=1)if(n=d[t],n.dataset&&n.dataset.aos||n.children&&s(n.children))return!0;return!1}function r(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function f(){return!!r()}function L(d,t){var n=window.document,a=r(),l=new a(P);e=t,l.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function P(d){d&&d.forEach(function(t){var n=Array.prototype.slice.call(t.addedNodes),a=Array.prototype.slice.call(t.removedNodes),l=n.concat(a);if(s(l))return e()})}Object.defineProperty(c,"__esModule",{value:!0});var e=function(){};c.default={isSupported:f,ready:L}},function(p,c){function s(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function r(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(c,"__esModule",{value:!0});var f=(function(){function n(a,l){for(var g=0;g<l.length;g++){var v=l[g];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(a,v.key,v)}}return function(a,l,g){return l&&n(a.prototype,l),g&&n(a,g),a}})(),L=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,P=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,e=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,t=(function(){function n(){s(this,n)}return f(n,[{key:"phone",value:function(){var a=r();return!(!L.test(a)&&!P.test(a.substr(0,4)))}},{key:"mobile",value:function(){var a=r();return!(!e.test(a)&&!d.test(a.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),n})();c.default=new t},function(p,c){Object.defineProperty(c,"__esModule",{value:!0});var s=function(f,L,P){var e=f.node.getAttribute("data-aos-once");L>f.position?f.node.classList.add("aos-animate"):typeof e<"u"&&(e==="false"||!P&&e!=="true")&&f.node.classList.remove("aos-animate")},r=function(f,L){var P=window.pageYOffset,e=window.innerHeight;f.forEach(function(d,t){s(d,e+P,L)})};c.default=r},function(p,c,s){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(c,"__esModule",{value:!0});var f=s(12),L=r(f),P=function(e,d){return e.forEach(function(t,n){t.node.classList.add("aos-init"),t.position=(0,L.default)(t.node,d.offset)}),e};c.default=P},function(p,c,s){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(c,"__esModule",{value:!0});var f=s(13),L=r(f),P=function(e,d){var t=0,n=0,a=window.innerHeight,l={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(l.offset&&!isNaN(l.offset)&&(n=parseInt(l.offset)),l.anchor&&document.querySelectorAll(l.anchor)&&(e=document.querySelectorAll(l.anchor)[0]),t=(0,L.default)(e).top,l.anchorPlacement){case"top-bottom":break;case"center-bottom":t+=e.offsetHeight/2;break;case"bottom-bottom":t+=e.offsetHeight;break;case"top-center":t+=a/2;break;case"bottom-center":t+=a/2+e.offsetHeight;break;case"center-center":t+=a/2+e.offsetHeight/2;break;case"top-top":t+=a;break;case"bottom-top":t+=e.offsetHeight+a;break;case"center-top":t+=e.offsetHeight/2+a}return l.anchorPlacement||l.offset||isNaN(d)||(n=d),t+n};c.default=P},function(p,c){Object.defineProperty(c,"__esModule",{value:!0});var s=function(r){for(var f=0,L=0;r&&!isNaN(r.offsetLeft)&&!isNaN(r.offsetTop);)f+=r.offsetLeft-(r.tagName!="BODY"?r.scrollLeft:0),L+=r.offsetTop-(r.tagName!="BODY"?r.scrollTop:0),r=r.offsetParent;return{top:L,left:f}};c.default=s},function(p,c){Object.defineProperty(c,"__esModule",{value:!0});var s=function(r){return r=r||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(r,function(f){return{node:f}})};c.default=s}])})})(X)),X.exports}var ot=it();const ct=nt(ot),lt=`<header class="header">\r
  <div class="header__container">\r
    <div class="header__logo">\r
      <a href="index.html">MiniStore<span>.</span></a>\r
    </div>\r
    <div class="header__menu menu">\r
      <!-- <button type="button" class="menu__icon icon-menu"><span></span></button> -->\r
      <nav class="menu__body">\r
        <ul class="menu__list">\r
          <li class="menu__item"><a href="index.html" class="menu__link">Home</a></li>\r
\r
\r
          <li class="menu__item">\r
            <button type="button" class="menu__toggle-btn" aria-expanded="false" aria-label="Toggle sub menu">Pages\r
              <span class="_icon-ion_caret-down"></span></button>\r
            <ul class="menu__subnav">\r
              <li class="menu__subnav-item"><a href="about.html" class="menu__subnav-link">About us</a></li>\r
              <li class="menu__subnav-item"><a href="shop.html" class="menu__subnav-link">Shop</a></li>\r
              <li class="menu__subnav-item"><a href="product.html" class="menu__subnav-link">Product</a></li>\r
              <li class="menu__subnav-item"><a href="cart.html" class="menu__subnav-link">Cart</a></li>\r
              <li class="menu__subnav-item"><a href="checkout.html" class="menu__subnav-link">Checkout</a></li>\r
              <li class="menu__subnav-item"><a href="blog.html" class="menu__subnav-link">Blog</a></li>\r
              <li class="menu__subnav-item"><a href="blog-post.html" class="menu__subnav-link">Blog-Post</a></li>\r
              <li class="menu__subnav-item"><a href="contact.html" class="menu__subnav-link">Contact</a></li>\r
            </ul>\r
\r
          </li>\r
          <li class="menu__item"><a href="about.html" class="menu__link">About</a></li>\r
          <li class="menu__item"><a href="blog.html" class="menu__link">Blogs</a></li>\r
          <li class="menu__item"><a href="contact.html" class="menu__link">Contact</a></li>\r
        </ul>\r
      </nav>\r
\r
\r
      <div class="header__actions actions-header">\r
        <ul class="actions-header__items">\r
          <li class="actions-header__item">\r
            <a class="actions-header__link _icon-ion_search" href="#"></a>\r
          </li>\r
          <li class="actions-header__item">\r
            <a class="actions-header__link _icon-ion_person" href="#"></a>\r
          </li>\r
          <li class="actions-header__item">\r
            <a class="actions-header__link _icon-ion_cart" href="#"><span>(0)</span></a>\r
          </li>\r
        </ul>\r
      </div>\r
\r
      <button type="button" class="menu__icon icon-menu"><span></span></button>\r
\r
    </div>\r
\r
  </div>\r
</header>`;function dt(){document.body.style.overflow="hidden"}function ut(){document.body.style.overflow="auto"}function pt(){document.body.style.overflow==="hidden"?ut():dt()}function _t(){const o=document.querySelector("#header");if(!o)return;o.innerHTML+=lt;const x=document.querySelectorAll(".menu__toggle-btn");x.forEach(p=>{p.addEventListener("click",c=>{c.stopPropagation();const s=p.nextElementSibling,r=p.getAttribute("aria-expanded")==="true";p.classList.toggle("open"),p.setAttribute("aria-expanded",!r),s.classList.toggle("open",!r)})}),document.addEventListener("click",()=>{x.forEach(p=>{p.setAttribute("aria-expanded","false"),p.nextElementSibling.classList.remove("open"),p.classList.remove("open")})}),document.querySelector(".icon-menu")&&document.addEventListener("click",function(p){p.target.closest(".icon-menu")&&(pt(),document.documentElement.classList.toggle("menu-open"))})}const st=document.querySelector(" .menu__item .menu__toggle-btn ");st&&st.addEventListener("click",o=>{o.target.blur()});const mt=`<footer class="footer">\r
  <div class="footer__top">\r
    <div class="footer__container">\r
      <div class="footer_company company-footer">\r
        <div class="company-footer__logo">\r
          <a href="/">MiniStore<span>.</span></a>\r
        </div>\r
        <div class="company-footer__text">\r
          <p>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat\r
            nullam\r
            fringilla.</p>\r
        </div>\r
        <div class="company-footer__cocial">\r
          <div class="social">\r
            <a href="#" class="social__link _icon-s-facebook"></a>\r
            <a href="#" class="social__link _icon-s-instagram"></a>\r
            <a href="#" class="social__link _icon-s-twitter"></a>\r
            <a href="#" class="social__link _icon-s-linkedin"></a>\r
            <a href="#" class="social__link _icon-s-youtube"></a>\r
          </div>\r
        </div>\r
      </div>\r
      <div data-spollers="767.98,max" class="footer__menu menu-footer">\r
        <details class="menu-footer__item">\r
          <summary data-spoller-close class="menu-footer__title">Quick links</summary>\r
          <ul class="menu-footer__list">\r
            <li class="menu-footer__element"><a href="№" class="menu-footer__link">Home</a></li>\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">About</a></li>\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Shop</a></li>\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Blogs</a></li>\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Contact</a></li>\r
          </ul>\r
        </details>\r
        <details class="menu-footer__item ">\r
          <summary data-spoller-close class="menu-footer__title">Help & info</summary>\r
          <ul class="menu-footer__list">\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Track Your Order</a></li>\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Returns policies</a></li>\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Shipping + Delivery</a></li>\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Contact Us</a></li>\r
            <li class="menu-footer__element"><a href="#" class="menu-footer__link">Faqs</a></li>\r
          </ul>\r
        </details>\r
        <details class="menu-footer__item ">\r
          <summary data-spoller-close class="menu-footer__title">Contact us</summary>\r
          <div class="menu-footer__contact contact-footer">\r
            <div class="contact-footer__body">\r
              <div class="contact-footer__text">\r
                <p>Do you have any queries or suggestions?</p>\r
              </div>\r
              <a href="mailto:yourinfo@gmail.com" class="contact-footer__link">yourinfo@gmail.com</a>\r
            </div>\r
            <div class="contact-footer__body">\r
              <div class="contact-footer__text">\r
                <p>If you need support? Just give us a call.</p>\r
              </div>\r
              <a href="tel:+5511122233344" class="contact-footer__link">+55 111 222 333 44</a>\r
            </div>\r
          </div>\r
        </details>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="footer__bottom bottom-footer">\r
    <div class="bottom-footer__container">\r
      <div class="bottom-footer__left left-bottom">\r
        <div class="left-bottom__item item-left">\r
          <div class="item-left__body">\r
            <div class="item-left__text">\r
              <p>We ship with:</p>\r
            </div>\r
            <div class="item-left__icon">\r
              <img src="images/copyright/fa-brands_dhl.svg" alt="Image">\r
            </div>\r
            <div class="item-left__icon">\r
              <img src="images/copyright/arcticons_post.svg" alt="Image">\r
            </div>\r
          </div>\r
\r
          <div class="item-left__body">\r
            <div class="item-left__text">\r
              <p>Payment options:</p>\r
            </div>\r
            <div class="item-left__icon">\r
              <img src="images/copyright/brandico_visa.svg" alt="Image">\r
            </div>\r
            <div class="item-left__icon">\r
              <img src="images/copyright/brandico_mastercard.svg" alt="Image">\r
            </div>\r
            <div class="item-left__icon">\r
              <img src="images/copyright/fontisto_paypal.svg" alt="Image">\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
      <div class="bottom-footer__right">\r
        <p>© Copyright 2023 MiniStore. Design by <a href="#">TemplatesJungle</a></p>\r
      </div>\r
    </div>\r
\r
  </div>\r
</footer>`;function ft(){const o=document.querySelector("#footer");if(!o){console.warn("Елемент footerEl не знайдено");return}o.innerHTML=mt;function x(){const c=document.querySelectorAll("[data-spollers]");if(c.length>0){let a=function(h,w=!1){h.forEach(m=>{m=w?m.item:m,w&&w.matches||!w?(m.classList.add("_spoller-init"),l(m)):(m.classList.remove("_spoller-init"),l(m,!1))})},l=function(h,w=!0){let m=h.querySelectorAll("details");m.length&&m.forEach(b=>{let y=b.querySelector("summary");w?(y.removeAttribute("tabindex"),b.hasAttribute("data-open")?(y.classList.add("_spoller-active"),b.open=!0):(b.open=!1,y.nextElementSibling.hidden=!0)):(y.setAttribute("tabindex","-1"),y.classList.remove("_spoller-active"),b.open=!0,y.nextElementSibling.hidden=!1)})},g=function(h){const w=h.target;if(w.closest("summary")&&w.closest("[data-spollers]")&&(h.preventDefault(),w.closest("[data-spollers]").classList.contains("_spoller-init"))){const m=w.closest("summary"),b=m.closest("details"),y=m.closest("[data-spollers]"),q=y.hasAttribute("data-one-spoller"),I=b.hasAttribute("data-spoller-scroll"),S=y.dataset.spollersSpeed?parseInt(y.dataset.spollersSpeed):500;if(!y.querySelectorAll("._slide").length&&(q&&!b.open&&v(y),b.open?setTimeout(()=>{b.open=!1},S):b.open=!0,m.classList.toggle("_spoller-active"),f(m.nextElementSibling,S),I&&m.classList.contains("_spoller-active"))){const T=b.dataset.spollerScroll,C=+T?+T:0,u=b.hasAttribute("data-spoller-scroll-noheader")?document.querySelector(".header").offsetHeight:0;window.scrollTo({top:b.offsetTop-(C+u),behavior:"smooth"})}}if(!w.closest("[data-spollers]")){const m=document.querySelectorAll("[data-spoller-close]");m.length&&m.forEach(b=>{const y=b.closest("[data-spollers]"),q=b.parentNode;if(y.classList.contains("_spoller-init")){const I=y.dataset.spollersSpeed?parseInt(y.dataset.spollersSpeed):500;b.classList.remove("_spoller-active"),s(b.nextElementSibling,I),setTimeout(()=>{q.open=!1},I)}})}},v=function(h){const w=h.querySelector("details[open]");if(w&&!h.querySelectorAll("._slide").length){const m=w.querySelector("summary"),b=h.dataset.spollersSpeed?parseInt(h.dataset.spollersSpeed):500;m.classList.remove("_spoller-active"),s(m.nextElementSibling,b),setTimeout(()=>{w.open=!1},b)}};var L=a,P=l,e=g,d=v;document.addEventListener("click",g);const t=Array.from(c).filter(function(h,w,m){return!h.dataset.spollers.split(",")[0]});t.length&&a(t);const n=Array.from(c).filter(function(h,w,m){return h.dataset.spollers.split(",")[0]});if(n.length>0){const h=[];n.forEach(m=>{const y=m.dataset.spollers.split(","),q={};q.value=y[0],q.type=y[1]?y[1].trim():"max",q.item=m,h.push(q)});const w=h.map(function(m){return"("+m.type+"-width: "+m.value+"px),"+m.value+","+m.type}).filter(function(m,b,y){return y.indexOf(m)===b});w&&w.length&&w.forEach(m=>{const b=m.split(","),y=b[1],q=b[2],I=window.matchMedia(b[0]),S=h.filter(function(T){return T.value===y&&T.type===q});I.addEventListener("change",function(){a(S,I)}),a(S,I)})}}let s=(t,n=500,a=0)=>{t.classList.contains("_slide")||(t.classList.add("_slide"),t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=n+"ms",t.style.height=`${t.offsetHeight}px`,t.offsetHeight,t.style.overflow="hidden",t.style.height=a?`${a}px`:"0px",t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,window.setTimeout(()=>{t.hidden=!a,a||t.style.removeProperty("height"),t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),a||t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),t.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideUpDone",{detail:{target:t}}))},n))},r=(t,n=500,a=0)=>{if(!t.classList.contains("_slide")){t.classList.add("_slide"),t.hidden=t.hidden?!1:null,a&&t.style.removeProperty("height");let l=t.offsetHeight;t.style.overflow="hidden",t.style.height=a?`${a}px`:"0px",t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,t.offsetHeight,t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=n+"ms",t.style.height=l+"px",t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),window.setTimeout(()=>{t.style.removeProperty("height"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),t.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideDownDone",{detail:{target:t}}))},n)}},f=(t,n=500)=>t.hidden?r(t,n):s(t,n)}x();const p=document.querySelector("[data-spollers]");p&&p.addEventListener("click",c=>{c.target.blur()})}const vt=`<div data-aos="zoom-in-up" data-aos-duration="2000" class="page__hero hero">\r
  <div class="hero__inner">\r
    <button type="button" class="hero__swiper-button hero__swiper-button--prev _icon-arrow"></button>\r
\r
    <div class="hero__wraper">\r
      <div class="hero__swiper swiper">\r
        <!--Обгортка для слайдів-->\r
        <div class="swiper-wrapper hero__swiper-wrapper">\r
          <div class="swiper-slide hero__slide">\r
            <div class="hero__content  content-slide">\r
              <div class="content-slide__body">\r
                <div class="product-praise">\r
                  <h2 class="product-praise__title ">Your Products are great.</h2>\r
                  <a href="#" class="product-praise__button">Shop Product</a>\r
                </div>\r
              </div>\r
              <div class="content-slide__image">\r
                <img src="images/hero/daniel-korpai-hbTKIbuMmBI-unsplash.png" alt="Image">\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="swiper-slide hero__slide">\r
            <div class="hero__content  content-slide">\r
              <div class="content-slide__body">\r
                <div class="product-praise">\r
                  <h2 class="product-praise__title ">Your Products are great.</h2>\r
                  <a href="#" class="product-praise__button">Shop Product</a>\r
                </div>\r
              </div>\r
              <div class="content-slide__image">\r
                <img src="images/hero/daniel-korpai-hbTKIbuMmBI-unsplash.png" alt="Image">\r
              </div>\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
    <button type="button" class="hero__swiper-button hero__swiper-button--next _icon-arrow"></button>\r
  </div>\r
</div>\r
\r
`;function gt(){const o=document.querySelector("#mainSection");if(!o)return;o.innerHTML+=vt;function x(){const p=document.querySelector(".hero__swiper"),c=document.querySelector(".hero__swiper-button--next"),s=document.querySelector(".hero__swiper-button--prev");p&&c&&s&&new Swiper(p,{slidesPerView:1,loop:!0,grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:{nextEl:c,prevEl:s}})}x()}const ht=`<div class="insta">\r
  <div class="insta__container">\r
    <h3 class="insta__title title">Shop our insta</h3>\r
    <div class="insta__items">\r
      <a href="#" class="insta__item _icon-social-hover">\r
        <img src="images/insta/01.jpg" alt="image" class="insta__image">\r
      </a>\r
      <a href="#" class="insta__item _icon-social-hover">\r
        <img src="images/insta/02.jpg" alt="image" class="insta__image">\r
      </a>\r
      <a href="#" class="insta__item _icon-social-hover">\r
        <img src="images/insta/03.jpg" alt="image" class="insta__image">\r
      </a>\r
      <a href="#" class="insta__item _icon-social-hover">\r
        <img src="images/insta/04.jpg" alt="image" class="insta__image">\r
      </a>\r
      <a href="#" class="insta__item _icon-social-hover">\r
        <img src="images/insta/05.jpg" alt="image" class="insta__image">\r
      </a>\r
    </div>\r
  </div>\r
</div>`;function bt(){const o=document.querySelector("#insta");o&&(o.innerHTML+=ht)}const yt=`<div class="subscribe">\r
  <div class="subscribe__container">\r
    <div class="subscribe__body">\r
      <div class="subscribe__content">\r
          <h3 class="subscribe__title title">Subscribe Us now</h3>\r
          <p class="subscribe__text">Get latest news, updates and deals directly mailed to your inbox.</p>\r
      </div>\r
      <div class="subscribe__form form">\r
        <form class="form__form" required action="#" method="POST">\r
          <input type="text" name="form[email]" data-error="Error" placeholder="Your email address here" class="form__input">\r
          <button type="submit" class="form__button button">Subscribe</button>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
</div>`;function wt(){const o=document.querySelector("#subscribe");o&&(o.innerHTML+=yt)}const kt=`<div class="testimonials">\r
  <div class="testimonials__container">\r
    <div class="testimonials__slider swiper">\r
      <div class="testimonials__wrapper swiper-wrapper">\r
        <div class="testimonials__slide swiper-slide">\r
          <div class="testimonials__content">\r
            <div class="testimonials__quote-top">\r
              <div class="testimonials__quotation-element _icon-blockquote-icon"></div>\r
              <div class="testimonials__text">\r
                <p>“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen\r
                  tesque pretium\r
                  feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.”</p>\r
              </div>\r
            </div>\r
            <div class="testimonials__quote-bottom">\r
              <ul class="testimonials__stars">\r
                <li class="testimonials__star _icon-ion_star"></li>\r
                <li class="testimonials__star _icon-ion_star"></li>\r
                <li class="testimonials__star _icon-ion_star"></li>\r
                <li class="testimonials__star _icon-ion_star"></li>\r
                <li class="testimonials__star _icon-ion_star"></li>\r
              </ul>\r
              <h4 class="testimonials__name">Emma Chamberlin</h4>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="testimonials__slide swiper-slide">\r
          <div class="testimonials__content">\r
            <div class="testimonials__quote-top">\r
              <div class="testimonials__quotation-element _icon-blockquote-icon"></div>\r
              <div class="testimonials__text">\r
                <p>“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen\r
                  tesque pretium\r
                  feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.”</p>\r
              </div>\r
            </div>\r
            <div class="testimonials__quote-bottom">\r
              <ul class="testimonials__stars">\r
                <li class="testimonials__star _icon-ion_star"></li>\r
                <li class="testimonials__star _icon-ion_star"></li>\r
                <li class="testimonials__star _icon-ion_star"></li>\r
                <li class="testimonials__star _icon-ion_star"></li>\r
                <li class="testimonials__star _icon-ion_star"></li>\r
              </ul>\r
              <h4 class="testimonials__name">Emma Chamberlin</h4>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <button class="testimonials__swiper-button testimonials__swiper-button--next _icon-arrow"></button>\r
      <button class="testimonials__swiper-button testimonials__swiper-button--prev _icon-arrow"></button>\r
    </div>\r
  </div>\r
</div>`;function St(){const o=document.querySelector("#testimonials");o&&(o.innerHTML+=kt,new Swiper(".testimonials__slider",{loop:!0,slidesPerView:1,grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:{nextEl:".testimonials__swiper-button--next",prevEl:".testimonials__swiper-button--prev"}}))}const xt=`<div class="features">\r
  <div class="features__container">\r
    <ul class="features__items">\r
      <li  data-aos="fade-up"   data-aos-offset="50" data-aos-duration="300" class="features__item">\r
        <div class="features__icon">\r
          <img class="features__image" src="images/features/01.svg" alt="Image">\r
        </div>\r
        <div class="features__text">\r
          <h3 class="features__label">Free delivery</h3>\r
          <p class="features__descr">Consectetur adipi elit lorem ipsum dolor sit amet.</p>\r
        </div>\r
      </li>\r
      <li data-aos="fade-up"   data-aos-offset="50" data-aos-duration="700" class="features__item">\r
        <div class="features__icon">\r
          <img class="features__image" src="images/features/02.svg" alt="Image">\r
        </div>\r
        <div class="features__text">\r
          <h3 class="features__label">Quality guarantee</h3>\r
          <p class="features__descr">Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>\r
        </div>\r
      </li>\r
      <li data-aos="fade-up"   data-aos-offset="50" data-aos-duration="1000" class="features__item">\r
        <div class="features__icon">\r
          <img class="features__image" src="images/features/03.svg" alt="Image">\r
        </div>\r
        <div class="features__text">\r
          <h3 class="features__label">Daily offers</h3>\r
          <p class="features__descr">Amet consectetur adipi elit loreme ipsum dolor sit.</p>\r
        </div>\r
      </li>\r
      <li data-aos="fade-up"   data-aos-offset="50" data-aos-duration="1300" class="features__item">\r
        <div class="features__icon">\r
          <img class="features__image" src="images/features/04.svg" alt="Image">\r
        </div>\r
        <div class="features__text">\r
          <h3 class="features__label">100% secure payment</h3>\r
          <p class="features__descr">Rem Lopsum dolor sit amet, consectetur adipi elit.</p>\r
        </div>\r
      </li>\r
    </ul>\r
  </div>\r
</div>`;function At(){const o=document.querySelector("#features");o&&(o.innerHTML+=xt)}const Lt=`<div class="mobile-products ">\r
  <div class="mobile-products__products-section">\r
    <div class="products-section">\r
      <div class="products-section__container">\r
\r
        <div class="products-section__header">\r
          <h2 class="products-section__title title">Mobile Products</h2>\r
          <a href="shop.html" class="products-section__link">Go to Shop</a>\r
        </div>\r
\r
        <div class="products-section__slider swiper">\r
          <div class="products-section__wrapper swiper-wrapper">\r
            <div class="products-section__slide swiper-slide">\r
              <div class="products-section__carts cards-products">\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/01.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 10</h4>\r
                    <p class="cards-products__price">$980</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/02.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 11</h4>\r
                    <p class="cards-products__price">$1100</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/03.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 8</h4>\r
                    <p class="cards-products__price">$780</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/04.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 13</h4>\r
                    <p class="cards-products__price">$1500</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
              </div>\r
            </div>\r
            <div class="products-section__slide swiper-slide">\r
              <div class="products-section__carts cards-products">\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/01.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 10</h4>\r
                    <p class="cards-products__price">$980</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/02.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 11</h4>\r
                    <p class="cards-products__price">$1100</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/03.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 8</h4>\r
                    <p class="cards-products__price">$780</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/04.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 13</h4>\r
                    <p class="cards-products__price">$1500</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
              </div>\r
            </div>\r
            <div class="products-section__slide swiper-slide">\r
              <div class="products-section__carts cards-products">\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/01.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 10</h4>\r
                    <p class="cards-products__price">$980</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/02.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 11</h4>\r
                    <p class="cards-products__price">$1100</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/03.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 8</h4>\r
                    <p class="cards-products__price">$780</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/mobile-products/04.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Iphone 13</h4>\r
                    <p class="cards-products__price">$1500</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
              </div>\r
            </div>\r
          </div>\r
          <div class="products-section__swiper-pagination"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`;function qt(){const o=document.querySelector("#mobileProducts");o&&(o.innerHTML+=Lt)}const Et=`<div class="smart-watches">\r
  <div class="smart-watches__products-section">\r
    <div class="products-section">\r
      <div class="products-section__container">\r
\r
        <div class="products-section__header">\r
          <h2 class="products-section__title title">Smart Watches</h2>\r
          <a href="shop.html" class="products-section__link">Go to Shop</a>\r
        </div>\r
\r
        <div class="products-section__slider swiper">\r
          <div class="products-section__wrapper swiper-wrapper">\r
            <div class="products-section__slide swiper-slide">\r
              <div class="products-section__carts cards-products">\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/01.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Pink watch</h4>\r
                    <p class="cards-products__price">$870</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/02.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Heavy watch</h4>\r
                    <p class="cards-products__price">$680</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/03.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">spotted watch</h4>\r
                    <p class="cards-products__price">$750</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/04.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">black watch</h4>\r
                    <p class="cards-products__price">$650</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
              </div>\r
            </div>\r
            <div class="products-section__slide swiper-slide">\r
              <div class="products-section__carts cards-products">\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/01.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Pink watch</h4>\r
                    <p class="cards-products__price">$870</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/02.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Heavy watch</h4>\r
                    <p class="cards-products__price">$680</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/03.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">spotted watch</h4>\r
                    <p class="cards-products__price">$750</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/04.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">black watch</h4>\r
                    <p class="cards-products__price">$650</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
              </div>\r
            </div>\r
            <div class="products-section__slide swiper-slide">\r
              <div class="products-section__carts cards-products">\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/01.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Pink watch</h4>\r
                    <p class="cards-products__price">$870</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/02.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">Heavy watch</h4>\r
                    <p class="cards-products__price">$680</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/03.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">spotted watch</h4>\r
                    <p class="cards-products__price">$750</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
\r
                <figure class="cards-products__card">\r
                  <img src="images/smart-watches/04.jpg" alt="Image-product" class="cards-products__image">\r
                  <figcaption class="cards-products__descr">\r
                    <h4 class="cards-products__title">black watch</h4>\r
                    <p class="cards-products__price">$650</p>\r
                  </figcaption>\r
                  <button class="cards-products__button "> Add to cart <span class="_icon-ion_cart"></span></button>\r
                </figure>\r
              </div>\r
            </div>\r
\r
          </div>\r
          <div class="products-section__swiper-pagination"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`;function Pt(){const o=document.querySelector("#smartWatches");o&&(o.innerHTML+=Et)}const jt=`<div class="page__sale">\r
  <div class="sale">\r
    <div class="sale__content">\r
      <div class="sale__body">\r
        <div class="sale__text-wrapper">\r
          <div class="sale__subtext title">\r
            <p>10% off</p>\r
          </div>\r
          <div class="product-praise">\r
            <h2 class="product-praise__title product-praise__title--margin">New year sale </h2>\r
            <a href="#" class="product-praise__button">Shop sale</a>\r
          </div>\r
        </div>\r
  \r
      </div>\r
      <div class="sale__image">\r
        <img src="images/sale/mobile1.png" alt="mobile-image" class="sale__img">\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
<!--<div class="page__featured featured">\r
  <div class="featured__content">\r
    <div class="featured__body">\r
      <h1 class="featured__title">\r
        New year sale\r
      </h1>\r
      <div class="featured__items">\r
        <article class="featured__item item-featured">\r
          <a href="#" class="item-featured__link">\r
            <img class="item-featured__image" src="images/insta/04.jpg" alt="Image">\r
          </a>\r
          <div class="item-featured__body">\r
            <time datetime="2025-10-01" class="item-featured__date"></time>\r
            <h2 class="item-featured__title">\r
              <a href="#" class="item-featured__link-title">\r
                A beatuful solo trip to the Lake\r
              </a>\r
            </h2>\r
            <div class="item-featured__text">\r
              <p>\r
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis saepe quasi facere, esse delectus\r
                ad placeat cum.\r
              </p>\r
            </div>\r
          </div>\r
        </article>\r
        <article class="featured__item item-featured">\r
          <a href="#" class="item-featured__link">\r
            <img class="item-featured__image" src="images/insta/01.jpg" alt="Image">\r
          </a>\r
          <div class="item-featured__body">\r
            <time datetime="2025-10-01" class="item-featured__date"></time>\r
            <h2 class="item-featured__title">\r
              <a href="#" class="item-featured__link-title">\r
                A beatuful solo trip to the Lake\r
              </a>\r
            </h2>\r
            <div class="item-featured__text">\r
              <p>\r
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis saepe quasi facere, esse delectus\r
                ad\r
                placeat cum.\r
              </p>\r
            </div>\r
          </div>\r
        </article>\r
        <article class="featured__item item-featured">\r
          <a href="#" class="item-featured__link">\r
            <img class="item-featured__image" src="images/insta/02.jpg" alt="Image">\r
          </a>\r
          <div class="item-featured__body">\r
            <time datetime="2025-10-01" class="item-featured__date"></time>\r
            <h2 class="item-featured__title">\r
              <a href="#" class="item-featured__link-title">\r
                A beatuful solo trip to the Lake\r
              </a>\r
            </h2>\r
            <div class="item-featured__text">\r
              <p>\r
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis saepe quasi facere, esse delectus\r
                ad\r
                placeat cum.\r
              </p>\r
            </div>\r
          </div>\r
        </article>\r
      </div>\r
    </div>\r
    <div class="featured__destinations destinations-featured">\r
      <div class="destinations-featured__content">\r
        <h2 class="destinations-featured__title">\r
          <a href="#" class="destinations-featured__link-title">\r
            Lorem ipsum dolor sit amet\r
          </a>\r
        </h2>\r
        <div class="destinations-featured__text">\r
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r
        </div>\r
      </div>\r
      <img src="images/sale/mobile.png" alt="image" class="destinations-featured__image">\r
    </div>\r
  </div>\r
</div>-->`;function Tt(){const o=document.querySelector("#sale");o&&(o.innerHTML+=jt)}const Ot=`<div class="latest">\r
  <div class="latest__container">\r
    <div class="latest__header">\r
      <h2 class="latest__title title">Latest Posts</h2>\r
      <a href="blog.html" class="latest__button">Read blogs</a>\r
    </div>\r
    <div class="latest__items">\r
      <article class="latest__post-card card-post">\r
        <a href="#" class="card-post__image">\r
          <img src="images/latest/01.jpg" alt="image-latest" class="card-post__img">\r
        </a>\r
        <div class="card-post__meta-post post-meta">\r
          <time datetime="2023-02-22" class="post-meta__time">feb 22, 2023</time>\r
          <div class="post-meta__arrow">-</div>\r
          <span class="post-meta__category">Gadgets</span>\r
        </div>\r
        <h3 class="card-post__title-post">\r
          <a href="#" class="card-post__link-post">Get some cool gadgets in 2023</a>\r
        </h3>\r
      </article>\r
      <article class="latest__post-card card-post">\r
        <a href="#" class="card-post__image">\r
          <img src="images/latest/02.jpg" alt="image-latest" class="card-post__img">\r
        </a>\r
        <div class="card-post__meta-post post-meta">\r
          <time datetime="2023-02-22" class="post-meta__time">feb 22, 2023</time>\r
          <div class="post-meta__arrow">-</div>\r
          <span class="post-meta__category">technology</span>\r
        </div>\r
        <h3 class="card-post__title-post">\r
          <a href="#" class="card-post__link-post">TECHNOLOGY HACK YOU WON’T GET</a>\r
        </h3>\r
      </article>\r
      <article class="latest__post-card card-post">\r
        <a href="#" class="card-post__image">\r
          <img src="images/latest/03.jpg" alt="image-latest" class="card-post__img">\r
        </a>\r
        <div class="card-post__meta-post post-meta">\r
          <time datetime="2023-02-22" class="post-meta__time">feb 22, 2023</time>\r
          <div class="post-meta__arrow">-</div>\r
          <span class="post-meta__category">camera</span>\r
        </div>\r
        <h3 class="card-post__title-post">\r
          <a href="#" class="card-post__link-post">toP 10 SMALL cAMERA IN THE WORLD</a>\r
        </h3>\r
      </article>\r
    </div>\r
\r
  </div>\r
</div>`;function Ht(){const o=document.querySelector("#latest");o&&(o.innerHTML+=Ot)}_t();ft();gt();bt();wt();St();At();qt();Pt();Tt();Ht();$t();Dt();Ct();ct.init();new Swiper(".products-section__slider",{loop:!0,grabCursor:!0,pagination:{el:".products-section__swiper-pagination",clickable:!0,renderBullet:function(o,x){return'<button type="button" class="'+x+'"></button>'}}});const It=document.querySelector(".promo-video__icon"),Mt=document.querySelector(".promo-video__play-video"),rt=document.querySelector("iframe");It.addEventListener("click",()=>{Mt.classList.add("active");const o=new URL(rt.src);o.searchParams.set("autoplay","1"),rt.src=o.toString()});function $t(){document.querySelectorAll(".quantity").forEach(o=>{const x=o.querySelector(".quantity__input");o.addEventListener("click",p=>{const c=p.target.closest("[data-action]");if(!c)return;const s=c.dataset.action;let r=parseInt(x.value);isNaN(r)&&(r=1),s==="increase"&&(x.value=r+1),s==="decrease"&&(x.value=Math.max(1,r-1))})})}function Dt(){const o=document.querySelectorAll("[data-tabs]");let x=[];if(o.length>0){let d=function(n,a){const l=Array.from(n).filter(v=>v.dataset[a]),g={};return l.forEach(v=>{const h=v.dataset[a];g[h]||(g[h]=[]),g[h].push(v)}),Object.entries(g).map(([v,h])=>{const w=window.matchMedia(`(max-width: ${v}px)`);return{itemsArray:h,matchMedia:w}})};var P=d;const e=Nt();e&&e.startsWith("tab-")&&(x=e.replace("tab-","").split("-")),o.forEach((n,a)=>{n.classList.add("_tab-init"),n.setAttribute("data-tabs-index",a),n.addEventListener("click",r),c(n)});let t=d(o,"tabs");t&&t.length&&t.forEach(n=>{n.matchMedia.addEventListener("change",function(){p(n.itemsArray,n.matchMedia)}),p(n.itemsArray,n.matchMedia)})}function p(e,d){e.forEach(t=>{let n=t.querySelector("[data-tabs-titles]"),a=t.querySelectorAll("[data-tabs-title]"),l=t.querySelector("[data-tabs-body]"),g=t.querySelectorAll("[data-tabs-item]");a=Array.from(a).filter(v=>v.closest("[data-tabs]")===t),g=Array.from(g).filter(v=>v.closest("[data-tabs]")===t),g.forEach((v,h)=>{d.matches?(l.append(a[h]),l.append(v),t.classList.add("_tab-spoller")):(n.append(a[h]),t.classList.remove("_tab-spoller"))})})}function c(e){let d=e.querySelectorAll("[data-tabs-titles]>*"),t=e.querySelectorAll("[data-tabs-body]>*");const n=e.dataset.tabsIndex,a=x[0]==n;if(a){const l=e.querySelector("[data-tabs-titles]>._tab-active");l&&l.classList.remove("_tab-active")}t.length&&t.forEach((l,g)=>{d[g].setAttribute("data-tabs-title",""),l.setAttribute("data-tabs-item",""),l.hidden=!0,a&&g==x[1]&&(d[g].classList.add("_tab-active"),d[g].classList.add("_tab-animated")),l.hidden=!d[g].classList.contains("_tab-active")})}function s(e){let d=e.querySelectorAll("[data-tabs-title]"),t=e.querySelectorAll("[data-tabs-item]");const n=e.dataset.tabsIndex;function a(g){if(g.hasAttribute("data-tabs-animate"))return g.dataset.tabsAnimate>0?Number(g.dataset.tabsAnimate):500}const l=a(e);if(t.length>0){const g=e.hasAttribute("data-tabs-hash");t=Array.from(t).filter(v=>v.closest("[data-tabs]")===e),d=Array.from(d).filter(v=>v.closest("[data-tabs]")===e),t.forEach((v,h)=>{d[h].classList.contains("_tab-active")?(l?L(v,l):v.hidden=!1,g&&!v.closest(".popup")&&setHash(`tab-${n}-${h}`)):l?f(v,l):v.hidden=!0})}}function r(e){const d=e.target;if(d.closest("[data-tabs-title]")){const t=d.closest("[data-tabs-title]"),n=t.closest("[data-tabs]");if(!t.classList.contains("_tab-active")&&!n.querySelector("._slide")){let a=n.querySelectorAll("[data-tabs-title]._tab-active");if(a.length&&(a=Array.from(a).filter(l=>l.closest("[data-tabs]")===n)),a.length&&a[0].classList.remove("_tab-active"),t.classList.add("_tab-active"),t.classList.add("_tab-animated"),s(n),isSpoller){const l=g=>{if(g.detail.target.closest("[data-tabs]")===n){const v=t.getBoundingClientRect(),h=window.scrollY+v.top-20;window.scrollTo({top:h,behavior:"smooth"}),document.removeEventListener("slideDownDone",l)}};document.addEventListener("slideDownDone",l)}}e.preventDefault()}}let f=(e,d=500,t=0)=>{e.classList.contains("_slide")||(e.classList.add("_slide"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=d+"ms",e.style.height=`${e.offsetHeight}px`,e.offsetHeight,e.style.overflow="hidden",e.style.height=t?`${t}px`:"0px",e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.style.position="absolute",e.style.visibility="hidden",window.setTimeout(()=>{e.hidden=!t,e.style.removeProperty("position"),e.style.removeProperty("visibility"),t||e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),t||e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideUpDone",{detail:{target:e}}))},d))},L=(e,d=500,t=0)=>{if(!e.classList.contains("_slide")){e.classList.add("_slide"),e.hidden=e.hidden?!1:null,t&&e.style.removeProperty("height");let n=e.offsetHeight;e.style.overflow="hidden",e.style.height=t?`${t}px`:"0px",e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=d+"ms",e.style.height=n+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide"),document.dispatchEvent(new CustomEvent("slideDownDone",{detail:{target:e}}))},d)}}}function Nt(){if(location.hash)return location.hash.replace("#","")}function Ct(){document.querySelectorAll("[data-select]").forEach(o=>{const x=o.querySelector("[data-select-trigger]"),p=o.querySelector("[data-select-list]"),c=o.querySelector("[data-select-input]");x.addEventListener("click",()=>{const s=x.getAttribute("aria-expanded")==="true";x.setAttribute("aria-expanded",!s),p.hidden=s}),p.querySelectorAll(".custom-select__option").forEach(s=>{s.addEventListener("click",()=>{x.textContent=s.textContent,c.value=s.dataset.value,p.hidden=!0,x.setAttribute("aria-expanded","false")})}),document.addEventListener("click",s=>{o.contains(s.target)||(p.hidden=!0,x.setAttribute("aria-expanded","false"))})})}
