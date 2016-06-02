var fs = require('fs');
var zlib = require('zlib');

var readStream = fs.createReadStream('input.txt');
var writeStream = fs.createWriteStream('input.txt.gz');
readStream
	.pipe(zlib.createGzip())
	.pipe(writeStream);
console.log("File Compressed");