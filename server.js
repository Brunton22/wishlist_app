//modules ----------------------------------------

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = express.Router();

//configuration -------------------------------

//database config

//database location
var db = 'mongodb://localhost/ps4games';

//connect to mongoDB database
mongoose.connect(db);

var port = process.env.PORT || 8080;

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/build/')); // set the static files location /public/img will be /img for users

// routes
require('./server/routes')(app);

app.listen(port);
console.log('listening on port ' + port);
exports = module.exports = app; 	
