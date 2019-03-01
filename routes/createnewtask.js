var express = require('express');
var router = express.Router();
var task=require("../model/task");
router.get('/', function(req, res, next) {
  var se=req.session;
  var name=se.name
  res.render('createnewtask', { title: 'new Task' ,username:name });
});
router.post('/',function(req, res, next) {
   var se=req.session;
  var name=se.name
  console.log("lol             "+name);
	var newtask={
		owner:name,
		taskname:req.body.taskname,
    start_date:req.body.startdate,
    end_start:req.body.enddate,
    description:req.body.description
	};
    task.insert(newtask);
    res.redirect("/userprofile");
});

module.exports = router;