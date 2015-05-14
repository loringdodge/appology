 angular.module('app.ChecklistController', [])

  .controller('ChecklistController', function($scope, $ionicListDelegate, ChecklistFactory){

    /*
      SCOPE VARIABLES
    */

      // Array - list of checklist items
      // $scope.checklist = ChecklistFactory.checklist;
      $scope.checklist = ChecklistFactory.checklist;

      $scope.showDeleteButtons = function() {
        $ionicListDelegate.showDelete(true);
      };

      $scope.moveItem = function(item, fromIndex, toIndex) {
        $scope.checklist.splice(fromIndex, 1);
        $scope.checklist.splice(toIndex, 0, item);
      };

      $scope.onItemDelete = function(item) {
        console.log(item);
        $scope.checklist.splice($scope.checklist.indexOf(item), 1);
      };

  });