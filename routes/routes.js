const userController = require('../controller/user.controller');

module.exports = (app) => {
  // register a new user
  app.get('/user/register', (req, res) => {
    res.send('Access Rigistration Page');
  });

  app.post('/user/register', (req, res) => {
    // res.send('POST Rigistration Page');
    userController.addOne(req.body, res);
  });

  // Get admin report
  app.get('/admin/report', (req, res) => {
    userController.findAll();
    // res.send('Access Admin Report Page');
  });

  // others 
  app.get("*", (req, res) => {
    res.send("Hi there! You might get lost :(")
  });
}

