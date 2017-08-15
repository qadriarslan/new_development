import { combineReducers } from 'redux';
// import { combineReducers } from './combineReducers';
import { FILTERS } from '../util/constants';
import { todos } from './todo-reducer';
import { filter } from './filter-reducer';

const todoReducer = combineReducers({todos, filter});

export { todoReducer };