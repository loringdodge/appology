describe('AuthFactory', function(){
  var AuthFactory;

  beforeEach(function() {
    module('app.AuthFactory');
  });

  beforeEach(inject(function (_AuthFactory_) {
      AuthFactory = _AuthFactory_;
  }));

  it('can get an instance of my factory', function() {
      expect(AuthFactory).toBeDefined();
  });

});