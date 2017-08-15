import { FILTERS, ACTIONS } from '../util/constants';

const todo = (state, action) => {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case ACTIONS.TOGGLE_TODO:
      if(state.id === action.id) {
        return {...state, completed: !state.completed};
      }
      return state;
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, todo(undefined, action)];
    case ACTIONS.REMOVE_TODO:
      return state.filter(t => t.id !== action.id ? true : false);
    case ACTIONS.TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export { todos };