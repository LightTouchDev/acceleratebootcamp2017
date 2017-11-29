//Marvel API

var api = require('marvel-api') 
 
var marvel = api.createClient({
  publicKey: '51969ddf181dc7ee2d3b8b367c91dccf'
, privateKey: '7139be6acf3ecf36fee0e7260489926739ed9046'
})

marvel.characters.findAll((err, results) => {
  if (err) {
    return console.error(err) 
  }
 
  console.log(results) 
}) 
