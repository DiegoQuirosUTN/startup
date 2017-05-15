(function(){

angular.module('spotiApp')
    .factory('requestFactory', ['$http', function($http) {

    var urlBase = 'https://api.spotify.com/v1/';
    var requestFactory = {};

    var joinIdsWithComas = function(ids){
        var urlIds = "";
        ids.forEach(function(id){
            urlIds = urlIds + ","+id;
        })
        return urlIds = urlIds.slice(1,urlIds.lenght);
    }

    requestFactory.getArtists = function (search) {
        return $http.get(urlBase + `search?q=${search}&type=artist`);
    }

    requestFactory.getTracks = function(ids){
        return $http.get(urlBase + `tracks/?ids=${joinIdsWithComas(ids)}`);
    }

    requestFactory.getArtist = function(id){
        return $http.get(urlBase + `artists/${id}`);
    }
    
    requestFactory.getArtistAlbums = function(id){
        return $http.get(urlBase + `artists/${id}/albums`);
    }
    requestFactory.getAlbum = function(id){
        return $http.get(urlBase + `albums/${id}`);
    }
    requestFactory.getAlbumTracks = function(id){
        return $http.get(urlBase + `albums/${id}/tracks`);
    }

    requestFactory.getCDsFromAlbumTracks = function(tracks){     //returns an array of CDs, each CD is an array of tracks
      var cds = [];
      for(var i=0; i < Math.max.apply(null, tracks.map(function(track){return track.disc_number;})); i++){
        cds[i] = tracks.filter(function(track){return track.disc_number == (i + 1);});
      }
      return cds;
    }

    return requestFactory;
}]);
})();