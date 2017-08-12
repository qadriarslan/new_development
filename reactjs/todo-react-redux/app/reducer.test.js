import deepFreeze from 'deep-freeze';
import { toggleTodo, todoReducer } from './reducer';
import { FILTERS, ACTIONS } from './constants';

test('test toggle todo method', () => {
  const todoBefore = {
    id: 1, 
    text: 'MY TODO 1', 
    completed: false
  };

  const todoAfter = {
    id: 1, 
    text: 'MY TODO 1', 
    completed: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter)
});

test('add a todo', () => {
  const beforeState = {
    todos: [], 
    filter: FILTERS.ALL
  };
  const action = {
    type: ACTIONS.ADD_TODO, 
    id: 1, 
    text: 'MY TODO 1'
  };
  const afterState = {
    todos: [
      {id: 1, text: 'MY TODO 1', completed: false}
    ], 
    filter: FILTERS.ALL
  };
  deepFreeze(beforeState);

  expect(
    todoReducer(beforeState, action)
  ).toEqual(afterState)
});

test('add another todo', () => {
  const beforeState = {
    todos: [
      {id: 1, text: 'MY TODO 1', completed: false}
    ], 
    filter: FILTERS.ALL
  };
  const action = {
    type: ACTIONS.ADD_TODO, 
    id: 2, 
    text: 'MY TODO 2'
  };
  const afterState = {
    todos: [
      {id: 1, text: 'MY TODO 1', completed: false},
      {id: 2, text: 'MY TODO 2', completed: false}
    ], 
    filter: FILTERS.ALL
  };
  deepFreeze(beforeState);

  expect(
    todoReducer(beforeState, action)
  ).toEqual(afterState)
});

test('toggle todo', () => {
  const beforeState = {
    todos: [
      {id: 1, text: 'MY TODO 1', completed: false},
      {id: 2, text: 'MY TODO 2', completed: false}
    ], 
    filter: FILTERS.ALL
  };
  const action = {
    type: ACTIONS.TOGGLE_TODO,
    id: 1
  };
  const afterState = {
    todos: [
      {id: 1, text: 'MY TODO 1', completed: true},
      {id: 2, text: 'MY TODO 2', completed: false}
    ], 
    filter: FILTERS.ALL
  };
  deepFreeze(beforeState);
  expect(
    todoReducer(beforeState,action)
  ).toEqual(afterState)
});

test('remove todo', () => {
  const beforeState = {
    todos: [
      {id: 1, text: 'MY TODO 1', completed: true},
      {id: 2, text: 'MY TODO 2', completed: false},
      {id: 3, text: 'MY TODO 3', completed: false}
    ],
    filter: FILTERS.ALL
  };
  const action = {
    type: ACTIONS.REMOVE_TODO, 
    id: 2
  };
  const afterState = {
    todos: [
      {id: 1, text: 'MY TODO 1', completed: true},
      {id: 3, text: 'MY TODO 3', completed: false}
    ], 
    filter: FILTERS.ALL
  };
  deepFreeze(beforeState);
  expect(
    todoReducer(beforeState, action)
  ).toEqual(afterState)
});

test('change filter', () => { 
  const beforeState = {
    todos: [
      {id: 1, text: 'MY TODO 1', completed: true},
      {id: 2, text: 'MY TODO 2', completed: false},
      {id: 3, text: 'MY TODO 3', completed: false}
    ],
    filter: FILTERS.ALL
  };
  const action = {
    type: ACTIONS.CHANGE_FILTER, 
    filter: FILTERS.COMPLETED
  };
  const afterState = {
    todos: [
      {id: 1, text: 'MY TODO 1', completed: true},
      {id: 2, text: 'MY TODO 2', completed: false},
      {id: 3, text: 'MY TODO 3', completed: false}
    ], 
    filter: FILTERS.COMPLETED
  };
  deepFreeze(beforeState);
  expect(
    todoReducer(beforeState, action)
  ).toEqual(afterState)
});