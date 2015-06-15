angular.module('app.ReviewImgDirective', [])

  .directive('reviewImgDirective', function(){

    /* CONTROLLER */

    var controller = function($scope) {

      /*
        FUNCTIONS
      */

        // Boolean - is string not empty?
        var isNotEmpty = function(string) {
          return string.length > 0;
        };

        // Number - get a random integer
        var randomInt = function(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        // String - turn a name into a set of 2 initials
        var getInitials = function(name) {
          return name.split(' ').map(function(s) { return s.charAt(0).toUpperCase(); }).slice(0, 2).join('');
        }

        // String - get a random color class for background of initials
        var randomColorClass = function() {
          var colors = ['red', 'blue', 'green'];
          return colors[randomInt(0, 2)];
        }

      /*
        SCOPE
      */

        $scope.isImage = isNotEmpty;

        $scope.initials = getInitials($scope.name);

        $scope.randomColorClass = randomColorClass;

    };

    /* CONFIG */

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