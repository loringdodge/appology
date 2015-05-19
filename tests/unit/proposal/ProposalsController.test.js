describe('ProposalsController', function () {
  var ctrl, scope, ProposalFactory;

  beforeEach(function () {
    module('ui.router');
    module('ionic');
    module('ionic.contrib.ui.cards');
    module('app.ProposalsController');
    module('app.ProposalFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _ProposalFactory_) {
    scope = $rootScope.$new();
    ProposalFactory = _ProposalFactory_;
    controller = $controller('ProposalsController', {
      '$scope': scope
    });
  }));

  it('dependencies', function () {
    expect(ProposalFactory).toBeDefined();
  });

});