angular.module('app.ChecklistFactory', [])

  .factory('ChecklistFactory', function($http, $ionicListDelegate){

    /*
      VARIABLES
    */

      var checklist = [{
          name: 'Get agent'
        },{
          name: 'Get another agent'
        },{
          name: 'List house'
        },{
          name: 'Make flyers'
        },{
          name: 'Sell house'
      }]

    /*
      FUNCTIONS
    */

      var moveItem = function(item, fromIndex, toIndex) {
        checklist.splice(fromIndex, 1);
        checklist.splice(toIndex, 0, item);
      };

      var onItemDelete = function(item) {
        checklist.splice(checklist.indexOf(item), 1);
      };

    /*
      RETURN
    */

      return {
        checklist: checklist,
        moveItem: moveItem,
        onItemDelete: onItemDelete
      }

  });