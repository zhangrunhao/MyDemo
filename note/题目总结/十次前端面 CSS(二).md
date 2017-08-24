## 十次前端面 CSS(二) CSS3用过哪些新特性

## 深入了解CSS新特性

### 简介
> CSS3是CSS的升级版本, 这套新标准提供了更加丰富且实用的规范, 如: 盒子模型, 列表模型, 超链接方式, 语言模块, 背景和边框, 文字特效, 多栏布局等等, 目前有很多浏览器已经相继执行这项升级的规范, 如: Firefox, Chrome, Safari, Opera等等. 在Web开发中采用CSS3技术将会显著的梅花我们的应用程序, 提高用户体验, 同时也能极大的提高程序的性能.

### CSS元素器(Selector)

#### CSS1-2选择器总结

|selecter             |eg                 |info              |
|---------------------|-------------------|------------------|
|.class               |.info              |选择class="info"的所有元素 |
|#id                  |#firstname         |选择id="firstname"的所有元素|
|*                    |*                  |选择所欲的元素|
|element              |p                  |选择所有\<p>元素|
|element,element      |div,p              |选择所有的\<div>元素和\<p>元素|
|element element      |div p              |选择所有\<div>元素内部的\<p>元素|
|element>element      |div>p              |选择父元素为\<div>元素的所有\<p>元素|
|element+element      |div+p              |选择紧接在\<div>元素之后的第一个\<p>元素|
|[attribute]          |[target]           |选择带有target属性所有元素|
|[attribute=value]    |[target=_blank]    |选择target="\_blak"所有元素|
|[attribute~=vlaue]   |[title~=flower]    |选择title属性包含单词"flower"的所有元素|
|[attribute\|=value]  |[lange\|=en]       |选择lang属性值以"en"开头的所有元素|
|:link                |a:link             |所有未被访问过的链接|
|:visited             |a:visited          |选择已经访问过的链接|
|:active              |a:active           |选择活动的链接, 也就是鼠标点下去, 但是没有松开|
|:hover               |a:hover            |鼠标悬停时的链接|
|:focus               |input:focus        |获取焦点的input元素|
|:first-letter        |p:first-letter     |选择每个\<p>元素的首字母|
|:first-line          |p:first-line       |选择\<p>元素的首行|
|:first-child         |div :first-child   |选择\<div>下第一个元素|
|:first-child         |p:first-child      |选择父元素下第一个元素, 并且这个元素为\<p>元素|
|:before              |p:before           |在\<p>元素之前插入内容|
|:after               |p:alter            |在\<p>元素后面插入内容|
|:lang(language)      |p:lang(it)         |选择lang属性值为'it'的\<p>|

#### CSS3选择器总结
|selecter             |eg                   |info              |
|---------------------|---------------------|------------------|
|element1~element2    |p~ul                 |每个前面有\<p>元素的\<ul>元素, 只要前面的元素中有即可|
|[attribute^=value]   |a[src^="https"]      |选择其src属性值以"https"开头的每个\<a>元素|
|[attribute$=value]   |a[src$=".pdf"]       |选择其src属性以".pdf"结尾的每个\<a>元素|
|[attribute*=value]   |a[src\*="abc"]       |选择其src属性中包含"abc"子串的每个\<a>元素|
|:first-of-type       |p:first-of-type      |选择其父元素中的第一个\<p>元素|
|:last-of-type        |p:last-of-type       |选择其父元素中的最后一个\<p>元素|
|:only-of-type        |p:only-of-type       |选择其父元素中唯一的一个\<p>元素, 若有重复的不生效|
|:only-child          |p:only-child         |选择其父元素中只有一个元素, 且为\<p>元素|
|:nth-child(n)        |p:nth-child(2)       |选择其父元素中的第二个元素, 且为\<p>元素|
|:nth-child(n)        |div :nth-child(2)    |选择其\<div>元素中的第二个元素|
|:nth-last-child(n)   |p:nth-last-child(2)  |从最后一个开始往上数, 第二个元素, 且为\<p>元素|
|:nth-of-type(n)      |p:nth-of-type(2)     |选择父元素中第二个\<p>标签|
|:nth-last-of-type(n) |p:nth-last-of-type(2)|选择父元素中倒数第二个\<p>标签|
|:last-child          |p:last-child         |选择父元素的最后一个元素, 且为\<p>元素|
|:root                |:root                |选择文档根元素, 直接就是一个:root, 不需要再加其他的|
|:empty               |p:empty              |选择没有子元素的每个\<p>元素|
|:target              |#news:target         |选择当前活动的#news元素, 一个|
|:enabled             |input:enabled        |选择每个启用的\<input>元素|
|:disabled            |input:disabled       |选择每个禁用的\<input>元素|
|:checked             |input:checked        |选择每个被选中的\<input>元素|
|:not(selector)       |:not(p)              |选择非\<p>元素的每个元素|
|::selection          |::selection          |选择被用户选取的元素部分|

