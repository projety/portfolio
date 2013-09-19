'use strict';

define(function () {
  function ItemCtrl($scope) {
    $scope.item = ['item'];
  }

  ItemCtrl.$inject = ['$scope'];
  return ItemCtrl;
});