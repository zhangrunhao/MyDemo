

// 一个函数都有一个prototype指向了原型, 也是原型, Fn.prototype, 这就是这个函数原型, 这个原型中还有一个, contructor指向这个函数本身.
// 

// var $ = require('./jquery-3.2.1')
// console.dir($)




// var fn = function () {
//   console.dir('dddd')
// }
// fn.a = 10
// fn.b = function () {
//   console.log('aaaa')
// }
// fn.c= {
//   name: "ddd",
//   'desc': '这是一句描述'
// }
// console.dir(fn)







// let fn = function () {

// }
// fn.name = 'funfff'
// console.log(fn.name)

// console.log(fn instanceof Object) // true



// function show(x) {
//   console.log(typeof x) //undefined
//   console.log(typeof 10) //number
//   console.log(typeof 'aaa') //string
//   console.log(typeof true) //boolean

//   console.log(typeof function () {
    
//   }) // function

//   console.log(typeof [1, 'a', true]) // object
//   console.log(typeof {
//     a: 'aaa',
//     b: 'bbb',
//     'c': 'ccc'
//   }) // object

//   console.log(typeof null) // object
//   console.log(typeof new Number(10)) // object
// }

// show()