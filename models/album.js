var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Song = require('./song.js');

var albumSchema = new Schema({
	artistName : String,
	name : String,
	releaseDate : String,
	genres : [String],
	songs : [ Song ]
});

var Album = mongoose.model("Album", albumSchema);

module.exports = Album;