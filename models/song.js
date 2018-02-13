var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var songSchema = new Schema({
	name : String,
	trackNumber : Number

});

module.exports = songSchema;