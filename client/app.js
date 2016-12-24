'use strict';

var angular = require('angular');
require('angular-route');

var app = angular.module('myApp', ['ngRoute']);

require('./controllers');
require('./leftPan');


app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: 'views/main.html',
    controller: 'MainController'
  }).when('/movie',{
    templateUrl: 'views/movie.html',
    controller: 'movieController'
  }).when('/delete',{
    templateUrl: 'views/delete.html',
    controller: 'MainController'
  }).when('/edit',{
    templateUrl: 'views/edit.html',
    controller: 'MainController'
    }).when('/city',{
    templateUrl: 'views/city.html',
    controller: 'CityController'
    }).when('/oder',{
    templateUrl: 'views/oder.html',
    controller: 'MainController'
  })
  .when('/theater',{
    templateUrl: 'views/theater.html',
    controller: 'theaterController'
  })

  .when('/time',{
    templateUrl: 'views/time.html',
    controller: 'timeController'
  });

});
