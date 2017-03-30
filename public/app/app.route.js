angular.module('app.route', ['ngRoute'])

 .config(function($routeProvider, $locationProvider) {

  $routeProvider

    .when('/', {
      templateUrl : 'public/app/views/home.html',
    });

  $locationProvider.html5Mode(true);
 });
