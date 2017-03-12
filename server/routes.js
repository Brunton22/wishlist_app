module.exports = function(app) {

	//server routes

	var express = require('express');
	var router = express.Router();

	app.use('/api', require('./games/games') );

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./build/index.html');
	});
}