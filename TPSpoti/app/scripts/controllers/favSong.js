'use strict';

/**
 * @ngdoc function
 * @name spotiApp.controller:favSongCtrl
 * @description
 * # favSongCtrl
 * Controller of the spotiApp
 */
angular.module('spotiApp')
  .controller('favSongCtrl', ['$scope', '$stateParams', 'localStorageService', '$http', function ($scope, $stateParams, localStorageService, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.favSongModel = false;
    $scope.deleteFav = function(){    //deletes favorite song from localstorage and scope
    	localStorageService.remove($scope.favSong.id);
        for(var i = $scope.favSongs.length - 1; i >= 0; i--) {
            if($scope.favSongs[i].id === $scope.favSong.id) {
                $scope.favSongs.splice(i, 1);
            }
        }	
    }
    
}]);