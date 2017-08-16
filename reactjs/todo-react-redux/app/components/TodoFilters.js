import React from 'react';
import { FILTERS } from '../util/constants';
import { FilterLink } from './FilterLink';

const TodoFilters = ({store}) => (
  <p>
    Show:
    {' '}
    <FilterLink
      store={store}
      filter={FILTERS.ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink
      store={store}
      filter={FILTERS.COMPLETED}>
      Completed
    </FilterLink>
    {', '}
    <FilterLink
      store={store}
      filter={FILTERS.ACTIVE}>
      Active
    </FilterLink>
  </p>
);
export { TodoFilters };