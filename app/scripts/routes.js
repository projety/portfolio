define(['angular', 'app'], function(angular, app) {
  'use strict';

  return app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'mainCtrl'
    });
    $routeProvider.when('/item', {
      templateUrl: 'views/item.html',
      controller: 'itemCtrl'
    });
    $routeProvider.otherwise({redirectTo: '/'});
  }]);

});