import React from 'react';
import { AddTodo } from './AddTodo';
import { VisibleTodoList } from './VisibleTodoList';
import { TodoFilters } from './TodoFilters';

const TodoApp = ({ store }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <AddTodo store={store}/>
      <VisibleTodoList store={store}/>
      <TodoFilters store={store}/>
    </div>
  );
};
export { TodoApp };