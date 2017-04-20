//SCHEMA FOR CHARACTER ENTITY

//Packages needed for model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var CharacterSchema = new Schema({
  name: String,
  race: String,
  alignment: String,
  size: String,
  description: String,
  str: Number,
  dex: Number,
  con: Number,
  int: Number,
  wis: Number,
  cha: Number,
  strmod: Number,
  dexmod: Number,
  conmod: Number,
  intmod: Number,
  wismod: Number,
  chamod: Number,
  lairact: String,
  laireff: String,
  lairdesc: String,
  immunities: String,
  senses: String,
  languages: String,
  challenge: String,
  size: String,
  proficiency: Number,
  traits: {type: Array, "default" : []},
  actions: {type: Array, "default" : []},
  clfeatures: {type: Array, "default" : []},
  spells: {type: Array, "default" : []},
  reactions: {type: Array, "default" : []}
});

module.exports = mongoose.model('Character', CharacterSchema);
