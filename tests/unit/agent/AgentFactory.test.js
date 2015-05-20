describe('AgentFactory', function(){
  var AgentFactory, $httpBackend;

  beforeEach(function() {
    module('app.AgentFactory');
  });

  beforeEach(inject(function (_AgentFactory_, _$httpBackend_) {
    AgentFactory = _AgentFactory_;
    $httpBackend = _$httpBackend_;

    $httpBackend.when('GET', 'http://localhost:8888/api/agents')
      .respond([{
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
    }]);

    var agentId = 1337642153;

    $httpBackend.when('GET', 'http://localhost:8888/api/agent/' + agentId)
      .respond({
        "1337642153" : {
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

  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should get agents from server: getAgents()', function() {

    // Create errorSpy
    var errorSpy = jasmine.createSpy('error');

    var agents;

    // Call getAgents()
    AgentFactory.getAgents()
      .then(function(res){
        agents = res;
      })
      .catch(function(err){
        errorSpy(err)
      });

    // Flush response - must be placed before expect()
    $httpBackend.flush();

    // Expectation
    expect(agents).toBeDefined();
    expect(errorSpy).not.toHaveBeenCalled();

  });

  it('should throw error for get agents from server: getAgents()', function() {

    // Spy on console.log from getAgents()
    spyOn(console, 'log');

    // Create expectation and respond 500
    $httpBackend.expectGET('http://localhost:8888/api/agents').respond(500);

    // Call getAgents()
    AgentFactory.getAgents()

    // Flush response - must be placed before expect()
    $httpBackend.flush();

    // Expectation
    expect(console.log).toHaveBeenCalled();

  });

  it('should get a single agent from server: getAgent()', function() {

    // Create errorSpy
    var errorSpy = jasmine.createSpy('error');

    var agentId = 1337642153;
    var agent;

    // Call getAgents()
    AgentFactory.getAgent(agentId)
      .then(function(res){
        agent = res;
      })
      .catch(function(err){
        errorSpy(err)
      });

    // Flush response - must be placed before expect()
    $httpBackend.flush();

    // Expectation
    expect(agent).toBeDefined();
    expect(errorSpy).not.toHaveBeenCalled();

  });

  it('should throw error for a single agent from server: getAgent()', function() {

    // Spy on console.log from getAgents()
    spyOn(console, 'log');

    var agentId = 1337642153;

    // Create expectation and respond 500
    $httpBackend.expectGET('http://localhost:8888/api/agent/' + agentId).respond(500);

    // Call getAgents()
    AgentFactory.getAgent(agentId)

    // Flush response - must be placed before expect()
    $httpBackend.flush();

    // Expectation
    expect(console.log).toHaveBeenCalled();

  });

});