# 总结:
*当样式中含有`-`的时候, 需要加个单引号, 以后的样式中 都带个单引号
# Class 与 Style 绑定
* 数据绑定一个常见的需求就是操作元素的class列表和它的内联样式.因为他们都是属性, 我们可以用`v-bind`处理他们: 只需要计算出:表达式最终的字符串. 不过, 字符串拼接麻烦又易错. 因此, 在`v-bind` 用于 `class` 和 `style`时, Vue.js专门增强了它. 表达式的结果类型除了字符串之外, 还可以是**对象或者数组**
## 绑定 HTML Class
### 对象语法
* 我们可以传给 `v-bind:class` 一个对象, 动态的切换class.
```html
<div v-bind:class"{ active: isActive }"></div>
```
* 上面的语法表示class `active` 的更新取决于数据属性 `isActive`是否为**真值**
* 我们也可以在对象中传入更多属性,用来动态切换多个class. 此外`v-bind:class`指令可以与普通的class属性共存
```html
<div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError}"></div>
```
* 如下 data:
```js
// ...
data: {
    isActive: true,
    hasError: false
}
// ...
```
* 渲染为:
```html
<div class="static active"></div>
```
* 当 `isActive` 或者 `hasError` 变化时, class列表将相应的更新. 例如: 如果`hasError`的值变为`true`, class列表将要变为`static active text-danger`.
* 你也可以直接在数据里绑定一个对象
```html
<div v-bind:class="classObject"></div>
```
```js
data: {
    classObject: {
        active: true,
        'text-danger': false
    }
}
```
* 渲染的结果和上面一样. 我们也可以在这里绑定返回对象的**计算属性**. 这是一个常用且非常强大的模式:
```html
<div v-bind:class="classObject"></div>
```
```js
data: {
    isActive: true,
    error: null
},
computed: {
    // 自定义了一个属性
    classObject: function(){
        // 这个自定义的属性, 将会返回一个对象
        return {
            // 如果 isActive 并且没有错误, 就显示出来
            active: this.isActive && !this.error,
            // 如果有错误, 并且错误类型是fatal 就显示出能够显示错误的类名
            'text-danger': this.error && this.error.type === 'fatal',
        }
    }
}
```
### 数组语法
* 我们可以把一个数组传给 `v-bind:class`, 以应用一个class列表: 
```html
<div v-bind:class="[activeClass, errorClass]"></div>
```
```js
// ...
data: {
    activeClass: "active",
    errorClass: "text-danger"
}
// ...
```
* 渲染为:
```html
<div class="active text-danger"></div>
```
* 如果你也想根据条件切换列表中的class, 可以用三元表达式
```html
<div v-bind:class=["isActive ? activeClass : ' ', errorClass "]></div>
```
* 此例始终添加的是`errClass`, 但是只有在 `isActive` 是ture时添加 `activeClass`.
* 不过,当有多个条件class时这样写有些繁琐, 可以在数组语法中使用对象语法:
```html
<div v-bind:class="[{active: isActive}, {errorClass: !isActive}]"></div>
```
### 用在组件上
* 当在一个定制的组件用到`class`属性的时候, 这些类将被添加到根元素上, 这个元素已经存在的类不会被覆盖.
* 例如: 如果你声明了这个组件:
```js
Vue.component('my-component', {
    template : '<p class="for bar">Hi</p>'
})
```
* 然后在使用它的时候添加一些 class:
```html
<my-component class="baz boo"></my-component>
```
* HTML 最终被渲染为
```html
<p class="for bar baz zoo"></p>
```
* 同样适用于绑定 HTML class:
```html
<my-component v-bind:class="{active: isActive}"></my-component>
```
* 当`isActive`为true的时候, HTML将被渲染成为:
```html
<p class="foo bar active"></p>
```
## 绑定内联样式
### 对象语法
* `v-bind:style`的对象语法十分直观, 看着就非常像CSS, 其实它就是一个javaScript对象,css属性名, 可以用驼峰或者短横分割区分:
```html
<div v-bind:style="{color: activeColor, fontSize: fontSize + 'px'}"></div>
```
```js
data :{
    activeColor: 'red',
    fontSize: 30
}
```
* 直接变成一个对象, 更加清晰
```js
data: {
    styleObject: {
        color: 'red',
        fontSize: 30
    }
}
```
* 同样的, 对象语法常常结合返回对象的计算机属性使用.
### 数组语法
`v-bind:style`的数组语法可以将多个样式对象应用到一个元素上:
```html
<div v-bind:style="[baseStyles, overdingStyles]"></div>
```
### 自动添加前缀
* 当`v-bind:style`使用需要添加特定前缀CSS属性时, 如 `transform`, vue.js会自动侦测并添加相应的前缀.
### 多重值
> 2.3.0 +
* 可以为`style`绑定中的属性提供一个包含多个值的数组, 常用于提过带多个前缀的值:
```html
<div :style="{display:["-webkit-box", "-ms-flexbox","flex"]}"></div>
```
