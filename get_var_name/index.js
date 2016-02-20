/**
 * @author monkindey
 * @date 2015.12.2
 * @description 获取js文件的变量名
 */
'use strict'

var fs = require('fs');
var glob = require('glob');
var config = require('./config');
var async = require('async');

// 获取js的变量名
function getVarName(content) {
	var varNameRegex = /(?:^|;|\r|\n)\s*var\s*(.*)\s*=/g;
	var varNames = [];

	content = removeComment(content);
	content.replace(varNameRegex, function(match, $1) {
		varNames.push($1);
	});
	console.log(varNames);
}

// 去掉注释
function removeComment(content) {
	var commentRegex = /(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g;
	var blockCommentRegex = /(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g;
	content = content.replace(commentRegex, '')
		.replace(blockCommentRegex, '');

	return content;
}

/**
 * 需要让 fs.readFile 支持可以读取两个或多个文件
 * 现在有需求是执行操作所有的文件，然后再操作.
 */
glob(config.FILE_PATH, function(er, files) {
	var content = '';

	// 版本一
	var len = files.length - 1;
	files.forEach(function(filePath, index) {
		console.log(process.hrtime() + '.........' + index);
		fs.readFile(filePath, 'utf-8', function(err, data) {
			console.log(process.hrtime() + '.........' + 'readFile' + '....' + index);
			content += data;
			if (index == len) {
				console.log(getVarName(content));
			}
		});
	});
	// 期待版本二
})