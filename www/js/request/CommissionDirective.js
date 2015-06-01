angular.module('app.CommissionDirective', [])

  .directive('commissionDirective', function($timeout){

    var link = function(scope, element, attributes) {

      var barContainer = element.children('.commission-flex');
      var bars = barContainer.children('commission-bar');
      var dot = element.children()[0];

      var randomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      angular.forEach(bars, function(bar, index){
        $timeout(function(){
          angular.element(bar)
            .addClass('commission-bar-animate-up')
            .css({
            height: randomInt(5, 80) + "%"
          });
        }, randomInt(0, bars.length) * 100 );

      });

      $timeout(function(){
        angular.element(dot)
          .addClass('commission-dot-animate-wide')
      }, 100);

    }

    return {
      restrict: 'A',
      templateUrl: 'templates/commission-directive.html',
      scope:{
      },
      replace: true,
      link: link
    };
  })