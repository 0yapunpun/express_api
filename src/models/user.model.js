var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

const userSchema = new Schema({
  name:  String, 
  age: Number,
  gender: String,
  password: String
},{
  timestamps: true
});

userSchema.methods.encrypPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', userSchema);
  