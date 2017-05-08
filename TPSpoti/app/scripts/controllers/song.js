'use strict';

/**
 * @ngdoc function
 * @name spotiApp.controller:songCtrl
 * @description
 * # songCtrl
 * Controller of the spotiApp
 */
angular.module('spotiApp')
  .controller('songCtrl', ['$scope', '$stateParams', 'localStorageService', '$http', function ($scope, $stateParams, localStorageService, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.singleModel = localStorageService.keys().includes($scope.song.id);
    console.log($scope.song.id);
    $scope.checkFavs = function(){
    	if($scope.singleModel){
    		localStorageService.set($scope.song.id, $scope.song);
    	}
    	else{
    		localStorageService.remove($scope.song.id);
    	}
    console.log(localStorageService.get($scope.song.id));
    }
    //$scope.test.text = $stateParams.artistId;
    //$scope.test.title = $stateParams.artistName;
    //var artistUrl = `https://api.spotify.com/v1/artists/${$scope.test.text}/albums`
  
    
}]);