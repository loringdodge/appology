angular.module('app.RequestFactory', [])

  .factory('RequestFactory', function($http){

    /*
      VARIABLES
    */

      var thing = {};

    /*
      HTTP FUNCTIONS
    */

      var getBellData = function() {
        return $http.get('/bell').
          .then(function(res){
            return res.data;
          })
          .catch(function(err){
            console.log(err);
          });
      }

      // Post a new request
      var postRequest = function(data) {
        return $http.get('/request', data)
          .then(function(res){
            return res.data;
          })
          .catch(function(err){
            console.log(err);
          });
      }

    /*
      RETURN
    */
    return {
      getBellData: getBellData,
      postRequest: postRequest
    }


  });