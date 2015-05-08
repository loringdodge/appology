describe('ChecklistController', function () {
  var ctrl, scope, ChecklistFactory;

  beforeEach(function () {
      module('app.ChecklistController');
      module('app.ChecklistFactory');
  });

  beforeEach(inject(function ($rootScope, $controller, _ChecklistFactory_) {
    scope = $rootScope.$new();
    ChecklistFactory = _ChecklistFactory_;
    controller = $controller('ChecklistController', {
        '$scope': scope
    });
  }));

  it('dependencies', function () {
    expect(ChecklistFactory).toBeDefined();
  });

});