```html
<style>
  :target {
    border: 1px solid #ccc;
    background-color: #daa;
  }
</style>
  <p><a href="#news1">跳转到内容1</a></p>
  <p><a href="#news2">跳转到内容2</a></p>
  <p id="news1">内容1</p>
  <p id="news2">内容</p>
```
### `@Font-face`特性
* 在CSS3之前, Web设计师必须使用已在用户计算机上安装好的字体.
* 通过CSS3, web设计师可以使用他们喜欢的任意字体.
* 可将该字体存放到web服务器上, 它会在需要时被自动下载到用户的计算机上.
* 该字体是在CSS3 @font-face规则中定义的.

#### 使用需要的字体
* 在新的@font-face规则中, 必须首先定义字体的名称(比如myFirstFont), 然后指向该字体文件.
* 如需为HTML元素使用字体, 请通过font-family属性来引用字体的名称(myFirstFont)
```html
<style>
@font-face
{
  font-family: myFirstFont;
  src: url('Sansation_Light.ttf'),
       url('Sansation_Light.eot'); /* IE9+ */
}
div
{
  font-family: myFirstFont;
}
</style>
```

#### 使用粗体字体
* 必须为粗体文本添加另一个包含描述符的@font-face:
```html
<style>
@font-face
{
  font-family: myFirstFont;
  src: url('Sansation_Bold.ttf'),
       url('Sansation_Bold.eot'); /* IE9+ */
  font-weight: bold;
}
</style>
```
* 文件"Sansation_Bold.ttf"是另一个字体文件, 包含了Sansation字体的粗体字符.
* 只要font-family为"myFirstFont"的文本需要显示为粗体, 浏览器就会使用该字体.
* 通过这种方式, 我们可以为相同的字体设置许多@font-face规则.

##### 字体描述符
* font-family: name. 必需, 规定字体的名称.
* src: URL. 必需, 定义字体文件的URL.
* font-strech: 	normal|condensed|ultra-condensed|extra-condensed|semi-condensed|expanded|semi-expanded|extra-expanded|ultra-expanded. 可选. 定义如果拉伸字体. 默认是"normal"
* font-style: ormal|italic|oblique. 可选. 定义字体的样式, 默认是"normal".
* font-weight: normal| 100 -900 |. 可选. 定义字体的粗细, 默认是"normal"
* unicode-range: unicode-range. 可选. 定义字体支持的UNICODE字符范围. 默认是"U+0-10FFFF"


### 文本超出属性

#### word-wrap
* word-warp 属性允许长单数或者URL地址换行到下一行.
* 属性值: normal: 只在允许的断字点换行(浏览器保持默认处理).
* 属性值: break-word: 在长单词或URL地址内部进行换行.

#### text-overflow
* text-overflow则设置或检索当当前行超过指定容器的边界时如何显示.
* 属性值: text-overflow: clip . 超过的直接截掉, 完全不显示.
* 属性值: text-overflow: ellipsis . 超过的显示 '...',
```html
<style>
  .clip {
    text-overflow: clip;
    overflow: hidden;
    white-space: nowrap;
    width: 200px;
    background: #ccc;
  }

  .ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 200px;
    background: #ccc;
  }
</style>
  <div class="clip">
    不显示省略标记，而是简单的裁切条
  </div>

  <div class="ellipsis">
    当对象内文本溢出时显示省略标记
  </div>
```

### 文字渲染(Text-decoration)
> 更深层次的渲染.
* text-fill-color: 文字内部填充颜色.
* text-stroke-color: 文字边界填充颜色.
* text-stroke-width: 文字边界宽度.
```html
<style>
  div.textDecoration {
    font-size: 60px;
    -webkit-text-fill-color: black;
    -webkit-text-stroke-color: red;
    -webkit-text-stroke-width: 2.75px;
  }
</style>
  <div class="textDecoration">
    文本渲染效果
  </div>
``` 

### 多列布局(multi-column layout)
> CSS3现在已经可以做简单的布局处理了, 这个CSS3新特性又一次的减少了我们的JavaScript代码量.
* column-count: 表示布局几列.
* column-rule: 表示列与列之间的间隔条的样式
* column-gap: 表示列与列之间的间隔.
```html
<style>
  .multi_column_style {
    column-count: 3;
    column-rule: 1px solid #bbb;
    column-gap: 2em;
  }
</style>
<div class="multi_column_style">
  取值:none | [ underline || overline || line-through || blink ] | inherit none: 定义正常显示的文本 [underline || overline || line-thrvvvough
  || blink]: 四个值中的一个或多个 underline: 定义有下划线的文本 overline: 定义有上划线的文本 line-through: 定义直线穿过文本 blink: 定义闪烁的文本 inherit: 继承 引用网址:http://www.dreamdu.com/css/property_text-decoration/
  初始值: none 继承性: 否 适用于: 所有元素 text:文本.decoration:装饰
</div>
```



