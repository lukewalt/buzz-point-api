'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/');

const app = express();

app.use(bodyParser.json())

//establishes root of api and takes routes as an argument to access index file and all child files below
app.use('/api', routes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// this will handle errors as we test and develop
if (app.get('env') === 'development' || app.get('env') === 'test') {
  app.use((err, req, res, next) => {
    console.log('ERROR! : ', err);
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err

    })
  })
}

// establish server in process obj
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port} in env: ${process.env.NODE_ENV}`);
});


// export app to run unit and integration tests
module.exports = app;
