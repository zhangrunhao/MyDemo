## 问题总结 HTML(一) HTML5新增了哪些内容或API, 使用过哪些?

## 新CSS的选择器

### document.querySelector("selector")
* 根据css选择器返回**第一个**匹配的元素, 如果没有匹配返回null
* querySelector也支持多个选择器
* querySelector非常方便, 类似jQuery选择器, 可以在移动端使用
```html
<body>
  <ul class="header">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
  <script>
    var selector = document.querySelector('li');
    console.log(selector); // <li>1</li>
    console.log(selector.innerHTML) // 1
    var selector = document.querySelector('.header li');
    console.log(selector.innerHTML); //1
  </script>
</body>
```

### document.querySelectorAll()
* querySelectorAll和querySelector作用一样的, 只是querySelectorAll返回的是元素数组, querySelector返回的是一个元素. 如果没有匹配到内容返回的是一个空数组
```js
  var selector = document.querySelectorAll('.header li');
  console.log(selector) // (4) [li, li, li, li]
```

### document.getElementByClassName("selector")
* getElementByClassName是一个类选择器, 返回值是一个元素数组
```js
  var selector = document.getElementsByClassName('header')
  console.log(selector) // [ul.header]
```

## classList属性
* 判断IE10+以及其他现代浏览器, 使用 `document.body.classList` 是否为 `undefined`
```html
<body>
  <ul class="header class2 class3">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
  <script>
    var ul = document.getElementsByClassName('header')[0]
    console.log(ul.classList) // ["header", "class2", "class3", value: "header class2 class3"]
  </script>
</body>
```
> 对外直接暴露的API有

### `length` 
* 表示元素的个数, 是一个只读属性

### `item()`
* 支持一个参数, 为类名的索引, 返回对应的类名,
```js
console.log(ul.classList.item(0)) // header
```
* 如果超过范围, 返回`null`

### `add()`
* 支持一个类名字符串参数. 表示往类名列表中新增一个类名; 如果之前类名存在, 则添加忽略.
```js
console.log(ul.classList) // ["header", "class2", "class3", "new", value: "header class2 class3 new"]
```
* 此函数方法执行的返回值`undefined`, 因此, `classList`的`add()`方法是无法级联的. 下面`remove()`方法也是如此

### `remove()`
* 支持一个类名字符串参数. 表示往类名列表中移除该类名. 
```js
ul.classList.remove('header')
console.log(ul.classList) // ["class2", "class3", "new", value: "class2 class3 new"]
```

### `toggle()`
* 支持传递一个类名字符串参数. 没有就加上, 有就删除. 如果类名列表有次类名, 移除, 并返回`fasle`. 有就添加, 返回`true`

### `contains()`
* 支持一个类名字符参数. 表示往类名列表中是否包含该类名. 有点对应jq中的`hasClass`方法, 注意, 这是是`contains`注意这个`s`, 返回值很容易懂. 如果包含, 则返回`true`, 如果不包含, 则返回`false`. 例如:
```js
console.log(ul.classList.contains('header')) //false, 因为已经被删除
```

### 总结
* 有了classList, 除非要全部删除所有的类名, 或者完全重写元素的class属性, 否则用不到calssName属性了, 而且还附加了很多实用的方法.
* 支持的浏览器为 Firefox 3.6+, Chrome .

## HTML5之全屏

### 概述
* 为了方便用户阅读或者
观看视频, 很多网站实现了全屏功能.
* FullScrenn API是一个新的JavaScript API, 简单而强大. FullScreen让我们可以通过编程的方式来向用户全屏显示, 如果交互完成, 随时可以退出全屏

### FullScreen API 接口
* 属性
  * 属性1: fullscreenElement 该属性返回当前处于全屏模式的DOM元素
  * 属性2: fullscreenEnabled 该属性返回当前 document 是否进入了可以请求全屏模式的状态.
* 方法
  * 方法1: requestFullscreen()请求进入全屏模式
  * 方法2: exitFullscreen()退出全屏模式
* 事件
  * 事件1: fullscreenchange 进入/退出全屏模式切换时会触发
  * 事件2: fullscreenerror 进入/退出全屏模式失败时会触发
* **每个浏览器对FullScreen接口实现的方式不一样, 主要是因为浏览器内核的差别, 所以在使用时要考虑浏览器的兼容性问题**

