const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const bundleOutputDir = "./wwwroot/dist";

module.exports = () => {
  const isDevBuild = !(process.env.NODE_ENV && process.env.NODE_ENV === "production");
  return [
    {
      mode: isDevBuild ? "development" : "production",
      stats: { modules: false },
      entry: { site: "./ClientApp/boot-app.js" },
      resolve: {
        extensions: [".js", ".vue"],
        alias: {
          vue$: "vue/dist/vue",
          assets: path.resolve(__dirname, "./ClientApp/assets"),
          components: path.resolve(__dirname, "./ClientApp/components"),
          config: path.resolve(__dirname, "./ClientApp/config"),
          utils: path.resolve(__dirname, "./ClientApp/utils"),
          views: path.resolve(__dirname, "./ClientApp/views")
        }
      },
      module: {
        rules: [
          { test: /\.vue$/, include: /ClientApp/, use: "vue-loader" },
          { test: /\.js$/, include: /ClientApp/, use: "babel-loader" },
          { test: /\.css$/, use: isDevBuild ? ["style-loader", "css-loader"] : [MiniCssExtractPlugin.loader, "css-loader"] },
          {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 8192,
                  name: "img/[hash]-[name].[ext]"
                }
              }
            ]
          }
        ]
      },
      output: {
        path: path.join(__dirname, bundleOutputDir),
        publicPath: "/dist/",
        filename: isDevBuild ? "[name].js" : "[name].[contenthash].js",
        chunkFilename: isDevBuild ? "[name].js" : "[name].[chunkhash].js"
      },
      optimization: {
        chunkIds: "named",
        moduleIds: "named",
        runtimeChunk: "single",
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendor",
              chunks: "initial",
              enforce: true
            }
          }
        }
      },
      plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          Popper: ["popper.js", "default"]
        })
      ].concat(
        isDevBuild
          ? [
              new webpack.SourceMapDevToolPlugin({
                exclude: /vendor.*.*/,
                filename: "[file].map",
                moduleFilenameTemplate: path.relative(bundleOutputDir, "[resourcePath]")
              })
            ]
          : [
              new webpack.HashedModuleIdsPlugin(),
              new MiniCssExtractPlugin({
                filename: isDevBuild ? "[name].css" : "[name].[contenthash].css",
                chunkFilename: isDevBuild ? "[name].css" : "[name].[chunkhash].css"
              }),
              new OptimizeCSSPlugin({
                cssProcessorOptions: {
                  safe: true
                }
              })
            ]
      )
    }
  ];
};
