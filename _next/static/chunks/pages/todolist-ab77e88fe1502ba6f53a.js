(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[815],{1520:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return D}});var r=n(2322),o=n(6422),i=n(2784),c=n(8079),u="space",s=function(t){var e,n=t.db;n=n||(0,c.zh)();var o=(0,c._Y)(),i=(0,c.Ke)(u,"todos",1/0),s=(0,c.$_)(u);if(!n)return(0,r.jsx)("div",{children:"not ready"});var a=n.storage.chunks.size;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Dev tools"}),(0,r.jsxs)("p",{children:["space id: ",null===s||void 0===s?void 0:s.id]}),(0,r.jsxs)("p",{children:["ref (todos): ",null===s||void 0===s||null===(e=s.refs)||void 0===e?void 0:e.todos]}),(0,r.jsxs)("p",{children:["chunks in storage: ",a]}),(0,r.jsx)("ol",{children:i.map((function(t){return(0,r.jsxs)("li",{children:[t.id," (",t.type,") [",t.records.size,"]"]},t.id)}))}),(0,r.jsx)("button",{onClick:o,children:"Update"})]})},a=n(2847),f=n.n(a),h=n(6588),l=n(7277),d=n(436),p=n(2590),v=n(5031),y=function(t){var e=t.saveTodo,n=function(){var t=(0,i.useState)(""),e=t[0],n=t[1];return{value:e,onChange:function(t){n(t.target.value)},reset:function(){return n("")}}}(),o=n.value,c=n.reset,u=n.onChange;return(0,r.jsx)("form",{onSubmit:function(t){t.preventDefault(),e(o),c()},children:(0,r.jsx)(v.Z,{variant:"outlined",placeholder:"Add todo",margin:"normal",onChange:u,value:o})})},m=n(3092),g=n(8486),w=n(1776),b=n(8402),k=n(9520),x=n(9378),j=n(2983),S=function(t){var e=t.todos,n=t.deleteTodo;return(0,r.jsx)(w.Z,{children:e.map((function(t){return(0,r.jsxs)(b.Z,{dense:!0,button:!0,children:[(0,r.jsx)(m.Z,{tabIndex:-1,disableRipple:!0}),(0,r.jsx)(x.Z,{primary:t.title}),(0,r.jsx)(k.Z,{children:(0,r.jsx)(g.Z,{"aria-label":"Delete",onClick:function(){n(t._id)},children:(0,r.jsx)(j.Z,{})})})]},t._id)}))})};function P(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){u=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var E=function(){var t=function(t){var e=(0,i.useState)(t),n=e[0],r=e[1];return{todos:n,addTodo:function(t){r([].concat((0,p.Z)(n),[t]))},deleteTodo:function(t){var e=n.filter((function(e){return e._id!==t}));r(e)},setTodos:r}}([]),e=t.todos,n=t.addTodo,o=t.deleteTodo,u=(0,c.zh)(),s=(0,i.useCallback)((function(){u.transaction("space",function(){var t=(0,h.Z)(f().mark((function t(n){var r,o,i;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=P(e),t.prev=1,r.s();case 3:if((o=r.n()).done){t.next=9;break}return i=o.value,t.next=7,n.insert("todos",i);case 7:t.next=3;break;case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),r.e(t.t0);case 14:return t.prev=14,r.f(),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})));return function(e){return t.apply(this,arguments)}}()).then((function(){console.log("transaction complete")}))}),[e]),a=(0,c.$_)("space"),v=(0,c.hT)("space",(function(t){return t.collection("todos").find({})})),m=(0,c.hT)("space",(function(t){return t.collection("todos").find({}).exec().reduce((function(t,e){return t+e.title.length}),0)}));return(0,r.jsxs)("div",{className:"App",children:[(0,r.jsx)(d.Z,{component:"h1",variant:"h2",children:"Todos"}),(0,r.jsx)(y,{saveTodo:function(t){var e=t.trim();e.length>0&&n({_id:Math.random().toString(16).substring(2),title:e})}}),(0,r.jsx)(S,{todos:e,deleteTodo:o}),(0,r.jsx)("hr",{}),(0,r.jsx)(S,{todos:v,deleteTodo:o}),(0,r.jsx)(l.Z,{variant:"contained",color:"primary",onClick:s,children:"Primary"}),(0,r.jsxs)("p",{children:["Total symbols: ",m]}),(0,r.jsx)("pre",{children:JSON.stringify({id:a.id,name:a.name,refs:a.refs},null,2)})]})},T=n(5292),_=new(n(7648).s)("chunk-db-todolist-example"),L=new T.Space({id:"space",name:"a1",refs:{todos:null}}),O=new T.ChunkDB({storage:_,collections:{todos:{}}});O.connect().then((function(t){console.log("connected"),t.spaces.load(L.id).catch((function(){return t.spaces.create(L),t.spaces.save(L.id)})).then((function(t){return L=t})).then((function(){return console.log("init spaces",t.spaces)}))}));var D=function(){return(0,r.jsxs)("div",{className:"jsx-481934628 app",children:[(0,r.jsxs)(c.gt,{value:O,children:[(0,r.jsx)("div",{className:"jsx-481934628 todolist-container",children:(0,r.jsx)(E,{})}),(0,r.jsx)("div",{className:"jsx-481934628 devtools-container",children:(0,r.jsx)(s,{db:O})})]}),(0,r.jsx)(o.default,{id:"481934628",children:[".app.jsx-481934628{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:900px;margin:10px auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".todolist-container.jsx-481934628{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;}",".devtools-container.jsx-481934628{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;}"]})]})}},3354:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/todolist",function(){return n(1520)}])},5292:function(t,e,n){var r,o=n(9987);function i(t){return new Map(Object.keys(t).map((function(e){return[e,t[e]]})))}function c(t){return Array.from(t.values())}function u(t){var e={};return t.forEach((function(t){return e[t._id]=t})),e}(r=e.ChunkType||(e.ChunkType={})).Unknown="",r.Snapshot="snapshot",r.Incremental="incremental",r.Update="update",r.Merge="merge",r.Draft="draft",r.TemporaryTransaction="temporary-transaction";var s=function(){function t(t){this.id="",this.id=t.id,this.parents=t.parents,this.records=i(t.records)}return t.prototype.toGenericChunk=function(){var t={};return this.records.forEach((function(e,n){return t[n]=e})),{id:this.id,type:this.type,parents:this.parents.slice(),records:t}},t}();function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,p(t,e)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function y(t,e,n){return(y=v()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&p(o,n.prototype),o}).apply(null,arguments)}function m(t){var e="function"===typeof Map?new Map:void 0;return(m=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return y(t,arguments,d(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),p(r,t)})(t)}var g=function(t){function n(n){var r;if((r=t.call(this,n)||this).type=e.ChunkType.Incremental,!r.records.size)throw new Error("Incremental chunk can not be empty");return r}return l(n,t),n}(s),w=function(t){function n(n){var r;return(r=t.call(this,n)||this).type=e.ChunkType.Snapshot,r}return l(n,t),n}(s);function b(t){if(!k(t))throw new Error("Invalid chunk");switch(t.type){case e.ChunkType.Snapshot:return new w(t);case e.ChunkType.TemporaryTransaction:case e.ChunkType.Incremental:default:return new g(t)}}function k(t){if("object"!==typeof t||!t)return!1;var e=t.parents,n=t.records;return!!Array.isArray(e)&&"object"===typeof n}var x=function(t){function e(){return t.apply(this,arguments)||this}return l(e,t),e}(m(Error)),j=function(t){function e(e){return t.call(this,'Space "'+e+'" not found')||this}return l(e,t),e}(x),S=function(t){function e(e){return t.call(this,'Chunk "'+e+'" not found in storage')||this}return l(e,t),e}(m(Error)),P=function(){function t(t){this.driver=t,this.chunks=new Map,this.spaces=new Map}var n=t.prototype;return n.connect=function(){var t=this;return this.driver.connect?this.driver.connect().then((function(){return t})):Promise.resolve(this)},n.getExists=function(t){return this.chunks.get(t)||null},n.saveChunk=function(t){try{return this.chunks.set(t.id,t),Promise.resolve(this.driver.saveChunk(t.toGenericChunk())).then((function(){return t}))}catch(e){return Promise.reject(e)}},n.saveTemporalChunk=function(t){return this.chunks.set(t.id,t),t},n.removeTemporalChunk=function(t){var n=this.chunks.get(t);return!n||n.type===e.ChunkType.TemporaryTransaction&&(this.chunks.delete(t),!0)},n.loadChunk=function(t){try{var e=this;if(!t)throw new S(t);return e.chunks.has(t)?Promise.resolve(e.chunks.get(t)):Promise.resolve(e.driver.loadChunk(t)).then((function(t){var n=b(t);return e.chunks.set(n.id,n),n}))}catch(n){return Promise.reject(n)}},n.saveSpace=function(t){return this.spaces.set(t.id,t),this.driver.saveSpace(t)},n.loadSpace=function(t){try{return Promise.resolve(this.driver.loadSpace(t)).then((function(e){if(!e)throw new j(t);return e}))}catch(e){return Promise.reject(e)}},t}(),C=function(t){function n(n,r,o){var i;return void 0===o&&(o=[]),(i=t.call(this,{id:n,type:e.ChunkType.TemporaryTransaction,parents:r?[r]:[],records:u(o)})||this).type=e.ChunkType.TemporaryTransaction,i.records=new Map,i}return l(n,t),n}(s);function E(t,e,n){if(!t.s){if(n instanceof T){if(!n.s)return void(n.o=E.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(E.bind(null,t,e),E.bind(null,t,2));t.s=e,t.v=n;var r=t.o;r&&r(t)}}var T=function(){function t(){}return t.prototype.then=function(e,n){var r=new t,o=this.s;if(o){var i=1&o?e:n;if(i){try{E(r,1,i(this.v))}catch(c){E(r,2,c)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?E(r,1,e?e(o):o):n?E(r,1,n(o)):E(r,2,o)}catch(c){E(r,2,c)}},r},t}();function _(t){return t instanceof T&&1&t.s}function L(t,e,n){for(var r;;){var o=t();if(_(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!_(i)){r=1;break}i=i.s}if(e){var c=e();if(c&&c.then&&!_(c)){r=2;break}}}var u=new T,s=E.bind(null,u,2);return(0===r?o.then(f):1===r?i.then(a):c.then(h)).then(void 0,s),u;function a(r){i=r;do{if(e&&(c=e())&&c.then&&!_(c))return void c.then(h).then(void 0,s);if(!(o=t())||_(o)&&!o.v)return void E(u,1,i);if(o.then)return void o.then(f).then(void 0,s);_(i=n())&&(i=i.v)}while(!i||!i.then);i.then(a).then(void 0,s)}function f(t){t?(i=n())&&i.then?i.then(a).then(void 0,s):a(i):E(u,1,i)}function h(){(o=t())?o.then?o.then(f).then(void 0,s):f(o):E(u,1,i)}}var O=function(){function t(t){this.querySelector=t,this._done=!1}var e=t.prototype;return e.one=function(){try{var t=this,e=function(){return t._done=!0,n},n=null,r=L((function(){return!t.querySelector.done||!n}),void 0,(function(){return Promise.resolve(t.querySelector.next()).then((function(t){var e=t.records;n=e[0]||null}))}));return Promise.resolve(r&&r.then?r.then(e):e())}catch(o){return Promise.reject(o)}},e.all=function(){try{var t=this,e=function(){return t._done=!0,n};if(t._done)throw new Error("Cursor already complete");var n=[],r=L((function(){return!t.querySelector.done}),void 0,(function(){return Promise.resolve(t.querySelector.next()).then((function(t){var e=t.records;n.push.apply(n,e)}))}));return Promise.resolve(r&&r.then?r.then(e):e())}catch(o){return Promise.reject(o)}},e.reduce=function(t,e){try{var n=this,r=function(){return n._done=!0,o};if(n._done)throw new Error("Cursor already complete");var o=e,i=L((function(){return!n.querySelector.done}),void 0,(function(){return Promise.resolve(n.querySelector.next()).then((function(e){e.records.forEach((function(e){return o=t(o,e)}))}))}));return Promise.resolve(i&&i.then?i.then(r):r())}catch(c){return Promise.reject(c)}},f(t,[{key:"done",get:function(){return this._done}}]),t}();var D,I;(function(t){var e=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(O){s=function(t,e,n){return t[e]=n}}function a(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),c=new T(r||[]);return i._invoke=function(t,e,n){var r=h;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=f(t,e,n);if("normal"===s.type){if(r=n.done?p:l,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(t,n,c),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=a;var h="suspendedStart",l="suspendedYield",d="executing",p="completed",v={};function y(){}function m(){}function g(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,k=b&&b(b(_([])));k&&k!==n&&r.call(k,i)&&(w=k);var x=g.prototype=y.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,c,u){var s=f(t[o],t,i);if("throw"!==s.type){var a=s.arg,h=a.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(h).then((function(t){a.value=t,c(a)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function P(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,P(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function _(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:L}}function L(){return{value:e,done:!0}}return m.prototype=x.constructor=g,g.constructor=m,m.displayName=s(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(S.prototype),S.prototype[c]=function(){return this},t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new S(a(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},j(x),s(x,u,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=_,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],u=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var s=r.call(c,"catchLoc"),a=r.call(c,"finallyLoc");if(s&&a){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:_(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(n){Function("r","regeneratorRuntime = r")(e)}})(I={path:D,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},I.exports);var N={$eq:function(t){return function(e){return e===t}},$gt:function(t){return function(e){return e>t}},$gte:function(t){return function(e){return e>=t}},$lt:function(t){return function(e){return e<t}},$lte:function(t){return function(e){return e<=t}}};function A(t){if("object"!==typeof t)throw new Error("ConditionValidator must be an object");var e=Object.keys(t).map((function(e){return{getter:function(t){var e=Array.isArray(t)?t:t.split(".");return function(t){for(var n=t,r=0;r<e.length;r++){if("object"!==typeof n||!n)return;var o=e[r];if(!(o in n))return;n=n[o]}return n}}(e),conditions:function(t){var e="object"===typeof t?t:{$eq:t};return Object.keys(e).map((function(t){var n=t;if(!(n in N))throw new R('Unknown operator "'+n+'"');return N[n](e[n])}))}(t[e])}}));return function(t){return e.every((function(e){var n=e.getter,r=e.conditions,o=n(t);return r.every((function(t){return t(o)}))}))}}var R=function(t){function e(e,n,r){var o;return(o=t.call(this,e)||this).path=n,o.query=r,o}return l(e,t),e}(m(Error)),M=Symbol("Call");function B(t){var e;return(e={})[M]=!0,e.action=t,e.args=[].slice.call(arguments,1),e}var F=function(t){try{return Promise.resolve(this.storage.loadChunk(t)).then((function(e){if(!e)throw new S(t);return e}))}catch(e){return Promise.reject(e)}};function q(t){return t()}var U=regeneratorRuntime.mark(Z);function Z(t,n){var r,o,i,u,s,a;return regeneratorRuntime.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return void 0===n&&(n={}),r=new Map,o=A(n),f.next=5,B(q,t);case 5:u=f.sent,s=u;case 7:return f.next=10,B(F,s);case 10:if(i=f.sent){f.next=13;break}throw new S(s);case 13:a=c(i.records).filter(G(r,o)),f.t0=i.type,f.next=f.t0===e.ChunkType.Snapshot?17:f.t0===e.ChunkType.TemporaryTransaction||f.t0===e.ChunkType.Incremental?18:22;break;case 17:return f.abrupt("return",{chunkID:s,records:a});case 18:return f.next=20,{chunkID:s,records:a};case 20:return s=i.parents[0],f.abrupt("break",23);case 22:throw new Error('Unsupported chunk type "'+i.type+'"');case 23:f.next=7;break;case 25:case"end":return f.stop()}}),U)}function G(t,e){return function(n){return!t.has(n._id)&&(!!e(n)&&(t.set(n._id,n),!0))}}var $,z=function(){function t(t,e,n){this.db=t,this.delayedRef=e,this.query=n,this._done=!1,this.scenario=this.db.run(Z(this.delayedRef,this.query))}return t.prototype.next=function(){try{var t=this;return Promise.resolve(t.scenario.next()).then((function(e){var n=e.done,r=e.value;return t._done=!!n,r}))}catch(e){return Promise.reject(e)}},f(t,[{key:"done",get:function(){return this._done}}]),t}(),K=function(){function t(t,e,n){this.db=t,this.delayedRef=e,this._query=n}return t.prototype.exec=function(){var t=new z(this.db,this.delayedRef,this._query);return new O(t)},t}(),H=function(){function t(t,e){this.db=t,this.delayedRef=e}var e=t.prototype;return e.find=function(t){return new K(this.db,this.delayedRef,t)},e.findOne=function(t){try{return Promise.resolve(this.findAll(t)).then((function(t){return t[0]||null}))}catch(e){return Promise.reject(e)}},e.findAll=function(t){return this.find(t).exec().all()},t}(),Y=function(){function t(t,e){this.db=t,this.space=e,this.updatedRefs={},this.stats={deleted:[],inserted:[],updated:[],upserted:[]},this.chunks={}}var e=t.prototype;return e.getDB=function(){return this.db},e.getSpace=function(){return this.space},e.getStats=function(){return this.stats},e.collection=function(t){return new H(this.db,this.makeDelayedRef(t))},e.insert=function(t,e){try{var n=this;return n.writeIntoCollection(t),e._id||(e=h({},e,{_id:o.v4()})),n.chunks[t].records.set(e._id,e),n.stats.inserted.push(e._id),n.stats.upserted.push(e._id),n.db.storage.saveTemporalChunk(n.chunks[t]),Promise.resolve(e)}catch(r){return Promise.reject(r)}},e.upsert=function(t,e){try{var n=this;return n.writeIntoCollection(t),n.chunks[t].records.has(e._id)||n.stats.upserted.push(e._id),n.chunks[t].records.set(e._id,e),n.db.storage.saveTemporalChunk(n.chunks[t]),Promise.resolve(e)}catch(r){return Promise.reject(r)}},e.writeIntoCollection=function(t){if(!(t in this.updatedRefs)){var e=o.v4(),n=new C(e,this.refs[t]);this.updatedRefs[t]=e,this.chunks[t]=n}},e.makeDelayedRef=function(t){var e=this;return function(){return Promise.resolve(e.refs[t])}},f(t,[{key:"refs",get:function(){return h({},this.space.refs,this.updatedRefs)}}]),t}(),V=function(t){function n(n){var r;return(r=t.call(this,n)||this).type=e.ChunkType.Merge,r.commonChunk="",r}return l(n,t),n}(s),Q=function(t){function n(){var n;return(n=t.apply(this,arguments)||this).type=e.ChunkType.Update,n}return l(n,t),n}(s),X=function(){function t(t,e,n){this.db=t,this.name=e,this.config=n}return t.prototype.space=function(t){var e=this.db.spaces.getDelayedSpace(t).getRef(this.config);return new H(this.db,e)},t}();($=e.Priority||(e.Priority={}))[$.Low=1]="Low",$[$.Normal=2]="Normal",$[$.High=3]="High";var J=function(t,n){if(this.name=t,this.indexedFields=[],this.priority=e.Priority.Normal,this.indexedFields=n.indexedFields||this.indexedFields,this.priority=n.priority||this.priority,"factory"in n)this.factory=n.factory;else{if(!("constructor"in n))throw new Error("Invalid collection config");this.factory=function(t){return new n.constructor(t)}}};function W(t){var e=t;return e.unsubscribe=t,e}var tt=function(){function t(t,e){this.db=t,this.spaceId=e}return t.prototype.collection=function(t){if(!(t in this.db.collections))throw new Error('Invalid collection "'+t+'"');var e=this.db.collections[t];return e.space(this.spaceId)},f(t,[{key:"space",get:function(){return this.db.spaces.getLoaded(this.spaceId)}},{key:"description",get:function(){var t;return(null==(t=this.space)?void 0:t.description)||""}},{key:"id",get:function(){return this.spaceId}},{key:"name",get:function(){var t;return(null==(t=this.space)?void 0:t.name)||""}},{key:"refs",get:function(){var t;return(null==(t=this.space)?void 0:t.refs)||{}}}]),t}(),et=function(t){this.id=t.id,this.name=t.name,this.description=t.description||"",this.refs=t.refs},nt=function(){function t(t,e){this.spaces=t,this.spaceID=e}var e=t.prototype;return e.getSpace=function(){return this.spaces.isLoaded(this.spaceID)?Promise.resolve(this.spaces.getLoaded(this.spaceID)):this.spaces.load(this.spaceID)},e.getRefs=function(){return this.getSpace().then((function(t){return t.refs}))},e.getRef=function(t){var e=this;return function(){return e.getSpace().then((function(e){return e.refs[t.name]}))}},t}(),rt=function(){function t(t){this.storage=t,this.spaces=new Map,this.spaceSubscriptions=new Map}var e=t.prototype;return e.create=function(t){var e=new et({id:t.id||o.v4(),name:t.name||"some name",description:t.description,refs:t.refs||{}});return this.spaces.set(e.id,e),e},e.isLoaded=function(t){return this.spaces.has(t)},e.getLoaded=function(t){return this.spaces.get(t)},e.getDelayedSpace=function(t){return new nt(this,t)},e.load=function(t){var e=this;return this.storage.loadSpace(t).then((function(t){var n=new et(t);e.spaces.set(n.id,n);var r=e.spaceSubscriptions.get(n.id);return r&&r.forEach((function(t){return t()})),n}))},e.save=function(t){var e=this.spaces.get(t);if(!e)throw new j(t);return this.storage.saveSpace(e).then((function(){return e}))},e.remove=function(t){throw new Error("not implemented")},e.updateSpaceRefs=function(t,e){try{var n=this,r=n.spaces.get(t);if(!r)throw new Error('Space "id" not loaded');return n.spaces.set(t,h({},r,{refs:e})),Promise.resolve(n.storage.saveSpace(n.spaces.get(t))).then((function(){var e=n.spaceSubscriptions.get(t);e&&e.forEach((function(t){return t()}))}))}catch(o){return Promise.reject(o)}},e.subscribe=function(t,e){var n=this,r=this.spaceSubscriptions.get(t)||[];return r.push(e),this.spaceSubscriptions.set(t,r),W((function(){var r=n.spaceSubscriptions.get(t)||[];n.spaceSubscriptions.set(t,r.filter((function(t){return t!==e})))}))},t}(),ot="undefined"!==typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function it(t,e,n){if(!t.s){if(n instanceof ct){if(!n.s)return void(n.o=it.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(it.bind(null,t,e),it.bind(null,t,2));t.s=e,t.v=n;var r=t.o;r&&r(t)}}var ct=function(){function t(){}return t.prototype.then=function(e,n){var r=new t,o=this.s;if(o){var i=1&o?e:n;if(i){try{it(r,1,i(this.v))}catch(c){it(r,2,c)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?it(r,1,e?e(o):o):n?it(r,1,n(o)):it(r,2,o)}catch(c){it(r,2,c)}},r},t}();function ut(t){return t instanceof ct&&1&t.s}function st(t,e,n){if("function"===typeof t[ot]){var r,o,i,c=t[ot]();if(function t(u){try{for(;!(r=c.next()).done&&(!n||!n());)if((u=e(r.value))&&u.then){if(!ut(u))return void u.then(t,i||(i=it.bind(null,o=new ct,2)));u=u.v}o?it(o,1,u):o=u}catch(s){it(o||(o=new ct),2,s)}}(),c.return){var u=function(t){try{r.done||c.return()}catch(e){}return t};if(o&&o.then)return o.then(u,(function(t){throw u(t)}));u()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var s=[],a=0;a<t.length;a++)s.push(t[a]);return function(t,e,n){var r,o,i=-1;return function c(u){try{for(;++i<t.length&&(!n||!n());)if((u=e(i))&&u.then){if(!ut(u))return void u.then(c,o||(o=it.bind(null,r=new ct,2)));u=u.v}r?it(r,1,u):r=u}catch(s){it(r||(r=new ct),2,s)}}(),r}(s,(function(t){return e(s[t])}),n)}function at(t,e,n){for(var r;;){var o=t();if(ut(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!ut(i)){r=1;break}i=i.s}if(e){var c=e();if(c&&c.then&&!ut(c)){r=2;break}}}var u=new ct,s=it.bind(null,u,2);return(0===r?o.then(f):1===r?i.then(a):c.then(h)).then(void 0,s),u;function a(r){i=r;do{if(e&&(c=e())&&c.then&&!ut(c))return void c.then(h).then(void 0,s);if(!(o=t())||ut(o)&&!o.v)return void it(u,1,i);if(o.then)return void o.then(f).then(void 0,s);ut(i=n())&&(i=i.v)}while(!i||!i.then);i.then(a).then(void 0,s)}function f(t){t?(i=n())&&i.then?i.then(a).then(void 0,s):a(i):it(u,1,i)}function h(){(o=t())?o.then?o.then(f).then(void 0,s):f(o):it(u,1,i)}}var ft=function(){function t(t){var e=this;this.ready=!1,this.activeTransactions=[],this.storeSubscriptions=[],this.collections={},Object.entries(t.collections).forEach((function(t){var n=t[0],r=t[1];e.collections[n]=new X(e,n,new J(n,r))})),this.storageDriver=t.storage,this.storage=new P(this.storageDriver),this.spaces=new rt(this.storage)}var n=t.prototype;return n.connect=function(){var t=this;return this.storage.connect().then((function(){t.ready=!0})).then((function(){return t}))},n.subscribe=function(t,e){var n=this;return"function"===typeof t?(this.storeSubscriptions.push(t),W((function(){return n.storeSubscriptions=n.storeSubscriptions.filter((function(e){return e!==t}))}))):this.spaces.subscribe(t,e)},n.space=function(t){if(!t)throw new Error('Invalid space ""');return"object"===typeof t&&(t=t.id),new tt(this,t)},n.collection=function(t){if(t in this.collections)return this.collections[t];throw new Error('Invalid collection "'+t+'"')},n.run=function(t){return function(t,e){return{next:function(n){try{var r;return Promise.resolve(at((function(){return!r}),void 0,(function(){var o=e.next(n),i=!!o.done,c=o.value;return function(){if(function(t){return t&&!!t[M]}(c)){var e=c.action,o=c.args;return Promise.resolve(e.apply(t,o)).then((function(t){if(n=t,i)return r=1,{done:i,value:n}}))}return r=1,{done:i,value:c}}()})))}catch(o){return Promise.reject(o)}}}}({storage:this.storage,activeTransactions:this.activeTransactions,updateSpaceRefs:this.spaces.updateSpaceRefs,spaces:this.spaces},t)},n.transaction=function(t,e,n){try{var r,o=this;return n?(r=n,Object.assign({restartOnFail:!1},e)):r=e,Promise.resolve(o.spaces.load(t)).then((function(e){var n=new Y(o,e);return Promise.resolve(r(n)).then((function(){return Promise.resolve(o.applyTransaction(t,n)).then((function(){return n.getStats()}))}))}))}catch(i){return Promise.reject(i)}},n.getFlatChain=function(t,e){void 0===e&&(e=3);try{var n=this;if(!e||!t)return Promise.resolve([]);var r=[],o=[t],i=0,c=at((function(){return i<e&&!!o.length}),(function(){return i++}),(function(){function t(){o=e}var e=[],i=st(o,(function(t){return Promise.resolve(n.storage.loadChunk(t)).then((function(t){r.push(t),e.push.apply(e,t.parents)}))}));return i&&i.then?i.then(t):t()}));return Promise.resolve(c&&c.then?c.then((function(){return r})):r)}catch(u){return Promise.reject(u)}},n.applyTransaction=function(t,n){try{var r=this,o=Object.keys(n.chunks).map((function(t){return n.chunks[t]}));if(!o)return Promise.resolve();var i=r.spaces.getLoaded(t);if(!i)throw new j(t);return o.some((function(t){return!t.parents.length}))?o.forEach((function(t){return t.type=e.ChunkType.Snapshot})):o.forEach((function(t){return t.type=e.ChunkType.Incremental})),Promise.resolve(Promise.all(o.map((function(t){return r.storage.saveChunk(t)})))).then((function(){return o.forEach((function(t){return r.storage.removeTemporalChunk(t.id)})),r.spaces.updateSpaceRefs(i.id,n.refs)}))}catch(c){return Promise.reject(c)}},t}();var ht=function(){function t(){this.chunks=new Map,this.spaces=new Map}var e=t.prototype;return e.loadChunk=function(t){try{if(this.chunks.has(t))return Promise.resolve(this.chunks.get(t));throw new S(t)}catch(e){return Promise.reject(e)}},e.saveChunk=function(t){try{return this.chunks.set(t.id,t),Promise.resolve(t)}catch(e){return Promise.reject(e)}},e.markDraftChunkAsUnused=function(t){try{return this.chunks.delete(t),Promise.resolve()}catch(e){return Promise.reject(e)}},e.setChunks=function(t){var e=this;t.forEach((function(t){return e.chunks.set(t.id,t)}))},e.clearChunks=function(){try{return this.chunks.clear(),Promise.resolve()}catch(t){return Promise.reject(t)}},e.reset=function(t){this.chunks.clear(),this.setChunks(t)},e.removeChunk=function(t){try{return this.chunks.delete(t),Promise.resolve()}catch(e){return Promise.reject(e)}},e.createSpace=function(t){try{if(this.spaces.has(t.id))throw new x('Can not create space "'+t.id+'": already exists');return this.spaces.set(t.id,t),Promise.resolve(t)}catch(e){return Promise.reject(e)}},e.loadSpace=function(t){try{return Promise.resolve(this.spaces.get(t))}catch(e){return Promise.reject(e)}},e.saveSpace=function(t){try{return this.spaces.set(t.id,t),Promise.resolve(t)}catch(e){return Promise.reject(e)}},e.updateSpace=function(t,e){try{var n=this.spaces.get(t);if(!n)throw new x('Can not update space "'+t+'": not exists');return this.spaces.set(t,h({},n,{refs:e})),Promise.resolve(n)}catch(r){return Promise.reject(r)}},e.clearSpaces=function(){try{return this.spaces.clear(),Promise.resolve()}catch(t){return Promise.reject(t)}},e.getAllSpaces=function(){try{return Promise.resolve(Array.from(this.spaces.values()))}catch(t){return Promise.reject(t)}},t}();e.AbstractChunk=s,e.ChunkDB=ft,e.CollectionConfig=J,e.DataSpace=tt,e.InMemoryChunkStorage=ht,e.IncrementalChunk=g,e.MergeChunk=V,e.NotFoundChunkError=S,e.Query=K,e.SnapshotChunk=w,e.Space=et,e.TemporaryTransactionChunk=C,e.UpdateChunk=Q,e.arrayToMap=function(t){return new Map(t.map((function(t){return[t._id,t]})))},e.arrayToObject=u,e.chunkFactory=b,e.isGenericChunk=k,e.mapToArray=c,e.objectToArray=function(t){return Object.keys(t).map((function(e){return t[e]}))},e.objectToMap=i},7648:function(t,e,n){var r=n(5292);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(t,e){if(void 0===e&&(e={}),this.dbName=t,this.prefix=e.prefix||"chunk-db-",this.spacesCollection=e.spacesCollection||"chunk-db-spaces",this.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,!this.indexedDB)throw new Error("Fatal error: Your platform not supports IndexedDB")}var e,n,i,c=t.prototype;return c.connect=function(){var t=this;return new Promise((function(e,n){var r=t.indexedDB.open(t.dbName,1);r.addEventListener("success",(function(){t.db=r.result,console.log("successful connect to DB"),e()}),{once:!0}),r.addEventListener("error",n,{once:!0}),r.addEventListener("upgradeneeded",(function(e){var n=e.target.result;console.log("upgrade",n),n.createObjectStore(t.spacesCollection,{keyPath:"id"}),n.createObjectStore(t.chunkStorageName,{keyPath:"id"})}),{once:!0}),r.addEventListener("blocked",(function(){return n(new Error("IndexedDB blocked"))}),{once:!0})}))},c.loadChunk=function(t){var e=this;return console.log('LOAD CHUNK "'+t+'"'),new Promise((function(n,r){if(!e.db)return r(new Error("DB not init"));var o=e.db.transaction(e.chunkStorageName,"readwrite").objectStore(e.chunkStorageName).get(t);o.addEventListener("success",(function(t){return n(o.result)}),{once:!0}),o.addEventListener("error",r,{once:!0})}))},c.saveChunk=function(t){var e=this;return console.log('SAVE CHUNK "'+t.id+'"'),new Promise((function(n,r){if(!e.db)return r(new Error("DB not init"));console.log("idb:",e.db);var o=e.db.transaction(e.chunkStorageName,"readwrite");o.addEventListener("complete",(function(){return n(t)}),{once:!0}),o.addEventListener("error",(function(){return r(t)}),{once:!0}),o.objectStore(e.chunkStorageName).put(t)}))},c.markDraftChunkAsUnused=function(t){return console.log('MARK UNUSED CHUNK "'+t+'"'),Promise.resolve(void 0)},c.loadSpace=function(t){var e=this;return console.log("LOAD SPACE "+t),new Promise((function(n,r){if(!e.db)return r(new Error("DB not init"));var o=e.db.transaction([e.spacesCollection],"readwrite").objectStore(e.spacesCollection).get(t);o.addEventListener("success",(function(t){return n(o.result)}),{once:!0}),o.addEventListener("error",r,{once:!0})}))},c.saveSpace=function(t){var e=this;return console.log("SAVE SPACE "+t.id),t instanceof r.Space||(t=new r.Space(t)),new Promise((function(n,r){if(!e.db)return r(new Error("DB not init"));console.log("idb:",e.db);var o=e.db.transaction(e.spacesCollection,"readwrite");o.addEventListener("complete",(function(){return n(t)}),{once:!0}),o.addEventListener("error",(function(){return r(t)}),{once:!0}),o.objectStore(e.spacesCollection).put(t)}))},e=t,(n=[{key:"chunkStorageName",get:function(){return this.prefix+"chunks"}}])&&o(e.prototype,n),i&&o(e,i),t}();e.s=i},8079:function(t,e,n){var r=n(5292),o=n(2784);var i=o.createContext(null),c=i.Provider;function u(){return o.useContext(i)}function s(t){var e=u(),n=o.useState(e&&new r.DataSpace(e,t)),i=n[0],c=n[1];return o.useEffect((function(){if(console.log("useSpace effect",e,t),e)return e.spaces.subscribe(t,(function(){return c(new r.DataSpace(e,t))}))}),[e,t]),i}e.gt=c,e.zh=u,e.Ke=function(t,e,n){var r=o.useState([]),i=r[0],c=r[1],a=u(),f=s(t);return o.useEffect((function(){a.ready&&a.getFlatChain(f.refs[e],n).then((function(t){return c(t)}))}),[a,f,e,n]),i},e._Y=function(){var t=o.useState()[1];return o.useCallback((function(){return t({})}),[])},e.hT=function(t,e){var n=[].slice.call(arguments,2),i=o.useState([]),c=i[0],a=i[1],f=u(),h=s(t);return o.useEffect((function(){if(f.ready){var t=e.apply(void 0,[h].concat(n));t instanceof r.Query?t.exec().all().then(a):t.then(a)}}),[h].concat(n)),c},e.$_=s}},function(t){t.O(0,[774,357,422,561],(function(){return e=3354,t(t.s=e);var e}));var e=t.O();_N_E=e}]);