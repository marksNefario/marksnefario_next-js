"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LayoutTemplate)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "react-reveal/Fade"
const Fade_namespaceObject = require("react-reveal/Fade");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_namespaceObject);
// EXTERNAL MODULE: ./context/SettingsContext.jsx + 2 modules
var SettingsContext = __webpack_require__(3974);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/LayoutTemplate.jsx
 //Third part librarys



 //Custom components
//import SwitchThemeButton from "@/components/SwitchThemeButton";
//import LanguageSwitchButton from "@/components/LanguageSwitchButton";
//Context





const Main = external_styled_components_default().main.withConfig({
  displayName: "LayoutTemplate__Main",
  componentId: "sc-1b1696n-0"
})(["display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;background-color:", ";"], props => props.theme.colors.backgroundPage);
const ContainerPage = external_styled_components_default().div.withConfig({
  displayName: "LayoutTemplate__ContainerPage",
  componentId: "sc-1b1696n-1"
})(["display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;"]);
const HeaderContainer = external_styled_components_default().header.withConfig({
  displayName: "LayoutTemplate__HeaderContainer",
  componentId: "sc-1b1696n-2"
})(["display:flex;align-items:center;justify-content:space-around;width:100%;height:64px;position:fixed;top:0;z-index:3;backdrop-filter:saturate(180%) blur(30px);-webkit-backdrop-filter:saturate(180%) blur(30px);@media (max-width:600px){justify-content:space-between;}"]);
const LogoContainer = external_styled_components_default().div.withConfig({
  displayName: "LayoutTemplate__LogoContainer",
  componentId: "sc-1b1696n-3"
})(["display:flex;align-items:center;justify-content:center;&:hover{cursor:pointer;opacity:0.8;}@media (max-width:600px){margin-left:30px;}"]);
const LogoText = external_styled_components_default().h3.withConfig({
  displayName: "LayoutTemplate__LogoText",
  componentId: "sc-1b1696n-4"
})(["color:", ";font-weight:700;font-size:30px;@media (max-width:900px){font-size:", ";}"], props => props.theme.colors.title, props => props.theme.fontSizes.xl);
const CaracteresLogo = external_styled_components_default().span.withConfig({
  displayName: "LayoutTemplate__CaracteresLogo",
  componentId: "sc-1b1696n-5"
})(["color:", ";font-weight:700;"], props => props.theme.colors.branding);
const NavbarOptionContainer = external_styled_components_default().nav.withConfig({
  displayName: "LayoutTemplate__NavbarOptionContainer",
  componentId: "sc-1b1696n-6"
})(["display:flex;align-items:center;justify-content:center;@media (max-width:600px){display:none;}.links{display:flex;align-items:center;justify-content:center;&:hover h4:not(:hover){opacity:0.3;}}"]);
const SwitchMenuContainer = external_styled_components_default().div.withConfig({
  displayName: "LayoutTemplate__SwitchMenuContainer",
  componentId: "sc-1b1696n-7"
})(["display:flex;align-items:center;justify-content:center;margin-right:20px;@media (min-width:601px){display:none;}"]);
const NavbarOption = external_styled_components_default().h4.withConfig({
  displayName: "LayoutTemplate__NavbarOption",
  componentId: "sc-1b1696n-8"
})(["color:", ";font-weight:800;margin-left:5px;margin-right:5px;text-decoration:none;border-bottom:4px solid transparent;transition:all 0.3s ease;position:relative;&::before{content:\"\";position:absolute;bottom:0;left:0;right:0;height:2px;background-color:", ";transform-origin:bottom right;transform:scaleX(0);transition:transform 0.5s ease;}&:hover::before{transform-origin:bottom left;transform:scaleX(1);}&:hover{cursor:pointer;color:", ";}@media (max-width:1400px){font-size:", ";}@media (max-width:1200px){font-size:", ";}@media (max-width:900px){font-size:", ";}"], props => props.theme.colors.title, props => props.theme.colors.branding, props => props.theme.colors.branding, props => props.theme.fontSizes.md, props => props.theme.fontSizes.sm, props => props.theme.fontSizes.xs);
function LayoutTemplate({
  children
}) {
  const {
    language
  } = (0,external_react_.useContext)(SettingsContext/* SettingsContext */.J);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
        top: true,
        delay: 100,
        duration: 200,
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "#section-home",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(LogoContainer, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LogoText, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(CaracteresLogo, {
                children: "<"
              }), "GV ", /*#__PURE__*/jsx_runtime_.jsx(CaracteresLogo, {
                children: "/>"
              })]
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(NavbarOptionContainer, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "links",
          children: [/*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
            top: true,
            delay: 100,
            duration: 200,
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "#section-home",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(NavbarOption, {
                children: language.navbarMenu.labelHome
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
            top: true,
            delay: 200,
            duration: 200,
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "#section-services",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(NavbarOption, {
                children: language.navbarMenu.labelServices
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
            top: true,
            delay: 200,
            duration: 200,
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "#section-sobre-mim",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(NavbarOption, {
                children: language.navbarMenu.labelAboutMe
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
            top: true,
            delay: 300,
            duration: 200,
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "#section-portifolio",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(NavbarOption, {
                children: language.navbarMenu.labelPortifolio
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
            top: true,
            delay: 400,
            duration: 200,
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "#section-experiencia",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(NavbarOption, {
                children: language.navbarMenu.labelExperience
              })
            })
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Main, {
      children: /*#__PURE__*/jsx_runtime_.jsx(ContainerPage, {
        children: children
      })
    })]
  });
}

/***/ }),

/***/ 6446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
/* harmony import */ var _styles_globalStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5665);
/* harmony import */ var _components_LayoutTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3195);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__]);
_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_context_SettingsContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__.Analytics, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_script__WEBPACK_IMPORTED_MODULE_0___default()), {
      src: "https://cdn.splitbee.io/sb.js"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_script__WEBPACK_IMPORTED_MODULE_0___default()), {
      async: true,
      defer: true,
      src: "https://analytics.umami.is/script.js",
      "data-website-id": "dfbb47c9-f3d1-415b-9405-e61bdee1c171"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_styles_globalStyle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_LayoutTemplate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Component, _objectSpread({}, pageProps))
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["  *{margin:0;padding:0;outline:0;box-sizing:border-box;}html,body,:root{font-family:'Lato',sans-serif;min-height:100%;scroll-behavior:smooth;overflow-x:hidden;}::selection{background:", ";color:", ";}::-webkit-scrollbar{width:4px;}::-webkit-scrollbar-track{background:", ";}::-webkit-scrollbar-thumb{background:", ";}"], props => props.theme.colors.branding, props => props.theme.colors.background, props => props.theme.colors.backgroundSecondary, props => props.theme.colors.branding);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@vercel/analytics/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [82,922,664,974], () => (__webpack_exec__(6446)));
module.exports = __webpack_exports__;

})();