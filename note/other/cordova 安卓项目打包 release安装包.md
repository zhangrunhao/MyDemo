# cordova 安卓项目打包 release安装包

## 问题描述:
* 打包安卓项目, 如果是在项目中只是使用debug包的话, 其中的签名方式使用的都是cordova框架本身, 那么每次打包的话, 都会把之前的安装包给覆盖掉.
* 现在打包做出一个release包, 可以正式应用.

## 打包步骤:

### 生成自己的签名证书:
1. 打开`cmd`
2. 执行命令: `keytool -genkey -v -keystore D:\mytest.keystore -alias test -keyalg RSA -validity 20000`  **(稍后解释每一项的意义)**![01.png](http://onh27ty1g.bkt.clouddn.com/cordova_apk_releaserealse_01.png)
3. 输入密码: `123456`![02.png](http://onh27ty1g.bkt.clouddn.com/cordova_apk_releaserealse_02.png)
4. 再次输入密码: `123456`
5. 再输入很多的信息.最后的时候输入一个`y`即可
![03.png](http://onh27ty1g.bkt.clouddn.com/cordova_apk_releaserealse_03.png)
![04.png](http://onh27ty1g.bkt.clouddn.com/cordova_apk_releaserealse_04.png)
6. 再次输入密码可直接回车, 此时密码为`123456`
![05.png](http://onh27ty1g.bkt.clouddn.com/cordova_apk_releaserealse_05.png)
7. **此时已经在D盘生成了一个我们的证书**
![06.png](http://onh27ty1g.bkt.clouddn.com/cordova_apk_releaserealse_06.png)

### 签名证书中每个参数含义解释:
* -keystore D:\mytest.keystore : 表示生成的证书及其存放路径
* -alias test : 表示这个证书的别名
* -keyalg RSA : 表示采用的RSA算法
* -validity 20000 : 表示证书的有效期是20000天

### 对安装包进行签名
* 在项目的根目录下执行`cordova build android --release`
![07.png](http://onh27ty1g.bkt.clouddn.com/cordova_apk_releaserealse_07.png)
* 这个安装包, 已经是一个release版本的安装包了, 接下来的事情, 便是我们把它进行一个签名过程.
* 我们进入安卓平台下面的apk这个目录
* 把我们的证书, 放到这个目录下面
* 并在这个目录里面打开`cmd`
![08.png](http://onh27ty1g.bkt.clouddn.com/cordova_apk_releaserealse_08.png)
* 在命令行中执行 `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore test.keystore android-release-unsigned.apk  test` 回车
* 根据提示输入密码, 回车
![09.png](http://onh27ty1g.bkt.clouddn.com/cordova_apk_release09.png)
* 出现 jar 已签名的字样即可.
* 此时已经完成了签名
* 虽然名称还是一个为签名的安装包, 但其实已经更改了, 是已经签名过了的.

### 快速生成签名后的安装包
* 把我们的签名证书放到根目录中
> 先到这吧, 后面一直都能成功实现, 都有错, 网上绝大多数的博客都是复制的同一篇, 明明是错误的命令, 这么多人复制过去..


