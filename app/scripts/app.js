'use strict';

define([
  'angular',
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'services/services',
  'directives/directives',
  'providers/providers',
  'filters/filters',
  'controllers/controllers'
], function (angular, filters, services, directives, controllers) {
  'use strict';

  return angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'ngAnimate',
    'services',
    'directives',
    'providers',
    'filters',
    'controllers'
  ]);
});