'use strict';

/**
 * @ngdoc filter
 * @name angularAppDemoApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the angularAppDemoApp.
 */
angular.module('angularAppDemoApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
