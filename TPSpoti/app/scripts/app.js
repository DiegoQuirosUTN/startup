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
    'ui.bootstrap'
  ]);
myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/front');
    
    $stateProvider
    	.state('front', {
            url: '/front',
            templateUrl: '/views/frontview.html',
            controller: 'frontCtrl'
        })
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home/:search',
            templateUrl: '/views/homeview.html',
            controller: 'homeCtrl',
            resolve:{
      artistId: ['$stateParams', function($stateParams){
          return $stateParams.search;
      }]
   }
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('artist', {
            url: '/artist/:artistId/:artistName',
            templateUrl: '/views/artistview.html',
            controller: 'artistCtrl',
            resolve:{
      artistId: ['$stateParams', function($stateParams){
          return $stateParams.artistId;
      }],
      artistName: ['$stateParams', function($stateParams){
          return $stateParams.artistName;
      }]
   }
    
        })
		.state('album', {
            url: '/album/:albumId/:albumName',
            templateUrl: '/views/albumview.html',
            controller: 'albumCtrl',
            resolve:{
      albumId: ['$stateParams', function($stateParams){
          return $stateParams.albumId;
      }],
      albumName: ['$stateParams', function($stateParams){
          return $stateParams.albumName;
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