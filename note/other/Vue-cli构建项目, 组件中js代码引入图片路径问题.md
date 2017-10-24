# Vue-cli构建项目, 组件中js代码引入图片路径问题.

## 问题描述
* `.vue`的组件分成三个部分, `template`结构部分, `script`路径代码, `style`页面样式
* 首先, 我们可以在template可以正确引入, 无论是dev, 还是build都没有问题, 在style中引入背景图的话, 我们在上一篇文章中已经解决.
* 这次我们发现如果需要在js代码中控制图片路径的显示, 使用`:src`的话, 直接写是错误的, 并不能打包, 在 `dev` 和 `build` 都是错误的, 都不能正确读取.
* 这就是我们的问题:
* **在组件的js中, 如果存在路径, 不能被争取读取**

## 解决方法
> 理解在webpack中一切皆模块的思想: 将所有的图片按照模块进行处理

* 即新建一个文件, 然后使用 `import` 引入所有的图片, 使用即可.

* 具体代码如下: 

```js
// src/config/images.js

import head01 from '../img/1.jpg'
import head02 from '../img/2.jpg'
import background from '../img/background.jpg'

export default {
  head01: head01,
  head02: head02,
  background: background
}
```

```js
// src/components/TimeBox.vue

<script>
import img from '../config/images.js'
export default {
  name: 'TimeBox',
  data () {
    return {
      imgUrl: img.head01
    }
  }
}
</script>
```

## 解决思路

### 修改配置
* 开始时, 入坑了, 总是以为要像scss那样, 需要修改配置项才行.
* 最后肯定是不行的, 没有找到这样的配置项, 也暴露出我在webpack上太菜, 连最基本的都还没有搞清楚

### 绝对路径
* 采用绝对路径后, 在`dev`的时候, 的确把问题解决了, 
* 但是需要在把图片放到static目录下面, 其实也是一种方法.
* 但是不知道为什么, 打包之后, 依旧不能成功读取.这就让人很绝望了, 因为打包之后不再是相对路径, 我们需要一个相对路径才行

### 引入模块
* 这也是webpack的精髓吧, 一切皆模块
* 只是现在还没有能好好理解模块化的思想, 也没有把模块化的概念掌握.