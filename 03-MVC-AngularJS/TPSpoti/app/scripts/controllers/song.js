(function(){
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

    $scope.favoriteModel = localStorageService.keys().includes($scope.song.id);
    $scope.checkFavs = function(){
    	$scope.favoriteModel = !($scope.favoriteModel);
    	if($scope.favoriteModel){
    		localStorageService.set($scope.song.id, $scope.song);
    	}
    	else{
    		localStorageService.remove($scope.song.id);
    	}
   
    }
    
}]);
})();