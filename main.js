/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #EFF2F1;

    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
    width: 100vw;
    height: 100vh;
}

h1{
    margin-top: 10px;
    font-size: 4rem;
}

img.chicken {
    width: 100px;
    height: auto;
}

img.owners {
    width: 350px;
    height: auto;
    border-radius: 50px;
    border: 5px solid white;
}

#content {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template: 10fr 1fr / 1fr 4fr;
    grid-template-areas: 
    "sidebar main"
    "footer footer";
}

.sidebar {
    background-color: #FF3F00;
    border-right: 10px solid #FFE900;
    
    grid-area: sidebar;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    z-index: 2;
}

.logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 110px;
    font-weight: bold;

    border: 2px solid #EFF2F1;
    background-color: #002D72;
    padding: 10px;
}

.links {
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;

    width: 100%;
}

.links > a {
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;

    background-color: #002D72;
    border-top: 2px solid #000000;
    border-bottom: 2px solid #000000;

    transition: 0.4s, background-position 0s;
}

.links > a:hover {
    border-right: 2px solid #000000;
    transform: scale(1.2);
    background-color: #EFF2F1;
    color:#002D72;    
}

.main {    
    background-color: #537A5A;

    grid-area: main;

    display: flex;
    flex-direction: column;
}

.banner {
    flex: 0 1 300px;
    background-position: center;
    background-size: cover;

    box-shadow: 0 5px 50px black;
}
.content {
    flex: auto;

    display: flex;
    justify-content: center;
    align-items: center;
}

.content-wrapper {
    width: 98%;
    height: 95%;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: auto;
}

.content-wrapper > div {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
}

.owners-square {
    margin-top: 20px;
    max-width: 310px;
    height: 410px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: #FF3F00;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0px 0px 30px black;
}

.plus {
    width: 100px;
    height: auto;
}

.cock-size {
    height: 200px;
    width: auto;
    align-self: center;
}

.cock-size:hover, .owners-square:hover {
    transform: scale(1.2);
}

.owners-square > p {
    color:#000000;
}

.intro-wrapper {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: #283b2b;
    width: 100%;
    padding: 20px 0;

    flex-wrap: wrap;
}

.intro-wrapper > p {
    max-width: 500px;
    min-width: 300px;
    font-size: 1.5rem;

    flex: auto;
}
.owners {
    flex: 0 1 auto;
}

.owners-selfie{
    height: 300px;
    width: 225px;
    border-radius: 50px;
}

.footer {
    grid-area: footer;

    background-color: #283b2b;

    display: flex;
    justify-content: center;
    align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,cAAc;;IAEd,mJAAmJ;AACvJ;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,iCAAiC;IACjC;;mBAEe;AACnB;;AAEA;IACI,yBAAyB;IACzB,gCAAgC;;IAEhC,kBAAkB;;IAElB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;;IAE7B,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;;IAEnB,gBAAgB;IAChB,iBAAiB;;IAEjB,yBAAyB;IACzB,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;;IAEnB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,iBAAiB;;IAEjB,yBAAyB;IACzB,6BAA6B;IAC7B,gCAAgC;;IAEhC,wCAAwC;AAC5C;;AAEA;IACI,+BAA+B;IAC/B,qBAAqB;IACrB,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,yBAAyB;;IAEzB,eAAe;;IAEf,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,2BAA2B;IAC3B,sBAAsB;;IAEtB,4BAA4B;AAChC;AACA;IACI,UAAU;;IAEV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,WAAW;;IAEX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,yBAAyB;IACzB,WAAW;IACX,eAAe;;IAEf,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;;IAEjB,UAAU;AACd;AACA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;;IAEjB,yBAAyB;;IAEzB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    color: #EFF2F1;\n\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n}\n\nh1{\n    margin-top: 10px;\n    font-size: 4rem;\n}\n\nimg.chicken {\n    width: 100px;\n    height: auto;\n}\n\nimg.owners {\n    width: 350px;\n    height: auto;\n    border-radius: 50px;\n    border: 5px solid white;\n}\n\n#content {\n    width: 100%;\n    height: 100%;\n\n    display: grid;\n    grid-template: 10fr 1fr / 1fr 4fr;\n    grid-template-areas: \n    \"sidebar main\"\n    \"footer footer\";\n}\n\n.sidebar {\n    background-color: #FF3F00;\n    border-right: 10px solid #FFE900;\n    \n    grid-area: sidebar;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n\n    z-index: 2;\n}\n\n.logo {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    max-width: 110px;\n    font-weight: bold;\n\n    border: 2px solid #EFF2F1;\n    background-color: #002D72;\n    padding: 10px;\n}\n\n.links {\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    align-items: center;\n\n    width: 100%;\n}\n\n.links > a {\n    width: 100%;\n    height: 50px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    font-weight: bold;\n\n    background-color: #002D72;\n    border-top: 2px solid #000000;\n    border-bottom: 2px solid #000000;\n\n    transition: 0.4s, background-position 0s;\n}\n\n.links > a:hover {\n    border-right: 2px solid #000000;\n    transform: scale(1.2);\n    background-color: #EFF2F1;\n    color:#002D72;    \n}\n\n.main {    \n    background-color: #537A5A;\n\n    grid-area: main;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.banner {\n    flex: 0 1 300px;\n    background-position: center;\n    background-size: cover;\n\n    box-shadow: 0 5px 50px black;\n}\n.content {\n    flex: auto;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content-wrapper {\n    width: 98%;\n    height: 95%;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    overflow: auto;\n}\n\n.content-wrapper > div {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    flex-wrap: wrap;\n}\n\n.owners-square {\n    margin-top: 20px;\n    max-width: 310px;\n    height: 410px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    border: 1px solid black;\n    background-color: #FF3F00;\n    padding: 5px;\n    border-radius: 5px;\n    box-shadow: 0px 0px 30px black;\n}\n\n.plus {\n    width: 100px;\n    height: auto;\n}\n\n.cock-size {\n    height: 200px;\n    width: auto;\n    align-self: center;\n}\n\n.cock-size:hover, .owners-square:hover {\n    transform: scale(1.2);\n}\n\n.owners-square > p {\n    color:#000000;\n}\n\n.intro-wrapper {\n    margin-top: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    background-color: #283b2b;\n    width: 100%;\n    padding: 20px 0;\n\n    flex-wrap: wrap;\n}\n\n.intro-wrapper > p {\n    max-width: 500px;\n    min-width: 300px;\n    font-size: 1.5rem;\n\n    flex: auto;\n}\n.owners {\n    flex: 0 1 auto;\n}\n\n.owners-selfie{\n    height: 300px;\n    width: 225px;\n    border-radius: 50px;\n}\n\n.footer {\n    grid-area: footer;\n\n    background-color: #283b2b;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/about-content.js":
/*!******************************!*\
  !*** ./src/about-content.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _about_baner_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-baner.jpg */ "./src/about-baner.jpg");
