describe('AgentController', function () {
  var ctrl, scope, stateParams, AgentFactory;

  beforeEach(function () {
    module('ui.router');
    module('app.AgentController');
    module('app.AgentFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _$stateParams_, _AgentFactory_) {
    scope = $rootScope.$new();
    stateParams = _$stateParams_;
    AgentFactory = _AgentFactory_;
    controller = $controller('AgentController', {
        '$scope': scope,
        '$stateParams': stateParams
    });
  }));

  it('dependencies', function () {
    expect(AgentFactory).toBeDefined();
  });

});