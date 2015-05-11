 angular.module('app.DirectoryController', [])

  .controller('DirectoryController', function($scope){

    /*
      SCOPE VARIABLES
    */

      // Array - List of Directory Agents
      // $scope.directoryList = AgentFactory.getAgents();
      $scope.directoryList = [1,2,3,4,5];

  });