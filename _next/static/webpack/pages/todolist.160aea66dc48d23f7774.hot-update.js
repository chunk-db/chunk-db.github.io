/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todolist",{

/***/ "./src/todolist/store/store.ts":
/*!*************************************!*\
  !*** ./src/todolist/store/store.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": function() { return /* binding */ db; }\n/* harmony export */ });\n/* harmony import */ var _chunk_db_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chunk-db/core */ \"../../packages/core/dist/index.js\");\n/* harmony import */ var _chunk_db_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chunk_db_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chunk_db_idb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chunk-db/idb */ \"../../packages/idb/dist/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar storage =  true ? new _chunk_db_idb__WEBPACK_IMPORTED_MODULE_1__.IndexedDBDriver('chunk-db-todolist-example') : 0;\nvar space = new _chunk_db_core__WEBPACK_IMPORTED_MODULE_0__.Space({\n  id: 'space',\n  name: 'a1',\n  refs: {\n    todos: null\n  }\n});\nvar db = new _chunk_db_core__WEBPACK_IMPORTED_MODULE_0__.ChunkDB({\n  // TODO\n  storage: storage,\n  collections: {\n    todos: {}\n  }\n});\ndb.connect().then(function (db) {\n  console.log('connected');\n  db.spaces.load(space.id)[\"catch\"](function () {\n    db.spaces.create(space);\n    return db.spaces.save(space.id);\n  }).then(function (data) {\n    return space = data;\n  }).then(function () {\n    return console.log('init spaces', db.spaces);\n  });\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RvZG9saXN0L3N0b3JlL3N0b3JlLnRzPzJhM2QiXSwibmFtZXMiOlsic3RvcmFnZSIsIkluZGV4ZWREQkRyaXZlciIsInNwYWNlIiwiU3BhY2UiLCJpZCIsIm5hbWUiLCJyZWZzIiwidG9kb3MiLCJkYiIsIkNodW5rREIiLCJjb2xsZWN0aW9ucyIsImNvbm5lY3QiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInNwYWNlcyIsImxvYWQiLCJjcmVhdGUiLCJzYXZlIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQU9BO0FBRUEsSUFBTUEsT0FBTyxHQUFHLFFBQ1YsSUFBSUMsMERBQUosQ0FBb0IsMkJBQXBCLENBRFUsR0FFVixDQUZOO0FBSUEsSUFBSUMsS0FBSyxHQUFHLElBQUlDLGlEQUFKLENBQWtDO0FBQzFDQyxJQUFFLEVBQUUsT0FEc0M7QUFFMUNDLE1BQUksRUFBRSxJQUZvQztBQUcxQ0MsTUFBSSxFQUFFO0FBQ0ZDLFNBQUssRUFBRTtBQURMO0FBSG9DLENBQWxDLENBQVo7QUFRTyxJQUFNQyxFQUFFLEdBQUcsSUFBSUMsbURBQUosQ0FBaUI7QUFBRTtBQUNqQ1QsU0FBTyxFQUFQQSxPQUQrQjtBQUUvQlUsYUFBVyxFQUFFO0FBQ1RILFNBQUssRUFBRTtBQURFO0FBRmtCLENBQWpCLENBQVg7QUFPUEMsRUFBRSxDQUFDRyxPQUFILEdBQWFDLElBQWIsQ0FBa0IsVUFBQ0osRUFBRCxFQUFzQjtBQUNwQ0ssU0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBTixJQUFFLENBQUNPLE1BQUgsQ0FBVUMsSUFBVixDQUFlZCxLQUFLLENBQUNFLEVBQXJCLFdBQ1MsWUFBTTtBQUNUSSxNQUFFLENBQUNPLE1BQUgsQ0FBVUUsTUFBVixDQUFpQmYsS0FBakI7QUFDQSxXQUFPTSxFQUFFLENBQUNPLE1BQUgsQ0FBVUcsSUFBVixDQUFlaEIsS0FBSyxDQUFDRSxFQUFyQixDQUFQO0FBQ0gsR0FKSCxFQUtHUSxJQUxILENBS1EsVUFBQU8sSUFBSTtBQUFBLFdBQUlqQixLQUFLLEdBQUdpQixJQUFaO0FBQUEsR0FMWixFQU1HUCxJQU5ILENBTVE7QUFBQSxXQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCTixFQUFFLENBQUNPLE1BQTlCLENBQU47QUFBQSxHQU5SO0FBT0gsQ0FURCIsImZpbGUiOiIuL3NyYy90b2RvbGlzdC9zdG9yZS9zdG9yZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2h1bmtEQixcbiAgICBJbk1lbW9yeUNodW5rU3RvcmFnZSxcbiAgICBTcGFjZSxcbn0gZnJvbSAnQGNodW5rLWRiL2NvcmUnO1xuaW1wb3J0IHsgSURlbW9SZWNvcmQgfSBmcm9tICdAY2h1bmstZGIvY29yZS9fX3Rlc3RzX18vY2h1bmtzLmRlbW8nO1xuXG5pbXBvcnQgeyBJbmRleGVkREJEcml2ZXIgfSBmcm9tICdAY2h1bmstZGIvaWRiJztcblxuY29uc3Qgc3RvcmFnZSA9IHByb2Nlc3MuYnJvd3NlclxuICAgID8gbmV3IEluZGV4ZWREQkRyaXZlcignY2h1bmstZGItdG9kb2xpc3QtZXhhbXBsZScpXG4gICAgOiBuZXcgSW5NZW1vcnlDaHVua1N0b3JhZ2UoKTtcblxubGV0IHNwYWNlID0gbmV3IFNwYWNlPHsgdG9kb3M6IElEZW1vUmVjb3JkIH0+KHtcbiAgICBpZDogJ3NwYWNlJyxcbiAgICBuYW1lOiAnYTEnLFxuICAgIHJlZnM6IHtcbiAgICAgICAgdG9kb3M6IG51bGwsXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGIgPSBuZXcgQ2h1bmtEQjxhbnk+KHsgLy8gVE9ET1xuICAgIHN0b3JhZ2UsXG4gICAgY29sbGVjdGlvbnM6IHtcbiAgICAgICAgdG9kb3M6IHt9LFxuICAgIH0sXG59KTtcblxuZGIuY29ubmVjdCgpLnRoZW4oKGRiOiBDaHVua0RCPGFueT4pID0+IHtcbiAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkJyk7XG4gICAgZGIuc3BhY2VzLmxvYWQoc3BhY2UuaWQpXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIGRiLnNwYWNlcy5jcmVhdGUoc3BhY2UpO1xuICAgICAgICAgIHJldHVybiBkYi5zcGFjZXMuc2F2ZShzcGFjZS5pZCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGF0YSA9PiBzcGFjZSA9IGRhdGEpXG4gICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnaW5pdCBzcGFjZXMnLCBkYi5zcGFjZXMpKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/todolist/store/store.ts\n");

/***/ }),

/***/ "../../packages/core/dist/index.js":
/*!*****************************************!*\
  !*** ../../packages/core/dist/index.js ***!
  \*****************************************/
/***/ (function() {



/***/ })

});