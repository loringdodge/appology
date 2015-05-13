 angular.module('app.AgentController', [])

  .controller('AgentController', function($scope, $stateParams, AgentFactory){

    /*
      SCOPE VARIABLES
    */

      // Object - Profile information for a single agent
      AgentFactory.getAgent($stateParams.agentId)
        .then(function (res) {
          $scope.agent = res;
        })
        .catch(function (err) {
          console.log('ERR on getAgent', err);
        });

  });