var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Jack = require("./models/jack");

const connectionString =  
process.env.MONGO_CON; 
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  
{useNewUrlParser: true, 
useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jackRouter = require('./routes/jack');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jack', jackRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/', resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

async function recreateDB(){ 
  // Delete everything 
  await Jack.deleteMany(); 
 
  let instance1 = new Jack({
    Itemname:"jackdaniels cap",  
    Quantity:20, 
    price:200
  }); 

  let instance2 = new Jack({
    Itemname:"jackdaniels jacket",  
    Quantity:20, 
    price:300
  }); 

  let instance3 = new Jack({
    Itemname:"jackdaniels sweatshirt",  
    Quantity:20, 
    price:500
  }); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 
  instance2.save( function(err,doc) { 
    if(err) return console.error(err); 
    console.log("Second object saved") 
});
instance3.save( function(err,doc) { 
  if(err) return console.error(err); 
  console.log("Third object saved") 
});
} 
 
let reseed = true; 
if (reseed) { recreateDB();}

module.exports = app;
