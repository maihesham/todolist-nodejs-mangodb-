var Task = require('../schems/task'); 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolist', {useNewUrlParser: true } );

module.exports={
	"insert":function(task){
           var newtask=new Task({
                 owner:task.owner,
                 taskname: task.taskname,
                 start_date: task.start_date,
                 end_start: task.end_start,
                 description: task.description
           });  
             newtask.save(function (err) {
    					  if (err) {
    					  	console.log("Error");
    					  	
    					  }else{
                  return true;
                }
                 mongoose.disconnect();
					  
					});
                

  }
	
};