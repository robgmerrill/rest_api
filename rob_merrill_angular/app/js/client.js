const angular = require('angular');

const beerApp = angular.module('beerApp', []);

beerApp.controller('beerController', ['$scope', '$http', ($scope, $http) => {

  $http.get('http://localhost:3000/api/beers')
    .then((res) => {
      constole.log('success!');
      $scope.beers = res.data;
    }, (err) => {
      console.log(err);
    });

    $http.get('http://localhost:3000/api/brewers')
    .then((res) => {
      console.log('success!');
      $scope.brewers = res.data;
    }, (err) => {
      console.log(err);
    });

    $scope.beersDrank = function() {
      $http.get('http://localhost:3000/beersDrank/howManyBeers')
        .then((res) => {
          console.log('brews for everyone!');
          $scope.beersDrank = res.data;
        }, (err) => {
          console.log(err);
        });
    };

    $scope.beersDrank();

  $scope.createBeer = function(beer) {
    $http.post('http://localhost:3000/api/beers', beer)
      .then((res) => {
        $scope.beers.push(res.data);
        $scope.newBeer = null;
      }, (err) => {
        console.log(err)
      })
  }

    $scope.createBrewer = function(brewer) {
    $http.post('http://localhost:3000/api/brewers', brewer)
      .then((res) => {
        $scope.brewers.push(res.data);
        $scope.newBrewer = null;
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
  
    $scope.deleteBrewer = function(brewer) {
    $http.delete('http://localhost:3000/api/brewers/' + brewer._id)
      .then((res) => {
        $scope.brewers = $scope.brewers.filter((i) => i !== beer);
      }, (err) => {
        console.log(err)
      })
  }

  $scope.updateBeer = function(beer) {
    $http.put('http://localhost:3000/api/beers/' + beer._id, beer)
      .then((res) => {
        $scope.beers[$scope.beers.indexOf(beer)] = beer;
        beer.editting = false;
      }, (err) => {
        console.log(err);
        beer.editing = false;
      });
  }

   $scope.updateBrewer = function(brewer) {
    $http.put('http://localhost:3000/api/brewer/' + brewer._id, brewer)
      .then((res) => {
        $scope.brewers[$scope.brewer.indexOf(brewer)] = brewer;
        brewer.editting = false;
      }, (err) => {
        console.log(err);
        brewer.editing = false;
      });
  }

}]);
