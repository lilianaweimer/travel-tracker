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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Carter+One&display=swap);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@400;600;700&display=swap);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap);", ""]);

// Module
exports.push([module.i, "/* IMPORTS*/\n/*VARIABLES*/\n/*FONT-IMPORT*/\n/*COLORS*/\n/*FONTS*/\n/*ETC.*/\n/*MIXINS*/\n/*GRID & FLEX*/\n/*GENERAL RULES*/\nbody {\n  background: linear-gradient(-45deg, #3f5efb, #3f94bf, #23a6d5, #23d5ab);\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite;\n  display: flex;\n  flex-flow: column nowrap; }\n\nh1 {\n  font-family: \"Carter One\", sans-serif;\n  color: white;\n  font-size: 45px; }\n\nh2 {\n  font-family: \"Carter One\", sans-serif; }\n\nh3, legend, button {\n  font-family: \"Zilla Slab\", serif; }\n\np, input {\n  font-family: \"Work Sans\", sans-serif; }\n\n/*HEADER RULES*/\n#header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-evenly; }\n\n#dodo-logo {\n  width: 200px;\n  height: auto;\n  padding-right: 15px; }\n\n.header-widget {\n  border: 5px solid white;\n  background-color: rgba(0, 0, 0, 0);\n  border-radius: 20px;\n  width: max-content;\n  height: min-content;\n  padding: 5px;\n  margin: 5px;\n  justify-self: right;\n  font-family: \"Work Sans\", sans-serif;\n  padding: -20px 15px; }\n  .header-widget p {\n    color: white;\n    text-align: center;\n    font-size: 25px; }\n  .header-widget h3 {\n    color: white; }\n\n.log-out {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  border: 2px outset white;\n  color: #3f5efb;\n  width: max-content; }\n\n/*MAIN WIDGET & BODY RULES*/\n#main {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around; }\n\n.main-widget {\n  border: 10px solid #f1d592;\n  border-radius: 20px;\n  background-color: #f7e6bf;\n  width: 620px;\n  height: 600px;\n  margin: 20px; }\n\n.login-widget {\n  border: 10px solid #f1d592;\n  border-radius: 20px;\n  background-color: #f7e6bf;\n  width: 620px;\n  height: 600px;\n  margin: 20px;\n  padding: 10px;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center; }\n  .login-widget fieldset {\n    display: flex;\n    flex-flow: column nowrap;\n    border: 10px solid #f1d592;\n    width: 75%;\n    height: auto;\n    align-self: center; }\n    .login-widget fieldset legend {\n      font-size: 30px; }\n    .login-widget fieldset label, .login-widget fieldset h4 {\n      font-family: \"Zilla Slab\", serif;\n      font-size: 20px; }\n    .login-widget fieldset input, .login-widget fieldset select {\n      font-size: 20px;\n      height: 30px;\n      margin: 10px; }\n    .login-widget fieldset button {\n      height: 35px;\n      font-size: 20px;\n      margin: 10px;\n      background-color: #f7e6bf;\n      border: 4px outset #f1d592; }\n\n.login {\n  display: flex;\n  flex-flow: column; }\n\n#book-trip,\n#find-traveler,\n#search-results {\n  padding: 10px;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center; }\n  #book-trip h4,\n  #find-traveler h4,\n  #search-results h4 {\n    font-family: \"Zilla Slab\", serif;\n    font-size: 20px;\n    font-weight: bold; }\n  #book-trip button,\n  #find-traveler button,\n  #search-results button {\n    background-color: #f7e6bf;\n    border: 4px outset #f1d592; }\n\n.booking-form,\n.client-search {\n  display: flex;\n  flex-flow: column nowrap;\n  border: 10px solid #f1d592;\n  width: 75%;\n  height: auto;\n  padding: 20px; }\n  .booking-form legend,\n  .client-search legend {\n    font-size: 30px; }\n  .booking-form label, .booking-form h4,\n  .client-search label,\n  .client-search h4 {\n    font-family: \"Zilla Slab\", serif;\n    font-size: 20px; }\n  .booking-form input, .booking-form select,\n  .client-search input,\n  .client-search select {\n    font-size: 20px;\n    height: 30px;\n    margin: 10px; }\n  .booking-form button,\n  .client-search button {\n    height: 35px;\n    font-size: 20px;\n    margin: 10px;\n    background-color: #f7e6bf;\n    border: 4px outset #f1d592; }\n\n#pending-trips h2,\n#trips-display h2 {\n  text-align: center;\n  font-size: 30px; }\n\n/*TRIP CARD RULES*/\n#trips-display,\n#pending-trips,\n.searched-trips {\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  height: 625px; }\n  #trips-display .trips-header,\n  #pending-trips .trips-header,\n  .searched-trips .trips-header {\n    align-self: flex-start;\n    padding-right: 200px;\n    padding-left: 20px; }\n\n.trip {\n  height: auto;\n  width: 260px;\n  background-color: #f7e6bf;\n  border: 5px double #f1d592;\n  border-radius: 20px;\n  margin: 10px;\n  padding: 5px;\n  text-align: center; }\n  .trip h4 {\n    font-family: \"Zilla Slab\", serif;\n    font-size: 20px;\n    font-weight: bold; }\n  .trip button {\n    background-color: #f7e6bf;\n    border: 4px outset #f1d592; }\n\n.trip-image {\n  width: 240px;\n  height: 150px;\n  overflow: hidden;\n  border: 2px solid #f1d592;\n  border-radius: 20px; }\n\n/*OTHER RULES*/\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n.hidden {\n  display: none !important; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/TravelAgent.js":
/*!****************************!*\
  !*** ./src/TravelAgent.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const User = __webpack_require__(/*! ./User */ "./src/User.js");

class TravelAgent extends User {
  constructor() {
    super();
    this.id = 'agency';
    this.username = 'agency';
    this.allTrips = [];
  }

  addTrips(trips) {
    trips.forEach(trip => {
      this.allTrips.push(trip);
    });
  }

  findPendingTrips(trips) {
    return trips.filter(trip => {
      return trip.status === 'pending';
    })
  }

  calculateIncome(destinations) {
    let trips = this.allTrips.filter(trip => trip.date.includes('2020'));
    let initialCost = trips.reduce((totalExpenses, trip) => {
      let tripExpense;
      for (const destination of destinations) {
        if (destination.id === trip.destinationID) {
          let flightCost = trip.travelers * destination.estimatedFlightCostPerPerson;                    
          let lodgingCost = trip.duration * destination.estimatedLodgingCostPerDay;                    
          tripExpense = (flightCost + lodgingCost);
        }
      }
      totalExpenses += tripExpense;
      return totalExpenses;
    }, 0);
    return initialCost * .1;
  }

  findTodaysTravelers(trips, today) {
    let todaysTravelers = [];
    today = new Date(today)
    trips.forEach(trip => {
      let startDate = new Date(trip.date);    
      let endDate = (new Date(trip.date).getDate() + trip.duration);
      if (!todaysTravelers.includes(trip.userID) && (today <= startDate && today >= endDate)) {
        todaysTravelers.push(trip.userID);
      }
    });
    return todaysTravelers;
  }
}
module.exports = TravelAgent;

/***/ }),

/***/ "./src/Traveler.js":
/*!*************************!*\
  !*** ./src/Traveler.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const User = __webpack_require__(/*! ./User */ "./src/User.js");

class Traveler extends User {
  constructor(userData) {
    super();
    this.id = userData.id;
    this.username = undefined;
    this.trips = [];
    this.name = userData.name;
  }

  generateUsername() {
    this.username = `traveler${this.id}`;
  }

  addTrips(trips) {
    trips.forEach(trip => {
      if (trip.userID === this.id) {
        this.trips.push(trip);
      }
    });
  }

  calculateAnnualTravelExpenses(destinations) {
    let trips = this.trips.filter(trip => {
      if (typeof trip.date === 'string') {
        return trip.date.includes('2020');
      } else if (trip.date instanceof Date) {
        return trip.date.getFullYear() === 2020; 
      }       
    });
    let initialCost = trips.reduce((totalExpenses, trip) => {
      let tripExpense;
      for (const destination of destinations) {
        if (destination.id === trip.destinationID) {
          let flightCost = trip.travelers * destination.estimatedFlightCostPerPerson;                    
          let lodgingCost = trip.duration * destination.estimatedLodgingCostPerDay;                    
          tripExpense = (flightCost + lodgingCost);
        }
      }
      totalExpenses += tripExpense;
      return totalExpenses;
    }, 0);
    return initialCost + (initialCost * .1);
  }

  calculateTotalTravelExpenses(destinations) {
    let initialCost = this.trips.reduce((totalExpenses, trip) => {
      let tripExpense;
      for (const destination of destinations) {
        if (destination.id === trip.destinationID) {
          let flightCost = trip.travelers * destination.estimatedFlightCostPerPerson;                    
          let lodgingCost = trip.duration * destination.estimatedLodgingCostPerDay;                    
          tripExpense = (flightCost + lodgingCost);
        }
      }
      totalExpenses += tripExpense;
      return totalExpenses;
    }, 0);
    return initialCost + (initialCost * .1);
  }
}

module.exports = Traveler;

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class User {
  constructor() {
    this.password = 'travel2020';
    this.loggedIn = false;
    this.type = undefined;
  }

  logIn(password) {
    if (password === this.password) {
      this.loggedIn = true;
    }
  }

  changeType(type) {
    this.type = type;
  }
}

module.exports = User;

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

