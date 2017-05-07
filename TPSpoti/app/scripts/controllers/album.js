'use strict';

/**
 * @ngdoc function
 * @name spotiApp.controller:albumCtrl
 * @description
 * # albumCtrl
 * Controller of the spotiApp
 */
angular.module('spotiApp')
  .controller('albumCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.albumTitle = $stateParams.albumName;
    //$scope.test.text = $stateParams.artistId;
    //$scope.test.title = $stateParams.artistName;
    //var artistUrl = `https://api.spotify.com/v1/artists/${$scope.test.text}/albums`
    var albumUrl = `https://api.spotify.com/v1/albums/${$stateParams.albumId}/tracks`;
    $http({
  method: 'GET',
  url: albumUrl
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.songs = response.data.items;
    console.log(response.data.items);
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}]);