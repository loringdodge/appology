 angular.module('app.ChecklistController', [])

  .controller('ChecklistController', function($scope, $ionicModal, $ionicListDelegate, ChecklistFactory){

    /*
      PRIVATE VARIABLES
    */

      // Object - used by the $scope.applySectionClass function
      var sectionClasses = {
        'Preparing Home' : 'checklist-section-red',
        'While Escrow' : 'checklist-section-blue',
        'Expenses At Closing' : 'checklist-section-green',
        'Expenses At Opening' : 'checklist-section-yellow'
      };

    /*
      SCOPE VARIABLES
    */

      // Array - list of checklist items
      $scope.checklist = ChecklistFactory.getChecklist();

      // Object - ngModel for addItem input (modal)
      $scope.item = {};

    /*
      SCOPE FUNCTIONS
    */

      // Function - Moves an item during reorder
      $scope.moveItem = ChecklistFactory.moveItem;

      // Function - Delete an item from the checklist
      $scope.onItemDelete = ChecklistFactory.onItemDelete;

      // Function - Add an item
      $scope.addItem = function(item){
        ChecklistFactory.addItem(item);
        $scope.modal.hide();
      }

      // Function - Toggle delete buttons
      var deleteButtonBool = false;
      $scope.showDeleteButtons = function(reorderButtonBool, deleteButtonBool) {
        if(reorderButtonBool) $scope.showReorderButtons();
        deleteButtonBool = !deleteButtonBool;
        $ionicListDelegate.showDelete(deleteButtonBool);
      };

      // Function - Toggle reorder buttons
      var reorderButtonBool = false;
      $scope.showReorderButtons = function(reorderButtonBool, deleteButtonBool) {
        if(deleteButtonBool) $scope.showDeleteButtons();
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
      $scope.openModal = function(reorderButtonBool, deleteButtonBool) {
        if(reorderButtonBool) $scope.showReorderButtons();
        if(deleteButtonBool) $scope.showDeleteButtons();
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
        $scope.item = {};
      });

      // Listen - Action on modal remove
      $scope.$on('modal.removed', function() {
        $scope.item = {};
      });

      // Function - Applies a different css class based on the category title
      $scope.applySectionClass = function(category) {
        return sectionClasses[category];
      };

    });