const domUpdates = {

  traveler: null,
  travelAgent: null,
  users: null,
  trips: null,
  destinations: null,
  today: null,

  importData(users, trips, destinations, date) {
    this.users = users;
    this.trips = trips;
    this.destinations = destinations;
    this.today = date;
  },

  updateTrips(trips, tripInfo) {
    this.trips = trips;
    this.showTravelerTrips(tripInfo);
  },

  resetBookingForm() {
    let bookingForm = document.getElementById('booking');
    bookingForm.reset();
    this.updateDestinationsDropdown();
    document.querySelector('.cost-button').classList.remove('hidden');
    document.querySelector('.book-button').classList.add('hidden');
    document.getElementById('cost-display').remove();
  },

  createTraveler(newTraveler) {
    this.traveler = newTraveler;
  },

  createDomUser(user) {
    if (user.id === 'agency') {
      this.travelAgent = user;
    } else {
      this.traveler = user;
    }
  },

  updateDestinationsDropdown() {
    let dropdown = document.querySelector('.dropdown');
    let sortedDestinations = this.destinations.sort((a, b) => {
      let destinationA = a.destination.toLowerCase();
      let destinationB = b.destination.toLowerCase();
      if (destinationA < destinationB) {
        return -1
      }
      if (destinationA > destinationB) {
        return 1
      }
      return 0;
    });
    sortedDestinations.forEach(destination => {
      let destinationOption = `
            <option value='${destination.destination}' id='${destination.id}'>${destination.destination}</option>
            `;
      dropdown.insertAdjacentHTML('beforeend', destinationOption);
    });
  },

  showTravelerWidgets() {
    const travelerExpenses = document.querySelector('.traveler.header-widget');
    const travelerTrips = document.getElementById('trips-display');
    const travelerBookTrip = document.getElementById('book-trip');
    const logInWidget = document.querySelector('.login-widget');
    const logOutButton = document.querySelector('.log-out');
    logInWidget.classList.add('hidden');
    travelerExpenses.classList.remove('hidden');
    travelerTrips.classList.remove('hidden');
    travelerBookTrip.classList.remove('hidden');
    logOutButton.classList.remove('hidden');
  },

  showTravelerExpenses(destinations) {      
    const expenses = this.traveler.calculateAnnualTravelExpenses(destinations);
    const expensesDisplay = document.querySelector('.amount-spent')
    expensesDisplay.innerText = `$${this.prettifyMoneyNumbers(expenses)}`;
  },

  showTravelerTrips(trips) {        
    this.traveler.addTrips(trips);        
    this.removeTrips();        
    let sortedTrips = this.sortTripsByDate(this.traveler.trips);        
    let tripWidget = document.getElementById('trips-display');
    sortedTrips.forEach(trip => {
      let destination = this.destinations.find(destination => {
        return trip.destinationID === destination.id;
      });
      trip.date = this.prettifyTripDate(trip.date);
      let tripInfo = `
                <button class='trip' type='button'>
                    <h4>${destination.destination}</h4>
                    <img src='${destination.image}' alt='${destination.alt}' class="trip-image"/>
                    <p>Departure: ${trip.date}</p>
                    <p>Days: ${trip.duration}</p>
                    <p>Travelers: ${trip.travelers}</p>
                    <p>Status: ${trip.status}</p>
                </button>`;   
      this.displayTrip(tripWidget, tripInfo);
    });        
  },

  showAgentWidgets() {
    const agentIncome = document.getElementById('agent-income');
    const currentTravelers = document.getElementById('current-travelers');
    const agentSearch = document.getElementById('find-traveler');
    const pendingTrips = document.getElementById('pending-trips')
    const logInWidget = document.querySelector('.login-widget');
    const logOutButton = document.querySelector('.log-out');
    logInWidget.classList.add('hidden');
    agentIncome.classList.remove('hidden');
    currentTravelers.classList.remove('hidden');
    agentSearch.classList.remove('hidden');
    pendingTrips.classList.remove('hidden');
    logOutButton.classList.remove('hidden');
  },

  showPendingTrips(trips) {
    let pending = this.travelAgent.findPendingTrips(trips);
    let sortedPending = this.sortTripsByDate(pending);
    const displayTo = document.getElementById('pending-trips');
    sortedPending.forEach(trip => {
      let destination = this.destinations.find(destination => {
        return trip.destinationID === destination.id;
      });
      trip.date = this.prettifyTripDate(trip.date);
      const tripHTML = `
            <article class='trip' id='${trip.id}'>
                <h4>${this.findUserName(trip.userID)}</h4>
                <img src='${destination.image}' alt='${destination.alt}' class="trip-image"/>
                <p>${trip.date}</p>
                <p>Destination: ${destination.destination}</p> 
                <p>Duration: ${trip.duration} days</p>
                <p>Walkers: ${trip.travelers}</p>
                <p>Status: ${trip.status}</p>
                <button class='approve-trip'>Approve</button>
                <button class='delete-trip'>Delete</button>
            </article>`;
      this.displayTrip(displayTo, tripHTML);
    });
  },

  removeTrips() {
    let tripCards = document.getElementsByClassName('trip');
    while (tripCards[0]) {
      tripCards[0].parentNode.removeChild(tripCards[0]);
    }
  },

  deleteTrip(event) {
    let article = event.target.closest('.trip');
    article.innerHTML = `<h4>Deleted!</h4>`
  },

  approveTrip(event) {
    let article = event.target.closest('.trip');
    article.innerHTML = `<h4>Approved!</h4>`
  },

  findUserName(id) {
    let user = this.users.find(user => user.id === id);
    return user.name;
  },

  showAgentIncome(destinations) {
    const income = this.travelAgent.calculateIncome(destinations);
    document.querySelector('.amount-earned').innerText = `$${this.prettifyMoneyNumbers(income)}`
  },

  showCurrentTravelers() {
    const travelers = this.travelAgent.findTodaysTravelers(this.trips, this.today)
    document.querySelector('.todays-travelers').innerText = `${travelers.length}`;
  },

  displayWelcome(user) {
    let welcome = document.querySelector('.welcome');
    if (user === 'traveler') {
      let firstName = this.traveler.name.split(" ")[0]
      welcome.innerText = `Welcome, ${firstName}!`
    } else if (user === 'agent') {
      welcome.innerText = 'Welcome, Wilbur!';
    }
  },

  sortTripsByDate(tripsToSort) {
    return tripsToSort.map(trip => {
      trip.date = new Date(trip.date);
      return trip;
    }).sort((a, b) => {
      return b.date - a.date;
    });       
  },

  displayTrip(tripWidget, tripInfo) {
    tripWidget.insertAdjacentHTML('beforeend', tripInfo);
  },

  displayEstimatedCost(cost) {
    let button = document.querySelector('.cost-button');
    let newHTML = `
        <div id="cost-display">
        <h4>Estimated Cost (10% fee included): $${this.prettifyMoneyNumbers(cost)}</h4>
        `;
    document.querySelector('.book-button').classList.remove('hidden');
    button.classList.add('hidden');
    button.insertAdjacentHTML('beforebegin', newHTML); 
  },

  clearBookingFormInputs() {
    document.getElementById('book-destination').value = ''; 
    document.getElementById('book-travelers').value = '';    
    document.getElementById('book-departure').value = '';    
    document.getElementById('book-duration').value = '';
  },

  displaySearchedUserInfo() {
    this.traveler.addTrips(this.trips);
    document.getElementById('find-traveler').classList.add('hidden');
    document.getElementById('search-results').classList.remove('hidden');
    let travelerExpenses = this.traveler.calculateTotalTravelExpenses(this.destinations);
    travelerExpenses = this.prettifyMoneyNumbers(travelerExpenses);
    let travelerInfoSection = document.getElementById('search-results');
    travelerInfoSection.innerHTML = `
        <section id='search-results' class='main-widget'>
        <h2 class='trips-header'>${this.traveler.name}</h2>
        <p>Total spent on travel: $${travelerExpenses}</p>
        <h4>Trips:</h4>
        <section class='searched-trips'></section>
        <button class='close-search'>Back to Search</button>
        </section>
        `;
    this.displaySearchedTrips();
  },

  closeSearch() {
    document.getElementById('search-results').classList.add('hidden');
    document.getElementById('find-traveler').classList.remove('hidden');
    document.getElementById('search').reset();
  },

  displaySearchedTrips() {
    let searchedTrips = document.querySelector('.searched-trips');
    let sortedTrips = this.sortTripsByDate(this.traveler.trips);
    sortedTrips.forEach(trip => {
      let destination = this.destinations.find(destination => {
        return trip.destinationID === destination.id;
      });
      trip.date = this.prettifyTripDate(trip.date);
      if (trip.status === 'pending') {
        this.insertPendingHTML(destination, trip, searchedTrips);
      } else if (trip.status === 'approved') {
        this.insertApprovedHTML(destination, trip, searchedTrips);
      }
    });
  },

  insertPendingHTML(destination, trip, searchedTrips) {
    searchedTrips.insertAdjacentHTML('beforeend', `
        <article class='trip' id='${trip.id}'>
            <h4>${destination.destination}</h4>
            <p>Departure: ${trip.date}</p>
            <p>Duration: ${trip.duration} days</p>
            <p>Walkers: ${trip.travelers}</p>
            <button class='approve-trip'>Approve</button>
            <button class='delete-trip'>Delete</button>
        </article>
        `);
  },

  insertApprovedHTML(destination, trip, searchedTrips) {
    searchedTrips.insertAdjacentHTML('beforeend', `
        <article class='trip' id='${trip.id}'>
            <h4>${destination.destination}</h4>
            <p>Departure: ${trip.date}</p>
            <p>Duration: ${trip.duration} days</p>
            <p>Walkers: ${trip.travelers}</p>
            <button class='delete-trip'>Delete</button>
        </article>
        `);
  },

  prettifyMoneyNumbers(dollars) {
    let prettyDollars = dollars.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    return prettyDollars;
  },

  prettifyTripDate(date) {
    let prettyDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
    return prettyDate;
  }

}

module.exports = domUpdates;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/User.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_User__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Traveler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Traveler */ "./src/Traveler.js");
/* harmony import */ var _Traveler__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Traveler__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TravelAgent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TravelAgent */ "./src/TravelAgent.js");
/* harmony import */ var _TravelAgent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TravelAgent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_domUpdates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/domUpdates */ "./src/domUpdates.js");
/* harmony import */ var _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_domUpdates__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_5__);







let user = new _User__WEBPACK_IMPORTED_MODULE_0___default.a();
let travelAgent;
let traveler;
let users;
let destinations;
let trips;
let fullTripInfo;
const loginButton = document.querySelector('.login-button');
const getTripCostButton = document.querySelector('.cost-button');
const bookTripButton = document.querySelector('.book-button');
const main = document.getElementById('main');
const logOutButton = document.querySelector('.log-out');

loginButton.addEventListener('click', () => {
  attemptLogin()
});
getTripCostButton.addEventListener('click', () => {
  getBookTripInfo()
});
bookTripButton.addEventListener('click', () => {
  addTripToAPI(fullTripInfo);
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.clearBookingFormInputs();
});
main.addEventListener('click', () => {
  manageTripRequest(event);
  searchForClient(event); 
  closeSearch(event);
});
logOutButton.addEventListener('click', () => {
  logOut() 
});

