angular.module('app.LocationDirective', [])

  .directive('header', function(){

    console.log('header started!');

    return {
      restrict: 'E',
      template: '<div>HEADER</div>',
    };
  })

  .directive('locationSuggestion', function($ionicModal, LocationFactory){

    console.log('locationSuggestion started!');

    // var link = function($scope, element){
    //   console.log('locationSuggestion started!');

    //   $scope.search = {};
    //   $scope.search.suggestions = [];
    //   $scope.search.query = "";

    //   $ionicModal.fromTemplateUrl('../templates/location.html', {
    //     scope: $scope,
    //     focusFirstInput: true
    //   }).then(function(modal) {
    //     $scope.modal = modal;
    //   });

    //   element[0].addEventListener('focus', function(event) {
    //     $scope.open();
    //   });

    //   $scope.$watch('search.query', function(newValue) {
    //     if (newValue) {
    //       LocationFactory.searchAddress(newValue).then(function(result) {
    //         $scope.search.error = null;
    //         $scope.search.suggestions = result;
    //       }, function(status){
    //         $scope.search.error = "There was an error :( " + status;
    //       });
    //     };
    //     $scope.open = function() {
    //       $scope.modal.show();
    //     };
    //     $scope.close = function() {
    //       $scope.modal.hide();
    //     };
    //     $scope.choosePlace = function(place) {
    //       LocationFactory.getDetails(place.place_id).then(function(location) {
    //         $scope.location = location;
    //         $scope.close();
    //       });
    //     };
    //   });
    // }

    /*
      RETURN
    */

      return {
        restrict: 'A',
        scope: {
          location: '='
        }
      }

  });