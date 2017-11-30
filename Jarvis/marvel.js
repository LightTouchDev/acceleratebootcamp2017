let api = require('marvel-api') 
 
let marvel = api.createClient({
  publicKey: '51969ddf181dc7ee2d3b8b367c91dccf'
, privateKey: '7139be6acf3ecf36fee0e7260489926739ed9046'
})

class Marvel {
	constructor() {

	}
	getAvengers () {
		marvel.characters.findAll(15)
                .then((data) => {
	  	console.log(JSON.stringify(data, null, 2))
		})	 
        	.fail(console.error)
        	.done() 	
	}
	

	getSpiderMan () {
		marvel.characters.findByName('spider-man')
        	.then((data) => {
	  	console.log(JSON.stringify(data, null, 2))
		})	 
        	.fail(console.error)
        	.done() 
	}
}

module.exports = Marvel
