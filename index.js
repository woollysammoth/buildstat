var express = require('express'),
	mongoose = require("mongoose"),
	User = require('./api/models/user'),
	app = express();

function find(collec, query, callback) {
	mongoose.connection.db.collection(collec, function(err, collection) {
		collection.find(query).toArray(callback);
	});
}

app.get('/', function(req, res) {
	res.send("woot!");
});

app.get('/user/:name', function(req, res) {
	find("users", {
		name: req.query.name
	}, function(data) {
		req.send(data);
	});
});

app.get('/api/user/create', function(req, res) {
	var user = new User({
		name: "Sam",
		email: "sam@learnvest.com"
	});

	user.setPassword('test');

	res.json({
		data: user
	});

	user.save(function(err, result) {
		if (err) throw err;
	});
});

app.listen(4000);