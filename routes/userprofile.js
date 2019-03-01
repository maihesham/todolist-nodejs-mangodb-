var express = require('express');
var router = express.Router();
var Task = require('../schems/task');
/* GET home page. */
router.get('/', function(req, res, next) {

     var se=req.session;
     
     var namee=se.name;
    var tasks = [];
    Task.find({ owner: namee},function (err, docs) {
        var chunkSize = 3;
        if(docs.length===0){
                        res.render('userprofile', {title: 'TODOList', fl:"0",name:namee});

        }else{
             for (var i = 0; i < docs.length; i ++) {
                    tasks.push(docs.slice(i, i + chunkSize));
            }
              res.render('userprofile', {title: 'TODOList', fl:"1",task:tasks,name:namee});

        }
        
    });
   

    
});

module.exports = router;
