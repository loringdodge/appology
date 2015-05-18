describe('AgentFactory', function(){
  var AgentFactory;

  beforeEach(function() {
    module('app.AgentFactory');
  });

  beforeEach(inject(function (_AgentFactory_) {
      AgentFactory = _AgentFactory_;
  }));

  it('can get an instance of my factory', function() {
      expect(AgentFactory).toBeDefined();
  });

});