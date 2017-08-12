import React from 'react';
import { FILTERS, ACTIONS } from './constants';
import { AddTodo } from './components/AddTodo';
import { ListTodos } from './components/ListTodos';
import { TodoFilters } from './components/TodoFilters';

class TodoApp extends React.Component {
  render() {
    const { store } = this.props;
    const state = store.getState();
    return (
      <div>
        <h2>Todo List</h2>
        <AddTodo store={store}/>
        <ListTodos store={store}/>
        <TodoFilters store={store}/>
      </div>
    );
  }
}
export { TodoApp };