'use strict';

// set the myApp module configuration
angular.module('myApp').
config(['$locationProvider', '$routeProvider', 
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    
    $routeProvider.otherwise({redirectTo: '/view1'});
  }
]);
