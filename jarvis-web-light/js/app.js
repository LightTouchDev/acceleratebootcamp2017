import Dashboard from './containers/dashboard'


document.body.style.backgroundImage = 'url(/images/avengepic.jpg)'
document.body.style.backgroundSize = 'cover'


let body = document.getElementById('content')

let dashboard = new Dashboard()

body.append(dashboard.getContent())


