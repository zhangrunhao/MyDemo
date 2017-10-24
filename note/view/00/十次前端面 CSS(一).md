## 问题总结 CSS(一) 左固定右适应 与 BFC, IFC 

## 左右布局：左边定宽、右边自适应

### 方法一: 
> 左边左浮动, 右边添加`margin-left`
```html
  <style>
  *{
    margin: 0;
    padding: 0;
  }
  .left{
    background-color: #ccc;
    float: left;
    width: 200px;
  }
  .right{
    background-color: #aaa;
    margin-left: 200px;
  }
  </style>
  <body>
    <div class="left">
      <h4>Left</h4>
    </div>
    <div class="right">
      <h4>Right</h4>
    </div>
  </body>
```

### 方法二:
> 左边左浮动, 右边添加`overflow: hidden`
> &nbsp;**此方法在IE6不兼容**
```html
  <style>
  *{
    margin: 0;
    padding: 0;
  }
  .left{
    background-color: #ccc;
    float: left;
    width: 200px;
  }
  .right{
    background-color: #aaa;
    overflow: hidden;
  }
  </style>
  <body>
    <div class="left">
      <h4>Left</h4>
    </div>
    <div class="right">
      <h4>Right</h4>
    </div>
  </body>
```

### 方法三:
> 左边使用绝对定位, 右边添加`margin-left`
```html
  <style>
  *{
    margin: 0;
    padding: 0;
  }
  .left{
    background-color: #ccc;
    float: left;
    width: 200px;
    position: fixed;
    top: 0;
    left: 0;
  }
  .right{
    background-color: #aaa;
     margin-left: 200px; 
    /* overflow: hidden; */
  }
  </style>
<body>
  <div class="left">
    <h4>Left</h4>
  </div>
  <div class="right">
    <h4>Right</h4>
  </div>
</body>
```

### 方法四:
> 左边使用绝对定位, 右边也使用绝对定位
```html
  <style>
  *{
    margin: 0;
    padding: 0;
  }
  .left{
    background-color: #ccc;
    float: left;
    width: 200px;
    position: fixed;
    top: 0;
    left: 0;
  }
  .right{
    background-color: #aaa;
    position: fixed;
    top: 0;
    left: 200px;
  }
  </style>
<body>
  <div class="left">
    <h4>Left</h4>
  </div>
  <div class="right">
    <h4>Right</h4>
  </div>
</body>
```

### 方法五:
> 使用嵌套div的方法, 没有想明白原因
* 左右浮动, 左边宽度给定. 右边宽度100%, 
* 左边再给左边一个`margin-right: 100%`的话, 右边就上去了, 并且可以把左边遮掉.
* 这个时候, 再给右边里面盒子一个左边距, 把位置让开.
```html
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .left {
      background-color: #ccc;
      float: left;
      width: 200px;
      margin-right: -100%;
    }

    .right {
      float: left;
      width: 100%;
    }

    .right_inner {
      background-color: #aaa;
      margin-left: 200px;
    }
  </style>
<body>
  <div class="left">
    <h4>Left</h4>
  </div>
  <div class="right">
    <div class="right_inner">
      <h4>Right</h4>
    </div>
  </div>
</body>
```

### 方法六
> 左边设置浮动, 右边设置宽度100%
```html
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .left {
      background-color: #ccc;
      float: left;
      width: 200px;
    }

    .right {
      width: 100%;
      background-color: #aaa;
    }
  </style>
  <div class="left">
    <h4>Left</h4>
  </div>
  <div class="right">
    <h4>Right</h4>
  </div>
```

## BFC、IFC
* 在`普通流`中的盒子会参与一种格式上下文, 这个盒子可能是块盒也可能是行内盒, 但不可能同时是块盒和行内盒. 块级盒参与块级格式上下文(`BFC`), 行内级盒参与行级格式上下文(`IFC`)

### BFC
* BFC的形成
  * `float`的值不为`none`
  * `postion`的值不为`static`或`relative`
  * `display`的值为`table-cell`, `table-caption`, `inline-block`, `flex`或`inline-flex`
  * `overflow`的值不为`visibility`
* BFU的特性
  1. 在BFC中, 盒子都是从它的包含块的顶部一个一个的垂直放置的. 两个相邻的盒子的垂直间距决定于margin属性. 在BFC中, 两个相邻块级盒子之间垂直方向的外边距是会塌陷的.
  2. 在BFC中, 每个盒子的左外边界挨着包含块的左边界(对于从右到左的格式化, 则为右边界互相挨着). 即使是存在浮动元素也是如此(即使一个盒子是因为浮动而收缩了的.). 除非这个盒子建立了一个新的BFC(在某些情况下这个盒子自身会因为浮动而变窄)
  3. 其实就是一个自己内部的元素, 并不会影响其他的元素. 因为这是一个自己的作用域.

