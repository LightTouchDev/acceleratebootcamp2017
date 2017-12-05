import Card from '../components/card'
export default class Dashboard {
  getContent () {
	let container = document.createElement('div')
	container.id = 'container'

	let title = document.createElement('h1')
	title.innerHTML = 'J.A.R.V.I.S.' 
	title.style.textAlign = 'center'
	title.style.color = 'white'
	
	container.appendChild(title)
	
	let thorCard = new Card({
		title: 'Thor Odinson',
		image: '/images/',
		description: 'God of thunder',
		link: ''
})
	container.append(thorCard.getContent())

	let hulkCard = new Card({
		title: 'Hulk / Bruce Banner',
		image: '/images/',
		description: 'Angry green giant',
		link: ''
})
	container.append(hulkCard.getContent())

	return container	
  }
}
