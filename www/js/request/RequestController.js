 angular.module('app.RequestController', [])

  .controller('RequestController', function($scope, RequestFactory){

    /*
      SCOPE VARIABLES
    */

      $scope.submitRequest = function(request){
        if (request.$valid) {
          var data = {
            address: request.address,
            name: request.name,
            email: request.email,
            phone: request.phone
          }
          RequestFactory.postRequest(data)
            .then(function(res) {
              console.log("submitRequest: success", res);
            })
            .catch(function(err) {
              console.log(err);
            });
        } else {
          console.log("not valid");
        }
      }

  });