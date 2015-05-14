 angular.module('app.ChecklistController', [])

  .controller('ChecklistController', function($scope, $ionicListDelegate, ChecklistFactory){

    /*
      SCOPE VARIABLES
    */

      // Array - list of checklist items
      $scope.checklist = ChecklistFactory.checklist;

      var deleteButtonBool = false;
      $scope.showDeleteButtons = function() {
        deleteButtonBool = !deleteButtonBool;
        $ionicListDelegate.showDelete(deleteButtonBool);
      };

      var reorderButtonBool = false;
      $scope.showReorderButtons = function() {
        reorderButtonBool = !reorderButtonBool;
        $ionicListDelegate.showReorder(reorderButtonBool);
      };

      $scope.moveItem = function(item, fromIndex, toIndex) {
        $scope.checklist.splice(fromIndex, 1);
        $scope.checklist.splice(toIndex, 0, item);
      };

      $scope.onItemDelete = function(item) {
        $scope.checklist.splice($scope.checklist.indexOf(item), 1);
      };

  });