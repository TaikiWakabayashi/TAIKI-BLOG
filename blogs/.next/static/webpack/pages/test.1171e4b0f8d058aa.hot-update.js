"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/LinkCard/linkcard.jsx":
/*!******************************************!*\
  !*** ./components/LinkCard/linkcard.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LinkCard\": function() { return /* binding */ LinkCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _linkCard_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linkCard.module.css */ \"./components/LinkCard/linkCard.module.css\");\n/* harmony import */ var _linkCard_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_linkCard_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"../../../node_modules/process/browser.js\");\n\n\nconst LinkCard = (param)=>{\n    let { cardData , children  } = param;\n    //内部リンクか外部リンク化判定\n    const blank = cardData.url.indexOf(process.env.SERVICE_DOMAIN) === -1;\n    const blankProp = blank ? {\n        target: \"_blank\",\n        rel: \"noopener nofollow\"\n    } : {};\n    if (cardData.title) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_linkCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().linkCardWrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_linkCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().images),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: cardData.url,\n                        ...blankProp,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: cardData.image,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/taikiwakabayashi/BLOG/TAIKI-BLOG/blogs/components/LinkCard/linkcard.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/taikiwakabayashi/BLOG/TAIKI-BLOG/blogs/components/LinkCard/linkcard.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/taikiwakabayashi/BLOG/TAIKI-BLOG/blogs/components/LinkCard/linkcard.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                    fileName: \"/Users/taikiwakabayashi/BLOG/TAIKI-BLOG/blogs/components/LinkCard/linkcard.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: cardData.title && cardData.title\n                        }, void 0, false, {\n                            fileName: \"/Users/taikiwakabayashi/BLOG/TAIKI-BLOG/blogs/components/LinkCard/linkcard.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: cardData.description && cardData.description\n                        }, void 0, false, {\n                            fileName: \"/Users/taikiwakabayashi/BLOG/TAIKI-BLOG/blogs/components/LinkCard/linkcard.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/taikiwakabayashi/BLOG/TAIKI-BLOG/blogs/components/LinkCard/linkcard.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/taikiwakabayashi/BLOG/TAIKI-BLOG/blogs/components/LinkCard/linkcard.jsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: cardData.url,\n        ...blankProp,\n        underline: \"none\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/taikiwakabayashi/BLOG/TAIKI-BLOG/blogs/components/LinkCard/linkcard.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_c = LinkCard;\n\nvar _c;\n$RefreshReg$(_c, \"LinkCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmtDYXJkL2xpbmtjYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBRTNDLE1BQU1DLFdBQVcsU0FBNEI7UUFBM0IsRUFBRUMsU0FBUSxFQUFFQyxTQUFRLEVBQUU7SUFDdEMsZ0JBQWdCO0lBQ2hCLE1BQU1DLFFBQVFGLFNBQVNHLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLGNBQWMsTUFBTSxDQUFDO0lBQ3BFLE1BQU1DLFlBQVlOLFFBQ2Q7UUFDRU8sUUFBUTtRQUNSQyxLQUFLO0lBQ1AsSUFDQSxDQUFDLENBQUM7SUFDTixJQUFJVixTQUFTVyxLQUFLLEVBQUU7UUFDbEIscUJBQ0UsOERBQUNDO1lBQUlDLFdBQVdmLDZFQUFzQjs7OEJBQ3BDLDhEQUFDYztvQkFBSUMsV0FBV2Ysb0VBQWE7OEJBQzNCLDRFQUFDa0I7d0JBQUVDLE1BQU1qQixTQUFTRyxHQUFHO3dCQUFHLEdBQUdLLFNBQVM7a0NBQ2xDLDRFQUFDVTs0QkFBSUMsS0FBS25CLFNBQVNvQixLQUFLOzRCQUFFQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUdsQyw4REFBQ0M7Ozs7OzhCQUNELDhEQUFDQTs7c0NBQ0MsOERBQUNBO3NDQUFNdEIsU0FBU1csS0FBSyxJQUFJWCxTQUFTVyxLQUFLOzs7Ozs7c0NBQ3ZDLDhEQUFDVztzQ0FBTXRCLFNBQVN1QixXQUFXLElBQUl2QixTQUFTdUIsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSTNELENBQUM7SUFDRCxxQkFDRSw4REFBQ1A7UUFBRUMsTUFBTWpCLFNBQVNHLEdBQUc7UUFBRyxHQUFHSyxTQUFTO1FBQUVnQixXQUFVO2tCQUM3Q3ZCOzs7Ozs7QUFHUDtLQTlCTUY7QUFnQ2MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5rQ2FyZC9saW5rY2FyZC5qc3g/NmU1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xpbmtDYXJkLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgTGlua0NhcmQgPSAoeyBjYXJkRGF0YSwgY2hpbGRyZW4gfSkgPT4ge1xuICAvL+WGhemDqOODquODs+OCr+OBi+WklumDqOODquODs+OCr+WMluWIpOWumlxuICBjb25zdCBibGFuayA9IGNhcmREYXRhLnVybC5pbmRleE9mKHByb2Nlc3MuZW52LlNFUlZJQ0VfRE9NQUlOKSA9PT0gLTE7XG4gIGNvbnN0IGJsYW5rUHJvcCA9IGJsYW5rXG4gICAgPyB7XG4gICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgcmVsOiBcIm5vb3BlbmVyIG5vZm9sbG93XCIsXG4gICAgICB9XG4gICAgOiB7fTtcbiAgaWYgKGNhcmREYXRhLnRpdGxlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua0NhcmRXcmFwcGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZXN9PlxuICAgICAgICAgIDxhIGhyZWY9e2NhcmREYXRhLnVybH0gey4uLmJsYW5rUHJvcH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17Y2FyZERhdGEuaW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8c3Bhbj57Y2FyZERhdGEudGl0bGUgJiYgY2FyZERhdGEudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntjYXJkRGF0YS5kZXNjcmlwdGlvbiAmJiBjYXJkRGF0YS5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXtjYXJkRGF0YS51cmx9IHsuLi5ibGFua1Byb3B9IHVuZGVybGluZT1cIm5vbmVcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgeyBMaW5rQ2FyZCB9O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkxpbmtDYXJkIiwiY2FyZERhdGEiLCJjaGlsZHJlbiIsImJsYW5rIiwidXJsIiwiaW5kZXhPZiIsInByb2Nlc3MiLCJlbnYiLCJTRVJWSUNFX0RPTUFJTiIsImJsYW5rUHJvcCIsInRhcmdldCIsInJlbCIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwibGlua0NhcmRXcmFwcGVyIiwiaW1hZ2VzIiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInNwYW4iLCJkZXNjcmlwdGlvbiIsInVuZGVybGluZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LinkCard/linkcard.jsx\n"));

/***/ })

});