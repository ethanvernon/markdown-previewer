const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this is data structure for saving markdown to database
var fileSchema = new Schema({    
	passkey: {
		type:String,
		required: true
	},
	user: {
		type:String,
		required: true
	},
	code: {
		type:String,
		required:true
	}
});

//export the Schema
module.exports = mongoose.model("Files", fileSchema);