### 颜色的透明度
> css3已经很好的支持了透明度.
* "a"代表了透明度, 也就是这里的'0.75', 同时css3还支持HSL颜色声明方式及其透明度.
```css
color: rgba(255, 0, 0, 0.75); 
background: rgba(0, 0, 255, 0.75);
color: hsla( 112, 72%, 33%, 0.68);
```

### 边框圆角
> 使用属性`border-radius`.
* 最大值为`50%`
```css
border-radius: 15px;
```

### 渐变效果(Gradient)

#### 线性渐变
> 从左上(0% 0%)到右上(0% 100%)即从左到右水平渐变:
* 简单的从左到右的线性渐变
```html
<style>
  .gradient_style {
    background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, from(#2A8BBE), to(#FE280E));
    height: 50px;
  }
</style>
<div class="gradient_style"></div>
```
* 复杂的线性渐变: 中间会在某个颜色断开.
```html
<style>
  .gradient_style {
    background-image: -webkit-gradient(
                      linear, 0% 0%, 100% 0%, from(#2A8BBE),
                      color-stop(0.33, #AAD010), 
                      color-stop(0.33, #FF7F00), 
                      to(#FE280E)
                      );
    height: 50px;
  }
</style>
  <div class="gradient_style">

  </div>
```

#### 经向渐变
> 一个圆到另一个圆的渐变.
* 第一个 `50 50, 50`是起始圆的坐标和半径
* 第二个 `50 50, 50`蓝色是目标圆的圆心坐标和半径
* `color-stop(0.5, red)`是断电的位置和色彩.
* 渐变是由外向内的.
```css
  .gradient_style {
    background-image: -webkit-gradient(radial, 50 50, 50, 50 50, 0, from(black), color-stop(0.5, red), to(blue));
    height: 100px;
    width: 100px;
  }
```
* 如果我们给目标一个大于 0 半径, 将会看到另外一个效果.
* 中间圆的半径变大. 目标颜色的圆的面积也会越来越大.
```css
  .gradient_style {
    background-image: -webkit-gradient(radial, 50 50, 50, 50 50, 10, from(black), color-stop(0.5, red), to(blue));
    height: 100px;
    width: 100px;
  }
```
* 目标圆圆心偏移
* 我们可以给目标圆的半径, 但让他进行偏移
```css
  .gradient_style {
    background-image: -webkit-gradient(radial, 50 50, 50, 20 50, 10, from(black), color-stop(0.5, red), to(blue));
    height: 100px;
    width: 100px;
  }
```
* 经向渐变: 散漫光
```css
  .gradient_style {
    background-image:-webkit-gradient(radial,50 50,50,50 1,0,from(black),to(white));
    height: 100px;
    width: 100px;
  }
```

### 阴影(shadow)
> 阴影效果既可以用于普通元素, 也可用于文字
* 元素和文字的阴影
* 第一个单位: 阴影向右的单位数.例如(向右5px)
* 第二个单位: 阴影向下的单位数.例如(向下2px)
* 第三个单位: 阴影模糊的半径数.
* 第四个单位: 阴影颜色.
```css
.class1{ 
text-shadow:5px 2px 6px rgba(64, 64, 64, 0.5); 
} 
 
.class2{ 
box-shadow:3px 3px 3px rgba(0, 64, 128, 0.3); 
}
```

### 反射(reflect)
> 类似与水中的倒影, 设置起来很简单.
```css
  .classReflect {
    -webkit-box-reflect: below 10px -webkit-gradient(linear, left top, left bottom, from(transparent),
    to(rgba(255, 255, 255, 0.51)));
  }
```

### 背景效果

#### `background-clip`
> 确定背景画区
* `background-clip: border-box`: 背景从 border 开始显示.
* `background-clip: padding-box`: 背景从 `padding` 开始显示.
* `background-clip: content-box`: 背景从content区域开始显示.
* `background-clip: no-clip`: 默认属性, 等同于border-box

#### `background-origin`
> * 通常情况下, 我们的背景是覆盖整个元素的, 现在可以设置背景图片或图片的覆盖范围.
> * 其次: `background-origin`, 用于确定背景的位置, 通常与background-position联合使用. 可以从border, padding, content来计算background-position(就像background-clip).
* `background-origin: border-box`: 从border开始计算background-position;
* `backgournd-origin: padding-box`: 从padding开始计算background-position;
* `background-origin: content-box`: 从content开始计算background-position;

#### `background-size`
> 用来调整背景图片的大小, 主要用于设定图片本身.
`background-size: contain`: 缩小图片以适合元素.(维持图片本身的长宽比)
`background-size: cover`: 扩展图片以适合元素.(维持图片本身的长宽比)  
`background-size: 50% 100%`: 缩小图片至指定的大小, 百分比是根据盒子的高宽所计算来的.

### 盒子模型
```html

```

#### 普通模型





