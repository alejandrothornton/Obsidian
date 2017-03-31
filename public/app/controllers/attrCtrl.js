angular.module('attrCtrl', ['attrService'])

  .controller('attrController', function($routeParams, Attribute) {

    var vm = this;

    Attribute.all()
      .then(function(data) {

        vm.attributes = data;
        console.log(vm.attributes);

      })
      .catch(function(data) {
        vm.error = data.message;
      });

    vm.createAttribute = function() {
      vm.message = '';

      Attribute.create(vm.attrData)
        .success(function(data) {
          vm.attrData = {};
          vm.message = data.message;
        });
    };

    //DELETING ATTRIBUTE
    vm.deleteAttribute = function(id) {
      Attribute.delete(id)
        .success(function(data) {
          //After deleting a attribute, return the list of attributes to update
          Attribute.all()
          .then(function(data) {
            vm.attributes = data;
          })
          .catch(function(data) {
            vm.error = data.message;
          });
        });
    };

    //SAVING CHANGES TO ATTRIBUTE
    vm.saveAttribute = function() {

      //Clear the message.
      vm.message = '';

      Attribute.update($routeParams.attr_id, vm.attrData)
        .success(function(data) {
          vm.attrData = {};
          vm.message = data.message;
        });
    };


  });

  // .controller('actController', function(Attribute) {
  //   var vm = this;
  //
  //   vm.type = 'action';
  //
  //   Attribute.getlist()
  //   .then(function(data) {
  //
  //     vm.attributes = data;
  //
  //   })
  //   .catch(function(data) {
  //     vm.error = data.message;
  //   });
  // });
