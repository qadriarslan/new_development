var fs = require('fs');
var zlib = require('zlib');

var readStream = fs.createReadStream('input.txt.gz');
var writeStream = fs.createWriteStream('output_2.txt');
readStream
	.pipe(zlib.createGunzip())
	.pipe(writeStream);
console.log("File Uncompressed");