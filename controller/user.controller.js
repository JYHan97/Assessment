const mongoose = require('mongoose');
const User = mongoose.model('users');

exports.addOne = async (req) => {
  const userInfo = {
    firstName: req.firstName,
    lastName: req.lastName
  }

  const newUser = new User(userInfo);
  await newUser.save();
};

exports.findAll = async (req, res) => {
  return await User.find()
};
