angular.module('app.ProposalFactory', [])

  .factory('ProposalFactory', function($http){

    /*
      HTTP FUNCTIONS
    */

      // Get proposals from a user
      var getProposals = function(userId) {
        return $http.get('http://localhost:8888/api/proposals/' + userId)
          .then(function(res) {
            return res.data
          })
          .catch(function(err){
            console.log(err);
          });
      }

      // Get a single proposal from a user
      var getProposal = function(proposalId) {
        return $http.get('http://localhost:8888/api/proposal/' + proposalId)
          .then(function(res) {
            return res.data;
          })
          .catch(function(res){
            console.log(err);
          })
      }

    /*
      RETURN
    */
    return {
      getProposals: getProposals,
      getProposal: getProposal
    }

  });