export default class Card {
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
