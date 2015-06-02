angular.module('app.StarDirective', [])

  .directive('starDirective', function($timeout){

    var controller = function($scope) {
      $scope.parseStars = function(n) {
        return new Array(Math.round(n));
      }
    }

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