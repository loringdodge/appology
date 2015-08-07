 angular.module('app.SplashController', [])

  .controller('SplashController', function($scope, $state){

    $scope.startApp = function() {
      // Navigate to the 'tab.home' state (aka '/tab/home' route)
      $state.go('tab.home');
      // Store that splash was completed
      window.localStorage['didTutorial'] = true;
    };

    window.localStorage['didTutorial'] = false;

    // Check if the user already did the tutorial and skip it if so
    if(window.localStorage['didTutorial'] === 'true') {
      $scope.startApp();
    } else {
      setTimeout(function () {
        navigator.splashscreen.hide();
      }, 750);
    }

  });