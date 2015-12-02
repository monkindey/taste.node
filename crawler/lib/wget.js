/**
 * @author monkindey
 * @date 2015.10.30
 * @网络下载
 */
'use strict'

var https = require('https');
var url = require('url');
var http = require('http');

function wget(site, callback) {
	var protocol = url.parse(site).protocol;
	var proxy = protocol == 'http' ? http : https;
	proxy.get(site, function(res) {
		var html = '';
		res.on('data', function(chunk) {
			html += chunk;
		});
		res.on('end', function() {
			callback(html);
		})
	}).on('error', function(e) {
		console.log(e.message);
	})
}

exports.wget = wget