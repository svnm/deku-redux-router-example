var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var dev = require('webpack-dev-middleware');

var app = express();
var compiler = webpack(config);

app.use(dev(compiler, {publicPath: config.output.publicPath}));
app.use('/build', express.static(__dirname + '/build'))

/* api routes */
var movie = require('./api/movie');
app.use('/api/movie', movie);

var movies = require('./api/movies');
app.use('/api/movies', movies);


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
