"use strict";
(self["webpackChunkproject_restaurant_page"] = self["webpackChunkproject_restaurant_page"] || []).push([["index"],{

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg.jpg */ "./src/images/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  height: 100vh;\n  font-family: \"Mochiy Pop One\", sans-serif;\n  width: 100%;\n}\n#content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n#header {\n  background-color: #393d3f;\n  color: whitesmoke;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 50px;\n  -webkit-box-shadow: 0px 8px 13px -5px rgba(43, 43, 43, 1);\n  -moz-box-shadow: 0px 8px 13px -5px rgba(43, 43, 43, 1);\n  box-shadow: 0px 8px 13px -5px rgba(43, 43, 43, 1);\n  position: relative;\n  z-index: 10;\n}\n#header h1 {\n  cursor: pointer;\n}\n#header h1:hover {\n  color: #ced3dc;\n}\n\n#header-menu {\n  display: flex;\n  gap: 20px;\n}\n#header-menu p:hover {\n  color: #ced3dc;\n}\n\n#header-menu p {\n  cursor: pointer;\n  font-size: 2.5vh;\n}\n#main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n#hero {\n  text-align: center;\n  color: whitesmoke;\n  padding: 10%;\n}\n#hero h2 {\n  font-size: 5vh;\n  margin: 0;\n}\n#hero h3 {\n  font-size: 4vh;\n  margin: 0;\n}\n#order-button {\n  padding: 20px;\n  border-radius: 20px;\n  font-size: 2vh;\n  font-family: \"Mochiy Pop One\", sans-serif;\n  color: #393d3f;\n  cursor: pointer;\n  border: 0;\n  margin: 10px;\n}\n#order-button:hover {\n  background-color: #393d3f;\n  color: whitesmoke;\n}\n#main-menu {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  margin: 0;\n}\n#hero-menu {\n  height: 80%;\n  width: 50%;\n  min-width: 550px;\n  gap: 2px;\n  border-radius: 50px;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin: 0 50px;\n}\n.dishes {\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  font-size: 2vh;\n  font-weight: lighter;\n  background-color: rgba(250, 245, 245, 0.9);\n  gap: 10px;\n}\n#hero-menu img {\n  width: 150px;\n  height: 150px;\n}\n#hero-title-menu {\n  color: whitesmoke;\n  border-bottom: 2px whitesmoke solid;\n}\n#hero-contact {\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  font-size: 2vh;\n  font-weight: lighter;\n  background-color: rgba(250, 245, 245, 0.9);\n  gap: 10px;\n  border-radius: 10px;\n}\n@media screen and (max-width: 768px) {\n  #header {\n    padding: 0 10px;\n  }\n  #header-menu p {\n    font-size: 1.5vh;\n    flex-wrap: wrap;\n    gap: 5px;\n  }\n  #header h1 {\n    font-size: 2vh;\n  }\n  #hero h2 {\n    font-size: 2.5vh;\n    margin: 0;\n  }\n  #hero h3 {\n    font-size: 2vh;\n    margin: 0;\n  }\n  #hero-menu img {\n    width: 75px;\n    height: 75px;\n  }\n  #hero-menu {\n    height: fit-content;\n    width: fit-content;\n    margin: 0 20px;\n  }\n  .dishes {\n    font-size: 1.2vh;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;EACE,SAAS;EACT,aAAa;EACb,yCAAyC;EACzC,WAAW;AACb;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,yDAAyD;EACzD,sDAAsD;EACtD,iDAAiD;EACjD,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,eAAe;AACjB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,yDAAsC;EACtC,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,cAAc;EACd,SAAS;AACX;AACA;EACE,cAAc;EACd,SAAS;AACX;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,yCAAyC;EACzC,cAAc;EACd,eAAe;EACf,SAAS;EACT,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,yDAAsC;EACtC,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,WAAW;EACX,UAAU;EACV,gBAAgB;EAChB,QAAQ;EACR,mBAAmB;EACnB,aAAa;EACb,gDAAgD;EAChD,cAAc;AAChB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,cAAc;EACd,oBAAoB;EACpB,0CAA0C;EAC1C,SAAS;AACX;AACA;EACE,YAAY;EACZ,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,mCAAmC;AACrC;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,cAAc;EACd,oBAAoB;EACpB,0CAA0C;EAC1C,SAAS;EACT,mBAAmB;AACrB;AACA;EACE;IACE,eAAe;EACjB;EACA;IACE,gBAAgB;IAChB,eAAe;IACf,QAAQ;EACV;EACA;IACE,cAAc;EAChB;EACA;IACE,gBAAgB;IAChB,SAAS;EACX;EACA;IACE,cAAc;IACd,SAAS;EACX;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;EAChB;EACA;IACE,gBAAgB;EAClB;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap\");\nbody {\n  margin: 0;\n  height: 100vh;\n  font-family: \"Mochiy Pop One\", sans-serif;\n  width: 100%;\n}\n#content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n#header {\n  background-color: #393d3f;\n  color: whitesmoke;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 50px;\n  -webkit-box-shadow: 0px 8px 13px -5px rgba(43, 43, 43, 1);\n  -moz-box-shadow: 0px 8px 13px -5px rgba(43, 43, 43, 1);\n  box-shadow: 0px 8px 13px -5px rgba(43, 43, 43, 1);\n  position: relative;\n  z-index: 10;\n}\n#header h1 {\n  cursor: pointer;\n}\n#header h1:hover {\n  color: #ced3dc;\n}\n\n#header-menu {\n  display: flex;\n  gap: 20px;\n}\n#header-menu p:hover {\n  color: #ced3dc;\n}\n\n#header-menu p {\n  cursor: pointer;\n  font-size: 2.5vh;\n}\n#main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-image: url(./images/bg.jpg);\n  background-size: cover;\n}\n#hero {\n  text-align: center;\n  color: whitesmoke;\n  padding: 10%;\n}\n#hero h2 {\n  font-size: 5vh;\n  margin: 0;\n}\n#hero h3 {\n  font-size: 4vh;\n  margin: 0;\n}\n#order-button {\n  padding: 20px;\n  border-radius: 20px;\n  font-size: 2vh;\n  font-family: \"Mochiy Pop One\", sans-serif;\n  color: #393d3f;\n  cursor: pointer;\n  border: 0;\n  margin: 10px;\n}\n#order-button:hover {\n  background-color: #393d3f;\n  color: whitesmoke;\n}\n#main-menu {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-image: url(./images/bg.jpg);\n  background-size: cover;\n  margin: 0;\n}\n#hero-menu {\n  height: 80%;\n  width: 50%;\n  min-width: 550px;\n  gap: 2px;\n  border-radius: 50px;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin: 0 50px;\n}\n.dishes {\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  font-size: 2vh;\n  font-weight: lighter;\n  background-color: rgba(250, 245, 245, 0.9);\n  gap: 10px;\n}\n#hero-menu img {\n  width: 150px;\n  height: 150px;\n}\n#hero-title-menu {\n  color: whitesmoke;\n  border-bottom: 2px whitesmoke solid;\n}\n#hero-contact {\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  font-size: 2vh;\n  font-weight: lighter;\n  background-color: rgba(250, 245, 245, 0.9);\n  gap: 10px;\n  border-radius: 10px;\n}\n@media screen and (max-width: 768px) {\n  #header {\n    padding: 0 10px;\n  }\n  #header-menu p {\n    font-size: 1.5vh;\n    flex-wrap: wrap;\n    gap: 5px;\n  }\n  #header h1 {\n    font-size: 2vh;\n  }\n  #hero h2 {\n    font-size: 2.5vh;\n    margin: 0;\n  }\n  #hero h3 {\n    font-size: 2vh;\n    margin: 0;\n  }\n  #hero-menu img {\n    width: 75px;\n    height: 75px;\n  }\n  #hero-menu {\n    height: fit-content;\n    width: fit-content;\n    margin: 0 20px;\n  }\n  .dishes {\n    font-size: 1.2vh;\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadHome */ "./src/loadHome.js");
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadPage */ "./src/loadPage.js");
/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadMenu */ "./src/loadMenu.js");
/* harmony import */ var _loadContact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadContact */ "./src/loadContact.js");






