// var fibona = function (n) {
//   var num1 = 1
//   var num2 = 1
//   var num3 = 0
//   for (var i = 3; i <= n; i++) {
//     num3 = num1 + num2
//     num1 = num2
//     num2 = num3
//   }
//   return num3
// }

// var fibona = function (n) {
//   if (n === 1 || n == 0) {
//     return n
//   }
//   return fibona(n - 1) + fibona(n - 2)
// }

// var fibona = (function () {
//   var temp = [] // {} 对象快过数组. 因为数组第一次赋值的时候, 会将数组的前面都置为undefined
//   return function (n) {
//     if (temp[n]) { // 缓存数组, 减少调用次数
//       return temp[n]
//     } else {
//       return temp[n] = (n === 0 || n === 1) ? n : fibona(n - 1) + fibona(n - 2)
//     }
//   }
// })()

function fibona(n, n1 = 1, n2 = 1) {
  if (n <= 2) {
    return n2
  }
  return fibona(n - 1, n2, n1 + n2)
}

console.log(fibona(5)) // 55