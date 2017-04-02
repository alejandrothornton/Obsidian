angular.module('charCtrl', ['charService'])

  .controller('charController', function($scope, Character) {

    var vm = this;
    vm.created = false;

    Character.all()
      .then(function(data) {

        vm.characters = data;
        vm.created = false;

        console.log(vm.characters);

      })
      .catch(function(data) {
        vm.error = data.message;
      });

    vm.createCharacter = function() {
      vm.message = '';

      Character.create(vm.charData)
        .then(function(data) {
          vm.charData = {};
          vm.created = true;
          vm.newID = data.data._id;
          vm.message = data.message;
          console.log(vm.newID);
        })
        .catch(function(data) {
          vm.error = data.message;
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

    vm.saved = false;

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
        .then(function(data) {
          //vm.charData = {};
          vm.message = data.message;
          vm.saved = true;
        })
        .catch(function(data) {
          vm.error = data.message;
        });
    };

  })
