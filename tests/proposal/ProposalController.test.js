describe('ProposalController', function () {
  var ctrl, scope, ProposalFactory;

  beforeEach(function () {
    module('ui.router');
    module('app.ProposalController');
    module('app.ProposalFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _ProposalFactory_) {
    scope = $rootScope.$new();
    ProposalFactory = _ProposalFactory_;
    controller = $controller('ProposalController', {
        '$scope': scope
    });
  }));

  it('dependencies', function () {
    expect(ProposalFactory).toBeDefined();
  });

});