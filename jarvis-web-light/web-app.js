let express = require('express')
let app = express()
let path = require('path')

app.get('/',(req,res) => {
	res.sendFile(path.join(__dirname+'/index.html'))
})

app.use('/', express.static(path.join(__dirname+'/')))

let server = app.listen('3000', () =>{
	console.log('Express App serving at port 3000')
})
