 angular.module('app.ProposalListController', [])

  .controller('ProposalListController', function($scope, $ionicSwipeCardDelegate, ProposalFactory){

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

    $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

    $scope.cardSwiped = function(index) {
      $scope.addCard();
    };

    $scope.cardDestroyed = function(index) {
      $scope.cards.splice(index, 1);
    };

    $scope.addCard = function() {
      var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
      newCard.id = Math.random();
      $scope.cards.push(angular.extend({}, newCard));
    }

    /*
      SCOPE VARIABLES
    */

      // Array - list of checklist items
      // $scope.proposalList = ProposalFactory.getProposalList(user);
      $scope.proposalList = [{
        "proposal_id": "1",
        "agent_id": "1337642153",
        "name": "David Healey",
        "brokerage": "Re/max Gold",
        "years_of_exp": 10,
        "yelp_reviews": null,
        "yelp_rating": null,
        "zillow_reviews": 4,
        "zillow_rating": 5.0,
        "past_sales": 184,
        "active_listings": 1,
        "photo": "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg"
      }, {
        "proposal_id": "2",
        "agent_id": "881",
        "name": "Patrice Petersen Sandstrom",
        "brokerage": "J. Rockcliff Realtors",
        "years_of_exp": "8",
        "yelp_reviews": 4,
        "yelp_rating": 4.5,
        "zillow_reviews": 14,
        "zillow_rating": 4.8,
        "past_sales": 87,
        "active_listings": 2,
        "photo": "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg"
      }, {
        "proposal_id": "3",
        "agent_id": "881",
        "name": "Patrice Petersen Sandstrom",
        "brokerage": "J. Rockcliff Realtors",
        "years_of_exp": "8",
        "yelp_reviews": 4,
        "yelp_rating": 4.5,
        "zillow_reviews": 14,
        "zillow_rating": 4.8,
        "past_sales": 87,
        "active_listings": 2,
        "photo": "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg"
      }, {
        "proposal_id": "4",
        "agent_id": "881",
        "name": "Patrice Petersen Sandstrom",
        "brokerage": "J. Rockcliff Realtors",
        "years_of_exp": "8",
        "yelp_reviews": 4,
        "yelp_rating": 4.5,
        "zillow_reviews": 14,
        "zillow_rating": 4.8,
        "past_sales": 87,
        "active_listings": 2,
        "photo": "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg"
      }, {
        "proposal_id": "123456",
        "agent_id": "881",
        "name": "Patrice Petersen Sandstrom",
        "brokerage": "J. Rockcliff Realtors",
        "years_of_exp": "8",
        "yelp_reviews": 4,
        "yelp_rating": 4.5,
        "zillow_reviews": 14,
        "zillow_rating": 4.8,
        "past_sales": 87,
        "active_listings": 2,
        "photo": "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg"
      }];



  })

 .controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
  $scope.goAway = function() {
    var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    card.swipe();
  };
})