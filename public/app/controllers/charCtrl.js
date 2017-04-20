angular.module('charCtrl', ['charService', 'attrService'])

  .controller('charController', function($scope, Character) {

    var vm = this;
    vm.created = false;
    vm.fade = true;

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

  .controller('sheetController', function($routeParams, Character, Attribute) {

    var vm = this;

    vm.saved = false;

    vm.actions = [];

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
      vm.message = "";

      Character.update($routeParams.char_id, vm.charData.data)
        .then(function(data) {

          console.log(vm.charData);
          vm.message = data.data.message;
          vm.saved = true;
        })
        .catch(function(data) {
          vm.error = data.data.message;
        });
    };

    vm.addAttribute = function(_id, type) {

      Character.get($routeParams.char_id)
        .then(function(data) {
          vm.charData = data;
        })
        .catch(function(data) {
          vm.error = data.message;
        });

      vm.message = '';

      if(type == "Action") {
        if(vm.charData.data.actions == undefined)
        {
          vm.charData.data.actions = [_id];
        }
        else {
          vm.charData.data.actions.push(_id);
        }
      }
      else if(type == "Trait") {
        if(vm.charData.data.traits == undefined)
        {
          vm.charData.data.traits = [_id];
        }
        else {
          vm.charData.data.traits.push(_id);
        }
      } else if(type == "Spell") {
        if(vm.charData.data.spells == undefined)
        {
          vm.charData.data.spells = [_id];
        }
        else {
          vm.charData.data.spells.push(_id);
        }
      } else if(type == "Class") {
        if(vm.charData.data.clfeatures == undefined)
        {
          vm.charData.data.clfeatures = [_id];
        }
        else {
          vm.charData.data.clfeatures.push(_id);
        }
      } else if(type == "Reactions") {
        if(vm.charData.data.reactions == undefined)
        {
          vm.charData.data.reactions = [_id];
        }
        else {
          vm.charData.data.reactions.push(_id);
        }
      }

      Character.update($routeParams.char_id, vm.charData.data)
      .then(function(data) {
        vm.message = data;
      })
      .catch(function(data) {
        vm.error = data.message;
      });
    };

    vm.removeAttribute = function(index, type) {

      Character.get($routeParams.char_id)
        .then(function(data) {
          vm.charData = data;
        })
        .catch(function(data) {
          vm.error = data.message;
        });

      vm.message = "";

      if(type == "Action") {

        console.log(index);

        if(index>=0) {
          vm.charData.data.actions.splice(index, 1);
        }
        else {
          vm.message = "Error, action not found."
        }

        console.log(vm.charData.data.actions);
      }
      else if(type == "Trait") {
        var index = vm.charData.data.traits.indexOf(_id);

        if(index>=0)
          vm.charData.data.traits.splice(index, 1);
        else {
          vm.message = "Error, action not found."
        }
      }
      else if(type == "Spell") {
        var index = vm.charData.data.spells.indexOf(_id);

        if(index>=0)
          vm.charData.data.spells.splice(index, 1);
        else {
          vm.message = "Error, action not found."
        }
      }
      else if(type == "Class") {
        var index = vm.charData.data.clfeatures.indexOf(_id);

        if(index>=0)
          vm.charData.data.clfeatures.splice(index, 1);
        else {
          vm.message = "Error, action not found."
        }
      }
      else if(type == "Reactions") {
        var index = vm.charData.data.reactions.indexOf(_id);

        if(index>=0)
          vm.charData.data.reactions.splice(index, 1);
        else {
          vm.message = "Error, action not found."
        }
      }

      console.log(vm.charData);

      Character.update($routeParams.char_id, vm.charData.data)
      .then(function(data) {
        vm.message = data;
      })
      .catch(function(data) {
        vm.error = data.message;
      });
    };

    vm.gatherAttributes = function() {
      Character.get($routeParams.char_id)
        .then(function(data) {
          vm.charData = data;
        })
        .catch(function(data) {
          vm.error = data.message;
        });

        console.log(vm);
        console.log(vm.charData);

          for(i=0; i < vm.charData.data.actions.length; i++)
          {
            console.log(vm.charData.data.actions[i]);

            Attribute.get(vm.charData.data.actions[i])
            .then(function(data) {
              vm.actions.push(data);
            })
            .catch(function(data) {
              vm.error = data.message;
            });
          }

          console.log(vm.actions);
    };

    vm.logAttr = function(data) {
      console.log(data);
    };

  });
