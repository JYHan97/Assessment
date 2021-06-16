const mongoose = require('mongoose');
const User = mongoose.model('users');

exports.addOne = (req, res) => {
  const firstName = req.firstName;
  const lastName = req.lastName;

  const newUser = new User({ firstName: firstName, lastName: lastName });

  newUser.save((err) => {
    err ? console.log(err) : res.send('Successfully Created User');
  });
};

exports.findAll = (req, res) => {
  User.find().then((users) => {
    console.log(users)
  })
};