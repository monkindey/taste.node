/**
 * @author monkindey
 * @date 2015.10.30
 * @网络爬虫 搞下cnode
 */
'use strict'

var wget = require('./lib/wget.js').wget;
var config = require('./config');
var cheerio = require('cheerio');

wget(config.url, function(html) {
	var $ = cheerio.load(html);
	$('#topic_list .cell').each(function(_, value) {
		console.log($(value).find('.topic_title').attr('title'));
	});
});