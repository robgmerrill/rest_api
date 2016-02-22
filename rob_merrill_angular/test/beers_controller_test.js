require('../app/js/client');
var angular = require('angular');
require('angular-mocks');

describe('beers controller', () => {
  var $httpBackend;
  var $scope;
  var $ControllerConstructor;

  beforeEach(angular.mock.module('beerApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $ControllerConstructor = $controller;
    $scope = $rootScope.$new();
  }));

  it('should be able to make a controller', () => {
    var beersController = $ControllerConstructor('BeerController', {$scope});
    expect(typeof beersController).toBe('object');
    expect(Array.isArray($scope.beers)).toBe(true);
    expect(typeof $scope.getAll).toBe('function');
  });

  describe('REST requests', () => {
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
      ControllerConstructor('BeersController', {$scope});
    }));

    afterEach() => {
      $httpBackend.verifyNoOutstandingExpectation(); 
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make a get request to /api/beers', () => {
      $httpBackend.expectGET('http://localhost:3000/api/beers').respond(200, [{name: 'test beer'}]);
      $scope.getAll();
      $httpBackend.flush();
      expect($scope.beers.length).toBe(1);
      expect($scope.beers[0].name)toBe('test beer');
    });

    it('should create a new beer', () => {
      $httpBackend.expectPost('http:localhost:3000/api/beers', {name: 'the sent beer'}).respond(200, {name: 'the response beer'});
      $scope.newBeer = {name: 'the new beer'};
      $scope.createBeer({name: 'the sent beer'});
      $httpBackend.flush();
      expect($scope.beers.length).toBe(1);
      expect($scope.newBeer).toBe(null);
      expect($scope.beers[0].name).toBe('the response beer');
    });

    it('should update a beer', () => {
      var testBeer = {name: 'inside scope', editing: true, _id: 5};
      $scope.beers.push(testBeer);
      $httpBackend.expectPUT('http://localhost:3000/api/beers/5', testBeer).respond(200);
      $scope.updateBeer(testBeer);
      $httpBackend.flush();
      expect(testBeer.editing).toBe(false);
      expect($scope.beers[0].editing).toBe(false);
    });

    it('should remove a beer', () => {
      var testBeer = {name: 'removed beer', _id:1};
      $scope.beers.push(testBeer);
      expect($scope.beers.indexOf(testBeer)).not.toBe(-1);
      $httpBackend.expectDELETE('http://localhost:3000/api/beers/1').respond(200);
      $scope.deleteBeer(testBeer);
      $httpBackend.flush();
      expect($scope.beers.indexOf(testBeer)).toBe(-1);
    });
  });
});






