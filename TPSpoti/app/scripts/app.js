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
    'ui.router'
  ]);
myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '/views/homeview.html',
            controller: 'homeCtrl'
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