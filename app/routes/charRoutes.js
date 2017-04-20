var Character = require('mongoose').model('Character');
var Attribute = require('mongoose').model('Attribute');

exports.create = function(req, res) {

  //INITIALIZING CHARACTER
  var char = new Character();
  char.name = "Name";
  char.race = "Race";
  char.alignment = "Alignment";
  char.size = "Size";
  char.str = 10;
  char.dex = 10;
  char.con = 10;
  char.int = 10;
  char.wis = 10;
  char.cha = 10;
  char.strmod = 0;
  char.dexmod = 0;
  char.conmod = 0;
  char.intmod = 0;
  char.wismod = 0;
  char.chamod = 0;
  char.lairact = "";
  char.laireff = "";
  char.lairdesc = "";
  char.proficiency = 0;
  char.immunities = "";
  char.senses = "";
  char.languages = "";
  char.challenge = "";

  char.save(function(err) {
    if(err) res.send(err);

    //return a message
    res.json({ _id: char._id, message: 'Character created!'});
  });
};

exports.list = function(req, res) {
  Character.find(function (err, chars) {
    if(err) res.send(err);

    res.json(chars);
  });
};

exports.retrieve = function(req, res) {
  Character.findById(req.params.char_id, function(err, char) {
    if(err) res.send(err);

    //return that character
    res.json(char);
  });
};

exports.modify = function(req, res) {
  Character.findById(req.params.char_id, function(err, char) {

    if(err) res.send(err);

    console.log(req.body);
    console.log(err);

    // set the new character information if it exists in the request
    if (req.body.name) char.name = req.body.name;
    if (req.body.race) char.race = req.body.race;
    if (req.body.alignment) char.alignment = req.body.alignment;
    if (req.body.size) char.size = req.body.size;
    if (req.body.str) char.str = req.body.str;
    if (req.body.dex) char.dex = req.body.dex;
    if (req.body.con) char.con = req.body.con;
    if (req.body.int) char.int = req.body.int;
    if (req.body.wis) char.wis = req.body.wis;
    if (req.body.cha) char.cha = req.body.cha;
    if (req.body.strmod) char.strmod = req.body.strmod;
    if (req.body.dexmod) char.dexmod = req.body.dexmod;
    if (req.body.conmod) char.conmod = req.body.conmod;
    if (req.body.intmod) char.intmod = req.body.intmod;
    if (req.body.wismod) char.wismod = req.body.wismod;
    if (req.body.chamod) char.chamod = req.body.chamod;
    if (req.body.lairact) char.lairact = req.body.lairact;
    if (req.body.laireff) char.laireff = req.body.laireff;
    if (req.body.proficiency) char.proficiency = req.body.proficiency;
    if (req.body.immunities) char.immunities = req.body.immunities;
    if (req.body.senses) char.senses = req.body.senses;
    if (req.body.languages) char.languages = req.body.languages;
    if (req.body.challenge) char.challenge = req.body.challenge;
    if (req.body.lairdesc) char.lairdesc = req.body.lairdesc;
    if (req.body.traits) char.traits = req.body.traits;
    if (req.body.actions) char.actions = req.body.actions;
    if (req.body.clfeatures) char.clfeatures = req.body.clfeatures;
    if (req.body.spells) char.spells = req.body.spells;
    if (req.body.reactions) char.reactions = req.body.reactions;

    // save the character
    char.save(function(err) {
      if (err) res.send(err);

      console.log(err);

      // return a message
      res.json({ message: 'Character updated!' });
    });
  });
};

exports.expunge = function(req, res) {
  Character.remove({
    _id: req.params.char_id
  }, function(err, char) {
    if(err) res.send(err);

    res.json({ message: 'Successfully deleted' });
  });
};
