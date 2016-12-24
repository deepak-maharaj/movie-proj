var mongoose = require('mongoose');

var citySchema = mongoose.Schema({
  CityName: String
});

var City = mongoose.model('City', citySchema, 'City');

module.exports = City;
