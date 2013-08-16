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
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/public/views');
app.set('view engine', 'jade');
app.set('title', 'Recordspaces.com - organize your docs!');

// setting application behaviour
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

