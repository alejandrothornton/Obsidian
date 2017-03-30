angular.module('charCtrl', ['charService'])

  .controller('charController', function(Character) {

    var vm = this;

    Character.all()
      .then(function(data) {

        vm.characters = data;

        //asd
        console.log(vm.characters);
      })
      .catch(function(data) {
        vm.error = data.message;
      });

    vm.saveCharacter = function() {
      vm.message = '';

      Character.create(vm.charData)
        .success(function(data) {
          vm.charData = {};
          vm.message = data.message;
        });
    };

    vm.deleteCharacter = function(id) {
      User.delete(id)
        .success(function(data) {
          //After deleting a character, return the list of characters to update
          Character.all()
          .then(function(data) {
            vm.characters = data;
          })
          .catch(function(data) {
            vm.error = data.message;
          });
        });
    };
  });
