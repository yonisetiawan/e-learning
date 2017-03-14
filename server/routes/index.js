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

router.post('/addData', function(req, res, next) {
  const addData = new modelseLearning({
    name: req.body.name,
    linkurl: req.body.linkurl
  })
  addData.save(function(err, result) {
    if(err)res.send(err)
    else res.send(result)
  })
})

router.delete('/delete',function(req, res, next) {
  modelseLearning.findByIdAndRemove(req.body.id, function(err, result) {
    res.send("Data Terhapus")
  })
})



module.exports = router;
