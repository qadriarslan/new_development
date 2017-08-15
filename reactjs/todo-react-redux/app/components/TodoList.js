import React from 'react';
import { ACTIONS } from '../util/constants';
import { getVisibleTodos } from '../util/todo-util';
import { TodoItem } from './TodoItem';

class TodoList extends React.Component {
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
    const filter = store.getState().filter;
    const visibleTodos = getVisibleTodos(todos, filter)
      .map(todo =>
        <TodoItem 
          key={todo.id} 
          todo={todo}
          onClick={this.onTodoClick.bind(this)}
          onDelete={this.onTodoDelete.bind(this)} />
      );

    return (
      <ul>
        {visibleTodos}
      </ul>
    );
  }
}
export { TodoList };