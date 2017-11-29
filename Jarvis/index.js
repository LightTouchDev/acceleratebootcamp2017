//Marvel API

var api = require('marvel-api') 
 
var marvel = api.createClient({
  publicKey: 'my-public-key'
, privateKey: 'my-private-key'
})
 
//Having an issue creating/logging into account on marvel dev site
//Will retry

marvel.characters.findAll((err, results) => {
  if (err) {
    return console.error(err) 
  }
 
  console.log(results) 
}) 
