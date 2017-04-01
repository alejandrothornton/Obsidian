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
    })

    .when('/:char_id/description', {
      templateUrl : 'public/app/views/description.html',
      controller : 'sheetController',
      controllerAs : 'sheet'
    })

    .when('/:char_id/actions', {
      templateUrl : 'public/app/views/search.html',
      controller : 'sheetController',
      controllerAs : 'sheet'
    })

    .when('/:char_id/class', {
      templateUrl : 'public/app/views/search.html',
      controller : 'sheetController',
      controllerAs : 'sheet'
    })

    .when('/:char_id/traits', {
      templateUrl : 'public/app/views/search.html',
      controller : 'sheetController',
      controllerAs : 'sheet'
    })

    .when('/:char_id/spells', {
      templateUrl : 'public/app/views/search.html',
      controller : 'sheetController',
      controllerAs : 'sheet'
    })

    .when('/:char_id/reactions', {
      templateUrl : 'public/app/views/search.html',
      controller : 'sheetController',
      controllerAs : 'sheet'
    })

    .when('/:char_id/legactions', {
      templateUrl : 'public/app/views/search.html',
      controller : 'sheetController',
      controllerAs : 'sheet'
    });

  $locationProvider.html5Mode(true);
 });
