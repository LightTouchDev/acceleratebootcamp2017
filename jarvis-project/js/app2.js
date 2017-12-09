let Marvel = require('./marvel')

let marvel = new Marvel()

marvel.getData((info) => {
  marvel.insertDocuments(info)
})

