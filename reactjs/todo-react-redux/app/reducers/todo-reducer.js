import { FILTERS, ACTIONS } from '../constants';
const todos = (state = [], action) => {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, {
        id: action.id,
        text: action.text,
        completed: false
        }];
    case ACTIONS.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id ? true : false);
    case ACTIONS.TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id === action.id) {
          return {...todo, completed: !todo.completed};
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
  return state;
}

export { todos };