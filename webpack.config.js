var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var values = require('postcss-modules-values');

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/public/'
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader',
        query: { presets: ['es2015'], plugins: [['transform-react-jsx', {pragma: 'element'}]] }
      },
      { 
        test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') 
      }
    ]
  },
  postcss: [ 
    autoprefixer({ browsers: ['last 2 versions'] }), values 
  ],
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false }, sourceMap: false, mangle: false, minimize: true })
  ]

};
