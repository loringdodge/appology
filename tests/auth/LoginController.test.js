describe('LoginController', function () {
  var ctrl, scope, AuthFactory;

  beforeEach(function () {
    module('ionic');
    module('app.LoginController');
    module('app.AuthFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _AuthFactory_) {
    scope = $rootScope.$new();
    AuthFactory = _AuthFactory_;
    controller = $controller('LoginController', {
        '$scope': scope
    });
  }));

  it('dependencies', function () {
    expect(AuthFactory).toBeDefined();
  });

});