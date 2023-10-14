/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root,
html body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  --color-white: hsl(0, 0%, 100%);
  --color-black: hsl(0, 0%, 4%);
  --color-light: hsl(0, 0%, 96%);
  --color-dark: hsl(0, 0%, 21%);
  --color-primary: hsl(171, 100%, 41%);
  --color-link: hsl(217, 71%, 53%);
  --color-info: hsl(204, 86%, 53%);
  --color-success: hsl(141, 53%, 53%);
  --color-warning: hsl(48, 100%, 67%);
  --color-danger: hsl(348, 100%, 61%);
  --border-radius: 5px;
}

.container {
  width: 100%;
  height: 100%;
}

.navbar {
  width: 100%;
  height: 50px;
  background-color: var(--color-dark);
}

.content {
  width: 100%;
  height: 100%;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
.navbar .navbar-item {
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-success);
  color: var(--color-light);
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 5px;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home .banner p {
  font-size: 2rem;
  font-weight: bold;
}
.home .banner img {
  height: 100px;
}

.menu .menu-item img {
  height: 170px;
  aspect-ratio: 1;
  object-fit: scale-down;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;;EAGE,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EAGA,yCAAA;EACA,eAAA;EAGA,+BAAA;EACA,6BAAA;EACA,8BAAA;EACA,6BAAA;EACA,oCAAA;EACA,gCAAA;EACA,gCAAA;EACA,mCAAA;EACA,mCAAA;EACA,mCAAA;EAGA,oBAAA;AARF;;AAaA;EACE,WAAA;EACA,YAAA;AAVF;;AAaA;EACE,WAAA;EACA,YAAA;EACA,mCAAA;AAVF;;AAaA;EACE,WAAA;EACA,YAAA;AAVF;;AAeA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAZF;AAcE;EACE,YAAA;EACA,YAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,sCAAA;EACA,yBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;AAdJ;;AAoBA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAjBF;AAoBI;EACE,eAAA;EACA,iBAAA;AAlBN;AAqBI;EACE,aAAA;AAnBN;;AA4BI;EACE,aAAA;EACA,eAAA;EACA,sBAAA;AAzBN","sourcesContent":["// GENERAL\n\n:root,\nhtml body {\n  // Layout\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n\n  // Typography\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n\n  // Color presets\n  --color-white: hsl(0, 0%, 100%);\n  --color-black: hsl(0, 0%, 4%);\n  --color-light: hsl(0, 0%, 96%);\n  --color-dark: hsl(0, 0%, 21%);\n  --color-primary: hsl(171, 100%, 41%);\n  --color-link: hsl(217, 71%, 53%);\n  --color-info: hsl(204, 86%, 53%);\n  --color-success: hsl(141, 53%, 53%);\n  --color-warning: hsl(48, 100%, 67%);\n  --color-danger: hsl(348, 100%, 61%);\n\n  // Borders\n  --border-radius: 5px;\n}\n\n// BASE LAYOUT\n\n.container {\n  width: 100%;\n  height: 100%;\n}\n\n.navbar {\n  width: 100%;\n  height: 50px;\n  background-color: var(--color-dark);\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n}\n\n// NAVBAR\n\n.navbar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n\n  .navbar-item {\n    width: 100px;\n    height: 30px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background-color: var(--color-success);\n    color: var(--color-light);\n    font-size: 1.4rem;\n    font-weight: bold;\n    border-radius: 5px;\n  }\n}\n\n// HOME TAB\n\n.home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .banner {\n    p {\n      font-size: 2rem;\n      font-weight: bold;\n    }\n\n    img {\n      height: 100px;\n    }\n  }\n}\n\n// MENU TAB\n\n.menu {\n  .menu-item {\n    img {\n      height: 170px;\n      aspect-ratio: 1;\n      object-fit: scale-down;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/content/contact.js":
/*!********************************!*\
  !*** ./src/content/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadPage: () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/helper */ "./src/util/helper.js");
/* harmony import */ var _res_img_director_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../res/img/director.jpg */ "./src/res/img/director.jpg");
/* harmony import */ var _res_img_chef_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../res/img/chef.jpg */ "./src/res/img/chef.jpg");
/* harmony import */ var _res_img_waiter_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../res/img/waiter.jpg */ "./src/res/img/waiter.jpg");

// import BurgerImage from '../res/img/burger.jpg';




const createEmployee = (name, image, role, number, email) => {
  const employee = document.createElement('div');
  employee.classList.add('menu-item');

  const employeeImage = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(employee, 'img');
  employeeImage.src = image;

  const employeeName = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(employee, 'h4');
  employeeName.textContent = name;

  const employeeRole = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(employee, 'p');
  employeeRole.textContent = role;

  const employeeNumber = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(employee, 'p');
  employeeNumber.textContent = number;

  const employeeEmail = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(employee, 'p');
  employeeEmail.textContent = email;

  return employee;
};

