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
		title: 'Thor',
		image: 'images/thorpic.jpg', 
		description: 'God of thunder',
		link: 'http://marvel.com/universe/Thor_(Thor_Odinson)#axzz50XtTBNFf'
})
	container.append(thorCard.getContent())

	let hulkCard = new Card({
		title: 'Hulk',
		image: 'images/hulkpic.jpg',
		description: 'Angry green giant',
		link: 'http://marvel.com/universe/Hulk_(Bruce_Banner)#axzz50XtTBNFf'
})
	container.append(hulkCard.getContent())

	return container	
  }
}
