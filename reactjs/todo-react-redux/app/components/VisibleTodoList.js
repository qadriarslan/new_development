import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import { FILTERS, ACTIONS } from '../util/constants';
import { getVisibleTodos } from '../util/todo-util';
import { TodoList } from './TodoList';

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.filter
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick(todoId) {
      dispatch(toggleTodo(todoId));
    },
    onTodoDelete(todoId) {
      dispatch(deleteTodo(todoId));
    }
  };
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export { VisibleTodoList };