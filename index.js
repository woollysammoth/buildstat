var express = require('express'),
	mongoose = require("mongoose"),
	User = require('./api/models/user'),
	app = express();

app.get('/', function(req, res) {
	res.send("woot!");
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