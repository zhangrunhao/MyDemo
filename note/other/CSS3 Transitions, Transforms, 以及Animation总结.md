# C3 Transitions, Transforms 以及 Animation总结

## 前言
> 昨天有人咨询我面试的注意事项, 突然就意识到自己这块非常差, 竟然没有任何的印象, 准备看着张鑫旭老师的博客, 学习一边, 以便以后有个了解和参考
> * 其中的例子都是用自己的方法实现的, 然后没有考虑任何兼容性, 只是单纯的熟悉下这些属性
> * 但是能保证每一个例子, 都是自己亲自测试的, 在我这跑着, 没得问题.
> * 大神传送门: [张鑫旭大神的博客原文](http://www.zhangxinxu.com/wordpress/2010/11/css3-transitions-transforms-animation-introduction/)

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
> `transform`指变换, 指的是拉伸, 压缩, 旋转, 偏移, 旋转四种变换.
> * `transform: skew(35deg)` : 拉伸
> * `transform: scale(1, 0.5)` : 压缩
> * `transform: rotate(45deg)` : 旋转
> * `transform: translate(10px, 20px)`: 偏移

### 举例:
```html
  <style>
    div {
      width: 100px;
      height: 100px;
      background: #aaa;
    }
    .trans_skew {
      transform: skew(35deg);
    }
    .trans_scale {
      transform: scale(0.5, 0.5);
    }
    .trans_rotate {
      transform: rotate(45deg)
    }
    .trans_translate {
      transform: translate(100px, 50px);
    }
  </style>
<body>
  <div>原版</div>
  <div class="trans_skew">skew</div>
  <div class="trans_scale">sclate</div>
  <div class="trans_rotate">rotate</div>
  <div class="trans_translate">translate</div>
</body>
```

### 动态效果
```html
  <style>
    div {
      width: 100px;
      height: 100px;
      background: #aaa;
      transition: all 2s;
    }
    .transtion_all:hover {
      transform: translate(10deg, 20px);
    }
  </style>
<body>
  <div class="transtion_all">原版</div>
</body>
```

## Animations总结

### 各个属性值
* animation-name: 对应的选择器keyframe的名称
* animation-duration: 动画所花费的时间.
* animation-fiming-fuction: 动画的曲线速度
* animation-delay: 动画开始之前的延时
* animation-iteration-count: 动画应该播放的次数
* animation-direction: 规定是否播放轮流反向动画
  * normal: 默认值, 动画应该正常播放
  * alternate: 动画应该轮流反向播放

### 举例01
```html
  <style>
    div {
      width: 200px;
      height: 100px;
      background: #aaa;
    }
    /* 定义动画 */

    @-webkit-keyframes myAimation {
      0% {
        padding: 0;
      }
      50% {
        padding: 20px;
      }
      100% {
        padding: 100px;
      }
    }

    .animations_show:hover {
      -webkit-animation-name: myAimation;
      -webkit-animation-duration: 1.5s;
      -webkit-animation-iteration-count: 4;
      -webkit-animation-direction: alternate;
      -webkit-animation-timing-function: ease-in-out;
    }
  </style>
<body>
  <div class="animations_show">animation-box</div>
</body>
```

### 举例02
```html
  <style>
    img {
      box-shadow: 0 0 8px;
    }
    img:hover {
      animation-name: anim;
      animation-duration: 2s;
    }
    @keyframes anim {
      0% {
        box-shadow: 0 0 8px;
      }
      20% {
        box-shadow: 0px 0px 20px;
      }
      100% {
        box-shadow: 0 0 8px;
      }
    }
  </style>
<body>
  <img src="./test.jpg" alt="">
</body
```

## 综合案例

### 01
```html
  <style>
    img {
      width: 100px;
      height: 120px;
      position: absolute;
      transition: opacity 1s ease-in-out;
      /* opacity: 0; */
    }

    img:hover {
      /* 因为我们hover上面的时候, 只能hover上面的img, 然后上面的img透明度变成了完全透明, 然后下面的图片就显示出来了 */
      opacity: 0;
      /* filter: 定义元素的可视效果,  */
      /* filter: alpha(opacity=0); */
    }
  </style>
<body>
  <img src="./test.jpg" alt="">
  <img src="./yuanjihuasy.png" alt="">
</body>
```

### 案例02
> 借助JS实现点击切换
```html
  <style>
    img {
      width: 100px;
      height: 120px;
      position: absolute;
      transition: opacity 1s ease-in-out;
    }

    .img_click {
      opacity: 0;
    }
  </style>
<body>
  <img src="./test.jpg" alt="">
  <img src="./yuanjihuasy.png" alt="">
  <script>
    (function () {
      var images = document.getElementsByTagName('img')
      images[1].onclick = function () {
        this.classList.toggle('img_click')
      }
    })()
  </script>
</body>
```

### 案例03
> 图片无限自动变化
```html
  <style>
    img {
      width: 100px;
      height: 120px;
    }
    img:hover {
      position: absolute;
      animation-name: fadeInOut;
      animation-duration: 5s;
      /* 此时我们的动画次数变成了无限次执行 */
      animation-iteration-count: infinite;
    }
    @-webkit-keyframes fadeInOut {
      0% {
        opacity: 1;
      }
      25% {
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  </style>

<body>
  <img src="./test.jpg" alt="">
</body>
```

### 举例04
> 两张图片轮流切换
```html
  <style>
    img {
      width: 100px;
      height: 120px;
      transition: all 1s ease-in-out;
    }

    .img-box {
      background: #aaa;
    }


    .top {
      position: absolute;
      transform: scale(0, 0);
      opacity: 0;
      transform-origin: top right;
      -webkit-transform-origin: top right;
    }

    .img-box:hover .top {
      opacity: 1;
      transform: scale(1, 1);
    }

    .img-box:hover .bottom {
      opacity: 0;
      transform: scale(0, 0);
      transform-origin: bottom left;
      -webkit-transform-origin: bottom left;
    }

  </style>
<body>
  <div class="img-box">
    <img class="top" src="./test.jpg" alt="">
    <img class="bottom" src="./yuanjihuasy.png" alt="">
  </div>
</body>
```

### 举例05
```html
  <style>
    img {
      width: 100px;
      height: 120px;
      transition: all 1s ease-in-out;
    }
    .top {
      position: absolute;
    }
    .img-box:hover .top{
      transform: scale(0, 0) rotate(360deg);
      opacity: 0;
    }
    .bottom {
      transform: scale(1, 0);
      opacity: 0;
    }
    .img-box:hover .bottom {
      opacity: 1;
      transform: scale(1, 1);
    }
  </style>
<body>
  <div class="img-box">
    <img src="./yuanjihuasy.png" alt="" class="top" >
    <img src="./test.jpg" alt="" class="bottom">
  </div>
</body>
```

### 举例06
> 选项卡案例
```html
  <style>
    .img-box-outer {
      width: 100px;
      height: 120px;
      overflow: hidden;
    }
    .img-box {
      width: 400px;
      height: 120px;
      transition: all 1s ease-in-out;
    }
    img {
      float: left;
      width: 100px;
      height: 120px;
    }
    li:hover {
      background: #aaa;
      cursor: pointer;
    }
  </style>
<body>
  <div class="img-box-outer">
    <div class="img-box">
      <img src="./yuanjihuasy.png">
      <img src="./test.jpg">
      <img src="./header.jpg">
      <img src="./flower.jpg">
    </div>
  </div>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
  <script>
    onload = function () {
      var imgBox = document.getElementsByClassName('img-box')[0],
      triggers = document.getElementsByTagName('li'),
      triggersLength = triggers.length

      for (let i = 0; i < triggersLength; i++) {
        triggers[i].onclick = function () {
          let index = Number(this.innerText)
          imgBox.style.marginLeft = (1 - index) * 100 + 'px';
          return false
        }
      }
    }
  </script>
</body>
```

### 举例07
> 手风琴的一个案例
```html
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .outer {
      height: 30px;
      overflow: hidden;
      transition: height 1s ease-in-out;
    }
    .outer:nth-child(1) {
      height: 180px;
    }
    h3 {
      height: 30px;
      background: skyblue;
    }

    p {
      height: 150px;
      background: #aaa;
    }
  </style>
<body>
  <div class="outer">
    <h3>1</h3>
    <p>这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本</p>
  </div>
  <div class="outer">
    <h3>2</h3>
    <p>这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本</p>
  </div>
  <div class="outer">
    <h3>3</h3>
    <p>这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本</p>
  </div>
  <script>
    // 获取所有的标题
    onload = () => {
      const outerArr = document.querySelectorAll('.outer')
      const hArr = document.querySelectorAll('h3')
      // 默认动画没有执行
      let transing = false
      Array.prototype.forEach.call(hArr, (element) => {
        let _this = element
        element.addEventListener('click', () => {
          if (transing) return
          let currentIndex = Number(_this.innerText) - 1
          // 动画开始执行
          transing = true
          Array.prototype.forEach.call(outerArr, (outer, index) => {
            if (currentIndex === index) {
              outer.style.height = '180px'
            } else {
              outer.style.height = '30px'
            }
          })
        }, false)
      })
      Array.prototype.forEach.call(outerArr, (outer, index) => {
        // 动画执行结束
        outer.addEventListener('transitionend', () => {
          transing = false
        })
      })
    }
  </script>
</body>
```
