'use strict';

/**
 * @ngdoc function
 * @name spotiApp.controller:albumCtrl
 * @description
 * # albumCtrl
 * Controller of the spotiApp
 */
angular.module('spotiApp')
  .controller('albumCtrl', ['$scope', '$stateParams', '$state', 'breadCrumbService', '$http', function ($scope, $stateParams, $state, breadCrumbService, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.fromArtistId = breadCrumbService.serv();

    var albumUrl = `https://api.spotify.com/v1/albums/${$stateParams.albumId}`

    $http({
      method: 'GET',
      url: albumUrl
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.album = response.data;
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

    $scope.albumTitle = $stateParams.albumName;

    var albumTracksUrl = `https://api.spotify.com/v1/albums/${$stateParams.albumId}/tracks`;

    $http({
      method: 'GET',
      url: albumTracksUrl
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.cds = getCDs(response.data.items);
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });


    var getCDs = function(tracks){     //returns an array of CDs, each CD is an array of tracks
      var cds = [];
      for(var i=0; i < Math.max.apply(null, tracks.map(function(track){return track.disc_number;})); i++){
        cds[i] = tracks.filter(function(track){return track.disc_number == (i + 1);});
      }
      return cds;
    }
    
}]);