var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/msg', function(req, res) {
	var user = {
		name: 'monkindey',
		age: 22
	};

	res.set({
		'Content-Type': 'text/event-stream'
	});

	setInterval(function() {
		res.write("data: " + JSON.stringify(user) + Date.now() + "\n\n");
	}, 1010);
});

app.listen(1010, function() {
	console.log('Server running on port 1010');
})