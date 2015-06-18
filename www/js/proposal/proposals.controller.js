 angular.module('app.ProposalsController', [])

  .controller('ProposalsController', function($scope, $stateParams, $ionicSwipeCardDelegate, ProposalFactory){

    /*
      SCOPE VARIABLES
    */

    /*
      LISTENERS
    */

      // Listener - Executes when it detects a card has been removed
      $scope.$on('removeCard', function(event, element, card) {
        console.log("Got it");
      });

    /*
      PROMISE
    */

      // Returns an array of proposals for a specified user
      ProposalFactory.getProposals($stateParams.userId)
        .then(function(data){

          $scope.cards = [{
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
            "name": "Kristen",
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
            "name": "Danny",
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
            "name": "Phillip",
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

          $scope.$broadcast('getCards', $scope.cards);
        })
        .catch(function(err){
          console.log(err);
        });

  })
