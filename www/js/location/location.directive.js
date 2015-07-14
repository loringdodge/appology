angular.module('app.LocationDirective', [])

  .directive('locationSuggestion', function($ionicModal, LocationFactory){

    var link = function($scope, element){

      $scope.search = {};
      $scope.search.suggestions = [];
      $scope.search.query = "";

      $ionicModal.fromTemplateUrl('js/location/location.view.html', {
        scope: $scope,
        focusFirstInput: true,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      $scope.open = function() {
        $scope.modal.show();
      };
      $scope.close = function() {
        $scope.modal.hide();
      };
      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
      // Execute action on hide modal
      $scope.$on('modal.hide', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function() {
        // Execute action
      });
      $scope.choosePlace = function(place) {
        LocationFactory.getDetails(place.place_id).then(function(location) {
          $scope.location = location;
          $scope.close();
        });
      };

      element[0].addEventListener('focus', function(event) {
        $scope.open();
      });

      $scope.$watch('search.query', function(newValue) {
        if (newValue) {
          LocationFactory.searchAddress(newValue).then(function(result) {
            $scope.search.error = null;
            $scope.search.suggestions = result;
          }, function(status){
            $scope.search.error = "There was an error :( " + status;
          });
        };
      });

    }

    /*
      RETURN
    */

      return {
        restrict: 'A',
        scope: {
          location: '='
        },
        link: link
      }

  });