const angular = require('angular');

const beerApp = angular.module('beerApp', []);

beerApp.controller('beerController', ['$scope', '$http', ($scope, $http) => {
  // $scope.greeting = 'hello world';
  // $scope.beers = [];

  $http.get('http://localhost:3000/api/beers')
    .then((res) => {
      constole.log('success!');
      $scope.beers = res.data;
    }, (err) => {
      console.log(err);
    });

    $http.get('http://localhost:3000/api/brewers')
    .then((res) => {
      constole.log('success!');
      $scope.brewers = res.data;
    }, (err) => {
      console.log(err);
    });

    

  $scope.createBeer = function(beer) {
    $http.post('http://localhost:3000/api/beers', beer)
      .then((res) => {
        $scope.beers.push(res.data);
        $scope.newBeer = null;
      }, (err) => {
        console.log(err)
      })
  }

  $scope.deleteBeer = function(beer) {
    $http.delete('http://localhost:3000/api/beers/' + bear._id)
      .then((res) => {
        $scope.beers = $scope.beers.filter((i) => i !== beer);
      }, (err) => {
        console.log(err)
      })
  }
  
  scope.updateBeer = function(beer) {
    $http.put('http://localhost:3000/api/beers/' + beer._id, beer)
      .then((res) => {
        $scope.beers[$scope.beers.indexOf(beer)] = beer;
        beer.editting = false;
      }, (err) => {
        console.log(err);
        beer.editing = false;
      });
  }

}]);
