# Promise详解

> 参考[深入 Promise(一)——Promise 实现详解](https://zhuanlan.zhihu.com/p/25178630)

## Promise 实现详解

### Promise/A+ 规范

> 在没有说明的情况下, promise代指Promise实例
* Promist本质是一个状态机. 每个promise只有三种状态: padding, fulfilled, 或者rejected. 状态转变只能是pending -> fulfilled 或者 pending -> rejected. 状态不可逆.
* then方法可以被同一个promise调用多次
* then方法必须返回一个promise.大多数返回一个新的promise
* 值穿透

### 从头实现Promise

我们都知道Promise是一个构造函数, 需要new调用.并有以下几个api:

```js
function Promise (resolver) {
}
Promise.prototype.then = function() {}
Promise.prototype.catch = function() {}

Promise.reslove = function () {}
Promise.reject = function () {}
Promise.all = function () {}
Promise.race = functon () {}
```

开始构建

```js

```