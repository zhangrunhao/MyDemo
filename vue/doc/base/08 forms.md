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
    <!-- 当被选中时, picked 为字符串'a' -->
    <input type="radio" v-model="picked" value="a">

    <!-- toggle 为true 或 false -->
    <input type="checked" v-model="toggle">

    <!-- 当选中时, selected 为字符串'abc' -->
    <select v-model="selected">
        <option value="abc">ABC</option>
    </select>
```

### 复选框
```html
<input type="checked" v-model="toggle" v-bind:true-value="a" v-bind:false-value="b">
```
```js
// 选中时
vm.toggle === vm.a
// 当没有被选中时
vm.toggle === vm.b
```

### 单选按钮
```html
<input type="radio" v-model="pick" v-bind:value="a">
```
```js
// 选中时
vm.pick === vm.a
```

### 选择列表设置
```html
<selected v-model="selected">
    <!-- 内联对象字面量 -->
    <option v-bind:value="{ number: 123 }">123</option>
</selected>
```
```js
typeof vm.selected // -> 'object'
vm.selected.number // -> 123
```

## 修饰符
### `.number`
* 在默认情况下, `v-model`在`input`事件中同步输入框的值与数据(除了上述IME部分), 但你可以添加一个修饰符`lazy`, 从而转变为在`change`事件中同步:
```html
<!-- 在 change 而不是 input 事件中更新 -->
<input v-model.lazy='msg'>
```

### `.number`
* 如果想自动将用户的输入值转为Number类型(如果原值的转换结果为 NaN 则返回原值), 可以添加一个修饰符`number`给`v-model`来处理输入值.
```html
<input v-model.number="age" type='number'>
* 这通常很有用, 因为在`type="number"`时HTML中输入的值也总是会返回字符串类型.
```

### `.trim`
* 如果要自动过滤用户输入的首尾空格, 可以添加`trim`修饰符到`v-model`上过滤输入:
```html
<input v-model.trim="msg">
```

## `v-model`与组件
* HTML内建的input类型有时不能满足你的需求, 还好, Vue的组件系统允许你创造一个具有自定义行为可复用的input类型, 这些input类型甚至可以和`v-model`一起使用!