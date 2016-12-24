var express = require('express');
var router = express.Router();
var CityModel = require('../models/city');

router.get('/GetCity', function(req, res) {
  CityModel.find({},function(err, docs){
    res.json(docs);
  });
});

router.post('/AddCity', function(req, res){
  var City = new CityModel({
      CityName: req.body.CityName
  });
  City.save(function(err, docs){
    if(err)console.log("err saving City" + err);
    else console.log("City Saved Successfully");
  });
});

router.delete('/DeleteCity/:id', function(req, res){
  CityModel.remove({_id: req.params.id},function(err, docs){
    console.log('City Removed Successfully');
  });
});

router.put('/EditCity/:id', function(req, res){
  CityModel.findOneAndUpdate({_id: req.params.id},{$set:{
    CityName: req.body.CityName
  }},function(err, docs){
    if(err){
      console.log('Something Wrong'+err);
    }
  });
  console.log("City Edited Successfully");
});

module.exports = router;
