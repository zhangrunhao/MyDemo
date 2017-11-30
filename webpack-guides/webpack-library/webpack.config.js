const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'weabpack-numbers.js',
    library: 'webpackNumbers',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
  externals: {
    lodash: {
      commonjs: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
}