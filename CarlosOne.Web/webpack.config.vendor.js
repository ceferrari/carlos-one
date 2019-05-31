const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const bundleOutputDir = './wwwroot/dist'

module.exports = () => {
  const isDevBuild = !(process.env.NODE_ENV && process.env.NODE_ENV === 'production')
  
  const extractCSS = new MiniCssExtractPlugin({
    filename: 'vendor.css'
  })

  return [{
    mode: (isDevBuild ? 'development' : 'production' ),
    stats: { modules: false },
    resolve: {
      extensions: ['.js']
    },
    module: {
      rules: [
        { test: /\.css(\?|$)/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
        { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' }
      ]
    },
    entry: {
      vendor: [
        'bootstrap',
        'bootstrap/dist/css/bootstrap.css',
        'event-source-polyfill',
        'vue',
        'vuex',
        'axios',
        'vue-router',
        'jquery'
      ]
    },
    output: {
      path: path.join(__dirname, bundleOutputDir),
      publicPath: '/dist/',
      filename: '[name].js',
      library: '[name]_[hash]'
    },
    plugins: [
      extractCSS,
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default']
      }),
      new webpack.DllPlugin({
        path: path.join(__dirname, bundleOutputDir, '[name]-manifest.json'),
        name: '[name]_[hash]'
      })
    ]
  }]
}
