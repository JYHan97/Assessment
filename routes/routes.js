const userController = require('../controller/user.controller');

module.exports = (app) => {
  // register a new user
  app.get('/user/register', (req, res) => {
    res.render('register.ejs');
  });

  app.post('/user/register', (req, res) => {
    userController.addOne(req.body)
      .then(() => {
        res.render('confirmation');
      })
      .catch(err => {
        console.log(err)
      })
  });

  // Get admin report
  app.get('/admin/report', (req, res) => {
    userController.findAll()
      .then(users => {
        console.log(users)
        res.render('admin', { users })
      })
      .catch(err => next(err));
  });

  // others 
  app.get("*", (req, res) => {
    res.send("Hi there! You might get lost :(")
  });
}

