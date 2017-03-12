'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('heroList').
  component('heroList', {
    templateUrl: 'hero-list/hero-list.template.html',
    controller: ['Hero',
      function HeroListController(Hero) {
        this.heroes = Hero.query();
        this.orderProp = 'age';
      }
    ]
  });
