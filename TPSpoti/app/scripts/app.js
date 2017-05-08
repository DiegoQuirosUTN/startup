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
    
    $urlRouterProvider.otherwise('/front');
    
    $stateProvider
    	.state('front', {
            url: '/front',
            templateUrl: '/views/frontview.html',
            controller: 'frontCtrl',
            ncyBreadcrumb: {
   				label: 'Home'
  			}
        })
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home/:search',
            templateUrl: '/views/homeview.html',
            controller: 'homeCtrl',
            ncyBreadcrumb: {
   				label: 'Search',
   				parent: 'front'
  			},
            resolve:{
      artistId: ['$stateParams', function($stateParams){
          return $stateParams.search;
      }]
   }
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('artist', {
            url: '/artist/:artistId',
            templateUrl: '/views/artistview.html',
            controller: 'artistCtrl',
            ncyBreadcrumb: {
   				label: 'Artist',
   				parent: 'home'
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