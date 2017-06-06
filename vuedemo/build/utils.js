// 工具函数:
//    1. 加载资源路径
//    2. 加载样式文件
//    3. 加载不同文件名的样式文件


var path = require('path')
// 配置文件
var config = require('../config')
// 加载css的一个插件
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// 提供的API.

// 资源目录: 根据提供的目录选择, 适合的运行环境
exports.assetsPath = function (_path) {
  // 如果是生产环境的话, 就运行build中的资源目录, 如果是开发环境就运行dev中的资源目录
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
    // 链接路径, 传入的路径和资源本身所在的路径
  return path.posix.join(assetsSubDirectory, _path)
}

// css加载
exports.cssLoaders = function (options) {
  // 参数, 没有就是一个空对象
  // 什么都不传就证明要加载的是css
  // 如果传入的其他的参数, 证明加载如less之类
  options = options || {}

  // 定义加载css的对象
  var cssLoader = {
    loader: 'css-loader',
    options: {
      // 如果在生成环境下, 就产生一个小的压缩版
      minimize: process.env.NODE_ENV === 'production',
      // 根据传入的要求, 决定是否乘车map文件.
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    // 定义各种加载css的加载器, 因为最后肯定要加载css的, 所以先把css放到数组
    var loaders = [cssLoader]
    
    // 如果需要加载其他的对象, 就往里面放
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        // 后面对象的属性有则覆盖,无则添加.
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }


    // Extract CSS when that option is specified
    // (which is the case during production build)
    // 如果有提取的需要, 就利用插件, 提取后返回
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      // 没有的话, 就直接把数组拼接下, 返回了带有style加载器, 还有其他加载器的一系列加载器组
      // 也就是并不进行提取, 直接返回
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// 扩展其他不同的样式加载资源
// 就是加载不同文件中的css资源
// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}
