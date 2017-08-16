import React from 'react';
import PropTypes from 'prop-types';
import { ACTIONS } from '../util/constants';
import { Link } from './Link'

class FilterLink extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const { filter, children } = this.props;
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

FilterLink.contextTypes = {
  store: PropTypes.object
};

export { FilterLink };