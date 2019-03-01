var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost:27017/todolist', {useNewUrlParser: true } );
var userSchema = new Schema({
    name: {type: String,unique: true, required: true},
    password: {type: String, required: true}
});
userSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);  
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);  
};
module.exports = mongoose.model('user', userSchema);
