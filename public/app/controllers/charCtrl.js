angular.module('charCtrl', ['charService'])

  .controller('charController', function(Character) {

    var vm = this;

    Character.all()
      .then(function(data) {

        vm.characters = data;

        console.log(vm.characters);

      })
      .catch(function(data) {
        vm.error = data.message;
      });

    vm.createCharacter = function() {
      vm.message = '';

      Character.create(vm.charData)
        .success(function(data) {
          vm.charData = {};
          vm.message = data.message;
        });
    };

    //DELETING CHARACTER
    vm.deleteCharacter = function(id) {
      Character.delete(id)
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


  })

  .controller('sheetController', function($routeParams, Character) {

    var vm = this;

    Character.get($routeParams.char_id)
      .then(function(data) {
        vm.charData = data;
      })
      .catch(function(data) {
        vm.error = data.message;
      });

    //SAVING CHANGES TO CHARACTER
    vm.saveCharacter = function() {

      //Clear the message.
      vm.message = '';

      Character.update($routeParams.char_id, vm.charData)
        .success(function(data) {
          vm.charData = {};
          vm.message = data.message;
        });
    };

  })
