(function(){
'use strict';

/**
 * @ngdoc function
 * @name spotiApp.controller:artistCtrl
 * @description
 * # artistCtrl
 * Controller of the spotiApp
 */
angular.module('spotiApp')
  .controller('artistCtrl', ['$scope', '$stateParams', '$state', '$http', 'requestFactory', function ($scope, $stateParams, $state, $http, requestFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.artist = {};
    $scope.artist.name = "";
    
    
   	requestFactory.getArtist($stateParams.artistId)
   	.then(function successCallback(response) {
    	// this callback will be called asynchronously
    	// when the response is available
    	$scope.artist = response.data;
  	}, function errorCallback(response) {
    	// called asynchronously if an error occurs
    	// or server returns response with an error status.
      // Do nothing.
  	});

  	

    requestFactory.getArtistAlbums($stateParams.artistId)
    .then(function successCallback(response) {
    	// this callback will be called asynchronously
    	// when the response is available
    	$scope.albums = response.data.items;
  	}, function errorCallback(response) {
    	// called asynchronously if an error occurs
    	// or server returns response with an error status.
      // Do nothing.
  	});
}]);
})();