const loadPage = (parent) => {
  parent.replaceChildren();

  // Create layout
  const pageDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(parent, 'div', 'page menu');
  const bannerDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(pageDiv, 'div', 'banner');

  // Add content
  const bannerText = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(bannerDiv, 'p');
  bannerText.textContent = 'Contact Us';

  let employee = createEmployee(
    'Ryder Tindal',
    _res_img_director_jpg__WEBPACK_IMPORTED_MODULE_1__,
    'Director',
    'RyderTindal@armyspy.com',
    '(02) 4038 8409'
  );
  pageDiv.appendChild(employee);

  employee = createEmployee(
    'Harrison Humffray',
    _res_img_chef_jpg__WEBPACK_IMPORTED_MODULE_2__,
    'Chef',
    'HarrisonHumffray@armyspy.com',
    '(02) 4985 9993'
  );
  pageDiv.appendChild(employee);

  employee = createEmployee(
    'Oliver Larnach',
    _res_img_waiter_jpg__WEBPACK_IMPORTED_MODULE_3__,
    'Waiter',
    'OliverLarnach@armyspy.com',
    '(02) 6160 2324'
  );
  pageDiv.appendChild(employee);
};




/***/ }),

/***/ "./src/content/home.js":
/*!*****************************!*\
  !*** ./src/content/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadPage: () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/helper */ "./src/util/helper.js");
/* harmony import */ var _res_img_burger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../res/img/burger.jpg */ "./src/res/img/burger.jpg");



const loadPage = (parent) => {
  parent.replaceChildren();

  // Create layout
  const pageDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(parent, 'div', 'page home');
  const bannerDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(pageDiv, 'div', 'banner');
  const copyDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(pageDiv, 'div', 'copy');
  const hoursDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(pageDiv, 'div', 'hours');
  const locationDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(pageDiv, 'div', 'location');

  // Add content
  const bannerText = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(bannerDiv, 'p');
  bannerText.textContent = 'Borgir';

  const bannerImage = new Image();
  bannerImage.src = _res_img_burger_jpg__WEBPACK_IMPORTED_MODULE_1__;
  bannerDiv.appendChild(bannerImage);

  const copyText = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(copyDiv, 'p');
  copyText.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum ultricies arcu, ac egestas justo eleifend non. Mauris sed eros et nunc tincidunt dictum. Nam ut ante ut velit tincidunt eleifend. Aenean vitae tortor leo. Morbi ultricies nec massa et mollis.';

  const hoursHeader = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(hoursDiv, 'h2');
  hoursHeader.textContent = 'Hours';

  const hoursList = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(hoursDiv, 'ul');

  const hours = {
    Monday: '9:00AM - 5:00PM',
    Tuesday: '9:00AM - 5:00PM',
    Wednesday: '9:00AM - 5:00PM',
    Thursday: '9:00AM - 5:00PM',
    Friday: '9:00AM - 5:00PM',
    Saturday: 'Closed',
    Sunday: 'Closed',
  };

  for (const day in hours) {
    const e = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(hoursList, 'li');
    e.textContent = hours[day];
  }

  const locationHeader = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(locationDiv, 'h2');
  locationHeader.textContent = 'Location';

  const locationText = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(locationDiv, 'p');
  locationText.textContent = '123 Freeview Dr, Melbourne, VIC, Australia, 3000';
};




/***/ }),

/***/ "./src/content/menu.js":
/*!*****************************!*\
  !*** ./src/content/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadPage: () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/helper */ "./src/util/helper.js");
/* harmony import */ var _res_img_borgir_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../res/img/borgir.jpg */ "./src/res/img/borgir.jpg");
/* harmony import */ var _res_img_bulk_burger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../res/img/bulk-burger.jpg */ "./src/res/img/bulk-burger.jpg");
/* harmony import */ var _res_img_leafy_salad_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../res/img/leafy-salad.jpg */ "./src/res/img/leafy-salad.jpg");

// import BurgerImage from '../res/img/burger.jpg';




const createMenuItem = (name, image, price, description) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const menuItemImage = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(menuItem, 'img');
  menuItemImage.src = image;

  const menuItemName = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(menuItem, 'h4');
  menuItemName.textContent = name;

  const menuItemPrice = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(menuItem, 'p', 'price');
  menuItemPrice.textContent = '$' + price;

  const menuItemDescription = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(menuItem, 'p', 'description');
  menuItemDescription.textContent = description;

  return menuItem;
};

const loadPage = (parent) => {
  parent.replaceChildren();

  // Create layout
  const pageDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(parent, 'div', 'page menu');
  const bannerDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(pageDiv, 'div', 'banner');

  // Add content
  const bannerText = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(bannerDiv, 'p');
  bannerText.textContent = 'Menu';

  let menuItem = createMenuItem(
    'The Borgir',
    _res_img_borgir_jpg__WEBPACK_IMPORTED_MODULE_1__,
    20,
    'For those looking for a feast!'
  );
  pageDiv.appendChild(menuItem);

  menuItem = createMenuItem(
    'The Bulk Burger',
    _res_img_bulk_burger_jpg__WEBPACK_IMPORTED_MODULE_2__,
    12,
    'For those seeking gains!'
  );
  pageDiv.appendChild(menuItem);

  menuItem = createMenuItem(
    'The Leafy Salad',
    _res_img_leafy_salad_jpg__WEBPACK_IMPORTED_MODULE_3__,
    8,
    'For those shredding!'
  );
  pageDiv.appendChild(menuItem);
};




