## 问题总结 HTML(二) 关于textarea的问题.

## input和textarea的区别

### `<input type="text">`标签
* text标签是单行文本框, 不会换行
* 可以确定其他的属性,例如`email`, 在移动端弹出键盘的时候, 会有很大的不同.
* 通过size属性执行显示字符的长度, **注意: 当使用css限定了宽高, 那么size属性就不起作用了.**
* `value`属性指定初始值, `Maxlength`属性指定文本框可以输入的最长长度.
* 可以通过width和height设置宽高, 但是不会增加行数.
```html
<input type="text" style="width: 200px;height: 100px" value="我是设置过宽高的text">
```
* 文本依然只有一行, 并且居中显示.

### `<textarea>`标签
* `<textarea>`是多行文本输入框, 文本区中可容纳无限数量的文本, 其中的文本的默认字体是等宽字体(通常是Courier), 可以通过cols和rows属性来规定textarea的尺寸, 不过更好的办法是使用CSS的height和width属性.
```html
<!-- 使用等宽字体 -->
<textarea row="5" cols="5">我是通过cols和rows定的大小, 我是cols是20, rows是10</textarea>
<!-- 使用CSS的宽高 -->
<textarea style="width: 200px; height: 100px">我是通过width和height定的大小，我的width是200px，heigh是100px</textarea>
```

### 简而言之, 他们最大的却区别就是text是单行文本, textarea是多行文本.

## 用`div`模拟一个`textarea`的实现


### `contenteditable`属性介绍
* `contenteditable`属性规定是否可编辑元素的内容
* `contenteditable`属性是HTML5中的新属性
```html
  <div contenteditable="true" style="border:1px solid #dddddd;width:360px;min-height:20px;_height:20px;outline:0px;"></div>
```

#### `contenteditable=""`
* 不写好像没有意义, 估计是false吧, 一个默认值.

#### `contenteditable="events"`
* 不知道是干什么的..

#### `contenteditable="caret"`
* 也不知道是干什么的.

#### `contenteditable="plaintext-only"`
* 只能输入纯文本. 但其他浏览器好像可以输入富文本

#### `contenteditable="true"`
* 可以开启元素编辑.

#### `contenteditable="false"`
* 关闭元素编辑.

### CSS控制法 `user-modify`
> CSS中有属性可以让部分元素可读写(部分属性只有webkit内核浏览器才支持)

#### `user-modify: read-only;`
* 只读属性, 也就是普通元素的默认状态.

#### `user-modify: write-only;`
* 没有浏览器可以支持.

#### `user-modify: read-write;`
* 可以让元素表现得像文本域一样, 可以在`focus`以及输入内容. 这个输入富文本.

#### `user-modify: read-write-plaintext-only;`
* 让元素既可以编辑, 也可以输入纯文本, 表现得就跟`textarea`文本域一样. **只有webkit内核浏览器才支持**, 因此可以使用`-webkit-user-modify: read-write-plaintext-only`

> 注意: 我们可以在移动端使用, 以及, 只需要兼顾`webkit`内容的桌面网页项目
