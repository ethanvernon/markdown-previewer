const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this will be our data structure 
var fileSchema = new Schema({    
	name: {
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