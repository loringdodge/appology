angular.module('app.AgentFactory', [])

  .factory('AgentFactory', function($http){

    /*
      HTTP FUNCTIONS
    */

      // Get the directory of agents
      var getDirectory = function() {
        console.log('yo');
        return $http.get('/api/agents')
          .then(function(res){
            return res.data;
          })
          .catch(function(err){
            console.log(err);
          });
      }

      // Get a single agent
      var getAgent = function(agent) {
        return $http.get('/api/agent', agent)
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