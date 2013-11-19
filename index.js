var express = require('express'),
	mongoose = require("mongoose"),
	User = require('./api/models/user'),
	app = express.createServer();

app.get('/', function(req, res) {
	res.send("woot!");
});

app.get('/api/user/create/:name/:email', function(req, res) {
	var user = new User({
		name: req.param.name,
		email: req.param.email
	});

	user.setPassword('test');

	user.save(function(err, result) {
		if (err) throw err;
	});
});

app.listen(4000);