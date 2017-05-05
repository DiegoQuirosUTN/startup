'use strict';

/**
 * @ngdoc function
 * @name spotiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spotiApp
 */
angular.module('spotiApp')
  .controller('MainCtrl',['$scope', '$http', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
 	  // create a user Object
  $scope.artist = "loading";

  // Initiate a model as an empty string
  //$scope.user.username = '';

  // We want to make a call and get
  // the person's username
  $http({
  method: 'GET',
  url: 'https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.artist = response.data.name;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  }]);
