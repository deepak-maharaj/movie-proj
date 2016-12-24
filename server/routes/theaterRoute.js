var express = require('express');
var router = express.Router();
var theaterModel = require('../models/theater');

router.get('/Gettheater', function(req, res) {
  theaterModel.find({},function(err, docs){
    res.json(docs);
  });
});

router.post('/Addtheater', function(req, res){
  var theater = new theaterModel({
      theaterName: req.body.theaterName,
      cityName: req.body.cityName
  });
  theater.save(function(err, docs){
    if(err)console.log("err saving theater" + err);
    else console.log("theater Saved Successfully");
  });
});

router.delete('/Deletetheater/:id', function(req, res){
  theaterModel.remove({_id: req.params.id},function(err, docs){
    console.log('theater Removed Successfully');
  });
});

router.put('/Edittheater/:id', function(req, res){
  theaterModel.findOneAndUpdate({_id: req.params.id},{$set:{
    theaterName: req.body.theaterName,
    cityName: req.body.cityName
  }},function(err, docs){
    if(err){
      console.log('Something Wrong'+err);
    }
  });
  console.log("theater Edited Successfully");
});

module.exports = router;
