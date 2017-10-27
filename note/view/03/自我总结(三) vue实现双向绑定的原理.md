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
4. 