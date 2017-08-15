import { FILTERS, ACTIONS } from '../util/constants';
const filter = (
  state = FILTERS.ALL,
  action
) => {
  switch(action.type) {
    case ACTIONS.CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
  return state;
}

export { filter };