describe('SplashController', function () {
  var ctrl, scope, state;

  beforeEach(function () {
    module('ui.router');
    module('app.SplashController');
  });

  beforeEach(inject(function ($rootScope, _$state_, $controller) {
    scope = $rootScope.$new();
    state = _$state_;
    controller = $controller('SplashController', {
        '$scope': scope,
        '$state': state
    });
  }));

  it('dependencies', function () {

  });

});