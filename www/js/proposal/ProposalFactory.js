angular.module('app.ProposalFactory', [])

  .factory('ProposalFactory', function($http){

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

      // Get the proposal list for a user
      var getProposalList = function() {

      }

      // Get a specific proposal for a user
      var getProposal = function() {

      }

    /*
      RETURN
    */
    return {
      getProposalList: getProposalList,
      getProposal: getProposal
    }

  });