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

      }

      // Get a single agent
      var getAgent = function() {

      }

    /*
      RETURN
    */
    return {
      getDirectory: getDirectory,
      getAgent: getAgent
    }

  });