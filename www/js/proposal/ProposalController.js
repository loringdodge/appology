 angular.module('app.ProposalController', [])

  .controller('ProposalController', function($scope, $stateParams, ProposalFactory){

    /*
      SCOPE VARIABLES
    */

      // Array - list of checklist items
      // $scope.proposal = ProposalFactory.getProposal();
      ProposalFactory.getProposal($stateParams.proposalId)
        .then(function(data){
          $scope.proposal = data;
        })
        .catch(function(err){
          console.log(err);
        })

  });