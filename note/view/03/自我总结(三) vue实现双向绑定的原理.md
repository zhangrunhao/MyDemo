## 基本介绍
https://segmentfault.com/a/1190000006599500#articleHeader5

### 概述
* 主流MVC(VM)均实现了单向数据绑定
* 双向数据绑定无非就是在单项绑定的基础上可给输入元素(input, textarea等)添加change事件, 并动态修改model和view
* 故无需介怀单项或者双向的数据绑定
* 实现大致三种方式: 
  * 发布者-订阅者(backbone.js)
  * 脏值检测(angular.js)
  * 数据劫持(vue.js)

### 发布者-订阅者模式(Subscribe/Publish)
* backbone.js
* 一般通过sub, pub的方式实现数据和视图的绑定监听.
* 即有多有订阅者, 同时监听某一个主体对象. 这个对象在自身状态变化时, 会通知订阅者对象. 使他们能够自动更新自己的状态.
* 更新数据的方法通常是: `vm.set('property', value)`
* 更加希望能够通过`vm.property = value`的这种方式更新数据, 同时自动刷新视图.

### 脏值检测
* angular.js
* 通过脏值检测的方式对比数据是否有变更, 来决定是否更新视图.
* 最简单是通过`setInterval()`定时轮询检测数据变动.
* angular在指定时间时触发脏值检测
  * DOM事件, 譬如用户输入文本, 点击按钮等(ng-click)
  * XHR响应事件($http)
  * 浏览器Location变更事件($loaction)
  * Timer事件($timeout, $interval)
  * 执行$digest()或$apply()

### 数据劫持
* vue.js
* 采用数据劫持结合订阅发布者模式
* 通过`Object.defineProperty()`来劫持各个属性的`sertter`和`getter`
* 在数据变动时发布消息给订阅者, 触发相应的监听回调.

### 思路
> 数据劫持: `Object.defineProperty()`
1. 实现一个数据监听器Observer, 能够对数据对象的所有属性进行监听, 一旦数据有了变化能够通知所有的订阅者.
2. 实现一个指令解析器Compile, 对每个元素节点的指令进行扫描和解析, 根据指令模板替换数据, 然后告知监听器应该添加哪些订阅者到对应的哪些发布者, 也就是对应的对象属性. 
3. 实现一个监听器Watcher, 作为连接Observer和Compile的桥梁, 是订阅者的一个集合, 收到每个属性的变动通知, 执行指令绑定的相应回调函数.从而更新视图
4. ![MVVM框架原理解释](https://sfault-image.b0.upaiyun.com/132/184/132184689-57b310ea1804f_articlex)

## 实现Observer

### 监听每个数据的变化
> 1. 使用`Object.defineProperty()`来监听属性变动
> 2. 将需要监听的的数据对象进行递归遍历, 包括子属性对象的属性, 都加上`getter`和`setter`
```js
let obj = {name: 'zhang'}
observer(obj)
obj.name = 'li' // 监听成功: zhang--->li


function observer(obj) {
  if (!obj || typeof obj !== 'object') { // 看看有没有obj, 或者类型是否为对象, 如果是的话, 继续递归下去
    return
  }
  // 取出所有的属性进行遍历操作
  Object.keys(obj).forEach((key) => {
    // 监听每个属性
    defineReactive(obj, key, obj[key])
  })
}


function defineReactive(obj, key, val) {
  // 监听子属性
  observer(val)
  // 为每个属性设置`setter`和`getter`
  Object.defineProperty(obj, key, {
    enumerable: true, // 可枚举
    configurable: false, //不能再修改或者删除
    get: function () { // 获取值的时候, 返回的val, 虽然并没有更改key对应的值, 但是通过get方法, 进行了更改
      return val
    },
    set: function (newVal) {
      console.log('监听成功: ' + val + `--->` + newVal)
      val = newVal // set方法, 来更改整个属性的值
    }
  })
}
```

### 实现消息订阅器 (监听变化 -> 通知订阅者)
> 1. 维护数组, 收集订阅者
> 2. 数据变动后触发notify, 再调用订阅者的update方法
```js
// ... 省略
function defineReactive(obj, key, val) {
  // 实例化一个对象, 把所有依赖这个属性对象的订阅者, 都放到这个对象下面的数组中
  let dep = new Dep
  
  // 监听子属性
  observer(val)
  // 为每个属性设置`setter`和`getter`
  Object.defineProperty(obj, key, {

    // ... 省略

    set: function (newVal) {
      console.log('监听成功: ' + val + `--->` + newVal)
      val = newVal // set方法, 来更改整个属性的值

      // 通知所有的订阅者, 每一个依赖这个属性的订阅者执行更新函数
      dep.notify()
    }
  })
}

// 构造函数, 有一个控制所有的订阅者, 有一个数组用来收集订阅者
function Dep() {
  this.subs = []
}

// 维护构造函数原型上的方法
// 多添加一个依赖这个属性的订阅者
Dep.prototype.addSub = function (sub) {
  this.subs.push(sub)
}

// 发布更新
Dep.prototype.notify = function () {
  // 遍历数组中的每一个订阅者, 均执行更新
  this.subs.forEach((sub) => {
    sub.update()
  })
}
```
