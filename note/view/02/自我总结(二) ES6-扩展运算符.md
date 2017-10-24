# ES6 扩展运算符

## 含义

### 概念
> 扩展运算符(spread)是三个点(`...`). 它好比rest参数的逆运算, `将一个数组转为用逗号分隔的参数序列`
```js
console.log(...[1,2,3]) // 1 2 3
console.log(1, ...[2, 3, 4], 5) // 1 2 3 4 5

/* ---------------- */
let arr = [...document.querySelectorAll('li')]
console.log(arr) //[li.spc, li.spc.sss, li, li, li.spc, li.spc, li]
```

### 主要用于函数的调用
```js
// 在这个方法中, 因为我们的item参数本身就是一个数组, 所以, 传入一个数组的话,会再套一层
// 放的是使用 `...`解开便是了
// 真正的使用, 应该是push(arr, 1, 2)
function push(array, ...item) {
  array.push(...item)
}
let arr = ['a', 'b', 'c']
const items = [1, 2, 3]
push(arr, items)
console.log(arr) // [ 'a', 'b', 'c', [ 1, 2, 3 ] ]


function add(x, y) {
  return x + y
}

const numbers = [1, 2]
let res = add(...numbers)
console.log(res) // 3
```

### 扩展运算符与正常的函数参数可以结合使用, 非常灵活
```js
function f(v, w, x, y, z) {
  // 这里刚刚好, 所有的参数分开接收
  // -1, 0, 1, 2, 3
}
const args = [0, 1]
f(-1, ...args, 2, ...[3])
```

### 扩展运算符后面还可以放置表达式
```js
const x = 1
const arr = [
  ...(x > 0 ? ['a'] : []),
  'b'
]
console.log(arr) //[ 'a', 'b' ]
```

### 如果扩展预算符后面是一个空数组, 则不会产生任何效果
```js
const arr = [...[], 1]
console.log(arr) //[ 1 ]
```


## 代替数组的apply方法

### 不再需要applay将数组转为函数的参数
```js
// ES5 
function f(x, y, z) {
  // ...
  console.log(x)
}
var args = [0, 1, 2]
// 因为apply后面跟的是一个数组
f.apply(null, args)

// ES6
function f(x, y, z) {
  // ...
}
let args = [0, 1, 2]
f(...args)
```

### 简化`Math.max`方法
```js
// ES5
Math.max.apply(null, [14, 13, 55])

// ES6
Math.max(...[14, 13, 55])

// 等同于
Math.max(14, 13, 55)
```

### `push`函数的直接使用
> 将一个数组添加到另一个数组的尾部
```js
// ES5的写法
var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]
Array.prototype.push.apply(arr1, arr2) // 因为push的参数不能是数组, 只能通过apply的方式, 来改变
console.log(arr1) // [ 0, 1, 2, 3, 4, 5 ]

// ES6的写法
let arr1 = [0, 1, 2]
let arr2 = [3, 4, 5]
arr1.push(...arr2)
console.log(arr1) // [ 0, 1, 2, 3, 4, 5 ]
```

### `new Date()的时候直接使用`
```js
// 非常不理解这里的null, 是干嘛的
// 如果是apply的话, 第一个参数改变this, 已经改变成了Date, 第二个参数是一个数组, 里面是真正的参数, 我们真正参数的第一个就是年份啊.
var date = new (Date.bind.apply(Date, [null, 2015, 1, 1]))
console.log(date) // 2015-01-31T16:00:00.000Z

var date = new Date(...[2015, 1, 1])
console.log(date) // 2015-01-31T16:00:00.000Z

var date = new Date(2015, 1, 1)
console.log(date)//2015-01-31T16:00:00.000Z
```

## 扩展运算符的应用

### 复制数组
```js
// 普通的复制只能是复制指针, 并不能真正的复制整个数组
const a1 = [1, 2]
const a2 = a1
a2[0] = 2
a1 // [ 2, 2 ]

// ES5: 通过变通方式来实现
const a1 = [1, 2]
const a2 = a1.concat()

// ES6: 更简便的方式, 均可以克隆整个数组
const a1 = [1, 2]
const a2 = [...a1]
const [...a3] = a1
```

### 合并数组
```js
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
```

### 与解构赋值结合
```js
// 生成数组
var list = ['a', 'b', 'c', 'd']

// ES5
a = list[0], rest = list.slice(1)

// ES6
const [a, ...rest] = list

console.log(a) // a
console.log(rest) // [ 'b', 'c', 'd' ]
```
```js
const [first, ...rest] = [1, 2, 3, 4, 5]
console.log(first) // 1
console.log(rest) // [2, 3, 4, 5]

const [first, ...rest] = []
console.log(first) // undefined
console.log(rest) // []

const [first, ...rest] = ['foo']
console.log(first) // 'foo'
console.log(rest) // []
```
```js
// 如果扩展运算符没有把数组放到最后一位会报错
const [...butLast, last] = [1, 2] // 报错: Rest element must be last element
 
const [first, ...middle, last] = [1, 2, 3, 4, 5]; // 报错: Rest element must be last element
```

### Unicode编码字符串求长
```js
// 转化字符串
console.log([...'hello']) //[ 'h', 'e', 'l', 'l', 'o' ]

// 可以识别编码
console.log('x\uD83D\uDE80y') // x�y
console.log('x\uD83D\uDE80y'.length) // 4 // 会把四个字符的Unicode字符是被为两个字符
console.log([...'x\uD83D\uDE80y']) // [ 'x', '�', 'y' ]
console.log([...'x\uD83D\uDE80y'].length ) // 3 // 扩展运算符可以正常返回字符串的长度

// 检测带有Unicode字符串的长度
function length(str) {
  return [...str].length
}

// 所有涉及到操作四个字节的Unicode字符的函数, 都有问题, 需要使用运算符改写
let str = 'x\uD83D\uDE80y'
str.split('').reverse().join('')
const arr = [...str].reverse().join('')
```

### 实现Iterator接口的对象
```js
// 任何Iterator接口对象, 都能通过扩展运算符变为真正的数组
let nodeList = document.querySelectorAll('li')
let array = [...nodeList]

// 没有部署Iterator接口的类数组, 无法通过扩展运算符进行转化
let arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}

// let arr1 = [...arrayLike] // 报错: arrayLike[Symbol.iterator] is not a function


let arr2 = Array.from(arrayLike) // 报错: arrayLike[Symbol.iterator] is not a function
console.log(arrayLike) // { '0': 'a', '1': 'b', '2': 'c', length: 3 }
console.log(arr2) // [ 'a', 'b', 'c' ]
```

### Map 和 Set 结构, Generator函数
```js
// Map结构
// 扩展运算符内部调用的是数据结构的Iterator接口
// Map具有Iterator接口, 可以使用扩展运算符
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
])

console.log(map) //Map { 1 => 'one', 2 => 'two', 3 => 'three' }
let arr1 = [...map.keys()]
console.log(arr1) //[ 1, 2, 3 ]
// Generator 函数运行后, 返回的遍历器对象
const go = function*() {
  yield 1;
  yield 2;
  yield 3;
};
console.log(go) // [GeneratorFunction: go]
console.log(go()) // {}
// 返回遍历器对象, 执行扩展运算符
let arr2 = [...go()]
console.log(arr2) // [ 1, 2, 3 ]
```

## 参考(都能说是抄袭了.. 捂脸..)
* 阮一峰老师: [ESMAScript 6 入门](http://es6.ruanyifeng.com/#docs/array): [http://es6.ruanyifeng.com/#docs/array](http://es6.ruanyifeng.com/#docs/array)
