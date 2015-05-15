 angular.module('app.ChecklistController', [])

  .controller('ChecklistController', function($scope, $ionicModal, $ionicListDelegate, ChecklistFactory){

    /*
      SCOPE VARIABLES
    */

      // Array - list of checklist items
      $scope.checklist = ChecklistFactory.checklist;

      // Function - Moves an item during reorder
      $scope.moveItem = ChecklistFactory.moveItem;

      // Function - Delete an item from the checklist
      $scope.onItemDelete = ChecklistFactory.onItemDelete;

      // Function - Toggle delete buttons
      var deleteButtonBool = false;
      $scope.showDeleteButtons = function() {
        deleteButtonBool = !deleteButtonBool;
        $ionicListDelegate.showDelete(deleteButtonBool);
      };

      // Function - Toggle reorder buttons
      var reorderButtonBool = false;
      $scope.showReorderButtons = function() {
        reorderButtonBool = !reorderButtonBool;
        $ionicListDelegate.showReorder(reorderButtonBool);
      };

      // IonicModal - Attach template and add to scope on deferred
      $ionicModal.fromTemplateUrl('templates/checklist-add.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      // Function - Open Modal
      $scope.openModal = function() {
        $scope.modal.show();
      };

      // Function - Close Modal
      $scope.closeModal = function() {
        $scope.modal.hide();
      };

      // Listen - Remove modal box on $destroy event on scope
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });

      // Listen - Action on modal hidden
      $scope.$on('modal.hidden', function() {
        // Execute action
      });

      // Listen - Action on modal remove
      $scope.$on('modal.removed', function() {
        // Execute action
      });

      });