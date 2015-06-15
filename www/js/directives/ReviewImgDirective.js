angular.module('app.ReviewImgDirective', [])

  .directive('reviewImgDirective', function(){

    var controller = function($scope) {

      var isNotEmpty = function(string) {
        return string.length > 0;
      };

      var randomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      var getInitials = function(name) {
        return name.split(' ').map(function(s) { return s.charAt(0).toUpperCase(); }).slice(0, 2).join('');
      }

      $scope.isImage = isNotEmpty;

      $scope.initials = getInitials($scope.name);

      $scope.randomColorClass = function() {
        var colors = ['red', 'blue', 'green'];
        return colors[randomInt(0, 2)];
      }

    };

    return {
      restrict: 'E',
      templateUrl: 'templates/review-img-directive.html',
      scope: {
        image: '=',
        name: '='
      },
      replace: true,
      controller: controller
    };

  })