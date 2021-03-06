const keys = require('./config/keys');
const PORT = process.env.PORT || 5000;
// Express
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.set('view engine', 'ejs');


// DataBase
const mongoose = require('mongoose');
require('./models/User');

// Routes
require("./routes/routes")(app)

// Error handler
app.use((err, req, res, next) => {
  console.log(err);
  const { statusCode = 500 } = err;
  if (!err.message) {
    err.message = 'Oh No, Something Went Wrong!'
  }
  res.status(statusCode).render('errorPage', { err })
})


mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log("Server is listening port:5000!")
})