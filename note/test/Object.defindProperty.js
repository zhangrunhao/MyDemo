


// 在特性中使用get/set属性来定义对应的方法
var obj = {}
var initVlue = 'hello'
Object.defineProperty(obj, 'newKey', {
  get: function () {
    // 当获取值的时候, 触发这个函数
    return initVlue
  },
  set: function (value) {
    // 设置值的时候, 触发这个函数
    initVlue = value
  }
})
// 获取值
console.log(obj.newKey) // hello

obj.newKey = 'change'

console.log(initVlue)// change


// var obj = {

// }

// Object.defineProperty(obj, 'newKey', {
//   get: function() {} | undefined,
//   set: function() {} | undefined,
//   configurable: true | false,
//   enumerable: true | false
// })




// var obj = {}
// Object.defineProperty(obj, 'newKey', {
//   value: 'hello',
//   writable: false,
//   configurable: true
// })

// Object.defineProperty(obj, 'newKey', {
//   writable: true,
// })
// obj.newKey = 'change'
// console.log(obj.newKey) // change







// var obj = {}

// Object.defineProperty(obj, 'newKey', {
//   value: 'hello',
//   enumerable: true
// })

// console.dir(obj) // { newKey: 'hello' }





// var obj = {

// }

// // writable为false, 不可被重写
// Object.defineProperty(obj, 'newKey', {
//   value: 'hello',
//   writable: false
// })

// obj.newKey = 'change'

// console.log(obj.newKey) // hello









// var obj = {
//   test: 'hello'
// }

// // 对象已有的属相添加特性描述
// Object.defineProperty(obj, 'test', {
//   configurable: true | false,
//   enumerable: true | false,
//   value: `任意类型的值`,
//   writable: true | false
// })

// // 对象新添加的属性描述
// Object.defineProperty(obj, 'newKey', {
//   configurable: true | false,
//   enumerable: true | false,
//   value: `任意类型的值`,
//   writable: true | false
// })

// var obj = {

// }
// // 不设置value的值
// Object.defineProperty(obj, 'newKey', {
//   writable: true
// })
// console.log(obj.newKey) // undefined

// // 设置value值
// Object.defineProperty(obj, 'newKey', {
//   value: 'this is test'
// })
// console.log(obj.newKey) // undefined