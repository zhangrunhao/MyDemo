// 构建函数:
//    用来生成各个资源文件

// 先检查各个安装板的版本
require('./check-versions')()

// 环境为生产环境
process.env.NODE_ENV = 'production'

// 实现node命令行的loading时的各种效果
var ora = require('ora')

// 始终不知道这个模块是做什么的
var rm = require('rimraf')
var path = require('path')
// 产生各种颜色用
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

// 构建开始, 输出在'构建生产环境'
var spinner = ora('building for production...')
spinner.start()

// 把一个拼接起来的路径传了进去
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err

  // 打包, 构建
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    // 循环输出 打包的每一个文件
    process.stdout.write(stats.toString({
      // 需要展示的信息
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
