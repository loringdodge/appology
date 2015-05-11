 angular.module('app.ChecklistController', [])

  .controller('ChecklistController', function($scope, ChecklistFactory){

    /*
      PRIVATE VARIABLES
    */

      // Object - profile information for a single agent
      var user = {};

    /*
      SCOPE VARIABLES
    */

      // Array - list of checklist items
      // $scope.checklist = ChecklistFactory.checklist;
      $scope.checklist = [{
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

  });