import React from 'react';
import { FILTERS, ACTIONS } from '../constants';
import { FilterLink } from './FilterLink';

class TodoFilters extends React.Component {
  onFilterClick(filter) {
    const { store } = this.props;
    const action = {
      type: ACTIONS.CHANGE_FILTER, 
      filter: filter
    };
    store.dispatch(action);
  }
  
  render() {
    const { store } = this.props;
    const activeFilter = store.getState().filter;
    return (
      <div>
        Show:
        {' '}
        <FilterLink
          filter={FILTERS.ALL}
          activeFilter={activeFilter}
          onClick={this.onFilterClick.bind(this)}>
          All
        </FilterLink>
        {', '}
        <FilterLink
          filter={FILTERS.COMPLETED}
          activeFilter={activeFilter}
          onClick={this.onFilterClick.bind(this)}>
          Completed
        </FilterLink>
        {', '}
        <FilterLink
          filter={FILTERS.ACTIVE}
          activeFilter={activeFilter}
          onClick={this.onFilterClick.bind(this)}>
          Active
        </FilterLink>
      </div>
    );
  }
}
export { TodoFilters };