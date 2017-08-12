import React from 'react';
import { ACTIONS } from '../constants';
import { filterTodos } from '../util';
import { TodoItem } from './TodoItem';

class ListTodos extends React.Component {
  onTodoClick(todoId) {
    const { store } = this.props;
    store.dispatch({
      type: ACTIONS.TOGGLE_TODO, 
      id: todoId
    });
  }
  onTodoDelete(todoId) {
    const { store } = this.props;
    store.dispatch({
      type: ACTIONS.REMOVE_TODO, 
      id: todoId
    });
  }
  render() {
    const { store } = this.props;
    const todos = store.getState().todos;
    const activeFilter = store.getState().filter;
    const todosList = filterTodos(todos, activeFilter).map(todo => {
      return (
        <TodoItem 
          key={todo.id} 
          todo={todo}
          onClick={this.onTodoClick.bind(this)}
          onDelete={this.onTodoDelete.bind(this)} />
      );
    });
    return (
      <ul>
        { todosList }
      </ul>
    )
  }
}
export { ListTodos };