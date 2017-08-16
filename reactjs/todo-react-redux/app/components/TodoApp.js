import React from 'react';
import { AddTodo } from './AddTodo';
import { VisibleTodoList } from './VisibleTodoList';
import { TodoFilters } from './TodoFilters';

const TodoApp = () => {
  return (
    <div>
      <h2>Todo List</h2>
      <AddTodo />
      <VisibleTodoList />
      <TodoFilters />
    </div>
  );
};
export { TodoApp };