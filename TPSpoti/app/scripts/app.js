(function(){
'use strict';

/**
 * @ngdoc overview
 * @name spotiApp
 * @description
 * # spotiApp
 *
 * Main module of the application.
 */
angular
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
  ])
.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
    	.state('home', {
            url: '/home',
            templateUrl: '/views/homeview.html',
            controller: 'homeCtrl'
        })
        
       
        .state('search', {
            url: '/search/:search',
            templateUrl: '/views/searchview.html',
            controller: 'searchCtrl'
        })
        
      
        .state('artist', {
            url: '/artist/:artistId',
            templateUrl: '/views/artistview.html',
            controller: 'artistCtrl'
        })

		.state('album', {
            url: '/album/:albumId',
            templateUrl: '/views/albumview.html',
            controller: 'albumCtrl'
        })
        ;

})

.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('myApp')
    .setStorageType('localStorage')
});

})();