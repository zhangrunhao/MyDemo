function component() {
  var element = document.createElement('div')
  element.innerHTML = join(['Hello', 'webpack'], '')
  // Assume we are in the context of 'window'
  this.alert('This is a test text. ')
  return element
}

document.body.appendChild(component())