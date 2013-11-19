var express = require('express'),
	app = express.createServer();

app.get('/user/create/:name/:email', function(req, res) {
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