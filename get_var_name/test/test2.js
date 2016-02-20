/**
 * iconv-lite 解决乱码
 */

'use strict'
// console.log(process.env);

var fs = require('fs');
var childProcess = require('child_process');
var iconv = require('iconv-lite');
var util = require('util');

// var r = fs.createReadStream('file.txt');
// var w = fs.createWriteStream('write.txt');

// r.pipe(w);
// console.log(process.hrtime());

var ping = childProcess.spawn('ping', ['www.baidu.com']);

ping.stdout.on('data', function(data) {
	// console.log('stdout: ' + iconv.decode(data, 'gbk'));
});

// process.on('beforeExit', function() {
// 	console.log('beforeExit');
// });

var ENV = process.env;

for (var prop in ENV) {
	console.log(prop.toLowerCase(), ': ', ENV[prop]);
}

console.log('process.title: ' + process.title);

// console.log(process.env);

console.log('Starting directory: ' + process.cwd());
try {
	process.chdir('../tmp');
	console.log('Starting directory: ' + process.cwd());
}catch(e) {
	console.log('chdir: ' + e);
}

console.log('process.version: ' + process.version);
console.log(process.pid);
console.log('This processor architecture is ' + process.arch);
console.log('This platform is ' + process.platform);

var memoryUsage = process.memoryUsage();
console.log(memoryUsage.heapUsed / memoryUsage.heapTotal);
console.log(process.mainModule);

console.log('start');
process.nextTick(function() {
	console.log('nextTick callback');
});

console.log('scheduled');
// process.exit();