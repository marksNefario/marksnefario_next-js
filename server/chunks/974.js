"use strict";
exports.id = 974;
exports.ids = [974];
exports.modules = {

/***/ 3974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ SettingsContext),
  "Z": () => (/* binding */ SettingsProvider)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./styles/Theme.jsx
const darkTheme = {
  name: "dark",
  colors: {
    backgroundPage: "#161616",
    backgroundPageRgb: [22, 22, 22],
    backgroundGradient: "linear-gradient(to left top, #252525, #0C0C0C)",
    backgroundRadial: "radial-gradient(ellipse at center, #2e2e2e, #0C0C0C)",
    background: "#000",
    backgroundSecondary: "#272727",
    branding: "#fec800",
    brandingDarker: "#c79d07",
    title: "#fff",
    inactiveTitle: "#8b8b8b",
    subtitle: "#b1b1b1",
    body: "#ccc",
    contrastText: "#2b2b2b",
    caption: "#ccc",
    icon: "#fff",
    iconHover: "#9b883c",
    button: "",
    shadow: ""
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px"
  }
};
const lightTheme = {
  name: "light",
  colors: {
    backgroundPage: "#ffffff",
    backgroundPageRgb: [238, 238, 238],
    backgroundGradient: "linear-gradient(202deg, #ffffff 0%, #e6e6e6 100%)",
    backgroundRadial: "radial-gradient(circle, #ffffff 0%, #e6e6e6 100%)",
    background: "#ffffff",
    backgroundSecondary: "#f0f0f0",
    branding: "#2505b6",
    brandingDarker: "#a00030",
    title: "#362f2f",
    inactiveTitle: "#8b8b8b",
    subtitle: "#383838",
    body: "#666666",
    contrastText: "#2b2b2b",
    caption: "#ccc",
    icon: "#fff",
    iconHover: "#000000",
    button: "",
    shadow: ""
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px"
  }
};
;// CONCATENATED MODULE: ./config/localization/enus.json
const enus_namespaceObject = JSON.parse('{"id":"enus","navbarMenu":{"labelHome":"HOME","labelServices":"SERVICES","labelAboutMe":"ABOUT ME","labelPortifolio":"PROJECTS","labelExperience":"EXPERIENCE"},"landingPage":{"apresentationText":"Hello, I\'m","firstTypeText":"Vladyslav Hrytsyn","resumeText":"Front-end developer with expertise in creating complete solutions, always focused on delivering innovative and intuitive frontend experiences that connect the user to the product","buttonText":"Learn more"},"servicesOffer":{"title":"Services offered","subtitle":"Our software solutions are fully customized, ensuring that your business gets exactly what it needs to stand out in the market","cards":{"development":{"title":"SYSTEM DEVELOPMENT","contentText":"Creation of customized solutions that meet the specific needs of your business, using modern and efficient technologies, ensuring high performance and scalability"},"seo":{"title":"SEO","contentText":"Optimization of your website for search engines, increasing visibility and organic traffic, ensuring that your target audience finds your business more easily"},"ux":{"title":"UI/UX DESIGN","contentText":"Focus on improving usability and user experience, designing interfaces that not only impress but also maximize interaction and customer satisfaction"},"branding":{"title":"BRANDING","contentText":"I help you position your brand correctly, boosting positive results through best practices in digital marketing"},"consultancy":{"title":"IT CONSULTING","contentText":"Strategic and personalized analysis to adopt the most suitable technologies, optimizing processes and accelerating results in your business"},"mobile_devlopment":{"title":"MOBILE APPLICATIONS","contentText":"Creation of native and hybrid applications for Android and iOS"},"chatbot":{"title":"CHATBOT DEVELOPMENT","contentText":"Implementation of intelligent chatbots to optimize customer service and automate interactions"},"support":{"title":"SUPPORT AND MAINTENANCE","contentText":"We offer continuous technical support and proactive maintenance, ensuring that your systems remain stable, secure, and up to date"}}},"aboutMePage":{"title":"About me","paragraph_one":"I\'m a highly motivated front-end developer and always looking to learn new technologies. I have solid experience in React, React Native and Next.js, and I\'m always available to face new challenges and improve my skills. I have a passion for creating amazing, responsive user interfaces, and I enjoy working on challenging problems. Furthermore, I am able to work effectively in a team and communicate clearly with other team members. I am always willing to learn and adapt to new situations, making me a flexible and reliable developer for any project.","paragraph_two":"I have greater aptitude for the Front-end area, with solid knowledge in the stack: React.js, Next.js, HTML, css and Styled components.","paragraph_three":"Additionally, I have knowledge of 3ds max and three.js and am ready to accept new challenges at any time.","github_card":{"bio":"Front-end developer with more experience in the Javascript stack, React, React Native and Next.js.","followers":"Followers","following":"Following","repos":"Repos"},"alt_dev_img":"Vladyslav Hrytsyn Developer","stats":{"stat_1":"5+ years of experience in the technology market","stat_2":"More than 15 successful projects delivered","stat_3":"90% of our clients return for new projects","stat_4":"Over 10 satisfied clients in various sectors"}},"portifolioPage":{"title":"Portfolio","subtitle":"Lorem Ipsum is simply dummy text of the printing and typesetting industry","labelFilter":"ALL","createdLabel":"Created at","sourceCodeLabel":"Code","demoLabel":"Demo","projects":{"id_1":{"title":"ТОВ АВТОЦЕНТР-С Website","description":"Designed and implemented a company\'s website or online platform using React or Next.js and ensured that the platform was optimized for SEO and performance."},"id_2":{"title":"ТОВ Агроцентр Фаворит Website","description":"Built and maintained a responsive, intuitive and user-friendly web interface for the Agrocenter platform."},"id_3":{"title":"Website of The Handmade Soap Company","description":"Used React to build reusable UI components such as navigation bars, buttons, forms, and other interactive elements."},"id_4":{"title":"INTHEGRE-SE APP","description":"Application that monitors the public bus fleet in the city of Teresina - PI, and displays on a map the current location of each bus in activity at the moment, with intervals of 30 seconds between each position update."},"id_5":{"title":"Website of Harleyshopatthebeach","description":"By applying React and Next.js, we have implemented a responsive and intuitive UI to enable smooth navigation on multiple devices."},"id_6":{"title":"Website of Reform Clothing","description":"Implemented Next.js to optimize our website for performance and SEO, ensuring a smooth experience across all devices. This includes server-side rendering for faster load times and improved search engine visibility."},"id_7":{"title":"NPS SURVEY SYSTEM","description":"Application resulting from Rocketseat\'s Next Level Week #04. The application allows calculating the company\'s NPS (Net Promoter Score) through satisfaction surveys sent to users by email."},"id_8":{"title":"FASTTRACK API","description":"Backend of a Node.js server that provides a REST API that allows sharing the smartphone\'s geolocation to a cloud database maintained by MongoDB."},"id_9":{"title":"Website of Clothes2order","description":"Improved website speed and responsiveness to improve user experience and search engine rankings."},"id_10":{"title":"RADAR POSITION CRAWLER","description":"Study of the BeautifulSoup library that, used with the Python programming language, makes it possible to collect data from websites. This algorithm searches the website of Teresina City Hall - PI and provides the download link of the current position of speed cameras in the city."},"id_11":{"title":"PORTFOLIO PAGE","description":"Personal portfolio page, built using React.js, Next.js, Styled Components and hosted on the Vercel platform."},"id_12":{"title":"LOGISTICS INFORMATION AGGREGATE","description":"System to aggregate the company\'s internal logistic information."},"id_13":{"title":"LOGISTICS INFORMATION AGGREGATOR API","description":"API written in Javascript/Node.js and hosted on an EC2 server on AWS to provide the company\'s internal logistical information."},"id_14":{"title":"BYTEBANK","description":"App resulting from Alura\'s Flutter track. Using Flutter to generate the cross-platform application, this application serves to register account numbers and their respective values ​​to be recorded in dynamic states for display in the app."},"id_15":{"title":"WEB CALCULATOR","description":"Web application of a calculator, written with typescript and using the Svelte Framework/Compiler."},"id_16":{"title":"LAYOUT MATERIAL DESIGN","description":"Boilerplate structure for an application using the Material UI frontend framework."},"id_17":{"title":"RN MAPS","description":"Small test application that uses the React Native framework to build a map view using the Google Maps SDK."},"id_18":{"title":"RN E-COMMERCE UI","description":"UI that mimics some existing components, pages and dynamics in native mobile apps for e-commerce."},"id_19":{"title":"FIREBASE API BOILERPLATE","description":"Boilerplate structure that integrates a CRUD in the Firestore database using firebase API."},"id_20":{"title":"MATERIAL V6 DASH","description":"App boilerplate structure that uses the Material UI framework in version 6."},"id_21":{"title":"GLOBAL STATE MANAGER","description":"Implementation study of the Zustand and Jotai libs to manage the global states of the web application."},"id_22":{"title":"CÉDULA PROMOTORA","description":"Landing page of Cédula Promotora, a payroll loan company."}}},"experiencePage":{"title":"Experience","subtitle":"This is my experience in a nutshell.","timeline":{"labelPosition":"Position","labelTitle":"Title","labelCompany":"Company","labelCategory":"Category","labelInstitution":"Institution","labelProfessionalCourse":"Professional course","labelBachelorDegree":"Bachelor degree","labelExtensionCourse":"Extension course"}},"testimonialPage":{"title":"What clients are saying","subtitle":"Discover what my clients are saying about their experiences with my services"},"faq":{"title":"Frequently asked questions","subtitle":"Here are some of the most frequently asked questions about my software development services","questions":[{"id":1,"question":"How long does it take to develop custom software?","answer":"The development time varies depending on the complexity and scope of the project. Simple projects may take 4 to 6 weeks, while more complex solutions can take several months. During our initial consultation, I can provide a more accurate estimate based on your needs."},{"id":2,"question":"What is the process for developing custom software?","answer":"The process generally follows these steps: initial consultation, requirement definition, interface design, development, testing, and launch. After the launch, I provide support and maintenance to ensure everything runs smoothly."},{"id":3,"question":"Do you provide maintenance and support after the project delivery?","answer":"Yes, I offer support and maintenance to ensure the software continues to function correctly. We can discuss ongoing maintenance packages or on-demand support."},{"id":4,"question":"Can I track the progress of my project?","answer":"Yes, I maintain regular communication with clients throughout the project. I use project management tools for frequent updates and hold meetings to discuss progress and any necessary adjustments."},{"id":5,"question":"What are the costs involved in developing custom software?","answer":"The cost depends on the complexity of the project, the desired features, and the time needed for development. After discussing your requirements, I will provide a detailed cost estimate."},{"id":6,"question":"Do you work with user interface (UI) design and user experience (UX)?","answer":"Yes, I believe a good interface and an intuitive user experience are crucial for software success. I focus on UI/UX design with an emphasis on usability and user satisfaction."},{"id":7,"question":"Do you offer consulting services before starting development?","answer":"Yes, I offer consulting to better understand your needs and help define the project requirements. This phase is essential to ensure all important details are covered."},{"id":8,"question":"Can you integrate the software with other platforms or systems?","answer":"Yes, I develop solutions that can integrate with other platforms or systems, such as databases, third-party services, APIs, and more. Integrations are planned according to the specific needs of the project."},{"id":9,"question":"Will the software be responsive and optimized for mobile devices?","answer":"Yes, all the software I develop is optimized to work well on various devices, including desktops, tablets, and smartphones, ensuring a consistent experience for all users."},{"id":10,"question":"What types of projects have you developed?","answer":"I have experience with a wide range of projects, such as e-commerce applications, content management systems, service booking platforms, data analysis dashboards, among others. You can check out examples of previous work in my portfolio."},{"id":11,"question":"Can I request changes to the project during development?","answer":"Yes, but depending on the project\'s phase, changes may affect the timeline and budget. However, I am always flexible and work with clients to accommodate their needs as best as possible."},{"id":12,"question":"Do you handle the launch and hosting of the software?","answer":"Yes, I can assist with the software launch and advise you on the best hosting options based on the scale and expected traffic of your project."},{"id":13,"question":"Do you offer performance optimization services?","answer":"Yes, performance is a critical factor for any software. I optimize the code and structures to ensure the software is fast and efficient, even under load."},{"id":14,"question":"Do you work with agile methodologies in development?","answer":"Yes, I use agile methodologies such as Scrum or Kanban to ensure collaborative and efficient development. This allows for regular reviews and quick adjustments as needed."}]},"footer":{"labelNavigation":{"title":"NAVIGATION","labelHome":"Home","labelServices":"Services","labelAboutMe":"About me","labelPortifolio":"Projects","labelExperience":"Experience"},"labelHost":{"title":"WEBSITE HOSTING"},"labelSourceCode":{"title":"SOURCE CODE"},"labelTechs":{"title":"TECHNOLOGIES"},"labelStats":{"title":"STATISTICS","stats":"Dashboard"},"labelBuildVersion":"Build"}}');
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./context/SettingsContext.jsx

 //Lista de temas

 //Pacotes com textos de linguagens
//import ptbrJson from "@/config/localization/ptbr.json";



const SettingsContext = /*#__PURE__*/(0,external_react_.createContext)({});
const listaTemas = {
  dark: darkTheme,
  light: lightTheme
};
function SettingsProvider({
  children
}) {
  const {
    0: theme,
    1: setTheme
  } = (0,external_react_.useState)(darkTheme);
  const {
    0: changeLanguage,
    1: setLanguage
  } = (0,external_react_.useState)(false);

  function changeTheme(newTheme) {
    setTheme(listaTemas[newTheme]);
  }

  function changeLanguageLocalization() {
    setLanguage(changeLanguage => !changeLanguage);
  }

  var language = enus_namespaceObject;
  return /*#__PURE__*/jsx_runtime_.jsx(SettingsContext.Provider, {
    value: {
      changeTheme,
      changeLanguageLocalization,
      language
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
      theme: theme,
      children: children
    })
  });
}

/***/ })

};
;