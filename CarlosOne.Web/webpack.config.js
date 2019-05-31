const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const bundleOutputDir = './wwwroot/dist'

module.exports = () => {
  const isDevBuild = !(process.env.NODE_ENV && process.env.NODE_ENV === 'production')
  
  const extractCSS = new MiniCssExtractPlugin({
    filename: 'style.css'
  })

  return [{
    mode: (isDevBuild ? 'development' :'production'  ),
    stats: { modules: false },
    entry: { 'main': './ClientApp/boot-app.js' },
    resolve: {
      extensions: ['.js', '.vue'],
      alias: isDevBuild ? {
        'vue$': 'vue/dist/vue',
        'assets': path.resolve(__dirname, './ClientApp/assets'),
        'components': path.resolve(__dirname, './ClientApp/components'),
        'config': path.resolve(__dirname, './ClientApp/config'),
        'utils': path.resolve(__dirname, './ClientApp/utils'),
        'views': path.resolve(__dirname, './ClientApp/views')
      } : {
        'assets': path.resolve(__dirname, './ClientApp/assets'),
        'components': path.resolve(__dirname, './ClientApp/components'),
        'config': path.resolve(__dirname, './ClientApp/config'),
        'utils': path.resolve(__dirname, './ClientApp/utils'),
        'views': path.resolve(__dirname, './ClientApp/views')
      }
    },
    output: {
      path: path.join(__dirname, bundleOutputDir),
      publicPath: '/dist/',
      filename: '[name].js'
    },
    module: {
      rules: [
        { test: /\.vue$/, include: /ClientApp/, use: 'vue-loader' },
        { test: /\.js$/, include: /ClientApp/, use: 'babel-loader' },
        { test: /\.css$/, use: isDevBuild ? ['style-loader', 'css-loader'] : [MiniCssExtractPlugin.loader, 'css-loader'] },
        { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./wwwroot/dist/vendor-manifest.json')
      })
    ].concat(isDevBuild ? [
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
        moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]')
      })
    ] : [
      extractCSS,
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      })
    ])
  }]
}
