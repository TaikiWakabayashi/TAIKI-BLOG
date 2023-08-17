(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4224:
/***/ ((module) => {

// Exports
module.exports = {
	"btnArea": "button_btnArea__o32u8",
	"wideButton": "button_wideButton__olVc_"
};


/***/ }),

/***/ 5343:
/***/ ((module) => {

// Exports
module.exports = {
	"categorySection": "category_categorySection__uGsvj",
	"categorySection2": "category_categorySection2__nioxG",
	"subTitle": "category_subTitle__WiJrE",
	"categoryWrapper": "category_categoryWrapper__u86YF",
	"genre": "category_genre__VP1Qt",
	"genreSub": "category_genreSub__ZvTfe",
	"categoryCard": "category_categoryCard__MLGII",
	"topImgArea": "category_topImgArea__ROk_0",
	"desc": "category_desc__KhDw2",
	"categoryList": "category_categoryList__s2tPu",
	"list": "category_list__3a706"
};


/***/ }),

/***/ 6820:
/***/ ((module) => {

// Exports
module.exports = {
	"newpostSection": "newpost_newpostSection__Gq6qk",
	"title": "newpost_title__PcO0E",
	"triangle": "newpost_triangle__kUUu0",
	"subTitle": "newpost_subTitle__s9ksJ",
	"postWrapper": "newpost_postWrapper__3UXQD",
	"latestPost": "newpost_latestPost__bZ_uq",
	"pickupPostCard": "newpost_pickupPostCard__X6E14",
	"pickupItem": "newpost_pickupItem__Y6JX4",
	"pickupImg": "newpost_pickupImg__IEqhj",
	"postList": "newpost_postList__OeSyj",
	"postItem": "newpost_postItem__sHZML",
	"postItemGrid": "newpost_postItemGrid__DKkF9",
	"postImgs": "newpost_postImgs__VtUQ3",
	"postExp": "newpost_postExp__f3lio"
};


/***/ }),

/***/ 8215:
/***/ ((module) => {

// Exports
module.exports = {
	"pickupSection": "pickup_pickupSection__j0z93",
	"subTitle": "pickup_subTitle__KQXQm",
	"pickupWrapper": "pickup_pickupWrapper__7N_9e",
	"pickupCard": "pickup_pickupCard__I1svK",
	"cardWrapper": "pickup_cardWrapper__sb_0H",
	"eyecatch": "pickup_eyecatch__jbcaG"
};


/***/ }),

/***/ 3189:
/***/ ((module) => {

// Exports
module.exports = {
	"scrollDown1": "scroll_scrollDown1__lRR2S",
	"pathmove": "scroll_pathmove__nxES7"
};


/***/ }),

/***/ 6075:
/***/ ((module) => {

// Exports
module.exports = {
	"topArea": "top_topArea__NJnqp",
	"wrapper": "top_wrapper__qyuwg",
	"spacer": "top_spacer__VmAAC",
	"imageArea": "top_imageArea__dqpLu",
	"titleArea": "top_titleArea__au86m",
	"subTitle": "top_subTitle__7hXa4",
	"h1": "top_h1__5eP43",
	"h2": "top_h2__VQV_P",
	"h3": "top_h3__GPLoL"
};


/***/ }),

/***/ 8184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4224);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const WideButton = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(({ title , url  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_button_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnArea),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: url,
            className: (_button_module_css__WEBPACK_IMPORTED_MODULE_3___default().wideButton),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: title
            })
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WideButton);


/***/ }),

/***/ 4329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ category)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Category/category.module.css
var category_module = __webpack_require__(5343);
var category_module_default = /*#__PURE__*/__webpack_require__.n(category_module);
// EXTERNAL MODULE: ./node_modules/next/legacy/image.js
var legacy_image = __webpack_require__(8044);
var image_default = /*#__PURE__*/__webpack_require__.n(legacy_image);
// EXTERNAL MODULE: ./components/Date/convertDate.tsx
var convertDate = __webpack_require__(8985);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Category/cCard.tsx





