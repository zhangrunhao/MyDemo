import _ from 'lodash'
import printMe from './print'

function component() {
    var element = document.createElement('div')
    var btn = document.createElement('button')

    element.innerHTML = _.join(['Hello', 'Webpack', ''])
    
    element.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe

    element.appendChild(btn)
    
    return element
}

document.body.appendChild(component())