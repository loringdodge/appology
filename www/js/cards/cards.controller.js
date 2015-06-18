angular.module('app.CardsController', [])

  .controller('CardsController', function($scope, TDCardDelegate, $timeout) {

    /*
      SCOPE
    */

      $scope.cardDestroyed = function(index) {
        $scope.cards.splice(index, 1);
      };

      $scope.refreshCards = function() {
        // Set $scope.cards to null so that directive reloads
        $scope.cards = null;
        $timeout(function() {
          $scope.cards = Array.prototype.slice.call($scope.cardsMaster, 0);
        });
      }

    /*
      LISTENERS
    */

      $scope.$on('getCards', function(event, data) {
        $scope.cards = Array.prototype.slice.call(data, 0);
        $scope.cardsMaster = Array.prototype.slice.call(data, 0);
      });

      $scope.$on('removeCard', function(event, element, card) {
        $scope.cardsMaster.splice($scope.cardsMaster.indexOf(card), 1);
      });

  })