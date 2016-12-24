var express = require('express');
var router = express.Router();
var CityModel = require('../models/time');

router.get('/Gettime', function(req, res) {
  timeModel.find({},function(err, docs){
    res.json(docs);
  });
});

router.post('/Addtime', function(req, res){
  var time = new timeModel({
      timeName: req.body.timeName
  });
  time.save(function(err, docs){
    if(err)console.log("err saving time" + err);
    else console.log("time Saved Successfully");
  });
});

router.delete('/Deletetime/:id', function(req, res){
  timeModel.remove({_id: req.params.id},function(err, docs){
    console.log('time Removed Successfully');
  });
});

router.put('/Edittime/:id', function(req, res){
  timeModel.findOneAndUpdate({_id: req.params.id},{$set:{
    timeName: req.body.timeName
  }},function(err, docs){
    if(err){
      console.log('Something Wrong'+err);
    }
  });
  console.log("time Edited Successfully");
});

module.exports = router;
