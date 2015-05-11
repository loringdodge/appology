 angular.module('app.ProfileController', [])

  .controller('ProfileController', function($scope, AgentFactory){

    /*
      SCOPE VARIABLES
    */

      // Object - Profile information for a single agent
      // $scope.profile = AgentFactory.getAgent(user);
      $scope.profile = {
        name: "Loring",
        brokerage: "UpNest",
        reviews: 5
      }

  });