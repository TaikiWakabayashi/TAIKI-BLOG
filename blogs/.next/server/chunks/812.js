exports.id = 812;
exports.ids = [812];
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

/***/ 4958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ Header_Header),
  "pz": () => (/* binding */ useToggleContext)
});

// UNUSED EXPORTS: Header, ToggleContext

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
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
            children: "WAKA-BLOG"
        })
    });
};

;// CONCATENATED MODULE: ./components/Header/SubTitle.tsx


const SubTitle = ({ title  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: (header_module_default()).subTitle,
        children: title
    });
};

;// CONCATENATED MODULE: ./components/Header/List.tsx




const List = ({ categoryName , upper  })=>{
    const { toggle , setToggle  } = useToggleContext();
    const closeNav = ()=>{
        setToggle(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: "#",
            onClick: closeNav,
            children: [
                categoryName,
                /*#__PURE__*/ jsx_runtime_.jsx(SubTitle, {
                    title: upper
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Header/Navigation.tsx




const Navigation = ()=>{
    const { toggle  } = useToggleContext();
    const listArr = [
        {
            categoryName: "転職",
            upper: "JOB CHANGE"
        },
        {
            categoryName: "プログラミング",
            upper: "PROGRAMMING"
        },
        {
            categoryName: "エンジニア",
            upper: "ENGINEER"
        },
        {
            categoryName: "プライベート",
            upper: "PRIVATE"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: toggle ? `${(header_module_default()).open} ${(header_module_default()).nav}` : `${(header_module_default()).nav}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: listArr.map((item)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(List, {
                    categoryName: item.categoryName,
                    upper: item.upper
                }, item.categoryName);
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Header/NavButton.tsx



const NavButton = ()=>{
    const { toggle , setToggle  } = useToggleContext();
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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Header/Header.tsx







const ToggleContext = /*#__PURE__*/ (0,external_react_.createContext)({});
const Header = ({ isActive  })=>{
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: (header_module_default()).header,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (header_module_default()).headerWrapper,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Logo, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ToggleContext.Provider, {
                            value: {
                                toggle,
                                setToggle
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(NavButton, {})
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: isActive ? `${(header_module_default()).fixedHeader} ${(header_module_default()).active}` : `${(header_module_default()).fixedHeader} ${(header_module_default()).notActive}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (header_module_default()).headerWrapper,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Logo, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ToggleContext.Provider, {
                            value: {
                                toggle,
                                setToggle
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(NavButton, {})
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);
const useToggleContext = ()=>{
    return (0,external_react_.useContext)(ToggleContext);
};


/***/ }),

/***/ 8359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// スクロールを制御する
/**
 * @param {number}  activePoint - 表示のポイントを数値で取得
 * @return {boolean} 表示、非表示のbool値を返却する
 */ const useHeaderScroll = (activePoint)=>{
    const [isHeaderActive, setIsHeaderActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHeaderScroll);


/***/ })

};
;