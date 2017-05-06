'use strict';

/**
 * @ngdoc function
 * @name spotiApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the spotiApp
 */
angular.module('spotiApp')
  .controller('homeCtrl', ['$scope','$http', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.test = "";
    $scope.artist = {};

    	 $scope.myFunc = function() {

        $scope.test = `https://api.spotify.com/v1/search?q=${$scope.artist.searchText}&type=artist`;
        $http({
  method: 'GET',
  url: $scope.test
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.arts = response.data.artists.items;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
    };
    var searchUrl = `https://api.spotify.com/v1/search?q=${$scope.artist.searchText}&type=artist`;
    //$scope.test = $scope.artist.searchText;
     $http({
  method: 'GET',
  url: $scope.test
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.arts = response.data.artists;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

  }]);
