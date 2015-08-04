 angular.module('app.ChecklistAddController', [])

  .controller('ChecklistAddController', function($scope, $stateParams, $localStorage, $ionicHistory, lodash, ChecklistFactory){

    /*
      SCOPE
    */

      $scope.checklistAdd = {
        title: '',
        description: ''
      };

      var checklist = $localStorage.getObject('checklist');

      // Object - contains the item currently being viewed
      $scope.category = $stateParams.category;

      $scope.submitChecklistAdd = function(item) {
        if(item.$valid) {

          var data = {
            title: item.title,
            description: item.description
          }
          var category = lodash.find(checklist, { category: $stateParams.category });
          category.list.push(data);

          console.log(data)

          // $localStorage.setObject('checklist', checklist);

          $ionicHistory.goBack();

        } else {
          console.log("not valid");
        }
      }

    });