/* harmony import */ var _saul_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saul.jpg */ "./src/saul.jpg");
/* harmony import */ var _gina_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gina.jpg */ "./src/gina.jpg");
/* harmony import */ var _plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plus.svg */ "./src/plus.svg");
/* harmony import */ var _equal_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equal.svg */ "./src/equal.svg");
/* harmony import */ var _black_portuguese_cock_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./black-portuguese-cock.png */ "./src/black-portuguese-cock.png");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function(){
    //Create elements
    const contentWrapper = document.createElement('div');
    const innerWrapper = document.createElement('div');

    const ginaSquare = document.createElement('div');
    const saulSquare = document.createElement('div');
    const title = document.createElement('h1');
    const plusImg = document.createElement('img');
    const equalImg = document.createElement('img');
    const chickenLove = document.createElement('img');

    const ginaImg = document.createElement('img');
    const ginaText = document.createElement('p');

    const saulImg = document.createElement('img');
    const saulText = document.createElement('p');

    //Add content to elements
    title.textContent = 'Meet the owners:'

    ginaImg.src = _gina_jpg__WEBPACK_IMPORTED_MODULE_2__;
    saulImg.src = _saul_jpg__WEBPACK_IMPORTED_MODULE_1__;
    plusImg.src = _plus_svg__WEBPACK_IMPORTED_MODULE_3__;
    equalImg.src = _equal_svg__WEBPACK_IMPORTED_MODULE_4__;
    chickenLove.src = _black_portuguese_cock_png__WEBPACK_IMPORTED_MODULE_5__;

    ginaText.textContent = 'Virginia Alves-Tavares, born in Toronto Canada, is the eldest daughter of a Portuguese family. Currently acting as the Main Chef she really knows chicken!';
    saulText.textContent = 'Saul Tavaes, born somewhere between Lisbon and Aveiro, is also from a Portuguese family. He is the manager of the establishment making sure everyone gets the best possible service & chicken!';

    //Add classes to elements
    ginaImg.classList.add('owners-selfie');
    saulImg.classList.add('owners-selfie');

    ginaSquare.classList.add('owners-square');
    saulSquare.classList.add('owners-square');

    plusImg.classList.add('plus');
    equalImg.classList.add('plus');
    chickenLove.classList.add('cock-size');

    contentWrapper.classList.add('content-wrapper');

    //Append elements
    ginaSquare.appendChild(ginaImg);
    ginaSquare.appendChild(ginaText);

    saulSquare.appendChild(saulImg);
    saulSquare.appendChild(saulText);

    innerWrapper.appendChild(ginaSquare);
    innerWrapper.appendChild(plusImg);
    innerWrapper.appendChild(saulSquare);
    innerWrapper.appendChild(equalImg);
    innerWrapper.appendChild(chickenLove);

    contentWrapper.appendChild(title);
    contentWrapper.appendChild(innerWrapper);

    return {contentWrapper, aboutBanner: _about_baner_jpg__WEBPACK_IMPORTED_MODULE_0__}
})()); 

/***/ }),

/***/ "./src/domMaker.js":
/*!*************************!*\
  !*** ./src/domMaker.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _food_drumstick_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-drumstick.svg */ "./src/food-drumstick.svg");
//Import logos


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function() {    
    //Cache DOM
    const body = document.querySelector('body');

    /*OUTTER ELEMENTS*/ 
    //Create elements
    const wrapper = document.createElement('div');
    const sideBarEl = document.createElement('div');
    const mainEl = document.createElement('div');
    const footerEl = document.createElement('div');

    const bannerEl = document.createElement('div');
    const contentEl = document.createElement('div');

    //Give elements classes
    wrapper.id = 'content';
    sideBarEl.classList.add('sidebar');
    mainEl.classList.add('main');
    bannerEl.classList.add('banner');
    contentEl.classList.add('content');
    footerEl.classList.add('footer');

    //Append elements
    body.appendChild(wrapper);

    wrapper.appendChild(sideBarEl);
    wrapper.appendChild(mainEl);
    wrapper.appendChild(footerEl);

    mainEl.appendChild(bannerEl);
    mainEl.appendChild(contentEl);

    /*INNER ELEMENTS*/
    //Create sidebar elements
    const logo = document.createElement('div');
    const chickenLogo = document.createElement('img');
    const logoText = document.createElement('p');

    const footerPEl = document.createElement('p');

    const linkContainer = document.createElement('div');
    const menuItems = [];
    for (let i = 0; i < 3; i++) {
        menuItems[i] = document.createElement('a');
        menuItems[i].classList.add('menu');
    }
    
    //Add element content
    chickenLogo.src = _food_drumstick_svg__WEBPACK_IMPORTED_MODULE_0__;
    logoText.textContent = 'Gina\'s Portuguese Chicken!';

    menuItems[0].textContent = 'HOME';
    menuItems[1].textContent = 'MENU';
    menuItems[2].textContent = 'ABOUT US';

    footerPEl.innerHTML = 'Made by <a href="https://github.com/Z3BINI">Z3BINI</a>';

    //Give elements classes
    linkContainer.classList.add('links');
    logo.classList.add('logo');
    chickenLogo.classList.add('chicken');

    //Append elements to parent
    logo.appendChild(chickenLogo);
    logo.appendChild(logoText);

    menuItems.forEach(menuItem => linkContainer.appendChild(menuItem));

    sideBarEl.appendChild(logo);
    sideBarEl.appendChild(linkContainer);

    footerEl.appendChild(footerPEl);

    return {bannerEl, contentEl}

})());

