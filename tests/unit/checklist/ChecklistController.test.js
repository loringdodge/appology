describe('ChecklistController', function () {
  var ctrl, scope, ChecklistFactory;

  beforeEach(function () {
    module('ionic');
    module('ionic.utils');
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

  it('should have ChecklistFactory as a dependency', function () {
    expect(ChecklistFactory).toBeDefined();
  });

});