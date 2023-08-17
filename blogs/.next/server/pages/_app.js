(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1619:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header____5Dq",
	"fixedHeader": "header_fixedHeader__CBuKr",
	"notActive": "header_notActive__kd1yz",
	"active": "header_active__I1Fxw",
	"headerWrapper": "header_headerWrapper__0u5vo",
	"logo": "header_logo__y2C92",
	"title": "header_title__zPl58",
	"nav": "header_nav__zgNzC",
	"open": "header_open__BAFlm",
	"subTitle": "header_subTitle__9f1HX",
	"btn": "header_btn__r_7vT",
	"bar": "header_bar__fRZuT",
	"close": "header_close__kZ7lo",
	"pHeaderWrapper": "header_pHeaderWrapper__gwfd_"
};


/***/ }),

/***/ 9623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./styles/footer.css
var footer = __webpack_require__(8335);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./components/Header/header.module.css
var header_module = __webpack_require__(1619);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header/Logo.tsx



const Logo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (header_module_default()).logo,
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            className: (header_module_default()).title,
            href: "/",
            children: "waka-blog"
        })
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Header/SubTitle.tsx



const SubTitle = /*#__PURE__*/ (0,external_react_.memo)(({ title  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: (header_module_default()).subTitle,
        children: title
    });
});

;// CONCATENATED MODULE: ./context/toggleContext.ts

const toggleState = (0,external_recoil_.atom)({
    key: "toggleState",
    default: false
});

;// CONCATENATED MODULE: ./components/Header/List.tsx






const List = /*#__PURE__*/ (0,external_react_.memo)(({ categoryName , upper , link  })=>{
    const setToggle = (0,external_recoil_.useSetRecoilState)(toggleState);
    const closeNav = ()=>{
        setToggle(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: link,
            onClick: closeNav,
            children: [
                categoryName,
                /*#__PURE__*/ jsx_runtime_.jsx(SubTitle, {
                    title: upper
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./components/Header/Navigation.tsx





const Navigation = ()=>{
    const toggle = (0,external_recoil_.useRecoilValue)(toggleState);
    const listArr = [
        {
            categoryName: "ホーム",
            upper: "Home",
            link: "/"
        },
        {
            categoryName: "私について",
            upper: "About Me",
            link: "/about"
        },
        {
            categoryName: "ポートフォリオ",
            upper: "Portfolio",
            link: "/portfolio"
        },
        {
            categoryName: "ブログ",
            upper: "Blog",
            link: "/blog"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: toggle ? `${(header_module_default()).open} ${(header_module_default()).nav}` : `${(header_module_default()).nav}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: listArr.map((item)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(List, {
                    categoryName: item.categoryName,
                    upper: item.upper,
                    link: item.link
                }, item.categoryName);
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Header/NavButton.tsx




const NavButton = ()=>{
    const [toggle, setToggle] = (0,external_recoil_.useRecoilState)(toggleState);
    const toggleNav = ()=>{
        setToggle((prev)=>!prev);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: toggle ? `${(header_module_default()).open} ${(header_module_default()).btn}` : `${(header_module_default()).close} ${(header_module_default()).btn}`,
        onClick: toggleNav,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: (header_module_default()).bar
        })
    });
};

;// CONCATENATED MODULE: ./components/Header/Header.tsx






const Header = /*#__PURE__*/ (0,external_react_.memo)(({ isActive  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: (header_module_default()).header,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (header_module_default()).headerWrapper,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Logo, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(NavButton, {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: isActive ? `${(header_module_default()).fixedHeader} ${(header_module_default()).active}` : `${(header_module_default()).fixedHeader} ${(header_module_default()).notActive}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (header_module_default()).headerWrapper,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Logo, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(NavButton, {})
                    ]
                })
            })
        ]
    });
});
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./hooks/useHeaderScroll.ts

// スクロールを制御する
/**
 * @param {number}  activePoint - 表示のポイントを数値で取得
 * @return {boolean} 表示、非表示のbool値を返却する
 */ const useHeaderScroll = (activePoint)=>{
    const [isHeaderActive, setIsHeaderActive] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const scrollWindow = ()=>{
            const ap = activePoint;
            let scroll = 0;
            scroll = window.scrollY;
            if (ap <= scroll) {
                setIsHeaderActive(true);
            } else {
                setIsHeaderActive(false);
            }
        };
        window.addEventListener("scroll", scrollWindow);
        return ()=>{
            window.removeEventListener("scroll", scrollWindow);
        };
    }, [
        activePoint
    ]);
    return isHeaderActive;
};
/* harmony default export */ const hooks_useHeaderScroll = (useHeaderScroll);

;// CONCATENATED MODULE: ./pages/_app.tsx






function MyApp({ Component , pageProps  }) {
    const isHeaderActive = hooks_useHeaderScroll(300);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_recoil_.RecoilRoot, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {
                isActive: isHeaderActive
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8335:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(9623)));
module.exports = __webpack_exports__;

})();