import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { TodoApp } from './components/TodoApp';
import { FILTERS, ACTIONS } from './util/constants';
import { todoReducer } from './reducers/reducer';

const store = createStore(todoReducer);

ReactDOM.render(
  <TodoApp store={store} />,
  document.getElementById('app')
);

store.dispatch({type: ACTIONS.ADD_TODO, id: 1, text: 'MY TODO 1'});
store.dispatch({type: ACTIONS.ADD_TODO, id: 2, text: 'MY TODO 2'});
store.dispatch({type: ACTIONS.TOGGLE_TODO, id: 2});