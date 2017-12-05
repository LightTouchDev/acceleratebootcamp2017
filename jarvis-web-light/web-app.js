let express = require('express')
let app = express()
let path = require('path')

app.use('/', express.static('app'))

let server = app.listen('3000', () =>{
	console.log('Express App serving at port 3000')
})
