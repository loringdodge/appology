angular.module('app.RequestFactory', [])

  .factory('RequestFactory', function($http){

    /*
      HTTP FUNCTIONS
    */

      // Get bell data
      var getBellData = function() {
        return $http.get('http://localhost:8888/api/bell')
          .then(function(res){
            return res.data;
          })
          .catch(function(err){
            console.log(err);
          });
      }

      // Post a new request
      var postRequest = function(data) {
        return $http.post('http://localhost:8888/api/request', data)
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