/***/ }),

/***/ "./src/home-content.js":
/*!*****************************!*\
  !*** ./src/home-content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _owners_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owners.jpg */ "./src/owners.jpg");
/* harmony import */ var _main_baner_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-baner.jpg */ "./src/main-baner.jpg");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function() {

    //Create container
    const contentWrapper = document.createElement('div');
    const introWrapper = document.createElement('div');
    const title = document.createElement('h1');
    const intro = document.createElement('p');
    const introPicture = document.createElement('img');


    //Give elements content
    title.textContent = 'World famous chicken!';
    intro.textContent = 'Welcome to Gina\'s chicken official website, we are proud to finally have one! You can look at our menu or find out more information about our restaurant.';
    introPicture.src = _owners_jpg__WEBPACK_IMPORTED_MODULE_0__;

    //Give elements necessary classes
    contentWrapper.classList.add('content-wrapper');
    introPicture.classList.add('owners');
    introWrapper.classList.add('intro-wrapper');

    //Append all elements to wrapper
    introWrapper.appendChild(intro);
    introWrapper.appendChild(introPicture);

    contentWrapper.appendChild(title);
    contentWrapper.appendChild(introWrapper);


    //Return content
    return {contentWrapper, mainBanner: _main_baner_jpg__WEBPACK_IMPORTED_MODULE_1__};
})());

/***/ }),

/***/ "./src/menu-content.js":
/*!*****************************!*\
  !*** ./src/menu-content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu_baner_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-baner.jpg */ "./src/menu-baner.jpg");
/* harmony import */ var _chicken_plate_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chicken-plate.jpg */ "./src/chicken-plate.jpg");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function() {
    //Create
    const contentWrapper = document.createElement('div');
    const innerWrapper = document.createElement('div');
    const title = document.createElement('h1');

    const gridSquares = [];
    const gridImgs = [];
    const gridTxts = [];

    
    //Lazy loop for menu mock elements
    for (let i = 0; i < 6; i++) {
        //Create mock menu squares & inner elements
        gridSquares[i] = document.createElement('div');
        gridImgs[i] = document.createElement('img');
        gridTxts[i] = document.createElement('p');

        //Give class to every square
        gridSquares[i].classList.add('grid-square');

        //Give mock content to every inner html element of square
        gridImgs[i].src = _chicken_plate_jpg__WEBPACK_IMPORTED_MODULE_1__;
        gridTxts[i].innerHTML = '<b>BBQ Chicken</b> servers 2. <br> 20€ - <i>includes 1 beer</i>';

        //Append current inner element to current outter elemenet
        gridSquares[i].appendChild(gridImgs[i]);
        gridSquares[i].appendChild(gridTxts[i]);

        //Append this created outter element to the outter wrapper
        innerWrapper.appendChild(gridSquares[i]);
    }
    title.textContent = 'The menu:';

    //Class
    innerWrapper.classList.add('menu-grid');
    contentWrapper.classList.add('content-wrapper');

    contentWrapper.appendChild(title);
    contentWrapper.appendChild(innerWrapper);
    
    return {contentWrapper, menuBanner: _menu_baner_jpg__WEBPACK_IMPORTED_MODULE_0__}
})());

/***/ }),

/***/ "./src/about-baner.jpg":
/*!*****************************!*\
  !*** ./src/about-baner.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b81f81391d449661f65.jpg";

/***/ }),

/***/ "./src/black-portuguese-cock.png":
/*!***************************************!*\
  !*** ./src/black-portuguese-cock.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ee50c12b0a72b300a3c.png";

/***/ }),

/***/ "./src/chicken-plate.jpg":
/*!*******************************!*\
  !*** ./src/chicken-plate.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad01d8c6b1d3895e8c7f.jpg";

/***/ }),

/***/ "./src/equal.svg":
/*!***********************!*\
  !*** ./src/equal.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8bc7fdde27df9a119bdf.svg";

/***/ }),

/***/ "./src/food-drumstick.svg":
/*!********************************!*\
  !*** ./src/food-drumstick.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2fd16ef3557835ed171.svg";

/***/ }),

/***/ "./src/gina.jpg":
/*!**********************!*\
  !*** ./src/gina.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "590663c9b344bc283051.jpg";

/***/ }),

/***/ "./src/main-baner.jpg":
/*!****************************!*\
  !*** ./src/main-baner.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42bc2aea448bd81cbcc3.jpg";

/***/ }),

/***/ "./src/menu-baner.jpg":
/*!****************************!*\
  !*** ./src/menu-baner.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d7be077566eceb32d36.jpg";

/***/ }),

/***/ "./src/owners.jpg":
/*!************************!*\
  !*** ./src/owners.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "481a44967b65649d9886.jpg";

/***/ }),

/***/ "./src/plus.svg":
/*!**********************!*\
  !*** ./src/plus.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64f3ae0f2597ae46488e.svg";

/***/ }),

