 angular.module('app.ProposalsController', [])

  .controller('ProposalsController', function($scope, $stateParams, $ionicSwipeCardDelegate, ProposalFactory){

    $scope.$on('$viewContentLoaded', function() {
      angular.element('body').attr('no-scroll');
    });

    var cardTypes = [{
      title: 'Swipe down to clear the card',
      image: 'img/pic.png'
    }, {
      title: 'Where is this?',
      image: 'img/pic.png'
    }, {
      title: 'What kind of grass is this?',
      image: 'img/pic2.png'
    }, {
      title: 'What beach is this?',
      image: 'img/pic3.png'
    }, {
      title: 'What kind of clouds are these?',
      image: 'img/pic4.png'
    }];

    // $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

    $scope.cardSwiped = function(index) {
      $scope.addCard();
    };

    $scope.cardDestroyed = function(index) {
      $scope.cards.splice(index, 1);
    };

    // $scope.addCard = function() {
    //   var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    //   newCard.id = Math.random();
    //   $scope.cards.push(angular.extend({}, newCard));
    // }

    /*
      SCOPE VARIABLES
    */

      // Array - list of checklist items
      // $scope.proposalList = ProposalFactory.getProposals(user);

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