(0,_loadPage__WEBPACK_IMPORTED_MODULE_2__.loadPage)()
;(0,_loadHome__WEBPACK_IMPORTED_MODULE_1__.loadHome)()

const content = document.getElementById("content")

const homeBtn = document.getElementById("Home")
const menuBtn = document.getElementById("Menu")
const contactBtn = document.getElementById("Contact")

homeBtn.onclick = () => {
  content.innerHTML = ""
  ;(0,_loadHome__WEBPACK_IMPORTED_MODULE_1__.loadHome)()
}
menuBtn.onclick = () => {
  content.innerHTML = ""
  ;(0,_loadMenu__WEBPACK_IMPORTED_MODULE_3__.loadMenu)()
}
contactBtn.onclick = () => {
  content.innerHTML = ""
  ;(0,_loadContact__WEBPACK_IMPORTED_MODULE_4__.loadContact)()
}


/***/ }),

/***/ "./src/loadContact.js":
/*!****************************!*\
  !*** ./src/loadContact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _images_address_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/address.png */ "./src/images/address.png");
/* harmony import */ var _images_phone_call_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/phone-call.png */ "./src/images/phone-call.png");
/* harmony import */ var _images_open_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/open.png */ "./src/images/open.png");



const main = document.createElement("div")
const hero = document.createElement("div")
const heroTitle = document.createElement("h2")

