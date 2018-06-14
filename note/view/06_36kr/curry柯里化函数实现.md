# curry柯里化函数实现

> 参考文章: [一行写出javascript函数式编程中的curry](https://segmentfault.com/a/1190000008248646)
> 感谢作者分享

## 第一步: 缓存原始函数的参数个数

```js
function curry(fn) {
  var limit = fn.length // 缓存参数格式
  // ...
}
```

## 第二步: 判断参数个数, 是不是我们需要的个数

```js
function curry(fn) {
  var limit = fn.length // 缓存参数格式
  return function (...args) {
    if (args.length >= limit) { /// 如果传入的参数个数等于了, 我们需要的参数个数, 直接返回
      return fn.applay(null, args) // 但是执行的,指针变为null, 就有点不理解了.
    }
  }
}
```

## 第三步: 参数不够, 返回一个存储了参数的函数, 不断调用该函数, 一直到参数传满为止

```js
function curry(fn) {
  var limit = fn.length // 缓存参数格式
  return function judgeCurry(...args) { // 但参数不够的时候, 需要不断返回这个函数, 将参数依次累加
    if (args.length >= limit) { /// 如果传入的参数个数等于了, 我们需要的参数个数, 直接返回
      return fn.applay(null, args) // 但是执行的,指针变为null, 就有点不理解了. 可能就像下面一样, 仅仅是个占位
    } else {
      return function (...args2) {
        return judgeCurry.apply(null, args.concat(args2)) // 不断调用, 需要返回的函数, 一直到参数够了位置
      }
    }
  }
}

// 检测
function add(a, b, c) {
  return a + b + c
}

var res = curry(add)(1)(2)(3)
console.log(res) // 6
```

## 第四步: 一行写出

```js
var currySingle = fn => judgeCurry = (...args) => args.length >= fn.length ? fn.apply(null, args) : (...args2) => judgeCurry.apply(null, args.concat(args2))
```

## 第五步: 一行写出优化, 立即执行函数, 缓存参数

```js
var currySingle = fn => ((limit) => judgeCurry = (...args) => args.length >= limit ? fn.apply(null, args) : (...args2) => judgeCurry.apply(null, args.concat(args2)))(fn.length)
```