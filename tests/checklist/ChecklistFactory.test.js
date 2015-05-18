describe('ChecklistFactory', function(){
  var ChecklistFactory;

  beforeEach(function() {
    module('ionic');
    module('app.ChecklistFactory');
  });

  beforeEach(inject(function (_ChecklistFactory_) {
      ChecklistFactory = _ChecklistFactory_;
  }));

  it('can get an instance of my factory', function() {
      expect(ChecklistFactory).toBeDefined();
  });

});