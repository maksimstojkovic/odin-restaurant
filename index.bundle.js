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
  font-size: 16px;
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

.content {
  width: 100%;
}

.page {
  margin: 20px 10%;
  padding: 20px 10%;
  background-color: var(--color-light);
  border-radius: calc(2 * var(--border-radius));
  display: flex;
  flex-direction: column;
  align-items: center;
}
.page > div {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.page > div img {
  align-self: center;
}
.page > div:not(:last-child) {
  margin-bottom: 20px;
}
.page .banner {
  padding: 10px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  color: var(--color-light);
  background-color: var(--color-info);
  border-radius: var(--border-radius);
}
.page .banner p {
  margin: 0;
  text-transform: uppercase;
}

.card {
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2,
p {
  margin: 0;
}

h2 {
  font-size: 1.5rem;
}

.navbar {
  width: 100%;
  height: 80px;
  background-color: var(--color-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}
.navbar .navbar-item {
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-success);
  color: var(--color-light);
  font-size: 1.4rem;
  border-radius: 5px;
  cursor: pointer;
}
.navbar .navbar-item.active {
  background-color: var(--color-success);
  font-weight: bold;
}

.home .hero img {
  height: 100px;
}
.home .copy p {
  padding: 0 10%;
}
.home .hours ul {
  list-style-type: none;
  text-align: center;
  padding: 0;
}

.menu .menu-item {
  display: grid;
  grid-template: 1fr/200px 3fr 1fr;
  justify-items: center;
  align-items: center;
}
.menu .menu-item img {
  grid-row: 1/-1;
  height: 120px;
  aspect-ratio: 1;
  object-fit: scale-down;
  background-color: black;
}
.menu .menu-item .menu-item-content {
  justify-self: flex-start;
}
.menu .menu-item .menu-item-content h2 {
  font-size: 2.5rem;
}
.menu .menu-item .menu-item-content .description {
  font-size: 1.5rem;
}
.menu .menu-item .price {
  grid-column: -2/-1;
  grid-row: 1/-1;
  font-size: 2.5rem;
  font-style: italic;
}

.contact-us .employee {
  width: 400px;
  display: grid;
  grid-template: 1fr/150px 1fr;
  justify-items: flex-start;
  align-items: center;
}
.contact-us .employee img {
  height: 120px;
  aspect-ratio: 1;
  object-fit: scale-down;
}
.contact-us .employee .details {
  display: flex;
  flex-direction: column;
  gap: 5px;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;;EAGE,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EAGA,yCAAA;EACA,eAAA;EAGA,+BAAA;EACA,6BAAA;EACA,8BAAA;EACA,6BAAA;EACA,oCAAA;EACA,gCAAA;EACA,gCAAA;EACA,mCAAA;EACA,mCAAA;EACA,mCAAA;EAGA,oBAAA;AARF;;AAaA;EACE,WAAA;EACA,YAAA;AAVF;;AAaA;EACE,WAAA;AAVF;;AAaA;EACE,gBAAA;EACA,iBAAA;EACA,oCAAA;EACA,6CAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;AAXF;AAaE;EACE,WAAA;EACA,aAAA;EACA,sBAAA;AAXJ;AAaI;EACE,kBAAA;AAXN;AAcI;EACE,mBAAA;AAZN;AAgBE;EACE,aAAA;EACA,UAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,mCAAA;EACA,mCAAA;AAhBJ;AAkBI;EACE,SAAA;EACA,yBAAA;AAhBN;;AAqBA;EAEE,mCAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AApBF;;AAuBA;;EAEE,SAAA;AApBF;;AAuBA;EACE,iBAAA;AApBF;;AAyBA;EACE,WAAA;EACA,YAAA;EACA,mCAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,0CAAA;AAvBF;AAyBE;EACE,YAAA;EACA,YAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,sCAAA;EACA,yBAAA;EACA,iBAAA;EACA,kBAAA;EAEA,eAAA;AA1BJ;AA4BI;EACE,sCAAA;EACA,iBAAA;AA1BN;;AAmCI;EACE,aAAA;AAhCN;AAqCI;EACE,cAAA;AAnCN;AAwCI;EACE,qBAAA;EACA,kBAAA;EACA,UAAA;AAtCN;;AA8CE;EACE,aAAA;EACA,gCAAA;EACA,qBAAA;EACA,mBAAA;AA3CJ;AA6CI;EACE,cAAA;EAEA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,uBAAA;AA5CN;AA+CI;EACE,wBAAA;AA7CN;AA+CM;EACE,iBAAA;AA7CR;AAgDM;EAEE,iBAAA;AA/CR;AAmDI;EACE,kBAAA;EACA,cAAA;EAEA,iBAAA;EACA,kBAAA;AAlDN;;AA0DE;EACE,YAAA;EAEA,aAAA;EACA,4BAAA;EACA,yBAAA;EACA,mBAAA;AAxDJ;AA0DI;EACE,aAAA;EACA,eAAA;EACA,sBAAA;AAxDN;AA2DI;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AAzDN","sourcesContent":["// GENERAL\n\n:root,\nhtml body {\n  // Layout\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n\n  // Typography\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 16px;\n\n  // Color presets\n  --color-white: hsl(0, 0%, 100%);\n  --color-black: hsl(0, 0%, 4%);\n  --color-light: hsl(0, 0%, 96%);\n  --color-dark: hsl(0, 0%, 21%);\n  --color-primary: hsl(171, 100%, 41%);\n  --color-link: hsl(217, 71%, 53%);\n  --color-info: hsl(204, 86%, 53%);\n  --color-success: hsl(141, 53%, 53%);\n  --color-warning: hsl(48, 100%, 67%);\n  --color-danger: hsl(348, 100%, 61%);\n\n  // Borders\n  --border-radius: 5px;\n}\n\n// BASE LAYOUT\n\n.container {\n  width: 100%;\n  height: 100%;\n}\n\n.content {\n  width: 100%;\n}\n\n.page {\n  margin: 20px 10%;\n  padding: 20px 10%;\n  background-color: var(--color-light);\n  border-radius: calc(2 * var(--border-radius));\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > div {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    img {\n      align-self: center;\n    }\n\n    &:not(:last-child) {\n      margin-bottom: 20px;\n    }\n  }\n\n  .banner {\n    padding: 10px;\n    width: 80%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 3rem;\n    font-weight: bold;\n    color: var(--color-light);\n    background-color: var(--color-info);\n    border-radius: var(--border-radius);\n\n    p {\n      margin: 0;\n      text-transform: uppercase;\n    }\n  }\n}\n\n.card {\n  // background-color: var(--color-success);\n  border-radius: var(--border-radius);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nh2,\np {\n  margin: 0;\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n\n// NAVBAR\n\n.navbar {\n  width: 100%;\n  height: 80px;\n  background-color: var(--color-dark);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);\n\n  .navbar-item {\n    width: 140px;\n    height: 40px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background-color: var(--color-success);\n    color: var(--color-light);\n    font-size: 1.4rem;\n    border-radius: 5px;\n\n    cursor: pointer;\n\n    &.active {\n      background-color: var(--color-success);\n      font-weight: bold;\n    }\n  }\n}\n\n// HOME TAB\n\n.home {\n  .hero {\n    img {\n      height: 100px;\n    }\n  }\n\n  .copy {\n    p {\n      padding: 0 10%;\n    }\n  }\n\n  .hours {\n    ul {\n      list-style-type: none;\n      text-align: center;\n      padding: 0;\n    }\n  }\n}\n\n// MENU TAB\n\n.menu {\n  .menu-item {\n    display: grid;\n    grid-template: 1fr / 200px 3fr 1fr;\n    justify-items: center;\n    align-items: center;\n\n    img {\n      grid-row: 1 / -1;\n\n      height: 120px;\n      aspect-ratio: 1;\n      object-fit: scale-down;\n      background-color: black;\n    }\n\n    .menu-item-content {\n      justify-self: flex-start;\n\n      h2 {\n        font-size: 2.5rem;\n      }\n\n      .description {\n        //   grid-column: 2 / -1;\n        font-size: 1.5rem;\n      }\n    }\n\n    .price {\n      grid-column: -2 / -1;\n      grid-row: 1 / -1;\n\n      font-size: 2.5rem;\n      font-style: italic;\n    }\n  }\n}\n\n// CONTACT US TAB\n\n.contact-us {\n  .employee {\n    width: 400px;\n\n    display: grid;\n    grid-template: 1fr / 150px 1fr;\n    justify-items: flex-start;\n    align-items: center;\n\n    img {\n      height: 120px;\n      aspect-ratio: 1;\n      object-fit: scale-down;\n    }\n\n    .details {\n      display: flex;\n      flex-direction: column;\n      gap: 5px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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





const createEmployee = (name, image, role, number, email) => {
  const employee = document.createElement('div');
  employee.classList.add('employee');

  const employeeImage = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(employee, 'img');
  employeeImage.src = image;

  const employeeDetailsDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(employee, 'div', 'details');

  const employeeName = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(employeeDetailsDiv, 'h2');
  employeeName.textContent = name;

  const employeeRole = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(employeeDetailsDiv, 'p');
  employeeRole.textContent = role;

  const employeeNumber = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(employeeDetailsDiv, 'p');
  employeeNumber.textContent = number;

  const employeeEmail = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(employeeDetailsDiv, 'p');
  employeeEmail.textContent = email;

  return employee;
};

const loadPage = (parent) => {
  parent.replaceChildren();

  // Create layout
  const pageDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(parent, 'div', 'page contact-us');
  const bannerDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(pageDiv, 'div', 'banner');

  // Add content
  const bannerText = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(bannerDiv, 'p');
  bannerText.textContent = 'Contact Us';

  let employee = createEmployee(
    'Ryder Tindal',
    _res_img_director_jpg__WEBPACK_IMPORTED_MODULE_1__,
    'Director',
    'RyderTindal@email.com',
    '(02) 9999 9999'
  );
  pageDiv.appendChild(employee);

  employee = createEmployee(
    'Harrison Humffray',
    _res_img_chef_jpg__WEBPACK_IMPORTED_MODULE_2__,
    'Chef',
    'HarrisonHumffray@email.com',
    '(02) 9888 8888'
  );
  pageDiv.appendChild(employee);

  employee = createEmployee(
    'Oliver Larnach',
    _res_img_waiter_jpg__WEBPACK_IMPORTED_MODULE_3__,
    'Waiter',
    'OliverLarnach@email.com',
    '(02) 9777 7777'
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
  const heroDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(pageDiv, 'div', 'hero');
  const copyDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(pageDiv, 'div', 'copy card');
  const hoursDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(pageDiv, 'div', 'hours card');
  const locationDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(pageDiv, 'div', 'location card');

  // Add content
  const bannerText = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(bannerDiv, 'p');
  bannerText.textContent = 'Borgir';

  const hero = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(heroDiv, 'img');
  hero.src = _res_img_burger_jpg__WEBPACK_IMPORTED_MODULE_1__;

  const copyText = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(copyDiv, 'p');
  copyText.textContent = `
  Welcome to Borgir, where burger bliss awaits. Savor the extraordinary with our handcrafted, flavor-packed burgers. Whether you crave classics or crave adventure, our menu has something delicious for all. Join us for a memorable meal today.`;

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
    e.textContent = `${day} - ${hours[day]}`;
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

  const menuItemContentDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(menuItem, 'div', 'menu-item-content');

  const menuItemName = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(menuItemContentDiv, 'h2');
  menuItemName.textContent = name;

  const menuItemDescription = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(
    menuItemContentDiv,
    'p',
    'description'
  );
  menuItemDescription.textContent = description;

  const menuItemPrice = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(menuItem, 'p', 'price');
  menuItemPrice.textContent = '$' + price;

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

  let navbarItem = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(parent, 'div', 'navbar-item active');
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
/* harmony import */ var _content_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/contact */ "./src/content/contact.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");


// import { loadPage as loadPageHome } from './content/home';
// import { loadPage as loadPageMenu } from './content/menu';



const createIndex = () => {
  const containerDiv = document.querySelector('.container');

  // Create containers for navbar
  const navbarDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(containerDiv, 'div', 'navbar');
  const contentDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(containerDiv, 'div', 'content');

  // Load navbar
  (0,_ui_navbar__WEBPACK_IMPORTED_MODULE_1__.loadNavbar)(navbarDiv);
};

// Create page
createIndex();
document.querySelector('.navbar').children[0].click();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTRDO0FBQ0g7QUFDekMsWUFBWSwyQkFBMkI7QUFDdkMsWUFBWSwyQkFBMkI7QUFDMkI7QUFDNUM7O0FBRXRCO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IseURBQVc7QUFDL0IscUJBQXFCLHlEQUFXOztBQUVoQztBQUNBLEVBQUUsc0RBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvY29udGVudC9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jb250ZW50L2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2NvbnRlbnQvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvdWkvbmF2YmFyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy91dGlsL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCxcbmh0bWwgYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLS1jb2xvci13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcbiAgLS1jb2xvci1ibGFjazogaHNsKDAsIDAlLCA0JSk7XG4gIC0tY29sb3ItbGlnaHQ6IGhzbCgwLCAwJSwgOTYlKTtcbiAgLS1jb2xvci1kYXJrOiBoc2woMCwgMCUsIDIxJSk7XG4gIC0tY29sb3ItcHJpbWFyeTogaHNsKDE3MSwgMTAwJSwgNDElKTtcbiAgLS1jb2xvci1saW5rOiBoc2woMjE3LCA3MSUsIDUzJSk7XG4gIC0tY29sb3ItaW5mbzogaHNsKDIwNCwgODYlLCA1MyUpO1xuICAtLWNvbG9yLXN1Y2Nlc3M6IGhzbCgxNDEsIDUzJSwgNTMlKTtcbiAgLS1jb2xvci13YXJuaW5nOiBoc2woNDgsIDEwMCUsIDY3JSk7XG4gIC0tY29sb3ItZGFuZ2VyOiBoc2woMzQ4LCAxMDAlLCA2MSUpO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYWdlIHtcbiAgbWFyZ2luOiAyMHB4IDEwJTtcbiAgcGFkZGluZzogMjBweCAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogY2FsYygyICogdmFyKC0tYm9yZGVyLXJhZGl1cykpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBhZ2UgPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wYWdlID4gZGl2IGltZyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5wYWdlID4gZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnBhZ2UgLmJhbm5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1pbmZvKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG4ucGFnZSAuYmFubmVyIHAge1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMixcbnAge1xuICBtYXJnaW46IDA7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5uYXZiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYXJrKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNTBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLm5hdmJhciAubmF2YmFyLWl0ZW0ge1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2YmFyIC5uYXZiYXItaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zdWNjZXNzKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ob21lIC5oZXJvIGltZyB7XG4gIGhlaWdodDogMTAwcHg7XG59XG4uaG9tZSAuY29weSBwIHtcbiAgcGFkZGluZzogMCAxMCU7XG59XG4uaG9tZSAuaG91cnMgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1lbnUgLm1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IDFmci8yMDBweCAzZnIgMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWVudSAubWVudS1pdGVtIGltZyB7XG4gIGdyaWQtcm93OiAxLy0xO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLm1lbnUgLm1lbnUtaXRlbSAubWVudS1pdGVtLWNvbnRlbnQge1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4ubWVudSAubWVudS1pdGVtIC5tZW51LWl0ZW0tY29udGVudCBoMiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuLm1lbnUgLm1lbnUtaXRlbSAubWVudS1pdGVtLWNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ubWVudSAubWVudS1pdGVtIC5wcmljZSB7XG4gIGdyaWQtY29sdW1uOiAtMi8tMTtcbiAgZ3JpZC1yb3c6IDEvLTE7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5jb250YWN0LXVzIC5lbXBsb3llZSB7XG4gIHdpZHRoOiA0MDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyLzE1MHB4IDFmcjtcbiAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWN0LXVzIC5lbXBsb3llZSBpbWcge1xuICBoZWlnaHQ6IDEyMHB4O1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG59XG4uY29udGFjdC11cyAuZW1wbG95ZWUgLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOztFQUdFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFHQSx5Q0FBQTtFQUNBLGVBQUE7RUFHQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUdBLG9CQUFBO0FBUkY7O0FBYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVZGOztBQWFBO0VBQ0UsV0FBQTtBQVZGOztBQWFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkNBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVhGO0FBYUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBWEo7QUFhSTtFQUNFLGtCQUFBO0FBWE47QUFjSTtFQUNFLG1CQUFBO0FBWk47QUFnQkU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0FBaEJKO0FBa0JJO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO0FBaEJOOztBQXFCQTtFQUVFLG1DQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXBCRjs7QUF1QkE7O0VBRUUsU0FBQTtBQXBCRjs7QUF1QkE7RUFDRSxpQkFBQTtBQXBCRjs7QUF5QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7QUF2QkY7QUF5QkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsc0NBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0FBMUJKO0FBNEJJO0VBQ0Usc0NBQUE7RUFDQSxpQkFBQTtBQTFCTjs7QUFtQ0k7RUFDRSxhQUFBO0FBaENOO0FBcUNJO0VBQ0UsY0FBQTtBQW5DTjtBQXdDSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBdENOOztBQThDRTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUEzQ0o7QUE2Q0k7RUFDRSxjQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBNUNOO0FBK0NJO0VBQ0Usd0JBQUE7QUE3Q047QUErQ007RUFDRSxpQkFBQTtBQTdDUjtBQWdETTtFQUVFLGlCQUFBO0FBL0NSO0FBbURJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQWxETjs7QUEwREU7RUFDRSxZQUFBO0VBRUEsYUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQXhESjtBQTBESTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUF4RE47QUEyREk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBekROXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIEdFTkVSQUxcXG5cXG46cm9vdCxcXG5odG1sIGJvZHkge1xcbiAgLy8gTGF5b3V0XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICAvLyBUeXBvZ3JhcGh5XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gIC8vIENvbG9yIHByZXNldHNcXG4gIC0tY29sb3Itd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAtLWNvbG9yLWJsYWNrOiBoc2woMCwgMCUsIDQlKTtcXG4gIC0tY29sb3ItbGlnaHQ6IGhzbCgwLCAwJSwgOTYlKTtcXG4gIC0tY29sb3ItZGFyazogaHNsKDAsIDAlLCAyMSUpO1xcbiAgLS1jb2xvci1wcmltYXJ5OiBoc2woMTcxLCAxMDAlLCA0MSUpO1xcbiAgLS1jb2xvci1saW5rOiBoc2woMjE3LCA3MSUsIDUzJSk7XFxuICAtLWNvbG9yLWluZm86IGhzbCgyMDQsIDg2JSwgNTMlKTtcXG4gIC0tY29sb3Itc3VjY2VzczogaHNsKDE0MSwgNTMlLCA1MyUpO1xcbiAgLS1jb2xvci13YXJuaW5nOiBoc2woNDgsIDEwMCUsIDY3JSk7XFxuICAtLWNvbG9yLWRhbmdlcjogaHNsKDM0OCwgMTAwJSwgNjElKTtcXG5cXG4gIC8vIEJvcmRlcnNcXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4vLyBCQVNFIExBWU9VVFxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGFnZSB7XFxuICBtYXJnaW46IDIwcHggMTAlO1xcbiAgcGFkZGluZzogMjBweCAxMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDIgKiB2YXIoLS1ib3JkZXItcmFkaXVzKSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBpbWcge1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5iYW5uZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogODAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaW5mbyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgICBwIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uY2FyZCB7XFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zdWNjZXNzKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgyLFxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLy8gTkFWQkFSXFxuXFxuLm5hdmJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG5cXG4gIC5uYXZiYXItaXRlbSB7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc3VjY2Vzcyk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgJi5hY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MpO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8vIEhPTUUgVEFCXFxuXFxuLmhvbWUge1xcbiAgLmhlcm8ge1xcbiAgICBpbWcge1xcbiAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jb3B5IHtcXG4gICAgcCB7XFxuICAgICAgcGFkZGluZzogMCAxMCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5ob3VycyB7XFxuICAgIHVsIHtcXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gTUVOVSBUQUJcXG5cXG4ubWVudSB7XFxuICAubWVudS1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMjAwcHggM2ZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBpbWcge1xcbiAgICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuXFxuICAgICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgfVxcblxcbiAgICAubWVudS1pdGVtLWNvbnRlbnQge1xcbiAgICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG5cXG4gICAgICBoMiB7XFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICB9XFxuXFxuICAgICAgLmRlc2NyaXB0aW9uIHtcXG4gICAgICAgIC8vICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAucHJpY2Uge1xcbiAgICAgIGdyaWQtY29sdW1uOiAtMiAvIC0xO1xcbiAgICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuXFxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8vIENPTlRBQ1QgVVMgVEFCXFxuXFxuLmNvbnRhY3QtdXMge1xcbiAgLmVtcGxveWVlIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxNTBweCAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGltZyB7XFxuICAgICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG4gICAgfVxcblxcbiAgICAuZGV0YWlscyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGdhcDogNXB4O1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGQgfSBmcm9tICcuLi91dGlsL2hlbHBlcic7XG5pbXBvcnQgRGlyZWN0b3JJbWFnZSBmcm9tICcuLi9yZXMvaW1nL2RpcmVjdG9yLmpwZyc7XG5pbXBvcnQgQ2hlZkltYWdlIGZyb20gJy4uL3Jlcy9pbWcvY2hlZi5qcGcnO1xuaW1wb3J0IFdhaXRlckltYWdlIGZyb20gJy4uL3Jlcy9pbWcvd2FpdGVyLmpwZyc7XG5cbmNvbnN0IGNyZWF0ZUVtcGxveWVlID0gKG5hbWUsIGltYWdlLCByb2xlLCBudW1iZXIsIGVtYWlsKSA9PiB7XG4gIGNvbnN0IGVtcGxveWVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVtcGxveWVlLmNsYXNzTGlzdC5hZGQoJ2VtcGxveWVlJyk7XG5cbiAgY29uc3QgZW1wbG95ZWVJbWFnZSA9IGFwcGVuZENoaWxkKGVtcGxveWVlLCAnaW1nJyk7XG4gIGVtcGxveWVlSW1hZ2Uuc3JjID0gaW1hZ2U7XG5cbiAgY29uc3QgZW1wbG95ZWVEZXRhaWxzRGl2ID0gYXBwZW5kQ2hpbGQoZW1wbG95ZWUsICdkaXYnLCAnZGV0YWlscycpO1xuXG4gIGNvbnN0IGVtcGxveWVlTmFtZSA9IGFwcGVuZENoaWxkKGVtcGxveWVlRGV0YWlsc0RpdiwgJ2gyJyk7XG4gIGVtcGxveWVlTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3QgZW1wbG95ZWVSb2xlID0gYXBwZW5kQ2hpbGQoZW1wbG95ZWVEZXRhaWxzRGl2LCAncCcpO1xuICBlbXBsb3llZVJvbGUudGV4dENvbnRlbnQgPSByb2xlO1xuXG4gIGNvbnN0IGVtcGxveWVlTnVtYmVyID0gYXBwZW5kQ2hpbGQoZW1wbG95ZWVEZXRhaWxzRGl2LCAncCcpO1xuICBlbXBsb3llZU51bWJlci50ZXh0Q29udGVudCA9IG51bWJlcjtcblxuICBjb25zdCBlbXBsb3llZUVtYWlsID0gYXBwZW5kQ2hpbGQoZW1wbG95ZWVEZXRhaWxzRGl2LCAncCcpO1xuICBlbXBsb3llZUVtYWlsLnRleHRDb250ZW50ID0gZW1haWw7XG5cbiAgcmV0dXJuIGVtcGxveWVlO1xufTtcblxuY29uc3QgbG9hZFBhZ2UgPSAocGFyZW50KSA9PiB7XG4gIHBhcmVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAvLyBDcmVhdGUgbGF5b3V0XG4gIGNvbnN0IHBhZ2VEaXYgPSBhcHBlbmRDaGlsZChwYXJlbnQsICdkaXYnLCAncGFnZSBjb250YWN0LXVzJyk7XG4gIGNvbnN0IGJhbm5lckRpdiA9IGFwcGVuZENoaWxkKHBhZ2VEaXYsICdkaXYnLCAnYmFubmVyJyk7XG5cbiAgLy8gQWRkIGNvbnRlbnRcbiAgY29uc3QgYmFubmVyVGV4dCA9IGFwcGVuZENoaWxkKGJhbm5lckRpdiwgJ3AnKTtcbiAgYmFubmVyVGV4dC50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcblxuICBsZXQgZW1wbG95ZWUgPSBjcmVhdGVFbXBsb3llZShcbiAgICAnUnlkZXIgVGluZGFsJyxcbiAgICBEaXJlY3RvckltYWdlLFxuICAgICdEaXJlY3RvcicsXG4gICAgJ1J5ZGVyVGluZGFsQGVtYWlsLmNvbScsXG4gICAgJygwMikgOTk5OSA5OTk5J1xuICApO1xuICBwYWdlRGl2LmFwcGVuZENoaWxkKGVtcGxveWVlKTtcblxuICBlbXBsb3llZSA9IGNyZWF0ZUVtcGxveWVlKFxuICAgICdIYXJyaXNvbiBIdW1mZnJheScsXG4gICAgQ2hlZkltYWdlLFxuICAgICdDaGVmJyxcbiAgICAnSGFycmlzb25IdW1mZnJheUBlbWFpbC5jb20nLFxuICAgICcoMDIpIDk4ODggODg4OCdcbiAgKTtcbiAgcGFnZURpdi5hcHBlbmRDaGlsZChlbXBsb3llZSk7XG5cbiAgZW1wbG95ZWUgPSBjcmVhdGVFbXBsb3llZShcbiAgICAnT2xpdmVyIExhcm5hY2gnLFxuICAgIFdhaXRlckltYWdlLFxuICAgICdXYWl0ZXInLFxuICAgICdPbGl2ZXJMYXJuYWNoQGVtYWlsLmNvbScsXG4gICAgJygwMikgOTc3NyA3Nzc3J1xuICApO1xuICBwYWdlRGl2LmFwcGVuZENoaWxkKGVtcGxveWVlKTtcbn07XG5cbmV4cG9ydCB7IGxvYWRQYWdlIH07XG4iLCJpbXBvcnQgeyBhcHBlbmRDaGlsZCB9IGZyb20gJy4uL3V0aWwvaGVscGVyJztcbmltcG9ydCBCdXJnZXJJbWFnZSBmcm9tICcuLi9yZXMvaW1nL2J1cmdlci5qcGcnO1xuXG5jb25zdCBsb2FkUGFnZSA9IChwYXJlbnQpID0+IHtcbiAgcGFyZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIC8vIENyZWF0ZSBsYXlvdXRcbiAgY29uc3QgcGFnZURpdiA9IGFwcGVuZENoaWxkKHBhcmVudCwgJ2RpdicsICdwYWdlIGhvbWUnKTtcbiAgY29uc3QgYmFubmVyRGl2ID0gYXBwZW5kQ2hpbGQocGFnZURpdiwgJ2RpdicsICdiYW5uZXInKTtcbiAgY29uc3QgaGVyb0RpdiA9IGFwcGVuZENoaWxkKHBhZ2VEaXYsICdkaXYnLCAnaGVybycpO1xuICBjb25zdCBjb3B5RGl2ID0gYXBwZW5kQ2hpbGQocGFnZURpdiwgJ2RpdicsICdjb3B5IGNhcmQnKTtcbiAgY29uc3QgaG91cnNEaXYgPSBhcHBlbmRDaGlsZChwYWdlRGl2LCAnZGl2JywgJ2hvdXJzIGNhcmQnKTtcbiAgY29uc3QgbG9jYXRpb25EaXYgPSBhcHBlbmRDaGlsZChwYWdlRGl2LCAnZGl2JywgJ2xvY2F0aW9uIGNhcmQnKTtcblxuICAvLyBBZGQgY29udGVudFxuICBjb25zdCBiYW5uZXJUZXh0ID0gYXBwZW5kQ2hpbGQoYmFubmVyRGl2LCAncCcpO1xuICBiYW5uZXJUZXh0LnRleHRDb250ZW50ID0gJ0Jvcmdpcic7XG5cbiAgY29uc3QgaGVybyA9IGFwcGVuZENoaWxkKGhlcm9EaXYsICdpbWcnKTtcbiAgaGVyby5zcmMgPSBCdXJnZXJJbWFnZTtcblxuICBjb25zdCBjb3B5VGV4dCA9IGFwcGVuZENoaWxkKGNvcHlEaXYsICdwJyk7XG4gIGNvcHlUZXh0LnRleHRDb250ZW50ID0gYFxuICBXZWxjb21lIHRvIEJvcmdpciwgd2hlcmUgYnVyZ2VyIGJsaXNzIGF3YWl0cy4gU2F2b3IgdGhlIGV4dHJhb3JkaW5hcnkgd2l0aCBvdXIgaGFuZGNyYWZ0ZWQsIGZsYXZvci1wYWNrZWQgYnVyZ2Vycy4gV2hldGhlciB5b3UgY3JhdmUgY2xhc3NpY3Mgb3IgY3JhdmUgYWR2ZW50dXJlLCBvdXIgbWVudSBoYXMgc29tZXRoaW5nIGRlbGljaW91cyBmb3IgYWxsLiBKb2luIHVzIGZvciBhIG1lbW9yYWJsZSBtZWFsIHRvZGF5LmA7XG5cbiAgY29uc3QgaG91cnNIZWFkZXIgPSBhcHBlbmRDaGlsZChob3Vyc0RpdiwgJ2gyJyk7XG4gIGhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gJ0hvdXJzJztcblxuICBjb25zdCBob3Vyc0xpc3QgPSBhcHBlbmRDaGlsZChob3Vyc0RpdiwgJ3VsJyk7XG5cbiAgY29uc3QgaG91cnMgPSB7XG4gICAgTW9uZGF5OiAnOTowMEFNIC0gNTowMFBNJyxcbiAgICBUdWVzZGF5OiAnOTowMEFNIC0gNTowMFBNJyxcbiAgICBXZWRuZXNkYXk6ICc5OjAwQU0gLSA1OjAwUE0nLFxuICAgIFRodXJzZGF5OiAnOTowMEFNIC0gNTowMFBNJyxcbiAgICBGcmlkYXk6ICc5OjAwQU0gLSA1OjAwUE0nLFxuICAgIFNhdHVyZGF5OiAnQ2xvc2VkJyxcbiAgICBTdW5kYXk6ICdDbG9zZWQnLFxuICB9O1xuXG4gIGZvciAoY29uc3QgZGF5IGluIGhvdXJzKSB7XG4gICAgY29uc3QgZSA9IGFwcGVuZENoaWxkKGhvdXJzTGlzdCwgJ2xpJyk7XG4gICAgZS50ZXh0Q29udGVudCA9IGAke2RheX0gLSAke2hvdXJzW2RheV19YDtcbiAgfVxuXG4gIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYsICdoMicpO1xuICBsb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG5cbiAgY29uc3QgbG9jYXRpb25UZXh0ID0gYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYsICdwJyk7XG4gIGxvY2F0aW9uVGV4dC50ZXh0Q29udGVudCA9ICcxMjMgRnJlZXZpZXcgRHIsIE1lbGJvdXJuZSwgVklDLCBBdXN0cmFsaWEsIDMwMDAnO1xufTtcblxuZXhwb3J0IHsgbG9hZFBhZ2UgfTtcbiIsImltcG9ydCB7IGFwcGVuZENoaWxkIH0gZnJvbSAnLi4vdXRpbC9oZWxwZXInO1xuLy8gaW1wb3J0IEJ1cmdlckltYWdlIGZyb20gJy4uL3Jlcy9pbWcvYnVyZ2VyLmpwZyc7XG5pbXBvcnQgQm9yZ2lySW1hZ2UgZnJvbSAnLi4vcmVzL2ltZy9ib3JnaXIuanBnJztcbmltcG9ydCBCdWxrQnVyZ2VySW1hZ2UgZnJvbSAnLi4vcmVzL2ltZy9idWxrLWJ1cmdlci5qcGcnO1xuaW1wb3J0IExlYWZ5U2FsYWRJbWFnZSBmcm9tICcuLi9yZXMvaW1nL2xlYWZ5LXNhbGFkLmpwZyc7XG5cbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKG5hbWUsIGltYWdlLCBwcmljZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgY29uc3QgbWVudUl0ZW1JbWFnZSA9IGFwcGVuZENoaWxkKG1lbnVJdGVtLCAnaW1nJyk7XG4gIG1lbnVJdGVtSW1hZ2Uuc3JjID0gaW1hZ2U7XG5cbiAgY29uc3QgbWVudUl0ZW1Db250ZW50RGl2ID0gYXBwZW5kQ2hpbGQobWVudUl0ZW0sICdkaXYnLCAnbWVudS1pdGVtLWNvbnRlbnQnKTtcblxuICBjb25zdCBtZW51SXRlbU5hbWUgPSBhcHBlbmRDaGlsZChtZW51SXRlbUNvbnRlbnREaXYsICdoMicpO1xuICBtZW51SXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIGNvbnN0IG1lbnVJdGVtRGVzY3JpcHRpb24gPSBhcHBlbmRDaGlsZChcbiAgICBtZW51SXRlbUNvbnRlbnREaXYsXG4gICAgJ3AnLFxuICAgICdkZXNjcmlwdGlvbidcbiAgKTtcbiAgbWVudUl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IG1lbnVJdGVtUHJpY2UgPSBhcHBlbmRDaGlsZChtZW51SXRlbSwgJ3AnLCAncHJpY2UnKTtcbiAgbWVudUl0ZW1QcmljZS50ZXh0Q29udGVudCA9ICckJyArIHByaWNlO1xuXG4gIHJldHVybiBtZW51SXRlbTtcbn07XG5cbmNvbnN0IGxvYWRQYWdlID0gKHBhcmVudCkgPT4ge1xuICBwYXJlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgLy8gQ3JlYXRlIGxheW91dFxuICBjb25zdCBwYWdlRGl2ID0gYXBwZW5kQ2hpbGQocGFyZW50LCAnZGl2JywgJ3BhZ2UgbWVudScpO1xuICBjb25zdCBiYW5uZXJEaXYgPSBhcHBlbmRDaGlsZChwYWdlRGl2LCAnZGl2JywgJ2Jhbm5lcicpO1xuXG4gIC8vIEFkZCBjb250ZW50XG4gIGNvbnN0IGJhbm5lclRleHQgPSBhcHBlbmRDaGlsZChiYW5uZXJEaXYsICdwJyk7XG4gIGJhbm5lclRleHQudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgbGV0IG1lbnVJdGVtID0gY3JlYXRlTWVudUl0ZW0oXG4gICAgJ1RoZSBCb3JnaXInLFxuICAgIEJvcmdpckltYWdlLFxuICAgIDIwLFxuICAgICdGb3IgdGhvc2UgbG9va2luZyBmb3IgYSBmZWFzdCEnXG4gICk7XG4gIHBhZ2VEaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuXG4gIG1lbnVJdGVtID0gY3JlYXRlTWVudUl0ZW0oXG4gICAgJ1RoZSBCdWxrIEJ1cmdlcicsXG4gICAgQnVsa0J1cmdlckltYWdlLFxuICAgIDEyLFxuICAgICdGb3IgdGhvc2Ugc2Vla2luZyBnYWlucyEnXG4gICk7XG4gIHBhZ2VEaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuXG4gIG1lbnVJdGVtID0gY3JlYXRlTWVudUl0ZW0oXG4gICAgJ1RoZSBMZWFmeSBTYWxhZCcsXG4gICAgTGVhZnlTYWxhZEltYWdlLFxuICAgIDgsXG4gICAgJ0ZvciB0aG9zZSBzaHJlZGRpbmchJ1xuICApO1xuICBwYWdlRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbn07XG5cbmV4cG9ydCB7IGxvYWRQYWdlIH07XG4iLCJpbXBvcnQgeyBhcHBlbmRDaGlsZCB9IGZyb20gJy4uL3V0aWwvaGVscGVyJztcblxuaW1wb3J0IHsgbG9hZFBhZ2UgYXMgbG9hZFBhZ2VIb21lIH0gZnJvbSAnLi4vY29udGVudC9ob21lJztcbmltcG9ydCB7IGxvYWRQYWdlIGFzIGxvYWRQYWdlTWVudSB9IGZyb20gJy4uL2NvbnRlbnQvbWVudSc7XG5pbXBvcnQgeyBsb2FkUGFnZSBhcyBsb2FkUGFnZUNvbnRhY3RVcyB9IGZyb20gJy4uL2NvbnRlbnQvY29udGFjdCc7XG5cbmNvbnN0IHBhZ2VGdW5jdGlvbnMgPSB7XG4gIGhvbWU6IGxvYWRQYWdlSG9tZSxcbiAgbWVudTogbG9hZFBhZ2VNZW51LFxuICBjb250YWN0OiBsb2FkUGFnZUNvbnRhY3RVcyxcbn07XG5cbmNvbnN0IGxvYWROYXZiYXIgPSAocGFyZW50KSA9PiB7XG4gIHBhcmVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBsZXQgbmF2YmFySXRlbSA9IGFwcGVuZENoaWxkKHBhcmVudCwgJ2RpdicsICduYXZiYXItaXRlbSBhY3RpdmUnKTtcbiAgbmF2YmFySXRlbS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgbmF2YmFySXRlbS5kYXRhc2V0LnBhZ2UgPSAnaG9tZSc7XG4gIG5hdmJhckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQ29udGVudCk7XG5cbiAgbmF2YmFySXRlbSA9IGFwcGVuZENoaWxkKHBhcmVudCwgJ2RpdicsICduYXZiYXItaXRlbScpO1xuICBuYXZiYXJJdGVtLmRhdGFzZXQucGFnZSA9ICdtZW51JztcbiAgbmF2YmFySXRlbS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbmF2YmFySXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRDb250ZW50KTtcblxuICBuYXZiYXJJdGVtID0gYXBwZW5kQ2hpbGQocGFyZW50LCAnZGl2JywgJ25hdmJhci1pdGVtJyk7XG4gIG5hdmJhckl0ZW0uZGF0YXNldC5wYWdlID0gJ2NvbnRhY3QnO1xuICBuYXZiYXJJdGVtLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuICBuYXZiYXJJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZENvbnRlbnQpO1xufTtcblxuY29uc3QgbG9hZENvbnRlbnQgPSAoZSkgPT4ge1xuICBjb25zdCBuYXZiYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gIGZvciAoY29uc3QgbmF2YmFySXRlbSBvZiBuYXZiYXJEaXYuY2hpbGRyZW4pIHtcbiAgICBpZiAobmF2YmFySXRlbSA9PT0gZS50YXJnZXQpIHtcbiAgICAgIG5hdmJhckl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdmJhckl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgcGFnZUZ1bmN0aW9uc1tlLnRhcmdldC5kYXRhc2V0LnBhZ2VdKGNvbnRlbnREaXYpO1xufTtcblxuZXhwb3J0IHsgbG9hZE5hdmJhciB9O1xuIiwiY29uc3QgYXBwZW5kQ2hpbGQgPSAocGFyZW50T2JqLCBjaGlsZFR5cGUsIGNoaWxkQ2xhc3MgPSAnJykgPT4ge1xuICBjb25zdCBjaGlsZE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY2hpbGRUeXBlKTtcblxuICBsZXQgY2xhc3NlcyA9XG4gICAgdHlwZW9mIGNoaWxkQ2xhc3MgPT09ICdzdHJpbmcnID8gY2hpbGRDbGFzcy5zcGxpdCgvXFxzKy8pIDogY2hpbGRDbGFzcztcblxuICBjbGFzc2VzLmZvckVhY2goKGNscykgPT4ge1xuICAgIGlmIChjbHMubGVuZ3RoID4gMCkge1xuICAgICAgY2hpbGRPYmouY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIH1cbiAgfSk7XG5cbiAgcGFyZW50T2JqLmFwcGVuZENoaWxkKGNoaWxkT2JqKTtcbiAgcmV0dXJuIGNoaWxkT2JqO1xufTtcblxuZXhwb3J0IHsgYXBwZW5kQ2hpbGQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGQgfSBmcm9tICcuL3V0aWwvaGVscGVyJztcbmltcG9ydCB7IGxvYWROYXZiYXIgfSBmcm9tICcuL3VpL25hdmJhcic7XG4vLyBpbXBvcnQgeyBsb2FkUGFnZSBhcyBsb2FkUGFnZUhvbWUgfSBmcm9tICcuL2NvbnRlbnQvaG9tZSc7XG4vLyBpbXBvcnQgeyBsb2FkUGFnZSBhcyBsb2FkUGFnZU1lbnUgfSBmcm9tICcuL2NvbnRlbnQvbWVudSc7XG5pbXBvcnQgeyBsb2FkUGFnZSBhcyBsb2FkUGFnZUNvbnRhY3RVcyB9IGZyb20gJy4vY29udGVudC9jb250YWN0JztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgY3JlYXRlSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuICAvLyBDcmVhdGUgY29udGFpbmVycyBmb3IgbmF2YmFyXG4gIGNvbnN0IG5hdmJhckRpdiA9IGFwcGVuZENoaWxkKGNvbnRhaW5lckRpdiwgJ2RpdicsICduYXZiYXInKTtcbiAgY29uc3QgY29udGVudERpdiA9IGFwcGVuZENoaWxkKGNvbnRhaW5lckRpdiwgJ2RpdicsICdjb250ZW50Jyk7XG5cbiAgLy8gTG9hZCBuYXZiYXJcbiAgbG9hZE5hdmJhcihuYXZiYXJEaXYpO1xufTtcblxuLy8gQ3JlYXRlIHBhZ2VcbmNyZWF0ZUluZGV4KCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJykuY2hpbGRyZW5bMF0uY2xpY2soKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==