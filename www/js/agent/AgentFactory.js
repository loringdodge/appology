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

      // Login user
      var getDirectory = function() {

      }

      // Logout user
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