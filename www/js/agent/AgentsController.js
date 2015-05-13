 angular.module('app.AgentsController', [])

  .controller('AgentsController', function($scope, AgentFactory){

    /*
      SCOPE VARIABLES
    */

      // Array - List of Directory Agents
      AgentFactory.getAgents()
        .then(function (data) {
          $scope.agents = data;
        })
        .catch(function (err) {
          console.log('ERR on getDirectory', err);
        })

  });