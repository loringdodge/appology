 angular.module('app.RequestController', [])

  .controller('RequestController', function($scope, RequestFactory){

    /*
      SCOPE VARIABLES
    */

      $scope.submitRequest = function(request){
        console.log(request.address);
        if (request.$valid) {
          console.log("valid");
        } else {
          console.log("not valid");
        }
      }

  });