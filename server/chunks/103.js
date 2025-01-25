"use strict";
exports.id = 103;
exports.ids = [103];
exports.modules = {

/***/ 2103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TitleSpan": () => (/* binding */ TitleSpan),
  "default": () => (/* binding */ Portifolio)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-animate-on-scroll"
var external_react_animate_on_scroll_ = __webpack_require__(8073);
var external_react_animate_on_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_on_scroll_);
// EXTERNAL MODULE: ./context/SettingsContext.jsx + 2 modules
var SettingsContext = __webpack_require__(3974);
// EXTERNAL MODULE: external "@styled-icons/fa-solid/Robot"
var Robot_ = __webpack_require__(8523);
// EXTERNAL MODULE: external "@styled-icons/fa-brands/Java"
var Java_ = __webpack_require__(2658);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/GoogleCloud"
var GoogleCloud_ = __webpack_require__(5442);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Firebase"
var Firebase_ = __webpack_require__(5445);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Mongodb"
var Mongodb_ = __webpack_require__(1620);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Sqlite"
var Sqlite_ = __webpack_require__(3288);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Javascript"
var Javascript_ = __webpack_require__(2083);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/ReactLogo"
var ReactLogo_ = __webpack_require__(5746);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Nextdotjs"
var Nextdotjs_ = __webpack_require__(9075);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Nodejs"
var Nodejs_ = __webpack_require__(5265);
// EXTERNAL MODULE: external "@styled-icons/ionicons-solid/LogoVercel"
var LogoVercel_ = __webpack_require__(948);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Styledcomponents"
var Styledcomponents_ = __webpack_require__(5179);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Css3"
var Css3_ = __webpack_require__(7620);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Html5"
var Html5_ = __webpack_require__(2864);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Typescript"
var Typescript_ = __webpack_require__(754);
// EXTERNAL MODULE: external "@styled-icons/fa-brands/Sass"
var Sass_ = __webpack_require__(1537);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Expo"
var Expo_ = __webpack_require__(8854);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Jest"
var Jest_ = __webpack_require__(5341);
// EXTERNAL MODULE: external "@styled-icons/fa-solid/Filter"
var Filter_ = __webpack_require__(2404);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Svelte"
var Svelte_ = __webpack_require__(2028);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Tooltip.jsx




const ToolTip = external_styled_components_default().div.withConfig({
  displayName: "Tooltip__ToolTip",
  componentId: "sc-1qoc7wy-0"
})(["transition:all 0.3s ease;.tooltip{position:relative;display:inline-block;&:hover{svg{color:", ";}}}.tooltip .tooltiptext{visibility:hidden;width:max-content;background-color:", ";z-index:10 !important;color:", ";text-align:center;padding:3px 10px;border-radius:4px;font-weight:900;font-size:14px;position:absolute;z-index:1;bottom:125%;left:50%;transform:translateX(-50%);opacity:0;transition:opacity 0.4s;}.tooltip .tooltiptext::after{content:\"\";position:absolute;top:100%;left:50%;transform:translateX(-50%);border-width:5px;border-style:solid;border-color:", " transparent transparent transparent;}.tooltip:hover .tooltiptext{visibility:visible;opacity:1;}"], props => props.theme.colors.branding, props => props.theme.colors.branding, props => props.theme.colors.background, props => props.theme.colors.branding);

const Tooltip = ({
  children,
  toolTipText
}) => /*#__PURE__*/jsx_runtime_.jsx(ToolTip, {
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "tooltip",
    children: [children, /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "tooltiptext",
      children: toolTipText
    })]
  })
});

/* harmony default export */ const components_Tooltip = (Tooltip);
// EXTERNAL MODULE: ./components/TitleSection.jsx
var TitleSection = __webpack_require__(8686);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@styled-icons/evaicons-outline"
var evaicons_outline_ = __webpack_require__(4128);
// EXTERNAL MODULE: external "@styled-icons/material-outlined"
var material_outlined_ = __webpack_require__(3318);
;// CONCATENATED MODULE: ./components/CardProject.jsx


 //Context

 //Icons





