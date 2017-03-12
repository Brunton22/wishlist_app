var express = require('express');
var router = express.Router();
var PS4Game = require ('./game_model');

//url where function takes place
router.route('/games')

.get(function(req, res){
	PS4Game.find(function(err, PS4Games) {
		if (err)
			res.send(err)

		res.json(PS4Games);
		console.log(PS4Games);
	});
});

module.exports = router;