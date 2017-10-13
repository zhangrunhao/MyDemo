

// ES5
var arr = [1, 2].concat(more)
// ES6
var arr = [1, 2, ...more]

var arr1 = ['a', 'b']
var arr2 = ['c']
var arr3 = ['d', 'e']

// ES5
arr1.concat(arr2, arr3)
//ES6
var arr = [...arr1, ...arr2, ...arr3]




// // 普通的复制只能是复制指针, 并不能真正的复制整个数组
// const a1 = [1, 2]
// const a2 = a1
// a2[0] = 2
// a1 // [ 2, 2 ]

// // ES5: 通过变通方式来实现
// const a1 = [1, 2]
// const a2 = a1.concat()

// // ES6: 更简便的方式, 均可以克隆整个数组
// const a1 = [1, 2]
// const a2 = [...a1]
// const [...a3] = a1




// var date = new (Date.bind.apply(Date, [null, 2015, 1, 1]))
// console.log(date) // 2015-01-31T16:00:00.000Z

// var date = new Date(...[2015, 1, 1])
// console.log(date) // 2015-01-31T16:00:00.000Z

// var date = new Date(2015, 1, 1)
// console.log(date)//2015-01-31T16:00:00.000Z


// // ES5的写法
// var arr1 = [0, 1, 2]
// var arr2 = [3, 4, 5]
// Array.prototype.push.apply(arr1, arr2)
// console.log(arr1) // [ 0, 1, 2, 3, 4, 5 ]

// // ES6的写法
// let arr1 = [0, 1, 2]
// let arr2 = [3, 4, 5]
// arr1.push(...arr2)
// console.log(arr1) // [ 0, 1, 2, 3, 4, 5 ]



// // ES5
// Math.max.apply(null, [14, 13, 55])

// // ES6
// Math.max(...[14, 13, 55])

// // 等同于
// Math.max(14, 13, 55)




// // ES5 
// function f(x, y, z) {
//   // ...
//   console.log(x)
// }
// var args = [0, 1, 2]
// // 因为apply后面跟的是一个数组
// f.apply(null, args)

// // ES6
// function f(x, y, z) {
//   // ...
// }
// let args = [0, 1, 2]
// f(...args)






// const x = 1
// const arr = [
//   ...(x > 0 ? ['a'] : []),
//   'b'
// ]
// console.log(arr) //[ 'a', 'b' ]

// const arr = [...[], 1]
// console.log(arr) //[ 1 ]



// function f(v, w, x, y, z) {
//   // 这里刚刚好, 所有的参数分开接收
//   // -1, 0, 1, 2, 3
// }
// const args = [0, 1]
// f(-1, ...args, 2, ...[3])



// function push(array, ...item) {
//   array.push(...item)
// }
// let arr = ['a', 'b', 'c']
// const items = [1, 2, 3]
// push(arr, items)
// console.log(arr) // [ 'a', 'b', 'c', [ 1, 2, 3 ] ]


// function add(x, y) {
//   return x + y
// }

// const numbers = [1, 2]
// let res = add(...numbers)
// console.log(res) // 3









// console.log(...[1,2,3]) // 1 2 3
// console.log(1, ...[2, 3, 4], 5) // 1 2 3 4 5

// /* ---------------- */
// let arr = [...document.querySelectorAll('li')]
// console.log(arr) //[li.spc, li.spc.sss, li, li, li.spc, li.spc, li]







// 编写一个函数, 用来判断, 某个字符串中, 是否其他的字符串, 
// 如果有则返回true, 所有的都不含有, 返回false
// containsAll("banana", "b", "nan") 将返回true，
// containsAll("banana", "c", "nan") 将返回 false。

// var res = containsAll("banana", "a", "nan")
// console.log(res)

// function containsAll(haystack) {
//   for (var i = 1; i < arguments.length; i++) {
//     var needle = arguments[i];
//     if (haystack.indexOf(needle) === -1) {
//       return false
//     }
//   }
//   return true
// }

// function containsAll(haystack, ...needles) {
//   for (var needle of needles) {
//     if (haystack.indexOf(needle) === -1) {
//       return false
//     }
//   }
//   return true
// }