 angular.module('app.RequestController', [])

  .controller('RequestController', function($scope, $ionicModal, RequestFactory){

    /*
      SCOPE VARIABLES
    */

      // IonicModal - Attach template and add to scope on deferred
      $ionicModal.fromTemplateUrl('templates/request-modal-info.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      // Function - Open Modal
      $scope.openModal = function() {
        $scope.modal.show();
      };

      // Function - Close Modal
      $scope.closeModal = function() {
        $scope.modal.hide();
      };

      // Listen - Remove modal box on $destroy event on scope
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });

      // Listen - Action on modal hidden
      $scope.$on('modal.hidden', function() {

      });

      // Listen - Action on modal remove
      $scope.$on('modal.removed', function() {

      });

      $scope.submitRequest = function(request){
        if (request.$valid) {
          var data = {
            address: request.address,
            name: request.name,
            email: request.email,
            phone: request.phone
          }
          RequestFactory.postRequest(data)
            .then(function(res) {
              console.log("submitRequest: success", res);
            })
            .catch(function(err) {
              console.log(err);
            });
        } else {
          console.log("not valid");
        }
      }


  });