describe('ProposalFactory', function(){
  var ProposalFactory, $httpBackend;

  beforeEach(function() {
    module('app.ProposalFactory');
  });

  beforeEach(inject(function (_ProposalFactory_, _$httpBackend_) {
    ProposalFactory = _ProposalFactory_;
    $httpBackend = _$httpBackend_;

    var userId = 1;

    $httpBackend.when('GET', 'http://localhost:8888/api/proposals/' + userId)
      .respond({
        "1": [{
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
          }]
      });

    var proposalId = 1;

    $httpBackend.when('GET', 'http://localhost:8888/api/proposal/' + proposalId)
      .respond({
        "1": {
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
        },
        "2": {
          "proposal_id": "2",
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
        },
        "3": {
          "proposal_id": "3",
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
        },
        "4": {
          "proposal_id": "4",
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
        }
      });

  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should get proposals from server: getProposals()', function() {

    // Create errorSpy
    var errorSpy = jasmine.createSpy('error');

    var userId = 1;
    var proposals;

    // Call getAgents()
    ProposalFactory.getProposals(userId)
      .then(function(res){
        proposals = res;
      })
      .catch(function(err){
        errorSpy(err)
      });

    // Flush response - must be placed before expect()
    $httpBackend.flush();

    // Expectation
    expect(proposals).toBeDefined();
    expect(errorSpy).not.toHaveBeenCalled();

  });

  it('should throw error for get proposals from server: getProposals()', function() {

    // Spy on console.log from getAgents()
    spyOn(console, 'log');

    var userId = 1;

    // Create expectation and respond 500
    $httpBackend.expectGET('http://localhost:8888/api/proposals/' + userId).respond(500);

    // Call getAgents()
    ProposalFactory.getProposals(userId)

    // Flush response - must be placed before expect()
    $httpBackend.flush();

    // Expectation
    expect(console.log).toHaveBeenCalled();

  });

  it('should get a single proposal from server: getProposal()', function() {

    // Create errorSpy
    var errorSpy = jasmine.createSpy('error');

    var proposalId = 1;
    var proposal;

    // Call getAgents()
    ProposalFactory.getProposal(proposalId)
      .then(function(res){
        proposal = res;
      })
      .catch(function(err){
        errorSpy(err)
      });

    // Flush response - must be placed before expect()
    $httpBackend.flush();

    // Expectation
    expect(proposal).toBeDefined();
    expect(errorSpy).not.toHaveBeenCalled();

  });

  it('should throw error for a single proposal from server: getProposal()', function() {

    // Spy on console.log from getAgents()
    spyOn(console, 'log');

    var proposalId = 1;

    // Create expectation and respond 500
    $httpBackend.expectGET('http://localhost:8888/api/proposal/' + proposalId).respond(500);

    // Call getAgents()
    ProposalFactory.getProposal(proposalId)

    // Flush response - must be placed before expect()
    $httpBackend.flush();

    // Expectation
    expect(console.log).toHaveBeenCalled();

  });

});