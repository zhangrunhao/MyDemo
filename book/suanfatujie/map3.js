var graph = {
  start: {
    a: 6,
    b: 2
  },
  a: {
    fin: 1
  },
  b: {
    a: 3,
    fin: 5
  },
  fin: {}
}

var costs = {
  a: 6,
  b: 2,
  fin: Infinity
}

var parents = {
  a: 'start',
  b: 'start',
  fin: null
}

var processed = []

function isInArray(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return true;
    }
  }
  return false;
}

function findLostsCostsNode(costs) {
  var cost = Infinity
  var node = ''
  for (var key in costs) {
    if (!isInArray(processed, key)) {
      if (cost > costs[key]) {
        cost = costs[key]
        node = key
      }
    }
  }
  return node
}

var node = findLostsCostsNode(costs)
while (node) {
  var cost = costs[node]
  var neighbors = Object.keys(graph[node])
  neighbors.forEach((item, index) => {
    var newCosts = cost + graph[node][item]
    if (newCosts < costs[item]) {
      costs[item] = newCosts
      parents[item] = node
    }
  })
  processed.push(node)
  node = findLostsCostsNode(costs)
}

console.log(costs)
console.log(parents)