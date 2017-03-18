const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV = process.env.NODE_ENV === 'development';

const config = {
  context: path.resolve(__dirname),
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './build'),
    filename: '[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
    }, {
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            modules: true,
            minimize: false,
            camelCase: true,
            importLoaders: 2,
            localIdentName: DEV ? '[name]__[local]__[hash:base64:8]' : '[hash:base64:8]'
          }
        }, {
          loader: 'postcss-loader'
        }, {
          loader: 'sass-loader'
        }]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[chunkhash].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      minChunks({userRequest}) {
        return typeof userRequest === 'string' && userRequest.includes('node_modules');
      }
    }),
    new webpack.ProvidePlugin({
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new HtmlWebpackPlugin({
      title: 'Marvel Universe',
      showErrors: DEV,
      template: 'src/index.ejs'
    })
  ]
};

if (!DEV) {
  config.plugins.push(
    new HtmlWebpackPlugin.optimize.UglifyJsPlugin()
  )
}

module.exports = config;