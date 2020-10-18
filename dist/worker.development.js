/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/handler.ts":
/*!************************!*\
  !*** ./src/handler.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.handleRequest = void 0;\nconst routes_1 = __importDefault(__webpack_require__(/*! ./routes */ \"./src/routes/index.js\"));\nconst link_1 = __importDefault(__webpack_require__(/*! ./routes/link */ \"./src/routes/link.ts\"));\nconst default_1 = __importDefault(__webpack_require__(/*! ./routes/default */ \"./src/routes/default.ts\"));\nasync function handleRequest(request) {\n    const r = new routes_1.default();\n    r.get(\"/links\", (request) => link_1.default(request));\n    r.all(async (request) => await default_1.default(request));\n    const response = await r.route(request);\n    return response;\n}\nexports.handleRequest = handleRequest;\n\n\n//# sourceURL=webpack:///./src/handler.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst handler_1 = __webpack_require__(/*! ./handler */ \"./src/handler.ts\");\naddEventListener(\"fetch\", (event) => {\n    event.respondWith(handler_1.handleRequest(event.request));\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/routes/default.ts":
/*!*******************************!*\
  !*** ./src/routes/default.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst link_1 = __webpack_require__(/*! ./link */ \"./src/routes/link.ts\");\nconst socialLinks = [\n    {\n        name: `<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n      <title>Facebook</title>\n        <path d=\"M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z\"/>\n      </svg>`,\n        url: \"https://www.facebook.com/anish1712\",\n    },\n    {\n        name: `<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n      <title>Instagram</title>\n        <path d=\"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z\"/>\n      </svg>`,\n        url: \"https://www.instagram.com/who_is_anish/\",\n    },\n    {\n        name: `<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n      <title>GitHub</title>\n        <path d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"/>\n      </svg>`,\n        url: \"https://github.com/anishagg17\",\n    },\n    {\n        name: `<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n      <title>LinkedIn</title>\n        <path d=\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\"/>\n      </svg>`,\n        url: \"https://www.linkedin.com/in/anish1712\",\n    },\n];\nclass addLinks {\n    constructor(links) {\n        this.links = links;\n    }\n    getElement(link) {\n        return `<a href='${link.url}'>${link.name}</a>`;\n    }\n    element(element) {\n        this.links.forEach((link) => {\n            element.append(this.getElement(link), { html: true });\n        });\n    }\n}\nclass setDisplay {\n    element(element) {\n        element.removeAttribute(\"style\");\n    }\n}\nclass setAttribute {\n    constructor(name, value) {\n        this.name = name;\n        this.value = value;\n    }\n    element(element) {\n        element.setAttribute(this.name, this.value);\n    }\n}\nclass setText {\n    constructor(textString) {\n        this.textString = textString;\n    }\n    element(element) {\n        element.setInnerContent(this.textString);\n    }\n}\nclass changeBackground {\n    element(element) {\n        element.removeAttribute(\"class\");\n        element.setAttribute(\"style\", `background-image:\n        linear-gradient(to bottom, rgba(26,32,44,1), rgba(0,0,0,0.5))`);\n    }\n}\nconst imgURL = \"https://avatars1.githubusercontent.com/u/43617894?s=460&u=dbca224ad55b6804a7525879fc9b2e3e0125ff92&v=4\";\nconst defaultRequestHandler = async (request) => {\n    const htmlRequest = await fetch(\"https://static-links-page.signalnerve.workers.dev\");\n    const rewriter = new HTMLRewriter()\n        .on(\"div#links\", new addLinks(link_1.links))\n        .on(\"div#profile\", new setDisplay())\n        .on(\"img#avatar\", new setAttribute(\"src\", imgURL))\n        .on(\"h1#name\", new setText(\"Anish Aggarwal\"))\n        .on(\"title\", new setText(\"Anish Aggarwal\"))\n        .on(\"div#social\", new setDisplay())\n        .on(\"div#social\", new addLinks(socialLinks))\n        .on(\"body\", new changeBackground());\n    return rewriter.transform(htmlRequest);\n};\nexports.default = defaultRequestHandler;\n\n\n//# sourceURL=webpack:///./src/routes/default.ts?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Helper functions that when passed a request will return a\n * boolean indicating if the request uses that HTTP method,\n * header, host or referrer.\n */\nconst Method = (method) => (req) =>\n  req.method.toLowerCase() === method.toLowerCase();\nconst Connect = Method(\"connect\");\nconst Delete = Method(\"delete\");\nconst Get = Method(\"get\");\nconst Head = Method(\"head\");\nconst Options = Method(\"options\");\nconst Patch = Method(\"patch\");\nconst Post = Method(\"post\");\nconst Put = Method(\"put\");\nconst Trace = Method(\"trace\");\nconst Header = (header, val) => (req) => req.headers.get(header) === val;\n\nconst Path = (regExp) => (req) => {\n  const url = new URL(req.url);\n  const path = url.pathname;\n  const match = path.match(regExp) || [];\n  return match[0] === path;\n};\n\n/**\n * The Router handles determines which handler is matched given the\n * conditions present for each request.\n */\nclass Router {\n  constructor() {\n    this.routes = [];\n  }\n\n  handle(conditions, handler) {\n    this.routes.push({\n      conditions,\n      handler,\n    });\n    return this;\n  }\n\n  connect(url, handler) {\n    return this.handle([Connect, Path(url)], handler);\n  }\n\n  delete(url, handler) {\n    return this.handle([Delete, Path(url)], handler);\n  }\n\n  get(url, handler) {\n    return this.handle([Get, Path(url)], handler);\n  }\n\n  head(url, handler) {\n    return this.handle([Head, Path(url)], handler);\n  }\n\n  options(url, handler) {\n    return this.handle([Options, Path(url)], handler);\n  }\n\n  patch(url, handler) {\n    return this.handle([Patch, Path(url)], handler);\n  }\n\n  post(url, handler) {\n    return this.handle([Post, Path(url)], handler);\n  }\n\n  put(url, handler) {\n    return this.handle([Put, Path(url)], handler);\n  }\n\n  trace(url, handler) {\n    return this.handle([Trace, Path(url)], handler);\n  }\n\n  all(handler) {\n    return this.handle([], handler);\n  }\n\n  route(req) {\n    const route = this.resolve(req);\n\n    if (route) {\n      return route.handler(req);\n    }\n\n    return new Response(\"resource not found\", {\n      status: 404,\n      statusText: \"not found\",\n      headers: {\n        \"content-type\": \"text/plain\",\n      },\n    });\n  }\n\n  /**\n   * resolve returns the matching route for a request that returns\n   * true for all conditions (if any).\n   */\n  resolve(req) {\n    return this.routes.find((r) => {\n      if (!r.conditions || (Array.isArray(r) && !r.conditions.length)) {\n        return true;\n      }\n\n      if (typeof r.conditions === \"function\") {\n        return r.conditions(req);\n      }\n\n      return r.conditions.every((c) => c(req));\n    });\n  }\n}\n\nmodule.exports = Router;\n\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/link.ts":
/*!****************************!*\
  !*** ./src/routes/link.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.links = void 0;\nexports.links = [\n    {\n        name: \"LinkedIn profile\",\n        url: \"https://www.linkedin.com/in/anish1712\",\n    },\n    {\n        name: \"Github profile\",\n        url: \"https://github.com/anishagg17\",\n    },\n    {\n        name: \"Portfolio\",\n        url: \"https://anishagg17.github.io/\",\n    },\n];\nexports.default = (request) => {\n    const init = {\n        headers: { \"content-type\": \"application/json\" },\n    };\n    const body = JSON.stringify(exports.links);\n    return new Response(body, init);\n};\n\n\n//# sourceURL=webpack:///./src/routes/link.ts?");

/***/ })

/******/ });