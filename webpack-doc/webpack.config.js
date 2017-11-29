const path = require('path')
const webpck = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: [
      'lodash'
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Caching'
    }),
    new webpck.HashedModuleIdsPlugin(),
    new webpck.optimize.ModuleConcatenationPlugin({
      name: 'vendor'
    }),
    new webpck.optimize.ModuleConcatenationPlugin({
      name: 'runtime'
    })
  ],
  output: {
    filename: '[name],[chunkhash].js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}