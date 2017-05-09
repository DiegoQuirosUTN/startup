'use strict';

/**
 * @ngdoc function
 * @name spotiApp.controller: cdCtrl
 * @description
 * # cdCtrl
 * Controller of the spotiApp
 */
angular.module('spotiApp')
  .controller('cdCtrl', ['$scope', '$stateParams', 'localStorageService', '$http', function ($scope, $stateParams, localStorageService, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.songs = $scope.songs.sort(function(a,b){return a.name.localeCompare(b.name);});
    
    $scope.orderSongs = function(){
    	if($scope.orderModel){
    		$scope.songs = $scope.songs.sort(function(a,b){return a.duration_ms - b.duration_ms});
    	}
    	else{
    		$scope.songs = $scope.songs.sort(function(a,b){return a.name.localeCompare(b.name);});
    	}
    }
    //$scope.test.text = $stateParams.artistId;
    //$scope.test.title = $stateParams.artistName;
    //var artistUrl = `https://api.spotify.com/v1/artists/${$scope.test.text}/albums`
  
    
}]);