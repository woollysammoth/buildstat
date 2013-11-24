var mongoose = require('mongoose'),
	crypto = require('crypto'),
	uuid = require('node-uuid'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var statSchema = new Schema({
	project: {
		type: String,
		required: true,
		unique: true
	},
	testsPassing: {
		type: Number,
		required: false,
		default: 0
	},
	testsFailing: {
		type: Number,
		required: false,
		default: 0
	},
	totalTests: {
		type: Number,
		required: false,
		default: 0
	}
}, {
	collection: 'stats'
});


mongoose.model('Stat', statSchema);
module.exports = mongoose.model('Stat');