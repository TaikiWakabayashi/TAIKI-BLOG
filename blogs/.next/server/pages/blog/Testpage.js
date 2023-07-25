(() => {
var exports = {};
exports.id = 249;
exports.ids = [249];
exports.modules = {

/***/ 4750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header_PostHeader)
});

// UNUSED EXPORTS: PostHeader

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Header/header.module.css
var header_module = __webpack_require__(1619);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
;// CONCATENATED MODULE: external "date-fns/locale/ja"
const ja_namespaceObject = require("date-fns/locale/ja");
var ja_default = /*#__PURE__*/__webpack_require__.n(ja_namespaceObject);
;// CONCATENATED MODULE: ./components/Date/convertDate.tsx



const ConvertDate = ({ dateISO  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("time", {
        dateTime: dateISO,
        children: (0,external_date_fns_namespaceObject.format)((0,external_date_fns_namespaceObject.parseISO)(dateISO), "yyyy年MM月dd日", {
            locale: (ja_default())
        })
    });
};
/* harmony default export */ const convertDate = (ConvertDate);

;// CONCATENATED MODULE: ./components/Header/PostHeader.tsx



const PostHeader = ({ title , subTitle , publish =""  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (header_module_default()).pHeaderWrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (header_module_default()).subTitle,
                children: subTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (header_module_default()).title,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(convertDate, {
                dateISO: publish
            })
        ]
    });
};
/* harmony default export */ const Header_PostHeader = (PostHeader);


/***/ }),

/***/ 4883:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2523);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4958);
/* harmony import */ var _components_Container_main_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4991);
/* harmony import */ var _components_Header_PostHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4750);
/* harmony import */ var _hooks_useHeaderScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8359);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9755);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ContentStyle_PostBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(384);
/* harmony import */ var _components_ContentStyle_ConvertBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3826);
/* harmony import */ var highlight_js_styles_hybrid_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2709);
/* harmony import */ var highlight_js_styles_hybrid_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_hybrid_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8033);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api__WEBPACK_IMPORTED_MODULE_1__, _components_ContentStyle_ConvertBody__WEBPACK_IMPORTED_MODULE_8__]);
([_lib_api__WEBPACK_IMPORTED_MODULE_1__, _components_ContentStyle_ConvertBody__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









// import "highlight.js/styles/vs2015.css";



const TestPage = ({ title , publish , content , eyecatch , categories , cardDatas  })=>{
    const isHeaderActive = (0,_hooks_useHeaderScroll__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(300);
    const styles = {
        margin: "0px",
        width: "100%"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
                isActive: isHeaderActive
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Container_main_container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_PostHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                title: title,
                                subTitle: "Blog Article",
                                publish: publish
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                style: styles,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_legacy_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    src: eyecatch.url,
                                    alt: "",
                                    width: eyecatch.width,
                                    height: eyecatch.height,
                                    layout: "responsive",
                                    sizes: "(max-width: 800px)",
                                    priority: true
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentStyle_PostBody__WEBPACK_IMPORTED_MODULE_7__/* .PostBody */ .y, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentStyle_ConvertBody__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            contentHTML: content,
                            cardDatas: cardDatas
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestPage);
async function getStaticProps(context) {
    const slug = "technology";
    const post = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .getPostBySlug */ .zQ)(slug);
    // リンクカードを作成するデータを取得
    const cardDatas = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .createLinkCardDatas */ .lm)(context);
    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
            cardDatas: cardDatas
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2709:
/***/ (() => {



/***/ }),

/***/ 1809:
/***/ ((module) => {

"use strict";
module.exports = require("microcms-js-sdk");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 295:
/***/ ((module) => {

"use strict";
module.exports = import("cheerio");;

/***/ }),

/***/ 1000:
/***/ ((module) => {

"use strict";
module.exports = import("highlight.js");;

/***/ }),

/***/ 2905:
/***/ ((module) => {

"use strict";
module.exports = import("html-react-parser");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,664,755,33,100,812], () => (__webpack_exec__(4883)));
module.exports = __webpack_exports__;

})();