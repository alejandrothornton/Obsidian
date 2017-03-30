//ATTRIBUTE SERVICE

angular.module('attrService', [])

.factory('Attribute', function($http) {

  //create a new object
  var attrFactory = {};

  //get a single attribute
  attrFactory.get = function(id) {
    return $http.get('/api/attributes/' + id);
  };

  //get all attributes
  attrFactory.all = function() {
    return $http.get('/api/attributes/');
  };

  //create a attribute
  attrFactory.create = function(attrData) {
    return $http.post('/api/attributes/', attrData);
  };

  //update a attribute
  attrFactory.update = function(id, attrData) {
    return $http.put('/api/attributes/' + id, attrData);
  };

  //delete a attribute
  attrFactory.delete = function(id) {
    return $http.delete('/api/attributes/' + id);
  };

  //return the attrFactory object
  return attrFactory;

});
