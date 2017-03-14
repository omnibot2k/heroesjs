'use strict';

// Register `heroDetail` component, along with its associated controller and template
angular.
  module('heroDetail').
  component('heroDetail', {
    templateUrl: 'hero-detail/hero-detail.template.html',
    controller: ['$routeParams', 'Hero',
      function HeroDetailController($routeParams, Hero) {
        var self = this;
        self.hero = Hero.get({heroId: $routeParams.heroId}, function(hero) {
          self.setImage(hero.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
