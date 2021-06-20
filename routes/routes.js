const userController = require('../controller/user.controller');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const { checkSchema, validationResult } = require('express-validator');


// Check userSchema valiation
const registrationSchema = {
  firstName: {
    notEmpty: true,
    errorMessage: "First name cannot be empty"
  },
  lastName: {
    notEmpty: true,
    errorMessage: "Last name cannot be empty"
  },
  addressOne: {
    notEmpty: true,
    errorMessage: "Address line one cannot be empty"
  },
  city: {
    notEmpty: true,
    errorMessage: "City cannot be empty"
  },
  state: {
    notEmpty: true,
    errorMessage: "State cannot be empty"
  },
  zip: {
    isPostalCode: {
      options: 'US'
    },
    errorMessage: "Zip code should be 5 or 9 digit"
  }
}

module.exports = (app) => {
  // Show registration page
  app.get('/user/register', (req, res, next) => {
    res.render('register.ejs');
  });

  // Create a new register record
  app.post('/user/register', checkSchema(registrationSchema), catchAsync(async (req, res, next) => {
    // Check required field and pattern
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new AppError(401, "Invalid input")
    }

    userController.addOne(req.body, res)
      .then(() => {
        res.redirect('/user/confirmation')
      })
      .catch(err => next(err));
    // if the Promise is rejected this will catch it
    process.on('unhandledRejection', error => {
      throw error
    })
  }));

  // 
  app.get('/user/confirmation', (req, res) => {
    res.render('confirmation')
  })

  // Get admin report
  app.get('/admin/report', (req, res, next) => {
    userController.findAll()
      .then(users => {
        res.render('admin', { users })
      })
      .catch(err => next(err));
  });

  // Get admin report by given filter
  app.get('/admin/report/search', (req, res, next) => {
    if (!req.query) {
      throw new AppError(400, "Invalid search")
    }

    userController.findSome(req, res)
      .then(users => {
        res.render('admin', { users })
      })
      .catch(err => next(err));
  })

  // others 
  app.all("*", (req, res, next) => {
    next(new AppError(404, 'Page Not Found'));
  });
}

