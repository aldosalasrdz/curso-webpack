const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
/* const CopyPlugin = require('copy-webpack-plugin') */

const ruleForStyles = {
  test: /\.css|\.styl$/i,
  use: [MiniCssExtractPlugin.loader,
    'css-loader',
    'stylus-loader'
  ]
}

const ruleForJavaScript = {
  test: /\.m?js$/,
  exclude: /node_modules/,
   use: {
    loader: 'babel-loader'
  }
}

const ruleForImages = {
  test: /\.png/,
  type: 'asset/resource'
}

const ruleForFonts = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/fonts/[hash][ext]'
  }
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    assetModuleFilename: 'assets/images/[hash][ext]'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      ruleForJavaScript,
      ruleForStyles,
      ruleForImages,
      ruleForFonts
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin()
  ]
}
