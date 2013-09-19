'use strict';

define(['angular', 'directives/focus', 'directives/gallery'],
  function (angular, ngbkFocus, gallery){
    var directives = angular.module('directives', []);
    directives.directive('ngbkFocus', ngbkFocus);
    directives.directive('gallery', gallery);
    return directives;
  });