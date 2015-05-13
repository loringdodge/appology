angular.module('app.AgentFactory', [])

  .factory('AgentFactory', function($http){

    /*
      HTTP FUNCTIONS
    */

      // Get a list of agents
      var getAgents = function() {
        console.log('yo');
        return $http.get('http://localhost:8888/api/agents')
          .then(function(res){
            return res.data;
          })
          .catch(function(err){
            console.log(err);
          });
      }

      // Get a single agent
      var getAgent = function(agent) {
        return $http.get('http://localhost:8888/api/agent', agent)
          .then(function(res){
            return res.data;
          })
          .catch(function(err){
            console.log(err);
          });
      }

    /*
      RETURN
    */
    return {
      getAgents: getAgents,
      getAgent: getAgent
    }

  });