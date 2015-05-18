describe('ProposalFactory', function(){
  var ProposalFactory;

  beforeEach(function() {
    module('app.ProposalFactory');
  });

  beforeEach(inject(function (_ProposalFactory_) {
      ProposalFactory = _ProposalFactory_;
  }));

  it('can get an instance of my factory', function() {
      expect(ProposalFactory).toBeDefined();
  });

});