const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  addressOne: {
    type: String,
    required: true
  },
  addressTwo: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: true
  },
  state:
  {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true,
    default: 'US'
  },
  createAt: {
    type: Date,
    required: true
  },
});

mongoose.model('users', userSchema);