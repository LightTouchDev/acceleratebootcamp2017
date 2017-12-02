//Create h1 tag

let paragraph = document.createElement('p')
paragraph.innerHTML = 'It all began with a bootcamp by Accelerate Foundation...'

let heading = document.createElement('h1')
heading.innerHTML = 'This Is the Story of How I Became the Greatest Developer in the world'

let body = document.getElementById('content')
body.append(heading, paragraph)


