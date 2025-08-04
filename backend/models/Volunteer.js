const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
