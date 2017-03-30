//SCHEMA FOR ATTRIBUTE ENTITY

//Packages needed for model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AttributeSchema = new Schema({
  name: String,
  type: String,
  description: String
});

module.exports = mongoose.model('Attribute', AttributeSchema);
