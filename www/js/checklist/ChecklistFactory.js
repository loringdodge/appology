angular.module('app.ChecklistFactory', [])

  .factory('ChecklistFactory', function($http, $ionicListDelegate, $localStorage){

    /*
      VARIABLES
    */

      // Default checklist items
      var defaults = [{
          name: 'Get agent'
        },{
          name: 'Get another agent'
        },{
          name: 'List house'
        },{
          name: 'Make flyers'
        },{
          name: 'Sell house'
      }];

      // If 'checklist' is not defined in localStorage, use the default checklist
      if(!$localStorage.isSet('checklist')){
        $localStorage.setObject('checklist', defaults);
      }

      // Save reference to 'checklist' object in localStorage
      var checklist = $localStorage.getObject('checklist');

    /*
      FUNCTIONS
    */

      // Get checklist
      var getChecklist = function() {
        return checklist;
      }

      // Move item to a different index of array
      var moveItem = function(item, fromIndex, toIndex) {
        checklist.splice(fromIndex, 1);
        checklist.splice(toIndex, 0, item);
      };

      // Delete item from array
      var onItemDelete = function(item) {
        checklist.splice(checklist.indexOf(item), 1);
      };

      // Add item to checklist
      var addItem = function(item){
        checklist.push(item);
      }

    /*
      RETURN
    */

      return {
        getChecklist: getChecklist,
        moveItem: moveItem,
        onItemDelete: onItemDelete,
        addItem: addItem
      }

  });