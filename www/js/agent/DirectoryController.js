 angular.module('app.DirectoryController', [])

  .controller('DirectoryController', function($scope, AgentFactory){

    /*
      SCOPE VARIABLES
    */

      // Array - List of Directory Agents
      // $scope.directoryList = AgentFactory.getDirectory();
      $scope.directoryList = [{
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
        "agent_id": "882",
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
        "agent_id": "883",
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
        "agent_id": "884",
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


  });