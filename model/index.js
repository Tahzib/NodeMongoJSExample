const mongoose =require("mongoose") ;
//mongoose.connect("mongodb://localhost:27017/Edureka",{useNewUrlParser:true},(error)=>{
// useUnifiedTopology: true 
mongoose.connect("mongodb://localhost:27017/Edureka",{useUnifiedTopology: true },(error)=>{
	if(!error){
		console.log("Database Connection successfully");
	}
	else{
		console.log("Error while creating database");
	}
});
const Course = require("./course.model");