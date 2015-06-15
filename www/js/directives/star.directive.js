angular.module('app.StarDirective', [])

  .directive('starDirective', function($timeout){

    /* CONTROLLER */

    var controller = function($scope) {

      /*
        FUNCTIONS
      */

        // Array - Make a new array based on an integer
        var makeArray = function(n) {
          return new Array(Math.round(n));
        }

      /*
        SCOPE
      */

      $scope.parseStars = makeArray;

    };

    /* CONFIG */

    return {
      restrict: 'E',
      templateUrl: 'js/directives/star.view.html',
      scope: {
        rating: '='
      },
      replace: true,
      controller: controller
    };
  })