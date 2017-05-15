(function(){
'use strict';

/**
 * @ngdoc function
 * @name spotiApp.controller:albumCtrl
 * @description
 * # albumCtrl
 * Controller of the spotiApp
 */
angular.module('spotiApp')
  .controller('albumCtrl', ['$scope', '$stateParams', '$state', '$http', 'requestFactory', 'localStorageService', function ($scope, $stateParams, $state, $http, requestFactory, localStorageService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    

    requestFactory.getAlbum($stateParams.albumId)
    .then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.album = response.data;
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      // Do nothing.
    });

    requestFactory.getAlbumTracks($stateParams.albumId)
    .then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.cds = requestFactory.getCDsFromAlbumTracks(response.data.items);
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      // Do nothing.
    });


    
    
}]);
})();