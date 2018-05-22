webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native_web_dist_exports_StyleSheet__ = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native_web_dist_exports_StyleSheet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_native_web_dist_exports_StyleSheet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_native_web_dist_exports_Text__ = __webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_native_web_dist_exports_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_native_web_dist_exports_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_native_web_dist_exports_View__ = __webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_native_web_dist_exports_View___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_native_web_dist_exports_View__);
var _jsxFileName = "/Users/xyz/nextmw/pages/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var styles = __WEBPACK_IMPORTED_MODULE_1_react_native_web_dist_exports_StyleSheet___default.a.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'gold',
    justifyContent: 'center'
  },
  text: {
    alignItems: 'center',
    fontSize: 24
  }
});

var _default = function _default(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_native_web_dist_exports_View___default.a, {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_native_web_dist_exports_View___default.a, {
    style: {
      position: 'absolute',
      top: '50%',
      right: '15%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_native_web_dist_exports_Text___default.a, {
    style: {
      fontSize: 80,
      textAlign: 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Home")));
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/xyz/nextmw/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/xyz/nextmw/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.a74beabfeec5c61ce58e.hot-update.js.map