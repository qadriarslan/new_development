import { FILTERS } from './constants';

const filterTodos = (todos, activeFilter) => {
  switch(activeFilter) {
    case FILTERS.ACTIVE:
     return todos.filter(todo => !todo.completed);
    case FILTERS.COMPLETED:
     return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
}
export { filterTodos };