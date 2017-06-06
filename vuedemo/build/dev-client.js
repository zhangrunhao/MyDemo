/* eslint-disable */

// 测试环境的 客户端运行
require('eventsource-polyfill')
// 客户端的加载方式, 
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
