'use strict';

// set the myApp module configuration
angular.module('myApp').
config(['$locationProvider', '$routeProvider', 
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    
    //$routeProvider.otherwise({redirectTo: '/view1'});
    $routeProvider.
        when('/heroes', {
          template: '<hero-list></hero-list>'
        }).
        when('/heroes/:heroId', {
          template: '<hero-detail></hero-detail>'
        }).
        otherwise('/heroes');
  }
]);