Promise.all([
  node_fetch__WEBPACK_IMPORTED_MODULE_4___default()('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/')
    .then(response => response.json()),
  node_fetch__WEBPACK_IMPORTED_MODULE_4___default()('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
    .then(response => response.json()),
  node_fetch__WEBPACK_IMPORTED_MODULE_4___default()('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
    .then(response => response.json())
])
  .then(data => createDatasets(data[0], data[1], data[2]))
  .catch(err => console.error(err))

const createDatasets = (userData, tripsData, destinationData) => {
  users = userData.travelers;
  trips = tripsData.trips;
  destinations = destinationData.destinations;
  let date = getTodaysDate();   
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.importData(users, trips, destinations, date);    
}

const getTodaysDate = () => {
  let today = new Date();
  today = `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`
  return today;
}

const attemptLogin = () => {
  let usernameInput = document.getElementById('username-input').value;
  let passwordInput = document.getElementById('password-input').value;
  let newID = retrieveUserID(usernameInput);
  if (newID) {
    createUser(newID);
    user.logIn(passwordInput);
    checkLogInStatus();
  }
}

const retrieveUserID = (username) => {
  if (username === 'agency') {
    return 'agency';
  } else if (username.includes('traveler')) {
    return parseInt(username.substr(8));
  } else {
    return undefined;
  }
}

const createUser = (newID) => {
  if (newID === 'agency') {
    travelAgent = new _TravelAgent__WEBPACK_IMPORTED_MODULE_2___default.a(newID);
    travelAgent.addTrips(trips);
    user.changeType('agent');
    _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.createDomUser(travelAgent);
    return travelAgent;
  } else {
    let userInfo = finduserByID(newID);
    traveler = new _Traveler__WEBPACK_IMPORTED_MODULE_1___default.a(userInfo);
    user.changeType('traveler');
    _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.createDomUser(traveler);
    return traveler;
  }
}

const checkLogInStatus = () => {
  if (user.loggedIn === true) {
    showDashboard(user);
  }
}

const showDashboard = (user) => {
  if (user.type === 'traveler') {
    showTravelerDashboard();
  } else if (user.type === 'agent') {
    showAgentDashboard();
  }
}

const showTravelerDashboard = () => {
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.updateDestinationsDropdown(destinations);
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.showTravelerWidgets();
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.showTravelerTrips(trips);
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.showTravelerExpenses(destinations);
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.displayWelcome('traveler');
}

const showAgentDashboard = () => {
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.showAgentWidgets();
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.showAgentIncome(destinations);
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.showCurrentTravelers(trips);
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.showPendingTrips(trips);
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.displayWelcome('agent');
}

const finduserByID = (id) => {
  return users.find(user => user.id === id);
}

const getBookTripInfo = () => {
  let id = Date.now();
  let userID = traveler.id;    
  let destinationSelection = document.getElementById('book-destination').value; 
  let travelersInput = document.getElementById('book-travelers').value;    
  let dateInput = document.getElementById('book-departure').value;    
  let durationInput = document.getElementById('book-duration').value;    
  destinationSelection = findDestinationFromName(destinationSelection);
  let reformattedDate = dateInput.replace(/-/gi, '/');
  fullTripInfo = {
    id,
    userID,
    destinationID: destinationSelection.id,
    travelers: parseInt(travelersInput),
    date: reformattedDate,
    duration: parseInt(durationInput),
    status: 'pending',
    suggestedActivities: [],
  };
  let estimatedCost = getCost(destinationSelection, durationInput, travelersInput);
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.displayEstimatedCost(estimatedCost);
}

const addTripToAPI = (tripInfo) => {
  node_fetch__WEBPACK_IMPORTED_MODULE_4___default()('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tripInfo)
  })
    .then(response => response.json())
    .catch(err => console.error(err))
  fetchTrips();
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.resetBookingForm();
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.updateTrips(trips, [tripInfo]);
}

const fetchTrips = () => {
  node_fetch__WEBPACK_IMPORTED_MODULE_4___default()('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips/')
    .then(response => response.json())
    .then(data => addNewTrips(data.trips))
    .catch(err => console.error(err))    
}

const addNewTrips = (newTrips) => {
  trips = newTrips.trips;   
}

const findDestinationFromName = (destinationName) => {
  let fullDestination = destinations.find(destination => {
    return destination.destination === destinationName
  });
  return fullDestination;
}

const getCost = (destination, duration, travelers) => {
  let lodging = destination.estimatedLodgingCostPerDay * duration;
  let flights = destination.estimatedFlightCostPerPerson * travelers;
  let total = lodging + flights;
  return total + (total * .1);
}

const manageTripRequest = (event) => {
  if (event.target.className === 'approve-trip') {
    approveTrip(event);
  } else if (event.target.className === 'delete-trip') {
    deleteTrip(event);
  }
}

const approveTrip = (event) => {
  let tripID = event.target.closest('.trip').id;
  let tripToPost = {
    "id": parseInt(tripID),
    "status": "approved"
  }
  postTripApproval(tripToPost);
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.approveTrip(event); 
}

const postTripApproval = (tripToPost) => {
  node_fetch__WEBPACK_IMPORTED_MODULE_4___default()('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/updateTrip', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tripToPost)
  })
    .then(response => response.json())
    .catch(err => console.error(err))
}

const deleteTrip = (event) => {
  let tripID = event.target.closest('.trip').id;
  let tripToDelete = {
    id: parseInt(tripID)
  }
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.deleteTrip(event);
  deleteTripFromAPI(tripToDelete);
}

const deleteTripFromAPI = (tripToDelete) => {
  node_fetch__WEBPACK_IMPORTED_MODULE_4___default()('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tripToDelete)
  })
    .then(response => response.json())
    .catch(err => console.error(err))
}

const searchForClient = (event) => {
  if (event.target.className === 'search-button') {
    let searchInput = document.querySelector('.search-bar').value.toLowerCase();
    let foundUser = users.find(user => {
      return user.name.toLowerCase().includes(searchInput);
    });
    traveler = new _Traveler__WEBPACK_IMPORTED_MODULE_1___default.a(foundUser);
    _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.createTraveler(traveler);
    _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.displaySearchedUserInfo(foundUser);
  }    
}

const closeSearch = (event) => {
  if (event.target.className === 'close-search') {
    _src_domUpdates__WEBPACK_IMPORTED_MODULE_3___default.a.closeSearch(event);
  }
}

