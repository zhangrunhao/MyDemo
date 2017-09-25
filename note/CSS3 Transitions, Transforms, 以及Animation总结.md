# C3 Transitions, Transforms 以及 Animation总结

## 前言
 > 昨天有人咨询面试事, 突然就意识到自己这块非常差, 竟然没有任何的印象, 准备看着张鑫旭老师的博客, 学习一边, 以便以后有个了解和参考

### 文章目录
* Transition总结
* Transforms总结
* Animation总结
* 总结效果展示
* 浏览器支持情况
* 延伸
* 总结

## Transitions
> * 平滑的改变CSS的值.
> * 只要属性的值改变了, 无论是点击事件,焦点事件,还是鼠标的hover事件, 只要是值改变了, 就是平滑的, 就是动画

### 具体属性
* `transition-property:*` 指定过渡的性质. 例如: transition-property: background指的是background参与到这个过渡
* `transition-duration:*` 指定这个过渡的持续时间
* `transition-delay:*` 延迟过渡时间
* `transition-timing-function:*` 指定过渡类型, 有ease|linear|ease-in|ease-out|ease-in-out|cubic-bezier

###  简单举例
```html
  <style>
    .trans {
      -webkit-transition-property: background-color;
      -webkit-transition-duration: 3s;
      -webkit-transition-timing-function: ease;
    }

    .trans:hover {
      background-color: #486AAA;
      color: #fff;
    }
  </style>
</head>

<body>
  <p class="trans">经过出现效果</p>
</body>
```

### 合并属性
```html
  <style>
    .trans {
      transition: background-color 3s 0.5s ease;
      -webkit-transition: background-color 3s 0.5s ease;
      -moz-transition: background-color 3s 0.5s ease;
      -o-transition: background-color 3s 0.5s ease;
      -ms-transition: background-color 3s 0.5s ease;
    }

    .trans:hover {
      background-color: #486AAA;
      color: #fff;
    }
  </style>
```

### `transition-timing-function`详解
* `linear`: 线性变换, 始终如一
* `ease-in`: 进去的时候, 先慢后快
* `ease-out`: 出来的时候, 先快后慢
* `ease-in-out`: 完整过程, 先慢, 再快, 再慢
* `cubic-bezier`: 贝塞尔曲线, 这就牛逼了


## Transform总结
> `transform`指变换
> 