var mongoose = require('mongoose');

var timeSchema = mongoose.Schema({
  timeName: String
});

var time = mongoose.model('time', timeSchema, 'time');

module.exports = time;
