import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';

import { TodoApp } from './components/TodoApp';
import { FILTERS, ACTIONS } from './util/constants';
import { todoReducer } from './reducers/reducer';
import { loadState, saveState } from './util/local-storage';

const persistedState = loadState();
const store = createStore(todoReducer, persistedState);
store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);