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
document.body.style.alignContent = 'center'

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
		title: 'Thor',
		image: 'images/thorpic.jpg', 
		description: 'God of thunder',
		link: 'http://marvel.com/universe/Thor_(Thor_Odinson)#axzz50XtTBNFf'
})
	container.append(thorCard.getContent())

	let hulkCard = new __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]({
		title: 'Hulk',
		image: 'images/hulkpic.jpg',
		description: 'Angry green giant',
		link: 'http://marvel.com/universe/Hulk_(Bruce_Banner)#axzz50XtTBNFf'
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
	card.classList.add('col-6')	
	//^^ what is this?? ^^
	card.style.float = 'left'
	card.style.marginLeft = '3%'
	card.style.borderRadius = '25px'
	card.style.width = '45%'
	card.style.height = '300px'
	card.style.border = '3px grey'
	card.style.backgroundColor = 'rgba(108, 109, 129, 0.4)'
	
	let cardHeader = document.createElement('div')
	cardHeader.style.height = '10%'
	
	let cardTitle = document.createElement('div')
	cardTitle.append(this.options.title)
	cardTitle.style.fontSize = '30px'
	cardTitle.style.color = 'white'
	cardTitle.style.textAlign = 'center'
	cardTitle.style.position = 'relative'
	
	let cardDescription = document.createElement('div')
	cardDescription.append(this.options.description)
	cardDescription.style.fontSize = '15px'	
	cardDescription.style.float = 'right'
	cardDescription.style.width = '30%'
	cardDescription.style.margin = '10%'
	cardDescription.style.color = 'white'
	cardDescription.style.textAlign = 'justify'
	cardDescription.style.position = 'relative'

	let cardImage = document.createElement('img')
	cardImage.append(this.options.image)
	cardImage.src = this.options.image
	cardImage.alt = 'picture of an avenger'
	cardImage.style.float = 'left'
	cardImage.style.width = '20%'	
	cardImage.style.margin = '5%'	
	cardImage.style.position = 'relative'	
	//cardImage.style.width = '30%'	

	let cardLink = document.createElement('a')
	cardLink.append(this.options.link)
	cardLink.href = this.options.link
	cardLink.target = '_blank'
	cardLink.innerHTML = 'Click for More Info!'
	cardLink.style.color = 'white'
	cardLink.style.float = 'right'
	cardLink.style.margin = '10%'
	cardLink.style.position = 'relative'
	//cardLink.style.color = 'white'
	
	
	

	
	cardHeader.append(cardTitle)
	
	card.append(cardHeader, cardDescription, cardImage, cardLink)	
	
	return card	
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Card;



/***/ })
/******/ ]);