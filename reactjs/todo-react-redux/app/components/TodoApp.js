import React from 'react';
import { FILTERS, ACTIONS } from '../util/constants';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';
import { TodoFilters } from './TodoFilters';
import { getVisibleTodos } from '../util/todo-util';

class TodoApp extends React.Component {
  render() {
    const { store } = this.props;
    const todos = store.getState().todos;
    const filter = store.getState().filter;
    const visibleTodos = getVisibleTodos(todos, filter);
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
      <div>
        <h2>Todo List</h2>
        <AddTodo store={store}/>
        <TodoList
          todos={visibleTodos}
          onTodoClick={onTodoClick}
          onTodoDelete={onTodoDelete} />
        <TodoFilters store={store}/>
      </div>
    );
  }
}
export { TodoApp };