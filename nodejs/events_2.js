var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
   	console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
  	console.log('listner2 executed.');
}

var newListenerCallBack = function newListenerCallBack(event, listener) {
	console.log(event);
	console.log(listener);
	console.log('Listener added.');
}

var removeListenerCallBack = function removeListenerCallBack(event, listener) {
	console.log(event);
	console.log(listener);
	console.log('Listener removed.');
}

eventEmitter.on('newListener', newListenerCallBack);
eventEmitter.on('removeListener', removeListenerCallBack);

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");