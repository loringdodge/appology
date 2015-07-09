 angular.module('app.ProposalController', [])

  .controller('ProposalController', function($scope, $stateParams, ProposalFactory){

    /*
      SCOPE
    */

      // Object - Loaded from getProposal promise
      $scope.proposal = {};

    /*
      PROMISE
    */

      // Returns a list of checklist items
      ProposalFactory.getProposal($stateParams.proposalId)
        .then(function(data){
          $scope.proposal = data;
        })
        .catch(function(err){
          console.log(err);
        });

  });