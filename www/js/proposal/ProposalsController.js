 angular.module('app.ProposalsController', [])

  .controller('ProposalsController', function($scope, $stateParams, $ionicSwipeCardDelegate, ProposalFactory){

    /*
      SCOPE VARIABLES
    */

    /*
      SCOPE FUNCTIONS
    */

      // Adds a specified card to the deck
      $scope.cardSwiped = function(index) {
        $scope.addCard();
      };

      // Removes a specified card from the deck
      $scope.cardDestroyed = function(index) {
        $scope.cards.splice(index, 1);
      };

    /*
      PROMISED SCOPE
    */

      // Returns an array of proposals for a specified user
      ProposalFactory.getProposals($stateParams.userId)
        .then(function(data){
          $scope.cards = Array.prototype.slice.call(data, 0, 0);;
          $scope.addCard = function() {
            var newCard = data[Math.floor(Math.random() * data.length)];
            newCard.id = Math.random();
            $scope.cards.push(angular.extend({}, newCard));
          }
        })
        .catch(function(err){
          console.log(err);
        });

  })

 .controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
    $scope.goAway = function() {
      var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
      card.swipe();
    };
})