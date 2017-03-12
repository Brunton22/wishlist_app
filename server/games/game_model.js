var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//model for Schema called newSchema
var games = new Schema({
	name: String,
	completed: Boolean,
	wishlist: Boolean
}, {collection: 'games'});								

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('ps4Games', games);