var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  // 测试环境
  NODE_ENV: '"testing"'
})
