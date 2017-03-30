//CHARACTER SERVICE

angular.module('charService', [])

.factory('Character', function($http) {

  //create a new object
  var charFactory = {};

  //get a single character
  charFactory.get = function(id) {
    return $http.get('/api/characters/' + id);
  };

  //get all characters
  charFactory.all = function() {
    return $http.get('/api/characters/');
  };

  //create a character
  charFactory.create = function(charData) {
    return $http.post('/api/characters/', charData);
  };

  //update a character
  charFactory.update = function(id, charData) {
    return $http.put('/api/characters/' + id, charData);
  };

  //delete a character
  charFactory.delete = function(id) {
    return $http.delete('/api/characters/' + id);
  };

  //return the charFactory object
  return charFactory;

});
