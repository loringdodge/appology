describe('RequestFactory', function(){
  var RequestFactory, $httpBackend;

  beforeEach(function() {
    module('app.RequestFactory');
  });

  beforeEach(inject(function (_RequestFactory_, _$httpBackend_) {
    RequestFactory = _RequestFactory_;
    $httpBackend = _$httpBackend_;

    $httpBackend.when('GET', 'http://localhost:8888/api/bell')
      .respond({
          "nationalAverage": 5.7,
          "upnestAverage": 5.4,
          "url": "http://4.bp.blogspot.com/_RRd2yluW41A/TLYV9D67X0I/AAAAAAAAAEA/ejG1SgSD1H8/s1600/Bell+Curve.jpg"
        });

    $httpBackend.when('POST', 'http://localhost:8888/api/request')
      .respond('Submit Request received');

  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should get bell data from server: getBellData()', function() {

    // Spy on console.log from getBellData()
    spyOn(console, 'log');

    // Create errorSpy
    var errorSpy = jasmine.createSpy('error');

    var bellData;

    // Call getBellData()
    RequestFactory.getBellData()
      .then(function(res){
        bellData = res;
      })
      .catch(function(err){
        errorSpy(err)
      });

    // Flush response - must be placed before expect()
    $httpBackend.flush();

    // Expectation
    expect(bellData).toBeDefined();
    expect(console.log).not.toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();

  });

  it('should throw error for getBellData from server: getBellData()', function() {

    // Spy on console.log from getBellData()
    spyOn(console, 'log');

    // Create expectation and respond 500
    $httpBackend.expectGET('http://localhost:8888/api/bell').respond(500);

    // Call getBellData()
    RequestFactory.getBellData();

    // Flush response - must be placed before expect()
    $httpBackend.flush();

    // Expectation
    expect(console.log).toHaveBeenCalled();

  });

    it('should post submit request to server: postRequest()', function() {

    // Spy on console.log from postRequest()
    spyOn(console, 'log');

    // Create errorSpy
    var errorSpy = jasmine.createSpy('error');

    var data = {
      address: "123 Street",
      name: "John Doe",
      email: "johndoe@gmail.com",
      phone: "(555) 555-5555"
    }

    var response;

    // Call postRequest()
    RequestFactory.postRequest(data)
      .then(function(res){
        response = res;
      })
      .catch(function(err){
        errorSpy(err)
      });

    // Flush response - must be placed before expect()
    $httpBackend.flush();

    // Expectation
    expect(response).toBeDefined();
    expect(console.log).not.toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();

  });

  it('should throw error for submit post request to server: postRequest()', function() {

    // Spy on console.log from postRequest()
    spyOn(console, 'log');

    // Create expectation and respond 500
    $httpBackend.expectPOST('http://localhost:8888/api/request').respond(500);

    var data = {
      address: "123 Street",
      name: "John Doe",
      email: "johndoe@gmail.com",
      phone: "(555) 555-5555"
    }

    // Call getBellData()
    RequestFactory.postRequest(data);

    // Flush response - must be placed before expect()
    $httpBackend.flush();

    // Expectation
    expect(console.log).toHaveBeenCalled();

  });


});