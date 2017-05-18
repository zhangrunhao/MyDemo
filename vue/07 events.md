# 事件处理器

## 监听事件
* 可以在 `v-on` 指令监听DOM事件来触发一些JavaScript代码.
```html
<div id="example-1">
    <button v-on:click="counter += 1">增加1</button>
    <p>这个按钮被点击了{{ counter }}次</p>
</div>
```
```js
var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
})
```

## 方法事件处理器
* 许多事件处理的逻辑都很复杂, 所以直接把JavaScript代码写在`v-on`指令中是不可行的.因此`v-on`可以接受一个定义的方法来调用
```html
<div id="example-2">
    <!-- greet 是在下面定义的方法 -->
    <button v-on:click="greet">Greet</button>
</div>
```
```js
var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function(event) {
            // this 在方法里指向Vue实例
            alert('Hello' + this.name + '!');
            // event 是原生的Dom元素
            alert(event.target.tagName);
        }
    }
})
```

## 内联处理器方法
* 除了直接绑定到一个方法, 也可以用内联JavaScript语句:
```html
    <div id="example-3">
        <button v-on:click="say('Hi')">Say hi</button>
        <button v-on:click="say('what')">say what</button>
    </div>
```
```js
        new Vue({
            el: "#example-3",
            methods: {
                say: function(message) {
                    alert(message)
                }
            }
        })
```
* 有时也需要在内联语句处理器中访问原生DOM事件. 可以用特殊变量`$event`把它传入的方法.
```html
 <button v-on:click="warn('Form cannot be submitter yet.', $event)">Submit</button>
```
```js
 warn: function(message, event) {
    // 现在我们可以访问原生事件对象
    if (event) event.preventDefault();
    alert(message)
}
```

## 事件修饰符
* 在事件处理程序中调用`event.preventDefault()`或`event.stopPropagation()`是非常常见的需求. 尽管我们在methods中轻松实现, 但更好的方法时: methods只有纯粹的数据逻辑, 而不是去处理DOM事件细节.
* 为了解决这个问题, vue.js为`v-on`提供了**事件修饰符**. 通过"."来表示的指令后缀来调用修饰符.
    * `.stop` // 阻止冒泡事件
    * `.prevent` // 阻止默认事件
    * `.capture` // 使用捕获模式
    * `.self` // 事件只在该元素本身时触发回调
    * `.once` // 事件只会触发一次
```html
    <!-- 阻止事件冒泡 -->
    <a v-on:click.stop="doThis"></a>
    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit"></form>
    <!-- 修饰符可以串联 -->
    <a v-on:click.stop.prevent="doThat"></a>
    <!-- 只有修饰符 -->
    <form v-on:submit.prevent></form>
    <!-- 添加事件监听器时使用事件捕获模式 -->
    <div v-on:click.self="doThat"></div>
    <!-- 点击事件只会被触发一次 -->
    <div v-on:click.once="doThis"></div>
```
* 不像其它只能对原生的DOM事件起作用的修饰符, `.once`修饰符还能被用到自定义的组件事件上.

## 按键修饰符
* 在监听键盘事件时, 我们经常需要检测常见的键值. Vue允许为`v-on`在监听键盘事件时添加按键修饰符: 
```html
<!-- 只有在keyCode是13时,调用 vm.submit() -->
<input v-on:keyup.13="submit">
```
* Vue为最常用的按键提供了别名
```html
    <input v-on:keyup.enter="submit">
    <input @keyup.enter="submit">
```
* 全局的按键别名:
    * `.enter`
    * `.tab`
    * `.delete`
    * `.esc`
    * `.spack`
    * `.up`
    * `.down`
    * `.left`
    * `.right`
* 可以通过全局 config.keyCode对象自定义按键修饰符别名:
```js
Vue.config.keyCodes.f1 = 112
```

## 按键修饰符
* 可以用如下修饰符开启鼠标或键盘事件监听, 使在按键按下时发生响应
    * `.ctrl`
    * `.alt`
    * `.shift`
    * `.meta`
```html
<!-- Alt + C -->
<input @keyup.alt.67="clear">
<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```

## 为什么在HTML中监听事件?
> 这种j监听事件的方式违背了关注点分离传统理念. 不必担心, 因为所有的Vue.js事件处理方法和表达式都严格绑定在当前视图的ViewModel上, 它不会导致任何维护上的困难. 实际上, 使用`v-on`有几个好处:
1. 扫一眼HTML模板便能轻松定位在JavaScript代码里对应的方法.
2. 无需再JavaScript里手动绑定事件, 你的ViewModel代码可以使非常纯粹的逻辑, 和DOM完全解耦
3. 当一个ViewModel被销毁时, 所有的事件处理器都会被自动删除



