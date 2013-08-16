/* 
 * Recordspaces main applications file
 * 
 * DLH - 16.08.2013
 */

/**
 * Module dependencies.
 */

var express = require('express')
  , backbone = require('backbone')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.configure(function () {
	app.set('port', process.env.PORT || 3000);
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.set('title', 'Recordspaces.com - organize your docs!');
	app.use(express.static(path.join(__dirname, 'pub')));
	app.use(express.favicon());
	console.log("App config");
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/index', routes.index);  // to use for backend operations on MongoDB, etc.

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