const CCard = ({ title , publishDate , eyecatch , slug  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (category_module_default()).categoryCard,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: `/blog/${slug}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (category_module_default()).topImgArea,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: eyecatch.url,
                        alt: "",
                        width: eyecatch.width,
                        height: eyecatch.height,
                        layout: "responsive"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (category_module_default()).desc,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(convertDate/* default */.Z, {
                                dateISO: publishDate
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: title
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const cCard = (CCard);

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./context/blogContext.ts
var blogContext = __webpack_require__(9119);
;// CONCATENATED MODULE: ./components/Category/categorySection.tsx





const CategorySection = ({ categoryName  })=>{
    const blogState = (0,external_recoil_.useRecoilValue)(blogContext/* blogsStates */.Oc);
    const extractCategoryBlogs = blogState.value.filter((blog)=>{
        return blog.category === categoryName;
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (category_module_default()).categoryWrapper,
            children: extractCategoryBlogs[0].blogs.map(({ title , publishDate , eyecatch , slug  }, index)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(cCard, {
                    title: title,
                    publishDate: publishDate,
                    eyecatch: eyecatch,
                    slug: slug
                }, index);
            })
        })
    });
};
/* harmony default export */ const categorySection = (CategorySection);

// EXTERNAL MODULE: ./components/Container/main-container.tsx
var main_container = __webpack_require__(4991);
;// CONCATENATED MODULE: ./components/Category/categoryTitle.tsx


const CategoryTitle = ({ title , subTitle  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
        className: (category_module_default()).genre,
        children: [
            title,
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (category_module_default()).genreSub,
                children: subTitle
            })
        ]
    });
};
/* harmony default export */ const categoryTitle = (CategoryTitle);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Button/widebutton.tsx
var widebutton = __webpack_require__(8184);
;// CONCATENATED MODULE: ./components/Category/category.tsx







const Category = /*#__PURE__*/ (0,external_react_.memo)(({ id , categoryName , index  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: index % 2 == 0 ? `${(category_module_default()).categorySection}` : `${(category_module_default()).categorySection2}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(main_container/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(categoryTitle, {
                        title: categoryName,
                        subTitle: ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(categorySection, {
                        categoryName: categoryName
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(widebutton/* default */.Z, {
                        title: "カテゴリ一覧へ",
                        url: `/blog/categories/${id}`
                    })
                ]
            })
        })
    });
});
/* harmony default export */ const category = (Category);


/***/ }),

/***/ 4548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NewPost_NewPost)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/NewPost/newpost.module.css
var newpost_module = __webpack_require__(6820);
var newpost_module_default = /*#__PURE__*/__webpack_require__.n(newpost_module);
// EXTERNAL MODULE: ./components/Container/main-container.tsx
var main_container = __webpack_require__(4991);
// EXTERNAL MODULE: ./node_modules/next/legacy/image.js
var legacy_image = __webpack_require__(8044);
var image_default = /*#__PURE__*/__webpack_require__.n(legacy_image);
// EXTERNAL MODULE: ./components/Icons/icon.module.css
var icon_module = __webpack_require__(5150);
var icon_module_default = /*#__PURE__*/__webpack_require__.n(icon_module);
;// CONCATENATED MODULE: ./components/Icons/NewIcon.tsx


const NewIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (icon_module_default()).newIcon,
        children: "New"
    });
};

// EXTERNAL MODULE: ./components/Date/convertDate.tsx
var convertDate = __webpack_require__(8985);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./context/blogContext.ts
var blogContext = __webpack_require__(9119);
;// CONCATENATED MODULE: ./components/NewPost/LatestPost.tsx








