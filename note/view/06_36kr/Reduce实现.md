# Reduce实现

> [参考](https://blog.csdn.net/Beijiyang999/article/details/80186242)

## 第一版

```js
Array.prototype.fakeReduce = function (fn, base) {
  // this 指向原数组
  // 拷贝数据, 更改指针方向
  var arr = this.concat()
  // 处理默认值, arr就是我们要处理的叠加参数数组
  if (typeof base !== 'undefined') {
    arr.unshift(base)
  }

  let index; // 当前处理元素的索引

  while (arr.length > 2) { // 因为是需要前一项, 向后一项, 叠加, 所以需要两个元素以上
    index = this.length - arr.length + 1
    let newValue = fn.call(null, arr[0], arr[1], index, this)
    arr.splice(0, 2)
    arr.unshift(newValue)
  }

  index += 1
  let result = fn.call(null, arr[0], arr[1], index, this)
  return result
}
```

## 第二版: 使用splic直接替换元素

```js
Array.prototype.fakeReduce = function (fn, base) {
  var arr = this.concat()
  if (typeof base !== 'undefined') {
    arr.unshift(base)
  }
  while (arr.length > 1) {
    var index = this.length - arr.length + 1
    var result = fn.call(null, arr[0], arr[1], index, this)
    arr.splice(0, 2, result) // 使用splice直接替换
  }
  return result
}
```

## 第三版: 加上类型检测

```js
Array.prototype.fakeReduce = function (fn, base) {
  if (typeof fn !== 'function') {
    throw new TypeError('arguments[0] is not a funciton')
  }
  var arr = this.concat()
  if (typeof base !== 'undefined') {
    arr.unshift(base)
  }
  while (arr.length > 1) {
    var index = this.length - arr.length + 1
    var result = fn.call(null, arr[0], arr[1], index, this)
    arr.splice(0, 2, result) // 使用splice直接替换
  }
  return result
}
```

