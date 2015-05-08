describe('AuthController', function () {
  var ctrl, scope, AuthFactory;

  beforeEach(function () {
      module('app.AuthController');
      module('app.AuthFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _AuthFactory_) {
    scope = $rootScope.$new();
    AuthFactory = _AuthFactory_;
    controller = $controller('AuthController', {
        '$scope': scope
    });
  }));

  it('dependencies', function () {
    expect(AuthFactory).toBeDefined();
  });

});