 angular.module('app.ChecklistDetailController', [])

  .controller('ChecklistDetailController', function($scope, $stateParams, ChecklistFactory){

    /*
      SCOPE
    */

      // Object - contains the item currently being viewed
      $scope.item = $stateParams.item;

      // Function - Toggles whether an item is clicked
      $scope.checkItem = ChecklistFactory.checkItem;

    });