const logOut = () => {
  location.reload()
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmF2ZWxBZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJhdmVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3M/YTIzOCIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxt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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFFLGlEQUFLO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0RBQVU7QUFDWixFQUFFLHNEQUFVO0FBQ1o7O0FBRUE7QUFDQSxFQUFFLGlEQUFLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBVSxvQjtBQUNaOztBQUVBO0FBQ0EsRUFBRSxpREFBSztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0RBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0EsRUFBRSxpREFBSztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxtQkFBbUIsZ0RBQVE7QUFDM0IsSUFBSSxzREFBVTtBQUNkLElBQUksc0RBQVU7QUFDZCxHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksc0RBQVU7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhcnRlcitPbmUmZGlzcGxheT1zd2FwKTtcIiwgXCJcIl0pO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1aaWxsYStTbGFiOndnaHRANDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIiwgXCJcIl0pO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Xb3JrK1NhbnM6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcCk7XCIsIFwiXCJdKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBJTVBPUlRTKi9cXG4vKlZBUklBQkxFUyovXFxuLypGT05ULUlNUE9SVCovXFxuLypDT0xPUlMqL1xcbi8qRk9OVFMqL1xcbi8qRVRDLiovXFxuLypNSVhJTlMqL1xcbi8qR1JJRCAmIEZMRVgqL1xcbi8qR0VORVJBTCBSVUxFUyovXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjM2Y1ZWZiLCAjM2Y5NGJmLCAjMjNhNmQ1LCAjMjNkNWFiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xcbiAgYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7IH1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogXFxcIkNhcnRlciBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA0NXB4OyB9XFxuXFxuaDIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDYXJ0ZXIgT25lXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbmgzLCBsZWdlbmQsIGJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIlppbGxhIFNsYWJcXFwiLCBzZXJpZjsgfVxcblxcbnAsIGlucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV29yayBTYW5zXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbi8qSEVBREVSIFJVTEVTKi9cXG4jaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IH1cXG5cXG4jZG9kby1sb2dvIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7IH1cXG5cXG4uaGVhZGVyLXdpZGdldCB7XFxuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV29yayBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IC0yMHB4IDE1cHg7IH1cXG4gIC5oZWFkZXItd2lkZ2V0IHAge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNXB4OyB9XFxuICAuaGVhZGVyLXdpZGdldCBoMyB7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5sb2ctb3V0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyOiAycHggb3V0c2V0IHdoaXRlO1xcbiAgY29sb3I6ICMzZjVlZmI7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7IH1cXG5cXG4vKk1BSU4gV0lER0VUICYgQk9EWSBSVUxFUyovXFxuI21haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcblxcbi5tYWluLXdpZGdldCB7XFxuICBib3JkZXI6IDEwcHggc29saWQgI2YxZDU5MjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdlNmJmO1xcbiAgd2lkdGg6IDYyMHB4O1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIG1hcmdpbjogMjBweDsgfVxcblxcbi5sb2dpbi13aWRnZXQge1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICNmMWQ1OTI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZTZiZjtcXG4gIHdpZHRoOiA2MjBweDtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLmxvZ2luLXdpZGdldCBmaWVsZHNldCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICNmMWQ1OTI7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuICAgIC5sb2dpbi13aWRnZXQgZmllbGRzZXQgbGVnZW5kIHtcXG4gICAgICBmb250LXNpemU6IDMwcHg7IH1cXG4gICAgLmxvZ2luLXdpZGdldCBmaWVsZHNldCBsYWJlbCwgLmxvZ2luLXdpZGdldCBmaWVsZHNldCBoNCB7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJaaWxsYSBTbGFiXFxcIiwgc2VyaWY7XFxuICAgICAgZm9udC1zaXplOiAyMHB4OyB9XFxuICAgIC5sb2dpbi13aWRnZXQgZmllbGRzZXQgaW5wdXQsIC5sb2dpbi13aWRnZXQgZmllbGRzZXQgc2VsZWN0IHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgIG1hcmdpbjogMTBweDsgfVxcbiAgICAubG9naW4td2lkZ2V0IGZpZWxkc2V0IGJ1dHRvbiB7XFxuICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICBtYXJnaW46IDEwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZTZiZjtcXG4gICAgICBib3JkZXI6IDRweCBvdXRzZXQgI2YxZDU5MjsgfVxcblxcbi5sb2dpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47IH1cXG5cXG4jYm9vay10cmlwLFxcbiNmaW5kLXRyYXZlbGVyLFxcbiNzZWFyY2gtcmVzdWx0cyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgI2Jvb2stdHJpcCBoNCxcXG4gICNmaW5kLXRyYXZlbGVyIGg0LFxcbiAgI3NlYXJjaC1yZXN1bHRzIGg0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJaaWxsYSBTbGFiXFxcIiwgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICNib29rLXRyaXAgYnV0dG9uLFxcbiAgI2ZpbmQtdHJhdmVsZXIgYnV0dG9uLFxcbiAgI3NlYXJjaC1yZXN1bHRzIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2U2YmY7XFxuICAgIGJvcmRlcjogNHB4IG91dHNldCAjZjFkNTkyOyB9XFxuXFxuLmJvb2tpbmctZm9ybSxcXG4uY2xpZW50LXNlYXJjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICNmMWQ1OTI7XFxuICB3aWR0aDogNzUlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogMjBweDsgfVxcbiAgLmJvb2tpbmctZm9ybSBsZWdlbmQsXFxuICAuY2xpZW50LXNlYXJjaCBsZWdlbmQge1xcbiAgICBmb250LXNpemU6IDMwcHg7IH1cXG4gIC5ib29raW5nLWZvcm0gbGFiZWwsIC5ib29raW5nLWZvcm0gaDQsXFxuICAuY2xpZW50LXNlYXJjaCBsYWJlbCxcXG4gIC5jbGllbnQtc2VhcmNoIGg0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJaaWxsYSBTbGFiXFxcIiwgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcbiAgLmJvb2tpbmctZm9ybSBpbnB1dCwgLmJvb2tpbmctZm9ybSBzZWxlY3QsXFxuICAuY2xpZW50LXNlYXJjaCBpbnB1dCxcXG4gIC5jbGllbnQtc2VhcmNoIHNlbGVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7IH1cXG4gIC5ib29raW5nLWZvcm0gYnV0dG9uLFxcbiAgLmNsaWVudC1zZWFyY2ggYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZTZiZjtcXG4gICAgYm9yZGVyOiA0cHggb3V0c2V0ICNmMWQ1OTI7IH1cXG5cXG4jcGVuZGluZy10cmlwcyBoMixcXG4jdHJpcHMtZGlzcGxheSBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDMwcHg7IH1cXG5cXG4vKlRSSVAgQ0FSRCBSVUxFUyovXFxuI3RyaXBzLWRpc3BsYXksXFxuI3BlbmRpbmctdHJpcHMsXFxuLnNlYXJjaGVkLXRyaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDYyNXB4OyB9XFxuICAjdHJpcHMtZGlzcGxheSAudHJpcHMtaGVhZGVyLFxcbiAgI3BlbmRpbmctdHJpcHMgLnRyaXBzLWhlYWRlcixcXG4gIC5zZWFyY2hlZC10cmlwcyAudHJpcHMtaGVhZGVyIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZy1yaWdodDogMjAwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDsgfVxcblxcbi50cmlwIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAyNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2U2YmY7XFxuICBib3JkZXI6IDVweCBkb3VibGUgI2YxZDU5MjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC50cmlwIGg0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJaaWxsYSBTbGFiXFxcIiwgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gIC50cmlwIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2U2YmY7XFxuICAgIGJvcmRlcjogNHB4IG91dHNldCAjZjFkNTkyOyB9XFxuXFxuLnRyaXAtaW1hZ2Uge1xcbiAgd2lkdGg6IDI0MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZjFkNTkyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDsgfVxcblxcbi8qT1RIRVIgUlVMRVMqL1xcbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7IH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlOyB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlOyB9IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1nbG9iYWxcbnZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIHRoZSBvbmx5IHJlbGlhYmxlIG1lYW5zIHRvIGdldCB0aGUgZ2xvYmFsIG9iamVjdCBpc1xuXHQvLyBgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKWBcblx0Ly8gSG93ZXZlciwgdGhpcyBjYXVzZXMgQ1NQIHZpb2xhdGlvbnMgaW4gQ2hyb21lIGFwcHMuXG5cdGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHNlbGY7IH1cblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB3aW5kb3c7IH1cblx0aWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBnbG9iYWw7IH1cblx0dGhyb3cgbmV3IEVycm9yKCd1bmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3QnKTtcbn1cblxudmFyIGdsb2JhbCA9IGdldEdsb2JhbCgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBnbG9iYWwuZmV0Y2g7XG5cbi8vIE5lZWRlZCBmb3IgVHlwZVNjcmlwdCBhbmQgV2VicGFjay5cbmV4cG9ydHMuZGVmYXVsdCA9IGdsb2JhbC5mZXRjaC5iaW5kKGdsb2JhbCk7XG5cbmV4cG9ydHMuSGVhZGVycyA9IGdsb2JhbC5IZWFkZXJzO1xuZXhwb3J0cy5SZXF1ZXN0ID0gZ2xvYmFsLlJlcXVlc3Q7XG5leHBvcnRzLlJlc3BvbnNlID0gZ2xvYmFsLlJlc3BvbnNlOyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImNvbnN0IFVzZXIgPSByZXF1aXJlKCcuL1VzZXInKTtcblxuY2xhc3MgVHJhdmVsQWdlbnQgZXh0ZW5kcyBVc2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlkID0gJ2FnZW5jeSc7XG4gICAgdGhpcy51c2VybmFtZSA9ICdhZ2VuY3knO1xuICAgIHRoaXMuYWxsVHJpcHMgPSBbXTtcbiAgfVxuXG4gIGFkZFRyaXBzKHRyaXBzKSB7XG4gICAgdHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgIHRoaXMuYWxsVHJpcHMucHVzaCh0cmlwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRQZW5kaW5nVHJpcHModHJpcHMpIHtcbiAgICByZXR1cm4gdHJpcHMuZmlsdGVyKHRyaXAgPT4ge1xuICAgICAgcmV0dXJuIHRyaXAuc3RhdHVzID09PSAncGVuZGluZyc7XG4gICAgfSlcbiAgfVxuXG4gIGNhbGN1bGF0ZUluY29tZShkZXN0aW5hdGlvbnMpIHtcbiAgICBsZXQgdHJpcHMgPSB0aGlzLmFsbFRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAuZGF0ZS5pbmNsdWRlcygnMjAyMCcpKTtcbiAgICBsZXQgaW5pdGlhbENvc3QgPSB0cmlwcy5yZWR1Y2UoKHRvdGFsRXhwZW5zZXMsIHRyaXApID0+IHtcbiAgICAgIGxldCB0cmlwRXhwZW5zZTtcbiAgICAgIGZvciAoY29uc3QgZGVzdGluYXRpb24gb2YgZGVzdGluYXRpb25zKSB7XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5pZCA9PT0gdHJpcC5kZXN0aW5hdGlvbklEKSB7XG4gICAgICAgICAgbGV0IGZsaWdodENvc3QgPSB0cmlwLnRyYXZlbGVycyAqIGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb247ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICBsZXQgbG9kZ2luZ0Nvc3QgPSB0cmlwLmR1cmF0aW9uICogZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB0cmlwRXhwZW5zZSA9IChmbGlnaHRDb3N0ICsgbG9kZ2luZ0Nvc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0b3RhbEV4cGVuc2VzICs9IHRyaXBFeHBlbnNlO1xuICAgICAgcmV0dXJuIHRvdGFsRXhwZW5zZXM7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIGluaXRpYWxDb3N0ICogLjE7XG4gIH1cblxuICBmaW5kVG9kYXlzVHJhdmVsZXJzKHRyaXBzLCB0b2RheSkge1xuICAgIGxldCB0b2RheXNUcmF2ZWxlcnMgPSBbXTtcbiAgICB0b2RheSA9IG5ldyBEYXRlKHRvZGF5KVxuICAgIHRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUodHJpcC5kYXRlKTsgICAgXG4gICAgICBsZXQgZW5kRGF0ZSA9IChuZXcgRGF0ZSh0cmlwLmRhdGUpLmdldERhdGUoKSArIHRyaXAuZHVyYXRpb24pO1xuICAgICAgaWYgKCF0b2RheXNUcmF2ZWxlcnMuaW5jbHVkZXModHJpcC51c2VySUQpICYmICh0b2RheSA8PSBzdGFydERhdGUgJiYgdG9kYXkgPj0gZW5kRGF0ZSkpIHtcbiAgICAgICAgdG9kYXlzVHJhdmVsZXJzLnB1c2godHJpcC51c2VySUQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0b2RheXNUcmF2ZWxlcnM7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gVHJhdmVsQWdlbnQ7IiwiY29uc3QgVXNlciA9IHJlcXVpcmUoJy4vVXNlcicpO1xuXG5jbGFzcyBUcmF2ZWxlciBleHRlbmRzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih1c2VyRGF0YSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pZCA9IHVzZXJEYXRhLmlkO1xuICAgIHRoaXMudXNlcm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmlwcyA9IFtdO1xuICAgIHRoaXMubmFtZSA9IHVzZXJEYXRhLm5hbWU7XG4gIH1cblxuICBnZW5lcmF0ZVVzZXJuYW1lKCkge1xuICAgIHRoaXMudXNlcm5hbWUgPSBgdHJhdmVsZXIke3RoaXMuaWR9YDtcbiAgfVxuXG4gIGFkZFRyaXBzKHRyaXBzKSB7XG4gICAgdHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgIGlmICh0cmlwLnVzZXJJRCA9PT0gdGhpcy5pZCkge1xuICAgICAgICB0aGlzLnRyaXBzLnB1c2godHJpcCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjYWxjdWxhdGVBbm51YWxUcmF2ZWxFeHBlbnNlcyhkZXN0aW5hdGlvbnMpIHtcbiAgICBsZXQgdHJpcHMgPSB0aGlzLnRyaXBzLmZpbHRlcih0cmlwID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdHJpcC5kYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdHJpcC5kYXRlLmluY2x1ZGVzKCcyMDIwJyk7XG4gICAgICB9IGVsc2UgaWYgKHRyaXAuZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRyaXAuZGF0ZS5nZXRGdWxsWWVhcigpID09PSAyMDIwOyBcbiAgICAgIH0gICAgICAgXG4gICAgfSk7XG4gICAgbGV0IGluaXRpYWxDb3N0ID0gdHJpcHMucmVkdWNlKCh0b3RhbEV4cGVuc2VzLCB0cmlwKSA9PiB7XG4gICAgICBsZXQgdHJpcEV4cGVuc2U7XG4gICAgICBmb3IgKGNvbnN0IGRlc3RpbmF0aW9uIG9mIGRlc3RpbmF0aW9ucykge1xuICAgICAgICBpZiAoZGVzdGluYXRpb24uaWQgPT09IHRyaXAuZGVzdGluYXRpb25JRCkge1xuICAgICAgICAgIGxldCBmbGlnaHRDb3N0ID0gdHJpcC50cmF2ZWxlcnMgKiBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgbGV0IGxvZGdpbmdDb3N0ID0gdHJpcC5kdXJhdGlvbiAqIGRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5OyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdHJpcEV4cGVuc2UgPSAoZmxpZ2h0Q29zdCArIGxvZGdpbmdDb3N0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdG90YWxFeHBlbnNlcyArPSB0cmlwRXhwZW5zZTtcbiAgICAgIHJldHVybiB0b3RhbEV4cGVuc2VzO1xuICAgIH0sIDApO1xuICAgIHJldHVybiBpbml0aWFsQ29zdCArIChpbml0aWFsQ29zdCAqIC4xKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVRvdGFsVHJhdmVsRXhwZW5zZXMoZGVzdGluYXRpb25zKSB7XG4gICAgbGV0IGluaXRpYWxDb3N0ID0gdGhpcy50cmlwcy5yZWR1Y2UoKHRvdGFsRXhwZW5zZXMsIHRyaXApID0+IHtcbiAgICAgIGxldCB0cmlwRXhwZW5zZTtcbiAgICAgIGZvciAoY29uc3QgZGVzdGluYXRpb24gb2YgZGVzdGluYXRpb25zKSB7XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5pZCA9PT0gdHJpcC5kZXN0aW5hdGlvbklEKSB7XG4gICAgICAgICAgbGV0IGZsaWdodENvc3QgPSB0cmlwLnRyYXZlbGVycyAqIGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb247ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICBsZXQgbG9kZ2luZ0Nvc3QgPSB0cmlwLmR1cmF0aW9uICogZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB0cmlwRXhwZW5zZSA9IChmbGlnaHRDb3N0ICsgbG9kZ2luZ0Nvc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0b3RhbEV4cGVuc2VzICs9IHRyaXBFeHBlbnNlO1xuICAgICAgcmV0dXJuIHRvdGFsRXhwZW5zZXM7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIGluaXRpYWxDb3N0ICsgKGluaXRpYWxDb3N0ICogLjEpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhdmVsZXI7IiwiY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFzc3dvcmQgPSAndHJhdmVsMjAyMCc7XG4gICAgdGhpcy5sb2dnZWRJbiA9IGZhbHNlO1xuICAgIHRoaXMudHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGxvZ0luKHBhc3N3b3JkKSB7XG4gICAgaWYgKHBhc3N3b3JkID09PSB0aGlzLnBhc3N3b3JkKSB7XG4gICAgICB0aGlzLmxvZ2dlZEluID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXNlcjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJjb25zdCBkb21VcGRhdGVzID0ge1xuXG4gIHRyYXZlbGVyOiBudWxsLFxuICB0cmF2ZWxBZ2VudDogbnVsbCxcbiAgdXNlcnM6IG51bGwsXG4gIHRyaXBzOiBudWxsLFxuICBkZXN0aW5hdGlvbnM6IG51bGwsXG4gIHRvZGF5OiBudWxsLFxuXG4gIGltcG9ydERhdGEodXNlcnMsIHRyaXBzLCBkZXN0aW5hdGlvbnMsIGRhdGUpIHtcbiAgICB0aGlzLnVzZXJzID0gdXNlcnM7XG4gICAgdGhpcy50cmlwcyA9IHRyaXBzO1xuICAgIHRoaXMuZGVzdGluYXRpb25zID0gZGVzdGluYXRpb25zO1xuICAgIHRoaXMudG9kYXkgPSBkYXRlO1xuICB9LFxuXG4gIHVwZGF0ZVRyaXBzKHRyaXBzLCB0cmlwSW5mbykge1xuICAgIHRoaXMudHJpcHMgPSB0cmlwcztcbiAgICB0aGlzLnNob3dUcmF2ZWxlclRyaXBzKHRyaXBJbmZvKTtcbiAgfSxcblxuICByZXNldEJvb2tpbmdGb3JtKCkge1xuICAgIGxldCBib29raW5nRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nJyk7XG4gICAgYm9va2luZ0Zvcm0ucmVzZXQoKTtcbiAgICB0aGlzLnVwZGF0ZURlc3RpbmF0aW9uc0Ryb3Bkb3duKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvc3QtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvc3QtZGlzcGxheScpLnJlbW92ZSgpO1xuICB9LFxuXG4gIGNyZWF0ZVRyYXZlbGVyKG5ld1RyYXZlbGVyKSB7XG4gICAgdGhpcy50cmF2ZWxlciA9IG5ld1RyYXZlbGVyO1xuICB9LFxuXG4gIGNyZWF0ZURvbVVzZXIodXNlcikge1xuICAgIGlmICh1c2VyLmlkID09PSAnYWdlbmN5Jykge1xuICAgICAgdGhpcy50cmF2ZWxBZ2VudCA9IHVzZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHJhdmVsZXIgPSB1c2VyO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGVEZXN0aW5hdGlvbnNEcm9wZG93bigpIHtcbiAgICBsZXQgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKTtcbiAgICBsZXQgc29ydGVkRGVzdGluYXRpb25zID0gdGhpcy5kZXN0aW5hdGlvbnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgbGV0IGRlc3RpbmF0aW9uQSA9IGEuZGVzdGluYXRpb24udG9Mb3dlckNhc2UoKTtcbiAgICAgIGxldCBkZXN0aW5hdGlvbkIgPSBiLmRlc3RpbmF0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoZGVzdGluYXRpb25BIDwgZGVzdGluYXRpb25CKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaWYgKGRlc3RpbmF0aW9uQSA+IGRlc3RpbmF0aW9uQikge1xuICAgICAgICByZXR1cm4gMVxuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gICAgc29ydGVkRGVzdGluYXRpb25zLmZvckVhY2goZGVzdGluYXRpb24gPT4ge1xuICAgICAgbGV0IGRlc3RpbmF0aW9uT3B0aW9uID0gYFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn0nIGlkPScke2Rlc3RpbmF0aW9uLmlkfSc+JHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn08L29wdGlvbj5cbiAgICAgICAgICAgIGA7XG4gICAgICBkcm9wZG93bi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGRlc3RpbmF0aW9uT3B0aW9uKTtcbiAgICB9KTtcbiAgfSxcblxuICBzaG93VHJhdmVsZXJXaWRnZXRzKCkge1xuICAgIGNvbnN0IHRyYXZlbGVyRXhwZW5zZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhdmVsZXIuaGVhZGVyLXdpZGdldCcpO1xuICAgIGNvbnN0IHRyYXZlbGVyVHJpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJpcHMtZGlzcGxheScpO1xuICAgIGNvbnN0IHRyYXZlbGVyQm9va1RyaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vay10cmlwJyk7XG4gICAgY29uc3QgbG9nSW5XaWRnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4td2lkZ2V0Jyk7XG4gICAgY29uc3QgbG9nT3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZy1vdXQnKTtcbiAgICBsb2dJbldpZGdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB0cmF2ZWxlckV4cGVuc2VzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHRyYXZlbGVyVHJpcHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgdHJhdmVsZXJCb29rVHJpcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBsb2dPdXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH0sXG5cbiAgc2hvd1RyYXZlbGVyRXhwZW5zZXMoZGVzdGluYXRpb25zKSB7ICAgICAgXG4gICAgY29uc3QgZXhwZW5zZXMgPSB0aGlzLnRyYXZlbGVyLmNhbGN1bGF0ZUFubnVhbFRyYXZlbEV4cGVuc2VzKGRlc3RpbmF0aW9ucyk7XG4gICAgY29uc3QgZXhwZW5zZXNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFtb3VudC1zcGVudCcpXG4gICAgZXhwZW5zZXNEaXNwbGF5LmlubmVyVGV4dCA9IGAkJHt0aGlzLnByZXR0aWZ5TW9uZXlOdW1iZXJzKGV4cGVuc2VzKX1gO1xuICB9LFxuXG4gIHNob3dUcmF2ZWxlclRyaXBzKHRyaXBzKSB7ICAgICAgICBcbiAgICB0aGlzLnRyYXZlbGVyLmFkZFRyaXBzKHRyaXBzKTsgICAgICAgIFxuICAgIHRoaXMucmVtb3ZlVHJpcHMoKTsgICAgICAgIFxuICAgIGxldCBzb3J0ZWRUcmlwcyA9IHRoaXMuc29ydFRyaXBzQnlEYXRlKHRoaXMudHJhdmVsZXIudHJpcHMpOyAgICAgICAgXG4gICAgbGV0IHRyaXBXaWRnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJpcHMtZGlzcGxheScpO1xuICAgIHNvcnRlZFRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBsZXQgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9ucy5maW5kKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgICAgcmV0dXJuIHRyaXAuZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb24uaWQ7XG4gICAgICB9KTtcbiAgICAgIHRyaXAuZGF0ZSA9IHRoaXMucHJldHRpZnlUcmlwRGF0ZSh0cmlwLmRhdGUpO1xuICAgICAgbGV0IHRyaXBJbmZvID0gYFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J3RyaXAnIHR5cGU9J2J1dHRvbic+XG4gICAgICAgICAgICAgICAgICAgIDxoND4ke2Rlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke2Rlc3RpbmF0aW9uLmltYWdlfScgYWx0PScke2Rlc3RpbmF0aW9uLmFsdH0nIGNsYXNzPVwidHJpcC1pbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+RGVwYXJ0dXJlOiAke3RyaXAuZGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRheXM6ICR7dHJpcC5kdXJhdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlRyYXZlbGVyczogJHt0cmlwLnRyYXZlbGVyc308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlN0YXR1czogJHt0cmlwLnN0YXR1c308L3A+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+YDsgICBcbiAgICAgIHRoaXMuZGlzcGxheVRyaXAodHJpcFdpZGdldCwgdHJpcEluZm8pO1xuICAgIH0pOyAgICAgICAgXG4gIH0sXG5cbiAgc2hvd0FnZW50V2lkZ2V0cygpIHtcbiAgICBjb25zdCBhZ2VudEluY29tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZ2VudC1pbmNvbWUnKTtcbiAgICBjb25zdCBjdXJyZW50VHJhdmVsZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtdHJhdmVsZXJzJyk7XG4gICAgY29uc3QgYWdlbnRTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZC10cmF2ZWxlcicpO1xuICAgIGNvbnN0IHBlbmRpbmdUcmlwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZW5kaW5nLXRyaXBzJylcbiAgICBjb25zdCBsb2dJbldpZGdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi13aWRnZXQnKTtcbiAgICBjb25zdCBsb2dPdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nLW91dCcpO1xuICAgIGxvZ0luV2lkZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGFnZW50SW5jb21lLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGN1cnJlbnRUcmF2ZWxlcnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgYWdlbnRTZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcGVuZGluZ1RyaXBzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGxvZ091dEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfSxcblxuICBzaG93UGVuZGluZ1RyaXBzKHRyaXBzKSB7XG4gICAgbGV0IHBlbmRpbmcgPSB0aGlzLnRyYXZlbEFnZW50LmZpbmRQZW5kaW5nVHJpcHModHJpcHMpO1xuICAgIGxldCBzb3J0ZWRQZW5kaW5nID0gdGhpcy5zb3J0VHJpcHNCeURhdGUocGVuZGluZyk7XG4gICAgY29uc3QgZGlzcGxheVRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlbmRpbmctdHJpcHMnKTtcbiAgICBzb3J0ZWRQZW5kaW5nLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBsZXQgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9ucy5maW5kKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgICAgcmV0dXJuIHRyaXAuZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb24uaWQ7XG4gICAgICB9KTtcbiAgICAgIHRyaXAuZGF0ZSA9IHRoaXMucHJldHRpZnlUcmlwRGF0ZSh0cmlwLmRhdGUpO1xuICAgICAgY29uc3QgdHJpcEhUTUwgPSBgXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz0ndHJpcCcgaWQ9JyR7dHJpcC5pZH0nPlxuICAgICAgICAgICAgICAgIDxoND4ke3RoaXMuZmluZFVzZXJOYW1lKHRyaXAudXNlcklEKX08L2g0PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke2Rlc3RpbmF0aW9uLmltYWdlfScgYWx0PScke2Rlc3RpbmF0aW9uLmFsdH0nIGNsYXNzPVwidHJpcC1pbWFnZVwiLz5cbiAgICAgICAgICAgICAgICA8cD4ke3RyaXAuZGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+RGVzdGluYXRpb246ICR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259PC9wPiBcbiAgICAgICAgICAgICAgICA8cD5EdXJhdGlvbjogJHt0cmlwLmR1cmF0aW9ufSBkYXlzPC9wPlxuICAgICAgICAgICAgICAgIDxwPldhbGtlcnM6ICR7dHJpcC50cmF2ZWxlcnN9PC9wPlxuICAgICAgICAgICAgICAgIDxwPlN0YXR1czogJHt0cmlwLnN0YXR1c308L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYXBwcm92ZS10cmlwJz5BcHByb3ZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nZGVsZXRlLXRyaXAnPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9hcnRpY2xlPmA7XG4gICAgICB0aGlzLmRpc3BsYXlUcmlwKGRpc3BsYXlUbywgdHJpcEhUTUwpO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbW92ZVRyaXBzKCkge1xuICAgIGxldCB0cmlwQ2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0cmlwJyk7XG4gICAgd2hpbGUgKHRyaXBDYXJkc1swXSkge1xuICAgICAgdHJpcENhcmRzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodHJpcENhcmRzWzBdKTtcbiAgICB9XG4gIH0sXG5cbiAgZGVsZXRlVHJpcChldmVudCkge1xuICAgIGxldCBhcnRpY2xlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50cmlwJyk7XG4gICAgYXJ0aWNsZS5pbm5lckhUTUwgPSBgPGg0PkRlbGV0ZWQhPC9oND5gXG4gIH0sXG5cbiAgYXBwcm92ZVRyaXAoZXZlbnQpIHtcbiAgICBsZXQgYXJ0aWNsZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudHJpcCcpO1xuICAgIGFydGljbGUuaW5uZXJIVE1MID0gYDxoND5BcHByb3ZlZCE8L2g0PmBcbiAgfSxcblxuICBmaW5kVXNlck5hbWUoaWQpIHtcbiAgICBsZXQgdXNlciA9IHRoaXMudXNlcnMuZmluZCh1c2VyID0+IHVzZXIuaWQgPT09IGlkKTtcbiAgICByZXR1cm4gdXNlci5uYW1lO1xuICB9LFxuXG4gIHNob3dBZ2VudEluY29tZShkZXN0aW5hdGlvbnMpIHtcbiAgICBjb25zdCBpbmNvbWUgPSB0aGlzLnRyYXZlbEFnZW50LmNhbGN1bGF0ZUluY29tZShkZXN0aW5hdGlvbnMpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbW91bnQtZWFybmVkJykuaW5uZXJUZXh0ID0gYCQke3RoaXMucHJldHRpZnlNb25leU51bWJlcnMoaW5jb21lKX1gXG4gIH0sXG5cbiAgc2hvd0N1cnJlbnRUcmF2ZWxlcnMoKSB7XG4gICAgY29uc3QgdHJhdmVsZXJzID0gdGhpcy50cmF2ZWxBZ2VudC5maW5kVG9kYXlzVHJhdmVsZXJzKHRoaXMudHJpcHMsIHRoaXMudG9kYXkpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5cy10cmF2ZWxlcnMnKS5pbm5lclRleHQgPSBgJHt0cmF2ZWxlcnMubGVuZ3RofWA7XG4gIH0sXG5cbiAgZGlzcGxheVdlbGNvbWUodXNlcikge1xuICAgIGxldCB3ZWxjb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbWUnKTtcbiAgICBpZiAodXNlciA9PT0gJ3RyYXZlbGVyJykge1xuICAgICAgbGV0IGZpcnN0TmFtZSA9IHRoaXMudHJhdmVsZXIubmFtZS5zcGxpdChcIiBcIilbMF1cbiAgICAgIHdlbGNvbWUuaW5uZXJUZXh0ID0gYFdlbGNvbWUsICR7Zmlyc3ROYW1lfSFgXG4gICAgfSBlbHNlIGlmICh1c2VyID09PSAnYWdlbnQnKSB7XG4gICAgICB3ZWxjb21lLmlubmVyVGV4dCA9ICdXZWxjb21lLCBXaWxidXIhJztcbiAgICB9XG4gIH0sXG5cbiAgc29ydFRyaXBzQnlEYXRlKHRyaXBzVG9Tb3J0KSB7XG4gICAgcmV0dXJuIHRyaXBzVG9Tb3J0Lm1hcCh0cmlwID0+IHtcbiAgICAgIHRyaXAuZGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSk7XG4gICAgICByZXR1cm4gdHJpcDtcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYi5kYXRlIC0gYS5kYXRlO1xuICAgIH0pOyAgICAgICBcbiAgfSxcblxuICBkaXNwbGF5VHJpcCh0cmlwV2lkZ2V0LCB0cmlwSW5mbykge1xuICAgIHRyaXBXaWRnZXQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0cmlwSW5mbyk7XG4gIH0sXG5cbiAgZGlzcGxheUVzdGltYXRlZENvc3QoY29zdCkge1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29zdC1idXR0b24nKTtcbiAgICBsZXQgbmV3SFRNTCA9IGBcbiAgICAgICAgPGRpdiBpZD1cImNvc3QtZGlzcGxheVwiPlxuICAgICAgICA8aDQ+RXN0aW1hdGVkIENvc3QgKDEwJSBmZWUgaW5jbHVkZWQpOiAkJHt0aGlzLnByZXR0aWZ5TW9uZXlOdW1iZXJzKGNvc3QpfTwvaDQ+XG4gICAgICAgIGA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGJ1dHRvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgbmV3SFRNTCk7IFxuICB9LFxuXG4gIGNsZWFyQm9va2luZ0Zvcm1JbnB1dHMoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2stZGVzdGluYXRpb24nKS52YWx1ZSA9ICcnOyBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vay10cmF2ZWxlcnMnKS52YWx1ZSA9ICcnOyAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vay1kZXBhcnR1cmUnKS52YWx1ZSA9ICcnOyAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vay1kdXJhdGlvbicpLnZhbHVlID0gJyc7XG4gIH0sXG5cbiAgZGlzcGxheVNlYXJjaGVkVXNlckluZm8oKSB7XG4gICAgdGhpcy50cmF2ZWxlci5hZGRUcmlwcyh0aGlzLnRyaXBzKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZC10cmF2ZWxlcicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcmVzdWx0cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGxldCB0cmF2ZWxlckV4cGVuc2VzID0gdGhpcy50cmF2ZWxlci5jYWxjdWxhdGVUb3RhbFRyYXZlbEV4cGVuc2VzKHRoaXMuZGVzdGluYXRpb25zKTtcbiAgICB0cmF2ZWxlckV4cGVuc2VzID0gdGhpcy5wcmV0dGlmeU1vbmV5TnVtYmVycyh0cmF2ZWxlckV4cGVuc2VzKTtcbiAgICBsZXQgdHJhdmVsZXJJbmZvU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcmVzdWx0cycpO1xuICAgIHRyYXZlbGVySW5mb1NlY3Rpb24uaW5uZXJIVE1MID0gYFxuICAgICAgICA8c2VjdGlvbiBpZD0nc2VhcmNoLXJlc3VsdHMnIGNsYXNzPSdtYWluLXdpZGdldCc+XG4gICAgICAgIDxoMiBjbGFzcz0ndHJpcHMtaGVhZGVyJz4ke3RoaXMudHJhdmVsZXIubmFtZX08L2gyPlxuICAgICAgICA8cD5Ub3RhbCBzcGVudCBvbiB0cmF2ZWw6ICQke3RyYXZlbGVyRXhwZW5zZXN9PC9wPlxuICAgICAgICA8aDQ+VHJpcHM6PC9oND5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9J3NlYXJjaGVkLXRyaXBzJz48L3NlY3Rpb24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9J2Nsb3NlLXNlYXJjaCc+QmFjayB0byBTZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICBgO1xuICAgIHRoaXMuZGlzcGxheVNlYXJjaGVkVHJpcHMoKTtcbiAgfSxcblxuICBjbG9zZVNlYXJjaCgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZC10cmF2ZWxlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS5yZXNldCgpO1xuICB9LFxuXG4gIGRpc3BsYXlTZWFyY2hlZFRyaXBzKCkge1xuICAgIGxldCBzZWFyY2hlZFRyaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaGVkLXRyaXBzJyk7XG4gICAgbGV0IHNvcnRlZFRyaXBzID0gdGhpcy5zb3J0VHJpcHNCeURhdGUodGhpcy50cmF2ZWxlci50cmlwcyk7XG4gICAgc29ydGVkVHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgIGxldCBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb25zLmZpbmQoZGVzdGluYXRpb24gPT4ge1xuICAgICAgICByZXR1cm4gdHJpcC5kZXN0aW5hdGlvbklEID09PSBkZXN0aW5hdGlvbi5pZDtcbiAgICAgIH0pO1xuICAgICAgdHJpcC5kYXRlID0gdGhpcy5wcmV0dGlmeVRyaXBEYXRlKHRyaXAuZGF0ZSk7XG4gICAgICBpZiAodHJpcC5zdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgICAgICB0aGlzLmluc2VydFBlbmRpbmdIVE1MKGRlc3RpbmF0aW9uLCB0cmlwLCBzZWFyY2hlZFRyaXBzKTtcbiAgICAgIH0gZWxzZSBpZiAodHJpcC5zdGF0dXMgPT09ICdhcHByb3ZlZCcpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRBcHByb3ZlZEhUTUwoZGVzdGluYXRpb24sIHRyaXAsIHNlYXJjaGVkVHJpcHMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGluc2VydFBlbmRpbmdIVE1MKGRlc3RpbmF0aW9uLCB0cmlwLCBzZWFyY2hlZFRyaXBzKSB7XG4gICAgc2VhcmNoZWRUcmlwcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICAgICAgPGFydGljbGUgY2xhc3M9J3RyaXAnIGlkPScke3RyaXAuaWR9Jz5cbiAgICAgICAgICAgIDxoND4ke2Rlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufTwvaDQ+XG4gICAgICAgICAgICA8cD5EZXBhcnR1cmU6ICR7dHJpcC5kYXRlfTwvcD5cbiAgICAgICAgICAgIDxwPkR1cmF0aW9uOiAke3RyaXAuZHVyYXRpb259IGRheXM8L3A+XG4gICAgICAgICAgICA8cD5XYWxrZXJzOiAke3RyaXAudHJhdmVsZXJzfTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2FwcHJvdmUtdHJpcCc+QXBwcm92ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nZGVsZXRlLXRyaXAnPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIGApO1xuICB9LFxuXG4gIGluc2VydEFwcHJvdmVkSFRNTChkZXN0aW5hdGlvbiwgdHJpcCwgc2VhcmNoZWRUcmlwcykge1xuICAgIHNlYXJjaGVkVHJpcHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPSd0cmlwJyBpZD0nJHt0cmlwLmlkfSc+XG4gICAgICAgICAgICA8aDQ+JHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn08L2g0PlxuICAgICAgICAgICAgPHA+RGVwYXJ0dXJlOiAke3RyaXAuZGF0ZX08L3A+XG4gICAgICAgICAgICA8cD5EdXJhdGlvbjogJHt0cmlwLmR1cmF0aW9ufSBkYXlzPC9wPlxuICAgICAgICAgICAgPHA+V2Fsa2VyczogJHt0cmlwLnRyYXZlbGVyc308L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdkZWxldGUtdHJpcCc+RGVsZXRlPC9idXR0b24+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgYCk7XG4gIH0sXG5cbiAgcHJldHRpZnlNb25leU51bWJlcnMoZG9sbGFycykge1xuICAgIGxldCBwcmV0dHlEb2xsYXJzID0gZG9sbGFycy50b0ZpeGVkKDIpLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKD8hXFxkKSkvZywgXCIkMSxcIik7XG4gICAgcmV0dXJuIHByZXR0eURvbGxhcnM7XG4gIH0sXG5cbiAgcHJldHRpZnlUcmlwRGF0ZShkYXRlKSB7XG4gICAgbGV0IHByZXR0eURhdGUgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LyR7ZGF0ZS5nZXRNb250aCgpfS8ke2RhdGUuZ2V0RGF0ZSgpfWA7XG4gICAgcmV0dXJuIHByZXR0eURhdGU7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbVVwZGF0ZXM7IiwiaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBUcmF2ZWxlciBmcm9tICcuL1RyYXZlbGVyJztcbmltcG9ydCBUcmF2ZWxBZ2VudCBmcm9tICcuL1RyYXZlbEFnZW50JztcbmltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4uL3NyYy9kb21VcGRhdGVzJztcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcblxubGV0IHVzZXIgPSBuZXcgVXNlcigpO1xubGV0IHRyYXZlbEFnZW50O1xubGV0IHRyYXZlbGVyO1xubGV0IHVzZXJzO1xubGV0IGRlc3RpbmF0aW9ucztcbmxldCB0cmlwcztcbmxldCBmdWxsVHJpcEluZm87XG5jb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1idXR0b24nKTtcbmNvbnN0IGdldFRyaXBDb3N0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvc3QtYnV0dG9uJyk7XG5jb25zdCBib29rVHJpcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLWJ1dHRvbicpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG5jb25zdCBsb2dPdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nLW91dCcpO1xuXG5sb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYXR0ZW1wdExvZ2luKClcbn0pO1xuZ2V0VHJpcENvc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGdldEJvb2tUcmlwSW5mbygpXG59KTtcbmJvb2tUcmlwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBhZGRUcmlwVG9BUEkoZnVsbFRyaXBJbmZvKTtcbiAgZG9tVXBkYXRlcy5jbGVhckJvb2tpbmdGb3JtSW5wdXRzKCk7XG59KTtcbm1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1hbmFnZVRyaXBSZXF1ZXN0KGV2ZW50KTtcbiAgc2VhcmNoRm9yQ2xpZW50KGV2ZW50KTsgXG4gIGNsb3NlU2VhcmNoKGV2ZW50KTtcbn0pO1xubG9nT3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBsb2dPdXQoKSBcbn0pO1xuXG5Qcm9taXNlLmFsbChbXG4gIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXIvZGF0YS90cmF2ZWxlcnMvdHJhdmVsZXJzLycpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSxcbiAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlci9kYXRhL3RyaXBzL3RyaXBzJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLFxuICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyL2RhdGEvZGVzdGluYXRpb25zL2Rlc3RpbmF0aW9ucycpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuXSlcbiAgLnRoZW4oZGF0YSA9PiBjcmVhdGVEYXRhc2V0cyhkYXRhWzBdLCBkYXRhWzFdLCBkYXRhWzJdKSlcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXG5cbmNvbnN0IGNyZWF0ZURhdGFzZXRzID0gKHVzZXJEYXRhLCB0cmlwc0RhdGEsIGRlc3RpbmF0aW9uRGF0YSkgPT4ge1xuICB1c2VycyA9IHVzZXJEYXRhLnRyYXZlbGVycztcbiAgdHJpcHMgPSB0cmlwc0RhdGEudHJpcHM7XG4gIGRlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9uRGF0YS5kZXN0aW5hdGlvbnM7XG4gIGxldCBkYXRlID0gZ2V0VG9kYXlzRGF0ZSgpOyAgIFxuICBkb21VcGRhdGVzLmltcG9ydERhdGEodXNlcnMsIHRyaXBzLCBkZXN0aW5hdGlvbnMsIGRhdGUpOyAgICBcbn1cblxuY29uc3QgZ2V0VG9kYXlzRGF0ZSA9ICgpID0+IHtcbiAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgdG9kYXkgPSBgJHt0b2RheS5nZXRNb250aCgpfS8ke3RvZGF5LmdldERhdGUoKX0vJHt0b2RheS5nZXRGdWxsWWVhcigpfWBcbiAgcmV0dXJuIHRvZGF5O1xufVxuXG5jb25zdCBhdHRlbXB0TG9naW4gPSAoKSA9PiB7XG4gIGxldCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lLWlucHV0JykudmFsdWU7XG4gIGxldCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLWlucHV0JykudmFsdWU7XG4gIGxldCBuZXdJRCA9IHJldHJpZXZlVXNlcklEKHVzZXJuYW1lSW5wdXQpO1xuICBpZiAobmV3SUQpIHtcbiAgICBjcmVhdGVVc2VyKG5ld0lEKTtcbiAgICB1c2VyLmxvZ0luKHBhc3N3b3JkSW5wdXQpO1xuICAgIGNoZWNrTG9nSW5TdGF0dXMoKTtcbiAgfVxufVxuXG5jb25zdCByZXRyaWV2ZVVzZXJJRCA9ICh1c2VybmFtZSkgPT4ge1xuICBpZiAodXNlcm5hbWUgPT09ICdhZ2VuY3knKSB7XG4gICAgcmV0dXJuICdhZ2VuY3knO1xuICB9IGVsc2UgaWYgKHVzZXJuYW1lLmluY2x1ZGVzKCd0cmF2ZWxlcicpKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHVzZXJuYW1lLnN1YnN0cig4KSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVVc2VyID0gKG5ld0lEKSA9PiB7XG4gIGlmIChuZXdJRCA9PT0gJ2FnZW5jeScpIHtcbiAgICB0cmF2ZWxBZ2VudCA9IG5ldyBUcmF2ZWxBZ2VudChuZXdJRCk7XG4gICAgdHJhdmVsQWdlbnQuYWRkVHJpcHModHJpcHMpO1xuICAgIHVzZXIuY2hhbmdlVHlwZSgnYWdlbnQnKTtcbiAgICBkb21VcGRhdGVzLmNyZWF0ZURvbVVzZXIodHJhdmVsQWdlbnQpO1xuICAgIHJldHVybiB0cmF2ZWxBZ2VudDtcbiAgfSBlbHNlIHtcbiAgICBsZXQgdXNlckluZm8gPSBmaW5kdXNlckJ5SUQobmV3SUQpO1xuICAgIHRyYXZlbGVyID0gbmV3IFRyYXZlbGVyKHVzZXJJbmZvKTtcbiAgICB1c2VyLmNoYW5nZVR5cGUoJ3RyYXZlbGVyJyk7XG4gICAgZG9tVXBkYXRlcy5jcmVhdGVEb21Vc2VyKHRyYXZlbGVyKTtcbiAgICByZXR1cm4gdHJhdmVsZXI7XG4gIH1cbn1cblxuY29uc3QgY2hlY2tMb2dJblN0YXR1cyA9ICgpID0+IHtcbiAgaWYgKHVzZXIubG9nZ2VkSW4gPT09IHRydWUpIHtcbiAgICBzaG93RGFzaGJvYXJkKHVzZXIpO1xuICB9XG59XG5cbmNvbnN0IHNob3dEYXNoYm9hcmQgPSAodXNlcikgPT4ge1xuICBpZiAodXNlci50eXBlID09PSAndHJhdmVsZXInKSB7XG4gICAgc2hvd1RyYXZlbGVyRGFzaGJvYXJkKCk7XG4gIH0gZWxzZSBpZiAodXNlci50eXBlID09PSAnYWdlbnQnKSB7XG4gICAgc2hvd0FnZW50RGFzaGJvYXJkKCk7XG4gIH1cbn1cblxuY29uc3Qgc2hvd1RyYXZlbGVyRGFzaGJvYXJkID0gKCkgPT4ge1xuICBkb21VcGRhdGVzLnVwZGF0ZURlc3RpbmF0aW9uc0Ryb3Bkb3duKGRlc3RpbmF0aW9ucyk7XG4gIGRvbVVwZGF0ZXMuc2hvd1RyYXZlbGVyV2lkZ2V0cygpO1xuICBkb21VcGRhdGVzLnNob3dUcmF2ZWxlclRyaXBzKHRyaXBzKTtcbiAgZG9tVXBkYXRlcy5zaG93VHJhdmVsZXJFeHBlbnNlcyhkZXN0aW5hdGlvbnMpO1xuICBkb21VcGRhdGVzLmRpc3BsYXlXZWxjb21lKCd0cmF2ZWxlcicpO1xufVxuXG5jb25zdCBzaG93QWdlbnREYXNoYm9hcmQgPSAoKSA9PiB7XG4gIGRvbVVwZGF0ZXMuc2hvd0FnZW50V2lkZ2V0cygpO1xuICBkb21VcGRhdGVzLnNob3dBZ2VudEluY29tZShkZXN0aW5hdGlvbnMpO1xuICBkb21VcGRhdGVzLnNob3dDdXJyZW50VHJhdmVsZXJzKHRyaXBzKTtcbiAgZG9tVXBkYXRlcy5zaG93UGVuZGluZ1RyaXBzKHRyaXBzKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5V2VsY29tZSgnYWdlbnQnKTtcbn1cblxuY29uc3QgZmluZHVzZXJCeUlEID0gKGlkKSA9PiB7XG4gIHJldHVybiB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gaWQpO1xufVxuXG5jb25zdCBnZXRCb29rVHJpcEluZm8gPSAoKSA9PiB7XG4gIGxldCBpZCA9IERhdGUubm93KCk7XG4gIGxldCB1c2VySUQgPSB0cmF2ZWxlci5pZDsgICAgXG4gIGxldCBkZXN0aW5hdGlvblNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rLWRlc3RpbmF0aW9uJykudmFsdWU7IFxuICBsZXQgdHJhdmVsZXJzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vay10cmF2ZWxlcnMnKS52YWx1ZTsgICAgXG4gIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vay1kZXBhcnR1cmUnKS52YWx1ZTsgICAgXG4gIGxldCBkdXJhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2stZHVyYXRpb24nKS52YWx1ZTsgICAgXG4gIGRlc3RpbmF0aW9uU2VsZWN0aW9uID0gZmluZERlc3RpbmF0aW9uRnJvbU5hbWUoZGVzdGluYXRpb25TZWxlY3Rpb24pO1xuICBsZXQgcmVmb3JtYXR0ZWREYXRlID0gZGF0ZUlucHV0LnJlcGxhY2UoLy0vZ2ksICcvJyk7XG4gIGZ1bGxUcmlwSW5mbyA9IHtcbiAgICBpZCxcbiAgICB1c2VySUQsXG4gICAgZGVzdGluYXRpb25JRDogZGVzdGluYXRpb25TZWxlY3Rpb24uaWQsXG4gICAgdHJhdmVsZXJzOiBwYXJzZUludCh0cmF2ZWxlcnNJbnB1dCksXG4gICAgZGF0ZTogcmVmb3JtYXR0ZWREYXRlLFxuICAgIGR1cmF0aW9uOiBwYXJzZUludChkdXJhdGlvbklucHV0KSxcbiAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICBzdWdnZXN0ZWRBY3Rpdml0aWVzOiBbXSxcbiAgfTtcbiAgbGV0IGVzdGltYXRlZENvc3QgPSBnZXRDb3N0KGRlc3RpbmF0aW9uU2VsZWN0aW9uLCBkdXJhdGlvbklucHV0LCB0cmF2ZWxlcnNJbnB1dCk7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheUVzdGltYXRlZENvc3QoZXN0aW1hdGVkQ29zdCk7XG59XG5cbmNvbnN0IGFkZFRyaXBUb0FQSSA9ICh0cmlwSW5mbykgPT4ge1xuICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyL2RhdGEvdHJpcHMvdHJpcHMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodHJpcEluZm8pXG4gIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxuICBmZXRjaFRyaXBzKCk7XG4gIGRvbVVwZGF0ZXMucmVzZXRCb29raW5nRm9ybSgpO1xuICBkb21VcGRhdGVzLnVwZGF0ZVRyaXBzKHRyaXBzLCBbdHJpcEluZm9dKTtcbn1cblxuY29uc3QgZmV0Y2hUcmlwcyA9ICgpID0+IHtcbiAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlci9kYXRhL3RyaXBzL3RyaXBzLycpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gYWRkTmV3VHJpcHMoZGF0YS50cmlwcykpXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpICAgIFxufVxuXG5jb25zdCBhZGROZXdUcmlwcyA9IChuZXdUcmlwcykgPT4ge1xuICB0cmlwcyA9IG5ld1RyaXBzLnRyaXBzOyAgIFxufVxuXG5jb25zdCBmaW5kRGVzdGluYXRpb25Gcm9tTmFtZSA9IChkZXN0aW5hdGlvbk5hbWUpID0+IHtcbiAgbGV0IGZ1bGxEZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9ucy5maW5kKGRlc3RpbmF0aW9uID0+IHtcbiAgICByZXR1cm4gZGVzdGluYXRpb24uZGVzdGluYXRpb24gPT09IGRlc3RpbmF0aW9uTmFtZVxuICB9KTtcbiAgcmV0dXJuIGZ1bGxEZXN0aW5hdGlvbjtcbn1cblxuY29uc3QgZ2V0Q29zdCA9IChkZXN0aW5hdGlvbiwgZHVyYXRpb24sIHRyYXZlbGVycykgPT4ge1xuICBsZXQgbG9kZ2luZyA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICogZHVyYXRpb247XG4gIGxldCBmbGlnaHRzID0gZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiAqIHRyYXZlbGVycztcbiAgbGV0IHRvdGFsID0gbG9kZ2luZyArIGZsaWdodHM7XG4gIHJldHVybiB0b3RhbCArICh0b3RhbCAqIC4xKTtcbn1cblxuY29uc3QgbWFuYWdlVHJpcFJlcXVlc3QgPSAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdhcHByb3ZlLXRyaXAnKSB7XG4gICAgYXBwcm92ZVRyaXAoZXZlbnQpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdkZWxldGUtdHJpcCcpIHtcbiAgICBkZWxldGVUcmlwKGV2ZW50KTtcbiAgfVxufVxuXG5jb25zdCBhcHByb3ZlVHJpcCA9IChldmVudCkgPT4ge1xuICBsZXQgdHJpcElEID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50cmlwJykuaWQ7XG4gIGxldCB0cmlwVG9Qb3N0ID0ge1xuICAgIFwiaWRcIjogcGFyc2VJbnQodHJpcElEKSxcbiAgICBcInN0YXR1c1wiOiBcImFwcHJvdmVkXCJcbiAgfVxuICBwb3N0VHJpcEFwcHJvdmFsKHRyaXBUb1Bvc3QpO1xuICBkb21VcGRhdGVzLmFwcHJvdmVUcmlwKGV2ZW50KTsgXG59XG5cbmNvbnN0IHBvc3RUcmlwQXBwcm92YWwgPSAodHJpcFRvUG9zdCkgPT4ge1xuICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyL2RhdGEvdHJpcHMvdXBkYXRlVHJpcCcsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0cmlwVG9Qb3N0KVxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcbn1cblxuY29uc3QgZGVsZXRlVHJpcCA9IChldmVudCkgPT4ge1xuICBsZXQgdHJpcElEID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50cmlwJykuaWQ7XG4gIGxldCB0cmlwVG9EZWxldGUgPSB7XG4gICAgaWQ6IHBhcnNlSW50KHRyaXBJRClcbiAgfVxuICBkb21VcGRhdGVzLmRlbGV0ZVRyaXAoZXZlbnQpO1xuICBkZWxldGVUcmlwRnJvbUFQSSh0cmlwVG9EZWxldGUpO1xufVxuXG5jb25zdCBkZWxldGVUcmlwRnJvbUFQSSA9ICh0cmlwVG9EZWxldGUpID0+IHtcbiAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlci9kYXRhL3RyaXBzL3RyaXBzJywge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodHJpcFRvRGVsZXRlKVxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcbn1cblxuY29uc3Qgc2VhcmNoRm9yQ2xpZW50ID0gKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc2VhcmNoLWJ1dHRvbicpIHtcbiAgICBsZXQgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJhcicpLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGZvdW5kVXNlciA9IHVzZXJzLmZpbmQodXNlciA9PiB7XG4gICAgICByZXR1cm4gdXNlci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoSW5wdXQpO1xuICAgIH0pO1xuICAgIHRyYXZlbGVyID0gbmV3IFRyYXZlbGVyKGZvdW5kVXNlcik7XG4gICAgZG9tVXBkYXRlcy5jcmVhdGVUcmF2ZWxlcih0cmF2ZWxlcik7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5U2VhcmNoZWRVc2VySW5mbyhmb3VuZFVzZXIpO1xuICB9ICAgIFxufVxuXG5jb25zdCBjbG9zZVNlYXJjaCA9IChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2Nsb3NlLXNlYXJjaCcpIHtcbiAgICBkb21VcGRhdGVzLmNsb3NlU2VhcmNoKGV2ZW50KTtcbiAgfVxufVxuXG5jb25zdCBsb2dPdXQgPSAoKSA9PiB7XG4gIGxvY2F0aW9uLnJlbG9hZCgpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==