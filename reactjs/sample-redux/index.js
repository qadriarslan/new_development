(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _reduxStore = require('./redux-store');

var counter = function counter() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var action = arguments[1];

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}; // import { createStore } from 'redux';


var store = (0, _reduxStore.createStore)(counter);
var render = function render() {
    document.querySelector('#app').innerText = store.getState();
};

store.subscribe(render);
render();

document.querySelector('#increment').addEventListener('click', function () {
    store.dispatch({ type: 'INCREMENT' });
});

document.querySelector('#decrement').addEventListener('click', function () {
    store.dispatch({ type: 'DECREMENT' });
});

},{"./redux-store":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var createStore = function createStore(reducer) {
    var state = void 0;
    var listeners = [];

    var getState = function getState() {
        return state;
    };

    var subscribe = function subscribe(listener) {
        listeners.push(listener);
        return function () {
            listeners = listeners.filter(function (l) {
                return l !== listener;
            });
        };
    };

    var dispatch = function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach(function (listener) {
            return listener();
        });
    };
    dispatch({});
    return { getState: getState, subscribe: subscribe, dispatch: dispatch };
};

exports.createStore = createStore;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtYWluLmpzIiwicmVkdXgtc3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBOztBQUNBLElBQU0sVUFBVSxTQUFWLE9BQVUsR0FBcUI7QUFBQSxRQUFwQixLQUFvQix1RUFBZCxDQUFjO0FBQUEsUUFBWCxNQUFXOztBQUNqQyxZQUFPLE9BQU8sSUFBZDtBQUNJLGFBQUssV0FBTDtBQUNJLG1CQUFPLFFBQVEsQ0FBZjtBQUNKLGFBQUssV0FBTDtBQUNJLG1CQUFPLFFBQVEsQ0FBZjtBQUNKO0FBQ0ksbUJBQU8sS0FBUDtBQU5SO0FBUUgsQ0FURCxDLENBRkE7OztBQWFBLElBQU0sUUFBUSw2QkFBWSxPQUFaLENBQWQ7QUFDQSxJQUFNLFNBQVMsU0FBVCxNQUFTLEdBQU07QUFDakIsYUFBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCLFNBQS9CLEdBQTJDLE1BQU0sUUFBTixFQUEzQztBQUNILENBRkQ7O0FBSUEsTUFBTSxTQUFOLENBQWdCLE1BQWhCO0FBQ0E7O0FBRUEsU0FBUyxhQUFULENBQXVCLFlBQXZCLEVBQXFDLGdCQUFyQyxDQUFzRCxPQUF0RCxFQUErRCxZQUFNO0FBQ2pFLFVBQU0sUUFBTixDQUFlLEVBQUMsTUFBTSxXQUFQLEVBQWY7QUFDSCxDQUZEOztBQUlBLFNBQVMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxnQkFBckMsQ0FBc0QsT0FBdEQsRUFBK0QsWUFBTTtBQUNqRSxVQUFNLFFBQU4sQ0FBZSxFQUFDLE1BQU0sV0FBUCxFQUFmO0FBQ0gsQ0FGRDs7Ozs7Ozs7QUN6QkEsSUFBTSxjQUFjLFNBQWQsV0FBYyxDQUFDLE9BQUQsRUFBYTtBQUM3QixRQUFJLGNBQUo7QUFDQSxRQUFJLFlBQVksRUFBaEI7O0FBRUEsUUFBTSxXQUFXLFNBQVgsUUFBVyxHQUFNO0FBQ25CLGVBQU8sS0FBUDtBQUNILEtBRkQ7O0FBSUEsUUFBTSxZQUFZLFNBQVosU0FBWSxDQUFDLFFBQUQsRUFBYztBQUM1QixrQkFBVSxJQUFWLENBQWUsUUFBZjtBQUNBLGVBQU8sWUFBTTtBQUNULHdCQUFZLFVBQVUsTUFBVixDQUFpQjtBQUFBLHVCQUFLLE1BQU0sUUFBWDtBQUFBLGFBQWpCLENBQVo7QUFDSCxTQUZEO0FBR0gsS0FMRDs7QUFPQSxRQUFNLFdBQVcsU0FBWCxRQUFXLENBQUMsTUFBRCxFQUFZO0FBQ3pCLGdCQUFRLFFBQVEsS0FBUixFQUFlLE1BQWYsQ0FBUjtBQUNBLGtCQUFVLE9BQVYsQ0FBa0I7QUFBQSxtQkFBWSxVQUFaO0FBQUEsU0FBbEI7QUFDSCxLQUhEO0FBSUEsYUFBUyxFQUFUO0FBQ0EsV0FBTyxFQUFDLGtCQUFELEVBQVcsb0JBQVgsRUFBc0Isa0JBQXRCLEVBQVA7QUFDSCxDQXJCRDs7UUF1QlMsVyxHQUFBLFciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAnLi9yZWR1eC1zdG9yZSc7XHJcbmNvbnN0IGNvdW50ZXIgPSAoc3RhdGU9MCwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdJTkNSRU1FTlQnOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgKyAxO1xyXG4gICAgICAgIGNhc2UgJ0RFQ1JFTUVOVCc6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSAtIDE7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGNvdW50ZXIpO1xyXG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykuaW5uZXJUZXh0ID0gc3RvcmUuZ2V0U3RhdGUoKTtcclxufTtcclxuXHJcbnN0b3JlLnN1YnNjcmliZShyZW5kZXIpO1xyXG5yZW5kZXIoKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmNyZW1lbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiAnSU5DUkVNRU5UJ30pO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWNyZW1lbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiAnREVDUkVNRU5UJ30pO1xyXG59KTtcclxuIiwiY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xyXG4gICAgbGV0IHN0YXRlO1xyXG4gICAgbGV0IGxpc3RlbmVycyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyKSA9PiB7XHJcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIobCA9PiBsICE9PSBsaXN0ZW5lcik7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IGxpc3RlbmVyKCkpO1xyXG4gICAgfTtcclxuICAgIGRpc3BhdGNoKHt9KTtcclxuICAgIHJldHVybiB7Z2V0U3RhdGUsIHN1YnNjcmliZSwgZGlzcGF0Y2h9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlU3RvcmUgfTsiXX0=
