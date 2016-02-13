var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var dev = require('webpack-dev-middleware');

var app = express();
var compiler = webpack(config);

app.use(dev(compiler, {publicPath: config.output.publicPath}));

/* api routes */
var survey = require('./api/survey');
app.use('/api/survey/:id', survey);

var surveys = require('./api/surveys');
app.use('/api/surveys', surveys);


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
