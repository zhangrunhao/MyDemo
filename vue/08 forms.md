# 表单控件绑定

## 基础用法
* 你可以使用`v-model`指令在表单元素上创建双向数据绑定. 它会根据控件类型自动选取正确的方法来更新元素. 但`v-model`本质上不过是语法糖, 它负责监听用户的输入事件以更新数据, 并处理一些极端的例子.
> `v-model` 并不关心表单控件初始化所生成的值. 因为它会选择Vue实例数据来作为具体的值.
> 对应要求IME的语言, 会发现`v-model`不会再IME构成中得到更新.如果你也想实现更新, 需要使用

### 文本
```html
        <input type="" name="" value="" v-model="message">
        <p>message is : {{message}}</p>
```

### 多行文本
```html
        <span>Multiline message is : </span>
        <p style="white-space: pre">{{message}}</p>
        <br>
        <textarea v-model="message"></textarea>
```
> 在文本域插值(<textarea></textarea>)并不会生效, 应用`v-model`来代替

### 复选框
```html
        <input type="checkbox" id="checkbox" v-model="checked" name="" value="">
        <label for="checkbox">{{ checked }}</label>
```
```js
// ...
  data: {
    checked: false
}
// ...
```
* 多个勾选框, 绑定到同一个数组:
```html
        <input type="checkbox" id="mike" value="Mike" v-model="CheckedNames">
        <label for="Mike">Mike</label>
        <input type="checkbox" id="john" value="John" v-model="CheckedNames">
        <label for="john">John</label>
        <input type="checkbox" id="jack" value="Jack" v-model="CheckedNames">
        <label for="Jack">Jack</label>
        <br>
        <span>Checked names: {{ CheckedNames }}</span>
```
```js
// ...
data: {   
    CheckedNames: []
}
// ...
```

### 单选按钮
```html
<div id="example-4" class="demo">
    <input type="radio" value="One" v-model="picked">
    <label>One</label>
    <input type="radio" value="Two" v-model="picked">
    <label>Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
</div>
```
```js
new Vue({
    el: '#example-4',
    data: {
        picked: ''
    }
})
```

### 选择列表
* 单选列表
```html
    <div id="example-5">
        <select v-model="selected">
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>
    </div>
```
```js
        new Vue({
            el: "#example-5",
            data: {
                selected: null
            }
        })
```
* 多选列表(绑定到一个数组) :
```html
    <div id="example-6" class="demo">
        <select v-model="selected" multiple  style="width: 50px">
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <br>
        <span>Selected: {{ selected }}</span>
    </div>
```
```js
    new Vue({
        el: "#example-6",
        data: {
            selected: []
        }
    })
```
* 动态选项, 用`v-for`渲染:
```html
<div id="vm">
    <select v-model="selected">
        <option v-for="option in options" v-bind:value="option.vlaue">
            {{ option.text }}
        </option>
    </select>
    <span>Selected: {{ selected }}</span>
</div>
```
```js
    new Vue({
        el: "#vm",
        data: {
            selected: 'A',
            options: [
                { text: 'One', vlaue: 'A' },
                { text: 'Two', vlaue: 'B' },
                { text: 'Three', vlaue: 'C' }
            ]
        }
    })
```

## 绑定value
* 对于单选按钮, 勾选框及选择列表选项, `v-model`绑定的value通常是静态字符串,(勾选框是逻辑值)
```html
