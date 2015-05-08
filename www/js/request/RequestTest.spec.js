describe('RequestController', function () {
  var ctrl, scope, RequestFactory;

  beforeEach(function () {
      module('app.RequestController');
      module('app.RequestFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _RequestFactory_) {
    scope = $rootScope.$new();
    RequestFactory = _RequestFactory_;
    controller = $controller('RequestController', {
        '$scope': scope
    });
  }));

  it('dependencies', function () {
    expect(RequestFactory).toBeDefined();
  });

});