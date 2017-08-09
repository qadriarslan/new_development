import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import { Counter } from './components';
import { counter } from './reducers';
import { incrementAction, decrementAction } from './actions';

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
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);