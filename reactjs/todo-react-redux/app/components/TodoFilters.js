import React from 'react';
import { FILTERS, ACTIONS } from '../util/constants';
import { FilterLink } from './FilterLink';

const TodoFilters = ({
  activeFilter,
  onFilterClick
}) => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter={FILTERS.ALL}
      activeFilter={activeFilter}
      onClick={onFilterClick}>
      All
    </FilterLink>
    {', '}
    <FilterLink
      filter={FILTERS.COMPLETED}
      activeFilter={activeFilter}
      onClick={onFilterClick}>
      Completed
    </FilterLink>
    {', '}
    <FilterLink
      filter={FILTERS.ACTIVE}
      activeFilter={activeFilter}
      onClick={onFilterClick}>
      Active
    </FilterLink>
  </p>
);
export { TodoFilters };