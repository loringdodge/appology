angular.module('app.ChecklistFactory', [])

  .factory('ChecklistFactory', function($http){

    /*
      VARIABLES
    */

      var checklist = [];

    /*
      FUNCTIONS
    */

      // Add a checklist item
      var addItem = function(item) {
        checklist.push(item);
      }

      // Remove a checklist item
      var removeItem = function(item) {
        checklist.push(item);
      }

      // Toggle a checklist item as completed or not completed
      var toggleCheck = function() {

      }

    /*
      RETURN
    */
    return {
      checklist: checklist,
      addItem: addItem,
      removeItem: removeItem,
      toggleCheck: toggleCheck
    }

  });