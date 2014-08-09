'use strict';

/**
 * @ngdoc function
 * @name angularAppDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppDemoApp
 */
angular.module('angularAppDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
