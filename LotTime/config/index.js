// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

// console.log(__dirname)
// E:\github\MyDemo\vuedemo\config

module.exports = {
  // 构建时的一些配置项
  build: {
    // 环境, 来自于生产环境
    env: require('./prod.env'), 
    // index文件. 放到哪里
    // resolve: 相对路径变为绝对路径
    index: path.resolve(__dirname, '../../testPro/www/index.html'), // 指定index打包后的指定路径,
    // 资源的根文件夹
    assetsRoot: path.resolve(__dirname, '../../testPro/www'), // 打包之后的存放路径
    // 资源的存放目录
    assetsSubDirectory: 'static',
    // 资源的公共路径为 根路径
    assetsPublicPath: './',
    // 是否生成公共资源地图
    productionSourceMap: true,

    // 将静态资源进行打包处理
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // 使用一个额外的命令, 去执行构建的命令
    // Run the build command with an extra argument to
    // 构建完成后生成一个分析报告
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`

    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  // 运行配置
  dev: {
    // 环境
    env: require('./dev.env'),
    // 端口号
    port: 9000,
    // 是否自动在浏览器中打开
    autoOpenBrowser: true,
    // 资源目录
    assetsSubDirectory: 'static',
    // 资源公共路径
    assetsPublicPath: '/',
    // 代理表格, 这是什么意思呢??
    proxyTable: {},

    // 完全不懂 这一段将了什么啊.....
    // CSS 的资源对照路径默认是关闭的, 因为相关路径还没有构建完成
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // 可以依照文档中的参数
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // 在我们的经验中, 他们一般都是按照预期的发生
    // In our experience, they generally work as expected,
    // 只需要知道问题所在, 当能够使用参数时.
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
