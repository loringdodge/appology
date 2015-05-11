angular.module('app.AuthFactory', [])

  .factory('AuthFactory', function($http){

    /*
      VARIABLES
    */

      var thing = {};

    /*
      HELPER FUNCTIONS
    */

      var something = function() {

      }

    /*
      HTTP FUNCTIONS
    */

      // Login user
      var login = function() {

      }

      // Logout user
      var logout = function() {

      }

      // Signup new user
      var signup = function() {

      }

    /*
      RETURN
    */
    return {
      login: login,
      logout: logout,
      signup: signup
    }

  });