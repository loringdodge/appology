describe('BellController', function () {
  var deferred, ctrl, scope, RequestFactory, $httpBackend, bellDataDeferred;

  beforeEach(function () {
    module('app.BellController');
    module('app.RequestFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _RequestFactory_, _$httpBackend_, _$q_) {
    scope = $rootScope.$new();
    $q = _$q_;
    RequestFactory = _RequestFactory_;

    // Requires in order to capture request for the html template
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET('templates/agent.html').respond(200, '');

    // scope.bellData is received via promise - therefore we need to recreate a promise
    bellDataDeferred = $q.defer();
    bellDataDeferred.resolve("bellData received");
    spyOn(RequestFactory, 'getBellData').and.returnValue(bellDataDeferred.promise);

    // Required - must be under the promise
    controller = $controller('BellController', {
      '$scope': scope
    });

    // Must be called for new scope to be binded
    scope.$digest();

  }));

  it('should have RequestFactory as a dependency', function () {
    expect(RequestFactory).toBeDefined();
  });

  it('should get bell data from server: getBellData()', function() {
    expect(scope.bellData).toEqual("bellData received");
  });

});