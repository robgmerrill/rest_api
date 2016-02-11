const mongoose = require('mongoose');

var brewerSchema = new mongoose.Schema({
  name: String,
  style: String,
  ibu: Number
});

module.exports = exports = mongoose.model('Brewer', brewerSchema);
