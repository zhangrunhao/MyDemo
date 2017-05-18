# 列表渲染

## `v-for`
* 我们用 `v-for` 指令根据一组数组的选项列表进行渲染. `v-for`指令需要以`item in items`形式的特殊语法, `items` 是源数据数组并且`item`是数组元素迭代的别名

### 基本用法
```html
<ul id="example-1">
    <li v-for="item in items"></li>
</ul>
```
```js
var example = new Vue({
    el: "#example-1",
    data: {
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
})
```
* 在`v-for`块中, 我们拥有对父作用域属性的完全访问权限. `v-for`还支持一个可选的第二参数为当前项的索引.
```html
<ul>
    <li v-for="(item, index) in items">
        {{parentMessage}} - {{index}} - {{item.message}}
    </li>
</ul>
```
```js
var example2 = new Vue({
    el: "#example-2",
    data: {
        parentMessage: "Parent",
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
})
```
* 也可以使用`of`替代`in`作为分隔符, 因为它是最接近JavaScript迭代器的语法:
```html
<div v-for="item of items"></div>
```

### Template-for
* 如同`v-if`模板, 你也可以用带有`v-for`的`<template></template>`标签来渲染多个元素块
```html
<ul>
    <template v-for="item in items">
        <li> {{ item.msg }} </li>
        <li class="divider"></li>
    </template>
</ul>
```

### 对象迭代 v-for
* 使用`v-for`通过一个对象的属性进行迭代
```html
<ul id="repeat-object" class="demo">
    <li v-for="value in object">
        {{ value }}
    </li>
</ul>
```
```js
new Vue({
    el: "#repeat-object",
    data: {
        object: {
            FirstName: 'John',
            LastName: 'Doe',
            Age: 30
        }
    }
})
```
* 也可以提供第二个的参数为键名:
```html
<div v-for="(value, key) in object">
    {{index}} : {{key}}
</div>
```
> 在遍历对象时, 是按 Object.keys()的结果遍历, 但是不能保证它的结果在不同的 JavaScript 引擎下是一致的.

### 整数迭代v-for
* `v-for`可以去整数, 在这种情况下, 将多次重复模板
```html
<div>
    <span v-for="n in 10">{{ n }}</span>
</div>
```

### 组件和 v-for
* 在自定义组件里, 可以像普通元素一样使用 `v-for`
```html
<my-component v-for="item in items"></my-component>
```
* 然而他并不能自动传递数据到组件里, 因为组件有自己独立的作用域. 为了传递迭代数据到组件里, 我们要用 `props` :
```html
<my-component 
     v-for="(item, index) in items"
     v-bind:item="item"
     v-bind:index="index"
></my-component>
```
* 不自动注入 `item` 到组件里的原因是, 因为这使得组件会紧密耦合到 `v-for` 如何运作.
* 在一些情况下, 明确数据的来源可以使组件可复用.
* 下面是一个简单的 todo list 完整的例子:
```html
<div id="todo-list-example">
    <!-- 在实例中添加一个属性,'newTodoText 松开回车执行事件, .enter是一个修饰符表示离开回车键' -->
    <input v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo">
    <ul>
        <!-- 因为ul中只能包含li, 不是是todo-item标签, 所以要使用is属性 -->
        <!-- v-for 表示循环这个组件 -->
        <!-- v-bind 表示向组件中传入一个值, 对应了props中的title, 那么props中的title, 就是todos中的todo.-->
        <!-- v-on 表示传入一个方法, remove. -->
        <!-- 原来向组件中传递值和方法的时候, 是通过v-bind 和 v-on传递的. -->
        <!-- 这里的index在循环的时候, 已经被注入到这个组件中了 -->
        <li is="todo-item" v-for="(todo, index) in todos" v-bind:title="todo" v-on:remove="todos.splice(index, 1)"></li>
    </ul>
</div>
```
```js
// 这是注册组件的方式
//  'todo-item 是组件名称'
// 后面的是一个选项
Vue.component('todo-item', {
    // 如果直接写 '' 的话 就会把两块分开, 添加 转义符 \ 是为了表示这是一个真正的 ' 需要渲染到页面上的.
    // $用来传递上面 v-on 的方法, 组件里面用的remove, 这个方法就会执行 template中的 v-on 方法.
    template: '<li>{{ title }}<button v-on:click="$emit(\'remove\')">X</button></li>',
    props: ['title']
})

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            'Do the dishes',
            'Take out the trash',
            'Mow the lawn'
        ]
    },
    methods: {
        addNewTodo: function() {
            this.todos.push(this.newTodoText)
            this.newTodoText = ''
        }
    }
})
```

