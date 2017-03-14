'use strict';

describe('Phone', function() {
  var $httpBackend;
  var Hero;
  var heroesData = [
    {name: 'Hero X'},
    {name: 'Hero Y'},
    {name: 'Hero Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
    alert('help me!!!!!!')
  });

  // Load the module that contains the `Hero` service before each test
  beforeEach(module('core.hero'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Hero_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('heroes/heroes.json').respond(heroesData);

    Hero = _Hero_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the heroes data from `/heroes/heroes.json`', function() {
    var heroes = Hero.query();

    expect(heroes).toEqual([]);

    $httpBackend.flush();
    expect(heroes).toEqual(heroesData);
    //asp temp
    expect(heroes.length).toEqual(3);
  });

});
