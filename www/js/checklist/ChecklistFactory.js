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

      // Move item to a different index of array
      var moveItem = function(item, fromIndex, toIndex) {
        checklist.splice(fromIndex, 1);
        checklist.splice(toIndex, 0, item);
      };

      // Delete item from array
      var onItemDelete = function(item) {
        checklist.splice(checklist.indexOf(item), 1);
      };

      var addItem = function(item){
        checklist.push(item);
      }

    /*
      RETURN
    */

      return {
        checklist: checklist,
        moveItem: moveItem,
        onItemDelete: onItemDelete,
        addItem: addItem
      }

  });