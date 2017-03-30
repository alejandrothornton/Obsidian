//SCHEMA FOR CHARACTER ENTITY

//Packages needed for model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
  name: String,
  race: String,
  alignment: String,
  size: String,
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
  chamod: Number
});

module.exports = mongoose.model('Character', CharacterSchema);
