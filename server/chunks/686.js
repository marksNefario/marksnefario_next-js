"use strict";
exports.id = 686;
exports.ids = [686];
exports.modules = {

/***/ 8686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8073);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2037);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TitleSection__Wrapper",
  componentId: "sc-1swgzjz-0"
})(["width:100%;display:flex;justify-content:center;align-items:", ";flex-direction:column;padding:0 40px;", " .type-string{font-size:32px;font-weight:800;color:", ";margin-bottom:10px;text-align:center;@media (max-width:1200px){font-size:28px;}@media (max-width:601px){font-size:26px;}}"], ({
  alignTitle
}) => alignTitle === "left" ? "flex-start" : "center", ({
  hasMarginBottom
}) => hasMarginBottom && "margin-bottom: 90px; @media (max-width: 900px) {	margin-bottom: 40px; }", props => props.theme.colors.branding);

const TitleSection = ({
  title,
  subtitle,
  hasMarginBottom,
  alignTitle
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_1___default()), {
  animateIn: "fadeIn",
  animateOnce: true,
  delay: 200,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Wrapper, {
    hasMarginBottom: hasMarginBottom,
    alignTitle: alignTitle,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
      className: "type-string",
      children: title
    }), subtitle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_styles_ui__WEBPACK_IMPORTED_MODULE_2__/* .BodyText */ .Ac, {
      centerText: true,
      children: subtitle
    })]
  })
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleSection);

/***/ })

};
;