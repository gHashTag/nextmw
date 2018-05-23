module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native_web_dist_exports_Platform__ = __webpack_require__("react-native-web/dist/exports/Platform");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_native_web_dist_exports_Platform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_native_web_dist_exports_Platform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_native_web_dist_exports_StyleSheet__ = __webpack_require__("react-native-web/dist/exports/StyleSheet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_native_web_dist_exports_StyleSheet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_native_web_dist_exports_StyleSheet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_native_web_dist_exports_Text__ = __webpack_require__("react-native-web/dist/exports/Text");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_native_web_dist_exports_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_native_web_dist_exports_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_native_web_dist_exports_View__ = __webpack_require__("react-native-web/dist/exports/View");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_native_web_dist_exports_View___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_native_web_dist_exports_View__);
var _jsxFileName = "/Users/xyz/nextmw/pages/index.js";





var instructions = __WEBPACK_IMPORTED_MODULE_1_react_native_web_dist_exports_Platform___default.a.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_native_web_dist_exports_View___default.a, {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_native_web_dist_exports_Text___default.a, {
    style: styles.welcome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Welcome to React Native!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_native_web_dist_exports_Text___default.a, {
    style: styles.instructions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "To get started, edit App.js"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_native_web_dist_exports_Text___default.a, {
    style: styles.instructions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, instructions));
});
var styles = __WEBPACK_IMPORTED_MODULE_2_react_native_web_dist_exports_StyleSheet___default.a.create({
  container: {
    display: flex,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-native-web/dist/exports/Platform":
/***/ (function(module, exports) {

module.exports = require("react-native-web/dist/exports/Platform");

/***/ }),

/***/ "react-native-web/dist/exports/StyleSheet":
/***/ (function(module, exports) {

module.exports = require("react-native-web/dist/exports/StyleSheet");

/***/ }),

/***/ "react-native-web/dist/exports/Text":
/***/ (function(module, exports) {

module.exports = require("react-native-web/dist/exports/Text");

/***/ }),

/***/ "react-native-web/dist/exports/View":
/***/ (function(module, exports) {

module.exports = require("react-native-web/dist/exports/View");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map