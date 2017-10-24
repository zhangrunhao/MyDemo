# Cordova环境搭建

## 前言

### 什么是Cordova
* 使用HTML, CSS, JavaScript来搭建跨平台的应用
* 包括了Android, IOS, Widnows等平台,个人认为非常的强大.
* 基本原理就是使用JavaScript这门语言, 来调用适用于特定平台的语言, 从而达到跨平台的目的.
* 调用设备的时候, 使用的是插件, cordova很多年了, 在npm上有大量的插件, 各路大神, 精心开发.
* 代码的复用程度, 就看这些插件支持平台的数量了.
* 例如我现在只开发安卓的, 那我就找支持安卓的插件就好了, 如果到时开发ios, 就需要找支持苹果的插件了, 很多插件都是支持大部分的平台, 非常强大. 所以这个框架在开发跨平台的应用时, 做大了百分之七十左右的代码复用, HTML, CSS, 基本的JS逻辑都不用再重写了.

### 准备
* node安装包: [node官网](https://nodejs.org/en/). 直接下载, 非常方便
* jdk安装包: [百度软件](https://www.baidu.com/link?url=yG9ED6qHAMq5-zexJ7acmBXqo-7xxNhlKevFBkqhrX8DdnZNc9PwuE_3fTvDxXxahBnLzIQ1MrNOAYOhltfMMb8k0PrLx_uKCAuja8P1UB_&wd=&eqid=9763a9f80000069a000000025915921d): 百度直接下载吧, 同事那里拷贝来的.**需要8.0以上的jdk**
* 关于安卓环境的话, 我自己也搞得非常复杂, 现在没有弄得很清楚, 但是能用了
* 首先是安装了一个 AS, 然后同学那里拷贝了协议 SDK, 单单是这一步就特别费事, 当时用我自己的笔记本, 很是难受. 再后来, AS 装上了 通过as自动装了一个 Grandle , 其实我也不太清楚.感觉自己还得装个虚拟机, 再把环境打打看. 后来AS玩不来, 就又听人建议, 换了Elipse, 带有ADT插件的一版, 我记得再后来, 还是不中, 就又有人发给我一版SDK, 还是我不行, 我又往里面放了一个25, 反正现在是能用了... 手动尴尬... 我把SDK放到百度网盘中, 大家自己下载吧, 我用的是这一套, 亲测, 能用.
* 自用SDK: [百度网盘]()

## 搭建基本环境

### 安装node, 
1. 双击我们的安装包, 傻瓜安装, 一步一步 最后执行 `node -v`能够出来版本号, 就没问题了
2. 安装淘宝镜像: 国内的网络环境, 大家都懂, 然后淘宝关于npm有一套镜像, 非常好用.
3. 首先执行 `npm config set registry https://registry.npm.taobao.org --global`
4. 然后执行 `npm config set disturl https://npm.taobao.org/dist --global`
5. 别去安装什么 `cnpm` , 会有奇怪的模块路径, 容易出现错误.

### 安装JDK
1. 双击安装
2. 配置环境变量
3. 不会的同学, 麻烦百度下..

### 配置安卓的环境变量
> 讲真的, 感觉最难的就是配置环境了, 只要环境搞定了, 一切都没有问题了.[官方指导](http://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)
1. 我是用了我自己的SDK
2. 然后把环境变量设置在了我的SDK下面
3. 需要设置两个
4. 这是我的环境变量
```
D:\software-page\adt-bundle-windows-x86_64-20140702\sdktools;
D:\software-page\adt-bundle-windows-x86_64-20140702\sdk\platform-tools;;
```

### 安装cordova
1. 其实到这就非常简单了
2. 通过npm安卓cordova `npm install cordova -g`
3. 安装成功后, 通过`cordova -v`看到版本号就可以了.

## 创建cordova应用
> 到这我们可以尝试创建我们的第一个cordova应用, 最简单的就是先让他在浏览器上跑起来.

### 注意事项:
* 使用管理员运行命令行
* 多看官方文档, 多看官方文档, 多看官方文档, 其实我也看了好多教程, 最后读官方文档的时候, 发现还是官方的文档写的最为准确.

### 创建应用,并尝试添加浏览器平台
1. 进入一个目录 创建工程 `cordova create MyApp`
2. 进入工程 `cd MyApp`
3. 添加平台 例如: 浏览器 `cordova platform add browser `
4. 运行工程 在浏览器平台上 `cordova run browser`
5. 如果能正常运行, 就证明没问题了. 至少证明这个工程没毛病,但是不能证明安卓环境没问题

### 可以尝试添加一个安卓平台, 看看能不能跑起来
1. 添加安卓平台 `cordova platform add android `
2. 检测现在的环境 `$ cordova requirements`
3. 能行就差不多了.
4. 然后跑跑试试吧, 最好连个真机, 开开调试. 我的模拟器 一直不能用, `cordova run android`

## 写在后面

### 菜的一逼
* 虽然知道自己贼菜,还是想要记下来, 以后找个周末, 再把环境好好搭建一次, 把这个文档补充完整.
* 还是菜啊, 虽然调处来了, 但绝对是蒙出来的, 但我依旧有勇气写下来, 就问你服不服. 哈哈哈哈
* 弄好环境,  能跑起来, 大约花了十天左右, 后来又写了一个Demo, 调用了一些常用的插件.
* 这是我那个Demo的 github地址: [github](https://github.com/JingLiii/testCordova)

### 最后
* 欢迎各位大神指正啊, 刚刚入坑的小白在此谢过．