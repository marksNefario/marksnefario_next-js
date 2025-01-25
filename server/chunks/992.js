"use strict";
exports.id = 992;
exports.ids = [992];
exports.modules = {

/***/ 3992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Experiencia)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-vertical-timeline-component"
var external_react_vertical_timeline_component_ = __webpack_require__(8938);
// EXTERNAL MODULE: ./context/SettingsContext.jsx + 2 modules
var SettingsContext = __webpack_require__(3974);
// EXTERNAL MODULE: external "@styled-icons/ionicons-outline/School"
var School_ = __webpack_require__(2231);
// EXTERNAL MODULE: external "@styled-icons/fluentui-system-filled/LearningApp"
var LearningApp_ = __webpack_require__(5320);
// EXTERNAL MODULE: external "@styled-icons/material-rounded/Work"
var Work_ = __webpack_require__(5479);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/TimelineExperienciaFormacao.jsx




 //Contexto

 //ícones






const LearningAppIcon = external_styled_components_default()(LearningApp_.LearningApp).withConfig({
  displayName: "TimelineExperienciaFormacao__LearningAppIcon",
  componentId: "sc-1yuh7mj-0"
})(["color:", ";width:40px;height:40px;"], props => props.theme.colors.backgroundSecondary);
const SchoolIcon = external_styled_components_default()(School_.School).withConfig({
  displayName: "TimelineExperienciaFormacao__SchoolIcon",
  componentId: "sc-1yuh7mj-1"
})(["color:", ";width:40px;height:40px;"], props => props.theme.colors.backgroundSecondary);
const WorkIcon = external_styled_components_default()(Work_.Work).withConfig({
  displayName: "TimelineExperienciaFormacao__WorkIcon",
  componentId: "sc-1yuh7mj-2"
})(["color:", ";width:40px;height:40px;"], props => props.theme.colors.backgroundSecondary);
const TimelineContent = external_styled_components_default().div.withConfig({
  displayName: "TimelineExperienciaFormacao__TimelineContent",
  componentId: "sc-1yuh7mj-3"
})(["display:flex;align-items:flex-start;justify-content:center;flex-direction:column;"]);
const TitleContentTimeline = external_styled_components_default().h3.withConfig({
  displayName: "TimelineExperienciaFormacao__TitleContentTimeline",
  componentId: "sc-1yuh7mj-4"
})([".vertical-timeline-element-title{color:", ";}@media (max-width:1600px){font-size:", ";}@media (max-width:1400px){font-size:", ";}@media (max-width:1200px){font-size:", ";}@media (max-width:900px){font-size:", ";}"], props => props.theme.colors.branding, props => props.theme.fontSizes.xl, props => props.theme.fontSizes.lg, props => props.theme.fontSizes.md, props => props.theme.fontSizes.sm);
const BoldText = external_styled_components_default().h4.withConfig({
  displayName: "TimelineExperienciaFormacao__BoldText",
  componentId: "sc-1yuh7mj-5"
})(["color:", ";font-weight:800;margin-top:2px;margin-bottom:2px;span{font-weight:400;}"], props => props.theme.colors.title);
function TimelinePortifolio(props) {
  const {
    language
  } = (0,external_react_.useContext)(SettingsContext/* SettingsContext */.J);
  const theme = (0,external_styled_components_.useTheme)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_vertical_timeline_component_.VerticalTimeline, {
    lineColor: theme.colors.branding,
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_vertical_timeline_component_.VerticalTimelineElement, {
      className: "vertical-timeline-element--work",
      contentStyle: {
        borderBottom: `4px solid ${theme.colors.branding}`,
        boxShadow: "0px 0px 0px 0px #ccc",
        backgroundColor: theme.colors.backgroundSecondary
      },
      iconStyle: {
        background: theme.colors.branding,
        color: "#fff",
        boxShadow: `0 0 0 0px ${theme.colors.branding}`
      },
      icon: /*#__PURE__*/jsx_runtime_.jsx(SchoolIcon, {}),
      contentArrowStyle: {
        borderRight: `7px solid ${theme.colors.backgroundSecondary}`
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TimelineContent, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          style: {
            color: theme.colors.branding,
            padding: "2px 8px",
            borderRadius: "4px",
            border: `2px solid ${theme.colors.branding}`,
            marginBottom: "10px"
          },
          children: "2017"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(BoldText, {
          children: [language.experiencePage.timeline.labelInstitution, ": ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Odessa Polytechnic National University"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(BoldText, {
          children: [language.experiencePage.timeline.labelCategory, ": ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Bachelor's Degree"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(BoldText, {
          children: [language.experiencePage.timeline.labelTitle, ": ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Information Technology"
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_vertical_timeline_component_.VerticalTimelineElement, {
      className: "vertical-timeline-element--work",
      contentStyle: {
        borderBottom: `4px solid ${theme.colors.branding}`,
        boxShadow: "0px 0px 0px 0px #ccc",
        backgroundColor: theme.colors.backgroundSecondary
      },
      iconStyle: {
        background: theme.colors.branding,
        color: "#fff",
        boxShadow: `0 0 0 0px ${theme.colors.branding}`
      },
      icon: /*#__PURE__*/jsx_runtime_.jsx(WorkIcon, {}),
      contentArrowStyle: {
        borderRight: `7px solid ${theme.colors.backgroundSecondary}`
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TimelineContent, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          style: {
            color: theme.colors.branding,
            padding: "2px 8px",
            borderRadius: "4px",
            border: `2px solid ${theme.colors.branding}`,
            marginBottom: "10px"
          },
          children: "2021"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(BoldText, {
          children: [language.experiencePage.timeline.labelCompany, ": ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "OS-System"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(BoldText, {
          children: [language.experiencePage.timeline.labelPosition, ": ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Software Developer"
          })]
        })]
      })
    })]
  });
}
// EXTERNAL MODULE: ./components/TitleSection.jsx
var TitleSection = __webpack_require__(8686);
;// CONCATENATED MODULE: ./pages/experiencia.jsx

 //Custom components


 //Context




const SectionExperiencia = external_styled_components_default().section.withConfig({
  displayName: "experiencia__SectionExperiencia",
  componentId: "sc-1us63s5-0"
})(["display:flex;align-items:center;justify-content:flex-start;flex-direction:column;padding-top:60px;width:100%;min-height:100vh;"]);
function Experiencia() {
  const {
    language
  } = (0,external_react_.useContext)(SettingsContext/* SettingsContext */.J);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SectionExperiencia, {
    id: "section-experiencia",
    children: [/*#__PURE__*/jsx_runtime_.jsx(TitleSection/* default */.Z, {
      title: language.experiencePage.title,
      subtitle: language.experiencePage.subtitle,
      hasMarginBottom: true
    }), /*#__PURE__*/jsx_runtime_.jsx(TimelinePortifolio, {})]
  });
}

/***/ })

};
;