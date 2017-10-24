# Vue项目搭建流程 以及 目录结构构建
> 一个小的Vue项目, 基于微信浏览器的移动端, 做了这么多的练习项目, 这一次准备记录下构建的过程, 以方便以后的调高效率


## 环境准备

### 操作系统
* 我的 `windows 7` 操作系统, 如果是mac系统的话, 希望我可以在最短的时间内可以进行尝试. 好期待..

### 软件环境
* Node环境, 是必备环境, 包括模拟服务器的搭建, 到webpack的自动打包.
* 直接在[官网](https://nodejs.org/en/)进行下载, 并一步步安装即可
* 命令行工具, 可以直接使用`cmd`, 这里使用了一个`Git Bash`
* 安卓`vue-cli`工具, 这是Vue项目的自动化构建工具, 可以省去很多的配置, 尤其是webpack的配置
* ![软件环境](http://onh27ty1g.bkt.clouddn.com/vue%E6%9E%84%E5%BB%BA%E9%A1%B9%E7%9B%AE/01%E7%8E%AF%E5%A2%83.png)

## 构建项目
> 我们使用的是`vue-cli`脚手架, 也是Vue官方退出的一个模板搭建工具

### 安装
* `npm install -g vue-cli`
* 直接全局安装脚手架, 我们就可以很方便的构建项目

### 初始化项目
* 在想要构建项目的文件夹, 执行命令行
* `vue init webpack [项目名称]`
* 例如 `vue init webpack wx`
* ![初始化项目](http://onh27ty1g.bkt.clouddn.com/vue%E6%9E%84%E5%BB%BA%E9%A1%B9%E7%9B%AE/02%E5%88%9D%E5%A7%8B%E5%8C%96.png)

### 确定配置项
> 执行初始话命令后, 就需要一步步的进行项目基本配置的额确认
1. 第一步确认工程名称 `Project name (项目名称)` 回车即可
2. 第二步确认工程类型 `Project description (A Vue.js project)` 回车即可
3. 第三步确认作者 `Author (zhangrh <zhangrhweb@163.com>)` 上面是我的邮箱, 应该是配置Git环境的时候设置的.
4. 第四步选择打包方式 我直接回车了: 好像是如果选了第二种方式, 可以节省很小的一部分空间
  > * Runtime + Compiler: recommended for most users    运行加编译,并且推荐用户选择
  > * Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specificHTML) are ONLY allowed in .vue files - render functions are required elsewhere  仅在运行环境, 我也没能很好的理解
  > * 直接回车选择第一个即可
5. 确认安装路由, `Install vue-router`: 我感觉这是必须安装的一项. 输入`Y` 回车确认.
6. 是否使用`ESLint`检查语法, `Use ESLint to lint your code`, 很好用, 用来规范代码风格. 完全确认代码风格.
7. 选择一个ESLint风格预设`Pick an ESLint preset` 直接使用默认的`Standard` 即可.
8. 是否安装测试环境 `Setup unit tests with Karma + Mocha?` n, 如果不进行测试的话, 我想没有必要安装, 还没有试过, 这一项, 改天专门用用看, 这里就不进行演示了
9. 同样为一个测试环境 `Setup e2e tests with Nightwatch? ` 同样为一个测试环境, 依旧不考虑
10. 当我们运行到此处的时候, 我们就是初始化项目完成了.![项目搭建完成](http://onh27ty1g.bkt.clouddn.com/vue%E6%9E%84%E5%BB%BA%E9%A1%B9%E7%9B%AE/03%E9%85%8D%E7%BD%AE%E5%AE%8C%E6%88%90.png)

### 测试运行
> 构建完成后, 我们可以执行把这个Demo跑起来
* `cd wx`: 进入文件夹
* `npm install`: 安装所有的依赖项
* `npm run dev`: 测试环境跑起来
* ![测试运行成功](http://onh27ty1g.bkt.clouddn.com/vue%E6%9E%84%E5%BB%BA%E9%A1%B9%E7%9B%AE/04%E6%B5%8B%E8%AF%95%E8%BF%90%E8%A1%8C%E6%88%90%E5%8A%9F.png)

## 目录结构
> 这是用`vue-cli`工具自动构建的目录结构

### 未修改前项目结构
```
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建公用工具
|   |-- vue-loader.conf.js           // vue加载器, 加载.vue文件
|   |-- webpack.base.conf.js         // webpack基础环境配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置文件
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|-- node_modules                     // 项目依赖的模块
|-- src                              // 源码目录
|   |-- assets                       // 资源目录
|   |   |-- logo.png                 
|   |-- components                   // vue业务组件
|   |   |-- Hello.vue                 
|   |-- router                       // vue的路由配置
|   |   |-- index.js                
|   |-- App.vue                      // 页面入口文件 (根组件)
|   |-- main.js                      // 程序入口文件 (入口JS文件)  加载各种公共组件
|-- static                           // 静态文件，比如一些图片，json数据等
|   |-- .gitkeep                     
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .eslintignore                    // ESLint需要忽略的文件
|-- .eslintrc.js                     // ESLint配置文件, 定义语法规则
|-- .gitignore                       // git上传需要忽略的文件格式
|-- .postcssrc.js                    // CSS代码支持
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息
|-- README.md                        // 项目说明
```

### 更改后的目录
> 只更改src中的目录即可: 因为只有src中放置我们真正的源码工程
* 这个项目中不会用到vuex, 所以等会就把store文件删掉了
```
|-- src                              // 源码目录
|   |-- api                          // 接口调用文件
|   |-- base                         // 公用组件
|   |-- common                       // 公用文件 
|   |   |-- fonts
|   |   |-- image
|   |   |-- js
|   |   |-- stylus
|   |-- components                   // 业务组件   
|   |-- router                       // 路由配置
|   |   |-- index.js
|   |-- store                        // vuex配置
|   |   |-- actions.js
|   |   |-- getters.js
|   |   |-- index.js
|   |   |-- mutation.js
|   |   |-- state.js
|   |-- App.vue                      // 页面入口文件 
```

## 通用文件

## 配置路由

## 配置组件

## 模拟数据

## 动态渲染

## 发布代码
