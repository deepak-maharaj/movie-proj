var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var routes = require('./server/routes/moviesRoute');
var routesCity = require('./server/routes/cityRoute');
var theaterRoute = require('./server/routes/theaterRoute');
var timeRoute = require('./server/routes/timeRoute');


mongoose.connect('mongodb://localhost/MovieData');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});

var app = express();
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

app.use('/api', routes); //using routes
app.use('/api', routesCity); //using routes
app.use('/api', theaterRoute); //using routes
app.use('/api', timeRoute); //using routes



if (app.get('env') === 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');
  var config = require('./webpack.config');
  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/build",
    headers: { "X-Custom-Webpack-Header": "yes" },
    stats: {
      colors: true
    }
  }));
}

app.listen(4000, function(){
  console.log('Server Started.... http://localhost:4000');
});
