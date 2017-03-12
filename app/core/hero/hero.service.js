'use strict';

angular.
  module('core.hero').
    factory('Hero', ['$resource',
      function($resource) {
          return $resource('heroes/:heroId.json', {}, {
              query: {
                  method: 'GET',
                  params: {heroId: 'heroes'},
                  isArray: true
              }
          });
      }
    ]);