(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["shieldsLess"] = factory();
	else
		root["shieldsLess"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/createPlatBadge.js":
/*!********************************!*\
  !*** ./src/createPlatBadge.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function ({\n  leftWidth = 0,\n  leftText = '',\n  leftClolor = '#555',\n  rightWidth = 0,\n  rightText = '',\n  rightColor = '#44cc11'\n}) {\n  return `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"${leftWidth + rightWidth}\" height=\"20\">\n  <linearGradient id=\"smooth\" x2=\"0\" y2=\"100%\">\n    <stop offset=\"0\" stop-color=\"#bbb\" stop-opacity=\".1\"/>\n    <stop offset=\"1\" stop-opacity=\".1\"/>\n  </linearGradient>\n  <rect rx=\"3\" width=\"${leftWidth + rightWidth}\" height=\"20\" fill=\"${leftClolor}\"/>\n  <rect rx=\"3\" x=\"${leftWidth}\" width=\"${rightWidth}\" height=\"20\" fill=\"${rightColor}\"/>\n  <rect x=\"${leftWidth}\" width=\"4\" height=\"20\" fill=\"${rightColor}\"/>\n  <rect rx=\"3\" width=\"${leftWidth + rightWidth}\" height=\"20\" fill=\"url(#smooth)\"/>\n  <g fill=\"#fff\" text-anchor=\"middle\" font-family=\"DejaVu Sans,Verdana,Geneva,sans-serif\" font-size=\"11\">\n    <text x=\"${leftWidth / 2 + 1}\" y=\"15\" fill=\"#010101\" fill-opacity=\".3\">${leftText}</text>\n    <text x=\"${leftWidth / 2 + 1}\" y=\"14\">${leftText}</text>\n    <text x=\"${leftWidth + rightWidth / 2 - 1}\" y=\"15\" fill=\"#010101\" fill-opacity=\".3\">${rightText}</text>\n    <text x=\"${leftWidth + rightWidth / 2 - 1}\" y=\"14\">${rightText}</text>\n  </g>\n</svg>`\n});\n\n\n//# sourceURL=webpack://shieldsLess/./src/createPlatBadge.js?");

/***/ }),

/***/ "./src/createSquareBadge.js":
/*!**********************************!*\
  !*** ./src/createSquareBadge.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function ({\n  leftWidth = 0,\n  leftText = '',\n  leftColor = '#555',\n  rightWidth = 0,\n  rightText = '',\n  rightColor = '#44cc11'\n}) {\n  return `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"${leftWidth + rightWidth}\" height=\"20\">\n  <rect width=\"${leftWidth + rightWidth}\" height=\"20\" fill=\"${leftColor}\"/>\n  <rect x=\"${leftWidth}\" width=\"${rightWidth}\" height=\"20\" fill=\"${rightColor}\"/>\n  <rect x=\"${leftWidth}\" width=\"4\" height=\"20\" fill=\"${rightColor}\"/>\n  <rect width=\"${leftWidth + rightWidth}\" height=\"20\" fill-opacity=\".1\"/>\n  <g fill=\"#fff\" text-anchor=\"middle\" font-family=\"DejaVu Sans,Verdana,Geneva,sans-serif\" font-size=\"11\">\n    <text x=\"${leftWidth / 2 + 1}\" y=\"14\">${leftText}</text>\n    <text x=\"${leftWidth + rightWidth / 2 - 1}\" y=\"14\">${rightText}</text>\n  </g>\n</svg>`\n});\n\n\n//# sourceURL=webpack://shieldsLess/./src/createSquareBadge.js?");

/***/ }),

/***/ "./src/escapeXml.js":
/*!**************************!*\
  !*** ./src/escapeXml.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (s) {\n  return s.replace(/&/g, '&amp;')\n  .replace(/</g, '&lt;')\n  .replace(/>/g, '&gt;')\n  .replace(/\"/g, '&quot;')\n  .replace(/'/g, '&apos;')\n});\n\n\n//# sourceURL=webpack://shieldsLess/./src/escapeXml.js?");

/***/ }),

/***/ "./src/getChartWidth.js":
/*!******************************!*\
  !*** ./src/getChartWidth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (str) {\n  var count = 0\n  for (var i = 0, len = str.length; i < len; i++) {\n    count += str.charCodeAt(i) < 256 ? 1 : 2\n  }\n  return count * 6 + 10\n});\n\n\n//# sourceURL=webpack://shieldsLess/./src/getChartWidth.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"svg\", function() { return svg; });\n/* harmony import */ var _escapeXml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escapeXml.js */ \"./src/escapeXml.js\");\n/* harmony import */ var _getChartWidth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getChartWidth.js */ \"./src/getChartWidth.js\");\n/* harmony import */ var _createPlatBadge_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPlatBadge.js */ \"./src/createPlatBadge.js\");\n/* harmony import */ var _createSquareBadge_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createSquareBadge.js */ \"./src/createSquareBadge.js\");\n\n\n\n\n\nfunction svg ({\n  leftText = 'none',\n  leftColor = '#555',\n  rightText = 'none',\n  rightColor,\n  style = 'plat'\n}) {\n  leftText = Object(_escapeXml_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(leftText)\n  rightText = Object(_escapeXml_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(rightText)\n\n  const leftWidth = Object(_getChartWidth_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(leftText)\n  const rightWidth = Object(_getChartWidth_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rightText)\n\n  if (style === 'plat') {\n    return Object(_createPlatBadge_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      leftText, leftWidth, leftColor, rightText, rightWidth, rightColor\n    })\n  } else {\n    return Object(_createSquareBadge_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n      leftText, leftWidth, leftColor, rightText, rightWidth, rightColor\n    })\n  }\n}\n\n\n//# sourceURL=webpack://shieldsLess/./src/index.js?");

/***/ })

/******/ });
});