/***/ }),

/***/ "./src/ui/navbar.js":
/*!**************************!*\
  !*** ./src/ui/navbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadNavbar: () => (/* binding */ loadNavbar)
/* harmony export */ });
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/helper */ "./src/util/helper.js");
/* harmony import */ var _content_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/home */ "./src/content/home.js");
/* harmony import */ var _content_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/menu */ "./src/content/menu.js");
/* harmony import */ var _content_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/contact */ "./src/content/contact.js");






const pageFunctions = {
  home: _content_home__WEBPACK_IMPORTED_MODULE_1__.loadPage,
  menu: _content_menu__WEBPACK_IMPORTED_MODULE_2__.loadPage,
  contact: _content_contact__WEBPACK_IMPORTED_MODULE_3__.loadPage,
};

const loadNavbar = (parent) => {
  parent.replaceChildren();

  let navbarItem = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(parent, 'div', 'navbar-item');
  navbarItem.textContent = 'Home';
  navbarItem.dataset.page = 'home';
  navbarItem.addEventListener('click', loadContent);

  navbarItem = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(parent, 'div', 'navbar-item');
  navbarItem.dataset.page = 'menu';
  navbarItem.textContent = 'Menu';
  navbarItem.addEventListener('click', loadContent);

  navbarItem = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(parent, 'div', 'navbar-item');
  navbarItem.dataset.page = 'contact';
  navbarItem.textContent = 'Contact Us';
  navbarItem.addEventListener('click', loadContent);
};

const loadContent = (e) => {
  const navbarDiv = document.querySelector('.navbar');
  const contentDiv = document.querySelector('.content');

  for (const navbarItem of navbarDiv.children) {
    if (navbarItem === e.target) {
      navbarItem.classList.add('active');
    } else {
      navbarItem.classList.remove('active');
    }
  }

  pageFunctions[e.target.dataset.page](contentDiv);
};




/***/ }),

/***/ "./src/util/helper.js":
/*!****************************!*\
  !*** ./src/util/helper.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendChild: () => (/* binding */ appendChild)
/* harmony export */ });
const appendChild = (parentObj, childType, childClass = '') => {
  const childObj = document.createElement(childType);

  let classes =
    typeof childClass === 'string' ? childClass.split(/\s+/) : childClass;

  classes.forEach((cls) => {
    if (cls.length > 0) {
      childObj.classList.add(cls);
    }
  });

  parentObj.appendChild(childObj);
  return childObj;
};




/***/ }),

/***/ "./src/res/img/borgir.jpg":
/*!********************************!*\
  !*** ./src/res/img/borgir.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbc47d2eedb3d827229a.jpg";

/***/ }),

/***/ "./src/res/img/bulk-burger.jpg":
/*!*************************************!*\
  !*** ./src/res/img/bulk-burger.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee89bfdedf9b599b6039.jpg";

/***/ }),

/***/ "./src/res/img/burger.jpg":
/*!********************************!*\
  !*** ./src/res/img/burger.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9dde79c6817293b91628.jpg";

/***/ }),

/***/ "./src/res/img/chef.jpg":
/*!******************************!*\
  !*** ./src/res/img/chef.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "783c7829b682e7001beb.jpg";

/***/ }),

/***/ "./src/res/img/director.jpg":
/*!**********************************!*\
  !*** ./src/res/img/director.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2d19b9cabeaf6bd3a3b.jpg";

/***/ }),

/***/ "./src/res/img/leafy-salad.jpg":
/*!*************************************!*\
  !*** ./src/res/img/leafy-salad.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67a827eb250ed698f286.jpg";

/***/ }),

/***/ "./src/res/img/waiter.jpg":
/*!********************************!*\
  !*** ./src/res/img/waiter.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fe73b537b72e172931d.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/helper */ "./src/util/helper.js");
/* harmony import */ var _ui_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/navbar */ "./src/ui/navbar.js");
/* harmony import */ var _content_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/home */ "./src/content/home.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");



// import { loadPage as loadPageMenu } from './content/menu';
// import { loadPage as loadPageContactUs } from './content/contact';


const createIndex = () => {
  const containerDiv = document.querySelector('.container');

  // Create containers for navbar
  const navbarDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(containerDiv, 'div', 'navbar');
  const contentDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(containerDiv, 'div', 'content');

  // Load navbar
  (0,_ui_navbar__WEBPACK_IMPORTED_MODULE_1__.loadNavbar)(navbarDiv);

  // Load home page
  (0,_content_home__WEBPACK_IMPORTED_MODULE_2__.loadPage)(contentDiv);
  // loadPageMenu(contentDiv);
  // loadPageContactUs(contentDiv);
};

