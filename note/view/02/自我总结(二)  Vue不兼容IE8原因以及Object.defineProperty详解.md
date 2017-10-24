#  Vue不兼容IE8原因以及Object.defineProperty详解

## 原因概述: 
* Vue.js使用了IE8不能模拟的ECMAScript5特性. Vue.js支持所有兼容ES5的浏览器.
* Vue将遍历此对象所有的属性, 并使用Object.defineProperty把这些属性全部转为getter/setter.
* Object.defindProperty是仅ES5支持, 且无法shim的特性.

****
**接下来逐步介绍概念.**

## shim特性
> 指把一个库引入一个旧的浏览器, 然后用旧的API, 实现一些新的API的功能.

## Object.definePropety()

* 语法: `Object.definePropety(obj, prop, descriptor)`
* 参数:
  * obj: 操作对象
  * prop: 需要操作的属性名称
  * descriptor: 属性具有的特性
* 返回值: 传入的对象, 即第一个参数obj
* 针对特性描述存在两种形式: 数据描述和存取器描述

## **数据描述**
> 当修改或定义对象的时候, 给属性添加一些特性
```js
var obj = {
  test: 'hello'
}

// 对象已有的属相添加特性描述
Object.defineProperty(obj, 'test', {
  configurable: true | false,
  enumerable: true | false,
  value: `任意类型的值`,
  writable: true | false
})

// 对象新添加的属性描述
Object.defineProperty(obj, 'newKey', {
  configurable: true | false,
  enumerable: true | false,
  value: `任意类型的值`,
  writable: true | false
})
```

### value
> * 属性对应的值, 可以为任意类型的值. 
> * 默认: `undefined`
```js
// 不设置value的值
Object.defineProperty(obj, 'newKey', {

})
console.log(obj.newKey) // undefined

/*
注: 两段代码不能同时出现 ;
报错: Cannot redefine property: newKey
原因: configurable属性默认为false, 不能修改; writable默认fasle, 不能被重写
*/
// 设置value值
Object.defineProperty(obj, 'newKey', {
  value: 'this is test'
})
console.log(obj.newKey) // undefined
```

### writable
> * 属性的是否可以被重写. 
> * 默认false, 不能被重写.


```js
// writable为false, 不可被重写
Object.defineProperty(obj, 'newKey', {
  value: 'hello',
  writable: false
})

Object.defineProperty(obj, 'newKey', {
  value: 'change'
})
// 这种情况下会报错: Cannot redefine property: newKey
console.log(obj.newKey)
```
```js
// 可以被重写
Object.defineProperty(obj, 'newKey', {
  value: 'hello',
  writable: false
})

obj.newKey = 'change'

console.log(obj.newKey) // hello
```

### enumerable
> * 此属性是否可以枚举(使用for...in或者Object.keys)
> * 默认为false: 不可枚举
```js
// 不可枚举
var obj = {}

Object.defineProperty(obj, 'newKey', {
  value: 'hello'
})

console.dir(obj) // {}
```
```js
// 可以枚举
var obj = {}

Object.defineProperty(obj, 'newKey', {
  value: 'hello',
  enumerable: true
})

console.dir(obj) // { newKey: 'hello' }
```

### configurable
> * 目标属性是否可以被删除
> * 目标属性的特性是否可以被再次修改
> * 默认false, 不可删除与修改

```js
// 属性不可被删除
var obj = {}
Object.defineProperty(obj, 'newKey', {
  value: 'hello',
  configurable: false
})
delete obj.newKey
console.log(obj.newKey) // hello
```
```js
// 属性可以被删除
var obj = {}
Object.defineProperty(obj, 'newKey', {
  value: 'hello',
  configurable: true
})
delete obj.newKey
console.log(obj.newKey) // undefined
```

```js
// 不能修改特性
var obj = {}
Object.defineProperty(obj, 'newKey', {
  value: 'hello',
  writable: false,
  configurable: false
})

Object.defineProperty(obj, 'newKey', {
  writable: true,
})
// 报错: Cannot redefine property: newKey
```
```js
// 再次修改特性
var obj = {}
Object.defineProperty(obj, 'newKey', {
  value: 'hello',
  writable: false,
  configurable: true
})

Object.defineProperty(obj, 'newKey', {
  writable: true,
})
obj.newKey = 'change'
console.log(obj.newKey) // change
```

### 注意
> * **一旦使用Objec.defineProperty给对象添加属性, 如果不设置属性的话, 那么configuable, enumerable, writable这些都是默认的false**
> * **不能被枚举, 不能被重写, 不能被再次更改属性**

## 存取器描述
> 当使用存取器描述特性的时候, 允许使用以下特性属性: 
```js
var obj = {}

Object.defineProperty(obj, 'newKey', {
  get: function() {} | undefined,
  set: function() {} | undefined,
  configurable: true | false,
  enumerable: true | false
})

```
* **当使用了getter或者setter方法, 不允许使用`writable`和`value`这两个属性**

### getter/setter
* 当设置或获取某个对象的属性值的时候, 可以提供getter/setter方法
  * getter: 是一种获取值的方法
  * setter: 是一种设置值的方法

```js
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
```

* get/set不必成对出现, 任写其一就可以. 如果设置不方便, 则get和set的默认值为undeifend

## 兼容性
> **在IE8下只能对DOM对象使用, 如果对原生对象使用Object.defineProtry()会报错**

****
参考: [https://segmentfault.com/a/1190000007434923](https://segmentfault.com/a/1190000007434923)