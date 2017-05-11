'use strict';

/**
 * @ngdoc function
 * @name spotiApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the spotiApp
 */
angular.module('spotiApp')
  .controller('homeCtrl', ['$scope', '$stateParams', 'localStorageService', '$http', function ($scope, $stateParams, localStorageService, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.favSongs = [];
    
    var keys = localStorageService.keys();

    //joins track IDs to insert in the request
    var urlIds = "";
    keys.forEach(function(key){
      urlIds = urlIds + ","+key;
    })
    urlIds = urlIds.slice(1,urlIds.lenght);
    //

    var urlReq = `https://api.spotify.com/v1/tracks/?ids=${urlIds}`
    $http({
      method: 'GET',
      url: urlReq
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.favSongs = response.data.tracks;
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
    
}]);