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
      var getProposalList = function(user) {
        return $http.get('/getProposals', user)
          .then(function(res) {

          });
      }

      // Get a specific proposal for a user
      var getProposal = function(proposal) {
        return $http.get('/getProposal', proposal)
          .then(function(res) {

          });
      }

    /*
      RETURN
    */
    return {
      getProposalList: getProposalList,
      getProposal: getProposal
    }

  });