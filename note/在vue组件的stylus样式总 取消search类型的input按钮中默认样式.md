# 记录一个坑

## 环境
* Vue组件
* 使用了Stylus的CSS风格.

## 问题
* input输入框使用了 `type="search"`这种类型
* 使用后发现, 输入内容后, 最后用个取消按钮,极其恶心, 见截图
* ![input为search的坑](http://onh27ty1g.bkt.clouddn.com/note/input%E4%B8%BAsearch%E7%9A%84%E5%9D%91.png)

## 解决
* 在input类型, 有提供针对此类型的伪元素, 可以进行隐藏
* ![input为search类型解决方法](http://onh27ty1g.bkt.clouddn.com/note/input%E4%B8%BAsearch%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.png)

## 总结
* 开始时, 总结在input后面添加伪元素, 是无效的
* ![input为search无效的方法](http://onh27ty1g.bkt.clouddn.com/note/input%E4%B8%BAsearch%E6%97%A0%E6%95%88%E7%9A%84%E6%96%B9%E6%B3%95.png)
* 不清楚, 此问题原因, 有大神讲与伪元素的继承有关.
* 看来, 应该总结下这一块了

## 伪元素继承问题
> 待完成