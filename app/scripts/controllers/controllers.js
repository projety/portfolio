'use strict';

define(['angular', "controllers/mainCtrl", "controllers/itemCtrl"],
  function (angular, mainCtrl, itemCtrl) {
    var controllers = angular.module('controllers', []);
    controllers.controller("mainCtrl", mainCtrl);
    controllers.controller("itemCtrl", itemCtrl);
    return controllers;
  });