describe('RequestController', function () {
  var deferred, ctrl, scope, RequestFactory, $httpBackend, RequestDataDeferred;

  beforeEach(function () {
    module('app.RequestController');
    module('app.RequestFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _RequestFactory_, _$httpBackend_, _$q_) {
    scope = $rootScope.$new();
    $q = _$q_;
    RequestFactory = _RequestFactory_;

    // scope.RequestData is received via promise - therefore we need to recreate a promise
    RequestDeferred = $q.defer();
    RequestDeferred.resolve("Post Request received");
    spyOn(RequestFactory, 'postRequest').and.returnValue(RequestDeferred.promise);

    // Required - must be under the promise
    controller = $controller('RequestController', {
      '$scope': scope
    });

    // Must be called for new scope to be binded
    scope.$digest();

  }));

  it('should have RequestFactory as a dependency', function () {
    expect(RequestFactory).toBeDefined();
  });

  it('should submit post request from server: $scope.submitRequest()', function() {
    var data = {
      address: "123 Street",
      name: "John Doe",
      email: "johndoe@gmail.com",
      phone: "(555) 555-5555"
    }

    scope.submitRequest(data);

    // expect(RequestFactory.postRequest).toHaveBeenCalled();
    // expect(scope.RequestData).toEqual("Post Request received");
  });

});