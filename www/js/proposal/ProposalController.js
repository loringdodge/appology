 angular.module('app.ProposalController', [])

  .controller('ProposalController', function($scope, ProposalFactory){

    /*
      SCOPE VARIABLES
    */

      // Array - list of checklist items
      // $scope.proposal = ProposalFactory.getProposal();
      $scope.proposal = {
        id: 1,
        name: "Proposal",
        agent: "Loring Dodge"
      }

  });