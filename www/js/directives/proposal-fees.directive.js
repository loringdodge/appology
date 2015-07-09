angular.module('app.ProposalFeesDirective', ['ionic', 'd3Module'])

  .directive('proposalFeesDirective', ['$ionicGesture', '$window', 'd3', function($ionicGesture, $window, d3) {

    return {
      restrict: 'EA',
      scope: {},
      link: function(scope, element, attrs) {

          // Browser onresize event
          window.onresize = function() {
            scope.$apply();
          };

          // hard-code data
          scope.data = [
            {label: "Greg", value: 53245},
            {label: "Ari", value: 28479},
            {label: 'Q', value: 19697},
            {label: "Loser", value: 24037}
          ];

          // Watch for resize event
          scope.$watch(function() {
            return angular.element($window)[0].innerWidth;
          }, function() {
            scope.render(scope.data);
          });

          scope.render = function(data) {
            // remove all previous items before render
            // svg.selectAll('*').remove();

            // If we don't pass any data, return out of the element
            if (!data) return;

          var margin = parseInt(attrs.margin) || 20,
              barHeight = parseInt(attrs.barHeight) || 20,
              barPadding = parseInt(attrs.barPadding) || 5;

          var width = window.innerWidth,
              height = 300,
              radius = Math.min(width, height) / 2;

          var svg = d3.select(element[0])
            .append("svg")
              .attr("width", '100%')
              .attr("height", 300)

            svg.append("g")
              .attr("class", "slices")
              .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            svg.append("g")
              .attr("class", "labels")
              .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            svg.append("g")
              .attr("class", "lines")
              .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            var color = d3.scale.category20();

            var key = function(d) { return d.data.label };

            var pie = d3.layout.pie()
                .value(function(d) {
                  return d.value;
                })
                .sort(null);

            var arc = d3.svg.arc()
              .outerRadius(radius * 0.8)
              .innerRadius(radius * 0.4);

            var outerArc = d3.svg.arc()
                .innerRadius(radius * 0.9)
                .outerRadius(radius * 0.9);

            /* ------- PATHS -------*/
            var path = svg.select(".slices").selectAll("path.slice")
                .data(pie(scope.data), key)
              .enter().append("path")
                .attr("fill", function(d, i) { return color(i); })
                .attr("class", "slices")
              .transition()
                .ease("exp")
                .duration(500)
                .attrTween('d', function(d) {
                  var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
                  return function(t) {
                    d.endAngle = i(t);
                    return arc(d);
                  }
                });

            /* ------- LABELS -------*/
            var text = svg.select(".labels").selectAll("text")
                .data(pie(scope.data), key)
              .enter().append("text")
                .attr("dy", ".35em")
                .attr("fill", "#000000")
                .text(function(d){
                  console.log('in')
                  return d.data.label;
                });

            function midAngle(d){
              return d.startAngle + (d.endAngle - d.startAngle)/2;
            }

            text.transition().duration(1000)
              .attrTween("transform", function(d) {
                this._current = this._current || d;
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function(t) {
                  var d2 = interpolate(t);
                  var pos = outerArc.centroid(d2);
                  pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
                  return "translate("+ pos +")";
                };
              })
              .styleTween("text-anchor", function(d){
                this._current = this._current || d;
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function(t) {
                  var d2 = interpolate(t);
                  return midAngle(d2) < Math.PI ? "start":"end";
                };
              });

            /* ------- POLYLINES -------*/
            var polyline = svg.select(".lines").selectAll("polyline")
                .data(pie(scope.data), key)
              .enter()
                .append("polyline")
                .attr("opacity", "0.2")
                .attr("stroke", "black")
                .attr("stroke-width", "2px")
                .attr("fill", "none")

            polyline.transition().duration(1000)
              .attrTween("points", function(d){
                this._current = this._current || d;
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function(t) {
                  var d2 = interpolate(t);
                  var pos = outerArc.centroid(d2);
                  pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
                  return [arc.centroid(d2), outerArc.centroid(d2), pos];
                };
              });

          }
        }
      }
    }]);