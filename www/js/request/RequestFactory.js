angular.module('app.RequestFactory', [])

  .factory('RequestFactory', function($http){

    /*
      HTTP FUNCTIONS
    */

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
        console.log("postRequest: before", data);
        return $http.post('http://localhost:8888/api/request', data)
          .then(function(res){
            console.log("postRequest: success", res.data);
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