const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');

const baseConfig = require('./webpack.config.base');

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve('./dist'),
    // serverのルートパスを設定する
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    host: '0.0.0.0',
    disableHostCheck: true,
    hot: true,
    inline: true,
    overlay: true,
    port: 4100
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

// 出力されるすべての .js ファイルは、'source-map-loader' で
// 再加工されたソースマップを持ちます。
config.module.rules.push({
  enforce: 'pre',
  test: /\.js$/,
  loader: 'source-map-loader'
});

config.module.rules.push({
  test: /\.(sass|scss)$/,
  use: [
    'css-hot-loader',
    // hot-reloadできるようにstyle-loaderを使う
    {
      loader: 'style-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        modules: true,
        localIdentName: '[name]-[local]-[hash:base64:5]',
        // 0 => no loaders (default);
        // 1 => postcss-loader;
        // 2 => postcss-loader, sass-loader
        importLoaders: 2
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        plugins: [
          autoprefixer({
            browsers: [
              'last 2 version',
              'IE 11'
            ]
          })
        ]
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'sass-resources-loader',
      options: {
        sourceMap: true,
        resources: [path.resolve('./src/css/resources/*.scss')]
      }
    }
  ]
});

module.exports = config;
