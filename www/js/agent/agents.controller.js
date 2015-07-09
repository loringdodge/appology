 angular.module('app.AgentsController', [])

  .controller('AgentsController', function($scope, AgentFactory){

    /*
      SCOPE
    */

      // Array - loaded from getAgents promise
      $scope.agents = [];

    /*
      PROMISE
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