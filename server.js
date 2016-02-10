var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var dev = require('webpack-dev-middleware');

var app = express();
var compiler = webpack(config);

app.use(dev(compiler, {publicPath: config.output.publicPath}));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3003, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3003');
});

/*
var webpack = require('webpack'),
    config = require('./webpack.config.js'),
    dev = require('webpack-dev-middleware'),
    hot = require('webpack-hot-middleware'),
    express = require('express'),
    path = require('path');

var compiler = webpack(config);

var app = express();

app.use(dev(compiler, {publicPath: config.output.publicPath}));
app.use(hot(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

console.log('Compiling...');
app.listen(5000, 'localhost', function (err) {
  if (err) return console.err(err);
});
*/