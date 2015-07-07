angular.module('app.NoScrollDirective', [])

  .directive('noScrollDirective', function($document) {

    /* LINK */

    var link = function($scope, $element, $attr) {
      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }

    /* CONFIG */

    return {
      restrict: 'A',
      link: link
    }
  });