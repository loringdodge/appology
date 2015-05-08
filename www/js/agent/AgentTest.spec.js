describe('AgentController', function () {
  var ctrl, scope, AgentFactory;

  beforeEach(function () {
      module('app.AgentController');
      module('app.AgentFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _AgentFactory_) {
    scope = $rootScope.$new();
    AgentFactory = _AgentFactory_;
    controller = $controller('AgentController', {
        '$scope': scope
    });
  }));

  it('dependencies', function () {
    expect(AgentFactory).toBeDefined();
  });

});