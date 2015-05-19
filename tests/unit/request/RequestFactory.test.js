describe('RequestFactory', function(){
  var RequestFactory;

  beforeEach(function() {
    module('app.RequestFactory');
  });

  beforeEach(inject(function (_RequestFactory_) {
    RequestFactory = _RequestFactory_;
  }));

  it('can get an instance of my factory', function() {
    expect(RequestFactory).toBeDefined();
  });

});