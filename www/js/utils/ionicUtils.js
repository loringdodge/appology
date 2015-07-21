angular.module('ionic.utils', [])

.factory('$localStorage', ['$window', function($window) {

  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    },
    isSet: function(key) {
      return typeof $window.localStorage[key] !== "undefined";
    },
    size: function() {
      return this.keys().length;
    },
    keys: function() {
      return Object.keys($window.localStorage);
    },
    clear: function(key) {
      delete $window.localStorage[key];
    },
    clearAll: function() {
      $window.localStorage.clear();
    }
  }

}]);