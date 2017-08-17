import { ACTIONS } from './util/constants';

const addTodo = (text) => {
  return {
    type: ACTIONS.ADD_TODO,
    id: Date.now(),
    text
  };
};

const toggleTodo = (id) => ({
  type: ACTIONS.TOGGLE_TODO,
  id
});

const deleteTodo = (id) => ({
  type: ACTIONS.REMOVE_TODO,
  id
});

const changeFilter = (filter) => ({
  type: ACTIONS.CHANGE_FILTER,
  filter
});

export { addTodo, toggleTodo, deleteTodo, changeFilter };