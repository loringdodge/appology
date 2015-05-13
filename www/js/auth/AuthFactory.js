angular.module('app.AuthFactory', [])

  .factory('AuthFactory', function($http){

    /*
      HTTP FUNCTIONS
    */

      // Login user
      var login = function(user) {
        return $http.post('/login', data)
          .then(function(res){
            return res.data;
          }).
          catch(function(err){
            console.log(err);
          });
      }

      // Logout user
      var logout = function() {

      }

      // Signup new user
      var signup = function() {
        return $http.post('/signup', data)
          .then(function(res){
            return res.data;
          }).
          catch(function(err){
            console.log(err);
          });
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