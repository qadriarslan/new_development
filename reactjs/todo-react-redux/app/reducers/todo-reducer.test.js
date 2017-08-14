import deepFreeze from 'deep-freeze';
import { todos } from './todo-reducer';
import { FILTERS, ACTIONS } from '../constants';

test('add a todo', () => {
  const beforeState = [];
  const action = {
    type: ACTIONS.ADD_TODO, 
    id: 1, 
    text: 'MY TODO 1'
  };
  const afterState = [
    {id: 1, text: 'MY TODO 1', completed: false}
  ];
  deepFreeze(beforeState);

  expect(
    todos(beforeState, action)
  ).toEqual(afterState)
});

test('add another todo', () => {
  const beforeState = [
    {id: 1, text: 'MY TODO 1', completed: false}
  ];
  const action = {
    type: ACTIONS.ADD_TODO, 
    id: 2, 
    text: 'MY TODO 2'
  };
  const afterState = [
    {id: 1, text: 'MY TODO 1', completed: false},
    {id: 2, text: 'MY TODO 2', completed: false}
  ];
  deepFreeze(beforeState);

  expect(
    todos(beforeState, action)
  ).toEqual(afterState)
});

test('toggle todo', () => {
  const beforeState = [
    {id: 1, text: 'MY TODO 1', completed: false},
    {id: 2, text: 'MY TODO 2', completed: false}
  ];
  const action = {
    type: ACTIONS.TOGGLE_TODO,
    id: 1
  };
  const afterState = [
    {id: 1, text: 'MY TODO 1', completed: true},
    {id: 2, text: 'MY TODO 2', completed: false}
  ];
  deepFreeze(beforeState);
  expect(
    todos(beforeState,action)
  ).toEqual(afterState)
});

test('remove todo', () => {
  const beforeState = [
    {id: 1, text: 'MY TODO 1', completed: true},
    {id: 2, text: 'MY TODO 2', completed: false},
    {id: 3, text: 'MY TODO 3', completed: false}
  ];
  const action = {
    type: ACTIONS.REMOVE_TODO, 
    id: 2
  };
  const afterState = [
    {id: 1, text: 'MY TODO 1', completed: true},
    {id: 3, text: 'MY TODO 3', completed: false}
  ];
  deepFreeze(beforeState);
  expect(
    todos(beforeState, action)
  ).toEqual(afterState)
});
