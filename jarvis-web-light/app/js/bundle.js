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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_dashboard__ = __webpack_require__(1);



document.body.style.backgroundImage = 'url(/images/avengepic.jpg)'
document.body.style.backgroundSize = 'cover'


let body = document.getElementById('content')

let dashboard = new __WEBPACK_IMPORTED_MODULE_0__containers_dashboard__["a" /* default */]()

body.append(dashboard.getContent())




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(2);

class Dashboard {
  getContent () {
	let container = document.createElement('div')
	container.id = 'container'

	let title = document.createElement('h1')
	title.innerHTML = 'J.A.R.V.I.S.' 
	title.style.textAlign = 'center'
	title.style.color = 'white'
	
	container.appendChild(title)
	
	let thorCard = new __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]({
		title: 'Thor Odinson',
		image: '/images/',
		description: 'God of thunder',
		link: ''
})
	container.append(thorCard.getContent())

	let hulkCard = new __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]({
		title: 'Hulk / Bruce Banner',
		image: '/images/',
		description: 'Angry green giant',
		link: ''
})
	container.append(hulkCard.getContent())

	return container	
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Dashboard;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Card {
  constructor(options) {
	this.options = options
  }

  getContent() {
	let card = document.createElement('div')
	//add css card.style
	card.classList.add = ('col-6')	
	card.style.margin = '1%'
	card.style.borderRadius = '25px'
	card.style.width = '50%'
	card.style.height = '250%'
	card.style.border = '5px groove grey'
	card.style.backgroundColor = 'rgba(108, 109, 129, 0.4)'
	
	let cardHeader = document.createElement('div')
	cardHeader.style.height = '10%'
	
	let cardTitle = document.createElement('div')
	cardTitle.append(this.options.title)
	cardTitle.style.color = 'white'
	cardTitle.style.textAlign = 'center'
	
	cardHeader.append(cardTitle)
	
	card.append(cardHeader)	
	
	return card	
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Card;



/***/ })
/******/ ]);