var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  // Node 的环境是 开发环境
  NODE_ENV: '"development"'
})
