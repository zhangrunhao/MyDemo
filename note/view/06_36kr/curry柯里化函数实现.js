function curry(fn) {
  var limit = fn.length // 缓存参数格式
  return function judgeCurry(...args) { // 但参数不够的时候, 需要不断返回这个函数, 将参数依次累加
    if (args.length >= limit) { /// 如果传入的参数个数等于了, 我们需要的参数个数, 直接返回
      return fn.apply(null, args) // 但是执行的,指针变为null, 就有点不理解了.
    } else {
      return function (...args2) {
        return judgeCurry.apply(null, args.concat(args2)) // 不断调用, 需要返回的函数, 一直到参数够了位置
      }
    }
  }
}

// function add(a, b, c) {
//   return a + b + c
// }

// var res = curry(add)(1)(2)(3)
// console.log(res) // 6


// var currySingle = fn => judgeCurry = (...args) => args.length >= fn.length ? fn.apply(null, args) : (...args2) => judgeCurry.apply(null, args.concat(args2))

// var currySingle = fn => judgeCurry = (...args) => args.length >= fn.length ? fn.apply(null, args) : (...args2) => judgeCurry.apply(null, args.concat(args2))
var currySingle = fn => ((limit) => judgeCurry = (...args) => args.length >= limit ? fn.apply(null, args) : (...args2) => judgeCurry.apply(null, args.concat(args2)))(fn.length)
function add(a, b, c) {
  return a + b + c
}

var res = currySingle(add)(1)(2)(3)
console.log(res) // 6