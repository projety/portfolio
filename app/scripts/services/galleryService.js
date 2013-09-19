'use strict';

define(['angular'],function () {
  return function ($http) {
    return {
      save: function (data) {
        return $http.post('/someUrl', data);
      }
    }
  }
});