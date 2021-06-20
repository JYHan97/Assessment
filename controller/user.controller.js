const mongoose = require('mongoose');
const User = mongoose.model('users');
const AppError = require('../utils/AppError');

exports.addOne = async (req, res) => {
  // collect data from request body
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

  // Check if user already exist in DB
  // By firstName + lastName + Address1 + zip
  await User.find({ firstName: userInfo.firstName, lastName: userInfo.lastName, addressOne: userInfo.addressOne, zip: userInfo.zip })
    .then(user => {
      if (user.length > 0) {
        throw new AppError(401, 'User already exist')
      }
    })
  const newUser = new User(userInfo);
  await newUser.save();

};

exports.findAll = async (req, res) => {
  return await User.find().sort({ 'createAt': -1 })
};

exports.findSome = async (req, res) => {
  const { key, value } = req.query;
  const query = {};
  query[key] = value
  return await User.find(query).sort({ 'createAt': -1 })
}
