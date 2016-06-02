var fs = require('fs');

var data = 'Hello Rozi!!';
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data);
writeStream.end();

writeStream.on('finish', function() {
	console.log('Finished!!');
});

writeStream.on('error', function(err) {
	console.log(err.stack);
});
