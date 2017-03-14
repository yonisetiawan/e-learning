const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var usersSchema = new Schema({
  email: String,
  password: String,
  level: String,
},{
  timestamps: true
})

var User = mongoose.model('User', usersSchema)
module.exports = User
