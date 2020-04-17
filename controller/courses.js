const express 			 =    			require("express") ;
const mongoose 			 = 				require("mongoose");

const router 			 = 				express.Router();
const CourseModel = mongoose.model("Course")

router.get("/add",(req,res)=>{
			res.render("add-course")
});

router.post("/add",(req,res)=>{
	console.log(req.body);
	var course = new CourseModel();
	course.courseName = req.body.courseName;
	course.courseId = req.body.courseDuration;
	course.courseFee  = req.body.courseFee;
	course.courseId  = Math.ceil(Math.random() * 10000000) + "";
	course.save((err,doc)=>{
		if(!err){
				res.redirect("/course/list")
		}
		else{
			res.render("Error")
		}
	})
});

router.get("/list",(req,res)=>{
	CourseModel.find((err,docs)=>{
		if(!err){
		//		res.send("Course Controller")
		res.render("list",{data:docs})
		}
		else{
				res.send("Error in Course Controller")
		}
	});
});

module.exports = router;