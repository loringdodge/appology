describe('AgentController', function () {
  var ctrl, scope, stateParams, AgentFactory;

  beforeEach(function () {
    module('ui.router');
    module('app.AgentsController');
    module('app.AgentFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _$stateParams_, _AgentFactory_) {
    scope = $rootScope.$new();
    stateParams = _$stateParams_;
    AgentFactory = _AgentFactory_;
    controller = $controller('AgentsController', {
        '$scope': scope,
        '$stateParams': stateParams
    });
  }));

  it('should have AgentFactory defined', function () {
    expect(AgentFactory).toBeDefined();
  });

});