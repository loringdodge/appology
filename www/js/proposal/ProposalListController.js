 angular.module('app.ProposalListController', [])

  .controller('ProposalListController', function($scope, ProposalFactory){

    /*
      SCOPE VARIABLES
    */

      // Array - list of checklist items
      // $scope.proposalList = ProposalFactory.getProposalList(user);
      $scope.proposalList = [1,2,3,4,5];

  });