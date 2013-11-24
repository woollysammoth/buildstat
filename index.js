var express = require('express'),
	mongo = require("mongoose"),
	User = require('./api/models/user'),
	Stat = require('./api/models/stat'),
	app = express();

mongo.connect("mongodb://localhost/buildstat");

function find(collec, query, callback) {
	mongo.db[collec].find(query).toArray(callback);
}

app.get('/', function(req, res) {
	res.send("woot!");
});

app.get('/user/:username', function(req, res) {
	console.log(User);
	User.findOne({
		name: req.params.username
	}, function(err, user) {
		if (!err) {
			res.json(200, user);
		} else {
			res.json(500, {
				message: err
			});
		}
	});
});

app.get('/projects/:project/stat', function() {
	var stat = new Stat({
		projectName: "buildstat"
	});

	stat.save(function(err, result) {
		if (err) throw err;

		res.json({
			data: result
		});
	});
});

app.get('/projects/:project/stats', function(req, res) {
	Stat.find({
		project: req.params.project
	}, function(err, stats) {
		if (!err) {
			res.json(200, stats);
		} else {
			res.json(500, {
				message: err
			});
		}
	});
});

app.get('/api/user/create', function(req, res) {
	var user = new User({
		name: "Sam",
		email: "sam@learnvest.com"
	});

	user.setPassword('test');

	user.save(function(err, result) {
		if (err) throw err;

		res.json({
			data: result
		});
	});
});

app.listen(4000);