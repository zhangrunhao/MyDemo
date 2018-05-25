var graph = {
  you: ['alice', 'bob', 'claire'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  claire: ['thom', 'jonny'],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: []
}

var searchArr = []
searchArr = Array.prototype.concat(searchArr, graph.you)

while(searchArr.length !== 0) {
  var person = searchArr.shift()
  if (searchName(person)) {
    console.log('找到了:' + person)
    return
  } else {
    searchArr = Array.prototype.concat(searchArr, graph[person])
  }
}

function searchName(name) {
  return name.slice(name.length-1) === 'm'
}