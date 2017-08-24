## `<img>`放到`<div>`中底部出现空隙 以及解放方案.

### 形成情况:
* 外部的<div>不设置宽高, 由内部图片撑开
* 撑开后, 底部会有空隙
* ![底部空隙问题截图](http://onh27ty1g.bkt.clouddn.com/img%E5%9C%A8div%E4%B8%AD%E5%BA%95%E9%83%A8%E5%87%BA%E7%8E%B0%E7%A9%BA%E9%9A%99.png)

### 问题原因:
* div元素中的行内元素的默认`vertical-align`对齐方式是基线`baseline`
* img是行内元素, 所以会与基线对齐, 造成底下的空隙

### 解放方法:
1. img标签转换为块级元素:  `display: block`
2. 设置外层div的字体大小为0, `font-size: 0`
3. 设置img垂直方向的对齐方式, 只要是其他三种皆可, `vertical-align:bottom`，`vertical-align:middle`，`vertical-align:top`


