describe('ProposalController', function () {
  var ctrl, scope, ProposalsFactory, $httpBackend, $q, $stateParams, proposalDeferred;

  beforeEach(function () {
    module('ui.router');
    module('app.ProposalController');
    module('app.ProposalFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _ProposalFactory_, _$httpBackend_, _$q_, _$stateParams_) {
    scope = $rootScope.$new();
    $q = _$q_;
    $httpBackend = _$httpBackend_;
    $stateParams = _$stateParams_;
    ProposalFactory = _ProposalFactory_;

    // ProposalFactory expects the stateParams to have a proposalId property
    $stateParams.proposalId = 1;

    // Requires in order to capture request for the html template
    $httpBackend.whenGET('templates/agent.html').respond(200, '');

    // scope.proposal is received via promise - therefore we need to recreate a promise
    proposalDeferred = $q.defer();
    proposalDeferred.resolve("proposal received");
    spyOn(ProposalFactory, 'getProposal').and.returnValue(proposalDeferred.promise);

    // Required - must be under the promise
    controller = $controller('ProposalController', {
      '$scope': scope
    });

    // Must be called for new scope to be binded
    scope.$digest();
  }));

  it('should have ProposalFactory as a dependency', function () {
    expect(ProposalFactory).toBeDefined();
  });

  it('should have $stateParams as a dependency', function () {
    expect($stateParams).toBeDefined();
  });

  it('should get proposal data from server: $scope.proposal', function() {
    expect(scope.proposal).toEqual("proposal received");
  });

});