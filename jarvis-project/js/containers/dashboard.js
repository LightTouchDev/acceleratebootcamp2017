import Card from '../components/card'
let MongoClient = require('mongodb').MongoClient

 
export default class Dashboard {
  constructor () {
  	this.url = 'mongodb://localhost:27017/Jarvis'
  }

  getData() {
    // This is where we'll grab data from the marvel api
    let heroes = db.collection('heroes').find({})
  }

  getContent() {
    let container = document.createElement('div')
    container.id = 'container'

    let title = document.createElement('div')
    title.id = 'title'
    title.style.color = '#dddddd'
    title.style.marginTop = '20px'
    title.style.marginLeft = '1%'
    title.style.textAlign = 'center'
    title.style.fontWeight = 'bold'
    title.style.fontSize = '24px'

    title.append('J.A.R.V.I.S.')

    container.appendChild(title)

    for(let i = 0; i < heroes.length; i++) {
   	container.append(new Card({
	  title: heroes[i].name,
	  description: heroes[i].description,
	  image: heroes[i].image
	}))
    }


/*
    let thorCard = new Card({
      title: 'Thor',
      image: '/images/thorpic.jpg',
      description: 'As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he\'s quite smart and compassionate.',
      link: 'http://marvel.com/universe/Thor_(Thor_Odinson)#axzz502Le2EeS',
      linkText: 'More Info on Thor'
    })
    container.append(thorCard.getContent())

    let hulkCard = new Card({
      title: 'Hulk',
      image: '/images/hulkpic.jpg',
      description: 'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk.',
      link: 'http://marvel.com/universe/Hulk_(Bruce_Banner)#axzz502Le2EeS',
      linkText: 'More Info on Hulk'
    })
    container.append(hulkCard.getContent())
*/
    return container
  }

  animate() {
  }
}
