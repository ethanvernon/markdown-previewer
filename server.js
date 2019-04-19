require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");
const Files = require("./data");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = express.Router();
const app = express();
const API_PORT = process.env.PORT || 3001;
const path = require("path");
const dbRoute = process.env.MONGO_URI;


//other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

// connects our back end code with the database
mongoose.connect(
	dbRoute,
	{useNewUrlParser: true}
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//post request from form in for new user Home.js
// app.post("/api/new-metadata", function(req,res) {

// 	var metadataToAdd = new Files({
// 		name: req.body.name,
// 		type: req.body.type,
// 		size: req.body.size
// 	});

// 	metadataToAdd.save((err, response) => {
// 		if (err) {
// 			console.log("error to databse: " + err);
// 			return res.json({success: false, error: err});
// 		}
// 		console.log("success, response is: " + response);
// 		let condensedResponse = {
// 			"name": response.name,
// 			"type": response.type,
// 			"size": response.size
// 		};
// 		return res.json(condensedResponse);
// 	});
// });

//git request

// launch our backend into a port
app.listen(API_PORT, () => console.log("LISTENING ON PORT ${API_PORT}"));