# compose 函数实现

> 总结componse函数实现过程

## 大致特点

* 参数均为函数, 返回值也是函数
* 第一函数接受参数, 其他函数接受的上一个函数的返回值
* 第一个函数的参数是多元的, 其他函数的一元的
* 自右向左执行

## 简单实现

### 第一步: 记录我们传入所有函数的个数

```js
var compose = function (...args) {
  var len = args.length // 记录我们传入所有函数的个数
  return function f1() {
   //  
  }
}
```

### 第二步: 利用游标记录该运行的函数

```js
var compose = function (...fns) {
  var len = fns.length // 记录我们传入所有函数的个数
  var index = len - 1 // 游标记录函数执行情况, 也作为我们运行fns中的中函数的索引
  var reslut // 结果, 每次函数执行完成后, 向下传递
  return function f1(...arg1) {
    reslut = fns[index].apply(this, arg1)
    --index
    return f1.call(null, reslut)
  }
}
```

### 第三步: 完成代码

```js
var compose = function (...fns) {
  var len = fns.length // 记录我们传入所有函数的个数
  var index = len - 1 // 游标记录函数执行情况, 也作为我们运行fns中的中函数的索引
  var reslut // 结果, 每次函数执行完成后, 向下传递
  return function f1(...arg1) {
    reslut = fns[index].apply(this, arg1)
    if (index <= 0) {
      index = len - 1
      return reslut
    } else {
      --index
      return f1.call(null, reslut)
    }
  }
}
```

## loadsh实现

### 直接实现

> 使用while迭代完成

```js
var flow = function (fns) {
  var len = fns.length

  // 检查所有参数是否为函数
  var index = len
  while (index--) {
    if (typeof fns[index] !== 'function') {
      throw new TypeError('Expected a function')
    }
  }

  return function (...args) {
    var index = 0
    // 传入数组为空, 错误的话, 执行后面的啊, 傻瓜, 竟然卡了这么久, 也真是够了
    var reslut = len ? fns[index].apply(this, args) : args[0]
    while (++index < len) {
      reslut = fns[index].call(this, reslut)
    }
    return reslut
  }
}
```