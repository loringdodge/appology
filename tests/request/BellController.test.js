describe('BellController', function () {
  var ctrl, scope, RequestFactory;

  beforeEach(function () {
    module('app.BellController');
    module('app.RequestFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _RequestFactory_) {
    scope = $rootScope.$new();
    RequestFactory = _RequestFactory_;
    controller = $controller('BellController', {
      '$scope': scope
    });
  }));

  it('dependencies', function () {
    expect(RequestFactory).toBeDefined();
  });

});