function setupLayout() {
  content.appendChild(main)
}
function setupMain() {
  main.appendChild(heroTitle)

  main.id = "main-menu"
  main.appendChild(hero)

  hero.id = "hero-contact"

  heroTitle.textContent = "Contact"
  heroTitle.id = "hero-title-menu"

  //Info divs

  const contactInfo = document.createElement("div")
  hero.appendChild(contactInfo)

  //Contact infos

  const address = document.createElement("p")
  const addressImg = document.createElement("img")
  addressImg.src = _images_address_png__WEBPACK_IMPORTED_MODULE_0__
  address.appendChild(addressImg)

  const openHours = document.createElement("p")
  const openImg = document.createElement("img")
  openImg.src = _images_open_png__WEBPACK_IMPORTED_MODULE_2__

  const phone = document.createElement("p")
  const phoneImg = document.createElement("img")
  phoneImg.src = _images_phone_call_png__WEBPACK_IMPORTED_MODULE_1__

  //Fill contact infos

  address.textContent =
    "Cnr Hanlan St & The, Esplanade, Surfers Paradise QLD 4217, Australia"
  openHours.textContent = "Mon - Sun:  7:00 am - 11:00 pm"
  phone.textContent = "(111) - 228 4444"

  //Append contact infos
  contactInfo.appendChild(address)
  contactInfo.appendChild(openHours)
  contactInfo.appendChild(phone)
}

function loadContact() {
  setupLayout()
  setupMain()
}


/***/ }),

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
const main = document.createElement("div")
const hero = document.createElement("div")
const heroContent = document.createElement("h2")

function setupLayout() {
  content.appendChild(main)
}

function setupMain() {
  main.id = "main"
  main.appendChild(hero)

  hero.id = "hero"
  hero.appendChild(heroContent)

  heroContent.textContent = "Spicy and Dicey delicious food!"
  heroContent.id = "hero-content"

  const heroSubContent = document.createElement("h3")
  const orderBtn = document.createElement("button")

  heroContent.appendChild(heroSubContent)
  heroContent.appendChild(orderBtn)

  heroSubContent.textContent = "Tasty and affordable!"
  heroSubContent.id = "hero-sub-content"

  orderBtn.textContent = "Order Now"
  orderBtn.id = "order-button"
}

function loadHome() {
  setupLayout()
  setupMain()
}


/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _images_food1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/food1.png */ "./src/images/food1.png");
/* harmony import */ var _images_food2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/food2.png */ "./src/images/food2.png");
/* harmony import */ var _images_food3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/food3.png */ "./src/images/food3.png");
/* harmony import */ var _images_food4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/food4.png */ "./src/images/food4.png");





content.innerHTML = ""

const main = document.createElement("div")
const hero = document.createElement("div")
const heroTitle = document.createElement("h2")

function setupLayout() {
  content.appendChild(main)
}

function setupMain() {
  main.id = "main-menu"
  main.appendChild(heroTitle)
  main.appendChild(hero)

  heroTitle.textContent = "Menu"
  heroTitle.id = "hero-title-menu"
  hero.id = "hero-menu"

  // Fish dish

  const fish = document.createElement("div")
  const fishImage = document.createElement("img")
  const fishText = document.createElement("p")

  fish.className = "dishes"
  fishImage.src = _images_food1_png__WEBPACK_IMPORTED_MODULE_0__
  fish.textContent =
    "Nestle leeks, potato and capers around salmon fillets to make this easy traybake for two. It's great as an midweek meal, or for a more romantic occasion"
  fish.appendChild(fishImage)
  fish.appendChild(fishText)

  //Pasta Dish

  const pasta = document.createElement("div")
  const pastaImage = document.createElement("img")
  const pastaText = document.createElement("p")

  pasta.className = "dishes"
  pastaImage.src = _images_food2_png__WEBPACK_IMPORTED_MODULE_1__
  pasta.textContent =
    "Sit back and tuck into a big bowl of pasta alla vodka, a creamy tomato pasta with – as you can guess – vodka, which balances out the intense flavours"
  pasta.appendChild(pastaImage)
  pasta.appendChild(pastaText)

  //Soup Dish

  const soup = document.createElement("div")
  const soupImage = document.createElement("img")
  const soupText = document.createElement("p")

  soup.className = "dishes"
  soupImage.src = _images_food3_png__WEBPACK_IMPORTED_MODULE_2__
  soup.textContent =
    "A delicious, spicy blend packed full of iron and low in fat to boot. It's ready in under half an hour, or can be made in a slow cooker"
  soup.appendChild(soupImage)
  soup.appendChild(soupText)

  //Rice Dish

  const rice = document.createElement("div")
  const riceImage = document.createElement("img")
  const riceText = document.createElement("p")

  rice.className = "dishes"
  riceImage.src = _images_food4_png__WEBPACK_IMPORTED_MODULE_3__
  rice.textContent =
    "Encourage kids to get creative in the kitchen with our rainbow fried rice recipe – it's been designed to be easy for children to follow"
  rice.appendChild(riceImage)
  rice.appendChild(riceText)

  //Append dishes

  hero.appendChild(fish)
  hero.appendChild(pasta)
  hero.appendChild(soup)
  hero.appendChild(rice)
}

