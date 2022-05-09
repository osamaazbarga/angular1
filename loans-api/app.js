var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors =require('cors')

var mongoose=require('mongoose');

mongoose.connect('mongodb+srv://osama-admin:315454199@cluster0.inddq.mongodb.net/Angulartest?retryWrites=true&w=majority')

var indexRouter = require('./routes/index');


var customersRouter = require('./routes/customers.routes');
var auditRouter = require('./routes/audit.routes');
var invoicesRouter = require('./routes/invoices.routes');
var loansRouter = require('./routes/loans.routes');
var paymentsRouter = require('./routes/payments.routes');
var settingsRouter = require('./routes/settings.routes');
var usersRouter = require('./routes/users.routes');



var app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/customers', customersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
