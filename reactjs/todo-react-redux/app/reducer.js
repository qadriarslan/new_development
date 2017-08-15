import { combineReducers } from 'redux';
// import { combineReducers } from './reducers/combineReducers';
import { FILTERS } from './constants';
import { todos } from './reducers/todo-reducer';
import { filter } from './reducers/filter-reducer';

const todoReducer = combineReducers({todos, filter});

export { todoReducer };