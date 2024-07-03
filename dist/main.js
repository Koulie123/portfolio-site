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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Italic.ttf */ "./src/fonts/Roboto-Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --cyan-3: #67e8f9;
    --cyan-2: #a5f3fc;
    --cyan-1: #cffafe;
    --cyan-0: #ecfeff;
    --yellow-2: #fef08a;
    --yellow-1: #fef9c3;
    --slate-95: #020617;
    --slate-8: #1e293b;
    --slate-6: #475569;
    --slate-5: #64748b;
    --blue-8: #1e40af;
    --blue-1: #dbeafe;
    --mdn-blue-background: #8cb4ff70;
    --mdn-blue: #8cb4ff;
    font-family: sans-serif;
    box-sizing: border-box;
}
* {
    box-sizing: border-box;
}
@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
    font-style: italic;
}
@font-face {
    font-family: 'Roboto-italic';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

html, body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}
.header {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: var(--slate-95);
    width: 100%;
    position: fixed;
    height: 5rem;
    top: 0;
}

.header > div {
    display: flex;
    justify-content: center;
}
.header > div > a >  button {
    background-color: var(--slate-6);
    width: 8rem;
    height: 3rem;
    border-radius: 1.5rem;
    margin-top: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1.2rem;
    border: 0;
    color: white;
}
.header > div > a> button:hover {
    background-color: var(--mdn-blue-background);
    color: var(--mdn-blue);
}
.header-div > a {
    color: inherit;
    text-decoration: none;
}

.main-container {
    display: grid;
    grid-template-columns: 1fr clamp(15rem, 45rem, 1200px) 1fr;
    background-color: var(--slate-6);
    /* min-height: 4000px; */
}

.center-content {
    grid-column: 2/3;
    background-color: var(--cyan-0);
    display: grid;
    /* grid-template-rows: repeat(auto-fit, auto); */
    grid-template-rows: 3rem 26rem 1px 3rem 28rem 1px 3rem auto 1px 3rem auto;
    gap: 20px;
    overflow: hidden;
    margin-top: 5rem;
    padding: 3rem;
}
.divider {
    box-sizing: border-box;
    border: 1px solid black;
}
.name-and-pic {
    display: grid;
    grid-template-columns: 40% 60%;
}
.about-me {
}
.pic-of-me {
    display: flex;
    justify-content: center;
}
.pic-of-me > img {
    width: 80%;
    box-shadow: 3px 2px 2px black;
    aspect-ratio: 1 / 1;
}
.section-header {
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: 'Roboto-italic';
    font-size: 2rem;
    padding-top: 100px;
    margin-top: -90px;
    font-weight: 700;
}

.projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto-fit,15rem);
    gap: 1rem;
}
.project {
    box-sizing: border-box;
    padding: 1rem;
    border: 2px solid var(--slate-8);
    border-radius: 2rem;
    box-shadow: 2px 2px 2px var(--slate-6);
    display: grid;
    grid-template-rows: 2rem 1fr;
    scroll-behavior: auto;
    /* overflow-y: scroll; */
}
.project > div >  a {
    color: inherit;
}
.project > .project-name {
    font-size: 1rem;
}
.project-description {

}
.about-para {
    padding-top: .5rem;
}
.footer {
    background-color: var(--slate-95);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
}

.contact-section {
     font-size: 1rem;
}
.contact-section > div {
    display: flex;
    justify-content: left;
}
.contact-section > div > a {
    color: black;
}



