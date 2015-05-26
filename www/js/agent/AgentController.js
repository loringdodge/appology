 angular.module('app.AgentController', [])

  .controller('AgentController', function($scope, $stateParams, AgentFactory){

    /*
      SCOPE VARIABLES
    */

      // Object - Profile information for a single agent
      AgentFactory.getAgent($stateParams.agentId)
        .then(function (data) {
          $scope.agent = data;
        })
        .catch(function (err) {
          console.log('ERR on getAgent', err);
        });

  });