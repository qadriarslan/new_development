import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'
import { Counter, CounterApp } from './components'

// Reducer
const counter = (state=0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// Actions
const incrementAction = {type: 'INCREMENT'}
const decrementAction = {type: 'DECREMENT'}

// Store
const store = createStore(counter);

function mapStateToProps(state) {
    return {
        value: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(incrementAction),
        decrement: () => dispatch(decrementAction)
    }
}

// Create connected container
const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);