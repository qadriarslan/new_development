import React from 'react';
import { FILTERS } from '../util/constants';
import { FilterLink } from './FilterLink';

const TodoFilters = () => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter={FILTERS.ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink
      filter={FILTERS.COMPLETED}>
      Completed
    </FilterLink>
    {', '}
    <FilterLink
      filter={FILTERS.ACTIVE}>
      Active
    </FilterLink>
  </p>
);
export { TodoFilters };