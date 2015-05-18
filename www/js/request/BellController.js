 angular.module('app.BellController', [])

  .controller('BellController', function($scope, RequestFactory){

    /*
      SCOPE VARIABLES
    */

      // Object - Bell Data
      RequestFactory.getBellData()
        .then(function(data){
          $scope.bellData = data;
        })
        .catch(function(err){
          console.log(err);
        });

  });