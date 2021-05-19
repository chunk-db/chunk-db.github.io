(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[815],{4233:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var r=n(2322),o=n(6422),i=n(2784),c=n(8079),s=n(3698),u=n(436),a=n(9692),h=n(3035),f=n(8486),l=n(7556),d=n(7390),p=n(7485),v=n(5584),y=n(1256),m=n(8987),g=n(9571),b=n(4317),w=n(9556);var k=(0,a.Z)({});function x(e){var t=e.chunks,n=(k(),t.map((function(e){return{id:e.id,shortId:j(e.id),type:e.type,size:e.records.size}})));return(0,r.jsx)(y.Z,{component:l.Z,children:(0,r.jsxs)(d.Z,{size:"small",stickyHeader:!0,"aria-label":"a dense table",children:[(0,r.jsx)(m.Z,{children:(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(v.Z,{children:"UUID"}),(0,r.jsx)(v.Z,{align:"right",children:"Type"}),(0,r.jsx)(v.Z,{align:"right",children:"Size"})]})}),(0,r.jsx)(p.Z,{children:n.map((function(e){return(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(v.Z,{component:"th",scope:"row",children:(0,r.jsxs)(s.Z,{display:"flex",flexDirection:"row",justifyContent:"space-between",children:[(0,r.jsx)(b.ZP,{title:e.id,"aria-label":"Chunk ID",children:(0,r.jsx)("span",{children:e.shortId})}),(0,r.jsx)(f.Z,{"aria-label":"Edit",size:"small",edge:"end",onClick:function(){return function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(e.id)},children:(0,r.jsx)(w.Z,{fontSize:"small"})})]})}),(0,r.jsx)(v.Z,{align:"right",children:e.type}),(0,r.jsx)(v.Z,{align:"right",children:e.size})]},e.id)}))})]})})}function j(e){return e?e.substr(0,13)+"..."+e.substr(28):e}var S=n(3434),P=n(4339),C=n(4579),E=n(2552);function T(e){var t=e.space,n=Object.keys(t.refs).map((function(e){return{ref:e,chunk:t.refs[e]}}));return(0,r.jsxs)(P.Z,{children:[(0,r.jsx)(E.Z,{avatar:(0,r.jsx)(S.Z,{"aria-label":"recipe",children:"S"}),title:t.name,subheader:t.id}),(0,r.jsxs)(C.Z,{children:[(0,r.jsxs)(u.Z,{gutterBottom:!0,children:["Description: ",t.description||(0,r.jsx)("i",{children:"(empty)"})]}),(0,r.jsxs)(d.Z,{size:"small",stickyHeader:!0,"aria-label":"a dense table",component:l.Z,children:[(0,r.jsx)(m.Z,{children:(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(v.Z,{children:"Ref"}),(0,r.jsx)(v.Z,{align:"right",children:"Chunk"})]})}),(0,r.jsx)(p.Z,{children:n.map((function(e){return(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(v.Z,{component:"th",scope:"row",children:e.ref}),(0,r.jsx)(v.Z,{align:"right",children:e.chunk})]},e.ref)}))})]})]})]})}var _=(0,a.Z)({root:{marginTop:12,marginBottom:12}}),Z="space",L=function(e){var t=e.db;t=t||(0,c.zh)();var n=(0,c.Ke)(Z,"todos",1/0),o=(0,c.$_)(Z),i=_();if(!t)return(0,r.jsx)("div",{children:"not ready"});var a=t.storage.chunks.size;return(0,r.jsxs)("div",{children:[(0,r.jsx)(u.Z,{component:"h1",variant:"h2",children:"Dev tools"}),(0,r.jsx)(s.Z,{className:i.root,children:(0,r.jsx)(T,{space:o})}),(0,r.jsx)(s.Z,{className:i.root,children:(0,r.jsxs)(h.Z,{severity:"info",variant:"outlined",children:["Total chunks in storage: ",a]})}),(0,r.jsx)(s.Z,{className:i.root,children:(0,r.jsx)(x,{chunks:n})})]})};var D=n(2914),O=n(6401),I=function(e){var t=e.saveTodo,n=function(){var e=(0,i.useState)(""),t=e[0],n=e[1];return{value:t,onChange:function(e){n(e.target.value)},reset:function(){return n("")}}}(),o=n.value,c=n.reset,u=n.onChange;return(0,r.jsx)("form",{onSubmit:function(e){e.preventDefault(),o.trim()&&t(o),c()},children:(0,r.jsxs)(s.Z,{alignItems:"bottom",children:[(0,r.jsx)(D.Z,{placeholder:"Add todo",margin:"normal",onChange:u,value:o}),(0,r.jsx)(f.Z,{"aria-label":"Delete",type:"submit",disabled:!o.trim(),children:(0,r.jsx)(O.Z,{})})]})})},N=n(3092),R=n(1776),A=n(8402),B=n(9520),M=n(9378),F=n(2983),q=n(7604),z=function(e){var t=e.todos,n=e.deleteTodo;return(0,r.jsx)(R.Z,{children:t.map((function(e){return(0,r.jsxs)(A.Z,{dense:!0,button:!0,children:[(0,r.jsx)(N.Z,{tabIndex:-1,disableRipple:!0}),(0,r.jsx)(M.Z,{primary:e.title}),(0,r.jsxs)(B.Z,{children:[(0,r.jsx)(f.Z,{"aria-label":"Edit",onClick:function(){n(e._id)},children:(0,r.jsx)(q.Z,{})}),(0,r.jsx)(f.Z,{"aria-label":"Delete",onClick:function(){n(e._id)},children:(0,r.jsx)(F.Z,{})})]})]},e._id)}))})},U=function(){var e=function(){var e=(0,c.zh)();return(0,i.useCallback)((function(t){var n=t.trim();if(n){var r={_id:Math.random().toString(16).substring(2),title:n};e.transaction("space",(function(e){return e.insert("todos",r)})).then((function(){return console.log("transaction complete")}))}}),[e])}(),t=function(){var e=(0,c.zh)();return(0,i.useCallback)((function(e){e&&alert("delete todo "+e)}),[e])}(),n=(0,c.hT)("space",(function(e){return e.collection("todos").find({})})),o=(0,c.hT)("space",(function(e){return e.collection("todos").find({}).exec().reduce((function(e,t){return e+t.title.length}),0)}));return(0,r.jsxs)("div",{className:"App",children:[(0,r.jsx)(u.Z,{component:"h1",variant:"h2",children:"Todos"}),(0,r.jsx)(I,{saveTodo:e}),(0,r.jsxs)(h.Z,{severity:"info",variant:"outlined",children:["Total symbols in titles: ",o]}),(0,r.jsx)(z,{todos:n,deleteTodo:t})]})},G=n(5292),$=new(n(7648).s)("chunk-db-todolist-example"),H=new G.Space({id:"space",name:"a1",refs:{todos:null}}),K=new G.ChunkDB({storage:$,collections:{todos:{}}});K.connect().then((function(e){console.log("connected"),e.spaces.load(H.id).catch((function(){return e.spaces.create(H),e.spaces.save(H.id)})).then((function(e){return H=e})).then((function(){return console.log("init spaces",e.spaces)}))}));var V=function(){return(0,r.jsxs)("div",{className:"jsx-481934628 app",children:[(0,r.jsxs)(c.gt,{value:K,children:[(0,r.jsx)("div",{className:"jsx-481934628 todolist-container",children:(0,r.jsx)(U,{})}),(0,r.jsx)("div",{className:"jsx-481934628 devtools-container",children:(0,r.jsx)(L,{db:K})})]}),(0,r.jsx)(o.default,{id:"481934628",children:[".app.jsx-481934628{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:900px;margin:10px auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".todolist-container.jsx-481934628{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;}",".devtools-container.jsx-481934628{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;}"]})]})}},3354:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/todolist",function(){return n(4233)}])},5292:function(e,t,n){var r,o=n(9987);function i(e){return new Map(Object.keys(e).map((function(t){return[t,e[t]]})))}function c(e){return Array.from(e.values())}function s(e){var t={};return e.forEach((function(e){return t[e._id]=e})),t}(r=t.ChunkType||(t.ChunkType={})).Unknown="",r.Snapshot="snapshot",r.Incremental="incremental",r.Update="update",r.Merge="merge",r.Draft="draft",r.TemporaryTransaction="temporary-transaction";var u=function(){function e(e){this.id="",this.id=e.id,this.parents=e.parents,this.records=i(e.records)}return e.prototype.toGenericChunk=function(){var e={};return this.records.forEach((function(t,n){return e[n]=t})),{id:this.id,type:this.type,parents:this.parents.slice(),records:e}},e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,p(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function y(e,t,n){return(y=v()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&p(o,n.prototype),o}).apply(null,arguments)}function m(e){var t="function"===typeof Map?new Map:void 0;return(m=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return y(e,arguments,d(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),p(r,e)})(e)}var g=function(e){function n(n){var r;if((r=e.call(this,n)||this).type=t.ChunkType.Incremental,!r.records.size)throw new Error("Incremental chunk can not be empty");return r}return l(n,e),n}(u),b=function(e){function n(n){var r;return(r=e.call(this,n)||this).type=t.ChunkType.Snapshot,r}return l(n,e),n}(u);function w(e){if(!k(e))throw new Error("Invalid chunk");switch(e.type){case t.ChunkType.Snapshot:return new b(e);case t.ChunkType.TemporaryTransaction:case t.ChunkType.Incremental:default:return new g(e)}}function k(e){if("object"!==typeof e||!e)return!1;var t=e.parents,n=e.records;return!!Array.isArray(t)&&"object"===typeof n}var x=function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t}(m(Error)),j=function(e){function t(t){return e.call(this,'Space "'+t+'" not found')||this}return l(t,e),t}(x),S=function(e){function t(t){return e.call(this,'Chunk "'+t+'" not found in storage')||this}return l(t,e),t}(m(Error)),P=function(){function e(e){this.driver=e,this.chunks=new Map,this.spaces=new Map}var n=e.prototype;return n.connect=function(){var e=this;return this.driver.connect?this.driver.connect().then((function(){return e})):Promise.resolve(this)},n.getExists=function(e){return this.chunks.get(e)||null},n.saveChunk=function(e){try{return this.chunks.set(e.id,e),Promise.resolve(this.driver.saveChunk(e.toGenericChunk())).then((function(){return e}))}catch(t){return Promise.reject(t)}},n.saveTemporalChunk=function(e){return this.chunks.set(e.id,e),e},n.removeTemporalChunk=function(e){var n=this.chunks.get(e);return!n||n.type===t.ChunkType.TemporaryTransaction&&(this.chunks.delete(e),!0)},n.loadChunk=function(e){try{var t=this;if(!e)throw new S(e);return t.chunks.has(e)?Promise.resolve(t.chunks.get(e)):Promise.resolve(t.driver.loadChunk(e)).then((function(e){var n=w(e);return t.chunks.set(n.id,n),n}))}catch(n){return Promise.reject(n)}},n.saveSpace=function(e){return this.spaces.set(e.id,e),this.driver.saveSpace(e)},n.loadSpace=function(e){try{return Promise.resolve(this.driver.loadSpace(e)).then((function(t){if(!t)throw new j(e);return t}))}catch(t){return Promise.reject(t)}},e}(),C=function(e){function n(n,r,o){var i;return void 0===o&&(o=[]),(i=e.call(this,{id:n,type:t.ChunkType.TemporaryTransaction,parents:r?[r]:[],records:s(o)})||this).type=t.ChunkType.TemporaryTransaction,i.records=new Map,i}return l(n,e),n}(u);function E(e,t,n){if(!e.s){if(n instanceof T){if(!n.s)return void(n.o=E.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(E.bind(null,e,t),E.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var T=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{E(r,1,i(this.v))}catch(c){E(r,2,c)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?E(r,1,t?t(o):o):n?E(r,1,n(o)):E(r,2,o)}catch(c){E(r,2,c)}},r},e}();function _(e){return e instanceof T&&1&e.s}function Z(e,t,n){for(var r;;){var o=e();if(_(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!_(i)){r=1;break}i=i.s}if(t){var c=t();if(c&&c.then&&!_(c)){r=2;break}}}var s=new T,u=E.bind(null,s,2);return(0===r?o.then(h):1===r?i.then(a):c.then(f)).then(void 0,u),s;function a(r){i=r;do{if(t&&(c=t())&&c.then&&!_(c))return void c.then(f).then(void 0,u);if(!(o=e())||_(o)&&!o.v)return void E(s,1,i);if(o.then)return void o.then(h).then(void 0,u);_(i=n())&&(i=i.v)}while(!i||!i.then);i.then(a).then(void 0,u)}function h(e){e?(i=n())&&i.then?i.then(a).then(void 0,u):a(i):E(s,1,i)}function f(){(o=e())?o.then?o.then(h).then(void 0,u):h(o):E(s,1,i)}}var L=function(){function e(e){this.querySelector=e,this._done=!1}var t=e.prototype;return t.one=function(){try{var e=this,t=function(){return e._done=!0,n},n=null,r=Z((function(){return!e.querySelector.done||!n}),void 0,(function(){return Promise.resolve(e.querySelector.next()).then((function(e){var t=e.records;n=t[0]||null}))}));return Promise.resolve(r&&r.then?r.then(t):t())}catch(o){return Promise.reject(o)}},t.all=function(){try{var e=this,t=function(){return e._done=!0,n};if(e._done)throw new Error("Cursor already complete");var n=[],r=Z((function(){return!e.querySelector.done}),void 0,(function(){return Promise.resolve(e.querySelector.next()).then((function(e){var t=e.records;n.push.apply(n,t)}))}));return Promise.resolve(r&&r.then?r.then(t):t())}catch(o){return Promise.reject(o)}},t.reduce=function(e,t){try{var n=this,r=function(){return n._done=!0,o};if(n._done)throw new Error("Cursor already complete");var o=t,i=Z((function(){return!n.querySelector.done}),void 0,(function(){return Promise.resolve(n.querySelector.next()).then((function(t){t.records.forEach((function(t){return o=e(o,t)}))}))}));return Promise.resolve(i&&i.then?i.then(r):r())}catch(c){return Promise.reject(c)}},h(e,[{key:"done",get:function(){return this._done}}]),e}();var D,O;(function(e){var t=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(L){u=function(e,t,n){return e[t]=n}}function a(e,t,n,r){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),c=new T(r||[]);return i._invoke=function(e,t,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return Z()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var s=P(c,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=h(e,t,n);if("normal"===u.type){if(r=n.done?p:l,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(e,n,c),i}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=a;var f="suspendedStart",l="suspendedYield",d="executing",p="completed",v={};function y(){}function m(){}function g(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,k=w&&w(w(_([])));k&&k!==n&&r.call(k,i)&&(b=k);var x=g.prototype=y.prototype=Object.create(b);function j(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(o,i,c,s){var u=h(e[o],e,i);if("throw"!==u.type){var a=u.arg,f=a.value;return f&&"object"===typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,c,s)}),(function(e){n("throw",e,c,s)})):t.resolve(f).then((function(e){a.value=e,c(a)}),(function(e){return n("throw",e,c,s)}))}s(u.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function P(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,P(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=h(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function _(e){if(e){var n=e[i];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,c=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return c.next=c}}return{next:Z}}function Z(){return{value:t,done:!0}}return m.prototype=x.constructor=g,g.constructor=m,m.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},j(S.prototype),S.prototype[c]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var c=new S(a(t,n,r,o),i);return e.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},j(x),u(x,s,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=_,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],s=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=r.call(c,"catchLoc"),a=r.call(c,"finallyLoc");if(u&&a){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=e,c.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:_(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=t}catch(n){Function("r","regeneratorRuntime = r")(t)}})(O={path:D,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},O.exports);var I={$eq:function(e){return function(t){return t===e}},$gt:function(e){return function(t){return t>e}},$gte:function(e){return function(t){return t>=e}},$lt:function(e){return function(t){return t<e}},$lte:function(e){return function(t){return t<=e}}};function N(e){if("object"!==typeof e)throw new Error("ConditionValidator must be an object");var t=Object.keys(e).map((function(t){return{getter:function(e){var t=Array.isArray(e)?e:e.split(".");return function(e){for(var n=e,r=0;r<t.length;r++){if("object"!==typeof n||!n)return;var o=t[r];if(!(o in n))return;n=n[o]}return n}}(t),conditions:function(e){var t="object"===typeof e?e:{$eq:e};return Object.keys(t).map((function(e){var n=e;if(!(n in I))throw new R('Unknown operator "'+n+'"');return I[n](t[n])}))}(e[t])}}));return function(e){return t.every((function(t){var n=t.getter,r=t.conditions,o=n(e);return r.every((function(e){return e(o)}))}))}}var R=function(e){function t(t,n,r){var o;return(o=e.call(this,t)||this).path=n,o.query=r,o}return l(t,e),t}(m(Error)),A=Symbol("Call");function B(e){var t;return(t={})[A]=!0,t.action=e,t.args=[].slice.call(arguments,1),t}var M=function(e){try{return Promise.resolve(this.storage.loadChunk(e)).then((function(t){if(!t)throw new S(e);return t}))}catch(t){return Promise.reject(t)}};function F(e){return e()}var q=regeneratorRuntime.mark(z);function z(e,n){var r,o,i,s,u,a;return regeneratorRuntime.wrap((function(h){for(;;)switch(h.prev=h.next){case 0:return void 0===n&&(n={}),r=new Map,o=N(n),h.next=5,B(F,e);case 5:s=h.sent,u=s;case 7:return h.next=10,B(M,u);case 10:if(i=h.sent){h.next=13;break}throw new S(u);case 13:a=c(i.records).filter(U(r,o)),h.t0=i.type,h.next=h.t0===t.ChunkType.Snapshot?17:h.t0===t.ChunkType.TemporaryTransaction||h.t0===t.ChunkType.Incremental?18:22;break;case 17:return h.abrupt("return",{chunkID:u,records:a});case 18:return h.next=20,{chunkID:u,records:a};case 20:return u=i.parents[0],h.abrupt("break",23);case 22:throw new Error('Unsupported chunk type "'+i.type+'"');case 23:h.next=7;break;case 25:case"end":return h.stop()}}),q)}function U(e,t){return function(n){return!e.has(n._id)&&(!!t(n)&&(e.set(n._id,n),!0))}}var G,$=function(){function e(e,t,n){this.db=e,this.delayedRef=t,this.query=n,this._done=!1,this.scenario=this.db.run(z(this.delayedRef,this.query))}return e.prototype.next=function(){try{var e=this;return Promise.resolve(e.scenario.next()).then((function(t){var n=t.done,r=t.value;return e._done=!!n,r}))}catch(t){return Promise.reject(t)}},h(e,[{key:"done",get:function(){return this._done}}]),e}(),H=function(){function e(e,t,n){this.db=e,this.delayedRef=t,this._query=n}return e.prototype.exec=function(){var e=new $(this.db,this.delayedRef,this._query);return new L(e)},e}(),K=function(){function e(e,t){this.db=e,this.delayedRef=t}var t=e.prototype;return t.find=function(e){return new H(this.db,this.delayedRef,e)},t.findOne=function(e){try{return Promise.resolve(this.findAll(e)).then((function(e){return e[0]||null}))}catch(t){return Promise.reject(t)}},t.findAll=function(e){return this.find(e).exec().all()},e}(),V=function(){function e(e,t){this.db=e,this.space=t,this.updatedRefs={},this.stats={deleted:[],inserted:[],updated:[],upserted:[]},this.chunks={}}var t=e.prototype;return t.getDB=function(){return this.db},t.getSpace=function(){return this.space},t.getStats=function(){return this.stats},t.collection=function(e){return new K(this.db,this.makeDelayedRef(e))},t.insert=function(e,t){try{var n=this;return n.writeIntoCollection(e),t._id||(t=f({},t,{_id:o.v4()})),n.chunks[e].records.set(t._id,t),n.stats.inserted.push(t._id),n.stats.upserted.push(t._id),n.db.storage.saveTemporalChunk(n.chunks[e]),Promise.resolve(t)}catch(r){return Promise.reject(r)}},t.upsert=function(e,t){try{var n=this;return n.writeIntoCollection(e),n.chunks[e].records.has(t._id)||n.stats.upserted.push(t._id),n.chunks[e].records.set(t._id,t),n.db.storage.saveTemporalChunk(n.chunks[e]),Promise.resolve(t)}catch(r){return Promise.reject(r)}},t.writeIntoCollection=function(e){if(!(e in this.updatedRefs)){var t=o.v4(),n=new C(t,this.refs[e]);this.updatedRefs[e]=t,this.chunks[e]=n}},t.makeDelayedRef=function(e){var t=this;return function(){return Promise.resolve(t.refs[e])}},h(e,[{key:"refs",get:function(){return f({},this.space.refs,this.updatedRefs)}}]),e}(),Y=function(e){function n(n){var r;return(r=e.call(this,n)||this).type=t.ChunkType.Merge,r.commonChunk="",r}return l(n,e),n}(u),Q=function(e){function n(){var n;return(n=e.apply(this,arguments)||this).type=t.ChunkType.Update,n}return l(n,e),n}(u),X=function(){function e(e,t,n){this.db=e,this.name=t,this.config=n}return e.prototype.space=function(e){var t=this.db.spaces.getDelayedSpace(e).getRef(this.config);return new K(this.db,t)},e}();(G=t.Priority||(t.Priority={}))[G.Low=1]="Low",G[G.Normal=2]="Normal",G[G.High=3]="High";var J=function(e,n){if(this.name=e,this.indexedFields=[],this.priority=t.Priority.Normal,this.indexedFields=n.indexedFields||this.indexedFields,this.priority=n.priority||this.priority,"factory"in n)this.factory=n.factory;else{if(!("constructor"in n))throw new Error("Invalid collection config");this.factory=function(e){return new n.constructor(e)}}};function W(e){var t=e;return t.unsubscribe=e,t}var ee=function(){function e(e,t){this.db=e,this.spaceId=t}return e.prototype.collection=function(e){if(!(e in this.db.collections))throw new Error('Invalid collection "'+e+'"');var t=this.db.collections[e];return t.space(this.spaceId)},h(e,[{key:"space",get:function(){return this.db.spaces.getLoaded(this.spaceId)}},{key:"description",get:function(){var e;return(null==(e=this.space)?void 0:e.description)||""}},{key:"id",get:function(){return this.spaceId}},{key:"name",get:function(){var e;return(null==(e=this.space)?void 0:e.name)||""}},{key:"refs",get:function(){var e;return(null==(e=this.space)?void 0:e.refs)||{}}}]),e}(),te=function(e){this.id=e.id,this.name=e.name,this.description=e.description||"",this.refs=e.refs},ne=function(){function e(e,t){this.spaces=e,this.spaceID=t}var t=e.prototype;return t.getSpace=function(){return this.spaces.isLoaded(this.spaceID)?Promise.resolve(this.spaces.getLoaded(this.spaceID)):this.spaces.load(this.spaceID)},t.getRefs=function(){return this.getSpace().then((function(e){return e.refs}))},t.getRef=function(e){var t=this;return function(){return t.getSpace().then((function(t){return t.refs[e.name]}))}},e}(),re=function(){function e(e){this.storage=e,this.spaces=new Map,this.spaceSubscriptions=new Map}var t=e.prototype;return t.create=function(e){var t=new te({id:e.id||o.v4(),name:e.name||"some name",description:e.description,refs:e.refs||{}});return this.spaces.set(t.id,t),t},t.isLoaded=function(e){return this.spaces.has(e)},t.getLoaded=function(e){return this.spaces.get(e)},t.getDelayedSpace=function(e){return new ne(this,e)},t.load=function(e){var t=this;return this.storage.loadSpace(e).then((function(e){var n=new te(e);t.spaces.set(n.id,n);var r=t.spaceSubscriptions.get(n.id);return r&&r.forEach((function(e){return e()})),n}))},t.save=function(e){var t=this.spaces.get(e);if(!t)throw new j(e);return this.storage.saveSpace(t).then((function(){return t}))},t.remove=function(e){throw new Error("not implemented")},t.updateSpaceRefs=function(e,t){try{var n=this,r=n.spaces.get(e);if(!r)throw new Error('Space "id" not loaded');return n.spaces.set(e,f({},r,{refs:t})),Promise.resolve(n.storage.saveSpace(n.spaces.get(e))).then((function(){var t=n.spaceSubscriptions.get(e);t&&t.forEach((function(e){return e()}))}))}catch(o){return Promise.reject(o)}},t.subscribe=function(e,t){var n=this,r=this.spaceSubscriptions.get(e)||[];return r.push(t),this.spaceSubscriptions.set(e,r),W((function(){var r=n.spaceSubscriptions.get(e)||[];n.spaceSubscriptions.set(e,r.filter((function(e){return e!==t})))}))},e}(),oe="undefined"!==typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function ie(e,t,n){if(!e.s){if(n instanceof ce){if(!n.s)return void(n.o=ie.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(ie.bind(null,e,t),ie.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var ce=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{ie(r,1,i(this.v))}catch(c){ie(r,2,c)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?ie(r,1,t?t(o):o):n?ie(r,1,n(o)):ie(r,2,o)}catch(c){ie(r,2,c)}},r},e}();function se(e){return e instanceof ce&&1&e.s}function ue(e,t,n){if("function"===typeof e[oe]){var r,o,i,c=e[oe]();if(function e(s){try{for(;!(r=c.next()).done&&(!n||!n());)if((s=t(r.value))&&s.then){if(!se(s))return void s.then(e,i||(i=ie.bind(null,o=new ce,2)));s=s.v}o?ie(o,1,s):o=s}catch(u){ie(o||(o=new ce),2,u)}}(),c.return){var s=function(e){try{r.done||c.return()}catch(t){}return e};if(o&&o.then)return o.then(s,(function(e){throw s(e)}));s()}return o}if(!("length"in e))throw new TypeError("Object is not iterable");for(var u=[],a=0;a<e.length;a++)u.push(e[a]);return function(e,t,n){var r,o,i=-1;return function c(s){try{for(;++i<e.length&&(!n||!n());)if((s=t(i))&&s.then){if(!se(s))return void s.then(c,o||(o=ie.bind(null,r=new ce,2)));s=s.v}r?ie(r,1,s):r=s}catch(u){ie(r||(r=new ce),2,u)}}(),r}(u,(function(e){return t(u[e])}),n)}function ae(e,t,n){for(var r;;){var o=e();if(se(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!se(i)){r=1;break}i=i.s}if(t){var c=t();if(c&&c.then&&!se(c)){r=2;break}}}var s=new ce,u=ie.bind(null,s,2);return(0===r?o.then(h):1===r?i.then(a):c.then(f)).then(void 0,u),s;function a(r){i=r;do{if(t&&(c=t())&&c.then&&!se(c))return void c.then(f).then(void 0,u);if(!(o=e())||se(o)&&!o.v)return void ie(s,1,i);if(o.then)return void o.then(h).then(void 0,u);se(i=n())&&(i=i.v)}while(!i||!i.then);i.then(a).then(void 0,u)}function h(e){e?(i=n())&&i.then?i.then(a).then(void 0,u):a(i):ie(s,1,i)}function f(){(o=e())?o.then?o.then(h).then(void 0,u):h(o):ie(s,1,i)}}var he=function(){function e(e){var t=this;this.ready=!1,this.activeTransactions=[],this.storeSubscriptions=[],this.collections={},Object.entries(e.collections).forEach((function(e){var n=e[0],r=e[1];t.collections[n]=new X(t,n,new J(n,r))})),this.storageDriver=e.storage,this.storage=new P(this.storageDriver),this.spaces=new re(this.storage)}var n=e.prototype;return n.connect=function(){var e=this;return this.storage.connect().then((function(){e.ready=!0})).then((function(){return e}))},n.subscribe=function(e,t){var n=this;return"function"===typeof e?(this.storeSubscriptions.push(e),W((function(){return n.storeSubscriptions=n.storeSubscriptions.filter((function(t){return t!==e}))}))):this.spaces.subscribe(e,t)},n.space=function(e){if(!e)throw new Error('Invalid space ""');return"object"===typeof e&&(e=e.id),new ee(this,e)},n.collection=function(e){if(e in this.collections)return this.collections[e];throw new Error('Invalid collection "'+e+'"')},n.run=function(e){return function(e,t){return{next:function(n){try{var r;return Promise.resolve(ae((function(){return!r}),void 0,(function(){var o=t.next(n),i=!!o.done,c=o.value;return function(){if(function(e){return e&&!!e[A]}(c)){var t=c.action,o=c.args;return Promise.resolve(t.apply(e,o)).then((function(e){if(n=e,i)return r=1,{done:i,value:n}}))}return r=1,{done:i,value:c}}()})))}catch(o){return Promise.reject(o)}}}}({storage:this.storage,activeTransactions:this.activeTransactions,updateSpaceRefs:this.spaces.updateSpaceRefs,spaces:this.spaces},e)},n.transaction=function(e,t,n){try{var r,o=this;return n?(r=n,Object.assign({restartOnFail:!1},t)):r=t,Promise.resolve(o.spaces.load(e)).then((function(t){var n=new V(o,t);return Promise.resolve(r(n)).then((function(){return Promise.resolve(o.applyTransaction(e,n)).then((function(){return n.getStats()}))}))}))}catch(i){return Promise.reject(i)}},n.getFlatChain=function(e,t){void 0===t&&(t=3);try{var n=this;if(!t||!e)return Promise.resolve([]);var r=[],o=[e],i=0,c=ae((function(){return i<t&&!!o.length}),(function(){return i++}),(function(){function e(){o=t}var t=[],i=ue(o,(function(e){return Promise.resolve(n.storage.loadChunk(e)).then((function(e){r.push(e),t.push.apply(t,e.parents)}))}));return i&&i.then?i.then(e):e()}));return Promise.resolve(c&&c.then?c.then((function(){return r})):r)}catch(s){return Promise.reject(s)}},n.applyTransaction=function(e,n){try{var r=this,o=Object.keys(n.chunks).map((function(e){return n.chunks[e]}));if(!o)return Promise.resolve();var i=r.spaces.getLoaded(e);if(!i)throw new j(e);return o.some((function(e){return!e.parents.length}))?o.forEach((function(e){return e.type=t.ChunkType.Snapshot})):o.forEach((function(e){return e.type=t.ChunkType.Incremental})),Promise.resolve(Promise.all(o.map((function(e){return r.storage.saveChunk(e)})))).then((function(){return o.forEach((function(e){return r.storage.removeTemporalChunk(e.id)})),r.spaces.updateSpaceRefs(i.id,n.refs)}))}catch(c){return Promise.reject(c)}},e}();var fe=function(){function e(){this.chunks=new Map,this.spaces=new Map}var t=e.prototype;return t.loadChunk=function(e){try{if(this.chunks.has(e))return Promise.resolve(this.chunks.get(e));throw new S(e)}catch(t){return Promise.reject(t)}},t.saveChunk=function(e){try{return this.chunks.set(e.id,e),Promise.resolve(e)}catch(t){return Promise.reject(t)}},t.markDraftChunkAsUnused=function(e){try{return this.chunks.delete(e),Promise.resolve()}catch(t){return Promise.reject(t)}},t.setChunks=function(e){var t=this;e.forEach((function(e){return t.chunks.set(e.id,e)}))},t.clearChunks=function(){try{return this.chunks.clear(),Promise.resolve()}catch(e){return Promise.reject(e)}},t.reset=function(e){this.chunks.clear(),this.setChunks(e)},t.removeChunk=function(e){try{return this.chunks.delete(e),Promise.resolve()}catch(t){return Promise.reject(t)}},t.createSpace=function(e){try{if(this.spaces.has(e.id))throw new x('Can not create space "'+e.id+'": already exists');return this.spaces.set(e.id,e),Promise.resolve(e)}catch(t){return Promise.reject(t)}},t.loadSpace=function(e){try{return Promise.resolve(this.spaces.get(e))}catch(t){return Promise.reject(t)}},t.saveSpace=function(e){try{return this.spaces.set(e.id,e),Promise.resolve(e)}catch(t){return Promise.reject(t)}},t.updateSpace=function(e,t){try{var n=this.spaces.get(e);if(!n)throw new x('Can not update space "'+e+'": not exists');return this.spaces.set(e,f({},n,{refs:t})),Promise.resolve(n)}catch(r){return Promise.reject(r)}},t.clearSpaces=function(){try{return this.spaces.clear(),Promise.resolve()}catch(e){return Promise.reject(e)}},t.getAllSpaces=function(){try{return Promise.resolve(Array.from(this.spaces.values()))}catch(e){return Promise.reject(e)}},e}();t.AbstractChunk=u,t.ChunkDB=he,t.CollectionConfig=J,t.DataSpace=ee,t.InMemoryChunkStorage=fe,t.IncrementalChunk=g,t.MergeChunk=Y,t.NotFoundChunkError=S,t.Query=H,t.SnapshotChunk=b,t.Space=te,t.TemporaryTransactionChunk=C,t.UpdateChunk=Q,t.arrayToMap=function(e){return new Map(e.map((function(e){return[e._id,e]})))},t.arrayToObject=s,t.chunkFactory=w,t.isGenericChunk=k,t.mapToArray=c,t.objectToArray=function(e){return Object.keys(e).map((function(t){return e[t]}))},t.objectToMap=i},7648:function(e,t,n){var r=n(5292);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(e,t){if(void 0===t&&(t={}),this.dbName=e,this.prefix=t.prefix||"chunk-db-",this.spacesCollection=t.spacesCollection||"chunk-db-spaces",this.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,!this.indexedDB)throw new Error("Fatal error: Your platform not supports IndexedDB")}var t,n,i,c=e.prototype;return c.connect=function(){var e=this;return new Promise((function(t,n){var r=e.indexedDB.open(e.dbName,1);r.addEventListener("success",(function(){e.db=r.result,console.log("successful connect to DB"),t()}),{once:!0}),r.addEventListener("error",n,{once:!0}),r.addEventListener("upgradeneeded",(function(t){var n=t.target.result;console.log("upgrade",n),n.createObjectStore(e.spacesCollection,{keyPath:"id"}),n.createObjectStore(e.chunkStorageName,{keyPath:"id"})}),{once:!0}),r.addEventListener("blocked",(function(){return n(new Error("IndexedDB blocked"))}),{once:!0})}))},c.loadChunk=function(e){var t=this;return console.log('LOAD CHUNK "'+e+'"'),new Promise((function(n,r){if(!t.db)return r(new Error("DB not init"));var o=t.db.transaction(t.chunkStorageName,"readwrite").objectStore(t.chunkStorageName).get(e);o.addEventListener("success",(function(e){return n(o.result)}),{once:!0}),o.addEventListener("error",r,{once:!0})}))},c.saveChunk=function(e){var t=this;return console.log('SAVE CHUNK "'+e.id+'"'),new Promise((function(n,r){if(!t.db)return r(new Error("DB not init"));console.log("idb:",t.db);var o=t.db.transaction(t.chunkStorageName,"readwrite");o.addEventListener("complete",(function(){return n(e)}),{once:!0}),o.addEventListener("error",(function(){return r(e)}),{once:!0}),o.objectStore(t.chunkStorageName).put(e)}))},c.markDraftChunkAsUnused=function(e){return console.log('MARK UNUSED CHUNK "'+e+'"'),Promise.resolve(void 0)},c.loadSpace=function(e){var t=this;return console.log("LOAD SPACE "+e),new Promise((function(n,r){if(!t.db)return r(new Error("DB not init"));var o=t.db.transaction([t.spacesCollection],"readwrite").objectStore(t.spacesCollection).get(e);o.addEventListener("success",(function(e){return n(o.result)}),{once:!0}),o.addEventListener("error",r,{once:!0})}))},c.saveSpace=function(e){var t=this;return console.log("SAVE SPACE "+e.id),e instanceof r.Space||(e=new r.Space(e)),new Promise((function(n,r){if(!t.db)return r(new Error("DB not init"));console.log("idb:",t.db);var o=t.db.transaction(t.spacesCollection,"readwrite");o.addEventListener("complete",(function(){return n(e)}),{once:!0}),o.addEventListener("error",(function(){return r(e)}),{once:!0}),o.objectStore(t.spacesCollection).put(e)}))},t=e,(n=[{key:"chunkStorageName",get:function(){return this.prefix+"chunks"}}])&&o(t.prototype,n),i&&o(t,i),e}();t.s=i},8079:function(e,t,n){var r=n(5292),o=n(2784);var i=o.createContext(null),c=i.Provider;function s(){return o.useContext(i)}function u(e){var t=s(),n=o.useState(t&&new r.DataSpace(t,e)),i=n[0],c=n[1];return o.useEffect((function(){if(console.log("useSpace effect",t,e),t)return t.spaces.subscribe(e,(function(){return c(new r.DataSpace(t,e))}))}),[t,e]),i}t.gt=c,t.zh=s,t.Ke=function(e,t,n){var r=o.useState([]),i=r[0],c=r[1],a=s(),h=u(e);return o.useEffect((function(){a.ready&&a.getFlatChain(h.refs[t],n).then((function(e){return c(e)}))}),[a,h,t,n]),i},t.hT=function(e,t){var n=[].slice.call(arguments,2),i=o.useState([]),c=i[0],a=i[1],h=s(),f=u(e);return o.useEffect((function(){if(h.ready){var e=t.apply(void 0,[f].concat(n));e instanceof r.Query?e.exec().all().then(a):e.then(a)}}),[f].concat(n)),c},t.$_=u}},function(e){e.O(0,[774,342,597],(function(){return t=3354,e(e.s=t);var t}));var t=e.O();_N_E=t}]);