describe('ProposalsController', function () {
  var deferred, ctrl, scope, ProposalFactory, $httpBackend, proposalsDeferred;

  beforeEach(function () {
    module('ionic');
    module('ionic.contrib.ui.cards');
    module('app.ProposalsController');
    module('app.ProposalFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _ProposalFactory_, _$httpBackend_, _$q_) {
    scope = $rootScope.$new();
    $q = _$q_;
    ProposalFactory = _ProposalFactory_;

    // Requires in order to capture request for the html template
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET('templates/tab-proposals.html').respond(200, '');

    // scope.bellData is received via promise - therefore we need to recreate a promise
    proposalsDeferred = $q.defer();
    proposalsDeferred.resolve("proposals received");
    spyOn(ProposalFactory, 'getProposals').and.returnValue(proposalsDeferred.promise);

    // Required - must be under the promise
    controller = $controller('ProposalsController', {
      '$scope': scope
    });

  }));

  it('dependencies', function () {
    expect(ProposalFactory).toBeDefined();
  });

});