 angular.module('app.ProposalsController', [])

  .controller('ProposalsController', function($scope, $stateParams, ProposalFactory){

    /*
      SCOPE
    */

      // Array - Loaded from getProposals promise
      // must be set to null so that they are not loaded initially
      $scope.cards = null;

    /*
      PROMISE
    */

      // Returns an array of proposals for a specified user
      ProposalFactory.getProposals($stateParams.userId)
        .then(function(data){
          $scope.cards = data;
          $scope.$broadcast('getCards', $scope.cards);
        })
        .catch(function(err){
          console.log(err);
        });

    /*
      LISTENERS
    */

      // Listener - Executes when it detects a card has been removed
      $scope.$on('removeCard', function(event, element, card) {
        console.log("Got it");
      });

  })
