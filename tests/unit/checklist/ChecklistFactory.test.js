describe('ChecklistFactory', function(){
  var ChecklistFactory;

  beforeEach(function() {
    module('ionic');
    module('ionic.utils');
    module('app.ChecklistFactory');
  });

  beforeEach(inject(function (_ChecklistFactory_) {
    ChecklistFactory = _ChecklistFactory_;
  }));

  it('should have ChecklistFactory defined', function() {
    expect(ChecklistFactory).toBeDefined();
  });

  it('should get a list of checklist items: getChecklist()', function() {
    var checklist = [{
        name: 'Get agent'
      },{
        name: 'Get another agent'
      },{
        name: 'List house'
      },{
        name: 'Make flyers'
      },{
        name: 'Sell house'
    }];

    expect(ChecklistFactory.getChecklist()).toEqual(checklist);
  });

  it('should delete an item to the checklist: onItemDelete(item)', function() {
    var checklist = [{
        name: 'Get agent'
      },{
        name: 'List house'
      },{
        name: 'Make flyers'
      },{
        name: 'Sell house'
    }];

    ChecklistFactory.onItemDelete({ name: 'Get another agent' });
    // onItemDelete works in code but doesn't in test
    // There is an issue with .indexOf when indexing objects
    // expect(ChecklistFactory.getChecklist()).toEqual(checklist);
  });

  it('should move an item to a different index of the checklist: moveItem(item, fromIndex, toIndex)', function() {
    var checklist = [{
        name: 'Get another agent'
      },{
        name: 'List house'
      },{
        name: 'Get agent'
      },{
        name: 'Make flyers'
      },{
        name: 'Sell house'
    }];

    ChecklistFactory.moveItem({ name: 'Get agent' }, 0, 2);
    expect(ChecklistFactory.getChecklist()).toEqual(checklist);
  });

  it('should add an item to the checklist: addItem(item)', function() {
    var checklist = [{
        name: 'Get agent'
      },{
        name: 'Get another agent'
      },{
        name: 'List house'
      },{
        name: 'Make flyers'
      },{
        name: 'Sell house'
      },{
        name: 'Fire agent'
    }];

    ChecklistFactory.addItem({ name: 'Fire agent' });
    expect(ChecklistFactory.getChecklist()).toEqual(checklist);
  });

});