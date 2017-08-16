import React from 'react';
import { connect } from 'react-redux';
import { Link } from './Link';
import { changeFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(changeFilter(ownProps.filter));
    }
  };
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export { FilterLink };