var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('connection', function() {
	console.log('connection successful.');
	eventEmitter.emit('data_retreived');
});

eventEmitter.on('data_retreived', function() {
	console.log('data retreived successfully.');
});

eventEmitter.emit('connection');

console.log("Program Ended.");