const Card = external_styled_components_default().div.withConfig({
  displayName: "CardProject__Card",
  componentId: "sc-1s2vkan-0"
})(["display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:column;width:100%;background-color:", ";border-radius:4px;border:2px solid transparent;transition:all 0.3s ease;.created-at{color:", ";font-size:14px;font-weight:300;margin-top:10px;}.project-type{display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:row;margin-top:5px;margin-bottom:5px;span{color:", ";background-color:", ";border-radius:90px;padding:2px 10px;font-size:12px;font-weight:900;margin-right:10px;}}&:hover{border:2px solid ", ";.image img{transition:transform 0.3s ease;transform:scale(1.2);}.image svg{transition:transform 0.3s ease;transform:scale(1.2);}}.image{position:relative;width:100%;height:200px;overflow:hidden;display:flex;align-items:center;justify-content:center;border-top-left-radius:4px;border-top-right-radius:4px;img{transition:transform 0.3s ease;transform:scale(1);}svg{width:60px;height:60px;color:", ";transition:transform 0.3s ease;transform:scale(1);}}.content-padding{padding:14px;width:100%;}.hr{width:100%;border-top:1px solid ", ";}.title{font-weight:700;font-size:18px;color:", ";margin-bottom:10px;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;}.description-wrapper{height:110px;overflow:hidden;position:relative;}.description{font-size:16px;color:", ";letter-spacing:2px;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;}.container-buttons{display:flex;align-items:flex-start;justify-content:space-between;flex-direction:row;width:100%;a{display:flex;align-items:center;justify-content:center;border:2px solid ", ";padding:8px 10px;border-radius:4px;color:", ";font-weight:bold;width:100%;text-decoration:none;cursor:pointer;gap:10px;svg{width:26px;height:26px;color:", ";}&:hover{color:", ";background-color:", ";svg{color:", ";}}@media (max-width:601px){font-size:14px;}}a:first-of-type:not(:only-of-type){margin-right:10px;}}.tech-stack{display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap;svg{width:22px;height:22px;margin-right:5px;color:", ";transition:all 0.3s ease;}}"], props => props.theme.colors.backgroundSecondary, props => props.theme.colors.body, props => props.theme.colors.backgroundSecondary, props => props.theme.colors.branding, props => props.theme.colors.branding, props => props.theme.colors.inactiveTitle, props => props.theme.colors.inactiveTitle, props => props.theme.colors.title, props => props.theme.colors.body, props => props.theme.colors.branding, props => props.theme.colors.branding, props => props.theme.colors.branding, props => props.theme.colors.backgroundSecondary, props => props.theme.colors.branding, props => props.theme.colors.backgroundSecondary, props => props.theme.colors.inactiveTitle);
function CardProject({
  title,
  description,
  typeProject,
  techs,
  createdAt,
  liveDemoUrl,
  sourceCodeLink,
  imageSourcePath
}) {
  const {
    language
  } = (0,external_react_.useContext)(SettingsContext/* SettingsContext */.J);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "image",
      children: imageSourcePath ? /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: imageSourcePath,
        alt: `Imagem do projeto: ${title}`,
        layout: "fill"
      }) : /*#__PURE__*/jsx_runtime_.jsx(material_outlined_.NoPhotography, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "content-padding",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: "title",
        title: title,
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "project-type",
        children: typeProject === null || typeProject === void 0 ? void 0 : typeProject.map((chip, index) => /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: chip
        }, index))
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "created-at",
        children: [language.portifolioPage.createdLabel, ": ", createdAt]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hr"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "content-padding description-wrapper",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "description",
        children: description
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hr"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "content-padding",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "tech-stack",
        children: techs === null || techs === void 0 ? void 0 : techs.map((icone, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: icone
        }, i))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hr"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "content-padding",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container-buttons",
        children: [liveDemoUrl != null && /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: liveDemoUrl,
          target: "_blank",
          rel: "noreferrer",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: language.portifolioPage.demoLabel.toUpperCase()
          }), /*#__PURE__*/jsx_runtime_.jsx(evaicons_outline_.ExternalLinkOutline, {})]
        }), sourceCodeLink != null && /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: sourceCodeLink,
          target: "_blank",
          rel: "noreferrer",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: language.portifolioPage.sourceCodeLabel.toUpperCase()
          }), /*#__PURE__*/jsx_runtime_.jsx(evaicons_outline_.GithubOutline, {})]
        })]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./pages/portfolio.jsx
