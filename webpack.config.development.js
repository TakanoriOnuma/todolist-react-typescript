const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

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

module.exports = config;
