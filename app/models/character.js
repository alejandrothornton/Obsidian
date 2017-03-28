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

//CONSTANTS FOR CHARACTER VALUES
CharacterSchema.DEFAULT_SCORE = 10;
CharacterSchema.DEFAULT_MOD = 0;
CharacterSchema.DEFAULT_NAME = "[Name]";
CharacterSchema.DEFAULT_SIZE = "[Size]";
CharacterSchema.DEFAULT_RACE = "[Race]";
CharacterSchema.DEFAULT_ALIGNMENT = "[Alignment]";
