const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  addressOne: String,
  addressTwo: String,
  city: String,
  state: String,
  zip: String,
  country: String,
  timeStamp: Date
})

mongoose.model('users', userSchema);