/* eslint-disable react/jsx-key */


 //Contexto

 //Ícones


 // import { Amazonaws } from "@styled-icons/simple-icons/Amazonaws";







 // import { Python } from "@styled-icons/boxicons-logos/Python";









 // import { Leaflet } from "@styled-icons/simple-icons/Leaflet";
// import { Express } from "@styled-icons/simple-icons/Express";
// import { Flutter } from "@styled-icons/boxicons-logos/Flutter";


 //Custom components






const ContainerGrid = external_styled_components_default().div.withConfig({
  displayName: "portfolio__ContainerGrid",
  componentId: "sc-bp2rv1-0"
})(["display:grid;grid-template-columns:repeat(3,1fr);width:60%;gap:20px;transition:all 0.3s ease;grid-auto-rows:1fr;align-items:stretch;@media (max-width:1600px){width:85%;}@media (max-width:1400px){grid-template-columns:repeat(2,1fr);}@media (max-width:900px){grid-template-columns:repeat(1,1fr);}"]);
const ChipTechOptions = external_styled_components_default().div.withConfig({
  displayName: "portfolio__ChipTechOptions",
  componentId: "sc-bp2rv1-1"
})(["display:flex;align-items:center;justify-content:flex-start;margin-top:20px;margin-bottom:20px;width:60%;svg{min-width:28px;min-height:28px;width:28px;height:28px;color:", ";margin-right:10px;@media (max-width:601px){min-width:18px;min-height:18px;width:18px;height:18px;}}@media (max-width:1600px){width:85%;}"], props => props.theme.colors.branding);
const Chip = external_styled_components_default().span.withConfig({
  displayName: "portfolio__Chip",
  componentId: "sc-bp2rv1-2"
})(["color:", ";background-color:", ";border:1px solid ", ";padding:2px 7px 3px 7px;margin:3px;border-radius:224px;font-weight:700;&:hover{cursor:pointer;color:", ";border:1px solid ", ";}@media (max-width:601px){font-weight:700;font-size:10px;}"], props => props.active == true ? props.theme.colors.backgroundSecondary : props.theme.colors.inactiveTitle, props => props.active == true ? props.theme.colors.branding : props.theme.colors.backgroundSecondary, props => props.active == true ? props.theme.colors.branding : props.theme.colors.inactiveTitle, props => props.active == false && props.theme.colors.branding, props => props.theme.colors.branding);
const TitleSpan = external_styled_components_default().h3.withConfig({
  displayName: "portfolio__TitleSpan",
  componentId: "sc-bp2rv1-3"
})(["z-index:2;position:absolute;top:0;left:0;padding:5px 15px 5px 10px;color:", ";background-color:", ";font-size:", ";border-radius:2px 0 18px 0;@media (max-width:900px){font-size:", ";}@media (max-width:600px){font-size:", ";}"], props => props.theme.colors.backgroundPage, props => props.theme.colors.branding, props => props.theme.fontSizes.md, props => props.theme.fontSizes.sm, props => props.theme.fontSizes.xs);
const SectionPortifolio = external_styled_components_default().section.withConfig({
  displayName: "portfolio__SectionPortifolio",
  componentId: "sc-bp2rv1-4"
})(["display:flex;align-items:center;justify-content:flex-start;flex-direction:column;width:100%;min-height:100vh;padding-top:60px;"]);
function Portifolio() {
  const {
    language
  } = (0,external_react_.useContext)(SettingsContext/* SettingsContext */.J);
  const {
    0: stack,
    1: setStack
  } = (0,external_react_.useState)("TODOS");
  const {
    0: view,
    1: setView
  } = (0,external_react_.useState)("grid");
  const projects = (0,external_react_.useMemo)(() => [{
    id: 1,
    title: language.portifolioPage.projects.id_1.title,
    description: language.portifolioPage.projects.id_1.description,
    liveDemoUrl: null,
    imageSourcePath: "/img/portfolio-projects/Skoda.jpg",
    techs: [/*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "Java",
      children: /*#__PURE__*/jsx_runtime_.jsx(Java_.Java, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "SEO",
      children: /*#__PURE__*/jsx_runtime_.jsx(Robot_.Robot, {})
    })],
    sourceCodeLink: "https://skoda.sumy.ua",
    typeProject: ["BACKEND"],
    created_at: "09/06/2019"
  }, {
    id: 2,
    title: language.portifolioPage.projects.id_2.title,
    description: language.portifolioPage.projects.id_2.description,
    liveDemoUrl: null,
    imageSourcePath: "/img/portfolio-projects/agrocenter.jpg",
    techs: [/*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "ReactJS",
      children: /*#__PURE__*/jsx_runtime_.jsx(ReactLogo_.ReactLogo, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "Expo",
      children: /*#__PURE__*/jsx_runtime_.jsx(Expo_.Expo, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "Javascript",
      children: /*#__PURE__*/jsx_runtime_.jsx(Javascript_.Javascript, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "NodeJS",
      children: /*#__PURE__*/jsx_runtime_.jsx(Nodejs_.Nodejs, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "CSS",
      children: /*#__PURE__*/jsx_runtime_.jsx(Css3_.Css3, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "MongoDB",
      children: /*#__PURE__*/jsx_runtime_.jsx(Mongodb_.Mongodb, {})
    })],
    sourceCodeLink: "https://argocenter.com.ua",
    typeProject: ["BACKEND", "WEB", "MOBILE"],
    created_at: "02/02/2020"
  }, {
    id: 3,
    title: language.portifolioPage.projects.id_3.title,
    description: language.portifolioPage.projects.id_3.description,
    liveDemoUrl: null,
    imageSourcePath: "/img/portfolio-projects/thehandmadesoapcompany.jpg",
    techs: [/*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "ReactJS",
      children: /*#__PURE__*/jsx_runtime_.jsx(ReactLogo_.ReactLogo, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "Expo",
      children: /*#__PURE__*/jsx_runtime_.jsx(Expo_.Expo, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "Javascript",
      children: /*#__PURE__*/jsx_runtime_.jsx(Javascript_.Javascript, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "NodeJS",
      children: /*#__PURE__*/jsx_runtime_.jsx(Nodejs_.Nodejs, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "CSS",
      children: /*#__PURE__*/jsx_runtime_.jsx(Css3_.Css3, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "MongoDB",
      children: /*#__PURE__*/jsx_runtime_.jsx(Mongodb_.Mongodb, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "Jest",
      children: /*#__PURE__*/jsx_runtime_.jsx(Jest_.Jest, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "SqLite",
      children: /*#__PURE__*/jsx_runtime_.jsx(Sqlite_.Sqlite, {})
    })],
    sourceCodeLink: "https://thehandmadesoapcompany.com",
    typeProject: ["BACKEND", "WEB", "MOBILE"],
    created_at: "26/04/2020"
  }, // {
  // 	id: 4,
  // 	title: language.portifolioPage.projects.id_4.title,
  // 	description: language.portifolioPage.projects.id_4.description,
  // 	liveDemoUrl: null,
  // 	imageSourcePath: null,
  // 	techs: [
  // 		<Tooltip toolTipText="NodeJS">
  // 			<Nodejs />
  // 		</Tooltip>,
  // 		<Tooltip toolTipText="Javascript">
  // 			<Javascript />
  // 		</Tooltip>,
  // 	],
  // 	sourceCodeLink: "https://github.com/Glaysonvisgueira/inthegra-nodejs",
  // 	typeProject: ["BACKEND"],
  // 	created_at: "04/04/2020",
  // },
  {
    id: 5,
    title: language.portifolioPage.projects.id_5.title,
    description: language.portifolioPage.projects.id_5.description,
    liveDemoUrl: null,
    imageSourcePath: "/img/portfolio-projects/harleyshopatthebeach.jpg",
    techs: [/*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "ReactJs",
      children: /*#__PURE__*/jsx_runtime_.jsx(ReactLogo_.ReactLogo, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "Javascript",
      children: /*#__PURE__*/jsx_runtime_.jsx(Javascript_.Javascript, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "Google Cloud",
      children: /*#__PURE__*/jsx_runtime_.jsx(GoogleCloud_.GoogleCloud, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "Sass",
      children: /*#__PURE__*/jsx_runtime_.jsx(Sass_.Sass, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "Firebase",
      children: /*#__PURE__*/jsx_runtime_.jsx(Firebase_.Firebase, {})
    })],
    sourceCodeLink: "https://harleyshopatthebeach.com",
    typeProject: ["WEB", "MOBILE"],
    created_at: "24/06/2021"
  }, {
    id: 6,
    title: language.portifolioPage.projects.id_6.title,
    description: language.portifolioPage.projects.id_6.description,
    liveDemoUrl: null,
    imageSourcePath: "/img/portfolio-projects/reformclothing.jpg",
    techs: [/*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "ReactJS",
      children: /*#__PURE__*/jsx_runtime_.jsx(ReactLogo_.ReactLogo, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "Typescript",
      children: /*#__PURE__*/jsx_runtime_.jsx(Typescript_.Typescript, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "SqLite",
      children: /*#__PURE__*/jsx_runtime_.jsx(Sqlite_.Sqlite, {})
    })],
    sourceCodeLink: "https://www.reformclothing.com/us",
    typeProject: ["MOBILE"],
    created_at: "19/04/2021"
  }, // {
  // 	id: 7,
  // 	title: language.portifolioPage.projects.id_7.title,
  // 	description: language.portifolioPage.projects.id_7.description,
  // 	liveDemoUrl: null,
  // 	imageSourcePath: null,
  // 	techs: [
  // 		<Tooltip toolTipText="NodeJS">
  // 			<Nodejs />
  // 		</Tooltip>,
  // 		<Tooltip toolTipText="Typescript">
  // 			<Typescript />
  // 		</Tooltip>,
  // 		<Tooltip toolTipText="SqLite">
  // 			<Sqlite />
  // 		</Tooltip>,
  // 		<Tooltip toolTipText="Jest">
  // 			<Jest />
  // 		</Tooltip>,
  // 	],
  // 	sourceCodeLink: "https://github.com/Glaysonvisgueira/next-level-week-04-nodejs",
  // 	typeProject: ["BACKEND"],
  // 	created_at: "23/02/2021",
  // },
  // {
  // 	id: 8,
  // 	title: language.portifolioPage.projects.id_8.title,
  // 	description: language.portifolioPage.projects.id_8.description,
  // 	liveDemoUrl: null,
  // 	imageSourcePath: null,
  // 	techs: [
  // 		<Tooltip toolTipText="NodeJS">
  // 			<Nodejs />
  // 		</Tooltip>,
  // 		<Tooltip toolTipText="Javascript">
  // 			<Javascript />
  // 		</Tooltip>,
  // 		<Tooltip toolTipText="MongoDB">
  // 			<Mongodb />
  // 		</Tooltip>,
  // 		<Tooltip toolTipText="AWS">
  // 			<Amazonaws />
  // 		</Tooltip>,
  // 	],
  // 	sourceCodeLink: "https://github.com/Glaysonvisgueira/api-fasttrack",
  // 	typeProject: ["BACKEND"],
  // 	created_at: "27/11/2020",
  // },
  {
    id: 9,
    title: language.portifolioPage.projects.id_9.title,
    description: language.portifolioPage.projects.id_9.description,
    liveDemoUrl: null,
    imageSourcePath: "/img/portfolio-projects/clothes2order.jpg",
    techs: [/*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "ReactJS",
      children: /*#__PURE__*/jsx_runtime_.jsx(ReactLogo_.ReactLogo, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "Expo",
      children: /*#__PURE__*/jsx_runtime_.jsx(Expo_.Expo, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Tooltip, {
      toolTipText: "Javascript",
      children: /*#__PURE__*/jsx_runtime_.jsx(Javascript_.Javascript, {})
    })],
    sourceCodeLink: "https://www.clothes2order.com.au/",
    typeProject: ["MOBILE", "BACKEND"],
    created_at: "05/05/2020"
  } // {
  // 	id: 10,
  // 	title: language.portifolioPage.projects.id_10.title,
  // 	description: language.portifolioPage.projects.id_10.description,
  // 	liveDemoUrl: null,
  // 	imageSourcePath: null,
  // 	techs: [
  // 		<Tooltip toolTipText="Python">
  // 			<Python />
  // 		</Tooltip>,
  // 	],
  // 	sourceCodeLink: "https://github.com/Glaysonvisgueira/crawlerRadaresVelocidade",
  // 	typeProject: ["BACKEND"],
  // 	created_at: "16/06/2019",
  // },

  /*{
  	id: 11,
  	title: language.portifolioPage.projects.id_11.title,
  	description: language.portifolioPage.projects.id_11.description,
  	liveDemoUrl: "https://glaysonvisgueira.vercel.app/",
  	imageSourcePath: "/img/portfolio-projects/portfolio-page.png",
  	techs: [
  		<Tooltip toolTipText="ReactJS">
  			<ReactLogo />
  		</Tooltip>,
  		<Tooltip toolTipText="NextJS">
  			<Nextdotjs />
  		</Tooltip>,
  		<Tooltip toolTipText="Styled Components">
  			<Styledcomponents />
  		</Tooltip>,
  		<Tooltip toolTipText="Vercel">
  			<LogoVercel />
  		</Tooltip>,
  	],
  	sourceCodeLink: "https://github.com/Glaysonvisgueira/glaysonvisgueira_next-js",
  	typeProject: ["WEB"],
  	created_at: "10/06/2022",
  },
  // {
  // 	id: 12,
  // 	title: language.portifolioPage.projects.id_12.title,
  // 	description: language.portifolioPage.projects.id_12.description,
  // 	liveDemoUrl: null,
  // 	imageSourcePath: null,
  // 	techs: [
  // 		<Tooltip toolTipText="ReactJS">
  // 			<ReactLogo />
  // 		</Tooltip>,
  // 		<Tooltip toolTipText="Leaflet">
  // 			<Leaflet />
  // 		</Tooltip>,
  // 	],
  // 	sourceCodeLink: "https://github.com/Glaysonvisgueira/dashboard-control-mobile-implantacao",
  // 	typeProject: ["WEB", "BACKEND"],
  // 	created_at: "29/06/2021",
  // },
  // {
  // 	id: 13,
  // 	title: language.portifolioPage.projects.id_13.title,
  // 	description: language.portifolioPage.projects.id_13.description,
  // 	liveDemoUrl: null,
  // 	imageSourcePath: null,
  // 	techs: [
  // 		<Tooltip toolTipText="NodeJS">
  // 			<Nodejs />
  // 		</Tooltip>,
  // 		<Tooltip toolTipText="AWS">
  // 			<Amazonaws />
  // 		</Tooltip>,
  // 		<Tooltip toolTipText="Express">
  // 			<Express />
  // 		</Tooltip>,
  // 		<Tooltip toolTipText="MongoDB">
  // 			<Mongodb />
  // 		</Tooltip>,
  // 	],
  // 	sourceCodeLink: "https://github.com/Glaysonvisgueira/controlmobile-dashboard-api",
  // 	typeProject: ["BACKEND"],
  // 	created_at: "02/07/2021",
  // },
  // {
  // 	id: 14,
  // 	title: language.portifolioPage.projects.id_14.title,
  // 	description: language.portifolioPage.projects.id_14.description,
  // 	liveDemoUrl: null,
  // 	imageSourcePath: null,
  // 	techs: [
  // 		<Tooltip toolTipText="Flutter">
  // 			<Flutter />
  // 		</Tooltip>,
  // 	],
  // 	sourceCodeLink: "https://github.com/Glaysonvisgueira/controlmobile-dashboard-api",
  // 	typeProject: ["MOBILE"],
  // 	created_at: "13/08/2022",
  // },
  {
  	id: 15,
  	title: language.portifolioPage.projects.id_15.title,
  	description: language.portifolioPage.projects.id_15.description,
  	liveDemoUrl: "https://calculadora-svelte-liart.vercel.app/",
  	imageSourcePath: "/img/portfolio-projects/svelt-calculadora.png",
  	techs: [
  		<Tooltip toolTipText="Svelte">
  			<Svelte />
  		</Tooltip>,
  		<Tooltip toolTipText="Typescript">
  			<Typescript />
  		</Tooltip>,
  		<Tooltip toolTipText="Html">
  			<Html5 />
  		</Tooltip>,
  	],
  	sourceCodeLink: "https://github.com/Glaysonvisgueira/svelte-calculadora",
  	typeProject: ["WEB"],
  	created_at: "28/01/2023",
  },
  {
  	id: 16,
  	title: language.portifolioPage.projects.id_16.title,
  	description: language.portifolioPage.projects.id_16.description,
  	liveDemoUrl: "https://layout-mui-boilerplate.vercel.app/dashboards",
  	imageSourcePath: "/img/portfolio-projects/mui-v5-layout-dashboard.png",
  	techs: [
  		<Tooltip toolTipText="React.JS">
  			<ReactLogo />
  		</Tooltip>,
  		<Tooltip toolTipText="Next.JS">
  			<Nextdotjs />
  		</Tooltip>,
  	],
  	sourceCodeLink: "https://github.com/Glaysonvisgueira/layout-mui-boilerplate",
  	typeProject: ["WEB"],
  	created_at: "28/01/2023",
  },
  {
  	id: 17,
  	title: language.portifolioPage.projects.id_17.title,
  	description: language.portifolioPage.projects.id_17.description,
  	liveDemoUrl: null,
  	imageSourcePath: null,
  	techs: [
  		<Tooltip toolTipText="React Native">
  			<ReactLogo />
  		</Tooltip>,
  	],
  	sourceCodeLink: "https://github.com/Glaysonvisgueira/rnmaps",
  	typeProject: ["MOBILE"],
  	created_at: "27/03/2023",
  },
  {
  	id: 18,
  	title: language.portifolioPage.projects.id_18.title,
  	description: language.portifolioPage.projects.id_18.description,
  	liveDemoUrl: null,
  	imageSourcePath: null,
  	techs: [
  		<Tooltip toolTipText="React Native">
  			<ReactLogo />
  		</Tooltip>,
  	],
  	sourceCodeLink: "https://github.com/Glaysonvisgueira/rn-ecommerce-ui",
  	typeProject: ["MOBILE"],
  	created_at: "10/04/2023",
  },
  // {
  // 	id: 19,
  // 	title: language.portifolioPage.projects.id_19.title,
  // 	description: language.portifolioPage.projects.id_19.description,
  // 	liveDemoUrl: null,
  // 	imageSourcePath: null,
  // 	techs: [
  // 		<Tooltip toolTipText="Firebase">
  // 			<Firebase />
  // 		</Tooltip>,
  // 		<Tooltip toolTipText="Javascript">
  // 			<Javascript />
  // 		</Tooltip>,
  // 		<Tooltip toolTipText="NodeJS">
  // 			<Nodejs />
  // 		</Tooltip>,
  // 	],
  // 	sourceCodeLink: "https://github.com/Glaysonvisgueira/firebase-nodejs-api",
  // 	typeProject: ["BACKEND"],
  // 	created_at: "27/03/2023",
  // },
  {
  	id: 20,
  	title: language.portifolioPage.projects.id_20.title,
  	description: language.portifolioPage.projects.id_20.description,
  	liveDemoUrl: "https://material-ui-v6-dashboards-test.vercel.app/",
  	imageSourcePath: "/img/portfolio-projects/mui-v6-layout-dashboard.png",
  	techs: [
  		<Tooltip toolTipText="React">
  			<ReactLogo />
  		</Tooltip>,
  		<Tooltip toolTipText="Javascript">
  			<Javascript />
  		</Tooltip>,
  	],
  	sourceCodeLink: "https://github.com/Glaysonvisgueira/material-ui-v6-dashboards-test",
  	typeProject: ["FRONTEND"],
  	created_at: "03/10/2024",
  },
  {
  	id: 21,
  	title: language.portifolioPage.projects.id_21.title,
  	description: language.portifolioPage.projects.id_21.description,
  	liveDemoUrl: "https://state-management-jotai-vs-zustand.vercel.app",
  	imageSourcePath: "/img/portfolio-projects/state-management.png",
  	techs: [
  		<Tooltip toolTipText="React">
  			<ReactLogo />
  		</Tooltip>,
  		<Tooltip toolTipText="Javascript">
  			<Javascript />
  		</Tooltip>,
  	],
  	sourceCodeLink: "https://github.com/Glaysonvisgueira/state-management-jotai-vs-zustand",
  	typeProject: ["FRONTEND"],
  	created_at: "25/07/2023",
  },
  	{
  	id: 22,
  	title: language.portifolioPage.projects.id_22.title,
  	description: language.portifolioPage.projects.id_22.description,
  	liveDemoUrl: "https://www.cedulapromotora.com.br",
  	imageSourcePath: "/img/portfolio-projects/landing-cedula-promotora.png",
  	techs: [
  		<Tooltip toolTipText="React">
  			<ReactLogo />
  		</Tooltip>,
  		<Tooltip toolTipText="Javascript">
  			<Javascript />
  		</Tooltip>,
  	],
  	sourceCodeLink: null,
  	typeProject: ["FRONTEND"],
  	created_at: "01/09/2024",
  },*/
  ], []);

  function handleFilter(id) {
    setStack(id);
  }

  const array_projects = (0,external_react_.useMemo)(() => {
    if (stack === "TODOS") {
      return projects;
    } else {
      return projects.filter(item => item.typeProject.includes(stack));
    }
  }, [stack, projects]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SectionPortifolio, {
    id: "section-portifolio",
    children: [/*#__PURE__*/jsx_runtime_.jsx(TitleSection/* default */.Z, {
      title: language.portifolioPage.title,
      subtitle: language.portifolioPage.subtitle,
      hasMarginBottom: true
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ChipTechOptions, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Filter_.Filter, {
        className: "svg"
      }), /*#__PURE__*/jsx_runtime_.jsx(Chip, {
        id: "TODOS",
        onClick: event => {
          handleFilter(event.target.id);
        },
        active: stack.includes("TODOS") ? true : false,
        children: language.portifolioPage.labelFilter
      }), /*#__PURE__*/jsx_runtime_.jsx(Chip, {
        id: "BACKEND",
        onClick: event => {
          handleFilter(event.target.id);
        },
        active: stack.includes("BACKEND") ? true : false,
        children: "BACKEND"
      }), /*#__PURE__*/jsx_runtime_.jsx(Chip, {
        id: "WEB",
        onClick: event => {
          handleFilter(event.target.id);
        },
        active: stack.includes("WEB") ? true : false,
        children: "WEB"
      }), /*#__PURE__*/jsx_runtime_.jsx(Chip, {
        id: "MOBILE",
        onClick: event => {
          handleFilter(event.target.id);
        },
        active: stack.includes("MOBILE") ? true : false,
        children: "MOBILE"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(ContainerGrid, {
      view: view,
      children: array_projects === null || array_projects === void 0 ? void 0 : array_projects.map((project, index) => /*#__PURE__*/jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
        animateIn: "fadeIn",
        animateOnce: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(CardProject, {
          title: project.title,
          description: project.description,
          typeProject: project.typeProject,
          techs: project.techs,
          createdAt: project.created_at,
          liveDemoUrl: project.liveDemoUrl,
          imageSourcePath: project.imageSourcePath,
          sourceCodeLink: project.sourceCodeLink
        })
      }, index))
    })]
  });
}

/***/ })

};
;