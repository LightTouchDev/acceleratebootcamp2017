let express = require('express')
let app = express()
let path = require('path')
//send .html to server


app.get('/', (request, response) => {
  
  response.sendFile(path.join(__dirname+'/dom.html'))

})
app.use('/', express.static(path.join(__dirname+'/')))

app.listen('3000', () =>{
  console.log('Express listening on port 3000')
})

