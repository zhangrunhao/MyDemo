new Object = {

  // 添加事件的方法 (元素, 绑定的事件类型, 事件触发的方法)
  addHandler: function (element, type, handler) {
    if (element.addEventListener) { // 判断是否为DOM2级方法
      // 最后一个参数指定时间是否在捕获或者冒泡阶段执行
      // true: 事件句柄在捕获阶段执行
      // false: 默认, 事件句柄在冒泡阶段执行
      element.addEventListener(type, handler, false)
    } else if (element.attachEvent) { //检测是否为IE级方法
      // IE只支持时间冒泡
      element.attachEvent('on' + type, handler)
    } else { //检测是否为DOM0级方法
      // element.onclick = handler
      // element[onclick] = handler -> 这种方式可以向中括号内传递变量名
      element['on' + type] = handler
    }
  },

  // 移除之前添加的方法
  removeHandler: function (element, type, handler) {
    if (element.removeEventListener) {
      // 如果在element上定义的handler是匿名函数的话, 是无法被移除的
      // 最后的变量指定是在哪个阶段移除事件, 
      // 如果在两个阶段都有添加事件, 那么久应该在两个阶段都对事件进行移除
      element.removeEventListener(type, handler, false)
    } else if (element.detachEvent) {
      element.detachEvent(type, handler)
    } else {
      element['on' + type] = null
    }
  },

  // 获取事件对象, 获取事件对象目标
  // 事件对象, 某个事件触发的函数中, 参数表示了这个整个事件触发的一些信息和方法
  // 或者整个事件触发的一个对象, 里面包含了这个事件的全部信息. 例如: clickEvent, focusEvent
  getEvent: function (event) {
    return event ? event : window.event
  },
  // target: 表示这个事件发生在哪个element上.
  getTarget: function (event) {
    return event.target || window.event.target
  },

  // 阻止浏览器的默认事件
  // 例如a标签的默认跳转事件, 表单的回车默认提交事件
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault()
    } else {
      event.returnValue = false
    }
  },

  // 阻止事件冒泡
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation()
    } else {
      event.cancelBubble = true
    }
  },

  // 获取鼠标离开进入的相关元素
  getRelatedTarget: function (event) {
    if (event.relatedTarget) { //判断是否为非IE
      // mouseover: 返回离开的节点
      // mouseout: 返回进入的节点
      return event.relatedTarget
    } else if (event.toElement) { // IE兼容写法
      return event.toElement
    } else if (event.fromElement) { // IE兼容写法
      return event.fromElement
    } else {
      null
    }
  },

  // 鼠标滚轮方法
  // 非IE浏览器:
  // 0: 表示主鼠标按钮
  // 1: 中间的鼠标按钮
  // 2: 次鼠标按钮
  // IE8:
  // 0: 没有按下按钮
  // 1: 按下了主鼠标按钮
  // 2: 按下了次鼠标按钮
  // 3: 同时按下了主、次鼠标按钮
  // 4: 按下了中间的鼠标按钮
  // 5: 主鼠标按钮、中间鼠标按钮同时按下
  // 6: 次鼠标按钮、中间鼠标按钮同时按下
  // 7: 同时按下三个鼠标按钮
  getButton: function (event) {
    // document.implementation === Domimplementaiton
    // 代表了一个接口, 提供了不依赖与任何document的方法.
    // 这个接口没有特定的属性, 并且也没有继承任何属性
    // hasFeature: 用来判断当前DOM, 是否支持某个特性
    if (document.implementation.hasFeature('MouseEvents', "2.0")) {
      return event.button
    } else {
      switch (event.button) {
        // 因为只有按下鼠标才能执行到这, 所以再提示没有按下, 也默认为按下了主按钮
        case 0:
        case 1:
        case 3:
        case 5:
        case 7:
          return 0;
        case 2:
        case 6:
          return 2;
        case 4:
          return 1;
      }
    }
  },

  // 能够获取鼠标滚轮增量增(delta)的方法
  // 非firefox为event.wheelDelta属性, 属性值为 +-120
  // firefox浏览器下, 属性值为 -+3, 与其他浏览器符号相反
  getWheelDelta: function (event) {
    if (event.wheelDelta) { //非firefox浏览器
      // 在 opera 9.5版本以下, 是相反的, 引版本太老, 此处未做兼容处理
      return event.wheelDelta
    } else { //firefox浏览器
      return -event.detail * 40
    }
  },

  // 获取按下字符编码
  // 获取后的编码, 可以通过String.fromCharCode()
  getCharCode: function (event) {
    // 这样看的话, 应该有浏览器中有这个属性值, 并且不为undefiend.
    if (typeof event.charCode == "number") {
      return event.charCode
    } else { // 兼容IE写法
      return event.keyCode
    }
  },

  // 获取剪贴板数据对象
  clipboardData: function (event) {
    return clipboardData = (event.clipboardData || window.clipboardData);

  },
  // 这个方法只是针对, 在文本框中进行剪切(cut)、复制(copy)和粘贴(paste)这三个操作，快捷键分别是ctrl+x、ctrl+c、ctrl+v
  // IE浏览器只有在文本选定字符的时, copy和cut才发生. 且在非文本框中(如div元素)只能发生copy事件
  // 能够生效的方法`onpast`, `oncopy`, `oncut`, `onbeforepaste`, `onbeforecopy`, `onbeforecut`
  // 在这些事件中才能去到事件对象中的剪切板
  // 事件对象有三个方法: getData()、setData()和clearData ()
  // getData() 参数: "text" 和 "URL"
  // setData() 参数 "text" 和 "URL", 设置的文本, IE成功与否饭后布尔值, 其他浏览器无返回值
  // clearData() 参数: text" 和 "URL", IE成功与否饭后布尔值, 其他浏览器返回undeifned

  //访问剪贴板中的数据
  getClipboardText: function (event) {
    var clipboardData = (event.clipboardData || window.clipboardData);
    return clipboardData.getData("text");
  },

  //设置剪贴板中的数据
  setClipboardText: function (event, value) {
    if (event.clipboardData) {
      return event.clipboardData.setData("text/plain", value);
    } else if (window.clipboardData) {
      return window.clipboardData.setData("text", value);
    }
  },

  // 获取页面滚动的高度
  // 专业且通俗一点的说法, 获取滚动条相对于其顶部的偏移
  getScrollTop: function () {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  },

  // 根据类名获取元素
  byClassName: function (parent, className) {
    if (parent.getElmentsByClassName) { // 判断是否支持直接写法
      return parent.getElmentsByClassName(className)
    } else { // IE
      var arr = []; // 用来存储最终查找到的类名
      var els = parent.getElementsByTagName('*') // 查找这个父元素下面的所有子元素
      for (var i = 0; i < els.length; i++) {
        var child = els[i]
        var classNames = child.className.split(' ')
        for (var j = 0; j < className.length; j++) {
          if (classNames[j] === className) {
            arr.push(child)
            break
          }
        }
      }
      return arr
    }
  },

  // 获取元素的行外样式
  getElementStyle: function (element, styleName) {
    if (element.currentStyle) { //IE
      return element.currentStyle[styleName]
    } else { // 非IE
      return getComputedStyle(element, null)[styleName]
    }
  } 
}