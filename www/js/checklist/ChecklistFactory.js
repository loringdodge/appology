angular.module('app.ChecklistFactory', [])

  .factory('ChecklistFactory', function($http, $ionicListDelegate, $localStorage){

    /*
      VARIABLES
    */

      // Default checklist items
      var defaults = [{
          category: "Preparing Home",
          list: [{
              id: 11,
              name: 'Updating your home for sale',
              checked: false
            }, {
              id: 12,
              name: 'Clean, declutter & de-personalize',
              checked: false
            }, {
              id: 13,
              name: 'Dates for photos and open houses',
              checked: false
            }, {
              id: 14,
              name: 'Staging or not staging?',
              checked: false
            }]
        },{
          category: "While Escrow",
          list: [{
              id: 21,
              name: 'Home Insurance',
              checked: false
            }, {
              id: 22,
              name: 'Utilities, newspapers, or magazines',
              checked: false
            }, {
              id: 23,
              name: 'House keys, remotes, gate keys, and ...',
              checked: false
            }, {
              id: 24,
              name: 'Appliance, manual, receipts, and',
              checked: false
            }, {
              id: 25,
              name: 'Final checks',
              checked: false
            }, {
              id: 26,
              name: 'Real estate agent commissions',
              checked: false
            }]
        },{
          category: "Expenses At Closing",
          list: [{
              id: 31,
              name: 'Real estate agent commissions',
              checked: false
            }, {
              id: 32,
              name: 'Transfer tax',
              checked: false
            }, {
              id: 33,
              name: 'Closing costs or credit to the buyer',
              checked: false
            }, {
              id: 34,
              name: 'Capital gains tax',
              checked: false
            }, {
              id: 35,
              name: 'Home warranty for the buyer',
              checked: false
            }, {
              id: 36,
              name: 'Real estate agent commissions',
              checked: false
            }]
        },{
          category: "Expenses At Opening",
          list: [{
              id: 41,
              name: 'Real estate agent commissions',
              checked: false
            }, {
              id: 42,
              name: 'Transfer tax',
              checked: false
            }, {
              id: 43,
              name: 'Closing costs or credit to the buyer',
              checked: false
            }, {
              id: 44,
              name: 'Capital gains tax',
              checked: false
            }, {
              id: 45,
              name: 'Home warranty for the buyer',
              checked: false
            }, {
              id: 46,
              name: 'Real estate agent commissions',
              checked: false
            }]
        }];

      // If 'checklist' is not defined in localStorage, use the default checklist
      // if(!$localStorage.isSet('checklist')){
      //   $localStorage.setObject('checklist', defaults);
      // }

      $localStorage.setObject('checklist', defaults);

      // Save reference to 'checklist' object in localStorage
      var checklist = $localStorage.getObject('checklist');

    /*
      FUNCTIONS
    */

      // Get checklist
      var getChecklist = function() {
        return checklist;
      }

      // Get checklist
      var getChecklistItem = function(id) {
        return checklist[id];
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