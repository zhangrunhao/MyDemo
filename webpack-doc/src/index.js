import {cube} from './math.js'

function component() {
    var element = document.createElement('pre')
    var btn = document.createElement('button')

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n')

    return element
}

let element = component()
document.body.appendChild(element)