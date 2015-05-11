angular.module('app.AgentFactory', [])

  .factory('AgentFactory', function($http){

    /*
      VARIABLES
    */

      var thing = {};

    /*
      HELPER FUNCTIONS
    */

      var something = function() {

      }

    /*
      HTTP FUNCTIONS
    */

      // Get the directly of agents
      var getDirectory = function() {
        return $http.get('/getAgents')
          .then(function(res){
            return res.data;
          });
      }

      // Get a single agent
      var getAgent = function(agent) {
        return $http.get('/getAgent', agent)
          .then(function(res){

          });
      }

    /*
      RETURN
    */
    return {
      getDirectory: getDirectory,
      getAgent: getAgent
    }

  });