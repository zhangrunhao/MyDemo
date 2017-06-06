# 问题
* 用作属性 `vm.reverseMessage` 的 getter, 什么是个getter?


# 计算属性
## 计算属性
* 模板内的表达式是非常便利的, 但是他们实际上只是用于简单的运算.在模板中放入太多的逻辑会让模板过重且难以维护
```html
<div id="app">
    {{message.split('').reverse().join(' ')}}
</div>
```
* 在这种情况下, 模板不再简单和清晰.
* 对于任何复杂逻辑, 都应当使用**计算属性**.
### 基础例子
```html
<div id="app">
    <p>Original message: "{{message}}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```
```js
var vm = new Vue({
    el: "#app",
    data : {
        message: 'Hello'
    },
    computed: {
        // 设置一个计算属性
        reverseMessage: function(){
            // this 指针将会指向 vm 这个实例
            return this.message.split('').reverse().join('')
        }
    }
})
```
* 这里我们声明了一个计算属性`reverseMessage` .我们提供的函数将用作属性 `vm.reverseMessage` 的 getter
```js
console.log(vm.reversedMessage) // -> 'olleH'
vm.message = 'Goodbye'
console.log(vm.reversedMessage) // -> 'eybdooG'
```
* `vm.reverseMessage`的值始终取决于`vm.message`的值
* 可以像绑定普通属性一样, 在模板中绑定计算属性,Vue知道 `vm.reverseMessage` 依赖于 `vm.message`. 因此当`vm.message`发生改变时, 所有依赖于`vm.reverseMessage`的绑定也会更新. 以声明的方式创建了这种依赖关系: 计算属性的getter是没有副作用的, 使得它易于测试和推理.
### 计算缓存vm Methods
* 通过调用表达式中的 method 来达到同样的效果: 
```html
<p>Reversed message: "{{reversedMessage}}"</p>
```
```js
methods: {
    reversedMessage: function(){
        return this.message.split('').reverse().join('')
    }
}
```
* 我们可以将同一函数定义为一个method而不是一个计算属性.对于最终的结果,两种方式的确是相同的, 然而, 不同的是**计算属性是他们的依赖进行缓存的**. 计算属性只有在它的相关一拉发生改变时才会重新求值. 这就意味着只要`message`还没有发生改变, 多次访问`vm.reversedMessage`计算属性会立即的计算结果,而不必再次执行函数.
* 这也同样意味值下面的计算属性将不再更新, 因为`Date.now()`不是响应式依赖:
```js
computed: {
    now: function(){
        return Date.now()
    }
}
```
* **我理解的是他们没有进行任何的依赖, 当我们渲染到页面上之后, 没有地方可以改变, 又不是一个函数, 没有办法不断执行**
* 相比而言, 只要发生重新渲染, method 调用的函数总会重新执行.
* 为什么要使用缓存?
* 当我们需要性能开销很大的计算属性A, 它需要遍历一个极大的数组和做大量的计算.然后我们其他的属性可能依赖于A. 如果没有缓存, 我们将不可避免的多次执行A的getter! 每一次计算都会消耗性能.
### Computed属性vs Watched属性
* Vue 的确提供了一种更变通的方式来观察和响应Vue实例上的数据变动: watch 属性. 当有一些数据需要随着其他的数据变动而变动时, 很容易滥用 watch . 更好的做法是使用computed属性而不是命令式的watch回调.
```html
<div id="demo">{{fullName}}</div>
```
```js
var vm = new Vue({
    el: "#demo",
    data: {
        firstName: "Foo",
        lastName: "Bar",
        fullName: "Foo Bar"
    },
    watch: {
        firstName: function(val){
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function(val){
            this.fullName = this.firstName + ' ' + val
        }
    }
})
```
* 上面的代码是命令式的和重复式的.将它与computed属性的版本进行比较: 
```js
var vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed:{
        fullName: function(){
            return this.firstName + ' ' + this.lastName
        }
    }
})
```
### 计算setter
* 计算属性默认只有getter, 捕获在需要时你也可以提供一个setter: 
```js
// ...
computed: {
    fullName: {
        // getter
        get: function(){
            return this.fullName + ' ' + this.lastName
        },
        // setter
        set: function(){
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
        }
    }
}
// ...
```
* 现在运行 `vm.fullName = 'Johm Doe'` 时, setter 会被调用, vm.firstName 和 vm.lastName 也相应地会被更新.
## 观察 Wathcers
* 虽然计算属性在大多数情况下更合适, 但有时也需要一个自定义的 watcher . 这就是为什么 Vue 提供一个更通用的方法通过 `watch` 选项, 来响应数据的变化. 当你想要在数据变化响应时, 执行异步操作或开销较大的操作, 这是很有用的.
* 例如: 
```html
<div id="watch-example">
    <p>
    Ask a yes/no question:
    <input v-model="question">
    </p>
    <p>{{ answer }}</p>
</div>
```
```html
<!-- Since there is already a rich ecosystem of ajax libraries    -->
<!-- 直到现在ajax的生态系统已经变得非常完善 -->
<!-- and collections of general-purpose utility methods, Vue core -->
<!--   -->
<!-- is able to remain small by not reinventing them. This also   -->
<!-- gives you the freedom to just use what you're familiar with. -->
<script src="https://unpkg.com/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://unpkg.com/lodash@4.13.1/lodash.min.js"></script>
<script>
var watchExampleVM = new Vue({
    //挂载元
})

</script>
```






