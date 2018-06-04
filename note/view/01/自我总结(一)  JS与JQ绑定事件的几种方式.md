# 自我总结(一)

## JS绑定事件的三种方式

### 直接在DOM中进行绑定

```html
<button onclick="alert('success')" type="button" id="btn">测试按钮</button>
```

### DOM中绑定函数名

```html
  <button onclick="testFun" type="button" id="btn">测试按钮</button>
  <script>
    function testFun() {
      alert('sucess')
    }
  </script>
```

### 使用on+事件名绑定

```js
    var btn = document.getElementById('btn')
    btn.onclick = function () {
      alert('成功')
    }
```

### 使用事件监听绑定

* 此方法需要考虑兼容性.
* 非IE: element.addEventListener(type, handler, false)
* IE: element.attachEvent('on' + type, handler)

```js
  <script>
    var btn = document.getElementById('btn')
    if (btn.addEventListener) {
      btn.addEventListener('click', function () {
        alert('成功')
      }, false)
    } else {
      btn.attachEvent('onclick', function () {
        alert('成功')
      })
    }
  </script>
```

### 区别

* 前两种就不再说了, 感觉现在Vue框架事件绑定方式类似于第二种
* 事件监听的方式的优势在于, 可以为同一个事件绑定多个方法.
* 如果是第一个进行绑定多个方法的话, 会把函数替换掉, 没有办法绑定多次.

## jQuery的几种事件绑定方式

> * jQuery提供了四种绑定方式: bind、live、delegate、on
> * 对应接触事件的四种方式: unbind、die、undelegate、off

### `bind`

* 使用频率较高的一种, 作用是在选择到的元素上绑定特定事件类型的监听函数.

```js
element.bind(types, data, fn)
```

* 参数含义:
  * type: 事件类型, 如: click、change、mouseover
  * data: [可选],传入监听函数的参数, 通过event.data取到.
  * fn: 监听函数. 可以传入event对象, 但是这里的event对象是jq封装的对象, 与原生有区别

```js
// bind源码
bind: function( types, data, fn ) {
  return this.on( types, null, data, fn );
}
```

* bind的特点是吧监听器绑定到目标元素上, 但无法形成动态绑定, 需要再次bind
* live可以对目标元素形成动态绑定.
* 如果有再次添加的元素, 需要再次使用`bind`进行添加.

### `live`

* 并没有把事件绑定到自己身上, 而是绑定到了顶级的父元素document上.

```js
// 源码
live: function( types, data, fn ) {
  jQuery( this.context ).on( types, this.selector, data, fn );
  return this;
}
```

* 通常情况下, 这个context指的是`document`
* 但在这种情况下document会变得非常重.

### `delegate`

* 将事件绑定在就近的元素上

```js
delegate: function( selector, types, data, fn ) {
  return this.on( types, selector, data, fn );
}
```

* delegate() 方法为指定的元素（属于被选元素的子元素）添加一个或多个事件处理程序，并规定当这些事件发生时运行的函数。

```js
// button 是在div中的一个标签.
$("div").delegate("button","click",function(){
  $("p").slideToggle();
});
```

### `on`

* 其实所有的方法都是调用的on这个方法.

```js
on(type, [selector], [data], fn)
```

* 使用`on`绑定可以极大的节省效率.
* 使用on可以完成所有方法的绑定.
* on里面的代码量很大.
* 最后一个参数 one 没有搞明白.
