'use strict';

/**
 * @ngdoc function
 * @name spotiApp.controller:searchCtrl
 * @description
 * # searchCtrl
 * Controller of the spotiApp
 */
angular.module('spotiApp')
  .controller('searchCtrl', ['$scope', '$stateParams', 'requestFactory', '$http', function ($scope, $stateParams, requestFactory, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.url = "";
    $scope.artist = {};
    $scope.artist.searchText = $stateParams.search;

	$scope.myFunc = function() {

        requestFactory.getArtists($scope.artist.searchText)
			   .then(function successCallback(response) {
    		// this callback will be called asynchronously
    		// when the response is available
    			$scope.arts = response.data.artists.items;
  			}, function errorCallback(response) {
    		// called asynchronously if an error occurs
    		// or server returns response with an error status.
  			});
    };
    /*var searchUrl = `https://api.spotify.com/v1/search?q=${$stateParams.search}&type=artist`;
    //$scope.test = $scope.artist.searchText;
     $http({
  method: 'GET',
  url: searchUrl
}*/
  requestFactory.getArtists($stateParams.search)
  .then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.arts = response.data.artists.items;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

  }]);