### IFC
> 其实写了这么多, 我自己并没有看懂....
* 在IFC中, 盒子水平放置, 一个接着一个, 从包含块的顶部开始. 水平mafings, borders和padding在这些盒子中被平分. 这些盒子也许通过不同的方式进行对齐, 他们的底部和顶部也许被对齐, 或者通过文字的基线进行对齐. 矩形区域包含这来自一行的盒子叫做`line-box`.
* `line-box`的宽度由浮动情况和它的包含块决定. line-box的高度`line-height`的计算结果决定.
* 一个`line-box`总是足够高于包含在它在内的盒子. 然后, 它也许比包含它在内最高的盒子搞.(比如: 盒子对齐导致基线提高了).当盒子B的高度比它的line box的高度低, 在line box内的B的垂直对齐线通过 `vertical align`属性决定. 当几个行内级盒子在一个单独的line box内不能很好的水平放置, 则他们被分配了2个或者更多的垂直重叠line boxs, 因此, 一个段落是很多个line boxs的垂直重叠. Line boxs被叠加没有垂直方向的分离, 并且他们也不重叠.
* 通常, line box的左边缘挨着它的包含块的左边缘, 右边缘挨着它的包含块的右边缘. 然而, 浮动盒子也许会在包含块边缘和line box边缘之间. 因此, 尽管line boxs在同样的行内格式上下文通常都有相同的宽度(就是他的包含块的宽度), 但是水平方向上的空间因为浮动被减少了, 它的宽度也会变得复杂. Line boxs在同样的行内块格式上下文通常在高度上是多样的(比如: 一行也许包含了一个最高的图片, 然后其他的也可以仅仅只包含文字)
* 当在一行中行级盒子的总宽度比包含他们的line box的宽度小, 他们在line box中的水平放置位置由`text algin`属性决定. 如果属性是`justify`, 用户代理可能会拉伸空间和文字在inline box内.
* 当一个行内盒子超过了line box的宽度, 则它被分割成几个盒子并且这些盒子被分配城几个横穿过的line boxs. 如果一个行内盒子不能被分割. 则行内盒子溢出line box.
* 当一个行内盒子被分割, 分割发生在margins, borders和padding便没有了视觉效果.
* 在同样的line box内的行内盒子也许被分割成几个盒子因为双向的文字.
* Line boxs在行内格式上下文中当需要包含行内级内容时被创造. Line boxs包含没有文字, 没有空格, 没有带着margins, padding和borders, 以及没有其他在六中的内容(比如图片, 行内盒子和行内表格), 也不会以新起一行结尾. 对于他们在内的任何盒子和位置都以他们决定并且必须将他们视作没有高度的line boxs.

### 举例一
> 这是一个inline box结构的栗子. 下面的段落包含着散落在em和strong元素的匿名文字.
```html
<P>Several <EM>emphasized words</EM> appear
<STRONG>in this</STRONG> sentence, dear.</P>
```
* P元素产生一个块级盒子, 它包含五个inline boxs, 其中有3个事匿名的. 如下
  * 匿名: 'Serveral'
  * EM: 'emphasized words'
  * 匿名: 'appear'
  * STRONG: 'in this'
  * 匿名: 'sentence, dear.'
* 为了格式化段落, 用户代理将五个盒子都汇入line box, 在这栗子中, 由P元素产生的盒子为line boxs的包含块, 如果包含块足够的宽, 所有的inline-boxs都将刚刚好放在一个单行的line box中
* 如果没有, line boxs将被分离并被分配到不同的line boxs中. 如果em这个里面的内容被分成了两个部分. 两个em, 外边距, 边框, 内边距和文字修饰效果坐在在这两个部分之间都没有任何的效果.

### 举例二
```html
  <style>
    p {
      width: 240px;
    }
    EM {
      padding: 2px;
      margin: 1em;
      border-width: medium;
      border-style: dashed;
      line-height: 2.4em;
    }
  </style>
  <P>Several
    <EM>emphasized words</EM> appear here.
  </P>
```
* ![IFC举例说明](http://onh27ty1g.bkt.clouddn.com/IFC%E4%B8%BE%E4%BE%8B%E6%BC%94%E7%A4%BA%E5%9B%BE.png)
* 外边距作用了`emphasized`之前和`word`单词之后.
* 内边距作用在了'emphasized'的前面，上面，和下面，和'words'单词的后面，上面和下面。单独的虚线框分别被渲染在了每个事例的三个边上。