@media (max-width: 680px){
    .main-container {
        grid-template-columns: 100vw;
    }
    .center-content {
        grid-column: 1/2;
        grid-template-rows: 5rem 40rem 1px 3rem 65rem 1px 3rem auto 1px 3rem auto;
        padding-left: 0rem;
        padding-right: 0rem;

    }
    .subsection {
        max-width: 100vw;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .name-and-pic {
        grid-template-columns: 1fr;
        width: 100%;
    }
    .pic-of-me {
        width: 90%;
    }
    .projects {
        grid-template-columns: 1fr;
    }
    .projects > .project {
    }
    .header > div > a >  button {
        font-size: 1rem;
        width: 5rem;
    }
    .pic-of-me {
        width: 90%;
        height: 90%;
    }


}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,gCAAgC;IAChC,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;AAC1B;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,qBAAqB;IACrB,+DAAuD;IACvD,kBAAkB;AACtB;AACA;IACI,4BAA4B;IAC5B,4CAAmC;AACvC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,qCAAqC;IACrC,iCAAiC;IACjC,WAAW;IACX,eAAe;IACf,YAAY;IACZ,MAAM;AACV;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,gCAAgC;IAChC,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,SAAS;IACT,YAAY;AAChB;AACA;IACI,4CAA4C;IAC5C,sBAAsB;AAC1B;AACA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,0DAA0D;IAC1D,gCAAgC;IAChC,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;IAChB,+BAA+B;IAC/B,aAAa;IACb,gDAAgD;IAChD,yEAAyE;IACzE,SAAS;IACT,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;AACA;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,UAAU;IACV,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,4BAA4B;IAC5B,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,0CAA0C;IAC1C,SAAS;AACb;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,gCAAgC;IAChC,mBAAmB;IACnB,sCAAsC;IACtC,aAAa;IACb,4BAA4B;IAC5B,qBAAqB;IACrB,wBAAwB;AAC5B;AACA;IACI,cAAc;AAClB;AACA;IACI,eAAe;AACnB;AACA;;AAEA;AACA;IACI,kBAAkB;AACtB;AACA;IACI,iCAAiC;IACjC,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;KACK,eAAe;AACpB;AACA;IACI,aAAa;IACb,qBAAqB;AACzB;AACA;IACI,YAAY;AAChB;;;;AAIA;IACI;QACI,4BAA4B;IAChC;IACA;QACI,gBAAgB;QAChB,yEAAyE;QACzE,kBAAkB;QAClB,mBAAmB;;IAEvB;IACA;QACI,gBAAgB;QAChB,kBAAkB;QAClB,mBAAmB;IACvB;IACA;QACI,0BAA0B;QAC1B,WAAW;IACf;IACA;QACI,UAAU;IACd;IACA;QACI,0BAA0B;IAC9B;IACA;IACA;IACA;QACI,eAAe;QACf,WAAW;IACf;IACA;QACI,UAAU;QACV,WAAW;IACf;;;AAGJ","sourcesContent":[":root {\n    --cyan-3: #67e8f9;\n    --cyan-2: #a5f3fc;\n    --cyan-1: #cffafe;\n    --cyan-0: #ecfeff;\n    --yellow-2: #fef08a;\n    --yellow-1: #fef9c3;\n    --slate-95: #020617;\n    --slate-8: #1e293b;\n    --slate-6: #475569;\n    --slate-5: #64748b;\n    --blue-8: #1e40af;\n    --blue-1: #dbeafe;\n    --mdn-blue-background: #8cb4ff70;\n    --mdn-blue: #8cb4ff;\n    font-family: sans-serif;\n    box-sizing: border-box;\n}\n* {\n    box-sizing: border-box;\n}\n@font-face {\n    font-family: 'Roboto';\n    src: url(./fonts/Roboto-Regular.ttf) format('truetype');\n    font-style: italic;\n}\n@font-face {\n    font-family: 'Roboto-italic';\n    src: url(./fonts/Roboto-Italic.ttf);\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    scroll-behavior: smooth;\n}\n.header {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    background-color: var(--slate-95);\n    width: 100%;\n    position: fixed;\n    height: 5rem;\n    top: 0;\n}\n\n.header > div {\n    display: flex;\n    justify-content: center;\n}\n.header > div > a >  button {\n    background-color: var(--slate-6);\n    width: 8rem;\n    height: 3rem;\n    border-radius: 1.5rem;\n    margin-top: 1.2rem;\n    margin-bottom: 1rem;\n    font-weight: 600;\n    font-size: 1.2rem;\n    border: 0;\n    color: white;\n}\n.header > div > a> button:hover {\n    background-color: var(--mdn-blue-background);\n    color: var(--mdn-blue);\n}\n.header-div > a {\n    color: inherit;\n    text-decoration: none;\n}\n\n.main-container {\n    display: grid;\n    grid-template-columns: 1fr clamp(15rem, 45rem, 1200px) 1fr;\n    background-color: var(--slate-6);\n    /* min-height: 4000px; */\n}\n\n.center-content {\n    grid-column: 2/3;\n    background-color: var(--cyan-0);\n    display: grid;\n    /* grid-template-rows: repeat(auto-fit, auto); */\n    grid-template-rows: 3rem 26rem 1px 3rem 28rem 1px 3rem auto 1px 3rem auto;\n    gap: 20px;\n    overflow: hidden;\n    margin-top: 5rem;\n    padding: 3rem;\n}\n.divider {\n    box-sizing: border-box;\n    border: 1px solid black;\n}\n.name-and-pic {\n    display: grid;\n    grid-template-columns: 40% 60%;\n}\n.about-me {\n}\n.pic-of-me {\n    display: flex;\n    justify-content: center;\n}\n.pic-of-me > img {\n    width: 80%;\n    box-shadow: 3px 2px 2px black;\n    aspect-ratio: 1 / 1;\n}\n.section-header {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    font-family: 'Roboto-italic';\n    font-size: 2rem;\n    padding-top: 100px;\n    margin-top: -90px;\n    font-weight: 700;\n}\n\n.projects {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(auto-fit,15rem);\n    gap: 1rem;\n}\n.project {\n    box-sizing: border-box;\n    padding: 1rem;\n    border: 2px solid var(--slate-8);\n    border-radius: 2rem;\n    box-shadow: 2px 2px 2px var(--slate-6);\n    display: grid;\n    grid-template-rows: 2rem 1fr;\n    scroll-behavior: auto;\n    /* overflow-y: scroll; */\n}\n.project > div >  a {\n    color: inherit;\n}\n.project > .project-name {\n    font-size: 1rem;\n}\n.project-description {\n\n}\n.about-para {\n    padding-top: .5rem;\n}\n.footer {\n    background-color: var(--slate-95);\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 4rem;\n}\n\n.contact-section {\n     font-size: 1rem;\n}\n.contact-section > div {\n    display: flex;\n    justify-content: left;\n}\n.contact-section > div > a {\n    color: black;\n}\n\n\n\n@media (max-width: 680px){\n    .main-container {\n        grid-template-columns: 100vw;\n    }\n    .center-content {\n        grid-column: 1/2;\n        grid-template-rows: 5rem 40rem 1px 3rem 65rem 1px 3rem auto 1px 3rem auto;\n        padding-left: 0rem;\n        padding-right: 0rem;\n\n    }\n    .subsection {\n        max-width: 100vw;\n        padding-left: 1rem;\n        padding-right: 1rem;\n    }\n    .name-and-pic {\n        grid-template-columns: 1fr;\n        width: 100%;\n    }\n    .pic-of-me {\n        width: 90%;\n    }\n    .projects {\n        grid-template-columns: 1fr;\n    }\n    .projects > .project {\n    }\n    .header > div > a >  button {\n        font-size: 1rem;\n        width: 5rem;\n    }\n    .pic-of-me {\n        width: 90%;\n        height: 90%;\n    }\n\n\n}"],"sourceRoot":""}]);
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayProjects)
/* harmony export */ });
class Project {
    constructor(Name, Link, Description) {
        this.name = Name;
        this.link = Link;
        this.description = Description
    }

}
const projects = [
    new Project("Slow Cyclist Adventure Guild", "https://slowcyclistadventureguide.ca/", "This is a larger projecct I made detailing some bikepacking routes in Southern Ontario. Specifically aiming to provide routes which were accessible via public transit."),
    new Project("Restaurant Page", "https://koulie123.github.io/restaurtant-page/", "Site made to showcase ability to use js modules to display all data without needing to reload the page."),
    new Project("Tic-Tac-Toe", "https://koulie123.github.io/TicTacToe/", "This is a basic Tic-tac-toe Game that I made"),
    new Project("C# Console Game", "https://kouliesgames.itch.io/consoleroguelite", "This is a basic command line game build in C# which I did when learning about C# and OOP. In it you play as a character exploring the world through simple commands."),

]
function displayProjects (parent) {
    projects.forEach((project) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        
        const name = document.createElement('div');
        const link = document.createElement('a');
        link.textContent = project.name;
        link.href = project.link;
        link.target = "_blank";
        name.classList.add('project-name')
        name.appendChild(link);
        projectDiv.appendChild(name);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.textContent = project.description;
        descriptionDiv.classList.add('project-description');
        projectDiv.appendChild(descriptionDiv);


        parent.appendChild(projectDiv);
    })
}

