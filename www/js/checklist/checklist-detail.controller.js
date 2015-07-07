 angular.module('app.ChecklistDetailController', [])

  .controller('ChecklistDetailController', function($scope, $stateParams, ChecklistFactory){

    /*
      SCOPE VARIABLES
    */

      $scope.item = $stateParams.item;

      $scope.checkItem = ChecklistFactory.checkItem;

    });