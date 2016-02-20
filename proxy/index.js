'use strict';

var express = require('express');
var request = require('request');
var app = express();

var DOUBAN_URL = 'https://api.douban.com/v2/user/monkindey';

app.use(express.static('static'));

app.get('/douban', function(req, res) {
	request(DOUBAN_URL, function(err, response, body) {
		res.end(body);
	})
});


app.listen('2345');