function loadMenu() {
  setupLayout()
  setupMain()
}


/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage)
/* harmony export */ });
const content = document.getElementById("content")
const header = document.getElementById("header")

const headerContent = document.createElement("h1")
const headerMenu = document.createElement("div")

function setupHeader() {
  header.id = "header"
  headerMenu.id = "header-menu"
  const menu = ["Home", "Menu", "Contact"]

  header.appendChild(headerContent)
  header.appendChild(headerMenu)

  headerContent.textContent = "Spicy-and-Dicey"

  menu.forEach((element) => {
    let menuItem = document.createElement("p")
    headerMenu.appendChild(menuItem)
    menuItem.id = element
    menuItem.textContent = element
  })
}

function loadPage() {
  setupHeader()
}


/***/ }),

/***/ "./src/images/address.png":
/*!********************************!*\
  !*** ./src/images/address.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "564096bfd84486229c0c.png";

/***/ }),

/***/ "./src/images/bg.jpg":
/*!***************************!*\
  !*** ./src/images/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5587b59bffebb1bae56.jpg";

/***/ }),

/***/ "./src/images/food1.png":
/*!******************************!*\
  !*** ./src/images/food1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a499cc957f7d13dacf07.png";

/***/ }),

/***/ "./src/images/food2.png":
/*!******************************!*\
  !*** ./src/images/food2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b8f8845bbbb7474434c.png";

/***/ }),

/***/ "./src/images/food3.png":
/*!******************************!*\
  !*** ./src/images/food3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bec5be57b1131481bcec.png";

/***/ }),

/***/ "./src/images/food4.png":
/*!******************************!*\
  !*** ./src/images/food4.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5b4d9e3f7e0f762c00d.png";

/***/ }),

/***/ "./src/images/open.png":
/*!*****************************!*\
  !*** ./src/images/open.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8147fd4c3cc8a647103a.png";

/***/ }),

