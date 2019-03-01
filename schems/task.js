var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var taskSchema = new Schema({
	owner:{type: String, required: true},
    taskname:{type: String, required: true},
    start_date:{type: String, required: true},
    end_start:{type: String, required: true},
    description:{type: String, required: true}

});
module.exports = mongoose.model('task', taskSchema);
