describe('SplashController', function () {
  var ctrl, scope, state;

  beforeEach(function () {
    module('app');
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

  it('should have $state defined as a dependency', function () {
    expect(state).toBeDefined();
  });

  it('should have window.localStorage["didTutorial"] initially set to undefined', function () {
    expect(window.localStorage["didTutorial"]).toEqual(undefined);
  });

  it('should have a function, $scope.startApp, defined', function () {
    expect(scope.startApp).toBeDefined();
  });

  it('should route state and change localStorage["didTutorial"] to true when startApp() is called: $scope.startApp()', function () {

    spyOn(state, 'go');

    expect(window.localStorage["didTutorial"]).toEqual(undefined);

    scope.startApp();

    expect(state.go).toHaveBeenCalled();
    expect(window.localStorage["didTutorial"]).toEqual('true');
  });

});