### 进入全屏
```js
function launchFullScreen(element) {
  var element = element || document.documentElement;
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
```
* 有的浏览器在进入全屏的时候会提示用户是否进入全屏, 如果用户取消则全屏失效. 同意浏览器的工具栏以及浏览其他组件都会隐藏起来, 是document的搞和宽都横跨整个屏幕.
* 一般浏览器在进入全屏的时候提供用户按`esc`键可以退出全屏, 即使这样有时候我们还是需要给用户提供退出全屏的操作.

### 退出全屏
```js
// 退出 fullscreen
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozExitFullScreen) {
    document.mozExitFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
```
* 退出全屏的代码很简单, 只需要考虑浏览器的前缀就可以了
* 请注意: exitFullScreen只能通过document对象调用 - 而不是使用普通的DOM element

### 检查全屏状态变化
* 有的时候为了用户友好体验, 在进入全屏或者退出全屏的时候, 需要给用户提示, 这个时候我们可以使用FullScreen的
```js
document.addEventListener("fullscreenchange", function () {
  document.getElementById('showState').innerHTML = (document.fullscreen) ? "" : "not ";
}, false);

document.addEventListener("mozfullscreenchange", function () {
  document.getElementById('showState').innerHTML = (document.mozFullScreen) ? "" : "not ";
}, false);

document.addEventListener("webkitfullscreenchange", function () {
  document.getElementById('showState').innerHTML = (document.webkitIsFullScreen) ? "" : "not ";
}, false);
```

### css的全屏样式 
* 在css中, 我们有几个伪类来给全屏设置样式, 一般是full-screen这个伪类, 然后会自动在全屏的时候生效
```css
html:-moz-full-screen {
  background: red;
}

html:-webkit-full-screen {
  background: red;
}

html:fullscreen {
  background: red;
}
```

### 全局状态下的键盘输入, Full screen with key input
* 为了安全原因, 很多情况下全屏输入都是被阻塞禁止的, 但是chrome允许通过下面的API来允许键盘输入`docElm.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)`
* 这个只在chrome支持, 其他浏览器不支持. firefox计划使用requestFullWithKeys方法来支持鼠标输入, 但是会触发用户通知已保障安全.

## 页面可见性 Page Visibility

### 概述
* 所有页面可见性就是当前页面是处于显示状态, 还是隐藏状态, 页面可见性对于网站的统计非常有用. 有的时候,我们需要会统计用户停留在每个页面上的时间, 这个时间就是用户打开网页到网页冠以或者最小化之间的时间.
* 有的时候在播放视频的时候, 当用户离开视频播放页面自动暂停视频播放, 我们有时候也对那些定期刷新新内容的页面进行控制, 当该页面不可见则不刷新, 可见则刷新. 这些都是页面可见性的具体应用.
* H5之前, 我们可以监听 `onfocus()`事件, 如果当前窗口得到减掉,那么我们可以简单认为用户在与改页面交互, 如果失去焦点`onblur()`,那么可以认为用户停止与该页面的交互.
```js
// 当前窗口得到焦点
window.onfocus = function() {  // 动画
  // ajax 轮询等等
};
// 当前窗口失去焦点
window.onblur = function() { 
  // 停止动画
  // 停止 ajax 轮询等等
};
```
* 通过焦点来判断页面的可见性是非常不精确的, 如果用户打开了网页, 同时进行word内容的编辑, 这个时候焦点在word编辑器里面, 但是页面仍然是可见的.

### 可见性API和事件
* 可见性的属性:
  * document.hidden: Boolean值, 表示当前页面可见还是不可见.
  * document.visibilityState: 返回当前页面的可见状态
    * visible: 页面内容至少部分可见, 意味着当前该页面是一个非最小化的前台标签
    * hidden: 页面内容用户不可见, 意味着当前浏览器窗口处于最小化模式, 或者页面是一个后台标签页.
    * prerender: 页面内容正在被预渲染, 用户不可见(这种情况下 docuement.hidden会返回true), 一个页面只有在初始化时可能为这个值. 一点变成了其他两种值, 不可能再变回来.
    * unloaded: 当前文档已经被卸载, 用户不可见(这种情况下, document.hidden会返回true)
* 可见性的事件
  * visibilitychange: 当可见状态改变时候触发的事件.

