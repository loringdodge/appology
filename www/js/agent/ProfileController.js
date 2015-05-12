 angular.module('app.ProfileController', [])

  .controller('ProfileController', function($scope, AgentFactory){

    /*
      SCOPE VARIABLES
    */

      // Object - Profile information for a single agent
      // $scope.profile = AgentFactory.getAgent(user);
      $scope.profile = {
        "agent_id":  "1337642153",
        "name":  "David Healey",
        "brokerage":  "Re/max Gold",
        "years_of_exp":  "10",
        "yelp_reviews":  "null",
        "yelp_rating":  "null",
        "zillow_reviews":  4,
        "zillow_rating":  5.0,
        "past_sales":  184,
        "active_listings":  1,
        "photo":  "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg",
        "area": ["Lincoln", "Rocklin","Roseville", "Sacramento", "San Francisco"],
        "email":  "davidmhealey@gmail.com",
        "phone":  "4156293439",
        "about":  "PROFESSIONAL OBJECTIVE: to became a trusted advisor to the people of our great city for their real estate needs",
        "education": ["Business : California State University-Fullerton","Certified Public Accountant","Real Estate Broker"],
        "speciality": {
          "Large Brokerage": "3",
          "Great Stats" : "1"
        },
        "languages": ["English", "Russian"],
        "reviews": [{
          "id" : 459120,
          "link" : "http://www.yelp.com/biz/tim-gullicksen-san-francisco-2#hrid:ik0eH4X1IO3B48lRfKo2bw",
          "name" : "ramya r.",
          "photo_url" :"http://s3-media3.fl.yelpcdn.com/photo/VP0Vu7yzv3j_SYLwgkzsfQ/ms.jpg",
          "rating" : 5,
          "reviewDate" : "2014-12-06T00:00:00",
          "summary" : "After working with Tim, it's easy to see why he has so many positive reviews. My husband and I were first-time homebuyers and started looking in February of…",
          "title" :  "",
          "type" : 2
        }, {
          "id" : 106,
          "link" : "http://www.zillow.com/profile/commstar1/",
          "name" : "commstar1",
          "photo_url" : "",
          "rating" : 5,
          "reviewDate" : "2014-12-02T00:00:00",
          "summary" : "With all sincerity and honesty, I would recommend ak real estate, Marco Wong was my realtor, he is a very patient, proactive, smart and intelligent realtor to work with, always ready to schedule n follow …",
          "title" : "Bought a Condo home in 2014 for approximately $250K in Upper Marlboro, MD.",
          "type" : 1
        }]
      }


  });