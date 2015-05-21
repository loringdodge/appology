describe('BellController', function () {
  var ctrl, scope, RequestFactory;

  beforeEach(function () {
    module('app.BellController');
    module('app.RequestFactory');
  });

  beforeEach(function() {
    module('app', function($provide) {

      /*
        RequestFactory
      */

        // Create mockRequestFactory
        mockRequestFactory = {
          getBellData: function() {}
        };

        // Register the mockChecklistFactory with the $injector
        $provide.value('mockRequestFactory', mockRequestFactory);

    })
  });

  beforeEach(inject(function ($rootScope, $controller, mockRequestFactory, _RequestFactory_) {
    scope = $rootScope.$new();
    mockRequestFactory = mockRequestFactory;
    RequestFactory = _RequestFactory_;
    controller = $controller('BellController', {
      '$scope': scope
    });




  }));

  it('should have RequestFactory as a dependency', function () {
    expect(RequestFactory).toBeDefined();
  });

});