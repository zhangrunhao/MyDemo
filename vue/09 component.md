# 组件

## 什么是组件?
* 组件是Vue.js最强大的功能之一.
* 组件可以扩展HTML元素, 封装可重用的代码. 
* 在较高层面上: 组件是自动以元素, Vue.js的编译器为它添加特殊功能.
* 在某些情况下, 组件也可以是原生HTML元素的形式, 以is特性扩展.
* is特性: 就是某些元素中只能包含特定元素的时候, 有需要用组件来顶替这个特殊组件, 就需要使用到is特性.

## 使用组件

### 注册
* 我们可以创建一个Vue实例.
```js
new Vue({
    el: '#some-element',
    // 选项
})
```
* 要注册一个全局组件, 你可以使用`Vue.component(tagName, options)`. 例如: 
```js
Vue.component('my-component', {
    // 选项
})
```
> 对于自定义标签名, Vue.js不强制要求遵循W3C规则(小写, 并且包含一个短杠), 尽管遵循这个规则比较好.
* 组件在注册之后, 便可以在父实例的模块中自定义元素`<my-component></my-component>`的形式使用. 要确保在初始化根实例**之前**注册了组件: 
```html
    <div id="example">
        <my-component></my-component>
    </div>
```
```js
        // 注册
        Vue.component('my-component',{
            template:'<div>A custom component !</div>'
        })

        // 创建根实例
        new Vue({
            el: '#example'
        })
```

### 局部注册
* 不必在全局注册每个组件. 通过使用组件实例选项注册, 可以使组件仅在另一个实例/组件的作用域中可用
```js
var Child = {
    template: '<div>A custon component</div>'
}
new Vue({
    // ...
    components: {
        // <my-component>将只在父模板中使用
        'my-component': Child
    }
})
```
* 这种封装也使用与其他可注册的Vue功能, 如指令

### DOM模板解析
* 当使用DOM作为模板时,(例如: 将`el`选项挂载到一个已存在的元素上), 你会收到HTML的一些限制, 因为Vue只有在浏览器解析和标准化HTML之后才能获取模板内容. 尤其注意: `<ul></ul>`, `<ol></ol>`, `<table></table>`, `<select></select>`限制了能被它包裹的元素, 而像一些`<option></option>` 这样的元素只能出现在某些元素的内部
* 在自定义组件中使用这些受限制的元素, 会导致一些问题, 例如:
```html
<table>
    <my-row></my-row>
</table>
```
* 自定义组件`<my-row></my-row>`被认为是无效的内容, 因此在渲染的时候会导致错误. 变通的方案, 是使用`is`属性:
```html
<table>
    <tr is="my-row"></tr>
</table>
```
* 应当注意, 如果您使用来自一下来源之一的字符串模板, 这些限制将不再使用:
    * `<script type="text/x-template"></script>`
    * JavaScript内联模板字符串
    * `.vue`组件
* 因此, 有必要的话请使用字符串模板

### `data`必须是函数
* 通过Vue构造器传入的各种选项大多都可以在组件中使用, `data`是一个例外, 它必须是函数. 
```js
Vue.component('my-component', {
    template: '<span>{{ message }}</span>',
    data: {
        message: 'hello'
    }
})
```
* 那么Vue会停止, 并在控制台发出警告, 告诉你在组件中 `data` 必须是一个函数. 理解这种规则的存在意义很有帮助, 让我们假设用如下的方法来绕开Vue的警告:
```html
<div id="example-2">
    <simple-counter></simple-counter>
    <simple-counter></simple-counter>
    <simple-counter></simple-counter>
</div>
```
```js
var data = { counter: 0 }
Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1 ">{{ counter }}</button>',
    // 在技术上 data 的确是一个函数了, 因此 Vue 并不会警告, 
    // 但是我们返回给每个小组的实例却都引用了同一个data对象
    data: function(){
        return data
    }
})
new Vue({
    el: '#example-2'
})
```
* 由于这三个组件共享了一个data, 因此就增加一个counter会影响到所有的组件. 我们通过为每个对象返回全新的data对象来解决这个问题:
```js
data: function(){
    return {
        counter: 0
    }
}
```
* 现在每个counter都有它自己内部状态了.

