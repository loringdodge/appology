angular.module('app.ChecklistFactory', [])

  .factory('ChecklistFactory', function($http){

    /*
      VARIABLES
    */

      var checklist = {};

    /*
      FUNCTIONS
    */

      // Add a checklist item
      var addItem = function() {

      }

      // Remove a checklist item
      var removeItem = function() {

      }

      // Toggle a checklist item as completed or not completed
      var toggleCheck = function() {

      }

    /*
      RETURN
    */
    return {
      addItem: addItem,
      removeItem: removeItem,
      toggleCheck: toggleCheck
    }

  });