/***/ "./src/saul.jpg":
/*!**********************!*\
  !*** ./src/saul.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5743a6586490b7c2bcdc.jpg";

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
/* harmony import */ var _domMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domMaker.js */ "./src/domMaker.js");
/* harmony import */ var _home_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-content.js */ "./src/home-content.js");
/* harmony import */ var _about_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-content.js */ "./src/about-content.js");
/* harmony import */ var _menu_content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-content.js */ "./src/menu-content.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const listener = (function() {
    //Cache DOM
    const menuOpts = document.querySelectorAll('a.menu');

    //Load HOME by default
    _domMaker_js__WEBPACK_IMPORTED_MODULE_0__["default"].contentEl.appendChild(_home_content_js__WEBPACK_IMPORTED_MODULE_1__["default"].contentWrapper);
    _domMaker_js__WEBPACK_IMPORTED_MODULE_0__["default"].bannerEl.style.backgroundImage = `url('${_home_content_js__WEBPACK_IMPORTED_MODULE_1__["default"].mainBanner}')`;

    //structure.bannerEl.body.style.backgroundImage = home.mainBanner;

    //Listen for menu clicks, call change page function
    menuOpts.forEach(optn => optn.addEventListener('click', (e) => changeContent(e.target.textContent)));

    //Change page function
    const changeContent = function(page) {
        //Clear current DOM content element
        _domMaker_js__WEBPACK_IMPORTED_MODULE_0__["default"].contentEl.innerHTML = '';

        switch(page) {
            case 'HOME':
                _domMaker_js__WEBPACK_IMPORTED_MODULE_0__["default"].contentEl.appendChild(_home_content_js__WEBPACK_IMPORTED_MODULE_1__["default"].contentWrapper);
                _domMaker_js__WEBPACK_IMPORTED_MODULE_0__["default"].bannerEl.style.backgroundImage = `url('${_home_content_js__WEBPACK_IMPORTED_MODULE_1__["default"].mainBanner}')`;
                break;
            case 'MENU':
                _domMaker_js__WEBPACK_IMPORTED_MODULE_0__["default"].contentEl.appendChild(_menu_content_js__WEBPACK_IMPORTED_MODULE_3__["default"].contentWrapper);
                _domMaker_js__WEBPACK_IMPORTED_MODULE_0__["default"].bannerEl.style.backgroundImage = `url('${_menu_content_js__WEBPACK_IMPORTED_MODULE_3__["default"].menuBanner}')`;
                break;
            case 'ABOUT US':
                _domMaker_js__WEBPACK_IMPORTED_MODULE_0__["default"].contentEl.appendChild(_about_content_js__WEBPACK_IMPORTED_MODULE_2__["default"].contentWrapper);
                _domMaker_js__WEBPACK_IMPORTED_MODULE_0__["default"].bannerEl.style.backgroundImage = `url('${_about_content_js__WEBPACK_IMPORTED_MODULE_2__["default"].aboutBanner}')`;
                break;
        }
    }
})();






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLE9BQU8sS0FBSyxZQUFZLGNBQWMsY0FBYyxXQUFXLFlBQVksYUFBYSxjQUFjLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksY0FBYyxjQUFjLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLGFBQWEsWUFBWSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksY0FBYyxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxjQUFjLFdBQVcsS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsNkJBQTZCLGdCQUFnQixpQkFBaUIsNkJBQTZCLHFCQUFxQiw0SkFBNEosR0FBRyxVQUFVLG1CQUFtQixvQkFBb0IsR0FBRyxPQUFPLHVCQUF1QixzQkFBc0IsR0FBRyxpQkFBaUIsbUJBQW1CLG1CQUFtQixHQUFHLGdCQUFnQixtQkFBbUIsbUJBQW1CLDBCQUEwQiw4QkFBOEIsR0FBRyxjQUFjLGtCQUFrQixtQkFBbUIsc0JBQXNCLHdDQUF3Qyx5RUFBeUUsR0FBRyxjQUFjLGdDQUFnQyx1Q0FBdUMsK0JBQStCLHNCQUFzQiw2QkFBNkIsMEJBQTBCLG9DQUFvQyxtQkFBbUIsR0FBRyxXQUFXLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQix5QkFBeUIsd0JBQXdCLGtDQUFrQyxnQ0FBZ0Msb0JBQW9CLEdBQUcsWUFBWSxvQkFBb0IsNkJBQTZCLGdCQUFnQiwwQkFBMEIsb0JBQW9CLEdBQUcsZ0JBQWdCLGtCQUFrQixtQkFBbUIsc0JBQXNCLDBCQUEwQiw4QkFBOEIsMEJBQTBCLGtDQUFrQyxvQ0FBb0MsdUNBQXVDLGlEQUFpRCxHQUFHLHNCQUFzQixzQ0FBc0MsNEJBQTRCLGdDQUFnQyx3QkFBd0IsR0FBRyxlQUFlLGdDQUFnQyx3QkFBd0Isc0JBQXNCLDZCQUE2QixHQUFHLGFBQWEsc0JBQXNCLGtDQUFrQyw2QkFBNkIscUNBQXFDLEdBQUcsWUFBWSxpQkFBaUIsc0JBQXNCLDhCQUE4QiwwQkFBMEIsR0FBRyxzQkFBc0IsaUJBQWlCLGtCQUFrQixzQkFBc0IsNkJBQTZCLDBCQUEwQix1QkFBdUIsR0FBRyw0QkFBNEIsb0JBQW9CLDhCQUE4QixnQkFBZ0Isc0JBQXNCLEdBQUcsb0JBQW9CLHVCQUF1Qix1QkFBdUIsb0JBQW9CLG9CQUFvQiw2QkFBNkIscUNBQXFDLDBCQUEwQiw4QkFBOEIsZ0NBQWdDLG1CQUFtQix5QkFBeUIscUNBQXFDLEdBQUcsV0FBVyxtQkFBbUIsbUJBQW1CLEdBQUcsZ0JBQWdCLG9CQUFvQixrQkFBa0IseUJBQXlCLEdBQUcsNENBQTRDLDRCQUE0QixHQUFHLHdCQUF3QixvQkFBb0IsR0FBRyxvQkFBb0IsdUJBQXVCLG9CQUFvQiwwQkFBMEIsOEJBQThCLGdCQUFnQixnQ0FBZ0Msa0JBQWtCLHNCQUFzQix3QkFBd0IsR0FBRyx3QkFBd0IsdUJBQXVCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxtQkFBbUIsb0JBQW9CLG1CQUFtQiwwQkFBMEIsR0FBRyxhQUFhLHdCQUF3QixrQ0FBa0Msc0JBQXNCLDhCQUE4QiwwQkFBMEIsR0FBRyxtQkFBbUI7QUFDbjRLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDaE8xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiNEM7QUFDZDtBQUNBO0FBQ0E7QUFDRTtBQUNlOztBQUUvQyxpRUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHNDQUFJO0FBQ3RCLGtCQUFrQixzQ0FBSTtBQUN0QixrQkFBa0Isc0NBQUk7QUFDdEIsbUJBQW1CLHVDQUFLO0FBQ3hCLHNCQUFzQix1REFBSTs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFlBQVksMkJBQTJCO0FBQ3ZDLENBQUMsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNuRUw7QUFDMEM7O0FBRTFDLGlFQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQU07QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLFlBQVk7O0FBRVosQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUU4QjtBQUNROztBQUUxQyxpRUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3Q0FBTTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0EsWUFBWSwwQkFBMEI7QUFDdEMsQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNzQztBQUNBOztBQUUxQyxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiwrQ0FBTztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q0o7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ0Q7QUFDRTtBQUNGO0FBQ2hCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLG9EQUFTLHVCQUF1Qix3REFBSTtBQUN4QyxJQUFJLG9EQUFTLDBDQUEwQyx3REFBSSxZQUFZOztBQUV2RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVM7O0FBRWpCO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVMsdUJBQXVCLHdEQUFJO0FBQ3BELGdCQUFnQixvREFBUywwQ0FBMEMsd0RBQUksWUFBWTtBQUNuRjtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFTLHVCQUF1Qix3REFBSTtBQUNwRCxnQkFBZ0Isb0RBQVMsMENBQTBDLHdEQUFJLFlBQVk7QUFDbkY7QUFDQTtBQUNBLGdCQUFnQixvREFBUyx1QkFBdUIseURBQUs7QUFDckQsZ0JBQWdCLG9EQUFTLDBDQUEwQyx5REFBSyxhQUFhO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RvbU1ha2VyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiAjRUZGMkYxO1xuXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuaDF7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDRyZW07XG59XG5cbmltZy5jaGlja2VuIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pbWcub3duZXJzIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG59XG5cbiNjb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDEwZnIgMWZyIC8gMWZyIDRmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICBcInNpZGViYXIgbWFpblwiXG4gICAgXCJmb290ZXIgZm9vdGVyXCI7XG59XG5cbi5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzRjAwO1xuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjRkZFOTAwO1xuICAgIFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgei1pbmRleDogMjtcbn1cblxuLmxvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgbWF4LXdpZHRoOiAxMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFRkYyRjE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMkQ3MjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDUwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubGlua3MgPiBhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJENzI7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDAwMDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDA7XG5cbiAgICB0cmFuc2l0aW9uOiAwLjRzLCBiYWNrZ3JvdW5kLXBvc2l0aW9uIDBzO1xufVxuXG4ubGlua3MgPiBhOmhvdmVyIHtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDAwMDAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGMkYxO1xuICAgIGNvbG9yOiMwMDJENzI7ICAgIFxufVxuXG4ubWFpbiB7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzdBNUE7XG5cbiAgICBncmlkLWFyZWE6IG1haW47XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5iYW5uZXIge1xuICAgIGZsZXg6IDAgMSAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDUwcHggYmxhY2s7XG59XG4uY29udGVudCB7XG4gICAgZmxleDogYXV0bztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBoZWlnaHQ6IDk1JTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jb250ZW50LXdyYXBwZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLm93bmVycy1zcXVhcmUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAzMTBweDtcbiAgICBoZWlnaHQ6IDQxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzRjAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IGJsYWNrO1xufVxuXG4ucGx1cyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmNvY2stc2l6ZSB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5jb2NrLXNpemU6aG92ZXIsIC5vd25lcnMtc3F1YXJlOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5vd25lcnMtc3F1YXJlID4gcCB7XG4gICAgY29sb3I6IzAwMDAwMDtcbn1cblxuLmludHJvLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzYjJiO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHggMDtcblxuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmludHJvLXdyYXBwZXIgPiBwIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG5cbiAgICBmbGV4OiBhdXRvO1xufVxuLm93bmVycyB7XG4gICAgZmxleDogMCAxIGF1dG87XG59XG5cbi5vd25lcnMtc2VsZmlle1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDIyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5mb290ZXIge1xuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4M2IyYjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixjQUFjOztJQUVkLG1KQUFtSjtBQUN2Sjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztJQUVaLGFBQWE7SUFDYixpQ0FBaUM7SUFDakM7O21CQUVlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdDQUFnQzs7SUFFaEMsa0JBQWtCOztJQUVsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7O0lBRTdCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7SUFFakIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1COztJQUVuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7SUFFWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7SUFFdkIsaUJBQWlCOztJQUVqQix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGdDQUFnQzs7SUFFaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5Qjs7SUFFekIsZUFBZTs7SUFFZixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixzQkFBc0I7O0lBRXRCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksVUFBVTs7SUFFVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXOztJQUVYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1COztJQUVuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTs7SUFFZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7O0lBRWpCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCOztJQUVqQix5QkFBeUI7O0lBRXpCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGNvbG9yOiAjRUZGMkYxO1xcblxcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmgxe1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbmltZy5jaGlja2VuIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbmltZy5vd25lcnMge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTBmciAxZnIgLyAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcInNpZGViYXIgbWFpblxcXCJcXG4gICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjNGMDA7XFxuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjRkZFOTAwO1xcbiAgICBcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgbWF4LXdpZHRoOiAxMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFRkYyRjE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJENzI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5saW5rcyA+IGEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJENzI7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDAwMDAwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDAwMDtcXG5cXG4gICAgdHJhbnNpdGlvbjogMC40cywgYmFja2dyb3VuZC1wb3NpdGlvbiAwcztcXG59XFxuXFxuLmxpbmtzID4gYTpob3ZlciB7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMDAwMDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjJGMTtcXG4gICAgY29sb3I6IzAwMkQ3MjsgICAgXFxufVxcblxcbi5tYWluIHsgICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzdBNUE7XFxuXFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmJhbm5lciB7XFxuICAgIGZsZXg6IDAgMSAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICBib3gtc2hhZG93OiAwIDVweCA1MHB4IGJsYWNrO1xcbn1cXG4uY29udGVudCB7XFxuICAgIGZsZXg6IGF1dG87XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDk4JTtcXG4gICAgaGVpZ2h0OiA5NSU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ub3duZXJzLXNxdWFyZSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1heC13aWR0aDogMzEwcHg7XFxuICAgIGhlaWdodDogNDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjNGMDA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggYmxhY2s7XFxufVxcblxcbi5wbHVzIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5jb2NrLXNpemUge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY29jay1zaXplOmhvdmVyLCAub3duZXJzLXNxdWFyZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLm93bmVycy1zcXVhcmUgPiBwIHtcXG4gICAgY29sb3I6IzAwMDAwMDtcXG59XFxuXFxuLmludHJvLXdyYXBwZXIge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzYjJiO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcblxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5pbnRyby13cmFwcGVyID4gcCB7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcblxcbiAgICBmbGV4OiBhdXRvO1xcbn1cXG4ub3duZXJzIHtcXG4gICAgZmxleDogMCAxIGF1dG87XFxufVxcblxcbi5vd25lcnMtc2VsZmlle1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMjI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4M2IyYjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYWJvdXRCYW5uZXIgZnJvbSAnLi9hYm91dC1iYW5lci5qcGcnO1xuaW1wb3J0IHNhdWwgZnJvbSAnLi9zYXVsLmpwZyc7XG5pbXBvcnQgZ2luYSBmcm9tICcuL2dpbmEuanBnJztcbmltcG9ydCBwbHVzIGZyb20gJy4vcGx1cy5zdmcnO1xuaW1wb3J0IGVxdWFsIGZyb20gJy4vZXF1YWwuc3ZnJztcbmltcG9ydCBjb2NrIGZyb20gJy4vYmxhY2stcG9ydHVndWVzZS1jb2NrLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbigpe1xuICAgIC8vQ3JlYXRlIGVsZW1lbnRzXG4gICAgY29uc3QgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbm5lcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGdpbmFTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzYXVsU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHBsdXNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBlcXVhbEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGNoaWNrZW5Mb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBjb25zdCBnaW5hSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgZ2luYVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb25zdCBzYXVsSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3Qgc2F1bFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAvL0FkZCBjb250ZW50IHRvIGVsZW1lbnRzXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnTWVldCB0aGUgb3duZXJzOidcblxuICAgIGdpbmFJbWcuc3JjID0gZ2luYTtcbiAgICBzYXVsSW1nLnNyYyA9IHNhdWw7XG4gICAgcGx1c0ltZy5zcmMgPSBwbHVzO1xuICAgIGVxdWFsSW1nLnNyYyA9IGVxdWFsO1xuICAgIGNoaWNrZW5Mb3ZlLnNyYyA9IGNvY2s7XG5cbiAgICBnaW5hVGV4dC50ZXh0Q29udGVudCA9ICdWaXJnaW5pYSBBbHZlcy1UYXZhcmVzLCBib3JuIGluIFRvcm9udG8gQ2FuYWRhLCBpcyB0aGUgZWxkZXN0IGRhdWdodGVyIG9mIGEgUG9ydHVndWVzZSBmYW1pbHkuIEN1cnJlbnRseSBhY3RpbmcgYXMgdGhlIE1haW4gQ2hlZiBzaGUgcmVhbGx5IGtub3dzIGNoaWNrZW4hJztcbiAgICBzYXVsVGV4dC50ZXh0Q29udGVudCA9ICdTYXVsIFRhdmFlcywgYm9ybiBzb21ld2hlcmUgYmV0d2VlbiBMaXNib24gYW5kIEF2ZWlybywgaXMgYWxzbyBmcm9tIGEgUG9ydHVndWVzZSBmYW1pbHkuIEhlIGlzIHRoZSBtYW5hZ2VyIG9mIHRoZSBlc3RhYmxpc2htZW50IG1ha2luZyBzdXJlIGV2ZXJ5b25lIGdldHMgdGhlIGJlc3QgcG9zc2libGUgc2VydmljZSAmIGNoaWNrZW4hJztcblxuICAgIC8vQWRkIGNsYXNzZXMgdG8gZWxlbWVudHNcbiAgICBnaW5hSW1nLmNsYXNzTGlzdC5hZGQoJ293bmVycy1zZWxmaWUnKTtcbiAgICBzYXVsSW1nLmNsYXNzTGlzdC5hZGQoJ293bmVycy1zZWxmaWUnKTtcblxuICAgIGdpbmFTcXVhcmUuY2xhc3NMaXN0LmFkZCgnb3duZXJzLXNxdWFyZScpO1xuICAgIHNhdWxTcXVhcmUuY2xhc3NMaXN0LmFkZCgnb3duZXJzLXNxdWFyZScpO1xuXG4gICAgcGx1c0ltZy5jbGFzc0xpc3QuYWRkKCdwbHVzJyk7XG4gICAgZXF1YWxJbWcuY2xhc3NMaXN0LmFkZCgncGx1cycpO1xuICAgIGNoaWNrZW5Mb3ZlLmNsYXNzTGlzdC5hZGQoJ2NvY2stc2l6ZScpO1xuXG4gICAgY29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC13cmFwcGVyJyk7XG5cbiAgICAvL0FwcGVuZCBlbGVtZW50c1xuICAgIGdpbmFTcXVhcmUuYXBwZW5kQ2hpbGQoZ2luYUltZyk7XG4gICAgZ2luYVNxdWFyZS5hcHBlbmRDaGlsZChnaW5hVGV4dCk7XG5cbiAgICBzYXVsU3F1YXJlLmFwcGVuZENoaWxkKHNhdWxJbWcpO1xuICAgIHNhdWxTcXVhcmUuYXBwZW5kQ2hpbGQoc2F1bFRleHQpO1xuXG4gICAgaW5uZXJXcmFwcGVyLmFwcGVuZENoaWxkKGdpbmFTcXVhcmUpO1xuICAgIGlubmVyV3JhcHBlci5hcHBlbmRDaGlsZChwbHVzSW1nKTtcbiAgICBpbm5lcldyYXBwZXIuYXBwZW5kQ2hpbGQoc2F1bFNxdWFyZSk7XG4gICAgaW5uZXJXcmFwcGVyLmFwcGVuZENoaWxkKGVxdWFsSW1nKTtcbiAgICBpbm5lcldyYXBwZXIuYXBwZW5kQ2hpbGQoY2hpY2tlbkxvdmUpO1xuXG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGlubmVyV3JhcHBlcik7XG5cbiAgICByZXR1cm4ge2NvbnRlbnRXcmFwcGVyLCBhYm91dEJhbm5lcn1cbn0pKCk7ICIsIi8vSW1wb3J0IGxvZ29zXG5pbXBvcnQgcG9rcG9rIGZyb20gJy4vZm9vZC1kcnVtc3RpY2suc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKCkgeyAgICBcbiAgICAvL0NhY2hlIERPTVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICAvKk9VVFRFUiBFTEVNRU5UUyovIFxuICAgIC8vQ3JlYXRlIGVsZW1lbnRzXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNpZGVCYXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1haW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvb3RlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBiYW5uZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy9HaXZlIGVsZW1lbnRzIGNsYXNzZXNcbiAgICB3cmFwcGVyLmlkID0gJ2NvbnRlbnQnO1xuICAgIHNpZGVCYXJFbC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgbWFpbkVsLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBiYW5uZXJFbC5jbGFzc0xpc3QuYWRkKCdiYW5uZXInKTtcbiAgICBjb250ZW50RWwuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIGZvb3RlckVsLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgLy9BcHBlbmQgZWxlbWVudHNcbiAgICBib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChzaWRlQmFyRWwpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobWFpbkVsKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGZvb3RlckVsKTtcblxuICAgIG1haW5FbC5hcHBlbmRDaGlsZChiYW5uZXJFbCk7XG4gICAgbWFpbkVsLmFwcGVuZENoaWxkKGNvbnRlbnRFbCk7XG5cbiAgICAvKklOTkVSIEVMRU1FTlRTKi9cbiAgICAvL0NyZWF0ZSBzaWRlYmFyIGVsZW1lbnRzXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoaWNrZW5Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb25zdCBmb290ZXJQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgbWVudUl0ZW1zW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBtZW51SXRlbXNbaV0uY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIH1cbiAgICBcbiAgICAvL0FkZCBlbGVtZW50IGNvbnRlbnRcbiAgICBjaGlja2VuTG9nby5zcmMgPSBwb2twb2s7XG4gICAgbG9nb1RleHQudGV4dENvbnRlbnQgPSAnR2luYVxcJ3MgUG9ydHVndWVzZSBDaGlja2VuISc7XG5cbiAgICBtZW51SXRlbXNbMF0udGV4dENvbnRlbnQgPSAnSE9NRSc7XG4gICAgbWVudUl0ZW1zWzFdLnRleHRDb250ZW50ID0gJ01FTlUnO1xuICAgIG1lbnVJdGVtc1syXS50ZXh0Q29udGVudCA9ICdBQk9VVCBVUyc7XG5cbiAgICBmb290ZXJQRWwuaW5uZXJIVE1MID0gJ01hZGUgYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9aM0JJTklcIj5aM0JJTkk8L2E+JztcblxuICAgIC8vR2l2ZSBlbGVtZW50cyBjbGFzc2VzXG4gICAgbGlua0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaW5rcycpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGNoaWNrZW5Mb2dvLmNsYXNzTGlzdC5hZGQoJ2NoaWNrZW4nKTtcblxuICAgIC8vQXBwZW5kIGVsZW1lbnRzIHRvIHBhcmVudFxuICAgIGxvZ28uYXBwZW5kQ2hpbGQoY2hpY2tlbkxvZ28pO1xuICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xuXG4gICAgbWVudUl0ZW1zLmZvckVhY2gobWVudUl0ZW0gPT4gbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbSkpO1xuXG4gICAgc2lkZUJhckVsLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIHNpZGVCYXJFbC5hcHBlbmRDaGlsZChsaW5rQ29udGFpbmVyKTtcblxuICAgIGZvb3RlckVsLmFwcGVuZENoaWxkKGZvb3RlclBFbCk7XG5cbiAgICByZXR1cm4ge2Jhbm5lckVsLCBjb250ZW50RWx9XG5cbn0pKCk7IiwiaW1wb3J0IG93bmVycyBmcm9tICcuL293bmVycy5qcGcnO1xuaW1wb3J0IG1haW5CYW5uZXIgZnJvbSAnLi9tYWluLWJhbmVyLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbigpIHtcblxuICAgIC8vQ3JlYXRlIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW50cm9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGludHJvUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG5cbiAgICAvL0dpdmUgZWxlbWVudHMgY29udGVudFxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1dvcmxkIGZhbW91cyBjaGlja2VuISc7XG4gICAgaW50cm8udGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBHaW5hXFwncyBjaGlja2VuIG9mZmljaWFsIHdlYnNpdGUsIHdlIGFyZSBwcm91ZCB0byBmaW5hbGx5IGhhdmUgb25lISBZb3UgY2FuIGxvb2sgYXQgb3VyIG1lbnUgb3IgZmluZCBvdXQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBvdXIgcmVzdGF1cmFudC4nO1xuICAgIGludHJvUGljdHVyZS5zcmMgPSBvd25lcnM7XG5cbiAgICAvL0dpdmUgZWxlbWVudHMgbmVjZXNzYXJ5IGNsYXNzZXNcbiAgICBjb250ZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXdyYXBwZXInKTtcbiAgICBpbnRyb1BpY3R1cmUuY2xhc3NMaXN0LmFkZCgnb3duZXJzJyk7XG4gICAgaW50cm9XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ludHJvLXdyYXBwZXInKTtcblxuICAgIC8vQXBwZW5kIGFsbCBlbGVtZW50cyB0byB3cmFwcGVyXG4gICAgaW50cm9XcmFwcGVyLmFwcGVuZENoaWxkKGludHJvKTtcbiAgICBpbnRyb1dyYXBwZXIuYXBwZW5kQ2hpbGQoaW50cm9QaWN0dXJlKTtcblxuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChpbnRyb1dyYXBwZXIpO1xuXG5cbiAgICAvL1JldHVybiBjb250ZW50XG4gICAgcmV0dXJuIHtjb250ZW50V3JhcHBlciwgbWFpbkJhbm5lcn07XG59KSgpOyIsImltcG9ydCBtZW51QmFubmVyIGZyb20gJy4vbWVudS1iYW5lci5qcGcnO1xuaW1wb3J0IGNoaWNrZW4gZnJvbSAnLi9jaGlja2VuLXBsYXRlLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbigpIHtcbiAgICAvL0NyZWF0ZVxuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5uZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgY29uc3QgZ3JpZFNxdWFyZXMgPSBbXTtcbiAgICBjb25zdCBncmlkSW1ncyA9IFtdO1xuICAgIGNvbnN0IGdyaWRUeHRzID0gW107XG5cbiAgICBcbiAgICAvL0xhenkgbG9vcCBmb3IgbWVudSBtb2NrIGVsZW1lbnRzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgLy9DcmVhdGUgbW9jayBtZW51IHNxdWFyZXMgJiBpbm5lciBlbGVtZW50c1xuICAgICAgICBncmlkU3F1YXJlc1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkSW1nc1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBncmlkVHh0c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAvL0dpdmUgY2xhc3MgdG8gZXZlcnkgc3F1YXJlXG4gICAgICAgIGdyaWRTcXVhcmVzW2ldLmNsYXNzTGlzdC5hZGQoJ2dyaWQtc3F1YXJlJyk7XG5cbiAgICAgICAgLy9HaXZlIG1vY2sgY29udGVudCB0byBldmVyeSBpbm5lciBodG1sIGVsZW1lbnQgb2Ygc3F1YXJlXG4gICAgICAgIGdyaWRJbWdzW2ldLnNyYyA9IGNoaWNrZW47XG4gICAgICAgIGdyaWRUeHRzW2ldLmlubmVySFRNTCA9ICc8Yj5CQlEgQ2hpY2tlbjwvYj4gc2VydmVycyAyLiA8YnI+IDIw4oKsIC0gPGk+aW5jbHVkZXMgMSBiZWVyPC9pPic7XG5cbiAgICAgICAgLy9BcHBlbmQgY3VycmVudCBpbm5lciBlbGVtZW50IHRvIGN1cnJlbnQgb3V0dGVyIGVsZW1lbmV0XG4gICAgICAgIGdyaWRTcXVhcmVzW2ldLmFwcGVuZENoaWxkKGdyaWRJbWdzW2ldKTtcbiAgICAgICAgZ3JpZFNxdWFyZXNbaV0uYXBwZW5kQ2hpbGQoZ3JpZFR4dHNbaV0pO1xuXG4gICAgICAgIC8vQXBwZW5kIHRoaXMgY3JlYXRlZCBvdXR0ZXIgZWxlbWVudCB0byB0aGUgb3V0dGVyIHdyYXBwZXJcbiAgICAgICAgaW5uZXJXcmFwcGVyLmFwcGVuZENoaWxkKGdyaWRTcXVhcmVzW2ldKTtcbiAgICB9XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIG1lbnU6JztcblxuICAgIC8vQ2xhc3NcbiAgICBpbm5lcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1ncmlkJyk7XG4gICAgY29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC13cmFwcGVyJyk7XG5cbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5uZXJXcmFwcGVyKTtcbiAgICBcbiAgICByZXR1cm4ge2NvbnRlbnRXcmFwcGVyLCBtZW51QmFubmVyfVxufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBzdHJ1Y3R1cmUgZnJvbSAnLi9kb21NYWtlci5qcyc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUtY29udGVudC5qcyc7XG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dC1jb250ZW50LmpzJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudS1jb250ZW50LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBsaXN0ZW5lciA9IChmdW5jdGlvbigpIHtcbiAgICAvL0NhY2hlIERPTVxuICAgIGNvbnN0IG1lbnVPcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYS5tZW51Jyk7XG5cbiAgICAvL0xvYWQgSE9NRSBieSBkZWZhdWx0XG4gICAgc3RydWN0dXJlLmNvbnRlbnRFbC5hcHBlbmRDaGlsZChob21lLmNvbnRlbnRXcmFwcGVyKTtcbiAgICBzdHJ1Y3R1cmUuYmFubmVyRWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtob21lLm1haW5CYW5uZXJ9JylgO1xuXG4gICAgLy9zdHJ1Y3R1cmUuYmFubmVyRWwuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBob21lLm1haW5CYW5uZXI7XG5cbiAgICAvL0xpc3RlbiBmb3IgbWVudSBjbGlja3MsIGNhbGwgY2hhbmdlIHBhZ2UgZnVuY3Rpb25cbiAgICBtZW51T3B0cy5mb3JFYWNoKG9wdG4gPT4gb3B0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjaGFuZ2VDb250ZW50KGUudGFyZ2V0LnRleHRDb250ZW50KSkpO1xuXG4gICAgLy9DaGFuZ2UgcGFnZSBmdW5jdGlvblxuICAgIGNvbnN0IGNoYW5nZUNvbnRlbnQgPSBmdW5jdGlvbihwYWdlKSB7XG4gICAgICAgIC8vQ2xlYXIgY3VycmVudCBET00gY29udGVudCBlbGVtZW50XG4gICAgICAgIHN0cnVjdHVyZS5jb250ZW50RWwuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgc3dpdGNoKHBhZ2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ0hPTUUnOlxuICAgICAgICAgICAgICAgIHN0cnVjdHVyZS5jb250ZW50RWwuYXBwZW5kQ2hpbGQoaG9tZS5jb250ZW50V3JhcHBlcik7XG4gICAgICAgICAgICAgICAgc3RydWN0dXJlLmJhbm5lckVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aG9tZS5tYWluQmFubmVyfScpYDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ01FTlUnOlxuICAgICAgICAgICAgICAgIHN0cnVjdHVyZS5jb250ZW50RWwuYXBwZW5kQ2hpbGQobWVudS5jb250ZW50V3JhcHBlcik7XG4gICAgICAgICAgICAgICAgc3RydWN0dXJlLmJhbm5lckVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7bWVudS5tZW51QmFubmVyfScpYDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FCT1VUIFVTJzpcbiAgICAgICAgICAgICAgICBzdHJ1Y3R1cmUuY29udGVudEVsLmFwcGVuZENoaWxkKGFib3V0LmNvbnRlbnRXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBzdHJ1Y3R1cmUuYmFubmVyRWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHthYm91dC5hYm91dEJhbm5lcn0nKWA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==