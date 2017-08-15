import React from 'react';
import { FILTERS, ACTIONS } from '../util/constants';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';
import { TodoFilters } from './TodoFilters';

class TodoApp extends React.Component {
  render() {
    const { store } = this.props;
    const state = store.getState();
    return (
      <div>
        <h2>Todo List</h2>
        <AddTodo store={store}/>
        <TodoList store={store}/>
        <TodoFilters store={store}/>
      </div>
    );
  }
}
export { TodoApp };