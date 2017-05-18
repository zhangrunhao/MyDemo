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
    * `.stop`
    * `.prevent`
    * `.capture`
    * `.self`
    * `.once`
```html

