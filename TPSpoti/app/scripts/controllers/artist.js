'use strict';

/**
 * @ngdoc function
 * @name spotiApp.controller:HomeCtrl
 * @description
 * # artistCtrl
 * Controller of the spotiApp
 */
angular.module('spotiApp')
  .controller('artistCtrl', ['$scope', '$stateParams','$breadcrumb', 'breadCrumbService', '$state', '$http', function ($scope, $stateParams, $breadcrumb, breadCrumbService, $state, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.artist = {};
    $scope.artist.name = "";
    
    
   	var artistUrl = `https://api.spotify.com/v1/artists/${$stateParams.artistId}`;
    $http({
  		method: 'GET',
  		url: artistUrl
	}).then(function successCallback(response) {
    	// this callback will be called asynchronously
    	// when the response is available
    	$scope.artist = response.data;
  	}, function errorCallback(response) {
    	// called asynchronously if an error occurs
    	// or server returns response with an error status.
  	});

  	breadCrumbService.serv(1, $stateParams.artistId);

    var artistAlbumsUrl = `https://api.spotify.com/v1/artists/${$stateParams.artistId}/albums`
    $http({
  		method: 'GET',
  		url: artistAlbumsUrl
	}).then(function successCallback(response) {
    	// this callback will be called asynchronously
    	// when the response is available
    	$scope.albums = response.data.items;
  	}, function errorCallback(response) {
    	// called asynchronously if an error occurs
    	// or server returns response with an error status.
  	});
}]);