(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 853:
/***/ (function(module) {

function genPrefix(selector) {
  function getHash(input) {
    var hash = 0,
        len = input.length;

    for (var i = 0; i < len; i++) {
      hash = (hash << 5) - hash + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }

    return hash;
  }

  console.log(getHash(selector) + "");
  var prefix = (getHash(selector) + "").replace("-", "").split("").reduce(function (acc, cv) {
    return acc + parseInt(cv);
  }, 0);
  return selector[0] + selector[selector.length - 1] + prefix;
}

module.exports = {
  genPrefix: genPrefix
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FCross": function() { return /* binding */ FCross; },
  "Model": function() { return /* reexport */ Model; },
  "load": function() { return /* reexport */ load; }
});

;// CONCATENATED MODULE: ./src/model/model.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Model = /*#__PURE__*/function () {
  function Model(modelProps) {
    _classCallCheck(this, Model);

    this.props = Object.seal(modelProps);
  }

  _createClass(Model, [{
    key: "isValid",
    value: function isValid(object) {
      var _this = this;

      var valid = true;
      Object.keys(object).forEach(function (m) {
        var value = _this.props[m][0];
        var validator = _this.props[m][1];
        valid && (valid = validator(object[m]));
      });
      return valid;
    }
  }]);

  return Model;
}();


// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(853);
;// CONCATENATED MODULE: ./src/loader/loader.js
/**
 * html
 * <cross-component selector="grid-exigencias"></cross-component>
   js
 
 *  var gridExigencias = FCross.load('grid-exigencias',{
        componentUrl : '',
        stylesUrl : ''
    })

    crossApp.push({numeroDue : 'numeroDue'})
    crossApp.subscribe(function(output){
        console.log(output)
    })

 */


function load(selector, loadInfo) {
  validateRequired(loadInfo);
  var script = document.createElement("script");
  script.src = cache === false ? "".concat(loadInfo.url, "\"?q=\"").concat(Math.random()) : loadInfo.url;
  script.onload = loadInfo.onload;
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = cache === false ? "".concat(loadInfo.stylesUrl, "\"?q=\"").concat(Math.random()) : loadInfo.url;
  var componentTag = document.querySelector("fcross-component[selector=".concat(selector, "]"));
  componentTag.className = (0,utils.genPrefix)(selector);
  document.getElementsByTagName("head")[0].appendChild(link);
  componentTag.appendChild(script);
  $element[0].appendChild(componentTag);
}

function validateRequired(loadInfo) {
  if (!loadInfo.url || !loadInfo.stylesUrl) {
    throw new Error("Required info is missing");
  }
}


;// CONCATENATED MODULE: ./src/index.js


var FCross = {
  Model: Model,
  load: load
};


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});