const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this is data structure for saving markdown to database
var fileSchema = new Schema({    
	passkey: {
		type:String,
		required: true
	},
	markdown: {
		type:String,
		required:true
	}
});

//export the Schema
module.exports = mongoose.model("Files", fileSchema);