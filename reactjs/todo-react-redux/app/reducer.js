import { FILTERS, ACTIONS } from './constants';
const todoReducer = (
  state = {
    todos: [],
    filter: FILTERS.ALL
    },
  action
) => {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return Object.assign(
        {}, 
        state, 
        {
          todos: state.todos.concat([{
            id: action.id,
            text: action.text,
            completed: false
          }])
        }
      );
    case ACTIONS.REMOVE_TODO:
      return Object.assign(
        {}, 
        state, 
        {
          todos: state.todos.filter(todo => todo.id !== action.id?true: false)
        }
      );
    case ACTIONS.TOGGLE_TODO:
      let todos = state.todos.map(todo => {
        if(todo.id === action.id) {
          return toggleTodo(todo);
        } else {
          return todo;
        }
      });
      return Object.assign(
        {}, 
        state,
        {
          todos: todos
        }
      );
    case ACTIONS.CHANGE_FILTER:
      return Object.assign({}, state, {filter: action.filter});
    default:
      return state;
  }
  return state;
}

const toggleTodo = (todo) => {
  return Object.assign({}, todo, {completed: !todo.completed});
}

export { toggleTodo, todoReducer };