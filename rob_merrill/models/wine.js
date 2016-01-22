const mongoose = require('mongoose');

var wineSchema = new mongoose.Schema({
  name: String,
  style: String,
  ibu: Number
});

module.exports = exports = mongoose.model('Wine', wineSchema);
