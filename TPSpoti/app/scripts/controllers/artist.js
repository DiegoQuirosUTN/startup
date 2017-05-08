'use strict';

/**
 * @ngdoc function
 * @name spotiApp.controller:HomeCtrl
 * @description
 * # artistCtrl
 * Controller of the spotiApp
 */
angular.module('spotiApp')
  .controller('artistCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.test = {};
    $scope.test.text = $stateParams.artistId;
    $scope.test.title = $stateParams.artistName;
    
    var artistUrl = `https://api.spotify.com/v1/artists/${$scope.test.text}/albums`
    $http({
  method: 'GET',
  url: artistUrl
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.albums = response.data.items;
    console.log(response.data.items);
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}]);