angular.module('app.LocationFactory', [])

  .factory('LocationFactory', function($http, $q){

    /*
      HTTP FUNCTIONS
    */

      console.log("LocationFactory started");

      var autocompleteService = new google.maps.places.AutocompleteService();
      var detailsService = new google.maps.places.PlacesService(document.createElement("input"));

      var searchAddress = function(input) {
        var deferred = $q.defer();

        autocompleteService.getPlacePredictions({
          input: input
        }, function(result, status) {
          if(status == google.maps.places.PlacesServiceStatus.OK){
            console.log(status);
            deferred.resolve(result);
          }else{
            deferred.reject(status)
          }
        });

        return deferred.promise;
      }

      var getDetails = function(placeId) {
        var deferred = $q.defer();
        detailsService.getDetails({placeId: placeId}, function(result) {
          deferred.resolve(result);
        });
        return deferred.promise;
      }

    /*
      RETURN
    */

      return {
        searchAddress: searchAddress,
        getDetails: getDetails
      };

  });