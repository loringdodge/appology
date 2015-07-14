 angular.module('app.LoginController', [])

  .controller('LoginController', function($scope, $ionicModal, $timeout, AuthFactory){

    // Form data for the login modal
    // $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('js/auth/login.view.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.submitLogin = function(login) {
      if(login.$valid) {
        var data = {
          username: login.username,
          password: login.password
        }
        AuthFactory.login(data)
          .then(function(res) {
            console.log("submitLogin: success", res);
            $scope.closeLogin();
          })
          .catch(function(err) {
            console.log(err);
            $scope.closeLogin();
          });
      } else {
        console.log("not valid");
      }
      // $timeout(function() {
      //   $scope.closeLogin();
      // }, 1000);
    };

  });