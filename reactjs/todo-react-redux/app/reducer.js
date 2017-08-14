import { combineReducers } from 'redux';

import { FILTERS } from './constants';
import { todos } from './reducers/todo-reducer';
import { filter } from './reducers/filter-reducer';

// const todoReducer = combineReducers(todos, filter);

const todoReducer = (
  state = {
    todos: [],
    filter: FILTERS.ALL
  },
  action
) => {
  return {
    todos: todos(state.todos, action),
    filter: filter(state.filter, action)
  };
};

export { todoReducer };