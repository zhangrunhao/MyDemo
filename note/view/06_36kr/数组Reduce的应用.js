// var arr = [1,2,3,4,5]

// var sum = arr.reduce(function (prev, cur, index, arr) {
//   console.log(prev, cur, index)
//   return prev + cur
// })

// console.log(sum)

// var result = [
//   {
//       subject: 'math',
//       score: 88
//   },
//   {
//       subject: 'chinese',
//       score: 95
//   },
//   {
//       subject: 'english',
//       score: 80
//   }
// ];

// var dis = {
//   math: 0.5,
//   chinese: 0.3,
//   english: 0.2
// }

// var sum = 0
// // for (var i =0; i< result.length; i++) {
// //   sum += result[i].score
// // }

// var sum = result.reduce((pre, cur, index, arr) => {
//   // if (typeof pre === 'object') { // 如果没有默认值, 需要设置这个判断 , 来排除第一项
//   //   pre = pre.score
//   // }
//   return cur.score * dis[cur.subject] + pre
// } ,0)
// console.log(sum)


var arrString = 'aaabbsssbdd'

var res = arrString.split('').reduce(function (res, cur, index, arr) {
  res[cur] ? ++res[cur] : res[cur] = 1
  return res
}, {})

console.log(res)