### 构成组件
* 组件意味着协同工作, 通常父子组件会是这样的关系: 组件A在它的模板中使用了组件B. 它们之间必然需要相互通信: 父组件要给子组件传递数据, 子组件需要将它内部发生的事情告知给父组件. 然而, 在一个良好定义的接口中尽可能将父子组件解耦是很重要的. 这保证了每个组件可以在相对隔离的环境下工作, 也大幅度的提高了组件的可维护性和可重用性.
* 在Vue.js中, 父子组件的关系可以总结为 props down, events up. 父组件通过props向下传递数据, 子组件通过 events 给父组件发送消息. 
* ![Vue-父子组件数据的传递关系](./pic/Vue-父子组件之间的数据传递.png)

### 使用Props传递数据
* 组件实例的作用域是孤立的. 这意味着不能(也不应该)在子组件的模板内直接引入父组件的数据. 要让子组件使用父组件的数据, 我们需要通过子组件的props选项
* 子组件要显式地使用 `props`**选项**声明它期待获得的数据:
```js
Vue.component('child', {
    // 声明 props
    props: ['message'],
    // 就像 data 一样, props 可以用在模板内
    // 同样也可以在 vm 实例中像 `this.message` 这样使用
    template: `<span>{{ message }}</span>`
})
```
```html
<child message="hello!"></child>
```

### camlCase 与 kebab-case
* HTML特性是不区分大小写的. 所以, 当使用的不是字符串模板, camelCased(驼峰式)命名的prop需要转换为相应的 kebab-case命名:
```js
Vue.component('child', {
    // camlCase in JavaScript
    props: ['myMessage'],
    template: '<span>{{myMessage}}</span>'
})
```
```html
<!-- kebab-case in html -->
<child my-message="hello!"></child>
```
* 如果使用的字符串模板, 则没有这些限制.

### 动态 Prop
* 在模板中, 要动态地绑定父组件的数据到子模板的props, 与绑定到任何普通的HTML特性类似, 就是用`v-bind`. 每当父组件的数据变化时, 该变化也会传到给子组件.
```html
<div>
    <input v-model="parentMsg">
    <br>
    <child :my-message="parentMsg"></child>
</div>
```

### 字面量语法 与 动态语法
* 常犯错误: 使用字面量语法传递数值:
```html
<!-- 传递了一个字符串 '1' -->
<comp some-prop='1'></comp>
```
* 因为它是一个字面prop, 它的值是字符串"1"而不是number. 如果想传递一个实际的number, 需要使用`v-bind`, 从而让它被当做JavaScript表达式计算: 
```html
<!-- 传递实际的number -->
<comp v-bind:som-prop="1"></comp>
```

### 单项数据流
* prop 是单项绑定的: 当父组件的属性变化时, 将传导给子组件, 但是不会反过来. 这是为了防止子组件无意修改了父组件的状态 -- 这会让应用的数据难以理解.
* 另外, 每次父组件更新时, 子组件的所有prop都会更新为最新值. 这意味着**不应该**在子组件内改变prop. 如果这么做了, Vue会给出警告.
* 会修改prop中数据的两种原因: 
    * prop作为初始值传入后, 子组件想把它当做局部数据来使用.
    * prop最为初始值传入后, 由子组件处理成其他数据输出.
* 解决办法: 
    1. 定义一个局部变量, 并用prop的值初始化它.
    ```js
    props: ['initalCounter'],
    data: function(){
        return  {
            counter: this.initalCounter
        }
    }
    ```
    2. 定义一个计算属性, 处理prop的值并返回
    ```js
    props: ['size'],
    computed: {
        normalizedSize: function(){
            return this.size.trim().toLowerCase()
        }
    }
    ```
> 在JavaScript中对象和数组是引用类型, 指向同一个内存空间, 如果prop是一个对象或数组, 在子组件内部改变它**会影响**父组件的状态.