const LatestPost = ()=>{
    const newPostState = (0,external_recoil_.useRecoilValue)(blogContext/* newPostStates */.$F);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: newPostState.map(({ slug , eyecatch , title , publishDate  }, index)=>{
            if (index == 0) {
                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (newpost_module_default()).latestPost,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (newpost_module_default()).pickupPostCard,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(NewIcon, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (newpost_module_default()).pickupItem,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: `/blog/${slug}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (newpost_module_default()).pickupImg,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: eyecatch.url,
                                                alt: "",
                                                width: eyecatch.width,
                                                height: eyecatch.height,
                                                layout: "responsive"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "説明"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(convertDate/* default */.Z, {
                                            dateISO: publishDate
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }, index);
            }
        })
    });
};
/* harmony default export */ const NewPost_LatestPost = (LatestPost);

// EXTERNAL MODULE: ./components/Icons/categoryIcon.tsx
var categoryIcon = __webpack_require__(2465);
;// CONCATENATED MODULE: ./components/NewPost/PostItem.tsx






const PostItem = ({ contents  })=>{
    const { title , eyecatch , publishDate , categories , slug  } = contents;
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: (newpost_module_default()).postItem,
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: `/blog/${slug}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (newpost_module_default()).postItemGrid,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (newpost_module_default()).postImgs,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(categoryIcon/* CategoryIcon */.R, {
                                categoryName: categories.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: eyecatch.url,
                                alt: "",
                                width: eyecatch.width,
                                height: eyecatch.height,
                                layout: "responsive"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (newpost_module_default()).postExp,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(convertDate/* default */.Z, {
                                dateISO: publishDate
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const NewPost_PostItem = (PostItem);

;// CONCATENATED MODULE: ./components/NewPost/PostList.tsx





const PostList = ()=>{
    const newPostState = (0,external_recoil_.useRecoilValue)(blogContext/* newPostStates */.$F);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: (newpost_module_default()).postList,
            children: newPostState.map((content, index)=>{
                if (index !== 0) {
                    return /*#__PURE__*/ jsx_runtime_.jsx(NewPost_PostItem, {
                        contents: content
                    }, index);
                }
            })
        })
    });
};
/* harmony default export */ const NewPost_PostList = (PostList);

// EXTERNAL MODULE: ./components/Button/widebutton.tsx
var widebutton = __webpack_require__(8184);
;// CONCATENATED MODULE: ./components/NewPost/NewPost.tsx






const NewPost = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (newpost_module_default()).newpostSection,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                className: (newpost_module_default()).title,
                children: [
                    "NEW POSTS",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (newpost_module_default()).subTitle,
                        children: "新着情報"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (newpost_module_default()).triangle
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(main_container/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (newpost_module_default()).postWrapper,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(NewPost_LatestPost, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(NewPost_PostList, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(widebutton/* default */.Z, {
                        title: "記事一覧へ",
                        url: "/blog"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const NewPost_NewPost = (NewPost);


/***/ }),

/***/ 8621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ pickup)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/PickUp/pickup.module.css
var pickup_module = __webpack_require__(8215);
var pickup_module_default = /*#__PURE__*/__webpack_require__.n(pickup_module);
// EXTERNAL MODULE: ./components/Container/main-container.tsx
var main_container = __webpack_require__(4991);
// EXTERNAL MODULE: ./node_modules/next/legacy/image.js
var legacy_image = __webpack_require__(8044);
var image_default = /*#__PURE__*/__webpack_require__.n(legacy_image);
// EXTERNAL MODULE: ./components/Icons/categoryIcon.tsx
var categoryIcon = __webpack_require__(2465);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./context/blogContext.ts
var blogContext = __webpack_require__(9119);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Date/convertDate.tsx
var convertDate = __webpack_require__(8985);
;// CONCATENATED MODULE: ./components/PickUp/pickupItem.tsx








const PickupItem = ()=>{
    const pickupState = (0,external_recoil_.useRecoilValue)(blogContext/* pickupStates */.$c);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: pickupState.map(({ slug , categories , eyecatch , title , publishDate  }, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (pickup_module_default()).pickupCard,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (pickup_module_default()).cardWrapper,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: `blog/${slug}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (pickup_module_default()).eyecatch,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(categoryIcon/* CategoryIcon */.R, {
                                        categoryName: categories.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: eyecatch.url,
                                        alt: "",
                                        width: eyecatch.width,
                                        height: eyecatch.height,
                                        layout: "responsive"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(convertDate/* default */.Z, {
                                dateISO: publishDate
                            })
                        ]
                    })
                })
            }, index);
        })
    });
};
/* harmony default export */ const pickupItem = (PickupItem);

// EXTERNAL MODULE: ./components/Button/widebutton.tsx
var widebutton = __webpack_require__(8184);
;// CONCATENATED MODULE: ./components/PickUp/pickup.tsx





const PickUp = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (pickup_module_default()).pickupSection,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "PICK UP",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (pickup_module_default()).subTitle,
                        children: "おすすめ投稿"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(main_container/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (pickup_module_default()).pickupWrapper,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(pickupItem, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(widebutton/* default */.Z, {
                        title: "記事一覧へ",
                        url: "/blog"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pickup = (PickUp);


/***/ }),

/***/ 881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Top_top)
});

// UNUSED EXPORTS: Top

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Top/top.module.css
var top_module = __webpack_require__(6075);
var top_module_default = /*#__PURE__*/__webpack_require__.n(top_module);
// EXTERNAL MODULE: ./components/Scroll/scroll.module.css
var scroll_module = __webpack_require__(3189);
var scroll_module_default = /*#__PURE__*/__webpack_require__.n(scroll_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/Scroll/scroll.tsx



const Scroll = /*#__PURE__*/ external_react_default().memo(()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (scroll_module_default()).scrollDown1,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            children: "Scroll"
        })
    });
});
/* harmony default export */ const Scroll_scroll = (Scroll);

;// CONCATENATED MODULE: ./images/Standing.webp
/* harmony default export */ const Standing = ({"src":"/_next/static/media/Standing.117be057.webp","height":600,"width":301,"blurDataURL":"data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAAAwAABwAAQUxQSCEAAAAAACg0AABNugAAg/+BIpX/eQBe2QAAca4sAHlWfiZ0MFQAVlA4IEoAAAAwAgCdASoEAAgAAkA4JQBOiP/7sABgU3v3AAD+if+5fQt/Sv+H0iYgS+Yi0Sq+2PJAl14r3Pwb5oEa6IN8pi0k2Pf1Nse/pHYAAA==","blurWidth":4,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Top/top.tsx





const Top = ()=>{
    const bYellow = {
        backgroundColor: "#f0eb45"
    };
    const yellow = {
        color: "#f0eb45"
    };
    const blue = {
        color: "#5a8ad8"
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: bYellow,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (top_module_default()).topArea,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (top_module_default()).titleArea,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (top_module_default()).h1,
                                children: "waka-blog"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (top_module_default()).subTitle,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: (top_module_default()).h2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: yellow,
                                                children: "お金"
                                            }),
                                            "と",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: blue,
                                                children: "転職"
                                            }),
                                            "のブログ"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: (top_module_default()).h3,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: yellow,
                                                children: "money"
                                            }),
                                            " \xd7",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: blue,
                                                children: "career"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (top_module_default()).wrapper,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (top_module_default()).spacer
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (top_module_default()).imageArea,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: Standing,
                                    alt: "",
                                    loading: "eager",
                                    unoptimized: true
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Scroll_scroll, {})
        ]
    });
};
/* harmony default export */ const Top_top = (Top);


/***/ }),

/***/ 2603:
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
/* harmony import */ var _components_Top_top__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(881);
/* harmony import */ var _components_NewPost_NewPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4548);
/* harmony import */ var _components_PickUp_pickup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8621);
/* harmony import */ var _components_Category_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4329);
/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8033);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2523);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _context_blogContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9119);
/* harmony import */ var _components_Meta_meta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5572);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var date_fns_locale_ja__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3101);
/* harmony import */ var date_fns_locale_ja__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_ja__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api__WEBPACK_IMPORTED_MODULE_6__]);
_lib_api__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const Home = ({ blogs , newPosts , pickupPosts , convertDates  })=>{
    const [blogState, setBlogState] = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState)(_context_blogContext__WEBPACK_IMPORTED_MODULE_9__/* .blogsStates */ .Oc);
    const setNewPostState = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useSetRecoilState)(_context_blogContext__WEBPACK_IMPORTED_MODULE_9__/* .newPostStates */ .$F);
    const setPickUpState = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useSetRecoilState)(_context_blogContext__WEBPACK_IMPORTED_MODULE_9__/* .pickupStates */ .$c);
    const setConvertDateState = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useSetRecoilState)(_context_blogContext__WEBPACK_IMPORTED_MODULE_9__/* .convertDateStates */ .Mf);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        const blogObj = {
            value: blogs
        };
        setBlogState(blogObj);
        setNewPostState(newPosts);
        setPickUpState(pickupPosts);
        setConvertDateState(convertDates);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta_meta__WEBPACK_IMPORTED_MODULE_10__/* .Meta */ .h, {
                pageTitle: "HOME",
                pageDesc: "お金と転職のブログ"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Top_top__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NewPost_NewPost__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PickUp_pickup__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            blogState.value.map(({ id , category  }, index)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Category_category__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    id: id,
                    categoryName: category,
                    index: index
                }, index);
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getStaticProps = async ()=>{
    // 全カテゴリを取得
    const categories = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .getAllCategories */ .tG)();
    // 最新記事（作成日）を４記事取得
    const newPosts = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .getBlogBySortCreateDate */ .d7)();
    // カテゴリIDのリスト作成
    const IdArray = categories.contents.map(({ id  })=>{
        return id;
    });
    // カテゴリ名のリスト作成
    const categoryObjArray = [];
    categories.contents.forEach(({ id , name  })=>{
        const newObj = {
            id,
            name
        };
        categoryObjArray.push(newObj);
    });
    // 各カテゴリの記事を4件取得し、配列に格納
    const contentsArray = [];
    for (let id of IdArray){
        const blogs = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .getBlog */ .x3)(id, 4);
        contentsArray.push(blogs);
    }
    const objArray = [];
    // カテゴリ名とカテゴリに該当する４記事を格納した配列を持つオブジェクトを作成し、配列に格納
    contentsArray.forEach(({ contents  })=>{
        for (let category of categoryObjArray){
            if (contents[0].categories.name == category.name) {
                const newObj = {
                    id: category.id,
                    category: category.name,
                    blogs: contents
                };
                objArray.push(newObj);
            }
        }
    });
    // pickupが"Yes"の記事を取得
    const pickupArray = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .getPickUpBlog */ .cX)();
    // 全ブログの投稿日を取得
    const publishDates = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .getPublishDates */ .P7)();
    // 投稿日を変換
    const convertDates = [];
    publishDates.contents.forEach(({ publishDate  })=>{
        const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_11__.parseISO)(publishDate), "yyyy年MM月", {
            locale: (date_fns_locale_ja__WEBPACK_IMPORTED_MODULE_12___default())
        });
        if (!convertDates.includes(date)) {
            convertDates.push(date);
        }
    });
    return {
        props: {
            blogs: objArray,
            newPosts: newPosts.contents,
            pickupPosts: pickupArray.contents,
            convertDates
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 3101:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/locale/ja");

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

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

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

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ 295:
/***/ ((module) => {

"use strict";
module.exports = import("cheerio");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,636,755,675,572,307,33], () => (__webpack_exec__(2603)));
module.exports = __webpack_exports__;

})();