### `v-for` with `v-if`
* 当它们处于同一节点, `v-for` 的优先级比 `v-if` 更高, 这意味着 `v-if` 将分别重复运行于每个 `v-if` 循环中. 当你想为仅有的一些项渲染节点时, 这种优先级的机制会十分有用, 如下:
```html
<li v-for="todo in todos" v-if="!todo.isComplete">
    {{ todo }}
</li>
```
* 上面的代码只传递了未complate的todos.
* 如果你的目的是有条件地跳过循环的执行, 那么将`v-if`置于包装元素(或者`<template></template>`)上,如:
```html
<ul v-if="isComplete">
    <li v-for="todo in todos">
        {{ todo }}
    </li>
</ul>
```

> 有什么区别?? 没有体会出两者的区别, 完全没有, 都能够达到目的进行渲染.

## key
* 如果Vue.js用 `v-for` 正在更新已渲染的元素列表时, 它就默认用"就地复用"策略. 如果数据项的顺序被改变, Vue将不再是移动DOM元素来匹配数据项的顺序, 而是简单复用此处每个元素, 并且确保它在特定索引下显示已被渲染过的每个元素.
* 这个默认的模式是有效, 但是只用于不依赖子组件或临时DOM状态(例如: 表单默认输入值 )的列表渲染输出.
* 为了给Vue一个提示, 一遍它能追踪每个节点的身份, 从而重用和重新排序现有元素, 你需要为每项提供一个唯一`key`属性, 理想的`key`值是每项都有唯一id. 但他的工作方式类似于一个属性, 需要使用`v-bind`来绑定动态值.
```html
<div v-for="item in items" :key="item.id">
    <!-- 内容 -->
</div>
```
* 建议尽可能使用`v-for`来提供`key`, 除非迭代DOM内容足够简单, 或者希望依赖于默认行为来获得性能上的提升
* 因为这是Vue识别节点的一个通用机制, `key`并不特别与`v-for`关联, key还具有其他用途.

## 数据更新检测

### 变异方法
* Vue包含一组观察数组的变异方法,所以他们也将会触发视图更新.如下:
    * `push()`
    * `pop()`
    * `shift()`
    * `unshift()`
    * `splice()`
    * `sort()`
    * `reverse()`
* 可以使用前面的例子, 执行一个方法, 来观察结果.

### 重塑数组
* 变异方法, 会改变被这些方法调用的原始数组. 相比之下, 也有非变异方法, 例如 `filter()`, `concat()`, `slice()` 这些不会改变原始数组, 但是总会返回一个新数组. 当使用非变异方法时, 可以用新数组替换就数组:
```js
example1.items = example1.items.filter(function (item) {
    // 只返回符合正则表达式的
    return item.message.match(/Foo/)
})
```
* 但是Vue非常智能地并没有替换所有的DOM元素.

### 注意事项
* 由于JavaScript的限制, Vue不能检测以下变动的数组:
    * 当利用索引值直接设置一个项时,例如 `vm.items[indexOfItem] = newValue`
    * 当修改数组的长度时, 例如`vm.items.length = newLength`
* 解决方法
    * 第一类问题
    ```js
    // Vue.set
    Vue.set(example.items.indexOfItem, newValue)
    // Array.prototype.splice
    example.item.splice(indexOfItem, 1, newVlaue)
    ```
    * 第二类问题
    ```js
    // splice方法
    example.items.splice(newLength)
    ```

## 显示过滤/排序结果
* 有时想要显示一个数组的过滤或排序副本, 而不实际改变或重置原始数据.在这种特殊情况下, 可以创建返回过滤或排序数组的计算属性.
``` html
<li v-for="n in evenNumbers">{{ n }}</li>
```
```js
data: {
    numbers: [1, 2, 3, 4, 5]
},
computed: {
    // 计算属性
    evenNumbers: function() {
        // 返回一个数组,
        // 这个数组是numbers 执行过filter函数之后的数组
        // 在filter函数中 只有每一项执行过这个函数后返回true的值,才会被纳入新的数组
        return this.numbers.filter(function(number) {
            return number % 2 === 0
        })
    }
}
```
* 如果计算属性并不适用(例如: 在嵌套`v-for`循环中), 应该使用method方法
```html
<li v-for="n in even(numbers)"></li>
```
```js
data: {
    numbers: [1,2,3,4,5]
},
methods: {
    even: function(numbers){
        return numbers.filter(function(number){
            return number % 2 === 0
        })
    }
}
```