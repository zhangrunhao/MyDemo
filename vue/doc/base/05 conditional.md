# 问题:
* 如果给template上面加了`v-if`那么就是控制了里面全部的元素的出现和隐藏, 这样的话, 是给每一个元素都加了一个`v-if`吗? 不一定, 可能是因为这是一个指令, 渲染的时候, 又不会出现.

# 条件渲染

## `v-if` 
* 在字符串模板中, 如 Handlebars, 我们得写这样一个条件块.
``` html
<!-- Handlebars -->
{{#if ok}}
<h1>Yes</h1>
{{/if}}
```
* 在Vue.js, 我们使用`v-if`指令实现同样的效果
```html
<h1 v-if="ok"></h1>
```
* 也可以用`v-else`添加一个"else"块: 
```html
<h1 v-if="ok"></h1>
<h1 v-else>No</h1>
```

### `<template>`中`v-if`条件组
* 因为 `v-if` 是一个指令, 需要它将添加到一个元素上. 但是如果我们想切换多个元素呢? 此时我们可以把一个`<template>`元素当做包装模块, 并在上面添加 `v-if` . 最终的渲染结果不会包含`<template>`元素.
```html
<template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</template>
```

### `v-else`
* 你可以使用 `v-else` 指令来标示 `v-if` 的"else块": 
```html
<div v-if="Math.random( ) > 0.5">
Now you  see me
</div>
<div v-else>
Now you don't
</div>
```
* `v-else` 元素必须紧跟在`v-if` 或者 `v-else-if`元素的后面, 否则它将不会被识别

### `v-else-if`
> 2.10 +
* `v-else-if`, 顾名思义, 充当`v-if`的"else-if块".可以链式地使用多次:
```html
<div v-if="type === 'A'"></div>
A
</div>
<div v-else-if="type === 'B'">
B
</div>
<div v-else-if="type === 'C'">
C
</div>
<div v-else>
    Not A/B/C
</div>
```

### 用`key`管理可复用的元素
* Vue会尽可能高效地渲染元素, 通常会复用已有元素而不是从头开始. 这么做, 除了使Vue变得非常快之外, 还有一些有用的好处. 例如, 如果允许在不同的登录方式之间切换:
```html
<template v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username">
</template>
<template v-else>
    <label>Email</label>
    <input placeholder="Enter your email address">
</template>
```
* 那么在上面的代码中切换`loginType`将不会清楚用户已经输入的内容. 因为两个模板使用了相同的元素, `<input>`不会被替换掉, 因为仅仅替换了`placeholder`.
* 这样也不总是符合实际需求的, 所以 Vue 为你提供了一种方式来声明"这两个元素是独立的, 千万不要复用他们". 只需添加一个具有唯一值的 `key` 属性即可: 
```html
<template v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
    <label>Email</label>
    <input placeholder="Enter your email address" key="email-input">
</template>
```
* 这样的话, 每次切换时, 输入框都将被重新渲染.
* 注意: '<label></label>'仍然被高效地利用, 因为他们没有添加key属性

## `v-show`
* 另一个用于根据条件展示元素的选项是 `v-show` 指令. 用法大致一样:
```html
<h1 v-show="ok">Hello</h1>
```
* 不同的是带有`v-show`的元素始终会被渲染并保留在DOM中. `v-show`是简单地切换元素的CSS属性`display`.
> 注意: `v-show`并不支持'<template></template>'语法, 也不支持`v-else`

## `v-if` vs `v-show`
* `v-if` 是真正的条件渲染, 因为它会确保在切换过程中条件内的事件监听器和子组件适当地被销毁和重建.
* 相比之下, `v-show` 就简单的多了--不管初始条件是什么, 元素总是会被渲染, 并且这是简单地基于CSS记性切换.
* 一般来说, `v-if`有更好的切换开销, 而`v-show`与更高的初始渲染开销. 因此, 如果需要非常频繁地切换, 则使用 `v-show` 较好, 如果在运行过程中不太可能改变, 则使用 `v-if`较好

## `v-if`与`v-for` 一起使用
* 当 v-if 与 v-for 一起使用时, v-for 具有比v-if更高的优先级.









