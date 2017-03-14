var express = require('express');
var router = express.Router();
const modelsUser = require('../models/users')
const passwordHash = require('password-hash')
const jwt = require('jsonwebtoken')

router.get('/getAll', function(req, res, next) {
  modelsUser.find({},function(err, result) {
      if(err)res.send(err)
      else res.send(result)
  })
});

router.post('/addData', function(req, res, next) {
  const addData = new modelsUser({
    email: req.body.name,
    password: passwordHash.generate(req.body.linkurl),
    level: req.body.level
  })
  addData.save(function(err, result) {
    if(err)res.send(err)
    else res.send(result)
  })
})

router.delete('/delete',function(req, res, next) {
  modelsUser.findByIdAndRemove(req.body.id, function(err, result) {
    res.send("Data Terhapus")
  })
})

router.post('/login', function(req, res, next) {
  modelsUser.find({
    where: req.body.email
  }).then(function(result) {
    if(result.length>0){
      if(passwordHash.verify(req.body.password, result[0].password)){
          var token = jwt.sign({
            id: result[0].id,
            email: result[0].email,
            expiresIn: '10h'
          }, "CODEuntukDECODE")
          res.send({
            token: token,
            status: true
          })
      }else{
        res.send(false)
      }
    }else{
      res.send(false)
    }
  })

})

rotuer.post('/decode', function(req, res, next) {
  jwt.verify(req.body.token, "CODEuntukDECODE", function(err, result) {
    if(err) res.send(err)
    else res.send(result)
  })
})



module.exports = router;
