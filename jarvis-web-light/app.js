document.body.style.backgroundImage = 'url(/avengepic.jpg)'
document.body.style.backgroundSize = 'cover'

let heading = document.createElement('h1')
heading.innerHTML = 'Jarvis Web Project'
heading.style.textAlign = 'Center'
heading.style.color = 'white'

let body = document.getElementById('content')
body.append(heading)
