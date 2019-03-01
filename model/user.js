var Task = require('../schems/task'); 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolist', {useNewUrlParser: true } );