### Prop验证
* 我们可以为组件的props指定验证规格. 如果传入的数据不符合要求, Vue会发出警告. 当组件给其他人使用时, 这很有用.
* 要指定验证规格, 需要用对象的形式, 而不能用字符串数组:
```js
Vue.component('example', {
    props: {
        // 基础类型检测('null'意思是任何类型都可以)
        propA: 'Number',
        // 多种类型
        propB: [String, Number],
        // 必传且是字符串
        propC: {
            type: String,
            required: true
        },
        // 数字, 有默认值
        propD: {
            type: Number,
            default: 100
        },
        // 数组/对象的默认值应当由一个工厂函数返回
        propE: {
            type: Object,
            defalut: function(){
                return {message: 'hello'}
            }
        },
        // 自定义验证函数
        propF: {
            validator: function(value){
                return value > 10
            }
        }
    }
})
```
* `type`可以是原生构成器:
    * String
    * Number
    * Boolean
    * Function
    * Object
    * Array
* `type`也可以是一个自定义构造函数, 使用`instanceof`检测
* 当prop验证失败, Vue会抛出警告(开发版)

## 自定义事件
* 子组件通过自定义事件将数据传递出去.

### 使用`v-on`绑定自定义事件
* 每个Vue实例都实现了事件接口, 即: 
    * 使用`$on(eventNmae)`监听事件.
    * 使用`$emit(eventName)`触发事件.
> Vue的事件系统分离自浏览器的EventTarget API . 尽管它们的运行类似, 但是`$on`和`$emit`**不是**`addEventListener`和`dispatchEvent`的别名.
* 另外, 父组件可以在使用子组件的地方直接用`v-on`来监听子组件触发的事件.
> 不能用`$on`监听子组件抛出的事件, 而必须在模板里直接使用`v-on`绑定, 例如:
```html
    <div id="counter-event-example">
        <p>{{ total }}</p>
        <button-counter v-on:increment="incrementTotal"></button-counter>
        <button-counter v-on:increment="incrementTotal"></button-counter>
    </div>
```
```js
Vue.component('button-counter', {
    // 组件中的模板
    template: '<button v-on:click="increment">{{ counter }}</button>',
    // 组件中的数据
    data: function () { 
        return {
            counter: 0
        }
    },
    // 组件中的方法
    methods: {
        increment:function (){ 
            // 这个组件中的 counter 自增1
            this.counter += 1
            // 执行父元素中的 v-on:increment 所对应的方法.
            this.$emit('increment')
        }
    }
})

new Vue({
    el: '#counter-event-example',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function () {
            this.total += 1;
        }
    }
})
```

* 在本例中, 子组件已经和它外部完全解耦了. 它所做的只是报告自己的内容事件, 置于父组件是否关心则与之无关. 这一点很重要.

* **给组件绑定原生事件**

*　有时候，会在某个组件的根元素上监听一个原生事件. 可以使用`.native`修饰`v-on`. 例如: 
```html
<my-component v-on:'click'.native="doSomeThing"></my-component>
```

### `.sync`修饰符
* 在一些情况下, 我们可能会需要对一个prop进行, 双向绑定. 事实上, 这正是Vue.1.x中的 `.sync`修饰符做提供的功能. 当一个子组件改变了一个prop时, 这个变化也会同步到父组件中所绑定的值. 这很方便, 但是会导致问题, 破坏了单项数据流的假定. 完全不知道何时改变了父组件的状态. 这在debug复杂结构时, 有很高的成本.
* 但是在2.0版本中发现, 在开发可复用的组件库时, 我们需要做的只是让子组件改变父组件状态的代码更容易被区分.
* 这次作为编译时的一个语法糖, 会被扩展为一个自动更新父组件属性的`v-on`监听器
```html
<comp :foo.sync="bar"></comp>
```
* 会被扩展为: 
```html
<comp :foo="bar" @update:foo="val => bar = val"></comp>
```
* 当子组件需要更新`foo`的值时, 它需要显式地触发一个更新事件: 
```js
this.$emit('update:foo', newValue)
```

### 使用自定义事件的表单输入组件
* 自定义事件可以用来创建自定义的表单输入组件, 使用`v-model`来进行双向数据绑定.
```html
<input v-model="something">
```
* 这不过是以下实例的语法糖:
```html
<input v-bind:value="something" v-on:input=""something = $event.target.value">
```
* 所以在组件中使用时, 它相当于
```html
<custon-input v-bind:value="something" v-on:input="somethig = arguement[0]"></custon-input>
```
* 所以要让组件的`v-model`生效, 它必须:
    * 接受一个 `value` 属性
    * 在有新的value时触发`input`事件







