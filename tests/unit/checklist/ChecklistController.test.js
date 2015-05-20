describe('ChecklistController', function () {
  var ctrl, scope, ChecklistFactory;

  beforeEach(function () {
    module('ionic');
    module('ionic.utils');
    module('app.ChecklistController');
    module('app.ChecklistFactory');
    module('ionic.contrib.ui.cards');
  });

  beforeEach(function () {
    module('app', function($provide){

      /*
        ChecklistFactory
      */

        // Checklist Array
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

        // Create mockChecklist Factory
        mockChecklistFactory = {
          getChecklist: function() {
            return checklist;
          },
          moveItem: function(item, fromIndex, toIndex) {
            checklist.splice(fromIndex, 1);
            checklist.splice(toIndex, 0, item);
          },
          onItemDelete: function(item) {
            checklist.splice(checklist.indexOf(item), 1);
          },
          addItem: function(item) {
            checklist.push(item);
          }
        }

        // Register the mockChecklistFactory with the $injector
        $provide.value("ChecklistFactory", mockChecklistFactory);

      /*
        $ionicModal
      */

        // Create mockIonicModal
        mockIonicModal = {
          show: function() {},
          hide: function() {},
          remove: function() {},
        }

        // Register the mockIonicModal with the $injector
        $provide.value("mockIonicModal", mockIonicModal);

      /*
        $ionicListDelegate
      */

        // Create mockIonicModal
        mockIonicListDelegate = {
          showDelete: function() {},
          showReorder: function() {}
        }

        // Register the mockIonicModal with the $injector
        $provide.value("mockIonicListDelegate", mockIonicListDelegate);


    });

  });

  beforeEach(inject(function ($rootScope, $controller, $ionicModal, mockIonicModal, $ionicListDelegate, _ChecklistFactory_) {
    scope = $rootScope.$new();
    scope.modal = mockIonicModal;
    ionicModal = $ionicModal;
    ionicListDelegate = $ionicListDelegate;
    ChecklistFactory = _ChecklistFactory_;
    controller = $controller('ChecklistController', {
      '$scope': scope
    });

    // Spy on methods within ChecklistFactory
    spyOn(ChecklistFactory, 'getChecklist')
    spyOn(ChecklistFactory, 'moveItem');
    spyOn(ChecklistFactory, 'onItemDelete');
    spyOn(ChecklistFactory, 'addItem');

    // Spy on methods within $ionicModal
    spyOn(scope.modal, 'show');
    spyOn(scope.modal, 'hide');
    spyOn(scope.modal, 'remove');

    // Spy on methods within $ionicListDelegate
    spyOn(ionicListDelegate, 'showDelete');
    spyOn(ionicListDelegate, 'showReorder');

  }));

  it('should have ChecklistFactory as a dependency', function () {
    expect(ChecklistFactory).toBeDefined();
  });

  it('should initially set $scope.checklist to the stored checklist: $scope.checklist', function () {
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
    expect(scope.checklist).toEqual(checklist);
  });

  it('should move an item of the checklist to a different index: $scope.moveItem()', function () {
    var checklist = [{
        name: 'Get agent'
      },{
        name: 'List house'
      },{
        name: 'Get another agent'
      },{
        name: 'Make flyers'
      },{
        name: 'Sell house'
    }];

    var item = {
      name: 'List house'
    };

    scope.moveItem(item, 2, 1);

    expect(scope.checklist).toEqual(checklist);
  });

  it('should move an item of the checklist to a different index: $scope.moveItem()', function () {
    var checklist = [{
        name: 'Get agent'
      },{
        name: 'List house'
      },{
        name: 'Get another agent'
      },{
        name: 'Make flyers'
      },{
        name: 'Sell house'
    }];

    var item = {
      name: 'List house'
    };

    scope.moveItem(item, 2, 1);

    expect(scope.checklist).toEqual(checklist);
  });

  it('should move an item of the checklist to a different index: $scope.moveItem()', function () {
    var checklist = [{
        name: 'Get agent'
      },{
        name: 'List house'
      },{
        name: 'Get another agent'
      },{
        name: 'Make flyers'
      },{
        name: 'Sell house'
    }];

    var item = {
      name: 'List house'
    };

    scope.moveItem(item, 2, 1);

    expect(scope.checklist).toEqual(checklist);
  });

  it('should delete an item from the checklist: $scope.onItemDelete()', function () {
    var checklist = [{
        name: 'Get agent'
      },{
        name: 'Get another agent'
      },{
        name: 'Make flyers'
      },{
        name: 'Sell house'
    }];

    var item = {
      name: 'List house'
    };

    scope.onItemDelete(item);

    // expect(scope.checklist).toEqual(checklist);

  });

  it('should add item to checklist, trigger ChecklistFactory, and hide modal: $scope.addItem()', function () {
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
        name: 'Eat dinner'
    }];

    var item = {
      name: 'Eat dinner'
    };

    scope.addItem(item);

    expect(ChecklistFactory.addItem).toHaveBeenCalled();
    expect(scope.modal.hide).toHaveBeenCalled();
  });

  it('should open modal: $scope.openModal()', function () {

    scope.openModal();

    expect(scope.modal.show).toHaveBeenCalled();
  });

  it('should hide the delete and reorders buttons when opening modal: $scope.openModal()', function () {

    spyOn(scope, 'showReorderButtons');
    spyOn(scope, 'showDeleteButtons');

    var reorderButtonBool = true;
    var deleteButtonBool = true;

    scope.openModal(reorderButtonBool, deleteButtonBool);

    expect(scope.showReorderButtons).toHaveBeenCalled();
    expect(scope.showDeleteButtons).toHaveBeenCalled();
  });

  it('should close modal: $scope.closeModal()', function () {

    scope.closeModal();

    expect(scope.modal.hide).toHaveBeenCalled();
  });

  it('should close modal: $scope.closeModal()', function () {

    scope.closeModal();

    expect(scope.modal.hide).toHaveBeenCalled();
  });

  it('should remove the modal after $destroy event: $scope.$on("$destroy", function ...', function () {

    scope.$destroy();

    expect(scope.modal.remove).toHaveBeenCalled();
  });

});