const mongoose = require('mongoose');
const User = mongoose.model('users');

exports.addOne = async (req) => {
  const userInfo = {
    firstName: req.firstName,
    lastName: req.lastName,
    addressOne: req.addressOne,
    addressTwo: req.addressTwo,
    city: req.city,
    state: req.state,
    zip: req.zip,
    createAt: req.createAt != undefined ? new Date(req.createAt) : new Date()
  }

  // console.log(userInfo);

  const newUser = new User(userInfo);
  await newUser.save();
};

exports.findAll = async (req, res) => {
  return await User.find().sort({ 'createAt': -1 })
};
