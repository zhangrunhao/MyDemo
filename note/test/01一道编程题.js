// /* 
//  * 编写一个程序, 每个time秒执行一次func函数, 执行count次, parma为传递到func的参数, param为数组类型
//  */
// var x = function (count, time, func, param) {
//   for (let i = 1; i <= count; i++) {
//     let doTime = parseInt(time) * i * 1000
//     setTimeout(function () {
//       func(param)
//     }, doTime);
//   }
// }


// var x = function (count, time, func, param) {
//   function y() {
//     console.log('执行一次: ' + count)
//     count--
//     func(param)
//     if (count !== 0) {
//       setTimeout(y, time * 1000)
//     }
//   }
//   setTimeout(y, time * 1000)
// }


var x = function (count, time, func, param) {
  var timer = setInterval(function () {
    count--
    if (count >= 0) {
      func(param)
    } else {
      clearInterval(timer)
    }
  }, parseInt(time * 1000))
}

x(3, 3, function (info) {
  console.log(info)
}, [1, 2, 3])

// x(5, 2, x => console.log(x), [1, 2, 3])