angular.module('app.LocationController', [])

  .controller('LocationController', function($scope, $ionicModal, $timeout){
    console.log("LocationController started");

    $scope.location = {};
  });