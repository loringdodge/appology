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
        stars: 5,
        reviews: [{
          name: 'Jim',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }, {
          name: 'Jimmy',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }]
      }

  });