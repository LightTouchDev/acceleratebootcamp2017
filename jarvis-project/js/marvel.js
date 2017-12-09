let api = require('marvel-api')
let MongoClient = require('mongodb').MongoClient 

class Marvel {
  constructor(){
	this.marvel = api.createClient({
	  publicKey: '51969ddf181dc7ee2d3b8b367c91dccf',
	  privateKey: '7139be6acf3ecf36fee0e7260489926739ed9046'
	})
	this.url = 'mongodb://localhost:27017/Jarvis'
//  return marvel
 // return url  
}

  getData (callback) {
	let info = []
	let heroObj = {}
	this.marvel.characters.findByName('thor')
 	 .then((heroes) => {
		heroes.data.forEach((hero) =>{
		  heroObj = {
		    name : hero.name,
		    description : hero.description,
		    image : hero.thumbnail
		  }
		  info.push(heroObj)
		})
		console.log(info)
		callback(info)
	  })
  	 .fail(console.error)
 	 .done()
	this.marvel.characters.findByName('hulk')
 	 .then((heroes) => {
		heroes.data.forEach((hero) =>{
		  heroObj = {
		    name : hero.name,
		    description : hero.description,
		    image : hero.thumbnail
		  }
		  info.push(heroObj)
		})
		console.log(info)
		callback(info)
	  })
  	 .fail(console.error)
 	 .done()
	this.marvel.characters.find('1009368')
	// iron man
 	 .then((heroes) => {
		heroes.data.forEach((hero) =>{
		  heroObj = {
		    name : hero.name,
		    description : hero.description,
		    image : hero.thumbnail
		  }
		  info.push(heroObj)
		})
		console.log(info)
		callback(info)
	  })
  	 .fail(console.error)
 	 .done()
	this.marvel.characters.findByName('Hawkeye/Clint Barton (MAA)')
 	 .then((heroes) => {
		heroes.data.forEach((hero) =>{
		  heroObj = {
		    name : hero.name,
		    description : hero.description,
		    image : hero.thumbnail
		  }
		  info.push(heroObj)
		})
		console.log(info)
		callback(info)
	  })
  	 .fail(console.error)
 	 .done()
	this.marvel.characters.findByName('Black Widow/Natasha Romanoff (MAA)')
 	 .then((heroes) => {
		heroes.data.forEach((hero) =>{
		  heroObj = {
		    name : hero.name,
		    description : hero.description,
		    image : hero.thumbnail
		  }
		  info.push(heroObj)
		})
		console.log(info)
		callback(info)
	  })
  	 .fail(console.error)
 	 .done()
	this.marvel.characters.findByName('Captain America')
 	 .then((heroes) => {
		heroes.data.forEach((hero) =>{
		  heroObj = {
		    name : hero.name,
		    description : hero.description,
		    image : hero.thumbnail
		  }
		  info.push(heroObj)
		})
		console.log(info)
		callback(info)
	  })
  	 .fail(console.error)
 	 .done()
  }

  insertDocuments(docs){
	MongoClient.connect(this.url, (err,db) =>{
	  if(!err){
	    let collection = db.collection('heroes')
	    collection.insertMany(docs, (err,result) => {
		console.log(result)
	    })
	    db.close()
	  }
	  else {
	    console.log(err)
	  }

	})


  }


	//find({ name: ['thor', 'hulk', 'spider-man']})
}

module.exports = Marvel
