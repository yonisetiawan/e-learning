const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var eLearningSchema = new Schema({
  name: String,
  linkurl: String,
},{
  timestamps: true
})

var eLearning = mongoose.model('eLearning', eLearningSchema)
module.exports = eLearning
