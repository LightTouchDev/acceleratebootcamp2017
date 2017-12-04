//Create h1 tag

let p1 = () => {
	paragraph.style.textAlign = 'left'
	paragraph.style.color = 'white'
}

document.body.style.backgroundColor = 'rgb(117, 68, 117)'

let paragraph = document.createElement('p')
paragraph.innerHTML = 'It all began with a bootcamp by Accelerate Foundation...'
p1()

let heading = document.createElement('h1')
heading.innerHTML = 'This Is the Story of How I Became the Greatest Developer in the World'
heading.style.textAlign = 'center'
heading.style.color = 'rgb(9, 191, 11)'

let button = document.createElement('button')
button.innerHTML = 'click me!!'
button.onclick = alert(Date())
//doesn't display date when clicked. why?


let body = document.getElementById('content')
body.append(heading, paragraph, button)

