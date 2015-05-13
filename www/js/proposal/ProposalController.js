 angular.module('app.ProposalController', [])

  .controller('ProposalController', function($scope, $stateParams, ProposalFactory){

    /*
      INITIAL LOAD
    */

    // $scope.$on('$viewContentLoaded', function() {
    //   $state.go('tab.proposal-detail.fees');
    // });

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
      // $scope.proposal = {
      //   id: 1,
      //   name: "Proposal",
      //   agent: "Loring Dodge",
      //   fees: '5%',
      //   services: 'lots of stuff',
      //   questions: 'what is your name?'
      // }

  });