/***/ }),

/***/ "./src/fonts/Roboto-Italic.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Roboto-Italic.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87f3afe16a8c3c370634.ttf";

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/images/PortfolioPicCopy.jpg":
/*!*****************************************!*\
  !*** ./src/images/PortfolioPicCopy.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5145bfa652c178b32090.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_PortfolioPicCopy_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/PortfolioPicCopy.jpg */ "./src/images/PortfolioPicCopy.jpg");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");






const setPicture = function () {
    const picDiv = document.querySelector('.pic-of-me');
    const img = new Image();
    img.src = _images_PortfolioPicCopy_jpg__WEBPACK_IMPORTED_MODULE_1__;

    picDiv.appendChild(img);
}


setPicture();

const projectContainer =  document.querySelector('.projects');
(0,_projects_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projectContainer);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlJQUE2QztBQUN6Riw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFB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V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ21DO0FBQ1o7Ozs7QUFJNUM7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5REFBVzs7QUFFekI7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQSx3REFBZSxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cnRhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVydGFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJ0YW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWN5YW4tMzogIzY3ZThmOTtcbiAgICAtLWN5YW4tMjogI2E1ZjNmYztcbiAgICAtLWN5YW4tMTogI2NmZmFmZTtcbiAgICAtLWN5YW4tMDogI2VjZmVmZjtcbiAgICAtLXllbGxvdy0yOiAjZmVmMDhhO1xuICAgIC0teWVsbG93LTE6ICNmZWY5YzM7XG4gICAgLS1zbGF0ZS05NTogIzAyMDYxNztcbiAgICAtLXNsYXRlLTg6ICMxZTI5M2I7XG4gICAgLS1zbGF0ZS02OiAjNDc1NTY5O1xuICAgIC0tc2xhdGUtNTogIzY0NzQ4YjtcbiAgICAtLWJsdWUtODogIzFlNDBhZjtcbiAgICAtLWJsdWUtMTogI2RiZWFmZTtcbiAgICAtLW1kbi1ibHVlLWJhY2tncm91bmQ6ICM4Y2I0ZmY3MDtcbiAgICAtLW1kbi1ibHVlOiAjOGNiNGZmO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1pdGFsaWMnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5odG1sLCBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZS05NSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogNXJlbTtcbiAgICB0b3A6IDA7XG59XG5cbi5oZWFkZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaGVhZGVyID4gZGl2ID4gYSA+ICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlLTYpO1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMS4ycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmhlYWRlciA+IGRpdiA+IGE+IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRuLWJsdWUtYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IHZhcigtLW1kbi1ibHVlKTtcbn1cbi5oZWFkZXItZGl2ID4gYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgY2xhbXAoMTVyZW0sIDQ1cmVtLCAxMjAwcHgpIDFmcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZS02KTtcbiAgICAvKiBtaW4taGVpZ2h0OiA0MDAwcHg7ICovXG59XG5cbi5jZW50ZXItY29udGVudCB7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLTApO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIGF1dG8pOyAqL1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAyNnJlbSAxcHggM3JlbSAyOHJlbSAxcHggM3JlbSBhdXRvIDFweCAzcmVtIGF1dG87XG4gICAgZ2FwOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICBwYWRkaW5nOiAzcmVtO1xufVxuLmRpdmlkZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4ubmFtZS1hbmQtcGljIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDYwJTtcbn1cbi5hYm91dC1tZSB7XG59XG4ucGljLW9mLW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnBpYy1vZi1tZSA+IGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3gtc2hhZG93OiAzcHggMnB4IDJweCBibGFjaztcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuLnNlY3Rpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1pdGFsaWMnO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTkwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwxNXJlbSk7XG4gICAgZ2FwOiAxcmVtO1xufVxuLnByb2plY3Qge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zbGF0ZS04KTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHZhcigtLXNsYXRlLTYpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIDFmcjtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XG4gICAgLyogb3ZlcmZsb3cteTogc2Nyb2xsOyAqL1xufVxuLnByb2plY3QgPiBkaXYgPiAgYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG4ucHJvamVjdCA+IC5wcm9qZWN0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcblxufVxuLmFib3V0LXBhcmEge1xuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbn1cbi5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlLTk1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNHJlbTtcbn1cblxuLmNvbnRhY3Qtc2VjdGlvbiB7XG4gICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5jb250YWN0LXNlY3Rpb24gPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuLmNvbnRhY3Qtc2VjdGlvbiA+IGRpdiA+IGEge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2ODBweCl7XG4gICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDB2dztcbiAgICB9XG4gICAgLmNlbnRlci1jb250ZW50IHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDQwcmVtIDFweCAzcmVtIDY1cmVtIDFweCAzcmVtIGF1dG8gMXB4IDNyZW0gYXV0bztcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcmVtO1xuXG4gICAgfVxuICAgIC5zdWJzZWN0aW9uIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIH1cbiAgICAubmFtZS1hbmQtcGljIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAucGljLW9mLW1lIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG4gICAgLnByb2plY3RzIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICAgIC5wcm9qZWN0cyA+IC5wcm9qZWN0IHtcbiAgICB9XG4gICAgLmhlYWRlciA+IGRpdiA+IGEgPiAgYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB3aWR0aDogNXJlbTtcbiAgICB9XG4gICAgLnBpYy1vZi1tZSB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgIH1cblxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQiwrREFBdUQ7SUFDdkQsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsNENBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLE1BQU07QUFDVjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRDQUE0QztJQUM1QyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMERBQTBEO0lBQzFELGdDQUFnQztJQUNoQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixnREFBZ0Q7SUFDaEQseUVBQXlFO0lBQ3pFLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMENBQTBDO0lBQzFDLFNBQVM7QUFDYjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7S0FDSyxlQUFlO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOzs7O0FBSUE7SUFDSTtRQUNJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHlFQUF5RTtRQUN6RSxrQkFBa0I7UUFDbEIsbUJBQW1COztJQUV2QjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7SUFDQTtJQUNBO1FBQ0ksZUFBZTtRQUNmLFdBQVc7SUFDZjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjs7O0FBR0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWN5YW4tMzogIzY3ZThmOTtcXG4gICAgLS1jeWFuLTI6ICNhNWYzZmM7XFxuICAgIC0tY3lhbi0xOiAjY2ZmYWZlO1xcbiAgICAtLWN5YW4tMDogI2VjZmVmZjtcXG4gICAgLS15ZWxsb3ctMjogI2ZlZjA4YTtcXG4gICAgLS15ZWxsb3ctMTogI2ZlZjljMztcXG4gICAgLS1zbGF0ZS05NTogIzAyMDYxNztcXG4gICAgLS1zbGF0ZS04OiAjMWUyOTNiO1xcbiAgICAtLXNsYXRlLTY6ICM0NzU1Njk7XFxuICAgIC0tc2xhdGUtNTogIzY0NzQ4YjtcXG4gICAgLS1ibHVlLTg6ICMxZTQwYWY7XFxuICAgIC0tYmx1ZS0xOiAjZGJlYWZlO1xcbiAgICAtLW1kbi1ibHVlLWJhY2tncm91bmQ6ICM4Y2I0ZmY3MDtcXG4gICAgLS1tZG4tYmx1ZTogIzhjYjRmZjtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1pdGFsaWMnO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL1JvYm90by1JdGFsaWMudHRmKTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZS05NSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4uaGVhZGVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgPiBkaXYgPiBhID4gIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlLTYpO1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDEuMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGVyID4gZGl2ID4gYT4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRuLWJsdWUtYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1tZG4tYmx1ZSk7XFxufVxcbi5oZWFkZXItZGl2ID4gYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGNsYW1wKDE1cmVtLCA0NXJlbSwgMTIwMHB4KSAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlLTYpO1xcbiAgICAvKiBtaW4taGVpZ2h0OiA0MDAwcHg7ICovXFxufVxcblxcbi5jZW50ZXItY29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tMCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBhdXRvKTsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDI2cmVtIDFweCAzcmVtIDI4cmVtIDFweCAzcmVtIGF1dG8gMXB4IDNyZW0gYXV0bztcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbn1cXG4uZGl2aWRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4ubmFtZS1hbmQtcGljIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNjAlO1xcbn1cXG4uYWJvdXQtbWUge1xcbn1cXG4ucGljLW9mLW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5waWMtb2YtbWUgPiBpbWcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3gtc2hhZG93OiAzcHggMnB4IDJweCBibGFjaztcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuLnNlY3Rpb24taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8taXRhbGljJztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIG1hcmdpbi10b3A6IC05MHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LDE1cmVtKTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4ucHJvamVjdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNsYXRlLTgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCB2YXIoLS1zbGF0ZS02KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIDFmcjtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcbiAgICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXFxufVxcbi5wcm9qZWN0ID4gZGl2ID4gIGEge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuLnByb2plY3QgPiAucHJvamVjdC1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuXFxufVxcbi5hYm91dC1wYXJhIHtcXG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xcbn1cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUtOTUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi5jb250YWN0LXNlY3Rpb24ge1xcbiAgICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uY29udGFjdC1zZWN0aW9uID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbn1cXG4uY29udGFjdC1zZWN0aW9uID4gZGl2ID4gYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY4MHB4KXtcXG4gICAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwdnc7XFxuICAgIH1cXG4gICAgLmNlbnRlci1jb250ZW50IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gNDByZW0gMXB4IDNyZW0gNjVyZW0gMXB4IDNyZW0gYXV0byAxcHggM3JlbSBhdXRvO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHJlbTtcXG5cXG4gICAgfVxcbiAgICAuc3Vic2VjdGlvbiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gICAgfVxcbiAgICAubmFtZS1hbmQtcGljIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgLnBpYy1vZi1tZSB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcbiAgICAucHJvamVjdHMgPiAucHJvamVjdCB7XFxuICAgIH1cXG4gICAgLmhlYWRlciA+IGRpdiA+IGEgPiAgYnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIHdpZHRoOiA1cmVtO1xcbiAgICB9XFxuICAgIC5waWMtb2YtbWUge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGhlaWdodDogOTAlO1xcbiAgICB9XFxuXFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKE5hbWUsIExpbmssIERlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IE5hbWU7XG4gICAgICAgIHRoaXMubGluayA9IExpbms7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBEZXNjcmlwdGlvblxuICAgIH1cblxufVxuY29uc3QgcHJvamVjdHMgPSBbXG4gICAgbmV3IFByb2plY3QoXCJTbG93IEN5Y2xpc3QgQWR2ZW50dXJlIEd1aWxkXCIsIFwiaHR0cHM6Ly9zbG93Y3ljbGlzdGFkdmVudHVyZWd1aWRlLmNhL1wiLCBcIlRoaXMgaXMgYSBsYXJnZXIgcHJvamVjY3QgSSBtYWRlIGRldGFpbGluZyBzb21lIGJpa2VwYWNraW5nIHJvdXRlcyBpbiBTb3V0aGVybiBPbnRhcmlvLiBTcGVjaWZpY2FsbHkgYWltaW5nIHRvIHByb3ZpZGUgcm91dGVzIHdoaWNoIHdlcmUgYWNjZXNzaWJsZSB2aWEgcHVibGljIHRyYW5zaXQuXCIpLFxuICAgIG5ldyBQcm9qZWN0KFwiUmVzdGF1cmFudCBQYWdlXCIsIFwiaHR0cHM6Ly9rb3VsaWUxMjMuZ2l0aHViLmlvL3Jlc3RhdXJ0YW50LXBhZ2UvXCIsIFwiU2l0ZSBtYWRlIHRvIHNob3djYXNlIGFiaWxpdHkgdG8gdXNlIGpzIG1vZHVsZXMgdG8gZGlzcGxheSBhbGwgZGF0YSB3aXRob3V0IG5lZWRpbmcgdG8gcmVsb2FkIHRoZSBwYWdlLlwiKSxcbiAgICBuZXcgUHJvamVjdChcIlRpYy1UYWMtVG9lXCIsIFwiaHR0cHM6Ly9rb3VsaWUxMjMuZ2l0aHViLmlvL1RpY1RhY1RvZS9cIiwgXCJUaGlzIGlzIGEgYmFzaWMgVGljLXRhYy10b2UgR2FtZSB0aGF0IEkgbWFkZVwiKSxcbiAgICBuZXcgUHJvamVjdChcIkMjIENvbnNvbGUgR2FtZVwiLCBcImh0dHBzOi8va291bGllc2dhbWVzLml0Y2guaW8vY29uc29sZXJvZ3VlbGl0ZVwiLCBcIlRoaXMgaXMgYSBiYXNpYyBjb21tYW5kIGxpbmUgZ2FtZSBidWlsZCBpbiBDIyB3aGljaCBJIGRpZCB3aGVuIGxlYXJuaW5nIGFib3V0IEMjIGFuZCBPT1AuIEluIGl0IHlvdSBwbGF5IGFzIGEgY2hhcmFjdGVyIGV4cGxvcmluZyB0aGUgd29ybGQgdGhyb3VnaCBzaW1wbGUgY29tbWFuZHMuXCIpLFxuXG5dXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMgKHBhcmVudCkge1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgbGluay5ocmVmID0gcHJvamVjdC5saW5rO1xuICAgICAgICBsaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJylcbiAgICAgICAgbmFtZS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG5cblxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfSlcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgUGljdHVyZU9mTWUgZnJvbSAnLi9pbWFnZXMvUG9ydGZvbGlvUGljQ29weS5qcGcnO1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzLmpzJztcblxuXG5cbmNvbnN0IHNldFBpY3R1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcGljRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBpYy1vZi1tZScpO1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBQaWN0dXJlT2ZNZTtcblxuICAgIHBpY0Rpdi5hcHBlbmRDaGlsZChpbWcpO1xufVxuXG5cbnNldFBpY3R1cmUoKTtcblxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbmRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0Q29udGFpbmVyKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=