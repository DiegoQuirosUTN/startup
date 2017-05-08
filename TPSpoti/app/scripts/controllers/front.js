'use strict';

/**
 * @ngdoc function
 * @name spotiApp.controller:frontCtrl
 * @description
 * # frontCtrl
 * Controller of the spotiApp
 */
angular.module('spotiApp')
  .controller('frontCtrl', ['$scope', '$stateParams', 'localStorageService', '$http', function ($scope, $stateParams, localStorageService, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.favSongs = [];
    //$scope.test.text = $stateParams.artistId;
    //$scope.test.title = $stateParams.artistName;
    //var artistUrl = `https://api.spotify.com/v1/artists/${$scope.test.text}/albums`
  
    
    var keys = localStorageService.keys();
    var urlIds = "";
    keys.forEach(function(key){
      urlIds = urlIds + ","+key;
    })
    urlIds = urlIds.slice(1,urlIds.lenght);

    var urlReq = `https://api.spotify.com/v1/tracks/?ids=${urlIds}`
    $http({
  method: 'GET',
  url: urlReq
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.favSongs = response.data.tracks;
    console.log(response.data.tracks);
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
    console.log(keys);
    console.log(urlIds);
}]);