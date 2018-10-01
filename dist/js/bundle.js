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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toggle = __webpack_require__(/*! ./scripts/toggle */ "./src/js/scripts/toggle.js");

var _toggle2 = _interopRequireDefault(_toggle);

var _sidebarPopup = __webpack_require__(/*! ./scripts/sidebarPopup */ "./src/js/scripts/sidebarPopup.js");

var _sidebarPopup2 = _interopRequireDefault(_sidebarPopup);

var _studyTabs = __webpack_require__(/*! ./scripts/studyTabs */ "./src/js/scripts/studyTabs.js");

var _studyTabs2 = _interopRequireDefault(_studyTabs);

var _OTChart = __webpack_require__(/*! ./scripts/OTChart */ "./src/js/scripts/OTChart.js");

var _OTChart2 = _interopRequireDefault(_OTChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/js/scripts/OTChart.js":
/*!***********************************!*\
  !*** ./src/js/scripts/OTChart.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


google.charts.load('current', { packages: ["orgchart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('string', 'higher');

  // For each orgchart box, provide the name, manager, and tooltip to show.
  data.addRows([[{ v: 'OTList', f: 'Охрана труда' }, ''], ['правовые', 'OTList'], ['лечебно-профилактические', 'OTList'], ['санитарно-гигиенические', 'OTList'], ['социально-экономические', 'OTList'], ['организационно-технические', 'OTList'], ['реабилитационные', 'OTList'], ['иные.', 'OTList']]);

  // Create the chart.
  var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
  // Draw the chart, setting the allowHtml option to true for the tooltips.
  chart.draw(data, { allowHtml: true });
}

/***/ }),

/***/ "./src/js/scripts/sidebarPopup.js":
/*!****************************************!*\
  !*** ./src/js/scripts/sidebarPopup.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var navActivators = document.querySelectorAll('.nav-link');
/*const navItems = document.querySelectorAll('.navItem');
const subNavs = document.querySelectorAll('.subNav');*/

var toggleFunc = function toggleFunc(navActivator) {
	navActivator.parentNode.classList.toggle('is__active');
};

[].concat(_toConsumableArray(navActivators)).map(function (navActivator) {
	navActivator.addEventListener('click', function () {
		toggleFunc(navActivator);
	});
});

/***/ }),

/***/ "./src/js/scripts/studyTabs.js":
/*!*************************************!*\
  !*** ./src/js/scripts/studyTabs.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var studyTabs = document.querySelectorAll('.studyNav-input');
var studyContents = document.querySelectorAll('.studyContent-item');

var toggleFunc = function toggleFunc(studyContents, index) {
	[].concat(_toConsumableArray(studyContents)).map(function (studyContent) {
		return studyContent.classList.remove('is__active');
	});
	[].concat(_toConsumableArray(studyContents))[index].classList.add('is__active');
};

[].concat(_toConsumableArray(studyTabs)).map(function (studyTab) {
	var currIndex = [].concat(_toConsumableArray(studyTabs)).indexOf(studyTab);
	studyTab.addEventListener('click', function () {
		toggleFunc(studyContents, currIndex);
	});
});

/***/ }),

/***/ "./src/js/scripts/toggle.js":
/*!**********************************!*\
  !*** ./src/js/scripts/toggle.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (toggleActivator, togglingBlocks, mainBlocks) {
  var toggleFunc = function toggleFunc() {
    [].concat(_toConsumableArray(togglingBlocks)).map(function (elem) {
      return document.querySelectorAll(elem).classList.toggle('is__active');
    });
  };

  var closeFunc = function closeFunc() {
    [].concat(_toConsumableArray(togglingBlocks)).map(function (elem) {
      return document.querySelectorAll(elem).classList.remove('is__active');
    });
  };

  document.getElementById(toggleActivator).addEventListener('click', function (e) {
    e.stopPropagation();
    toggleFunc();
  });

  document.addEventListener('click', closeFunc);
  if (!mainBlocks) return;
  mainBlocks.forEach(function (mainBlock) {
    document.getElementById(mainBlock).addEventListener('click', function (e) {
      return e.stopPropagation();
    });
  });
};

/***/ }),

/***/ "./src/styles/common.pcss":
/*!********************************!*\
  !*** ./src/styles/common.pcss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./src/js/index.js ./src/styles/common.pcss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/styles/common.pcss */"./src/styles/common.pcss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map