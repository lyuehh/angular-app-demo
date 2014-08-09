'use strict';

/**
 * @ngdoc function
 * @name angularAppDemoApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the angularAppDemoApp
 */
angular.module('angularAppDemoApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
