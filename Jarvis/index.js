//Marvel API
let program = require('commander')
let Marvel = require('./marvel')


program
  .command('avengers')
  .action(() => {
	console.log('avengers')
	let marvel = new Marvel()
	marvel.getAvengers()
})

program
  .command('spider-man')
  .action(() => {
	console.log('spider-man')
	let marvel = new Marvel()
	marvel.getSpiderMan()
})

program.parse(process.argv)

if(!program.args.length) {
  program.help()
}
