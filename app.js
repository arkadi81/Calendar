
var express = require('express');

var http = require('http');


var app = express();

var path = require('path');

//var io = require('socket.io').listen(server);
//io.listen(http);

var mysql = require('mysql');

//app.set('port', process.env.PORT || 3000);

// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var server = http.createServer(app).listen(app.get('port'), function(){
//   console.log("Express server listening on port " + app.get('port'));
// });


// new stuff

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'calendar'
});
//connection.connnect();

var routes = require('./routes/index');




var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// make db stuff available to router! this comes before the route lines
app.use(function(req,res,next) {
    req.connection = connection; // req.conn will have mysql stuff
    // this function adds the connection object to every HTTP request (req)
    // that is being made.
    next();
});

app.use('/', routes);
app.use('/add', routes);

// stolen from https://github.com/codeforgeek/socket-notification/blob/master/Server/index.js
// io.on('connection',function(socket){
//     console.log('We have user connected !');
// });

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});


module.exports = app;
