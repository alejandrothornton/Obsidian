angular.module('attrCtrl', ['attrService'])

  .controller('attrController', function($routeParams, Attribute, Character) {

    var vm = this;

    //vm.item = {};

      // Character.get($routeParams.char_id)
      //   .then(function(data) {
      //     if(data.actions != undefined) {
      //       vm.actions = data.actions;
      //       console.log(vm.actions);
      //     }
      //     if(data.traits != undefined)
      //       vm.traits = data.traits;
      //     if(data.spells != undefined)
      //       vm.spells = data.spells;
      //     if(data.clfeatures != undefined)
      //       vm.clfeatures = data.clfeatures;
      //     if(data.reactions != undefined)
      //       vm.reactions = data.reactions;
      //   })
      //   .catch(function(data) {
      //     vm.error = data.message;
      //   });

    vm.getAttribute = function(_id) {
      Attribute.get(_id)
      .then(function(data) {

        vm.item = data;
        console.log(vm.item);
      })
      .catch(function(data) {
        vm.error = data.message;
        console.log('oops?');
      });
    };

    vm.transfer = function(holder) {
      holder.push(vm.item);
      console.log(holder);
      return holder;
    };

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


  })

  //CONTROLLER FOR ACTIONS PAGE
  .controller('actController', function(Attribute) {
    var vm = this;

    vm.type = 'Action';

    Attribute.getlist(vm.type)
    .then(function(data) {

      console.log(data);
      vm.attributes = data;

    })
    .catch(function(data) {
      vm.error = data.message;
    });
  })

  //CONTROLLER FOR TRAITS PAGE
  .controller('traitController', function(Attribute) {
    var vm = this;

    vm.type = 'Trait';

    Attribute.getlist(vm.type)
    .then(function(data) {

      console.log(data);
      vm.attributes = data;

    })
    .catch(function(data) {
      vm.error = data.message;
    });
  })

  //CONTROLLER FOR CLASS FEATURES PAGE
  .controller('classController', function(Attribute) {
    var vm = this;

    vm.type = 'Class';

    Attribute.getlist(vm.type)
    .then(function(data) {

      console.log(data);
      vm.attributes = data;

    })
    .catch(function(data) {
      vm.error = data.message;
    });
  })

  //CONTROLLER FOR SPELLS PAGE
  .controller('spellController', function(Attribute) {
    var vm = this;

    vm.type = 'Spell';

    Attribute.getlist(vm.type)
    .then(function(data) {

      console.log(data);
      vm.attributes = data;

    })
    .catch(function(data) {
      vm.error = data.message;
    });
  })

  //CONTROLLER FOR REACTIONS PAGE
  .controller('reactController', function(Attribute) {
    var vm = this;

    vm.type = 'Reaction';

    Attribute.getlist(vm.type)
    .then(function(data) {

      console.log(data);
      vm.attributes = data;

    })
    .catch(function(data) {
      vm.error = data.message;
    });
  })

  //CONTROLLER FOR LEGENDARY ACTIONS PAGE
  .controller('legactController', function(Attribute) {
    var vm = this;

    vm.type = 'Legendary Action';

    Attribute.getlist(vm.type)
    .then(function(data) {

      console.log(data);
      vm.attributes = data;

    })
    .catch(function(data) {
      vm.error = data.message;
    });
  });
