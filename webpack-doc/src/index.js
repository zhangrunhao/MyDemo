// function getComponent() {
//     return import(/* webpackChunkName:"lodash" */ 'lodash').then(_ => {
//         var element = document.createElement('div')
//         element.innerHTML = _.join(['Hello', 'webpack'], '')
//         return element
//     }).catch(error => 'An error occurred while loading the component')
// }

// getComponent().then(componet => {
//     document.body.appendChild(componet)
// })

// async function getComponent() {
//     var element = document.createElement('div')
//     const _ = await import(/* webpackChunkName: "lodash"*/ 'lodash')
//     element.innerHTML = _.join(['Hello', 'webpack'], '')
//     return element
// }

// getComponent().then(component => {
//     document.body.appendChild(component)
// })

import _ from 'lodash'
// import Print from './print'
import Print from './print'

function component() {
    var element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'Webpack'], '')
    element.onclick = Print.bind(null, 'Hello webpack')
    return element
}

document.body.appendChild(component())