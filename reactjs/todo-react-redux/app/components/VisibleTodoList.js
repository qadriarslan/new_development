import React from 'react';
import PropTypes from 'prop-types';
import { FILTERS, ACTIONS } from '../util/constants';
import { getVisibleTodos } from '../util/todo-util';
import { TodoList } from './TodoList';

class VisibleTodoList extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const state = store.getState();

    const onTodoClick = todoId =>
      store.dispatch({
        type: ACTIONS.TOGGLE_TODO,
        id: todoId
      });

    const onTodoDelete = todoId => (
      store.dispatch({
        type: ACTIONS.REMOVE_TODO,
        id: todoId
      })
    );

    return (
      <TodoList
        todos={getVisibleTodos(state.todos, state.filter)}
        onTodoClick={onTodoClick}
        onTodoDelete={onTodoDelete}
      />
    )
  }
}

VisibleTodoList.contextTypes = {
  store: PropTypes.object
};

export { VisibleTodoList };