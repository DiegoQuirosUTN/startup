'use strict';

/**
 * @ngdoc overview
 * @name spotiApp
 * @description
 * # spotiApp
 *
 * Main module of the application.
 */
var myApp = angular
  .module('spotiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'LocalStorageModule',
    'ui.bootstrap',
    'ncy-angular-breadcrumb'
  ]);
myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
    	.state('home', {
            url: '/home',
            templateUrl: '/views/homeview.html',
            controller: 'homeCtrl',
            ncyBreadcrumb: {
   				label: 'Home '
  			}
        })
        
       
        .state('search', {
            url: '/search/:search',
            templateUrl: '/views/searchview.html',
            controller: 'searchCtrl',
            ncyBreadcrumb: {
   				label: 'Search',
   				parent: 'home'
  			},
            resolve:{
     		 	artistId: ['$stateParams', function($stateParams){
          			return $stateParams.search;
      			}]
   			}
        })
        
      
        .state('artist', {
            url: '/artist/:artistId',
            templateUrl: '/views/artistview.html',
            controller: 'artistCtrl',
            ncyBreadcrumb: {
   				label: 'artist',
   				parent: "search({search: ''})"
  			},
            resolve:{
      			artistId: ['$stateParams', function($stateParams){
          			return $stateParams.artistId;
      			}]
   			}
        })

		.state('album', {
            url: '/album/:albumId',
            templateUrl: '/views/albumview.html',
            controller: 'albumCtrl',
            ncyBreadcrumb: {
   				label: 'Album',
   				parent: 'artist'
  			},
            resolve:{
      			albumId: ['$stateParams', function($stateParams){
          			return $stateParams.albumId;
      			}]
   			}
        })
        ;

});

myApp.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('myApp')
    .setStorageType('localStorage')
});

myApp.config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      prefixStateName: 'home',
      template: 'bootstrap2'
    });
})