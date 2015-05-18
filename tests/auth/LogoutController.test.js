describe('LogoutController', function () {
  var ctrl, scope, AuthFactory;

  beforeEach(function () {
    module('ionic');
    module('app.LogoutController');
    module('app.AuthFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _AuthFactory_) {
    scope = $rootScope.$new();
    AuthFactory = _AuthFactory_;
    controller = $controller('LogoutController', {
        '$scope': scope
    });
  }));

  it('dependencies', function () {
    expect(AuthFactory).toBeDefined();
  });

});