const path = require('path')
const webpck = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
const Visualizer = require('webpack-visualizer-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Spliting'
    }),
    new Visualizer({
      filename: './statistics.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}