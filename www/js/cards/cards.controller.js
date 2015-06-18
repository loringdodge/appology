angular.module('app.CardsController', [])

  .controller('CardsController', function($scope, TDCardDelegate, $timeout) {

    $scope.$on('getCards', function(event, data) {
      $scope.cards = Array.prototype.slice.call(data, 0);
      $scope.cardsMaster = Array.prototype.slice.call(data, 0);
      $scope.cardsLength = $scope.cardsMaster.length;
    });

    $scope.cardDestroyed = function(index) {
      $scope.cards.splice(index, 1);
    };

    $scope.$on('removeCard', function(event, element, card) {
      $scope.cardsMaster.splice($scope.cardsMaster.indexOf(card), 1);
    });

    // $scope.addCard = function() {
    //   var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    //   newCard.id = Math.random();
    //   $scope.cards.push(angular.extend({}, newCard));
    // }

    $scope.refreshCards = function() {
      $scope.cards = null;
      $timeout(function() {
        $scope.cards = Array.prototype.slice.call($scope.cardsMaster, 0);
      });
    }

  })