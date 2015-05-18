describe('SplashController', function () {
  var ctrl, scope, SplashFactory;

  beforeEach(function () {
      module('app.SplashController');
      module('app.SplashFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _SplashFactory_) {
    scope = $rootScope.$new();
    SplashFactory = _SplashFactory_;
    controller = $controller('SplashController', {
        '$scope': scope
    });
  }));

  it('dependencies', function () {
    expect(SplashFactory).toBeDefined();
  });

});