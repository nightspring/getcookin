var express = require('express');
var session = require('express-session');
var passport = require("passport");
var db = require("./db");
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require("./passport");

var index = require('./routes/index');
var recipes = require('./routes/recipes');
var cookbook = require('./routes/cookbook');
var authRoutes = require('./routes/auth');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session and passport
app.use(session({ secret: "bitcoin to the moon", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

//basic routes
app.use(authRoutes);
app.use(api);
app.use('/', index);
app.get('/recipes', recipes);
app.get('/cookbook', cookbook);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
