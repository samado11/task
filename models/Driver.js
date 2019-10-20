const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DriverSchema = new Schema({

  name: {
    type: String,
    required: true
  },


});

const Driver = mongoose.model('Driver', DriverSchema);

module.exports = Driver;
