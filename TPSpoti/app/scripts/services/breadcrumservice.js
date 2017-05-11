'use strict';

/**
 * @ngdoc function
 * @name spotiApp.controller: cdCtrl
 * @description
 * # cdCtrl
 * Controller of the spotiApp
 */
angular.module('spotiApp')
  .service('breadCrumbService', function () {

    this.serv = function(number, value){
      if(number === 1){
        var fromArtistId = value;
      }
    
      return fromArtistId;
  
    }
});