var webpack = require('webpack')
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: '#source-map',
  entry: [
    'webpack-hot-middleware/client',
    './main.jsx'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    library: 'app',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: [['transform-react-jsx', {pragma: 'element'}]]
        }
      }, 
      { 
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') 
      }
    ]
  },
};
