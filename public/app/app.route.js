angular.module('app.route', ['ngRoute'])

 .config(function($routeProvider, $locationProvider) {

  $routeProvider

    .when('/', {
      templateUrl : 'public/app/views/selectScreen.html'
    })

    .when('/:char_id', {
      templateUrl : 'public/app/views/charsheet.html',
      controller : 'sheetController',
      controllerAs : 'sheet'
    })

    .when('/:char_id/attributes', {
      templateUrl : 'public/app/views/attributes.html',
      controller : 'sheetController',
      controllerAs : 'sheet'
    });

  $locationProvider.html5Mode(true);
 });
