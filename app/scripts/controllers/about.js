'use strict';

/**
 * @ngdoc function
 * @name angularAppDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularAppDemoApp
 */
angular.module('angularAppDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
