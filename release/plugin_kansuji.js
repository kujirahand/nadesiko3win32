!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=220)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(76))},function(t,n,r){var e=r(0),o=r(41),i=r(2),u=r(34),c=r(43),f=r(65),a=o("wks"),s=e.Symbol,l=f?s:s&&s.withoutSetter||u;t.exports=function(t){return i(a,t)||(c&&i(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(0),o=r(25).f,i=r(10),u=r(12),c=r(40),f=r(62),a=r(69);t.exports=function(t,n){var r,s,l,p,v,g=t.target,h=t.global,d=t.stat;if(r=h?e:d?e[g]||c(g,{}):(e[g]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(h?s:g+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(r,s,p,t)}}},function(t,n,r){var e=r(8),o=r(60),i=r(5),u=r(26),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(3);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},,function(t,n,r){var e=r(8),o=r(7),i=r(18);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(46),o=r(16);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(0),o=r(10),i=r(2),u=r(40),c=r(49),f=r(17),a=f.get,s=f.enforce,l=String(String).split("String");(t.exports=function(t,n,r,c){var f=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),s(r).source=l.join("string"==typeof n?n:"")),t!==e?(f?!p&&t[n]&&(a=!0):delete t[n],a?t[n]=r:o(t,n,r)):a?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n,r){var e=r(16);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(27),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e,o,i,u=r(85),c=r(0),f=r(4),a=r(10),s=r(2),l=r(24),p=r(23),v=c.WeakMap;if(u){var g=new v,h=g.get,d=g.has,y=g.set;e=function(t,n){return y.call(g,t,n),n},o=function(t){return h.call(g,t)||{}},i=function(t){return d.call(g,t)}}else{var x=l("state");p[x]=!0,e=function(t,n){return a(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(63),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},,function(t,n){t.exports=!1},function(t,n,r){"use strict";var e=r(11),o=r(73),i=r(29),u=r(17),c=r(58),f="Array Iterator",a=u.set,s=u.getterFor(f);t.exports=c(Array,"Array",(function(t,n){a(this,{type:f,target:e(t),index:0,kind:n})}),(function(){var t=s(this),n=t.target,r=t.kind,e=t.index++;return!n||e>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:e,done:!1}:"values"==r?{value:n[e],done:!1}:{value:[e,n[e]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n){t.exports={}},function(t,n,r){var e=r(41),o=r(34),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,r){var e=r(8),o=r(54),i=r(18),u=r(11),c=r(26),f=r(2),a=r(60),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e,o=r(5),i=r(80),u=r(42),c=r(23),f=r(77),a=r(48),s=r(24),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"</"+"script>"},g=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;g=e?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=a("iframe")).style.display="none",f.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=u.length;r--;)delete g.prototype[u[r]];return g()};c[l]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=g(),void 0===n?r:i(r,n)}},function(t,n){t.exports={}},function(t,n,r){var e=r(7).f,o=r(2),i=r(1)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){var e=r(64),o=r(42).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){"use strict";var e=r(71).charAt,o=r(17),i=r(58),u="String Iterator",c=o.set,f=o.getterFor(u);i(String,"String",(function(t){c(this,{type:u,string:String(t),index:0})}),(function(){var t,n=f(this),r=n.string,o=n.index;return o>=r.length?{value:void 0,done:!0}:(t=e(r,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,r){"use strict";var e=r(6),o=r(0),i=r(19),u=r(21),c=r(8),f=r(43),a=r(65),s=r(3),l=r(2),p=r(44),v=r(4),g=r(5),h=r(13),d=r(11),y=r(26),x=r(18),S=r(28),b=r(50),m=r(31),O=r(87),E=r(56),w=r(25),A=r(7),I=r(54),j=r(10),T=r(12),P=r(41),R=r(24),_=r(23),N=r(34),C=r(1),L=r(66),M=r(67),k=r(30),F=r(17),G=r(70).forEach,$=R("hidden"),U="Symbol",D=C("toPrimitive"),V=F.set,B=F.getterFor(U),X=Object.prototype,Y=o.Symbol,K=i("JSON","stringify"),W=w.f,z=A.f,H=O.f,q=I.f,J=P("symbols"),Q=P("op-symbols"),Z=P("string-to-symbol-registry"),tt=P("symbol-to-string-registry"),nt=P("wks"),rt=o.QObject,et=!rt||!rt.prototype||!rt.prototype.findChild,ot=c&&s((function(){return 7!=S(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,n,r){var e=W(X,n);e&&delete X[n],z(t,n,r),e&&t!==X&&z(X,n,e)}:z,it=function(t,n){var r=J[t]=S(Y.prototype);return V(r,{type:U,tag:t,description:n}),c||(r.description=n),r},ut=a?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},ct=function(t,n,r){t===X&&ct(Q,n,r),g(t);var e=y(n,!0);return g(r),l(J,e)?(r.enumerable?(l(t,$)&&t[$][e]&&(t[$][e]=!1),r=S(r,{enumerable:x(0,!1)})):(l(t,$)||z(t,$,x(1,{})),t[$][e]=!0),ot(t,e,r)):z(t,e,r)},ft=function(t,n){g(t);var r=d(n),e=b(r).concat(pt(r));return G(e,(function(n){c&&!at.call(r,n)||ct(t,n,r[n])})),t},at=function(t){var n=y(t,!0),r=q.call(this,n);return!(this===X&&l(J,n)&&!l(Q,n))&&(!(r||!l(this,n)||!l(J,n)||l(this,$)&&this[$][n])||r)},st=function(t,n){var r=d(t),e=y(n,!0);if(r!==X||!l(J,e)||l(Q,e)){var o=W(r,e);return!o||!l(J,e)||l(r,$)&&r[$][e]||(o.enumerable=!0),o}},lt=function(t){var n=H(d(t)),r=[];return G(n,(function(t){l(J,t)||l(_,t)||r.push(t)})),r},pt=function(t){var n=t===X,r=H(n?Q:d(t)),e=[];return G(r,(function(t){!l(J,t)||n&&!l(X,t)||e.push(J[t])})),e};(f||(T((Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=N(t),r=function(t){this===X&&r.call(Q,t),l(this,$)&&l(this[$],n)&&(this[$][n]=!1),ot(this,n,x(1,t))};return c&&et&&ot(X,n,{configurable:!0,set:r}),it(n,t)}).prototype,"toString",(function(){return B(this).tag})),T(Y,"withoutSetter",(function(t){return it(N(t),t)})),I.f=at,A.f=ct,w.f=st,m.f=O.f=lt,E.f=pt,L.f=function(t){return it(C(t),t)},c&&(z(Y.prototype,"description",{configurable:!0,get:function(){return B(this).description}}),u||T(X,"propertyIsEnumerable",at,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:Y}),G(b(nt),(function(t){M(t)})),e({target:U,stat:!0,forced:!f},{for:function(t){var n=String(t);if(l(Z,n))return Z[n];var r=Y(n);return Z[n]=r,tt[r]=n,r},keyFor:function(t){if(!ut(t))throw TypeError(t+" is not a symbol");if(l(tt,t))return tt[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),e({target:"Object",stat:!0,forced:!f,sham:!c},{create:function(t,n){return void 0===n?S(t):ft(S(t),n)},defineProperty:ct,defineProperties:ft,getOwnPropertyDescriptor:st}),e({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:lt,getOwnPropertySymbols:pt}),e({target:"Object",stat:!0,forced:s((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(h(t))}}),K)&&e({target:"JSON",stat:!0,forced:!f||s((function(){var t=Y();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}))},{stringify:function(t,n,r){for(var e,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(e=n,(v(n)||void 0!==t)&&!ut(t))return p(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!ut(n))return n}),o[1]=n,K.apply(null,o)}});Y.prototype[D]||j(Y.prototype,D,Y.prototype.valueOf),k(Y,U),_[$]=!0},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){"use strict";var e=r(6),o=r(8),i=r(0),u=r(2),c=r(4),f=r(7).f,a=r(62),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};a(p,s);var v=p.prototype=s.prototype;v.constructor=p;var g=v.toString,h="Symbol(test)"==String(s("test")),d=/^Symbol\((.*)\)[^)]+$/;f(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,n=g.call(t);if(u(l,t))return"";var r=h?n.slice(7,-1):n.replace(d,"$1");return""===r?void 0:r}}),e({global:!0,forced:!0},{Symbol:p})}},function(t,n,r){r(67)("iterator")},function(t,n,r){var e=r(45),o=r(12),i=r(89);e||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,r){var e=r(0),o=r(83),i=r(22),u=r(10),c=r(1),f=c("iterator"),a=c("toStringTag"),s=i.values;for(var l in o){var p=e[l],v=p&&p.prototype;if(v){if(v[f]!==s)try{u(v,f,s)}catch(t){v[f]=s}if(v[a]||u(v,a,l),o[l])for(var g in i)if(v[g]!==i[g])try{u(v,g,i[g])}catch(t){v[g]=i[g]}}}},function(t,n,r){var e=r(0),o=r(10);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(21),o=r(61);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(3);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e=r(15);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e={};e[r(1)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){var e=r(3),o=r(15),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(2),o=r(13),i=r(24),u=r(78),c=i("IE_PROTO"),f=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),e(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?f:null}},function(t,n,r){var e=r(0),o=r(4),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,r){var e=r(61),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(64),o=r(42);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(35);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){"use strict";var e=r(12),o=r(5),i=r(3),u=r(98),c="toString",f=RegExp.prototype,a=f.toString,s=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),l=a.name!=c;(s||l)&&e(RegExp.prototype,c,(function(){var t=o(this),n=String(t.source),r=t.flags;return"/"+n+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in f)?u.call(t):r)}),{unsafe:!0})},,function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(27),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(8),o=r(3),i=r(2),u=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var r=[][t],a=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:f,l=i(n,1)?n[1]:void 0;return c[t]=!!r&&!o((function(){if(a&&!e)return!0;var t={length:-1};a?u(t,1,{enumerable:!0,get:f}):t[1]=1,r.call(t,s,l)}))}},function(t,n,r){"use strict";var e=r(6),o=r(81),i=r(47),u=r(79),c=r(30),f=r(10),a=r(12),s=r(1),l=r(21),p=r(29),v=r(68),g=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,d=s("iterator"),y="keys",x="values",S="entries",b=function(){return this};t.exports=function(t,n,r,s,v,m,O){o(r,n,s);var E,w,A,I=function(t){if(t===v&&_)return _;if(!h&&t in P)return P[t];switch(t){case y:case x:case S:return function(){return new r(this,t)}}return function(){return new r(this)}},j=n+" Iterator",T=!1,P=t.prototype,R=P[d]||P["@@iterator"]||v&&P[v],_=!h&&R||I(v),N="Array"==n&&P.entries||R;if(N&&(E=i(N.call(new t)),g!==Object.prototype&&E.next&&(l||i(E)===g||(u?u(E,g):"function"!=typeof E[d]&&f(E,d,b)),c(E,j,!0,!0),l&&(p[j]=b))),v==x&&R&&R.name!==x&&(T=!0,_=function(){return R.call(this)}),l&&!O||P[d]===_||f(P,d,_),p[n]=_,v)if(w={values:I(x),keys:m?_:I(y),entries:I(S)},O)for(A in w)(h||T||!(A in P))&&a(P,A,w[A]);else e({target:n,proto:!0,forced:h||T},w);return w}},function(t,n,r){"use strict";var e=r(6),o=r(82);e({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,r){var e=r(8),o=r(3),i=r(48);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(0),o=r(40),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},function(t,n,r){var e=r(2),o=r(86),i=r(25),u=r(7);t.exports=function(t,n){for(var r=o(n),c=u.f,f=i.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},function(t,n,r){var e=r(0);t.exports=e},function(t,n,r){var e=r(2),o=r(11),i=r(72).indexOf,u=r(23);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(u,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},function(t,n,r){var e=r(43);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(1);n.f=e},function(t,n,r){var e=r(63),o=r(2),i=r(66),u=r(7).f;t.exports=function(t){var n=e.Symbol||(e.Symbol={});o(n,t)||u(n,t,{value:i.f(t)})}},function(t,n,r){"use strict";var e,o,i,u=r(47),c=r(10),f=r(2),a=r(1),s=r(21),l=a("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),s||f(e,l)||c(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,n,r){var e=r(3),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(51),o=r(46),i=r(13),u=r(14),c=r(75),f=[].push,a=function(t){var n=1==t,r=2==t,a=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,g,h,d){for(var y,x,S=i(v),b=o(S),m=e(g,h,3),O=u(b.length),E=0,w=d||c,A=n?w(v,O):r?w(v,0):void 0;O>E;E++)if((p||E in b)&&(x=m(y=b[E],E,S),t))if(n)A[E]=x;else if(x)switch(t){case 3:return!0;case 5:return y;case 6:return E;case 2:f.call(A,y)}else if(s)return!1;return l?-1:a||s?s:A}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,n,r){var e=r(27),o=r(16),i=function(t){return function(n,r){var i,u,c=String(o(n)),f=e(r),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f))<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,r){var e=r(11),o=r(14),i=r(55),u=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,r){var e=r(1),o=r(28),i=r(7),u=e("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,n,r){var e=r(45),o=r(15),i=r(1)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:u?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){var e=r(4),o=r(44),i=r(1)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(19);t.exports=e("document","documentElement")},function(t,n,r){var e=r(3);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,r){var e=r(5),o=r(88);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,n,r){var e=r(8),o=r(7),i=r(5),u=r(50);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=u(n),c=e.length,f=0;c>f;)o.f(t,r=e[f++],n[r]);return t}},function(t,n,r){"use strict";var e=r(68).IteratorPrototype,o=r(28),i=r(18),u=r(30),c=r(29),f=function(){return this};t.exports=function(t,n,r){var a=n+" Iterator";return t.prototype=o(e,{next:i(1,r)}),u(t,a,!1,!0),c[a]=f,t}},function(t,n,r){"use strict";var e,o,i=r(98),u=r(117),c=RegExp.prototype.exec,f=String.prototype.replace,a=c,s=(e=/a/,o=/b*/g,c.call(e,"a"),c.call(o,"a"),0!==e.lastIndex||0!==o.lastIndex),l=u.UNSUPPORTED_Y||u.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(s||p||l)&&(a=function(t){var n,r,e,o,u=this,a=l&&u.sticky,v=i.call(u),g=u.source,h=0,d=t;return a&&(-1===(v=v.replace("y","")).indexOf("g")&&(v+="g"),d=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(g="(?: "+g+")",d=" "+d,h++),r=new RegExp("^(?:"+g+")",v)),p&&(r=new RegExp("^"+g+"$(?!\\s)",v)),s&&(n=u.lastIndex),e=c.call(a?r:u,d),a?e?(e.input=e.input.slice(h),e[0]=e[0].slice(h),e.index=u.lastIndex,u.lastIndex+=e[0].length):u.lastIndex=0:s&&e&&(u.lastIndex=u.global?e.index+e[0].length:n),p&&e&&e.length>1&&f.call(e[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(e[o]=void 0)})),e}),t.exports=a},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){var e=r(3),o=r(1),i=r(103),u=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){var e=r(0),o=r(49),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,r){var e=r(19),o=r(31),i=r(56),u=r(5);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(11),o=r(31).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(e(t))}},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,r){"use strict";var e=r(45),o=r(74);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,r){"use strict";var e=r(26),o=r(7),i=r(18);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},function(t,n,r){"use strict";var e=r(6),o=r(4),i=r(44),u=r(55),c=r(14),f=r(11),a=r(90),s=r(1),l=r(84),p=r(57),v=l("slice"),g=p("slice",{ACCESSORS:!0,0:0,1:2}),h=s("species"),d=[].slice,y=Math.max;e({target:"Array",proto:!0,forced:!v||!g},{slice:function(t,n){var r,e,s,l=f(this),p=c(l.length),v=u(t,p),g=u(void 0===n?p:n,p);if(i(l)&&("function"!=typeof(r=l.constructor)||r!==Array&&!i(r.prototype)?o(r)&&null===(r=r[h])&&(r=void 0):r=void 0,r===Array||void 0===r))return d.call(l,v,g);for(e=new(void 0===r?Array:r)(y(g-v,0)),s=0;v<g;v++,s++)v in l&&a(e,s,l[v]);return e.length=s,e}})},,function(t,n,r){"use strict";var e=r(6),o=r(72).indexOf,i=r(95),u=r(57),c=[].indexOf,f=!!c&&1/[1].indexOf(1,-0)<0,a=i("indexOf"),s=u("indexOf",{ACCESSORS:!0,1:0});e({target:"Array",proto:!0,forced:f||!a||!s},{indexOf:function(t){return f?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},,function(t,n,r){"use strict";var e=r(3);t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},,,function(t,n,r){"use strict";var e=r(5);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){"use strict";r(59);var e=r(12),o=r(3),i=r(1),u=r(82),c=r(10),f=i("species"),a=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),l=i("replace"),p=!!/./[l]&&""===/./[l]("a","$0"),v=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,n,r,l){var g=i(t),h=!o((function(){var n={};return n[g]=function(){return 7},7!=""[t](n)})),d=h&&!o((function(){var n=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[f]=function(){return r},r.flags="",r[g]=/./[g]),r.exec=function(){return n=!0,null},r[g](""),!n}));if(!h||!d||"replace"===t&&(!a||!s||p)||"split"===t&&!v){var y=/./[g],x=r(g,""[t],(function(t,n,r,e,o){return n.exec===u?h&&!o?{done:!0,value:y.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),S=x[0],b=x[1];e(String.prototype,t,S),e(RegExp.prototype,g,2==n?function(t,n){return b.call(t,this,n)}:function(t){return b.call(t,this)})}l&&c(RegExp.prototype[g],"sham",!0)}},function(t,n,r){"use strict";var e=r(71).charAt;t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n,r){var e=r(15),o=r(82);t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var i=r.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==e(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,r){"use strict";var e=r(99),o=r(5),i=r(13),u=r(14),c=r(27),f=r(16),a=r(100),s=r(101),l=Math.max,p=Math.min,v=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g;e("replace",2,(function(t,n,r,e){var d=e.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=e.REPLACE_KEEPS_$0,x=d?"$":"$0";return[function(r,e){var o=f(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,e):n.call(String(o),r,e)},function(t,e){if(!d&&y||"string"==typeof e&&-1===e.indexOf(x)){var i=r(n,t,this,e);if(i.done)return i.value}var f=o(t),v=String(this),g="function"==typeof e;g||(e=String(e));var h=f.global;if(h){var b=f.unicode;f.lastIndex=0}for(var m=[];;){var O=s(f,v);if(null===O)break;if(m.push(O),!h)break;""===String(O[0])&&(f.lastIndex=a(v,u(f.lastIndex),b))}for(var E,w="",A=0,I=0;I<m.length;I++){O=m[I];for(var j=String(O[0]),T=l(p(c(O.index),v.length),0),P=[],R=1;R<O.length;R++)P.push(void 0===(E=O[R])?E:String(E));var _=O.groups;if(g){var N=[j].concat(P,T,v);void 0!==_&&N.push(_);var C=String(e.apply(void 0,N))}else C=S(j,v,T,P,_,e);T>=A&&(w+=v.slice(A,T)+C,A=T+j.length)}return w+v.slice(A)}];function S(t,r,e,o,u,c){var f=e+t.length,a=o.length,s=h;return void 0!==u&&(u=i(u),s=g),n.call(c,s,(function(n,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,e);case"'":return r.slice(f);case"<":c=u[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>a){var l=v(s/10);return 0===l?n:l<=a?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):n}c=o[s-1]}return void 0===c?"":c}))}}))},function(t,n,r){var e,o,i=r(0),u=r(107),c=i.process,f=c&&c.versions,a=f&&f.v8;a?o=(e=a.split("."))[0]+e[1]:u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},,function(t,n,r){"use strict";var e=r(99),o=r(114),i=r(5),u=r(16),c=r(113),f=r(100),a=r(14),s=r(101),l=r(82),p=r(3),v=[].push,g=Math.min,h=4294967295,d=!p((function(){return!RegExp(h,"y")}));e("split",2,(function(t,n,r){var e;return e="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var e=String(u(this)),i=void 0===r?h:r>>>0;if(0===i)return[];if(void 0===t)return[e];if(!o(t))return n.call(e,t,i);for(var c,f,a,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,d=new RegExp(t.source,p+"g");(c=l.call(d,e))&&!((f=d.lastIndex)>g&&(s.push(e.slice(g,c.index)),c.length>1&&c.index<e.length&&v.apply(s,c.slice(1)),a=c[0].length,g=f,s.length>=i));)d.lastIndex===c.index&&d.lastIndex++;return g===e.length?!a&&d.test("")||s.push(""):s.push(e.slice(g)),s.length>i?s.slice(0,i):s}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:n.call(this,t,r)}:n,[function(n,r){var o=u(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,o){var u=r(e,t,this,o,e!==n);if(u.done)return u.value;var l=i(t),p=String(this),v=c(l,RegExp),y=l.unicode,x=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(d?"y":"g"),S=new v(d?l:"^(?:"+l.source+")",x),b=void 0===o?h:o>>>0;if(0===b)return[];if(0===p.length)return null===s(S,p)?[p]:[];for(var m=0,O=0,E=[];O<p.length;){S.lastIndex=d?O:0;var w,A=s(S,d?p:p.slice(O));if(null===A||(w=g(a(S.lastIndex+(d?0:O)),p.length))===m)O=f(p,O,y);else{if(E.push(p.slice(m,O)),E.length===b)return E;for(var I=1;I<=A.length-1;I++)if(E.push(A[I]),E.length===b)return E;O=m=w}}return E.push(p.slice(m)),E}]}),!d)},,function(t,n,r){var e=r(19);t.exports=e("navigator","userAgent")||""},function(t,n,r){"use strict";var e=r(99),o=r(5),i=r(14),u=r(16),c=r(100),f=r(101);e("match",1,(function(t,n,r){return[function(n){var r=u(this),e=null==n?void 0:n[t];return void 0!==e?e.call(n,r):new RegExp(n)[t](String(r))},function(t){var e=r(n,t,this);if(e.done)return e.value;var u=o(t),a=String(this);if(!u.global)return f(u,a);var s=u.unicode;u.lastIndex=0;for(var l,p=[],v=0;null!==(l=f(u,a));){var g=String(l[0]);p[v]=g,""===g&&(u.lastIndex=c(a,i(u.lastIndex),s)),v++}return 0===v?null:p}]}))},,,,,function(t,n,r){var e=r(5),o=r(35),i=r(1)("species");t.exports=function(t,n){var r,u=e(t).constructor;return void 0===u||null==(r=e(u)[i])?n:o(r)}},function(t,n,r){var e=r(4),o=r(15),i=r(1)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},,,function(t,n,r){"use strict";var e=r(3);function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=e((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=e((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},,function(t,n,r){"use strict";var e=r(6),o=r(55),i=r(27),u=r(14),c=r(13),f=r(75),a=r(90),s=r(84),l=r(57),p=s("splice"),v=l("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,h=Math.min,d=9007199254740991,y="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!p||!v},{splice:function(t,n){var r,e,s,l,p,v,x=c(this),S=u(x.length),b=o(t,S),m=arguments.length;if(0===m?r=e=0:1===m?(r=0,e=S-b):(r=m-2,e=h(g(i(n),0),S-b)),S+r-e>d)throw TypeError(y);for(s=f(x,e),l=0;l<e;l++)(p=b+l)in x&&a(s,l,x[p]);if(s.length=e,r<e){for(l=b;l<S-e;l++)v=l+r,(p=l+e)in x?x[v]=x[p]:delete x[v];for(l=S;l>S-e+r;l--)delete x[l-1]}else if(r>e)for(l=S-e;l>b;l--)v=l+r-1,(p=l+e-1)in x?x[v]=x[p]:delete x[v];for(l=0;l<r;l++)x[l+b]=arguments[l+2];return x.length=S-e+r,s}})},,,,,,,,,function(t,n,r){var e=r(4),o=r(79);t.exports=function(t,n,r){var i,u;return o&&"function"==typeof(i=n.constructor)&&i!==r&&e(u=i.prototype)&&u!==r.prototype&&o(t,u),t}},,,,,,,,,,,,,,function(t,n,r){"use strict";var e=r(6),o=r(72).includes,i=r(73);e({target:"Array",proto:!0,forced:!r(57)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},,,function(t,n,r){"use strict";var e=r(8),o=r(0),i=r(69),u=r(12),c=r(2),f=r(15),a=r(128),s=r(26),l=r(3),p=r(28),v=r(31).f,g=r(25).f,h=r(7).f,d=r(146).trim,y="Number",x=o.Number,S=x.prototype,b=f(p(S))==y,m=function(t){var n,r,e,o,i,u,c,f,a=s(t,!1);if("string"==typeof a&&a.length>2)if(43===(n=(a=d(a)).charCodeAt(0))||45===n){if(88===(r=a.charCodeAt(2))||120===r)return NaN}else if(48===n){switch(a.charCodeAt(1)){case 66:case 98:e=2,o=49;break;case 79:case 111:e=8,o=55;break;default:return+a}for(u=(i=a.slice(2)).length,c=0;c<u;c++)if((f=i.charCodeAt(c))<48||f>o)return NaN;return parseInt(i,e)}return+a};if(i(y,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var O,E=function(t){var n=arguments.length<1?0:t,r=this;return r instanceof E&&(b?l((function(){S.valueOf.call(r)})):f(r)!=y)?a(new x(m(n)),r,E):m(n)},w=e?v(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;w.length>A;A++)c(x,O=w[A])&&!c(E,O)&&h(E,O,g(x,O));E.prototype=S,S.constructor=E,u(o,y,E)}},function(t,n,r){var e=r(16),o="["+r(147)+"]",i=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t){return function(n){var r=String(e(n));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(u,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,n,r){"use strict";var e=r(6),o=r(70).filter,i=r(84),u=r(57),c=i("filter"),f=u("filter");e({target:"Array",proto:!0,forced:!c||!f},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){"use strict";var e=r(6),o=r(150).left,i=r(95),u=r(57),c=i("reduce"),f=u("reduce",{1:0});e({target:"Array",proto:!0,forced:!c||!f},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(35),o=r(13),i=r(46),u=r(14),c=function(t){return function(n,r,c,f){e(r);var a=o(n),s=i(a),l=u(a.length),p=t?l-1:0,v=t?-1:1;if(c<2)for(;;){if(p in s){f=s[p],p+=v;break}if(p+=v,t?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:l>p;p+=v)p in s&&(f=r(f,s[p],p,a));return f}};t.exports={left:c(!1),right:c(!0)}},function(t,n,r){"use strict";var e=r(6),o=r(44),i=[].reverse,u=[1,2];e({target:"Array",proto:!0,forced:String(u)===String(u.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),i.call(this)}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){t.exports=r(221)},function(t,n,r){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r(33),r(36),r(37),r(148),r(222),r(142),r(93),r(22),r(149),r(151),r(91),r(119),r(145),r(223),r(224),r(38),r(59),r(52),r(225),r(32),r(108),r(228),r(102),r(105),r(39);var o={"初期化":{type:"func",josi:[],fn:function(t){}},"漢数字":{type:"func",josi:[["を","の"]],fn:function(t){return t=function(t){if(t=function(t){return t.replace(/[０-９]/g,(function(t){return String.fromCharCode(t.charCodeAt(0)-65248)}))}(t),Number.isNaN(Number(t)))throw new Error("『漢数字』命令の中に無効な文字が含まれています。");var n=function(t){var n=t.match(/[0-9]*\.?[0-9]+[eE][-+]?[0-9]+/);if(n&&n[0]===t){var r=t.match(/[0-9]*\.?[0-9]+[eE]/)[0].slice(0,-1),e=t.match(/[eE][-+]?[0-9]+/)[0].slice(1);t=function(t,n){var r=n[0],e=t.includes(".")?t.indexOf("."):t.length,o="-"===r?e-parseInt(n.slice(1)):e+parseInt(n.match(/[0-9]+$/)[0]);return o>0?t.length-e>o?function(t,n,r){return t.slice(0,n)+r+t.slice(n)}(t.replace(".",""),o,"."):t.includes(".")?t.replace(".","")+"0".repeat(o-t.length+e):t+"0".repeat(o-t.length+e-1):"0."+"0".repeat(-o)+t.replace(".","")}(r,e)}return t}(t.toString());if(n>999999999999999999999999999999999999999999999999999999999999999999999999n)throw new Error("『漢数字』命令の中に含められる数の大きさを超えています。");return n}(String(t)),function(t){function n(t){return f[c.indexOf(t)]}var r=0,e=t.reverse().reduce((function(t,e,o){if("string"==typeof e)"."===e?(t="・"+t,r=o+1):t=n(e)+t;else{var c=e.reduce((function(t,r,e,o){return"0"===r?t:"1"===r&&""!==u[o.length-1-e]?t+u[o.length-1-e]:t+n(r)+u[o.length-1-e]}),"");t=(c?c+i[o-r]:"")+t}return t}),"");return"・"===e[0]?"零"+e:e}((r=(n=t).includes("."),n.split("").reverse().reduce((function(t,n){return"."===n?(r=!1,t.splice(1,0,"."),t):r?(t.splice(1,0,n),t):(t[0].length===u.length&&t.unshift([]),t[0].unshift(n),t)}),[[]])));var n,r}},"算用数字":{type:"func",josi:[["を","の"]],fn:function(t){var n,r,e,o,c=function(t){return t.reduce((function(t,n,r){return"string"==typeof n?t+n:t+n.reduce((function(t,n,r){return n>1e3?t*n:t+BigInt(n[0]*n[1])}),0n)}),0n)}((n=function(t){for(var n=i.filter((function(t){return t.length>1})),r=[],e=function(e){var c=t.slice(e,e+1),a=i.includes(c)?c:n.find((function(n){return n===t.slice(e,e+n.length)})),s=u.includes(c)?c:null,l=f.includes(c)?c:null;if(a)a.length>1&&(e+=a.length-1),r.push(BigInt("1"+"0".repeat(4*i.indexOf(a))));else if(s)r.push(Math.pow(10,u.indexOf(s)));else if(l)r.push(f.indexOf(l));else if("・"===c)r.push(".");else{if("零"!==c)throw new Error("『算用数字』命令の中に無効な文字が含まれています。");r.push("0")}o=e},o=0;o<t.length;o++)e(o);return r}(t.toString()),r=[],e=[],o=!1,n.reduce((function(t,i,u){return"."===i?(0===r.length&&r.push(0,1),1===r.length&&r.push(1),e.push(r),r=[],t.push(e),t.push("."),e=[],o=!0):o?t.push(String(i)):i>1e3?(0===r.length&&r.push(0,1),1===r.length&&r.push(1),e.push(r),r=[],e.push(i),t.push(e),e=[]):10<=i&&i<=1e3?(0===r.length&&r.push(1),r.push(i),e.push(r),r=[]):i<10&&r.push(i),u+1===n.length&&!1===o&&(1===r.length&&(r.push(1),e.push(r)),t.push(e)),t}),[])));return c>Number.MAX_SAFE_INTEGER?c:Number(c)}}},i=["","万","億","兆","京","垓","𥝱","穣","溝","澗","正","載","極","恒河沙","阿僧祇","那由他","不可思議","無量大数"],u=["","十","百","千"],c="0123456789".split(""),f="〇一二三四五六七八九".split("");t.exports=o,"object"===("undefined"==typeof navigator?"undefined":e(navigator))&&navigator.nako3.addPluginObject("PluginKansuji",o)},function(t,n,r){"use strict";var e=r(6),o=r(70).find,i=r(73),u=r(57),c="find",f=!0,a=u(c);c in[]&&Array(1).find((function(){f=!1})),e({target:"Array",proto:!0,forced:f||!a},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(c)},function(t,n,r){r(6)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},function(t,n,r){r(6)({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,r){"use strict";var e=r(6),o=r(226),i=r(16);e({target:"String",proto:!0,forced:!r(227)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(114);t.exports=function(t){if(e(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,n,r){var e=r(1)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,"/./"[t](n)}catch(t){}}return!1}},function(t,n,r){r(6)({target:"String",proto:!0},{repeat:r(229)})},function(t,n,r){"use strict";var e=r(27),o=r(16);t.exports="".repeat||function(t){var n=String(o(this)),r="",i=e(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(n+=n))1&i&&(r+=n);return r}}]);