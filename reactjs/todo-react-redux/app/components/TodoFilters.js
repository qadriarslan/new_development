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
        <FilterLink
          filterText={FILTERS.ALL}
          activeFilter={activeFilter}
          onClick={this.onFilterClick.bind(this)}/>, 
        <FilterLink
          filterText={FILTERS.COMPLETED}
          activeFilter={activeFilter}
          onClick={this.onFilterClick.bind(this)}/>, 
        <FilterLink
          filterText={FILTERS.ACTIVE}
          activeFilter={activeFilter}
          onClick={this.onFilterClick.bind(this)}/>
      </div>
    );
  }
}
export { TodoFilters };