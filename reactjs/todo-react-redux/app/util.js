import { FILTERS } from './constants';

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case FILTERS.ACTIVE:
     return todos.filter(todo => !todo.completed);
    case FILTERS.COMPLETED:
     return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
}
export { getVisibleTodos };