// Create page
createIndex();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBNEM7QUFDSDtBQUNpQjtBQUMxRCxZQUFZLDJCQUEyQjtBQUN2QyxZQUFZLGdDQUFnQztBQUN0Qjs7QUFFdEI7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix5REFBVztBQUMvQixxQkFBcUIseURBQVc7O0FBRWhDO0FBQ0EsRUFBRSxzREFBVTs7QUFFWjtBQUNBLEVBQUUsdURBQVk7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jb250ZW50L2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2NvbnRlbnQvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvY29udGVudC9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy91aS9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3V0aWwvaGVscGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290LFxuaHRtbCBib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAtLWNvbG9yLXdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xuICAtLWNvbG9yLWJsYWNrOiBoc2woMCwgMCUsIDQlKTtcbiAgLS1jb2xvci1saWdodDogaHNsKDAsIDAlLCA5NiUpO1xuICAtLWNvbG9yLWRhcms6IGhzbCgwLCAwJSwgMjElKTtcbiAgLS1jb2xvci1wcmltYXJ5OiBoc2woMTcxLCAxMDAlLCA0MSUpO1xuICAtLWNvbG9yLWxpbms6IGhzbCgyMTcsIDcxJSwgNTMlKTtcbiAgLS1jb2xvci1pbmZvOiBoc2woMjA0LCA4NiUsIDUzJSk7XG4gIC0tY29sb3Itc3VjY2VzczogaHNsKDE0MSwgNTMlLCA1MyUpO1xuICAtLWNvbG9yLXdhcm5pbmc6IGhzbCg0OCwgMTAwJSwgNjclKTtcbiAgLS1jb2xvci1kYW5nZXI6IGhzbCgzNDgsIDEwMCUsIDYxJSk7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5hdmJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1MHB4O1xufVxuLm5hdmJhciAubmF2YmFyLWl0ZW0ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmhvbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhvbWUgLmJhbm5lciBwIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ob21lIC5iYW5uZXIgaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLm1lbnUgLm1lbnUtaXRlbSBpbWcge1xuICBoZWlnaHQ6IDE3MHB4O1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7RUFHRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBR0EseUNBQUE7RUFDQSxlQUFBO0VBR0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFHQSxvQkFBQTtBQVJGOztBQWFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFWRjs7QUFhQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7QUFWRjs7QUFhQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBVkY7O0FBZUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFaRjtBQWNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLHNDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFkSjs7QUFvQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWpCRjtBQW9CSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQWxCTjtBQXFCSTtFQUNFLGFBQUE7QUFuQk47O0FBNEJJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQXpCTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBHRU5FUkFMXFxuXFxuOnJvb3QsXFxuaHRtbCBib2R5IHtcXG4gIC8vIExheW91dFxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgLy8gVHlwb2dyYXBoeVxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7XFxuXFxuICAvLyBDb2xvciBwcmVzZXRzXFxuICAtLWNvbG9yLXdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgLS1jb2xvci1ibGFjazogaHNsKDAsIDAlLCA0JSk7XFxuICAtLWNvbG9yLWxpZ2h0OiBoc2woMCwgMCUsIDk2JSk7XFxuICAtLWNvbG9yLWRhcms6IGhzbCgwLCAwJSwgMjElKTtcXG4gIC0tY29sb3ItcHJpbWFyeTogaHNsKDE3MSwgMTAwJSwgNDElKTtcXG4gIC0tY29sb3ItbGluazogaHNsKDIxNywgNzElLCA1MyUpO1xcbiAgLS1jb2xvci1pbmZvOiBoc2woMjA0LCA4NiUsIDUzJSk7XFxuICAtLWNvbG9yLXN1Y2Nlc3M6IGhzbCgxNDEsIDUzJSwgNTMlKTtcXG4gIC0tY29sb3Itd2FybmluZzogaHNsKDQ4LCAxMDAlLCA2NyUpO1xcbiAgLS1jb2xvci1kYW5nZXI6IGhzbCgzNDgsIDEwMCUsIDYxJSk7XFxuXFxuICAvLyBCb3JkZXJzXFxuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLy8gQkFTRSBMQVlPVVRcXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vLyBOQVZCQVJcXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxuXFxuICAubmF2YmFyLWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG59XFxuXFxuLy8gSE9NRSBUQUJcXG5cXG4uaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAuYmFubmVyIHtcXG4gICAgcCB7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuXFxuICAgIGltZyB7XFxuICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBNRU5VIFRBQlxcblxcbi5tZW51IHtcXG4gIC5tZW51LWl0ZW0ge1xcbiAgICBpbWcge1xcbiAgICAgIGhlaWdodDogMTcwcHg7XFxuICAgICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhcHBlbmRDaGlsZCB9IGZyb20gJy4uL3V0aWwvaGVscGVyJztcbi8vIGltcG9ydCBCdXJnZXJJbWFnZSBmcm9tICcuLi9yZXMvaW1nL2J1cmdlci5qcGcnO1xuaW1wb3J0IERpcmVjdG9ySW1hZ2UgZnJvbSAnLi4vcmVzL2ltZy9kaXJlY3Rvci5qcGcnO1xuaW1wb3J0IENoZWZJbWFnZSBmcm9tICcuLi9yZXMvaW1nL2NoZWYuanBnJztcbmltcG9ydCBXYWl0ZXJJbWFnZSBmcm9tICcuLi9yZXMvaW1nL3dhaXRlci5qcGcnO1xuXG5jb25zdCBjcmVhdGVFbXBsb3llZSA9IChuYW1lLCBpbWFnZSwgcm9sZSwgbnVtYmVyLCBlbWFpbCkgPT4ge1xuICBjb25zdCBlbXBsb3llZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbXBsb3llZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICBjb25zdCBlbXBsb3llZUltYWdlID0gYXBwZW5kQ2hpbGQoZW1wbG95ZWUsICdpbWcnKTtcbiAgZW1wbG95ZWVJbWFnZS5zcmMgPSBpbWFnZTtcblxuICBjb25zdCBlbXBsb3llZU5hbWUgPSBhcHBlbmRDaGlsZChlbXBsb3llZSwgJ2g0Jyk7XG4gIGVtcGxveWVlTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3QgZW1wbG95ZWVSb2xlID0gYXBwZW5kQ2hpbGQoZW1wbG95ZWUsICdwJyk7XG4gIGVtcGxveWVlUm9sZS50ZXh0Q29udGVudCA9IHJvbGU7XG5cbiAgY29uc3QgZW1wbG95ZWVOdW1iZXIgPSBhcHBlbmRDaGlsZChlbXBsb3llZSwgJ3AnKTtcbiAgZW1wbG95ZWVOdW1iZXIudGV4dENvbnRlbnQgPSBudW1iZXI7XG5cbiAgY29uc3QgZW1wbG95ZWVFbWFpbCA9IGFwcGVuZENoaWxkKGVtcGxveWVlLCAncCcpO1xuICBlbXBsb3llZUVtYWlsLnRleHRDb250ZW50ID0gZW1haWw7XG5cbiAgcmV0dXJuIGVtcGxveWVlO1xufTtcblxuY29uc3QgbG9hZFBhZ2UgPSAocGFyZW50KSA9PiB7XG4gIHBhcmVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAvLyBDcmVhdGUgbGF5b3V0XG4gIGNvbnN0IHBhZ2VEaXYgPSBhcHBlbmRDaGlsZChwYXJlbnQsICdkaXYnLCAncGFnZSBtZW51Jyk7XG4gIGNvbnN0IGJhbm5lckRpdiA9IGFwcGVuZENoaWxkKHBhZ2VEaXYsICdkaXYnLCAnYmFubmVyJyk7XG5cbiAgLy8gQWRkIGNvbnRlbnRcbiAgY29uc3QgYmFubmVyVGV4dCA9IGFwcGVuZENoaWxkKGJhbm5lckRpdiwgJ3AnKTtcbiAgYmFubmVyVGV4dC50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcblxuICBsZXQgZW1wbG95ZWUgPSBjcmVhdGVFbXBsb3llZShcbiAgICAnUnlkZXIgVGluZGFsJyxcbiAgICBEaXJlY3RvckltYWdlLFxuICAgICdEaXJlY3RvcicsXG4gICAgJ1J5ZGVyVGluZGFsQGFybXlzcHkuY29tJyxcbiAgICAnKDAyKSA0MDM4IDg0MDknXG4gICk7XG4gIHBhZ2VEaXYuYXBwZW5kQ2hpbGQoZW1wbG95ZWUpO1xuXG4gIGVtcGxveWVlID0gY3JlYXRlRW1wbG95ZWUoXG4gICAgJ0hhcnJpc29uIEh1bWZmcmF5JyxcbiAgICBDaGVmSW1hZ2UsXG4gICAgJ0NoZWYnLFxuICAgICdIYXJyaXNvbkh1bWZmcmF5QGFybXlzcHkuY29tJyxcbiAgICAnKDAyKSA0OTg1IDk5OTMnXG4gICk7XG4gIHBhZ2VEaXYuYXBwZW5kQ2hpbGQoZW1wbG95ZWUpO1xuXG4gIGVtcGxveWVlID0gY3JlYXRlRW1wbG95ZWUoXG4gICAgJ09saXZlciBMYXJuYWNoJyxcbiAgICBXYWl0ZXJJbWFnZSxcbiAgICAnV2FpdGVyJyxcbiAgICAnT2xpdmVyTGFybmFjaEBhcm15c3B5LmNvbScsXG4gICAgJygwMikgNjE2MCAyMzI0J1xuICApO1xuICBwYWdlRGl2LmFwcGVuZENoaWxkKGVtcGxveWVlKTtcbn07XG5cbmV4cG9ydCB7IGxvYWRQYWdlIH07XG4iLCJpbXBvcnQgeyBhcHBlbmRDaGlsZCB9IGZyb20gJy4uL3V0aWwvaGVscGVyJztcbmltcG9ydCBCdXJnZXJJbWFnZSBmcm9tICcuLi9yZXMvaW1nL2J1cmdlci5qcGcnO1xuXG5jb25zdCBsb2FkUGFnZSA9IChwYXJlbnQpID0+IHtcbiAgcGFyZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIC8vIENyZWF0ZSBsYXlvdXRcbiAgY29uc3QgcGFnZURpdiA9IGFwcGVuZENoaWxkKHBhcmVudCwgJ2RpdicsICdwYWdlIGhvbWUnKTtcbiAgY29uc3QgYmFubmVyRGl2ID0gYXBwZW5kQ2hpbGQocGFnZURpdiwgJ2RpdicsICdiYW5uZXInKTtcbiAgY29uc3QgY29weURpdiA9IGFwcGVuZENoaWxkKHBhZ2VEaXYsICdkaXYnLCAnY29weScpO1xuICBjb25zdCBob3Vyc0RpdiA9IGFwcGVuZENoaWxkKHBhZ2VEaXYsICdkaXYnLCAnaG91cnMnKTtcbiAgY29uc3QgbG9jYXRpb25EaXYgPSBhcHBlbmRDaGlsZChwYWdlRGl2LCAnZGl2JywgJ2xvY2F0aW9uJyk7XG5cbiAgLy8gQWRkIGNvbnRlbnRcbiAgY29uc3QgYmFubmVyVGV4dCA9IGFwcGVuZENoaWxkKGJhbm5lckRpdiwgJ3AnKTtcbiAgYmFubmVyVGV4dC50ZXh0Q29udGVudCA9ICdCb3JnaXInO1xuXG4gIGNvbnN0IGJhbm5lckltYWdlID0gbmV3IEltYWdlKCk7XG4gIGJhbm5lckltYWdlLnNyYyA9IEJ1cmdlckltYWdlO1xuICBiYW5uZXJEaXYuYXBwZW5kQ2hpbGQoYmFubmVySW1hZ2UpO1xuXG4gIGNvbnN0IGNvcHlUZXh0ID0gYXBwZW5kQ2hpbGQoY29weURpdiwgJ3AnKTtcbiAgY29weVRleHQudGV4dENvbnRlbnQgPVxuICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdW5jIGVsZW1lbnR1bSB1bHRyaWNpZXMgYXJjdSwgYWMgZWdlc3RhcyBqdXN0byBlbGVpZmVuZCBub24uIE1hdXJpcyBzZWQgZXJvcyBldCBudW5jIHRpbmNpZHVudCBkaWN0dW0uIE5hbSB1dCBhbnRlIHV0IHZlbGl0IHRpbmNpZHVudCBlbGVpZmVuZC4gQWVuZWFuIHZpdGFlIHRvcnRvciBsZW8uIE1vcmJpIHVsdHJpY2llcyBuZWMgbWFzc2EgZXQgbW9sbGlzLic7XG5cbiAgY29uc3QgaG91cnNIZWFkZXIgPSBhcHBlbmRDaGlsZChob3Vyc0RpdiwgJ2gyJyk7XG4gIGhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gJ0hvdXJzJztcblxuICBjb25zdCBob3Vyc0xpc3QgPSBhcHBlbmRDaGlsZChob3Vyc0RpdiwgJ3VsJyk7XG5cbiAgY29uc3QgaG91cnMgPSB7XG4gICAgTW9uZGF5OiAnOTowMEFNIC0gNTowMFBNJyxcbiAgICBUdWVzZGF5OiAnOTowMEFNIC0gNTowMFBNJyxcbiAgICBXZWRuZXNkYXk6ICc5OjAwQU0gLSA1OjAwUE0nLFxuICAgIFRodXJzZGF5OiAnOTowMEFNIC0gNTowMFBNJyxcbiAgICBGcmlkYXk6ICc5OjAwQU0gLSA1OjAwUE0nLFxuICAgIFNhdHVyZGF5OiAnQ2xvc2VkJyxcbiAgICBTdW5kYXk6ICdDbG9zZWQnLFxuICB9O1xuXG4gIGZvciAoY29uc3QgZGF5IGluIGhvdXJzKSB7XG4gICAgY29uc3QgZSA9IGFwcGVuZENoaWxkKGhvdXJzTGlzdCwgJ2xpJyk7XG4gICAgZS50ZXh0Q29udGVudCA9IGhvdXJzW2RheV07XG4gIH1cblxuICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGFwcGVuZENoaWxkKGxvY2F0aW9uRGl2LCAnaDInKTtcbiAgbG9jYXRpb25IZWFkZXIudGV4dENvbnRlbnQgPSAnTG9jYXRpb24nO1xuXG4gIGNvbnN0IGxvY2F0aW9uVGV4dCA9IGFwcGVuZENoaWxkKGxvY2F0aW9uRGl2LCAncCcpO1xuICBsb2NhdGlvblRleHQudGV4dENvbnRlbnQgPSAnMTIzIEZyZWV2aWV3IERyLCBNZWxib3VybmUsIFZJQywgQXVzdHJhbGlhLCAzMDAwJztcbn07XG5cbmV4cG9ydCB7IGxvYWRQYWdlIH07XG4iLCJpbXBvcnQgeyBhcHBlbmRDaGlsZCB9IGZyb20gJy4uL3V0aWwvaGVscGVyJztcbi8vIGltcG9ydCBCdXJnZXJJbWFnZSBmcm9tICcuLi9yZXMvaW1nL2J1cmdlci5qcGcnO1xuaW1wb3J0IEJvcmdpckltYWdlIGZyb20gJy4uL3Jlcy9pbWcvYm9yZ2lyLmpwZyc7XG5pbXBvcnQgQnVsa0J1cmdlckltYWdlIGZyb20gJy4uL3Jlcy9pbWcvYnVsay1idXJnZXIuanBnJztcbmltcG9ydCBMZWFmeVNhbGFkSW1hZ2UgZnJvbSAnLi4vcmVzL2ltZy9sZWFmeS1zYWxhZC5qcGcnO1xuXG5jb25zdCBjcmVhdGVNZW51SXRlbSA9IChuYW1lLCBpbWFnZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSA9PiB7XG4gIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gIGNvbnN0IG1lbnVJdGVtSW1hZ2UgPSBhcHBlbmRDaGlsZChtZW51SXRlbSwgJ2ltZycpO1xuICBtZW51SXRlbUltYWdlLnNyYyA9IGltYWdlO1xuXG4gIGNvbnN0IG1lbnVJdGVtTmFtZSA9IGFwcGVuZENoaWxkKG1lbnVJdGVtLCAnaDQnKTtcbiAgbWVudUl0ZW1OYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBtZW51SXRlbVByaWNlID0gYXBwZW5kQ2hpbGQobWVudUl0ZW0sICdwJywgJ3ByaWNlJyk7XG4gIG1lbnVJdGVtUHJpY2UudGV4dENvbnRlbnQgPSAnJCcgKyBwcmljZTtcblxuICBjb25zdCBtZW51SXRlbURlc2NyaXB0aW9uID0gYXBwZW5kQ2hpbGQobWVudUl0ZW0sICdwJywgJ2Rlc2NyaXB0aW9uJyk7XG4gIG1lbnVJdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICByZXR1cm4gbWVudUl0ZW07XG59O1xuXG5jb25zdCBsb2FkUGFnZSA9IChwYXJlbnQpID0+IHtcbiAgcGFyZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIC8vIENyZWF0ZSBsYXlvdXRcbiAgY29uc3QgcGFnZURpdiA9IGFwcGVuZENoaWxkKHBhcmVudCwgJ2RpdicsICdwYWdlIG1lbnUnKTtcbiAgY29uc3QgYmFubmVyRGl2ID0gYXBwZW5kQ2hpbGQocGFnZURpdiwgJ2RpdicsICdiYW5uZXInKTtcblxuICAvLyBBZGQgY29udGVudFxuICBjb25zdCBiYW5uZXJUZXh0ID0gYXBwZW5kQ2hpbGQoYmFubmVyRGl2LCAncCcpO1xuICBiYW5uZXJUZXh0LnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gIGxldCBtZW51SXRlbSA9IGNyZWF0ZU1lbnVJdGVtKFxuICAgICdUaGUgQm9yZ2lyJyxcbiAgICBCb3JnaXJJbWFnZSxcbiAgICAyMCxcbiAgICAnRm9yIHRob3NlIGxvb2tpbmcgZm9yIGEgZmVhc3QhJ1xuICApO1xuICBwYWdlRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcblxuICBtZW51SXRlbSA9IGNyZWF0ZU1lbnVJdGVtKFxuICAgICdUaGUgQnVsayBCdXJnZXInLFxuICAgIEJ1bGtCdXJnZXJJbWFnZSxcbiAgICAxMixcbiAgICAnRm9yIHRob3NlIHNlZWtpbmcgZ2FpbnMhJ1xuICApO1xuICBwYWdlRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcblxuICBtZW51SXRlbSA9IGNyZWF0ZU1lbnVJdGVtKFxuICAgICdUaGUgTGVhZnkgU2FsYWQnLFxuICAgIExlYWZ5U2FsYWRJbWFnZSxcbiAgICA4LFxuICAgICdGb3IgdGhvc2Ugc2hyZWRkaW5nISdcbiAgKTtcbiAgcGFnZURpdi5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG59O1xuXG5leHBvcnQgeyBsb2FkUGFnZSB9O1xuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGQgfSBmcm9tICcuLi91dGlsL2hlbHBlcic7XG5cbmltcG9ydCB7IGxvYWRQYWdlIGFzIGxvYWRQYWdlSG9tZSB9IGZyb20gJy4uL2NvbnRlbnQvaG9tZSc7XG5pbXBvcnQgeyBsb2FkUGFnZSBhcyBsb2FkUGFnZU1lbnUgfSBmcm9tICcuLi9jb250ZW50L21lbnUnO1xuaW1wb3J0IHsgbG9hZFBhZ2UgYXMgbG9hZFBhZ2VDb250YWN0VXMgfSBmcm9tICcuLi9jb250ZW50L2NvbnRhY3QnO1xuXG5jb25zdCBwYWdlRnVuY3Rpb25zID0ge1xuICBob21lOiBsb2FkUGFnZUhvbWUsXG4gIG1lbnU6IGxvYWRQYWdlTWVudSxcbiAgY29udGFjdDogbG9hZFBhZ2VDb250YWN0VXMsXG59O1xuXG5jb25zdCBsb2FkTmF2YmFyID0gKHBhcmVudCkgPT4ge1xuICBwYXJlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgbGV0IG5hdmJhckl0ZW0gPSBhcHBlbmRDaGlsZChwYXJlbnQsICdkaXYnLCAnbmF2YmFyLWl0ZW0nKTtcbiAgbmF2YmFySXRlbS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgbmF2YmFySXRlbS5kYXRhc2V0LnBhZ2UgPSAnaG9tZSc7XG4gIG5hdmJhckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQ29udGVudCk7XG5cbiAgbmF2YmFySXRlbSA9IGFwcGVuZENoaWxkKHBhcmVudCwgJ2RpdicsICduYXZiYXItaXRlbScpO1xuICBuYXZiYXJJdGVtLmRhdGFzZXQucGFnZSA9ICdtZW51JztcbiAgbmF2YmFySXRlbS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbmF2YmFySXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRDb250ZW50KTtcblxuICBuYXZiYXJJdGVtID0gYXBwZW5kQ2hpbGQocGFyZW50LCAnZGl2JywgJ25hdmJhci1pdGVtJyk7XG4gIG5hdmJhckl0ZW0uZGF0YXNldC5wYWdlID0gJ2NvbnRhY3QnO1xuICBuYXZiYXJJdGVtLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuICBuYXZiYXJJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZENvbnRlbnQpO1xufTtcblxuY29uc3QgbG9hZENvbnRlbnQgPSAoZSkgPT4ge1xuICBjb25zdCBuYXZiYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gIGZvciAoY29uc3QgbmF2YmFySXRlbSBvZiBuYXZiYXJEaXYuY2hpbGRyZW4pIHtcbiAgICBpZiAobmF2YmFySXRlbSA9PT0gZS50YXJnZXQpIHtcbiAgICAgIG5hdmJhckl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdmJhckl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgcGFnZUZ1bmN0aW9uc1tlLnRhcmdldC5kYXRhc2V0LnBhZ2VdKGNvbnRlbnREaXYpO1xufTtcblxuZXhwb3J0IHsgbG9hZE5hdmJhciB9O1xuIiwiY29uc3QgYXBwZW5kQ2hpbGQgPSAocGFyZW50T2JqLCBjaGlsZFR5cGUsIGNoaWxkQ2xhc3MgPSAnJykgPT4ge1xuICBjb25zdCBjaGlsZE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY2hpbGRUeXBlKTtcblxuICBsZXQgY2xhc3NlcyA9XG4gICAgdHlwZW9mIGNoaWxkQ2xhc3MgPT09ICdzdHJpbmcnID8gY2hpbGRDbGFzcy5zcGxpdCgvXFxzKy8pIDogY2hpbGRDbGFzcztcblxuICBjbGFzc2VzLmZvckVhY2goKGNscykgPT4ge1xuICAgIGlmIChjbHMubGVuZ3RoID4gMCkge1xuICAgICAgY2hpbGRPYmouY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIH1cbiAgfSk7XG5cbiAgcGFyZW50T2JqLmFwcGVuZENoaWxkKGNoaWxkT2JqKTtcbiAgcmV0dXJuIGNoaWxkT2JqO1xufTtcblxuZXhwb3J0IHsgYXBwZW5kQ2hpbGQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGQgfSBmcm9tICcuL3V0aWwvaGVscGVyJztcbmltcG9ydCB7IGxvYWROYXZiYXIgfSBmcm9tICcuL3VpL25hdmJhcic7XG5pbXBvcnQgeyBsb2FkUGFnZSBhcyBsb2FkUGFnZUhvbWUgfSBmcm9tICcuL2NvbnRlbnQvaG9tZSc7XG4vLyBpbXBvcnQgeyBsb2FkUGFnZSBhcyBsb2FkUGFnZU1lbnUgfSBmcm9tICcuL2NvbnRlbnQvbWVudSc7XG4vLyBpbXBvcnQgeyBsb2FkUGFnZSBhcyBsb2FkUGFnZUNvbnRhY3RVcyB9IGZyb20gJy4vY29udGVudC9jb250YWN0JztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgY3JlYXRlSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuICAvLyBDcmVhdGUgY29udGFpbmVycyBmb3IgbmF2YmFyXG4gIGNvbnN0IG5hdmJhckRpdiA9IGFwcGVuZENoaWxkKGNvbnRhaW5lckRpdiwgJ2RpdicsICduYXZiYXInKTtcbiAgY29uc3QgY29udGVudERpdiA9IGFwcGVuZENoaWxkKGNvbnRhaW5lckRpdiwgJ2RpdicsICdjb250ZW50Jyk7XG5cbiAgLy8gTG9hZCBuYXZiYXJcbiAgbG9hZE5hdmJhcihuYXZiYXJEaXYpO1xuXG4gIC8vIExvYWQgaG9tZSBwYWdlXG4gIGxvYWRQYWdlSG9tZShjb250ZW50RGl2KTtcbiAgLy8gbG9hZFBhZ2VNZW51KGNvbnRlbnREaXYpO1xuICAvLyBsb2FkUGFnZUNvbnRhY3RVcyhjb250ZW50RGl2KTtcbn07XG5cbi8vIENyZWF0ZSBwYWdlXG5jcmVhdGVJbmRleCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9