/***/ "./src/images/phone-call.png":
/*!***********************************!*\
  !*** ./src/images/phone-call.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20a0ed4204215b0502d9.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsOENBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDhDQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsOENBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDhDQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkQ29udGFjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkSG9tZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkTWVudS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb2NoaXkrUG9wK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb2NoaXkgUG9wIE9uZVxcXCIsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI2hlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzZDNmO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgNTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDhweCAxM3B4IC01cHggcmdiYSg0MywgNDMsIDQzLCAxKTtcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDhweCAxM3B4IC01cHggcmdiYSg0MywgNDMsIDQzLCAxKTtcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTNweCAtNXB4IHJnYmEoNDMsIDQzLCA0MywgMSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuI2hlYWRlciBoMSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNoZWFkZXIgaDE6aG92ZXIge1xcbiAgY29sb3I6ICNjZWQzZGM7XFxufVxcblxcbiNoZWFkZXItbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4jaGVhZGVyLW1lbnUgcDpob3ZlciB7XFxuICBjb2xvcjogI2NlZDNkYztcXG59XFxuXFxuI2hlYWRlci1tZW51IHAge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyLjV2aDtcXG59XFxuI21haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4jaGVybyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDEwJTtcXG59XFxuI2hlcm8gaDIge1xcbiAgZm9udC1zaXplOiA1dmg7XFxuICBtYXJnaW46IDA7XFxufVxcbiNoZXJvIGgzIHtcXG4gIGZvbnQtc2l6ZTogNHZoO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4jb3JkZXItYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZm9udC1zaXplOiAydmg7XFxuICBmb250LWZhbWlseTogXFxcIk1vY2hpeSBQb3AgT25lXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMzkzZDNmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG4jb3JkZXItYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNkM2Y7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuI21haW4tbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4jaGVyby1tZW51IHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1pbi13aWR0aDogNTUwcHg7XFxuICBnYXA6IDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbiAgbWFyZ2luOiAwIDUwcHg7XFxufVxcbi5kaXNoZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAydmg7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNDUsIDI0NSwgMC45KTtcXG4gIGdhcDogMTBweDtcXG59XFxuI2hlcm8tbWVudSBpbWcge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuI2hlcm8tdGl0bGUtbWVudSB7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCB3aGl0ZXNtb2tlIHNvbGlkO1xcbn1cXG4jaGVyby1jb250YWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMnZoO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjQ1LCAyNDUsIDAuOSk7XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgI2hlYWRlciB7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gIH1cXG4gICNoZWFkZXItbWVudSBwIHtcXG4gICAgZm9udC1zaXplOiAxLjV2aDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDVweDtcXG4gIH1cXG4gICNoZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gIH1cXG4gICNoZXJvIGgyIHtcXG4gICAgZm9udC1zaXplOiAyLjV2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgI2hlcm8gaDMge1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgI2hlcm8tbWVudSBpbWcge1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgfVxcbiAgI2hlcm8tbWVudSB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxuICB9XFxuICAuZGlzaGVzIHtcXG4gICAgZm9udC1zaXplOiAxLjJ2aDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5REFBeUQ7RUFDekQsc0RBQXNEO0VBQ3RELGlEQUFpRDtFQUNqRCxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5REFBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7QUFDWDtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5REFBc0M7RUFDdEMsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsMENBQTBDO0VBQzFDLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwwQ0FBMEM7RUFDMUMsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFFBQVE7RUFDVjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFNBQVM7RUFDWDtFQUNBO0lBQ0UsY0FBYztJQUNkLFNBQVM7RUFDWDtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb2NoaXkrUG9wK09uZSZkaXNwbGF5PXN3YXBcXFwiKTtcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogXFxcIk1vY2hpeSBQb3AgT25lXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNkM2Y7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCA1MHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOHB4IDEzcHggLTVweCByZ2JhKDQzLCA0MywgNDMsIDEpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggOHB4IDEzcHggLTVweCByZ2JhKDQzLCA0MywgNDMsIDEpO1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxM3B4IC01cHggcmdiYSg0MywgNDMsIDQzLCAxKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4jaGVhZGVyIGgxIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2hlYWRlciBoMTpob3ZlciB7XFxuICBjb2xvcjogI2NlZDNkYztcXG59XFxuXFxuI2hlYWRlci1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcbiNoZWFkZXItbWVudSBwOmhvdmVyIHtcXG4gIGNvbG9yOiAjY2VkM2RjO1xcbn1cXG5cXG4jaGVhZGVyLW1lbnUgcCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIuNXZoO1xcbn1cXG4jbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2JnLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4jaGVybyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDEwJTtcXG59XFxuI2hlcm8gaDIge1xcbiAgZm9udC1zaXplOiA1dmg7XFxuICBtYXJnaW46IDA7XFxufVxcbiNoZXJvIGgzIHtcXG4gIGZvbnQtc2l6ZTogNHZoO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4jb3JkZXItYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZm9udC1zaXplOiAydmg7XFxuICBmb250LWZhbWlseTogXFxcIk1vY2hpeSBQb3AgT25lXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMzkzZDNmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG4jb3JkZXItYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNkM2Y7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuI21haW4tbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9iZy5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIG1hcmdpbjogMDtcXG59XFxuI2hlcm8tbWVudSB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBtaW4td2lkdGg6IDU1MHB4O1xcbiAgZ2FwOiAycHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcXG4gIG1hcmdpbjogMCA1MHB4O1xcbn1cXG4uZGlzaGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMnZoO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjQ1LCAyNDUsIDAuOSk7XFxuICBnYXA6IDEwcHg7XFxufVxcbiNoZXJvLW1lbnUgaW1nIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcbiNoZXJvLXRpdGxlLW1lbnUge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXItYm90dG9tOiAycHggd2hpdGVzbW9rZSBzb2xpZDtcXG59XFxuI2hlcm8tY29udGFjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDJ2aDtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI0NSwgMjQ1LCAwLjkpO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICNoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICB9XFxuICAjaGVhZGVyLW1lbnUgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41dmg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA1cHg7XFxuICB9XFxuICAjaGVhZGVyIGgxIHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICB9XFxuICAjaGVybyBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMi41dmg7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gICNoZXJvIGgzIHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gICNoZXJvLW1lbnUgaW1nIHtcXG4gICAgd2lkdGg6IDc1cHg7XFxuICAgIGhlaWdodDogNzVweDtcXG4gIH1cXG4gICNoZXJvLW1lbnUge1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgfVxcbiAgLmRpc2hlcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ydmg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQgeyBsb2FkSG9tZSB9IGZyb20gXCIuL2xvYWRIb21lXCJcbmltcG9ydCB7IGxvYWRQYWdlIH0gZnJvbSBcIi4vbG9hZFBhZ2VcIlxuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tIFwiLi9sb2FkTWVudVwiXG5pbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gXCIuL2xvYWRDb250YWN0XCJcblxubG9hZFBhZ2UoKVxubG9hZEhvbWUoKVxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG5cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkhvbWVcIilcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1lbnVcIilcbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkNvbnRhY3RcIilcblxuaG9tZUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcbiAgbG9hZEhvbWUoKVxufVxubWVudUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcbiAgbG9hZE1lbnUoKVxufVxuY29udGFjdEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcbiAgbG9hZENvbnRhY3QoKVxufVxuIiwiaW1wb3J0IGFkZHJlc3NJbWdJbXBvcnRlZCBmcm9tIFwiLi9pbWFnZXMvYWRkcmVzcy5wbmdcIlxuaW1wb3J0IHBob25lSW1nSW1wb3J0ZWQgZnJvbSBcIi4vaW1hZ2VzL3Bob25lLWNhbGwucG5nXCJcbmltcG9ydCBvcGVuSW1nSW1wb3J0ZWQgZnJvbSBcIi4vaW1hZ2VzL29wZW4ucG5nXCJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuY29uc3QgaGVyb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG5cbmZ1bmN0aW9uIHNldHVwTGF5b3V0KCkge1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pXG59XG5mdW5jdGlvbiBzZXR1cE1haW4oKSB7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVyb1RpdGxlKVxuXG4gIG1haW4uaWQgPSBcIm1haW4tbWVudVwiXG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVybylcblxuICBoZXJvLmlkID0gXCJoZXJvLWNvbnRhY3RcIlxuXG4gIGhlcm9UaXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiXG4gIGhlcm9UaXRsZS5pZCA9IFwiaGVyby10aXRsZS1tZW51XCJcblxuICAvL0luZm8gZGl2c1xuXG4gIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBoZXJvLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKVxuXG4gIC8vQ29udGFjdCBpbmZvc1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICBjb25zdCBhZGRyZXNzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICBhZGRyZXNzSW1nLnNyYyA9IGFkZHJlc3NJbWdJbXBvcnRlZFxuICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3NJbWcpXG5cbiAgY29uc3Qgb3BlbkhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgY29uc3Qgb3BlbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgb3BlbkltZy5zcmMgPSBvcGVuSW1nSW1wb3J0ZWRcblxuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gIGNvbnN0IHBob25lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICBwaG9uZUltZy5zcmMgPSBwaG9uZUltZ0ltcG9ydGVkXG5cbiAgLy9GaWxsIGNvbnRhY3QgaW5mb3NcblxuICBhZGRyZXNzLnRleHRDb250ZW50ID1cbiAgICBcIkNuciBIYW5sYW4gU3QgJiBUaGUsIEVzcGxhbmFkZSwgU3VyZmVycyBQYXJhZGlzZSBRTEQgNDIxNywgQXVzdHJhbGlhXCJcbiAgb3BlbkhvdXJzLnRleHRDb250ZW50ID0gXCJNb24gLSBTdW46ICA3OjAwIGFtIC0gMTE6MDAgcG1cIlxuICBwaG9uZS50ZXh0Q29udGVudCA9IFwiKDExMSkgLSAyMjggNDQ0NFwiXG5cbiAgLy9BcHBlbmQgY29udGFjdCBpbmZvc1xuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChhZGRyZXNzKVxuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChvcGVuSG91cnMpXG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKHBob25lKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gIHNldHVwTGF5b3V0KClcbiAgc2V0dXBNYWluKClcbn1cbiIsImNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuY29uc3QgaGVyb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcblxuZnVuY3Rpb24gc2V0dXBMYXlvdXQoKSB7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcbn1cblxuZnVuY3Rpb24gc2V0dXBNYWluKCkge1xuICBtYWluLmlkID0gXCJtYWluXCJcbiAgbWFpbi5hcHBlbmRDaGlsZChoZXJvKVxuXG4gIGhlcm8uaWQgPSBcImhlcm9cIlxuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9Db250ZW50KVxuXG4gIGhlcm9Db250ZW50LnRleHRDb250ZW50ID0gXCJTcGljeSBhbmQgRGljZXkgZGVsaWNpb3VzIGZvb2QhXCJcbiAgaGVyb0NvbnRlbnQuaWQgPSBcImhlcm8tY29udGVudFwiXG5cbiAgY29uc3QgaGVyb1N1YkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5cbiAgaGVyb0NvbnRlbnQuYXBwZW5kQ2hpbGQoaGVyb1N1YkNvbnRlbnQpXG4gIGhlcm9Db250ZW50LmFwcGVuZENoaWxkKG9yZGVyQnRuKVxuXG4gIGhlcm9TdWJDb250ZW50LnRleHRDb250ZW50ID0gXCJUYXN0eSBhbmQgYWZmb3JkYWJsZSFcIlxuICBoZXJvU3ViQ29udGVudC5pZCA9IFwiaGVyby1zdWItY29udGVudFwiXG5cbiAgb3JkZXJCdG4udGV4dENvbnRlbnQgPSBcIk9yZGVyIE5vd1wiXG4gIG9yZGVyQnRuLmlkID0gXCJvcmRlci1idXR0b25cIlxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIHNldHVwTGF5b3V0KClcbiAgc2V0dXBNYWluKClcbn1cbiIsImltcG9ydCBmaXNoSW1nSW1wb3J0ZWQgZnJvbSBcIi4vaW1hZ2VzL2Zvb2QxLnBuZ1wiXG5pbXBvcnQgcGFzdGFJbWdJbXBvcnRlZCBmcm9tIFwiLi9pbWFnZXMvZm9vZDIucG5nXCJcbmltcG9ydCBzb3VwSW1nSW1wb3J0ZWQgZnJvbSBcIi4vaW1hZ2VzL2Zvb2QzLnBuZ1wiXG5pbXBvcnQgcmljZUltZ0ltcG9ydGVkIGZyb20gXCIuL2ltYWdlcy9mb29kNC5wbmdcIlxuXG5jb250ZW50LmlubmVySFRNTCA9IFwiXCJcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCBoZXJvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcblxuZnVuY3Rpb24gc2V0dXBMYXlvdXQoKSB7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcbn1cblxuZnVuY3Rpb24gc2V0dXBNYWluKCkge1xuICBtYWluLmlkID0gXCJtYWluLW1lbnVcIlxuICBtYWluLmFwcGVuZENoaWxkKGhlcm9UaXRsZSlcbiAgbWFpbi5hcHBlbmRDaGlsZChoZXJvKVxuXG4gIGhlcm9UaXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiXG4gIGhlcm9UaXRsZS5pZCA9IFwiaGVyby10aXRsZS1tZW51XCJcbiAgaGVyby5pZCA9IFwiaGVyby1tZW51XCJcblxuICAvLyBGaXNoIGRpc2hcblxuICBjb25zdCBmaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBjb25zdCBmaXNoSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gIGNvbnN0IGZpc2hUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcblxuICBmaXNoLmNsYXNzTmFtZSA9IFwiZGlzaGVzXCJcbiAgZmlzaEltYWdlLnNyYyA9IGZpc2hJbWdJbXBvcnRlZFxuICBmaXNoLnRleHRDb250ZW50ID1cbiAgICBcIk5lc3RsZSBsZWVrcywgcG90YXRvIGFuZCBjYXBlcnMgYXJvdW5kIHNhbG1vbiBmaWxsZXRzIHRvIG1ha2UgdGhpcyBlYXN5IHRyYXliYWtlIGZvciB0d28uIEl0J3MgZ3JlYXQgYXMgYW4gbWlkd2VlayBtZWFsLCBvciBmb3IgYSBtb3JlIHJvbWFudGljIG9jY2FzaW9uXCJcbiAgZmlzaC5hcHBlbmRDaGlsZChmaXNoSW1hZ2UpXG4gIGZpc2guYXBwZW5kQ2hpbGQoZmlzaFRleHQpXG5cbiAgLy9QYXN0YSBEaXNoXG5cbiAgY29uc3QgcGFzdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGNvbnN0IHBhc3RhSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gIGNvbnN0IHBhc3RhVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5cbiAgcGFzdGEuY2xhc3NOYW1lID0gXCJkaXNoZXNcIlxuICBwYXN0YUltYWdlLnNyYyA9IHBhc3RhSW1nSW1wb3J0ZWRcbiAgcGFzdGEudGV4dENvbnRlbnQgPVxuICAgIFwiU2l0IGJhY2sgYW5kIHR1Y2sgaW50byBhIGJpZyBib3dsIG9mIHBhc3RhIGFsbGEgdm9ka2EsIGEgY3JlYW15IHRvbWF0byBwYXN0YSB3aXRoIOKAkyBhcyB5b3UgY2FuIGd1ZXNzIOKAkyB2b2RrYSwgd2hpY2ggYmFsYW5jZXMgb3V0IHRoZSBpbnRlbnNlIGZsYXZvdXJzXCJcbiAgcGFzdGEuYXBwZW5kQ2hpbGQocGFzdGFJbWFnZSlcbiAgcGFzdGEuYXBwZW5kQ2hpbGQocGFzdGFUZXh0KVxuXG4gIC8vU291cCBEaXNoXG5cbiAgY29uc3Qgc291cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgY29uc3Qgc291cEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICBjb25zdCBzb3VwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5cbiAgc291cC5jbGFzc05hbWUgPSBcImRpc2hlc1wiXG4gIHNvdXBJbWFnZS5zcmMgPSBzb3VwSW1nSW1wb3J0ZWRcbiAgc291cC50ZXh0Q29udGVudCA9XG4gICAgXCJBIGRlbGljaW91cywgc3BpY3kgYmxlbmQgcGFja2VkIGZ1bGwgb2YgaXJvbiBhbmQgbG93IGluIGZhdCB0byBib290LiBJdCdzIHJlYWR5IGluIHVuZGVyIGhhbGYgYW4gaG91ciwgb3IgY2FuIGJlIG1hZGUgaW4gYSBzbG93IGNvb2tlclwiXG4gIHNvdXAuYXBwZW5kQ2hpbGQoc291cEltYWdlKVxuICBzb3VwLmFwcGVuZENoaWxkKHNvdXBUZXh0KVxuXG4gIC8vUmljZSBEaXNoXG5cbiAgY29uc3QgcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgY29uc3QgcmljZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICBjb25zdCByaWNlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5cbiAgcmljZS5jbGFzc05hbWUgPSBcImRpc2hlc1wiXG4gIHJpY2VJbWFnZS5zcmMgPSByaWNlSW1nSW1wb3J0ZWRcbiAgcmljZS50ZXh0Q29udGVudCA9XG4gICAgXCJFbmNvdXJhZ2Uga2lkcyB0byBnZXQgY3JlYXRpdmUgaW4gdGhlIGtpdGNoZW4gd2l0aCBvdXIgcmFpbmJvdyBmcmllZCByaWNlIHJlY2lwZSDigJMgaXQncyBiZWVuIGRlc2lnbmVkIHRvIGJlIGVhc3kgZm9yIGNoaWxkcmVuIHRvIGZvbGxvd1wiXG4gIHJpY2UuYXBwZW5kQ2hpbGQocmljZUltYWdlKVxuICByaWNlLmFwcGVuZENoaWxkKHJpY2VUZXh0KVxuXG4gIC8vQXBwZW5kIGRpc2hlc1xuXG4gIGhlcm8uYXBwZW5kQ2hpbGQoZmlzaClcbiAgaGVyby5hcHBlbmRDaGlsZChwYXN0YSlcbiAgaGVyby5hcHBlbmRDaGlsZChzb3VwKVxuICBoZXJvLmFwcGVuZENoaWxkKHJpY2UpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgc2V0dXBMYXlvdXQoKVxuICBzZXR1cE1haW4oKVxufVxuIiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIilcblxuY29uc3QgaGVhZGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuY29uc3QgaGVhZGVyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuZnVuY3Rpb24gc2V0dXBIZWFkZXIoKSB7XG4gIGhlYWRlci5pZCA9IFwiaGVhZGVyXCJcbiAgaGVhZGVyTWVudS5pZCA9IFwiaGVhZGVyLW1lbnVcIlxuICBjb25zdCBtZW51ID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdXG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnQpXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJNZW51KVxuXG4gIGhlYWRlckNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlNwaWN5LWFuZC1EaWNleVwiXG5cbiAgbWVudS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgbGV0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBoZWFkZXJNZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtKVxuICAgIG1lbnVJdGVtLmlkID0gZWxlbWVudFxuICAgIG1lbnVJdGVtLnRleHRDb250ZW50ID0gZWxlbWVudFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gIHNldHVwSGVhZGVyKClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==