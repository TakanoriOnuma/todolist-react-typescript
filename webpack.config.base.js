const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'index': [path.resolve('./src/typescripts/entry.tsx')]
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.pug$/,
        use: [{
          loader: 'pug-loader',
          options: {
            pretty: true
          }
        }]
      },
      // {
      //   test: /\.(jpg|png|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'materials/',
      //         publicPath: (url) => './materials/' + url
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.(eot|ttf|woff|woff2)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[ext]',
      //       outputPath: 'fonts/',
      //       publicPath: (url) => './fonts/' + url
      //     }
      //   }
      // }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/html/index.pug'),
      hash: true,
      inject: true
    }),
    // new StyleLintPlugin({
    //   configFile: path.resolve(__dirname, '.stylelintrc.yml'),
    //   files: ['**/*.scss', '**/*.vue']
    // })
  ]
};
