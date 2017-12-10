export default class Card {
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
	
	//Create card body	
	let cardBody = document.createElement('div')
	cardBody.style.height = '80%'
	cardBody.style.display = 'flex'
	cardBody.style.margin = 'auto'
	

	let cardDescription = document.createElement('div')
	cardDescription.append(this.options.description)
	cardDescription.style.fontSize = '15px'	
	cardDescription.style.float = 'right'
	cardDescription.style.width = '30%'
	cardDescription.style.margin = '10%'
	cardDescription.style.color = 'white'
	cardDescription.style.textAlign = 'justify'
	cardDescription.style.position = 'relative'


	let cardImageBox = document.createElement('div')
	cardImageBox.style.flex = '.5'

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
