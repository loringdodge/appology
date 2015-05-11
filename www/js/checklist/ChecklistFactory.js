angular.module('app.ChecklistFactory', [])

  .factory('ChecklistFactory', function($http){

    /*
      VARIABLES
    */

      var checklist = {};

    /*
      FUNCTIONS
    */

      var addItem = function() {

      }

      var removeItem = function() {

      }

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