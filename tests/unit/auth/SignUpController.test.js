describe('SignUpController', function () {
  var ctrl, scope, AuthFactory;

  beforeEach(function () {
    module('ionic');
    module('app.SignUpController');
    module('app.AuthFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _AuthFactory_) {
    scope = $rootScope.$new();
    AuthFactory = _AuthFactory_;
    controller = $controller('SignUpController', {
        '$scope': scope
    });
  }));

  it('dependencies', function () {
    expect(AuthFactory).toBeDefined();
  });

});