import React from 'react';
import { ACTIONS } from '../util/constants';
import { Link } from './Link'

class FilterLink extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const {store, filter, children} = this.props;
    const activeFilter = store.getState().filter;
    return (
      <Link
        active={filter === activeFilter}
        onClick={() => {
          store.dispatch({
            type: ACTIONS.CHANGE_FILTER,
            filter: filter
          })
        }}
      >
        {children}
      </Link>
    );
  }
}
export { FilterLink };