exports.id = 100;
exports.ids = [100];
exports.modules = {

/***/ 3223:
/***/ ((module) => {

// Exports
module.exports = {
	"stack": "contentStyle_stack__eJ_F2"
};


/***/ }),

/***/ 8445:
/***/ ((module) => {

// Exports
module.exports = {
	"linkCardWrapper": "linkCard_linkCardWrapper__AHQoB",
	"images": "linkCard_images__uhau8",
	"desc": "linkCard_desc__WUOfF"
};


/***/ }),

/***/ 3826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ConvertBody */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2905);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1000);
/* harmony import */ var _LinkCard_linkcard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(619);
/* harmony import */ var _contentStyle_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3223);
/* harmony import */ var _contentStyle_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_contentStyle_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_1__, highlight_js__WEBPACK_IMPORTED_MODULE_3__]);
([html_react_parser__WEBPACK_IMPORTED_MODULE_1__, highlight_js__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ConvertBody = ({ contentHTML , cardDatas  })=>{
    const contentReact = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(contentHTML, {
        replace: (domNode)=>{
            const cardLinks = cardDatas.map((data)=>data.url);
            if (domNode instanceof html_react_parser__WEBPACK_IMPORTED_MODULE_1__.Element && domNode.attribs) {
                if (domNode.name === "img") {
                    const { src , alt , width , height  } = domNode.attribs;
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        layout: "responsive",
                        src: src,
                        width: changeWidth,
                        height: changeHeight,
                        alt: alt,
                        sizes: "(max-width: 1200px)"
                    });
                } else if (domNode.name === "pre") {
                    const code = domNode.children[0].children[0].data; // pre配下のcode(インラインコードは反映しない)
                    const highlightCode = highlight_js__WEBPACK_IMPORTED_MODULE_3__["default"].highlightAuto(code); // ハイライトのスタイル
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                            className: "hljs",
                            children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(highlightCode.value)
                        })
                    });
                } else if (domNode.name === "a" && //タグがa
                domNode.parent?.children.length === 1 // 親のpタグから見てaタグ以外他の要素がない
                ) {
                    const indexOfUrl = cardDatas.findIndex((obj)=>{
                        return obj.url.indexOf(domNode.attribs?.href) != -1;
                    });
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LinkCard_linkcard__WEBPACK_IMPORTED_MODULE_4__/* .LinkCard */ .k, {
                        cardData: cardDatas[indexOfUrl],
                        className: (_contentStyle_module_css__WEBPACK_IMPORTED_MODULE_5___default().stack),
                        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__.domToReact)(domNode.children)
                    });
                }
            }
        }
    });
    // console.log(contentReact);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: contentReact
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConvertBody);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ PostBody)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contentStyle_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3223);
/* harmony import */ var _contentStyle_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contentStyle_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



// type propsType = {
//   children: ReactNode;
// };
const PostBody = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_contentStyle_module_css__WEBPACK_IMPORTED_MODULE_2___default().stack),
        children: children
    });
};


/***/ }),

/***/ 619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ LinkCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _linkCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8445);
/* harmony import */ var _linkCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_linkCard_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



const LinkCard = ({ cardData , children  })=>{
    //内部リンクか外部リンク化判定
    const blank = cardData.url.indexOf(process.env.SERVICE_DOMAIN) === -1;
    const blankProp = blank;
    console.log("----- cardData -----");
    console.log(cardData) ? {
        target: "_blank",
        rel: "noopener nofollow"
    } : {};
    if (cardData.title) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_linkCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().linkCardWrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_linkCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().images),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: cardData.url,
                        ...blankProp,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: cardData.image,
                            alt: ""
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_linkCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().desc),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: cardData.url,
                                ...blankProp,
                                children: cardData.title && cardData.title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: cardData.description && cardData.description
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: cardData.url,
        ...blankProp,
        underline: "none",
        children: children
    });
};



/***/ }),

/***/ 2523:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lm": () => (/* binding */ createLinkCardDatas),
/* harmony export */   "zQ": () => (/* binding */ getPostBySlug)
/* harmony export */ });
/* unused harmony export client */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(295);
/* harmony import */ var microcms_js_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1809);
/* harmony import */ var microcms_js_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(microcms_js_sdk__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([cheerio__WEBPACK_IMPORTED_MODULE_1__]);
cheerio__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*#__PURE__*/ 
react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
    src: "https://unpkg.com/microcms-js-sdk@latest/dist/umd/microcms-js-sdk.js"
});


const client = (0,microcms_js_sdk__WEBPACK_IMPORTED_MODULE_2__.createClient)({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY
});
async function getPostBySlug(slug) {
    try {
        const post = await client.get({
            endpoint: "blogs",
            queries: {
                filters: `slug[equals]${slug}`
            }
        });
        return post.contents[0];
    } catch (err) {
        console.log(err);
    }
}
const createLinkCardDatas = async (context)=>{
    // 対象の投稿のIDを取得
    const id = "qj2miw2od";
    const draftKey = context.previewData?.draftKey;
    // 記事取得
    const contents = await fetch(`https://taikiblog.microcms.io/api/v1/blogs/${id}${draftKey !== undefined ? `?draftKey=${draftKey}` : ""}`, {
        headers: {
            "X-API-KEY": process.env.API_KEY || ""
        }
    }).then((res)=>res.json());
    // htmlをパース
    const $ = (0,cheerio__WEBPACK_IMPORTED_MODULE_1__.load)(contents.content);
    //aタグのhrefの情報を配列で取得
    const links = $("a").toArray().map((data)=>{
        // urlをhttps://~形式に
        const url = data.attribs.href.indexOf("http") === -1 ? `${process.env.SERVICE_DOMAIN}${data.attribs.href}` : data.attribs.href;
        return {
            url: url
        };
    });
    let cardDatas = [];
    const temps = await Promise.all(links.map(async (link)=>{
        //fetchでurl先のhtmlデータを取得
        const metas = await fetch(link.url).then((res)=>res.text()).then((text)=>{
            //各サイトのmetaタグの情報をすべてmetasの配列に
            const $ = (0,cheerio__WEBPACK_IMPORTED_MODULE_1__.load)(text);
            const metas = $("meta").toArray();
            const metaData = {
                url: link.url,
                title: "",
                description: "",
                image: ""
            };
            //各サイトのmeta情報で、title,description,imageのurlだけ取り出す
            for(let i = 0; i < metas.length; i++){
                if (metas[i].attribs?.property === "og:title") metaData.title = metas[i].attribs.content;
                if (metas[i].attribs?.property === "og:description") metaData.description = metas[i].attribs.content;
                if (metas[i].attribs?.property === "og:image") metaData.image = metas[i].attribs.content;
            }
            return metaData;
        }).catch((e)=>{
            console.log(e);
        });
        return metas;
    }));
    // 外部に情報を渡せるようにjson形式に整形
    cardDatas = temps.filter((temp)=>temp !== undefined);
    return cardDatas;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;