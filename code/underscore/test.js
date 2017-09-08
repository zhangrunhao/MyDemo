var _ = require('./underscord_1.8.3')






// 函数截流
// 这时所有的函数, query函数, 都已经被控制了, 
// 返回了一个新的函数

var qurery = _(function () {
  console.log('querying')
}).throttle(1, 3000)

qurery()
qurery()
// each 和 map
// var arr = [1, 2, 3]
// _(arr).each((item, index) => {
//   arr[index] = ++item
// })

// console.log(arr)

// var obj = {
//   one: 1,
//   two: 2
// }
// _(obj).each((value, key) => {
//   return obj[key] = value + 1
// })
// console.log(obj)

// 扩展
// var obj = {
//   name: 'zhang'
// }
// _.mixin({
//   method1: function (obj) {
//     console.dir(obj)
//   },
//   method2: function (arr, a) {
//     console.log(a)
//     console.log(arr)
//     return arr
//   }


// })
// _(obj).chain().method2('dd').method1()


// dd
// {name: zhang}
// [Object}

// 链式操作
// var arr = [10, 20, 30];
// var res = _(arr)
//             .chain()
//             .map(function (item) {
//               return ++item
//             })
//             .first()
//             .value()
// console.log(res)


// // 取消对下划线的控制
// console.dir(_)
// Underscore对象  
// console.dir(_);  
// 将Underscore对象重命名为us, 后面都通过us来访问和创建Underscore对象  
// _ = {}
// 这个方法, 在浏览器中能好用, 在node环境中不行
// var us = _.noConflict();  
// 输出"自定义变量"  
// console.dir(_);


// // 定义一个js的内置对象
// var jsData = {
//   name: 'data'
// }
// // 通过_()方法将对象创建一个Underscore对象
// // underscoreData对象的原型中包含了Underscore中定义的所有方法
// var underscoreData = _(jsData)
// // 通过value可以获取原生数据
// var res = underscoreData.value()
// console.log(res)