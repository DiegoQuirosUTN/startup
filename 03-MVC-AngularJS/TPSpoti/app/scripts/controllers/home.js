(function(){
'use strict';

/**
 * @ngdoc function
 * @name spotiApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the spotiApp
 */
angular.module('spotiApp')
  .controller('homeCtrl', ['$scope', '$stateParams', 'localStorageService', 'requestFactory', '$http', function ($scope, $stateParams, localStorageService, requestFactory, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.favSongs = [];
    
    var keys = localStorageService.keys();


    requestFactory.getTracks(keys)
    .then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      
      $scope.favSongs = response.data.tracks;
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      // Do nothing.
    });
    
}]);
})();