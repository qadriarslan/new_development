import deepFreeze from 'deep-freeze';
import { filter } from './filter-reducer';
import { FILTERS, ACTIONS } from '../util/constants';

test('change filter', () => { 
  const beforeState = FILTERS.ALL;
  const action = {
    type: ACTIONS.CHANGE_FILTER, 
    filter: FILTERS.COMPLETED
  };
  const afterState = FILTERS.COMPLETED;
  deepFreeze(beforeState);
  expect(
    filter(beforeState, action)
  ).toEqual(afterState)
});