var express = require('express');
var router = express.Router();
const modelseLearning = require('../models')


/* GET home page. */
router.get('/getAll', function(req, res, next) {
  modelseLearning.find({},function(err, result) {
      if(err)res.send(err)
      else res.send(result)
  })
});



module.exports = router;
