/* modifying the added comment */
const coneection 		 = 				require("./model") ;
const express 			 =    			require("express") ;
const application		 =    			express() ;
const path				 =      		require("path");
const expressHandlebars  = 				require("express-handlebars");
const bodyParser 		 = 				require("body-parser");

const CourseController   = require("./controller/courses")
application.use(bodyParser.urlencoded({
	extended :true
}));

application.set('views',path.join(__dirname,"/views/"));

application.engine("hbs",expressHandlebars({
	extname : "hbs",
	defaultLayout : "mainlayout",
	layoutDir : __dirname + "/views/layouts"
}));

application.set("view engine", "hbs");

application.get("/",(req,res)=>{
	//res.send('<h1> Hello world<h1>')
	res.render("index",{})
})

application.use("/course",CourseController)

application.listen("3000",()=>{
	console.log("Server started");
});

/* End of file  */