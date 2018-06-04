// var mult = function () {
//   var a = 1
//   for (var i =0, l = arguments.length;i<l;i++) {
//     a = a*arguments[i]
//   }
//   return a
// }



var caches = {} // 如果计算过的就不再计算了..  
var mult = function () {
  var args = Array.prototype.join.call(arguments, ',')
  if (caches[args]) {
    return cache[args]
  }
  var a = 1
  for (var i =0, l = arguments.length;i<l;i++) {
    a = a*arguments[i]
  }
  return caches[args] = a
}

var res = mult(2,1,3)
console.log(res)
