'use strict';

define(function () {
  function MainCtrl($scope, galleryService) {
    $scope.uploadErrors = [];
    $scope.asyncMessage = [];
    $scope.progressWidth = {width: "100%"};
    $scope.queueFileCount = 0;
    $scope.galleryService = galleryService;
    $scope.awesomeThings = ['AngularJS', 'RequireJS']
  }

  MainCtrl.$inject = ['$scope', 'galleryService'];
  return MainCtrl;
});