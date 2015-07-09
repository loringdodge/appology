 angular.module('app.BellController', [])

  .controller('BellController', function($scope, RequestFactory){

    /*
      SCOPE
    */

      // Object - loaded from getBellData promise
      $scope.bellData = {};

    /*
      PROMISE
    */

      // Returns bell Data
      RequestFactory.getBellData()
        .then(function(data){
          $scope.bellData = data;
        })
        .catch(function(err){
          console.log(err);
        });

  });