### 可见性的使用
* 简单实例
```js
    document.addEventListener('visibilitychange', function () {
      var isHidden = document.hidden;
      if (isHidden) {
        console.log('页面隐藏')
      } else {
        console.log('页面显示');
      }
    });
```
* 这个实例没有考虑各浏览器的前缀, 我们只是针对firefox, chrome写了一个简单实例.
* 兼容各种浏览器的写法
```js
    function supportPageVisibility()
    { 
        var hidden = "hidden",visibilityChange = "visibilitychange";
        if (typeof document.hidden !== "undefined") {
            hidden = "hidden";
            visibilityChange = "visibilitychange";
            state = "visibilityState";
        } else if (typeof document.mozHidden !== "undefined") {
            hidden = "mozHidden";
            visibilityChange = "mozvisibilitychange";
            state = "mozVisibilityState";
        } else if (typeof document.msHidden !== "undefined") {
            hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
            state = "msVisibilityState";
        } else if (typeof document.webkitHidden !== "undefined") {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
            state = "webkitVisibilityState";
        }
        // 添加一个标题改变的监听器
        document.addEventListener(visibilityChange, function(e) {
            if (document[hidden]) {
                console.log('页面隐藏')
            } else {
                console.log('页面显示');
            }
        }, false);
    }
    supportPageVisibility();
```

### 提供一个兼容各高级浏览器以及低版本IE写法 (低版本 IE 用 onfocus/onblur 兼容) :

```js
(function() {
  var hidden = "hidden";
  // Standards:
  if (hidden in document)
    document.addEventListener("visibilitychange", onchange);
  else if ((hidden = "mozHidden") in document)
    document.addEventListener("mozvisibilitychange", onchange);
  else if ((hidden = "webkitHidden") in document)
    document.addEventListener("webkitvisibilitychange", onchange);
  else if ((hidden = "msHidden") in document)
    document.addEventListener("msvisibilitychange", onchange);
  // IE 9 and lower:
  else if ("onfocusin" in document)
    document.onfocusin = document.onfocusout = onchange;
  // All others:
  else
    window.onpageshow = window.onpagehide
    = window.onfocus = window.onblur = onchange;
  function onchange (evt) {
    var v = "visible", h = "hidden",
        evtMap = {
          focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h
        };
    evt = evt || window.event;
    if (evt.type in evtMap)
      document.body.className = evtMap[evt.type];
    else
      document.body.className = this[hidden] ? "hidden" : "visible";
  }
  // set the initial state (but only if browser supports the Page Visibility API)
  if( document[hidden] !== undefined )
    onchange({type: document[hidden] ? "blur" : "focus"});
})();
```

## 预加载

### 概述
* 网站优化一直是在项目开发中的重点, 常用的优化方式主要有: 图片懒加载, 图片sprite, css合并, js合并, 数据本地存储, 数据网络缓存等. 这些都是项目中经常使用的, HTML5考虑到了这一点, 提供了联机预加载的方法, 其实, 这个方法是FireFox提出的, 所以它对链接预加载绝对的支持.
* 下面是MDN描述:
> 预加载是一种浏览器机制, 是浏览器空闲时间会来预先下载/加载用户接下来很可能会浏览的页面/资源. 页面提供给浏览器需要预加载的集合. 浏览器载入当前页面完成后, 将会在后台下载需要预加载的页面并添加到缓存中. 用户访问某个预加载的链接时, 如果从缓存中, 页面就得以快速呈现.
* 其实就是让浏览器在后台提前下载一些文件.
### link的prefetch属性.


```html
<!-- 页面, 可以使用绝对或者相对路径 -->
<link rel="prefetch" href="page2.html" />

<!-- 图片, 也可以是其他类型的文件 -->
<link rel="prefetch" href="sprite.png" />
```
* 上面是预加载的使用方案, href就是预加载的文件, 可以看到可以加载不同类型的文件. 但是由于prefetch兼容性不是很好.
* 考虑到prefetch的兼容, w3c提出另外一个属性dns-prefetch属性. 它的兼容性现在主流浏览器基本都支持.

### link的dns-prefetch
```html
<link rel="dns-prefetch" href="http://example-domain.com">
```
* 可以看到使用方法和prefetch一样, 只是rel的属性不一样.

### 注意事项
* 预加载可以跨域进行, 当然, 请求时cookie等信息也会被发送.
* 预加载可能破坏网站统计数据, 而用户并没有实际访问.
* 浏览器兼容性不是很好.