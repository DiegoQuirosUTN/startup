(function(){

angular.module('spotiApp')
 .directive('panelSong', function() {
    


    return {
      restrict: 'EA',
      transclude: {
        'title': 'panelTitle',
        'body': 'panelBody',
        'footer': 'panelFooter'
      },
      controller: 'songCtrl',
      templateUrl: 'views/panelview.html'
      /*template: '<div style="border: 1px solid black;">' +
                  '<div class="title" ng-transclude="title">Fallback Title</div>' +
                  '<div ng-transclude="body"></div>' +
                  '<div class="footer" ng-transclude="footer">Fallback Footer</div>' +
                '</div>'*/
    };
})
})();