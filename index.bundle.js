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

module.exports = __webpack_require__.p + "4fb059a1a108b4eea0d5.jpg";

/***/ }),

/***/ "./src/res/img/bulk-burger.jpg":
/*!*************************************!*\
  !*** ./src/res/img/bulk-burger.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb75281e9ca40cdaf037.jpg";

/***/ }),

/***/ "./src/res/img/burger.jpg":
/*!********************************!*\
  !*** ./src/res/img/burger.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70de727285888503591e.jpg";

/***/ }),

/***/ "./src/res/img/chef.jpg":
/*!******************************!*\
  !*** ./src/res/img/chef.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "227ef18eb6565e4bf997.jpg";

/***/ }),

/***/ "./src/res/img/director.jpg":
/*!**********************************!*\
  !*** ./src/res/img/director.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7bd149d33d645cc7fb2b.jpg";

/***/ }),

/***/ "./src/res/img/leafy-salad.jpg":
/*!*************************************!*\
  !*** ./src/res/img/leafy-salad.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de99fb52cb62bc86cd1b.jpg";

/***/ }),

/***/ "./src/res/img/waiter.jpg":
/*!********************************!*\
  !*** ./src/res/img/waiter.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a084e67903570956a846.jpg";

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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");




const createIndex = () => {
  const containerDiv = document.querySelector('.container');

  // Create containers for navbar
  const navbarDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(containerDiv, 'div', 'navbar');
  (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(containerDiv, 'div', 'content');

  // Load navbar
  (0,_ui_navbar__WEBPACK_IMPORTED_MODULE_1__.loadNavbar)(navbarDiv);
};

// Create page
createIndex();
document.querySelector('.navbar').children[0].click();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxrRkFBa0YsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLDJEQUEyRCw2QkFBNkIsaUJBQWlCLGNBQWMsZUFBZSxpRUFBaUUsb0JBQW9CLDBEQUEwRCxrQ0FBa0MsbUNBQW1DLGtDQUFrQyx5Q0FBeUMscUNBQXFDLHFDQUFxQyx3Q0FBd0Msd0NBQXdDLHdDQUF3Qyx5Q0FBeUMsR0FBRyxrQ0FBa0MsZ0JBQWdCLGlCQUFpQixHQUFHLGNBQWMsZ0JBQWdCLEdBQUcsV0FBVyxxQkFBcUIsc0JBQXNCLHlDQUF5QyxrREFBa0Qsb0JBQW9CLDJCQUEyQix3QkFBd0IsYUFBYSxrQkFBa0Isb0JBQW9CLDZCQUE2QixhQUFhLDJCQUEyQixPQUFPLDRCQUE0Qiw0QkFBNEIsT0FBTyxLQUFLLGVBQWUsb0JBQW9CLGlCQUFpQixzQkFBc0IsOEJBQThCLDBCQUEwQix3QkFBd0Isd0JBQXdCLGdDQUFnQywwQ0FBMEMsMENBQTBDLFdBQVcsa0JBQWtCLGtDQUFrQyxPQUFPLEtBQUssR0FBRyxXQUFXLDhDQUE4Qyx3Q0FBd0Msb0JBQW9CLDJCQUEyQiw0QkFBNEIsd0JBQXdCLEdBQUcsWUFBWSxjQUFjLEdBQUcsUUFBUSxzQkFBc0IsR0FBRywwQkFBMEIsZ0JBQWdCLGlCQUFpQix3Q0FBd0Msb0JBQW9CLDRCQUE0Qix3QkFBd0IsY0FBYywrQ0FBK0Msb0JBQW9CLG1CQUFtQixtQkFBbUIsc0JBQXNCLDhCQUE4QiwwQkFBMEIsK0NBQStDLGdDQUFnQyx3QkFBd0IseUJBQXlCLHdCQUF3QixrQkFBa0IsK0NBQStDLDBCQUEwQixPQUFPLEtBQUssR0FBRywwQkFBMEIsV0FBVyxXQUFXLHNCQUFzQixPQUFPLEtBQUssYUFBYSxTQUFTLHVCQUF1QixPQUFPLEtBQUssY0FBYyxVQUFVLDhCQUE4QiwyQkFBMkIsbUJBQW1CLE9BQU8sS0FBSyxHQUFHLDBCQUEwQixnQkFBZ0Isb0JBQW9CLHlDQUF5Qyw0QkFBNEIsMEJBQTBCLGFBQWEseUJBQXlCLHdCQUF3Qix3QkFBd0IsK0JBQStCLGdDQUFnQyxPQUFPLDRCQUE0QixpQ0FBaUMsY0FBYyw0QkFBNEIsU0FBUyx3QkFBd0IsbUNBQW1DLDRCQUE0QixTQUFTLE9BQU8sZ0JBQWdCLDZCQUE2Qix5QkFBeUIsNEJBQTRCLDJCQUEyQixPQUFPLEtBQUssR0FBRyxzQ0FBc0MsZUFBZSxtQkFBbUIsc0JBQXNCLHFDQUFxQyxnQ0FBZ0MsMEJBQTBCLGFBQWEsc0JBQXNCLHdCQUF3QiwrQkFBK0IsT0FBTyxrQkFBa0Isc0JBQXNCLCtCQUErQixpQkFBaUIsT0FBTyxLQUFLLEdBQUcscUJBQXFCO0FBQ3pvSztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQy9LMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTRJO0FBQzVJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJc0Y7QUFDOUcsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLDRIQUFPLFVBQVUsNEhBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2I2QztBQUNPO0FBQ1I7QUFDSTs7QUFFaEQ7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qix5REFBVztBQUNuQzs7QUFFQSw2QkFBNkIseURBQVc7O0FBRXhDLHVCQUF1Qix5REFBVztBQUNsQzs7QUFFQSx1QkFBdUIseURBQVc7QUFDbEM7O0FBRUEseUJBQXlCLHlEQUFXO0FBQ3BDOztBQUVBLHdCQUF3Qix5REFBVztBQUNuQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IseURBQVc7QUFDN0Isb0JBQW9CLHlEQUFXOztBQUUvQjtBQUNBLHFCQUFxQix5REFBVztBQUNoQzs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxrREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDhDQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxnREFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEV5QjtBQUNHOztBQUVoRDtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHlEQUFXO0FBQzdCLG9CQUFvQix5REFBVztBQUMvQixrQkFBa0IseURBQVc7QUFDN0Isa0JBQWtCLHlEQUFXO0FBQzdCLG1CQUFtQix5REFBVztBQUM5QixzQkFBc0IseURBQVc7O0FBRWpDO0FBQ0EscUJBQXFCLHlEQUFXO0FBQ2hDOztBQUVBLGVBQWUseURBQVc7QUFDMUIsYUFBYSxnREFBVzs7QUFFeEIsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0E7O0FBRUEsc0JBQXNCLHlEQUFXO0FBQ2pDOztBQUVBLG9CQUFvQix5REFBVzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyx5REFBVztBQUN6Qix1QkFBdUIsS0FBSyxJQUFJLFdBQVc7QUFDM0M7O0FBRUEseUJBQXlCLHlEQUFXO0FBQ3BDOztBQUVBLHVCQUF1Qix5REFBVztBQUNsQztBQUNBOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEeUI7QUFDN0M7QUFDZ0Q7QUFDUztBQUNBOztBQUV6RDtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHlEQUFXO0FBQ25DOztBQUVBLDZCQUE2Qix5REFBVzs7QUFFeEMsdUJBQXVCLHlEQUFXO0FBQ2xDOztBQUVBLDhCQUE4Qix5REFBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qix5REFBVztBQUNuQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IseURBQVc7QUFDN0Isb0JBQW9CLHlEQUFXOztBQUUvQjtBQUNBLHFCQUFxQix5REFBVztBQUNoQzs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxnREFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkV5Qjs7QUFFYztBQUNBO0FBQ1E7O0FBRW5FO0FBQ0EsUUFBUSxtREFBWTtBQUNwQixRQUFRLG1EQUFZO0FBQ3BCLFdBQVcsc0RBQWlCO0FBQzVCOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLHlEQUFXO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLHlEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q3RCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNBNEM7QUFDSDtBQUNuQjs7QUFFdEI7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix5REFBVztBQUMvQixFQUFFLHlEQUFXOztBQUViO0FBQ0EsRUFBRSxzREFBVTtBQUNaOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jb250ZW50L2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2NvbnRlbnQvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvY29udGVudC9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy91aS9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3V0aWwvaGVscGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290LFxuaHRtbCBib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtLWNvbG9yLXdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xuICAtLWNvbG9yLWJsYWNrOiBoc2woMCwgMCUsIDQlKTtcbiAgLS1jb2xvci1saWdodDogaHNsKDAsIDAlLCA5NiUpO1xuICAtLWNvbG9yLWRhcms6IGhzbCgwLCAwJSwgMjElKTtcbiAgLS1jb2xvci1wcmltYXJ5OiBoc2woMTcxLCAxMDAlLCA0MSUpO1xuICAtLWNvbG9yLWxpbms6IGhzbCgyMTcsIDcxJSwgNTMlKTtcbiAgLS1jb2xvci1pbmZvOiBoc2woMjA0LCA4NiUsIDUzJSk7XG4gIC0tY29sb3Itc3VjY2VzczogaHNsKDE0MSwgNTMlLCA1MyUpO1xuICAtLWNvbG9yLXdhcm5pbmc6IGhzbCg0OCwgMTAwJSwgNjclKTtcbiAgLS1jb2xvci1kYW5nZXI6IGhzbCgzNDgsIDEwMCUsIDYxJSk7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhZ2Uge1xuICBtYXJnaW46IDIwcHggMTAlO1xuICBwYWRkaW5nOiAyMHB4IDEwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiBjYWxjKDIgKiB2YXIoLS1ib3JkZXItcmFkaXVzKSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGFnZSA+IGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnBhZ2UgPiBkaXYgaW1nIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnBhZ2UgPiBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucGFnZSAuYmFubmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWluZm8pO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cbi5wYWdlIC5iYW5uZXIgcCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmgyLFxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLm5hdmJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1MHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ubmF2YmFyIC5uYXZiYXItaXRlbSB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXZiYXIgLm5hdmJhci1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhvbWUgLmhlcm8gaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5ob21lIC5jb3B5IHAge1xuICBwYWRkaW5nOiAwIDEwJTtcbn1cbi5ob21lIC5ob3VycyB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWVudSAubWVudS1pdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyLzIwMHB4IDNmciAxZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZW51IC5tZW51LWl0ZW0gaW1nIHtcbiAgZ3JpZC1yb3c6IDEvLTE7XG4gIGhlaWdodDogMTIwcHg7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4ubWVudSAubWVudS1pdGVtIC5tZW51LWl0ZW0tY29udGVudCB7XG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbn1cbi5tZW51IC5tZW51LWl0ZW0gLm1lbnUtaXRlbS1jb250ZW50IGgyIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG4ubWVudSAubWVudS1pdGVtIC5tZW51LWl0ZW0tY29udGVudCAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5tZW51IC5tZW51LWl0ZW0gLnByaWNlIHtcbiAgZ3JpZC1jb2x1bW46IC0yLy0xO1xuICBncmlkLXJvdzogMS8tMTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmNvbnRhY3QtdXMgLmVtcGxveWVlIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAxZnIvMTUwcHggMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhY3QtdXMgLmVtcGxveWVlIGltZyB7XG4gIGhlaWdodDogMTIwcHg7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbn1cbi5jb250YWN0LXVzIC5lbXBsb3llZSAuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7O0VBR0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUdBLHlDQUFBO0VBQ0EsZUFBQTtFQUdBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBR0Esb0JBQUE7QUFSRjs7QUFhQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBVkY7O0FBYUE7RUFDRSxXQUFBO0FBVkY7O0FBYUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2Q0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBWEY7QUFhRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFYSjtBQWFJO0VBQ0Usa0JBQUE7QUFYTjtBQWNJO0VBQ0UsbUJBQUE7QUFaTjtBQWdCRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7QUFoQko7QUFrQkk7RUFDRSxTQUFBO0VBQ0EseUJBQUE7QUFoQk47O0FBcUJBO0VBRUUsbUNBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBcEJGOztBQXVCQTs7RUFFRSxTQUFBO0FBcEJGOztBQXVCQTtFQUNFLGlCQUFBO0FBcEJGOztBQXlCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSwwQ0FBQTtBQXZCRjtBQXlCRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxzQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7QUExQko7QUE0Qkk7RUFDRSxzQ0FBQTtFQUNBLGlCQUFBO0FBMUJOOztBQW1DSTtFQUNFLGFBQUE7QUFoQ047QUFxQ0k7RUFDRSxjQUFBO0FBbkNOO0FBd0NJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUF0Q047O0FBOENFO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQTNDSjtBQTZDSTtFQUNFLGNBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUE1Q047QUErQ0k7RUFDRSx3QkFBQTtBQTdDTjtBQStDTTtFQUNFLGlCQUFBO0FBN0NSO0FBZ0RNO0VBRUUsaUJBQUE7QUEvQ1I7QUFtREk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0FBbEROOztBQTBERTtFQUNFLFlBQUE7RUFFQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBeERKO0FBMERJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQXhETjtBQTJESTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUF6RE5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gR0VORVJBTFxcblxcbjpyb290LFxcbmh0bWwgYm9keSB7XFxuICAvLyBMYXlvdXRcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIC8vIFR5cG9ncmFwaHlcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcblxcbiAgLy8gQ29sb3IgcHJlc2V0c1xcbiAgLS1jb2xvci13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIC0tY29sb3ItYmxhY2s6IGhzbCgwLCAwJSwgNCUpO1xcbiAgLS1jb2xvci1saWdodDogaHNsKDAsIDAlLCA5NiUpO1xcbiAgLS1jb2xvci1kYXJrOiBoc2woMCwgMCUsIDIxJSk7XFxuICAtLWNvbG9yLXByaW1hcnk6IGhzbCgxNzEsIDEwMCUsIDQxJSk7XFxuICAtLWNvbG9yLWxpbms6IGhzbCgyMTcsIDcxJSwgNTMlKTtcXG4gIC0tY29sb3ItaW5mbzogaHNsKDIwNCwgODYlLCA1MyUpO1xcbiAgLS1jb2xvci1zdWNjZXNzOiBoc2woMTQxLCA1MyUsIDUzJSk7XFxuICAtLWNvbG9yLXdhcm5pbmc6IGhzbCg0OCwgMTAwJSwgNjclKTtcXG4gIC0tY29sb3ItZGFuZ2VyOiBoc2woMzQ4LCAxMDAlLCA2MSUpO1xcblxcbiAgLy8gQm9yZGVyc1xcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8vIEJBU0UgTEFZT1VUXFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wYWdlIHtcXG4gIG1hcmdpbjogMjBweCAxMCU7XFxuICBwYWRkaW5nOiAyMHB4IDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMiAqIHZhcigtLWJvcmRlci1yYWRpdXMpKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gID4gZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGltZyB7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmJhbm5lciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1pbmZvKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICAgIHAge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5jYXJkIHtcXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDIsXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vLyBOQVZCQVJcXG5cXG4ubmF2YmFyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1MHB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcblxcbiAgLm5hdmJhci1pdGVtIHtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zdWNjZXNzKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAmLmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc3VjY2Vzcyk7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gSE9NRSBUQUJcXG5cXG4uaG9tZSB7XFxuICAuaGVybyB7XFxuICAgIGltZyB7XFxuICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmNvcHkge1xcbiAgICBwIHtcXG4gICAgICBwYWRkaW5nOiAwIDEwJTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmhvdXJzIHtcXG4gICAgdWwge1xcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBNRU5VIFRBQlxcblxcbi5tZW51IHtcXG4gIC5tZW51LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAyMDBweCAzZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGltZyB7XFxuICAgICAgZ3JpZC1yb3c6IDEgLyAtMTtcXG5cXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWl0ZW0tY29udGVudCB7XFxuICAgICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcbiAgICAgIGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGVzY3JpcHRpb24ge1xcbiAgICAgICAgLy8gICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5wcmljZSB7XFxuICAgICAgZ3JpZC1jb2x1bW46IC0yIC8gLTE7XFxuICAgICAgZ3JpZC1yb3c6IDEgLyAtMTtcXG5cXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gQ09OVEFDVCBVUyBUQUJcXG5cXG4uY29udGFjdC11cyB7XFxuICAuZW1wbG95ZWUge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDE1MHB4IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaW1nIHtcXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgICB9XFxuXFxuICAgIC5kZXRhaWxzIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhcHBlbmRDaGlsZCB9IGZyb20gJy4uL3V0aWwvaGVscGVyJztcbmltcG9ydCBEaXJlY3RvckltYWdlIGZyb20gJy4uL3Jlcy9pbWcvZGlyZWN0b3IuanBnJztcbmltcG9ydCBDaGVmSW1hZ2UgZnJvbSAnLi4vcmVzL2ltZy9jaGVmLmpwZyc7XG5pbXBvcnQgV2FpdGVySW1hZ2UgZnJvbSAnLi4vcmVzL2ltZy93YWl0ZXIuanBnJztcblxuY29uc3QgY3JlYXRlRW1wbG95ZWUgPSAobmFtZSwgaW1hZ2UsIHJvbGUsIG51bWJlciwgZW1haWwpID0+IHtcbiAgY29uc3QgZW1wbG95ZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZW1wbG95ZWUuY2xhc3NMaXN0LmFkZCgnZW1wbG95ZWUnKTtcblxuICBjb25zdCBlbXBsb3llZUltYWdlID0gYXBwZW5kQ2hpbGQoZW1wbG95ZWUsICdpbWcnKTtcbiAgZW1wbG95ZWVJbWFnZS5zcmMgPSBpbWFnZTtcblxuICBjb25zdCBlbXBsb3llZURldGFpbHNEaXYgPSBhcHBlbmRDaGlsZChlbXBsb3llZSwgJ2RpdicsICdkZXRhaWxzJyk7XG5cbiAgY29uc3QgZW1wbG95ZWVOYW1lID0gYXBwZW5kQ2hpbGQoZW1wbG95ZWVEZXRhaWxzRGl2LCAnaDInKTtcbiAgZW1wbG95ZWVOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBlbXBsb3llZVJvbGUgPSBhcHBlbmRDaGlsZChlbXBsb3llZURldGFpbHNEaXYsICdwJyk7XG4gIGVtcGxveWVlUm9sZS50ZXh0Q29udGVudCA9IHJvbGU7XG5cbiAgY29uc3QgZW1wbG95ZWVOdW1iZXIgPSBhcHBlbmRDaGlsZChlbXBsb3llZURldGFpbHNEaXYsICdwJyk7XG4gIGVtcGxveWVlTnVtYmVyLnRleHRDb250ZW50ID0gbnVtYmVyO1xuXG4gIGNvbnN0IGVtcGxveWVlRW1haWwgPSBhcHBlbmRDaGlsZChlbXBsb3llZURldGFpbHNEaXYsICdwJyk7XG4gIGVtcGxveWVlRW1haWwudGV4dENvbnRlbnQgPSBlbWFpbDtcblxuICByZXR1cm4gZW1wbG95ZWU7XG59O1xuXG5jb25zdCBsb2FkUGFnZSA9IChwYXJlbnQpID0+IHtcbiAgcGFyZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIC8vIENyZWF0ZSBsYXlvdXRcbiAgY29uc3QgcGFnZURpdiA9IGFwcGVuZENoaWxkKHBhcmVudCwgJ2RpdicsICdwYWdlIGNvbnRhY3QtdXMnKTtcbiAgY29uc3QgYmFubmVyRGl2ID0gYXBwZW5kQ2hpbGQocGFnZURpdiwgJ2RpdicsICdiYW5uZXInKTtcblxuICAvLyBBZGQgY29udGVudFxuICBjb25zdCBiYW5uZXJUZXh0ID0gYXBwZW5kQ2hpbGQoYmFubmVyRGl2LCAncCcpO1xuICBiYW5uZXJUZXh0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuXG4gIGxldCBlbXBsb3llZSA9IGNyZWF0ZUVtcGxveWVlKFxuICAgICdSeWRlciBUaW5kYWwnLFxuICAgIERpcmVjdG9ySW1hZ2UsXG4gICAgJ0RpcmVjdG9yJyxcbiAgICAnUnlkZXJUaW5kYWxAZW1haWwuY29tJyxcbiAgICAnKDAyKSA5OTk5IDk5OTknXG4gICk7XG4gIHBhZ2VEaXYuYXBwZW5kQ2hpbGQoZW1wbG95ZWUpO1xuXG4gIGVtcGxveWVlID0gY3JlYXRlRW1wbG95ZWUoXG4gICAgJ0hhcnJpc29uIEh1bWZmcmF5JyxcbiAgICBDaGVmSW1hZ2UsXG4gICAgJ0NoZWYnLFxuICAgICdIYXJyaXNvbkh1bWZmcmF5QGVtYWlsLmNvbScsXG4gICAgJygwMikgOTg4OCA4ODg4J1xuICApO1xuICBwYWdlRGl2LmFwcGVuZENoaWxkKGVtcGxveWVlKTtcblxuICBlbXBsb3llZSA9IGNyZWF0ZUVtcGxveWVlKFxuICAgICdPbGl2ZXIgTGFybmFjaCcsXG4gICAgV2FpdGVySW1hZ2UsXG4gICAgJ1dhaXRlcicsXG4gICAgJ09saXZlckxhcm5hY2hAZW1haWwuY29tJyxcbiAgICAnKDAyKSA5Nzc3IDc3NzcnXG4gICk7XG4gIHBhZ2VEaXYuYXBwZW5kQ2hpbGQoZW1wbG95ZWUpO1xufTtcblxuZXhwb3J0IHsgbG9hZFBhZ2UgfTtcbiIsImltcG9ydCB7IGFwcGVuZENoaWxkIH0gZnJvbSAnLi4vdXRpbC9oZWxwZXInO1xuaW1wb3J0IEJ1cmdlckltYWdlIGZyb20gJy4uL3Jlcy9pbWcvYnVyZ2VyLmpwZyc7XG5cbmNvbnN0IGxvYWRQYWdlID0gKHBhcmVudCkgPT4ge1xuICBwYXJlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgLy8gQ3JlYXRlIGxheW91dFxuICBjb25zdCBwYWdlRGl2ID0gYXBwZW5kQ2hpbGQocGFyZW50LCAnZGl2JywgJ3BhZ2UgaG9tZScpO1xuICBjb25zdCBiYW5uZXJEaXYgPSBhcHBlbmRDaGlsZChwYWdlRGl2LCAnZGl2JywgJ2Jhbm5lcicpO1xuICBjb25zdCBoZXJvRGl2ID0gYXBwZW5kQ2hpbGQocGFnZURpdiwgJ2RpdicsICdoZXJvJyk7XG4gIGNvbnN0IGNvcHlEaXYgPSBhcHBlbmRDaGlsZChwYWdlRGl2LCAnZGl2JywgJ2NvcHkgY2FyZCcpO1xuICBjb25zdCBob3Vyc0RpdiA9IGFwcGVuZENoaWxkKHBhZ2VEaXYsICdkaXYnLCAnaG91cnMgY2FyZCcpO1xuICBjb25zdCBsb2NhdGlvbkRpdiA9IGFwcGVuZENoaWxkKHBhZ2VEaXYsICdkaXYnLCAnbG9jYXRpb24gY2FyZCcpO1xuXG4gIC8vIEFkZCBjb250ZW50XG4gIGNvbnN0IGJhbm5lclRleHQgPSBhcHBlbmRDaGlsZChiYW5uZXJEaXYsICdwJyk7XG4gIGJhbm5lclRleHQudGV4dENvbnRlbnQgPSAnQm9yZ2lyJztcblxuICBjb25zdCBoZXJvID0gYXBwZW5kQ2hpbGQoaGVyb0RpdiwgJ2ltZycpO1xuICBoZXJvLnNyYyA9IEJ1cmdlckltYWdlO1xuXG4gIGNvbnN0IGNvcHlUZXh0ID0gYXBwZW5kQ2hpbGQoY29weURpdiwgJ3AnKTtcbiAgY29weVRleHQudGV4dENvbnRlbnQgPSBgXG4gIFdlbGNvbWUgdG8gQm9yZ2lyLCB3aGVyZSBidXJnZXIgYmxpc3MgYXdhaXRzLiBTYXZvciB0aGUgZXh0cmFvcmRpbmFyeSB3aXRoIG91ciBoYW5kY3JhZnRlZCwgZmxhdm9yLXBhY2tlZCBidXJnZXJzLiBXaGV0aGVyIHlvdSBjcmF2ZSBjbGFzc2ljcyBvciBjcmF2ZSBhZHZlbnR1cmUsIG91ciBtZW51IGhhcyBzb21ldGhpbmcgZGVsaWNpb3VzIGZvciBhbGwuIEpvaW4gdXMgZm9yIGEgbWVtb3JhYmxlIG1lYWwgdG9kYXkuYDtcblxuICBjb25zdCBob3Vyc0hlYWRlciA9IGFwcGVuZENoaWxkKGhvdXJzRGl2LCAnaDInKTtcbiAgaG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuXG4gIGNvbnN0IGhvdXJzTGlzdCA9IGFwcGVuZENoaWxkKGhvdXJzRGl2LCAndWwnKTtcblxuICBjb25zdCBob3VycyA9IHtcbiAgICBNb25kYXk6ICc5OjAwQU0gLSA1OjAwUE0nLFxuICAgIFR1ZXNkYXk6ICc5OjAwQU0gLSA1OjAwUE0nLFxuICAgIFdlZG5lc2RheTogJzk6MDBBTSAtIDU6MDBQTScsXG4gICAgVGh1cnNkYXk6ICc5OjAwQU0gLSA1OjAwUE0nLFxuICAgIEZyaWRheTogJzk6MDBBTSAtIDU6MDBQTScsXG4gICAgU2F0dXJkYXk6ICdDbG9zZWQnLFxuICAgIFN1bmRheTogJ0Nsb3NlZCcsXG4gIH07XG5cbiAgZm9yIChjb25zdCBkYXkgaW4gaG91cnMpIHtcbiAgICBjb25zdCBlID0gYXBwZW5kQ2hpbGQoaG91cnNMaXN0LCAnbGknKTtcbiAgICBlLnRleHRDb250ZW50ID0gYCR7ZGF5fSAtICR7aG91cnNbZGF5XX1gO1xuICB9XG5cbiAgY29uc3QgbG9jYXRpb25IZWFkZXIgPSBhcHBlbmRDaGlsZChsb2NhdGlvbkRpdiwgJ2gyJyk7XG4gIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcblxuICBjb25zdCBsb2NhdGlvblRleHQgPSBhcHBlbmRDaGlsZChsb2NhdGlvbkRpdiwgJ3AnKTtcbiAgbG9jYXRpb25UZXh0LnRleHRDb250ZW50ID0gJzEyMyBGcmVldmlldyBEciwgTWVsYm91cm5lLCBWSUMsIEF1c3RyYWxpYSwgMzAwMCc7XG59O1xuXG5leHBvcnQgeyBsb2FkUGFnZSB9O1xuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGQgfSBmcm9tICcuLi91dGlsL2hlbHBlcic7XG4vLyBpbXBvcnQgQnVyZ2VySW1hZ2UgZnJvbSAnLi4vcmVzL2ltZy9idXJnZXIuanBnJztcbmltcG9ydCBCb3JnaXJJbWFnZSBmcm9tICcuLi9yZXMvaW1nL2Jvcmdpci5qcGcnO1xuaW1wb3J0IEJ1bGtCdXJnZXJJbWFnZSBmcm9tICcuLi9yZXMvaW1nL2J1bGstYnVyZ2VyLmpwZyc7XG5pbXBvcnQgTGVhZnlTYWxhZEltYWdlIGZyb20gJy4uL3Jlcy9pbWcvbGVhZnktc2FsYWQuanBnJztcblxuY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAobmFtZSwgaW1hZ2UsIHByaWNlLCBkZXNjcmlwdGlvbikgPT4ge1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICBjb25zdCBtZW51SXRlbUltYWdlID0gYXBwZW5kQ2hpbGQobWVudUl0ZW0sICdpbWcnKTtcbiAgbWVudUl0ZW1JbWFnZS5zcmMgPSBpbWFnZTtcblxuICBjb25zdCBtZW51SXRlbUNvbnRlbnREaXYgPSBhcHBlbmRDaGlsZChtZW51SXRlbSwgJ2RpdicsICdtZW51LWl0ZW0tY29udGVudCcpO1xuXG4gIGNvbnN0IG1lbnVJdGVtTmFtZSA9IGFwcGVuZENoaWxkKG1lbnVJdGVtQ29udGVudERpdiwgJ2gyJyk7XG4gIG1lbnVJdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3QgbWVudUl0ZW1EZXNjcmlwdGlvbiA9IGFwcGVuZENoaWxkKFxuICAgIG1lbnVJdGVtQ29udGVudERpdixcbiAgICAncCcsXG4gICAgJ2Rlc2NyaXB0aW9uJ1xuICApO1xuICBtZW51SXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgbWVudUl0ZW1QcmljZSA9IGFwcGVuZENoaWxkKG1lbnVJdGVtLCAncCcsICdwcmljZScpO1xuICBtZW51SXRlbVByaWNlLnRleHRDb250ZW50ID0gJyQnICsgcHJpY2U7XG5cbiAgcmV0dXJuIG1lbnVJdGVtO1xufTtcblxuY29uc3QgbG9hZFBhZ2UgPSAocGFyZW50KSA9PiB7XG4gIHBhcmVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAvLyBDcmVhdGUgbGF5b3V0XG4gIGNvbnN0IHBhZ2VEaXYgPSBhcHBlbmRDaGlsZChwYXJlbnQsICdkaXYnLCAncGFnZSBtZW51Jyk7XG4gIGNvbnN0IGJhbm5lckRpdiA9IGFwcGVuZENoaWxkKHBhZ2VEaXYsICdkaXYnLCAnYmFubmVyJyk7XG5cbiAgLy8gQWRkIGNvbnRlbnRcbiAgY29uc3QgYmFubmVyVGV4dCA9IGFwcGVuZENoaWxkKGJhbm5lckRpdiwgJ3AnKTtcbiAgYmFubmVyVGV4dC50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICBsZXQgbWVudUl0ZW0gPSBjcmVhdGVNZW51SXRlbShcbiAgICAnVGhlIEJvcmdpcicsXG4gICAgQm9yZ2lySW1hZ2UsXG4gICAgMjAsXG4gICAgJ0ZvciB0aG9zZSBsb29raW5nIGZvciBhIGZlYXN0ISdcbiAgKTtcbiAgcGFnZURpdi5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG5cbiAgbWVudUl0ZW0gPSBjcmVhdGVNZW51SXRlbShcbiAgICAnVGhlIEJ1bGsgQnVyZ2VyJyxcbiAgICBCdWxrQnVyZ2VySW1hZ2UsXG4gICAgMTIsXG4gICAgJ0ZvciB0aG9zZSBzZWVraW5nIGdhaW5zISdcbiAgKTtcbiAgcGFnZURpdi5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG5cbiAgbWVudUl0ZW0gPSBjcmVhdGVNZW51SXRlbShcbiAgICAnVGhlIExlYWZ5IFNhbGFkJyxcbiAgICBMZWFmeVNhbGFkSW1hZ2UsXG4gICAgOCxcbiAgICAnRm9yIHRob3NlIHNocmVkZGluZyEnXG4gICk7XG4gIHBhZ2VEaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xufTtcblxuZXhwb3J0IHsgbG9hZFBhZ2UgfTtcbiIsImltcG9ydCB7IGFwcGVuZENoaWxkIH0gZnJvbSAnLi4vdXRpbC9oZWxwZXInO1xuXG5pbXBvcnQgeyBsb2FkUGFnZSBhcyBsb2FkUGFnZUhvbWUgfSBmcm9tICcuLi9jb250ZW50L2hvbWUnO1xuaW1wb3J0IHsgbG9hZFBhZ2UgYXMgbG9hZFBhZ2VNZW51IH0gZnJvbSAnLi4vY29udGVudC9tZW51JztcbmltcG9ydCB7IGxvYWRQYWdlIGFzIGxvYWRQYWdlQ29udGFjdFVzIH0gZnJvbSAnLi4vY29udGVudC9jb250YWN0JztcblxuY29uc3QgcGFnZUZ1bmN0aW9ucyA9IHtcbiAgaG9tZTogbG9hZFBhZ2VIb21lLFxuICBtZW51OiBsb2FkUGFnZU1lbnUsXG4gIGNvbnRhY3Q6IGxvYWRQYWdlQ29udGFjdFVzLFxufTtcblxuY29uc3QgbG9hZE5hdmJhciA9IChwYXJlbnQpID0+IHtcbiAgcGFyZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIGxldCBuYXZiYXJJdGVtID0gYXBwZW5kQ2hpbGQocGFyZW50LCAnZGl2JywgJ25hdmJhci1pdGVtIGFjdGl2ZScpO1xuICBuYXZiYXJJdGVtLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBuYXZiYXJJdGVtLmRhdGFzZXQucGFnZSA9ICdob21lJztcbiAgbmF2YmFySXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRDb250ZW50KTtcblxuICBuYXZiYXJJdGVtID0gYXBwZW5kQ2hpbGQocGFyZW50LCAnZGl2JywgJ25hdmJhci1pdGVtJyk7XG4gIG5hdmJhckl0ZW0uZGF0YXNldC5wYWdlID0gJ21lbnUnO1xuICBuYXZiYXJJdGVtLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBuYXZiYXJJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZENvbnRlbnQpO1xuXG4gIG5hdmJhckl0ZW0gPSBhcHBlbmRDaGlsZChwYXJlbnQsICdkaXYnLCAnbmF2YmFyLWl0ZW0nKTtcbiAgbmF2YmFySXRlbS5kYXRhc2V0LnBhZ2UgPSAnY29udGFjdCc7XG4gIG5hdmJhckl0ZW0udGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gIG5hdmJhckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQ29udGVudCk7XG59O1xuXG5jb25zdCBsb2FkQ29udGVudCA9IChlKSA9PiB7XG4gIGNvbnN0IG5hdmJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgZm9yIChjb25zdCBuYXZiYXJJdGVtIG9mIG5hdmJhckRpdi5jaGlsZHJlbikge1xuICAgIGlmIChuYXZiYXJJdGVtID09PSBlLnRhcmdldCkge1xuICAgICAgbmF2YmFySXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2YmFySXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBwYWdlRnVuY3Rpb25zW2UudGFyZ2V0LmRhdGFzZXQucGFnZV0oY29udGVudERpdik7XG59O1xuXG5leHBvcnQgeyBsb2FkTmF2YmFyIH07XG4iLCJjb25zdCBhcHBlbmRDaGlsZCA9IChwYXJlbnRPYmosIGNoaWxkVHlwZSwgY2hpbGRDbGFzcyA9ICcnKSA9PiB7XG4gIGNvbnN0IGNoaWxkT2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjaGlsZFR5cGUpO1xuXG4gIGxldCBjbGFzc2VzID1cbiAgICB0eXBlb2YgY2hpbGRDbGFzcyA9PT0gJ3N0cmluZycgPyBjaGlsZENsYXNzLnNwbGl0KC9cXHMrLykgOiBjaGlsZENsYXNzO1xuXG4gIGNsYXNzZXMuZm9yRWFjaCgoY2xzKSA9PiB7XG4gICAgaWYgKGNscy5sZW5ndGggPiAwKSB7XG4gICAgICBjaGlsZE9iai5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxuICB9KTtcblxuICBwYXJlbnRPYmouYXBwZW5kQ2hpbGQoY2hpbGRPYmopO1xuICByZXR1cm4gY2hpbGRPYmo7XG59O1xuXG5leHBvcnQgeyBhcHBlbmRDaGlsZCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBhcHBlbmRDaGlsZCB9IGZyb20gJy4vdXRpbC9oZWxwZXInO1xuaW1wb3J0IHsgbG9hZE5hdmJhciB9IGZyb20gJy4vdWkvbmF2YmFyJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgY3JlYXRlSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuICAvLyBDcmVhdGUgY29udGFpbmVycyBmb3IgbmF2YmFyXG4gIGNvbnN0IG5hdmJhckRpdiA9IGFwcGVuZENoaWxkKGNvbnRhaW5lckRpdiwgJ2RpdicsICduYXZiYXInKTtcbiAgYXBwZW5kQ2hpbGQoY29udGFpbmVyRGl2LCAnZGl2JywgJ2NvbnRlbnQnKTtcblxuICAvLyBMb2FkIG5hdmJhclxuICBsb2FkTmF2YmFyKG5hdmJhckRpdik7XG59O1xuXG4vLyBDcmVhdGUgcGFnZVxuY3JlYXRlSW5kZXgoKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKS5jaGlsZHJlblswXS5jbGljaygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9