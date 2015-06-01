angular.module('app.CommissionDirective', [])

  .directive('commissionDirective', function(){

    var link = function(scope, element, attributes) {

      var randomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      var barContainer = element.children('.commission-flex');
      var bars = barContainer.children('commission-bar');

      angular.forEach(bars, function(bar, index){
        console.log(index);
        setTimeout(function(){
          angular.element(bar)
            .addClass('commission-animate-up')
            .css({
            height: randomInt(5, 80) + "%"
          });
        }, randomInt(0, bars.length) * 100 );
          // .css({
          //   height: randomInt(5, 80) + "%"
          // });
      })

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