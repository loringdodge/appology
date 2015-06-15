angular.module('app.StarDirective', [])

  .directive('starDirective', function($timeout){

    /*
      CONTROLLER
    */

    var controller = function($scope) {

        $scope.parseStars = function(n) {
          return new Array(Math.round(n));
        }

    };

    /*
      CONFIG
    */

    return {
      restrict: 'E',
      templateUrl: 'templates/star-directive.html',
      scope: {
        rating: '='
      },
      replace: true,
      controller: controller
    };
  })